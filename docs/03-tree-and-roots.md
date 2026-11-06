# 03 · 树体与根系

> 本文解决：树是怎么“长”出来的，种子/枝条/根系/叶片/花/果/雪各自在哪些函数里、有哪些参数，以及改树形时最容易踩的坑。
> 主文档见 [`../DEVELOPMENT.md`](../DEVELOPMENT.md)。
> 最后更新：2026-11-06 · 对应代码：`a99c037`（第二轮优化 · 确定性基线 · 深根水层 · 鸟虫树荫 · 文案对齐）

代码主入口：`src/main.js` 的 `buildTree(seed)`。第二轮后**根系不再用 `g` 驱动，改用 `rootAge = g + 0.30*smoothstep(120,235,t)`**，并被拆到独立的 `rootSub` group。

## 1. 树的生成顺序

`buildTree(seed)` 每次 `plant(seed)` 时调用：

1. 创建 `group` 与 **`rootSub`（根系独立层）**，`group.add(rootSub)`；
2. 生成主干 `spawn(...)` → 递归生成各级枝；
3. 生成根系 `rootChain(...)`（主根 / 侧根 / 板根）与 **第 2 年深扎续根 7 条 + 贴近潜水面的吸水须根 8 条**；
4. 生成根盘 `flare`（LatheGeometry，挂到 `rootSub`）；
5. 生成细根毛 `rootHairs`（LineSegments，按成熟时刻排序，挂到 `rootSub`）；
6. 收集 `leafSites` → 建 `InstancedMesh` 叶片；
7. 生成 56 个果实 + 果柄；
8. 生成春花（最多 1800 个实例）；
9. 生成枝头积雪（按枝条采样，放大到每枝 2–3 簇）；
10. 创建种子（上下两个半球 + 裂缝环）和两片子叶；
11. 返回 `result`，由 `treeRoot.add(group)` 挂到场景。

返回对象包含 `group / rootSub / branches / leaves / leafData / roots / rootHairs / hairThresholds / fruits / stems / fruitData / blossoms / blossomData / snowCaps / snowCapData / seedMesh / seedTop / seedBottom / seedCrack / cotyledons / flare / geos / ...`，`disposeTree()` 负责释放（含 `fruits/stems.dispose()`、`seedMat.map.dispose()`）。

## 1.1 部位拾取标记

为了让课堂模式的「点一点认一认 / 找一找」能识别树体，`buildTree()` 给关键 mesh 写了 `mesh.userData.part`：

| `userData.part` | 对应对象 |
|---|---|
| `seed` | `seedMesh` |
| `root` | 根系每段 Mesh、`flare`、`rootHairs` |
| `trunk` | `branches[0]`（主干） |
| `branch` | `branches[1..]`（侧枝） |
| `leaf` | `leaves` InstancedMesh |
| `cotyledon` | 两片子叶 |
| `flower` | `blossoms` InstancedMesh |
| `fruit` | `fruits`、`stems` InstancedMesh |
| `snow` | `snowCaps` InstancedMesh |

**第二轮新增 `bird` / `insect` 部位**：它们不是 `tree.group` 里的 mesh，而是模块级 `creatureGroup` 的实例。为此：

- `partWorldPoints('bird'/'insect')` 直接读 `birdWorldPoints` / `insectWorldPoints`（`animate()` 每帧由栖息鸟与昆虫的世界位置填充）；
- `partVisibleAt()` 先调用 `partHasVisibleState(part)` 问真实显隐，再叠加章节时间白名单（bird/insect 为 `t 198–220`）；
- `partHasVisibleState('bird')` 检查 `perchBirds.visible && birdWorldPoints.length >= 2`；`insect` 检查 `butterflies.visible && insectWorldPoints.length >= 2`；
- `partWorldPoints('root')` 改用 `tree.rootSub.localToWorld(p)`（根已不在 `tree.group` 的同一坐标系下）；
- `rootHairs.raycast = () => {}`：默认 `Line.threshold = 1` 会让几千段细丝形成覆盖半个剖面的隐形拾取圈。

细节见 [`05-ui-and-audio.md`](05-ui-and-audio.md)。

## 2. 枝条

