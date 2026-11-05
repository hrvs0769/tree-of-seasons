# 03 · 树体与根系

> 本文解决：树是怎么“长”出来的，种子/枝条/根系/叶片/花/果/雪各自在哪些函数里、有哪些参数，以及改树形时最容易踩的坑。
> 主文档见 [`../DEVELOPMENT.md`](../DEVELOPMENT.md)。

代码主入口：`src/main.js` 的 `buildTree(seed)`（约 `src/main.js:1247` 起）。

## 1. 树的生成顺序

`buildTree(seed)` 每次 `plant(seed)` 时调用：

1. 生成主干 `spawn(...)` → 递归生成各级枝；
2. 生成根系 `rootChain(...)`；
3. 生成根盘 `flare`（LatheGeometry）；
4. 收集 `leafSites` → 建 `InstancedMesh` 叶片；
5. 生成 56 个果实 + 果柄；
6. 生成春花（最多 2400 个实例）；
7. 生成枝头积雪（按枝条采样）；
8. 创建种子（上下两个半球 + 裂缝环）和两片子叶；
9. 返回 `result`，由 `treeRoot.add(group)` 挂到场景。

返回对象包含 `branches/roots/leaves/leafData/fruits/stems/fruitData/blossoms/snowCaps/seedMesh/...`，`disposeTree()` 负责释放。

## 2. 枝条

### 2.1 基本参数

| 参数 | 当前值 | 位置 |
|---|---|---|
| `MAX_DEPTH` | 4 | `buildTree` |
| `DUR` | `[0.24, 0.16, 0.12, 0.08, 0.05]` | 每级枝的生长耗时（`g` 单位） |
| 主干长度 | `randRange(3.15, 3.60)` | `spawn` 调用处 |
| 主干预半径 | `randRange(0.17, 0.21)` | 同上 |
| 一级侧枝数 | 5 | `sides = depth===0?5:...` |
| 二级侧枝数 | 4 | `side` 表 |
| 三级侧枝数 | 2 | 同上 |
| 四级侧枝数 | 1 | 同上 |
| 下部大枝 | 3 根，从主干 t=0.16–0.42 处发出 | `if (depth===0)` |

每根枝的几何体由 `sweepGeometry(points, radii, radial)` 扫描成管状；`makeBranch()` 生成折线骨架、半径序列和 Mesh。

### 2.2 生长动画：`growBranch(b, k, fat)`

- `k = smoothstep(b.g0, b.g1, g)`：该枝的局部生长进度。
- 在 `growBranch` 中：
  - 计算当前可见环 `i0`；
  - `i0` 之后的环全部塌到当前枝尖（`_tip`），形成“枝条越伸越长”的效果；
  - 当前环的半径乘以 `rs = (0.45 + 0.55 * min(1, k*1.7)) * fat`；
  - `fat = 0.18 + 0.82 * smoothstep(0.20, 0.92, g)`：整棵树幼年细、成年粗。根系传 `fat=1`，不参与这个因子。

注意：`growBranch` 只改几何顶点，不改变 `mesh.scale`。因此不要再用 `branches[0].mesh.scale.y` 去估算主干高度（过去的 bug，已在子叶定位中修复）。

### 2.3 枝的方位

- 一级/二级侧枝按 `(i / sides) * PI * 2 + 随机抖动` 分布，避免完全对称。
- 所有枝条限制在切面后方：`if (d2.z > -0.02) d2.z = -0.02 - rand()*0.15`。
- 枝梢有少量额外叶片（每枝 `8` 片）避免光秃枝尖。

## 3. 叶片

### 3.1 叶片数据

`leafSites` 由 `spawn()` 在枝条折线上采样：

```js
leafSites.push({
  pos: p,             // 最终位置
  dir: bladeDir,
  g: gStart + 0.02,   // 叶片开始长大的全局 g
  stag: rand(),       // 秋色/落叶错峰
  branch: owner,      // 所属枝条对象
  siteT,              // 在该枝条折线上的位置 0..1
  sizeScale
})
```

`buildTree()` 再把 `leafSites` 转成 `leafData`：

- 保存 `branch`、`siteT`、`offset`（最终位置 - 当前枝条点）；
- 每片叶有 `quat/size/autumn/tone/phase/spin`；
- 当前叶数上限 `40000`（实际约 2.9 万片，取决于随机树）。

### 3.2 动态挂点（重点）

`animate()` 中每片叶子：

```js
const branchK = smoothstep(d.branch.g0, d.branch.g1, g);
const reach = smoothstep(max(.02, d.siteT-.06), d.siteT+.06, branchK);
const growK = smoothstep(d.grow, min(1, d.grow+0.10), g) * reach;
if (reach 很小) 叶片缩到 0；
else {
  pointOnPolyline(d.branch.pts, min(d.siteT, branchK), _leafP);
  _p.copy(_leafP).add(d.offset);
}
```

这解决早期版本“叶片提前飘在最终树冠位置”的问题：**叶子只会在枝条长到它所在位置后出现，并跟着枝条当前点移动。**

