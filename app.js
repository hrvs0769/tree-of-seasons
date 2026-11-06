(()=>{var Ip=2;var Rm=0,cu=1,_n=2;var Lp=1,Bn=2;var er=100,Cm=101,Pm=102;var Im=200,Lm=201,Um=202,Dm=203,Pc=204,Ic=205,Nm=206,Om=207,Bm=208,Fm=209,zm=210,Hm=211,km=212,Vm=213,Gm=214,Wm=0,Xm=1,jm=2,qm=3,Ym=4,Zm=5,Jm=6,Km=7;var Up=4;var Dp=300,jr=301,qr=302,Lc=303,Uc=304,Jo=306,ir=1e3,rr=1001,Dc=1002,Ln=1003,$m=1004;var Ua=1005;var li=1006,ql=1007;var Vr=1008;var Pi=1009,Np=1010,Op=1011,zs=1012,hu=1013,sr=1014,qn=1015,$s=1016,uu=1017,du=1018,Yr=1020,Bp=35902,Fp=1021,zp=1022,Yn=1023,Hp=1024,kp=1025,Hs=1026,Zr=1027,pu=1028,fu=1029,Vp=1030,mu=1031;var gu=1033,go=33776,vo=33777,_o=33778,xo=33779,Nc=35840,Oc=35841,Bc=35842,Fc=35843,zc=36196,Hc=37492,kc=37496,Vc=37808,Gc=37809,Wc=37810,Xc=37811,jc=37812,qc=37813,Yc=37814,Zc=37815,Jc=37816,Kc=37817,$c=37818,Qc=37819,eh=37820,th=37821,yo=36492,nh=36494,ih=36495,Gp=36283,rh=36284,sh=36285,ah=36286;var So=2300,oh=2301,Yl=2302,vd=2400,_d=2401,xd=2402;var kr="",ot="srgb",rs="srgb-linear",Ko="linear",mt="srgb";var Er=7680;var Qm=512,e0=513,t0=514,n0=515,i0=516,r0=517,s0=518,a0=519,lh=35044,Di=35048;var yd="300 es",Jr=2e3,Eo=2001,Ii=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,e);e.target=null}}},Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Mo=Math.PI/180,ch=180/Math.PI;function ci(){let i=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(Qt[255&i]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]+"-"+Qt[255&e]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[63&t|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[255&n]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function Kt(i,e,t){return Math.max(e,Math.min(t,i))}function o0(i,e){return(i%e+e)%e}function Zl(i,e,t){return(1-t)*i+t*e}function jn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(4294967295*i);case Uint16Array:return Math.round(65535*i);case Uint8Array:return Math.round(255*i);case Int32Array:return Math.round(2147483647*i);case Int16Array:return Math.round(32767*i);case Int8Array:return Math.round(127*i);default:throw new Error("Invalid component type.")}}var ce=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ze=class i{constructor(e,t,n,r,s,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],p=n[5],f=n[8],_=r[0],m=r[3],g=r[6],v=r[1],x=r[4],y=r[7],R=r[2],w=r[5],P=r[8];return s[0]=a*_+o*v+c*R,s[3]=a*m+o*x+c*w,s[6]=a*g+o*y+c*P,s[1]=l*_+h*v+d*R,s[4]=l*m+h*x+d*w,s[7]=l*g+h*y+d*P,s[2]=u*_+p*v+f*R,s[5]=u*m+p*x+f*w,s[8]=u*g+p*y+f*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+r*s*l-r*a*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*s,p=l*s-a*c,f=t*d+n*u+r*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/f;return e[0]=d*_,e[1]=(r*l-h*n)*_,e[2]=(o*n-r*a)*_,e[3]=u*_,e[4]=(h*t-r*c)*_,e[5]=(r*s-o*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Jl.makeScale(e,t)),this}rotate(e){return this.premultiply(Jl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Jl=new Ze;function Wp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function bo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function l0(){let i=bo("canvas");return i.style.display="block",i}var Md={};function Ns(i){i in Md||(Md[i]=!0,console.warn(i))}var ct={enabled:!0,workingColorSpace:rs,spaces:{},convert:function(i,e,t){return this.enabled!==!1&&e!==t&&e&&t&&(this.spaces[e].transfer===mt&&(i.r=hi(i.r),i.g=hi(i.g),i.b=hi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===mt&&(i.r=Wr(i.r),i.g=Wr(i.g),i.b=Wr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===kr?Ko:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function hi(i){return i<.04045?.0773993808*i:Math.pow(.9478672986*i+.0521327014,2.4)}function Wr(i){return i<.0031308?12.92*i:1.055*Math.pow(i,.41666)-.055}var Sd=[.64,.33,.3,.6,.15,.06],Ed=[.2126,.7152,.0722],bd=[.3127,.329],Td=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wd=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715),br;ct.define({[rs]:{primaries:Sd,whitePoint:bd,transfer:Ko,toXYZ:Td,fromXYZ:wd,luminanceCoefficients:Ed,workingColorSpaceConfig:{unpackColorSpace:ot},outputColorSpaceConfig:{drawingBufferColorSpace:ot}},[ot]:{primaries:Sd,whitePoint:bd,transfer:mt,toXYZ:Td,fromXYZ:wd,luminanceCoefficients:Ed,outputColorSpaceConfig:{drawingBufferColorSpace:ot}}});var hh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{br===void 0&&(br=bo("canvas")),br.width=e.width,br.height=e.height;let n=br.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=br}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=bo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=255*hi(s[a]/255);return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*hi(t[n]/255)):t[n]=hi(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},c0=0,To=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=ci(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Kl(r[a].image)):s.push(Kl(r[a]))}else s=Kl(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Kl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var h0=0,dn=class i extends Ii{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=1001,r=1001,s=1006,a=1008,o=1023,c=1009,l=i.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=ci(),this.name="",this.source=new To(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ir:e.x=e.x-Math.floor(e.x);break;case rr:e.x=e.x<0?0:1;break;case Dc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case ir:e.y=e.y-Math.floor(e.y);break;case rr:e.y=e.y<0?0:1;break;case Dc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null,dn.DEFAULT_MAPPING=Dp,dn.DEFAULT_ANISOTROPY=1;var At=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],f=c[9],_=c[2],m=c[6],g=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(f+m)<.1&&Math.abs(l+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(l+1)/2,y=(p+1)/2,R=(g+1)/2,w=(h+u)/4,P=(d+_)/4,D=(f+m)/4;return x>y&&x>R?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=w/n,s=P/n):y>R?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=w/r,s=D/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=P/s,r=D/s),this.set(n,r,s,t),this}let v=Math.sqrt((m-f)*(m-f)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-f)/v,this.y=(d-_)/v,this.z=(u-h)/v,this.w=Math.acos((l+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},uh=class extends Ii{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new dn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new To(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ui=class extends uh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},wo=class extends dn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var dh=class extends dn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],h=n[r+2],d=n[r+3],u=s[a+0],p=s[a+1],f=s[a+2],_=s[a+3];if(o===0)return e[t+0]=c,e[t+1]=l,e[t+2]=h,void(e[t+3]=d);if(o===1)return e[t+0]=u,e[t+1]=p,e[t+2]=f,void(e[t+3]=_);if(d!==_||c!==u||l!==p||h!==f){let m=1-o,g=c*u+l*p+h*f+d*_,v=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){let R=Math.sqrt(x),w=Math.atan2(R,g*v);m=Math.sin(m*w)/R,o=Math.sin(o*w)/R}let y=o*v;if(c=c*m+u*y,l=l*m+p*y,h=h*m+f*y,d=d*m+_*y,m===1-o){let R=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=R,l*=R,h*=R,d*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],c=n[r+1],l=n[r+2],h=n[r+3],d=s[a],u=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*d+c*p-l*u,e[t+1]=c*f+h*u+l*d-o*p,e[t+2]=l*f+h*p+o*u-c*d,e[t+3]=h*f-o*d-c*u-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(r/2),d=o(s/2),u=c(n/2),p=c(r/2),f=c(s/2);switch(a){case"XYZ":this._x=u*h*d+l*p*f,this._y=l*p*d-u*h*f,this._z=l*h*f+u*p*d,this._w=l*h*d-u*p*f;break;case"YXZ":this._x=u*h*d+l*p*f,this._y=l*p*d-u*h*f,this._z=l*h*f-u*p*d,this._w=l*h*d+u*p*f;break;case"ZXY":this._x=u*h*d-l*p*f,this._y=l*p*d+u*h*f,this._z=l*h*f+u*p*d,this._w=l*h*d-u*p*f;break;case"ZYX":this._x=u*h*d-l*p*f,this._y=l*p*d+u*h*f,this._z=l*h*f-u*p*d,this._w=l*h*d+u*p*f;break;case"YZX":this._x=u*h*d+l*p*f,this._y=l*p*d+u*h*f,this._z=l*h*f-u*p*d,this._w=l*h*d-u*p*f;break;case"XZY":this._x=u*h*d-l*p*f,this._y=l*p*d-u*h*f,this._z=l*h*f+u*p*d,this._w=l*h*d+u*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(h-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-r*o,this._w=a*h-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=r*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ad.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ad.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),h=2*(o*t-s*r),d=2*(s*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-s*d,this.z=r+c*d+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $l.copy(this).projectOnVector(e),this.sub($l)}reflect(e){return this.sub($l.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$l=new M,Ad=new Rt,Dn=class{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Cn):Cn.fromBufferAttribute(s,a),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Da.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Da.copy(n.boundingBox)),Da.applyMatrix4(e.matrixWorld),this.union(Da)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Es),Na.subVectors(this.max,Es),Tr.subVectors(e.a,Es),wr.subVectors(e.b,Es),Ar.subVectors(e.c,Es),Ei.subVectors(wr,Tr),bi.subVectors(Ar,wr),qi.subVectors(Tr,Ar);let t=[0,-Ei.z,Ei.y,0,-bi.z,bi.y,0,-qi.z,qi.y,Ei.z,0,-Ei.x,bi.z,0,-bi.x,qi.z,0,-qi.x,-Ei.y,Ei.x,0,-bi.y,bi.x,0,-qi.y,qi.x,0];return!!Ql(t,Tr,wr,Ar,Na)&&(t=[1,0,0,0,1,0,0,0,1],!!Ql(t,Tr,wr,Ar,Na)&&(Oa.crossVectors(Ei,bi),t=[Oa.x,Oa.y,Oa.z],Ql(t,Tr,wr,Ar,Na)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Cn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ti=[new M,new M,new M,new M,new M,new M,new M,new M],Cn=new M,Da=new Dn,Tr=new M,wr=new M,Ar=new M,Ei=new M,bi=new M,qi=new M,Es=new M,Na=new M,Oa=new M,Yi=new M;function Ql(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Yi.fromArray(i,s);let o=r.x*Math.abs(Yi.x)+r.y*Math.abs(Yi.y)+r.z*Math.abs(Yi.z),c=e.dot(Yi),l=t.dot(Yi),h=n.dot(Yi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var u0=new Dn,bs=new M,ec=new M,Nn=class{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):u0.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bs.subVectors(e,this.center);let t=bs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=.5*(n-this.radius);this.center.addScaledVector(bs,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ec.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bs.copy(e.center).add(ec)),this.expandByPoint(bs.copy(e.center).sub(ec))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ni=new M,tc=new M,Ba=new M,Ti=new M,nc=new M,Fa=new M,ic=new M,ar=class{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){tc.copy(e).add(t).multiplyScalar(.5),Ba.copy(t).sub(e).normalize(),Ti.copy(this.origin).sub(tc);let s=.5*e.distanceTo(t),a=-this.direction.dot(Ba),o=Ti.dot(this.direction),c=-Ti.dot(Ba),l=Ti.lengthSq(),h=Math.abs(1-a*a),d,u,p,f;if(h>0)if(d=a*c-o,u=a*o-c,f=s*h,d>=0)if(u>=-f)if(u<=f){let _=1/h;d*=_,u*=_,p=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u<=-f?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+u*(u+2*c)+l):u<=f?(d=0,u=Math.min(Math.max(-s,-c),s),p=u*(u+2*c)+l):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+u*(u+2*c)+l);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(tc).addScaledVector(Ba,u),p}intersectSphere(e,t){ni.subVectors(e.center,this.origin);let n=ni.dot(this.direction),r=ni.dot(ni)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||s>r?null:((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||o>r?null:((o>n||n!=n)&&(n=o),(c<r||r!=r)&&(r=c),r<0?null:this.at(n>=0?n:r,t)))}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,n,r,s){nc.subVectors(t,e),Fa.subVectors(n,e),ic.crossVectors(nc,Fa);let a,o=this.direction.dot(ic);if(o>0){if(r)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Ti.subVectors(this.origin,e);let c=a*this.direction.dot(Fa.crossVectors(Ti,Fa));if(c<0)return null;let l=a*this.direction.dot(nc.cross(Ti));if(l<0||c+l>o)return null;let h=-a*Ti.dot(ic);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ne=class i{constructor(e,t,n,r,s,a,o,c,l,h,d,u,p,f,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,h,d,u,p,f,_,m)}set(e,t,n,r,s,a,o,c,l,h,d,u,p,f,_,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=s,g[5]=a,g[9]=o,g[13]=c,g[2]=l,g[6]=h,g[10]=d,g[14]=u,g[3]=p,g[7]=f,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Rr.setFromMatrixColumn(e,0).length(),s=1/Rr.setFromMatrixColumn(e,1).length(),a=1/Rr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let u=a*h,p=a*d,f=o*h,_=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=p+f*l,t[5]=u-_*l,t[9]=-o*c,t[2]=_-u*l,t[6]=f+p*l,t[10]=a*c}else if(e.order==="YXZ"){let u=c*h,p=c*d,f=l*h,_=l*d;t[0]=u+_*o,t[4]=f*o-p,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=_+u*o,t[10]=a*c}else if(e.order==="ZXY"){let u=c*h,p=c*d,f=l*h,_=l*d;t[0]=u-_*o,t[4]=-a*d,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let u=a*h,p=a*d,f=o*h,_=o*d;t[0]=c*h,t[4]=f*l-p,t[8]=u*l+_,t[1]=c*d,t[5]=_*l+u,t[9]=p*l-f,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let u=a*c,p=a*l,f=o*c,_=o*l;t[0]=c*h,t[4]=_-u*d,t[8]=f*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*d+f,t[10]=u-_*d}else if(e.order==="XZY"){let u=a*c,p=a*l,f=o*c,_=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+_,t[5]=a*h,t[9]=p*d-f,t[2]=f*d-p,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(d0,e,p0)}lookAt(e,t,n){let r=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),wi.crossVectors(n,gn),wi.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),wi.crossVectors(n,gn)),wi.normalize(),za.crossVectors(gn,wi),r[0]=wi.x,r[4]=za.x,r[8]=gn.x,r[1]=wi.y,r[5]=za.y,r[9]=gn.y,r[2]=wi.z,r[6]=za.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],p=n[13],f=n[2],_=n[6],m=n[10],g=n[14],v=n[3],x=n[7],y=n[11],R=n[15],w=r[0],P=r[4],D=r[8],F=r[12],V=r[1],W=r[5],k=r[9],Y=r[13],X=r[2],K=r[6],ee=r[10],oe=r[14],se=r[3],Se=r[7],Re=r[11],ie=r[15];return s[0]=a*w+o*V+c*X+l*se,s[4]=a*P+o*W+c*K+l*Se,s[8]=a*D+o*k+c*ee+l*Re,s[12]=a*F+o*Y+c*oe+l*ie,s[1]=h*w+d*V+u*X+p*se,s[5]=h*P+d*W+u*K+p*Se,s[9]=h*D+d*k+u*ee+p*Re,s[13]=h*F+d*Y+u*oe+p*ie,s[2]=f*w+_*V+m*X+g*se,s[6]=f*P+_*W+m*K+g*Se,s[10]=f*D+_*k+m*ee+g*Re,s[14]=f*F+_*Y+m*oe+g*ie,s[3]=v*w+x*V+y*X+R*se,s[7]=v*P+x*W+y*K+R*Se,s[11]=v*D+x*k+y*ee+R*Re,s[15]=v*F+x*Y+y*oe+R*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],p=e[14];return e[3]*(+s*c*d-r*l*d-s*o*u+n*l*u+r*o*p-n*c*p)+e[7]*(+t*c*p-t*l*u+s*a*u-r*a*p+r*l*h-s*c*h)+e[11]*(+t*l*d-t*o*p-s*a*d+n*a*p+s*o*h-n*l*h)+e[15]*(-r*o*h-t*c*d+t*o*u+r*a*d-n*a*u+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],p=e[11],f=e[12],_=e[13],m=e[14],g=e[15],v=d*m*l-_*u*l+_*c*p-o*m*p-d*c*g+o*u*g,x=f*u*l-h*m*l-f*c*p+a*m*p+h*c*g-a*u*g,y=h*_*l-f*d*l+f*o*p-a*_*p-h*o*g+a*d*g,R=f*d*c-h*_*c-f*o*u+a*_*u+h*o*m-a*d*m,w=t*v+n*x+r*y+s*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/w;return e[0]=v*P,e[1]=(_*u*s-d*m*s-_*r*p+n*m*p+d*r*g-n*u*g)*P,e[2]=(o*m*s-_*c*s+_*r*l-n*m*l-o*r*g+n*c*g)*P,e[3]=(d*c*s-o*u*s-d*r*l+n*u*l+o*r*p-n*c*p)*P,e[4]=x*P,e[5]=(h*m*s-f*u*s+f*r*p-t*m*p-h*r*g+t*u*g)*P,e[6]=(f*c*s-a*m*s-f*r*l+t*m*l+a*r*g-t*c*g)*P,e[7]=(a*u*s-h*c*s+h*r*l-t*u*l-a*r*p+t*c*p)*P,e[8]=y*P,e[9]=(f*d*s-h*_*s-f*n*p+t*_*p+h*n*g-t*d*g)*P,e[10]=(a*_*s-f*o*s+f*n*l-t*_*l-a*n*g+t*o*g)*P,e[11]=(h*o*s-a*d*s-h*n*l+t*d*l+a*n*p-t*o*p)*P,e[12]=R*P,e[13]=(h*_*r-f*d*r+f*n*u-t*_*u-h*n*m+t*d*m)*P,e[14]=(f*o*r-a*_*r-f*n*c+t*_*c+a*n*m-t*o*m)*P,e[15]=(a*d*r-h*o*r+h*n*c-t*d*c-a*n*u+t*o*u)*P,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+n,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,d=o+o,u=s*l,p=s*h,f=s*d,_=a*h,m=a*d,g=o*d,v=c*l,x=c*h,y=c*d,R=n.x,w=n.y,P=n.z;return r[0]=(1-(_+g))*R,r[1]=(p+y)*R,r[2]=(f-x)*R,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(u+g))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(f+x)*P,r[9]=(m-v)*P,r[10]=(1-(u+_))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=Rr.set(r[0],r[1],r[2]).length(),a=Rr.set(r[4],r[5],r[6]).length(),o=Rr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Pn.copy(this);let c=1/s,l=1/a,h=1/o;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=l,Pn.elements[5]*=l,Pn.elements[6]*=l,Pn.elements[8]*=h,Pn.elements[9]*=h,Pn.elements[10]*=h,t.setFromRotationMatrix(Pn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=2e3){let c=this.elements,l=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),u=(n+r)/(n-r),p,f;if(o===Jr)p=-(a+s)/(a-s),f=-2*a*s/(a-s);else{if(o!==Eo)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),f=-a*s/(a-s)}return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=f,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=2e3){let c=this.elements,l=1/(t-e),h=1/(n-r),d=1/(a-s),u=(t+e)*l,p=(n+r)*h,f,_;if(o===Jr)f=(a+s)*d,_=-2*d;else{if(o!==Eo)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=s*d,_=-1*d}return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-f,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Rr=new M,Pn=new Ne,d0=new M(0,0,0),p0=new M(1,1,1),wi=new M,za=new M,gn=new M,Rd=new Ne,Cd=new Rt,Gt=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],d=r[2],u=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Rd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cd.setFromEuler(this),this.setFromQuaternion(Cd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gt.DEFAULT_ORDER="XYZ";var ks=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return!!(this.mask&e.mask)}isEnabled(e){return!!(this.mask&1<<e)}},f0=0,Pd=new M,Cr=new Rt,ii=new Ne,Ha=new M,Ts=new M,m0=new M,g0=new Rt,Id=new M(1,0,0),Ld=new M(0,1,0),Ud=new M(0,0,1),Dd={type:"added"},v0={type:"removed"},Pr={type:"childadded",child:null},rc={type:"childremoved",child:null},Yt=class i extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new M,t=new Gt,n=new Rt,r=new M(1,1,1);t._onChange((function(){n.setFromEuler(t,!1)})),n._onChange((function(){t.setFromQuaternion(n,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ne},normalMatrix:{value:new Ze}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ks,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.premultiply(Cr),this}rotateX(e){return this.rotateOnAxis(Id,e)}rotateY(e){return this.rotateOnAxis(Ld,e)}rotateZ(e){return this.rotateOnAxis(Ud,e)}translateOnAxis(e,t){return Pd.copy(e).applyQuaternion(this.quaternion),this.position.add(Pd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Id,e)}translateY(e){return this.translateOnAxis(Ld,e)}translateZ(e){return this.translateOnAxis(Ud,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ha.copy(e):Ha.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Ts,Ha,this.up):ii.lookAt(Ha,Ts,this.up),this.quaternion.setFromRotationMatrix(ii),r&&(ii.extractRotation(r.matrixWorld),Cr.setFromRotationMatrix(ii),this.quaternion.premultiply(Cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dd),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(v0),rc.child=e,this.dispatchEvent(rc),rc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dd),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,e,m0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,g0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map((o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()}))),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=r,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};Yt.DEFAULT_UP=new M(0,1,0),Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var In=new M,ri=new M,sc=new M,si=new M,Ir=new M,Lr=new M,Nd=new M,ac=new M,oc=new M,lc=new M,cc=new At,hc=new At,uc=new At,oi=class i{constructor(e=new M,t=new M,n=new M){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),In.subVectors(e,t),r.cross(In);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){In.subVectors(r,t),ri.subVectors(n,t),sc.subVectors(e,t);let a=In.dot(In),o=In.dot(ri),c=In.dot(sc),l=ri.dot(ri),h=ri.dot(sc),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;let u=1/d,p=(l*c-o*h)*u,f=(a*h-o*c)*u;return s.set(1-p-f,f,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,si)!==null&&si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,si.x),c.addScaledVector(a,si.y),c.addScaledVector(o,si.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return cc.setScalar(0),hc.setScalar(0),uc.setScalar(0),cc.fromBufferAttribute(e,t),hc.fromBufferAttribute(e,n),uc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(cc,s.x),a.addScaledVector(hc,s.y),a.addScaledVector(uc,s.z),a}static isFrontFacing(e,t,n,r){return In.subVectors(n,t),ri.subVectors(e,t),In.cross(ri).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),.5*In.cross(ri).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;Ir.subVectors(r,n),Lr.subVectors(s,n),ac.subVectors(e,n);let c=Ir.dot(ac),l=Lr.dot(ac);if(c<=0&&l<=0)return t.copy(n);oc.subVectors(e,r);let h=Ir.dot(oc),d=Lr.dot(oc);if(h>=0&&d<=h)return t.copy(r);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Ir,a);lc.subVectors(e,s);let p=Ir.dot(lc),f=Lr.dot(lc);if(f>=0&&p<=f)return t.copy(s);let _=p*l-c*f;if(_<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(n).addScaledVector(Lr,o);let m=h*f-p*d;if(m<=0&&d-h>=0&&p-f>=0)return Nd.subVectors(s,r),o=(d-h)/(d-h+(p-f)),t.copy(r).addScaledVector(Nd,o);let g=1/(m+_+u);return a=_*g,o=u*g,t.copy(n).addScaledVector(Ir,a).addScaledVector(Lr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Xp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},ka={h:0,s:0,l:0};function dc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+6*(e-i)*t:t<.5?e:t<2/3?i+6*(e-i)*(2/3-t):i}var xe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ct.workingColorSpace){if(e=o0(e,1),t=Kt(t,0,1),n=Kt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=dc(a,s,e+1/3),this.g=dc(a,s,e),this.b=dc(a,s,e-1/3)}return ct.toWorkingColorSpace(this,r),this}setStyle(e,t=ot){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ot){let n=Xp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ot){return ct.fromWorkingColorSpace(en.copy(this),e),65536*Math.round(Kt(255*en.r,0,255))+256*Math.round(Kt(255*en.g,0,255))+Math.round(Kt(255*en.b,0,255))}getHexString(e=ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(en.copy(this),t);let n=en.r,r=en.g,s=en.b,a=Math.max(n,r,s),o=Math.min(n,r,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=ot){ct.fromWorkingColorSpace(en.copy(this),e);let t=en.r,n=en.g,r=en.b;return e!==ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*r)})`}offsetHSL(e,t,n){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+t,Ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ai),e.getHSL(ka);let n=Zl(Ai.h,ka.h,t),r=Zl(Ai.s,ka.s,t),s=Zl(Ai.l,ka.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new xe;xe.NAMES=Xp;var _0=0,Zn=class extends Ii{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=ci(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pc,this.blendDst=Ic,this.blendEquation=er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Er,this.stencilZFail=Er,this.stencilZPass=Er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pc&&(n.blendSrc=this.blendSrc),this.blendDst!==Ic&&(n.blendDst=this.blendDst),this.blendEquation!==er&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Er&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Er&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Er&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},un=class extends Zn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},gx=x0();function x0(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[256|c]=32768,r[c]=24,r[256|c]=24):l<-14?(n[c]=1024>>-l-14,n[256|c]=1024>>-l-14|32768,r[c]=-l-1,r[256|c]=-l-1):l<=15?(n[c]=l+15<<10,n[256|c]=l+15<<10|32768,r[c]=13,r[256|c]=13):l<128?(n[c]=31744,n[256|c]=64512,r[c]=24,r[256|c]=24):(n[c]=31744,n[256|c]=64512,r[c]=13,r[256|c]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(8388608&l);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}var Bt=new M,Va=new ce,Pt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=lh,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Va.fromBufferAttribute(this,t),Va.applyMatrix3(e),this.setXY(t,Va.x,Va.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jn(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jn(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jn(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),r=gt(r,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lh&&(e.usage=this.usage),e}};var Ao=class extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ro=class extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Le=class extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}},y0=0,En=new Ne,pc=new Yt,Ur=new M,vn=new Dn,ws=new Dn,qt=new M,tt=class i extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wp(e)?Ro:Ao)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return pc.lookAt(e),pc.updateMatrix(),this.applyMatrix4(pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Le(n,3))}else{for(let n=0,r=t.count;n<r;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new M,1/0);if(e){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];ws.setFromBufferAttribute(o),this.morphTargetsRelative?(qt.addVectors(vn.min,ws.min),vn.expandByPoint(qt),qt.addVectors(vn.max,ws.max),vn.expandByPoint(qt)):(vn.expandByPoint(ws.min),vn.expandByPoint(ws.max))}vn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)qt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(qt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)qt.fromBufferAttribute(o,l),c&&(Ur.fromBufferAttribute(e,l),qt.add(Ur)),r=Math.max(r,n.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<n.count;D++)o[D]=new M,c[D]=new M;let l=new M,h=new M,d=new M,u=new ce,p=new ce,f=new ce,_=new M,m=new M;function g(D,F,V){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,F),d.fromBufferAttribute(n,V),u.fromBufferAttribute(s,D),p.fromBufferAttribute(s,F),f.fromBufferAttribute(s,V),h.sub(l),d.sub(l),p.sub(u),f.sub(u);let W=1/(p.x*f.y-f.x*p.y);isFinite(W)&&(_.copy(h).multiplyScalar(f.y).addScaledVector(d,-p.y).multiplyScalar(W),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(W),o[D].add(_),o[F].add(_),o[V].add(_),c[D].add(m),c[F].add(m),c[V].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let D=0,F=v.length;D<F;++D){let V=v[D],W=V.start;for(let k=W,Y=W+V.count;k<Y;k+=3)g(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let x=new M,y=new M,R=new M,w=new M;function P(D){R.fromBufferAttribute(r,D),w.copy(R);let F=o[D];x.copy(F),x.sub(R.multiplyScalar(R.dot(F))).normalize(),y.crossVectors(w,F);let V=y.dot(c[D])<0?-1:1;a.setXYZW(D,x.x,x.y,x.z,V)}for(let D=0,F=v.length;D<F;++D){let V=v[D],W=V.start;for(let k=W,Y=W+V.count;k<Y;k+=3)P(e.getX(k+0)),P(e.getX(k+1)),P(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pt(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let r=new M,s=new M,a=new M,o=new M,c=new M,l=new M,h=new M,d=new M;if(e)for(let u=0,p=e.count;u<p;u+=3){let f=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,f),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(n,f),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=t.count;u<p;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),p=0,f=0;for(let _=0,m=c.length;_<m;_++){p=o.isInterleavedBufferAttribute?c[_]*o.data.stride+o.offset:c[_]*h;for(let g=0;g<h;g++)u[f++]=l[p++]}return new Pt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let c=e(r[o],n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){let u=e(l[h],n);c.push(u)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let p=l[d];h.push(p.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],d=s[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Od=new Ne,Zi=new ar,Ga=new Nn,Bd=new M,Wa=new M,Xa=new M,ja=new M,fc=new M,qa=new M,Fd=new M,Ya=new M,Qe=class extends Yt{constructor(e=new tt,t=new un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){qa.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],d=s[c];h!==0&&(fc.fromBufferAttribute(d,e),a?qa.addScaledVector(fc,h):qa.addScaledVector(fc.sub(t),h))}t.add(qa)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;if(r!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(s),Zi.copy(e.ray).recast(e.near),Ga.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(Ga,Bd)===null||Zi.origin.distanceToSquared(Bd)>(e.far-e.near)**2))return;Od.copy(s).invert(),Zi.copy(e.ray).applyMatrix4(Od),n.boundingBox!==null&&Zi.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,Zi)}}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,_=u.length;f<_;f++){let m=u[f],g=a[m.materialIndex];for(let v=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));v<x;v+=3)r=Za(this,g,e,n,l,h,d,o.getX(v),o.getX(v+1),o.getX(v+2)),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);f<_;f+=3)r=Za(this,a,e,n,l,h,d,o.getX(f),o.getX(f+1),o.getX(f+2)),r&&(r.faceIndex=Math.floor(f/3),t.push(r));else if(c!==void 0)if(Array.isArray(a))for(let f=0,_=u.length;f<_;f++){let m=u[f],g=a[m.materialIndex];for(let v=Math.max(m.start,p.start),x=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));v<x;v+=3)r=Za(this,g,e,n,l,h,d,v,v+1,v+2),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);f<_;f+=3)r=Za(this,a,e,n,l,h,d,f,f+1,f+2),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}};function Za(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Wa),i.getVertexPosition(c,Xa),i.getVertexPosition(l,ja);let h=(function(d,u,p,f,_,m,g,v){let x;if(x=u.side===1?f.intersectTriangle(g,m,_,!0,v):f.intersectTriangle(_,m,g,u.side===0,v),x===null)return null;Ya.copy(v),Ya.applyMatrix4(d.matrixWorld);let y=p.ray.origin.distanceTo(Ya);return y<p.near||y>p.far?null:{distance:y,point:Ya.clone(),object:d}})(i,e,t,n,Wa,Xa,ja,Fd);if(h){let d=new M;oi.getBarycoord(Fd,Wa,Xa,ja,d),r&&(h.uv=oi.getInterpolatedAttribute(r,o,c,l,d,new ce)),s&&(h.uv1=oi.getInterpolatedAttribute(s,o,c,l,d,new ce)),a&&(h.normal=oi.getInterpolatedAttribute(a,o,c,l,d,new M),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new M,materialIndex:0};oi.getNormal(Wa,Xa,ja,u.normal),h.face=u,h.barycoord=d}return h}var Kr=class i extends tt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,p=0;function f(_,m,g,v,x,y,R,w,P,D,F){let V=y/P,W=R/D,k=y/2,Y=R/2,X=w/2,K=P+1,ee=D+1,oe=0,se=0,Se=new M;for(let Re=0;Re<ee;Re++){let ie=Re*W-Y;for(let ae=0;ae<K;ae++){let Ee=ae*V-k;Se[_]=Ee*v,Se[m]=ie*x,Se[g]=X,l.push(Se.x,Se.y,Se.z),Se[_]=0,Se[m]=0,Se[g]=w>0?1:-1,h.push(Se.x,Se.y,Se.z),d.push(ae/P),d.push(1-Re/D),oe+=1}}for(let Re=0;Re<D;Re++)for(let ie=0;ie<P;ie++){let ae=u+ie+K*Re,Ee=u+ie+K*(Re+1),Te=u+(ie+1)+K*(Re+1),fe=u+(ie+1)+K*Re;c.push(ae,Ee,fe),c.push(Ee,Te,fe),se+=6}o.addGroup(p,se,F),p+=se,u+=oe}f("z","y","x",-1,-1,n,t,e,a,s,0),f("z","y","x",1,-1,n,t,-e,a,s,1),f("x","z","y",1,1,e,n,t,r,a,2),f("x","z","y",1,-1,e,n,-t,r,a,3),f("x","y","z",1,-1,e,t,n,r,s,4),f("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Le(l,3)),this.setAttribute("normal",new Le(h,3)),this.setAttribute("uv",new Le(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function $r(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function cn(i){let e={};for(let t=0;t<i.length;t++){let n=$r(i[t]);for(let r in n)e[r]=n[r]}return e}function jp(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var M0={clone:$r,merge:cn},pn=class extends Zn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$r(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let r=0;r<t.length;r++)n.push(t[r].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Vs=class extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=Jr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ri=new M,zd=new ce,Hd=new ce,hn=class extends Vs{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*ch*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Mo*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*ch*Math.atan(Math.tan(.5*Mo*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z)}getViewSize(e,t){return this.getViewBounds(e,zd,Hd),t.subVectors(Hd,zd)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Mo*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Dr=-90,ph=class extends Yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new hn(Dr,1,e,t);r.layers=this.layers,this.add(r);let s=new hn(Dr,1,e,t);s.layers=this.layers,this.add(s);let a=new hn(Dr,1,e,t);a.layers=this.layers,this.add(a);let o=new hn(Dr,1,e,t);o.layers=this.layers,this.add(o);let c=new hn(Dr,1,e,t);c.layers=this.layers,this.add(c);let l=new hn(Dr,1,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===Jr)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else{if(e!==Eo)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1)}for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},Co=class extends dn{constructor(e,t,n,r,s,a,o,c,l,h){super(e=e!==void 0?e:[],t=t!==void 0?t:jr,n,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},fh=class extends ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Co(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:li}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Kr(5,5,5),s=new pn({name:"CubemapFromEquirect",uniforms:$r(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let a=new Qe(r,s),o=t.minFilter;return t.minFilter===Vr&&(t.minFilter=li),new ph(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}},mc=new M,S0=new M,E0=new Ze,ai=class{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=mc.subVectors(n,t).cross(S0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(mc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||E0.getNormalMatrix(e),r=this.coplanarPoint(mc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ji=new Nn,Ja=new M,Qr=class{constructor(e=new ai,t=new ai,n=new ai,r=new ai,s=new ai,a=new ai){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],h=r[5],d=r[6],u=r[7],p=r[8],f=r[9],_=r[10],m=r[11],g=r[12],v=r[13],x=r[14],y=r[15];if(n[0].setComponents(c-s,u-l,m-p,y-g).normalize(),n[1].setComponents(c+s,u+l,m+p,y+g).normalize(),n[2].setComponents(c+a,u+h,m+f,y+v).normalize(),n[3].setComponents(c-a,u-h,m-f,y-v).normalize(),n[4].setComponents(c-o,u-d,m-_,y-x).normalize(),t===Jr)n[5].setComponents(c+o,u+d,m+_,y+x).normalize();else{if(t!==Eo)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,d,_,x).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ja.x=r.normal.x>0?e.max.x:e.min.x,Ja.y=r.normal.y>0?e.max.y:e.min.y,Ja.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ja)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function qp(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function b0(i){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(i.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let r=e.get(t);if(r===void 0)e.set(t,(function(s,a){let o=s.array,c=s.usage,l=o.byteLength,h=i.createBuffer(),d;if(i.bindBuffer(a,h),i.bufferData(a,o,c),s.onUploadCallback(),o instanceof Float32Array)d=i.FLOAT;else if(o instanceof Uint16Array)d=s.isFloat16BufferAttribute?i.HALF_FLOAT:i.UNSIGNED_SHORT;else if(o instanceof Int16Array)d=i.SHORT;else if(o instanceof Uint32Array)d=i.UNSIGNED_INT;else if(o instanceof Int32Array)d=i.INT;else if(o instanceof Int8Array)d=i.BYTE;else if(o instanceof Uint8Array)d=i.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);d=i.UNSIGNED_BYTE}return{buffer:h,type:d,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:l}})(t,n));else if(r.version<t.version){if(r.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let c=a.array,l=a.updateRanges;if(i.bindBuffer(o,s),l.length===0)i.bufferSubData(o,0,c);else{l.sort(((d,u)=>d.start-u.start));let h=0;for(let d=1;d<l.length;d++){let u=l[h],p=l[d];p.start<=u.start+u.count+1?u.count=Math.max(u.count,p.start+p.count-u.start):(++h,l[h]=p)}l.length=h+1;for(let d=0,u=l.length;d<u;d++){let p=l[d];i.bufferSubData(o,p.start*c.BYTES_PER_ELEMENT,c,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(r.buffer,t,n),r.version=t.version}}}}var Wt=class i extends tt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,h=c+1,d=e/o,u=t/c,p=[],f=[],_=[],m=[];for(let g=0;g<h;g++){let v=g*u-a;for(let x=0;x<l;x++){let y=x*d-s;f.push(y,-v,0),_.push(0,0,1),m.push(x/o),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let v=0;v<o;v++){let x=v+l*g,y=v+l*(g+1),R=v+1+l*(g+1),w=v+1+l*g;p.push(x,y,w),p.push(y,R,w)}this.setIndex(p),this.setAttribute("position",new Le(f,3)),this.setAttribute("normal",new Le(_,3)),this.setAttribute("uv",new Le(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},$e={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},ge={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Xn={basic:{uniforms:cn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:cn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new xe(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:cn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:cn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:cn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new xe(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:cn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:cn([ge.points,ge.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:cn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:cn([ge.common,ge.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:cn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:cn([ge.sprite,ge.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:cn([ge.common,ge.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:cn([ge.lights,ge.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Xn.physical={uniforms:cn([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var Ka={r:0,b:0,g:0},Ki=new Gt,T0=new Ne;function w0(i,e,t,n,r,s,a){let o=new xe(0),c,l,h=s===!0?0:1,d=null,u=0,p=null;function f(m){let g=m.isScene===!0?m.background:null;return g&&g.isTexture&&(g=(m.backgroundBlurriness>0?t:e).get(g)),g}function _(m,g){m.getRGB(Ka,jp(i)),n.buffers.color.setClear(Ka.r,Ka.g,Ka.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(m,g=1){o.set(m),h=g,_(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,_(o,h)},render:function(m){let g=!1,v=f(m);v===null?_(o,h):v&&v.isColor&&(_(v,1),g=!0);let x=i.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,a):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||g)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))},addToRenderList:function(m,g){let v=f(g);v&&(v.isCubeTexture||v.mapping===Jo)?(l===void 0&&(l=new Qe(new Kr(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:$r(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(x,y,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),Ki.copy(g.backgroundRotation),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),l.material.uniforms.envMap.value=v,l.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(T0.makeRotationFromEuler(Ki)),l.material.toneMapped=ct.getTransfer(v.colorSpace)!==mt,d===v&&u===v.version&&p===i.toneMapping||(l.material.needsUpdate=!0,d=v,u=v.version,p=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Qe(new Wt(2,2),new pn({name:"BackgroundMaterial",uniforms:$r(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=ct.getTransfer(v.colorSpace)!==mt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),d===v&&u===v.version&&p===i.toneMapping||(c.material.needsUpdate=!0,d=v,u=v.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}}}function A0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=l(null),s=r,a=!1;function o(g){return i.bindVertexArray(g)}function c(g){return i.deleteVertexArray(g)}function l(g){let v=[],x=[],y=[];for(let R=0;R<t;R++)v[R]=0,x[R]=0,y[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:x,attributeDivisors:y,object:g,attributes:{},index:null}}function h(){let g=s.newAttributes;for(let v=0,x=g.length;v<x;v++)g[v]=0}function d(g){u(g,0)}function u(g,v){let x=s.newAttributes,y=s.enabledAttributes,R=s.attributeDivisors;x[g]=1,y[g]===0&&(i.enableVertexAttribArray(g),y[g]=1),R[g]!==v&&(i.vertexAttribDivisor(g,v),R[g]=v)}function p(){let g=s.newAttributes,v=s.enabledAttributes;for(let x=0,y=v.length;x<y;x++)v[x]!==g[x]&&(i.disableVertexAttribArray(x),v[x]=0)}function f(g,v,x,y,R,w,P){P===!0?i.vertexAttribIPointer(g,v,x,R,w):i.vertexAttribPointer(g,v,x,y,R,w)}function _(){m(),a=!0,s!==r&&(s=r,o(s.object))}function m(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:function(g,v,x,y,R){let w=!1,P=(function(D,F,V){let W=V.wireframe===!0,k=n[D.id];k===void 0&&(k={},n[D.id]=k);let Y=k[F.id];Y===void 0&&(Y={},k[F.id]=Y);let X=Y[W];return X===void 0&&(X=l(i.createVertexArray()),Y[W]=X),X})(y,x,v);s!==P&&(s=P,o(s.object)),w=(function(D,F,V,W){let k=s.attributes,Y=F.attributes,X=0,K=V.getAttributes();for(let ee in K)if(K[ee].location>=0){let oe=k[ee],se=Y[ee];if(se===void 0&&(ee==="instanceMatrix"&&D.instanceMatrix&&(se=D.instanceMatrix),ee==="instanceColor"&&D.instanceColor&&(se=D.instanceColor)),oe===void 0||oe.attribute!==se||se&&oe.data!==se.data)return!0;X++}return s.attributesNum!==X||s.index!==W})(g,y,x,R),w&&(function(D,F,V,W){let k={},Y=F.attributes,X=0,K=V.getAttributes();for(let ee in K)if(K[ee].location>=0){let oe=Y[ee];oe===void 0&&(ee==="instanceMatrix"&&D.instanceMatrix&&(oe=D.instanceMatrix),ee==="instanceColor"&&D.instanceColor&&(oe=D.instanceColor));let se={};se.attribute=oe,oe&&oe.data&&(se.data=oe.data),k[ee]=se,X++}s.attributes=k,s.attributesNum=X,s.index=W})(g,y,x,R),R!==null&&e.update(R,i.ELEMENT_ARRAY_BUFFER),(w||a)&&(a=!1,(function(D,F,V,W){h();let k=W.attributes,Y=V.getAttributes(),X=F.defaultAttributeValues;for(let K in Y){let ee=Y[K];if(ee.location>=0){let oe=k[K];if(oe===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(oe=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(oe=D.instanceColor)),oe!==void 0){let se=oe.normalized,Se=oe.itemSize,Re=e.get(oe);if(Re===void 0)continue;let ie=Re.buffer,ae=Re.type,Ee=Re.bytesPerElement,Te=ae===i.INT||ae===i.UNSIGNED_INT||oe.gpuType===hu;if(oe.isInterleavedBufferAttribute){let fe=oe.data,T=fe.stride,b=oe.offset;if(fe.isInstancedInterleavedBuffer){for(let L=0;L<ee.locationSize;L++)u(ee.location+L,fe.meshPerAttribute);D.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let L=0;L<ee.locationSize;L++)d(ee.location+L);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let L=0;L<ee.locationSize;L++)f(ee.location+L,Se/ee.locationSize,ae,se,T*Ee,(b+Se/ee.locationSize*L)*Ee,Te)}else{if(oe.isInstancedBufferAttribute){for(let fe=0;fe<ee.locationSize;fe++)u(ee.location+fe,oe.meshPerAttribute);D.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let fe=0;fe<ee.locationSize;fe++)d(ee.location+fe);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let fe=0;fe<ee.locationSize;fe++)f(ee.location+fe,Se/ee.locationSize,ae,se,Se*Ee,Se/ee.locationSize*fe*Ee,Te)}}else if(X!==void 0){let se=X[K];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(ee.location,se);break;case 3:i.vertexAttrib3fv(ee.location,se);break;case 4:i.vertexAttrib4fv(ee.location,se);break;default:i.vertexAttrib1fv(ee.location,se)}}}}p()})(g,v,x,y),R!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(R).buffer))},reset:_,resetDefaultState:m,dispose:function(){_();for(let g in n){let v=n[g];for(let x in v){let y=v[x];for(let R in y)c(y[R].object),delete y[R];delete v[x]}delete n[g]}},releaseStatesOfGeometry:function(g){if(n[g.id]===void 0)return;let v=n[g.id];for(let x in v){let y=v[x];for(let R in y)c(y[R].object),delete y[R];delete v[x]}delete n[g.id]},releaseStatesOfProgram:function(g){for(let v in n){let x=n[v];if(x[g.id]===void 0)continue;let y=x[g.id];for(let R in y)c(y[R].object),delete y[R];delete x[g.id]}},initAttributes:h,enableAttribute:d,disableUnusedAttributes:p}}function R0(i,e,t){let n;function r(s,a,o){o!==0&&(i.drawArraysInstanced(n,s,a,o),t.update(a,n,o))}this.setMode=function(s){n=s},this.render=function(s,a){i.drawArrays(n,s,a),t.update(a,n,1)},this.renderInstances=r,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,s,0,a,0,o);let c=0;for(let l=0;l<o;l++)c+=a[l];t.update(c,n,1)},this.renderMultiDrawInstances=function(s,a,o,c){if(o===0)return;let l=e.get("WEBGL_multi_draw");if(l===null)for(let h=0;h<s.length;h++)r(s[h],a[h],c[h]);else{l.multiDrawArraysInstancedWEBGL(n,s,0,a,0,c,0,o);let h=0;for(let d=0;d<o;d++)h+=a[d]*c[d];t.update(h,n,1)}}}function C0(i,e,t,n){let r;function s(u){if(u==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";u="mediump"}return u==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let c=t.logarithmicDepthBuffer===!0,l=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let u=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(u.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:s,textureFormatReadable:function(u){return u===Yn||n.convert(u)===i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(u){let p=u===$s&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(u!==Pi&&n.convert(u)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&u!==qn&&!p)},precision:a,logarithmicDepthBuffer:c,reverseDepthBuffer:l,maxTextures:h,maxVertexTextures:d,maxTextureSize:i.getParameter(i.MAX_TEXTURE_SIZE),maxCubemapSize:i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:i.getParameter(i.MAX_VERTEX_ATTRIBS),maxVertexUniforms:i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:i.getParameter(i.MAX_VARYING_VECTORS),maxFragmentUniforms:i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:d>0,maxSamples:i.getParameter(i.MAX_SAMPLES)}}function P0(i){let e=this,t=null,n=0,r=!1,s=!1,a=new ai,o=new Ze,c={value:null,needsUpdate:!1};function l(h,d,u,p){let f=h!==null?h.length:0,_=null;if(f!==0){if(_=c.value,p!==!0||_===null){let m=u+4*f,g=d.matrixWorldInverse;o.getNormalMatrix(g),(_===null||_.length<m)&&(_=new Float32Array(m));for(let v=0,x=u;v!==f;++v,x+=4)a.copy(h[v]).applyMatrix4(g,o),a.normal.toArray(_,x),_[x+3]=a.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,_}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let u=h.length!==0||d||n!==0||r;return r=d,n=h.length,u},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=l(h,d,0)},this.setState=function(h,d,u){let p=h.clippingPlanes,f=h.clipIntersection,_=h.clipShadows,m=i.get(h);if(!r||p===null||p.length===0||s&&!_)s?l(null):(function(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let g=s?0:n,v=4*g,x=m.clippingState||null;c.value=x,x=l(p,d,v,u);for(let y=0;y!==v;++y)x[y]=t[y];m.clippingState=x,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=g}}}function I0(i){let e=new WeakMap;function t(r,s){return s===Lc?r.mapping=jr:s===Uc&&(r.mapping=qr),r}function n(r){let s=r.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping;if(s===Lc||s===Uc){if(e.has(r))return t(e.get(r).texture,r.mapping);{let a=r.image;if(a&&a.height>0){let o=new fh(a.height);return o.fromEquirectangularTexture(i,r),e.set(r,o),r.addEventListener("dispose",n),t(o.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap}}}var Po=class extends Vs{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},kd=[.125,.215,.35,.446,.526,.582],As=20,gc=new Po,Vd=new xe,vc=null,_c=0,xc=0,yc=!1,Qi=(1+Math.sqrt(5))/2,Nr=1/Qi,Gd=[new M(-Qi,Nr,0),new M(Qi,Nr,0),new M(-Nr,0,Qi),new M(Nr,0,Qi),new M(0,Qi,-Nr),new M(0,Qi,Nr),new M(-1,1,-1),new M(1,1,-1),new M(-1,1,1),new M(1,1,1)],Io=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){vc=this._renderer.getRenderTarget(),_c=this._renderer.getActiveCubeFace(),xc=this._renderer.getActiveMipmapLevel(),yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vc,_c,xc),this._renderer.xr.enabled=yc,e.scissorTest=!1,$a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===jr||e.mapping===qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vc=this._renderer.getRenderTarget(),_c=this._renderer.getActiveCubeFace(),xc=this._renderer.getActiveMipmapLevel(),yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:li,minFilter:li,generateMipmaps:!1,type:$s,format:Yn,colorSpace:rs,depthBuffer:!1},r=Wd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wd(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],c=[],l=[],h=a,d=a-4+1+kd.length;for(let u=0;u<d;u++){let p=Math.pow(2,h);c.push(p);let f=1/p;u>a-4?f=kd[u-a+4-1]:u===0&&(f=0),l.push(f);let _=1/(p-2),m=-_,g=1+_,v=[m,m,g,m,g,g,m,m,g,g,m,g],x=6,y=6,R=3,w=2,P=1,D=new Float32Array(R*y*x),F=new Float32Array(w*y*x),V=new Float32Array(P*y*x);for(let k=0;k<x;k++){let Y=k%3*2/3-1,X=k>2?0:-1,K=[Y,X,0,Y+2/3,X,0,Y+2/3,X+1,0,Y,X,0,Y+2/3,X+1,0,Y,X+1,0];D.set(K,R*y*k),F.set(v,w*y*k);let ee=[k,k,k,k,k,k];V.set(ee,P*y*k)}let W=new tt;W.setAttribute("position",new Pt(D,R)),W.setAttribute("uv",new Pt(F,w)),W.setAttribute("faceIndex",new Pt(V,P)),o.push(W),h>4&&h--}return{lodPlanes:o,sizeLods:c,sigmas:l}})(s)),this._blurMaterial=(function(a,o,c){let l=new Float32Array(As),h=new M(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})})(s,e,t)}return r}_compileMaterial(e){let t=new Qe(this._lodPlanes[0],e);this._renderer.compile(t,gc)}_sceneToCubeUV(e,t,n,r){let s=new hn(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,h=c.toneMapping;c.getClearColor(Vd),c.toneMapping=0,c.autoClear=!1;let d=new un({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),u=new Qe(new Kr,d),p=!1,f=e.background;f?f.isColor&&(d.color.copy(f),e.background=null,p=!0):(d.color.copy(Vd),p=!0);for(let _=0;_<6;_++){let m=_%3;m===0?(s.up.set(0,a[_],0),s.lookAt(o[_],0,0)):m===1?(s.up.set(0,0,a[_]),s.lookAt(0,o[_],0)):(s.up.set(0,a[_],0),s.lookAt(0,0,o[_]));let g=this._cubeSize;$a(r,m*g,_>2?g:0,g,g),c.setRenderTarget(r),p&&c.render(u,s),c.render(e,s)}u.geometry.dispose(),u.material.dispose(),c.toneMapping=h,c.autoClear=l,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===jr||e.mapping===qr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xd());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new Qe(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;$a(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,gc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Gd[(r-s-1)%Gd.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new Qe(this._lodPlanes[r],l),d=l.uniforms,u=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*u):2*Math.PI/39,f=s/p,_=isFinite(s)?1+Math.floor(3*f):As;_>As&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to 20`);let m=[],g=0;for(let y=0;y<As;++y){let R=y/f,w=Math.exp(-R*R/2);m.push(w),y===0?g+=w:y<_&&(g+=2*w)}for(let y=0;y<m.length;y++)m[y]=m[y]/g;d.envMap.value=e.texture,d.samples.value=_,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=p,d.mipInt.value=v-n;let x=this._sizeLods[r];$a(t,3*x*(r>v-4?r-v+4:0),4*(this._cubeSize-x),3*x,2*x),c.setRenderTarget(t),c.render(h,gc)}};function Wd(i,e,t){let n=new ui(i,e,t);return n.texture.mapping=Jo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $a(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Xd(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function jd(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function vu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function L0(i){let e=new WeakMap,t=null;function n(r){let s=r.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping,a=s===Lc||s===Uc,o=s===jr||s===qr;if(a||o){let c=e.get(r),l=c!==void 0?c.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==l)return t===null&&(t=new Io(i)),c=a?t.fromEquirectangular(r,c):t.fromCubemap(r,c),c.texture.pmremVersion=r.pmremVersion,e.set(r,c),c.texture;if(c!==void 0)return c.texture;{let h=r.image;return a&&h&&h.height>0||o&&h&&(function(d){let u=0,p=6;for(let f=0;f<p;f++)d[f]!==void 0&&u++;return u===p})(h)?(t===null&&(t=new Io(i)),c=a?t.fromEquirectangular(r):t.fromCubemap(r),c.texture.pmremVersion=r.pmremVersion,e.set(r,c),r.addEventListener("dispose",n),c.texture):null}}}return r},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function U0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Ns("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function D0(i,e,t,n){let r={},s=new WeakMap;function a(c){let l=c.target;l.index!==null&&e.remove(l.index);for(let d in l.attributes)e.remove(l.attributes[d]);for(let d in l.morphAttributes){let u=l.morphAttributes[d];for(let p=0,f=u.length;p<f;p++)e.remove(u[p])}l.removeEventListener("dispose",a),delete r[l.id];let h=s.get(l);h&&(e.remove(h),s.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function o(c){let l=[],h=c.index,d=c.attributes.position,u=0;if(h!==null){let _=h.array;u=h.version;for(let m=0,g=_.length;m<g;m+=3){let v=_[m+0],x=_[m+1],y=_[m+2];l.push(v,x,x,y,y,v)}}else{if(d===void 0)return;{let _=d.array;u=d.version;for(let m=0,g=_.length/3-1;m<g;m+=3){let v=m+0,x=m+1,y=m+2;l.push(v,x,x,y,y,v)}}}let p=new(Wp(l)?Ro:Ao)(l,1);p.version=u;let f=s.get(c);f&&e.remove(f),s.set(c,p)}return{get:function(c,l){return r[l.id]===!0||(l.addEventListener("dispose",a),r[l.id]=!0,t.memory.geometries++),l},update:function(c){let l=c.attributes;for(let d in l)e.update(l[d],i.ARRAY_BUFFER);let h=c.morphAttributes;for(let d in h){let u=h[d];for(let p=0,f=u.length;p<f;p++)e.update(u[p],i.ARRAY_BUFFER)}},getWireframeAttribute:function(c){let l=s.get(c);if(l){let h=c.index;h!==null&&l.version<h.version&&o(c)}else o(c);return s.get(c)}}}function N0(i,e,t){let n,r,s;function a(o,c,l){l!==0&&(i.drawElementsInstanced(n,c,r,o*s,l),t.update(c,n,l))}this.setMode=function(o){n=o},this.setIndex=function(o){r=o.type,s=o.bytesPerElement},this.render=function(o,c){i.drawElements(n,c,r,o*s),t.update(c,n,1)},this.renderInstances=a,this.renderMultiDraw=function(o,c,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,c,0,r,o,0,l);let h=0;for(let d=0;d<l;d++)h+=c[d];t.update(h,n,1)},this.renderMultiDrawInstances=function(o,c,l,h){if(l===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<o.length;u++)a(o[u]/s,c[u],h[u]);else{d.multiDrawElementsInstancedWEBGL(n,c,0,r,o,0,h,0,l);let u=0;for(let p=0;p<l;p++)u+=c[p]*h[p];t.update(u,n,1)}}}function O0(i){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,r){switch(e.calls++,n){case i.TRIANGLES:e.triangles+=r*(t/3);break;case i.LINES:e.lines+=r*(t/2);break;case i.LINE_STRIP:e.lines+=r*(t-1);break;case i.LINE_LOOP:e.lines+=r*t;break;case i.POINTS:e.points+=r*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function B0(i,e,t){let n=new WeakMap,r=new At;return{update:function(s,a,o){let c=s.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=l!==void 0?l.length:0,d=n.get(a);if(d===void 0||d.count!==h){let D=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",D)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],g=a.morphAttributes.color||[],v=0;u===!0&&(v=1),p===!0&&(v=2),f===!0&&(v=3);let x=a.attributes.position.count*v,y=1;x>e.maxTextureSize&&(y=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let R=new Float32Array(x*y*4*h),w=new wo(R,x,y,h);w.type=qn,w.needsUpdate=!0;let P=4*v;for(let F=0;F<h;F++){let V=_[F],W=m[F],k=g[F],Y=x*y*4*F;for(let X=0;X<V.count;X++){let K=X*P;u===!0&&(r.fromBufferAttribute(V,X),R[Y+K+0]=r.x,R[Y+K+1]=r.y,R[Y+K+2]=r.z,R[Y+K+3]=0),p===!0&&(r.fromBufferAttribute(W,X),R[Y+K+4]=r.x,R[Y+K+5]=r.y,R[Y+K+6]=r.z,R[Y+K+7]=0),f===!0&&(r.fromBufferAttribute(k,X),R[Y+K+8]=r.x,R[Y+K+9]=r.y,R[Y+K+10]=r.z,R[Y+K+11]=k.itemSize===4?r.w:1)}}d={count:h,texture:w,size:new ce(x,y)},n.set(a,d),a.addEventListener("dispose",D)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let u=0;for(let f=0;f<c.length;f++)u+=c[f];let p=a.morphTargetsRelative?1:1-u;o.getUniforms().setValue(i,"morphTargetBaseInfluence",p),o.getUniforms().setValue(i,"morphTargetInfluences",c)}o.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),o.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}}}function F0(i,e,t,n){let r=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,c=a.geometry,l=e.get(a,c);if(r.get(l)!==o&&(e.update(l),r.set(l,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),r.get(a)!==o&&(t.update(a.instanceMatrix,i.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,i.ARRAY_BUFFER),r.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;r.get(h)!==o&&(h.update(),r.set(h,o))}return l},dispose:function(){r=new WeakMap}}}var Lo=class extends dn{constructor(e,t,n,r,s,a,o,c,l,h=1026){if(h!==Hs&&h!==Zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Hs&&(n=sr),n===void 0&&h===Zr&&(n=Yr),super(null,r,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ln,this.minFilter=c!==void 0?c:Ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Yp=new dn,qd=new Lo(1,1),Zp=new wo,Jp=new dh,Kp=new Co,Yd=[],Zd=[],Jd=new Float32Array(16),Kd=new Float32Array(9),$d=new Float32Array(4);function ss(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Yd[r];if(s===void 0&&(s=new Float32Array(r),Yd[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function jt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function $o(i,e){let t=Zd[e];t===void 0&&(t=new Int32Array(e),Zd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function z0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function H0(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2fv(this.addr,e),jt(t,e)}}function k0(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;i.uniform3fv(this.addr,e),jt(t,e)}}function V0(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4fv(this.addr,e),jt(t,e)}}function G0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(Xt(t,n))return;$d.set(n),i.uniformMatrix2fv(this.addr,!1,$d),jt(t,n)}}function W0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(Xt(t,n))return;Kd.set(n),i.uniformMatrix3fv(this.addr,!1,Kd),jt(t,n)}}function X0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(Xt(t,n))return;Jd.set(n),i.uniformMatrix4fv(this.addr,!1,Jd),jt(t,n)}}function j0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function q0(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2iv(this.addr,e),jt(t,e)}}function Y0(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3iv(this.addr,e),jt(t,e)}}function Z0(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4iv(this.addr,e),jt(t,e)}}function J0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function K0(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2uiv(this.addr,e),jt(t,e)}}function $0(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3uiv(this.addr,e),jt(t,e)}}function Q0(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4uiv(this.addr,e),jt(t,e)}}function eg(i,e,t){let n=this.cache,r=t.allocateTextureUnit(),s;n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),this.type===i.SAMPLER_2D_SHADOW?(qd.compareFunction=515,s=qd):s=Yp,t.setTexture2D(e||s,r)}function tg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Jp,r)}function ng(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Kp,r)}function ig(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Zp,r)}function rg(i,e){i.uniform1fv(this.addr,e)}function sg(i,e){let t=ss(e,this.size,2);i.uniform2fv(this.addr,t)}function ag(i,e){let t=ss(e,this.size,3);i.uniform3fv(this.addr,t)}function og(i,e){let t=ss(e,this.size,4);i.uniform4fv(this.addr,t)}function lg(i,e){let t=ss(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function cg(i,e){let t=ss(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function hg(i,e){let t=ss(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ug(i,e){i.uniform1iv(this.addr,e)}function dg(i,e){i.uniform2iv(this.addr,e)}function pg(i,e){i.uniform3iv(this.addr,e)}function fg(i,e){i.uniform4iv(this.addr,e)}function mg(i,e){i.uniform1uiv(this.addr,e)}function gg(i,e){i.uniform2uiv(this.addr,e)}function vg(i,e){i.uniform3uiv(this.addr,e)}function _g(i,e){i.uniform4uiv(this.addr,e)}function xg(i,e,t){let n=this.cache,r=e.length,s=$o(t,r);Xt(n,s)||(i.uniform1iv(this.addr,s),jt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Yp,s[a])}function yg(i,e,t){let n=this.cache,r=e.length,s=$o(t,r);Xt(n,s)||(i.uniform1iv(this.addr,s),jt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Jp,s[a])}function Mg(i,e,t){let n=this.cache,r=e.length,s=$o(t,r);Xt(n,s)||(i.uniform1iv(this.addr,s),jt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Kp,s[a])}function Sg(i,e,t){let n=this.cache,r=e.length,s=$o(t,r);Xt(n,s)||(i.uniform1iv(this.addr,s),jt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Zp,s[a])}var mh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(r){switch(r){case 5126:return z0;case 35664:return H0;case 35665:return k0;case 35666:return V0;case 35674:return G0;case 35675:return W0;case 35676:return X0;case 5124:case 35670:return j0;case 35667:case 35671:return q0;case 35668:case 35672:return Y0;case 35669:case 35673:return Z0;case 5125:return J0;case 36294:return K0;case 36295:return $0;case 36296:return Q0;case 35678:case 36198:case 36298:case 36306:case 35682:return eg;case 35679:case 36299:case 36307:return tg;case 35680:case 36300:case 36308:case 36293:return ng;case 36289:case 36303:case 36311:case 36292:return ig}})(t.type)}},gh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(r){switch(r){case 5126:return rg;case 35664:return sg;case 35665:return ag;case 35666:return og;case 35674:return lg;case 35675:return cg;case 35676:return hg;case 5124:case 35670:return ug;case 35667:case 35671:return dg;case 35668:case 35672:return pg;case 35669:case 35673:return fg;case 5125:return mg;case 36294:return gg;case 36295:return vg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return xg;case 35679:case 36299:case 36307:return yg;case 35680:case 36300:case 36308:case 36293:return Mg;case 36289:case 36303:case 36311:case 36292:return Sg}})(t.type)}},vh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},Mc=/(\w+)(\])?(\[|\.)?/g;function Qd(i,e){i.seq.push(e),i.map[e.id]=e}function Eg(i,e,t){let n=i.name,r=n.length;for(Mc.lastIndex=0;;){let s=Mc.exec(n),a=Mc.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o|=0),l===void 0||l==="["&&a+2===r){Qd(t,l===void 0?new mh(o,i,e):new gh(o,i,e));break}{let h=t.map[o];h===void 0&&(h=new vh(o),Qd(t,h)),t=h}}}var Xr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r);Eg(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function ep(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var bg=0,tp=new Ze;function np(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+(function(o,c){let l=o.split(`
`),h=[],d=Math.max(c-6,0),u=Math.min(c+6,l.length);for(let p=d;p<u;p++){let f=p+1;h.push(`${f===c?">":" "} ${f}: ${l[p]}`)}return h.join(`
`)})(i.getShaderSource(e),a)}return r}function Tg(i,e){let t=(function(n){ct._getMatrix(tp,ct.workingColorSpace,n);let r=`mat3( ${tp.elements.map((s=>s.toFixed(4)))} )`;switch(ct.getTransfer(n)){case Ko:return[r,"LinearTransferOETF"];case mt:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[r,"LinearTransferOETF"]}})(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function wg(i,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Qa=new M;function Ag(){return ct.getLuminanceCoefficients(Qa),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Qa.x.toFixed(4)}, ${Qa.y.toFixed(4)}, ${Qa.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rs(i){return i!==""}function ip(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Rg=/^[ \t]*#include +<([\w\d./]+)>/gm;function _h(i){return i.replace(Rg,Pg)}var Cg=new Map;function Pg(i,e){let t=$e[e];if(t===void 0){let n=Cg.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return _h(t)}var Ig=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sp(i){return i.replace(Ig,Lg)}function Lg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ap(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ug(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=(function(W){let k="SHADOWMAP_TYPE_BASIC";return W.shadowMapType===1?k="SHADOWMAP_TYPE_PCF":W.shadowMapType===2?k="SHADOWMAP_TYPE_PCF_SOFT":W.shadowMapType===3&&(k="SHADOWMAP_TYPE_VSM"),k})(t),l=(function(W){let k="ENVMAP_TYPE_CUBE";if(W.envMap)switch(W.envMapMode){case jr:case qr:k="ENVMAP_TYPE_CUBE";break;case Jo:k="ENVMAP_TYPE_CUBE_UV"}return k})(t),h=(function(W){let k="ENVMAP_MODE_REFLECTION";return W.envMap&&W.envMapMode===qr&&(k="ENVMAP_MODE_REFRACTION"),k})(t),d=(function(W){let k="ENVMAP_BLENDING_NONE";if(W.envMap)switch(W.combine){case 0:k="ENVMAP_BLENDING_MULTIPLY";break;case 1:k="ENVMAP_BLENDING_MIX";break;case 2:k="ENVMAP_BLENDING_ADD"}return k})(t),u=(function(W){let k=W.envMapCubeUVHeight;if(k===null)return null;let Y=Math.log2(k)-2,X=1/k;return{texelWidth:1/(3*Math.max(Math.pow(2,Y),112)),texelHeight:X,maxMip:Y}})(t),p=(function(W){return[W.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",W.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)})(t),f=(function(W){let k=[];for(let Y in W){let X=W[Y];X!==!1&&k.push("#define "+Y+" "+X)}return k.join(`
`)})(s),_=r.createProgram(),m,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Rs).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Rs).join(`
`),g.length>0&&(g+=`
`)):(m=[ap(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),g=[ap(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?$e.tonemapping_pars_fragment:"",t.toneMapping!==0?wg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,Tg("linearToOutputTexel",t.outputColorSpace),Ag(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rs).join(`
`)),a=_h(a),a=ip(a,t),a=rp(a,t),o=_h(o),o=ip(o,t),o=rp(o,t),a=sp(a),o=sp(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===yd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let x=v+m+a,y=v+g+o,R=ep(r,r.VERTEX_SHADER,x),w=ep(r,r.FRAGMENT_SHADER,y);function P(W){if(i.debug.checkShaderErrors){let k=r.getProgramInfoLog(_).trim(),Y=r.getShaderInfoLog(R).trim(),X=r.getShaderInfoLog(w).trim(),K=!0,ee=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,R,w);else{let oe=np(r,R,"vertex"),se=np(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+k+`
`+oe+`
`+se)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):Y!==""&&X!==""||(ee=!1);ee&&(W.diagnostics={runnable:K,programLog:k,vertexShader:{log:Y,prefix:m},fragmentShader:{log:X,prefix:g}})}r.deleteShader(R),r.deleteShader(w),D=new Xr(r,_),F=(function(k,Y){let X={},K=k.getProgramParameter(Y,k.ACTIVE_ATTRIBUTES);for(let ee=0;ee<K;ee++){let oe=k.getActiveAttrib(Y,ee),se=oe.name,Se=1;oe.type===k.FLOAT_MAT2&&(Se=2),oe.type===k.FLOAT_MAT3&&(Se=3),oe.type===k.FLOAT_MAT4&&(Se=4),X[se]={type:oe.type,location:k.getAttribLocation(Y,se),locationSize:Se}}return X})(r,_)}let D,F;r.attachShader(_,R),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),this.getUniforms=function(){return D===void 0&&P(this),D},this.getAttributes=function(){return F===void 0&&P(this),F};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=r.getProgramParameter(_,37297)),V},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=w,this}var Dg=0,xh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new yh(e),t.set(e,n)),n}},yh=class{constructor(e){this.id=Dg++,this.code=e,this.usedTimes=0}};function Ng(i,e,t,n,r,s,a){let o=new ks,c=new xh,l=new Set,h=[],d=r.logarithmicDepthBuffer,u=r.vertexTextures,p=r.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(m){return l.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,g,v,x,y){let R=x.fog,w=y.geometry,P=m.isMeshStandardMaterial?x.environment:null,D=(m.isMeshStandardMaterial?t:e).get(m.envMap||P),F=D&&D.mapping===Jo?D.image.height:null,V=f[m.type];m.precision!==null&&(p=r.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let W=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,k=W!==void 0?W.length:0,Y,X,K,ee,oe=0;if(w.morphAttributes.position!==void 0&&(oe=1),w.morphAttributes.normal!==void 0&&(oe=2),w.morphAttributes.color!==void 0&&(oe=3),V){let rt=Xn[V];Y=rt.vertexShader,X=rt.fragmentShader}else Y=m.vertexShader,X=m.fragmentShader,c.update(m),K=c.getVertexShaderID(m),ee=c.getFragmentShaderID(m);let se=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),Re=y.isInstancedMesh===!0,ie=y.isBatchedMesh===!0,ae=!!m.map,Ee=!!m.matcap,Te=!!D,fe=!!m.aoMap,T=!!m.lightMap,b=!!m.bumpMap,L=!!m.normalMap,U=!!m.displacementMap,A=!!m.emissiveMap,I=!!m.metalnessMap,S=!!m.roughnessMap,C=m.anisotropy>0,H=m.clearcoat>0,J=m.dispersion>0,z=m.iridescence>0,Q=m.sheen>0,$=m.transmission>0,re=C&&!!m.anisotropyMap,_e=H&&!!m.clearcoatMap,me=H&&!!m.clearcoatNormalMap,Ie=H&&!!m.clearcoatRoughnessMap,Oe=z&&!!m.iridescenceMap,Ve=z&&!!m.iridescenceThicknessMap,Fe=Q&&!!m.sheenColorMap,Ce=Q&&!!m.sheenRoughnessMap,nt=!!m.specularMap,ht=!!m.specularColorMap,ft=!!m.specularIntensityMap,we=$&&!!m.transmissionMap,je=$&&!!m.thicknessMap,j=!!m.gradientMap,ue=!!m.alphaMap,be=m.alphaTest>0,Me=!!m.alphaHash,le=!!m.extensions,Ue=0;m.toneMapped&&(se!==null&&se.isXRRenderTarget!==!0||(Ue=i.toneMapping));let N={shaderID:V,shaderType:m.type,shaderName:m.name,vertexShader:Y,fragmentShader:X,defines:m.defines,customVertexShaderID:K,customFragmentShaderID:ee,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:ie,batchingColor:ie&&y._colorsTexture!==null,instancing:Re,instancingColor:Re&&y.instanceColor!==null,instancingMorph:Re&&y.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:rs,alphaToCoverage:!!m.alphaToCoverage,map:ae,matcap:Ee,envMap:Te,envMapMode:Te&&D.mapping,envMapCubeUVHeight:F,aoMap:fe,lightMap:T,bumpMap:b,normalMap:L,displacementMap:u&&U,emissiveMap:A,normalMapObjectSpace:L&&m.normalMapType===1,normalMapTangentSpace:L&&m.normalMapType===0,metalnessMap:I,roughnessMap:S,anisotropy:C,anisotropyMap:re,clearcoat:H,clearcoatMap:_e,clearcoatNormalMap:me,clearcoatRoughnessMap:Ie,dispersion:J,iridescence:z,iridescenceMap:Oe,iridescenceThicknessMap:Ve,sheen:Q,sheenColorMap:Fe,sheenRoughnessMap:Ce,specularMap:nt,specularColorMap:ht,specularIntensityMap:ft,transmission:$,transmissionMap:we,thicknessMap:je,gradientMap:j,opaque:m.transparent===!1&&m.blending===1&&m.alphaToCoverage===!1,alphaMap:ue,alphaTest:be,alphaHash:Me,combine:m.combine,mapUv:ae&&_(m.map.channel),aoMapUv:fe&&_(m.aoMap.channel),lightMapUv:T&&_(m.lightMap.channel),bumpMapUv:b&&_(m.bumpMap.channel),normalMapUv:L&&_(m.normalMap.channel),displacementMapUv:U&&_(m.displacementMap.channel),emissiveMapUv:A&&_(m.emissiveMap.channel),metalnessMapUv:I&&_(m.metalnessMap.channel),roughnessMapUv:S&&_(m.roughnessMap.channel),anisotropyMapUv:re&&_(m.anisotropyMap.channel),clearcoatMapUv:_e&&_(m.clearcoatMap.channel),clearcoatNormalMapUv:me&&_(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&_(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&_(m.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&_(m.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&_(m.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&_(m.sheenRoughnessMap.channel),specularMapUv:nt&&_(m.specularMap.channel),specularColorMapUv:ht&&_(m.specularColorMap.channel),specularIntensityMapUv:ft&&_(m.specularIntensityMap.channel),transmissionMapUv:we&&_(m.transmissionMap.channel),thicknessMapUv:je&&_(m.thicknessMap.channel),alphaMapUv:ue&&_(m.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(L||C),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,pointsUvs:y.isPoints===!0&&!!w.attributes.uv&&(ae||ue),fog:!!R,useFog:m.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Se,skinning:y.isSkinnedMesh===!0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:oe,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&v.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ue,decodeVideoTexture:ae&&m.map.isVideoTexture===!0&&ct.getTransfer(m.map.colorSpace)===mt,decodeVideoTextureEmissive:A&&m.emissiveMap.isVideoTexture===!0&&ct.getTransfer(m.emissiveMap.colorSpace)===mt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===1,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:le&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&m.extensions.multiDraw===!0||ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return N.vertexUv1s=l.has(1),N.vertexUv2s=l.has(2),N.vertexUv3s=l.has(3),l.clear(),N},getProgramCacheKey:function(m){let g=[];if(m.shaderID?g.push(m.shaderID):(g.push(m.customVertexShaderID),g.push(m.customFragmentShaderID)),m.defines!==void 0)for(let v in m.defines)g.push(v),g.push(m.defines[v]);return m.isRawShaderMaterial===!1&&((function(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)})(g,m),(function(v,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),v.push(o.mask)})(g,m),g.push(i.outputColorSpace)),g.push(m.customProgramCacheKey),g.join()},getUniforms:function(m){let g=f[m.type],v;if(g){let x=Xn[g];v=M0.clone(x.uniforms)}else v=m.uniforms;return v},acquireProgram:function(m,g){let v;for(let x=0,y=h.length;x<y;x++){let R=h[x];if(R.cacheKey===g){v=R,++v.usedTimes;break}}return v===void 0&&(v=new Ug(i,g,m,s),h.push(v)),v},releaseProgram:function(m){if(--m.usedTimes==0){let g=h.indexOf(m);h[g]=h[h.length-1],h.pop(),m.destroy()}},releaseShaderCache:function(m){c.remove(m)},programs:h,dispose:function(){c.dispose()}}}function Og(){let i=new WeakMap;return{has:function(e){return i.has(e)},get:function(e){let t=i.get(e);return t===void 0&&(t={},i.set(e,t)),t},remove:function(e){i.delete(e)},update:function(e,t,n){i.get(e)[t]=n},dispose:function(){i=new WeakMap}}}function Bg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function op(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function lp(){let i=[],e=0,t=[],n=[],r=[];function s(a,o,c,l,h,d){let u=i[e];return u===void 0?(u={id:a.id,object:a,geometry:o,material:c,groupOrder:l,renderOrder:a.renderOrder,z:h,group:d},i[e]=u):(u.id=a.id,u.object=a,u.geometry=o,u.material=c,u.groupOrder=l,u.renderOrder=a.renderOrder,u.z=h,u.group=d),e++,u}return{opaque:t,transmissive:n,transparent:r,init:function(){e=0,t.length=0,n.length=0,r.length=0},push:function(a,o,c,l,h,d){let u=s(a,o,c,l,h,d);c.transmission>0?n.push(u):c.transparent===!0?r.push(u):t.push(u)},unshift:function(a,o,c,l,h,d){let u=s(a,o,c,l,h,d);c.transmission>0?n.unshift(u):c.transparent===!0?r.unshift(u):t.unshift(u)},finish:function(){for(let a=e,o=i.length;a<o;a++){let c=i[a];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(a,o){t.length>1&&t.sort(a||Bg),n.length>1&&n.sort(o||op),r.length>1&&r.sort(o||op)}}}function Fg(){let i=new WeakMap;return{get:function(e,t){let n=i.get(e),r;return n===void 0?(r=new lp,i.set(e,[r])):t>=n.length?(r=new lp,n.push(r)):r=n[t],r},dispose:function(){i=new WeakMap}}}function zg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new xe};break;case"SpotLight":t={position:new M,direction:new M,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new M,halfWidth:new M,halfHeight:new M}}return i[e.id]=t,t}}}var Hg=0;function kg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Vg(i){let e=new zg,t=(function(){let o={};return{get:function(c){if(o[c.id]!==void 0)return o[c.id];let l;switch(c.type){case"DirectionalLight":case"SpotLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3}}return o[c.id]=l,l}}})(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new M);let r=new M,s=new Ne,a=new Ne;return{setup:function(o){let c=0,l=0,h=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let d=0,u=0,p=0,f=0,_=0,m=0,g=0,v=0,x=0,y=0,R=0;o.sort(kg);for(let P=0,D=o.length;P<D;P++){let F=o[P],V=F.color,W=F.intensity,k=F.distance,Y=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)c+=V.r*W,l+=V.g*W,h+=V.b*W;else if(F.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(F.sh.coefficients[X],W);R++}else if(F.isDirectionalLight){let X=e.get(F);if(X.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let K=F.shadow,ee=t.get(F);ee.shadowIntensity=K.intensity,ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize=K.mapSize,n.directionalShadow[d]=ee,n.directionalShadowMap[d]=Y,n.directionalShadowMatrix[d]=F.shadow.matrix,m++}n.directional[d]=X,d++}else if(F.isSpotLight){let X=e.get(F);X.position.setFromMatrixPosition(F.matrixWorld),X.color.copy(V).multiplyScalar(W),X.distance=k,X.coneCos=Math.cos(F.angle),X.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),X.decay=F.decay,n.spot[p]=X;let K=F.shadow;if(F.map&&(n.spotLightMap[x]=F.map,x++,K.updateMatrices(F),F.castShadow&&y++),n.spotLightMatrix[p]=K.matrix,F.castShadow){let ee=t.get(F);ee.shadowIntensity=K.intensity,ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize=K.mapSize,n.spotShadow[p]=ee,n.spotShadowMap[p]=Y,v++}p++}else if(F.isRectAreaLight){let X=e.get(F);X.color.copy(V).multiplyScalar(W),X.halfWidth.set(.5*F.width,0,0),X.halfHeight.set(0,.5*F.height,0),n.rectArea[f]=X,f++}else if(F.isPointLight){let X=e.get(F);if(X.color.copy(F.color).multiplyScalar(F.intensity),X.distance=F.distance,X.decay=F.decay,F.castShadow){let K=F.shadow,ee=t.get(F);ee.shadowIntensity=K.intensity,ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize=K.mapSize,ee.shadowCameraNear=K.camera.near,ee.shadowCameraFar=K.camera.far,n.pointShadow[u]=ee,n.pointShadowMap[u]=Y,n.pointShadowMatrix[u]=F.shadow.matrix,g++}n.point[u]=X,u++}else if(F.isHemisphereLight){let X=e.get(F);X.skyColor.copy(F.color).multiplyScalar(W),X.groundColor.copy(F.groundColor).multiplyScalar(W),n.hemi[_]=X,_++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=l,n.ambient[2]=h;let w=n.hash;w.directionalLength===d&&w.pointLength===u&&w.spotLength===p&&w.rectAreaLength===f&&w.hemiLength===_&&w.numDirectionalShadows===m&&w.numPointShadows===g&&w.numSpotShadows===v&&w.numSpotMaps===x&&w.numLightProbes===R||(n.directional.length=d,n.spot.length=p,n.rectArea.length=f,n.point.length=u,n.hemi.length=_,n.directionalShadow.length=m,n.directionalShadowMap.length=m,n.pointShadow.length=g,n.pointShadowMap.length=g,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=m,n.pointShadowMatrix.length=g,n.spotLightMatrix.length=v+x-y,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=R,w.directionalLength=d,w.pointLength=u,w.spotLength=p,w.rectAreaLength=f,w.hemiLength=_,w.numDirectionalShadows=m,w.numPointShadows=g,w.numSpotShadows=v,w.numSpotMaps=x,w.numLightProbes=R,n.version=Hg++)},setupView:function(o,c){let l=0,h=0,d=0,u=0,p=0,f=c.matrixWorldInverse;for(let _=0,m=o.length;_<m;_++){let g=o[_];if(g.isDirectionalLight){let v=n.directional[l];v.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(f),l++}else if(g.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(f),d++}else if(g.isRectAreaLight){let v=n.rectArea[u];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),a.identity(),s.copy(g.matrixWorld),s.premultiply(f),a.extractRotation(s),v.halfWidth.set(.5*g.width,0,0),v.halfHeight.set(0,.5*g.height,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),u++}else if(g.isPointLight){let v=n.point[h];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),h++}else if(g.isHemisphereLight){let v=n.hemi[p];v.direction.setFromMatrixPosition(g.matrixWorld),v.direction.transformDirection(f),p++}}},state:n}}function cp(i){let e=new Vg(i),t=[],n=[],r={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){r.camera=s,t.length=0,n.length=0},state:r,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){n.push(s)}}}function Gg(i){let e=new WeakMap;return{get:function(t,n=0){let r=e.get(t),s;return r===void 0?(s=new cp(i),e.set(t,[s])):n>=r.length?(s=new cp(i),r.push(s)):s=r[n],s},dispose:function(){e=new WeakMap}}}var Mh=class extends Zn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Sh=class extends Zn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Wg(i,e,t){let n=new Qr,r=new ce,s=new ce,a=new At,o=new Mh({depthPacking:3201}),c=new Sh,l={},h=t.maxTextureSize,d={[Rm]:1,[cu]:0,[_n]:2},u=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let f=new tt;f.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Qe(f,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let g=this.type;function v(w,P){let D=e.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ui(r.x,r.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(P,null,D,u,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(P,null,D,p,_,null)}function x(w,P,D,F){let V=null,W=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(W!==void 0)V=W;else if(V=D.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let k=V.uuid,Y=P.uuid,X=l[k];X===void 0&&(X={},l[k]=X);let K=X[Y];K===void 0&&(K=V.clone(),X[Y]=K,P.addEventListener("dispose",R)),V=K}return V.visible=P.visible,V.wireframe=P.wireframe,V.side=F===3?P.shadowSide!==null?P.shadowSide:P.side:P.shadowSide!==null?P.shadowSide:d[P.side],V.alphaMap=P.alphaMap,V.alphaTest=P.alphaTest,V.map=P.map,V.clipShadows=P.clipShadows,V.clippingPlanes=P.clippingPlanes,V.clipIntersection=P.clipIntersection,V.displacementMap=P.displacementMap,V.displacementScale=P.displacementScale,V.displacementBias=P.displacementBias,V.wireframeLinewidth=P.wireframeLinewidth,V.linewidth=P.linewidth,D.isPointLight===!0&&V.isMeshDistanceMaterial===!0&&(i.properties.get(V).light=D),V}function y(w,P,D,F,V){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&V===3)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);let k=e.update(w),Y=w.material;if(Array.isArray(Y)){let X=k.groups;for(let K=0,ee=X.length;K<ee;K++){let oe=X[K],se=Y[oe.materialIndex];if(se&&se.visible){let Se=x(w,se,F,V);w.onBeforeShadow(i,w,P,D,k,Se,oe),i.renderBufferDirect(D,null,k,Se,w,oe),w.onAfterShadow(i,w,P,D,k,Se,oe)}}}else if(Y.visible){let X=x(w,Y,F,V);w.onBeforeShadow(i,w,P,D,k,X,null),i.renderBufferDirect(D,null,k,X,w,null),w.onAfterShadow(i,w,P,D,k,X,null)}}let W=w.children;for(let k=0,Y=W.length;k<Y;k++)y(W[k],P,D,F,V)}function R(w){w.target.removeEventListener("dispose",R);for(let P in l){let D=l[P],F=w.target.uuid;F in D&&(D[F].dispose(),delete D[F])}}this.render=function(w,P,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let F=i.getRenderTarget(),V=i.getActiveCubeFace(),W=i.getActiveMipmapLevel(),k=i.state;k.setBlending(0),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let Y=g!==3&&this.type===3,X=g===3&&this.type!==3;for(let K=0,ee=w.length;K<ee;K++){let oe=w[K],se=oe.shadow;if(se===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(se.autoUpdate===!1&&se.needsUpdate===!1)continue;r.copy(se.mapSize);let Se=se.getFrameExtents();if(r.multiply(Se),s.copy(se.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/Se.x),r.x=s.x*Se.x,se.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/Se.y),r.y=s.y*Se.y,se.mapSize.y=s.y)),se.map===null||Y===!0||X===!0){let ie=this.type!==3?{minFilter:Ln,magFilter:Ln}:{};se.map!==null&&se.map.dispose(),se.map=new ui(r.x,r.y,ie),se.map.texture.name=oe.name+".shadowMap",se.camera.updateProjectionMatrix()}i.setRenderTarget(se.map),i.clear();let Re=se.getViewportCount();for(let ie=0;ie<Re;ie++){let ae=se.getViewport(ie);a.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),k.viewport(a),se.updateMatrices(oe,ie),n=se.getFrustum(),y(P,D,se.camera,oe,this.type)}se.isPointLightShadow!==!0&&this.type===3&&v(se,D),se.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(F,V,W)}}var Xg={[Wm]:1,[jm]:6,[Ym]:7,[qm]:5,[Xm]:0,[Jm]:2,[Km]:4,[Zm]:3};function jg(i,e){let t=new function(){let S=!1,C=new At,H=null,J=new At(0,0,0,0);return{setMask:function(z){H===z||S||(i.colorMask(z,z,z,z),H=z)},setLocked:function(z){S=z},setClear:function(z,Q,$,re,_e){_e===!0&&(z*=re,Q*=re,$*=re),C.set(z,Q,$,re),J.equals(C)===!1&&(i.clearColor(z,Q,$,re),J.copy(C))},reset:function(){S=!1,H=null,J.set(-1,0,0,0)}}},n=new function(){let S=!1,C=!1,H=null,J=null,z=null;return{setReversed:function(Q){if(C!==Q){let $=e.get("EXT_clip_control");C?$.clipControlEXT($.LOWER_LEFT_EXT,$.ZERO_TO_ONE_EXT):$.clipControlEXT($.LOWER_LEFT_EXT,$.NEGATIVE_ONE_TO_ONE_EXT);let re=z;z=null,this.setClear(re)}C=Q},getReversed:function(){return C},setTest:function(Q){Q?Te(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function(Q){H===Q||S||(i.depthMask(Q),H=Q)},setFunc:function(Q){if(C&&(Q=Xg[Q]),J!==Q){switch(Q){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:default:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL)}J=Q}},setLocked:function(Q){S=Q},setClear:function(Q){z!==Q&&(C&&(Q=1-Q),i.clearDepth(Q),z=Q)},reset:function(){S=!1,H=null,J=null,z=null,C=!1}}},r=new function(){let S=!1,C=null,H=null,J=null,z=null,Q=null,$=null,re=null,_e=null;return{setTest:function(me){S||(me?Te(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function(me){C===me||S||(i.stencilMask(me),C=me)},setFunc:function(me,Ie,Oe){H===me&&J===Ie&&z===Oe||(i.stencilFunc(me,Ie,Oe),H=me,J=Ie,z=Oe)},setOp:function(me,Ie,Oe){Q===me&&$===Ie&&re===Oe||(i.stencilOp(me,Ie,Oe),Q=me,$=Ie,re=Oe)},setLocked:function(me){S=me},setClear:function(me){_e!==me&&(i.clearStencil(me),_e=me)},reset:function(){S=!1,C=null,H=null,J=null,z=null,Q=null,$=null,re=null,_e=null}}},s=new WeakMap,a=new WeakMap,o={},c={},l=new WeakMap,h=[],d=null,u=!1,p=null,f=null,_=null,m=null,g=null,v=null,x=null,y=new xe(0,0,0),R=0,w=!1,P=null,D=null,F=null,V=null,W=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,X=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(K)[1]),Y=X>=1):K.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Y=X>=2);let ee=null,oe={},se=i.getParameter(i.SCISSOR_BOX),Se=i.getParameter(i.VIEWPORT),Re=new At().fromArray(se),ie=new At().fromArray(Se);function ae(S,C,H,J){let z=new Uint8Array(4),Q=i.createTexture();i.bindTexture(S,Q),i.texParameteri(S,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(S,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $=0;$<H;$++)S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY?i.texImage3D(C,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,z):i.texImage2D(C+$,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,z);return Q}let Ee={};function Te(S){o[S]!==!0&&(i.enable(S),o[S]=!0)}function fe(S){o[S]!==!1&&(i.disable(S),o[S]=!1)}Ee[i.TEXTURE_2D]=ae(i.TEXTURE_2D,i.TEXTURE_2D,1),Ee[i.TEXTURE_CUBE_MAP]=ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[i.TEXTURE_2D_ARRAY]=ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ee[i.TEXTURE_3D]=ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),t.setClear(0,0,0,1),n.setClear(1),r.setClear(0),Te(i.DEPTH_TEST),n.setFunc(3),U(!1),A(1),Te(i.CULL_FACE),L(0);let T={[er]:i.FUNC_ADD,[Cm]:i.FUNC_SUBTRACT,[Pm]:i.FUNC_REVERSE_SUBTRACT};T[103]=i.MIN,T[104]=i.MAX;let b={[Im]:i.ZERO,[Lm]:i.ONE,[Um]:i.SRC_COLOR,[Pc]:i.SRC_ALPHA,[zm]:i.SRC_ALPHA_SATURATE,[Bm]:i.DST_COLOR,[Nm]:i.DST_ALPHA,[Dm]:i.ONE_MINUS_SRC_COLOR,[Ic]:i.ONE_MINUS_SRC_ALPHA,[Fm]:i.ONE_MINUS_DST_COLOR,[Om]:i.ONE_MINUS_DST_ALPHA,[Hm]:i.CONSTANT_COLOR,[km]:i.ONE_MINUS_CONSTANT_COLOR,[Vm]:i.CONSTANT_ALPHA,[Gm]:i.ONE_MINUS_CONSTANT_ALPHA};function L(S,C,H,J,z,Q,$,re,_e,me){if(S!==0){if(u===!1&&(Te(i.BLEND),u=!0),S===5)z=z||C,Q=Q||H,$=$||J,C===f&&z===g||(i.blendEquationSeparate(T[C],T[z]),f=C,g=z),H===_&&J===m&&Q===v&&$===x||(i.blendFuncSeparate(b[H],b[J],b[Q],b[$]),_=H,m=J,v=Q,x=$),re.equals(y)!==!1&&_e===R||(i.blendColor(re.r,re.g,re.b,_e),y.copy(re),R=_e),p=S,w=!1;else if(S!==p||me!==w){if(f===er&&g===er||(i.blendEquation(i.FUNC_ADD),f=er,g=er),me)switch(S){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S)}else switch(S){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S)}_=null,m=null,v=null,x=null,y.set(0,0,0),R=0,p=S,w=me}}else u===!0&&(fe(i.BLEND),u=!1)}function U(S){P!==S&&(S?i.frontFace(i.CW):i.frontFace(i.CCW),P=S)}function A(S){S!==0?(Te(i.CULL_FACE),S!==D&&(S===1?i.cullFace(i.BACK):S===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),D=S}function I(S,C,H){S?(Te(i.POLYGON_OFFSET_FILL),V===C&&W===H||(i.polygonOffset(C,H),V=C,W=H)):fe(i.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:n,stencil:r},enable:Te,disable:fe,bindFramebuffer:function(S,C){return c[S]!==C&&(i.bindFramebuffer(S,C),c[S]=C,S===i.DRAW_FRAMEBUFFER&&(c[i.FRAMEBUFFER]=C),S===i.FRAMEBUFFER&&(c[i.DRAW_FRAMEBUFFER]=C),!0)},drawBuffers:function(S,C){let H=h,J=!1;if(S){H=l.get(C),H===void 0&&(H=[],l.set(C,H));let z=S.textures;if(H.length!==z.length||H[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,$=z.length;Q<$;Q++)H[Q]=i.COLOR_ATTACHMENT0+Q;H.length=z.length,J=!0}}else H[0]!==i.BACK&&(H[0]=i.BACK,J=!0);J&&i.drawBuffers(H)},useProgram:function(S){return d!==S&&(i.useProgram(S),d=S,!0)},setBlending:L,setMaterial:function(S,C){S.side===2?fe(i.CULL_FACE):Te(i.CULL_FACE);let H=S.side===1;C&&(H=!H),U(H),S.blending===1&&S.transparent===!1?L(0):L(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),n.setFunc(S.depthFunc),n.setTest(S.depthTest),n.setMask(S.depthWrite),t.setMask(S.colorWrite);let J=S.stencilWrite;r.setTest(J),J&&(r.setMask(S.stencilWriteMask),r.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),r.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),I(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?Te(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:U,setCullFace:A,setLineWidth:function(S){S!==F&&(Y&&i.lineWidth(S),F=S)},setPolygonOffset:I,setScissorTest:function(S){S?Te(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)},activeTexture:function(S){S===void 0&&(S=i.TEXTURE0+k-1),ee!==S&&(i.activeTexture(S),ee=S)},bindTexture:function(S,C,H){H===void 0&&(H=ee===null?i.TEXTURE0+k-1:ee);let J=oe[H];J===void 0&&(J={type:void 0,texture:void 0},oe[H]=J),J.type===S&&J.texture===C||(ee!==H&&(i.activeTexture(H),ee=H),i.bindTexture(S,C||Ee[S]),J.type=S,J.texture=C)},unbindTexture:function(){let S=oe[ee];S!==void 0&&S.type!==void 0&&(i.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)},compressedTexImage2D:function(){try{i.compressedTexImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexImage3D:function(){try{i.compressedTexImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texImage2D:function(){try{i.texImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texImage3D:function(){try{i.texImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},updateUBOMapping:function(S,C){let H=a.get(C);H===void 0&&(H=new WeakMap,a.set(C,H));let J=H.get(S);J===void 0&&(J=i.getUniformBlockIndex(C,S.name),H.set(S,J))},uniformBlockBinding:function(S,C){let H=a.get(C).get(S);s.get(C)!==H&&(i.uniformBlockBinding(C,H,S.__bindingPointIndex),s.set(C,H))},texStorage2D:function(){try{i.texStorage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texStorage3D:function(){try{i.texStorage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texSubImage2D:function(){try{i.texSubImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texSubImage3D:function(){try{i.texSubImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexSubImage2D:function(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexSubImage3D:function(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},scissor:function(S){Re.equals(S)===!1&&(i.scissor(S.x,S.y,S.z,S.w),Re.copy(S))},viewport:function(S){ie.equals(S)===!1&&(i.viewport(S.x,S.y,S.z,S.w),ie.copy(S))},reset:function(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),n.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),o={},ee=null,oe={},c={},l=new WeakMap,h=[],d=null,u=!1,p=null,f=null,_=null,m=null,g=null,v=null,x=null,y=new xe(0,0,0),R=0,w=!1,P=null,D=null,F=null,V=null,W=null,Re.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),t.reset(),n.reset(),r.reset()}}}function hp(i,e,t,n){let r=(function(s){switch(s){case Pi:case Np:return{byteLength:1,components:1};case zs:case Op:case $s:return{byteLength:2,components:1};case uu:case du:return{byteLength:2,components:4};case sr:case hu:case qn:return{byteLength:4,components:1};case Bp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(n);switch(t){case Fp:case Hp:return i*e;case kp:return i*e*2;case pu:case fu:return i*e/r.components*r.byteLength;case Vp:case mu:return i*e*2/r.components*r.byteLength;case zp:return i*e*3/r.components*r.byteLength;case Yn:case gu:return i*e*4/r.components*r.byteLength;case go:case vo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _o:case xo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Oc:case Fc:return Math.max(i,16)*Math.max(e,8)/4;case Nc:case Bc:return Math.max(i,8)*Math.max(e,8)/2;case zc:case Hc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case kc:case Vc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Wc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Xc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case jc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case qc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Yc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Zc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Jc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case $c:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Qc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case eh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case th:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case yo:case nh:case ih:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Gp:case rh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case sh:case ah:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qg(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),l=new ce,h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(T,b){return p?new OffscreenCanvas(T,b):bo("canvas")}function _(T,b,L){let U=1,A=fe(T);if((A.width>L||A.height>L)&&(U=L/Math.max(A.width,A.height)),U<1){if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let I=Math.floor(U*A.width),S=Math.floor(U*A.height);d===void 0&&(d=f(I,S));let C=b?f(I,S):d;return C.width=I,C.height=S,C.getContext("2d").drawImage(T,0,0,I,S),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+I+"x"+S+")."),C}return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),T}return T}function m(T){return T.generateMipmaps}function g(T){i.generateMipmap(T)}function v(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(T,b,L,U,A=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let I=b;if(b===i.RED&&(L===i.FLOAT&&(I=i.R32F),L===i.HALF_FLOAT&&(I=i.R16F),L===i.UNSIGNED_BYTE&&(I=i.R8)),b===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(I=i.R8UI),L===i.UNSIGNED_SHORT&&(I=i.R16UI),L===i.UNSIGNED_INT&&(I=i.R32UI),L===i.BYTE&&(I=i.R8I),L===i.SHORT&&(I=i.R16I),L===i.INT&&(I=i.R32I)),b===i.RG&&(L===i.FLOAT&&(I=i.RG32F),L===i.HALF_FLOAT&&(I=i.RG16F),L===i.UNSIGNED_BYTE&&(I=i.RG8)),b===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&(I=i.RG8UI),L===i.UNSIGNED_SHORT&&(I=i.RG16UI),L===i.UNSIGNED_INT&&(I=i.RG32UI),L===i.BYTE&&(I=i.RG8I),L===i.SHORT&&(I=i.RG16I),L===i.INT&&(I=i.RG32I)),b===i.RGB_INTEGER&&(L===i.UNSIGNED_BYTE&&(I=i.RGB8UI),L===i.UNSIGNED_SHORT&&(I=i.RGB16UI),L===i.UNSIGNED_INT&&(I=i.RGB32UI),L===i.BYTE&&(I=i.RGB8I),L===i.SHORT&&(I=i.RGB16I),L===i.INT&&(I=i.RGB32I)),b===i.RGBA_INTEGER&&(L===i.UNSIGNED_BYTE&&(I=i.RGBA8UI),L===i.UNSIGNED_SHORT&&(I=i.RGBA16UI),L===i.UNSIGNED_INT&&(I=i.RGBA32UI),L===i.BYTE&&(I=i.RGBA8I),L===i.SHORT&&(I=i.RGBA16I),L===i.INT&&(I=i.RGBA32I)),b===i.RGB&&L===i.UNSIGNED_INT_5_9_9_9_REV&&(I=i.RGB9_E5),b===i.RGBA){let S=A?Ko:ct.getTransfer(U);L===i.FLOAT&&(I=i.RGBA32F),L===i.HALF_FLOAT&&(I=i.RGBA16F),L===i.UNSIGNED_BYTE&&(I=S===mt?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT_4_4_4_4&&(I=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(I=i.RGB5_A1)}return I!==i.R16F&&I!==i.R32F&&I!==i.RG16F&&I!==i.RG32F&&I!==i.RGBA16F&&I!==i.RGBA32F||e.get("EXT_color_buffer_float"),I}function y(T,b){let L;return T?b===null||b===sr||b===Yr?L=i.DEPTH24_STENCIL8:b===qn?L=i.DEPTH32F_STENCIL8:b===zs&&(L=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===sr||b===Yr?L=i.DEPTH_COMPONENT24:b===qn?L=i.DEPTH_COMPONENT32F:b===zs&&(L=i.DEPTH_COMPONENT16),L}function R(T,b){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ln&&T.minFilter!==li?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function w(T){let b=T.target;b.removeEventListener("dispose",w),(function(L){let U=n.get(L);if(U.__webglInit===void 0)return;let A=L.source,I=u.get(A);if(I){let S=I[U.__cacheKey];S.usedTimes--,S.usedTimes===0&&D(L),Object.keys(I).length===0&&u.delete(A)}n.remove(L)})(b),b.isVideoTexture&&h.delete(b)}function P(T){let b=T.target;b.removeEventListener("dispose",P),(function(L){let U=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(U.__webglFramebuffer[I]))for(let S=0;S<U.__webglFramebuffer[I].length;S++)i.deleteFramebuffer(U.__webglFramebuffer[I][S]);else i.deleteFramebuffer(U.__webglFramebuffer[I]);U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer[I])}else{if(Array.isArray(U.__webglFramebuffer))for(let I=0;I<U.__webglFramebuffer.length;I++)i.deleteFramebuffer(U.__webglFramebuffer[I]);else i.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&i.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let I=0;I<U.__webglColorRenderbuffer.length;I++)U.__webglColorRenderbuffer[I]&&i.deleteRenderbuffer(U.__webglColorRenderbuffer[I]);U.__webglDepthRenderbuffer&&i.deleteRenderbuffer(U.__webglDepthRenderbuffer)}let A=L.textures;for(let I=0,S=A.length;I<S;I++){let C=n.get(A[I]);C.__webglTexture&&(i.deleteTexture(C.__webglTexture),a.memory.textures--),n.remove(A[I])}n.remove(L)})(b)}function D(T){let b=n.get(T);i.deleteTexture(b.__webglTexture);let L=T.source;delete u.get(L)[b.__cacheKey],a.memory.textures--}let F=0;function V(T,b){let L=n.get(T);if(T.isVideoTexture&&(function(U){let A=a.render.frame;h.get(U)!==A&&(h.set(U,A),U.update())})(T),T.isRenderTargetTexture===!1&&T.version>0&&L.__version!==T.version){let U=T.image;if(U===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(U.complete!==!1)return void ee(L,T,b);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+b)}let W={[ir]:i.REPEAT,[rr]:i.CLAMP_TO_EDGE,[Dc]:i.MIRRORED_REPEAT},k={[Ln]:i.NEAREST,[$m]:i.NEAREST_MIPMAP_NEAREST,[Ua]:i.NEAREST_MIPMAP_LINEAR,[li]:i.LINEAR,[ql]:i.LINEAR_MIPMAP_NEAREST,[Vr]:i.LINEAR_MIPMAP_LINEAR},Y={[Qm]:i.NEVER,[a0]:i.ALWAYS,[e0]:i.LESS,[n0]:i.LEQUAL,[t0]:i.EQUAL,[s0]:i.GEQUAL,[i0]:i.GREATER,[r0]:i.NOTEQUAL};function X(T,b){if(b.type!==qn||e.has("OES_texture_float_linear")!==!1||b.magFilter!==li&&b.magFilter!==ql&&b.magFilter!==Ua&&b.magFilter!==Vr&&b.minFilter!==li&&b.minFilter!==ql&&b.minFilter!==Ua&&b.minFilter!==Vr||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,W[b.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,W[b.wrapT]),T!==i.TEXTURE_3D&&T!==i.TEXTURE_2D_ARRAY||i.texParameteri(T,i.TEXTURE_WRAP_R,W[b.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,k[b.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,k[b.minFilter]),b.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Y[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ln||b.minFilter!==Ua&&b.minFilter!==Vr||b.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let L=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function K(T,b){let L=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",w));let U=b.source,A=u.get(U);A===void 0&&(A={},u.set(U,A));let I=(function(S){let C=[];return C.push(S.wrapS),C.push(S.wrapT),C.push(S.wrapR||0),C.push(S.magFilter),C.push(S.minFilter),C.push(S.anisotropy),C.push(S.internalFormat),C.push(S.format),C.push(S.type),C.push(S.generateMipmaps),C.push(S.premultiplyAlpha),C.push(S.flipY),C.push(S.unpackAlignment),C.push(S.colorSpace),C.join()})(b);if(I!==T.__cacheKey){A[I]===void 0&&(A[I]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,L=!0),A[I].usedTimes++;let S=A[T.__cacheKey];S!==void 0&&(A[T.__cacheKey].usedTimes--,S.usedTimes===0&&D(b)),T.__cacheKey=I,T.__webglTexture=A[I].texture}return L}function ee(T,b,L){let U=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(U=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(U=i.TEXTURE_3D);let A=K(T,b),I=b.source;t.bindTexture(U,T.__webglTexture,i.TEXTURE0+L);let S=n.get(I);if(I.version!==S.__version||A===!0){t.activeTexture(i.TEXTURE0+L);let C=ct.getPrimaries(ct.workingColorSpace),H=b.colorSpace===kr?null:ct.getPrimaries(b.colorSpace),J=b.colorSpace===kr||C===H?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let z=_(b.image,!1,r.maxTextureSize);z=Te(b,z);let Q=s.convert(b.format,b.colorSpace),$=s.convert(b.type),re,_e=x(b.internalFormat,Q,$,b.colorSpace,b.isVideoTexture);X(U,b);let me=b.mipmaps,Ie=b.isVideoTexture!==!0,Oe=S.__version===void 0||A===!0,Ve=I.dataReady,Fe=R(b,z);if(b.isDepthTexture)_e=y(b.format===Zr,b.type),Oe&&(Ie?t.texStorage2D(i.TEXTURE_2D,1,_e,z.width,z.height):t.texImage2D(i.TEXTURE_2D,0,_e,z.width,z.height,0,Q,$,null));else if(b.isDataTexture)if(me.length>0){Ie&&Oe&&t.texStorage2D(i.TEXTURE_2D,Fe,_e,me[0].width,me[0].height);for(let Ce=0,nt=me.length;Ce<nt;Ce++)re=me[Ce],Ie?Ve&&t.texSubImage2D(i.TEXTURE_2D,Ce,0,0,re.width,re.height,Q,$,re.data):t.texImage2D(i.TEXTURE_2D,Ce,_e,re.width,re.height,0,Q,$,re.data);b.generateMipmaps=!1}else Ie?(Oe&&t.texStorage2D(i.TEXTURE_2D,Fe,_e,z.width,z.height),Ve&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,z.width,z.height,Q,$,z.data)):t.texImage2D(i.TEXTURE_2D,0,_e,z.width,z.height,0,Q,$,z.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ie&&Oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,_e,me[0].width,me[0].height,z.depth);for(let Ce=0,nt=me.length;Ce<nt;Ce++)if(re=me[Ce],b.format!==Yn)if(Q!==null)if(Ie){if(Ve)if(b.layerUpdates.size>0){let ht=hp(re.width,re.height,b.format,b.type);for(let ft of b.layerUpdates){let we=re.data.subarray(ft*ht/re.data.BYTES_PER_ELEMENT,(ft+1)*ht/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ce,0,0,ft,re.width,re.height,1,Q,we)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ce,0,0,0,re.width,re.height,z.depth,Q,re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Ce,_e,re.width,re.height,z.depth,0,re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?Ve&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Ce,0,0,0,re.width,re.height,z.depth,Q,$,re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Ce,_e,re.width,re.height,z.depth,0,Q,$,re.data)}else{Ie&&Oe&&t.texStorage2D(i.TEXTURE_2D,Fe,_e,me[0].width,me[0].height);for(let Ce=0,nt=me.length;Ce<nt;Ce++)re=me[Ce],b.format!==Yn?Q!==null?Ie?Ve&&t.compressedTexSubImage2D(i.TEXTURE_2D,Ce,0,0,re.width,re.height,Q,re.data):t.compressedTexImage2D(i.TEXTURE_2D,Ce,_e,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?Ve&&t.texSubImage2D(i.TEXTURE_2D,Ce,0,0,re.width,re.height,Q,$,re.data):t.texImage2D(i.TEXTURE_2D,Ce,_e,re.width,re.height,0,Q,$,re.data)}else if(b.isDataArrayTexture)if(Ie){if(Oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,_e,z.width,z.height,z.depth),Ve)if(b.layerUpdates.size>0){let Ce=hp(z.width,z.height,b.format,b.type);for(let nt of b.layerUpdates){let ht=z.data.subarray(nt*Ce/z.data.BYTES_PER_ELEMENT,(nt+1)*Ce/z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,nt,z.width,z.height,1,Q,$,ht)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,z.width,z.height,z.depth,Q,$,z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,_e,z.width,z.height,z.depth,0,Q,$,z.data);else if(b.isData3DTexture)Ie?(Oe&&t.texStorage3D(i.TEXTURE_3D,Fe,_e,z.width,z.height,z.depth),Ve&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,z.width,z.height,z.depth,Q,$,z.data)):t.texImage3D(i.TEXTURE_3D,0,_e,z.width,z.height,z.depth,0,Q,$,z.data);else if(b.isFramebufferTexture){if(Oe)if(Ie)t.texStorage2D(i.TEXTURE_2D,Fe,_e,z.width,z.height);else{let Ce=z.width,nt=z.height;for(let ht=0;ht<Fe;ht++)t.texImage2D(i.TEXTURE_2D,ht,_e,Ce,nt,0,Q,$,null),Ce>>=1,nt>>=1}}else if(me.length>0){if(Ie&&Oe){let Ce=fe(me[0]);t.texStorage2D(i.TEXTURE_2D,Fe,_e,Ce.width,Ce.height)}for(let Ce=0,nt=me.length;Ce<nt;Ce++)re=me[Ce],Ie?Ve&&t.texSubImage2D(i.TEXTURE_2D,Ce,0,0,Q,$,re):t.texImage2D(i.TEXTURE_2D,Ce,_e,Q,$,re);b.generateMipmaps=!1}else if(Ie){if(Oe){let Ce=fe(z);t.texStorage2D(i.TEXTURE_2D,Fe,_e,Ce.width,Ce.height)}Ve&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q,$,z)}else t.texImage2D(i.TEXTURE_2D,0,_e,Q,$,z);m(b)&&g(U),S.__version=I.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function oe(T,b,L,U,A,I){let S=s.convert(L.format,L.colorSpace),C=s.convert(L.type),H=x(L.internalFormat,S,C,L.colorSpace),J=n.get(b),z=n.get(L);if(z.__renderTarget=b,!J.__hasExternalTextures){let Q=Math.max(1,b.width>>I),$=Math.max(1,b.height>>I);A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY?t.texImage3D(A,I,H,Q,$,b.depth,0,S,C,null):t.texImage2D(A,I,H,Q,$,0,S,C,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Ee(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,U,A,z.__webglTexture,0,ae(b)):(A===i.TEXTURE_2D||A>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&A<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,U,A,z.__webglTexture,I),t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(T,b,L){if(i.bindRenderbuffer(i.RENDERBUFFER,T),b.depthBuffer){let U=b.depthTexture,A=U&&U.isDepthTexture?U.type:null,I=y(b.stencilBuffer,A),S=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,C=ae(b);Ee(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,C,I,b.width,b.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,C,I,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,I,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,S,i.RENDERBUFFER,T)}else{let U=b.textures;for(let A=0;A<U.length;A++){let I=U[A],S=s.convert(I.format,I.colorSpace),C=s.convert(I.type),H=x(I.internalFormat,S,C,I.colorSpace),J=ae(b);L&&Ee(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,J,H,b.width,b.height):Ee(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,H,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,H,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(T){let b=n.get(T),L=T.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==T.depthTexture){let U=T.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),U){let A=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,U.removeEventListener("dispose",A)};U.addEventListener("dispose",A),b.__depthDisposeCallback=A}b.__boundDepthTexture=U}if(T.depthTexture&&!b.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");(function(U,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!A.depthTexture||!A.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let I=n.get(A.depthTexture);I.__renderTarget=A,I.__webglTexture&&A.depthTexture.image.width===A.width&&A.depthTexture.image.height===A.height||(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),V(A.depthTexture,0);let S=I.__webglTexture,C=ae(A);if(A.depthTexture.format===Hs)Ee(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,S,0,C):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,S,0);else{if(A.depthTexture.format!==Zr)throw new Error("Unknown depthTexture format");Ee(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,S,0,C):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,S,0)}})(b.__webglFramebuffer,T)}else if(L){b.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[U]),b.__webglDepthbuffer[U]===void 0)b.__webglDepthbuffer[U]=i.createRenderbuffer(),se(b.__webglDepthbuffer[U],T,!1);else{let A=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,I=b.__webglDepthbuffer[U];i.bindRenderbuffer(i.RENDERBUFFER,I),i.framebufferRenderbuffer(i.FRAMEBUFFER,A,i.RENDERBUFFER,I)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),se(b.__webglDepthbuffer,T,!1);else{let U=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,A=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,A),i.framebufferRenderbuffer(i.FRAMEBUFFER,U,i.RENDERBUFFER,A)}t.bindFramebuffer(i.FRAMEBUFFER,null)}let Re=[],ie=[];function ae(T){return Math.min(r.maxSamples,T.samples)}function Ee(T){let b=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Te(T,b){let L=T.colorSpace,U=T.format,A=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||L!==rs&&L!==kr&&(ct.getTransfer(L)===mt?U===Yn&&A===Pi||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),b}function fe(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=function(){let T=F;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),F+=1,T},this.resetTextureUnits=function(){F=0},this.setTexture2D=V,this.setTexture2DArray=function(T,b){let L=n.get(T);T.version>0&&L.__version!==T.version?ee(L,T,b):t.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+b)},this.setTexture3D=function(T,b){let L=n.get(T);T.version>0&&L.__version!==T.version?ee(L,T,b):t.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+b)},this.setTextureCube=function(T,b){let L=n.get(T);T.version>0&&L.__version!==T.version?(function(U,A,I){if(A.image.length!==6)return;let S=K(U,A),C=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+I);let H=n.get(C);if(C.version!==H.__version||S===!0){t.activeTexture(i.TEXTURE0+I);let J=ct.getPrimaries(ct.workingColorSpace),z=A.colorSpace===kr?null:ct.getPrimaries(A.colorSpace),Q=A.colorSpace===kr||J===z?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let $=A.isCompressedTexture||A.image[0].isCompressedTexture,re=A.image[0]&&A.image[0].isDataTexture,_e=[];for(let we=0;we<6;we++)_e[we]=$||re?re?A.image[we].image:A.image[we]:_(A.image[we],!0,r.maxCubemapSize),_e[we]=Te(A,_e[we]);let me=_e[0],Ie=s.convert(A.format,A.colorSpace),Oe=s.convert(A.type),Ve=x(A.internalFormat,Ie,Oe,A.colorSpace),Fe=A.isVideoTexture!==!0,Ce=H.__version===void 0||S===!0,nt=C.dataReady,ht,ft=R(A,me);if(X(i.TEXTURE_CUBE_MAP,A),$){Fe&&Ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Ve,me.width,me.height);for(let we=0;we<6;we++){ht=_e[we].mipmaps;for(let je=0;je<ht.length;je++){let j=ht[je];A.format!==Yn?Ie!==null?Fe?nt&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,je,0,0,j.width,j.height,Ie,j.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,je,Ve,j.width,j.height,0,j.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?nt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,je,0,0,j.width,j.height,Ie,Oe,j.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,je,Ve,j.width,j.height,0,Ie,Oe,j.data)}}}else{if(ht=A.mipmaps,Fe&&Ce){ht.length>0&&ft++;let we=fe(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Ve,we.width,we.height)}for(let we=0;we<6;we++)if(re){Fe?nt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,_e[we].width,_e[we].height,Ie,Oe,_e[we].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Ve,_e[we].width,_e[we].height,0,Ie,Oe,_e[we].data);for(let je=0;je<ht.length;je++){let j=ht[je].image[we].image;Fe?nt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,je+1,0,0,j.width,j.height,Ie,Oe,j.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,je+1,Ve,j.width,j.height,0,Ie,Oe,j.data)}}else{Fe?nt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,Ie,Oe,_e[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Ve,Ie,Oe,_e[we]);for(let je=0;je<ht.length;je++){let j=ht[je];Fe?nt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,je+1,0,0,Ie,Oe,j.image[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,je+1,Ve,Ie,Oe,j.image[we])}}}m(A)&&g(i.TEXTURE_CUBE_MAP),H.__version=C.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version})(L,T,b):t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+b)},this.rebindTextures=function(T,b,L){let U=n.get(T);b!==void 0&&oe(U.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&Se(T)},this.setupRenderTarget=function(T){let b=T.texture,L=n.get(T),U=n.get(b);T.addEventListener("dispose",P);let A=T.textures,I=T.isWebGLCubeRenderTarget===!0,S=A.length>1;if(S||(U.__webglTexture===void 0&&(U.__webglTexture=i.createTexture()),U.__version=b.version,a.memory.textures++),I){L.__webglFramebuffer=[];for(let C=0;C<6;C++)if(b.mipmaps&&b.mipmaps.length>0){L.__webglFramebuffer[C]=[];for(let H=0;H<b.mipmaps.length;H++)L.__webglFramebuffer[C][H]=i.createFramebuffer()}else L.__webglFramebuffer[C]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){L.__webglFramebuffer=[];for(let C=0;C<b.mipmaps.length;C++)L.__webglFramebuffer[C]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(S)for(let C=0,H=A.length;C<H;C++){let J=n.get(A[C]);J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Ee(T)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let C=0;C<A.length;C++){let H=A[C];L.__webglColorRenderbuffer[C]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[C]);let J=s.convert(H.format,H.colorSpace),z=s.convert(H.type),Q=x(H.internalFormat,J,z,H.colorSpace,T.isXRRenderTarget===!0),$=ae(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,$,Q,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+C,i.RENDERBUFFER,L.__webglColorRenderbuffer[C])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),se(L.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(I){t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture),X(i.TEXTURE_CUBE_MAP,b);for(let C=0;C<6;C++)if(b.mipmaps&&b.mipmaps.length>0)for(let H=0;H<b.mipmaps.length;H++)oe(L.__webglFramebuffer[C][H],T,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+C,H);else oe(L.__webglFramebuffer[C],T,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0);m(b)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(S){for(let C=0,H=A.length;C<H;C++){let J=A[C],z=n.get(J);t.bindTexture(i.TEXTURE_2D,z.__webglTexture),X(i.TEXTURE_2D,J),oe(L.__webglFramebuffer,T,J,i.COLOR_ATTACHMENT0+C,i.TEXTURE_2D,0),m(J)&&g(i.TEXTURE_2D)}t.unbindTexture()}else{let C=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(C=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(C,U.__webglTexture),X(C,b),b.mipmaps&&b.mipmaps.length>0)for(let H=0;H<b.mipmaps.length;H++)oe(L.__webglFramebuffer[H],T,b,i.COLOR_ATTACHMENT0,C,H);else oe(L.__webglFramebuffer,T,b,i.COLOR_ATTACHMENT0,C,0);m(b)&&g(C),t.unbindTexture()}T.depthBuffer&&Se(T)},this.updateRenderTargetMipmap=function(T){let b=T.textures;for(let L=0,U=b.length;L<U;L++){let A=b[L];if(m(A)){let I=v(T),S=n.get(A).__webglTexture;t.bindTexture(I,S),g(I),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(T){if(T.samples>0){if(Ee(T)===!1){let b=T.textures,L=T.width,U=T.height,A=i.COLOR_BUFFER_BIT,I=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,S=n.get(T),C=b.length>1;if(C)for(let H=0;H<b.length;H++)t.bindFramebuffer(i.FRAMEBUFFER,S.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,S.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,S.__webglFramebuffer);for(let H=0;H<b.length;H++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(A|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(A|=i.STENCIL_BUFFER_BIT)),C){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,S.__webglColorRenderbuffer[H]);let J=n.get(b[H]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,J,0)}i.blitFramebuffer(0,0,L,U,0,0,L,U,A,i.NEAREST),c===!0&&(Re.length=0,ie.length=0,Re.push(i.COLOR_ATTACHMENT0+H),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Re.push(I),ie.push(I),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ie)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Re))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),C)for(let H=0;H<b.length;H++){t.bindFramebuffer(i.FRAMEBUFFER,S.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.RENDERBUFFER,S.__webglColorRenderbuffer[H]);let J=n.get(b[H]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.TEXTURE_2D,J,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,S.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){let b=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}},this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Ee}function Yg(i,e){return{convert:function(t,n=""){let r,s=ct.getTransfer(n);if(t===Pi)return i.UNSIGNED_BYTE;if(t===uu)return i.UNSIGNED_SHORT_4_4_4_4;if(t===du)return i.UNSIGNED_SHORT_5_5_5_1;if(t===Bp)return i.UNSIGNED_INT_5_9_9_9_REV;if(t===Np)return i.BYTE;if(t===Op)return i.SHORT;if(t===zs)return i.UNSIGNED_SHORT;if(t===hu)return i.INT;if(t===sr)return i.UNSIGNED_INT;if(t===qn)return i.FLOAT;if(t===$s)return i.HALF_FLOAT;if(t===Fp)return i.ALPHA;if(t===zp)return i.RGB;if(t===Yn)return i.RGBA;if(t===Hp)return i.LUMINANCE;if(t===kp)return i.LUMINANCE_ALPHA;if(t===Hs)return i.DEPTH_COMPONENT;if(t===Zr)return i.DEPTH_STENCIL;if(t===pu)return i.RED;if(t===fu)return i.RED_INTEGER;if(t===Vp)return i.RG;if(t===mu)return i.RG_INTEGER;if(t===gu)return i.RGBA_INTEGER;if(t===go||t===vo||t===_o||t===xo)if(s===mt){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(t===go)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(t===go)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===vo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===_o)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===xo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===Nc||t===Oc||t===Bc||t===Fc){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(t===Nc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Oc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Bc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Fc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===zc||t===Hc||t===kc){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(t===zc||t===Hc)return s===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(t===kc)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}if(t===Vc||t===Gc||t===Wc||t===Xc||t===jc||t===qc||t===Yc||t===Zc||t===Jc||t===Kc||t===$c||t===Qc||t===eh||t===th){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(t===Vc)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===Gc)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===Wc)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===Xc)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===jc)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===qc)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Yc)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===Zc)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Jc)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===Kc)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===$c)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===Qc)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===eh)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===th)return s===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===yo||t===nh||t===ih){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(t===yo)return s===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===nh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===ih)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Gp||t===rh||t===sh||t===ah){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(t===yo)return r.COMPRESSED_RED_RGTC1_EXT;if(t===rh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===sh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===ah)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===Yr?i.UNSIGNED_INT_24_8:i[t]!==void 0?i[t]:null}}}var Eh=class extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},tn=class extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Zg={type:"move"},Os=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),g=this._getHandJoint(l,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,f=.005;l.inputState.pinching&&u>p+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=p-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zg)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new tn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},bh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new dn;e.properties.get(r).__webglTexture=t.texture,t.depthNear==n.depthNear&&t.depthFar==n.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new pn({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qe(new Wt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Th=class extends Ii{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,f=null,_=new bh,m=t.getContextAttributes(),g=null,v=null,x=[],y=[],R=new ce,w=null,P=new hn;P.viewport=new At;let D=new hn;D.viewport=new At;let F=[P,D],V=new Eh,W=null,k=null;function Y(ie){let ae=y.indexOf(ie.inputSource);if(ae===-1)return;let Ee=x[ae];Ee!==void 0&&(Ee.update(ie.inputSource,ie.frame,l||a),Ee.dispatchEvent({type:ie.type,data:ie.inputSource}))}function X(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",K);for(let ie=0;ie<x.length;ie++){let ae=y[ie];ae!==null&&(y[ie]=null,x[ie].disconnect(ae))}W=null,k=null,_.reset(),e.setRenderTarget(g),p=null,u=null,d=null,r=null,v=null,Re.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}function K(ie){for(let ae=0;ae<ie.removed.length;ae++){let Ee=ie.removed[ae],Te=y.indexOf(Ee);Te>=0&&(y[Te]=null,x[Te].disconnect(Ee))}for(let ae=0;ae<ie.added.length;ae++){let Ee=ie.added[ae],Te=y.indexOf(Ee);if(Te===-1){for(let T=0;T<x.length;T++){if(T>=y.length){y.push(Ee),Te=T;break}if(y[T]===null){y[T]=Ee,Te=T;break}}if(Te===-1)break}let fe=x[Te];fe&&fe.connect(Ee)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ae=x[ie];return ae===void 0&&(ae=new Os,x[ie]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(ie){let ae=x[ie];return ae===void 0&&(ae=new Os,x[ie]=ae),ae.getGripSpace()},this.getHand=function(ie){let ae=x[ie];return ae===void 0&&(ae=new Os,x[ie]=ae),ae.getHandSpace()},this.setFramebufferScaleFactor=function(ie){s=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){o=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ie){l=ie},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(ie){if(r=ie,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",X),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){let ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new ui(p.framebufferWidth,p.framebufferHeight,{format:Yn,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ae=null,Ee=null,Te=null;m.depth&&(Te=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?Zr:Hs,Ee=m.stencil?Yr:sr);let fe={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};d=new XRWebGLBinding(r,t),u=d.createProjectionLayer(fe),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new ui(u.textureWidth,u.textureHeight,{format:Yn,type:Pi,depthTexture:new Lo(u.textureWidth,u.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Re.setContext(r),Re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};let ee=new M,oe=new M;function se(ie,ae){ae===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ae.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;let ae=ie.near,Ee=ie.far;_.texture!==null&&(_.depthNear>0&&(ae=_.depthNear),_.depthFar>0&&(Ee=_.depthFar)),V.near=D.near=P.near=ae,V.far=D.far=P.far=Ee,W===V.near&&k===V.far||(r.updateRenderState({depthNear:V.near,depthFar:V.far}),W=V.near,k=V.far),P.layers.mask=2|ie.layers.mask,D.layers.mask=4|ie.layers.mask,V.layers.mask=P.layers.mask|D.layers.mask;let Te=ie.parent,fe=V.cameras;se(V,Te);for(let T=0;T<fe.length;T++)se(fe[T],Te);fe.length===2?(function(T,b,L){ee.setFromMatrixPosition(b.matrixWorld),oe.setFromMatrixPosition(L.matrixWorld);let U=ee.distanceTo(oe),A=b.projectionMatrix.elements,I=L.projectionMatrix.elements,S=A[14]/(A[10]-1),C=A[14]/(A[10]+1),H=(A[9]+1)/A[5],J=(A[9]-1)/A[5],z=(A[8]-1)/A[0],Q=(I[8]+1)/I[0],$=S*z,re=S*Q,_e=U/(-z+Q),me=_e*-z;if(b.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(me),T.translateZ(_e),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert(),A[10]===-1)T.projectionMatrix.copy(b.projectionMatrix),T.projectionMatrixInverse.copy(b.projectionMatrixInverse);else{let Ie=S+_e,Oe=C+_e,Ve=$-me,Fe=re+(U-me),Ce=H*C/Oe*Ie,nt=J*C/Oe*Ie;T.projectionMatrix.makePerspective(Ve,Fe,Ce,nt,Ie,Oe),T.projectionMatrixInverse.copy(T.projectionMatrix).invert()}})(V,P,D):V.projectionMatrix.copy(P.projectionMatrix),(function(T,b,L){L===null?T.matrix.copy(b.matrixWorld):(T.matrix.copy(L.matrixWorld),T.matrix.invert(),T.matrix.multiply(b.matrixWorld)),T.matrix.decompose(T.position,T.quaternion,T.scale),T.updateMatrixWorld(!0),T.projectionMatrix.copy(b.projectionMatrix),T.projectionMatrixInverse.copy(b.projectionMatrixInverse),T.isPerspectiveCamera&&(T.fov=2*ch*Math.atan(1/T.projectionMatrix.elements[5]),T.zoom=1)})(ie,V,Te)},this.getCamera=function(){return V},this.getFoveation=function(){if(u!==null||p!==null)return c},this.setFoveation=function(ie){c=ie,u!==null&&(u.fixedFoveation=ie),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ie)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(V)};let Se=null,Re=new qp;Re.setAnimationLoop((function(ie,ae){if(h=ae.getViewerPose(l||a),f=ae,h!==null){let Ee=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let Te=!1;Ee.length!==V.cameras.length&&(V.cameras.length=0,Te=!0);for(let T=0;T<Ee.length;T++){let b=Ee[T],L=null;if(p!==null)L=p.getViewport(b);else{let A=d.getViewSubImage(u,b);L=A.viewport,T===0&&(e.setRenderTargetTextures(v,A.colorTexture,u.ignoreDepthValues?void 0:A.depthStencilTexture),e.setRenderTarget(v))}let U=F[T];U===void 0&&(U=new hn,U.layers.enable(T),U.viewport=new At,F[T]=U),U.matrix.fromArray(b.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(b.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(L.x,L.y,L.width,L.height),T===0&&(V.matrix.copy(U.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Te===!0&&V.cameras.push(U)}let fe=r.enabledFeatures;if(fe&&fe.includes("depth-sensing")){let T=d.getDepthInformation(Ee[0]);T&&T.isValid&&T.texture&&_.init(e,T,r.renderState)}}for(let Ee=0;Ee<x.length;Ee++){let Te=y[Ee],fe=x[Ee];Te!==null&&fe!==void 0&&fe.update(Te,ae,l||a)}Se&&Se(ie,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),f=null})),this.setAnimationLoop=function(ie){Se=ie},this.dispose=function(){}}},$i=new Gt,Jg=new Ne;function Kg(i,e){function t(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function n(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,t(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,t(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,t(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===1&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,t(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===1&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,t(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,t(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,c=a.envMapRotation;o&&(r.envMap.value=o,$i.copy(c),$i.x*=-1,$i.y*=-1,$i.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),r.envMapRotation.value.setFromMatrix4(Jg.makeRotationFromEuler($i)),r.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap&&(r.lightMap.value=s.lightMap,r.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,r.lightMapTransform)),s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,jp(i)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,o,c){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(r,s):s.isMeshToonMaterial?(n(r,s),(function(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)})(r,s)):s.isMeshPhongMaterial?(n(r,s),(function(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)})(r,s)):s.isMeshStandardMaterial?(n(r,s),(function(l,h){l.metalness.value=h.metalness,h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,l.metalnessMapTransform)),l.roughness.value=h.roughness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,l.roughnessMapTransform)),h.envMap&&(l.envMapIntensity.value=h.envMapIntensity)})(r,s),s.isMeshPhysicalMaterial&&(function(l,h,d){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,l.sheenColorMapTransform)),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,l.sheenRoughnessMapTransform))),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,l.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(l.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===1&&l.clearcoatNormalScale.value.negate())),h.dispersion>0&&(l.dispersion.value=h.dispersion),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,l.iridescenceMapTransform)),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=d.texture,l.transmissionSamplerSize.value.set(d.width,d.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,l.transmissionMapTransform)),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(l.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(l.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,l.specularColorMapTransform)),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,l.specularIntensityMapTransform))})(r,s,c)):s.isMeshMatcapMaterial?(n(r,s),(function(l,h){h.matcap&&(l.matcap.value=h.matcap)})(r,s)):s.isMeshDepthMaterial?n(r,s):s.isMeshDistanceMaterial?(n(r,s),(function(l,h){let d=e.get(h).light;l.referencePosition.value.setFromMatrixPosition(d.matrixWorld),l.nearDistance.value=d.shadow.camera.near,l.farDistance.value=d.shadow.camera.far})(r,s)):s.isMeshNormalMaterial?n(r,s):s.isLineBasicMaterial?((function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform))})(r,s),s.isLineDashedMaterial&&(function(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale})(r,s)):s.isPointsMaterial?(function(l,h,d,u){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*d,l.scale.value=.5*u,h.map&&(l.map.value=h.map,t(h.map,l.uvTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(r,s,a,o):s.isSpriteMaterial?(function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function $g(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(d,u,p,f){let _=d.value,m=u+"_"+p;if(f[m]===void 0)return f[m]=typeof _=="number"||typeof _=="boolean"?_:_.clone(),!0;{let g=f[m];if(typeof _=="number"||typeof _=="boolean"){if(g!==_)return f[m]=_,!0}else if(g.equals(_)===!1)return g.copy(_),!0}return!1}function l(d){let u={boundary:0,storage:0};return typeof d=="number"||typeof d=="boolean"?(u.boundary=4,u.storage=4):d.isVector2?(u.boundary=8,u.storage=8):d.isVector3||d.isColor?(u.boundary=16,u.storage=12):d.isVector4?(u.boundary=16,u.storage=16):d.isMatrix3?(u.boundary=48,u.storage=48):d.isMatrix4?(u.boundary=64,u.storage=64):d.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",d),u}function h(d){let u=d.target;u.removeEventListener("dispose",h);let p=a.indexOf(u.__bindingPointIndex);a.splice(p,1),i.deleteBuffer(r[u.id]),delete r[u.id],delete s[u.id]}return{bind:function(d,u){let p=u.program;n.uniformBlockBinding(d,p)},update:function(d,u){let p=r[d.id];p===void 0&&((function(m){let g=m.uniforms,v=0,x=16;for(let R=0,w=g.length;R<w;R++){let P=Array.isArray(g[R])?g[R]:[g[R]];for(let D=0,F=P.length;D<F;D++){let V=P[D],W=Array.isArray(V.value)?V.value:[V.value];for(let k=0,Y=W.length;k<Y;k++){let X=l(W[k]),K=v%x,ee=K%X.boundary,oe=K+ee;v+=ee,oe!==0&&x-oe<X.storage&&(v+=x-oe),V.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=v,v+=X.storage}}}let y=v%x;y>0&&(v+=x-y),m.__size=v,m.__cache={}})(d),p=(function(m){let g=(function(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();m.__bindingPointIndex=g;let v=i.createBuffer(),x=m.__size,y=m.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,x,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,g,v),v})(d),r[d.id]=p,d.addEventListener("dispose",h));let f=u.program;n.updateUBOMapping(d,f);let _=e.render.frame;s[d.id]!==_&&((function(m){let g=r[m.id],v=m.uniforms,x=m.__cache;i.bindBuffer(i.UNIFORM_BUFFER,g);for(let y=0,R=v.length;y<R;y++){let w=Array.isArray(v[y])?v[y]:[v[y]];for(let P=0,D=w.length;P<D;P++){let F=w[P];if(c(F,y,P,x)===!0){let V=F.__offset,W=Array.isArray(F.value)?F.value:[F.value],k=0;for(let Y=0;Y<W.length;Y++){let X=W[Y],K=l(X);typeof X=="number"||typeof X=="boolean"?(F.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,V+k,F.__data)):X.isMatrix3?(F.__data[0]=X.elements[0],F.__data[1]=X.elements[1],F.__data[2]=X.elements[2],F.__data[3]=0,F.__data[4]=X.elements[3],F.__data[5]=X.elements[4],F.__data[6]=X.elements[5],F.__data[7]=0,F.__data[8]=X.elements[6],F.__data[9]=X.elements[7],F.__data[10]=X.elements[8],F.__data[11]=0):(X.toArray(F.__data,k),k+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)})(d),s[d.id]=_)},dispose:function(){for(let d in r)i.deleteBuffer(r[d]);a=[],r={},s={}}}}var Uo=class{constructor(e={}){let{canvas:t=l0(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e,p;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let f=new Uint32Array(4),_=new Int32Array(4),m=null,g=null,v=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ot,this.toneMapping=0,this.toneMappingExposure=1;let y=this,R=!1,w=0,P=0,D=null,F=-1,V=null,W=new At,k=new At,Y=null,X=new xe(0),K=0,ee=t.width,oe=t.height,se=1,Se=null,Re=null,ie=new At(0,0,ee,oe),ae=new At(0,0,ee,oe),Ee=!1,Te=new Qr,fe=!1,T=!1,b=new Ne,L=new Ne,U=new M,A=new At,I={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},S=!1;function C(){return D===null?se:1}let H,J,z,Q,$,re,_e,me,Ie,Oe,Ve,Fe,Ce,nt,ht,ft,we,je,j,ue,be,Me,le,Ue,N=n;function rt(E,G){return t.getContext(E,G)}try{let E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",ut,!1),t.addEventListener("webglcontextrestored",Dt,!1),t.addEventListener("webglcontextcreationerror",Et,!1),N===null){let G="webgl2";if(N=rt(G,E),N===null)throw rt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}function yt(){H=new U0(N),H.init(),Me=new Yg(N,H),J=new C0(N,H,e,Me),z=new jg(N,H),J.reverseDepthBuffer&&u&&z.buffers.depth.setReversed(!0),Q=new O0(N),$=new Og,re=new qg(N,H,z,$,J,Me,Q),_e=new I0(y),me=new L0(y),Ie=new b0(N),le=new A0(N,Ie),Oe=new D0(N,Ie,Q,le),Ve=new F0(N,Oe,Ie,Q),j=new B0(N,J,re),ft=new P0($),Fe=new Ng(y,_e,me,H,J,le,ft),Ce=new Kg(y,$),nt=new Fg,ht=new Gg(H),je=new w0(y,_e,me,z,Ve,p,c),we=new Wg(y,Ve,J),Ue=new $g(N,Q,J,z),ue=new R0(N,H,Q),be=new N0(N,H,Q),Q.programs=Fe.programs,y.capabilities=J,y.extensions=H,y.properties=$,y.renderLists=nt,y.shadowMap=we,y.state=z,y.info=Q}yt();let Pe=new Th(y,N);function ut(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let E=Q.autoReset,G=we.enabled,Z=we.autoUpdate,ne=we.needsUpdate,q=we.type;yt(),Q.autoReset=E,we.enabled=G,we.autoUpdate=Z,we.needsUpdate=ne,we.type=q}function Et(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ge(E){let G=E.target;G.removeEventListener("dispose",Ge),(function(Z){(function(ne){let q=$.get(ne).programs;q!==void 0&&(q.forEach((function(de){Fe.releaseProgram(de)})),ne.isShaderMaterial&&Fe.releaseShaderCache(ne))})(Z),$.remove(Z)})(G)}function bt(E,G,Z){E.transparent===!0&&E.side===2&&E.forceSinglePass===!1?(E.side=1,E.needsUpdate=!0,It(E,G,Z),E.side=0,E.needsUpdate=!0,It(E,G,Z),E.side=2):It(E,G,Z)}this.xr=Pe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let E=H.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=H.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(E){E!==void 0&&(se=E,this.setSize(ee,oe,!1))},this.getSize=function(E){return E.set(ee,oe)},this.setSize=function(E,G,Z=!0){Pe.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(ee=E,oe=G,t.width=Math.floor(E*se),t.height=Math.floor(G*se),Z===!0&&(t.style.width=E+"px",t.style.height=G+"px"),this.setViewport(0,0,E,G))},this.getDrawingBufferSize=function(E){return E.set(ee*se,oe*se).floor()},this.setDrawingBufferSize=function(E,G,Z){ee=E,oe=G,se=Z,t.width=Math.floor(E*Z),t.height=Math.floor(G*Z),this.setViewport(0,0,E,G)},this.getCurrentViewport=function(E){return E.copy(W)},this.getViewport=function(E){return E.copy(ie)},this.setViewport=function(E,G,Z,ne){E.isVector4?ie.set(E.x,E.y,E.z,E.w):ie.set(E,G,Z,ne),z.viewport(W.copy(ie).multiplyScalar(se).round())},this.getScissor=function(E){return E.copy(ae)},this.setScissor=function(E,G,Z,ne){E.isVector4?ae.set(E.x,E.y,E.z,E.w):ae.set(E,G,Z,ne),z.scissor(k.copy(ae).multiplyScalar(se).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(E){z.setScissorTest(Ee=E)},this.setOpaqueSort=function(E){Se=E},this.setTransparentSort=function(E){Re=E},this.getClearColor=function(E){return E.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor.apply(je,arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha.apply(je,arguments)},this.clear=function(E=!0,G=!0,Z=!0){let ne=0;if(E){let q=!1;if(D!==null){let de=D.texture.format;q=de===gu||de===mu||de===fu}if(q){let de=D.texture.type,Ae=de===Pi||de===sr||de===zs||de===Yr||de===uu||de===du,De=je.getClearColor(),ze=je.getClearAlpha(),Ye=De.r,Ke=De.g,He=De.b;Ae?(f[0]=Ye,f[1]=Ke,f[2]=He,f[3]=ze,N.clearBufferuiv(N.COLOR,0,f)):(_[0]=Ye,_[1]=Ke,_[2]=He,_[3]=ze,N.clearBufferiv(N.COLOR,0,_))}else ne|=N.COLOR_BUFFER_BIT}G&&(ne|=N.DEPTH_BUFFER_BIT),Z&&(ne|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",Dt,!1),t.removeEventListener("webglcontextcreationerror",Et,!1),nt.dispose(),ht.dispose(),$.dispose(),_e.dispose(),me.dispose(),Ve.dispose(),le.dispose(),Ue.dispose(),Fe.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",We),Pe.removeEventListener("sessionend",B),O.stop()},this.renderBufferDirect=function(E,G,Z,ne,q,de){G===null&&(G=I);let Ae=q.isMesh&&q.matrixWorld.determinant()<0,De=(function(at,on,Jt,et,qe){on.isScene!==!0&&(on=I),re.resetTextureUnits();let wn=on.fog,kl=et.isMeshStandardMaterial?on.environment:null,Ms=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:rs,Sr=(et.isMeshStandardMaterial?me:_e).get(et.envMap||kl),Vl=et.vertexColors===!0&&!!Jt.attributes.color&&Jt.attributes.color.itemSize===4,Gl=!!Jt.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Wl=!!Jt.morphAttributes.position,Mi=!!Jt.morphAttributes.normal,Tm=!!Jt.morphAttributes.color,pd=0;et.toneMapped&&(D!==null&&D.isXRRenderTarget!==!0||(pd=y.toneMapping));let fd=Jt.morphAttributes.position||Jt.morphAttributes.normal||Jt.morphAttributes.color,wm=fd!==void 0?fd.length:0,st=$.get(et),Am=g.state.lights;if(fe===!0&&(T===!0||at!==V)){let Sn=at===V&&et.id===F;ft.setState(et,at,Sn)}let An=!1;et.version===st.__version?st.needsLights&&st.lightsStateVersion!==Am.state.version||st.outputColorSpace!==Ms||qe.isBatchedMesh&&st.batching===!1?An=!0:qe.isBatchedMesh||st.batching!==!0?qe.isBatchedMesh&&st.batchingColor===!0&&qe.colorTexture===null||qe.isBatchedMesh&&st.batchingColor===!1&&qe.colorTexture!==null||qe.isInstancedMesh&&st.instancing===!1?An=!0:qe.isInstancedMesh||st.instancing!==!0?qe.isSkinnedMesh&&st.skinning===!1?An=!0:qe.isSkinnedMesh||st.skinning!==!0?qe.isInstancedMesh&&st.instancingColor===!0&&qe.instanceColor===null||qe.isInstancedMesh&&st.instancingColor===!1&&qe.instanceColor!==null||qe.isInstancedMesh&&st.instancingMorph===!0&&qe.morphTexture===null||qe.isInstancedMesh&&st.instancingMorph===!1&&qe.morphTexture!==null||st.envMap!==Sr||et.fog===!0&&st.fog!==wn?An=!0:st.numClippingPlanes===void 0||st.numClippingPlanes===ft.numPlanes&&st.numIntersection===ft.numIntersection?(st.vertexAlphas!==Vl||st.vertexTangents!==Gl||st.morphTargets!==Wl||st.morphNormals!==Mi||st.morphColors!==Tm||st.toneMapping!==pd||st.morphTargetsCount!==wm)&&(An=!0):An=!0:An=!0:An=!0:An=!0:(An=!0,st.__version=et.version);let Xi=st.currentProgram;An===!0&&(Xi=It(et,on,qe));let md=!1,Ss=!1,Xl=!1,Nt=Xi.getUniforms(),Si=st.uniforms;if(z.useProgram(Xi.program)&&(md=!0,Ss=!0,Xl=!0),et.id!==F&&(F=et.id,Ss=!0),md||V!==at){z.buffers.depth.getReversed()?(b.copy(at.projectionMatrix),(function(ji){let Tt=ji.elements;Tt[2]=.5*Tt[2]+.5*Tt[3],Tt[6]=.5*Tt[6]+.5*Tt[7],Tt[10]=.5*Tt[10]+.5*Tt[11],Tt[14]=.5*Tt[14]+.5*Tt[15]})(b),(function(ji){let Tt=ji.elements;Tt[11]===-1?(Tt[10]=-Tt[10]-1,Tt[14]=-Tt[14]):(Tt[10]=-Tt[10],Tt[14]=1-Tt[14])})(b),Nt.setValue(N,"projectionMatrix",b)):Nt.setValue(N,"projectionMatrix",at.projectionMatrix),Nt.setValue(N,"viewMatrix",at.matrixWorldInverse);let Sn=Nt.map.cameraPosition;Sn!==void 0&&Sn.setValue(N,U.setFromMatrixPosition(at.matrixWorld)),J.logarithmicDepthBuffer&&Nt.setValue(N,"logDepthBufFC",2/(Math.log(at.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Nt.setValue(N,"isOrthographic",at.isOrthographicCamera===!0),V!==at&&(V=at,Ss=!0,Xl=!0)}if(qe.isSkinnedMesh){Nt.setOptional(N,qe,"bindMatrix"),Nt.setOptional(N,qe,"bindMatrixInverse");let Sn=qe.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Nt.setValue(N,"boneTexture",Sn.boneTexture,re))}qe.isBatchedMesh&&(Nt.setOptional(N,qe,"batchingTexture"),Nt.setValue(N,"batchingTexture",qe._matricesTexture,re),Nt.setOptional(N,qe,"batchingIdTexture"),Nt.setValue(N,"batchingIdTexture",qe._indirectTexture,re),Nt.setOptional(N,qe,"batchingColorTexture"),qe._colorsTexture!==null&&Nt.setValue(N,"batchingColorTexture",qe._colorsTexture,re));let jl=Jt.morphAttributes;jl.position===void 0&&jl.normal===void 0&&jl.color===void 0||j.update(qe,Jt,Xi),(Ss||st.receiveShadow!==qe.receiveShadow)&&(st.receiveShadow=qe.receiveShadow,Nt.setValue(N,"receiveShadow",qe.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(Si.envMap.value=Sr,Si.flipEnvMap.value=Sr.isCubeTexture&&Sr.isRenderTargetTexture===!1?-1:1),et.isMeshStandardMaterial&&et.envMap===null&&on.environment!==null&&(Si.envMapIntensity.value=on.environmentIntensity),Ss&&(Nt.setValue(N,"toneMappingExposure",y.toneMappingExposure),st.needsLights&&(Rn=Xl,(Wn=Si).ambientLightColor.needsUpdate=Rn,Wn.lightProbe.needsUpdate=Rn,Wn.directionalLights.needsUpdate=Rn,Wn.directionalLightShadows.needsUpdate=Rn,Wn.pointLights.needsUpdate=Rn,Wn.pointLightShadows.needsUpdate=Rn,Wn.spotLights.needsUpdate=Rn,Wn.spotLightShadows.needsUpdate=Rn,Wn.rectAreaLights.needsUpdate=Rn,Wn.hemisphereLights.needsUpdate=Rn),wn&&et.fog===!0&&Ce.refreshFogUniforms(Si,wn),Ce.refreshMaterialUniforms(Si,et,se,oe,g.state.transmissionRenderTarget[at.id]),Xr.upload(N,Mr(st),Si,re));var Wn,Rn;if(et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Xr.upload(N,Mr(st),Si,re),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Nt.setValue(N,"center",qe.center),Nt.setValue(N,"modelViewMatrix",qe.modelViewMatrix),Nt.setValue(N,"normalMatrix",qe.normalMatrix),Nt.setValue(N,"modelMatrix",qe.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){let Sn=et.uniformsGroups;for(let ji=0,Tt=Sn.length;ji<Tt;ji++){let gd=Sn[ji];Ue.update(gd,Xi),Ue.bind(gd,Xi)}}return Xi})(E,G,Z,ne,q);z.setMaterial(ne,Ae);let ze=Z.index,Ye=1;if(ne.wireframe===!0){if(ze=Oe.getWireframeAttribute(Z),ze===void 0)return;Ye=2}let Ke=Z.drawRange,He=Z.attributes.position,it=Ke.start*Ye,Lt=(Ke.start+Ke.count)*Ye;de!==null&&(it=Math.max(it,de.start*Ye),Lt=Math.min(Lt,(de.start+de.count)*Ye)),ze!==null?(it=Math.max(it,0),Lt=Math.min(Lt,ze.count)):He!=null&&(it=Math.max(it,0),Lt=Math.min(Lt,He.count));let xt=Lt-it;if(xt<0||xt===1/0)return;let Vt;le.setup(q,ne,De,Z,ze);let Mt=ue;if(ze!==null&&(Vt=Ie.get(ze),Mt=be,Mt.setIndex(Vt)),q.isMesh)ne.wireframe===!0?(z.setLineWidth(ne.wireframeLinewidth*C()),Mt.setMode(N.LINES)):Mt.setMode(N.TRIANGLES);else if(q.isLine){let at=ne.linewidth;at===void 0&&(at=1),z.setLineWidth(at*C()),q.isLineSegments?Mt.setMode(N.LINES):q.isLineLoop?Mt.setMode(N.LINE_LOOP):Mt.setMode(N.LINE_STRIP)}else q.isPoints?Mt.setMode(N.POINTS):q.isSprite&&Mt.setMode(N.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Mt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(H.get("WEBGL_multi_draw"))Mt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let at=q._multiDrawStarts,on=q._multiDrawCounts,Jt=q._multiDrawCount,et=ze?Ie.get(ze).bytesPerElement:1,qe=$.get(ne).currentProgram.getUniforms();for(let wn=0;wn<Jt;wn++)qe.setValue(N,"_gl_DrawID",wn),Mt.render(at[wn]/et,on[wn])}else if(q.isInstancedMesh)Mt.renderInstances(it,xt,q.count);else if(Z.isInstancedBufferGeometry){let at=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,on=Math.min(Z.instanceCount,at);Mt.renderInstances(it,xt,on)}else Mt.render(it,xt)},this.compile=function(E,G,Z=null){Z===null&&(Z=E),g=ht.get(Z),g.init(G),x.push(g),Z.traverseVisible((function(q){q.isLight&&q.layers.test(G.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))})),E!==Z&&E.traverseVisible((function(q){q.isLight&&q.layers.test(G.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))})),g.setupLights();let ne=new Set;return E.traverse((function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let de=q.material;if(de)if(Array.isArray(de))for(let Ae=0;Ae<de.length;Ae++){let De=de[Ae];bt(De,Z,q),ne.add(De)}else bt(de,Z,q),ne.add(de)})),x.pop(),g=null,ne},this.compileAsync=function(E,G,Z=null){let ne=this.compile(E,G,Z);return new Promise((q=>{function de(){ne.forEach((function(Ae){$.get(Ae).currentProgram.isReady()&&ne.delete(Ae)})),ne.size!==0?setTimeout(de,10):q(E)}H.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)}))};let dt=null;function We(){O.stop()}function B(){O.start()}let O=new qp;function te(E,G,Z,ne){if(E.visible===!1)return;if(E.layers.test(G.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(G);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Te.intersectsSprite(E)){ne&&A.setFromMatrixPosition(E.matrixWorld).applyMatrix4(L);let de=Ve.update(E),Ae=E.material;Ae.visible&&m.push(E,de,Ae,Z,A.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Te.intersectsObject(E))){let de=Ve.update(E),Ae=E.material;if(ne&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),A.copy(E.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),A.copy(de.boundingSphere.center)),A.applyMatrix4(E.matrixWorld).applyMatrix4(L)),Array.isArray(Ae)){let De=de.groups;for(let ze=0,Ye=De.length;ze<Ye;ze++){let Ke=De[ze],He=Ae[Ke.materialIndex];He&&He.visible&&m.push(E,de,He,Z,A.z,Ke)}}else Ae.visible&&m.push(E,de,Ae,Z,A.z,null)}}let q=E.children;for(let de=0,Ae=q.length;de<Ae;de++)te(q[de],G,Z,ne)}function Be(E,G,Z,ne){let q=E.opaque,de=E.transmissive,Ae=E.transparent;g.setupLightsView(Z),fe===!0&&ft.setGlobalState(y.clippingPlanes,Z),ne&&z.viewport(W.copy(ne)),q.length>0&&pt(q,G,Z),de.length>0&&pt(de,G,Z),Ae.length>0&&pt(Ae,G,Z),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function Je(E,G,Z,ne){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ne.id]===void 0&&(g.state.transmissionRenderTarget[ne.id]=new ui(1,1,{generateMipmaps:!0,type:H.has("EXT_color_buffer_half_float")||H.has("EXT_color_buffer_float")?$s:Pi,minFilter:Vr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));let q=g.state.transmissionRenderTarget[ne.id],de=ne.viewport||W;q.setSize(de.z,de.w);let Ae=y.getRenderTarget();y.setRenderTarget(q),y.getClearColor(X),K=y.getClearAlpha(),K<1&&y.setClearColor(16777215,.5),y.clear(),S&&je.render(Z);let De=y.toneMapping;y.toneMapping=0;let ze=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),g.setupLightsView(ne),fe===!0&&ft.setGlobalState(y.clippingPlanes,ne),pt(E,Z,ne),re.updateMultisampleRenderTarget(q),re.updateRenderTargetMipmap(q),H.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Ke=0,He=G.length;Ke<He;Ke++){let it=G[Ke],Lt=it.object,xt=it.geometry,Vt=it.material,Mt=it.group;if(Vt.side===2&&Lt.layers.test(ne.layers)){let at=Vt.side;Vt.side=1,Vt.needsUpdate=!0,Ot(Lt,Z,ne,xt,Vt,Mt),Vt.side=at,Vt.needsUpdate=!0,Ye=!0}}Ye===!0&&(re.updateMultisampleRenderTarget(q),re.updateRenderTargetMipmap(q))}y.setRenderTarget(Ae),y.setClearColor(X,K),ze!==void 0&&(ne.viewport=ze),y.toneMapping=De}function pt(E,G,Z){let ne=G.isScene===!0?G.overrideMaterial:null;for(let q=0,de=E.length;q<de;q++){let Ae=E[q],De=Ae.object,ze=Ae.geometry,Ye=ne===null?Ae.material:ne,Ke=Ae.group;De.layers.test(Z.layers)&&Ot(De,G,Z,ze,Ye,Ke)}}function Ot(E,G,Z,ne,q,de){E.onBeforeRender(y,G,Z,ne,q,de),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(y,G,Z,ne,E,de),q.transparent===!0&&q.side===2&&q.forceSinglePass===!1?(q.side=1,q.needsUpdate=!0,y.renderBufferDirect(Z,G,ne,q,E,de),q.side=0,q.needsUpdate=!0,y.renderBufferDirect(Z,G,ne,q,E,de),q.side=2):y.renderBufferDirect(Z,G,ne,q,E,de),E.onAfterRender(y,G,Z,ne,q,de)}function It(E,G,Z){G.isScene!==!0&&(G=I);let ne=$.get(E),q=g.state.lights,de=g.state.shadowsArray,Ae=q.state.version,De=Fe.getParameters(E,q.state,de,G,Z),ze=Fe.getProgramCacheKey(De),Ye=ne.programs;ne.environment=E.isMeshStandardMaterial?G.environment:null,ne.fog=G.fog,ne.envMap=(E.isMeshStandardMaterial?me:_e).get(E.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&E.envMap===null?G.environmentRotation:E.envMapRotation,Ye===void 0&&(E.addEventListener("dispose",Ge),Ye=new Map,ne.programs=Ye);let Ke=Ye.get(ze);if(Ke!==void 0){if(ne.currentProgram===Ke&&ne.lightsStateVersion===Ae)return La(E,De),Ke}else De.uniforms=Fe.getUniforms(E),E.onBeforeCompile(De,y),Ke=Fe.acquireProgram(De,ze),Ye.set(ze,Ke),ne.uniforms=De.uniforms;let He=ne.uniforms;return(E.isShaderMaterial||E.isRawShaderMaterial)&&E.clipping!==!0||(He.clippingPlanes=ft.uniform),La(E,De),ne.needsLights=(function(it){return it.isMeshLambertMaterial||it.isMeshToonMaterial||it.isMeshPhongMaterial||it.isMeshStandardMaterial||it.isShadowMaterial||it.isShaderMaterial&&it.lights===!0})(E),ne.lightsStateVersion=Ae,ne.needsLights&&(He.ambientLightColor.value=q.state.ambient,He.lightProbe.value=q.state.probe,He.directionalLights.value=q.state.directional,He.directionalLightShadows.value=q.state.directionalShadow,He.spotLights.value=q.state.spot,He.spotLightShadows.value=q.state.spotShadow,He.rectAreaLights.value=q.state.rectArea,He.ltc_1.value=q.state.rectAreaLTC1,He.ltc_2.value=q.state.rectAreaLTC2,He.pointLights.value=q.state.point,He.pointLightShadows.value=q.state.pointShadow,He.hemisphereLights.value=q.state.hemi,He.directionalShadowMap.value=q.state.directionalShadowMap,He.directionalShadowMatrix.value=q.state.directionalShadowMatrix,He.spotShadowMap.value=q.state.spotShadowMap,He.spotLightMatrix.value=q.state.spotLightMatrix,He.spotLightMap.value=q.state.spotLightMap,He.pointShadowMap.value=q.state.pointShadowMap,He.pointShadowMatrix.value=q.state.pointShadowMatrix),ne.currentProgram=Ke,ne.uniformsList=null,Ke}function Mr(E){if(E.uniformsList===null){let G=E.currentProgram.getUniforms();E.uniformsList=Xr.seqWithValue(G.seq,E.uniforms)}return E.uniformsList}function La(E,G){let Z=$.get(E);Z.outputColorSpace=G.outputColorSpace,Z.batching=G.batching,Z.batchingColor=G.batchingColor,Z.instancing=G.instancing,Z.instancingColor=G.instancingColor,Z.instancingMorph=G.instancingMorph,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}O.setAnimationLoop((function(E){dt&&dt(E)})),typeof self<"u"&&O.setContext(self),this.setAnimationLoop=function(E){dt=E,Pe.setAnimationLoop(E),E===null?O.stop():O.start()},Pe.addEventListener("sessionstart",We),Pe.addEventListener("sessionend",B),this.render=function(E,G){if(G!==void 0&&G.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(R===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(G),G=Pe.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,G,D),g=ht.get(E,x.length),g.init(G),x.push(g),L.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Te.setFromProjectionMatrix(L),T=this.localClippingEnabled,fe=ft.init(this.clippingPlanes,T),m=nt.get(E,v.length),m.init(),v.push(m),Pe.enabled===!0&&Pe.isPresenting===!0){let de=y.xr.getDepthSensingMesh();de!==null&&te(de,G,-1/0,y.sortObjects)}te(E,G,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(Se,Re),S=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,S&&je.addToRenderList(m,E),this.info.render.frame++,fe===!0&&ft.beginShadows();let Z=g.state.shadowsArray;we.render(Z,E,G),fe===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();let ne=m.opaque,q=m.transmissive;if(g.setupLights(),G.isArrayCamera){let de=G.cameras;if(q.length>0)for(let Ae=0,De=de.length;Ae<De;Ae++)Je(ne,q,E,de[Ae]);S&&je.render(E);for(let Ae=0,De=de.length;Ae<De;Ae++){let ze=de[Ae];Be(m,E,ze,ze.viewport)}}else q.length>0&&Je(ne,q,E,G),S&&je.render(E),Be(m,E,G);D!==null&&(re.updateMultisampleRenderTarget(D),re.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(y,E,G),le.resetDefaultState(),F=-1,V=null,x.pop(),x.length>0?(g=x[x.length-1],fe===!0&&ft.setGlobalState(y.clippingPlanes,g.state.camera)):g=null,v.pop(),m=v.length>0?v[v.length-1]:null},this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,G,Z){$.get(E.texture).__webglTexture=G,$.get(E.depthTexture).__webglTexture=Z;let ne=$.get(E);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=Z===void 0,ne.__autoAllocateDepthBuffer||H.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,G){let Z=$.get(E);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(E,G=0,Z=0){D=E,w=G,P=Z;let ne=!0,q=null,de=!1,Ae=!1;if(E){let De=$.get(E);if(De.__useDefaultFramebuffer!==void 0)z.bindFramebuffer(N.FRAMEBUFFER,null),ne=!1;else if(De.__webglFramebuffer===void 0)re.setupRenderTarget(E);else if(De.__hasExternalTextures)re.rebindTextures(E,$.get(E.texture).__webglTexture,$.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ke=E.depthTexture;if(De.__boundDepthTexture!==Ke){if(Ke!==null&&$.has(Ke)&&(E.width!==Ke.image.width||E.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(E)}}let ze=E.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ae=!0);let Ye=$.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(q=Array.isArray(Ye[G])?Ye[G][Z]:Ye[G],de=!0):q=E.samples>0&&re.useMultisampledRTT(E)===!1?$.get(E).__webglMultisampledFramebuffer:Array.isArray(Ye)?Ye[Z]:Ye,W.copy(E.viewport),k.copy(E.scissor),Y=E.scissorTest}else W.copy(ie).multiplyScalar(se).floor(),k.copy(ae).multiplyScalar(se).floor(),Y=Ee;if(z.bindFramebuffer(N.FRAMEBUFFER,q)&&ne&&z.drawBuffers(E,q),z.viewport(W),z.scissor(k),z.setScissorTest(Y),de){let De=$.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+G,De.__webglTexture,Z)}else if(Ae){let De=$.get(E.texture),ze=G||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,De.__webglTexture,Z||0,ze)}F=-1},this.readRenderTargetPixels=function(E,G,Z,ne,q,de,Ae){if(!E||!E.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=$.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(De=De[Ae]),De){z.bindFramebuffer(N.FRAMEBUFFER,De);try{let ze=E.texture,Ye=ze.format,Ke=ze.type;if(!J.textureFormatReadable(Ye))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Ke))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");G>=0&&G<=E.width-ne&&Z>=0&&Z<=E.height-q&&N.readPixels(G,Z,ne,q,Me.convert(Ye),Me.convert(Ke),de)}finally{let ze=D!==null?$.get(D).__webglFramebuffer:null;z.bindFramebuffer(N.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(E,G,Z,ne,q,de,Ae){if(!E||!E.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=$.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(De=De[Ae]),De){let ze=E.texture,Ye=ze.format,Ke=ze.type;if(!J.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=E.width-ne&&Z>=0&&Z<=E.height-q){z.bindFramebuffer(N.FRAMEBUFFER,De);let He=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,He),N.bufferData(N.PIXEL_PACK_BUFFER,de.byteLength,N.STREAM_READ),N.readPixels(G,Z,ne,q,Me.convert(Ye),Me.convert(Ke),0);let it=D!==null?$.get(D).__webglFramebuffer:null;z.bindFramebuffer(N.FRAMEBUFFER,it);let Lt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await(function(xt,Vt,Mt){return new Promise((function(at,on){setTimeout((function Jt(){switch(xt.clientWaitSync(Vt,xt.SYNC_FLUSH_COMMANDS_BIT,0)){case xt.WAIT_FAILED:on();break;case xt.TIMEOUT_EXPIRED:setTimeout(Jt,Mt);break;default:at()}}),Mt)}))})(N,Lt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,He),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,de),N.deleteBuffer(He),N.deleteSync(Lt),de}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,G=null,Z=0){E.isTexture!==!0&&(Ns("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,E=arguments[1]);let ne=Math.pow(2,-Z),q=Math.floor(E.image.width*ne),de=Math.floor(E.image.height*ne),Ae=G!==null?G.x:0,De=G!==null?G.y:0;re.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,Z,0,0,Ae,De,q,de),z.unbindTexture()},this.copyTextureToTexture=function(E,G,Z=null,ne=null,q=0){let de,Ae,De,ze,Ye,Ke,He,it,Lt;E.isTexture!==!0&&(Ns("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,E=arguments[1],G=arguments[2],q=arguments[3]||0,Z=null);let xt=E.isCompressedTexture?E.mipmaps[q]:E.image;Z!==null?(de=Z.max.x-Z.min.x,Ae=Z.max.y-Z.min.y,De=Z.isBox3?Z.max.z-Z.min.z:1,ze=Z.min.x,Ye=Z.min.y,Ke=Z.isBox3?Z.min.z:0):(de=xt.width,Ae=xt.height,De=xt.depth||1,ze=0,Ye=0,Ke=0),ne!==null?(He=ne.x,it=ne.y,Lt=ne.z):(He=0,it=0,Lt=0);let Vt=Me.convert(G.format),Mt=Me.convert(G.type),at;G.isData3DTexture?(re.setTexture3D(G,0),at=N.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(re.setTexture2DArray(G,0),at=N.TEXTURE_2D_ARRAY):(re.setTexture2D(G,0),at=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,G.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,G.unpackAlignment);let on=N.getParameter(N.UNPACK_ROW_LENGTH),Jt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),et=N.getParameter(N.UNPACK_SKIP_PIXELS),qe=N.getParameter(N.UNPACK_SKIP_ROWS),wn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,xt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,xt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ze),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ye),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ke);let kl=E.isDataArrayTexture||E.isData3DTexture,Ms=G.isDataArrayTexture||G.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let Sr=$.get(E),Vl=$.get(G),Gl=$.get(Sr.__renderTarget),Wl=$.get(Vl.__renderTarget);z.bindFramebuffer(N.READ_FRAMEBUFFER,Gl.__webglFramebuffer),z.bindFramebuffer(N.DRAW_FRAMEBUFFER,Wl.__webglFramebuffer);for(let Mi=0;Mi<De;Mi++)kl&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,$.get(E).__webglTexture,q,Ke+Mi),E.isDepthTexture?(Ms&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,$.get(G).__webglTexture,q,Lt+Mi),N.blitFramebuffer(ze,Ye,de,Ae,He,it,de,Ae,N.DEPTH_BUFFER_BIT,N.NEAREST)):Ms?N.copyTexSubImage3D(at,q,He,it,Lt+Mi,ze,Ye,de,Ae):N.copyTexSubImage2D(at,q,He,it,Lt+Mi,ze,Ye,de,Ae);z.bindFramebuffer(N.READ_FRAMEBUFFER,null),z.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ms?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(at,q,He,it,Lt,de,Ae,De,Vt,Mt,xt.data):G.isCompressedArrayTexture?N.compressedTexSubImage3D(at,q,He,it,Lt,de,Ae,De,Vt,xt.data):N.texSubImage3D(at,q,He,it,Lt,de,Ae,De,Vt,Mt,xt):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,q,He,it,de,Ae,Vt,Mt,xt.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,q,He,it,xt.width,xt.height,Vt,xt.data):N.texSubImage2D(N.TEXTURE_2D,q,He,it,de,Ae,Vt,Mt,xt);N.pixelStorei(N.UNPACK_ROW_LENGTH,on),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Jt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,et),N.pixelStorei(N.UNPACK_SKIP_ROWS,qe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,wn),q===0&&G.generateMipmaps&&N.generateMipmap(at),z.unbindTexture()},this.copyTextureToTexture3D=function(E,G,Z=null,ne=null,q=0){return E.isTexture!==!0&&(Ns("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,ne=arguments[1]||null,E=arguments[2],G=arguments[3],q=arguments[4]||0),Ns('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,G,Z,ne,q)},this.initRenderTarget=function(E){$.get(E).__webglFramebuffer===void 0&&re.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?re.setTextureCube(E,0):E.isData3DTexture?re.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?re.setTexture2DArray(E,0):re.setTexture2D(E,0),z.unbindTexture()},this.resetState=function(){w=0,P=0,D=null,z.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};var Do=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new xe(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},No=class extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gt,this.environmentIntensity=1,this.environmentRotation=new Gt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},wh=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=lh,this.updateRanges=[],this.version=0,this.uuid=ci()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ln=new M,Oo=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=jn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=jn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=jn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=jn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),r=gt(r,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Pt(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},or=class extends Zn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Or,Cs=new M,Br=new M,Fr=new M,zr=new ce,Ps=new ce,$p=new Ne,eo=new M,Is=new M,to=new M,up=new ce,Sc=new ce,dp=new ce,es=class extends Yt{constructor(e=new or){if(super(),this.isSprite=!0,this.type="Sprite",Or===void 0){Or=new tt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new wh(t,5);Or.setIndex([0,1,2,0,2,3]),Or.setAttribute("position",new Oo(n,3,0,!1)),Or.setAttribute("uv",new Oo(n,2,3,!1))}this.geometry=Or,this.material=e,this.center=new ce(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Br.setFromMatrixScale(this.matrixWorld),$p.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Fr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Br.multiplyScalar(-Fr.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let a=this.center;no(eo.set(-.5,-.5,0),Fr,a,Br,r,s),no(Is.set(.5,-.5,0),Fr,a,Br,r,s),no(to.set(.5,.5,0),Fr,a,Br,r,s),up.set(0,0),Sc.set(1,0),dp.set(1,1);let o=e.ray.intersectTriangle(eo,Is,to,!1,Cs);if(o===null&&(no(Is.set(-.5,.5,0),Fr,a,Br,r,s),Sc.set(0,1),o=e.ray.intersectTriangle(eo,to,Is,!1,Cs),o===null))return;let c=e.ray.origin.distanceTo(Cs);c<e.near||c>e.far||t.push({distance:c,point:Cs.clone(),uv:oi.getInterpolation(Cs,eo,Is,to,up,Sc,dp,new ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function no(i,e,t,n,r,s){zr.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Ps.x=s*zr.x-r*zr.y,Ps.y=r*zr.x+s*zr.y):Ps.copy(zr),i.copy(e),i.x+=Ps.x,i.y+=Ps.y,i.applyMatrix4($p)}var vx=new M,_x=new M;var xx=new M,yx=new At,Mx=new At,Sx=new M,Ex=new Ne,bx=new M,Tx=new Nn,wx=new Ne,Ax=new ar;var Ah=class extends dn{constructor(e=null,t=1,n=1,r,s,a,o,c,l=1003,h=1003,d,u){super(null,a,o,c,l,h,r,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Rx=new Ne,Cx=new Ne;var Bo=class extends Pt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Hr=new Ne,pp=new Ne,io=[],fp=new Dn,Qg=new Ne,Ls=new Qe,Us=new Nn,nn=class extends Qe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Bo(new Float32Array(16*n),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Qg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hr),fp.copy(e.boundingBox).applyMatrix4(Hr),this.boundingBox.union(fp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hr),Us.copy(e.boundingSphere).applyMatrix4(Hr),this.boundingSphere.union(Us)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=e*(n.length+1)+1;for(let a=0;a<n.length;a++)n[a]=r[s+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Ls.geometry=this.geometry,Ls.material=this.material,Ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Us.copy(this.boundingSphere),Us.applyMatrix4(n),e.ray.intersectsSphere(Us)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Hr),pp.multiplyMatrices(n,Hr),Ls.matrixWorld=pp,Ls.raycast(e,io);for(let a=0,o=io.length;a<o;a++){let c=io[a];c.instanceId=s,c.object=this,t.push(c)}io.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Bo(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ah(new Float32Array(r*this.count),r,this.count,pu,qn));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Rh=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,r){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=r}reset(){this.list.length=0,this.index=0}},Px=new Ne,Ix=new xe(1,1,1),Lx=new Qr,Ux=new Dn,Dx=new Nn,Nx=new M,Ox=new M,Bx=new M,Fx=new Rh,zx=new Qe;var ts=class extends Zn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Fo=new M,zo=new M,mp=new Ne,Ds=new ar,ro=new Nn,Ec=new M,gp=new M,Ch=class extends Yt{constructor(e=new tt,t=new ts){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Fo.fromBufferAttribute(t,r-1),zo.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Fo.distanceTo(zo);e.setAttribute("lineDistance",new Le(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(r),ro.radius+=s,e.ray.intersectsSphere(ro)===!1)return;mp.copy(r).invert(),Ds.copy(e.ray).applyMatrix4(mp);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let u=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let f=u,_=p-1;f<_;f+=l){let m=h.getX(f),g=h.getX(f+1),v=so(this,e,Ds,c,m,g);v&&t.push(v)}if(this.isLineLoop){let f=h.getX(p-1),_=h.getX(u),m=so(this,e,Ds,c,f,_);m&&t.push(m)}}else{let u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let f=u,_=p-1;f<_;f+=l){let m=so(this,e,Ds,c,f,f+1);m&&t.push(m)}if(this.isLineLoop){let f=so(this,e,Ds,c,p-1,u);f&&t.push(f)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function so(i,e,t,n,r,s){let a=i.geometry.attributes.position;if(Fo.fromBufferAttribute(a,r),zo.fromBufferAttribute(a,s),t.distanceSqToSegment(Fo,zo,Ec,gp)>n)return;Ec.applyMatrix4(i.matrixWorld);let o=e.ray.origin.distanceTo(Ec);return o<e.near||o>e.far?void 0:{distance:o,point:gp.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}var vp=new M,_p=new M,Gs=class extends Ch{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)vp.fromBufferAttribute(t,r),_p.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+vp.distanceTo(_p);e.setAttribute("lineDistance",new Le(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var On=class extends Zn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xp=new Ne,Ph=new ar,ao=new Nn,oo=new M,Jn=class extends Yt{constructor(e=new tt,t=new On){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(r),ao.radius+=s,e.ray.intersectsSphere(ao)===!1)return;xp.copy(r).invert(),Ph.copy(e.ray).applyMatrix4(xp);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null)for(let d=Math.max(0,a.start),u=Math.min(l.count,a.start+a.count);d<u;d++){let p=l.getX(d);oo.fromBufferAttribute(h,p),yp(oo,p,c,r,e,t,this)}else for(let d=Math.max(0,a.start),u=Math.min(h.count,a.start+a.count);d<u;d++)oo.fromBufferAttribute(h,d),yp(oo,d,c,r,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function yp(i,e,t,n,r,s,a){let o=Ph.distanceSqToPoint(i);if(o<t){let c=new M;Ph.closestPointToPoint(i,c),c.applyMatrix4(n);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var St=class extends dn{constructor(e,t,n,r,s,a,o,c,l){super(e,t,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,s=n.length,a;a=t||e*n[s-1];let o,c=0,l=s-1;for(;c<=l;)if(r=Math.floor(c+(l-c)/2),o=n[r]-a,o<0)c=r+1;else{if(!(o>0)){l=r;break}l=r-1}if(r=l,n[r]===a)return r/(s-1);let h=n[r];return(r+(a-h)/(n[r+1]-h))/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),c=t||(a.isVector2?new ce:new M);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new M,r=[],s=[],a=[],o=new M,c=new Ne;for(let p=0;p<=e;p++){let f=p/e;r[p]=this.getTangentAt(f,new M)}s[0]=new M,a[0]=new M;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),d=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(Kt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,f))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Kt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(c.makeRotationAxis(r[f],p*f)),a[f].crossVectors(r[f],s[f])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ws=class extends bn{constructor(e=0,t=0,n=1,r=1,s=0,a=2*Math.PI,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ce){let n=t,r=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(s=a?0:r),this.aClockwise!==!0||a||(s===r?s=-r:s-=r);let o=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,p=l-this.aY;c=u*h-p*d+this.aX,l=u*d+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ih=class extends Ws{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function _u(){let i=0,e=0,t=0,n=0;function r(s,a,o,c){i=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,d){let u=(a-s)/l-(o-s)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+d)+(c-o)/d;u*=h,p*=h,r(a,o,u,p)},calc:function(s){let a=s*s;return i+e*s+t*a+n*(a*s)}}}var lo=new M,bc=new _u,Tc=new _u,wc=new _u,Lh=class extends bn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new M){let n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o,c,l=Math.floor(a),h=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:h===0&&l===s-1&&(l=s-2,h=1),this.closed||l>0?o=r[(l-1)%s]:(lo.subVectors(r[0],r[1]).add(r[0]),o=lo);let d=r[l%s],u=r[(l+1)%s];if(this.closed||l+2<s?c=r[(l+2)%s]:(lo.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=lo),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(c),p);_<1e-4&&(_=1),f<1e-4&&(f=_),m<1e-4&&(m=_),bc.initNonuniformCatmullRom(o.x,d.x,u.x,c.x,f,_,m),Tc.initNonuniformCatmullRom(o.y,d.y,u.y,c.y,f,_,m),wc.initNonuniformCatmullRom(o.z,d.z,u.z,c.z,f,_,m)}else this.curveType==="catmullrom"&&(bc.initCatmullRom(o.x,d.x,u.x,c.x,this.tension),Tc.initCatmullRom(o.y,d.y,u.y,c.y,this.tension),wc.initCatmullRom(o.z,d.z,u.z,c.z,this.tension));return n.set(bc.calc(h),Tc.calc(h),wc.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new M().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Mp(i,e,t,n,r){let s=.5*(n-e),a=.5*(r-t),o=i*i;return(2*t-2*n+s+a)*(i*o)+(-3*t+3*n-2*s-a)*o+s*i+t}function Bs(i,e,t,n){return(function(r,s){let a=1-r;return a*a*s})(i,e)+(function(r,s){return 2*(1-r)*r*s})(i,t)+(function(r,s){return r*r*s})(i,n)}function Fs(i,e,t,n,r){return(function(s,a){let o=1-s;return o*o*o*a})(i,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(i,t)+(function(s,a){return 3*(1-s)*s*s*a})(i,n)+(function(s,a){return s*s*s*a})(i,r)}var Ho=class extends bn{constructor(e=new ce,t=new ce,n=new ce,r=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ce){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Fs(e,r.x,s.x,a.x,o.x),Fs(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Uh=class extends bn{constructor(e=new M,t=new M,n=new M,r=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new M){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Fs(e,r.x,s.x,a.x,o.x),Fs(e,r.y,s.y,a.y,o.y),Fs(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ko=class extends bn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Dh=class extends bn{constructor(e=new M,t=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new M){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vo=class extends bn{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Bs(e,r.x,s.x,a.x),Bs(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Go=class extends bn{constructor(e=new M,t=new M,n=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new M){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Bs(e,r.x,s.x,a.x),Bs(e,r.y,s.y,a.y),Bs(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wo=class extends bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],h=r[a>r.length-2?r.length-1:a+1],d=r[a>r.length-3?r.length-1:a+2];return n.set(Mp(o,c.x,l.x,h.x,d.x),Mp(o,c.y,l.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new ce().fromArray(r))}return this}},Xo=Object.freeze({__proto__:null,ArcCurve:Ih,CatmullRomCurve3:Lh,CubicBezierCurve:Ho,CubicBezierCurve3:Uh,EllipseCurve:Ws,LineCurve:ko,LineCurve3:Dh,QuadraticBezierCurve:Vo,QuadraticBezierCurve3:Go,SplineCurve:Wo}),Nh=class extends bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let a=r[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new Xo[r.type]().fromJSON(r))}return this}},Xs=class extends Nh{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ko(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new Vo(this.currentPoint.clone(),new ce(e,t),new ce(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){let o=new Ho(this.currentPoint.clone(),new ce(e,t),new ce(n,r),new ce(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Wo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,r,s,a,o,c),this}absellipse(e,t,n,r,s,a,o,c){let l=new Ws(e,t,n,r,s,a,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ns=class i extends tt{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,n=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=Kt(r,0,2*Math.PI);let s=[],a=[],o=[],c=[],l=[],h=1/t,d=new M,u=new ce,p=new M,f=new M,_=new M,m=0,g=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=1*g,p.y=-m,p.z=0*g,_.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:m=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=1*g,p.y=-m,p.z=0*g,f.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),c.push(p.x,p.y,p.z),_.copy(f)}for(let v=0;v<=t;v++){let x=n+v*h*r,y=Math.sin(x),R=Math.cos(x);for(let w=0;w<=e.length-1;w++){d.x=e[w].x*y,d.y=e[w].y,d.z=e[w].x*R,a.push(d.x,d.y,d.z),u.x=v/t,u.y=w/(e.length-1),o.push(u.x,u.y);let P=c[3*w+0]*y,D=c[3*w+1],F=c[3*w+0]*R;l.push(P,D,F)}}for(let v=0;v<t;v++)for(let x=0;x<e.length-1;x++){let y=x+v*e.length,R=y,w=y+e.length,P=y+e.length+1,D=y+1;s.push(R,w,D),s.push(P,D,w)}this.setIndex(s),this.setAttribute("position",new Le(a,3)),this.setAttribute("uv",new Le(o,2)),this.setAttribute("normal",new Le(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Oh=class i extends ns{constructor(e=1,t=1,n=4,r=8){let s=new Xs;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},Bh=class i extends tt{constructor(e=1,t=32,n=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],c=[],l=new M,h=new ce;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let p=n+d/t*r;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Le(a,3)),this.setAttribute("normal",new Le(o,3)),this.setAttribute("uv",new Le(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Li=class i extends tt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],d=[],u=[],p=[],f=0,_=[],m=n/2,g=0;function v(x){let y=f,R=new ce,w=new M,P=0,D=x===!0?e:t,F=x===!0?1:-1;for(let W=1;W<=r;W++)d.push(0,m*F,0),u.push(0,F,0),p.push(.5,.5),f++;let V=f;for(let W=0;W<=r;W++){let k=W/r*c+o,Y=Math.cos(k),X=Math.sin(k);w.x=D*X,w.y=m*F,w.z=D*Y,d.push(w.x,w.y,w.z),u.push(0,F,0),R.x=.5*Y+.5,R.y=.5*X*F+.5,p.push(R.x,R.y),f++}for(let W=0;W<r;W++){let k=y+W,Y=V+W;x===!0?h.push(Y,Y+1,k):h.push(Y+1,Y,k),P+=3}l.addGroup(g,P,x===!0?1:2),g+=P}(function(){let x=new M,y=new M,R=0,w=(t-e)/n;for(let P=0;P<=s;P++){let D=[],F=P/s,V=F*(t-e)+e;for(let W=0;W<=r;W++){let k=W/r,Y=k*c+o,X=Math.sin(Y),K=Math.cos(Y);y.x=V*X,y.y=-F*n+m,y.z=V*K,d.push(y.x,y.y,y.z),x.set(X,w,K).normalize(),u.push(x.x,x.y,x.z),p.push(k,1-F),D.push(f++)}_.push(D)}for(let P=0;P<r;P++)for(let D=0;D<s;D++){let F=_[D][P],V=_[D+1][P],W=_[D+1][P+1],k=_[D][P+1];(e>0||D!==0)&&(h.push(F,V,k),R+=3),(t>0||D!==s-1)&&(h.push(V,W,k),R+=3)}l.addGroup(g,R,0),g+=R})(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Le(d,3)),this.setAttribute("normal",new Le(u,3)),this.setAttribute("uv",new Le(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Fh=class i extends Li{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},lr=class i extends tt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],a=[];function o(u,p,f,_){let m=_+1,g=[];for(let v=0;v<=m;v++){g[v]=[];let x=u.clone().lerp(f,v/m),y=p.clone().lerp(f,v/m),R=m-v;for(let w=0;w<=R;w++)g[v][w]=w===0&&v===m?x:x.clone().lerp(y,w/R)}for(let v=0;v<m;v++)for(let x=0;x<2*(m-v)-1;x++){let y=Math.floor(x/2);x%2==0?(c(g[v][y+1]),c(g[v+1][y]),c(g[v][y])):(c(g[v][y+1]),c(g[v+1][y+1]),c(g[v+1][y]))}}function c(u){s.push(u.x,u.y,u.z)}function l(u,p){let f=3*u;p.x=e[f+0],p.y=e[f+1],p.z=e[f+2]}function h(u,p,f,_){_<0&&u.x===1&&(a[p]=u.x-1),f.x===0&&f.z===0&&(a[p]=_/2/Math.PI+.5)}function d(u){return Math.atan2(u.z,-u.x)}(function(u){let p=new M,f=new M,_=new M;for(let m=0;m<t.length;m+=3)l(t[m+0],p),l(t[m+1],f),l(t[m+2],_),o(p,f,_,u)})(r),(function(u){let p=new M;for(let f=0;f<s.length;f+=3)p.x=s[f+0],p.y=s[f+1],p.z=s[f+2],p.normalize().multiplyScalar(u),s[f+0]=p.x,s[f+1]=p.y,s[f+2]=p.z})(n),(function(){let u=new M;for(let f=0;f<s.length;f+=3){u.x=s[f+0],u.y=s[f+1],u.z=s[f+2];let _=d(u)/2/Math.PI+.5,m=(p=u,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(_,1-m)}var p;(function(){let f=new M,_=new M,m=new M,g=new M,v=new ce,x=new ce,y=new ce;for(let R=0,w=0;R<s.length;R+=9,w+=6){f.set(s[R+0],s[R+1],s[R+2]),_.set(s[R+3],s[R+4],s[R+5]),m.set(s[R+6],s[R+7],s[R+8]),v.set(a[w+0],a[w+1]),x.set(a[w+2],a[w+3]),y.set(a[w+4],a[w+5]),g.copy(f).add(_).add(m).divideScalar(3);let P=d(g);h(v,w+0,f,P),h(x,w+2,_,P),h(y,w+4,m,P)}})(),(function(){for(let f=0;f<a.length;f+=6){let _=a[f+0],m=a[f+2],g=a[f+4],v=Math.max(_,m,g),x=Math.min(_,m,g);v>.9&&x<.1&&(_<.2&&(a[f+0]+=1),m<.2&&(a[f+2]+=1),g<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new Le(s,3)),this.setAttribute("normal",new Le(s.slice(),3)),this.setAttribute("uv",new Le(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},zh=class i extends lr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},co=new M,ho=new M,Ac=new M,uo=new oi,Hh=class extends tt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(Mo*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],d=new Array(3),u={},p=[];for(let f=0;f<c;f+=3){a?(l[0]=a.getX(f),l[1]=a.getX(f+1),l[2]=a.getX(f+2)):(l[0]=f,l[1]=f+1,l[2]=f+2);let{a:_,b:m,c:g}=uo;if(_.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),g.fromBufferAttribute(o,l[2]),uo.getNormal(Ac),d[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,d[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,d[2]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,d[0]!==d[1]&&d[1]!==d[2]&&d[2]!==d[0])for(let v=0;v<3;v++){let x=(v+1)%3,y=d[v],R=d[x],w=uo[h[v]],P=uo[h[x]],D=`${y}_${R}`,F=`${R}_${y}`;F in u&&u[F]?(Ac.dot(u[F].normal)<=s&&(p.push(w.x,w.y,w.z),p.push(P.x,P.y,P.z)),u[F]=null):D in u||(u[D]={index0:l[v],index1:l[x],normal:Ac.clone()})}}for(let f in u)if(u[f]){let{index0:_,index1:m}=u[f];co.fromBufferAttribute(o,_),ho.fromBufferAttribute(o,m),p.push(co.x,co.y,co.z),p.push(ho.x,ho.y,ho.z)}this.setAttribute("position",new Le(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},jo=class extends Xs{constructor(e){super(e),this.uuid=ci(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new Xs().fromJSON(r))}return this}},ev=function(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=Sp(i,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,c,l,h,d,u,p;if(n&&(s=(function(f,_,m,g){let v=[],x,y,R,w,P;for(x=0,y=_.length;x<y;x++)R=_[x]*g,w=x<y-1?_[x+1]*g:f.length,P=Sp(f,R,w,g,!1),P===P.next&&(P.steiner=!0),v.push(lv(P));for(v.sort(sv),x=0;x<v.length;x++)m=av(v[x],m);return m})(i,e,s,t)),i.length>80*t){o=l=i[0],c=h=i[1];for(let f=t;f<r;f+=t)d=i[f],u=i[f+1],d<o&&(o=d),u<c&&(c=u),d>l&&(l=d),u>h&&(h=u);p=Math.max(l-o,h-c),p=p!==0?32767/p:0}return js(s,a,t,o,c,p,0),a};function Sp(i,e,t,n,r){let s,a;if(r===(function(o,c,l,h){let d=0;for(let u=c,p=l-h;u<l;u+=h)d+=(o[p]-o[u])*(o[u+1]+o[p+1]),p=u;return d})(i,e,t,n)>0)for(s=e;s<t;s+=n)a=Ep(s,i[s],i[s+1],a);else for(s=t-n;s>=e;s-=n)a=Ep(s,i[s],i[s+1],a);return a&&Qo(a,a.next)&&(Ys(a),a=a.next),a}function cr(i,e){if(!i)return i;e||(e=i);let t,n=i;do if(t=!1,n.steiner||!Qo(n,n.next)&&Ct(n.prev,n,n.next)!==0)n=n.next;else{if(Ys(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function js(i,e,t,n,r,s,a){if(!i)return;!a&&s&&(function(h,d,u,p){let f=h;do f.z===0&&(f.z=kh(f.x,f.y,d,u,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,(function(_){let m,g,v,x,y,R,w,P,D=1;do{for(g=_,_=null,y=null,R=0;g;){for(R++,v=g,w=0,m=0;m<D&&(w++,v=v.nextZ,v);m++);for(P=D;w>0||P>0&&v;)w!==0&&(P===0||!v||g.z<=v.z)?(x=g,g=g.nextZ,w--):(x=v,v=v.nextZ,P--),y?y.nextZ=x:_=x,x.prevZ=y,y=x;g=v}y.nextZ=null,D*=2}while(R>1)})(f)})(i,n,r,s);let o,c,l=i;for(;i.prev!==i.next;)if(o=i.prev,c=i.next,s?nv(i,n,r,s):tv(i))e.push(o.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Ys(i),i=c.next,l=c.next;else if((i=c)===l){a?a===1?js(i=iv(cr(i),e,t),e,t,n,r,s,2):a===2&&rv(i,e,t,n,r,s):js(cr(i),e,t,n,r,s,1);break}}function tv(i){let e=i.prev,t=i,n=i.next;if(Ct(e,t,n)>=0)return!1;let r=e.x,s=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=r<s?r<a?r:a:s<a?s:a,d=o<c?o<l?o:l:c<l?c:l,u=r>s?r>a?r:a:s>a?s:a,p=o>c?o>l?o:l:c>l?c:l,f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=u&&f.y>=d&&f.y<=p&&Gr(r,o,s,c,a,l,f.x,f.y)&&Ct(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function nv(i,e,t,n){let r=i.prev,s=i,a=i.next;if(Ct(r,s,a)>=0)return!1;let o=r.x,c=s.x,l=a.x,h=r.y,d=s.y,u=a.y,p=o<c?o<l?o:l:c<l?c:l,f=h<d?h<u?h:u:d<u?d:u,_=o>c?o>l?o:l:c>l?c:l,m=h>d?h>u?h:u:d>u?d:u,g=kh(p,f,e,t,n),v=kh(_,m,e,t,n),x=i.prevZ,y=i.nextZ;for(;x&&x.z>=g&&y&&y.z<=v;){if(x.x>=p&&x.x<=_&&x.y>=f&&x.y<=m&&x!==r&&x!==a&&Gr(o,h,c,d,l,u,x.x,x.y)&&Ct(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=p&&y.x<=_&&y.y>=f&&y.y<=m&&y!==r&&y!==a&&Gr(o,h,c,d,l,u,y.x,y.y)&&Ct(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=g;){if(x.x>=p&&x.x<=_&&x.y>=f&&x.y<=m&&x!==r&&x!==a&&Gr(o,h,c,d,l,u,x.x,x.y)&&Ct(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=v;){if(y.x>=p&&y.x<=_&&y.y>=f&&y.y<=m&&y!==r&&y!==a&&Gr(o,h,c,d,l,u,y.x,y.y)&&Ct(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function iv(i,e,t){let n=i;do{let r=n.prev,s=n.next.next;!Qo(r,s)&&Qp(r,n,n.next,s)&&qs(r,s)&&qs(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Ys(n),Ys(n.next),n=i=s),n=n.next}while(n!==i);return cr(n)}function rv(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&cv(a,o)){let c=ef(a,o);return a=cr(a,a.next),c=cr(c,c.next),js(a,e,t,n,r,s,0),void js(c,e,t,n,r,s,0)}o=o.next}a=a.next}while(a!==i)}function sv(i,e){return i.x-e.x}function av(i,e){let t=(function(r,s){let a,o=s,c=-1/0,l=r.x,h=r.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let m=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(m<=l&&m>c&&(c=m,a=o.x<o.next.x?o:o.next,m===l))return a}o=o.next}while(o!==s);if(!a)return null;let d=a,u=a.x,p=a.y,f,_=1/0;o=a;do l>=o.x&&o.x>=u&&l!==o.x&&Gr(h<p?l:c,h,u,p,h<p?c:l,h,o.x,o.y)&&(f=Math.abs(h-o.y)/(l-o.x),qs(o,r)&&(f<_||f===_&&(o.x>a.x||o.x===a.x&&ov(a,o)))&&(a=o,_=f)),o=o.next;while(o!==d);return a})(i,e);if(!t)return e;let n=ef(t,i);return cr(n,n.next),cr(t,t.next)}function ov(i,e){return Ct(i.prev,i,e.prev)<0&&Ct(e.next,i,i.next)<0}function kh(i,e,t,n,r){return(i=1431655765&((i=858993459&((i=252645135&((i=16711935&((i=(i-t)*r|0)|i<<8))|i<<4))|i<<2))|i<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function lv(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Gr(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function cv(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!(function(t,n){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==n.i&&r.next.i!==n.i&&Qp(r,r.next,t,n))return!0;r=r.next}while(r!==t);return!1})(i,e)&&(qs(i,e)&&qs(e,i)&&(function(t,n){let r=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&a<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==t);return s})(i,e)&&(Ct(i.prev,i,e.prev)||Ct(i,e.prev,e))||Qo(i,e)&&Ct(i.prev,i,i.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Qo(i,e){return i.x===e.x&&i.y===e.y}function Qp(i,e,t,n){let r=fo(Ct(i,e,t)),s=fo(Ct(i,e,n)),a=fo(Ct(t,n,i)),o=fo(Ct(t,n,e));return r!==s&&a!==o||!(r!==0||!po(i,t,e))||!(s!==0||!po(i,n,e))||!(a!==0||!po(t,i,n))||!(o!==0||!po(t,e,n))}function po(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function fo(i){return i>0?1:i<0?-1:0}function qs(i,e){return Ct(i.prev,i,i.next)<0?Ct(i,e,i.next)>=0&&Ct(i,i.prev,e)>=0:Ct(i,e,i.prev)<0||Ct(i,i.next,e)<0}function ef(i,e){let t=new Vh(i.i,i.x,i.y),n=new Vh(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Ep(i,e,t,n){let r=new Vh(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ys(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Vh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var Ci=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return .5*n}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];bp(e),Tp(n,e);let a=e.length;t.forEach(bp);for(let c=0;c<t.length;c++)r.push(a),a+=t[c].length,Tp(n,t[c]);let o=ev(n,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}};function bp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Tp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Gh=class i extends tt{constructor(e=new jo([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let o=0,c=e.length;o<c;o++)a(e[o]);function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:hv,x,y,R,w,P,D=!1;g&&(x=g.getSpacedPoints(h),D=!0,u=!1,y=g.computeFrenetFrames(h,!1),R=new M,w=new M,P=new M),u||(m=0,p=0,f=0,_=0);let F=o.extractPoints(l),V=F.shape,W=F.holes;if(!Ci.isClockWise(V)){V=V.reverse();for(let U=0,A=W.length;U<A;U++){let I=W[U];Ci.isClockWise(I)&&(W[U]=I.reverse())}}let k=Ci.triangulateShape(V,W),Y=V;for(let U=0,A=W.length;U<A;U++){let I=W[U];V=V.concat(I)}function X(U,A,I){return A||console.error("THREE.ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(A,I)}let K=V.length,ee=k.length;function oe(U,A,I){let S,C,H,J=U.x-A.x,z=U.y-A.y,Q=I.x-U.x,$=I.y-U.y,re=J*J+z*z,_e=J*$-z*Q;if(Math.abs(_e)>Number.EPSILON){let me=Math.sqrt(re),Ie=Math.sqrt(Q*Q+$*$),Oe=A.x-z/me,Ve=A.y+J/me,Fe=((I.x-$/Ie-Oe)*$-(I.y+Q/Ie-Ve)*Q)/(J*$-z*Q);S=Oe+J*Fe-U.x,C=Ve+z*Fe-U.y;let Ce=S*S+C*C;if(Ce<=2)return new ce(S,C);H=Math.sqrt(Ce/2)}else{let me=!1;J>Number.EPSILON?Q>Number.EPSILON&&(me=!0):J<-Number.EPSILON?Q<-Number.EPSILON&&(me=!0):Math.sign(z)===Math.sign($)&&(me=!0),me?(S=-z,C=J,H=Math.sqrt(re)):(S=J,C=z,H=Math.sqrt(re/2))}return new ce(S/H,C/H)}let se=[];for(let U=0,A=Y.length,I=A-1,S=U+1;U<A;U++,I++,S++)I===A&&(I=0),S===A&&(S=0),se[U]=oe(Y[U],Y[I],Y[S]);let Se=[],Re,ie=se.concat();for(let U=0,A=W.length;U<A;U++){let I=W[U];Re=[];for(let S=0,C=I.length,H=C-1,J=S+1;S<C;S++,H++,J++)H===C&&(H=0),J===C&&(J=0),Re[S]=oe(I[S],I[H],I[J]);Se.push(Re),ie=ie.concat(Re)}for(let U=0;U<m;U++){let A=U/m,I=p*Math.cos(A*Math.PI/2),S=f*Math.sin(A*Math.PI/2)+_;for(let C=0,H=Y.length;C<H;C++){let J=X(Y[C],se[C],S);Te(J.x,J.y,-I)}for(let C=0,H=W.length;C<H;C++){let J=W[C];Re=Se[C];for(let z=0,Q=J.length;z<Q;z++){let $=X(J[z],Re[z],S);Te($.x,$.y,-I)}}}let ae=f+_;for(let U=0;U<K;U++){let A=u?X(V[U],ie[U],ae):V[U];D?(w.copy(y.normals[0]).multiplyScalar(A.x),R.copy(y.binormals[0]).multiplyScalar(A.y),P.copy(x[0]).add(w).add(R),Te(P.x,P.y,P.z)):Te(A.x,A.y,0)}for(let U=1;U<=h;U++)for(let A=0;A<K;A++){let I=u?X(V[A],ie[A],ae):V[A];D?(w.copy(y.normals[U]).multiplyScalar(I.x),R.copy(y.binormals[U]).multiplyScalar(I.y),P.copy(x[U]).add(w).add(R),Te(P.x,P.y,P.z)):Te(I.x,I.y,d/h*U)}for(let U=m-1;U>=0;U--){let A=U/m,I=p*Math.cos(A*Math.PI/2),S=f*Math.sin(A*Math.PI/2)+_;for(let C=0,H=Y.length;C<H;C++){let J=X(Y[C],se[C],S);Te(J.x,J.y,d+I)}for(let C=0,H=W.length;C<H;C++){let J=W[C];Re=Se[C];for(let z=0,Q=J.length;z<Q;z++){let $=X(J[z],Re[z],S);D?Te($.x,$.y+x[h-1].y,x[h-1].x+I):Te($.x,$.y,d+I)}}}function Ee(U,A){let I=U.length;for(;--I>=0;){let S=I,C=I-1;C<0&&(C=U.length-1);for(let H=0,J=h+2*m;H<J;H++){let z=K*H,Q=K*(H+1);T(A+S+z,A+C+z,A+C+Q,A+S+Q)}}}function Te(U,A,I){c.push(U),c.push(A),c.push(I)}function fe(U,A,I){b(U),b(A),b(I);let S=r.length/3,C=v.generateTopUV(n,r,S-3,S-2,S-1);L(C[0]),L(C[1]),L(C[2])}function T(U,A,I,S){b(U),b(A),b(S),b(A),b(I),b(S);let C=r.length/3,H=v.generateSideWallUV(n,r,C-6,C-3,C-2,C-1);L(H[0]),L(H[1]),L(H[3]),L(H[1]),L(H[2]),L(H[3])}function b(U){r.push(c[3*U+0]),r.push(c[3*U+1]),r.push(c[3*U+2])}function L(U){s.push(U.x),s.push(U.y)}(function(){let U=r.length/3;if(u){let A=0,I=K*A;for(let S=0;S<ee;S++){let C=k[S];fe(C[2]+I,C[1]+I,C[0]+I)}A=h+2*m,I=K*A;for(let S=0;S<ee;S++){let C=k[S];fe(C[0]+I,C[1]+I,C[2]+I)}}else{for(let A=0;A<ee;A++){let I=k[A];fe(I[2],I[1],I[0])}for(let A=0;A<ee;A++){let I=k[A];fe(I[0]+K*h,I[1]+K*h,I[2]+K*h)}}n.addGroup(U,r.length/3-U,0)})(),(function(){let U=r.length/3,A=0;Ee(Y,A),A+=Y.length;for(let I=0,S=W.length;I<S;I++){let C=W[I];Ee(C,A),A+=C.length}n.addGroup(U,r.length/3-U,1)})()}this.setAttribute("position",new Le(r,3)),this.setAttribute("uv",new Le(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,r){if(r.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];r.shapes.push(o.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},n),n.extrudePath!==void 0&&(r.options.extrudePath=n.extrudePath.toJSON()),r})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Xo[r.type]().fromJSON(r)),new i(n,e.options)}},hv={generateTopUV:function(i,e,t,n,r){let s=e[3*t],a=e[3*t+1],o=e[3*n],c=e[3*n+1],l=e[3*r],h=e[3*r+1];return[new ce(s,a),new ce(o,c),new ce(l,h)]},generateSideWallUV:function(i,e,t,n,r,s){let a=e[3*t],o=e[3*t+1],c=e[3*t+2],l=e[3*n],h=e[3*n+1],d=e[3*n+2],u=e[3*r],p=e[3*r+1],f=e[3*r+2],_=e[3*s],m=e[3*s+1],g=e[3*s+2];return Math.abs(o-h)<Math.abs(a-l)?[new ce(a,1-c),new ce(l,1-d),new ce(u,1-f),new ce(_,1-g)]:[new ce(o,1-c),new ce(h,1-d),new ce(p,1-f),new ce(m,1-g)]}},Ui=class i extends lr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Wh=class i extends lr{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Xh=class i extends tt{constructor(e=.5,t=1,n=32,r=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],c=[],l=[],h=[],d=e,u=(t-e)/(r=Math.max(1,r)),p=new M,f=new ce;for(let _=0;_<=r;_++){for(let m=0;m<=n;m++){let g=s+m/n*a;p.x=d*Math.cos(g),p.y=d*Math.sin(g),c.push(p.x,p.y,p.z),l.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}d+=u}for(let _=0;_<r;_++){let m=_*(n+1);for(let g=0;g<n;g++){let v=g+m,x=v,y=v+n+1,R=v+n+2,w=v+1;o.push(x,y,w),o.push(y,R,w)}}this.setIndex(o),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(l,3)),this.setAttribute("uv",new Le(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},jh=class i extends tt{constructor(e=new jo([new ce(0,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],r=[],s=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;function l(h){let d=r.length/3,u=h.extractPoints(t),p=u.shape,f=u.holes;Ci.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,g=f.length;m<g;m++){let v=f[m];Ci.isClockWise(v)===!0&&(f[m]=v.reverse())}let _=Ci.triangulateShape(p,f);for(let m=0,g=f.length;m<g;m++){let v=f[m];p=p.concat(v)}for(let m=0,g=p.length;m<g;m++){let v=p[m];r.push(v.x,v.y,0),s.push(0,0,1),a.push(v.x,v.y)}for(let m=0,g=_.length;m<g;m++){let v=_[m],x=v[0]+d,y=v[1]+d,R=v[2]+d;n.push(x,y,R),c+=3}}this.setIndex(n),this.setAttribute("position",new Le(r,3)),this.setAttribute("normal",new Le(s,3)),this.setAttribute("uv",new Le(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let a=t[r];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];n.push(a)}return new i(n,e.curveSegments)}},Kn=class i extends tt{constructor(e=1,t=32,n=16,r=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new M,u=new M,p=[],f=[],_=[],m=[];for(let g=0;g<=n;g++){let v=[],x=g/n,y=0;g===0&&a===0?y=.5/t:g===n&&c===Math.PI&&(y=-.5/t);for(let R=0;R<=t;R++){let w=R/t;d.x=-e*Math.cos(r+w*s)*Math.sin(a+x*o),d.y=e*Math.cos(a+x*o),d.z=e*Math.sin(r+w*s)*Math.sin(a+x*o),f.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(w+y,1-x),v.push(l++)}h.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){let x=h[g][v+1],y=h[g][v],R=h[g+1][v],w=h[g+1][v+1];(g!==0||a>0)&&p.push(x,y,w),(g!==n-1||c<Math.PI)&&p.push(y,R,w)}this.setIndex(p),this.setAttribute("position",new Le(f,3)),this.setAttribute("normal",new Le(_,3)),this.setAttribute("uv",new Le(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},qh=class i extends lr{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Zs=class i extends tt{constructor(e=1,t=.4,n=12,r=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],c=[],l=[],h=new M,d=new M,u=new M;for(let p=0;p<=n;p++)for(let f=0;f<=r;f++){let _=f/r*s,m=p/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(_),d.y=(e+t*Math.cos(m))*Math.sin(_),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(f/r),l.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=r;f++){let _=(r+1)*p+f-1,m=(r+1)*(p-1)+f-1,g=(r+1)*(p-1)+f,v=(r+1)*p+f;a.push(_,m,v),a.push(m,g,v)}this.setIndex(a),this.setAttribute("position",new Le(o,3)),this.setAttribute("normal",new Le(c,3)),this.setAttribute("uv",new Le(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Yh=class i extends tt{constructor(e=1,t=.4,n=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:a},n=Math.floor(n),r=Math.floor(r);let o=[],c=[],l=[],h=[],d=new M,u=new M,p=new M,f=new M,_=new M,m=new M,g=new M;for(let x=0;x<=n;++x){let y=x/n*s*Math.PI*2;v(y,s,a,e,p),v(y+.01,s,a,e,f),m.subVectors(f,p),g.addVectors(f,p),_.crossVectors(m,g),g.crossVectors(_,m),_.normalize(),g.normalize();for(let R=0;R<=r;++R){let w=R/r*Math.PI*2,P=-t*Math.cos(w),D=t*Math.sin(w);d.x=p.x+(P*g.x+D*_.x),d.y=p.y+(P*g.y+D*_.y),d.z=p.z+(P*g.z+D*_.z),c.push(d.x,d.y,d.z),u.subVectors(d,p).normalize(),l.push(u.x,u.y,u.z),h.push(x/n),h.push(R/r)}}for(let x=1;x<=n;x++)for(let y=1;y<=r;y++){let R=(r+1)*(x-1)+(y-1),w=(r+1)*x+(y-1),P=(r+1)*x+y,D=(r+1)*(x-1)+y;o.push(R,w,D),o.push(w,P,D)}function v(x,y,R,w,P){let D=Math.cos(x),F=Math.sin(x),V=R/y*x,W=Math.cos(V);P.x=w*(2+W)*.5*D,P.y=w*(2+W)*F*.5,P.z=w*Math.sin(V)*.5}this.setIndex(o),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(l,3)),this.setAttribute("uv",new Le(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Zh=class i extends tt{constructor(e=new Go(new M(-1,-1,0),new M(-1,1,0),new M(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new M,c=new M,l=new ce,h=new M,d=[],u=[],p=[],f=[];function _(m){h=e.getPointAt(m/t,h);let g=a.normals[m],v=a.binormals[m];for(let x=0;x<=r;x++){let y=x/r*Math.PI*2,R=Math.sin(y),w=-Math.cos(y);c.x=w*g.x+R*v.x,c.y=w*g.y+R*v.y,c.z=w*g.z+R*v.z,c.normalize(),u.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,d.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)_(m);_(s===!1?t:0),(function(){for(let m=0;m<=t;m++)for(let g=0;g<=r;g++)l.x=m/t,l.y=g/r,p.push(l.x,l.y)})(),(function(){for(let m=1;m<=t;m++)for(let g=1;g<=r;g++){let v=(r+1)*(m-1)+(g-1),x=(r+1)*m+(g-1),y=(r+1)*m+g,R=(r+1)*(m-1)+g;f.push(v,x,R),f.push(x,y,R)}})()})(),this.setIndex(f),this.setAttribute("position",new Le(d,3)),this.setAttribute("normal",new Le(u,3)),this.setAttribute("uv",new Le(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Xo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Jh=class extends tt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,r=new M,s=new M;if(e.index!==null){let a=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let d=c[l],u=d.start;for(let p=u,f=u+d.count;p<f;p+=3)for(let _=0;_<3;_++){let m=o.getX(p+_),g=o.getX(p+(_+1)%3);r.fromBufferAttribute(a,m),s.fromBufferAttribute(a,g),wp(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,d=3*o+(l+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,d),wp(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Le(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function wp(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)!==!0&&t.has(r)!==!0&&(t.add(n),t.add(r),!0)}var Hx=Object.freeze({__proto__:null,BoxGeometry:Kr,CapsuleGeometry:Oh,CircleGeometry:Bh,ConeGeometry:Fh,CylinderGeometry:Li,DodecahedronGeometry:zh,EdgesGeometry:Hh,ExtrudeGeometry:Gh,IcosahedronGeometry:Ui,LatheGeometry:ns,OctahedronGeometry:Wh,PlaneGeometry:Wt,PolyhedronGeometry:lr,RingGeometry:Xh,ShapeGeometry:jh,SphereGeometry:Kn,TetrahedronGeometry:qh,TorusGeometry:Zs,TorusKnotGeometry:Yh,TubeGeometry:Zh,WireframeGeometry:Jh});var vt=class extends Zn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function mo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function uv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var is=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];t:{e:{let a;n:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break n}if(e>=s)break t;{let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0}}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Kh=class extends is{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vd,endingEnd:vd}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case _d:s=e,o=2*t-n;break;case xd:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case _d:a=e,c=2*n-t;break;case xd:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}let l=.5*(n-t),h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,f=(n-t)/(r-t),_=f*f,m=_*f,g=-u*m+2*u*_-u*f,v=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*f+1,x=(-1-p)*m+(1.5+p)*_+.5*f,y=p*m-p*_;for(let R=0;R!==o;++R)s[R]=g*a[h+R]+v*a[l+R]+x*a[c+R]+y*a[d+R];return s}},$h=class extends is{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(r-t),d=1-h;for(let u=0;u!==o;++u)s[u]=a[l+u]*d+a[c+u]*h;return s}},Qh=class extends is{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Un=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=mo(t,this.TimeBufferType),this.values=mo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:mo(e.times,Array),values:mo(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Qh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $h(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Kh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case So:t=this.InterpolantFactoryMethodDiscrete;break;case oh:t=this.InterpolantFactoryMethodLinear;break;case Yl:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return So;case this.InterpolantFactoryMethodLinear:return oh;case this.InterpolantFactoryMethodSmooth:return Yl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&uv(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Yl,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o];if(l!==e[o+1]&&(o!==1||l!==e[0]))if(r)c=!0;else{let h=o*n,d=h-n,u=h+n;for(let p=0;p!==n;++p){let f=t[h+p];if(f!==t[d+p]||f!==t[u+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let u=0;u!==n;++u)t[d+u]=t[h+u]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};Un.prototype.TimeBufferType=Float32Array,Un.prototype.ValueBufferType=Float32Array,Un.prototype.DefaultInterpolation=oh;var tr=class extends Un{constructor(e,t,n){super(e,t,n)}};tr.prototype.ValueTypeName="bool",tr.prototype.ValueBufferType=Array,tr.prototype.DefaultInterpolation=So,tr.prototype.InterpolantFactoryMethodLinear=void 0,tr.prototype.InterpolantFactoryMethodSmooth=void 0;var eu=class extends Un{};eu.prototype.ValueTypeName="color";var tu=class extends Un{};tu.prototype.ValueTypeName="number";var nu=class extends is{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t),l=e*o;for(let h=l+o;l!==h;l+=4)Rt.slerpFlat(s,0,a,l-o,a,l,c);return s}},qo=class extends Un{InterpolantFactoryMethodLinear(e){return new nu(this.times,this.values,this.getValueSize(),e)}};qo.prototype.ValueTypeName="quaternion",qo.prototype.InterpolantFactoryMethodSmooth=void 0;var nr=class extends Un{constructor(e,t,n){super(e,t,n)}};nr.prototype.ValueTypeName="string",nr.prototype.ValueBufferType=Array,nr.prototype.DefaultInterpolation=So,nr.prototype.InterpolantFactoryMethodLinear=void 0,nr.prototype.InterpolantFactoryMethodSmooth=void 0;var iu=class extends Un{};iu.prototype.ValueTypeName="vector";var ru=class{constructor(e,t,n){let r=this,s,a=!1,o=0,c=0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){c++,a===!1&&r.onStart!==void 0&&r.onStart(h,o,c),a=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,c),o===c&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let p=l[d],f=l[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}},dv=new ru,su=class{constructor(e){this.manager=e!==void 0?e:dv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise((function(r,s){n.load(e,r,t,s)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};su.DEFAULT_MATERIAL_NAME="__DEFAULT";var Js=class extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Yo=class extends Js{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Rc=new Ne,Ap=new M,Rp=new M,au=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qr,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ap.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ap),Rp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rp),t.updateMatrixWorld(),Rc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var kx=new Ne,Vx=new M,Gx=new M;var ou=class extends au{constructor(){super(new Po(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hr=class extends Js{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new ou}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Zo=class extends Js{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Wx=new Ne,Xx=new Ne,jx=new Ne;var qx=new M,Yx=new Rt,Zx=new M,Jx=new M;var Kx=new M,$x=new Rt,Qx=new M,ey=new M;var xu="\\[\\]\\.:\\/",pv=new RegExp("["+xu+"]","g"),Cc="[^"+xu+"]",fv="[^"+xu.replace("\\.","")+"]",mv=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Cc)+/(WCOD+)?/.source.replace("WCOD",fv)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cc)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cc)+"$"),gv=["material","materials","bones","map"],wt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(pv,"")}static parseTrackName(e){let t=mv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);gv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(l!==void 0){if(e[l]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[l]}}let a=e[r];if(a===void 0){let l=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};wt.Composite=class{constructor(i,e,t){let n=t||wt.parseTrackName(e);this._targetGroup=i,this._bindings=i.subscribe_(e,n)}getValue(i,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(i,e)}setValue(i,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=t.length;n!==r;++n)t[n].setValue(i,e)}bind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].bind()}unbind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].unbind()}},wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray],wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ty=new Float32Array(1);var Cp=new Ne,Ks=class{constructor(e,t,n=0,r=1/0){this.ray=new ar(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new ks,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Cp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cp),this}intersectObject(e,t=!0,n=[]){return lu(e,this,n,t),n.sort(Pp),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)lu(e[r],this,n,t);return n.sort(Pp),n}};function Pp(i,e){return i.distance-e.distance}function lu(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let a=0,o=s.length;a<o;a++)lu(s[a],e,t,!0)}}var ny=new ce;var iy=new M,ry=new M;var sy=new M;var ay=new M,oy=new Ne,ly=new Ne;var cy=new M,hy=new xe,uy=new xe;var dy=new M,py=new M,fy=new M;var my=new M,gy=new Vs;var vy=new Dn;var _y=new M;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var $n=new M(0,1,0),mi=(i,e,t)=>Math.min(t,Math.max(e,i)),he=(i,e,t)=>{let n=mi((t-i)/(e-i),0,1);return n*n*(3-2*n)},ve=(i,e,t)=>e+(t-e)*i();function Tf(i,e,t){let n=Math.min(i.length-1,Math.max(0,e*(i.length-1))),r=Math.min(i.length-2,Math.max(0,Math.floor(n))),s=n-r;return(t||new M).copy(i[r]).lerp(i[r+1],s)}function Ht(i){return function(){i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var _v=1592598564,xv=Ht(_v);Math.random=()=>xv();var yv=/debug/.test(location.search),ml=20,dr=120,gl=.25,zt=dr+(1-gl)*ml*4+ml*4-.1,yu=[[0,0],[16,.004],[32,.02],[56,.06],[76,.14],[94,.28],[108,.5],[116,.75],[120,1]];function qu(i){if(i<=0)return 0;if(i>=dr)return 1;for(let e=1;e<yu.length;e++){let[t,n]=yu[e];if(i<=t){let[r,s]=yu[e-1],a=he(0,1,(i-r)/Math.max(.001,t-r));return s+(n-s)*a}}return 1}function ma(i){return i<dr?.02+(gl-.02)*(i/dr):gl+(i-dr)/(ml*4)}function wf(i){return i<dr?1:1+Math.floor((i-dr)/(ml*4)+gl)}var zn=[{name:"\u6625",sub:"\u4E07\u7269\u53D1\u82BD",skyTop:5220584,horizon:16771012,fog:14085883,ground:8833386,sun:16763024,sunI:2.6,hemi:.5,snow:0,cloud:.58,cloudWarm:.16,exposure:.95,bloom:.22},{name:"\u590F",sub:"\u679D\u7E41\u53F6\u8302",skyTop:1603784,horizon:14217727,fog:13625845,ground:5546820,sun:16773840,sunI:2.8,hemi:.45,snow:0,cloud:.32,cloudWarm:.1,exposure:.92,bloom:.2},{name:"\u79CB",sub:"\u53F6\u5B50\u53D8\u7EA2",skyTop:6983632,horizon:16768424,fog:16180170,ground:10259018,sun:16751186,sunI:2.6,hemi:.42,snow:0,cloud:.26,cloudWarm:.55,exposure:1,bloom:.28},{name:"\u51AC",sub:"\u4E0B\u96EA\u4E86",skyTop:5210030,horizon:13624306,fog:13098220,ground:15923455,sun:12571903,sunI:1.8,hemi:.55,snow:1,cloud:.82,cloudWarm:.02,exposure:.88,bloom:.16}],Mv={skyTop:new xe,horizon:new xe,fog:new xe,ground:new xe,sun:new xe,sunI:0,hemi:0,snow:0,cloud:0,cloudWarm:0,exposure:1,bloom:.8},al=new xe,Mu=new xe,Qs=new xe,ea=new xe;function Sv(i,e){let t=(i%1+1)%1*zn.length,n=Math.floor(t)%zn.length,r=(n+1)%zn.length,s=he(.86,1,t-Math.floor(t)),a=zn[n],o=zn[r];return e.skyTop.lerpColors(Qs.setHex(a.skyTop),ea.setHex(o.skyTop),s),e.horizon.lerpColors(Qs.setHex(a.horizon),ea.setHex(o.horizon),s),e.fog.lerpColors(Qs.setHex(a.fog),ea.setHex(o.fog),s),e.ground.lerpColors(Qs.setHex(a.ground),ea.setHex(o.ground),s),e.sun.lerpColors(Qs.setHex(a.sun),ea.setHex(o.sun),s),e.sunI=a.sunI+(o.sunI-a.sunI)*s,e.hemi=a.hemi+(o.hemi-a.hemi)*s,e.snow=a.snow+(o.snow-a.snow)*s,e.cloud=a.cloud+(o.cloud-a.cloud)*s,e.cloudWarm=a.cloudWarm+(o.cloudWarm-a.cloudWarm)*s,e.exposure=a.exposure+(o.exposure-a.exposure)*s,e.bloom=a.bloom+(o.bloom-a.bloom)*s,e}var Au=document.getElementById("app"),Zt=new Uo({antialias:!1,powerPreference:"high-performance"});Zt.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75));function Yu(){return{w:Math.max(1,Au.clientWidth||window.innerWidth),h:Math.max(1,Au.clientHeight||window.innerHeight)}}var vl=Yu();Zt.setSize(vl.w,vl.h);Zt.shadowMap.enabled=!0;Zt.shadowMap.type=Ip;Zt.toneMapping=Up;Zt.toneMappingExposure=1.12;Au.appendChild(Zt.domElement);var ye=new No;ye.fog=new Do(13625845,34,205);var Ft=new hn(38,vl.w/vl.h,.1,600),di={topColor:{value:new xe(3118552)},horizonColor:{value:new xe(12576760)},sunColor:{value:new xe(16774109)},sunDir:{value:new M(.4,.7,.5).normalize()},time:{value:0},cloudCover:{value:.45},cloudWarm:{value:.2}},Af=new Qe(new Kn(320,48,30),new pn({uniforms:di,side:cu,depthWrite:!1,fog:!1,vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 topColor;
      uniform vec3 horizonColor;
      uniform vec3 sunColor;
      uniform vec3 sunDir;
      uniform float time;
      uniform float cloudCover;
      uniform float cloudWarm;
      varying vec3 vDir;

      float hash21(vec2 p) {
        p = fract(p * vec2(123.34, 456.21));
        p += dot(p, p + 45.32);
        return fract(p.x * p.y);
      }
      float vnoise(vec2 p) {
        vec2 i = floor(p), f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float a = hash21(i);
        float b = hash21(i + vec2(1.0, 0.0));
        float c = hash21(i + vec2(0.0, 1.0));
        float d = hash21(i + vec2(1.0, 1.0));
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }
      float fbm(vec2 p) {
        float v = 0.0, a = 0.5;
        for (int i = 0; i < 5; i++) {
          v += a * vnoise(p);
          p = p * 2.03 + vec2(17.1, 9.2);
          a *= 0.5;
        }
        return v;
      }

      void main() {
        vec3 dir = normalize(vDir);
        float h = clamp(dir.y, -0.08, 1.0);

        // \u5929\u9876 \u2192 \u5730\u5E73\u7EBF\uFF1A\u9AD8\u5149\u504F\u9752\uFF0C\u8FD1\u5730\u504F\u6696\u767D
        vec3 col = mix(horizonColor, topColor, pow(smoothstep(-0.04, 0.62, h), 0.82));
        col = mix(col, horizonColor * 1.08, pow(1.0 - smoothstep(-0.02, 0.22, h), 3.0) * 0.42);

        // \u592A\u9633\uFF1A\u6838\u5FC3 + \u5927\u8303\u56F4\u6696\u6655
        float sd = max(dot(dir, sunDir), 0.0);
        col += sunColor * (pow(sd, 1200.0) * 2.2 + pow(sd, 28.0) * 0.18 + pow(sd, 5.0) * 0.05);

        // \u4E91\u5C42\uFF1A\u628A\u65B9\u5411\u6295\u5230\u9AD8\u7A7A\u5E73\u9762\u4E0A\uFF0C\u53E0\u4E24\u5C42\u4E0D\u540C\u901F\u5EA6\u7684 fbm
        if (dir.y > 0.008) {
          vec2 uv = dir.xz / (dir.y + 0.16);
          // \u4E09\u5C42\u4E0D\u540C\u5C3A\u5EA6\u7684 fbm\uFF0C\u6D41\u901F\u8DB3\u591F\u5728 260s \u5185\u6F02\u8FC7\u51E0\u683C\uFF1B\u9608\u503C\u6309 fbm \u7684\u5B9E\u9645\u5206\u5E03\u8BBE\u5B9A
          float n1 = fbm(uv * 1.25 + vec2(time * 0.016, time * 0.005));
          float n2 = fbm(uv * 3.10 + vec2(time * 0.026, -time * 0.009));
          float n3 = fbm(uv * 1.90 + vec2(time * 0.020, -time * 0.006));
          float n = n1 * 0.56 + n2 * 0.24 + n3 * 0.20;
          float lo = 0.40 - cloudCover * 0.14;
          float cover = smoothstep(lo, lo + 0.16, n);
          cover *= smoothstep(0.07, 0.36, dir.y);
          // \u4E91\u5E95\uFF1A\u8FCE\u5149\u9762\u6696\u767D\u3001\u80CC\u5149\u9762\u7070\u84DD
          float lit = pow(max(dot(dir, sunDir), 0.0), 2.0);
          vec3 cloudCol = mix(vec3(0.60, 0.66, 0.74), vec3(1.08, 1.04, 0.97), lit * 0.9 + cloudWarm * 0.3);
          col = mix(col, cloudCol, cover * 0.42);
        }
        gl_FragColor = vec4(col, 1.0);
      }
    `}));Af.frustumCulled=!1;ye.add(Af);function Rf(i,e){let n=document.createElement("canvas");n.width=n.height=128;let r=n.getContext("2d"),s=r.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);s.addColorStop(0,i),s.addColorStop(.38,e),s.addColorStop(.72,"rgba(255,246,220,0.16)"),s.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=s,r.fillRect(0,0,128,128);let a=new St(n);return a.colorSpace=ot,a}var _l=new es(new or({map:Rf("rgba(255,255,255,1)","rgba(255,236,180,0.55)"),blending:Bn,depthWrite:!1,depthTest:!0,fog:!1,transparent:!0,opacity:.78}));_l.scale.setScalar(6.5);ye.add(_l);function Ev(){let e=document.createElement("canvas");e.width=e.height=512;let t=e.getContext("2d");t.clearRect(0,0,512,512);let n=512/2,r=512/2;for(let o=0;o<28;o++){let c=o/28*Math.PI*2+(Math.random()-.5)*.22,l=512*(.18+Math.random()*.42),h=.006+Math.random()*.02;t.save(),t.translate(n,r),t.rotate(c);let d=t.createLinearGradient(0,0,l,0);d.addColorStop(0,`rgba(255,241,205,${.1+Math.random()*.1})`),d.addColorStop(.34,`rgba(255,238,196,${.025+Math.random()*.04})`),d.addColorStop(1,"rgba(255,238,196,0)"),t.fillStyle=d,t.beginPath(),t.moveTo(0,-512*h*.5),t.lineTo(l,-512*h*2.1),t.lineTo(l,512*h*2.1),t.lineTo(0,512*h*.5),t.closePath(),t.fill(),t.restore()}let s=t.createRadialGradient(n,r,0,n,r,512*.5);s.addColorStop(0,"rgba(255,245,215,0.42)"),s.addColorStop(.26,"rgba(255,228,170,0.12)"),s.addColorStop(1,"rgba(255,228,170,0)"),t.fillStyle=s,t.fillRect(0,0,512,512);let a=new St(e);return a.colorSpace=ot,a}var ha=new es(new or({map:Ev(),blending:Bn,depthWrite:!1,depthTest:!0,fog:!1,transparent:!0,opacity:.32}));ha.scale.setScalar(52);ye.add(ha);var ol=new Yo(12576760,4880954,.7);ye.add(ol);var bv=new Zo(12376296,.38);ye.add(bv);var sn=new hr(16777215,2.4);sn.castShadow=!0;sn.shadow.mapSize.set(2048,2048);sn.shadow.camera.left=-20;sn.shadow.camera.right=20;sn.shadow.camera.top=18;sn.shadow.camera.bottom=-16;sn.shadow.camera.near=1;sn.shadow.camera.far=110;sn.shadow.bias=-6e-4;sn.shadow.normalBias=.06;ye.add(sn);ye.add(sn.target);var Cf=new hr(16773341,.85);Cf.position.set(-14,9,-16);ye.add(Cf);var Sa=new hr(16773596,2.35);Sa.position.set(8,12,20);Sa.target.position.set(0,4,0);ye.add(Sa);ye.add(Sa.target);var Ea=new hr(16769464,1.25);Ea.position.set(2.5,-3,18);Ea.target.position.set(0,-2.2,0);ye.add(Ea);ye.add(Ea.target);sn.target.position.set(0,3,0);function Tv(){let e=document.createElement("canvas");e.width=e.height=1024;let t=e.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,1024,1024);let n=(s,a,o,c,l)=>{t.fillStyle=`rgba(${c},${l})`;for(let h of[0,-1024,1024])for(let d of[0,-1024,1024])t.beginPath(),t.arc(s+h,a+d,o,0,Math.PI*2),t.fill()};for(let s=0;s<5200;s++){let a=Math.random()*1024,o=Math.random()*1024,c=3+Math.random()*9,l=-Math.PI/2+(Math.random()-.5)*1.1,h=Math.random()>.45;t.strokeStyle=h?`rgba(150,190,110,${.05+Math.random()*.11})`:`rgba(52,84,40,${.05+Math.random()*.13})`,t.lineWidth=.8+Math.random()*1.6,t.beginPath(),t.moveTo(a,o),t.lineTo(a+Math.cos(l)*c,o+Math.sin(l)*c),t.stroke()}for(let s=0;s<6e3;s++)t.fillStyle=`rgba(${Math.random()>.5?"96,132,70":"40,64,32"},${.04+Math.random()*.08})`,t.fillRect(Math.random()*1024,Math.random()*1024,1,1);let r=new St(e);return r.colorSpace=ot,r.wrapS=r.wrapT=ir,r.repeat.set(14,14),r.anisotropy=8,r}var Pf=new vt({color:5546820,map:Tv(),roughness:1,metalness:0,vertexColors:!0});function el(i,e){let t=Math.sin(i*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function Su(i,e){let t=Math.floor(i),n=Math.floor(e),r=i-t,s=e-n,a=r*r*(3-2*r),o=s*s*(3-2*s),c=el(t,n),l=el(t+1,n),h=el(t,n+1),d=el(t+1,n+1);return(c*(1-a)+l*a)*(1-o)+(h*(1-a)+d*a)*o}function Fn(i,e){return Su(i,e)*.55+Su(i*2.1,e*2.1)*.28+Su(i*4.3,e*4.3)*.17}function wv(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,256);n.addColorStop(0,"#9c7248"),n.addColorStop(.45,"#7d5731"),n.addColorStop(1,"#5d3f22"),t.fillStyle=n,t.fillRect(0,0,256,256);for(let a=0;a<180;a++){let o=Math.random()*256,c=Math.random()*256,l=2+Math.random()*13,h=1.5+Math.random()*8,d=Math.random()>.55;t.fillStyle=d?`rgba(190,150,104,${.03+Math.random()*.07})`:`rgba(52,32,16,${.03+Math.random()*.08})`,t.beginPath(),t.ellipse(o,c,l,h,Math.random()*3.14,0,6.283),t.fill()}for(let a=0;a<9;a++){let o=Math.random()*256,c=Math.random()*256;t.strokeStyle=`rgba(40,24,12,${.12+Math.random()*.12})`,t.lineWidth=.8+Math.random()*1.1,t.beginPath(),t.moveTo(o,c),t.bezierCurveTo(o+8,c+6,o+3,c+22,o+10,c+34),t.stroke()}for(let a=0;a<260;a++){let o=Math.random()*256,c=Math.random()*256,l=.7+Math.random()*2.6;t.fillStyle=Math.random()>.5?"rgba(52,32,16,0.35)":"rgba(206,172,124,0.28)",t.beginPath(),t.ellipse(o,c,l,l*.8,Math.random()*3,0,Math.PI*2),t.fill()}let r=t.createRadialGradient(256*.36,256*.3,0,256*.36,256*.3,256*.55);r.addColorStop(0,"rgba(255,236,198,0.34)"),r.addColorStop(1,"rgba(255,236,198,0)"),t.fillStyle=r,t.fillRect(0,0,256,256);let s=new St(e);return s.colorSpace=ot,s.anisotropy=8,s}var vi=25,ga=12,Av=2.5,vs=-9.6,Rv=-10;function Cv(){let t=document.createElement("canvas");t.width=2048,t.height=768;let n=t.getContext("2d"),r=Ht(20240117);n.fillStyle="rgb(86,64,42)",n.fillRect(0,0,2048,768);let s=(l,h)=>{let d=[0,.1,.42,.54,.66,.84,1][h]*768,u=h<=1?.55:h===2?.95:1.25,p=(Fn(l*.0011+h*23.7,h*5.3)-.5)*95*u,f=(Fn(l*.0042+h*11.1,h*8.9)-.5)*70*u,_=(Fn(l*.012+h*37.1,h*2.7)-.5)*26*u,m=(Fn(l*.042+h*7.7,h*13.1)-.5)*7*u;return d+p+f+_+m},a=[{top:-4,bottom:1,col:"rgb(96,70,44)"},{top:1,bottom:2,col:"rgb(112,84,54)"},{top:2,bottom:3,col:"rgb(126,100,66)"},{top:3,bottom:4,col:"rgb(92,84,64)"},{top:4,bottom:5,col:"rgb(48,64,68)"},{top:5,bottom:6,col:"rgb(26,42,52)"}];for(let l of a){n.fillStyle=l.col,n.beginPath();let h=l.top;n.moveTo(0,h===-4?-4:s(0,h));for(let d=0;d<=2048;d+=12)n.lineTo(d,h===-4?-4:s(d,h));for(let d=2048;d>=0;d-=12)n.lineTo(d,l.bottom>=6?768:s(d,l.bottom));n.closePath(),n.fill()}for(let l=0;l<240;l++){let h=r()*2048,d=r()*768,u=50+r()*190,p=Fn(h*.0016,d*.0016)>.48,f=n.createRadialGradient(h,d,0,h,d,u);f.addColorStop(0,p?"rgba(158,130,92,0.10)":"rgba(28,22,16,0.10)"),f.addColorStop(1,"rgba(40,28,16,0)"),n.fillStyle=f,n.beginPath(),n.arc(h,d,u,0,6.283),n.fill()}for(let l=0;l<64;l++){let h=r()*2048,d=1+Math.floor(r()*5),u=s(h,d)+(r()-.5)*34,p=36+r()*150,f=6+r()*24;n.fillStyle=r()>.5?"rgba(150,116,72,0.20)":"rgba(36,26,16,0.22)",n.beginPath(),n.ellipse(h,u,p,f,(r()-.5)*.22,0,6.283),n.fill()}for(let l of[1,2,3,4,5]){n.strokeStyle=l>=4?"rgba(16,30,36,0.20)":"rgba(16,10,5,0.20)",n.lineWidth=2,n.beginPath();for(let h=0;h<=2048;h+=8){let d=s(h,l);h===0?n.moveTo(h,d):n.lineTo(h,d)}n.stroke();for(let h=0;h<8;h++){let d=r()*2048,u=s(d,l)+(r()-.5)*10;n.strokeStyle=`rgba(16,10,5,${.1+r()*.18})`,n.lineWidth=2+r()*3,n.beginPath(),n.moveTo(d,u),n.quadraticCurveTo(d+10+r()*30,u+(r()-.5)*24,d+34+r()*80,u+(r()-.5)*28),n.stroke()}}for(let l=0;l<20;l++){let h=r()*2048,d=768*(.04+r()*.72),u=50+r()*130,p=1+r()*3,f=n.createLinearGradient(h,d,h+(r()-.5)*30,d+u);f.addColorStop(0,"rgba(20,14,8,0.13)"),f.addColorStop(1,"rgba(20,14,8,0)"),n.fillStyle=f,n.beginPath(),n.moveTo(h-p,d),n.lineTo(h+p,d),n.lineTo(h+(r()-.5)*18+p*.3,d+u),n.lineTo(h+(r()-.5)*18-p*.3,d+u),n.closePath(),n.fill()}for(let l=0;l<13e3;l++){let h=r()*2048,d=r()*768,u=1.2+r()*4.6,p=r()>.5;n.fillStyle=p?`rgba(178,150,110,${.05+r()*.11})`:`rgba(28,18,10,${.05+r()*.13})`,n.beginPath(),n.ellipse(h,d,u,u*(.55+r()*.7),r()*3.14,0,6.283),n.fill()}for(let l=0;l<420;l++){let h=r()*2048,d=r()*768*.13,u=1.4+r()*5.2,p=.55+r()*.45;n.fillStyle=`rgba(${168*p|0},${136*p|0},${96*p|0},${.34+r()*.32})`,n.beginPath(),n.ellipse(h,d,u,u*(.6+r()*.5),r()*3.14,0,6.283),n.fill(),n.fillStyle="rgba(22,14,7,0.34)",n.beginPath(),n.ellipse(h+u*.16,d+u*.44,u*.78,u*.26,0,0,6.283),n.fill(),n.fillStyle="rgba(236,212,168,0.26)",n.beginPath(),n.ellipse(h-u*.3,d-u*.34,u*.46,u*.2,0,0,6.283),n.fill()}for(let l=0;l<180;l++){let h=r()*2048,d=r()*768*.2,u=1+r()*2.6;n.fillStyle="rgba(14,9,5,0.55)",n.beginPath(),n.ellipse(h,d,u,u*.8,r()*3.14,0,6.283),n.fill(),n.strokeStyle="rgba(196,166,122,0.28)",n.lineWidth=.8,n.beginPath(),n.ellipse(h,d-.5,u*1.2,u*.9,0,0,6.283),n.stroke()}for(let l=0;l<58;l++){let h=r()*2048,d=768*(.12+r()*.78),u=768*(.03+r()*.16);n.strokeStyle=`rgba(22,15,8,${.1+r()*.14})`,n.lineWidth=.8+r()*1.6,n.beginPath(),n.moveTo(h,d),n.bezierCurveTo(h+(r()-.5)*14,d+u*.4,h+(r()-.5)*18,d+u*.7,h+(r()-.5)*22,d+u),n.stroke()}for(let l=0;l<820;l++){let h=r()*2048,d=768*.08+r()*768*.92,u=1+Math.pow(r(),2.6)*2.8,p=.55+r()*.4,f=d>768*.66;n.fillStyle=f?`rgba(${108*p|0},${124*p|0},${124*p|0},0.72)`:`rgba(${136*p|0},${122*p|0},${102*p|0},0.72)`,n.beginPath(),n.ellipse(h,d,u,u*(.62+r()*.4),r()*3.14,0,6.283),n.fill(),n.fillStyle="rgba(255,248,228,0.18)",n.beginPath(),n.ellipse(h-u*.3,d-u*.34,u*.5,u*.3,0,0,6.283),n.fill(),n.fillStyle="rgba(16,10,5,0.20)",n.beginPath(),n.ellipse(h+u*.18,d+u*.5,u*.8,u*.28,0,0,6.283),n.fill()}for(let l=0;l<3e4;l++){let h=r()*2048,d=r()*768;n.fillStyle=r()>.5?`rgba(24,16,9,${.06+r()*.12})`:`rgba(196,168,126,${.03+r()*.07})`,n.fillRect(h,d,1+r()*2,1+r()*2)}for(let l=0;l<150;l++){let h=r()*2048,d=768*(.66+r()*.34),u=24+r()*90,p=n.createRadialGradient(h,d,0,h,d,u);p.addColorStop(0,`rgba(112,164,176,${.05+r()*.09})`),p.addColorStop(1,"rgba(112,164,176,0)"),n.fillStyle=p,n.beginPath(),n.arc(h,d,u,0,6.283),n.fill()}for(let l=0;l<54;l++){let h=r()*2048,d=768*(.63+r()*.12),u=40+r()*150,p=n.createLinearGradient(h,d,h,d+u);p.addColorStop(0,"rgba(164,206,216,0.10)"),p.addColorStop(1,"rgba(164,206,216,0)"),n.fillStyle=p,n.fillRect(h,d,1+r()*3,u)}let o=n.createLinearGradient(0,0,0,768*.055);o.addColorStop(0,"rgba(36,25,15,0.30)"),o.addColorStop(.5,"rgba(52,37,22,0.11)"),o.addColorStop(1,"rgba(52,37,22,0)"),n.fillStyle=o,n.fillRect(0,0,2048,768*.055),n.strokeStyle="rgba(214,184,138,0.30)",n.lineWidth=2.2,n.beginPath();for(let l=0;l<=2048;l+=6)n.lineTo(l,2+(Fn(l*.012,1.7)-.5)*5);n.stroke();for(let l=0;l<220;l++){let h=r()*2048,d=r()*768*.06;n.fillStyle=`rgba(216,188,142,${.04+r()*.07})`,n.beginPath(),n.ellipse(h,d,1+r()*4,1+r()*2,r()*3.14,0,6.283),n.fill()}let c=new St(t);return c.colorSpace=ot,c.wrapS=ir,c.wrapT=rr,c.flipY=!0,c.repeat.set(1,1),c.anisotropy=8,c}var tf=Cv(),Pv=new vt({map:tf,bumpMap:tf,bumpScale:.14,roughness:1,metalness:0,color:16777215,emissive:2827290,emissiveIntensity:.22,fog:!1}),Iv=new vt({color:4008476,roughness:1,metalness:0,flatShading:!0}),Lv=90;function Uv(i,e,t){let n=[],r=[],s=[],a=[],o=new xe;for(let h=0;h<=e;h++){let d=i*Math.pow(h/e,1.9);for(let u=0;u<=t;u++){let p=u/t*Math.PI,f=Math.cos(p)*d,_=-Math.sin(p)*d;n.push(f,0,_),r.push(f/(2*i)+.5,_/(2*i)+.5);let m=Fn(f*.036+11.3,_*.036+4.7),g=Fn(f*.16,_*.16),v=.8+.34*m+.1*(g-.5);o.setRGB(v*1.02,v,v*.9),s.push(o.r,o.g,o.b)}}let c=t+1;for(let h=0;h<e;h++)for(let d=0;d<t;d++){let u=h*c+d,p=u+1,f=u+c,_=f+1;a.push(u,f,p,p,f,_)}let l=new tt;return l.setAttribute("position",new Le(n,3)),l.setAttribute("uv",new Le(r,2)),l.setAttribute("color",new Le(s,3)),l.setIndex(a),l.computeVertexNormals(),l}var If=new Qe(Uv(Lv,40,72),Pf);If.receiveShadow=!0;ye.add(If);var ll=null;(()=>{let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),n=t.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);n.addColorStop(0,"rgba(24,32,18,0.55)"),n.addColorStop(.45,"rgba(24,32,18,0.28)"),n.addColorStop(1,"rgba(24,32,18,0)"),t.fillStyle=n,t.fillRect(0,0,256,256);let r=new St(e);r.colorSpace=ot;let s=new Qe(new Wt(7,7),new un({map:r,transparent:!0,depthWrite:!1,opacity:.9}));s.rotation.x=-Math.PI/2,s.position.y=.02,ll=s,ye.add(s)})();var Zu=new Qe(new Li(vi,vi,ga,64,1,!0,Math.PI/2,Math.PI),Iv);Zu.position.y=-ga/2;Zu.receiveShadow=!0;ye.add(Zu);var Lf=ga+Av,Ju=new Qe(new Wt(vi*2.8,Lf),Pv);Ju.position.set(0,-Lf/2,0);Ju.receiveShadow=!1;ye.add(Ju);(()=>{let i=Ht(4242),e=120,t=new vt({roughness:.88,metalness:0,flatShading:!0}),n=new nn(new Ui(1,0),t,e);n.receiveShadow=!1,n.castShadow=!1;let r=new Ne,s=new Rt,a=new M,o=new M,c=new xe;for(let l=0;l<e;l++){let h=.018+Math.pow(i(),2)*.042;o.set(ve(i,-13,13),ve(i,-12.5,-.7),ve(i,-.035,.01)),s.setFromEuler(new Gt(i()*3,i()*3,i()*3)),a.set(h*(1.1+i()*.5),h*(.8+i()*.4),h*.42),r.compose(o,s,a),n.setMatrixAt(l,r),c.setHex(i()>.45?5063220:3419170),n.setColorAt(l,c)}n.instanceMatrix.needsUpdate=!0,n.instanceColor&&(n.instanceColor.needsUpdate=!0),ye.add(n)})();(()=>{let i=Ht(9091),e=680,t=new Ui(1,0),n=new vt({roughness:.95,metalness:0,flatShading:!0,vertexColors:!1}),r=new nn(t,n,e);r.receiveShadow=!0,r.castShadow=!1;let s=new Ne,a=new Rt,o=new M,c=new M,l=new xe;for(let h=0;h<e;h++){c.set(ve(i,-13,13),ve(i,-13.5,-.25),ve(i,.005,.055)),a.setFromEuler(new Gt(i()*3,i()*3,i()*3));let d=.018+Math.pow(i(),2.2)*.07;o.set(d*ve(i,.9,1.6),d*ve(i,.4,.8),d*.45),s.compose(c,a,o),r.setMatrixAt(h,s);let u=.34+i()*.42;l.setRGB(.42*u,.32*u,.21*u),r.setColorAt(h,l)}r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0),ye.add(r)})();var nf=vi*2.8,Dv=(()=>{let e=[],t=[],n=[],r=new xe(4612138),s=new xe(2759698);for(let o=0;o<=240;o++){let c=-nf/2+o/240*nf,l=Fn(c*.33+7.1,3.7)-.5,h=-.015+l*.34,d=-.1+l*.12;if(e.push(c,h,.05,c,d,.05),t.push(r.r,r.g,r.b,s.r,s.g,s.b),o<240){let u=o*2;n.push(u,u+2,u+1,u+1,u+2,u+3)}}let a=new tt;return a.setAttribute("position",new Le(e,3)),a.setAttribute("color",new Le(t,3)),a.setIndex(n),a.computeVertexNormals(),a})(),Nv=new vt({vertexColors:!0,roughness:1,metalness:0}),Ov=new Qe(Dv,Nv);ye.add(Ov);(()=>{let t=document.createElement("canvas");t.width=256,t.height=256;let n=t.getContext("2d");n.clearRect(0,0,256,256);let r=n.createLinearGradient(0,0,256,0);r.addColorStop(0,"rgba(8,5,3,0.30)"),r.addColorStop(.14,"rgba(8,5,3,0.13)"),r.addColorStop(.34,"rgba(8,5,3,0.02)"),r.addColorStop(.66,"rgba(8,5,3,0.02)"),r.addColorStop(.86,"rgba(8,5,3,0.13)"),r.addColorStop(1,"rgba(8,5,3,0.30)"),n.fillStyle=r,n.fillRect(0,0,256,256);let s=n.createLinearGradient(0,0,0,256*.1);s.addColorStop(0,"rgba(6,4,2,0.10)"),s.addColorStop(1,"rgba(6,4,2,0)"),n.fillStyle=s,n.fillRect(0,0,256,256*.1);let a=n.createLinearGradient(0,256*.8,0,256);a.addColorStop(0,"rgba(4,3,2,0)"),a.addColorStop(1,"rgba(4,3,2,0.55)"),n.fillStyle=a,n.fillRect(0,256*.8,256,256*.2);let o=n.createLinearGradient(0,256*.94,0,256);o.addColorStop(0,"rgba(4,3,2,0)"),o.addColorStop(1,"rgba(4,3,2,0.92)"),n.fillStyle=o,n.fillRect(0,256*.94,256,256*.06);let c=new St(t);c.colorSpace=ot;let l=new Qe(new Wt(vi*2.8,ga+5),new un({map:c,transparent:!0,depthWrite:!1,fog:!1}));l.position.set(0,-(ga+5)/2-.02,.028),ye.add(l)})();var xl=null,Wi=new tn;ye.add(Wi);var Uf=new un({color:11065576,transparent:!0,opacity:0,blending:Bn,depthWrite:!1,fog:!1,side:_n}),Df=new Qe(new Wt(vi*2.8,.22),Uf);Df.position.set(0,vs,.03);Wi.add(Df);var Nf=new un({color:14677247,transparent:!0,opacity:0,blending:Bn,depthWrite:!1,fog:!1}),Of=new Qe(new Wt(vi*2.8,.024),Nf);Of.position.set(0,vs+.11,.031);Wi.add(Of);(()=>{let i=document.createElement("canvas");i.width=4,i.height=128;let e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,128);t.addColorStop(0,"rgba(150,206,222,0.55)"),t.addColorStop(.35,"rgba(96,158,180,0.22)"),t.addColorStop(1,"rgba(60,110,140,0)"),e.fillStyle=t,e.fillRect(0,0,4,128);let n=new St(i);n.colorSpace=ot,xl=new un({map:n,transparent:!0,opacity:0,blending:Bn,depthWrite:!1,fog:!1});let r=new Qe(new Wt(vi*2.8,2.6),xl);r.position.set(0,vs-1.15,.0305),Wi.add(r)})();var Ru={uTime:{value:0},uOpacity:{value:0}},Bv=new pn({uniforms:Ru,transparent:!0,depthWrite:!1,fog:!1,blending:Bn,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    uniform float uTime; uniform float uOpacity; varying vec2 vUv;
    void main() {
      float y = vUv.y;
      float w1 = sin(y * 46.0 - uTime * 1.4 + sin(vUv.x * 22.0 + uTime * 0.35) * 1.6);
      float w2 = sin(y * 87.0 - uTime * 2.1 + vUv.x * 13.0);
      float band = smoothstep(0.55, 0.98, w1) * 0.55 + smoothstep(0.75, 1.0, w2) * 0.25;
      float fade = smoothstep(0.0, 0.15, y) * (1.0 - smoothstep(0.55, 1.0, y));
      gl_FragColor = vec4(0.62, 0.86, 0.96, band * fade * uOpacity);
    }`}),Bf=new Qe(new Wt(vi*2.8,2.4),Bv);Bf.position.set(0,vs-1.15,.032);Wi.add(Bf);var Ll=150,pi=new Float32Array(Ll*4);{let i=Ht(24225);for(let e=0;e<Ll;e++)pi[e*4]=(i()-.5)*26,pi[e*4+1]=i(),pi[e*4+2]=.1+i()*.28,pi[e*4+3]=i()*6.283}var yl=new tt,Fv=new Float32Array(Ll*3);yl.setAttribute("position",new Pt(Fv,3));var Ff=new On({size:.055,map:_s(),color:13036794,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0,blending:Bn,fog:!1}),zf=new Jn(yl,Ff);zf.frustumCulled=!1;Wi.add(zf);var rf=72,Hf=new tt;{let i=Ht(29168),e=new Float32Array(rf*3);for(let t=0;t<rf;t++)e[t*3]=(i()-.5)*17,e[t*3+1]=vs+.18+i()*.75,e[t*3+2]=.3+i()*.28;Hf.setAttribute("position",new Pt(e,3))}var kf=new On({size:.075,map:_s(),color:14217983,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0,blending:Bn,fog:!1}),Vf=new Jn(Hf,kf);Vf.frustumCulled=!1;Wi.add(Vf);for(let i of Wi.children)i.raycast=()=>{};function zv(){let t=document.createElement("canvas");t.width=128,t.height=64;let n=t.getContext("2d");n.strokeStyle="#3b4854",n.lineWidth=6,n.lineCap="round",n.lineJoin="round",n.beginPath(),n.moveTo(9,30),n.quadraticCurveTo(36,8,64,34),n.quadraticCurveTo(92,8,119,30),n.stroke(),n.fillStyle="#33404b",n.beginPath(),n.ellipse(64,35,7,4,0,0,6.283),n.fill();let r=new St(t);return r.colorSpace=ot,r}function Hv(){let t=document.createElement("canvas");t.width=128,t.height=96;let n=t.getContext("2d");n.fillStyle="#40566a",n.beginPath(),n.ellipse(60,58,30,19,-.16,0,6.283),n.fill(),n.beginPath(),n.arc(88,40,12,0,6.283),n.fill(),n.fillStyle="#e0a445",n.beginPath(),n.moveTo(99,38),n.lineTo(118,42),n.lineTo(99,47),n.closePath(),n.fill(),n.fillStyle="#6e8599",n.beginPath(),n.ellipse(54,55,22,10,-.2,0,6.283),n.fill(),n.fillStyle="#33485c",n.beginPath(),n.moveTo(36,52),n.lineTo(8,42),n.lineTo(12,70),n.closePath(),n.fill(),n.fillStyle="#f7fbff",n.beginPath(),n.arc(91,37,2.6,0,6.283),n.fill(),n.fillStyle="#101820",n.beginPath(),n.arc(92,37,1.3,0,6.283),n.fill(),n.strokeStyle="#3a3026",n.lineWidth=2,n.beginPath(),n.moveTo(54,75),n.lineTo(52,88),n.moveTo(68,75),n.lineTo(70,88),n.stroke();let r=new St(t);return r.colorSpace=ot,r}function kv(){let t=document.createElement("canvas");t.width=128,t.height=96;let n=t.getContext("2d"),r=(a,o,c,l,h)=>{n.fillStyle=h,n.beginPath(),n.ellipse(a,o,c,l,0,0,6.283),n.fill(),n.fillStyle="rgba(255,250,225,0.85)",n.beginPath(),n.arc(a+c*.35,o-l*.25,c*.16,0,6.283),n.fill(),n.strokeStyle="rgba(74,42,20,0.65)",n.lineWidth=2,n.beginPath(),n.ellipse(a,o,c,l,0,0,6.283),n.stroke()};r(40,34,26,21,"#ef9a3c"),r(88,34,26,21,"#ef9a3c"),r(45,66,20,16,"#f4c05a"),r(83,66,20,16,"#f4c05a"),n.fillStyle="#4b3524",n.beginPath(),n.ellipse(64,48,4,26,0,0,6.283),n.fill(),n.strokeStyle="#4b3524",n.lineWidth=1.6,n.beginPath(),n.moveTo(62,24),n.quadraticCurveTo(54,10,48,12),n.moveTo(66,24),n.quadraticCurveTo(74,10,80,12),n.stroke();let s=new St(t);return s.colorSpace=ot,s}function Vv(){let t=document.createElement("canvas");t.width=96,t.height=64;let n=t.getContext("2d");n.fillStyle="rgba(226,244,255,0.75)",n.beginPath(),n.ellipse(40,22,18,9,-.5,0,6.283),n.fill(),n.beginPath(),n.ellipse(58,22,18,9,.5,0,6.283),n.fill(),n.fillStyle="#e8b62c",n.beginPath(),n.ellipse(48,38,24,13,0,0,6.283),n.fill(),n.fillStyle="#38291a";for(let s of[36,46,56])n.beginPath(),n.ellipse(s,38,3.4,12,0,0,6.283),n.fill();n.beginPath(),n.arc(70,34,7,0,6.283),n.fill(),n.strokeStyle="#38291a",n.lineWidth=1.6,n.beginPath(),n.moveTo(72,28),n.quadraticCurveTo(80,18,84,20),n.stroke();let r=new St(t);return r.colorSpace=ot,r}function Gv(){let t=document.createElement("canvas");t.width=64,t.height=64;let n=t.getContext("2d");n.fillStyle="#20201e",n.beginPath(),n.arc(32,30,10,0,6.283),n.fill(),n.fillStyle="#d8382e",n.beginPath(),n.ellipse(32,38,20,18,0,0,6.283),n.fill(),n.fillStyle="#20201e",n.beginPath(),n.moveTo(32,21),n.lineTo(32,56),n.lineWidth=2.5,n.stroke();for(let[s,a]of[[20,32],[44,32],[22,45],[42,45],[32,49]])n.beginPath(),n.arc(s,a,3.2,0,6.283),n.fill();let r=new St(t);return r.colorSpace=ot,r}var Gf=new tn;ye.add(Gf);function ba(i,e,t,n=1){let r=new un({map:i,transparent:!0,opacity:n,depthWrite:!1,fog:!1,side:_n,alphaTest:.02}),s=new nn(new Wt(t,t*.62),r,e);s.instanceMatrix.setUsage(Di),s.frustumCulled=!1,s.raycast=()=>{};for(let a=0;a<e;a++)s.setMatrixAt(a,new Ne().makeScale(1e-4,1e-4,1e-4));return Gf.add(s),s}var Wv=zv(),Xv=Hv(),ta=ba(Wv,14,1),as=ba(Xv,5,.88),os=ba(kv(),7,.7),na=ba(Vv(),5,.46),ia=ba(Gv(),5,.45),Wf=Ht(45437),ls=[];for(let i=0;i<40;i++)ls.push(Wf()*2-1);var Tn=[];for(let i=0;i<40;i++)Tn.push(Wf()*Math.PI*2);var sf=[[46,84],[128,158],[196,232]];function jv(i){let e={u:0,env:0,idx:-1};for(let t=0;t<sf.length;t++){let[n,r]=sf[t];if(i<n||i>r)continue;let s=(i-n)/(r-n),a=he(0,.12,s)*(1-he(.88,1,s));a>e.env&&(e={u:s,env:a,idx:t})}return e}function qv(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),n=t.createRadialGradient(256/2,256/2,256*.05,256/2,256/2,256*.5);n.addColorStop(0,"rgba(18,30,14,0.62)"),n.addColorStop(.55,"rgba(20,32,16,0.34)"),n.addColorStop(1,"rgba(20,32,16,0)"),t.fillStyle=n,t.fillRect(0,0,256,256);let r=Ht(13941534);for(let a=0;a<90;a++){let o=r()*256,c=r()*256,l=2+r()*9;if(Math.hypot(o-256/2,c-256/2)/(256*.5)>.95)continue;let d=t.createRadialGradient(o,c,0,o,c,l);d.addColorStop(0,`rgba(255,244,198,${.05+r()*.13})`),d.addColorStop(1,"rgba(255,244,198,0)"),t.fillStyle=d,t.beginPath(),t.arc(o,c,l,0,6.283),t.fill()}let s=new St(e);return s.colorSpace=ot,s}var Cu=new un({map:qv(),transparent:!0,opacity:0,depthWrite:!1,fog:!1}),Ta=new Qe(new Wt(15,8),Cu);Ta.rotation.x=-Math.PI/2;Ta.position.set(0,.028,-4);Ta.raycast=()=>{};ye.add(Ta);function Yv(){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,"rgba(20,28,34,0.55)"),n.addColorStop(1,"rgba(20,28,34,0)"),t.fillStyle=n,t.fillRect(0,0,128,128);let r=new St(e);return r.colorSpace=ot,r}var Pu=[],Xf=[];for(let i=0;i<3;i++){let e=new un({map:Yv(),transparent:!0,opacity:0,depthWrite:!1,fog:!1});Pu.push(e);let t=new Qe(new Wt([16,22,28][i],[9,12,15][i]),e);t.rotation.x=-Math.PI/2,t.position.set(0,.035+i*.001,-12-i*5),t.raycast=()=>{},ye.add(t),Xf.push(t)}var Ul=36,Ml=new tt,fi=new Float32Array(Ul*4);{let i=Ht(61951);for(let e=0;e<Ul;e++)fi[e*4]=(i()-.5)*22,fi[e*4+1]=i(),fi[e*4+2]=-2-i()*12,fi[e*4+3]=i()*6.283}var Zv=new Float32Array(Ul*3);Ml.setAttribute("position",new Pt(Zv,3));var Iu=new On({size:.075,map:_s(),color:16775920,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0,fog:!1}),va=new Jn(Ml,Iu);va.frustumCulled=!1;va.raycast=()=>{};ye.add(va);var zi=new tn;{let i=new vt({color:7317564,roughness:.9}),e=new Qe(new Li(.018,.026,.62,6),i);e.position.y=.31,zi.add(e);let t=new vt({color:10409050,roughness:.85,side:_n});for(let r of[-1,1]){let s=new Qe(new Kn(.15,8,6),t);s.scale.set(1.5,.32,.85),s.position.set(r*.15,.6,0),s.rotation.z=r*.55,zi.add(s)}let n=new es(new or({map:Rf("rgba(210,255,180,0.55)","rgba(180,240,150,0.18)"),blending:Bn,depthWrite:!1,transparent:!0,opacity:.7,fog:!1}));n.scale.setScalar(1.5),n.position.y=.45,zi.add(n)}zi.position.set(1.6,.01,-.6);zi.visible=!1;ye.add(zi);var Dl=26,Sl=new tt,Fi=new Float32Array(Dl*4);{let i=Ht(24301);for(let e=0;e<Dl;e++)Fi[e*4]=(i()-.5)*6,Fi[e*4+1]=i(),Fi[e*4+2]=-.4-i()*2.4,Fi[e*4+3]=i()*6.283}var Jv=new Float32Array(Dl*3);Sl.setAttribute("position",new Pt(Jv,3));var jf=new On({size:.075,map:_s(),color:13081180,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0,fog:!1}),_a=new Jn(Sl,jf);_a.frustumCulled=!1;_a.raycast=()=>{};ye.add(_a);var El=[],cs=[];(()=>{let i=Ht(6221057),e=[];for(let u=0;u<130;u++){let f=u<70?(i()-.5)*3:(i()-.5)*26,_=.055+i()*.05,m=.1+i()*.34,g=(i()-.5)*.1;if(e.push(f,-.02,_,f+g,-.02-m,_+(i()-.5)*.02),i()>.55){let v=m*(.4+i()*.3);e.push(f+g*.5,-.02-v,_,f+g*.5+(i()-.5)*.1,-.02-v-.06,_)}}let t=new tt;t.setAttribute("position",new Le(e,3));let n=new Gs(t,new ts({color:9073744,transparent:!0,opacity:.34,depthWrite:!1,fog:!1}));n.raycast=()=>{},ye.add(n);let r=105,s=new vt({color:7164984,roughness:1,flatShading:!0}),a=new nn(new Ui(1,0),s,r),o=new Ne,c=new Rt,l=new M,h=new M,d=new xe;for(let u=0;u<r;u++){let p=u<85;h.set(p?(i()-.5)*2.4:(i()-.5)*24,-.02-i()*.3,.055+i()*.045);let f=.005+Math.pow(i(),2)*.02;c.setFromEuler(new Gt(i()*3,i()*3,i()*3)),l.set(f*1.4,f*.8,f*.5),o.compose(h,c,l),a.setMatrixAt(u,o),d.setHex(i()>.5?9071687:5915180),a.setColorAt(u,d)}a.instanceMatrix.needsUpdate=!0,a.instanceColor&&(a.instanceColor.needsUpdate=!0),a.raycast=()=>{},ye.add(a)})();var qf=new tn,la=[];function Ku(i,e,t,n,r,s,a){let h=Ht(n)()*100,d=[],u=[];for(let m=0;m<=256;m++){let g=m/256*Math.PI*2,v=Math.cos(g)*i,x=Math.sin(g)*i,y=Fn(Math.cos(g)*3.3+h,Math.sin(g)*3.3+h*.7),R=Fn(Math.cos(g)*8.6+h*2,Math.sin(g)*8.6),w=1-Math.abs(2*y-1),P=e+t*(.1+.9*Math.pow(w*.72+R*.28,1.55));for(let D=0;D<=7;D++){let F=D/7,V=-9+(P+9)*F;d.push(v,V,x)}}for(let m=0;m<256;m++){let g=m*8,v=(m+1)*8;for(let x=0;x<7;x++)u.push(g+x,g+x+1,v+x,g+x+1,v+x+1,v+x)}let p=new tt;p.setAttribute("position",new Le(d,3)),p.setIndex(u);let f=new pn({uniforms:{uBottomColor:{value:new xe(r.bottom)},uTopColor:{value:new xe(r.top)},uSnowColor:{value:new xe(r.snow||16055295)},uBaseY:{value:e},uHeight:{value:t},uSnowLine:{value:e+t*(r.snowLine??.55)},uSnowStrength:{value:a||0},uOpacity:{value:s}},vertexShader:`
      varying float vT;
      varying float vY;
      uniform float uBaseY;
      uniform float uHeight;
      void main() {
        vY = position.y;
        vT = clamp((position.y - uBaseY) / max(0.001, uHeight), 0.0, 1.0);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 uBottomColor;
      uniform vec3 uTopColor;
      uniform vec3 uSnowColor;
      uniform float uSnowLine;
      uniform float uSnowStrength;
      uniform float uOpacity;
      varying float vT;
      varying float vY;
      void main() {
        vec3 col = mix(uBottomColor, uTopColor, smoothstep(0.0, 1.0, vT));
        float snow = smoothstep(uSnowLine - 1.0, uSnowLine + 2.5, vY) * uSnowStrength;
        col = mix(col, uSnowColor, snow);
        gl_FragColor = vec4(col, uOpacity);
      }
    `,transparent:s<.99,depthWrite:s>=.99,side:_n,fog:!1});la.push(f);let _=new Qe(p,f);_.frustumCulled=!1,qf.add(_)}Ku(172,-1.4,24,1919,{bottom:12966374,top:8298424,snow:16055295,snowLine:.54},.9,.62);Ku(124,-1.1,12.5,2027,{bottom:12441286,top:7904131},1,0);Ku(82,-.9,5.2,3121,{bottom:10468747,top:7312496},1,0);ye.add(qf);function Kv(){let t=document.createElement("canvas");t.width=512,t.height=128;let n=t.getContext("2d");n.clearRect(0,0,512,128);for(let s=0;s<90;s++){let a=Math.random()*512,o=128*(.35+Math.random()*.45),c=20+Math.random()*70,l=n.createRadialGradient(a,o,0,a,o,c);l.addColorStop(0,`rgba(255,248,235,${.035+Math.random()*.05})`),l.addColorStop(1,"rgba(255,248,235,0)"),n.fillStyle=l,n.fillRect(a-c,o-c,c*2,c*2)}let r=new St(t);return r.colorSpace=ot,r}var $v=Kv(),$u=new tn,Lu=[];for(let i=0;i<3;i++){let e=new un({map:$v,transparent:!0,opacity:[.16,.1,.06][i],depthWrite:!1,fog:!1,blending:Lp,side:_n});Lu.push(e);let t=new Qe(new Wt([110,130,150][i],[5.5,7,9][i]),e);t.position.set(0,[.8,1.8,3.2][i],[-18,-30,-46][i]),t.renderOrder=1,$u.add(t)}ye.add($u);var Nl=280,bl=new tt,cl=new Float32Array(Nl*3),Yf=new Float32Array(Nl);for(let i=0;i<Nl;i++)cl[i*3]=(Math.random()-.5)*22,cl[i*3+1]=.3+Math.random()*6.5,cl[i*3+2]=-10+Math.random()*12,Yf[i]=Math.random()*Math.PI*2;bl.setAttribute("position",new Pt(cl,3));var Uu=new On({size:.042,map:_s(),transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0,color:16770736,blending:Bn,fog:!1}),Zf=new Jn(bl,Uu);Zf.frustumCulled=!1;ye.add(Zf);(()=>{let i=new vt({color:9076851,roughness:.9,flatShading:!0}),e=Ht(77);for(let t=0;t<8;t++){let n=new Qe(new Ui(.09+e()*.12,0),i);n.position.set(ve(e,-9,9),ve(e,-2.9,-.7),-.02),n.rotation.set(e()*3,e()*3,e()*3),n.scale.set(1.1,.55+e()*.25,.24),ye.add(n)}})();function Qv(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.clearRect(0,0,256,256),t.lineCap="round";for(let r=0;r<20;r++){let s=256*(.03+Math.random()*.94),a=256*(.08+Math.random()*.16),o=(Math.random()-.5)*256*.28,c=.72+Math.random()*.22;t.strokeStyle=`rgba(${76*c|0},${118*c|0},${48*c|0},0.95)`,t.lineWidth=1.4+Math.random()*1.8,t.beginPath(),t.moveTo(s,256),t.quadraticCurveTo(s+o*.4,256-a*.6,s+o,256-a),t.stroke()}for(let r=0;r<34;r++){let s=256*(.04+Math.random()*.92),a=256*(.26+Math.random()*.52),o=(Math.random()-.5)*256*.55,c=1.2+Math.random()*2,l=t.createLinearGradient(0,256,0,256-a),h=.82+Math.random()*.26;l.addColorStop(0,`rgba(${58*h|0},${92*h|0},${36*h|0},1)`),l.addColorStop(.5,`rgba(${98*h|0},${148*h|0},${64*h|0},1)`),l.addColorStop(.86,`rgba(${146*h|0},${190*h|0},${98*h|0},1)`),l.addColorStop(1,`rgba(${180*h|0},${212*h|0},${128*h|0},0.9)`),t.strokeStyle=l,t.lineWidth=c,t.beginPath(),t.moveTo(s,256),t.quadraticCurveTo(s+o*.35,256-a*.6,s+o,256-a),t.stroke()}for(let r=0;r<7;r++){let s=256*(.08+Math.random()*.84),a=256*(.5+Math.random()*.34),o=(Math.random()-.5)*256*.3;t.strokeStyle="rgba(126,160,84,0.9)",t.lineWidth=1.1,t.beginPath(),t.moveTo(s,256),t.quadraticCurveTo(s+o*.3,256-a*.68,s+o,256-a),t.stroke(),t.fillStyle="rgba(168,190,108,0.9)";for(let c=0;c<5;c++)t.beginPath(),t.ellipse(s+o+(c-2)*2.4,256-a+3+Math.abs(c-2)*1.3,1.3,3.1,.5,0,6.283),t.fill()}let n=new St(e);return n.colorSpace=ot,n.anisotropy=8,n}function e_(){let i=new tt,e=[],t=[],n=[],r=[[-.5,0,.5,0],[0,-.5,0,.5]],s=0;for(let[a,o,c,l]of r)e.push(a,0,o,c,0,l,c,1,l,a,1,o),t.push(0,0,1,0,1,1,0,1),n.push(s,s+1,s+2,s,s+2,s+3),s+=4;return i.setAttribute("position",new Le(e,3)),i.setAttribute("uv",new Le(t,2)),i.setIndex(n),i.computeVertexNormals(),i}var t_=Qv(),Jf=e_(),Kf={value:0};function n_(i,e=1){return i.onBeforeCompile=t=>{t.uniforms.uGrassTime=Kf,t.vertexShader=`uniform float uGrassTime;
`+t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
       float wx = instanceMatrix[3][0];
       float wz = instanceMatrix[3][2];
       float gust = sin(uGrassTime * 1.35 + wx * 0.28 + wz * 0.22) * 0.5 + sin(uGrassTime * 2.7 + wx * 0.6) * 0.22;
       transformed.x += gust * ${e.toFixed(2)} * smoothstep(0.0, 1.0, position.y);
       transformed.z += gust * ${(e*.45).toFixed(2)} * smoothstep(0.0, 1.0, position.y);`)},i}function i_(i){let e=Ht(i),t=16e3,n=n_(new vt({map:t_,alphaTest:.28,side:_n,roughness:1,metalness:0,transparent:!0,opacity:1}),.085),r=new nn(Jf,n,t);r.receiveShadow=!0,r.castShadow=!1;let s=new Ne,a=new Rt,o=new M,c=new M,l=new xe;for(let h=0;h<t;h++){let d=e()*Math.PI,u=.3+Math.pow(e(),.92)*34;if(e()<he(7,34,u)*.78){h--;continue}c.set(Math.cos(d)*u,0,-Math.sin(d)*u),a.setFromAxisAngle($n,e()*Math.PI*2);let p=Math.min(1,Math.max(0,(u-2)/34)),f=1-.2*p,_=1+.38*(1-he(2.5,9,u)),m=(.16+e()*.22)*f*_,g=(.11+e()*.11)*f;o.set(g*(.8+e()*.5),m,g*(.8+e()*.5)),s.compose(c,a,o),r.setMatrixAt(h,s);let v=(.84+e()*.3)*(1-.04*p);l.setRGB(v*(.96+e()*.06),v,v*(.86+e()*.1)),r.setColorAt(h,l)}return r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0),r}function r_(){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");t.clearRect(0,0,128,128);let n=128/2,r=128*.42;for(let a=0;a<5;a++){let o=a/5*Math.PI*2;t.fillStyle="rgba(255,252,244,0.98)",t.beginPath(),t.ellipse(n+Math.cos(o)*128*.14,r+Math.sin(o)*128*.14,128*.11,128*.075,o,0,6.283),t.fill()}t.fillStyle="rgba(243,190,74,1)",t.beginPath(),t.arc(n,r,128*.052,0,6.283),t.fill(),t.strokeStyle="rgba(84,120,52,0.95)",t.lineWidth=3,t.beginPath(),t.moveTo(n,r+128*.06),t.quadraticCurveTo(n+4,128*.75,n-3,128*.98),t.stroke();let s=new St(e);return s.colorSpace=ot,s.anisotropy=4,s}var $f=r_();function s_(i){let e=Ht(i),t=1400,n=new vt({map:$f,alphaTest:.35,side:_n,roughness:.9,metalness:0,transparent:!0}),r=new nn(Jf,n,t);r.castShadow=!1,r.receiveShadow=!1;let s=new Ne,a=new Rt,o=new M,c=new M,l=new xe;for(let h=0;h<t;h++){let d=e()*Math.PI,u=.8+Math.pow(e(),.85)*12;c.set(Math.cos(d)*u,.01,-Math.sin(d)*u),a.setFromAxisAngle($n,e()*Math.PI*2);let p=.075+e()*.11;o.set(p,p,p),s.compose(c,a,o),r.setMatrixAt(h,s);let f=e();f<.55?l.setHex(16776693):f<.82?l.setHex(16771496):f<.95?l.setHex(16766692):l.setHex(14084351),r.setColorAt(h,l)}return r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0),r}function a_(i){let e=Ht(i),t=1600,n=new vt({map:Qu,alphaTest:.4,side:_n,roughness:.95,metalness:0,transparent:!0,opacity:0}),r=new nn(Tl,n,t);r.receiveShadow=!0,r.castShadow=!1;let s=new Ne,a=new Rt,o=new M,c=new M,l=new Gt,h=new xe,d=[14242860,15243818,13185068,11827748,10382124],u=[];for(let p=0;p<t;p++){let f=e()*Math.PI,_=.4+Math.pow(e(),.75)*10.5;c.set(Math.cos(f)*_,.025+e()*.025,-Math.sin(f)*_),a.setFromEuler(l.set(-Math.PI/2+(e()-.5)*.35,e()*Math.PI*2,(e()-.5)*.25));let m=.16+e()*.16;o.set(m,m,m),s.compose(c,a,o),r.setMatrixAt(p,s),h.setHex(d[Math.floor(e()*d.length)]),r.setColorAt(p,h),u.push({pos:c.clone(),quat:a.clone(),size:m,color:h.clone()})}return r.userData.leafInfo=u,r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0),r}function o_(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.clearRect(0,0,256,256);let n=t.createLinearGradient(0,256*.06,0,256*.94);n.addColorStop(0,"#e8f3dd"),n.addColorStop(.45,"#ffffff"),n.addColorStop(1,"#dfe9d2"),t.fillStyle=n,t.beginPath(),t.moveTo(256/2,256*.04),t.bezierCurveTo(256*.95,256*.3,256*.9,256*.8,256/2,256*.96),t.bezierCurveTo(256*.1,256*.8,256*.05,256*.3,256/2,256*.04),t.closePath(),t.fill(),t.strokeStyle="rgba(112,140,96,0.45)",t.lineWidth=2.4,t.beginPath(),t.moveTo(256/2,256*.09),t.lineTo(256/2,256*.92),t.stroke(),t.lineWidth=1.1,t.strokeStyle="rgba(112,140,96,0.3)";for(let s=1;s<=6;s++){let a=256*(.1+.8*(s/7)),o=.34*Math.sin(Math.PI*(s/7))*256;t.beginPath(),t.moveTo(256/2,a),t.quadraticCurveTo(256/2+o*.6,a+256*.03,256/2+o,a+256*.09),t.stroke(),t.beginPath(),t.moveTo(256/2,a),t.quadraticCurveTo(256/2-o*.6,a+256*.03,256/2-o,a+256*.09),t.stroke()}let r=new St(e);return r.colorSpace=ot,r.anisotropy=8,r}function l_(){let i=new Wt(1,1.35,2,4),e=i.attributes.position;for(let t=0;t<e.count;t++){let n=e.getX(t),s=(e.getY(t)+.675)/1.35,a=.13*(n*n*4-.4),o=-.1*s*s;e.setZ(t,a+o)}return i.computeVertexNormals(),i}var Qu=o_(),Tl=l_(),ds=new tn;ye.add(ds);var af=new vt({map:Qu,alphaTest:.38,side:_n,roughness:.86,metalness:0});function c_(){let t=document.createElement("canvas");t.width=256,t.height=256;let n=t.getContext("2d");n.fillStyle="#ffffff",n.fillRect(0,0,256,256);for(let s=0;s<220;s++){let a=Math.random()*256,o=30+Math.random()*160,c=Math.random()*256,l=Math.random()>.45;n.strokeStyle=l?`rgba(64,44,28,${.05+Math.random()*.11})`:`rgba(255,250,240,${.08+Math.random()*.16})`,n.lineWidth=.8+Math.random()*2.6,n.beginPath(),n.moveTo(a,c),n.quadraticCurveTo(a+(Math.random()-.5)*8,c+o*.5,a+(Math.random()-.5)*12,c+o),n.stroke()}for(let s=0;s<500;s++)n.fillStyle=`rgba(40,26,14,${.05+Math.random()*.14})`,n.fillRect(Math.random()*256,Math.random()*256,1+Math.random()*2,1+Math.random()*3);let r=new St(t);return r.colorSpace=ot,r.wrapS=r.wrapT=ir,r.repeat.set(1,3),r.anisotropy=4,r}var Oi=c_(),h_=new vt({color:5916210,map:Oi,bumpMap:Oi,bumpScale:.09,roughness:.93,metalness:0}),pe=null;function u_(i){let e=Ht(i),t=new tn,n=new tn;t.add(n);let r=[],s=[],a=[],o=4,c=[.24,.16,.12,.08,.05];function l(j,ue,be){let Me=j.length,le=[],Ue=[],N=[],rt=[],yt=new M,Pe=new M,ut=new M,Dt=new M().subVectors(j[1],j[0]).normalize();Pe.set(0,1,0),Math.abs(Pe.dot(Dt))>.9&&Pe.set(1,0,0),Pe.addScaledVector(Dt,-Pe.dot(Dt)).normalize();for(let Ge=0;Ge<Me;Ge++){let bt=j[Math.max(0,Ge-1)],dt=j[Math.min(Me-1,Ge+1)];yt.subVectors(dt,bt).normalize(),Pe.addScaledVector(yt,-Pe.dot(yt)).normalize(),ut.crossVectors(yt,Pe).normalize();for(let We=0;We<be;We++){let B=We/be*Math.PI*2,O=Math.cos(B),te=Math.sin(B),Be=Pe.x*O+ut.x*te,Je=Pe.y*O+ut.y*te,pt=Pe.z*O+ut.z*te,Ot=1+.018*Math.sin(We*3.2+Ge*.9)+.009*Math.sin(We*7.1+Ge*1.7),It=ue[Ge]*Ot;le.push(j[Ge].x+Be*It,j[Ge].y+Je*It,j[Ge].z+pt*It),Ue.push(Be,Je,pt),N.push(We/be,Ge/(Me-1)*2)}}for(let Ge=0;Ge<Me-1;Ge++)for(let bt=0;bt<be;bt++){let dt=Ge*be+bt,We=Ge*be+(bt+1)%be,B=(Ge+1)*be+bt,O=(Ge+1)*be+(bt+1)%be;rt.push(dt,We,B,We,O,B)}let Et=new tt;return Et.setAttribute("position",new Le(le,3)),Et.setAttribute("normal",new Le(Ue,3)),Et.setAttribute("uv",new Le(N,2)),Et.setIndex(rt),Et.computeBoundingSphere(),Et}function h(j,ue,be,Me,le,Ue,N){let rt=le===0?16:le===1?11:7,yt=le===0?16:le===1?10:7,Pe=[j.clone()],ut=[Me],Dt=ue.clone(),Et=new M().crossVectors(ue,$n);Et.lengthSq()<1e-6&&Et.set(1,0,0),Et.normalize().applyAxisAngle(ue,e()*Math.PI*2);let Ge=le===0?ve(e,.24,.52):ve(e,.22,.62),bt=be/(rt-1);for(let O=1;O<rt;O++){Dt.applyAxisAngle(Et,Ge/(rt-1)+ve(e,-.025,.025)).normalize(),Pe.push(Pe[O-1].clone().addScaledVector(Dt,bt));let te=O/(rt-1);ut.push(Me*(1-.3*te)*(1-.3*Math.pow(te,4)))}Pe.push(Pe[rt-1].clone().addScaledVector(Dt,bt*.35)),ut.push(ut[rt-1]*.85);let dt=Pe.length,We=l(Pe,ut,yt);a.push(We);let B=new Qe(We,h_);return B.name="branch-d"+le+"#"+r.length,B.userData.part=le===0?"trunk":"branch",B.castShadow=!0,B.receiveShadow=!1,B.frustumCulled=!1,t.add(B),r.push({mesh:B,start:j.clone(),len:be,depth:le,g0:Ue,g1:N,rings:dt,radial:yt,pts:Pe,radii:ut,basePos:Float32Array.from(We.attributes.position.array),lastK:-1}),{end:Pe[dt-1].clone(),endDir:Dt.clone(),pts:Pe,radii:ut,endR:ut[dt-1]}}function d(j,ue,be){let Me=new M().crossVectors(j,$n);Me.lengthSq()<1e-5&&Me.set(1,0,0),Me.normalize();let le=new M().crossVectors(j,Me).normalize(),Ue=j.clone().multiplyScalar(Math.cos(ue));return Ue.addScaledVector(Me,Math.cos(be)*Math.sin(ue)),Ue.addScaledVector(le,Math.sin(be)*Math.sin(ue)),Ue.normalize()}function u(j,ue){let be=ue*(j.length-1),Me=Math.min(j.length-2,Math.max(0,Math.floor(be))),le=be-Me,Ue=j[Me].clone().lerp(j[Me+1],le),N=new M().subVectors(j[Me+1],j[Me]).normalize();return{p:Ue,tangent:N}}function p(j,ue,be,Me,le,Ue){let N=Math.min(1,Ue+c[le]),{end:rt,endDir:yt,pts:Pe,radii:ut,endR:Dt}=h(j,ue,be,Me,le,Ue,N),Et=r[r.length-1];if(le===0&&Ue<.12)for(let We=0;We<15;We++){let B=ve(e,.5,1),{p:O,tangent:te}=u(Pe,B),Be=new M().crossVectors(te,$n);Be.lengthSq()<.02&&Be.set(1,0,0),Be.normalize().applyAxisAngle(te,e()*Math.PI*2),O.addScaledVector(Be,.02+e()*.07),s.push({pos:O,dir:Be.clone().addScaledVector(te,ve(e,.1,.7)).normalize(),g:.15+We*.012,stag:e(),sizeScale:.45,branch:Et,siteT:B})}if(le>=1){let We=le===1?34:le===2?48:le===3?84:140;for(let B=0;B<We;B++){let O=ve(e,le===o?.08:.24,1),{p:te,tangent:Be}=u(Pe,O),Je=new M().crossVectors(Be,$n);Je.lengthSq()<.02&&Je.set(1,0,0),Je.normalize().applyAxisAngle(Be,e()*Math.PI*2),te.addScaledVector(Je,.03+e()*.2);let pt=Je.clone().multiplyScalar(ve(e,.65,1)).addScaledVector(Be,ve(e,-.4,.6)).normalize();s.push({pos:te,dir:pt,g:Math.min(.82,Ue+.02),stag:e(),branch:Et,siteT:O})}}if(le>=1)for(let We=0;We<8;We++){let B=ve(e,.86,1),{p:O,tangent:te}=u(Pe,B),Be=new M().crossVectors(te,$n);Be.lengthSq()<.02&&Be.set(1,0,0),Be.normalize().applyAxisAngle(te,e()*Math.PI*2),O.addScaledVector(Be,.02+e()*.1),s.push({pos:O,dir:Be.clone().addScaledVector(te,ve(e,-.3,.5)).normalize(),g:Math.min(.9,Ue+.03),stag:e(),branch:Et,siteT:B})}if(le>=o)return;let Ge=be*ve(e,.58,.7),bt=Me*ve(e,.58,.7);if(le<=1){let We=d(yt,ve(e,.14,.32),e()*Math.PI*2);We.y-=.04+.05*le,We.z>-.02&&(We.z=-.02-e()*.12),p(rt,We.normalize(),Ge*.82,Math.max(.009,Dt*ve(e,.96,1.04)),le+1,N)}let dt=le===0?5:le===1?4:le===2?2:1;for(let We=0;We<dt;We++){let B=le<=1?We/dt*Math.PI*2+ve(e,-.42,.42):e()*Math.PI*2,O=ve(e,.6,1.14),te=le===0?ve(e,.3,.85):ve(e,.22,.94),{p:Be,tangent:Je}=u(Pe,te),pt=Math.min(ut.length-1,Math.max(0,Math.round(te*(ut.length-1)))),Ot=ut[pt],It=d(Je,O,B);It.y-=.02+.02*le,It.z>-.02&&(It.z=-.02-e()*.15),p(Be.clone().addScaledVector(Je,-.07),It.normalize(),Ge*ve(e,.92,1.18),Math.max(.01,Ot*ve(e,.68,.86)),le+1,N)}if(le===0)for(let We=0;We<3;We++){let B=ve(e,.16,.42),{p:O,tangent:te}=u(Pe,B),Be=Math.min(ut.length-1,Math.max(0,Math.round(B*(ut.length-1)))),Je=ut[Be],pt=We/3*Math.PI*2+ve(e,-.5,.5),Ot=d(te,ve(e,.95,1.2),pt);Ot.y-=ve(e,.02,.07),Ot.z>-.02&&(Ot.z=-.02-e()*.12),p(O.clone().addScaledVector(te,-.06),Ot.normalize(),Ge*ve(e,.78,1.02),Math.max(.018,Je*ve(e,.45,.62)),1,N+.012*We)}}let f=ve(e,3.15,3.6);p(new M(0,0,0),new M(ve(e,-.1,.1),1,ve(e,-.1,.1)).normalize(),f,ve(e,.17,.21),0,.06);let _=[],m=new vt({color:7295288,map:Oi,bumpMap:Oi,bumpScale:.035,roughness:.94,metalness:0,flatShading:!1}),g=new vt({color:9268301,map:Oi,bumpMap:Oi,bumpScale:.03,roughness:.9,metalness:0,flatShading:!1});function v(j,ue,be,Me,le,Ue,N=!1){let rt=[j.clone()],yt=[Me],Pe=ue.clone().normalize(),ut=be/le,Dt=e()*Math.PI*2,Et=e()*Math.PI*2;for(let Ge=1;Ge<=le;Ge++){let bt=Ge/le;Pe.x+=ve(e,-Ue,Ue)+Math.sin(Ge*.72+Dt)*Ue*.62,Pe.z+=ve(e,-Ue*.55,Ue*.55)+Math.cos(Ge*.55+Et)*Ue*.38,Pe.y-=N?.006+.02*bt:.015+.075*bt,Pe.normalize();let dt=rt[Ge-1].clone().addScaledVector(Pe,ut);dt.y=Math.max(Rv,dt.y),dt.x>11?dt.x=11:dt.x<-11&&(dt.x=-11),dt.z=Math.min(.62,Math.max(.05,dt.z)),rt.push(dt),yt.push(Math.max(.0028,Me*(1-(N?.72:.88)*Math.pow(bt,.8))))}return{pts:rt,radii:yt}}function x(j,ue,be,Me,le,Ue){let N=l(j,ue,be);a.push(N);let rt=new Qe(N,Ue<=1?m:g);rt.userData.part="root",rt.receiveShadow=!1,rt.castShadow=!1,rt.frustumCulled=!1,n.add(rt);let yt={mesh:rt,pts:j,radii:ue,rings:j.length,radial:be,basePos:Float32Array.from(N.attributes.position.array),lastK:-1};return _.push({...yt,g0:Me,g1:le,depth:Ue}),yt}function y(j,ue,be,Me,le,Ue){let N=le===0?24:le===1?12:le===2?7:5,rt=le===0?12:le===1?8:le===2?6:4,{pts:yt,radii:Pe}=v(j,ue,be,Me,N,le===0?.2:.28,le===0),ut=[.025,.02,.015,.01][Math.min(3,le)],Dt=Math.min(.86,Ue+ut);if(x(yt,Pe,rt,Ue,Dt,le),le>=3)return;let Et=le===0?14:le===1?3:1;for(let Ge=0;Ge<Et;Ge++){let bt=le===0?ve(e,.06,.94):ve(e,.18,.92),dt=Math.min(N,Math.max(1,Math.round(bt*N))),We=yt[dt].clone(),B=Pe[dt],O=e()<.5?-1:1,te=ve(e,.6,1.35),Be=new M(O*Math.sin(te)+ve(e,-.3,.3),-Math.cos(te)*ve(e,.3,.75),ve(e,-.25,.5)).normalize();y(We,Be,be*ve(e,.42,.62),Math.max(.01,B*ve(e,.56,.8)),le+1,Math.max(.006,Dt-.015+.01*Ge))}}y(new M(0,-.05,.06),new M(ve(e,-.1,.1),-1,ve(e,-.06,.14)),ve(e,4.7,5.5),.165,0,.022);for(let j=0;j<8;j++){let ue=j/8*Math.PI*2+ve(e,-.5,.5);y(new M(Math.cos(ue)*.07,-.06,.02+Math.sin(ue)*.05),new M(Math.cos(ue)*1.1,-.55,Math.sin(ue)*.5).normalize(),ve(e,1.9,2.6),.1,1,.03)}{let j=Ht(Math.floor(e()*1e9)^1592598564);for(let ue=0;ue<7;ue++){let be=new M(ve(j,-1.7,1.7),-3.1-j()*1.5,.1+j()*.26),Me=new M(ve(j,-.24,.24),-1,ve(j,-.1,.16)).normalize(),{pts:le,radii:Ue}=v(be,Me,ve(j,4.4,6.2),ve(j,.055,.095),18,.16,!0);x(le,Ue,8,1+ue*.012,1.2+ue*.012,1)}for(let ue=0;ue<8;ue++){let be=new M(ve(j,-2.8,2.8),-7.4-j()*1.1,.12+j()*.3),Me=new M(ve(j,-.85,.85),-1,ve(j,-.1,.16)).normalize(),{pts:le,radii:Ue}=v(be,Me,ve(j,2,3),ve(j,.02,.038),10,.24,!1);x(le,Ue,5,1.08+ue*.012,1.26+ue*.012,2)}}let R=[];for(let j=0;j<=8;j++){let ue=j/8;R.push(new ce(.13+.2*Math.pow(1-ue,1.15),-1.05*ue))}let w=new ns(R,16);a.push(w);let P=new vt({color:6965808,map:Oi,bumpMap:Oi,bumpScale:.07,roughness:.98,metalness:0}),D=new Qe(w,P);D.userData.part="root",D.position.set(0,-.015,0),D.scale.setScalar(.001),D.castShadow=!0,D.receiveShadow=!0,n.add(D);let F=[],V=[],W=Ht(Math.floor(e()*1e9)^1374496523);for(let j of _)for(let ue=2;ue<j.pts.length-1;ue+=2){let be=j.pts[ue],Me=new M().subVectors(j.pts[ue+1],j.pts[ue-1]).normalize(),le=new M().crossVectors(Me,$n);le.lengthSq()<1e-5&&le.set(1,0,0),le.normalize();let Ue=j.g0>=1?5:3;for(let N=0;N<Ue;N++){let rt=le.clone().applyAxisAngle(Me,W()*Math.PI*2),yt=.018+W()*.048,Pe=be.clone().addScaledVector(rt,yt);F.push(be.x,be.y,be.z,Pe.x,Pe.y,Pe.z),V.push(j.g1)}}let k=V.map((j,ue)=>ue).sort((j,ue)=>V[j]-V[ue]),Y=new Float32Array(F.length);for(let j=0;j<k.length;j++){let ue=k[j];for(let be=0;be<6;be++)Y[j*6+be]=F[ue*6+be]}let X=k.map(j=>V[j]),K=new tt;K.setAttribute("position",new Pt(Y,3)),K.setDrawRange(0,0);let ee=new ts({color:10190684,transparent:!0,opacity:.42,depthWrite:!1,fog:!1}),oe=new Gs(K,ee);oe.userData.part="root",oe.raycast=()=>{},n.add(oe),a.push(K);let se=Math.min(s.length,4e4),Se=new nn(Tl,af,se);Se.userData.part="leaf",Se.instanceMatrix.setUsage(Di),Se.castShadow=!0,Se.frustumCulled=!1,t.add(Se);let Re=[],ie=new xe;for(let j=0;j<se;j++){let ue=s[j],be=new Rt().setFromUnitVectors($n,ue.dir);be.multiply(new Rt().setFromAxisAngle($n,e()*Math.PI*2));let Me=new xe,le=e();le<.45?Me.setHex(14836266):le<.75?Me.setHex(15708196):le<.92?Me.setHex(13185068):Me.setHex(10320682);let Ue=ue.pos.clone();Ue.z=Math.min(Ue.z,-.03-e()*.12),Ue.y=Math.max(.18,Ue.y);let N=ue.branch?Tf(ue.branch.pts,ue.siteT):Ue.clone(),rt=Ue.clone().sub(N);Re.push({pos:Ue,quat:be,size:ve(e,.2,.34)*(ue.sizeScale||1),grow:ue.g,stag:ue.stag,autumn:Me,tone:ve(e,.82,1.14),phase:e()*Math.PI*2,spin:ve(e,.4,1.2),branch:ue.branch,siteT:ue.siteT,offset:rt}),Se.setColorAt(j,ie.setHex(16777215))}Se.instanceColor&&(Se.instanceColor.needsUpdate=!0);let ae=56,Ee=new Kn(1,14,11),Te=new vt({roughness:.38,metalness:0}),fe=new nn(Ee,Te,ae);fe.userData.part="fruit",fe.instanceMatrix.setUsage(Di),fe.castShadow=!0,fe.frustumCulled=!1,t.add(fe);let T=new Li(.008,.011,.075,5,1);T.translate(0,.037,0);let b=new vt({color:5980711,roughness:1,metalness:0}),L=new nn(T,b,ae);L.userData.part="fruit",L.instanceMatrix.setUsage(Di),L.frustumCulled=!1,t.add(L);let U=[],A=Re.filter(j=>j.pos.y>1.2&&Math.hypot(j.pos.x,j.pos.z)>1.6),I=A.length>20?A:Re;for(let j=0;j<ae;j++){let be=I[Math.floor(e()*I.length)].pos.clone();be.y-=.05+e()*.07,be.x+=ve(e,-.05,.05),be.z+=.3+e()*.2;let Me=new xe,le=e();le<.62?Me.setHex(12595754):le<.86?Me.setHex(14177580):Me.setHex(14725690),U.push({pos:be,size:ve(e,.13,.2),ripe:Me.clone(),quat:new Rt().setFromEuler(new Gt(e()*3,e()*3,e()*3)),phase:e()*Math.PI*2,stag:e()}),fe.setColorAt(j,Me),L.setColorAt(j,ie.setHex(16777215))}fe.instanceColor&&(fe.instanceColor.needsUpdate=!0),L.instanceColor&&(L.instanceColor.needsUpdate=!0);let S=Math.min(1800,Math.floor(Re.length*.085)),C=new Wt(1,1),H=new un({map:$f,alphaTest:.3,side:_n,transparent:!0,opacity:0,depthWrite:!1}),J=new nn(C,H,S);J.userData.part="flower",J.instanceMatrix.setUsage(Di),J.frustumCulled=!1,t.add(J);let z=[],Q=new xe;for(let j=0;j<S;j++){let be=Re[Math.floor(e()*Re.length)].pos.clone();be.z+=.34+e()*.22,be.y+=e()*.06;let Me=new Rt().setFromEuler(new Gt(e()*3,e()*3,e()*3)),le=ve(e,.2,.31);z.push({pos:be,quat:Me,size:le}),e()<.45?Q.setHex(16771056):Q.setHex(16752326),J.setColorAt(j,Q),J.setMatrixAt(j,new Ne().compose(be,Me,new M(le,le,le)))}J.instanceColor&&(J.instanceColor.needsUpdate=!0),J.instanceMatrix.needsUpdate=!0;let $=[];for(let j of r){if(j.depth<1)continue;let ue=j.depth>=3?3:2;for(let be=0;be<ue;be++){let Me=Math.floor(ve(e,.25,.96)*(j.pts.length-1)),le=j.pts[Me].clone(),Ue=j.radii?j.radii[Me]:.02;le.y+=Ue*1.05+.008,$.push({pos:le,s:.085+Ue*2.6})}}let re=new Kn(1,6,4),_e=new vt({color:16252159,roughness:.82,metalness:0,transparent:!0,opacity:0}),me=new nn(re,_e,$.length);me.userData.part="snow",me.instanceMatrix.setUsage(Di),me.frustumCulled=!1,t.add(me);let Ie=$.map(j=>({pos:j.pos,quat:new Rt().setFromEuler(new Gt(e()*.4,e()*3,e()*.4)),sx:j.s*ve(e,.75,1.15),sy:j.s*.62,sz:j.s*ve(e,.75,1.15)}));for(let j=0;j<Ie.length;j++){let ue=Ie[j];me.setMatrixAt(j,new Ne().compose(ue.pos,ue.quat,new M(ue.sx,ue.sy,ue.sz)))}me.instanceMatrix.needsUpdate=!0;let Oe=new vt({map:wv(),roughness:.52,metalness:.02}),Ve=new tn;Ve.userData.part="seed",Ve.position.set(0,.055,.07),Ve.rotation.set(.42,.6,.15);let Fe=new Qe(new Kn(.145,24,16,0,Math.PI*2,0,Math.PI*.5),Oe),Ce=new Qe(new Kn(.145,24,16,0,Math.PI*2,Math.PI*.5,Math.PI*.5),Oe);Fe.scale.set(1,.78,1.3),Ce.scale.set(1,.78,1.3),Fe.castShadow=!0,Ce.castShadow=!0,Ve.add(Fe,Ce);let nt=new Qe(new Zs(.128,.006,6,32),new vt({color:2758924,roughness:1,metalness:0}));nt.rotation.x=Math.PI/2,Ve.add(nt),t.add(Ve);let ht=af.clone(),ft=[];for(let j=0;j<2;j++){let ue=new Qe(Tl,ht);ue.userData.part="cotyledon",ue.scale.setScalar(.001),ue.position.set(j===0?-.035:.035,.1,.03),ue.rotation.set(j===0?.35:-.35,j===0?-1.15:1.15,j===0?.85:-.85),t.add(ue),ft.push(ue)}let we={group:t,rootSub:n,branches:r,leaves:Se,leafData:Re,roots:_,flare:D,flareMat:P,rootMats:[m,g],rootHairMat:ee,rootHairs:oe,hairThresholds:X,seedMesh:Ve,seedTop:Fe,seedBottom:Ce,seedCrack:nt,seedMat:Oe,cotyledons:ft,cotyledonMat:ht,geos:a,fruits:fe,stems:L,fruitData:U,fruitGeo:Ee,fruitMat:Te,stemGeo:T,stemMat:b,blossoms:J,blossomMat:H,blossomGeo:C,blossomData:z,snowCaps:me,snowCapGeo:re,snowCapMat:_e,snowCapData:Ie,radius:0};ds.add(t);let je=0;for(let j of r)je=Math.max(je,j.start.y+j.len);return we.height=je,we}function d_(i){if(i){ds.remove(i.group);for(let e of i.geos)e.dispose();i.leaves.dispose(),i.fruits&&i.fruits.dispose(),i.stems&&i.stems.dispose(),i.seedMesh.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(e.material.map&&e.material.map.dispose(),e.material.dispose())}),i.cotyledonMat.dispose();for(let e of i.rootMats)e.dispose();i.rootHairMat&&i.rootHairMat.dispose(),i.flareMat&&i.flareMat.dispose(),i.fruitGeo.dispose(),i.fruitMat.dispose(),i.stemGeo.dispose(),i.stemMat.dispose(),i.blossoms&&(i.blossoms.dispose(),i.blossomMat.dispose(),i.blossomGeo.dispose()),i.snowCaps&&(i.snowCaps.dispose(),i.snowCapMat.dispose(),i.snowCapGeo.dispose())}}function _s(){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.5,"rgba(255,255,255,0.75)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new St(e);return r.colorSpace=ot,r}var wa=9e3,wl=new tt,hl=new Float32Array(wa*3),Qf=new Float32Array(wa),Du=new Float32Array(wa);for(let i=0;i<wa;i++)hl[i*3]=(Math.random()-.5)*56,hl[i*3+1]=Math.random()*26,hl[i*3+2]=-24+Math.random()*28,Qf[i]=.3+Math.random()*.55,Du[i]=Math.random()*Math.PI*2;wl.setAttribute("position",new Pt(hl,3));var em=new On({size:.22,map:_s(),transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0,color:16777215,fog:!1}),Al=new Jn(wl,em);Al.frustumCulled=!1;ye.add(Al);function p_(){let t=document.createElement("canvas");t.width=32,t.height=128;let n=t.getContext("2d"),r=n.createLinearGradient(0,0,0,128);r.addColorStop(0,"rgba(210,230,245,0)"),r.addColorStop(.25,"rgba(220,238,250,0.55)"),r.addColorStop(.75,"rgba(235,246,255,0.75)"),r.addColorStop(1,"rgba(235,246,255,0)"),n.fillStyle=r,n.fillRect(32*.4,0,32*.2,128);let s=new St(t);return s.colorSpace=ot,s}var Ol=1400,Rl=new tt,ul=new Float32Array(Ol*3),tm=new Float32Array(Ol);for(let i=0;i<Ol;i++)ul[i*3]=(Math.random()-.5)*24,ul[i*3+1]=Math.random()*8,ul[i*3+2]=-9+Math.random()*9,tm[i]=10+Math.random()*8;Rl.setAttribute("position",new Pt(ul,3));var nm=new On({size:.46,map:p_(),transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0,color:14084342,fog:!1}),Cl=new Jn(Rl,nm);Cl.frustumCulled=!1;ye.add(Cl);var f_=[[16,31,.62],[40,54,.55],[62,72,.45],[96,106,.42]];function m_(i){let e=0;for(let[t,n,r]of f_)if(i>t&&i<n){let s=(i-t)/(n-t);e=Math.max(e,r*he(0,.18,s)*(1-he(.82,1,s)))}return e}var gi=220,im=new vt({map:Qu,alphaTest:.45,side:_n,roughness:.9,transparent:!1}),xn=new nn(Tl,im,gi);xn.instanceMatrix.setUsage(Di);xn.frustumCulled=!1;var xa=[],hs=new Ne().makeScale(1e-4,1e-4,1e-4);for(let i=0;i<gi;i++)xa.push({life:0,pos:new M,vel:new M,rot:new M,spin:new M,size:.2,color:new xe(16777215)}),xn.setMatrixAt(i,hs),xn.setColorAt(i,al.setHex(16777215));ye.add(xn);var ca=0;function g_(i){let e=xa[ca];ca=(ca+1)%gi,e.life=1,e.pos.set((Math.random()-.5)*7,1+Math.random()*5.5,(Math.random()-.5)*7),e.vel.set((Math.random()-.5)*.5,-(.5+Math.random()*.5),(Math.random()-.5)*.5),e.rot.set(Math.random()*6.28,Math.random()*6.28,Math.random()*6.28),e.spin.set((Math.random()-.5)*2.4,(Math.random()-.5)*2.4,(Math.random()-.5)*2.4),e.size=.16+Math.random()*.1,e.color.copy(i),xn.setColorAt((ca+gi-1)%gi,i),xn.instanceColor&&(xn.instanceColor.needsUpdate=!0)}var Xe={theta:1.46,phi:1.46,radius:12.5,dir:1,target:new M(0,3.3,0)},Nu=Math.PI/2-.36,Ou=Math.PI/2+.36,ra=[[0,.1,.9],[18,.08,1.1],[32,0,1.3],[42,-.55,2.7],[56,-.7,3.1],[70,0,1.8],[76,.35,2.2],[94,1.2,3.8],[108,2.2,5.2],[120,3,10.8]];function Eu(i){if(i>=ra[ra.length-1][0])return null;for(let e=1;e<ra.length;e++){let[t,n,r]=ra[e];if(i<=t){let[s,a,o]=ra[e-1],c=he(0,1,(i-s)/Math.max(.001,t-s));return{targetY:a+(n-a)*c,viewH:o+(r-o)*c}}}return null}var Bl=-999,Hn=new Map,ua=0,of=0,mr=Zt.domElement;mr.style.touchAction="none";mr.addEventListener("pointerdown",i=>{Hn.set(i.pointerId,{x:i.clientX,y:i.clientY,sx:i.clientX,sy:i.clientY,moved:!1}),Bl=performance.now(),mr.setPointerCapture(i.pointerId)});mr.addEventListener("pointermove",i=>{let e=Hn.get(i.pointerId);if(!e)return;let t=i.clientX-e.x,n=i.clientY-e.y;if(e.x=i.clientX,e.y=i.clientY,Math.hypot(i.clientX-e.sx,i.clientY-e.sy)>6&&(e.moved=!0),Bl=performance.now(),Hn.size===1)Xe.theta=mi(Xe.theta-t*.006,Nu,Ou),Xe.phi=mi(Xe.phi-n*.005,.42,1.52);else if(Hn.size===2){let[r,s]=[...Hn.values()],a=Math.hypot(r.x-s.x,r.y-s.y);ua>0?Xe.radius=mi(of*(ua/a),5.5,30):(ua=a,of=Xe.radius)}});function v_(i){let e=Hn.get(i.pointerId);Hn.delete(i.pointerId),Hn.size<2&&(ua=0),e&&!e.moved&&Hn.size===0&&Em(i.clientX,i.clientY)}function __(i){Hn.delete(i.pointerId),Hn.size<2&&(ua=0)}mr.addEventListener("pointerup",v_);mr.addEventListener("pointercancel",__);mr.addEventListener("wheel",i=>{i.preventDefault(),Xe.radius=mi(Xe.radius*Math.exp(i.deltaY*.0012),5.5,30),Bl=performance.now()},{passive:!1});var sa=document.getElementById("season"),tl=document.getElementById("sub"),x_=document.getElementById("year"),y_=document.getElementById("chapterIndex"),nl=document.getElementById("chapterTitle"),M_=document.getElementById("chapterText"),S_=document.getElementById("player"),Bu=document.getElementById("playBtn"),E_=document.getElementById("replayBtn"),Hi=document.getElementById("timeline"),b_=document.getElementById("timecode"),T_=document.getElementById("marks"),w_=document.getElementById("narration"),Aa=document.getElementById("startScreen"),A_=document.getElementById("startClassBtn"),R_=document.getElementById("freeViewBtn"),yy=document.getElementById("classroomTop"),lf=document.getElementById("classChapterIndex"),cf=document.getElementById("classChapterTitle"),aa=document.getElementById("classSeason"),C_=document.getElementById("classChapterBtn"),P_=document.getElementById("classTeacherBtn"),I_=document.getElementById("classFindBtn"),L_=document.getElementById("classQuartetBtn"),dl=document.getElementById("classAutoBtn"),Fu=document.getElementById("classProjectorBtn"),zu=document.getElementById("classLockBtn"),U_=document.getElementById("classExitBtn"),My=document.getElementById("seasonWheel"),il=document.getElementById("wheelNeedle"),hf=document.getElementById("wheelYear"),uf=document.getElementById("subtitleText"),df=document.getElementById("subtitleMeta"),pf=document.getElementById("classTimecode"),D_=document.getElementById("classPrevBtn"),pl=document.getElementById("classPlayBtn"),N_=document.getElementById("classNextBtn"),Hu=document.getElementById("classVoiceBtn"),O_=document.getElementById("classReplayBtn"),Ra=document.getElementById("chapterDrawer"),ku=document.getElementById("chapterGrid"),ed=document.getElementById("teacherPanel"),B_=document.getElementById("teacherTitle"),ff=document.getElementById("teacherBody"),F_=document.getElementById("quartetOverlay"),mf=document.getElementById("quartetGrid"),Pl=document.getElementById("partCard"),z_=document.getElementById("partGlyph"),H_=document.getElementById("partName"),k_=document.getElementById("partPinyin"),V_=document.getElementById("partDesc"),G_=document.getElementById("partClose"),pr=document.getElementById("findBanner"),W_=document.getElementById("findText"),gf=document.getElementById("findProgress"),Vu=document.getElementById("findNext"),X_=document.getElementById("findClose"),da=document.getElementById("pausePrompt"),rl=document.getElementById("classToast"),gr=document.getElementById("lockOverlay"),j_=document.getElementById("chapterBtnNormal"),q_=document.getElementById("quartetBtnNormal"),Y_=document.getElementById("classEnterBtn"),sl="",_i=-1,fn=!1,ki=!0,Ca="speechSynthesis"in window,kn=Ca,fs=!1,xi=!1,vr=!1,Vi=!1,Qn=null,_r=!1,fr=[],Bi=0,Gu="",ya=1,Wu=-1,fl=null,pa=null,vf=0,Il=0,bu=!1,Gi=!1,Xu=!1,an=[{start:0,end:16,title:"\u79CD\u5B50\u5165\u571F",text:"\u4E00\u9897\u5C0F\u5C0F\u7684\u79CD\u5B50\u843D\u8FDB\u677E\u8F6F\u7684\u6CE5\u571F\u91CC\u3002\u5B83\u5B89\u9759\u5730\u8EBA\u7740\uFF0C\u7B49\u5F85\u6C34\u5206\u548C\u6E29\u6696\u628A\u5B83\u5524\u9192\u3002"},{start:16,end:32,title:"\u6625\u96E8\u6ECB\u6DA6",text:"\u6625\u96E8\u843D\u4E0B\u6765\uFF0C\u79CD\u5B50\u559D\u9971\u4E86\u6C34\uFF0C\u8EAB\u4F53\u6162\u6162\u80C0\u5927\uFF0C\u575A\u786C\u7684\u5916\u58F3\u4ECE\u4E2D\u95F4\u88C2\u5F00\u4E00\u6761\u7F1D\u3002"},{start:32,end:56,title:"\u5411\u4E0B\u624E\u6839",text:"\u6700\u5148\u94BB\u51FA\u6765\u7684\u4E0D\u662F\u53F6\u5B50\uFF0C\u800C\u662F\u6839\u3002\u4E3B\u6839\u5411\u4E0B\u63A2\u7D22\uFF0C\u4FA7\u6839\u5411\u56DB\u5468\u94FA\u5F00\uFF0C\u628A\u6CE5\u571F\u7262\u7262\u6293\u4F4F\u3002"},{start:56,end:76,title:"\u7834\u571F\u53D1\u82BD",text:"\u5AE9\u82BD\u9876\u7740\u79CD\u58F3\u94BB\u51FA\u5730\u9762\uFF0C\u4E24\u7247\u5B50\u53F6\u6162\u6162\u5C55\u5F00\uFF0C\u7B2C\u4E00\u6B21\u89C1\u5230\u9633\u5149\u3002"},{start:76,end:94,title:"\u5E7C\u82D7\u521D\u957F",text:"\u5C0F\u82D7\u628A\u6839\u624E\u5F97\u66F4\u6DF1\uFF0C\u830E\u79C6\u53D8\u7C97\uFF0C\u7B2C\u4E00\u7247\u771F\u53F6\u8212\u5C55\u5F00\u6765\uFF0C\u5B83\u5F00\u59CB\u81EA\u5DF1\u5236\u9020\u517B\u5206\u3002"},{start:94,end:108,title:"\u5C0F\u6811\u6210\u5F62",text:"\u98CE\u5439\u8FC7\uFF0C\u96E8\u843D\u4E0B\uFF0C\u5C0F\u6811\u5728\u4E00\u6B21\u6B21\u6447\u6643\u4E2D\u53D8\u5F97\u66F4\u7ED3\u5B9E\uFF0C\u679D\u4E2B\u4E00\u5C42\u5C42\u5411\u5916\u4F38\u5C55\u3002"},{start:108,end:120,title:"\u957F\u6210\u5927\u6811",text:"\u4E00\u5E74\u53C8\u4E00\u5E74\uFF0C\u6811\u5E72\u7C97\u58EE\uFF0C\u6811\u51A0\u5982\u4F1E\uFF0C\u5B83\u7EC8\u4E8E\u957F\u6210\u4E86\u4E00\u68F5\u5927\u6811\u3002"},{start:120,end:140,title:"\u7B2C\u4E00\u5E74 \xB7 \u590F",text:"\u590F\u5929\u5230\u4E86\uFF0C\u53F6\u5B50\u6D53\u7EFF\uFF0C\u9633\u5149\u7A7F\u8FC7\u6811\u51A0\uFF0C\u6811\u836B\u4E0B\u51C9\u5FEB\u6781\u4E86\u3002"},{start:140,end:160,title:"\u7B2C\u4E00\u5E74 \xB7 \u79CB",text:"\u79CB\u5929\uFF0C\u53F6\u5B50\u53D8\u6210\u7EA2\u548C\u91D1\uFF0C\u4E00\u7247\u7247\u98D8\u843D\uFF0C\u6162\u6162\u8150\u70C2\uFF0C\u53D8\u6210\u6CE5\u571F\u91CC\u7684\u517B\u5206\u3002"},{start:160,end:180,title:"\u7B2C\u4E00\u5E74 \xB7 \u51AC",text:"\u51AC\u5929\uFF0C\u679D\u5934\u843D\u6EE1\u767D\u96EA\uFF0C\u6811\u5B89\u9759\u5730\u7761\u7740\uFF0C\u6839\u8FD8\u5728\u571F\u91CC\u547C\u5438\u3002"},{start:180,end:200,title:"\u7B2C\u4E8C\u5E74 \xB7 \u6625",text:"\u7B2C\u4E8C\u5E74\u6625\u5929\uFF0C\u6811\u53C8\u9192\u6765\uFF0C\u65B0\u82BD\u548C\u82B1\u6735\u4E00\u8D77\u5192\u51FA\u6765\u3002"},{start:200,end:220,title:"\u7B2C\u4E8C\u5E74 \xB7 \u590F",text:"\u590F\u5929\uFF0C\u6811\u836B\u50CF\u4E00\u628A\u5927\u4F1E\uFF0C\u5C0F\u9E1F\u548C\u6606\u866B\u90FD\u6765\u8FD9\u91CC\u4F11\u606F\u3002"},{start:220,end:240,title:"\u7B2C\u4E8C\u5E74 \xB7 \u79CB",text:"\u7B2C\u4E8C\u5E74\u79CB\u5929\uFF0C\u679D\u5934\u7ED3\u51FA\u679C\u5B9E\uFF0C\u679C\u5B9E\u91CC\u6709\u65B0\u7684\u79CD\u5B50\uFF0C\u751F\u547D\u5C31\u8FD9\u6837\u4F20\u4E0B\u53BB\u3002"},{start:240,end:260,title:"\u7B2C\u4E8C\u5E74 \xB7 \u51AC",text:"\u51AC\u5929\u53C8\u6765\u4E86\uFF0C\u4E00\u5E74\u7ED3\u675F\uFF0C\u65B0\u7684\u8F6E\u56DE\u53C8\u8981\u5F00\u59CB\u3002"}],_f=[{q:"\u79CD\u5B50\u4F4F\u5728\u54EA\u91CC\uFF1F\u5B83\u8981\u559D\u4EC0\u4E48\u624D\u80FD\u9192\u6765\uFF1F",a:"\u62B1\u819D\u8E72\u4E0B\uFF0C\u5047\u88C5\u81EA\u5DF1\u662F\u4E00\u9897\u5C0F\u79CD\u5B50\u3002"},{q:"\u79CD\u5B50\u559D\u9971\u6C34\u4EE5\u540E\uFF0C\u5916\u9762\u7684\u58F3\u4F1A\u600E\u4E48\u6837\uFF1F",a:"\u624B\u6307\u8F7B\u8F7B\u70B9\u819D\u76D6\uFF0C\u6A21\u4EFF\u6625\u96E8\u4E00\u6EF4\u4E00\u6EF4\u843D\u4E0B\u6765\u3002"},{q:"\u5148\u94BB\u51FA\u6765\u7684\u662F\u53F6\u5B50\uFF0C\u8FD8\u662F\u6839\uFF1F",a:"\u53CC\u624B\u5411\u4E0B\u4F38\uFF0C\u5B66\u6839\u5F80\u6CE5\u571F\u6DF1\u5904\u94BB\u3002"},{q:"\u5AE9\u82BD\u9876\u5F00\u6CE5\u571F\u7684\u65F6\u5019\uFF0C\u7528\u4E86\u591A\u5927\u7684\u529B\u6C14\uFF1F",a:"\u6162\u6162\u7AD9\u8D77\u6765\uFF0C\u53CC\u624B\u5411\u4E0A\u4E3E\uFF0C\u5B66\u5AE9\u82BD\u9876\u5F00\u6CE5\u571F\u3002"},{q:"\u7B2C\u4E00\u7247\u771F\u53F6\u662F\u4EC0\u4E48\u989C\u8272\uFF1F\u5B83\u4E3A\u4EC0\u4E48\u9700\u8981\u9633\u5149\uFF1F",a:"\u624B\u638C\u644A\u5F00\uFF0C\u5F53\u4E00\u7247\u5C0F\u53F6\u5B50\u6652\u6652\u592A\u9633\u3002"},{q:"\u5C0F\u6811\u88AB\u98CE\u5439\u5F97\u6447\u6765\u6447\u53BB\uFF0C\u4E3A\u4EC0\u4E48\u6CA1\u6709\u5012\uFF1F",a:"\u5DE6\u53F3\u8F7B\u8F7B\u6447\u6446\uFF0C\u50CF\u4E00\u68F5\u5C0F\u6811\u5728\u98CE\u91CC\u3002"},{q:"\u5927\u6811\u6709\u591A\u5927\uFF1F\u6211\u4EEC\u4E00\u8D77\u6765\u62B1\u4E00\u62B1\u3002",a:"\u5F20\u5F00\u53CC\u81C2\uFF0C\u56F4\u6210\u4E00\u4E2A\u5927\u5706\u5708\u3002"},{q:"\u590F\u5929\u7AD9\u5728\u6811\u4E0B\uFF0C\u4E3A\u4EC0\u4E48\u89C9\u5F97\u51C9\u5FEB\uFF1F",a:"\u53CC\u624B\u642D\u5728\u5934\u9876\uFF0C\u505A\u4E00\u4E2A\u5C0F\u51C9\u68DA\u3002"},{q:"\u843D\u53F6\u98D8\u4E0B\u6765\u4EE5\u540E\uFF0C\u53BB\u4E86\u54EA\u91CC\uFF1F",a:"\u624B\u6307\u8F6C\u5708\uFF0C\u6162\u6162\u843D\u5230\u5730\u4E0A\uFF0C\u518D\u53D8\u6210\u6CE5\u571F\u7684\u517B\u5206\u3002"},{q:"\u51AC\u5929\u5927\u6811\u7761\u7740\u4E86\u5417\uFF1F\u96EA\u843D\u5728\u54EA\u91CC\uFF1F",a:"\u62B1\u8D77\u624B\u81C2\u8F7B\u8F7B\u6447\u6643\uFF0C\u5B66\u5927\u6811\u5728\u96EA\u91CC\u4F11\u606F\u3002"},{q:"\u7B2C\u4E8C\u5E74\u6625\u5929\uFF0C\u6811\u4E0A\u5148\u5F00\u51FA\u4EC0\u4E48\uFF1F",a:"\u53CC\u624B\u4ECE\u4E0B\u5DF4\u5411\u5916\u6253\u5F00\uFF0C\u5B66\u4E00\u6735\u82B1\u6162\u6162\u5F00\u653E\u3002"},{q:"\u590F\u5929\u8C01\u4F1A\u5728\u6811\u836B\u4E0B\u4F11\u606F\uFF1F",a:"\u5B66\u5C0F\u9E1F\u98DE\u4E00\u98DE\uFF0C\u518D\u627E\u4E2A\u6811\u836B\u505C\u4E0B\u6765\u3002"},{q:"\u679C\u5B9E\u91CC\u9762\u85CF\u7740\u4EC0\u4E48\uFF1F",a:"\u53CC\u624B\u6367\u6210\u4E00\u4E2A\u5C0F\u679C\u5B50\uFF0C\u91CC\u9762\u85CF\u7740\u65B0\u7684\u79CD\u5B50\u3002"},{q:"\u4E00\u5E74\u7ED3\u675F\u4E86\uFF0C\u660E\u5E74\u8FD8\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF1F",a:"\u7528\u624B\u753B\u4E00\u4E2A\u5927\u5706\u5708\uFF1A\u6625\u590F\u79CB\u51AC\uFF0C\u53C8\u56DE\u6765\u4E86\u3002"}],Z_=[["seed"],["seed"],["root","seed"],["root","trunk","cotyledon"],["leaf","trunk","root"],["leaf","branch","trunk","root"],["leaf","branch","trunk","root"],["leaf","branch","trunk","root"],["leaf","branch","trunk","root"],["branch","trunk","snow"],["flower","leaf","branch","trunk"],["leaf","branch","trunk","root","bird","insect"],["fruit","leaf","branch","trunk"],["snow","branch","trunk"]],fa={seed:{name:"\u79CD\u5B50",pinyin:"zh\u01D2ng zi",desc:"\u79CD\u5B50\u7761\u5728\u6CE5\u571F\u91CC\uFF0C\u559D\u9971\u96E8\u6C34\u5C31\u4F1A\u6162\u6162\u9192\u6765\u3002"},root:{name:"\u6839",pinyin:"g\u0113n",desc:"\u6839\u628A\u6811\u7262\u7262\u6293\u4F4F\uFF0C\u8FD8\u5E2E\u5927\u6811\u559D\u6C34\u3002"},trunk:{name:"\u6811\u5E72",pinyin:"sh\xF9 g\xE0n",desc:"\u6811\u5E72\u53C8\u7C97\u53C8\u7ED3\u5B9E\uFF0C\u628A\u6C34\u548C\u517B\u5206\u9001\u5230\u6811\u679D\u4E0A\u3002"},branch:{name:"\u6811\u679D",pinyin:"sh\xF9 zh\u012B",desc:"\u6811\u679D\u5411\u56DB\u5468\u4F38\u5F00\uFF0C\u7ED9\u53F6\u5B50\u5B89\u5BB6\u3002"},leaf:{name:"\u53F6",pinyin:"y\xE8",desc:"\u53F6\u5B50\u6652\u7740\u592A\u9633\uFF0C\u4E3A\u5927\u6811\u5236\u9020\u517B\u5206\u3002"},cotyledon:{name:"\u5B50\u53F6",pinyin:"z\u01D0 y\xE8",desc:"\u5B50\u53F6\u662F\u79CD\u5B50\u5148\u957F\u51FA\u7684\u4E24\u7247\u5C0F\u53F6\u5B50\uFF0C\u5E2E\u5AE9\u82BD\u89C1\u9633\u5149\u3002"},flower:{name:"\u82B1",pinyin:"hu\u0101",desc:"\u82B1\u5F00\u7684\u65F6\u5019\uFF0C\u871C\u8702\u548C\u5C0F\u9E1F\u90FD\u6765\u4E86\u3002"},fruit:{name:"\u679C",pinyin:"gu\u01D2",desc:"\u679C\u5B9E\u91CC\u6709\u65B0\u7684\u79CD\u5B50\uFF0C\u751F\u547D\u5C31\u8FD9\u6837\u4F20\u4E0B\u53BB\u3002"},snow:{name:"\u96EA",pinyin:"xu\u011B",desc:"\u96EA\u82B1\u843D\u5728\u6811\u679D\u4E0A\uFF0C\u5927\u6811\u5728\u51AC\u5929\u5B89\u9759\u5730\u4F11\u606F\u3002"},bird:{name:"\u5C0F\u9E1F",pinyin:"xi\u01CEo ni\u01CEo",desc:"\u590F\u5929\uFF0C\u5C0F\u9E1F\u98DE\u5230\u6811\u836B\u91CC\u6B47\u4E00\u6B47\uFF0C\u6709\u7684\u505C\u5728\u679D\u5934\u5531\u6B4C\u3002"},insect:{name:"\u6606\u866B",pinyin:"k\u016Bn ch\xF3ng",desc:"\u8774\u8776\u3001\u871C\u8702\u548C\u74E2\u866B\u4E5F\u559C\u6B22\u8FD9\u68F5\u5927\u6811\uFF0C\u56F4\u7740\u82B1\u6735\u98DE\u6765\u98DE\u53BB\u3002"}},J_=/(种子|泥土|水分|温暖|春雨|外壳|侧根|主根|根|嫩芽|种壳|子叶|真叶|阳光|养分|枝丫|树干|树冠|叶子|树荫|落叶|白雪|新芽|花朵|果实|小鸟|昆虫|蜜蜂|蝴蝶|瓢虫|轮回)/g;function K_(i){return i.replace(J_,"<em>$1</em>")}var td=new URLSearchParams(location.search).get("t0"),rm=(()=>{let i=parseFloat(td);return isNaN(i)?0:i})(),Vn=/(^|[?&])freeze(=|&|$)/.test(location.search)?rm:null,Gn=/(^|[?&])video(=|&|$)/.test(location.search),nd=/(^|[?&])class(=|&|$)/.test(location.search),Fl=/(^|[?&])stage(=|&|$)/.test(location.search),sm=!Gn&&Vn===null&&!nd&&!Fl&&td===null,am=0;Gn&&(window.__setVideoT=i=>{am=i},window.__videoReady=!0);Fl&&(document.body.classList.add("stage-only"),cd());var ke=mi(rm,0,zt),ps=null,lt=!Gn&&Vn===null&&!sm,ms=!1,mn=ke,xf=performance.now();function us(i){return i=Math.max(0,Math.round(i)),String(Math.floor(i/60)).padStart(2,"0")+":"+String(i%60).padStart(2,"0")}function ei(i){let e=0;for(let t=0;t<an.length;t++)i>=an[t].start&&(e=t);return e}function Mn(i){let e=ei(i);if(e===_i)return;_i=e,Ia();let t=an[e];y_.textContent="\u7B2C "+(e+1)+" \u7AE0 / \u5171 "+an.length+" \u7AE0",nl.textContent=t.title,M_.textContent=t.text,nl.style.animation="none",nl.offsetWidth,nl.style.animation="seasonIn .5s ease both",lf&&(lf.textContent="\u7B2C "+(e+1)+" \u7AE0 / \u5171 "+an.length+" \u7AE0"),cf&&(cf.textContent=t.title),uf&&(uf.innerHTML=K_(t.text)),df&&(df.textContent="\u7B2C "+(e+1)+" \u7AE0 \xB7 "+t.title),hm(e),yr(),fn&&lt&&kn&&Pa()}function kt(){Hi&&(ms||(Hi.value=String(ke)),Hi.style.setProperty("--progress",(ke/zt*100).toFixed(2)+"%"),b_.textContent=us(ke)+" / "+us(zt),Bu.textContent=lt?"\u23F8":"\u25B6",Bu.setAttribute("aria-label",lt?"\u6682\u505C":"\u64AD\u653E"),pl&&(pl.textContent=lt?"\u23F8":"\u25B6",pl.setAttribute("aria-label",lt?"\u6682\u505C":"\u64AD\u653E")),pf&&(pf.textContent=us(ke)+" / "+us(zt)))}function ur(i,e=!0){ke=mi(i,0,zt),e&&(lt=!1),mn=ke,Vi=!1,ys(),xr(),_r&&yi(),Ia(),Mn(ke),kt()}function id(){ke>=zt-.01&&(ke=0,mn=0,Vi=!1,Gi=!1,Mn(0)),_r&&(yi(),Ia()),lt=!lt,Vi=!1,ys(),lt&&fn&&kn&&Pa(),lt||xr(),kt()}for(let i of an){if(i.start<=0)continue;let e=document.createElement("span");e.style.left=i.start/zt*100+"%",e.title=i.title,i.start>=92&&(e.className="chapter-major"),T_.appendChild(e)}Hi.max=zt.toFixed(1);Hi.value=String(ke);Mn(ke);kt();(Vn!==null||Gn)&&(S_.style.display="none",w_.style.display="none",document.getElementById("tips").style.display="none",document.getElementById("replant").style.display="none");sm?vr=!0:Aa.classList.add("hidden");Fl&&(Aa.classList.add("hidden"),vr=!1);function $_(){for(let i of["__grass","__flowers","__groundLeaves"]){let e=ye[i];e&&(ye.remove(e),e.material&&e.material.dispose(),e.dispose&&e.dispose())}ye.__grass=null,ye.__flowers=null,ye.__groundLeaves=null}function rd(i){d_(pe),$_();let e=Ht(i^2654435769);ye.__grass=i_(i^1597463007),ye.add(ye.__grass),ye.__flowers=s_(i^668265263),ye.add(ye.__flowers),ye.__groundLeaves=a_(i^374761393),ye.add(ye.__groundLeaves),pe=u_(i);for(let t of xa)t.life=0;for(let t=0;t<gi;t++)xn.setMatrixAt(t,hs);xn.instanceMatrix.needsUpdate=!0}var Ma=Vn!==null||Gn||Fl||nd||td!==null?20240601:Math.floor(Math.random()*1e5);rd(Ma);var Q_=[[130,"\u590F","\u7B2C 1 \u5E74"],[150,"\u79CB","\u7B2C 1 \u5E74"],[170,"\u51AC","\u7B2C 1 \u5E74"],[190,"\u6625","\u7B2C 2 \u5E74"]],yf=new Ks,Tu=new ce;function yn(i,e=1800){rl&&(rl.textContent=i,rl.classList.add("show"),clearTimeout(yn._t),yn._t=setTimeout(()=>rl.classList.remove("show"),e))}function gs(i){i&&(i===Ra&&tx(),i===ed&&hm(ei(ke)),i.classList.add("show"))}function om(i){i&&i.classList.remove("show")}function lm(){document.querySelectorAll(".modal.show").forEach(i=>i.classList.remove("show"))}function cm(){return!!document.querySelector(".modal.show")}function ex(i){let e=(ma(i)%1+1)%1;return zn[Math.floor(e*4)%4].name}function tx(){if(!ku)return;let i=ei(ke);ku.innerHTML=an.map((e,t)=>{let n=ex((e.start+Math.min(e.end,zt))/2);return'<button class="chapter-item'+(t===i?" current":"")+'" data-index="'+t+'"><div class="chapter-thumb" data-season="'+n+'"></div><div class="chapter-num">\u7B2C '+(t+1)+' \u7AE0</div><div class="chapter-name">'+e.title+'</div><div class="chapter-time">'+us(e.start)+"\u2013"+us(Math.min(e.end,zt))+"</div></button>"}).join("")}function hm(i){if(!ff)return;let e=_f[mi(i,0,_f.length-1)];e&&(B_.textContent="\u7B2C "+(i+1)+" \u7AE0 \xB7 "+an[i].title,ff.innerHTML='<div class="teacher-block"><b>\u53EF\u4EE5\u95EE</b><p>'+e.q+'</p></div><div class="teacher-block"><b>\u53EF\u4EE5\u52A8</b><p>'+e.a+"</p></div>")}function sd(i,e=!0){i=mi(i,0,an.length-1);let t=Math.max(.01,an[i].start+.01);ur(t,e),e||(lt=!0,kt())}function um(){let i=ei(ke);if(i>=an.length-1){ur(zt,!0);return}sd(i+1,!0)}function dm(){let i=ei(ke),e=ke<=an[i].start+1.4;sd(e?Math.max(0,i-1):i,!0)}function xs(){dl&&(dl.classList.toggle("on",ki),dl.textContent=ki?"\u6BCF\u7AE0\u505C \u2713":"\u6BCF\u7AE0\u505C"),Hu&&Hu.classList.toggle("on",kn),Fu&&Fu.classList.toggle("on",fs),zu&&zu.classList.toggle("on",xi)}function pm(i){ki=!!i,xs()}function nx(){pm(!ki),ki||ys(),yn(ki?"\u6BCF\u7AE0\u7ED3\u675F\u4F1A\u81EA\u52A8\u6682\u505C":"\u5DF2\u5173\u95ED\u81EA\u52A8\u6682\u505C")}function ad(i){fs=!!i,document.body.classList.toggle("projector",fs),xs()}function fm(){ad(!fs),yn(fs?"\u6295\u5F71\u589E\u4EAE\u5DF2\u5F00\u542F":"\u6295\u5F71\u589E\u4EAE\u5DF2\u5173\u95ED")}function ju(){if(!Ca)return;fl=(speechSynthesis.getVoices?speechSynthesis.getVoices():[]).find(e=>/zh[-_]?CN|cmn|Chinese|Tingting|Xiaoxiao|Meijia|Huihui/i.test((e.lang||"")+" "+(e.name||"")))||null}Ca&&(ju(),speechSynthesis.addEventListener&&speechSynthesis.addEventListener("voiceschanged",ju));function xr(){if(Ca){try{speechSynthesis.cancel()}catch{}Wu=-1,window.dispatchEvent(new CustomEvent("tree:voice",{detail:{speaking:!1}}))}}function Pa(){if(!kn||!Ca||Vn!==null||Gn)return;let i=ei(ke);if(Wu===i&&speechSynthesis.speaking)return;try{speechSynthesis.cancel()}catch{}fl||ju();let e=new SpeechSynthesisUtterance(an[i].text);fl&&(e.voice=fl),e.lang="zh-CN",e.rate=.92,e.pitch=1.04,e.volume=1,e.onstart=()=>window.dispatchEvent(new CustomEvent("tree:voice",{detail:{speaking:!0}})),e.onend=()=>window.dispatchEvent(new CustomEvent("tree:voice",{detail:{speaking:!1}})),e.onerror=()=>window.dispatchEvent(new CustomEvent("tree:voice",{detail:{speaking:!1}})),Wu=i,window.dispatchEvent(new CustomEvent("tree:voice",{detail:{speaking:!0}}));try{speechSynthesis.speak(e)}catch{window.dispatchEvent(new CustomEvent("tree:voice",{detail:{speaking:!1}}))}}function ix(){kn=!kn,xs(),kn?fn&&lt&&Pa():xr(),yn(kn?"\u6545\u4E8B\u59D0\u59D0\u6717\u8BFB\u5DF2\u5F00\u542F":"\u6717\u8BFB\u5DF2\u5173\u95ED")}function rx(){xi=!0,yr(),yi(),gr.classList.add("show"),xs()}function od(){xi=!1,gr.classList.remove("show","holding"),clearTimeout(Il),xs(),yn("\u5C4F\u5E55\u5DF2\u89E3\u9501")}function mm(){xi?od():rx()}function ld(){document.body.classList.remove("idle"),clearTimeout(vf),fn&&(vf=setTimeout(()=>{!cm()&&!vr&&!xi&&document.body.classList.add("idle")},2600))}async function gm(){if(!(!fn||!("wakeLock"in navigator)))try{pa=await navigator.wakeLock.request("screen")}catch{pa=null}}function sx(){try{pa&&pa.release()}catch{}pa=null}function cd(){let i=Yu();Ft.aspect=i.w/i.h,Ft.updateProjectionMatrix(),Zt.setSize(i.w,i.h)}function vm(){if(document.fullscreenElement)return;let i=document.documentElement;if(!i.requestFullscreen){yn("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u5168\u5C4F\uFF0C\u6309 F11 \u4E5F\u53EF\u4EE5");return}let e=i.requestFullscreen();e&&e.catch&&e.catch(()=>yn("\u5168\u5C4F\u8BF7\u6C42\u88AB\u6D4F\u89C8\u5668\u62E6\u4F4F\u4E86\uFF0C\u6309 F11 \u4E5F\u53EF\u4EE5"))}function ax(){if(document.fullscreenElement){let i=document.exitFullscreen();i&&i.catch&&i.catch(()=>{})}else vm()}function zl(i={}){let e=i.reset!==!1;fn=!0,vr=!1,Aa.classList.add("hidden"),document.body.classList.add("classroom-mode"),document.body.classList.remove("idle"),cd(),lm(),yi(),Ia(),yr(),e&&(ke=0,mn=0,_i=-1,Gi=!1),lt=!1,pm(!0),ad(!1),xs(),Mn(ke),kt(),!Gn&&Vn===null&&i.autoplay!==!1&&(lt=!0,kt(),kn&&Pa()),i.fullscreen&&vm(),gm(),ld()}function _m(){if(lt=!1,xr(),yi(),Ia(),yr(),ys(),xi=!1,gr.classList.remove("show","holding"),sx(),fn=!1,document.body.classList.remove("classroom-mode","idle","projector"),ad(!1),cd(),document.fullscreenElement){let i=document.exitFullscreen();i&&i.catch&&i.catch(()=>{})}vr=!0,Aa.classList.remove("hidden"),ke=0,mn=0,_i=-1,Mn(0),kt()}function ox(i){let e=i;for(;e;){if(e.userData&&e.userData.part)return e.userData.part;e=e.parent}return null}function hd(i,e){if(!pe||!ud(i))return!1;let t=(ma(e)%1+1)%1;return i==="seed"?e<80:i==="cotyledon"?e>=60&&e<=100:i==="root"?e>=30:i==="trunk"?e>=56:i==="branch"?e>=90:i==="leaf"?e>=74&&t<.7:i==="flower"?e>=180&&e<=206:i==="fruit"?e>=220&&e<=242:i==="snow"?e>=160&&e<=180||e>=240&&e<=260:i==="bird"||i==="insect"?e>=198&&e<=220:!0}function ud(i){if(!pe)return!1;let e=qu(ke);if(i==="seed")return!!(pe.seedMesh&&pe.seedMesh.visible&&pe.seedMesh.scale.x>.008);if(i==="root")return pe.roots.some(t=>t.mesh.visible);if(i==="trunk")return!!(pe.branches[0]&&pe.branches[0].mesh.visible&&e>.11);if(i==="branch")return pe.branches.some((t,n)=>n>0&&t.mesh.visible)&&e>.24;if(i==="leaf"){let t=(ma(ke)%1+1)%1;return e>.13&&(t<.05||t<.7)}if(i==="cotyledon")return pe.cotyledons.some(t=>t.visible&&t.scale.x>.04);if(i==="flower")return!!(pe.blossoms&&pe.blossoms.visible&&pe.blossomMat.opacity>.05);if(i==="fruit"){let t=(ma(ke)%1+1)%1;return(wf(ke)>=2?he(.5,.58,t):0)>.02&&t<.8}return i==="snow"?!!(pe.snowCaps&&pe.snowCaps.visible&&pe.snowCapMat.opacity>.05):i==="bird"?as.visible&&El.length>=2:i==="insect"?os.visible&&cs.length>=2:!1}function lx(i){if(!pe||!pe.group)return[];let e=[],t=r=>{if(!r)return;let s=r.clone();pe.group.localToWorld(s),e.push(s)},n=r=>{r&&e.push(r.clone())};if(i==="seed")pe.seedMesh&&n(pe.seedMesh.getWorldPosition(new M));else if(i==="root"){let r=pe.rootSub||pe.group;for(let s of pe.roots)if(s.mesh.visible)for(let a=0;a<s.pts.length;a+=3){let o=s.pts[a].clone();r.localToWorld(o),e.push(o)}}else if(i==="trunk"){let r=pe.branches[0];if(r&&r.mesh.visible)for(let s=0;s<r.pts.length;s+=2)t(r.pts[s])}else if(i==="branch")for(let r=0;r<pe.branches.length;r++){let s=pe.branches[r];if(!(r===0||!s.mesh.visible))for(let a=0;a<s.pts.length;a+=2)t(s.pts[a])}else if(i==="leaf"){let r=qu(ke);for(let s=0;s<pe.leafData.length;s+=25){let a=pe.leafData[s];a.grow!=null&&a.grow>r+.02||t(a.pos)}}else if(i==="cotyledon")for(let r of pe.cotyledons)r.visible&&r.scale.x>.04&&n(r.getWorldPosition(new M));else if(i==="flower"){if(pe.blossomData)for(let r=0;r<pe.blossomData.length;r+=8)t(pe.blossomData[r].pos)}else if(i==="fruit"){if(pe.fruitData)for(let r=0;r<pe.fruitData.length;r+=2)t(pe.fruitData[r].pos)}else if(i==="snow"){if(pe.snowCapData)for(let r of pe.snowCapData)t(r.pos)}else if(i==="bird")for(let r of El)n(r);else if(i==="insect")for(let r of cs)n(r);return e}function dd(i){if(!pe||!pe.group)return[];let e=Zt.domElement.getBoundingClientRect(),t=[],n=new M;for(let r of lx(i)){if(n.copy(r).project(Ft),n.z<-1||n.z>1)continue;let s=e.left+(n.x*.5+.5)*e.width,a=e.top+(-n.y*.5+.5)*e.height;s<e.left||s>e.right||a<e.top||a>e.bottom||t.push({x:s,y:a})}return t}function xm(i){return(Z_[ei(i)]||[]).filter(t=>!hd(t,i)||!ud(t)?!1:dd(t).length>=(t==="seed"?1:2))}function cx(i,e){if(!Qn)return!1;let t=Zt.domElement.getBoundingClientRect(),n=Math.max(40,Math.min(80,t.width*.055)),r=n*n;for(let s of dd(Qn)){let a=s.x-i,o=s.y-e;if(a*a+o*o<=r)return!0}return!1}function ym(i,e){if(!pe||!pe.group)return null;let t=Zt.domElement.getBoundingClientRect();Tu.x=(i-t.left)/Math.max(1,t.width)*2-1,Tu.y=-((e-t.top)/Math.max(1,t.height))*2+1,yf.setFromCamera(Tu,Ft);let n=yf.intersectObject(pe.group,!0);for(let r of n){let s=ox(r.object);if(s&&hd(s,ke)&&ud(s))return s}return null}function Mf(i,e,t){let n=fa[i];!n||!Pl||(z_.textContent=n.name.slice(-1),H_.textContent=n.name,k_.textContent=n.pinyin,V_.textContent=n.desc,Pl.classList.add("show"))}function yr(){Pl&&Pl.classList.remove("show")}function hx(i,e){return i===e||i==="leaf"&&e==="cotyledon"}function Ia(){fr=[],Bi=0,Gu="",ya=1}function ux(){let i=xm(ke);if(!i.length)return!1;let e=ei(ke),t=["seed","root","trunk","branch","leaf","cotyledon","flower","fruit","snow","bird","insect"],n=e+"|"+i.join(",");if(n!==Gu){let r=t.filter(a=>i.includes(a)),s=r.length?(e*2+1)%r.length:0;fr=r.slice(s).concat(r.slice(0,s)),Bi=0,ya=1,Gu=n}return fr.length>0}function Mm(){if(!ux()){yn("\u8FD9\u4E00\u7AE0\u6682\u65F6\u6CA1\u6709\u53EF\u627E\u7684\u90E8\u4F4D\uFF0C\u6362\u4E2A\u7AE0\u8282\u8BD5\u8BD5"),yi();return}Bi>=fr.length&&(Bi=0,ya++);let i=Bi+1,e=fr.length;Qn=fr[Bi],Bi++,_r=!0,W_.innerHTML="\u627E\u4E00\u627E\uFF1A<b>"+fa[Qn].name+"</b>\u5728\u54EA\u91CC\uFF1F",gf&&(gf.textContent="\u7B2C "+ya+" \u8F6E \xB7 "+i+"/"+e),Vu&&(Vu.style.display=e>1?"":"none"),pr.classList.add("show"),pr.classList.remove("shake"),ys(),yr(),lt&&(lt=!1,xr(),kt())}function Sm(){if(!fn){yn("\u8BF7\u5148\u8FDB\u5165\u8BFE\u5802\u6A21\u5F0F");return}Mm()}function yi(){_r=!1,Qn=null,pr&&pr.classList.remove("show","shake")}function Em(i,e){if(vr||xi)return;let t=ym(i,e);if(_r){if(cx(i,e)||t&&hx(Qn,t)){let r=Qn;Mf(r,i,e),yi(),yn("\u627E\u5230\u5566\uFF01\u8FD9\u662F"+fa[r].name)}else t?(pr.classList.remove("shake"),pr.offsetWidth,pr.classList.add("shake"),yn("\u8FD9\u91CC\u4E0D\u662F"+fa[Qn].name+"\uFF0C\u518D\u627E\u627E\u770B")):yn("\u518D\u4ED4\u7EC6\u770B\u770B\uFF0C\u627E\u627E\u753B\u9762\u91CC\u7684"+fa[Qn].name);return}t?(fn&&lt&&(lt=!1,xr(),kt()),Mf(t,i,e)):yr()}function dx(){let i=Zt.domElement,e=document.createElement("canvas"),t=Math.min(720,i.width),n=Math.max(1,Math.round(t*i.height/Math.max(1,i.width)));return e.width=t,e.height=n,e.getContext("2d").drawImage(i,0,0,t,n),e.toDataURL("image/jpeg",.86)}async function Hl(){if(bu)return;bu=!0,Xu=!0;let i={t:ke,prevT:mn,playing:lt,theta:Xe.theta,radius:Xe.radius,phi:Xe.phi},e=[];try{for(let[t,n,r]of Q_)ke=t,mn=t,ps=t,lt=!1,Xe.theta=1.46,Xe.radius=12.5,Xe.phi=1.46,kt(),Mn(t),await new Promise(s=>requestAnimationFrame(()=>requestAnimationFrame(s))),Zt.render(ye,Ft),e.push({label:n,year:r,url:dx()});mf&&(mf.innerHTML=e.map(t=>'<figure class="quartet-item"><img src="'+t.url+'" alt="'+t.label+'"><figcaption><b>'+t.label+"</b><span>"+t.year+"</span></figcaption></figure>").join("")),gs(F_)}finally{ps=null,Xu=!1,ke=i.t,mn=i.prevT,lt=i.playing,Xe.theta=i.theta,Xe.radius=i.radius,Xe.phi=i.phi,kt(),Mn(ke),bu=!1}}function px(i){da&&(da.innerHTML=i,da.classList.add("show"))}function ys(){da&&da.classList.remove("show")}Bu.addEventListener("click",id);E_.addEventListener("click",()=>{ke=0,mn=0,lt=!0,Vi=!1,Gi=!1,_i=-1,Mn(0),kt()});Hi.addEventListener("pointerdown",()=>{ms=!0});Hi.addEventListener("input",i=>{ur(parseFloat(i.target.value),!0)});Hi.addEventListener("change",()=>{ms=!1,kt()});window.addEventListener("pointerup",()=>{ms&&(ms=!1,kt())});document.getElementById("replant").addEventListener("click",()=>{Ma=Math.floor(Math.random()*1e5),rd(Ma),ke=0,mn=0,lt=!0,Vi=!1,Gi=!1,_i=-1,Mn(0),kt()});A_.addEventListener("click",()=>zl({reset:!0,fullscreen:!0,autoplay:!0}));R_.addEventListener("click",()=>{vr=!1,Aa.classList.add("hidden"),ys(),lt=!0,kt()});pl.addEventListener("click",id);D_.addEventListener("click",dm);N_.addEventListener("click",um);O_.addEventListener("click",()=>{ke=0,mn=0,lt=!0,Vi=!1,Gi=!1,_i=-1,Mn(0),kt(),kn&&Pa()});C_.addEventListener("click",()=>gs(Ra));P_.addEventListener("click",()=>gs(ed));I_.addEventListener("click",Sm);L_.addEventListener("click",Hl);dl.addEventListener("click",nx);Fu.addEventListener("click",fm);zu.addEventListener("click",mm);U_.addEventListener("click",_m);Hu.addEventListener("click",ix);j_.addEventListener("click",()=>gs(Ra));q_.addEventListener("click",Hl);Y_.addEventListener("click",()=>zl({reset:!1,fullscreen:!0,autoplay:!0}));G_.addEventListener("click",yr);Vu.addEventListener("click",Mm);X_.addEventListener("click",yi);ku.addEventListener("click",i=>{let e=i.target.closest(".chapter-item");e&&(sd(parseInt(e.dataset.index,10),!0),om(Ra))});document.querySelectorAll(".modal").forEach(i=>{i.addEventListener("pointerdown",e=>{e.target===i&&i.classList.remove("show")})});document.querySelectorAll("[data-close]").forEach(i=>{i.addEventListener("click",()=>om(document.getElementById(i.dataset.close)))});gr.addEventListener("pointerdown",i=>{i.preventDefault(),gr.classList.add("holding"),clearTimeout(Il),Il=setTimeout(od,2e3)});["pointerup","pointercancel","pointerleave"].forEach(i=>{gr.addEventListener(i,()=>{gr.classList.remove("holding"),clearTimeout(Il)})});window.addEventListener("pointermove",ld,{passive:!0});window.addEventListener("pointerdown",ld,{passive:!0});document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&fn&&gm()});window.addEventListener("keydown",i=>{if(xi){i.key==="Escape"&&(i.preventDefault(),od());return}i.code==="Space"?(i.preventDefault(),id()):i.key==="ArrowLeft"?(i.preventDefault(),ur(ke-5,!0)):i.key==="ArrowRight"?(i.preventDefault(),ur(ke+5,!0)):i.key==="Home"?(i.preventDefault(),ur(0,!0)):i.key==="End"?(i.preventDefault(),ur(zt,!0)):i.key==="PageUp"?(i.preventDefault(),dm()):i.key==="PageDown"?(i.preventDefault(),um()):i.key==="f"||i.key==="F"?(i.preventDefault(),ax()):i.key==="c"||i.key==="C"?(i.preventDefault(),gs(Ra)):i.key==="t"||i.key==="T"?(i.preventDefault(),gs(ed)):i.key==="q"||i.key==="Q"?(i.preventDefault(),Hl()):i.key==="p"||i.key==="P"?(i.preventDefault(),fm()):i.key==="l"||i.key==="L"?(i.preventDefault(),mm()):i.key==="Escape"?cm()&&(i.preventDefault(),lm()):(i.key==="r"||i.key==="R")&&(Ma=Math.floor(Math.random()*1e5),rd(Ma),ke=0,mn=0,lt=!0,Vi=!1,Gi=!1,_i=-1,Mn(0),kt())});var Ut=new Ne,rn=new Rt,fx=new Rt,$t=new M,_t=new M,wu=new Gt,Ni=new xe,Sy=new xe,oa=new M,Sf=new M,mx=new M,Ey=new M,by=new ce(.5,.8),Ef="",Ty=new M;function bf(i,e,t=1){if(Math.abs(e-i.lastK)<.003&&Math.abs(t-(i.lastFat===void 0?-1:i.lastFat))<.004)return;i.lastK=e,i.lastFat=t;let n=i.mesh.geometry.attributes.position,r=n.array,s=i.basePos,a=i.rings,o=i.radial,c=Math.min(a-1,Math.max(0,e*(a-1))),l=Math.min(a-2,Math.floor(c));if(oa.copy(i.pts[l]).lerp(i.pts[l+1],c-l),l+1<a){let d=Math.min(.1,(i.radii?i.radii[l]:.05)*1.4);oa.addScaledVector(i.pts[l+1].clone().sub(i.pts[l]).normalize(),d)}let h=(.45+.55*Math.min(1,e*1.7))*t;for(let d=0;d<a;d++){let u=i.pts[d],p=d*o*3;if(d>l)for(let f=0;f<o;f++){let _=p+f*3;r[_]=oa.x,r[_+1]=oa.y,r[_+2]=oa.z}else for(let f=0;f<o;f++){let _=p+f*3;r[_]=u.x+(s[_]-u.x)*h,r[_+1]=u.y+(s[_+1]-u.y)*h,r[_+2]=u.z+(s[_+2]-u.z)*h}}n.needsUpdate=!0}function bm(){requestAnimationFrame(bm);let i=performance.now(),e=Math.min(.1,Math.max(.001,(i-xf)/1e3));if(xf=i,!Gn&&Vn===null&&lt){let B=Math.min(zt,ke+e),O=ei(ke),te=ei(B);if(fn&&ki&&B<zt-.001&&te!==O){ke=Math.min(an[O].end,zt),lt=!1,Vi=!0;let Be=an[Math.min(an.length-1,O+1)].title;px("\u7B2C "+(O+1)+" \u7AE0\u7ED3\u675F \xB7 \u4E0B\u4E00\u7AE0\uFF1A<b>"+Be+"</b>"),xr()}else ke=B,ke>=zt-.001&&(ke=zt,lt=!1,fn&&!Gi&&(Gi=!0,setTimeout(()=>{fn&&Hl()},900)))}let t=Gn?am:ps!==null?ps:Vn!==null?Vn:ke,n=Gn?1/60:lt&&Vn===null&&ps===null?Math.min(.05,Math.max(1e-4,t-mn)):0;mn=t,Mn(t),kt();let s=(ma(t)%1+1)%1,a=wf(t),o=qu(t),c=o+.3*he(120,235,t),l=Sv(s,Mv),h=m_(t);di.topColor.value.copy(l.skyTop),di.horizonColor.value.copy(l.horizon),di.sunColor.value.copy(l.sun),di.cloudCover.value=Math.min(1,l.cloud+h*.55),di.cloudWarm.value=l.cloudWarm,di.time.value=t,ye.fog.color.copy(l.fog),ol.color.copy(l.horizon),ol.groundColor.copy(l.ground).multiplyScalar(.6),ol.intensity=l.hemi,sn.color.copy(l.sun),sn.intensity=l.sunI*(1-.38*h);let d=.16+.1*(.5+.5*Math.cos((s-.25)*Math.PI*2)),u=Xe.theta-Math.PI-.28+Math.sin(t*.03)*.04,p=mx.set(Math.cos(u)*Math.cos(d),Math.sin(d),Math.sin(u)*Math.cos(d)).normalize();if(sn.position.copy(p).multiplyScalar(34),_l.position.copy(p).multiplyScalar(150),ha.position.copy(p).multiplyScalar(148),_l.material.color.copy(l.sun),ha.material.color.copy(l.sun),ha.material.opacity=.3*(.55+.45*(1-he(.6,.9,s)))*(1-.6*h)*(.75+.9*l.bloom),Zt.toneMappingExposure=1.12+(l.exposure-.94)*.32,di.sunDir.value.copy(p),Pf.color.copy(l.ground).multiplyScalar(1-.16*h),la.length===3){let B=la[0].uniforms;B.uBottomColor.value.copy(l.fog).lerp(l.skyTop,.05),B.uTopColor.value.copy(l.fog).lerp(l.skyTop,.38).multiplyScalar(.9),B.uSnowColor.value.setHex(15857919);let O=la[1].uniforms;O.uBottomColor.value.copy(l.fog).lerp(l.ground,.12),O.uTopColor.value.copy(l.ground).lerp(l.fog,.52).multiplyScalar(.92);let te=la[2].uniforms;te.uBottomColor.value.copy(l.ground).lerp(l.fog,.36),te.uTopColor.value.copy(l.ground).lerp(l.fog,.24).multiplyScalar(.88)}let f=he(.44,.56,s)*(1-he(.76,.84,s));ye.__grass.material.color.setRGB(1+.95*f,1-.08*f,1-.85*f),Kf.value=t;let _=he(.01,.07,s)*(1-he(.4,.48,s));ye.__flowers.visible=_>.02,ye.__flowers.material.opacity=_;let m=he(.58,.7,s),g=he(.66,.92,s),v=he(.58,.66,s)*(1-he(.92,.99,s));if(ye.__groundLeaves.visible=v>.002,ye.__groundLeaves.visible){ye.__groundLeaves.material.opacity=v*(1-.62*g);let B=ye.__groundLeaves.userData.leafInfo;for(let O=0;O<B.length;O++){let te=B[O],Be=.001+.999*m,Je=te.size*Be*(1-.85*g);_t.set(te.pos.x,te.pos.y-g*(.015+te.size*.35),te.pos.z),$t.set(Je,Je,Je),Ut.compose(_t,te.quat,$t),ye.__groundLeaves.setMatrixAt(O,Ut),Ni.copy(te.color).lerp(al.setHex(2366226),Math.min(1,g*1.25)),ye.__groundLeaves.setColorAt(O,Ni)}ye.__groundLeaves.instanceMatrix.needsUpdate=!0,ye.__groundLeaves.instanceColor&&(ye.__groundLeaves.instanceColor.needsUpdate=!0)}let x=.45+.35*Math.cos((s-.03)*Math.PI*2);for(let B=0;B<Lu.length;B++)Lu[B].opacity=[.16,.1,.06][B]*x*(.88+.12*Math.sin(t*.05+B));if($u.position.x=Math.sin(t*.018)*4,Uu.opacity=.18*(1-he(.72,.82,s))*(.7+.3*Math.sin(t*.7))*he(.35,.65,o),Uu.opacity>.01){let B=bl.attributes.position.array;for(let O=0;O<Nl;O++){let te=O*3;B[te+1]+=n*(.05+O%7*.008),B[te]+=Math.sin(t*.5+Yf[O])*n*.04,B[te+1]>7.2&&(B[te+1]=.2,B[te]=(Math.random()-.5)*22,B[te+2]=-10+Math.random()*12)}bl.attributes.position.needsUpdate=!0}let y=.18+.82*he(.2,.92,o),R=Eu(t),w=R?1-he(1,4.2,R.viewH):0;Sa.intensity=2.35+.55*w,Ea.intensity=1.25+.85*w,ll&&(ll.scale.setScalar(.3+1.85*he(.02,.95,o)),ll.material.opacity=.4+.48*y);let P=0;for(let B of pe.branches){let O=he(B.g0,B.g1,o);if(B.mesh.visible=O>.001,!B.mesh.visible)continue;bf(B,O,y);let te=B.start.y+B.len*O;te>P&&(P=te)}let D=.22+.78*he(.03,1.05,c),F=he(.06,.85,c);pe.rootMats[0].color.setHex(11901554).lerp(Mu.setHex(7295288),F),pe.rootMats[1].color.setHex(13021322).lerp(Mu.setHex(9268301),F);for(let B of pe.roots){let O=he(B.g0,B.g1,c);B.mesh.visible=O>.001,B.mesh.visible&&bf(B,O,D)}if(pe.hairThresholds&&pe.rootHairs){let B=0,O=pe.hairThresholds.length;for(;B<O;){let te=B+O>>1;pe.hairThresholds[te]<=c?B=te+1:O=te}pe.rootHairs.geometry.setDrawRange(0,B*2),pe.rootHairs.visible=B>0}{let B=he(.04,.34,o),O=Math.max(.03,y*1.06);pe.flare.scale.set(O,Math.max(5e-4,B),O),pe.flare.visible=B>.02}let V=he(0,3,t),W=1+.14*he(16,32,t),k=he(18,30,t),Y=1-he(66,80,t),X=he(56,68,t)*(1-he(70,80,t));pe.seedMesh.visible=t<80&&Y>.01,pe.seedMesh.position.y=-.035+.1*(1-V)+.24*X,pe.seedMesh.scale.set(.35*W*Y,.28*W*Y,.46*W*Y),pe.seedTop.position.set(.018*k,.055*k,.006*k),pe.seedTop.rotation.z=-.62*k,pe.seedTop.rotation.x=.22*k,pe.seedBottom.position.y=-.008*k,pe.seedCrack.visible=k>.01&&Y>.02,pe.seedCrack.material.transparent=!0,pe.seedCrack.material.opacity=Math.min(1,k*2.2)*Y*.92,pe.seedCrack.scale.setScalar(1+.12*k);let K=pe.branches[0],ee=K?he(K.g0,K.g1,o):0,oe=K?K.start.y+K.len*ee:.2,se=he(.09,.145,o)*(1-he(.28,.42,o));for(let B=0;B<pe.cotyledons.length;B++){let O=pe.cotyledons[B];O.scale.setScalar(Math.max(.001,.12*se)),O.position.y=.12+.25*he(.06,.16,o),O.rotation.z=(B===0?1:-1)*(.95-.45*se),O.visible=se>.01}pe.cotyledonMat.color.setHex(10474334);let Se=s<.05?he(0,.05,s):1,Re=he(.1,.34,s),ie=0,ae=pe.leaves;for(let B=0;B<pe.leafData.length;B++){let O=pe.leafData[B],te=O.branch?he(O.branch.g0,O.branch.g1,o):1,Be=O.branch?he(Math.max(.02,O.siteT-.06),O.siteT+.06,te):1,Je=he(O.grow,Math.min(1,O.grow+.1),o)*Be,pt=he(.58+O.stag*.08,.72+O.stag*.05,s),Ot=O.size*Je*Se*(1-pt);if(Ot<.002){Ut.makeScale(1e-4,1e-4,1e-4),ae.setMatrixAt(B,Ut);continue}let It=Math.sin(t*1.6+O.phase)*.06*Je;O.branch?(Tf(O.branch.pts,Math.min(O.siteT,te),Sf),_t.copy(Sf).add(O.offset)):_t.copy(O.pos),_t.x+=It,_t.z+=Math.cos(t*1.3+O.phase)*.05*Je,rn.copy(O.quat),wu.set(It*.8,It*.5,It*.6),rn.multiply(fx.setFromEuler(wu)),$t.setScalar(Ot),Ut.compose(_t,rn,$t),ae.setMatrixAt(B,Ut);let Mr=he(.46+O.stag*.1,.62+O.stag*.1,s);Ni.setHex(5212717).lerp(al.setHex(2841630),Re),Ni.lerp(O.autumn,Mr),ie>.01&&Ni.lerp(Mu.setHex(16767462),ie*.75),Ni.multiplyScalar(O.tone),ae.setColorAt(B,Ni)}ae.instanceMatrix.needsUpdate=!0,ae.instanceColor&&(ae.instanceColor.needsUpdate=!0);let Ee=a>=2?he(.02,.07,s)*(1-he(.22,.3,s)):0;pe.blossoms.visible=Ee>.02,pe.blossomMat.opacity=Ee*.95;let Te=he(.75,.85,s)*(1-he(.92,.99,s));pe.snowCaps.visible=Te>.02,pe.snowCapMat.opacity=Te;let fe=a>=2?he(.5,.58,s):0,T=a>=2?he(.54,.62,s):0,b=he(.68,.76,s),L=fe*(1-he(.68,.76,s));{let B=pe.fruitData,O=pe.fruits,te=pe.stems,Be=rn.set(0,0,0,1);for(let Je=0;Je<B.length;Je++){let pt=B[Je],Ot=pt.size*fe*(1-he(.74,.8,s));if(Ot<.002){O.setMatrixAt(Je,hs),te.setMatrixAt(Je,hs);continue}let It=Math.sin(t*1.5+pt.phase)*.02*fe;_t.copy(pt.pos),_t.x+=It,_t.y=Math.max(.14,pt.pos.y-b*(1.2+pt.stag*.9)),Ut.compose(_t,pt.quat,$t.setScalar(Ot)),O.setMatrixAt(Je,Ut),O.setColorAt(Je,Ni.setHex(8366138).lerp(pt.ripe,T)),_t.y+=Ot*.92,Ut.compose(_t,Be,$t.set(1,1,1)),b<.35?te.setMatrixAt(Je,Ut):te.setMatrixAt(Je,hs)}O.instanceMatrix.needsUpdate=!0,O.instanceColor&&(O.instanceColor.needsUpdate=!0),te.instanceMatrix.needsUpdate=!0}let U=he(.18,.34,o),A=he(.52,.58,s)*(1-he(.7,.74,s)),I=o>.5&&A>.01?(8+30*he(.52,.68,s))*A:0,S=s>.18&&s<.34&&a>=2?10*U:0,C=I+S,H=C*t;if(C>0&&n>0&&Math.floor(H)>Math.floor(H-C*n)){let B=Math.random()>I/Math.max(.001,C),O=pe.leafData[Math.floor(Math.random()*pe.leafData.length)],te=B?al.setHex(16763356):O.autumn;g_(te);let Be=xa[(ca+gi-1)%gi];Be.pos.copy(O.pos),Be.size=B?.12:.2}for(let B=0;B<gi;B++){let O=xa[B];if(!(O.life<=0)){if(O.pos.addScaledVector(O.vel,n),O.pos.x+=Math.sin(t*2+B)*.35*n,O.pos.z+=Math.cos(t*1.7+B)*.3*n,O.rot.addScaledVector(O.spin,n),O.pos.y<=.03){O.life=0,xn.setMatrixAt(B,hs);continue}rn.setFromEuler(wu.set(O.rot.x,O.rot.y,O.rot.z)),Ut.compose(O.pos,rn,$t.setScalar(O.size)),xn.setMatrixAt(B,Ut)}}xn.instanceMatrix.needsUpdate=!0,im.opacity=1;let J=he(.98,1.16,c);Uf.opacity=.22*J,Nf.opacity=.28*J,xl&&(xl.opacity=.3*J),Ru.uTime.value=t,Ru.uOpacity.value=.18*J,Ff.opacity=.5*J;{let B=yl.attributes.position.array;for(let O=0;O<Ll;O++){let te=O*4;B[O*3]=pi[te]+Math.sin(t*.7+pi[te+3])*.12,B[O*3+1]=vs-.15-(pi[te+1]+t*.28+pi[te+3]*.03)%1*2,B[O*3+2]=pi[te+2]}yl.attributes.position.needsUpdate=!0}kf.opacity=(.42+.3*Math.sin(t*2.1))*J;let z=he(.75,.85,s)*(1-he(.92,.99,s));em.opacity=z*.95,Al.visible=z>.01;let Q=he(.72,.8,s),$=he(.9,1,s),re=Math.max(1e-4,Math.max(1-Q,$));if(ye.__grass.material.opacity=re,ye.__grass.scale.set(1,1,1),nm.opacity=h*.82,Cl.visible=h>.01,Cl.visible){let B=Rl.attributes.position.array;for(let O=0;O<Ol;O++){let te=O*3;B[te+1]-=tm[O]*n,B[te]+=1.2*n,B[te+1]<0&&(B[te+1]=8+Math.random()*3,B[te]=(Math.random()-.5)*24,B[te+2]=-9+Math.random()*9)}Rl.attributes.position.needsUpdate=!0}if(Al.visible){let B=wl.attributes.position.array;for(let O=0;O<wa;O++){let te=O*3;B[te+1]-=Qf[O]*n*.9,B[te]+=Math.sin(t*.9+Du[O])*n*.5,B[te+2]+=Math.cos(t*.7+Du[O])*n*.4,B[te+1]<0&&(B[te+1]=24+Math.random()*4,B[te]=(Math.random()-.5)*56,B[te+2]=-24+Math.random()*28)}wl.attributes.position.needsUpdate=!0}let _e=jv(t),me=1-he(.12,.42,h),Ie=1-.78*he(.76,.84,s),Oe=_e.env*me*Ie;if(ta.visible=Oe>.01,ta.material.opacity=Math.min(1,Oe*1.25),ta.visible){let B=Ft.quaternion;for(let O=0;O<14;O++){let te=O<9,Be=te?O:O-9,Je=Be===0?0:Math.ceil(Be/2),pt=Be===0?0:Be%2?1:-1,Ot=ls[O]*.35,It=ls[(O+11)%40]*.3,Mr=-46+92*_e.u+pt*(.7+Je*.55)+Ot,La=9.5+5*Math.sin(Math.PI*_e.u)-Je*.38+It+.9*Math.sin(t*.35+Tn[O]),E=-62+10*Math.sin(Math.PI*_e.u)-Je*.6,G=te?1.3:.7,Z=.55+.45*Math.sin(t*7+Tn[O]);_t.set(Mr,La,E),rn.copy(B),$t.set(G,G*Z,G),Ut.compose(_t,rn,$t),ta.setMatrixAt(O,Ut)}ta.instanceMatrix.needsUpdate=!0}let Ve=Math.min(1,he(196,199,t)*(1-he(218,222,t))*1+he(120,123,t)*(1-he(136,140,t))*.55),Fe=he(196,199,t)*(1-he(218,222,t)),Ce=Math.min(1,he(181,184,t)*(1-he(202,206,t))+Fe*.7);if(El=[],cs=[],as.visible=Ve>.01,as.material.opacity=Ve,as.visible){for(let B=0;B<5;B++){let O=B>=3,te=O?2.6*Math.sin(t*.55+Tn[B]):-2.4+B*1.9+ls[B]*.25,Be=O?4.6+.8*Math.sin(t*.9+Tn[B]):3.5+B%2*1.15+Math.sin(t*1.6+Tn[B])*.025,Je=O?.85+.4*Math.cos(t*.5+Tn[B]):.55+ls[(B+7)%40]*.25;_t.set(te,Be,Je),rn.copy(Ft.quaternion);let pt=.78+.06*Math.sin(t*2+Tn[B]);$t.set(pt,pt*(.92+.08*Math.sin(t*6+Tn[B])),pt),Ut.compose(_t,rn,$t),as.setMatrixAt(B,Ut),El.push(_t.clone())}as.instanceMatrix.needsUpdate=!0}if(os.visible=Fe>.01,os.material.opacity=Fe,os.visible){for(let B=0;B<7;B++){let O=Tn[B];_t.set(2.7*Math.sin(t*.85+O),4+1.25*Math.sin(t*1.55+O),.7+.7*Math.cos(t*.7+O)),rn.copy(Ft.quaternion);let te=.35+.65*Math.abs(Math.sin(t*9+O)),Be=.68+.08*ls[(B+3)%40];$t.set(Be*te,Be,Be),Ut.compose(_t,rn,$t),os.setMatrixAt(B,Ut),cs.push(_t.clone())}os.instanceMatrix.needsUpdate=!0}if(na.visible=Ce>.01,na.material.opacity=Ce,na.visible){for(let B=0;B<5;B++){let O=Tn[(B+9)%40];_t.set(2*Math.sin(t*1.15+O),4.3+.7*Math.sin(t*2.3+O),.6+.5*Math.cos(t*1.7+O)),rn.copy(Ft.quaternion);let te=.52;$t.set(te,te*(.85+.15*Math.sin(t*14+O)),te),Ut.compose(_t,rn,$t),na.setMatrixAt(B,Ut),Fe>.1&&cs.push(_t.clone())}na.instanceMatrix.needsUpdate=!0}if(ia.visible=Fe>.01,ia.material.opacity=Fe,ia.visible){for(let B=0;B<5;B++){_t.set(-1.9+B*.95+.12*Math.sin(t*.4+Tn[B]),2.7+B%3*.55,.42),rn.copy(Ft.quaternion);let O=.36;$t.set(O,O,O),Ut.compose(_t,rn,$t),ia.setMatrixAt(B,Ut),cs.push(_t.clone())}ia.instanceMatrix.needsUpdate=!0}let nt=s<.05?he(0,.05,s):1-he(.56,.72,s),ht=he(.16,.32,s)*(1-he(.62,.78,s));Cu.opacity=.88*he(.3,.9,o)*nt*ht*(1-.7*h),Ta.visible=Cu.opacity>.01;for(let B=0;B<Pu.length;B++)Pu[B].opacity=(.05+.09*l.cloud)*(.6+.4*Math.sin(t*.05+B)),Xf[B].position.x=(t*(.55+B*.18)+B*17)%70-35;let ft=he(.1,.18,s)*(1-he(.34,.42,s));if(Iu.opacity=.55*ft*he(.3,.9,o)*(1-h),va.visible=Iu.opacity>.01,va.visible){let B=Ml.attributes.position.array;for(let O=0;O<Ul;O++){let te=O*4;B[O*3]=fi[te]+Math.sin(t*.45+fi[te+3])*.55,B[O*3+1]=.3+(fi[te+1]*7+t*.22)%7,B[O*3+2]=fi[te+2]+Math.cos(t*.3+fi[te+3])*.4}Ml.attributes.position.needsUpdate=!0}let we=a>=2?he(.68,.72,s)*(1-he(.78,.84,s)):0;if(jf.opacity=.85*we,_a.visible=we>.01,_a.visible){let B=Sl.attributes.position.array;for(let O=0;O<Dl;O++){let te=O*4,Be=(Fi[te+1]+t*.32)%1;B[O*3]=Fi[te]+Math.sin(t*.9+Fi[te+3])*.12,B[O*3+1]=.06+(1-Be)*2.6,B[O*3+2]=Fi[te+2]}Sl.attributes.position.needsUpdate=!0}let je=he(250,259,t);zi.visible=je>.01,zi.scale.setScalar(.45+1.05*je);let j=he(0,1,o);ds.rotation.z=Math.sin(t*.62)*(.012+.018*h)*j,ds.rotation.x=Math.cos(t*.48)*(.01+.012*h)*j,pe.rootSub&&pe.rootSub.quaternion.copy(ds.quaternion).invert(),Gn?Xe.theta=1.43+Math.sin(t*.05)*.085:lt&&i-Bl>6e3&&(Xe.theta+=Xe.dir*.035*n,Xe.theta>Ou&&(Xe.theta=Ou,Xe.dir=-1),Xe.theta<Nu&&(Xe.theta=Nu,Xe.dir=1));let ue=Math.max(.01,Ft.aspect),be=ue<1.45?Math.min(2.8,Math.pow(1.45/ue,.82)):1,Me=Eu(t),le=Math.max(.9,P+.52),Ue=Xu?0:he(205,255,t)*he(.9,1.45,ue),N=-.62-3.6*he(0,.34,o)-6.35*Ue,rt=(le+N)/2,yt=le-N,Pe;if(Me)Xe.target.y=Me.targetY,Pe=Me.viewH/(2*Math.tan(Ft.fov*Math.PI/360));else{let B=Eu(119.999),O=he(120,130,t);Xe.target.y=B.targetY+(rt-B.targetY)*O,Pe=(B.viewH+(yt-B.viewH)*O)/(2*Math.tan(Ft.fov*Math.PI/360))}Xe.target.x=.5*he(.15,.7,o);let ut=Math.max(1.35,Pe)*(Xe.radius/12.5)*be,Dt=Math.sin(Xe.phi),Et=Math.cos(Xe.phi);Ft.position.set(Xe.target.x+ut*Dt*Math.cos(Xe.theta),Xe.target.y+ut*Et,Xe.target.z+ut*Dt*Math.sin(Xe.theta)),Ft.lookAt(Xe.target);let Ge=Math.floor(s*4)%4;t<zt-2.2&&zn[Ge].name!==sl&&(sl=zn[Ge].name,sa.textContent=sl,tl.textContent=zn[Ge].sub,sa.style.animation="none",sa.offsetWidth,sa.style.animation="seasonIn .7s ease both"),x_.textContent="\u7B2C "+a+" \u5E74";let bt=Ge===2&&L>.45?"\u679C\u5B9E\u719F\u4E86":zn[Ge].sub;t<zt-2.2&&tl.textContent!==bt&&(tl.textContent=bt);let dt=(s%1+1)%1;if(il&&(il.style.transform="translate(-50%, -100%) rotate("+(dt*360).toFixed(2)+"deg)"),hf&&(hf.textContent="\u7B2C "+a+" \u5E74"),aa){let B=zn[Ge].name+" \xB7 \u7B2C "+a+" \u5E74";aa.textContent!==B&&(aa.textContent=B)}t>=zt-2.2&&(sl="\u6625",sa.textContent="\u6625",tl.textContent="\u4E07\u7269\u53D1\u82BD \xB7 \u65B0\u7684\u8F6E\u56DE",aa&&(aa.textContent="\u6625 \xB7 \u65B0\u7684\u4E00\u5E74"),il&&(il.style.transform="translate(-50%, -100%) rotate(0deg)")),yv&&Math.floor(t*2)!==Math.floor((t-n)*2)&&console.log("[debug]","t="+t.toFixed(1),"p="+s.toFixed(3),"g="+o.toFixed(3),"ground=#"+l.ground.getHexString(),"snowA="+z.toFixed(2),"grassY="+ye.__grass.scale.y.toFixed(2));let We=n===0&&!lt&&!ms?[t.toFixed(3),Xe.theta.toFixed(3),Xe.phi.toFixed(3),Xe.radius.toFixed(3),_r?1:0].join("|"):"";(We===""||We!==Ef)&&(Ef=We,Zt.render(ye,Ft))}window.addEventListener("resize",()=>{let i=Yu();Ft.aspect=i.w/i.h,Ft.updateProjectionMatrix(),Zt.setSize(i.w,i.h)});document.getElementById("loading").style.display="none";window.matchMedia("(pointer: coarse)").matches&&(document.getElementById("tips").textContent="\u5355\u6307\u62D6\u52A8\u73AF\u987E \xB7 \u53CC\u6307\u7F29\u653E \xB7 \u7528\u5E95\u90E8\u8FDB\u5EA6\u6761\u63A7\u5236\u64AD\u653E");/(^|[?&])dbg(=|&|$)/.test(location.search)&&(window.__scene=ye,window.__sky=di,window.__camera=Ft,window.__renderer=Zt,window.__probe=(i,e)=>{let t=new Ks;return t.setFromCamera(new ce(i,e),Ft),t.intersectObjects(ye.children,!0).slice(0,5).map(n=>({name:n.object.name||n.object.type,geo:n.object.geometry&&n.object.geometry.type,verts:n.object.geometry&&n.object.geometry.attributes.position?n.object.geometry.attributes.position.count:0,dist:+n.distance.toFixed(2),pt:[+n.point.x.toFixed(2),+n.point.y.toFixed(2),+n.point.z.toFixed(2)]}))});nd&&zl({reset:!1,fullscreen:!1,autoplay:Vn===null});window.__classroom={enter:zl,exit:_m,state:()=>({classroomMode:fn,autoPauseAtChapter:ki,voiceOn:kn,projectorBright:fs,touchLocked:xi,storyTime:ke,playing:lt,currentChapter:_i}),pickPartAt:ym,partVisibleAt:hd,findState:()=>({findActive:_r,findTarget:Qn,findBag:fr.slice(),findBagIndex:Bi,findRound:ya}),findablePartsAt:xm,partScreenPoints:dd,handleCanvasTap:Em,startFindGame:Sm,stopFindGame:yi,seekForTest:i=>{ps=i,ke=i,mn=i,lt=!1,Xe.theta=1.46,Xe.radius=12.5,Xe.phi=1.46,Mn(i),kt()}};bm();})();
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