### 2.1 基本参数

| 参数 | 当前值 | 位置 |
|---|---|---|
| `MAX_DEPTH` | 4 | `buildTree` |
| `DUR` | `[0.24, 0.16, 0.12, 0.08, 0.05]` | 每级枝的生长耗时（`g` 单位） |
| 主干长度 | `randRange(3.15, 3.60)` | `spawn` 调用处 |
| 主干预半径 | `randRange(0.17, 0.21)` | 同上，`gStart = 0.06` |
| 一级侧枝数 | 5 | `sides = depth===0?5:...` |
| 二级侧枝数 | 4 | `side` 表 |
| 三级侧枝数 | 2 | 同上 |
| 四级侧枝数 | 1 | 同上 |
| 下部大枝 | 3 根，从主干 t=0.16–0.42 处发出 | `if (depth===0)` |

每根枝的几何体由 `sweepGeometry(points, radii, radial)` 扫描成管状；`makeBranch()` 生成折线骨架、半径序列和 Mesh。环数/径向分段：`depth 0 → 16/16`，`depth 1 → 11/10`，其它 `7/7`。

### 2.2 生长动画：`growBranch(b, k, fat)`

- `k = smoothstep(b.g0, b.g1, g)`：该枝的局部生长进度（根系改用 `rootAge`）。
- 在 `growBranch` 中：
  - 计算当前可见环 `i0`；
  - `i0` 之后的环全部塌到当前枝尖（`_tip`），形成“枝条越伸越长”的效果；
  - 当前环的半径乘以 `rs = (0.45 + 0.55 * min(1, k*1.7)) * fat`；
  - `fat = 0.18 + 0.82 * smoothstep(0.20, 0.92, g)`：整棵树幼年细、成年粗。
- `growBranch` 有 `lastK/lastFat` 缓存（阈值 0.003 / 0.004），k 不变时跳过顶点重写。

注意：`growBranch` 只改几何顶点，不改变 `mesh.scale`。因此不要再用 `branches[0].mesh.scale.y` 去估算主干高度。

### 2.3 枝的方位

- 一级/二级侧枝按 `(i / sides) * PI * 2 + 随机抖动` 分布，三级以上用纯随机方位；避免完全对称。
- 所有枝条限制在切面后方：`if (d2.z > -0.02) d2.z = -0.02 - rand()*0.15`（顶芽延续枝用 `*0.12`，低垂大枝用 `*0.12`）。**这是剖面表现，第二轮未改动**；根系已放宽 z，枝条仍保持。
- 枝梢有额外叶片（每枝 `8` 片）避免光秃枝尖。
- 末级枝的节疤/树瘤与黄金角分叉仍属剩余打磨项（见 `docs/08` audit-r2），本轮未实现。

## 3. 叶片

### 3.1 叶片数据

`leafSites` 由 `spawn()` 在枝条折线上采样：

```js
leafSites.push({
  pos: p,             // 最终位置
  dir: bladeDir,
  g: gStart + 0.02,   // 叶片开始长大的全局 g（主干梢叶片另用 0.15 + i*0.012）
  stag: rand(),       // 秋色/落叶错峰
  branch: owner,      // 所属枝条对象
  siteT,              // 在该枝条折线上的位置 0..1
  sizeScale
})
```

`buildTree()` 再把 `leafSites` 转成 `leafData`：

- 保存 `branch`、`siteT`、`offset`（最终位置 − 当前枝条点）；
- 每片叶有 `quat/size/autumn/tone/phase/spin`；
- `count = Math.min(leafSites.length, 40000)`，当前树形约 **2.4 万片**（按深度 `[1,9,45,90,90]` 根枝、`[15,42,56,92,148]` 叶位推算）；
- `leafPos.z = Math.min(leafPos.z, -0.03 - rand()*0.12)` 把树冠限制在切面后方，`leafPos.y = Math.max(0.18, …)`。

### 3.2 动态挂点（重点）

`animate()` 中每片叶子：