### 3.3 叶片材质与颜色

- `leafTexture()`：白色叶子底 + 中脉/侧脉；`LEAF_GEO` 为 `PlaneGeometry(1,1.35,2,4)`，带微弯曲。
- `leafMat`：`MeshStandardMaterial`，`alphaTest .38`，双面，`roughness .86`。
- 颜色：绿 → 深绿 → 秋红/金；每片叶有 `tone` 轻微明暗变化。
- `blossomF` 当前固定为 0：**不要重新加“整树白/粉染叶”**，否则第二年春天会变成雪白树。春花用独立的小花实例。

### 3.4 叶落

`dropT = smoothstep(0.58 + stag*0.08, 0.72 + stag*0.05, p)`：叶子进入秋天后逐渐缩小、落下；飘落的叶子由 `fallLeaves` 粒子系统表现。

## 4. 根系

### 4.1 结构

根系同样用 `sweepGeometry` 扫描，但 `rootPath` 生成的是向下垂、可弯曲的折线：

- `rootChain(start, dir, len, r0, depth, gStart)`
- `segs = [16, 9, 6, 4]`；`radial = [10, 7, 5, 4]`
- `dur = [0.025, 0.020, 0.015, 0.010]`
- 侧根数量：`depth 0:12, depth 1:3, depth 2:2`
- 板根：**6 条**，从根颈向外铺
- 主根：长度 `2.8–3.4`，半径 `0.11`
- 根范围：x `±8.0`，y 最深 `-5.8`，z 限制在 `0.035–0.26`（切面前薄层）
- 根材料：老根 `0x7b5a3e`、新根 `0x9c7d59`，`flatShading`

### 4.2 视觉原则

- 根要能“撑住”大树：主根粗、板根向外张开、侧根有层级；不要只留一根直锥。
- 根系保持在切面前薄层，不然会被土壤断面挡住。
- 根盘 `flare` 与树干衔接，避免“塑料喇叭口”。
- 目前 `treeRoot.rotation` 会把根一起轻摇；真实根在土里不应摇，后续可把 roots 拆到单独 group（记录在 `ITERATIONS` 的后续项）。

## 5. 种子与子叶

### 5.1 种子

- `seedMesh` 是 `THREE.Group`：`seedTop`（上半球）、`seedBottom`（下半球）、`seedCrack`（裂缝环）。
- 尺寸：`scale.set(0.35*seedSwell*seedFade, 0.28*..., 0.46*...)`——**整体约为 r24 前体积的 30%**。
- 动画（`animate()`）：
  - `seedPlant = smoothstep(0, 3, t)`：从上方落到土里；
  - `seedSwell = 1 + 0.14*smoothstep(16,32,t)`：春雨后吸水膨胀；
  - `seedSplit = smoothstep(32,48,t)`：上半种皮抬起、旋转；
  - `seedFade = 1 - smoothstep(66,80,t)`：种皮退场。

### 5.2 子叶

- 两片 `LEAF_GEO`，`scale = 0.12 * coty`（比旧版 0.3 小很多，避免“大扇子”）。
- 位置 `x=±0.035, y=0.10`，`coty = smoothstep(0.09,0.145,g)*(1-smoothstep(0.34,0.50,g))`。
- 子叶的 y 使用**当前主干高度**：
  ```js
  const trunkB = tree.branches[0];
  const trunkK = smoothstep(trunkB.g0, trunkB.g1, g);
  const trunkTop = trunkB.start.y + trunkB.len * trunkK;
  ```
  不允许再用 `mesh.scale.y`。

## 6. 花、果实、积雪

- **春花**：`BLOSSOM_COUNT = min(2400, leafData.length*0.11)`；小花贴图 `FLOWER_TEX`，`p∈0.02–0.07` 开，`p 0.22–0.30` 落；只在 `g>0.70–0.90` 后才显示，避免第一年未成型树冠挂花。
- **果实**：`FRUIT_COUNT = 56`，外冠叶位，大小 `0.085–0.135`；第二年 `p .40–.52` 长大，`p .70–.80` 落下。
- **枝头积雪**：从枝条折线采样，`snowCaps` InstancedMesh；`snowCapK` 随冬季出现/淡出。
- **地面落叶**：`buildGroundLeaves` 1600 片，秋天铺开，冬天变暗、下沉、腐烂入土；不要再整体缩放/收回。

## 7. 修改树体的检查清单

改完后用这些时间点截图：

- `?t0=0&freeze`：种子大小、种子落点；
- `?t0=20&freeze`：春雨与吸水；
- `?t0=40&freeze`：主根；
- `?t0=56/70&freeze`：破土、子叶；
- `?t0=100&freeze`：根系与树干；
- `?t0=120&freeze`：全树；
- `?t0=170&freeze`：冬季雪与根。

改树体参数时，先确认 `buildTree()` 的 `branches`/`roots` 数量变化没有让 draw calls 失控：`?dbg` → `window.__renderer.info`。