```js
const branchK = smoothstep(d.branch.g0, d.branch.g1, g);
const reach = smoothstep(max(.02, d.siteT-.06), d.siteT+.06, branchK);
const growK = smoothstep(d.grow, min(1, d.grow+0.10), g) * reach;
if (sc < 0.002) 叶片缩到 0.0001；
else {
  pointOnPolyline(d.branch.pts, min(d.siteT, branchK), _leafP);
  _p.copy(_leafP).add(d.offset);
}
```

叶子只会在枝条长到它所在位置后出现，并跟着枝条当前点移动。`leafAmount = p<0.05 ? smoothstep(0,0.05,p) : 1` 负责春天新叶；`dropT = smoothstep(0.58+stag*0.08, 0.72+stag*0.05, p)` 负责秋天错峰落下。

### 3.3 叶片材质与颜色

- `leafTexture()`：白色叶子底 + 中脉/侧脉；`LEAF_GEO` 为 `PlaneGeometry(1,1.35,2,4)`，带微弯曲。
- `leafMat`：`MeshStandardMaterial`，`alphaTest .38`，双面，`roughness .86`。
- 颜色：嫩绿 `0x4f8a2d` → 深绿 `0x2b5c1e` → 每片叶预设的秋色（`0xe2622a / 0xefb024 / 0xc9302c / 0x9d7b2a`）；每片有 `tone` 明暗变化。
- `blossomF` 固定为 0：**不要重新加「整树白/粉染叶」**。春花是独立的 `MeshBasicMaterial` 小花实例。

### 3.4 叶落与「找一找」可见性

叶落期间树冠叶缩小至 0、飘落粒子由 `fallLeaves` 表现。`partVisibleAt('leaf')` 已加 `p < 0.70` 条件，`partHasVisibleState('leaf')` 同样按 `p<0.70` 判断，秋末/冬季不再把已落光的叶子误判为可找目标。

## 4. 根系（本轮最大改动）

### 4.1 `rootAge`：解开时间轴死锁

```js
// animate()
const rootAge = g + 0.30 * smoothstep(120, 235, t);
```

`g` 在 120s 饱和为 1，旧版所有根的 `g1` 都早于 0.25，导致第 2 年根完全静止。`rootAge` 让根系在 120–235s 继续从 1.00 长到 1.30：

- 根显隐 `k = smoothstep(r.g0, r.g1, rootAge)`；
- `rootFat = 0.22 + 0.78 * smoothstep(0.03, 1.05, rootAge)`（幼根细、老根粗）；
- `rootOld = smoothstep(0.06, 0.85, rootAge)` 驱动根材颜色由浅褐 `0xb59a72 / 0xc6b08a` 渐变到深褐 `0x6f5138 / 0x8d6c4d`；
- 根毛 `setDrawRange`、水层 `waterReveal = smoothstep(0.98, 1.16, rootAge)`、相机 `deepReveal` 全部与它同源。

### 4.2 结构参数

| 参数 | 第二轮最终值 | 旧值 |
|---|---|---|
| `rootChain` 环数 `segs` | `[24, 12, 7, 5]` | `[16, 9, 6, 4]` |
| 径向分段 `radial` | `[12, 8, 6, 4]` | `[10, 7, 5, 4]` |
| `dur` | `[0.025, 0.020, 0.015, 0.010]` | 不变 |
| 侧根数量 | `[14, 3, 1]` | `[12, 3, 2]` |
| 侧根长度 | `len * randRange(0.42, 0.62)` | `0.30–0.55` |
| 子根 `gStart` | `max(0.006, g1 - 0.015 + 0.010*k)`（提前到第 3 章） | `g1 + 0.012*k` |
| 主根 | `gStart 0.022`、长 `4.7–5.5`、`r0 0.165` | `0.012 / 2.8–3.4 / 0.11` |
| 板根 | 8 条、`gStart 0.030`、长 `1.9–2.6`、`r0 0.10` | 6 条 / 0.045 / 1.2–1.7 / 0.075 |
| 根范围 | x `±11`、y 最低 `ROOT_FLOOR=-10.0`、z `0.05–0.62` | x ±8、y ≥-5.8、z 0.035–0.26 |
| 深扎续根 | **7 条**，`g0 1.00+0.012i`、`g1 1.20+0.012i`，18 环、`isTap=true` | 无 |
| 吸水须根 | **8 条**，`g0 1.08+0.012i`、`g1 1.26+0.012i`，10 环，起点 y≈-7.4…-8.5 | 无 |

`rootPath(start, dir, len, r0, segs, wander, isTap)`：

- 低频正弦 + 随机游走生成连续弯曲折线；
- `d.y -= isTap ? (0.006 + 0.020*t) : (0.015 + 0.075*t)`：主根/深扎续根陡直向下，侧根才明显下垂；
- `p.y = Math.max(ROOT_FLOOR, p.y)`、`p.x` 夹 ±11、`p.z = clamp(p.z, 0.05, 0.62)`：根系有前后层次，不再是一张 0.2 厚的纸片；
- 收细 `r0 * (1 - (isTap ? 0.72 : 0.88) * t^0.8)`，最小 `0.0028`。

### 4.3 `rootSub`：深根不摇、不被剖面遮住

- `buildTree()` 里所有根、`flare`、`rootHairs` 都挂到 `rootSub`（`group.add(rootSub)`），而不是 `group`；
- `animate()` 末尾在 `treeRoot.rotation` 之后执行：
  ```js
  if (tree.rootSub) tree.rootSub.quaternion.copy(treeRoot.quaternion).invert();
  ```
  每帧抵销整树摇摆，埋在土里的根不再跟着树冠晃，也不会被 `soilFace` 遮住；
- `partWorldPoints('root')` 因此改用 `rootParent = tree.rootSub || tree.group` 做 `localToWorld`。

### 4.4 细根毛：按成熟时刻逐段显现

- 沿每条根每隔 2 段采样，普通根 3 根毛/点、`g0>=1` 的深根 5 根毛/点，长度 `0.018–0.066`，颜色 `0x9b7f5c`、透明度 `0.42`；
- `rootHairReveal.push(r.g1)` 记录每根细丝所属根的成熟时刻，`hairOrder` 排序后把顶点重排，`hairThresholds` 是排序后的阈值数组；
- `animate()` 用二分查找 `lo`（`hairThresholds[mid] <= rootAge`），`rootHairs.geometry.setDrawRange(0, lo*2)`：仍是 **1 个 draw call**，但早期不再满屏悬浮细线；
- `rootHairs.raycast = () => {}` 避免隐形拾取圈；`rootHairMat` 在 `disposeTree()` 中释放。

### 4.5 视觉原则

- 根要能「撑住」大树：主根粗、板根向外张开、侧根有层级；第 2 年还要继续向含水层深扎。
- 根系现在有 z 体积，但主根仍贴近剖面，保证正面视角可读性。
- 根盘 `flare` 与树干衔接：`LatheGeometry` 剖面 `0.13 + 0.20*(1-t)^1.15`、深 `1.05`，第二轮放大到与加粗后的根匹配。
- 水层视觉（水面反光 / 湿润渐变 / 波纹 / 气泡 / 根尖吸水光点）是**模块级 `waterGroup`**，不随树重建，由 `waterReveal` 驱动；详见 [`04-environment.md`](04-environment.md)。

## 5. 种子与子叶（文案对齐）

### 5.1 种子

- `seedMesh` 是 `THREE.Group`：`seedTop`（上半球）、`seedBottom`（下半球）、`seedCrack`（裂缝环），`position.set(0, 0.055, 0.07)` 为组初值，实际 y 由动画覆盖。
- 尺寸 `scale.set(0.35*seedSwell*seedFade, 0.28*..., 0.46*...)`。
- 动画（`animate()`）：

| 变量 | 公式 | 时间 | 作用 |
|---|---|---|---|
| `seedPlant` | `smoothstep(0, 3, t)` | 0–3 | 从上方落下 |
| `seedSwell` | `1 + 0.14*smoothstep(16, 32, t)` | 16–32 | 吸水膨胀 |
| `seedSplit` | `smoothstep(18, 30, t)` | **18–30** | 上种皮抬起/旋转，第 2 章当章可见「一条缝」 |
| `seedFade` | `1 - smoothstep(66, 80, t)` | 66–80 | 种皮退场 |
| `seedLift` | `smoothstep(56,68,t)*(1-smoothstep(70,80,t))` | 56–80 | 嫩芽顶着种壳钻出地面 |

- `seedMesh.position.y = -0.035 + 0.10*(1-seedPlant) + 0.24*seedLift`：**半埋在土里**（y=-0.035），不再躺在草面。
- `seedCrack.material.opacity = Math.min(1, seedSplit*2.2) * seedFade * 0.92`：**修复了旧版 `(1-seedFade)*…` 导致 t<66 恒为 0、整章看不到裂缝的 bug**。

### 5.2 子叶

- 两片 `LEAF_GEO`，`scale = max(0.001, 0.12*coty)`；
- `coty = smoothstep(0.09, 0.145, g) * (1 - smoothstep(0.28, 0.42, g))`，约 t=64–104 可见，第 5 章末开始枯萎；
- **`m.position.y = 0.12 + 0.25*smoothstep(0.06, 0.16, g)`**：固定在近地面胚轴节点，**不再随 `trunkTop` 被抬到 3 米高的树梢**；
- `m.rotation.z = ±(0.95 - 0.45*coty)`：随 `coty` 慢慢展开；
- `cotyledonMat.color = 0x9fd35e`。`trunkTop` 仍被计算但已 `void trunkTop`，不要重新接回。

## 6. 花、果实、积雪（第二轮窗口）

- **春花**：`BLOSSOM_COUNT = min(1800, floor(leafData.length*0.085))`；`MeshBasicMaterial` + `FLOWER_TEX`，`alphaTest .30`、`opacity` 随 `blossomK`；尺寸 `0.20–0.31`（旧 0.045–0.09），`pos.z += 0.34 + rand()*0.22` 推到叶片前，颜色 `0xffe7f0 / 0xff9ec6`；**`blossomK` 加 `yearIndex >= 2` 门控**，消除旧版第一年 114–123s 的误开花。
- **果实**：`FRUIT_COUNT = 56`，外冠叶位，`size 0.13–0.20`，`pos.z += 0.30 + rand()*0.20` 推到树冠朝镜头一侧；`fruitData` 存 `ripe` 目标色；`animate()` 里 `fruits.setColorAt(i, 0x7fa83a → d.ripe, fruitRipe)` 做青→熟变色；`_p.y = Math.max(0.14, d.pos.y - fruitFall*(1.2+stag*0.9))` **落地不穿土**；`sc` 在 `p 0.74–0.80` 收尾，244s 前落光。
- **枝头积雪**：每条 `depth>=1` 的枝取 `n = depth>=3 ? 3 : 2` 个点，`s = 0.085 + r*2.6`（旧 `0.038 + r*1.8`），`sy = s*0.62`；`snowCapK = smoothstep(0.75,0.85,p)*(1-smoothstep(0.92,0.99,p))`，提前到冬章开头。
- **地面落叶**：`buildGroundLeaves` 1600 片，`carpetFade` 从 p=0.58 连续淡入、`groundLeafDecay` 变暗下沉入土；不再 t=140 一帧 pop、不再 p=0.96 一帧整批消失。

## 7. 修改树体的检查清单

改完后用这些时间点截图（全部加 `&freeze`）：

- `?t0=6`：种子半埋、土粒/草根可读、下半屏不发黑；
- `?t0=20 / 28`：春雨、裂壳一条缝；
- `?t0=44`：主根细、侧根已出、根有体积；
- `?t0=66 / 70`：种壳被顶起、子叶近地面展开；
- `?t0=100`：根系与树干强壮；
- `?t0=120 / 128`：全树、t=120 构图连续；
- `?t0=170`：冬季雪帽与雪；
- `?t0=190`：花簇与蜜蜂；
- `?t0=210`：鸟虫与树荫；
- `?t0=230`：红果；
- `?t0=250`：深根抵达含水层；
- `?t0=259.8`：结尾新芽。

改树体参数时，先确认 `buildTree()` 的 `branches`/`roots` 数量变化没有让 draw calls 失控：本轮基线 `?dbg` → `window.__renderer.info.render.calls = 466`、`triangles ≈ 628574`（预算 450–500 / ≤0.65M）。同时确认 `disposeTree()` 释放了新增的 InstancedMesh 与 CanvasTexture。
