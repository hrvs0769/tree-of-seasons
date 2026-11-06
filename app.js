(()=>{var Ud=2;var _f=0,ph=1,Tn=2;var Dd=1,lo=2;var Ai=100,xf=101,yf=102;var Mf=200,Sf=201,Ef=202,bf=203,Nl=204,Ol=205,wf=206,Tf=207,Af=208,Rf=209,Cf=210,If=211,Pf=212,Lf=213,Uf=214,Df=0,Nf=1,Of=2,Bf=3,Ff=4,zf=5,Hf=6,kf=7;var Nd=4;var Od=300,Sr=301,Er=302,Bl=303,Fl=304,co=306,Ii=1e3,Pi=1001,zl=1002,fn=1003,Vf=1004;var Js=1005;var zn=1006,Qo=1007;var _r=1008;var li=1009,Bd=1010,Fd=1011,os=1012,fh=1013,Li=1014,bn=1015,ys=1016,mh=1017,gh=1018,br=1020,zd=35902,Hd=1021,kd=1022,wn=1023,Vd=1024,Gd=1025,ls=1026,wr=1027,vh=1028,_h=1029,Wd=1030,xh=1031;var yh=1033,Ia=33776,Pa=33777,La=33778,Ua=33779,Hl=35840,kl=35841,Vl=35842,Gl=35843,Wl=36196,Xl=37492,jl=37496,ql=37808,Yl=37809,Zl=37810,Jl=37811,Kl=37812,$l=37813,Ql=37814,ec=37815,tc=37816,nc=37817,ic=37818,rc=37819,sc=37820,ac=37821,Da=36492,oc=36494,lc=36495,Xd=36283,cc=36284,hc=36285,uc=36286;var Oa=2300,dc=2301,el=2302,Eu=2400,bu=2401,wu=2402;var vr="",st="srgb",Dr="srgb-linear",ho="linear",nt="srgb";var Qi=7680;var Gf=512,Wf=513,Xf=514,jf=515,qf=516,Yf=517,Zf=518,Jf=519,pc=35044,Hi=35048;var Tu="300 es",Tr=2e3,Ba=2001,ci=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,e);e.target=null}}},Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Na=Math.PI/180,fc=180/Math.PI;function Hn(){let i=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(Nt[255&i]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]+"-"+Nt[255&e]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[63&t|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[255&n]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function Rt(i,e,t){return Math.max(e,Math.min(t,i))}function Kf(i,e){return(i%e+e)%e}function tl(i,e,t){return(1-t)*i+t*e}function En(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function it(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(4294967295*i);case Uint16Array:return Math.round(65535*i);case Uint8Array:return Math.round(255*i);case Int32Array:return Math.round(2147483647*i);case Int16Array:return Math.round(32767*i);case Int8Array:return Math.round(127*i);default:throw new Error("Invalid component type.")}}var le=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},He=class i{constructor(e,t,n,r,s,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],m=n[8],x=r[0],f=r[3],g=r[6],v=r[1],_=r[4],y=r[7],R=r[2],T=r[5],I=r[8];return s[0]=a*x+o*v+l*R,s[3]=a*f+o*_+l*T,s[6]=a*g+o*y+l*I,s[1]=c*x+h*v+u*R,s[4]=c*f+h*_+u*T,s[7]=c*g+h*y+u*I,s[2]=d*x+p*v+m*R,s[5]=d*f+p*_+m*T,s[8]=d*g+p*y+m*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,m=t*u+n*d+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=u*x,e[1]=(r*c-h*n)*x,e[2]=(o*n-r*a)*x,e[3]=d*x,e[4]=(h*t-r*l)*x,e[5]=(r*s-o*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(nl.makeScale(e,t)),this}rotate(e){return this.premultiply(nl.makeRotation(-e)),this}translate(e,t){return this.premultiply(nl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},nl=new He;function jd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Fa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $f(){let i=Fa("canvas");return i.style.display="block",i}var Au={};function is(i){i in Au||(Au[i]=!0,console.warn(i))}var Je={enabled:!0,workingColorSpace:Dr,spaces:{},convert:function(i,e,t){return this.enabled!==!1&&e!==t&&e&&t&&(this.spaces[e].transfer===nt&&(i.r=kn(i.r),i.g=kn(i.g),i.b=kn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===nt&&(i.r=yr(i.r),i.g=yr(i.g),i.b=yr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===vr?ho:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function kn(i){return i<.04045?.0773993808*i:Math.pow(.9478672986*i+.0521327014,2.4)}function yr(i){return i<.0031308?12.92*i:1.055*Math.pow(i,.41666)-.055}var Ru=[.64,.33,.3,.6,.15,.06],Cu=[.2126,.7152,.0722],Iu=[.3127,.329],Pu=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lu=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715),er;Je.define({[Dr]:{primaries:Ru,whitePoint:Iu,transfer:ho,toXYZ:Pu,fromXYZ:Lu,luminanceCoefficients:Cu,workingColorSpaceConfig:{unpackColorSpace:st},outputColorSpaceConfig:{drawingBufferColorSpace:st}},[st]:{primaries:Ru,whitePoint:Iu,transfer:nt,toXYZ:Pu,fromXYZ:Lu,luminanceCoefficients:Cu,outputColorSpaceConfig:{drawingBufferColorSpace:st}}});var mc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{er===void 0&&(er=Fa("canvas")),er.width=e.width,er.height=e.height;let n=er.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=er}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Fa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=255*kn(s[a]/255);return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*kn(t[n]/255)):t[n]=kn(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Qf=0,za=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Hn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(il(r[a].image)):s.push(il(r[a]))}else s=il(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function il(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?mc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var em=0,Gt=class i extends ci{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=1001,r=1001,s=1006,a=1008,o=1023,l=1009,c=i.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=Hn(),this.name="",this.source=new za(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Od)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ii:e.x=e.x-Math.floor(e.x);break;case Pi:e.x=e.x<0?0:1;break;case zl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Ii:e.y=e.y-Math.floor(e.y);break;case Pi:e.y=e.y<0?0:1;break;case zl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Gt.DEFAULT_IMAGE=null,Gt.DEFAULT_MAPPING=Od,Gt.DEFAULT_ANISOTROPY=1;var dt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],m=l[9],x=l[2],f=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+f)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,y=(p+1)/2,R=(g+1)/2,T=(h+d)/4,I=(u+x)/4,D=(m+f)/4;return _>y&&_>R?_<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(_),r=T/n,s=I/n):y>R?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=T/r,s=D/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=I/s,r=D/s),this.set(n,r,s,t),this}let v=Math.sqrt((f-m)*(f-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(f-m)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},gc=class extends ci{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Gt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new za(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vn=class extends gc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ha=class extends Gt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var vc=class extends Gt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3],d=s[a+0],p=s[a+1],m=s[a+2],x=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=m,void(e[t+3]=x);if(u!==x||l!==d||c!==p||h!==m){let f=1-o,g=l*d+c*p+h*m+u*x,v=g>=0?1:-1,_=1-g*g;if(_>Number.EPSILON){let R=Math.sqrt(_),T=Math.atan2(R,g*v);f=Math.sin(f*T)/R,o=Math.sin(o*T)/R}let y=o*v;if(l=l*f+d*y,c=c*f+p*y,h=h*f+m*y,u=u*f+x*y,f===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[a],d=s[a+1],p=s[a+2],m=s[a+3];return e[t]=o*m+h*u+l*p-c*d,e[t+1]=l*m+h*d+c*u-o*p,e[t+2]=c*m+h*p+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),u=o(s/2),d=l(n/2),p=l(r/2),m=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"YZX":this._x=d*h*u+c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u-d*p*m;break;case"XZY":this._x=d*h*u-c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),h=2*(o*t-s*r),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return rl.copy(this).projectOnVector(e),this.sub(rl)}reflect(e){return this.sub(rl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},rl=new M,Uu=new mt,gn=class{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,un):un.fromBufferAttribute(s,a),un.applyMatrix4(e.matrixWorld),this.expandByPoint(un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ks.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ks.copy(n.boundingBox)),Ks.applyMatrix4(e.matrixWorld),this.union(Ks)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jr),$s.subVectors(this.max,jr),tr.subVectors(e.a,jr),nr.subVectors(e.b,jr),ir.subVectors(e.c,jr),ti.subVectors(nr,tr),ni.subVectors(ir,nr),yi.subVectors(tr,ir);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-yi.z,yi.y,ti.z,0,-ti.x,ni.z,0,-ni.x,yi.z,0,-yi.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-yi.y,yi.x,0];return!!sl(t,tr,nr,ir,$s)&&(t=[1,0,0,0,1,0,0,0,1],!!sl(t,tr,nr,ir,$s)&&(Qs.crossVectors(ti,ni),t=[Qs.x,Qs.y,Qs.z],sl(t,tr,nr,ir,$s)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(un).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ln=[new M,new M,new M,new M,new M,new M,new M,new M],un=new M,Ks=new gn,tr=new M,nr=new M,ir=new M,ti=new M,ni=new M,yi=new M,jr=new M,$s=new M,Qs=new M,Mi=new M;function sl(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Mi.fromArray(i,s);let o=r.x*Math.abs(Mi.x)+r.y*Math.abs(Mi.y)+r.z*Math.abs(Mi.z),l=e.dot(Mi),c=t.dot(Mi),h=n.dot(Mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var tm=new gn,qr=new M,al=new M,vn=class{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):tm.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qr.subVectors(e,this.center);let t=qr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=.5*(n-this.radius);this.center.addScaledVector(qr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(al.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qr.copy(e.center).add(al)),this.expandByPoint(qr.copy(e.center).sub(al))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Un=new M,ol=new M,ea=new M,ii=new M,ll=new M,ta=new M,cl=new M,Ui=class{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ol.copy(e).add(t).multiplyScalar(.5),ea.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(ol);let s=.5*e.distanceTo(t),a=-this.direction.dot(ea),o=ii.dot(this.direction),l=-ii.dot(ea),c=ii.lengthSq(),h=Math.abs(1-a*a),u,d,p,m;if(h>0)if(u=a*l-o,d=a*o-l,m=s*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ol).addScaledVector(ea,d),p}intersectSphere(e,t){Un.subVectors(e.center,this.origin);let n=Un.dot(this.direction),r=Un.dot(Un)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>r?null:((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>r?null:((o>n||n!=n)&&(n=o),(l<r||r!=r)&&(r=l),r<0?null:this.at(n>=0?n:r,t)))}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,n,r,s){ll.subVectors(t,e),ta.subVectors(n,e),cl.crossVectors(ll,ta);let a,o=this.direction.dot(cl);if(o>0){if(r)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}ii.subVectors(this.origin,e);let l=a*this.direction.dot(ta.crossVectors(ii,ta));if(l<0)return null;let c=a*this.direction.dot(ll.cross(ii));if(c<0||l+c>o)return null;let h=-a*ii.dot(cl);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Le=class i{constructor(e,t,n,r,s,a,o,l,c,h,u,d,p,m,x,f){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,h,u,d,p,m,x,f)}set(e,t,n,r,s,a,o,l,c,h,u,d,p,m,x,f){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=p,g[7]=m,g[11]=x,g[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/rr.setFromMatrixColumn(e,0).length(),s=1/rr.setFromMatrixColumn(e,1).length(),a=1/rr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,m=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+m*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=m+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,m=c*h,x=c*u;t[0]=d+x*o,t[4]=m*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-m,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,m=c*h,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,m=o*h,x=o*u;t[0]=l*h,t[4]=m*c-p,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=p*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=x-d*u,t[8]=m*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+m,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*l,p=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=p*u-m,t[2]=m*u-p,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nm,e,im)}lookAt(e,t,n){let r=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),ri.crossVectors(n,qt),ri.lengthSq()===0&&(Math.abs(n.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),ri.crossVectors(n,qt)),ri.normalize(),na.crossVectors(qt,ri),r[0]=ri.x,r[4]=na.x,r[8]=qt.x,r[1]=ri.y,r[5]=na.y,r[9]=qt.y,r[2]=ri.z,r[6]=na.z,r[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],m=n[2],x=n[6],f=n[10],g=n[14],v=n[3],_=n[7],y=n[11],R=n[15],T=r[0],I=r[4],D=r[8],B=r[12],k=r[1],j=r[5],V=r[9],Z=r[13],X=r[2],K=r[6],ee=r[10],oe=r[14],ie=r[3],be=r[7],Te=r[11],ae=r[15];return s[0]=a*T+o*k+l*X+c*ie,s[4]=a*I+o*j+l*K+c*be,s[8]=a*D+o*V+l*ee+c*Te,s[12]=a*B+o*Z+l*oe+c*ae,s[1]=h*T+u*k+d*X+p*ie,s[5]=h*I+u*j+d*K+p*be,s[9]=h*D+u*V+d*ee+p*Te,s[13]=h*B+u*Z+d*oe+p*ae,s[2]=m*T+x*k+f*X+g*ie,s[6]=m*I+x*j+f*K+g*be,s[10]=m*D+x*V+f*ee+g*Te,s[14]=m*B+x*Z+f*oe+g*ae,s[3]=v*T+_*k+y*X+R*ie,s[7]=v*I+_*j+y*K+R*be,s[11]=v*D+_*V+y*ee+R*Te,s[15]=v*B+_*Z+y*oe+R*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*l*u-r*c*u-s*o*d+n*c*d+r*o*p-n*l*p)+e[7]*(+t*l*p-t*c*d+s*a*d-r*a*p+r*c*h-s*l*h)+e[11]*(+t*c*u-t*o*p-s*a*u+n*a*p+s*o*h-n*c*h)+e[15]*(-r*o*h-t*l*u+t*o*d+r*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],m=e[12],x=e[13],f=e[14],g=e[15],v=u*f*c-x*d*c+x*l*p-o*f*p-u*l*g+o*d*g,_=m*d*c-h*f*c-m*l*p+a*f*p+h*l*g-a*d*g,y=h*x*c-m*u*c+m*o*p-a*x*p-h*o*g+a*u*g,R=m*u*l-h*x*l-m*o*d+a*x*d+h*o*f-a*u*f,T=t*v+n*_+r*y+s*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/T;return e[0]=v*I,e[1]=(x*d*s-u*f*s-x*r*p+n*f*p+u*r*g-n*d*g)*I,e[2]=(o*f*s-x*l*s+x*r*c-n*f*c-o*r*g+n*l*g)*I,e[3]=(u*l*s-o*d*s-u*r*c+n*d*c+o*r*p-n*l*p)*I,e[4]=_*I,e[5]=(h*f*s-m*d*s+m*r*p-t*f*p-h*r*g+t*d*g)*I,e[6]=(m*l*s-a*f*s-m*r*c+t*f*c+a*r*g-t*l*g)*I,e[7]=(a*d*s-h*l*s+h*r*c-t*d*c-a*r*p+t*l*p)*I,e[8]=y*I,e[9]=(m*u*s-h*x*s-m*n*p+t*x*p+h*n*g-t*u*g)*I,e[10]=(a*x*s-m*o*s+m*n*c-t*x*c-a*n*g+t*o*g)*I,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*p-t*o*p)*I,e[12]=R*I,e[13]=(h*x*r-m*u*r+m*n*d-t*x*d-h*n*f+t*u*f)*I,e[14]=(m*o*r-a*x*r-m*n*l+t*x*l+a*n*f-t*o*f)*I,e[15]=(a*u*r-h*o*r+h*n*l-t*u*l-a*n*d+t*o*d)*I,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,m=s*u,x=a*h,f=a*u,g=o*u,v=l*c,_=l*h,y=l*u,R=n.x,T=n.y,I=n.z;return r[0]=(1-(x+g))*R,r[1]=(p+y)*R,r[2]=(m-_)*R,r[3]=0,r[4]=(p-y)*T,r[5]=(1-(d+g))*T,r[6]=(f+v)*T,r[7]=0,r[8]=(m+_)*I,r[9]=(f-v)*I,r[10]=(1-(d+x))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=rr.set(r[0],r[1],r[2]).length(),a=rr.set(r[4],r[5],r[6]).length(),o=rr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],dn.copy(this);let l=1/s,c=1/a,h=1/o;return dn.elements[0]*=l,dn.elements[1]*=l,dn.elements[2]*=l,dn.elements[4]*=c,dn.elements[5]*=c,dn.elements[6]*=c,dn.elements[8]*=h,dn.elements[9]*=h,dn.elements[10]*=h,t.setFromRotationMatrix(dn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),p,m;if(o===Tr)p=-(a+s)/(a-s),m=-2*a*s/(a-s);else{if(o!==Ba)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),m=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(n-r),u=1/(a-s),d=(t+e)*c,p=(n+r)*h,m,x;if(o===Tr)m=(a+s)*u,x=-2*u;else{if(o!==Ba)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);m=s*u,x=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},rr=new M,dn=new Le,nm=new M(0,0,0),im=new M(1,1,1),ri=new M,na=new M,qt=new M,Du=new Le,Nu=new mt,Tt=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Du.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Du,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nu.setFromEuler(this),this.setFromQuaternion(Nu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Tt.DEFAULT_ORDER="XYZ";var cs=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return!!(this.mask&e.mask)}isEnabled(e){return!!(this.mask&1<<e)}},rm=0,Ou=new M,sr=new mt,Dn=new Le,ia=new M,Yr=new M,sm=new M,am=new mt,Bu=new M(1,0,0),Fu=new M(0,1,0),zu=new M(0,0,1),Hu={type:"added"},om={type:"removed"},ar={type:"childadded",child:null},hl={type:"childremoved",child:null},Ct=class i extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new M,t=new Tt,n=new mt,r=new M(1,1,1);t._onChange((function(){n.setFromEuler(t,!1)})),n._onChange((function(){t.setFromQuaternion(n,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Le},normalMatrix:{value:new He}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.multiply(sr),this}rotateOnWorldAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.premultiply(sr),this}rotateX(e){return this.rotateOnAxis(Bu,e)}rotateY(e){return this.rotateOnAxis(Fu,e)}rotateZ(e){return this.rotateOnAxis(zu,e)}translateOnAxis(e,t){return Ou.copy(e).applyQuaternion(this.quaternion),this.position.add(Ou.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bu,e)}translateY(e){return this.translateOnAxis(Fu,e)}translateZ(e){return this.translateOnAxis(zu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ia.copy(e):ia.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Yr,ia,this.up):Dn.lookAt(ia,Yr,this.up),this.quaternion.setFromRotationMatrix(Dn),r&&(Dn.extractRotation(r.matrixWorld),sr.setFromRotationMatrix(Dn),this.quaternion.premultiply(sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hu),ar.child=e,this.dispatchEvent(ar),ar.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(om),hl.child=e,this.dispatchEvent(hl),hl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hu),ar.child=e,this.dispatchEvent(ar),ar.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,e,sm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,am,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map((o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()}))),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=r,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};Ct.DEFAULT_UP=new M(0,1,0),Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pn=new M,Nn=new M,ul=new M,On=new M,or=new M,lr=new M,ku=new M,dl=new M,pl=new M,fl=new M,ml=new dt,gl=new dt,vl=new dt,Fn=class i{constructor(e=new M,t=new M,n=new M){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),pn.subVectors(e,t),r.cross(pn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){pn.subVectors(r,t),Nn.subVectors(n,t),ul.subVectors(e,t);let a=pn.dot(pn),o=pn.dot(Nn),l=pn.dot(ul),c=Nn.dot(Nn),h=Nn.dot(ul),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,m=(a*h-o*l)*d;return s.set(1-p-m,m,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,On)!==null&&On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,On.x),l.addScaledVector(a,On.y),l.addScaledVector(o,On.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return ml.setScalar(0),gl.setScalar(0),vl.setScalar(0),ml.fromBufferAttribute(e,t),gl.fromBufferAttribute(e,n),vl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ml,s.x),a.addScaledVector(gl,s.y),a.addScaledVector(vl,s.z),a}static isFrontFacing(e,t,n,r){return pn.subVectors(n,t),Nn.subVectors(e,t),pn.cross(Nn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),.5*pn.cross(Nn).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;or.subVectors(r,n),lr.subVectors(s,n),dl.subVectors(e,n);let l=or.dot(dl),c=lr.dot(dl);if(l<=0&&c<=0)return t.copy(n);pl.subVectors(e,r);let h=or.dot(pl),u=lr.dot(pl);if(h>=0&&u<=h)return t.copy(r);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(or,a);fl.subVectors(e,s);let p=or.dot(fl),m=lr.dot(fl);if(m>=0&&p<=m)return t.copy(s);let x=p*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(lr,o);let f=h*m-p*u;if(f<=0&&u-h>=0&&p-m>=0)return ku.subVectors(s,r),o=(u-h)/(u-h+(p-m)),t.copy(r).addScaledVector(ku,o);let g=1/(f+x+d);return a=x*g,o=d*g,t.copy(n).addScaledVector(or,a).addScaledVector(lr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},ra={h:0,s:0,l:0};function _l(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+6*(e-i)*t:t<.5?e:t<2/3?i+6*(e-i)*(2/3-t):i}var _e=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=st){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Je.workingColorSpace){if(e=Kf(e,1),t=Rt(t,0,1),n=Rt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=_l(a,s,e+1/3),this.g=_l(a,s,e),this.b=_l(a,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,t=st){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=st){let n=qd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kn(e.r),this.g=kn(e.g),this.b=kn(e.b),this}copyLinearToSRGB(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=st){return Je.fromWorkingColorSpace(Ot.copy(this),e),65536*Math.round(Rt(255*Ot.r,0,255))+256*Math.round(Rt(255*Ot.g,0,255))+Math.round(Rt(255*Ot.b,0,255))}getHexString(e=st){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Ot.copy(this),t);let n=Ot.r,r=Ot.g,s=Ot.b,a=Math.max(n,r,s),o=Math.min(n,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=st){Je.fromWorkingColorSpace(Ot.copy(this),e);let t=Ot.r,n=Ot.g,r=Ot.b;return e!==st?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*r)})`}offsetHSL(e,t,n){return this.getHSL(si),this.setHSL(si.h+e,si.s+t,si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(si),e.getHSL(ra);let n=tl(si.h,ra.h,t),r=tl(si.s,ra.s,t),s=tl(si.l,ra.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ot=new _e;_e.NAMES=qd;var lm=0,Gn=class extends ci{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=Hn(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nl,this.blendDst=Ol,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ol&&(n.blendDst=this.blendDst),this.blendEquation!==Ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},hi=class extends Gn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},qv=cm();function cm(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[256|l]=32768,r[l]=24,r[256|l]=24):c<-14?(n[l]=1024>>-c-14,n[256|l]=1024>>-c-14|32768,r[l]=-c-1,r[256|l]=-c-1):c<=15?(n[l]=c+15<<10,n[256|l]=c+15<<10|32768,r[l]=13,r[256|l]=13):c<128?(n[l]=31744,n[256|l]=64512,r[l]=24,r[256|l]=24):(n[l]=31744,n[256|l]=64512,r[l]=13,r[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}var xt=new M,sa=new le,wt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=pc,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)sa.fromBufferAttribute(this,t),sa.applyMatrix3(e),this.setXY(t,sa.x,sa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=En(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=En(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=En(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=En(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pc&&(e.usage=this.usage),e}};var ka=class extends wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Va=class extends wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Re=class extends wt{constructor(e,t,n){super(new Float32Array(e),t,n)}},hm=0,tn=new Le,xl=new Ct,cr=new M,Yt=new gn,Zr=new gn,bt=new M,et=class i extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jd(e)?Va:ka)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new He().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,n){return tn.makeTranslation(e,t,n),this.applyMatrix4(tn),this}scale(e,t,n){return tn.makeScale(e,t,n),this.applyMatrix4(tn),this}lookAt(e){return xl.lookAt(e),xl.updateMatrix(),this.applyMatrix4(xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Re(n,3))}else{for(let n=0,r=t.count;n<r;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Yt.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new M,1/0);if(e){let n=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Zr.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(Yt.min,Zr.min),Yt.expandByPoint(bt),bt.addVectors(Yt.max,Zr.max),Yt.expandByPoint(bt)):(Yt.expandByPoint(Zr.min),Yt.expandByPoint(Zr.max))}Yt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(bt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)bt.fromBufferAttribute(o,c),l&&(cr.fromBufferAttribute(e,c),bt.add(cr)),r=Math.max(r,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new M,l[D]=new M;let c=new M,h=new M,u=new M,d=new le,p=new le,m=new le,x=new M,f=new M;function g(D,B,k){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,B),u.fromBufferAttribute(n,k),d.fromBufferAttribute(s,D),p.fromBufferAttribute(s,B),m.fromBufferAttribute(s,k),h.sub(c),u.sub(c),p.sub(d),m.sub(d);let j=1/(p.x*m.y-m.x*p.y);isFinite(j)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(j),f.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(j),o[D].add(x),o[B].add(x),o[k].add(x),l[D].add(f),l[B].add(f),l[k].add(f))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let D=0,B=v.length;D<B;++D){let k=v[D],j=k.start;for(let V=j,Z=j+k.count;V<Z;V+=3)g(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let _=new M,y=new M,R=new M,T=new M;function I(D){R.fromBufferAttribute(r,D),T.copy(R);let B=o[D];_.copy(B),_.sub(R.multiplyScalar(R.dot(B))).normalize(),y.crossVectors(T,B);let k=y.dot(l[D])<0?-1:1;a.setXYZW(D,_.x,_.y,_.z,k)}for(let D=0,B=v.length;D<B;++D){let k=v[D],j=k.start;for(let V=j,Z=j+k.count;V<Z;V+=3)I(e.getX(V+0)),I(e.getX(V+1)),I(e.getX(V+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wt(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let r=new M,s=new M,a=new M,o=new M,l=new M,c=new M,h=new M,u=new M;if(e)for(let d=0,p=e.count;d<p;d+=3){let m=e.getX(d+0),x=e.getX(d+1),f=e.getX(d+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,f),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,m=0;for(let x=0,f=l.length;x<f;x++){p=o.isInterleavedBufferAttribute?l[x]*o.data.stride+o.offset:l[x]*h;for(let g=0;g<h;g++)d[m++]=c[p++]}return new wt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let l=e(r[o],n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vu=new Le,Si=new Ui,aa=new vn,Gu=new M,oa=new M,la=new M,ca=new M,yl=new M,ha=new M,Wu=new M,ua=new M,Qe=class extends Ct{constructor(e=new et,t=new hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){ha.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(yl.fromBufferAttribute(u,e),a?ha.addScaledVector(yl,h):ha.addScaledVector(yl.sub(t),h))}t.add(ha)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;if(r!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(s),Si.copy(e.ray).recast(e.near),aa.containsPoint(Si.origin)===!1&&(Si.intersectSphere(aa,Gu)===null||Si.origin.distanceToSquared(Gu)>(e.far-e.near)**2))return;Vu.copy(s).invert(),Si.copy(e.ray).applyMatrix4(Vu),n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,Si)}}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let f=d[m],g=a[f.materialIndex];for(let v=Math.max(f.start,p.start),_=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));v<_;v+=3)r=da(this,g,e,n,c,h,u,o.getX(v),o.getX(v+1),o.getX(v+2)),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=f.materialIndex,t.push(r))}else for(let m=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);m<x;m+=3)r=da(this,a,e,n,c,h,u,o.getX(m),o.getX(m+1),o.getX(m+2)),r&&(r.faceIndex=Math.floor(m/3),t.push(r));else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let f=d[m],g=a[f.materialIndex];for(let v=Math.max(f.start,p.start),_=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));v<_;v+=3)r=da(this,g,e,n,c,h,u,v,v+1,v+2),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=f.materialIndex,t.push(r))}else for(let m=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);m<x;m+=3)r=da(this,a,e,n,c,h,u,m,m+1,m+2),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}};function da(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,oa),i.getVertexPosition(l,la),i.getVertexPosition(c,ca);let h=(function(u,d,p,m,x,f,g,v){let _;if(_=d.side===1?m.intersectTriangle(g,f,x,!0,v):m.intersectTriangle(x,f,g,d.side===0,v),_===null)return null;ua.copy(v),ua.applyMatrix4(u.matrixWorld);let y=p.ray.origin.distanceTo(ua);return y<p.near||y>p.far?null:{distance:y,point:ua.clone(),object:u}})(i,e,t,n,oa,la,ca,Wu);if(h){let u=new M;Fn.getBarycoord(Wu,oa,la,ca,u),r&&(h.uv=Fn.getInterpolatedAttribute(r,o,l,c,u,new le)),s&&(h.uv1=Fn.getInterpolatedAttribute(s,o,l,c,u,new le)),a&&(h.normal=Fn.getInterpolatedAttribute(a,o,l,c,u,new M),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new M,materialIndex:0};Fn.getNormal(oa,la,ca,d.normal),h.face=d,h.barycoord=u}return h}var Ar=class i extends et{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function m(x,f,g,v,_,y,R,T,I,D,B){let k=y/I,j=R/D,V=y/2,Z=R/2,X=T/2,K=I+1,ee=D+1,oe=0,ie=0,be=new M;for(let Te=0;Te<ee;Te++){let ae=Te*j-Z;for(let he=0;he<K;he++){let ye=he*k-V;be[x]=ye*v,be[f]=ae*_,be[g]=X,c.push(be.x,be.y,be.z),be[x]=0,be[f]=0,be[g]=T>0?1:-1,h.push(be.x,be.y,be.z),u.push(he/I),u.push(1-Te/D),oe+=1}}for(let Te=0;Te<D;Te++)for(let ae=0;ae<I;ae++){let he=d+ae+K*Te,ye=d+ae+K*(Te+1),Me=d+(ae+1)+K*(Te+1),pe=d+(ae+1)+K*Te;l.push(he,ye,pe),l.push(ye,Me,pe),ie+=6}o.addGroup(p,ie,B),p+=ie,d+=oe}m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,r,a,2),m("x","z","y",1,-1,e,n,-t,r,a,3),m("x","y","z",1,-1,e,t,n,r,s,4),m("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(h,3)),this.setAttribute("uv",new Re(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Rr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function kt(i){let e={};for(let t=0;t<i.length;t++){let n=Rr(i[t]);for(let r in n)e[r]=n[r]}return e}function Yd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var um={clone:Rr,merge:kt},Zt=class extends Gn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rr(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let r=0;r<t.length;r++)n.push(t[r].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},hs=class extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=Tr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ai=new M,Xu=new le,ju=new le,Vt=class extends hs{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*fc*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Na*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*fc*Math.atan(Math.tan(.5*Na*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ai.x,ai.y).multiplyScalar(-e/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-e/ai.z)}getViewSize(e,t){return this.getViewBounds(e,Xu,ju),t.subVectors(ju,Xu)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Na*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},hr=-90,_c=class extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Vt(hr,1,e,t);r.layers=this.layers,this.add(r);let s=new Vt(hr,1,e,t);s.layers=this.layers,this.add(s);let a=new Vt(hr,1,e,t);a.layers=this.layers,this.add(a);let o=new Vt(hr,1,e,t);o.layers=this.layers,this.add(o);let l=new Vt(hr,1,e,t);l.layers=this.layers,this.add(l);let c=new Vt(hr,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Tr)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==Ba)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ga=class extends Gt{constructor(e,t,n,r,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:Sr,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},xc=class extends Vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ga(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ar(5,5,5),s=new Zt({name:"CubemapFromEquirect",uniforms:Rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let a=new Qe(r,s),o=t.minFilter;return t.minFilter===_r&&(t.minFilter=zn),new _c(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}},Ml=new M,dm=new M,pm=new He,Bn=class{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Ml.subVectors(n,t).cross(dm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ml),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||pm.getNormalMatrix(e),r=this.coplanarPoint(Ml).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ei=new vn,pa=new M,Cr=class{constructor(e=new Bn,t=new Bn,n=new Bn,r=new Bn,s=new Bn,a=new Bn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],p=r[8],m=r[9],x=r[10],f=r[11],g=r[12],v=r[13],_=r[14],y=r[15];if(n[0].setComponents(l-s,d-c,f-p,y-g).normalize(),n[1].setComponents(l+s,d+c,f+p,y+g).normalize(),n[2].setComponents(l+a,d+h,f+m,y+v).normalize(),n[3].setComponents(l-a,d-h,f-m,y-v).normalize(),n[4].setComponents(l-o,d-u,f-x,y-_).normalize(),t===Tr)n[5].setComponents(l+o,d+u,f+x,y+_).normalize();else{if(t!==Ba)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,u,x,_).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(e){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476,Ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(pa.x=r.normal.x>0?e.max.x:e.min.x,pa.y=r.normal.y>0?e.max.y:e.min.y,pa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Zd(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function fm(i){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(i.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let r=e.get(t);if(r===void 0)e.set(t,(function(s,a){let o=s.array,l=s.usage,c=o.byteLength,h=i.createBuffer(),u;if(i.bindBuffer(a,h),i.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)u=i.FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?i.HALF_FLOAT:i.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=i.SHORT;else if(o instanceof Uint32Array)u=i.UNSIGNED_INT;else if(o instanceof Int32Array)u=i.INT;else if(o instanceof Int8Array)u=i.BYTE;else if(o instanceof Uint8Array)u=i.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=i.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}})(t,n));else if(r.version<t.version){if(r.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let l=a.array,c=a.updateRanges;if(i.bindBuffer(o,s),c.length===0)i.bufferSubData(o,0,l);else{c.sort(((u,d)=>u.start-d.start));let h=0;for(let u=1;u<c.length;u++){let d=c[h],p=c[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,c[h]=p)}c.length=h+1;for(let u=0,d=c.length;u<d;u++){let p=c[u];i.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(r.buffer,t,n),r.version=t.version}}}}var rn=class i extends et{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,p=[],m=[],x=[],f=[];for(let g=0;g<h;g++){let v=g*d-a;for(let _=0;_<c;_++){let y=_*u-s;m.push(y,-v,0),x.push(0,0,1),f.push(_/o),f.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){let _=v+c*g,y=v+c*(g+1),R=v+1+c*(g+1),T=v+1+c*g;p.push(_,y,T),p.push(y,R,T)}this.setIndex(p),this.setAttribute("position",new Re(m,3)),this.setAttribute("normal",new Re(x,3)),this.setAttribute("uv",new Re(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ge={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},ge={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Sn={basic:{uniforms:kt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:kt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new _e(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:kt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:kt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:kt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new _e(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:kt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:kt([ge.points,ge.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:kt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:kt([ge.common,ge.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:kt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:kt([ge.sprite,ge.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:kt([ge.common,ge.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:kt([ge.lights,ge.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Sn.physical={uniforms:kt([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var fa={r:0,b:0,g:0},bi=new Tt,mm=new Le;function gm(i,e,t,n,r,s,a){let o=new _e(0),l,c,h=s===!0?0:1,u=null,d=0,p=null;function m(f){let g=f.isScene===!0?f.background:null;return g&&g.isTexture&&(g=(f.backgroundBlurriness>0?t:e).get(g)),g}function x(f,g){f.getRGB(fa,Yd(i)),n.buffers.color.setClear(fa.r,fa.g,fa.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(f,g=1){o.set(f),h=g,x(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(f){h=f,x(o,h)},render:function(f){let g=!1,v=m(f);v===null?x(o,h):v&&v.isColor&&(x(v,1),g=!0);let _=i.xr.getEnvironmentBlendMode();_==="additive"?n.buffers.color.setClear(0,0,0,1,a):_==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||g)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))},addToRenderList:function(f,g){let v=m(g);v&&(v.isCubeTexture||v.mapping===co)?(c===void 0&&(c=new Qe(new Ar(1,1,1),new Zt({name:"BackgroundCubeMaterial",uniforms:Rr(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(_,y,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),bi.copy(g.backgroundRotation),bi.x*=-1,bi.y*=-1,bi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(mm.makeRotationFromEuler(bi)),c.material.toneMapped=Je.getTransfer(v.colorSpace)!==nt,u===v&&d===v.version&&p===i.toneMapping||(c.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Qe(new rn(2,2),new Zt({name:"BackgroundMaterial",uniforms:Rr(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=Je.getTransfer(v.colorSpace)!==nt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),u===v&&d===v.version&&p===i.toneMapping||(l.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}}}function vm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=c(null),s=r,a=!1;function o(g){return i.bindVertexArray(g)}function l(g){return i.deleteVertexArray(g)}function c(g){let v=[],_=[],y=[];for(let R=0;R<t;R++)v[R]=0,_[R]=0,y[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:_,attributeDivisors:y,object:g,attributes:{},index:null}}function h(){let g=s.newAttributes;for(let v=0,_=g.length;v<_;v++)g[v]=0}function u(g){d(g,0)}function d(g,v){let _=s.newAttributes,y=s.enabledAttributes,R=s.attributeDivisors;_[g]=1,y[g]===0&&(i.enableVertexAttribArray(g),y[g]=1),R[g]!==v&&(i.vertexAttribDivisor(g,v),R[g]=v)}function p(){let g=s.newAttributes,v=s.enabledAttributes;for(let _=0,y=v.length;_<y;_++)v[_]!==g[_]&&(i.disableVertexAttribArray(_),v[_]=0)}function m(g,v,_,y,R,T,I){I===!0?i.vertexAttribIPointer(g,v,_,R,T):i.vertexAttribPointer(g,v,_,y,R,T)}function x(){f(),a=!0,s!==r&&(s=r,o(s.object))}function f(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:function(g,v,_,y,R){let T=!1,I=(function(D,B,k){let j=k.wireframe===!0,V=n[D.id];V===void 0&&(V={},n[D.id]=V);let Z=V[B.id];Z===void 0&&(Z={},V[B.id]=Z);let X=Z[j];return X===void 0&&(X=c(i.createVertexArray()),Z[j]=X),X})(y,_,v);s!==I&&(s=I,o(s.object)),T=(function(D,B,k,j){let V=s.attributes,Z=B.attributes,X=0,K=k.getAttributes();for(let ee in K)if(K[ee].location>=0){let oe=V[ee],ie=Z[ee];if(ie===void 0&&(ee==="instanceMatrix"&&D.instanceMatrix&&(ie=D.instanceMatrix),ee==="instanceColor"&&D.instanceColor&&(ie=D.instanceColor)),oe===void 0||oe.attribute!==ie||ie&&oe.data!==ie.data)return!0;X++}return s.attributesNum!==X||s.index!==j})(g,y,_,R),T&&(function(D,B,k,j){let V={},Z=B.attributes,X=0,K=k.getAttributes();for(let ee in K)if(K[ee].location>=0){let oe=Z[ee];oe===void 0&&(ee==="instanceMatrix"&&D.instanceMatrix&&(oe=D.instanceMatrix),ee==="instanceColor"&&D.instanceColor&&(oe=D.instanceColor));let ie={};ie.attribute=oe,oe&&oe.data&&(ie.data=oe.data),V[ee]=ie,X++}s.attributes=V,s.attributesNum=X,s.index=j})(g,y,_,R),R!==null&&e.update(R,i.ELEMENT_ARRAY_BUFFER),(T||a)&&(a=!1,(function(D,B,k,j){h();let V=j.attributes,Z=k.getAttributes(),X=B.defaultAttributeValues;for(let K in Z){let ee=Z[K];if(ee.location>=0){let oe=V[K];if(oe===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(oe=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(oe=D.instanceColor)),oe!==void 0){let ie=oe.normalized,be=oe.itemSize,Te=e.get(oe);if(Te===void 0)continue;let ae=Te.buffer,he=Te.type,ye=Te.bytesPerElement,Me=he===i.INT||he===i.UNSIGNED_INT||oe.gpuType===fh;if(oe.isInterleavedBufferAttribute){let pe=oe.data,w=pe.stride,b=oe.offset;if(pe.isInstancedInterleavedBuffer){for(let N=0;N<ee.locationSize;N++)d(ee.location+N,pe.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let N=0;N<ee.locationSize;N++)u(ee.location+N);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let N=0;N<ee.locationSize;N++)m(ee.location+N,be/ee.locationSize,he,ie,w*ye,(b+be/ee.locationSize*N)*ye,Me)}else{if(oe.isInstancedBufferAttribute){for(let pe=0;pe<ee.locationSize;pe++)d(ee.location+pe,oe.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let pe=0;pe<ee.locationSize;pe++)u(ee.location+pe);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let pe=0;pe<ee.locationSize;pe++)m(ee.location+pe,be/ee.locationSize,he,ie,be*ye,be/ee.locationSize*pe*ye,Me)}}else if(X!==void 0){let ie=X[K];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(ee.location,ie);break;case 3:i.vertexAttrib3fv(ee.location,ie);break;case 4:i.vertexAttrib4fv(ee.location,ie);break;default:i.vertexAttrib1fv(ee.location,ie)}}}}p()})(g,v,_,y),R!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(R).buffer))},reset:x,resetDefaultState:f,dispose:function(){x();for(let g in n){let v=n[g];for(let _ in v){let y=v[_];for(let R in y)l(y[R].object),delete y[R];delete v[_]}delete n[g]}},releaseStatesOfGeometry:function(g){if(n[g.id]===void 0)return;let v=n[g.id];for(let _ in v){let y=v[_];for(let R in y)l(y[R].object),delete y[R];delete v[_]}delete n[g.id]},releaseStatesOfProgram:function(g){for(let v in n){let _=n[v];if(_[g.id]===void 0)continue;let y=_[g.id];for(let R in y)l(y[R].object),delete y[R];delete _[g.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function _m(i,e,t){let n;function r(s,a,o){o!==0&&(i.drawArraysInstanced(n,s,a,o),t.update(a,n,o))}this.setMode=function(s){n=s},this.render=function(s,a){i.drawArrays(n,s,a),t.update(a,n,1)},this.renderInstances=r,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,s,0,a,0,o);let l=0;for(let c=0;c<o;c++)l+=a[c];t.update(l,n,1)},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<s.length;h++)r(s[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(n,s,0,a,0,l,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*l[u];t.update(h,n,1)}}}function xm(i,e,t,n){let r;function s(d){if(d==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=t.logarithmicDepthBuffer===!0,c=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:s,textureFormatReadable:function(d){return d===wn||n.convert(d)===i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===ys&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==li&&n.convert(d)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==bn&&!p)},precision:a,logarithmicDepthBuffer:l,reverseDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:i.getParameter(i.MAX_TEXTURE_SIZE),maxCubemapSize:i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:i.getParameter(i.MAX_VERTEX_ATTRIBS),maxVertexUniforms:i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:i.getParameter(i.MAX_VARYING_VECTORS),maxFragmentUniforms:i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:i.getParameter(i.MAX_SAMPLES)}}function ym(i){let e=this,t=null,n=0,r=!1,s=!1,a=new Bn,o=new He,l={value:null,needsUpdate:!1};function c(h,u,d,p){let m=h!==null?h.length:0,x=null;if(m!==0){if(x=l.value,p!==!0||x===null){let f=d+4*m,g=u.matrixWorldInverse;o.getNormalMatrix(g),(x===null||x.length<f)&&(x=new Float32Array(f));for(let v=0,_=d;v!==m;++v,_+=4)a.copy(h[v]).applyMatrix4(g,o),a.normal.toArray(x,_),x[_+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,x}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||r;return r=u,n=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,m=h.clipIntersection,x=h.clipShadows,f=i.get(h);if(!r||p===null||p.length===0||s&&!x)s?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let g=s?0:n,v=4*g,_=f.clippingState||null;l.value=_,_=c(p,u,v,d);for(let y=0;y!==v;++y)_[y]=t[y];f.clippingState=_,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=g}}}function Mm(i){let e=new WeakMap;function t(r,s){return s===Bl?r.mapping=Sr:s===Fl&&(r.mapping=Er),r}function n(r){let s=r.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping;if(s===Bl||s===Fl){if(e.has(r))return t(e.get(r).texture,r.mapping);{let a=r.image;if(a&&a.height>0){let o=new xc(a.height);return o.fromEquirectangularTexture(i,r),e.set(r,o),r.addEventListener("dispose",n),t(o.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap}}}var Wa=class extends hs{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},qu=[.125,.215,.35,.446,.526,.582],Jr=20,Sl=new Wa,Yu=new _e,El=null,bl=0,wl=0,Tl=!1,Ti=(1+Math.sqrt(5))/2,ur=1/Ti,Zu=[new M(-Ti,ur,0),new M(Ti,ur,0),new M(-ur,0,Ti),new M(ur,0,Ti),new M(0,Ti,-ur),new M(0,Ti,ur),new M(-1,1,-1),new M(1,1,-1),new M(-1,1,1),new M(1,1,1)],Xa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){El=this._renderer.getRenderTarget(),bl=this._renderer.getActiveCubeFace(),wl=this._renderer.getActiveMipmapLevel(),Tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$u(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(El,bl,wl),this._renderer.xr.enabled=Tl,e.scissorTest=!1,ma(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Sr||e.mapping===Er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),El=this._renderer.getRenderTarget(),bl=this._renderer.getActiveCubeFace(),wl=this._renderer.getActiveMipmapLevel(),Tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:ys,format:wn,colorSpace:Dr,depthBuffer:!1},r=Ju(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ju(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,u=a-4+1+qu.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);l.push(p);let m=1/p;d>a-4?m=qu[d-a+4-1]:d===0&&(m=0),c.push(m);let x=1/(p-2),f=-x,g=1+x,v=[f,f,g,f,g,g,f,f,g,g,f,g],_=6,y=6,R=3,T=2,I=1,D=new Float32Array(R*y*_),B=new Float32Array(T*y*_),k=new Float32Array(I*y*_);for(let V=0;V<_;V++){let Z=V%3*2/3-1,X=V>2?0:-1,K=[Z,X,0,Z+2/3,X,0,Z+2/3,X+1,0,Z,X,0,Z+2/3,X+1,0,Z,X+1,0];D.set(K,R*y*V),B.set(v,T*y*V);let ee=[V,V,V,V,V,V];k.set(ee,I*y*V)}let j=new et;j.setAttribute("position",new wt(D,R)),j.setAttribute("uv",new wt(B,T)),j.setAttribute("faceIndex",new wt(k,I)),o.push(j),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}})(s)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(Jr),h=new M(0,1,0);return new Zt({name:"SphericalGaussianBlur",defines:{n:Jr,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Mh(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})})(s,e,t)}return r}_compileMaterial(e){let t=new Qe(this._lodPlanes[0],e);this._renderer.compile(t,Sl)}_sceneToCubeUV(e,t,n,r){let s=new Vt(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Yu),l.toneMapping=0,l.autoClear=!1;let u=new hi({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),d=new Qe(new Ar,u),p=!1,m=e.background;m?m.isColor&&(u.color.copy(m),e.background=null,p=!0):(u.color.copy(Yu),p=!0);for(let x=0;x<6;x++){let f=x%3;f===0?(s.up.set(0,a[x],0),s.lookAt(o[x],0,0)):f===1?(s.up.set(0,0,a[x]),s.lookAt(0,o[x],0)):(s.up.set(0,a[x],0),s.lookAt(0,0,o[x]));let g=this._cubeSize;ma(r,f*g,x>2?g:0,g,g),l.setRenderTarget(r),p&&l.render(d,s),l.render(e,s)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Sr||e.mapping===Er;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$u()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ku());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new Qe(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;ma(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,Sl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Zu[(r-s-1)%Zu.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new Qe(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,m=s/p,x=isFinite(s)?1+Math.floor(3*m):Jr;x>Jr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to 20`);let f=[],g=0;for(let y=0;y<Jr;++y){let R=y/m,T=Math.exp(-R*R/2);f.push(T),y===0?g+=T:y<x&&(g+=2*T)}for(let y=0;y<f.length;y++)f[y]=f[y]/g;u.envMap.value=e.texture,u.samples.value=x,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=p,u.mipInt.value=v-n;let _=this._sizeLods[r];ma(t,3*_*(r>v-4?r-v+4:0),4*(this._cubeSize-_),3*_,2*_),l.setRenderTarget(t),l.render(h,Sl)}};function Ju(i,e,t){let n=new Vn(i,e,t);return n.texture.mapping=co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ma(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Ku(){return new Zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mh(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function $u(){return new Zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Mh(){return`

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
	`}function Sm(i){let e=new WeakMap,t=null;function n(r){let s=r.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping,a=s===Bl||s===Fl,o=s===Sr||s===Er;if(a||o){let l=e.get(r),c=l!==void 0?l.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==c)return t===null&&(t=new Xa(i)),l=a?t.fromEquirectangular(r,l):t.fromCubemap(r,l),l.texture.pmremVersion=r.pmremVersion,e.set(r,l),l.texture;if(l!==void 0)return l.texture;{let h=r.image;return a&&h&&h.height>0||o&&h&&(function(u){let d=0,p=6;for(let m=0;m<p;m++)u[m]!==void 0&&d++;return d===p})(h)?(t===null&&(t=new Xa(i)),l=a?t.fromEquirectangular(r):t.fromCubemap(r),l.texture.pmremVersion=r.pmremVersion,e.set(r,l),r.addEventListener("dispose",n),l.texture):null}}}return r},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Em(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&is("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function bm(i,e,t,n){let r={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);for(let u in c.morphAttributes){let d=c.morphAttributes[u];for(let p=0,m=d.length;p<m;p++)e.remove(d[p])}c.removeEventListener("dispose",a),delete r[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(h!==null){let x=h.array;d=h.version;for(let f=0,g=x.length;f<g;f+=3){let v=x[f+0],_=x[f+1],y=x[f+2];c.push(v,_,_,y,y,v)}}else{if(u===void 0)return;{let x=u.array;d=u.version;for(let f=0,g=x.length/3-1;f<g;f+=3){let v=f+0,_=f+1,y=f+2;c.push(v,_,_,y,y,v)}}}let p=new(jd(c)?Va:ka)(c,1);p.version=d;let m=s.get(l);m&&e.remove(m),s.set(l,p)}return{get:function(l,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let u in c)e.update(c[u],i.ARRAY_BUFFER);let h=l.morphAttributes;for(let u in h){let d=h[u];for(let p=0,m=d.length;p<m;p++)e.update(d[p],i.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function wm(i,e,t){let n,r,s;function a(o,l,c){c!==0&&(i.drawElementsInstanced(n,l,r,o*s,c),t.update(l,n,c))}this.setMode=function(o){n=o},this.setIndex=function(o){r=o.type,s=o.bytesPerElement},this.render=function(o,l){i.drawElements(n,l,r,o*s),t.update(l,n,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,l,0,r,o,0,c);let h=0;for(let u=0;u<c;u++)h+=l[u];t.update(h,n,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,l[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(n,l,0,r,o,0,h,0,c);let d=0;for(let p=0;p<c;p++)d+=l[p]*h[p];t.update(d,n,1)}}}function Tm(i){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,r){switch(e.calls++,n){case i.TRIANGLES:e.triangles+=r*(t/3);break;case i.LINES:e.lines+=r*(t/2);break;case i.LINE_STRIP:e.lines+=r*(t-1);break;case i.LINE_LOOP:e.lines+=r*t;break;case i.POINTS:e.points+=r*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function Am(i,e,t){let n=new WeakMap,r=new dt;return{update:function(s,a,o){let l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,u=n.get(a);if(u===void 0||u.count!==h){let D=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",D)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],g=a.morphAttributes.color||[],v=0;d===!0&&(v=1),p===!0&&(v=2),m===!0&&(v=3);let _=a.attributes.position.count*v,y=1;_>e.maxTextureSize&&(y=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let R=new Float32Array(_*y*4*h),T=new Ha(R,_,y,h);T.type=bn,T.needsUpdate=!0;let I=4*v;for(let B=0;B<h;B++){let k=x[B],j=f[B],V=g[B],Z=_*y*4*B;for(let X=0;X<k.count;X++){let K=X*I;d===!0&&(r.fromBufferAttribute(k,X),R[Z+K+0]=r.x,R[Z+K+1]=r.y,R[Z+K+2]=r.z,R[Z+K+3]=0),p===!0&&(r.fromBufferAttribute(j,X),R[Z+K+4]=r.x,R[Z+K+5]=r.y,R[Z+K+6]=r.z,R[Z+K+7]=0),m===!0&&(r.fromBufferAttribute(V,X),R[Z+K+8]=r.x,R[Z+K+9]=r.y,R[Z+K+10]=r.z,R[Z+K+11]=V.itemSize===4?r.w:1)}}u={count:h,texture:T,size:new le(_,y)},n.set(a,u),a.addEventListener("dispose",D)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let d=0;for(let m=0;m<l.length;m++)d+=l[m];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(i,"morphTargetBaseInfluence",p),o.getUniforms().setValue(i,"morphTargetInfluences",l)}o.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}}}function Rm(i,e,t,n){let r=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,l=a.geometry,c=e.get(a,l);if(r.get(c)!==o&&(e.update(c),r.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),r.get(a)!==o&&(t.update(a.instanceMatrix,i.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,i.ARRAY_BUFFER),r.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;r.get(h)!==o&&(h.update(),r.set(h,o))}return c},dispose:function(){r=new WeakMap}}}var ja=class extends Gt{constructor(e,t,n,r,s,a,o,l,c,h=1026){if(h!==ls&&h!==wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ls&&(n=Li),n===void 0&&h===wr&&(n=br),super(null,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Jd=new Gt,Qu=new ja(1,1),Kd=new Ha,$d=new vc,Qd=new Ga,ed=[],td=[],nd=new Float32Array(16),id=new Float32Array(9),rd=new Float32Array(4);function Nr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=ed[r];if(s===void 0&&(s=new Float32Array(r),ed[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function St(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Et(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function uo(i,e){let t=td[e];t===void 0&&(t=new Int32Array(e),td[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Cm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Im(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2fv(this.addr,e),Et(t,e)}}function Pm(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;i.uniform3fv(this.addr,e),Et(t,e)}}function Lm(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4fv(this.addr,e),Et(t,e)}}function Um(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(St(t,n))return;rd.set(n),i.uniformMatrix2fv(this.addr,!1,rd),Et(t,n)}}function Dm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(St(t,n))return;id.set(n),i.uniformMatrix3fv(this.addr,!1,id),Et(t,n)}}function Nm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(St(t,n))return;nd.set(n),i.uniformMatrix4fv(this.addr,!1,nd),Et(t,n)}}function Om(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Bm(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2iv(this.addr,e),Et(t,e)}}function Fm(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3iv(this.addr,e),Et(t,e)}}function zm(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4iv(this.addr,e),Et(t,e)}}function Hm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function km(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2uiv(this.addr,e),Et(t,e)}}function Vm(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3uiv(this.addr,e),Et(t,e)}}function Gm(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4uiv(this.addr,e),Et(t,e)}}function Wm(i,e,t){let n=this.cache,r=t.allocateTextureUnit(),s;n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),this.type===i.SAMPLER_2D_SHADOW?(Qu.compareFunction=515,s=Qu):s=Jd,t.setTexture2D(e||s,r)}function Xm(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||$d,r)}function jm(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Qd,r)}function qm(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Kd,r)}function Ym(i,e){i.uniform1fv(this.addr,e)}function Zm(i,e){let t=Nr(e,this.size,2);i.uniform2fv(this.addr,t)}function Jm(i,e){let t=Nr(e,this.size,3);i.uniform3fv(this.addr,t)}function Km(i,e){let t=Nr(e,this.size,4);i.uniform4fv(this.addr,t)}function $m(i,e){let t=Nr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Qm(i,e){let t=Nr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function eg(i,e){let t=Nr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function tg(i,e){i.uniform1iv(this.addr,e)}function ng(i,e){i.uniform2iv(this.addr,e)}function ig(i,e){i.uniform3iv(this.addr,e)}function rg(i,e){i.uniform4iv(this.addr,e)}function sg(i,e){i.uniform1uiv(this.addr,e)}function ag(i,e){i.uniform2uiv(this.addr,e)}function og(i,e){i.uniform3uiv(this.addr,e)}function lg(i,e){i.uniform4uiv(this.addr,e)}function cg(i,e,t){let n=this.cache,r=e.length,s=uo(t,r);St(n,s)||(i.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Jd,s[a])}function hg(i,e,t){let n=this.cache,r=e.length,s=uo(t,r);St(n,s)||(i.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||$d,s[a])}function ug(i,e,t){let n=this.cache,r=e.length,s=uo(t,r);St(n,s)||(i.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Qd,s[a])}function dg(i,e,t){let n=this.cache,r=e.length,s=uo(t,r);St(n,s)||(i.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Kd,s[a])}var yc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(r){switch(r){case 5126:return Cm;case 35664:return Im;case 35665:return Pm;case 35666:return Lm;case 35674:return Um;case 35675:return Dm;case 35676:return Nm;case 5124:case 35670:return Om;case 35667:case 35671:return Bm;case 35668:case 35672:return Fm;case 35669:case 35673:return zm;case 5125:return Hm;case 36294:return km;case 36295:return Vm;case 36296:return Gm;case 35678:case 36198:case 36298:case 36306:case 35682:return Wm;case 35679:case 36299:case 36307:return Xm;case 35680:case 36300:case 36308:case 36293:return jm;case 36289:case 36303:case 36311:case 36292:return qm}})(t.type)}},Mc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(r){switch(r){case 5126:return Ym;case 35664:return Zm;case 35665:return Jm;case 35666:return Km;case 35674:return $m;case 35675:return Qm;case 35676:return eg;case 5124:case 35670:return tg;case 35667:case 35671:return ng;case 35668:case 35672:return ig;case 35669:case 35673:return rg;case 5125:return sg;case 36294:return ag;case 36295:return og;case 36296:return lg;case 35678:case 36198:case 36298:case 36306:case 35682:return cg;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return dg}})(t.type)}},Sc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},Al=/(\w+)(\])?(\[|\.)?/g;function sd(i,e){i.seq.push(e),i.map[e.id]=e}function pg(i,e,t){let n=i.name,r=n.length;for(Al.lastIndex=0;;){let s=Al.exec(n),a=Al.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===r){sd(t,c===void 0?new yc(o,i,e):new Mc(o,i,e));break}{let h=t.map[o];h===void 0&&(h=new Sc(o),sd(t,h)),t=h}}}var Mr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r);pg(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function ad(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var fg=0,od=new He;function ld(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let m=p+1;h.push(`${m===l?">":" "} ${m}: ${c[p]}`)}return h.join(`
`)})(i.getShaderSource(e),a)}return r}function mg(i,e){let t=(function(n){Je._getMatrix(od,Je.workingColorSpace,n);let r=`mat3( ${od.elements.map((s=>s.toFixed(4)))} )`;switch(Je.getTransfer(n)){case ho:return[r,"LinearTransferOETF"];case nt:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[r,"LinearTransferOETF"]}})(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function gg(i,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ga=new M;function vg(){return Je.getLuminanceCoefficients(ga),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${ga.x.toFixed(4)}, ${ga.y.toFixed(4)}, ${ga.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kr(i){return i!==""}function cd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var _g=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ec(i){return i.replace(_g,yg)}var xg=new Map;function yg(i,e){let t=Ge[e];if(t===void 0){let n=xg.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return Ec(t)}var Mg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ud(i){return i.replace(Mg,Sg)}function Sg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function dd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Eg(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(j){let V="SHADOWMAP_TYPE_BASIC";return j.shadowMapType===1?V="SHADOWMAP_TYPE_PCF":j.shadowMapType===2?V="SHADOWMAP_TYPE_PCF_SOFT":j.shadowMapType===3&&(V="SHADOWMAP_TYPE_VSM"),V})(t),c=(function(j){let V="ENVMAP_TYPE_CUBE";if(j.envMap)switch(j.envMapMode){case Sr:case Er:V="ENVMAP_TYPE_CUBE";break;case co:V="ENVMAP_TYPE_CUBE_UV"}return V})(t),h=(function(j){let V="ENVMAP_MODE_REFLECTION";return j.envMap&&j.envMapMode===Er&&(V="ENVMAP_MODE_REFRACTION"),V})(t),u=(function(j){let V="ENVMAP_BLENDING_NONE";if(j.envMap)switch(j.combine){case 0:V="ENVMAP_BLENDING_MULTIPLY";break;case 1:V="ENVMAP_BLENDING_MIX";break;case 2:V="ENVMAP_BLENDING_ADD"}return V})(t),d=(function(j){let V=j.envMapCubeUVHeight;if(V===null)return null;let Z=Math.log2(V)-2,X=1/V;return{texelWidth:1/(3*Math.max(Math.pow(2,Z),112)),texelHeight:X,maxMip:Z}})(t),p=(function(j){return[j.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",j.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)})(t),m=(function(j){let V=[];for(let Z in j){let X=j[Z];X!==!1&&V.push("#define "+Z+" "+X)}return V.join(`
`)})(s),x=r.createProgram(),f,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Kr).join(`
`),f.length>0&&(f+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Kr).join(`
`),g.length>0&&(g+=`
`)):(f=[dd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),g=[dd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Ge.tonemapping_pars_fragment:"",t.toneMapping!==0?gg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,mg("linearToOutputTexel",t.outputColorSpace),vg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Kr).join(`
`)),a=Ec(a),a=cd(a,t),a=hd(a,t),o=Ec(o),o=cd(o,t),o=hd(o,t),a=ud(a),o=ud(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,g=["#define varying in",t.glslVersion===Tu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let _=v+f+a,y=v+g+o,R=ad(r,r.VERTEX_SHADER,_),T=ad(r,r.FRAGMENT_SHADER,y);function I(j){if(i.debug.checkShaderErrors){let V=r.getProgramInfoLog(x).trim(),Z=r.getShaderInfoLog(R).trim(),X=r.getShaderInfoLog(T).trim(),K=!0,ee=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,R,T);else{let oe=ld(r,R,"vertex"),ie=ld(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+V+`
`+oe+`
`+ie)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):Z!==""&&X!==""||(ee=!1);ee&&(j.diagnostics={runnable:K,programLog:V,vertexShader:{log:Z,prefix:f},fragmentShader:{log:X,prefix:g}})}r.deleteShader(R),r.deleteShader(T),D=new Mr(r,x),B=(function(V,Z){let X={},K=V.getProgramParameter(Z,V.ACTIVE_ATTRIBUTES);for(let ee=0;ee<K;ee++){let oe=V.getActiveAttrib(Z,ee),ie=oe.name,be=1;oe.type===V.FLOAT_MAT2&&(be=2),oe.type===V.FLOAT_MAT3&&(be=3),oe.type===V.FLOAT_MAT4&&(be=4),X[ie]={type:oe.type,location:V.getAttribLocation(Z,ie),locationSize:be}}return X})(r,x)}let D,B;r.attachShader(x,R),r.attachShader(x,T),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x),this.getUniforms=function(){return D===void 0&&I(this),D},this.getAttributes=function(){return B===void 0&&I(this),B};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=r.getProgramParameter(x,37297)),k},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=T,this}var bg=0,bc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new wc(e),t.set(e,n)),n}},wc=class{constructor(e){this.id=bg++,this.code=e,this.usedTimes=0}};function wg(i,e,t,n,r,s,a){let o=new cs,l=new bc,c=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures,p=r.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(f){return c.add(f),f===0?"uv":`uv${f}`}return{getParameters:function(f,g,v,_,y){let R=_.fog,T=y.geometry,I=f.isMeshStandardMaterial?_.environment:null,D=(f.isMeshStandardMaterial?t:e).get(f.envMap||I),B=D&&D.mapping===co?D.image.height:null,k=m[f.type];f.precision!==null&&(p=r.getMaxPrecision(f.precision),p!==f.precision&&console.warn("THREE.WebGLProgram.getParameters:",f.precision,"not supported, using",p,"instead."));let j=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,V=j!==void 0?j.length:0,Z,X,K,ee,oe=0;if(T.morphAttributes.position!==void 0&&(oe=1),T.morphAttributes.normal!==void 0&&(oe=2),T.morphAttributes.color!==void 0&&(oe=3),k){let Ye=Sn[k];Z=Ye.vertexShader,X=Ye.fragmentShader}else Z=f.vertexShader,X=f.fragmentShader,l.update(f),K=l.getVertexShaderID(f),ee=l.getFragmentShaderID(f);let ie=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),Te=y.isInstancedMesh===!0,ae=y.isBatchedMesh===!0,he=!!f.map,ye=!!f.matcap,Me=!!D,pe=!!f.aoMap,w=!!f.lightMap,b=!!f.bumpMap,N=!!f.normalMap,L=!!f.displacementMap,A=!!f.emissiveMap,P=!!f.metalnessMap,S=!!f.roughnessMap,C=f.anisotropy>0,F=f.clearcoat>0,te=f.dispersion>0,z=f.iridescence>0,$=f.sheen>0,Q=f.transmission>0,se=C&&!!f.anisotropyMap,G=F&&!!f.clearcoatMap,H=F&&!!f.clearcoatNormalMap,O=F&&!!f.clearcoatRoughnessMap,ne=z&&!!f.iridescenceMap,ce=z&&!!f.iridescenceThicknessMap,ue=$&&!!f.sheenColorMap,Y=$&&!!f.sheenRoughnessMap,me=!!f.specularMap,Ce=!!f.specularColorMap,Ue=!!f.specularIntensityMap,fe=Q&&!!f.transmissionMap,xe=Q&&!!f.thicknessMap,Ie=!!f.gradientMap,pt=!!f.alphaMap,$e=f.alphaTest>0,ke=!!f.alphaHash,ot=!!f.extensions,vt=0;f.toneMapped&&(ie!==null&&ie.isXRRenderTarget!==!0||(vt=i.toneMapping));let U={shaderID:k,shaderType:f.type,shaderName:f.name,vertexShader:Z,fragmentShader:X,defines:f.defines,customVertexShaderID:K,customFragmentShaderID:ee,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:p,batching:ae,batchingColor:ae&&y._colorsTexture!==null,instancing:Te,instancingColor:Te&&y.instanceColor!==null,instancingMorph:Te&&y.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Dr,alphaToCoverage:!!f.alphaToCoverage,map:he,matcap:ye,envMap:Me,envMapMode:Me&&D.mapping,envMapCubeUVHeight:B,aoMap:pe,lightMap:w,bumpMap:b,normalMap:N,displacementMap:d&&L,emissiveMap:A,normalMapObjectSpace:N&&f.normalMapType===1,normalMapTangentSpace:N&&f.normalMapType===0,metalnessMap:P,roughnessMap:S,anisotropy:C,anisotropyMap:se,clearcoat:F,clearcoatMap:G,clearcoatNormalMap:H,clearcoatRoughnessMap:O,dispersion:te,iridescence:z,iridescenceMap:ne,iridescenceThicknessMap:ce,sheen:$,sheenColorMap:ue,sheenRoughnessMap:Y,specularMap:me,specularColorMap:Ce,specularIntensityMap:Ue,transmission:Q,transmissionMap:fe,thicknessMap:xe,gradientMap:Ie,opaque:f.transparent===!1&&f.blending===1&&f.alphaToCoverage===!1,alphaMap:pt,alphaTest:$e,alphaHash:ke,combine:f.combine,mapUv:he&&x(f.map.channel),aoMapUv:pe&&x(f.aoMap.channel),lightMapUv:w&&x(f.lightMap.channel),bumpMapUv:b&&x(f.bumpMap.channel),normalMapUv:N&&x(f.normalMap.channel),displacementMapUv:L&&x(f.displacementMap.channel),emissiveMapUv:A&&x(f.emissiveMap.channel),metalnessMapUv:P&&x(f.metalnessMap.channel),roughnessMapUv:S&&x(f.roughnessMap.channel),anisotropyMapUv:se&&x(f.anisotropyMap.channel),clearcoatMapUv:G&&x(f.clearcoatMap.channel),clearcoatNormalMapUv:H&&x(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&x(f.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&x(f.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&x(f.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&x(f.sheenColorMap.channel),sheenRoughnessMapUv:Y&&x(f.sheenRoughnessMap.channel),specularMapUv:me&&x(f.specularMap.channel),specularColorMapUv:Ce&&x(f.specularColorMap.channel),specularIntensityMapUv:Ue&&x(f.specularIntensityMap.channel),transmissionMapUv:fe&&x(f.transmissionMap.channel),thicknessMapUv:xe&&x(f.thicknessMap.channel),alphaMapUv:pt&&x(f.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(N||C),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,pointsUvs:y.isPoints===!0&&!!T.attributes.uv&&(he||pt),fog:!!R,useFog:f.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:f.flatShading===!0,sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:be,skinning:y.isSkinnedMesh===!0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:oe,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:f.dithering,shadowMapEnabled:i.shadowMap.enabled&&v.length>0,shadowMapType:i.shadowMap.type,toneMapping:vt,decodeVideoTexture:he&&f.map.isVideoTexture===!0&&Je.getTransfer(f.map.colorSpace)===nt,decodeVideoTextureEmissive:A&&f.emissiveMap.isVideoTexture===!0&&Je.getTransfer(f.emissiveMap.colorSpace)===nt,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===2,flipSided:f.side===1,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:ot&&f.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&f.extensions.multiDraw===!0||ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return U.vertexUv1s=c.has(1),U.vertexUv2s=c.has(2),U.vertexUv3s=c.has(3),c.clear(),U},getProgramCacheKey:function(f){let g=[];if(f.shaderID?g.push(f.shaderID):(g.push(f.customVertexShaderID),g.push(f.customFragmentShaderID)),f.defines!==void 0)for(let v in f.defines)g.push(v),g.push(f.defines[v]);return f.isRawShaderMaterial===!1&&((function(v,_){v.push(_.precision),v.push(_.outputColorSpace),v.push(_.envMapMode),v.push(_.envMapCubeUVHeight),v.push(_.mapUv),v.push(_.alphaMapUv),v.push(_.lightMapUv),v.push(_.aoMapUv),v.push(_.bumpMapUv),v.push(_.normalMapUv),v.push(_.displacementMapUv),v.push(_.emissiveMapUv),v.push(_.metalnessMapUv),v.push(_.roughnessMapUv),v.push(_.anisotropyMapUv),v.push(_.clearcoatMapUv),v.push(_.clearcoatNormalMapUv),v.push(_.clearcoatRoughnessMapUv),v.push(_.iridescenceMapUv),v.push(_.iridescenceThicknessMapUv),v.push(_.sheenColorMapUv),v.push(_.sheenRoughnessMapUv),v.push(_.specularMapUv),v.push(_.specularColorMapUv),v.push(_.specularIntensityMapUv),v.push(_.transmissionMapUv),v.push(_.thicknessMapUv),v.push(_.combine),v.push(_.fogExp2),v.push(_.sizeAttenuation),v.push(_.morphTargetsCount),v.push(_.morphAttributeCount),v.push(_.numDirLights),v.push(_.numPointLights),v.push(_.numSpotLights),v.push(_.numSpotLightMaps),v.push(_.numHemiLights),v.push(_.numRectAreaLights),v.push(_.numDirLightShadows),v.push(_.numPointLightShadows),v.push(_.numSpotLightShadows),v.push(_.numSpotLightShadowsWithMaps),v.push(_.numLightProbes),v.push(_.shadowMapType),v.push(_.toneMapping),v.push(_.numClippingPlanes),v.push(_.numClipIntersection),v.push(_.depthPacking)})(g,f),(function(v,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),v.push(o.mask)})(g,f),g.push(i.outputColorSpace)),g.push(f.customProgramCacheKey),g.join()},getUniforms:function(f){let g=m[f.type],v;if(g){let _=Sn[g];v=um.clone(_.uniforms)}else v=f.uniforms;return v},acquireProgram:function(f,g){let v;for(let _=0,y=h.length;_<y;_++){let R=h[_];if(R.cacheKey===g){v=R,++v.usedTimes;break}}return v===void 0&&(v=new Eg(i,g,f,s),h.push(v)),v},releaseProgram:function(f){if(--f.usedTimes==0){let g=h.indexOf(f);h[g]=h[h.length-1],h.pop(),f.destroy()}},releaseShaderCache:function(f){l.remove(f)},programs:h,dispose:function(){l.dispose()}}}function Tg(){let i=new WeakMap;return{has:function(e){return i.has(e)},get:function(e){let t=i.get(e);return t===void 0&&(t={},i.set(e,t)),t},remove:function(e){i.delete(e)},update:function(e,t,n){i.get(e)[t]=n},dispose:function(){i=new WeakMap}}}function Ag(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function pd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function fd(){let i=[],e=0,t=[],n=[],r=[];function s(a,o,l,c,h,u){let d=i[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},i[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:r,init:function(){e=0,t.length=0,n.length=0,r.length=0},push:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.push(d):l.transparent===!0?r.push(d):t.push(d)},unshift:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.unshift(d):l.transparent===!0?r.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=i.length;a<o;a++){let l=i[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||Ag),n.length>1&&n.sort(o||pd),r.length>1&&r.sort(o||pd)}}}function Rg(){let i=new WeakMap;return{get:function(e,t){let n=i.get(e),r;return n===void 0?(r=new fd,i.set(e,[r])):t>=n.length?(r=new fd,n.push(r)):r=n[t],r},dispose:function(){i=new WeakMap}}}function Cg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new _e};break;case"SpotLight":t={position:new M,direction:new M,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new _e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":t={color:new _e,position:new M,halfWidth:new M,halfHeight:new M}}return i[e.id]=t,t}}}var Ig=0;function Pg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Lg(i){let e=new Cg,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new M);let r=new M,s=new Le,a=new Le;return{setup:function(o){let l=0,c=0,h=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let u=0,d=0,p=0,m=0,x=0,f=0,g=0,v=0,_=0,y=0,R=0;o.sort(Pg);for(let I=0,D=o.length;I<D;I++){let B=o[I],k=B.color,j=B.intensity,V=B.distance,Z=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)l+=k.r*j,c+=k.g*j,h+=k.b*j;else if(B.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(B.sh.coefficients[X],j);R++}else if(B.isDirectionalLight){let X=e.get(B);if(X.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let K=B.shadow,ee=t.get(B);ee.shadowIntensity=K.intensity,ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize=K.mapSize,n.directionalShadow[u]=ee,n.directionalShadowMap[u]=Z,n.directionalShadowMatrix[u]=B.shadow.matrix,f++}n.directional[u]=X,u++}else if(B.isSpotLight){let X=e.get(B);X.position.setFromMatrixPosition(B.matrixWorld),X.color.copy(k).multiplyScalar(j),X.distance=V,X.coneCos=Math.cos(B.angle),X.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),X.decay=B.decay,n.spot[p]=X;let K=B.shadow;if(B.map&&(n.spotLightMap[_]=B.map,_++,K.updateMatrices(B),B.castShadow&&y++),n.spotLightMatrix[p]=K.matrix,B.castShadow){let ee=t.get(B);ee.shadowIntensity=K.intensity,ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize=K.mapSize,n.spotShadow[p]=ee,n.spotShadowMap[p]=Z,v++}p++}else if(B.isRectAreaLight){let X=e.get(B);X.color.copy(k).multiplyScalar(j),X.halfWidth.set(.5*B.width,0,0),X.halfHeight.set(0,.5*B.height,0),n.rectArea[m]=X,m++}else if(B.isPointLight){let X=e.get(B);if(X.color.copy(B.color).multiplyScalar(B.intensity),X.distance=B.distance,X.decay=B.decay,B.castShadow){let K=B.shadow,ee=t.get(B);ee.shadowIntensity=K.intensity,ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize=K.mapSize,ee.shadowCameraNear=K.camera.near,ee.shadowCameraFar=K.camera.far,n.pointShadow[d]=ee,n.pointShadowMap[d]=Z,n.pointShadowMatrix[d]=B.shadow.matrix,g++}n.point[d]=X,d++}else if(B.isHemisphereLight){let X=e.get(B);X.skyColor.copy(B.color).multiplyScalar(j),X.groundColor.copy(B.groundColor).multiplyScalar(j),n.hemi[x]=X,x++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=c,n.ambient[2]=h;let T=n.hash;T.directionalLength===u&&T.pointLength===d&&T.spotLength===p&&T.rectAreaLength===m&&T.hemiLength===x&&T.numDirectionalShadows===f&&T.numPointShadows===g&&T.numSpotShadows===v&&T.numSpotMaps===_&&T.numLightProbes===R||(n.directional.length=u,n.spot.length=p,n.rectArea.length=m,n.point.length=d,n.hemi.length=x,n.directionalShadow.length=f,n.directionalShadowMap.length=f,n.pointShadow.length=g,n.pointShadowMap.length=g,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=f,n.pointShadowMatrix.length=g,n.spotLightMatrix.length=v+_-y,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=R,T.directionalLength=u,T.pointLength=d,T.spotLength=p,T.rectAreaLength=m,T.hemiLength=x,T.numDirectionalShadows=f,T.numPointShadows=g,T.numSpotShadows=v,T.numSpotMaps=_,T.numLightProbes=R,n.version=Ig++)},setupView:function(o,l){let c=0,h=0,u=0,d=0,p=0,m=l.matrixWorldInverse;for(let x=0,f=o.length;x<f;x++){let g=o[x];if(g.isDirectionalLight){let v=n.directional[c];v.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),c++}else if(g.isSpotLight){let v=n.spot[u];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),u++}else if(g.isRectAreaLight){let v=n.rectArea[d];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(g.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(.5*g.width,0,0),v.halfHeight.set(0,.5*g.height,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),d++}else if(g.isPointLight){let v=n.point[h];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(m),h++}else if(g.isHemisphereLight){let v=n.hemi[p];v.direction.setFromMatrixPosition(g.matrixWorld),v.direction.transformDirection(m),p++}}},state:n}}function md(i){let e=new Lg(i),t=[],n=[],r={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){r.camera=s,t.length=0,n.length=0},state:r,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){n.push(s)}}}function Ug(i){let e=new WeakMap;return{get:function(t,n=0){let r=e.get(t),s;return r===void 0?(s=new md(i),e.set(t,[s])):n>=r.length?(s=new md(i),r.push(s)):s=r[n],s},dispose:function(){e=new WeakMap}}}var Tc=class extends Gn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ac=class extends Gn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Dg(i,e,t){let n=new Cr,r=new le,s=new le,a=new dt,o=new Tc({depthPacking:3201}),l=new Ac,c={},h=t.maxTextureSize,u={[_f]:1,[ph]:0,[Tn]:2},d=new Zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new et;m.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Qe(m,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let g=this.type;function v(T,I){let D=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Vn(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(I,null,D,d,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(I,null,D,p,x,null)}function _(T,I,D,B){let k=null,j=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(j!==void 0)k=j;else if(k=D.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let V=k.uuid,Z=I.uuid,X=c[V];X===void 0&&(X={},c[V]=X);let K=X[Z];K===void 0&&(K=k.clone(),X[Z]=K,I.addEventListener("dispose",R)),k=K}return k.visible=I.visible,k.wireframe=I.wireframe,k.side=B===3?I.shadowSide!==null?I.shadowSide:I.side:I.shadowSide!==null?I.shadowSide:u[I.side],k.alphaMap=I.alphaMap,k.alphaTest=I.alphaTest,k.map=I.map,k.clipShadows=I.clipShadows,k.clippingPlanes=I.clippingPlanes,k.clipIntersection=I.clipIntersection,k.displacementMap=I.displacementMap,k.displacementScale=I.displacementScale,k.displacementBias=I.displacementBias,k.wireframeLinewidth=I.wireframeLinewidth,k.linewidth=I.linewidth,D.isPointLight===!0&&k.isMeshDistanceMaterial===!0&&(i.properties.get(k).light=D),k}function y(T,I,D,B,k){if(T.visible===!1)return;if(T.layers.test(I.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&k===3)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);let V=e.update(T),Z=T.material;if(Array.isArray(Z)){let X=V.groups;for(let K=0,ee=X.length;K<ee;K++){let oe=X[K],ie=Z[oe.materialIndex];if(ie&&ie.visible){let be=_(T,ie,B,k);T.onBeforeShadow(i,T,I,D,V,be,oe),i.renderBufferDirect(D,null,V,be,T,oe),T.onAfterShadow(i,T,I,D,V,be,oe)}}}else if(Z.visible){let X=_(T,Z,B,k);T.onBeforeShadow(i,T,I,D,V,X,null),i.renderBufferDirect(D,null,V,X,T,null),T.onAfterShadow(i,T,I,D,V,X,null)}}let j=T.children;for(let V=0,Z=j.length;V<Z;V++)y(j[V],I,D,B,k)}function R(T){T.target.removeEventListener("dispose",R);for(let I in c){let D=c[I],B=T.target.uuid;B in D&&(D[B].dispose(),delete D[B])}}this.render=function(T,I,D){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||T.length===0)return;let B=i.getRenderTarget(),k=i.getActiveCubeFace(),j=i.getActiveMipmapLevel(),V=i.state;V.setBlending(0),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let Z=g!==3&&this.type===3,X=g===3&&this.type!==3;for(let K=0,ee=T.length;K<ee;K++){let oe=T[K],ie=oe.shadow;if(ie===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;r.copy(ie.mapSize);let be=ie.getFrameExtents();if(r.multiply(be),s.copy(ie.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/be.x),r.x=s.x*be.x,ie.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/be.y),r.y=s.y*be.y,ie.mapSize.y=s.y)),ie.map===null||Z===!0||X===!0){let ae=this.type!==3?{minFilter:fn,magFilter:fn}:{};ie.map!==null&&ie.map.dispose(),ie.map=new Vn(r.x,r.y,ae),ie.map.texture.name=oe.name+".shadowMap",ie.camera.updateProjectionMatrix()}i.setRenderTarget(ie.map),i.clear();let Te=ie.getViewportCount();for(let ae=0;ae<Te;ae++){let he=ie.getViewport(ae);a.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),V.viewport(a),ie.updateMatrices(oe,ae),n=ie.getFrustum(),y(I,D,ie.camera,oe,this.type)}ie.isPointLightShadow!==!0&&this.type===3&&v(ie,D),ie.needsUpdate=!1}g=this.type,f.needsUpdate=!1,i.setRenderTarget(B,k,j)}}var Ng={[Df]:1,[Of]:6,[Ff]:7,[Bf]:5,[Nf]:0,[Hf]:2,[kf]:4,[zf]:3};function Og(i,e){let t=new function(){let S=!1,C=new dt,F=null,te=new dt(0,0,0,0);return{setMask:function(z){F===z||S||(i.colorMask(z,z,z,z),F=z)},setLocked:function(z){S=z},setClear:function(z,$,Q,se,G){G===!0&&(z*=se,$*=se,Q*=se),C.set(z,$,Q,se),te.equals(C)===!1&&(i.clearColor(z,$,Q,se),te.copy(C))},reset:function(){S=!1,F=null,te.set(-1,0,0,0)}}},n=new function(){let S=!1,C=!1,F=null,te=null,z=null;return{setReversed:function($){if(C!==$){let Q=e.get("EXT_clip_control");C?Q.clipControlEXT(Q.LOWER_LEFT_EXT,Q.ZERO_TO_ONE_EXT):Q.clipControlEXT(Q.LOWER_LEFT_EXT,Q.NEGATIVE_ONE_TO_ONE_EXT);let se=z;z=null,this.setClear(se)}C=$},getReversed:function(){return C},setTest:function($){$?Me(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function($){F===$||S||(i.depthMask($),F=$)},setFunc:function($){if(C&&($=Ng[$]),te!==$){switch($){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:default:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL)}te=$}},setLocked:function($){S=$},setClear:function($){z!==$&&(C&&($=1-$),i.clearDepth($),z=$)},reset:function(){S=!1,F=null,te=null,z=null,C=!1}}},r=new function(){let S=!1,C=null,F=null,te=null,z=null,$=null,Q=null,se=null,G=null;return{setTest:function(H){S||(H?Me(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(H){C===H||S||(i.stencilMask(H),C=H)},setFunc:function(H,O,ne){F===H&&te===O&&z===ne||(i.stencilFunc(H,O,ne),F=H,te=O,z=ne)},setOp:function(H,O,ne){$===H&&Q===O&&se===ne||(i.stencilOp(H,O,ne),$=H,Q=O,se=ne)},setLocked:function(H){S=H},setClear:function(H){G!==H&&(i.clearStencil(H),G=H)},reset:function(){S=!1,C=null,F=null,te=null,z=null,$=null,Q=null,se=null,G=null}}},s=new WeakMap,a=new WeakMap,o={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,m=null,x=null,f=null,g=null,v=null,_=null,y=new _e(0,0,0),R=0,T=!1,I=null,D=null,B=null,k=null,j=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,X=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(K)[1]),Z=X>=1):K.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Z=X>=2);let ee=null,oe={},ie=i.getParameter(i.SCISSOR_BOX),be=i.getParameter(i.VIEWPORT),Te=new dt().fromArray(ie),ae=new dt().fromArray(be);function he(S,C,F,te){let z=new Uint8Array(4),$=i.createTexture();i.bindTexture(S,$),i.texParameteri(S,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(S,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Q=0;Q<F;Q++)S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY?i.texImage3D(C,0,i.RGBA,1,1,te,0,i.RGBA,i.UNSIGNED_BYTE,z):i.texImage2D(C+Q,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,z);return $}let ye={};function Me(S){o[S]!==!0&&(i.enable(S),o[S]=!0)}function pe(S){o[S]!==!1&&(i.disable(S),o[S]=!1)}ye[i.TEXTURE_2D]=he(i.TEXTURE_2D,i.TEXTURE_2D,1),ye[i.TEXTURE_CUBE_MAP]=he(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[i.TEXTURE_2D_ARRAY]=he(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ye[i.TEXTURE_3D]=he(i.TEXTURE_3D,i.TEXTURE_3D,1,1),t.setClear(0,0,0,1),n.setClear(1),r.setClear(0),Me(i.DEPTH_TEST),n.setFunc(3),L(!1),A(1),Me(i.CULL_FACE),N(0);let w={[Ai]:i.FUNC_ADD,[xf]:i.FUNC_SUBTRACT,[yf]:i.FUNC_REVERSE_SUBTRACT};w[103]=i.MIN,w[104]=i.MAX;let b={[Mf]:i.ZERO,[Sf]:i.ONE,[Ef]:i.SRC_COLOR,[Nl]:i.SRC_ALPHA,[Cf]:i.SRC_ALPHA_SATURATE,[Af]:i.DST_COLOR,[wf]:i.DST_ALPHA,[bf]:i.ONE_MINUS_SRC_COLOR,[Ol]:i.ONE_MINUS_SRC_ALPHA,[Rf]:i.ONE_MINUS_DST_COLOR,[Tf]:i.ONE_MINUS_DST_ALPHA,[If]:i.CONSTANT_COLOR,[Pf]:i.ONE_MINUS_CONSTANT_COLOR,[Lf]:i.CONSTANT_ALPHA,[Uf]:i.ONE_MINUS_CONSTANT_ALPHA};function N(S,C,F,te,z,$,Q,se,G,H){if(S!==0){if(d===!1&&(Me(i.BLEND),d=!0),S===5)z=z||C,$=$||F,Q=Q||te,C===m&&z===g||(i.blendEquationSeparate(w[C],w[z]),m=C,g=z),F===x&&te===f&&$===v&&Q===_||(i.blendFuncSeparate(b[F],b[te],b[$],b[Q]),x=F,f=te,v=$,_=Q),se.equals(y)!==!1&&G===R||(i.blendColor(se.r,se.g,se.b,G),y.copy(se),R=G),p=S,T=!1;else if(S!==p||H!==T){if(m===Ai&&g===Ai||(i.blendEquation(i.FUNC_ADD),m=Ai,g=Ai),H)switch(S){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S)}else switch(S){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S)}x=null,f=null,v=null,_=null,y.set(0,0,0),R=0,p=S,T=H}}else d===!0&&(pe(i.BLEND),d=!1)}function L(S){I!==S&&(S?i.frontFace(i.CW):i.frontFace(i.CCW),I=S)}function A(S){S!==0?(Me(i.CULL_FACE),S!==D&&(S===1?i.cullFace(i.BACK):S===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),D=S}function P(S,C,F){S?(Me(i.POLYGON_OFFSET_FILL),k===C&&j===F||(i.polygonOffset(C,F),k=C,j=F)):pe(i.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:n,stencil:r},enable:Me,disable:pe,bindFramebuffer:function(S,C){return l[S]!==C&&(i.bindFramebuffer(S,C),l[S]=C,S===i.DRAW_FRAMEBUFFER&&(l[i.FRAMEBUFFER]=C),S===i.FRAMEBUFFER&&(l[i.DRAW_FRAMEBUFFER]=C),!0)},drawBuffers:function(S,C){let F=h,te=!1;if(S){F=c.get(C),F===void 0&&(F=[],c.set(C,F));let z=S.textures;if(F.length!==z.length||F[0]!==i.COLOR_ATTACHMENT0){for(let $=0,Q=z.length;$<Q;$++)F[$]=i.COLOR_ATTACHMENT0+$;F.length=z.length,te=!0}}else F[0]!==i.BACK&&(F[0]=i.BACK,te=!0);te&&i.drawBuffers(F)},useProgram:function(S){return u!==S&&(i.useProgram(S),u=S,!0)},setBlending:N,setMaterial:function(S,C){S.side===2?pe(i.CULL_FACE):Me(i.CULL_FACE);let F=S.side===1;C&&(F=!F),L(F),S.blending===1&&S.transparent===!1?N(0):N(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),n.setFunc(S.depthFunc),n.setTest(S.depthTest),n.setMask(S.depthWrite),t.setMask(S.colorWrite);let te=S.stencilWrite;r.setTest(te),te&&(r.setMask(S.stencilWriteMask),r.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),r.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),P(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?Me(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:L,setCullFace:A,setLineWidth:function(S){S!==B&&(Z&&i.lineWidth(S),B=S)},setPolygonOffset:P,setScissorTest:function(S){S?Me(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)},activeTexture:function(S){S===void 0&&(S=i.TEXTURE0+V-1),ee!==S&&(i.activeTexture(S),ee=S)},bindTexture:function(S,C,F){F===void 0&&(F=ee===null?i.TEXTURE0+V-1:ee);let te=oe[F];te===void 0&&(te={type:void 0,texture:void 0},oe[F]=te),te.type===S&&te.texture===C||(ee!==F&&(i.activeTexture(F),ee=F),i.bindTexture(S,C||ye[S]),te.type=S,te.texture=C)},unbindTexture:function(){let S=oe[ee];S!==void 0&&S.type!==void 0&&(i.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)},compressedTexImage2D:function(){try{i.compressedTexImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexImage3D:function(){try{i.compressedTexImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texImage2D:function(){try{i.texImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texImage3D:function(){try{i.texImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},updateUBOMapping:function(S,C){let F=a.get(C);F===void 0&&(F=new WeakMap,a.set(C,F));let te=F.get(S);te===void 0&&(te=i.getUniformBlockIndex(C,S.name),F.set(S,te))},uniformBlockBinding:function(S,C){let F=a.get(C).get(S);s.get(C)!==F&&(i.uniformBlockBinding(C,F,S.__bindingPointIndex),s.set(C,F))},texStorage2D:function(){try{i.texStorage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texStorage3D:function(){try{i.texStorage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texSubImage2D:function(){try{i.texSubImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texSubImage3D:function(){try{i.texSubImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexSubImage2D:function(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexSubImage3D:function(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},scissor:function(S){Te.equals(S)===!1&&(i.scissor(S.x,S.y,S.z,S.w),Te.copy(S))},viewport:function(S){ae.equals(S)===!1&&(i.viewport(S.x,S.y,S.z,S.w),ae.copy(S))},reset:function(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),n.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),o={},ee=null,oe={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,m=null,x=null,f=null,g=null,v=null,_=null,y=new _e(0,0,0),R=0,T=!1,I=null,D=null,B=null,k=null,j=null,Te.set(0,0,i.canvas.width,i.canvas.height),ae.set(0,0,i.canvas.width,i.canvas.height),t.reset(),n.reset(),r.reset()}}}function gd(i,e,t,n){let r=(function(s){switch(s){case li:case Bd:return{byteLength:1,components:1};case os:case Fd:case ys:return{byteLength:2,components:1};case mh:case gh:return{byteLength:2,components:4};case Li:case fh:case bn:return{byteLength:4,components:1};case zd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(n);switch(t){case Hd:case Vd:return i*e;case Gd:return i*e*2;case vh:case _h:return i*e/r.components*r.byteLength;case Wd:case xh:return i*e*2/r.components*r.byteLength;case kd:return i*e*3/r.components*r.byteLength;case wn:case yh:return i*e*4/r.components*r.byteLength;case Ia:case Pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case La:case Ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kl:case Gl:return Math.max(i,16)*Math.max(e,8)/4;case Hl:case Vl:return Math.max(i,8)*Math.max(e,8)/2;case Wl:case Xl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case jl:case ql:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case $l:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ec:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case tc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case nc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ic:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case rc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case sc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ac:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Da:case oc:case lc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Xd:case cc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case hc:case uc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Bg(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new le,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,b){return p?new OffscreenCanvas(w,b):Fa("canvas")}function x(w,b,N){let L=1,A=pe(w);if((A.width>N||A.height>N)&&(L=N/Math.max(A.width,A.height)),L<1){if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let P=Math.floor(L*A.width),S=Math.floor(L*A.height);u===void 0&&(u=m(P,S));let C=b?m(P,S):u;return C.width=P,C.height=S,C.getContext("2d").drawImage(w,0,0,P,S),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+P+"x"+S+")."),C}return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),w}return w}function f(w){return w.generateMipmaps}function g(w){i.generateMipmap(w)}function v(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(w,b,N,L,A=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let P=b;if(b===i.RED&&(N===i.FLOAT&&(P=i.R32F),N===i.HALF_FLOAT&&(P=i.R16F),N===i.UNSIGNED_BYTE&&(P=i.R8)),b===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(P=i.R8UI),N===i.UNSIGNED_SHORT&&(P=i.R16UI),N===i.UNSIGNED_INT&&(P=i.R32UI),N===i.BYTE&&(P=i.R8I),N===i.SHORT&&(P=i.R16I),N===i.INT&&(P=i.R32I)),b===i.RG&&(N===i.FLOAT&&(P=i.RG32F),N===i.HALF_FLOAT&&(P=i.RG16F),N===i.UNSIGNED_BYTE&&(P=i.RG8)),b===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(P=i.RG8UI),N===i.UNSIGNED_SHORT&&(P=i.RG16UI),N===i.UNSIGNED_INT&&(P=i.RG32UI),N===i.BYTE&&(P=i.RG8I),N===i.SHORT&&(P=i.RG16I),N===i.INT&&(P=i.RG32I)),b===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(P=i.RGB8UI),N===i.UNSIGNED_SHORT&&(P=i.RGB16UI),N===i.UNSIGNED_INT&&(P=i.RGB32UI),N===i.BYTE&&(P=i.RGB8I),N===i.SHORT&&(P=i.RGB16I),N===i.INT&&(P=i.RGB32I)),b===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(P=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(P=i.RGBA16UI),N===i.UNSIGNED_INT&&(P=i.RGBA32UI),N===i.BYTE&&(P=i.RGBA8I),N===i.SHORT&&(P=i.RGBA16I),N===i.INT&&(P=i.RGBA32I)),b===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(P=i.RGB9_E5),b===i.RGBA){let S=A?ho:Je.getTransfer(L);N===i.FLOAT&&(P=i.RGBA32F),N===i.HALF_FLOAT&&(P=i.RGBA16F),N===i.UNSIGNED_BYTE&&(P=S===nt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(P=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(P=i.RGB5_A1)}return P!==i.R16F&&P!==i.R32F&&P!==i.RG16F&&P!==i.RG32F&&P!==i.RGBA16F&&P!==i.RGBA32F||e.get("EXT_color_buffer_float"),P}function y(w,b){let N;return w?b===null||b===Li||b===br?N=i.DEPTH24_STENCIL8:b===bn?N=i.DEPTH32F_STENCIL8:b===os&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Li||b===br?N=i.DEPTH_COMPONENT24:b===bn?N=i.DEPTH_COMPONENT32F:b===os&&(N=i.DEPTH_COMPONENT16),N}function R(w,b){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==fn&&w.minFilter!==zn?Math.log2(Math.max(b.width,b.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?b.mipmaps.length:1}function T(w){let b=w.target;b.removeEventListener("dispose",T),(function(N){let L=n.get(N);if(L.__webglInit===void 0)return;let A=N.source,P=d.get(A);if(P){let S=P[L.__cacheKey];S.usedTimes--,S.usedTimes===0&&D(N),Object.keys(P).length===0&&d.delete(A)}n.remove(N)})(b),b.isVideoTexture&&h.delete(b)}function I(w){let b=w.target;b.removeEventListener("dispose",I),(function(N){let L=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let P=0;P<6;P++){if(Array.isArray(L.__webglFramebuffer[P]))for(let S=0;S<L.__webglFramebuffer[P].length;S++)i.deleteFramebuffer(L.__webglFramebuffer[P][S]);else i.deleteFramebuffer(L.__webglFramebuffer[P]);L.__webglDepthbuffer&&i.deleteRenderbuffer(L.__webglDepthbuffer[P])}else{if(Array.isArray(L.__webglFramebuffer))for(let P=0;P<L.__webglFramebuffer.length;P++)i.deleteFramebuffer(L.__webglFramebuffer[P]);else i.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&i.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&i.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let P=0;P<L.__webglColorRenderbuffer.length;P++)L.__webglColorRenderbuffer[P]&&i.deleteRenderbuffer(L.__webglColorRenderbuffer[P]);L.__webglDepthRenderbuffer&&i.deleteRenderbuffer(L.__webglDepthRenderbuffer)}let A=N.textures;for(let P=0,S=A.length;P<S;P++){let C=n.get(A[P]);C.__webglTexture&&(i.deleteTexture(C.__webglTexture),a.memory.textures--),n.remove(A[P])}n.remove(N)})(b)}function D(w){let b=n.get(w);i.deleteTexture(b.__webglTexture);let N=w.source;delete d.get(N)[b.__cacheKey],a.memory.textures--}let B=0;function k(w,b){let N=n.get(w);if(w.isVideoTexture&&(function(L){let A=a.render.frame;h.get(L)!==A&&(h.set(L,A),L.update())})(w),w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){let L=w.image;if(L===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(L.complete!==!1)return void ee(N,w,b);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+b)}let j={[Ii]:i.REPEAT,[Pi]:i.CLAMP_TO_EDGE,[zl]:i.MIRRORED_REPEAT},V={[fn]:i.NEAREST,[Vf]:i.NEAREST_MIPMAP_NEAREST,[Js]:i.NEAREST_MIPMAP_LINEAR,[zn]:i.LINEAR,[Qo]:i.LINEAR_MIPMAP_NEAREST,[_r]:i.LINEAR_MIPMAP_LINEAR},Z={[Gf]:i.NEVER,[Jf]:i.ALWAYS,[Wf]:i.LESS,[jf]:i.LEQUAL,[Xf]:i.EQUAL,[Zf]:i.GEQUAL,[qf]:i.GREATER,[Yf]:i.NOTEQUAL};function X(w,b){if(b.type!==bn||e.has("OES_texture_float_linear")!==!1||b.magFilter!==zn&&b.magFilter!==Qo&&b.magFilter!==Js&&b.magFilter!==_r&&b.minFilter!==zn&&b.minFilter!==Qo&&b.minFilter!==Js&&b.minFilter!==_r||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,j[b.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,j[b.wrapT]),w!==i.TEXTURE_3D&&w!==i.TEXTURE_2D_ARRAY||i.texParameteri(w,i.TEXTURE_WRAP_R,j[b.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,V[b.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,V[b.minFilter]),b.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Z[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===fn||b.minFilter!==Js&&b.minFilter!==_r||b.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function K(w,b){let N=!1;w.__webglInit===void 0&&(w.__webglInit=!0,b.addEventListener("dispose",T));let L=b.source,A=d.get(L);A===void 0&&(A={},d.set(L,A));let P=(function(S){let C=[];return C.push(S.wrapS),C.push(S.wrapT),C.push(S.wrapR||0),C.push(S.magFilter),C.push(S.minFilter),C.push(S.anisotropy),C.push(S.internalFormat),C.push(S.format),C.push(S.type),C.push(S.generateMipmaps),C.push(S.premultiplyAlpha),C.push(S.flipY),C.push(S.unpackAlignment),C.push(S.colorSpace),C.join()})(b);if(P!==w.__cacheKey){A[P]===void 0&&(A[P]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),A[P].usedTimes++;let S=A[w.__cacheKey];S!==void 0&&(A[w.__cacheKey].usedTimes--,S.usedTimes===0&&D(b)),w.__cacheKey=P,w.__webglTexture=A[P].texture}return N}function ee(w,b,N){let L=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(L=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(L=i.TEXTURE_3D);let A=K(w,b),P=b.source;t.bindTexture(L,w.__webglTexture,i.TEXTURE0+N);let S=n.get(P);if(P.version!==S.__version||A===!0){t.activeTexture(i.TEXTURE0+N);let C=Je.getPrimaries(Je.workingColorSpace),F=b.colorSpace===vr?null:Je.getPrimaries(b.colorSpace),te=b.colorSpace===vr||C===F?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let z=x(b.image,!1,r.maxTextureSize);z=Me(b,z);let $=s.convert(b.format,b.colorSpace),Q=s.convert(b.type),se,G=_(b.internalFormat,$,Q,b.colorSpace,b.isVideoTexture);X(L,b);let H=b.mipmaps,O=b.isVideoTexture!==!0,ne=S.__version===void 0||A===!0,ce=P.dataReady,ue=R(b,z);if(b.isDepthTexture)G=y(b.format===wr,b.type),ne&&(O?t.texStorage2D(i.TEXTURE_2D,1,G,z.width,z.height):t.texImage2D(i.TEXTURE_2D,0,G,z.width,z.height,0,$,Q,null));else if(b.isDataTexture)if(H.length>0){O&&ne&&t.texStorage2D(i.TEXTURE_2D,ue,G,H[0].width,H[0].height);for(let Y=0,me=H.length;Y<me;Y++)se=H[Y],O?ce&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,se.width,se.height,$,Q,se.data):t.texImage2D(i.TEXTURE_2D,Y,G,se.width,se.height,0,$,Q,se.data);b.generateMipmaps=!1}else O?(ne&&t.texStorage2D(i.TEXTURE_2D,ue,G,z.width,z.height),ce&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,z.width,z.height,$,Q,z.data)):t.texImage2D(i.TEXTURE_2D,0,G,z.width,z.height,0,$,Q,z.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){O&&ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,G,H[0].width,H[0].height,z.depth);for(let Y=0,me=H.length;Y<me;Y++)if(se=H[Y],b.format!==wn)if($!==null)if(O){if(ce)if(b.layerUpdates.size>0){let Ce=gd(se.width,se.height,b.format,b.type);for(let Ue of b.layerUpdates){let fe=se.data.subarray(Ue*Ce/se.data.BYTES_PER_ELEMENT,(Ue+1)*Ce/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,Ue,se.width,se.height,1,$,fe)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,se.width,se.height,z.depth,$,se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,G,se.width,se.height,z.depth,0,se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?ce&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,se.width,se.height,z.depth,$,Q,se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,G,se.width,se.height,z.depth,0,$,Q,se.data)}else{O&&ne&&t.texStorage2D(i.TEXTURE_2D,ue,G,H[0].width,H[0].height);for(let Y=0,me=H.length;Y<me;Y++)se=H[Y],b.format!==wn?$!==null?O?ce&&t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,se.width,se.height,$,se.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,G,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?ce&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,se.width,se.height,$,Q,se.data):t.texImage2D(i.TEXTURE_2D,Y,G,se.width,se.height,0,$,Q,se.data)}else if(b.isDataArrayTexture)if(O){if(ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,G,z.width,z.height,z.depth),ce)if(b.layerUpdates.size>0){let Y=gd(z.width,z.height,b.format,b.type);for(let me of b.layerUpdates){let Ce=z.data.subarray(me*Y/z.data.BYTES_PER_ELEMENT,(me+1)*Y/z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,me,z.width,z.height,1,$,Q,Ce)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,z.width,z.height,z.depth,$,Q,z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,G,z.width,z.height,z.depth,0,$,Q,z.data);else if(b.isData3DTexture)O?(ne&&t.texStorage3D(i.TEXTURE_3D,ue,G,z.width,z.height,z.depth),ce&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,z.width,z.height,z.depth,$,Q,z.data)):t.texImage3D(i.TEXTURE_3D,0,G,z.width,z.height,z.depth,0,$,Q,z.data);else if(b.isFramebufferTexture){if(ne)if(O)t.texStorage2D(i.TEXTURE_2D,ue,G,z.width,z.height);else{let Y=z.width,me=z.height;for(let Ce=0;Ce<ue;Ce++)t.texImage2D(i.TEXTURE_2D,Ce,G,Y,me,0,$,Q,null),Y>>=1,me>>=1}}else if(H.length>0){if(O&&ne){let Y=pe(H[0]);t.texStorage2D(i.TEXTURE_2D,ue,G,Y.width,Y.height)}for(let Y=0,me=H.length;Y<me;Y++)se=H[Y],O?ce&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,$,Q,se):t.texImage2D(i.TEXTURE_2D,Y,G,$,Q,se);b.generateMipmaps=!1}else if(O){if(ne){let Y=pe(z);t.texStorage2D(i.TEXTURE_2D,ue,G,Y.width,Y.height)}ce&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,$,Q,z)}else t.texImage2D(i.TEXTURE_2D,0,G,$,Q,z);f(b)&&g(L),S.__version=P.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function oe(w,b,N,L,A,P){let S=s.convert(N.format,N.colorSpace),C=s.convert(N.type),F=_(N.internalFormat,S,C,N.colorSpace),te=n.get(b),z=n.get(N);if(z.__renderTarget=b,!te.__hasExternalTextures){let $=Math.max(1,b.width>>P),Q=Math.max(1,b.height>>P);A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY?t.texImage3D(A,P,F,$,Q,b.depth,0,S,C,null):t.texImage2D(A,P,F,$,Q,0,S,C,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),ye(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,L,A,z.__webglTexture,0,he(b)):(A===i.TEXTURE_2D||A>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&A<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,L,A,z.__webglTexture,P),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(w,b,N){if(i.bindRenderbuffer(i.RENDERBUFFER,w),b.depthBuffer){let L=b.depthTexture,A=L&&L.isDepthTexture?L.type:null,P=y(b.stencilBuffer,A),S=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,C=he(b);ye(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,C,P,b.width,b.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,C,P,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,P,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,S,i.RENDERBUFFER,w)}else{let L=b.textures;for(let A=0;A<L.length;A++){let P=L[A],S=s.convert(P.format,P.colorSpace),C=s.convert(P.type),F=_(P.internalFormat,S,C,P.colorSpace),te=he(b);N&&ye(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,F,b.width,b.height):ye(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,F,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,F,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(w){let b=n.get(w),N=w.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==w.depthTexture){let L=w.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),L){let A=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,L.removeEventListener("dispose",A)};L.addEventListener("dispose",A),b.__depthDisposeCallback=A}b.__boundDepthTexture=L}if(w.depthTexture&&!b.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");(function(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!A.depthTexture||!A.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let P=n.get(A.depthTexture);P.__renderTarget=A,P.__webglTexture&&A.depthTexture.image.width===A.width&&A.depthTexture.image.height===A.height||(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),k(A.depthTexture,0);let S=P.__webglTexture,C=he(A);if(A.depthTexture.format===ls)ye(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,S,0,C):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,S,0);else{if(A.depthTexture.format!==wr)throw new Error("Unknown depthTexture format");ye(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,S,0,C):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,S,0)}})(b.__webglFramebuffer,w)}else if(N){b.__webglDepthbuffer=[];for(let L=0;L<6;L++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[L]),b.__webglDepthbuffer[L]===void 0)b.__webglDepthbuffer[L]=i.createRenderbuffer(),ie(b.__webglDepthbuffer[L],w,!1);else{let A=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,P=b.__webglDepthbuffer[L];i.bindRenderbuffer(i.RENDERBUFFER,P),i.framebufferRenderbuffer(i.FRAMEBUFFER,A,i.RENDERBUFFER,P)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),ie(b.__webglDepthbuffer,w,!1);else{let L=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,A=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,A),i.framebufferRenderbuffer(i.FRAMEBUFFER,L,i.RENDERBUFFER,A)}t.bindFramebuffer(i.FRAMEBUFFER,null)}let Te=[],ae=[];function he(w){return Math.min(r.maxSamples,w.samples)}function ye(w){let b=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Me(w,b){let N=w.colorSpace,L=w.format,A=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||N!==Dr&&N!==vr&&(Je.getTransfer(N)===nt?L===wn&&A===li||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),b}function pe(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=function(){let w=B;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),B+=1,w},this.resetTextureUnits=function(){B=0},this.setTexture2D=k,this.setTexture2DArray=function(w,b){let N=n.get(w);w.version>0&&N.__version!==w.version?ee(N,w,b):t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+b)},this.setTexture3D=function(w,b){let N=n.get(w);w.version>0&&N.__version!==w.version?ee(N,w,b):t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+b)},this.setTextureCube=function(w,b){let N=n.get(w);w.version>0&&N.__version!==w.version?(function(L,A,P){if(A.image.length!==6)return;let S=K(L,A),C=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+P);let F=n.get(C);if(C.version!==F.__version||S===!0){t.activeTexture(i.TEXTURE0+P);let te=Je.getPrimaries(Je.workingColorSpace),z=A.colorSpace===vr?null:Je.getPrimaries(A.colorSpace),$=A.colorSpace===vr||te===z?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let Q=A.isCompressedTexture||A.image[0].isCompressedTexture,se=A.image[0]&&A.image[0].isDataTexture,G=[];for(let fe=0;fe<6;fe++)G[fe]=Q||se?se?A.image[fe].image:A.image[fe]:x(A.image[fe],!0,r.maxCubemapSize),G[fe]=Me(A,G[fe]);let H=G[0],O=s.convert(A.format,A.colorSpace),ne=s.convert(A.type),ce=_(A.internalFormat,O,ne,A.colorSpace),ue=A.isVideoTexture!==!0,Y=F.__version===void 0||S===!0,me=C.dataReady,Ce,Ue=R(A,H);if(X(i.TEXTURE_CUBE_MAP,A),Q){ue&&Y&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,ce,H.width,H.height);for(let fe=0;fe<6;fe++){Ce=G[fe].mipmaps;for(let xe=0;xe<Ce.length;xe++){let Ie=Ce[xe];A.format!==wn?O!==null?ue?me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe,0,0,Ie.width,Ie.height,O,Ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe,ce,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ue?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe,0,0,Ie.width,Ie.height,O,ne,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe,ce,Ie.width,Ie.height,0,O,ne,Ie.data)}}}else{if(Ce=A.mipmaps,ue&&Y){Ce.length>0&&Ue++;let fe=pe(G[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,ce,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(se){ue?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,G[fe].width,G[fe].height,O,ne,G[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ce,G[fe].width,G[fe].height,0,O,ne,G[fe].data);for(let xe=0;xe<Ce.length;xe++){let Ie=Ce[xe].image[fe].image;ue?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe+1,0,0,Ie.width,Ie.height,O,ne,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe+1,ce,Ie.width,Ie.height,0,O,ne,Ie.data)}}else{ue?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,O,ne,G[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ce,O,ne,G[fe]);for(let xe=0;xe<Ce.length;xe++){let Ie=Ce[xe];ue?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe+1,0,0,O,ne,Ie.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe+1,ce,O,ne,Ie.image[fe])}}}f(A)&&g(i.TEXTURE_CUBE_MAP),F.__version=C.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version})(N,w,b):t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+b)},this.rebindTextures=function(w,b,N){let L=n.get(w);b!==void 0&&oe(L.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&be(w)},this.setupRenderTarget=function(w){let b=w.texture,N=n.get(w),L=n.get(b);w.addEventListener("dispose",I);let A=w.textures,P=w.isWebGLCubeRenderTarget===!0,S=A.length>1;if(S||(L.__webglTexture===void 0&&(L.__webglTexture=i.createTexture()),L.__version=b.version,a.memory.textures++),P){N.__webglFramebuffer=[];for(let C=0;C<6;C++)if(b.mipmaps&&b.mipmaps.length>0){N.__webglFramebuffer[C]=[];for(let F=0;F<b.mipmaps.length;F++)N.__webglFramebuffer[C][F]=i.createFramebuffer()}else N.__webglFramebuffer[C]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){N.__webglFramebuffer=[];for(let C=0;C<b.mipmaps.length;C++)N.__webglFramebuffer[C]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(S)for(let C=0,F=A.length;C<F;C++){let te=n.get(A[C]);te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&ye(w)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let C=0;C<A.length;C++){let F=A[C];N.__webglColorRenderbuffer[C]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[C]);let te=s.convert(F.format,F.colorSpace),z=s.convert(F.type),$=_(F.internalFormat,te,z,F.colorSpace,w.isXRRenderTarget===!0),Q=he(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,$,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+C,i.RENDERBUFFER,N.__webglColorRenderbuffer[C])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),ie(N.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(P){t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture),X(i.TEXTURE_CUBE_MAP,b);for(let C=0;C<6;C++)if(b.mipmaps&&b.mipmaps.length>0)for(let F=0;F<b.mipmaps.length;F++)oe(N.__webglFramebuffer[C][F],w,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+C,F);else oe(N.__webglFramebuffer[C],w,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0);f(b)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(S){for(let C=0,F=A.length;C<F;C++){let te=A[C],z=n.get(te);t.bindTexture(i.TEXTURE_2D,z.__webglTexture),X(i.TEXTURE_2D,te),oe(N.__webglFramebuffer,w,te,i.COLOR_ATTACHMENT0+C,i.TEXTURE_2D,0),f(te)&&g(i.TEXTURE_2D)}t.unbindTexture()}else{let C=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(C=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(C,L.__webglTexture),X(C,b),b.mipmaps&&b.mipmaps.length>0)for(let F=0;F<b.mipmaps.length;F++)oe(N.__webglFramebuffer[F],w,b,i.COLOR_ATTACHMENT0,C,F);else oe(N.__webglFramebuffer,w,b,i.COLOR_ATTACHMENT0,C,0);f(b)&&g(C),t.unbindTexture()}w.depthBuffer&&be(w)},this.updateRenderTargetMipmap=function(w){let b=w.textures;for(let N=0,L=b.length;N<L;N++){let A=b[N];if(f(A)){let P=v(w),S=n.get(A).__webglTexture;t.bindTexture(P,S),g(P),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(w){if(w.samples>0){if(ye(w)===!1){let b=w.textures,N=w.width,L=w.height,A=i.COLOR_BUFFER_BIT,P=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,S=n.get(w),C=b.length>1;if(C)for(let F=0;F<b.length;F++)t.bindFramebuffer(i.FRAMEBUFFER,S.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+F,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+F,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,S.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,S.__webglFramebuffer);for(let F=0;F<b.length;F++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(A|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(A|=i.STENCIL_BUFFER_BIT)),C){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,S.__webglColorRenderbuffer[F]);let te=n.get(b[F]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,N,L,0,0,N,L,A,i.NEAREST),l===!0&&(Te.length=0,ae.length=0,Te.push(i.COLOR_ATTACHMENT0+F),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Te.push(P),ae.push(P),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ae)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Te))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),C)for(let F=0;F<b.length;F++){t.bindFramebuffer(i.FRAMEBUFFER,S.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+F,i.RENDERBUFFER,S.__webglColorRenderbuffer[F]);let te=n.get(b[F]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+F,i.TEXTURE_2D,te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,S.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let b=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}},this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=ye}function Fg(i,e){return{convert:function(t,n=""){let r,s=Je.getTransfer(n);if(t===li)return i.UNSIGNED_BYTE;if(t===mh)return i.UNSIGNED_SHORT_4_4_4_4;if(t===gh)return i.UNSIGNED_SHORT_5_5_5_1;if(t===zd)return i.UNSIGNED_INT_5_9_9_9_REV;if(t===Bd)return i.BYTE;if(t===Fd)return i.SHORT;if(t===os)return i.UNSIGNED_SHORT;if(t===fh)return i.INT;if(t===Li)return i.UNSIGNED_INT;if(t===bn)return i.FLOAT;if(t===ys)return i.HALF_FLOAT;if(t===Hd)return i.ALPHA;if(t===kd)return i.RGB;if(t===wn)return i.RGBA;if(t===Vd)return i.LUMINANCE;if(t===Gd)return i.LUMINANCE_ALPHA;if(t===ls)return i.DEPTH_COMPONENT;if(t===wr)return i.DEPTH_STENCIL;if(t===vh)return i.RED;if(t===_h)return i.RED_INTEGER;if(t===Wd)return i.RG;if(t===xh)return i.RG_INTEGER;if(t===yh)return i.RGBA_INTEGER;if(t===Ia||t===Pa||t===La||t===Ua)if(s===nt){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(t===Ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(t===Ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===Pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===La)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Ua)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===Hl||t===kl||t===Vl||t===Gl){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(t===Hl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===kl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===Wl||t===Xl||t===jl){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(t===Wl||t===Xl)return s===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(t===jl)return s===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}if(t===ql||t===Yl||t===Zl||t===Jl||t===Kl||t===$l||t===Ql||t===ec||t===tc||t===nc||t===ic||t===rc||t===sc||t===ac){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(t===ql)return s===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===Yl)return s===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===Zl)return s===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===Jl)return s===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Kl)return s===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===$l)return s===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Ql)return s===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===ec)return s===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===tc)return s===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===nc)return s===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===ic)return s===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===rc)return s===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===sc)return s===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===ac)return s===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Da||t===oc||t===lc){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(t===Da)return s===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Xd||t===cc||t===hc||t===uc){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(t===Da)return r.COMPRESSED_RED_RGTC1_EXT;if(t===cc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===hc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===br?i.UNSIGNED_INT_24_8:i[t]!==void 0?i[t]:null}}}var Rc=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},nn=class extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}},zg={type:"move"},rs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let f=t.getJointPose(x,n),g=this._getHandJoint(c,x);f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=f.radius),g.visible=f!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zg)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new nn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Cc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new Gt;e.properties.get(r).__webglTexture=t.texture,t.depthNear==n.depthNear&&t.depthFar==n.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Zt({vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qe(new rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ic=class extends ci{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,m=null,x=new Cc,f=t.getContextAttributes(),g=null,v=null,_=[],y=[],R=new le,T=null,I=new Vt;I.viewport=new dt;let D=new Vt;D.viewport=new dt;let B=[I,D],k=new Rc,j=null,V=null;function Z(ae){let he=y.indexOf(ae.inputSource);if(he===-1)return;let ye=_[he];ye!==void 0&&(ye.update(ae.inputSource,ae.frame,c||a),ye.dispatchEvent({type:ae.type,data:ae.inputSource}))}function X(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",K);for(let ae=0;ae<_.length;ae++){let he=y[ae];he!==null&&(y[ae]=null,_[ae].disconnect(he))}j=null,V=null,x.reset(),e.setRenderTarget(g),p=null,d=null,u=null,r=null,v=null,Te.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}function K(ae){for(let he=0;he<ae.removed.length;he++){let ye=ae.removed[he],Me=y.indexOf(ye);Me>=0&&(y[Me]=null,_[Me].disconnect(ye))}for(let he=0;he<ae.added.length;he++){let ye=ae.added[he],Me=y.indexOf(ye);if(Me===-1){for(let w=0;w<_.length;w++){if(w>=y.length){y.push(ye),Me=w;break}if(y[w]===null){y[w]=ye,Me=w;break}}if(Me===-1)break}let pe=_[Me];pe&&pe.connect(ye)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let he=_[ae];return he===void 0&&(he=new rs,_[ae]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ae){let he=_[ae];return he===void 0&&(he=new rs,_[ae]=he),he.getGripSpace()},this.getHand=function(ae){let he=_[ae];return he===void 0&&(he=new rs,_[ae]=he),he.getHandSpace()},this.setFramebufferScaleFactor=function(ae){s=ae,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){o=ae,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ae){c=ae},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(ae){if(r=ae,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",X),r.addEventListener("inputsourceschange",K),f.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){let he={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Vn(p.framebufferWidth,p.framebufferHeight,{format:wn,type:li,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let he=null,ye=null,Me=null;f.depth&&(Me=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=f.stencil?wr:ls,ye=f.stencil?br:Li);let pe={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(pe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Vn(d.textureWidth,d.textureHeight,{format:wn,type:li,depthTexture:new ja(d.textureWidth,d.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Te.setContext(r),Te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};let ee=new M,oe=new M;function ie(ae,he){he===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(he.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(r===null)return;let he=ae.near,ye=ae.far;x.texture!==null&&(x.depthNear>0&&(he=x.depthNear),x.depthFar>0&&(ye=x.depthFar)),k.near=D.near=I.near=he,k.far=D.far=I.far=ye,j===k.near&&V===k.far||(r.updateRenderState({depthNear:k.near,depthFar:k.far}),j=k.near,V=k.far),I.layers.mask=2|ae.layers.mask,D.layers.mask=4|ae.layers.mask,k.layers.mask=I.layers.mask|D.layers.mask;let Me=ae.parent,pe=k.cameras;ie(k,Me);for(let w=0;w<pe.length;w++)ie(pe[w],Me);pe.length===2?(function(w,b,N){ee.setFromMatrixPosition(b.matrixWorld),oe.setFromMatrixPosition(N.matrixWorld);let L=ee.distanceTo(oe),A=b.projectionMatrix.elements,P=N.projectionMatrix.elements,S=A[14]/(A[10]-1),C=A[14]/(A[10]+1),F=(A[9]+1)/A[5],te=(A[9]-1)/A[5],z=(A[8]-1)/A[0],$=(P[8]+1)/P[0],Q=S*z,se=S*$,G=L/(-z+$),H=G*-z;if(b.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(H),w.translateZ(G),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert(),A[10]===-1)w.projectionMatrix.copy(b.projectionMatrix),w.projectionMatrixInverse.copy(b.projectionMatrixInverse);else{let O=S+G,ne=C+G,ce=Q-H,ue=se+(L-H),Y=F*C/ne*O,me=te*C/ne*O;w.projectionMatrix.makePerspective(ce,ue,Y,me,O,ne),w.projectionMatrixInverse.copy(w.projectionMatrix).invert()}})(k,I,D):k.projectionMatrix.copy(I.projectionMatrix),(function(w,b,N){N===null?w.matrix.copy(b.matrixWorld):(w.matrix.copy(N.matrixWorld),w.matrix.invert(),w.matrix.multiply(b.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(b.projectionMatrix),w.projectionMatrixInverse.copy(b.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=2*fc*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)})(ae,k,Me)},this.getCamera=function(){return k},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(ae){l=ae,d!==null&&(d.fixedFoveation=ae),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ae)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(k)};let be=null,Te=new Zd;Te.setAnimationLoop((function(ae,he){if(h=he.getViewerPose(c||a),m=he,h!==null){let ye=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let Me=!1;ye.length!==k.cameras.length&&(k.cameras.length=0,Me=!0);for(let w=0;w<ye.length;w++){let b=ye[w],N=null;if(p!==null)N=p.getViewport(b);else{let A=u.getViewSubImage(d,b);N=A.viewport,w===0&&(e.setRenderTargetTextures(v,A.colorTexture,d.ignoreDepthValues?void 0:A.depthStencilTexture),e.setRenderTarget(v))}let L=B[w];L===void 0&&(L=new Vt,L.layers.enable(w),L.viewport=new dt,B[w]=L),L.matrix.fromArray(b.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(b.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(N.x,N.y,N.width,N.height),w===0&&(k.matrix.copy(L.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Me===!0&&k.cameras.push(L)}let pe=r.enabledFeatures;if(pe&&pe.includes("depth-sensing")){let w=u.getDepthInformation(ye[0]);w&&w.isValid&&w.texture&&x.init(e,w,r.renderState)}}for(let ye=0;ye<_.length;ye++){let Me=y[ye],pe=_[ye];Me!==null&&pe!==void 0&&pe.update(Me,he,c||a)}be&&be(ae,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),m=null})),this.setAnimationLoop=function(ae){be=ae},this.dispose=function(){}}},wi=new Tt,Hg=new Le;function kg(i,e){function t(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function n(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,t(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,t(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,t(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===1&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,t(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===1&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,t(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,t(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(r.envMap.value=o,wi.copy(l),wi.x*=-1,wi.y*=-1,wi.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),r.envMapRotation.value.setFromMatrix4(Hg.makeRotationFromEuler(wi)),r.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap&&(r.lightMap.value=s.lightMap,r.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,r.lightMapTransform)),s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,Yd(i)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(r,s):s.isMeshToonMaterial?(n(r,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(r,s)):s.isMeshPhongMaterial?(n(r,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(r,s)):s.isMeshStandardMaterial?(n(r,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(r,s),s.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===1&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(r,s,l)):s.isMeshMatcapMaterial?(n(r,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(r,s)):s.isMeshDepthMaterial?n(r,s):s.isMeshDistanceMaterial?(n(r,s),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(r,s)):s.isMeshNormalMaterial?n(r,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(r,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(r,s)):s.isPointsMaterial?(function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Vg(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,d,p,m){let x=u.value,f=d+"_"+p;if(m[f]===void 0)return m[f]=typeof x=="number"||typeof x=="boolean"?x:x.clone(),!0;{let g=m[f];if(typeof x=="number"||typeof x=="boolean"){if(g!==x)return m[f]=x,!0}else if(g.equals(x)===!1)return g.copy(x),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),i.deleteBuffer(r[d.id]),delete r[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=r[u.id];p===void 0&&((function(f){let g=f.uniforms,v=0,_=16;for(let R=0,T=g.length;R<T;R++){let I=Array.isArray(g[R])?g[R]:[g[R]];for(let D=0,B=I.length;D<B;D++){let k=I[D],j=Array.isArray(k.value)?k.value:[k.value];for(let V=0,Z=j.length;V<Z;V++){let X=c(j[V]),K=v%_,ee=K%X.boundary,oe=K+ee;v+=ee,oe!==0&&_-oe<X.storage&&(v+=_-oe),k.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=X.storage}}}let y=v%_;y>0&&(v+=_-y),f.__size=v,f.__cache={}})(u),p=(function(f){let g=(function(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();f.__bindingPointIndex=g;let v=i.createBuffer(),_=f.__size,y=f.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,_,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,g,v),v})(u),r[u.id]=p,u.addEventListener("dispose",h));let m=d.program;n.updateUBOMapping(u,m);let x=e.render.frame;s[u.id]!==x&&((function(f){let g=r[f.id],v=f.uniforms,_=f.__cache;i.bindBuffer(i.UNIFORM_BUFFER,g);for(let y=0,R=v.length;y<R;y++){let T=Array.isArray(v[y])?v[y]:[v[y]];for(let I=0,D=T.length;I<D;I++){let B=T[I];if(l(B,y,I,_)===!0){let k=B.__offset,j=Array.isArray(B.value)?B.value:[B.value],V=0;for(let Z=0;Z<j.length;Z++){let X=j[Z],K=c(X);typeof X=="number"||typeof X=="boolean"?(B.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,k+V,B.__data)):X.isMatrix3?(B.__data[0]=X.elements[0],B.__data[1]=X.elements[1],B.__data[2]=X.elements[2],B.__data[3]=0,B.__data[4]=X.elements[3],B.__data[5]=X.elements[4],B.__data[6]=X.elements[5],B.__data[7]=0,B.__data[8]=X.elements[6],B.__data[9]=X.elements[7],B.__data[10]=X.elements[8],B.__data[11]=0):(X.toArray(B.__data,V),V+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,B.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)})(u),s[u.id]=x)},dispose:function(){for(let u in r)i.deleteBuffer(r[u]);a=[],r={},s={}}}}var qa=class{constructor(e={}){let{canvas:t=$f(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e,p;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let m=new Uint32Array(4),x=new Int32Array(4),f=null,g=null,v=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=st,this.toneMapping=0,this.toneMappingExposure=1;let y=this,R=!1,T=0,I=0,D=null,B=-1,k=null,j=new dt,V=new dt,Z=null,X=new _e(0),K=0,ee=t.width,oe=t.height,ie=1,be=null,Te=null,ae=new dt(0,0,ee,oe),he=new dt(0,0,ee,oe),ye=!1,Me=new Cr,pe=!1,w=!1,b=new Le,N=new Le,L=new M,A=new dt,P={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},S=!1;function C(){return D===null?ie:1}let F,te,z,$,Q,se,G,H,O,ne,ce,ue,Y,me,Ce,Ue,fe,xe,Ie,pt,$e,ke,ot,vt,U=n;function Ye(E,W){return t.getContext(E,W)}try{let E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",rt,!1),t.addEventListener("webglcontextrestored",Dt,!1),t.addEventListener("webglcontextcreationerror",on,!1),U===null){let W="webgl2";if(U=Ye(W,E),U===null)throw Ye(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}function tt(){F=new Em(U),F.init(),ke=new Fg(U,F),te=new xm(U,F,e,ke),z=new Og(U,F),te.reverseDepthBuffer&&d&&z.buffers.depth.setReversed(!0),$=new Tm(U),Q=new Tg,se=new Bg(U,F,z,Q,te,ke,$),G=new Mm(y),H=new Sm(y),O=new fm(U),ot=new vm(U,O),ne=new bm(U,O,$,ot),ce=new Rm(U,ne,O,$),Ie=new Am(U,te,se),Ue=new ym(Q),ue=new wg(y,G,H,F,te,ot,Ue),Y=new kg(y,Q),me=new Rg,Ce=new Ug(F),xe=new gm(y,G,H,z,ce,p,l),fe=new Dg(y,ce,te),vt=new Vg(U,$,te,z),pt=new _m(U,F,$),$e=new wm(U,F,$),$.programs=ue.programs,y.capabilities=te,y.extensions=F,y.properties=Q,y.renderLists=me,y.shadowMap=fe,y.state=z,y.info=$}tt();let Be=new Ic(y,U);function rt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let E=$.autoReset,W=fe.enabled,J=fe.autoUpdate,re=fe.needsUpdate,q=fe.type;tt(),$.autoReset=E,fe.enabled=W,fe.autoUpdate=J,fe.needsUpdate=re,fe.type=q}function on(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Pn(E){let W=E.target;W.removeEventListener("dispose",Pn),(function(J){(function(re){let q=Q.get(re).programs;q!==void 0&&(q.forEach((function(de){ue.releaseProgram(de)})),re.isShaderMaterial&&ue.releaseShaderCache(re))})(J),Q.remove(J)})(W)}function gi(E,W,J){E.transparent===!0&&E.side===2&&E.forceSinglePass===!1?(E.side=1,E.needsUpdate=!0,Zs(E,W,J),E.side=0,E.needsUpdate=!0,Zs(E,W,J),E.side=2):Zs(E,W,J)}this.xr=Be,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let E=F.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=F.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(E){E!==void 0&&(ie=E,this.setSize(ee,oe,!1))},this.getSize=function(E){return E.set(ee,oe)},this.setSize=function(E,W,J=!0){Be.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(ee=E,oe=W,t.width=Math.floor(E*ie),t.height=Math.floor(W*ie),J===!0&&(t.style.width=E+"px",t.style.height=W+"px"),this.setViewport(0,0,E,W))},this.getDrawingBufferSize=function(E){return E.set(ee*ie,oe*ie).floor()},this.setDrawingBufferSize=function(E,W,J){ee=E,oe=W,ie=J,t.width=Math.floor(E*J),t.height=Math.floor(W*J),this.setViewport(0,0,E,W)},this.getCurrentViewport=function(E){return E.copy(j)},this.getViewport=function(E){return E.copy(ae)},this.setViewport=function(E,W,J,re){E.isVector4?ae.set(E.x,E.y,E.z,E.w):ae.set(E,W,J,re),z.viewport(j.copy(ae).multiplyScalar(ie).round())},this.getScissor=function(E){return E.copy(he)},this.setScissor=function(E,W,J,re){E.isVector4?he.set(E.x,E.y,E.z,E.w):he.set(E,W,J,re),z.scissor(V.copy(he).multiplyScalar(ie).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(E){z.setScissorTest(ye=E)},this.setOpaqueSort=function(E){be=E},this.setTransparentSort=function(E){Te=E},this.getClearColor=function(E){return E.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(E=!0,W=!0,J=!0){let re=0;if(E){let q=!1;if(D!==null){let de=D.texture.format;q=de===yh||de===xh||de===_h}if(q){let de=D.texture.type,Se=de===li||de===Li||de===os||de===br||de===mh||de===gh,Ae=xe.getClearColor(),De=xe.getClearAlpha(),ze=Ae.r,Ve=Ae.g,Ne=Ae.b;Se?(m[0]=ze,m[1]=Ve,m[2]=Ne,m[3]=De,U.clearBufferuiv(U.COLOR,0,m)):(x[0]=ze,x[1]=Ve,x[2]=Ne,x[3]=De,U.clearBufferiv(U.COLOR,0,x))}else re|=U.COLOR_BUFFER_BIT}W&&(re|=U.DEPTH_BUFFER_BIT),J&&(re|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",Dt,!1),t.removeEventListener("webglcontextcreationerror",on,!1),me.dispose(),Ce.dispose(),Q.dispose(),G.dispose(),H.dispose(),ce.dispose(),ot.dispose(),vt.dispose(),ue.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",du),Be.removeEventListener("sessionend",pu),vi.stop()},this.renderBufferDirect=function(E,W,J,re,q,de){W===null&&(W=P);let Se=q.isMesh&&q.matrixWorld.determinant()<0,Ae=(function(Ze,zt,At,We,Fe){zt.isScene!==!0&&(zt=P),se.resetTextureUnits();let ln=zt.fog,qo=We.isMeshStandardMaterial?zt.environment:null,Wr=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Dr,$i=(We.isMeshStandardMaterial?H:G).get(We.envMap||qo),Yo=We.vertexColors===!0&&!!At.attributes.color&&At.attributes.color.itemSize===4,Zo=!!At.attributes.tangent&&(!!We.normalMap||We.anisotropy>0),Jo=!!At.morphAttributes.position,Qn=!!At.morphAttributes.normal,mf=!!At.morphAttributes.color,xu=0;We.toneMapped&&(D!==null&&D.isXRRenderTarget!==!0||(xu=y.toneMapping));let yu=At.morphAttributes.position||At.morphAttributes.normal||At.morphAttributes.color,gf=yu!==void 0?yu.length:0,qe=Q.get(We),vf=g.state.lights;if(pe===!0&&(w===!0||Ze!==k)){let en=Ze===k&&We.id===B;Ue.setState(We,Ze,en)}let cn=!1;We.version===qe.__version?qe.needsLights&&qe.lightsStateVersion!==vf.state.version||qe.outputColorSpace!==Wr||Fe.isBatchedMesh&&qe.batching===!1?cn=!0:Fe.isBatchedMesh||qe.batching!==!0?Fe.isBatchedMesh&&qe.batchingColor===!0&&Fe.colorTexture===null||Fe.isBatchedMesh&&qe.batchingColor===!1&&Fe.colorTexture!==null||Fe.isInstancedMesh&&qe.instancing===!1?cn=!0:Fe.isInstancedMesh||qe.instancing!==!0?Fe.isSkinnedMesh&&qe.skinning===!1?cn=!0:Fe.isSkinnedMesh||qe.skinning!==!0?Fe.isInstancedMesh&&qe.instancingColor===!0&&Fe.instanceColor===null||Fe.isInstancedMesh&&qe.instancingColor===!1&&Fe.instanceColor!==null||Fe.isInstancedMesh&&qe.instancingMorph===!0&&Fe.morphTexture===null||Fe.isInstancedMesh&&qe.instancingMorph===!1&&Fe.morphTexture!==null||qe.envMap!==$i||We.fog===!0&&qe.fog!==ln?cn=!0:qe.numClippingPlanes===void 0||qe.numClippingPlanes===Ue.numPlanes&&qe.numIntersection===Ue.numIntersection?(qe.vertexAlphas!==Yo||qe.vertexTangents!==Zo||qe.morphTargets!==Jo||qe.morphNormals!==Qn||qe.morphColors!==mf||qe.toneMapping!==xu||qe.morphTargetsCount!==gf)&&(cn=!0):cn=!0:cn=!0:cn=!0:cn=!0:(cn=!0,qe.__version=We.version);let _i=qe.currentProgram;cn===!0&&(_i=Zs(We,zt,Fe));let Mu=!1,Xr=!1,Ko=!1,_t=_i.getUniforms(),ei=qe.uniforms;if(z.useProgram(_i.program)&&(Mu=!0,Xr=!0,Ko=!0),We.id!==B&&(B=We.id,Xr=!0),Mu||k!==Ze){z.buffers.depth.getReversed()?(b.copy(Ze.projectionMatrix),(function(xi){let ht=xi.elements;ht[2]=.5*ht[2]+.5*ht[3],ht[6]=.5*ht[6]+.5*ht[7],ht[10]=.5*ht[10]+.5*ht[11],ht[14]=.5*ht[14]+.5*ht[15]})(b),(function(xi){let ht=xi.elements;ht[11]===-1?(ht[10]=-ht[10]-1,ht[14]=-ht[14]):(ht[10]=-ht[10],ht[14]=1-ht[14])})(b),_t.setValue(U,"projectionMatrix",b)):_t.setValue(U,"projectionMatrix",Ze.projectionMatrix),_t.setValue(U,"viewMatrix",Ze.matrixWorldInverse);let en=_t.map.cameraPosition;en!==void 0&&en.setValue(U,L.setFromMatrixPosition(Ze.matrixWorld)),te.logarithmicDepthBuffer&&_t.setValue(U,"logDepthBufFC",2/(Math.log(Ze.far+1)/Math.LN2)),(We.isMeshPhongMaterial||We.isMeshToonMaterial||We.isMeshLambertMaterial||We.isMeshBasicMaterial||We.isMeshStandardMaterial||We.isShaderMaterial)&&_t.setValue(U,"isOrthographic",Ze.isOrthographicCamera===!0),k!==Ze&&(k=Ze,Xr=!0,Ko=!0)}if(Fe.isSkinnedMesh){_t.setOptional(U,Fe,"bindMatrix"),_t.setOptional(U,Fe,"bindMatrixInverse");let en=Fe.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),_t.setValue(U,"boneTexture",en.boneTexture,se))}Fe.isBatchedMesh&&(_t.setOptional(U,Fe,"batchingTexture"),_t.setValue(U,"batchingTexture",Fe._matricesTexture,se),_t.setOptional(U,Fe,"batchingIdTexture"),_t.setValue(U,"batchingIdTexture",Fe._indirectTexture,se),_t.setOptional(U,Fe,"batchingColorTexture"),Fe._colorsTexture!==null&&_t.setValue(U,"batchingColorTexture",Fe._colorsTexture,se));let $o=At.morphAttributes;$o.position===void 0&&$o.normal===void 0&&$o.color===void 0||Ie.update(Fe,At,_i),(Xr||qe.receiveShadow!==Fe.receiveShadow)&&(qe.receiveShadow=Fe.receiveShadow,_t.setValue(U,"receiveShadow",Fe.receiveShadow)),We.isMeshGouraudMaterial&&We.envMap!==null&&(ei.envMap.value=$i,ei.flipEnvMap.value=$i.isCubeTexture&&$i.isRenderTargetTexture===!1?-1:1),We.isMeshStandardMaterial&&We.envMap===null&&zt.environment!==null&&(ei.envMapIntensity.value=zt.environmentIntensity),Xr&&(_t.setValue(U,"toneMappingExposure",y.toneMappingExposure),qe.needsLights&&(hn=Ko,(Mn=ei).ambientLightColor.needsUpdate=hn,Mn.lightProbe.needsUpdate=hn,Mn.directionalLights.needsUpdate=hn,Mn.directionalLightShadows.needsUpdate=hn,Mn.pointLights.needsUpdate=hn,Mn.pointLightShadows.needsUpdate=hn,Mn.spotLights.needsUpdate=hn,Mn.spotLightShadows.needsUpdate=hn,Mn.rectAreaLights.needsUpdate=hn,Mn.hemisphereLights.needsUpdate=hn),ln&&We.fog===!0&&Y.refreshFogUniforms(ei,ln),Y.refreshMaterialUniforms(ei,We,ie,oe,g.state.transmissionRenderTarget[Ze.id]),Mr.upload(U,vu(qe),ei,se));var Mn,hn;if(We.isShaderMaterial&&We.uniformsNeedUpdate===!0&&(Mr.upload(U,vu(qe),ei,se),We.uniformsNeedUpdate=!1),We.isSpriteMaterial&&_t.setValue(U,"center",Fe.center),_t.setValue(U,"modelViewMatrix",Fe.modelViewMatrix),_t.setValue(U,"normalMatrix",Fe.normalMatrix),_t.setValue(U,"modelMatrix",Fe.matrixWorld),We.isShaderMaterial||We.isRawShaderMaterial){let en=We.uniformsGroups;for(let xi=0,ht=en.length;xi<ht;xi++){let Su=en[xi];vt.update(Su,_i),vt.bind(Su,_i)}}return _i})(E,W,J,re,q);z.setMaterial(re,Se);let De=J.index,ze=1;if(re.wireframe===!0){if(De=ne.getWireframeAttribute(J),De===void 0)return;ze=2}let Ve=J.drawRange,Ne=J.attributes.position,je=Ve.start*ze,gt=(Ve.start+Ve.count)*ze;de!==null&&(je=Math.max(je,de.start*ze),gt=Math.min(gt,(de.start+de.count)*ze)),De!==null?(je=Math.max(je,0),gt=Math.min(gt,De.count)):Ne!=null&&(je=Math.max(je,0),gt=Math.min(gt,Ne.count));let at=gt-je;if(at<0||at===1/0)return;let Mt;ot.setup(q,re,Ae,J,De);let lt=pt;if(De!==null&&(Mt=O.get(De),lt=$e,lt.setIndex(Mt)),q.isMesh)re.wireframe===!0?(z.setLineWidth(re.wireframeLinewidth*C()),lt.setMode(U.LINES)):lt.setMode(U.TRIANGLES);else if(q.isLine){let Ze=re.linewidth;Ze===void 0&&(Ze=1),z.setLineWidth(Ze*C()),q.isLineSegments?lt.setMode(U.LINES):q.isLineLoop?lt.setMode(U.LINE_LOOP):lt.setMode(U.LINE_STRIP)}else q.isPoints?lt.setMode(U.POINTS):q.isSprite&&lt.setMode(U.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)lt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(F.get("WEBGL_multi_draw"))lt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Ze=q._multiDrawStarts,zt=q._multiDrawCounts,At=q._multiDrawCount,We=De?O.get(De).bytesPerElement:1,Fe=Q.get(re).currentProgram.getUniforms();for(let ln=0;ln<At;ln++)Fe.setValue(U,"_gl_DrawID",ln),lt.render(Ze[ln]/We,zt[ln])}else if(q.isInstancedMesh)lt.renderInstances(je,at,q.count);else if(J.isInstancedBufferGeometry){let Ze=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,zt=Math.min(J.instanceCount,Ze);lt.renderInstances(je,at,zt)}else lt.render(je,at)},this.compile=function(E,W,J=null){J===null&&(J=E),g=Ce.get(J),g.init(W),_.push(g),J.traverseVisible((function(q){q.isLight&&q.layers.test(W.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))})),E!==J&&E.traverseVisible((function(q){q.isLight&&q.layers.test(W.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))})),g.setupLights();let re=new Set;return E.traverse((function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let de=q.material;if(de)if(Array.isArray(de))for(let Se=0;Se<de.length;Se++){let Ae=de[Se];gi(Ae,J,q),re.add(Ae)}else gi(de,J,q),re.add(de)})),_.pop(),g=null,re},this.compileAsync=function(E,W,J=null){let re=this.compile(E,W,J);return new Promise((q=>{function de(){re.forEach((function(Se){Q.get(Se).currentProgram.isReady()&&re.delete(Se)})),re.size!==0?setTimeout(de,10):q(E)}F.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)}))};let Xo=null;function du(){vi.stop()}function pu(){vi.start()}let vi=new Zd;function jo(E,W,J,re){if(E.visible===!1)return;if(E.layers.test(W.layers)){if(E.isGroup)J=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(W);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Me.intersectsSprite(E)){re&&A.setFromMatrixPosition(E.matrixWorld).applyMatrix4(N);let de=ce.update(E),Se=E.material;Se.visible&&f.push(E,de,Se,J,A.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Me.intersectsObject(E))){let de=ce.update(E),Se=E.material;if(re&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),A.copy(E.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),A.copy(de.boundingSphere.center)),A.applyMatrix4(E.matrixWorld).applyMatrix4(N)),Array.isArray(Se)){let Ae=de.groups;for(let De=0,ze=Ae.length;De<ze;De++){let Ve=Ae[De],Ne=Se[Ve.materialIndex];Ne&&Ne.visible&&f.push(E,de,Ne,J,A.z,Ve)}}else Se.visible&&f.push(E,de,Se,J,A.z,null)}}let q=E.children;for(let de=0,Se=q.length;de<Se;de++)jo(q[de],W,J,re)}function fu(E,W,J,re){let q=E.opaque,de=E.transmissive,Se=E.transparent;g.setupLightsView(J),pe===!0&&Ue.setGlobalState(y.clippingPlanes,J),re&&z.viewport(j.copy(re)),q.length>0&&Ys(q,W,J),de.length>0&&Ys(de,W,J),Se.length>0&&Ys(Se,W,J),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function mu(E,W,J,re){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[re.id]===void 0&&(g.state.transmissionRenderTarget[re.id]=new Vn(1,1,{generateMipmaps:!0,type:F.has("EXT_color_buffer_half_float")||F.has("EXT_color_buffer_float")?ys:li,minFilter:_r,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));let q=g.state.transmissionRenderTarget[re.id],de=re.viewport||j;q.setSize(de.z,de.w);let Se=y.getRenderTarget();y.setRenderTarget(q),y.getClearColor(X),K=y.getClearAlpha(),K<1&&y.setClearColor(16777215,.5),y.clear(),S&&xe.render(J);let Ae=y.toneMapping;y.toneMapping=0;let De=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),g.setupLightsView(re),pe===!0&&Ue.setGlobalState(y.clippingPlanes,re),Ys(E,J,re),se.updateMultisampleRenderTarget(q),se.updateRenderTargetMipmap(q),F.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Ve=0,Ne=W.length;Ve<Ne;Ve++){let je=W[Ve],gt=je.object,at=je.geometry,Mt=je.material,lt=je.group;if(Mt.side===2&&gt.layers.test(re.layers)){let Ze=Mt.side;Mt.side=1,Mt.needsUpdate=!0,gu(gt,J,re,at,Mt,lt),Mt.side=Ze,Mt.needsUpdate=!0,ze=!0}}ze===!0&&(se.updateMultisampleRenderTarget(q),se.updateRenderTargetMipmap(q))}y.setRenderTarget(Se),y.setClearColor(X,K),De!==void 0&&(re.viewport=De),y.toneMapping=Ae}function Ys(E,W,J){let re=W.isScene===!0?W.overrideMaterial:null;for(let q=0,de=E.length;q<de;q++){let Se=E[q],Ae=Se.object,De=Se.geometry,ze=re===null?Se.material:re,Ve=Se.group;Ae.layers.test(J.layers)&&gu(Ae,W,J,De,ze,Ve)}}function gu(E,W,J,re,q,de){E.onBeforeRender(y,W,J,re,q,de),E.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(y,W,J,re,E,de),q.transparent===!0&&q.side===2&&q.forceSinglePass===!1?(q.side=1,q.needsUpdate=!0,y.renderBufferDirect(J,W,re,q,E,de),q.side=0,q.needsUpdate=!0,y.renderBufferDirect(J,W,re,q,E,de),q.side=2):y.renderBufferDirect(J,W,re,q,E,de),E.onAfterRender(y,W,J,re,q,de)}function Zs(E,W,J){W.isScene!==!0&&(W=P);let re=Q.get(E),q=g.state.lights,de=g.state.shadowsArray,Se=q.state.version,Ae=ue.getParameters(E,q.state,de,W,J),De=ue.getProgramCacheKey(Ae),ze=re.programs;re.environment=E.isMeshStandardMaterial?W.environment:null,re.fog=W.fog,re.envMap=(E.isMeshStandardMaterial?H:G).get(E.envMap||re.environment),re.envMapRotation=re.environment!==null&&E.envMap===null?W.environmentRotation:E.envMapRotation,ze===void 0&&(E.addEventListener("dispose",Pn),ze=new Map,re.programs=ze);let Ve=ze.get(De);if(Ve!==void 0){if(re.currentProgram===Ve&&re.lightsStateVersion===Se)return _u(E,Ae),Ve}else Ae.uniforms=ue.getUniforms(E),E.onBeforeCompile(Ae,y),Ve=ue.acquireProgram(Ae,De),ze.set(De,Ve),re.uniforms=Ae.uniforms;let Ne=re.uniforms;return(E.isShaderMaterial||E.isRawShaderMaterial)&&E.clipping!==!0||(Ne.clippingPlanes=Ue.uniform),_u(E,Ae),re.needsLights=(function(je){return je.isMeshLambertMaterial||je.isMeshToonMaterial||je.isMeshPhongMaterial||je.isMeshStandardMaterial||je.isShadowMaterial||je.isShaderMaterial&&je.lights===!0})(E),re.lightsStateVersion=Se,re.needsLights&&(Ne.ambientLightColor.value=q.state.ambient,Ne.lightProbe.value=q.state.probe,Ne.directionalLights.value=q.state.directional,Ne.directionalLightShadows.value=q.state.directionalShadow,Ne.spotLights.value=q.state.spot,Ne.spotLightShadows.value=q.state.spotShadow,Ne.rectAreaLights.value=q.state.rectArea,Ne.ltc_1.value=q.state.rectAreaLTC1,Ne.ltc_2.value=q.state.rectAreaLTC2,Ne.pointLights.value=q.state.point,Ne.pointLightShadows.value=q.state.pointShadow,Ne.hemisphereLights.value=q.state.hemi,Ne.directionalShadowMap.value=q.state.directionalShadowMap,Ne.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ne.spotShadowMap.value=q.state.spotShadowMap,Ne.spotLightMatrix.value=q.state.spotLightMatrix,Ne.spotLightMap.value=q.state.spotLightMap,Ne.pointShadowMap.value=q.state.pointShadowMap,Ne.pointShadowMatrix.value=q.state.pointShadowMatrix),re.currentProgram=Ve,re.uniformsList=null,Ve}function vu(E){if(E.uniformsList===null){let W=E.currentProgram.getUniforms();E.uniformsList=Mr.seqWithValue(W.seq,E.uniforms)}return E.uniformsList}function _u(E,W){let J=Q.get(E);J.outputColorSpace=W.outputColorSpace,J.batching=W.batching,J.batchingColor=W.batchingColor,J.instancing=W.instancing,J.instancingColor=W.instancingColor,J.instancingMorph=W.instancingMorph,J.skinning=W.skinning,J.morphTargets=W.morphTargets,J.morphNormals=W.morphNormals,J.morphColors=W.morphColors,J.morphTargetsCount=W.morphTargetsCount,J.numClippingPlanes=W.numClippingPlanes,J.numIntersection=W.numClipIntersection,J.vertexAlphas=W.vertexAlphas,J.vertexTangents=W.vertexTangents,J.toneMapping=W.toneMapping}vi.setAnimationLoop((function(E){Xo&&Xo(E)})),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(E){Xo=E,Be.setAnimationLoop(E),E===null?vi.stop():vi.start()},Be.addEventListener("sessionstart",du),Be.addEventListener("sessionend",pu),this.render=function(E,W){if(W!==void 0&&W.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(R===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(W),W=Be.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,W,D),g=Ce.get(E,_.length),g.init(W),_.push(g),N.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Me.setFromProjectionMatrix(N),w=this.localClippingEnabled,pe=Ue.init(this.clippingPlanes,w),f=me.get(E,v.length),f.init(),v.push(f),Be.enabled===!0&&Be.isPresenting===!0){let de=y.xr.getDepthSensingMesh();de!==null&&jo(de,W,-1/0,y.sortObjects)}jo(E,W,0,y.sortObjects),f.finish(),y.sortObjects===!0&&f.sort(be,Te),S=Be.enabled===!1||Be.isPresenting===!1||Be.hasDepthSensing()===!1,S&&xe.addToRenderList(f,E),this.info.render.frame++,pe===!0&&Ue.beginShadows();let J=g.state.shadowsArray;fe.render(J,E,W),pe===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset();let re=f.opaque,q=f.transmissive;if(g.setupLights(),W.isArrayCamera){let de=W.cameras;if(q.length>0)for(let Se=0,Ae=de.length;Se<Ae;Se++)mu(re,q,E,de[Se]);S&&xe.render(E);for(let Se=0,Ae=de.length;Se<Ae;Se++){let De=de[Se];fu(f,E,De,De.viewport)}}else q.length>0&&mu(re,q,E,W),S&&xe.render(E),fu(f,E,W);D!==null&&(se.updateMultisampleRenderTarget(D),se.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(y,E,W),ot.resetDefaultState(),B=-1,k=null,_.pop(),_.length>0?(g=_[_.length-1],pe===!0&&Ue.setGlobalState(y.clippingPlanes,g.state.camera)):g=null,v.pop(),f=v.length>0?v[v.length-1]:null},this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,W,J){Q.get(E.texture).__webglTexture=W,Q.get(E.depthTexture).__webglTexture=J;let re=Q.get(E);re.__hasExternalTextures=!0,re.__autoAllocateDepthBuffer=J===void 0,re.__autoAllocateDepthBuffer||F.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,W){let J=Q.get(E);J.__webglFramebuffer=W,J.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(E,W=0,J=0){D=E,T=W,I=J;let re=!0,q=null,de=!1,Se=!1;if(E){let Ae=Q.get(E);if(Ae.__useDefaultFramebuffer!==void 0)z.bindFramebuffer(U.FRAMEBUFFER,null),re=!1;else if(Ae.__webglFramebuffer===void 0)se.setupRenderTarget(E);else if(Ae.__hasExternalTextures)se.rebindTextures(E,Q.get(E.texture).__webglTexture,Q.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ve=E.depthTexture;if(Ae.__boundDepthTexture!==Ve){if(Ve!==null&&Q.has(Ve)&&(E.width!==Ve.image.width||E.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(E)}}let De=E.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Se=!0);let ze=Q.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(q=Array.isArray(ze[W])?ze[W][J]:ze[W],de=!0):q=E.samples>0&&se.useMultisampledRTT(E)===!1?Q.get(E).__webglMultisampledFramebuffer:Array.isArray(ze)?ze[J]:ze,j.copy(E.viewport),V.copy(E.scissor),Z=E.scissorTest}else j.copy(ae).multiplyScalar(ie).floor(),V.copy(he).multiplyScalar(ie).floor(),Z=ye;if(z.bindFramebuffer(U.FRAMEBUFFER,q)&&re&&z.drawBuffers(E,q),z.viewport(j),z.scissor(V),z.setScissorTest(Z),de){let Ae=Q.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ae.__webglTexture,J)}else if(Se){let Ae=Q.get(E.texture),De=W||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ae.__webglTexture,J||0,De)}B=-1},this.readRenderTargetPixels=function(E,W,J,re,q,de,Se){if(!E||!E.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Ae=Ae[Se]),Ae){z.bindFramebuffer(U.FRAMEBUFFER,Ae);try{let De=E.texture,ze=De.format,Ve=De.type;if(!te.textureFormatReadable(ze))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Ve))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");W>=0&&W<=E.width-re&&J>=0&&J<=E.height-q&&U.readPixels(W,J,re,q,ke.convert(ze),ke.convert(Ve),de)}finally{let De=D!==null?Q.get(D).__webglFramebuffer:null;z.bindFramebuffer(U.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(E,W,J,re,q,de,Se){if(!E||!E.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Ae=Ae[Se]),Ae){let De=E.texture,ze=De.format,Ve=De.type;if(!te.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=E.width-re&&J>=0&&J<=E.height-q){z.bindFramebuffer(U.FRAMEBUFFER,Ae);let Ne=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ne),U.bufferData(U.PIXEL_PACK_BUFFER,de.byteLength,U.STREAM_READ),U.readPixels(W,J,re,q,ke.convert(ze),ke.convert(Ve),0);let je=D!==null?Q.get(D).__webglFramebuffer:null;z.bindFramebuffer(U.FRAMEBUFFER,je);let gt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await(function(at,Mt,lt){return new Promise((function(Ze,zt){setTimeout((function At(){switch(at.clientWaitSync(Mt,at.SYNC_FLUSH_COMMANDS_BIT,0)){case at.WAIT_FAILED:zt();break;case at.TIMEOUT_EXPIRED:setTimeout(At,lt);break;default:Ze()}}),lt)}))})(U,gt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ne),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,de),U.deleteBuffer(Ne),U.deleteSync(gt),de}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,W=null,J=0){E.isTexture!==!0&&(is("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1]);let re=Math.pow(2,-J),q=Math.floor(E.image.width*re),de=Math.floor(E.image.height*re),Se=W!==null?W.x:0,Ae=W!==null?W.y:0;se.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,J,0,0,Se,Ae,q,de),z.unbindTexture()},this.copyTextureToTexture=function(E,W,J=null,re=null,q=0){let de,Se,Ae,De,ze,Ve,Ne,je,gt;E.isTexture!==!0&&(is("WebGLRenderer: copyTextureToTexture function signature has changed."),re=arguments[0]||null,E=arguments[1],W=arguments[2],q=arguments[3]||0,J=null);let at=E.isCompressedTexture?E.mipmaps[q]:E.image;J!==null?(de=J.max.x-J.min.x,Se=J.max.y-J.min.y,Ae=J.isBox3?J.max.z-J.min.z:1,De=J.min.x,ze=J.min.y,Ve=J.isBox3?J.min.z:0):(de=at.width,Se=at.height,Ae=at.depth||1,De=0,ze=0,Ve=0),re!==null?(Ne=re.x,je=re.y,gt=re.z):(Ne=0,je=0,gt=0);let Mt=ke.convert(W.format),lt=ke.convert(W.type),Ze;W.isData3DTexture?(se.setTexture3D(W,0),Ze=U.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(se.setTexture2DArray(W,0),Ze=U.TEXTURE_2D_ARRAY):(se.setTexture2D(W,0),Ze=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,W.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,W.unpackAlignment);let zt=U.getParameter(U.UNPACK_ROW_LENGTH),At=U.getParameter(U.UNPACK_IMAGE_HEIGHT),We=U.getParameter(U.UNPACK_SKIP_PIXELS),Fe=U.getParameter(U.UNPACK_SKIP_ROWS),ln=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,at.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,at.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,De),U.pixelStorei(U.UNPACK_SKIP_ROWS,ze),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ve);let qo=E.isDataArrayTexture||E.isData3DTexture,Wr=W.isDataArrayTexture||W.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let $i=Q.get(E),Yo=Q.get(W),Zo=Q.get($i.__renderTarget),Jo=Q.get(Yo.__renderTarget);z.bindFramebuffer(U.READ_FRAMEBUFFER,Zo.__webglFramebuffer),z.bindFramebuffer(U.DRAW_FRAMEBUFFER,Jo.__webglFramebuffer);for(let Qn=0;Qn<Ae;Qn++)qo&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Q.get(E).__webglTexture,q,Ve+Qn),E.isDepthTexture?(Wr&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Q.get(W).__webglTexture,q,gt+Qn),U.blitFramebuffer(De,ze,de,Se,Ne,je,de,Se,U.DEPTH_BUFFER_BIT,U.NEAREST)):Wr?U.copyTexSubImage3D(Ze,q,Ne,je,gt+Qn,De,ze,de,Se):U.copyTexSubImage2D(Ze,q,Ne,je,gt+Qn,De,ze,de,Se);z.bindFramebuffer(U.READ_FRAMEBUFFER,null),z.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Wr?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Ze,q,Ne,je,gt,de,Se,Ae,Mt,lt,at.data):W.isCompressedArrayTexture?U.compressedTexSubImage3D(Ze,q,Ne,je,gt,de,Se,Ae,Mt,at.data):U.texSubImage3D(Ze,q,Ne,je,gt,de,Se,Ae,Mt,lt,at):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,q,Ne,je,de,Se,Mt,lt,at.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,q,Ne,je,at.width,at.height,Mt,at.data):U.texSubImage2D(U.TEXTURE_2D,q,Ne,je,de,Se,Mt,lt,at);U.pixelStorei(U.UNPACK_ROW_LENGTH,zt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,At),U.pixelStorei(U.UNPACK_SKIP_PIXELS,We),U.pixelStorei(U.UNPACK_SKIP_ROWS,Fe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ln),q===0&&W.generateMipmaps&&U.generateMipmap(Ze),z.unbindTexture()},this.copyTextureToTexture3D=function(E,W,J=null,re=null,q=0){return E.isTexture!==!0&&(is("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,re=arguments[1]||null,E=arguments[2],W=arguments[3],q=arguments[4]||0),is('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,W,J,re,q)},this.initRenderTarget=function(E){Q.get(E).__webglFramebuffer===void 0&&se.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?se.setTextureCube(E,0):E.isData3DTexture?se.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?se.setTexture2DArray(E,0):se.setTexture2D(E,0),z.unbindTexture()},this.resetState=function(){T=0,I=0,D=null,z.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};var Ya=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new _e(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Za=class extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tt,this.environmentIntensity=1,this.environmentRotation=new Tt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Pc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=pc,this.updateRanges=[],this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ht=new M,Ja=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=En(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=En(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=En(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=En(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new wt(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ir=class extends Gn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},dr,$r=new M,pr=new M,fr=new M,mr=new le,Qr=new le,ep=new Le,va=new M,es=new M,_a=new M,vd=new le,Rl=new le,_d=new le,us=class extends Ct{constructor(e=new Ir){if(super(),this.isSprite=!0,this.type="Sprite",dr===void 0){dr=new et;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Pc(t,5);dr.setIndex([0,1,2,0,2,3]),dr.setAttribute("position",new Ja(n,3,0,!1)),dr.setAttribute("uv",new Ja(n,2,3,!1))}this.geometry=dr,this.material=e,this.center=new le(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),pr.setFromMatrixScale(this.matrixWorld),ep.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),fr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&pr.multiplyScalar(-fr.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let a=this.center;xa(va.set(-.5,-.5,0),fr,a,pr,r,s),xa(es.set(.5,-.5,0),fr,a,pr,r,s),xa(_a.set(.5,.5,0),fr,a,pr,r,s),vd.set(0,0),Rl.set(1,0),_d.set(1,1);let o=e.ray.intersectTriangle(va,es,_a,!1,$r);if(o===null&&(xa(es.set(-.5,.5,0),fr,a,pr,r,s),Rl.set(0,1),o=e.ray.intersectTriangle(va,_a,es,!1,$r),o===null))return;let l=e.ray.origin.distanceTo($r);l<e.near||l>e.far||t.push({distance:l,point:$r.clone(),uv:Fn.getInterpolation($r,va,es,_a,vd,Rl,_d,new le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function xa(i,e,t,n,r,s){mr.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Qr.x=s*mr.x-r*mr.y,Qr.y=r*mr.x+s*mr.y):Qr.copy(mr),i.copy(e),i.x+=Qr.x,i.y+=Qr.y,i.applyMatrix4(ep)}var Yv=new M,Zv=new M;var Jv=new M,Kv=new dt,$v=new dt,Qv=new M,e_=new Le,t_=new M,n_=new vn,i_=new Le,r_=new Ui;var Lc=class extends Gt{constructor(e=null,t=1,n=1,r,s,a,o,l,c=1003,h=1003,u,d){super(null,a,o,l,c,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},s_=new Le,a_=new Le;var Ka=class extends wt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},gr=new Le,xd=new Le,ya=[],yd=new gn,Gg=new Le,ts=new Qe,ns=new vn,Wt=class extends Qe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ka(new Float32Array(16*n),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Gg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gr),yd.copy(e.boundingBox).applyMatrix4(gr),this.boundingBox.union(yd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gr),ns.copy(e.boundingSphere).applyMatrix4(gr),this.boundingSphere.union(ns)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=e*(n.length+1)+1;for(let a=0;a<n.length;a++)n[a]=r[s+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(ts.geometry=this.geometry,ts.material=this.material,ts.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ns.copy(this.boundingSphere),ns.applyMatrix4(n),e.ray.intersectsSphere(ns)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,gr),xd.multiplyMatrices(n,gr),ts.matrixWorld=xd,ts.raycast(e,ya);for(let a=0,o=ya.length;a<o;a++){let l=ya[a];l.instanceId=s,l.object=this,t.push(l)}ya.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ka(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Lc(new Float32Array(r*this.count),r,this.count,vh,bn));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Uc=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,r){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=r}reset(){this.list.length=0,this.index=0}},o_=new Le,l_=new _e(1,1,1),c_=new Cr,h_=new gn,u_=new vn,d_=new M,p_=new M,f_=new M,m_=new Uc,g_=new Qe;var v_=new M,__=new M,x_=new Le,y_=new Ui,M_=new vn,S_=new M,E_=new M;var b_=new M,w_=new M;var Di=class extends Gn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Md=new Le,Dc=new Ui,Ma=new vn,Sa=new M,Pr=class extends Ct{constructor(e=new et,t=new Di){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(r),Ma.radius+=s,e.ray.intersectsSphere(Ma)===!1)return;Md.copy(r).invert(),Dc.copy(e.ray).applyMatrix4(Md);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++){let p=c.getX(u);Sa.fromBufferAttribute(h,p),Sd(Sa,p,l,r,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)Sa.fromBufferAttribute(h,u),Sd(Sa,u,l,r,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Sd(i,e,t,n,r,s,a){let o=Dc.distanceSqToPoint(i);if(o<t){let l=new M;Dc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var It=class extends Gt{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},sn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,s=n.length,a;a=t||e*n[s-1];let o,l=0,c=s-1;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),o=n[r]-a,o<0)l=r+1;else{if(!(o>0)){c=r;break}c=r-1}if(r=c,n[r]===a)return r/(s-1);let h=n[r];return(r+(a-h)/(n[r+1]-h))/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new le:new M);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new M,r=[],s=[],a=[],o=new M,l=new Le;for(let p=0;p<=e;p++){let m=p/e;r[p]=this.getTangentAt(m,new M)}s[0]=new M,a[0]=new M;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Rt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,m))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Rt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],p*m)),a[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ds=class extends sn{constructor(e=0,t=0,n=1,r=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new le){let n=t,r=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(s=a?0:r),this.aClockwise!==!0||a||(s===r?s=-r:s-=r);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Nc=class extends ds{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Sh(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,r(a,o,d,p)},calc:function(s){let a=s*s;return i+e*s+t*a+n*(a*s)}}}var Ea=new M,Cl=new Sh,Il=new Sh,Pl=new Sh,Oc=class extends sn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new M){let n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=r[(c-1)%s]:(Ea.subVectors(r[0],r[1]).add(r[0]),o=Ea);let u=r[c%s],d=r[(c+1)%s];if(this.closed||c+2<s?l=r[(c+2)%s]:(Ea.subVectors(r[s-1],r[s-2]).add(r[s-1]),l=Ea),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(o.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),f=Math.pow(d.distanceToSquared(l),p);x<1e-4&&(x=1),m<1e-4&&(m=x),f<1e-4&&(f=x),Cl.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,m,x,f),Il.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,m,x,f),Pl.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,m,x,f)}else this.curveType==="catmullrom"&&(Cl.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),Il.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),Pl.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return n.set(Cl.calc(h),Il.calc(h),Pl.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new M().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ed(i,e,t,n,r){let s=.5*(n-e),a=.5*(r-t),o=i*i;return(2*t-2*n+s+a)*(i*o)+(-3*t+3*n-2*s-a)*o+s*i+t}function ss(i,e,t,n){return(function(r,s){let a=1-r;return a*a*s})(i,e)+(function(r,s){return 2*(1-r)*r*s})(i,t)+(function(r,s){return r*r*s})(i,n)}function as(i,e,t,n,r){return(function(s,a){let o=1-s;return o*o*o*a})(i,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(i,t)+(function(s,a){return 3*(1-s)*s*s*a})(i,n)+(function(s,a){return s*s*s*a})(i,r)}var $a=class extends sn{constructor(e=new le,t=new le,n=new le,r=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new le){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(as(e,r.x,s.x,a.x,o.x),as(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Bc=class extends sn{constructor(e=new M,t=new M,n=new M,r=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new M){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(as(e,r.x,s.x,a.x,o.x),as(e,r.y,s.y,a.y,o.y),as(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Qa=class extends sn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fc=class extends sn{constructor(e=new M,t=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new M){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},eo=class extends sn{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(ss(e,r.x,s.x,a.x),ss(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},to=class extends sn{constructor(e=new M,t=new M,n=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new M){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(ss(e,r.x,s.x,a.x),ss(e,r.y,s.y,a.y),ss(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},no=class extends sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Ed(o,l.x,c.x,h.x,u.x),Ed(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new le().fromArray(r))}return this}},io=Object.freeze({__proto__:null,ArcCurve:Nc,CatmullRomCurve3:Oc,CubicBezierCurve:$a,CubicBezierCurve3:Bc,EllipseCurve:ds,LineCurve:Qa,LineCurve3:Fc,QuadraticBezierCurve:eo,QuadraticBezierCurve3:to,SplineCurve:no}),zc=class extends sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new io[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new io[r.type]().fromJSON(r))}return this}},ps=class extends zc{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Qa(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new eo(this.currentPoint.clone(),new le(e,t),new le(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){let o=new $a(this.currentPoint.clone(),new le(e,t),new le(n,r),new le(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new no(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,r,s,a,o,l),this}absellipse(e,t,n,r,s,a,o,l){let c=new ds(e,t,n,r,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Lr=class i extends et{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,n=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=Rt(r,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new M,d=new le,p=new M,m=new M,x=new M,f=0,g=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:f=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=1*g,p.y=-f,p.z=0*g,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:f=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=1*g,p.y=-f,p.z=0*g,m.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(m)}for(let v=0;v<=t;v++){let _=n+v*h*r,y=Math.sin(_),R=Math.cos(_);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*y,u.y=e[T].y,u.z=e[T].x*R,a.push(u.x,u.y,u.z),d.x=v/t,d.y=T/(e.length-1),o.push(d.x,d.y);let I=l[3*T+0]*y,D=l[3*T+1],B=l[3*T+0]*R;c.push(I,D,B)}}for(let v=0;v<t;v++)for(let _=0;_<e.length-1;_++){let y=_+v*e.length,R=y,T=y+e.length,I=y+e.length+1,D=y+1;s.push(R,T,D),s.push(I,D,T)}this.setIndex(s),this.setAttribute("position",new Re(a,3)),this.setAttribute("uv",new Re(o,2)),this.setAttribute("normal",new Re(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Hc=class i extends Lr{constructor(e=1,t=1,n=4,r=8){let s=new ps;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},kc=class i extends et{constructor(e=1,t=32,n=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new M,h=new le;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Re(a,3)),this.setAttribute("normal",new Re(o,3)),this.setAttribute("uv",new Re(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ni=class i extends et{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],p=[],m=0,x=[],f=n/2,g=0;function v(_){let y=m,R=new le,T=new M,I=0,D=_===!0?e:t,B=_===!0?1:-1;for(let j=1;j<=r;j++)u.push(0,f*B,0),d.push(0,B,0),p.push(.5,.5),m++;let k=m;for(let j=0;j<=r;j++){let V=j/r*l+o,Z=Math.cos(V),X=Math.sin(V);T.x=D*X,T.y=f*B,T.z=D*Z,u.push(T.x,T.y,T.z),d.push(0,B,0),R.x=.5*Z+.5,R.y=.5*X*B+.5,p.push(R.x,R.y),m++}for(let j=0;j<r;j++){let V=y+j,Z=k+j;_===!0?h.push(Z,Z+1,V):h.push(Z+1,Z,V),I+=3}c.addGroup(g,I,_===!0?1:2),g+=I}(function(){let _=new M,y=new M,R=0,T=(t-e)/n;for(let I=0;I<=s;I++){let D=[],B=I/s,k=B*(t-e)+e;for(let j=0;j<=r;j++){let V=j/r,Z=V*l+o,X=Math.sin(Z),K=Math.cos(Z);y.x=k*X,y.y=-B*n+f,y.z=k*K,u.push(y.x,y.y,y.z),_.set(X,T,K).normalize(),d.push(_.x,_.y,_.z),p.push(V,1-B),D.push(m++)}x.push(D)}for(let I=0;I<r;I++)for(let D=0;D<s;D++){let B=x[D][I],k=x[D+1][I],j=x[D+1][I+1],V=x[D][I+1];(e>0||D!==0)&&(h.push(B,k,V),R+=3),(t>0||D!==s-1)&&(h.push(k,j,V),R+=3)}c.addGroup(g,R,0),g+=R})(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Re(u,3)),this.setAttribute("normal",new Re(d,3)),this.setAttribute("uv",new Re(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Vc=class i extends Ni{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Oi=class i extends et{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],a=[];function o(d,p,m,x){let f=x+1,g=[];for(let v=0;v<=f;v++){g[v]=[];let _=d.clone().lerp(m,v/f),y=p.clone().lerp(m,v/f),R=f-v;for(let T=0;T<=R;T++)g[v][T]=T===0&&v===f?_:_.clone().lerp(y,T/R)}for(let v=0;v<f;v++)for(let _=0;_<2*(f-v)-1;_++){let y=Math.floor(_/2);_%2==0?(l(g[v][y+1]),l(g[v+1][y]),l(g[v][y])):(l(g[v][y+1]),l(g[v+1][y+1]),l(g[v+1][y]))}}function l(d){s.push(d.x,d.y,d.z)}function c(d,p){let m=3*d;p.x=e[m+0],p.y=e[m+1],p.z=e[m+2]}function h(d,p,m,x){x<0&&d.x===1&&(a[p]=d.x-1),m.x===0&&m.z===0&&(a[p]=x/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let p=new M,m=new M,x=new M;for(let f=0;f<t.length;f+=3)c(t[f+0],p),c(t[f+1],m),c(t[f+2],x),o(p,m,x,d)})(r),(function(d){let p=new M;for(let m=0;m<s.length;m+=3)p.x=s[m+0],p.y=s[m+1],p.z=s[m+2],p.normalize().multiplyScalar(d),s[m+0]=p.x,s[m+1]=p.y,s[m+2]=p.z})(n),(function(){let d=new M;for(let m=0;m<s.length;m+=3){d.x=s[m+0],d.y=s[m+1],d.z=s[m+2];let x=u(d)/2/Math.PI+.5,f=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(x,1-f)}var p;(function(){let m=new M,x=new M,f=new M,g=new M,v=new le,_=new le,y=new le;for(let R=0,T=0;R<s.length;R+=9,T+=6){m.set(s[R+0],s[R+1],s[R+2]),x.set(s[R+3],s[R+4],s[R+5]),f.set(s[R+6],s[R+7],s[R+8]),v.set(a[T+0],a[T+1]),_.set(a[T+2],a[T+3]),y.set(a[T+4],a[T+5]),g.copy(m).add(x).add(f).divideScalar(3);let I=u(g);h(v,T+0,m,I),h(_,T+2,x,I),h(y,T+4,f,I)}})(),(function(){for(let m=0;m<a.length;m+=6){let x=a[m+0],f=a[m+2],g=a[m+4],v=Math.max(x,f,g),_=Math.min(x,f,g);v>.9&&_<.1&&(x<.2&&(a[m+0]+=1),f<.2&&(a[m+2]+=1),g<.2&&(a[m+4]+=1))}})()})(),this.setAttribute("position",new Re(s,3)),this.setAttribute("normal",new Re(s.slice(),3)),this.setAttribute("uv",new Re(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Gc=class i extends Oi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ba=new M,wa=new M,Ll=new M,Ta=new Fn,Wc=class extends et{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(Na*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:x,b:f,c:g}=Ta;if(x.fromBufferAttribute(o,c[0]),f.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),Ta.getNormal(Ll),u[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,u[1]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,u[2]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let v=0;v<3;v++){let _=(v+1)%3,y=u[v],R=u[_],T=Ta[h[v]],I=Ta[h[_]],D=`${y}_${R}`,B=`${R}_${y}`;B in d&&d[B]?(Ll.dot(d[B].normal)<=s&&(p.push(T.x,T.y,T.z),p.push(I.x,I.y,I.z)),d[B]=null):D in d||(d[D]={index0:c[v],index1:c[_],normal:Ll.clone()})}}for(let m in d)if(d[m]){let{index0:x,index1:f}=d[m];ba.fromBufferAttribute(o,x),wa.fromBufferAttribute(o,f),p.push(ba.x,ba.y,ba.z),p.push(wa.x,wa.y,wa.z)}this.setAttribute("position",new Re(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ro=class extends ps{constructor(e){super(e),this.uuid=Hn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new ps().fromJSON(r))}return this}},Wg=function(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=bd(i,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,p;if(n&&(s=(function(m,x,f,g){let v=[],_,y,R,T,I;for(_=0,y=x.length;_<y;_++)R=x[_]*g,T=_<y-1?x[_+1]*g:m.length,I=bd(m,R,T,g,!1),I===I.next&&(I.steiner=!0),v.push($g(I));for(v.sort(Zg),_=0;_<v.length;_++)f=Jg(v[_],f);return f})(i,e,s,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let m=t;m<r;m+=t)u=i[m],d=i[m+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return fs(s,a,t,o,l,p,0),a};function bd(i,e,t,n,r){let s,a;if(r===(function(o,l,c,h){let u=0;for(let d=l,p=c-h;d<c;d+=h)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u})(i,e,t,n)>0)for(s=e;s<t;s+=n)a=wd(s,i[s],i[s+1],a);else for(s=t-n;s>=e;s-=n)a=wd(s,i[s],i[s+1],a);return a&&po(a,a.next)&&(gs(a),a=a.next),a}function Bi(i,e){if(!i)return i;e||(e=i);let t,n=i;do if(t=!1,n.steiner||!po(n,n.next)&&ft(n.prev,n,n.next)!==0)n=n.next;else{if(gs(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function fs(i,e,t,n,r,s,a){if(!i)return;!a&&s&&(function(h,u,d,p){let m=h;do m.z===0&&(m.z=Xc(m.x,m.y,u,d,p)),m.prevZ=m.prev,m.nextZ=m.next,m=m.next;while(m!==h);m.prevZ.nextZ=null,m.prevZ=null,(function(x){let f,g,v,_,y,R,T,I,D=1;do{for(g=x,x=null,y=null,R=0;g;){for(R++,v=g,T=0,f=0;f<D&&(T++,v=v.nextZ,v);f++);for(I=D;T>0||I>0&&v;)T!==0&&(I===0||!v||g.z<=v.z)?(_=g,g=g.nextZ,T--):(_=v,v=v.nextZ,I--),y?y.nextZ=_:x=_,_.prevZ=y,y=_;g=v}y.nextZ=null,D*=2}while(R>1)})(m)})(i,n,r,s);let o,l,c=i;for(;i.prev!==i.next;)if(o=i.prev,l=i.next,s?jg(i,n,r,s):Xg(i))e.push(o.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),gs(i),i=l.next,c=l.next;else if((i=l)===c){a?a===1?fs(i=qg(Bi(i),e,t),e,t,n,r,s,2):a===2&&Yg(i,e,t,n,r,s):fs(Bi(i),e,t,n,r,s,1);break}}function Xg(i){let e=i.prev,t=i,n=i.next;if(ft(e,t,n)>=0)return!1;let r=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=r<s?r<a?r:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=r>s?r>a?r:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c,m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=p&&xr(r,o,s,l,a,c,m.x,m.y)&&ft(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function jg(i,e,t,n){let r=i.prev,s=i,a=i.next;if(ft(r,s,a)>=0)return!1;let o=r.x,l=s.x,c=a.x,h=r.y,u=s.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,m=h<u?h<d?h:d:u<d?u:d,x=o>l?o>c?o:c:l>c?l:c,f=h>u?h>d?h:d:u>d?u:d,g=Xc(p,m,e,t,n),v=Xc(x,f,e,t,n),_=i.prevZ,y=i.nextZ;for(;_&&_.z>=g&&y&&y.z<=v;){if(_.x>=p&&_.x<=x&&_.y>=m&&_.y<=f&&_!==r&&_!==a&&xr(o,h,l,u,c,d,_.x,_.y)&&ft(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=p&&y.x<=x&&y.y>=m&&y.y<=f&&y!==r&&y!==a&&xr(o,h,l,u,c,d,y.x,y.y)&&ft(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=g;){if(_.x>=p&&_.x<=x&&_.y>=m&&_.y<=f&&_!==r&&_!==a&&xr(o,h,l,u,c,d,_.x,_.y)&&ft(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=v;){if(y.x>=p&&y.x<=x&&y.y>=m&&y.y<=f&&y!==r&&y!==a&&xr(o,h,l,u,c,d,y.x,y.y)&&ft(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function qg(i,e,t){let n=i;do{let r=n.prev,s=n.next.next;!po(r,s)&&tp(r,n,n.next,s)&&ms(r,s)&&ms(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),gs(n),gs(n.next),n=i=s),n=n.next}while(n!==i);return Bi(n)}function Yg(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Qg(a,o)){let l=np(a,o);return a=Bi(a,a.next),l=Bi(l,l.next),fs(a,e,t,n,r,s,0),void fs(l,e,t,n,r,s,0)}o=o.next}a=a.next}while(a!==i)}function Zg(i,e){return i.x-e.x}function Jg(i,e){let t=(function(r,s){let a,o=s,l=-1/0,c=r.x,h=r.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let f=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(f<=c&&f>l&&(l=f,a=o.x<o.next.x?o:o.next,f===c))return a}o=o.next}while(o!==s);if(!a)return null;let u=a,d=a.x,p=a.y,m,x=1/0;o=a;do c>=o.x&&o.x>=d&&c!==o.x&&xr(h<p?c:l,h,d,p,h<p?l:c,h,o.x,o.y)&&(m=Math.abs(h-o.y)/(c-o.x),ms(o,r)&&(m<x||m===x&&(o.x>a.x||o.x===a.x&&Kg(a,o)))&&(a=o,x=m)),o=o.next;while(o!==u);return a})(i,e);if(!t)return e;let n=np(t,i);return Bi(n,n.next),Bi(t,t.next)}function Kg(i,e){return ft(i.prev,i,e.prev)<0&&ft(e.next,i,i.next)<0}function Xc(i,e,t,n,r){return(i=1431655765&((i=858993459&((i=252645135&((i=16711935&((i=(i-t)*r|0)|i<<8))|i<<4))|i<<2))|i<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function $g(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function xr(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function Qg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!(function(t,n){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==n.i&&r.next.i!==n.i&&tp(r,r.next,t,n))return!0;r=r.next}while(r!==t);return!1})(i,e)&&(ms(i,e)&&ms(e,i)&&(function(t,n){let r=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&a<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==t);return s})(i,e)&&(ft(i.prev,i,e.prev)||ft(i,e.prev,e))||po(i,e)&&ft(i.prev,i,i.next)>0&&ft(e.prev,e,e.next)>0)}function ft(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function po(i,e){return i.x===e.x&&i.y===e.y}function tp(i,e,t,n){let r=Ra(ft(i,e,t)),s=Ra(ft(i,e,n)),a=Ra(ft(t,n,i)),o=Ra(ft(t,n,e));return r!==s&&a!==o||!(r!==0||!Aa(i,t,e))||!(s!==0||!Aa(i,n,e))||!(a!==0||!Aa(t,i,n))||!(o!==0||!Aa(t,e,n))}function Aa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ra(i){return i>0?1:i<0?-1:0}function ms(i,e){return ft(i.prev,i,i.next)<0?ft(i,e,i.next)>=0&&ft(i,i.prev,e)>=0:ft(i,e,i.prev)<0||ft(i,i.next,e)<0}function np(i,e){let t=new jc(i.i,i.x,i.y),n=new jc(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function wd(i,e,t,n){let r=new jc(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function gs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function jc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var oi=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return .5*n}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];Td(e),Ad(n,e);let a=e.length;t.forEach(Td);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Ad(n,t[l]);let o=Wg(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Td(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ad(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var qc=class i extends et{constructor(e=new ro([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:e0,_,y,R,T,I,D=!1;g&&(_=g.getSpacedPoints(h),D=!0,d=!1,y=g.computeFrenetFrames(h,!1),R=new M,T=new M,I=new M),d||(f=0,p=0,m=0,x=0);let B=o.extractPoints(c),k=B.shape,j=B.holes;if(!oi.isClockWise(k)){k=k.reverse();for(let L=0,A=j.length;L<A;L++){let P=j[L];oi.isClockWise(P)&&(j[L]=P.reverse())}}let V=oi.triangulateShape(k,j),Z=k;for(let L=0,A=j.length;L<A;L++){let P=j[L];k=k.concat(P)}function X(L,A,P){return A||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(A,P)}let K=k.length,ee=V.length;function oe(L,A,P){let S,C,F,te=L.x-A.x,z=L.y-A.y,$=P.x-L.x,Q=P.y-L.y,se=te*te+z*z,G=te*Q-z*$;if(Math.abs(G)>Number.EPSILON){let H=Math.sqrt(se),O=Math.sqrt($*$+Q*Q),ne=A.x-z/H,ce=A.y+te/H,ue=((P.x-Q/O-ne)*Q-(P.y+$/O-ce)*$)/(te*Q-z*$);S=ne+te*ue-L.x,C=ce+z*ue-L.y;let Y=S*S+C*C;if(Y<=2)return new le(S,C);F=Math.sqrt(Y/2)}else{let H=!1;te>Number.EPSILON?$>Number.EPSILON&&(H=!0):te<-Number.EPSILON?$<-Number.EPSILON&&(H=!0):Math.sign(z)===Math.sign(Q)&&(H=!0),H?(S=-z,C=te,F=Math.sqrt(se)):(S=te,C=z,F=Math.sqrt(se/2))}return new le(S/F,C/F)}let ie=[];for(let L=0,A=Z.length,P=A-1,S=L+1;L<A;L++,P++,S++)P===A&&(P=0),S===A&&(S=0),ie[L]=oe(Z[L],Z[P],Z[S]);let be=[],Te,ae=ie.concat();for(let L=0,A=j.length;L<A;L++){let P=j[L];Te=[];for(let S=0,C=P.length,F=C-1,te=S+1;S<C;S++,F++,te++)F===C&&(F=0),te===C&&(te=0),Te[S]=oe(P[S],P[F],P[te]);be.push(Te),ae=ae.concat(Te)}for(let L=0;L<f;L++){let A=L/f,P=p*Math.cos(A*Math.PI/2),S=m*Math.sin(A*Math.PI/2)+x;for(let C=0,F=Z.length;C<F;C++){let te=X(Z[C],ie[C],S);Me(te.x,te.y,-P)}for(let C=0,F=j.length;C<F;C++){let te=j[C];Te=be[C];for(let z=0,$=te.length;z<$;z++){let Q=X(te[z],Te[z],S);Me(Q.x,Q.y,-P)}}}let he=m+x;for(let L=0;L<K;L++){let A=d?X(k[L],ae[L],he):k[L];D?(T.copy(y.normals[0]).multiplyScalar(A.x),R.copy(y.binormals[0]).multiplyScalar(A.y),I.copy(_[0]).add(T).add(R),Me(I.x,I.y,I.z)):Me(A.x,A.y,0)}for(let L=1;L<=h;L++)for(let A=0;A<K;A++){let P=d?X(k[A],ae[A],he):k[A];D?(T.copy(y.normals[L]).multiplyScalar(P.x),R.copy(y.binormals[L]).multiplyScalar(P.y),I.copy(_[L]).add(T).add(R),Me(I.x,I.y,I.z)):Me(P.x,P.y,u/h*L)}for(let L=f-1;L>=0;L--){let A=L/f,P=p*Math.cos(A*Math.PI/2),S=m*Math.sin(A*Math.PI/2)+x;for(let C=0,F=Z.length;C<F;C++){let te=X(Z[C],ie[C],S);Me(te.x,te.y,u+P)}for(let C=0,F=j.length;C<F;C++){let te=j[C];Te=be[C];for(let z=0,$=te.length;z<$;z++){let Q=X(te[z],Te[z],S);D?Me(Q.x,Q.y+_[h-1].y,_[h-1].x+P):Me(Q.x,Q.y,u+P)}}}function ye(L,A){let P=L.length;for(;--P>=0;){let S=P,C=P-1;C<0&&(C=L.length-1);for(let F=0,te=h+2*f;F<te;F++){let z=K*F,$=K*(F+1);w(A+S+z,A+C+z,A+C+$,A+S+$)}}}function Me(L,A,P){l.push(L),l.push(A),l.push(P)}function pe(L,A,P){b(L),b(A),b(P);let S=r.length/3,C=v.generateTopUV(n,r,S-3,S-2,S-1);N(C[0]),N(C[1]),N(C[2])}function w(L,A,P,S){b(L),b(A),b(S),b(A),b(P),b(S);let C=r.length/3,F=v.generateSideWallUV(n,r,C-6,C-3,C-2,C-1);N(F[0]),N(F[1]),N(F[3]),N(F[1]),N(F[2]),N(F[3])}function b(L){r.push(l[3*L+0]),r.push(l[3*L+1]),r.push(l[3*L+2])}function N(L){s.push(L.x),s.push(L.y)}(function(){let L=r.length/3;if(d){let A=0,P=K*A;for(let S=0;S<ee;S++){let C=V[S];pe(C[2]+P,C[1]+P,C[0]+P)}A=h+2*f,P=K*A;for(let S=0;S<ee;S++){let C=V[S];pe(C[0]+P,C[1]+P,C[2]+P)}}else{for(let A=0;A<ee;A++){let P=V[A];pe(P[2],P[1],P[0])}for(let A=0;A<ee;A++){let P=V[A];pe(P[0]+K*h,P[1]+K*h,P[2]+K*h)}}n.addGroup(L,r.length/3-L,0)})(),(function(){let L=r.length/3,A=0;ye(Z,A),A+=Z.length;for(let P=0,S=j.length;P<S;P++){let C=j[P];ye(C,A),A+=C.length}n.addGroup(L,r.length/3-L,1)})()}this.setAttribute("position",new Re(r,3)),this.setAttribute("uv",new Re(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,r){if(r.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];r.shapes.push(o.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},n),n.extrudePath!==void 0&&(r.options.extrudePath=n.extrudePath.toJSON()),r})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new io[r.type]().fromJSON(r)),new i(n,e.options)}},e0={generateTopUV:function(i,e,t,n,r){let s=e[3*t],a=e[3*t+1],o=e[3*n],l=e[3*n+1],c=e[3*r],h=e[3*r+1];return[new le(s,a),new le(o,l),new le(c,h)]},generateSideWallUV:function(i,e,t,n,r,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*r],p=e[3*r+1],m=e[3*r+2],x=e[3*s],f=e[3*s+1],g=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new le(a,1-l),new le(c,1-u),new le(d,1-m),new le(x,1-g)]:[new le(o,1-l),new le(h,1-u),new le(p,1-m),new le(f,1-g)]}},Fi=class i extends Oi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Yc=class i extends Oi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Zc=class i extends et{constructor(e=.5,t=1,n=32,r=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(r=Math.max(1,r)),p=new M,m=new le;for(let x=0;x<=r;x++){for(let f=0;f<=n;f++){let g=s+f/n*a;p.x=u*Math.cos(g),p.y=u*Math.sin(g),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<r;x++){let f=x*(n+1);for(let g=0;g<n;g++){let v=g+f,_=v,y=v+n+1,R=v+n+2,T=v+1;o.push(_,y,T),o.push(y,R,T)}}this.setIndex(o),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(c,3)),this.setAttribute("uv",new Re(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Jc=class i extends et{constructor(e=new ro([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],r=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=r.length/3,d=h.extractPoints(t),p=d.shape,m=d.holes;oi.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,g=m.length;f<g;f++){let v=m[f];oi.isClockWise(v)===!0&&(m[f]=v.reverse())}let x=oi.triangulateShape(p,m);for(let f=0,g=m.length;f<g;f++){let v=m[f];p=p.concat(v)}for(let f=0,g=p.length;f<g;f++){let v=p[f];r.push(v.x,v.y,0),s.push(0,0,1),a.push(v.x,v.y)}for(let f=0,g=x.length;f<g;f++){let v=x[f],_=v[0]+u,y=v[1]+u,R=v[2]+u;n.push(_,y,R),l+=3}}this.setIndex(n),this.setAttribute("position",new Re(r,3)),this.setAttribute("normal",new Re(s,3)),this.setAttribute("uv",new Re(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let a=t[r];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];n.push(a)}return new i(n,e.curveSegments)}},Wn=class i extends et{constructor(e=1,t=32,n=16,r=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new M,d=new M,p=[],m=[],x=[],f=[];for(let g=0;g<=n;g++){let v=[],_=g/n,y=0;g===0&&a===0?y=.5/t:g===n&&l===Math.PI&&(y=-.5/t);for(let R=0;R<=t;R++){let T=R/t;u.x=-e*Math.cos(r+T*s)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(r+T*s)*Math.sin(a+_*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),f.push(T+y,1-_),v.push(c++)}h.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){let _=h[g][v+1],y=h[g][v],R=h[g+1][v],T=h[g+1][v+1];(g!==0||a>0)&&p.push(_,y,T),(g!==n-1||l<Math.PI)&&p.push(y,R,T)}this.setIndex(p),this.setAttribute("position",new Re(m,3)),this.setAttribute("normal",new Re(x,3)),this.setAttribute("uv",new Re(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Kc=class i extends Oi{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},vs=class i extends et{constructor(e=1,t=.4,n=12,r=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],l=[],c=[],h=new M,u=new M,d=new M;for(let p=0;p<=n;p++)for(let m=0;m<=r;m++){let x=m/r*s,f=p/n*Math.PI*2;u.x=(e+t*Math.cos(f))*Math.cos(x),u.y=(e+t*Math.cos(f))*Math.sin(x),u.z=t*Math.sin(f),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/r),c.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=r;m++){let x=(r+1)*p+m-1,f=(r+1)*(p-1)+m-1,g=(r+1)*(p-1)+m,v=(r+1)*p+m;a.push(x,f,v),a.push(f,g,v)}this.setIndex(a),this.setAttribute("position",new Re(o,3)),this.setAttribute("normal",new Re(l,3)),this.setAttribute("uv",new Re(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},$c=class i extends et{constructor(e=1,t=.4,n=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:a},n=Math.floor(n),r=Math.floor(r);let o=[],l=[],c=[],h=[],u=new M,d=new M,p=new M,m=new M,x=new M,f=new M,g=new M;for(let _=0;_<=n;++_){let y=_/n*s*Math.PI*2;v(y,s,a,e,p),v(y+.01,s,a,e,m),f.subVectors(m,p),g.addVectors(m,p),x.crossVectors(f,g),g.crossVectors(x,f),x.normalize(),g.normalize();for(let R=0;R<=r;++R){let T=R/r*Math.PI*2,I=-t*Math.cos(T),D=t*Math.sin(T);u.x=p.x+(I*g.x+D*x.x),u.y=p.y+(I*g.y+D*x.y),u.z=p.z+(I*g.z+D*x.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(_/n),h.push(R/r)}}for(let _=1;_<=n;_++)for(let y=1;y<=r;y++){let R=(r+1)*(_-1)+(y-1),T=(r+1)*_+(y-1),I=(r+1)*_+y,D=(r+1)*(_-1)+y;o.push(R,T,D),o.push(T,I,D)}function v(_,y,R,T,I){let D=Math.cos(_),B=Math.sin(_),k=R/y*_,j=Math.cos(k);I.x=T*(2+j)*.5*D,I.y=T*(2+j)*B*.5,I.z=T*Math.sin(k)*.5}this.setIndex(o),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(c,3)),this.setAttribute("uv",new Re(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Qc=class i extends et{constructor(e=new to(new M(-1,-1,0),new M(-1,1,0),new M(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new M,l=new M,c=new le,h=new M,u=[],d=[],p=[],m=[];function x(f){h=e.getPointAt(f/t,h);let g=a.normals[f],v=a.binormals[f];for(let _=0;_<=r;_++){let y=_/r*Math.PI*2,R=Math.sin(y),T=-Math.cos(y);l.x=T*g.x+R*v.x,l.y=T*g.y+R*v.y,l.z=T*g.z+R*v.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let f=0;f<t;f++)x(f);x(s===!1?t:0),(function(){for(let f=0;f<=t;f++)for(let g=0;g<=r;g++)c.x=f/t,c.y=g/r,p.push(c.x,c.y)})(),(function(){for(let f=1;f<=t;f++)for(let g=1;g<=r;g++){let v=(r+1)*(f-1)+(g-1),_=(r+1)*f+(g-1),y=(r+1)*f+g,R=(r+1)*(f-1)+g;m.push(v,_,R),m.push(_,y,R)}})()})(),this.setIndex(m),this.setAttribute("position",new Re(u,3)),this.setAttribute("normal",new Re(d,3)),this.setAttribute("uv",new Re(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new io[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},eh=class extends et{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,r=new M,s=new M;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,m=d+u.count;p<m;p+=3)for(let x=0;x<3;x++){let f=o.getX(p+x),g=o.getX(p+(x+1)%3);r.fromBufferAttribute(a,f),s.fromBufferAttribute(a,g),Rd(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Rd(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Re(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Rd(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)!==!0&&t.has(r)!==!0&&(t.add(n),t.add(r),!0)}var T_=Object.freeze({__proto__:null,BoxGeometry:Ar,CapsuleGeometry:Hc,CircleGeometry:kc,ConeGeometry:Vc,CylinderGeometry:Ni,DodecahedronGeometry:Gc,EdgesGeometry:Wc,ExtrudeGeometry:qc,IcosahedronGeometry:Fi,LatheGeometry:Lr,OctahedronGeometry:Yc,PlaneGeometry:rn,PolyhedronGeometry:Oi,RingGeometry:Zc,ShapeGeometry:Jc,SphereGeometry:Wn,TetrahedronGeometry:Kc,TorusGeometry:vs,TorusKnotGeometry:$c,TubeGeometry:Qc,WireframeGeometry:eh});var ct=class extends Gn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Ca(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function t0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ur=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];t:{e:{let a;n:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break n}if(e>=s)break t;{let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0}}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},th=class extends Ur{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Eu,endingEnd:Eu}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case bu:s=e,o=2*t-n;break;case wu:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bu:a=e,l=2*n-t;break;case wu:a=1,l=n+r[1]-r[0];break;default:a=e-1,l=t}let c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(n-t)/(r-t),x=m*m,f=x*m,g=-d*f+2*d*x-d*m,v=(1+d)*f+(-1.5-2*d)*x+(-.5+d)*m+1,_=(-1-p)*f+(1.5+p)*x+.5*m,y=p*f-p*x;for(let R=0;R!==o;++R)s[R]=g*a[h+R]+v*a[c+R]+_*a[l+R]+y*a[u+R];return s}},nh=class extends Ur{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},ih=class extends Ur{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},mn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ca(t,this.TimeBufferType),this.values=Ca(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ca(e.times,Array),values:Ca(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ih(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new nh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new th(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Oa:t=this.InterpolantFactoryMethodDiscrete;break;case dc:t=this.InterpolantFactoryMethodLinear;break;case el:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Oa;case this.InterpolantFactoryMethodLinear:return dc;case this.InterpolantFactoryMethodSmooth:return el}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&t0(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===el,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(r)l=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let m=t[h+p];if(m!==t[u+p]||m!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};mn.prototype.TimeBufferType=Float32Array,mn.prototype.ValueBufferType=Float32Array,mn.prototype.DefaultInterpolation=dc;var Ri=class extends mn{constructor(e,t,n){super(e,t,n)}};Ri.prototype.ValueTypeName="bool",Ri.prototype.ValueBufferType=Array,Ri.prototype.DefaultInterpolation=Oa,Ri.prototype.InterpolantFactoryMethodLinear=void 0,Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var rh=class extends mn{};rh.prototype.ValueTypeName="color";var sh=class extends mn{};sh.prototype.ValueTypeName="number";var ah=class extends Ur{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)mt.slerpFlat(s,0,a,c-o,a,c,l);return s}},so=class extends mn{InterpolantFactoryMethodLinear(e){return new ah(this.times,this.values,this.getValueSize(),e)}};so.prototype.ValueTypeName="quaternion",so.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends mn{constructor(e,t,n){super(e,t,n)}};Ci.prototype.ValueTypeName="string",Ci.prototype.ValueBufferType=Array,Ci.prototype.DefaultInterpolation=Oa,Ci.prototype.InterpolantFactoryMethodLinear=void 0,Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var oh=class extends mn{};oh.prototype.ValueTypeName="vector";var lh=class{constructor(e,t,n){let r=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,a===!1&&r.onStart!==void 0&&r.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,l),o===l&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],m=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}},n0=new lh,ch=class{constructor(e){this.manager=e!==void 0?e:n0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise((function(r,s){n.load(e,r,t,s)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ch.DEFAULT_MATERIAL_NAME="__DEFAULT";var _s=class extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ao=class extends _s{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ul=new Le,Cd=new M,Id=new M,hh=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cr,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Cd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cd),Id.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Id),t.updateMatrixWorld(),Ul.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ul),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ul)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var A_=new Le,R_=new M,C_=new M;var uh=class extends hh{constructor(){super(new Wa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zi=class extends _s{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new uh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},oo=class extends _s{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var I_=new Le,P_=new Le,L_=new Le;var U_=new M,D_=new mt,N_=new M,O_=new M;var B_=new M,F_=new mt,z_=new M,H_=new M;var Eh="\\[\\]\\.:\\/",i0=new RegExp("["+Eh+"]","g"),Dl="[^"+Eh+"]",r0="[^"+Eh.replace("\\.","")+"]",s0=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Dl)+/(WCOD+)?/.source.replace("WCOD",r0)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dl)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dl)+"$"),a0=["material","materials","bones","map"],ut=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(i0,"")}static parseTrackName(e){let t=s0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);a0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[r];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ut.Composite=class{constructor(i,e,t){let n=t||ut.parseTrackName(e);this._targetGroup=i,this._bindings=i.subscribe_(e,n)}getValue(i,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(i,e)}setValue(i,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=t.length;n!==r;++n)t[n].setValue(i,e)}bind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].bind()}unbind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].unbind()}},ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray],ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var k_=new Float32Array(1);var Pd=new Le,xs=class{constructor(e,t,n=0,r=1/0){this.ray=new Ui(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new cs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Pd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pd),this}intersectObject(e,t=!0,n=[]){return dh(e,this,n,t),n.sort(Ld),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)dh(e[r],this,n,t);return n.sort(Ld),n}};function Ld(i,e){return i.distance-e.distance}function dh(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let a=0,o=s.length;a<o;a++)dh(s[a],e,t,!0)}}var V_=new le;var G_=new M,W_=new M;var X_=new M;var j_=new M,q_=new Le,Y_=new Le;var Z_=new M,J_=new _e,K_=new _e;var $_=new M,Q_=new M,ex=new M;var tx=new M,nx=new hs;var ix=new gn;var rx=new M;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Xn=new M(0,1,0),qn=(i,e,t)=>Math.min(t,Math.max(e,i)),Pe=(i,e,t)=>{let n=qn((t-i)/(e-i),0,1);return n*n*(3-2*n)},Ee=(i,e,t)=>e+(t-e)*i();function bp(i,e,t){let n=Math.min(i.length-1,Math.max(0,e*(i.length-1))),r=Math.min(i.length-2,Math.max(0,Math.floor(n))),s=n-r;return(t||new M).copy(i[r]).lerp(i[r+1],s)}function In(i){return function(){i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var l0=/debug/.test(location.search),To=20,Wi=120,Ao=.25,Lt=Wi+(1-Ao)*To*4+To*4-.1,bh=[[0,0],[16,.004],[32,.02],[56,.06],[76,.14],[94,.28],[108,.5],[116,.75],[120,1]];function Yh(i){if(i<=0)return 0;if(i>=Wi)return 1;for(let e=1;e<bh.length;e++){let[t,n]=bh[e];if(i<=t){let[r,s]=bh[e-1],a=Pe(0,1,(i-r)/Math.max(.001,t-r));return s+(n-s)*a}}return 1}function Zh(i){return i<Wi?.02+(Ao-.02)*(i/Wi):Ao+(i-Wi)/(To*4)}function wp(i){return i<Wi?1:1+Math.floor((i-Wi)/(To*4)+Ao)}var _n=[{name:"\u6625",sub:"\u4E07\u7269\u53D1\u82BD",skyTop:5220584,horizon:16771012,fog:14085883,ground:8833386,sun:16763024,sunI:2.6,hemi:.5,snow:0,cloud:.58,cloudWarm:.16,exposure:.95,bloom:.22},{name:"\u590F",sub:"\u679D\u7E41\u53F6\u8302",skyTop:1603784,horizon:14217727,fog:13625845,ground:5546820,sun:16773840,sunI:2.8,hemi:.45,snow:0,cloud:.32,cloudWarm:.1,exposure:.92,bloom:.2},{name:"\u79CB",sub:"\u53F6\u5B50\u53D8\u7EA2",skyTop:6983632,horizon:16768424,fog:16180170,ground:10259018,sun:16751186,sunI:2.6,hemi:.42,snow:0,cloud:.26,cloudWarm:.55,exposure:1,bloom:.28},{name:"\u51AC",sub:"\u4E0B\u96EA\u4E86",skyTop:5210030,horizon:13624306,fog:13098220,ground:15923455,sun:12571903,sunI:1.8,hemi:.55,snow:1,cloud:.82,cloudWarm:.02,exposure:.88,bloom:.16}],c0={skyTop:new _e,horizon:new _e,fog:new _e,ground:new _e,sun:new _e,sunI:0,hemi:0,snow:0,cloud:0,cloudWarm:0,exposure:1,bloom:.8},_o=new _e,h0=new _e,Ms=new _e,Ss=new _e;function u0(i,e){let t=(i%1+1)%1*_n.length,n=Math.floor(t)%_n.length,r=(n+1)%_n.length,s=Pe(.55,.95,t-Math.floor(t)),a=_n[n],o=_n[r];return e.skyTop.lerpColors(Ms.setHex(a.skyTop),Ss.setHex(o.skyTop),s),e.horizon.lerpColors(Ms.setHex(a.horizon),Ss.setHex(o.horizon),s),e.fog.lerpColors(Ms.setHex(a.fog),Ss.setHex(o.fog),s),e.ground.lerpColors(Ms.setHex(a.ground),Ss.setHex(o.ground),s),e.sun.lerpColors(Ms.setHex(a.sun),Ss.setHex(o.sun),s),e.sunI=a.sunI+(o.sunI-a.sunI)*s,e.hemi=a.hemi+(o.hemi-a.hemi)*s,e.snow=a.snow+(o.snow-a.snow)*s,e.cloud=a.cloud+(o.cloud-a.cloud)*s,e.cloudWarm=a.cloudWarm+(o.cloudWarm-a.cloudWarm)*s,e.exposure=a.exposure+(o.exposure-a.exposure)*s,e.bloom=a.bloom+(o.bloom-a.bloom)*s,e}var Uh=document.getElementById("app"),Ut=new qa({antialias:!1,powerPreference:"high-performance"});Ut.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75));function Jh(){return{w:Math.max(1,Uh.clientWidth||window.innerWidth),h:Math.max(1,Uh.clientHeight||window.innerHeight)}}var Ro=Jh();Ut.setSize(Ro.w,Ro.h);Ut.shadowMap.enabled=!0;Ut.shadowMap.type=Ud;Ut.toneMapping=Nd;Ut.toneMappingExposure=1.12;Uh.appendChild(Ut.domElement);var we=new Za;we.fog=new Ya(13625845,34,165);var Pt=new Vt(38,Ro.w/Ro.h,.1,600),jn={topColor:{value:new _e(3118552)},horizonColor:{value:new _e(12576760)},sunColor:{value:new _e(16774109)},sunDir:{value:new M(.4,.7,.5).normalize()},time:{value:0},cloudCover:{value:.45},cloudWarm:{value:.2}},Tp=new Qe(new Wn(320,48,30),new Zt({uniforms:jn,side:ph,depthWrite:!1,fog:!1,vertexShader:`
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
          float n1 = fbm(uv * 1.25 + vec2(time * 0.007, time * 0.0022));
          float n2 = fbm(uv * 3.10 + vec2(time * 0.012, -time * 0.004));
          float n = n1 * 0.68 + n2 * 0.32;
          float lo = 0.84 - cloudCover * 0.07;
          float cover = smoothstep(lo, lo + 0.07, n);
          cover *= smoothstep(0.30, 0.62, dir.y);
          // \u4E91\u5E95\uFF1A\u8FCE\u5149\u9762\u6696\u767D\u3001\u80CC\u5149\u9762\u7070\u84DD
          float lit = pow(max(dot(dir, sunDir), 0.0), 2.0);
          vec3 cloudCol = mix(vec3(0.52, 0.58, 0.66), vec3(1.06, 1.02, 0.95), lit * 0.9 + cloudWarm * 0.3);
          col = mix(col, cloudCol, cover * 0.20);
        }
        gl_FragColor = vec4(col, 1.0);
      }
    `}));Tp.frustumCulled=!1;we.add(Tp);function d0(i,e){let n=document.createElement("canvas");n.width=n.height=128;let r=n.getContext("2d"),s=r.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);s.addColorStop(0,i),s.addColorStop(.45,e),s.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=s,r.fillRect(0,0,128,128);let a=new It(n);return a.colorSpace=st,a}var As=new us(new Ir({map:d0("rgba(255,255,255,1)","rgba(255,236,180,0.55)"),blending:lo,depthWrite:!1,depthTest:!0,fog:!1,transparent:!0,opacity:.9}));As.scale.setScalar(9);we.add(As);function p0(){let e=document.createElement("canvas");e.width=e.height=512;let t=e.getContext("2d");t.clearRect(0,0,512,512);let n=512/2,r=512/2;for(let o=0;o<46;o++){let l=Math.random()*Math.PI*2,c=.004+Math.random()*.018,h=512*(.25+Math.random()*.45),u=t.createLinearGradient(n,r,n+Math.cos(l)*h,r+Math.sin(l)*h);u.addColorStop(0,`rgba(255,241,205,${.05+Math.random()*.09})`),u.addColorStop(1,"rgba(255,241,205,0)"),t.strokeStyle=u,t.lineWidth=512*c,t.beginPath(),t.moveTo(n,r),t.lineTo(n+Math.cos(l)*h,r+Math.sin(l)*h),t.stroke()}let s=t.createRadialGradient(n,r,0,n,r,512*.5);s.addColorStop(0,"rgba(255,245,215,0.55)"),s.addColorStop(.18,"rgba(255,228,170,0.16)"),s.addColorStop(1,"rgba(255,228,170,0)"),t.fillStyle=s,t.fillRect(0,0,512,512);let a=new It(e);return a.colorSpace=st,a}var Rs=new us(new Ir({map:p0(),blending:lo,depthWrite:!1,depthTest:!0,fog:!1,transparent:!0,opacity:.55}));Rs.scale.setScalar(72);we.add(Rs);var xo=new ao(12576760,4880954,.7);we.add(xo);var f0=new oo(12376296,.38);we.add(f0);var Bt=new zi(16777215,2.4);Bt.castShadow=!0;Bt.shadow.mapSize.set(2048,2048);Bt.shadow.camera.left=-13;Bt.shadow.camera.right=13;Bt.shadow.camera.top=15;Bt.shadow.camera.bottom=-13;Bt.shadow.camera.near=1;Bt.shadow.camera.far=90;Bt.shadow.bias=-6e-4;Bt.shadow.normalBias=.06;we.add(Bt);we.add(Bt.target);var Ap=new zi(16773341,.85);Ap.position.set(-14,9,-16);we.add(Ap);var Fo=new zi(16773596,2.35);Fo.position.set(8,12,20);Fo.target.position.set(0,4,0);we.add(Fo);we.add(Fo.target);var zo=new zi(16769464,1.25);zo.position.set(2.5,-3,18);zo.target.position.set(0,-2.2,0);we.add(zo);we.add(zo.target);Bt.target.position.set(0,3,0);function m0(){let e=document.createElement("canvas");e.width=e.height=1024;let t=e.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,1024,1024);let n=(s,a,o,l,c)=>{t.fillStyle=`rgba(${l},${c})`;for(let h of[0,-1024,1024])for(let u of[0,-1024,1024])t.beginPath(),t.arc(s+h,a+u,o,0,Math.PI*2),t.fill()};for(let s=0;s<5200;s++){let a=Math.random()*1024,o=Math.random()*1024,l=3+Math.random()*9,c=-Math.PI/2+(Math.random()-.5)*1.1,h=Math.random()>.45;t.strokeStyle=h?`rgba(150,190,110,${.05+Math.random()*.11})`:`rgba(52,84,40,${.05+Math.random()*.13})`,t.lineWidth=.8+Math.random()*1.6,t.beginPath(),t.moveTo(a,o),t.lineTo(a+Math.cos(c)*l,o+Math.sin(c)*l),t.stroke()}for(let s=0;s<6e3;s++)t.fillStyle=`rgba(${Math.random()>.5?"96,132,70":"40,64,32"},${.04+Math.random()*.08})`,t.fillRect(Math.random()*1024,Math.random()*1024,1,1);let r=new It(e);return r.colorSpace=st,r.wrapS=r.wrapT=Ii,r.repeat.set(14,14),r.anisotropy=8,r}var Rp=new ct({color:5546820,map:m0(),roughness:1,metalness:0,vertexColors:!0});function fo(i,e){let t=Math.sin(i*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function wh(i,e){let t=Math.floor(i),n=Math.floor(e),r=i-t,s=e-n,a=r*r*(3-2*r),o=s*s*(3-2*s),l=fo(t,n),c=fo(t+1,n),h=fo(t,n+1),u=fo(t+1,n+1);return(l*(1-a)+c*a)*(1-o)+(h*(1-a)+u*a)*o}function Us(i,e){return wh(i,e)*.55+wh(i*2.1,e*2.1)*.28+wh(i*4.3,e*4.3)*.17}function g0(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,256);n.addColorStop(0,"#9c7248"),n.addColorStop(.45,"#7d5731"),n.addColorStop(1,"#5d3f22"),t.fillStyle=n,t.fillRect(0,0,256,256);for(let a=0;a<180;a++){let o=Math.random()*256,l=Math.random()*256,c=2+Math.random()*13,h=1.5+Math.random()*8,u=Math.random()>.55;t.fillStyle=u?`rgba(190,150,104,${.03+Math.random()*.07})`:`rgba(52,32,16,${.03+Math.random()*.08})`,t.beginPath(),t.ellipse(o,l,c,h,Math.random()*3.14,0,6.283),t.fill()}for(let a=0;a<9;a++){let o=Math.random()*256,l=Math.random()*256;t.strokeStyle=`rgba(40,24,12,${.12+Math.random()*.12})`,t.lineWidth=.8+Math.random()*1.1,t.beginPath(),t.moveTo(o,l),t.bezierCurveTo(o+8,l+6,o+3,l+22,o+10,l+34),t.stroke()}for(let a=0;a<260;a++){let o=Math.random()*256,l=Math.random()*256,c=.7+Math.random()*2.6;t.fillStyle=Math.random()>.5?"rgba(52,32,16,0.35)":"rgba(206,172,124,0.28)",t.beginPath(),t.ellipse(o,l,c,c*.8,Math.random()*3,0,Math.PI*2),t.fill()}let r=t.createRadialGradient(256*.36,256*.3,0,256*.36,256*.3,256*.55);r.addColorStop(0,"rgba(255,236,198,0.34)"),r.addColorStop(1,"rgba(255,236,198,0)"),t.fillStyle=r,t.fillRect(0,0,256,256);let s=new It(e);return s.colorSpace=st,s.anisotropy=8,s}var Ds=25,Ns=9;function v0(){let t=document.createElement("canvas");t.width=1024,t.height=512;let n=t.getContext("2d"),r=In(20240117);n.fillStyle="rgb(58,42,30)",n.fillRect(0,0,1024,512);let s=[{y0:0,y1:.11,col:[30,21,14],amp:10},{y0:.11,y1:.44,col:[92,66,42],amp:16},{y0:.44,y1:.72,col:[112,88,56],amp:14},{y0:.72,y1:1,col:[104,86,62],amp:12}];for(let l of s){n.fillStyle=`rgb(${l.col[0]},${l.col[1]},${l.col[2]})`,n.beginPath();let c=l.y0*512,h=l.y1*512;n.moveTo(0,c);for(let u=0;u<=1024;u+=32)n.lineTo(u,c+Math.sin(u*.004+r()*.2)*l.amp*.5+Math.sin(u*.013)*l.amp*.3);for(let u=1024;u>=0;u-=32)n.lineTo(u,h+Math.sin(u*.0035+2.1)*l.amp*.6+Math.sin(u*.011+1.1)*l.amp*.35);n.closePath(),n.fill()}for(let l of[.11,.44,.72]){n.strokeStyle="rgba(12,7,4,0.6)",n.lineWidth=4,n.beginPath();for(let c=0;c<=1024;c+=24){let h=l*512+Math.sin(c*.006+l*9)*7+Math.sin(c*.017)*3;c===0?n.moveTo(c,h):n.lineTo(c,h)}n.stroke()}for(let l=0;l<9600;l++){let c=r()*1024,h=r()*512,u=1.1+r()*3.9,d=r()>.5;n.fillStyle=d?`rgba(150,124,90,${.03+r()*.075})`:`rgba(26,16,9,${.04+r()*.1})`,n.beginPath(),n.ellipse(c,h,u,u*(.55+r()*.7),r()*3.14,0,6.283),n.fill(),n.fillStyle="rgba(18,11,6,0.07)",n.beginPath(),n.ellipse(c+u*.15,h+u*.45,u*.72,u*.28,0,0,6.283),n.fill()}for(let l=0;l<46;l++){let c=r()*1024,h=512*(.14+r()*.75),u=512*(.03+r()*.16);n.strokeStyle=`rgba(20,13,7,${.12+r()*.2})`,n.lineWidth=.8+r()*1.8,n.beginPath(),n.moveTo(c,h),n.bezierCurveTo(c+(r()-.5)*14,h+u*.4,c+(r()-.5)*18,h+u*.7,c+(r()-.5)*22,h+u),n.stroke()}for(let l=0;l<70;l++){let c=r()*1024,h=r()*512,u=30+r()*110,d=n.createRadialGradient(c,h,0,c,h,u),p=r()>.5;d.addColorStop(0,p?"rgba(126,84,44,0.13)":"rgba(36,24,14,0.13)"),d.addColorStop(1,"rgba(40,28,16,0)"),n.fillStyle=d,n.beginPath(),n.arc(c,h,u,0,6.283),n.fill()}for(let l=0;l<620;l++){let c=r()*1024,h=512*.1+r()*512*.9,u=1+Math.pow(r(),2.6)*2.3,d=.55+r()*.4;n.fillStyle=`rgba(${128*d|0},${116*d|0},${98*d|0},0.72)`,n.beginPath(),n.ellipse(c,h,u,u*(.62+r()*.4),r()*3.14,0,6.283),n.fill(),n.fillStyle="rgba(255,248,228,0.16)",n.beginPath(),n.ellipse(c-u*.3,h-u*.34,u*.5,u*.3,0,0,6.283),n.fill(),n.fillStyle="rgba(16,10,5,0.20)",n.beginPath(),n.ellipse(c+u*.18,h+u*.5,u*.8,u*.28,0,0,6.283),n.fill()}for(let l=0;l<26e3;l++){let c=r()*1024,h=r()*512;n.fillStyle=r()>.5?`rgba(20,13,7,${.06+r()*.12})`:`rgba(178,150,110,${.03+r()*.07})`,n.fillRect(c,h,1+r()*2,1+r()*2)}let a=n.createLinearGradient(0,0,0,512*.06);a.addColorStop(0,"rgba(16,10,5,0.85)"),a.addColorStop(1,"rgba(26,17,9,0)"),n.fillStyle=a,n.fillRect(0,0,1024,512*.06);let o=new It(t);return o.colorSpace=st,o.wrapS=Ii,o.wrapT=Pi,o.flipY=!1,o.repeat.set(4,1),o.anisotropy=8,o}var ip=v0(),_0=new ct({map:ip,bumpMap:ip,bumpScale:.12,roughness:1,metalness:0,color:16777215,emissive:2759182,emissiveIntensity:.25}),x0=new ct({color:4008476,roughness:1,metalness:0,flatShading:!0}),y0=90;function M0(i,e,t){let n=[],r=[],s=[],a=[],o=new _e;for(let h=0;h<=e;h++){let u=i*Math.pow(h/e,1.9);for(let d=0;d<=t;d++){let p=d/t*Math.PI,m=Math.cos(p)*u,x=-Math.sin(p)*u;n.push(m,0,x),r.push(m/(2*i)+.5,x/(2*i)+.5);let f=Us(m*.036+11.3,x*.036+4.7),g=Us(m*.16,x*.16),v=.8+.34*f+.1*(g-.5);o.setRGB(v*1.02,v,v*.9),s.push(o.r,o.g,o.b)}}let l=t+1;for(let h=0;h<e;h++)for(let u=0;u<t;u++){let d=h*l+u,p=d+1,m=d+l,x=m+1;a.push(d,m,p,p,m,x)}let c=new et;return c.setAttribute("position",new Re(n,3)),c.setAttribute("uv",new Re(r,2)),c.setAttribute("color",new Re(s,3)),c.setIndex(a),c.computeVertexNormals(),c}var Cp=new Qe(M0(y0,40,72),Rp);Cp.receiveShadow=!0;we.add(Cp);(()=>{let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),n=t.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);n.addColorStop(0,"rgba(24,32,18,0.55)"),n.addColorStop(.45,"rgba(24,32,18,0.28)"),n.addColorStop(1,"rgba(24,32,18,0)"),t.fillStyle=n,t.fillRect(0,0,256,256);let r=new It(e);r.colorSpace=st;let s=new Qe(new rn(7,7),new hi({map:r,transparent:!0,depthWrite:!1,opacity:.9}));s.rotation.x=-Math.PI/2,s.position.y=.02,we.add(s)})();var Kh=new Qe(new Ni(Ds,Ds,Ns,64,1,!0,Math.PI/2,Math.PI),x0);Kh.position.y=-Ns/2;Kh.receiveShadow=!0;we.add(Kh);var Ip=Ns+2.5,$h=new Qe(new rn(Ds*2.8,Ip),_0);$h.position.set(0,-Ip/2,0);$h.receiveShadow=!1;we.add($h);(()=>{let i=In(4242),e=70,t=new ct({roughness:.88,metalness:0,flatShading:!0}),n=new Wt(new Fi(1,0),t,e);n.receiveShadow=!1,n.castShadow=!1;let r=new Le,s=new mt,a=new M,o=new M,l=new _e;for(let c=0;c<e;c++){let h=.035+Math.pow(i(),2)*.075;o.set(Ee(i,-11,11),Ee(i,-6.5,-.25),Ee(i,-.035,.01)),s.setFromEuler(new Tt(i()*3,i()*3,i()*3)),a.set(h*(1.1+i()*.5),h*(.8+i()*.4),h*.42),r.compose(o,s,a),n.setMatrixAt(c,r),l.setHex(i()>.45?10260348:7168339),n.setColorAt(c,l)}n.instanceMatrix.needsUpdate=!0,n.instanceColor&&(n.instanceColor.needsUpdate=!0),we.add(n)})();(()=>{let i=In(9091),e=420,t=new Fi(1,0),n=new ct({roughness:.95,metalness:0,flatShading:!0,vertexColors:!1}),r=new Wt(t,n,e);r.receiveShadow=!0,r.castShadow=!1;let s=new Le,a=new mt,o=new M,l=new M,c=new _e;for(let h=0;h<e;h++){l.set(Ee(i,-13,13),Ee(i,-7.4,-.25),Ee(i,.005,.055)),a.setFromEuler(new Tt(i()*3,i()*3,i()*3));let u=.025+Math.pow(i(),2.2)*.1;o.set(u*Ee(i,.9,1.6),u*Ee(i,.4,.8),u*.45),s.compose(l,a,o),r.setMatrixAt(h,s);let d=.45+i()*.5;c.setRGB(.42*d,.32*d,.21*d),r.setColorAt(h,c)}r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0),we.add(r)})();var rp=Ds*2.8,S0=(()=>{let e=[],t=[],n=[],r=new _e(4612138),s=new _e(2759698);for(let o=0;o<=240;o++){let l=-rp/2+o/240*rp,c=Us(l*.33+7.1,3.7)-.5,h=-.015+c*.11,u=-.1+c*.03;if(e.push(l,h,.05,l,u,.05),t.push(r.r,r.g,r.b,s.r,s.g,s.b),o<240){let d=o*2;n.push(d,d+2,d+1,d+1,d+2,d+3)}}let a=new et;return a.setAttribute("position",new Re(e,3)),a.setAttribute("color",new Re(t,3)),a.setIndex(n),a.computeVertexNormals(),a})(),E0=new ct({vertexColors:!0,roughness:1,metalness:0}),b0=new Qe(S0,E0);we.add(b0);(()=>{let t=document.createElement("canvas");t.width=256,t.height=256;let n=t.getContext("2d");n.clearRect(0,0,256,256);let r=n.createLinearGradient(0,0,256,0);r.addColorStop(0,"rgba(8,5,3,0.38)"),r.addColorStop(.14,"rgba(8,5,3,0.17)"),r.addColorStop(.34,"rgba(8,5,3,0.03)"),r.addColorStop(.66,"rgba(8,5,3,0.03)"),r.addColorStop(.86,"rgba(8,5,3,0.17)"),r.addColorStop(1,"rgba(8,5,3,0.38)"),n.fillStyle=r,n.fillRect(0,0,256,256);let s=n.createLinearGradient(0,0,0,256*.22);s.addColorStop(0,"rgba(6,4,2,0.22)"),s.addColorStop(1,"rgba(6,4,2,0)"),n.fillStyle=s,n.fillRect(0,0,256,256*.22);let a=n.createLinearGradient(0,256*.35,0,256);a.addColorStop(0,"rgba(6,4,2,0)"),a.addColorStop(1,"rgba(4,3,2,0.12)"),n.fillStyle=a,n.fillRect(0,256*.35,256,256*.65);let o=new It(t);o.colorSpace=st;let l=new Qe(new rn(Ds*2.8,Ns+5),new hi({map:o,transparent:!0,depthWrite:!1,fog:!1}));l.position.set(0,-(Ns+5)/2-.02,.028),we.add(l)})();var Pp=new nn,ws=[];function Qh(i,e,t,n,r,s,a){let h=In(n)()*100,u=[],d=[];for(let f=0;f<=256;f++){let g=f/256*Math.PI*2,v=Math.cos(g)*i,_=Math.sin(g)*i,y=Us(Math.cos(g)*3.3+h,Math.sin(g)*3.3+h*.7),R=Us(Math.cos(g)*8.6+h*2,Math.sin(g)*8.6),T=1-Math.abs(2*y-1),I=e+t*(.1+.9*Math.pow(T*.72+R*.28,1.55));for(let D=0;D<=7;D++){let B=D/7,k=-9+(I+9)*B;u.push(v,k,_)}}for(let f=0;f<256;f++){let g=f*8,v=(f+1)*8;for(let _=0;_<7;_++)d.push(g+_,g+_+1,v+_,g+_+1,v+_+1,v+_)}let p=new et;p.setAttribute("position",new Re(u,3)),p.setIndex(d);let m=new Zt({uniforms:{uBottomColor:{value:new _e(r.bottom)},uTopColor:{value:new _e(r.top)},uSnowColor:{value:new _e(r.snow||16055295)},uBaseY:{value:e},uHeight:{value:t},uSnowLine:{value:e+t*(r.snowLine??.55)},uSnowStrength:{value:a||0},uOpacity:{value:s}},vertexShader:`
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
    `,transparent:s<.99,depthWrite:s>=.99,side:Tn,fog:!1});ws.push(m);let x=new Qe(p,m);x.frustumCulled=!1,Pp.add(x)}Qh(172,-1.4,24,1919,{bottom:12966374,top:8298424,snow:16055295,snowLine:.54},.9,.62);Qh(124,-1.1,12.5,2027,{bottom:12441286,top:7904131},1,0);Qh(82,-.9,5.2,3121,{bottom:10468747,top:7312496},1,0);we.add(Pp);function w0(){let t=document.createElement("canvas");t.width=512,t.height=128;let n=t.getContext("2d");n.clearRect(0,0,512,128);for(let s=0;s<90;s++){let a=Math.random()*512,o=128*(.35+Math.random()*.45),l=20+Math.random()*70,c=n.createRadialGradient(a,o,0,a,o,l);c.addColorStop(0,`rgba(255,248,235,${.035+Math.random()*.05})`),c.addColorStop(1,"rgba(255,248,235,0)"),n.fillStyle=c,n.fillRect(a-l,o-l,l*2,l*2)}let r=new It(t);return r.colorSpace=st,r}var T0=w0(),eu=new nn,Dh=[];for(let i=0;i<3;i++){let e=new hi({map:T0,transparent:!0,opacity:[.16,.1,.06][i],depthWrite:!1,fog:!1,blending:Dd,side:Tn});Dh.push(e);let t=new Qe(new rn([110,130,150][i],[5.5,7,9][i]),e);t.position.set(0,[.8,1.8,3.2][i],[-18,-30,-46][i]),t.renderOrder=1,eu.add(t)}we.add(eu);var Ho=280,Co=new et,yo=new Float32Array(Ho*3),Lp=new Float32Array(Ho);for(let i=0;i<Ho;i++)yo[i*3]=(Math.random()-.5)*22,yo[i*3+1]=.3+Math.random()*6.5,yo[i*3+2]=-10+Math.random()*12,Lp[i]=Math.random()*Math.PI*2;Co.setAttribute("position",new wt(yo,3));var Nh=new Di({size:.042,map:Bp(),transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0,color:16770736,blending:lo,fog:!1}),Up=new Pr(Co,Nh);Up.frustumCulled=!1;we.add(Up);(()=>{let i=new ct({color:9076851,roughness:.9,flatShading:!0}),e=In(77);for(let t=0;t<8;t++){let n=new Qe(new Fi(.09+e()*.12,0),i);n.position.set(Ee(e,-9,9),Ee(e,-2.9,-.7),-.02),n.rotation.set(e()*3,e()*3,e()*3),n.scale.set(1.1,.55+e()*.25,.24),we.add(n)}})();function A0(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.clearRect(0,0,256,256),t.lineCap="round";for(let r=0;r<20;r++){let s=256*(.03+Math.random()*.94),a=256*(.08+Math.random()*.16),o=(Math.random()-.5)*256*.28,l=.72+Math.random()*.22;t.strokeStyle=`rgba(${76*l|0},${118*l|0},${48*l|0},0.95)`,t.lineWidth=1.4+Math.random()*1.8,t.beginPath(),t.moveTo(s,256),t.quadraticCurveTo(s+o*.4,256-a*.6,s+o,256-a),t.stroke()}for(let r=0;r<34;r++){let s=256*(.04+Math.random()*.92),a=256*(.26+Math.random()*.52),o=(Math.random()-.5)*256*.55,l=1.2+Math.random()*2,c=t.createLinearGradient(0,256,0,256-a),h=.82+Math.random()*.26;c.addColorStop(0,`rgba(${58*h|0},${92*h|0},${36*h|0},1)`),c.addColorStop(.5,`rgba(${98*h|0},${148*h|0},${64*h|0},1)`),c.addColorStop(.86,`rgba(${146*h|0},${190*h|0},${98*h|0},1)`),c.addColorStop(1,`rgba(${180*h|0},${212*h|0},${128*h|0},0.9)`),t.strokeStyle=c,t.lineWidth=l,t.beginPath(),t.moveTo(s,256),t.quadraticCurveTo(s+o*.35,256-a*.6,s+o,256-a),t.stroke()}for(let r=0;r<7;r++){let s=256*(.08+Math.random()*.84),a=256*(.5+Math.random()*.34),o=(Math.random()-.5)*256*.3;t.strokeStyle="rgba(126,160,84,0.9)",t.lineWidth=1.1,t.beginPath(),t.moveTo(s,256),t.quadraticCurveTo(s+o*.3,256-a*.68,s+o,256-a),t.stroke(),t.fillStyle="rgba(168,190,108,0.9)";for(let l=0;l<5;l++)t.beginPath(),t.ellipse(s+o+(l-2)*2.4,256-a+3+Math.abs(l-2)*1.3,1.3,3.1,.5,0,6.283),t.fill()}let n=new It(e);return n.colorSpace=st,n.anisotropy=8,n}function R0(){let i=new et,e=[],t=[],n=[],r=[[-.5,0,.5,0],[0,-.5,0,.5]],s=0;for(let[a,o,l,c]of r)e.push(a,0,o,l,0,c,l,1,c,a,1,o),t.push(0,0,1,0,1,1,0,1),n.push(s,s+1,s+2,s,s+2,s+3),s+=4;return i.setAttribute("position",new Re(e,3)),i.setAttribute("uv",new Re(t,2)),i.setIndex(n),i.computeVertexNormals(),i}var C0=A0(),Dp=R0(),Np={value:0};function I0(i,e=1){return i.onBeforeCompile=t=>{t.uniforms.uGrassTime=Np,t.vertexShader=`uniform float uGrassTime;
`+t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
       float wx = instanceMatrix[3][0];
       float wz = instanceMatrix[3][2];
       float gust = sin(uGrassTime * 1.35 + wx * 0.28 + wz * 0.22) * 0.5 + sin(uGrassTime * 2.7 + wx * 0.6) * 0.22;
       transformed.x += gust * ${e.toFixed(2)} * smoothstep(0.0, 1.0, position.y);
       transformed.z += gust * ${(e*.45).toFixed(2)} * smoothstep(0.0, 1.0, position.y);`)},i}function P0(i){let e=In(i),t=16e3,n=I0(new ct({map:C0,alphaTest:.28,side:Tn,roughness:1,metalness:0,transparent:!0,opacity:1}),.085),r=new Wt(Dp,n,t);r.receiveShadow=!0,r.castShadow=!1;let s=new Le,a=new mt,o=new M,l=new M,c=new _e;for(let h=0;h<t;h++){let u=e()*Math.PI,d=.3+Math.pow(e(),.92)*34;if(e()<Pe(7,34,d)*.78){h--;continue}l.set(Math.cos(u)*d,0,-Math.sin(u)*d),a.setFromAxisAngle(Xn,e()*Math.PI*2);let p=Math.min(1,Math.max(0,(d-2)/34)),m=1-.2*p,x=1+.38*(1-Pe(2.5,9,d)),f=(.16+e()*.22)*m*x,g=(.11+e()*.11)*m;o.set(g*(.8+e()*.5),f,g*(.8+e()*.5)),s.compose(l,a,o),r.setMatrixAt(h,s);let v=(.84+e()*.3)*(1-.04*p);c.setRGB(v*(.96+e()*.06),v,v*(.86+e()*.1)),r.setColorAt(h,c)}return r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0),r}function L0(){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");t.clearRect(0,0,128,128);let n=128/2,r=128*.42;for(let a=0;a<5;a++){let o=a/5*Math.PI*2;t.fillStyle="rgba(255,252,244,0.98)",t.beginPath(),t.ellipse(n+Math.cos(o)*128*.14,r+Math.sin(o)*128*.14,128*.11,128*.075,o,0,6.283),t.fill()}t.fillStyle="rgba(243,190,74,1)",t.beginPath(),t.arc(n,r,128*.052,0,6.283),t.fill(),t.strokeStyle="rgba(84,120,52,0.95)",t.lineWidth=3,t.beginPath(),t.moveTo(n,r+128*.06),t.quadraticCurveTo(n+4,128*.75,n-3,128*.98),t.stroke();let s=new It(e);return s.colorSpace=st,s.anisotropy=4,s}var Op=L0();function U0(i){let e=In(i),t=1400,n=new ct({map:Op,alphaTest:.35,side:Tn,roughness:.9,metalness:0,transparent:!0}),r=new Wt(Dp,n,t);r.castShadow=!1,r.receiveShadow=!1;let s=new Le,a=new mt,o=new M,l=new M,c=new _e;for(let h=0;h<t;h++){let u=e()*Math.PI,d=.8+Math.pow(e(),.85)*12;l.set(Math.cos(u)*d,.01,-Math.sin(u)*d),a.setFromAxisAngle(Xn,e()*Math.PI*2);let p=.075+e()*.11;o.set(p,p,p),s.compose(l,a,o),r.setMatrixAt(h,s);let m=e();m<.55?c.setHex(16776693):m<.82?c.setHex(16771496):m<.95?c.setHex(16766692):c.setHex(14084351),r.setColorAt(h,c)}return r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0),r}function D0(i){let e=In(i),t=1600,n=new ct({map:tu,alphaTest:.4,side:Tn,roughness:.95,metalness:0,transparent:!0,opacity:0}),r=new Wt(Io,n,t);r.receiveShadow=!0,r.castShadow=!1;let s=new Le,a=new mt,o=new M,l=new M,c=new Tt,h=new _e,u=[14242860,15243818,13185068,11827748,10382124],d=[];for(let p=0;p<t;p++){let m=e()*Math.PI,x=.4+Math.pow(e(),.75)*10.5;l.set(Math.cos(m)*x,.025+e()*.025,-Math.sin(m)*x),a.setFromEuler(c.set(-Math.PI/2+(e()-.5)*.35,e()*Math.PI*2,(e()-.5)*.25));let f=.16+e()*.16;o.set(f,f,f),s.compose(l,a,o),r.setMatrixAt(p,s),h.setHex(u[Math.floor(e()*u.length)]),r.setColorAt(p,h),d.push({pos:l.clone(),quat:a.clone(),size:f,color:h.clone()})}return r.userData.leafInfo=d,r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0),r}function N0(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.clearRect(0,0,256,256);let n=t.createLinearGradient(0,256*.06,0,256*.94);n.addColorStop(0,"#e8f3dd"),n.addColorStop(.45,"#ffffff"),n.addColorStop(1,"#dfe9d2"),t.fillStyle=n,t.beginPath(),t.moveTo(256/2,256*.04),t.bezierCurveTo(256*.95,256*.3,256*.9,256*.8,256/2,256*.96),t.bezierCurveTo(256*.1,256*.8,256*.05,256*.3,256/2,256*.04),t.closePath(),t.fill(),t.strokeStyle="rgba(112,140,96,0.45)",t.lineWidth=2.4,t.beginPath(),t.moveTo(256/2,256*.09),t.lineTo(256/2,256*.92),t.stroke(),t.lineWidth=1.1,t.strokeStyle="rgba(112,140,96,0.3)";for(let s=1;s<=6;s++){let a=256*(.1+.8*(s/7)),o=.34*Math.sin(Math.PI*(s/7))*256;t.beginPath(),t.moveTo(256/2,a),t.quadraticCurveTo(256/2+o*.6,a+256*.03,256/2+o,a+256*.09),t.stroke(),t.beginPath(),t.moveTo(256/2,a),t.quadraticCurveTo(256/2-o*.6,a+256*.03,256/2-o,a+256*.09),t.stroke()}let r=new It(e);return r.colorSpace=st,r.anisotropy=8,r}function O0(){let i=new rn(1,1.35,2,4),e=i.attributes.position;for(let t=0;t<e.count;t++){let n=e.getX(t),s=(e.getY(t)+.675)/1.35,a=.13*(n*n*4-.4),o=-.1*s*s;e.setZ(t,a+o)}return i.computeVertexNormals(),i}var tu=N0(),Io=O0(),Os=new nn;we.add(Os);var sp=new ct({map:tu,alphaTest:.38,side:Tn,roughness:.86,metalness:0});function B0(){let t=document.createElement("canvas");t.width=256,t.height=256;let n=t.getContext("2d");n.fillStyle="#ffffff",n.fillRect(0,0,256,256);for(let s=0;s<220;s++){let a=Math.random()*256,o=30+Math.random()*160,l=Math.random()*256,c=Math.random()>.45;n.strokeStyle=c?`rgba(64,44,28,${.05+Math.random()*.11})`:`rgba(255,250,240,${.08+Math.random()*.16})`,n.lineWidth=.8+Math.random()*2.6,n.beginPath(),n.moveTo(a,l),n.quadraticCurveTo(a+(Math.random()-.5)*8,l+o*.5,a+(Math.random()-.5)*12,l+o),n.stroke()}for(let s=0;s<500;s++)n.fillStyle=`rgba(40,26,14,${.05+Math.random()*.14})`,n.fillRect(Math.random()*256,Math.random()*256,1+Math.random()*2,1+Math.random()*3);let r=new It(t);return r.colorSpace=st,r.wrapS=r.wrapT=Ii,r.repeat.set(1,3),r.anisotropy=4,r}var Po=B0(),F0=new ct({color:5916210,map:Po,bumpMap:Po,bumpScale:.09,roughness:.93,metalness:0}),ve=null;function z0(i){let e=In(i),t=new nn,n=[],r=[],s=[],a=4,o=[.24,.16,.12,.08,.05];function l(O,ne,ce){let ue=O.length,Y=[],me=[],Ce=[],Ue=[],fe=new M,xe=new M,Ie=new M,pt=new M().subVectors(O[1],O[0]).normalize();xe.set(0,1,0),Math.abs(xe.dot(pt))>.9&&xe.set(1,0,0),xe.addScaledVector(pt,-xe.dot(pt)).normalize();for(let ke=0;ke<ue;ke++){let ot=O[Math.max(0,ke-1)],vt=O[Math.min(ue-1,ke+1)];fe.subVectors(vt,ot).normalize(),xe.addScaledVector(fe,-xe.dot(fe)).normalize(),Ie.crossVectors(fe,xe).normalize();for(let U=0;U<ce;U++){let Ye=U/ce*Math.PI*2,tt=Math.cos(Ye),Be=Math.sin(Ye),rt=xe.x*tt+Ie.x*Be,Dt=xe.y*tt+Ie.y*Be,on=xe.z*tt+Ie.z*Be;Y.push(O[ke].x+rt*ne[ke],O[ke].y+Dt*ne[ke],O[ke].z+on*ne[ke]),me.push(rt,Dt,on),Ce.push(U/ce,ke/(ue-1)*2)}}for(let ke=0;ke<ue-1;ke++)for(let ot=0;ot<ce;ot++){let vt=ke*ce+ot,U=ke*ce+(ot+1)%ce,Ye=(ke+1)*ce+ot,tt=(ke+1)*ce+(ot+1)%ce;Ue.push(vt,U,Ye,U,tt,Ye)}let $e=new et;return $e.setAttribute("position",new Re(Y,3)),$e.setAttribute("normal",new Re(me,3)),$e.setAttribute("uv",new Re(Ce,2)),$e.setIndex(Ue),$e.computeBoundingSphere(),$e}function c(O,ne,ce,ue,Y,me,Ce){let Ue=Y===0?13:Y===1?10:6,fe=Y===0?16:Y===1?10:7,xe=[O.clone()],Ie=[ue],pt=ne.clone(),$e=new M().crossVectors(ne,Xn);$e.lengthSq()<1e-6&&$e.set(1,0,0),$e.normalize().applyAxisAngle(ne,e()*Math.PI*2);let ke=Ee(e,.12,.4)*(Y===0?.55:1),ot=ce/(Ue-1);for(let tt=1;tt<Ue;tt++){pt.applyAxisAngle($e,ke/(Ue-1)+Ee(e,-.025,.025)).normalize(),xe.push(xe[tt-1].clone().addScaledVector(pt,ot));let Be=tt/(Ue-1);Ie.push(ue*(1-.3*Be)*(1-.3*Math.pow(Be,4)))}xe.push(xe[Ue-1].clone().addScaledVector(pt,ot*.35)),Ie.push(Ie[Ue-1]*.85);let vt=xe.length,U=l(xe,Ie,fe);s.push(U);let Ye=new Qe(U,F0);return Ye.name="branch-d"+Y+"#"+n.length,Ye.userData.part=Y===0?"trunk":"branch",Ye.castShadow=!0,Ye.receiveShadow=!1,Ye.frustumCulled=!1,t.add(Ye),n.push({mesh:Ye,start:O.clone(),len:ce,depth:Y,g0:me,g1:Ce,rings:vt,radial:fe,pts:xe,radii:Ie,basePos:Float32Array.from(U.attributes.position.array),lastK:-1}),{end:xe[vt-1].clone(),endDir:pt.clone(),pts:xe,radii:Ie,endR:Ie[vt-1]}}function h(O,ne,ce){let ue=new M().crossVectors(O,Xn);ue.lengthSq()<1e-5&&ue.set(1,0,0),ue.normalize();let Y=new M().crossVectors(O,ue).normalize(),me=O.clone().multiplyScalar(Math.cos(ne));return me.addScaledVector(ue,Math.cos(ce)*Math.sin(ne)),me.addScaledVector(Y,Math.sin(ce)*Math.sin(ne)),me.normalize()}function u(O,ne){let ce=ne*(O.length-1),ue=Math.min(O.length-2,Math.max(0,Math.floor(ce))),Y=ce-ue,me=O[ue].clone().lerp(O[ue+1],Y),Ce=new M().subVectors(O[ue+1],O[ue]).normalize();return{p:me,tangent:Ce}}function d(O,ne,ce,ue,Y,me){let Ce=Math.min(1,me+o[Y]),{end:Ue,endDir:fe,pts:xe,radii:Ie,endR:pt}=c(O,ne,ce,ue,Y,me,Ce),$e=n[n.length-1];if(Y===0&&me<.12)for(let U=0;U<15;U++){let Ye=Ee(e,.5,1),{p:tt,tangent:Be}=u(xe,Ye),rt=new M().crossVectors(Be,Xn);rt.lengthSq()<.02&&rt.set(1,0,0),rt.normalize().applyAxisAngle(Be,e()*Math.PI*2),tt.addScaledVector(rt,.02+e()*.07),r.push({pos:tt,dir:rt.clone().addScaledVector(Be,Ee(e,.1,.7)).normalize(),g:.15+U*.012,stag:e(),sizeScale:.45,branch:$e,siteT:Ye})}if(Y>=1){let U=Y===1?34:Y===2?48:Y===3?84:140;for(let Ye=0;Ye<U;Ye++){let tt=Ee(e,Y===a?.08:.24,1),{p:Be,tangent:rt}=u(xe,tt),Dt=new M().crossVectors(rt,Xn);Dt.lengthSq()<.02&&Dt.set(1,0,0),Dt.normalize().applyAxisAngle(rt,e()*Math.PI*2),Be.addScaledVector(Dt,.03+e()*.2);let on=Dt.clone().multiplyScalar(Ee(e,.65,1)).addScaledVector(rt,Ee(e,-.4,.6)).normalize();r.push({pos:Be,dir:on,g:Math.min(.82,me+.02),stag:e(),branch:$e,siteT:tt})}}if(Y>=1)for(let U=0;U<8;U++){let Ye=Ee(e,.86,1),{p:tt,tangent:Be}=u(xe,Ye),rt=new M().crossVectors(Be,Xn);rt.lengthSq()<.02&&rt.set(1,0,0),rt.normalize().applyAxisAngle(Be,e()*Math.PI*2),tt.addScaledVector(rt,.02+e()*.1),r.push({pos:tt,dir:rt.clone().addScaledVector(Be,Ee(e,-.3,.5)).normalize(),g:Math.min(.9,me+.03),stag:e(),branch:$e,siteT:Ye})}if(Y>=a)return;let ke=ce*Ee(e,.58,.7),ot=ue*Ee(e,.58,.7);if(Y<=1){let U=h(fe,Ee(e,.14,.32),e()*Math.PI*2);U.y-=.04+.05*Y,U.z>-.02&&(U.z=-.02-e()*.12),d(Ue,U.normalize(),ke*.82,Math.max(.009,pt*Ee(e,.96,1.04)),Y+1,Ce)}let vt=Y===0?5:Y===1?4:Y===2?2:1;for(let U=0;U<vt;U++){let Ye=Y<=1?U/vt*Math.PI*2+Ee(e,-.42,.42):e()*Math.PI*2,tt=Ee(e,.68,1.05),Be=Y===0?Ee(e,.3,.85):Ee(e,.22,.94),{p:rt,tangent:Dt}=u(xe,Be),on=Math.min(Ie.length-1,Math.max(0,Math.round(Be*(Ie.length-1)))),Pn=Ie[on],gi=h(Dt,tt,Ye);gi.y-=.02+.02*Y,gi.z>-.02&&(gi.z=-.02-e()*.15),d(rt.clone().addScaledVector(Dt,-.07),gi.normalize(),ke*Ee(e,.92,1.18),Math.max(.01,Pn*Ee(e,.68,.86)),Y+1,Ce)}if(Y===0)for(let U=0;U<3;U++){let Ye=Ee(e,.16,.42),{p:tt,tangent:Be}=u(xe,Ye),rt=Math.min(Ie.length-1,Math.max(0,Math.round(Ye*(Ie.length-1)))),Dt=Ie[rt],on=U/3*Math.PI*2+Ee(e,-.5,.5),Pn=h(Be,Ee(e,.95,1.2),on);Pn.y-=Ee(e,.02,.07),Pn.z>-.02&&(Pn.z=-.02-e()*.12),d(tt.clone().addScaledVector(Be,-.06),Pn.normalize(),ke*Ee(e,.78,1.02),Math.max(.018,Dt*Ee(e,.45,.62)),1,Ce+.012*U)}}let p=Ee(e,3.15,3.6);d(new M(0,0,0),new M(Ee(e,-.06,.06),1,Ee(e,-.06,.06)).normalize(),p,Ee(e,.17,.21),0,.06);let m=[],x=new ct({color:8084030,roughness:.95,metalness:0,flatShading:!0}),f=new ct({color:10255705,roughness:.9,metalness:0,flatShading:!0});function g(O,ne,ce,ue,Y,me){let Ce=[O.clone()],Ue=[ue],fe=ne.clone().normalize(),xe=ce/Y;for(let Ie=1;Ie<=Y;Ie++){let pt=Ie/Y;fe.x+=Ee(e,-me,me),fe.z+=Ee(e,-me*.55,me*.55),fe.y-=.015+.075*pt,fe.normalize();let $e=Ce[Ie-1].clone().addScaledVector(fe,xe);$e.y=Math.max(-5.8,$e.y),$e.x>8?$e.x=8:$e.x<-8&&($e.x=-8),$e.z=Math.min(.26,Math.max(.035,$e.z)),Ce.push($e),Ue.push(Math.max(.0035,ue*(1-.88*Math.pow(pt,.8))))}return{pts:Ce,radii:Ue}}function v(O,ne,ce,ue,Y,me){let Ce=l(O,ne,ce);s.push(Ce);let Ue=new Qe(Ce,me<=1?x:f);Ue.userData.part="root",Ue.receiveShadow=!1,Ue.castShadow=!1,Ue.frustumCulled=!1,t.add(Ue);let fe={mesh:Ue,pts:O,radii:ne,rings:O.length,radial:ce,basePos:Float32Array.from(Ce.attributes.position.array),lastK:-1};return m.push({...fe,g0:ue,g1:Y,depth:me}),fe}function _(O,ne,ce,ue,Y,me){let Ce=Y===0?16:Y===1?9:Y===2?6:4,Ue=Y===0?10:Y===1?7:Y===2?5:4,{pts:fe,radii:xe}=g(O,ne,ce,ue,Ce,Y===0?.22:.28),Ie=[.025,.02,.015,.01][Math.min(3,Y)],pt=Math.min(.86,me+Ie);if(v(fe,xe,Ue,me,pt,Y),Y>=3)return;let $e=Y===0?12:Y===1?3:2;for(let ke=0;ke<$e;ke++){let ot=Y===0?Ee(e,.06,.94):Ee(e,.18,.92),vt=Math.min(Ce,Math.max(1,Math.round(ot*Ce))),U=fe[vt].clone(),Ye=xe[vt],tt=e()<.5?-1:1,Be=Ee(e,.6,1.35),rt=new M(tt*Math.sin(Be)+Ee(e,-.3,.3),-Math.cos(Be)*Ee(e,.3,.75),Ee(e,-.25,.5)).normalize();_(U,rt,ce*Ee(e,.3,.55),Math.max(.01,Ye*Ee(e,.56,.8)),Y+1,pt+.012*ke)}}_(new M(0,-.05,.06),new M(Ee(e,-.12,.12),-1,Ee(e,-.06,.14)),Ee(e,2.8,3.4),.11,0,.012);for(let O=0;O<6;O++){let ne=O/6*Math.PI*2+Ee(e,-.5,.5);_(new M(Math.cos(ne)*.07,-.06,.02+Math.sin(ne)*.05),new M(Math.cos(ne)*1.1,-.55,Math.sin(ne)*.5).normalize(),Ee(e,1.2,1.7),.075,1,.045)}let y=[];for(let O=0;O<=8;O++){let ne=O/8;y.push(new le(.1+.125*Math.pow(1-ne,1.15),-.75*ne))}let R=new Lr(y,16);s.push(R);let T=new ct({color:6965808,map:Po,bumpMap:Po,bumpScale:.07,roughness:.98,metalness:0}),I=new Qe(R,T);I.userData.part="root",I.position.set(0,-.015,0),I.scale.setScalar(.001),I.castShadow=!0,I.receiveShadow=!0,t.add(I);let D=Math.min(r.length,4e4),B=new Wt(Io,sp,D);B.userData.part="leaf",B.instanceMatrix.setUsage(Hi),B.castShadow=!0,B.frustumCulled=!1,t.add(B);let k=[],j=new _e;for(let O=0;O<D;O++){let ne=r[O],ce=new mt().setFromUnitVectors(Xn,ne.dir);ce.multiply(new mt().setFromAxisAngle(Xn,e()*Math.PI*2));let ue=new _e,Y=e();Y<.45?ue.setHex(14836266):Y<.75?ue.setHex(15708196):Y<.92?ue.setHex(13185068):ue.setHex(10320682);let me=ne.pos.clone();me.z=Math.min(me.z,-.03-e()*.12),me.y=Math.max(.18,me.y);let Ce=ne.branch?bp(ne.branch.pts,ne.siteT):me.clone(),Ue=me.clone().sub(Ce);k.push({pos:me,quat:ce,size:Ee(e,.2,.34)*(ne.sizeScale||1),grow:ne.g,stag:ne.stag,autumn:ue,tone:Ee(e,.82,1.14),phase:e()*Math.PI*2,spin:Ee(e,.4,1.2),branch:ne.branch,siteT:ne.siteT,offset:Ue}),B.setColorAt(O,j.setHex(16777215))}B.instanceColor&&(B.instanceColor.needsUpdate=!0);let V=56,Z=new Wn(1,14,11),X=new ct({roughness:.38,metalness:0}),K=new Wt(Z,X,V);K.userData.part="fruit",K.instanceMatrix.setUsage(Hi),K.castShadow=!0,K.frustumCulled=!1,t.add(K);let ee=new Ni(.008,.011,.075,5,1);ee.translate(0,.037,0);let oe=new ct({color:5980711,roughness:1,metalness:0}),ie=new Wt(ee,oe,V);ie.userData.part="fruit",ie.instanceMatrix.setUsage(Hi),ie.frustumCulled=!1,t.add(ie);let be=[],Te=k.filter(O=>O.pos.y>1.2&&Math.hypot(O.pos.x,O.pos.z)>1.6),ae=Te.length>20?Te:k;for(let O=0;O<V;O++){let ce=ae[Math.floor(e()*ae.length)].pos.clone();ce.y-=.05+e()*.07,ce.x+=Ee(e,-.05,.05),ce.z+=Ee(e,-.05,.05);let ue=new _e,Y=e();Y<.62?ue.setHex(12595754):Y<.86?ue.setHex(14177580):ue.setHex(14725690),be.push({pos:ce,size:Ee(e,.085,.135),quat:new mt().setFromEuler(new Tt(e()*3,e()*3,e()*3)),phase:e()*Math.PI*2,stag:e()}),K.setColorAt(O,ue),ie.setColorAt(O,j.setHex(16777215))}K.instanceColor&&(K.instanceColor.needsUpdate=!0),ie.instanceColor&&(ie.instanceColor.needsUpdate=!0);let he=Math.min(2400,Math.floor(k.length*.11)),ye=new rn(1,1),Me=new ct({map:Op,alphaTest:.3,side:Tn,roughness:.9,metalness:0,transparent:!0,opacity:0}),pe=new Wt(ye,Me,he);pe.userData.part="flower",pe.instanceMatrix.setUsage(Hi),pe.frustumCulled=!1,t.add(pe);let w=[],b=new _e;for(let O=0;O<he;O++){let ce=k[Math.floor(e()*k.length)].pos.clone(),ue=new mt().setFromEuler(new Tt(e()*3,e()*3,e()*3)),Y=Ee(e,.045,.09);w.push({pos:ce,quat:ue,size:Y}),e()<.7?b.setHex(16774904):b.setHex(16767462),pe.setColorAt(O,b),pe.setMatrixAt(O,new Le().compose(ce,ue,new M(Y,Y,Y)))}pe.instanceColor&&(pe.instanceColor.needsUpdate=!0),pe.instanceMatrix.needsUpdate=!0;let N=[];for(let O of n){if(O.depth<1)continue;let ne=O.depth>=3?2:1;for(let ce=0;ce<ne;ce++){let ue=Math.floor(Ee(e,.25,.96)*(O.pts.length-1)),Y=O.pts[ue].clone(),me=O.radii?O.radii[ue]:.02;Y.y+=me*1.05+.008,N.push({pos:Y,s:.038+me*1.8})}}let L=new Wn(1,6,4),A=new ct({color:16252159,roughness:.82,metalness:0,transparent:!0,opacity:0}),P=new Wt(L,A,N.length);P.userData.part="snow",P.instanceMatrix.setUsage(Hi),P.frustumCulled=!1,t.add(P);let S=N.map(O=>({pos:O.pos,quat:new mt().setFromEuler(new Tt(e()*.4,e()*3,e()*.4)),sx:O.s*Ee(e,.65,.95),sy:O.s*.48,sz:O.s*Ee(e,.65,.95)}));for(let O=0;O<S.length;O++){let ne=S[O];P.setMatrixAt(O,new Le().compose(ne.pos,ne.quat,new M(ne.sx,ne.sy,ne.sz)))}P.instanceMatrix.needsUpdate=!0;let C=new ct({map:g0(),roughness:.52,metalness:.02}),F=new nn;F.userData.part="seed",F.position.set(0,.055,.07),F.rotation.set(.42,.6,.15);let te=new Qe(new Wn(.145,24,16,0,Math.PI*2,0,Math.PI*.5),C),z=new Qe(new Wn(.145,24,16,0,Math.PI*2,Math.PI*.5,Math.PI*.5),C);te.scale.set(1,.78,1.3),z.scale.set(1,.78,1.3),te.castShadow=!0,z.castShadow=!0,F.add(te,z);let $=new Qe(new vs(.128,.006,6,32),new ct({color:2758924,roughness:1,metalness:0}));$.rotation.x=Math.PI/2,F.add($),t.add(F);let Q=sp.clone(),se=[];for(let O=0;O<2;O++){let ne=new Qe(Io,Q);ne.userData.part="cotyledon",ne.scale.setScalar(.001),ne.position.set(O===0?-.035:.035,.1,.03),ne.rotation.set(O===0?.35:-.35,O===0?-1.15:1.15,O===0?.85:-.85),t.add(ne),se.push(ne)}let G={group:t,branches:n,leaves:B,leafData:k,roots:m,flare:I,flareMat:T,rootMats:[x,f],seedMesh:F,seedTop:te,seedBottom:z,seedCrack:$,seedMat:C,cotyledons:se,cotyledonMat:Q,geos:s,fruits:K,stems:ie,fruitData:be,fruitGeo:Z,fruitMat:X,stemGeo:ee,stemMat:oe,blossoms:pe,blossomMat:Me,blossomGeo:ye,blossomData:w,snowCaps:P,snowCapGeo:L,snowCapMat:A,snowCapData:S,radius:0};Os.add(t);let H=0;for(let O of n)H=Math.max(H,O.start.y+O.len);return G.height=H,G}function H0(i){if(i){Os.remove(i.group);for(let e of i.geos)e.dispose();i.leaves.dispose(),i.seedMesh.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),i.cotyledonMat.dispose();for(let e of i.rootMats)e.dispose();i.flareMat&&i.flareMat.dispose(),i.fruitGeo.dispose(),i.fruitMat.dispose(),i.stemGeo.dispose(),i.stemMat.dispose(),i.blossoms&&(i.blossoms.dispose(),i.blossomMat.dispose(),i.blossomGeo.dispose()),i.snowCaps&&(i.snowCaps.dispose(),i.snowCapMat.dispose(),i.snowCapGeo.dispose())}}function Bp(){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.5,"rgba(255,255,255,0.75)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new It(e);return r.colorSpace=st,r}var Vs=9e3,Lo=new et,Mo=new Float32Array(Vs*3),Fp=new Float32Array(Vs),Oh=new Float32Array(Vs);for(let i=0;i<Vs;i++)Mo[i*3]=(Math.random()-.5)*56,Mo[i*3+1]=Math.random()*26,Mo[i*3+2]=(Math.random()-.5)*56,Fp[i]=.3+Math.random()*.55,Oh[i]=Math.random()*Math.PI*2;Lo.setAttribute("position",new wt(Mo,3));var zp=new Di({size:.3,map:Bp(),transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0,color:16777215,fog:!1}),Uo=new Pr(Lo,zp);Uo.frustumCulled=!1;we.add(Uo);function k0(){let t=document.createElement("canvas");t.width=32,t.height=128;let n=t.getContext("2d"),r=n.createLinearGradient(0,0,0,128);r.addColorStop(0,"rgba(210,230,245,0)"),r.addColorStop(.25,"rgba(220,238,250,0.55)"),r.addColorStop(.75,"rgba(235,246,255,0.75)"),r.addColorStop(1,"rgba(235,246,255,0)"),n.fillStyle=r,n.fillRect(32*.4,0,32*.2,128);let s=new It(t);return s.colorSpace=st,s}var ko=1400,Do=new et,So=new Float32Array(ko*3),Hp=new Float32Array(ko);for(let i=0;i<ko;i++)So[i*3]=(Math.random()-.5)*24,So[i*3+1]=Math.random()*8,So[i*3+2]=-9+Math.random()*9,Hp[i]=10+Math.random()*8;Do.setAttribute("position",new wt(So,3));var kp=new Di({size:.46,map:k0(),transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0,color:14084342,fog:!1}),No=new Pr(Do,kp);No.frustumCulled=!1;we.add(No);var V0=[[16,31,.62],[40,54,.55],[62,72,.45],[128,138,.5],[206,216,.4]];function G0(i){let e=0;for(let[t,n,r]of V0)if(i>t&&i<n){let s=(i-t)/(n-t);e=Math.max(e,r*Pe(0,.18,s)*(1-Pe(.82,1,s)))}return e}var Yn=220,Vp=new ct({map:tu,alphaTest:.45,side:Tn,roughness:.9,transparent:!1}),Kt=new Wt(Io,Vp,Yn);Kt.instanceMatrix.setUsage(Hi);Kt.frustumCulled=!1;var Bs=[],Br=new Le().makeScale(1e-4,1e-4,1e-4);for(let i=0;i<Yn;i++)Bs.push({life:0,pos:new M,vel:new M,rot:new M,spin:new M,size:.2,color:new _e(16777215)}),Kt.setMatrixAt(i,Br),Kt.setColorAt(i,_o.setHex(16777215));we.add(Kt);var Ts=0;function W0(i){let e=Bs[Ts];Ts=(Ts+1)%Yn,e.life=1,e.pos.set((Math.random()-.5)*7,1+Math.random()*5.5,(Math.random()-.5)*7),e.vel.set((Math.random()-.5)*.5,-(.5+Math.random()*.5),(Math.random()-.5)*.5),e.rot.set(Math.random()*6.28,Math.random()*6.28,Math.random()*6.28),e.spin.set((Math.random()-.5)*2.4,(Math.random()-.5)*2.4,(Math.random()-.5)*2.4),e.size=.16+Math.random()*.1,e.color.copy(i),Kt.setColorAt((Ts+Yn-1)%Yn,i),Kt.instanceColor&&(Kt.instanceColor.needsUpdate=!0)}var Xe={theta:1.46,phi:1.46,radius:12.5,dir:1,target:new M(0,3.3,0)},Bh=Math.PI/2-.62,Fh=Math.PI/2+.62,Es=[[0,.1,.9],[18,.08,1.1],[32,0,1.3],[42,-.55,2.7],[56,-.7,3.1],[70,0,1.8],[76,.35,2.2],[94,1.2,3.8],[108,2.2,5.2],[120,3,10.8]];function X0(i){if(i>=Es[Es.length-1][0])return null;for(let e=1;e<Es.length;e++){let[t,n,r]=Es[e];if(i<=t){let[s,a,o]=Es[e-1],l=Pe(0,1,(i-s)/Math.max(.001,t-s));return{targetY:a+(n-a)*l,viewH:o+(r-o)*l}}}return null}var Vo=-999,xn=new Map,Cs=0,ap=0,qi=Ut.domElement;qi.style.touchAction="none";qi.addEventListener("pointerdown",i=>{xn.set(i.pointerId,{x:i.clientX,y:i.clientY,sx:i.clientX,sy:i.clientY,moved:!1}),Vo=performance.now(),qi.setPointerCapture(i.pointerId)});qi.addEventListener("pointermove",i=>{let e=xn.get(i.pointerId);if(!e)return;let t=i.clientX-e.x,n=i.clientY-e.y;if(e.x=i.clientX,e.y=i.clientY,Math.hypot(i.clientX-e.sx,i.clientY-e.sy)>6&&(e.moved=!0),Vo=performance.now(),xn.size===1)Xe.theta=qn(Xe.theta-t*.006,Bh,Fh),Xe.phi=qn(Xe.phi-n*.005,.42,1.52);else if(xn.size===2){let[r,s]=[...xn.values()],a=Math.hypot(r.x-s.x,r.y-s.y);Cs>0?Xe.radius=qn(ap*(Cs/a),5.5,30):(Cs=a,ap=Xe.radius)}});function j0(i){let e=xn.get(i.pointerId);xn.delete(i.pointerId),xn.size<2&&(Cs=0),e&&!e.moved&&xn.size===0&&pf(i.clientX,i.clientY)}function q0(i){xn.delete(i.pointerId),xn.size<2&&(Cs=0)}qi.addEventListener("pointerup",j0);qi.addEventListener("pointercancel",q0);qi.addEventListener("wheel",i=>{i.preventDefault(),Xe.radius=qn(Xe.radius*Math.exp(i.deltaY*.0012),5.5,30),Vo=performance.now()},{passive:!1});var mo=document.getElementById("season"),Th=document.getElementById("sub"),Y0=document.getElementById("year"),Z0=document.getElementById("chapterIndex"),go=document.getElementById("chapterTitle"),J0=document.getElementById("chapterText"),K0=document.getElementById("player"),zh=document.getElementById("playBtn"),$0=document.getElementById("replayBtn"),di=document.getElementById("timeline"),Q0=document.getElementById("timecode"),ev=document.getElementById("marks"),tv=document.getElementById("narration"),Gs=document.getElementById("startScreen"),nv=document.getElementById("startClassBtn"),iv=document.getElementById("freeViewBtn"),ax=document.getElementById("classroomTop"),op=document.getElementById("classChapterIndex"),lp=document.getElementById("classChapterTitle"),Ah=document.getElementById("classSeason"),rv=document.getElementById("classChapterBtn"),sv=document.getElementById("classTeacherBtn"),av=document.getElementById("classFindBtn"),ov=document.getElementById("classQuartetBtn"),Eo=document.getElementById("classAutoBtn"),Hh=document.getElementById("classProjectorBtn"),kh=document.getElementById("classLockBtn"),lv=document.getElementById("classExitBtn"),ox=document.getElementById("seasonWheel"),cp=document.getElementById("wheelNeedle"),hp=document.getElementById("wheelYear"),up=document.getElementById("subtitleText"),dp=document.getElementById("subtitleMeta"),pp=document.getElementById("classTimecode"),cv=document.getElementById("classPrevBtn"),bo=document.getElementById("classPlayBtn"),hv=document.getElementById("classNextBtn"),Vh=document.getElementById("classVoiceBtn"),uv=document.getElementById("classReplayBtn"),Ws=document.getElementById("chapterDrawer"),Gh=document.getElementById("chapterGrid"),nu=document.getElementById("teacherPanel"),dv=document.getElementById("teacherTitle"),fp=document.getElementById("teacherBody"),pv=document.getElementById("quartetOverlay"),mp=document.getElementById("quartetGrid"),Oo=document.getElementById("partCard"),fv=document.getElementById("partGlyph"),mv=document.getElementById("partName"),gv=document.getElementById("partPinyin"),vv=document.getElementById("partDesc"),_v=document.getElementById("partClose"),Xi=document.getElementById("findBanner"),xv=document.getElementById("findText"),gp=document.getElementById("findProgress"),Wh=document.getElementById("findNext"),yv=document.getElementById("findClose"),Is=document.getElementById("pausePrompt"),vo=document.getElementById("classToast"),Yi=document.getElementById("lockOverlay"),Mv=document.getElementById("chapterBtnNormal"),Sv=document.getElementById("quartetBtnNormal"),Ev=document.getElementById("classEnterBtn"),Rh="",Jn=-1,Xt=!1,pi=!0,Xs="speechSynthesis"in window,yn=Xs,zr=!1,Kn=!1,Zi=!1,fi=!1,An=null,kr=!1,ji=[],ui=0,Xh="",Fs=1,jh=-1,wo=null,Ps=null,vp=0,Bo=0,Ch=!1,mi=!1,Ft=[{start:0,end:16,title:"\u79CD\u5B50\u5165\u571F",text:"\u4E00\u9897\u5C0F\u5C0F\u7684\u79CD\u5B50\u843D\u8FDB\u677E\u8F6F\u7684\u6CE5\u571F\u91CC\u3002\u5B83\u5B89\u9759\u5730\u8EBA\u7740\uFF0C\u7B49\u5F85\u6C34\u5206\u548C\u6E29\u6696\u628A\u5B83\u5524\u9192\u3002"},{start:16,end:32,title:"\u6625\u96E8\u6ECB\u6DA6",text:"\u6625\u96E8\u843D\u4E0B\u6765\uFF0C\u79CD\u5B50\u559D\u9971\u4E86\u6C34\uFF0C\u8EAB\u4F53\u6162\u6162\u80C0\u5927\uFF0C\u575A\u786C\u7684\u5916\u58F3\u4ECE\u4E2D\u95F4\u88C2\u5F00\u4E00\u6761\u7F1D\u3002"},{start:32,end:56,title:"\u5411\u4E0B\u624E\u6839",text:"\u6700\u5148\u94BB\u51FA\u6765\u7684\u4E0D\u662F\u53F6\u5B50\uFF0C\u800C\u662F\u6839\u3002\u4E3B\u6839\u5411\u4E0B\u63A2\u7D22\uFF0C\u4FA7\u6839\u5411\u56DB\u5468\u94FA\u5F00\uFF0C\u628A\u6CE5\u571F\u7262\u7262\u6293\u4F4F\u3002"},{start:56,end:76,title:"\u7834\u571F\u53D1\u82BD",text:"\u5AE9\u82BD\u9876\u7740\u79CD\u58F3\u94BB\u51FA\u5730\u9762\uFF0C\u4E24\u7247\u5B50\u53F6\u6162\u6162\u5C55\u5F00\uFF0C\u7B2C\u4E00\u6B21\u89C1\u5230\u9633\u5149\u3002"},{start:76,end:94,title:"\u5E7C\u82D7\u521D\u957F",text:"\u5C0F\u82D7\u628A\u6839\u624E\u5F97\u66F4\u6DF1\uFF0C\u830E\u79C6\u53D8\u7C97\uFF0C\u7B2C\u4E00\u7247\u771F\u53F6\u8212\u5C55\u5F00\u6765\uFF0C\u5B83\u5F00\u59CB\u81EA\u5DF1\u5236\u9020\u517B\u5206\u3002"},{start:94,end:108,title:"\u5C0F\u6811\u6210\u5F62",text:"\u98CE\u5439\u8FC7\uFF0C\u96E8\u843D\u4E0B\uFF0C\u5C0F\u6811\u5728\u4E00\u6B21\u6B21\u6447\u6643\u4E2D\u53D8\u5F97\u66F4\u7ED3\u5B9E\uFF0C\u679D\u4E2B\u4E00\u5C42\u5C42\u5411\u5916\u4F38\u5C55\u3002"},{start:108,end:120,title:"\u957F\u6210\u5927\u6811",text:"\u4E00\u5E74\u53C8\u4E00\u5E74\uFF0C\u6811\u5E72\u7C97\u58EE\uFF0C\u6811\u51A0\u5982\u4F1E\uFF0C\u5B83\u7EC8\u4E8E\u957F\u6210\u4E86\u4E00\u68F5\u5927\u6811\u3002"},{start:120,end:140,title:"\u7B2C\u4E00\u5E74 \xB7 \u590F",text:"\u590F\u5929\u5230\u4E86\uFF0C\u53F6\u5B50\u6D53\u7EFF\uFF0C\u9633\u5149\u7A7F\u8FC7\u6811\u51A0\uFF0C\u6811\u836B\u4E0B\u51C9\u5FEB\u6781\u4E86\u3002"},{start:140,end:160,title:"\u7B2C\u4E00\u5E74 \xB7 \u79CB",text:"\u79CB\u5929\uFF0C\u53F6\u5B50\u53D8\u6210\u7EA2\u548C\u91D1\uFF0C\u4E00\u7247\u7247\u98D8\u843D\uFF0C\u6162\u6162\u8150\u70C2\uFF0C\u53D8\u6210\u6CE5\u571F\u91CC\u7684\u517B\u5206\u3002"},{start:160,end:180,title:"\u7B2C\u4E00\u5E74 \xB7 \u51AC",text:"\u51AC\u5929\uFF0C\u679D\u5934\u843D\u6EE1\u767D\u96EA\uFF0C\u6811\u5B89\u9759\u5730\u7761\u7740\uFF0C\u6839\u8FD8\u5728\u571F\u91CC\u547C\u5438\u3002"},{start:180,end:200,title:"\u7B2C\u4E8C\u5E74 \xB7 \u6625",text:"\u7B2C\u4E8C\u5E74\u6625\u5929\uFF0C\u6811\u53C8\u9192\u6765\uFF0C\u65B0\u82BD\u548C\u82B1\u6735\u4E00\u8D77\u5192\u51FA\u6765\u3002"},{start:200,end:220,title:"\u7B2C\u4E8C\u5E74 \xB7 \u590F",text:"\u590F\u5929\uFF0C\u6811\u836B\u50CF\u4E00\u628A\u5927\u4F1E\uFF0C\u5C0F\u9E1F\u548C\u6606\u866B\u90FD\u6765\u8FD9\u91CC\u4F11\u606F\u3002"},{start:220,end:240,title:"\u7B2C\u4E8C\u5E74 \xB7 \u79CB",text:"\u7B2C\u4E8C\u5E74\u79CB\u5929\uFF0C\u679D\u5934\u7ED3\u51FA\u679C\u5B9E\uFF0C\u679C\u5B9E\u91CC\u6709\u65B0\u7684\u79CD\u5B50\uFF0C\u751F\u547D\u5C31\u8FD9\u6837\u4F20\u4E0B\u53BB\u3002"},{start:240,end:260,title:"\u7B2C\u4E8C\u5E74 \xB7 \u51AC",text:"\u51AC\u5929\u53C8\u6765\u4E86\uFF0C\u4E00\u5E74\u7ED3\u675F\uFF0C\u65B0\u7684\u8F6E\u56DE\u53C8\u8981\u5F00\u59CB\u3002"}],_p=[{q:"\u79CD\u5B50\u4F4F\u5728\u54EA\u91CC\uFF1F\u5B83\u8981\u559D\u4EC0\u4E48\u624D\u80FD\u9192\u6765\uFF1F",a:"\u62B1\u819D\u8E72\u4E0B\uFF0C\u5047\u88C5\u81EA\u5DF1\u662F\u4E00\u9897\u5C0F\u79CD\u5B50\u3002"},{q:"\u79CD\u5B50\u559D\u9971\u6C34\u4EE5\u540E\uFF0C\u5916\u9762\u7684\u58F3\u4F1A\u600E\u4E48\u6837\uFF1F",a:"\u624B\u6307\u8F7B\u8F7B\u70B9\u819D\u76D6\uFF0C\u6A21\u4EFF\u6625\u96E8\u4E00\u6EF4\u4E00\u6EF4\u843D\u4E0B\u6765\u3002"},{q:"\u5148\u94BB\u51FA\u6765\u7684\u662F\u53F6\u5B50\uFF0C\u8FD8\u662F\u6839\uFF1F",a:"\u53CC\u624B\u5411\u4E0B\u4F38\uFF0C\u5B66\u6839\u5F80\u6CE5\u571F\u6DF1\u5904\u94BB\u3002"},{q:"\u5AE9\u82BD\u9876\u5F00\u6CE5\u571F\u7684\u65F6\u5019\uFF0C\u7528\u4E86\u591A\u5927\u7684\u529B\u6C14\uFF1F",a:"\u6162\u6162\u7AD9\u8D77\u6765\uFF0C\u53CC\u624B\u5411\u4E0A\u4E3E\uFF0C\u5B66\u5AE9\u82BD\u9876\u5F00\u6CE5\u571F\u3002"},{q:"\u7B2C\u4E00\u7247\u771F\u53F6\u662F\u4EC0\u4E48\u989C\u8272\uFF1F\u5B83\u4E3A\u4EC0\u4E48\u9700\u8981\u9633\u5149\uFF1F",a:"\u624B\u638C\u644A\u5F00\uFF0C\u5F53\u4E00\u7247\u5C0F\u53F6\u5B50\u6652\u6652\u592A\u9633\u3002"},{q:"\u5C0F\u6811\u88AB\u98CE\u5439\u5F97\u6447\u6765\u6447\u53BB\uFF0C\u4E3A\u4EC0\u4E48\u6CA1\u6709\u5012\uFF1F",a:"\u5DE6\u53F3\u8F7B\u8F7B\u6447\u6446\uFF0C\u50CF\u4E00\u68F5\u5C0F\u6811\u5728\u98CE\u91CC\u3002"},{q:"\u5927\u6811\u6709\u591A\u5927\uFF1F\u6211\u4EEC\u4E00\u8D77\u6765\u62B1\u4E00\u62B1\u3002",a:"\u5F20\u5F00\u53CC\u81C2\uFF0C\u56F4\u6210\u4E00\u4E2A\u5927\u5706\u5708\u3002"},{q:"\u590F\u5929\u7AD9\u5728\u6811\u4E0B\uFF0C\u4E3A\u4EC0\u4E48\u89C9\u5F97\u51C9\u5FEB\uFF1F",a:"\u53CC\u624B\u642D\u5728\u5934\u9876\uFF0C\u505A\u4E00\u4E2A\u5C0F\u51C9\u68DA\u3002"},{q:"\u843D\u53F6\u98D8\u4E0B\u6765\u4EE5\u540E\uFF0C\u53BB\u4E86\u54EA\u91CC\uFF1F",a:"\u624B\u6307\u8F6C\u5708\uFF0C\u6162\u6162\u843D\u5230\u5730\u4E0A\uFF0C\u518D\u53D8\u6210\u6CE5\u571F\u7684\u517B\u5206\u3002"},{q:"\u51AC\u5929\u5927\u6811\u7761\u7740\u4E86\u5417\uFF1F\u96EA\u843D\u5728\u54EA\u91CC\uFF1F",a:"\u62B1\u8D77\u624B\u81C2\u8F7B\u8F7B\u6447\u6643\uFF0C\u5B66\u5927\u6811\u5728\u96EA\u91CC\u4F11\u606F\u3002"},{q:"\u7B2C\u4E8C\u5E74\u6625\u5929\uFF0C\u6811\u4E0A\u5148\u5F00\u51FA\u4EC0\u4E48\uFF1F",a:"\u53CC\u624B\u4ECE\u4E0B\u5DF4\u5411\u5916\u6253\u5F00\uFF0C\u5B66\u4E00\u6735\u82B1\u6162\u6162\u5F00\u653E\u3002"},{q:"\u590F\u5929\u8C01\u4F1A\u5728\u6811\u836B\u4E0B\u4F11\u606F\uFF1F",a:"\u5B66\u5C0F\u9E1F\u98DE\u4E00\u98DE\uFF0C\u518D\u627E\u4E2A\u6811\u836B\u505C\u4E0B\u6765\u3002"},{q:"\u679C\u5B9E\u91CC\u9762\u85CF\u7740\u4EC0\u4E48\uFF1F",a:"\u53CC\u624B\u6367\u6210\u4E00\u4E2A\u5C0F\u679C\u5B50\uFF0C\u91CC\u9762\u85CF\u7740\u65B0\u7684\u79CD\u5B50\u3002"},{q:"\u4E00\u5E74\u7ED3\u675F\u4E86\uFF0C\u660E\u5E74\u8FD8\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF1F",a:"\u7528\u624B\u753B\u4E00\u4E2A\u5927\u5706\u5708\uFF1A\u6625\u590F\u79CB\u51AC\uFF0C\u53C8\u56DE\u6765\u4E86\u3002"}],bv=[["seed"],["seed"],["root","seed"],["root","trunk","cotyledon"],["leaf","trunk","root"],["leaf","branch","trunk","root"],["leaf","branch","trunk","root"],["leaf","branch","trunk","root"],["leaf","branch","trunk","root"],["branch","trunk","snow"],["flower","leaf","branch","trunk"],["leaf","branch","trunk","root"],["fruit","leaf","branch","trunk"],["snow","branch","trunk"]],Ls={seed:{name:"\u79CD\u5B50",pinyin:"zh\u01D2ng zi",desc:"\u79CD\u5B50\u7761\u5728\u6CE5\u571F\u91CC\uFF0C\u559D\u9971\u96E8\u6C34\u5C31\u4F1A\u6162\u6162\u9192\u6765\u3002"},root:{name:"\u6839",pinyin:"g\u0113n",desc:"\u6839\u628A\u6811\u7262\u7262\u6293\u4F4F\uFF0C\u8FD8\u5E2E\u5927\u6811\u559D\u6C34\u3002"},trunk:{name:"\u6811\u5E72",pinyin:"sh\xF9 g\xE0n",desc:"\u6811\u5E72\u53C8\u7C97\u53C8\u7ED3\u5B9E\uFF0C\u628A\u6C34\u548C\u517B\u5206\u9001\u5230\u6811\u679D\u4E0A\u3002"},branch:{name:"\u6811\u679D",pinyin:"sh\xF9 zh\u012B",desc:"\u6811\u679D\u5411\u56DB\u5468\u4F38\u5F00\uFF0C\u7ED9\u53F6\u5B50\u5B89\u5BB6\u3002"},leaf:{name:"\u53F6",pinyin:"y\xE8",desc:"\u53F6\u5B50\u6652\u7740\u592A\u9633\uFF0C\u4E3A\u5927\u6811\u5236\u9020\u517B\u5206\u3002"},cotyledon:{name:"\u5B50\u53F6",pinyin:"z\u01D0 y\xE8",desc:"\u5B50\u53F6\u662F\u79CD\u5B50\u5148\u957F\u51FA\u7684\u4E24\u7247\u5C0F\u53F6\u5B50\uFF0C\u5E2E\u5AE9\u82BD\u89C1\u9633\u5149\u3002"},flower:{name:"\u82B1",pinyin:"hu\u0101",desc:"\u82B1\u5F00\u7684\u65F6\u5019\uFF0C\u871C\u8702\u548C\u5C0F\u9E1F\u90FD\u6765\u4E86\u3002"},fruit:{name:"\u679C",pinyin:"gu\u01D2",desc:"\u679C\u5B9E\u91CC\u6709\u65B0\u7684\u79CD\u5B50\uFF0C\u751F\u547D\u5C31\u8FD9\u6837\u4F20\u4E0B\u53BB\u3002"},snow:{name:"\u96EA",pinyin:"xu\u011B",desc:"\u96EA\u82B1\u843D\u5728\u6811\u679D\u4E0A\uFF0C\u5927\u6811\u5728\u51AC\u5929\u5B89\u9759\u5730\u4F11\u606F\u3002"}},wv=/(种子|泥土|水分|温暖|春雨|外壳|侧根|主根|根|嫩芽|种壳|子叶|真叶|阳光|养分|枝丫|树干|树冠|叶子|树荫|落叶|白雪|新芽|花朵|果实|小鸟|昆虫|轮回)/g;function Tv(i){return i.replace(wv,"<em>$1</em>")}var Gp=new URLSearchParams(location.search).get("t0"),Wp=(()=>{let i=parseFloat(Gp);return isNaN(i)?0:i})(),Zn=/(^|[?&])freeze(=|&|$)/.test(location.search)?Wp:null,Rn=/(^|[?&])video(=|&|$)/.test(location.search),Xp=/(^|[?&])class(=|&|$)/.test(location.search),iu=/(^|[?&])stage(=|&|$)/.test(location.search),jp=!Rn&&Zn===null&&!Xp&&!iu&&Gp===null,qp=0;Rn&&(window.__setVideoT=i=>{qp=i},window.__videoReady=!0);iu&&document.body.classList.add("stage-only");var Oe=qn(Wp,0,Lt),zs=null,Ke=!Rn&&Zn===null&&!jp,Hs=!1,jt=Oe,xp=performance.now();function Fr(i){return i=Math.max(0,Math.round(i)),String(Math.floor(i/60)).padStart(2,"0")+":"+String(i%60).padStart(2,"0")}function Cn(i){let e=0;for(let t=0;t<Ft.length;t++)i>=Ft[t].start&&(e=t);return e}function Qt(i){let e=Cn(i);if(e===Jn)return;Jn=e,qs();let t=Ft[e];Z0.textContent="\u7B2C "+(e+1)+" \u7AE0 / \u5171 "+Ft.length+" \u7AE0",go.textContent=t.title,J0.textContent=t.text,go.style.animation="none",go.offsetWidth,go.style.animation="seasonIn .5s ease both",op&&(op.textContent="\u7B2C "+(e+1)+" \u7AE0 / \u5171 "+Ft.length+" \u7AE0"),lp&&(lp.textContent=t.title),up&&(up.innerHTML=Tv(t.text)),dp&&(dp.textContent="\u7B2C "+(e+1)+" \u7AE0 \xB7 "+t.title),Kp(e),Ki(),Xt&&Ke&&yn&&js()}function yt(){di&&(Hs||(di.value=String(Oe)),di.style.setProperty("--progress",(Oe/Lt*100).toFixed(2)+"%"),Q0.textContent=Fr(Oe)+" / "+Fr(Lt),zh.textContent=Ke?"\u23F8":"\u25B6",zh.setAttribute("aria-label",Ke?"\u6682\u505C":"\u64AD\u653E"),bo&&(bo.textContent=Ke?"\u23F8":"\u25B6",bo.setAttribute("aria-label",Ke?"\u6682\u505C":"\u64AD\u653E")),pp&&(pp.textContent=Fr(Oe)+" / "+Fr(Lt)))}function Gi(i,e=!0){Oe=qn(i,0,Lt),e&&(Ke=!1),jt=Oe,fi=!1,Gr(),Ji(),kr&&$n(),qs(),Qt(Oe),yt()}function ru(){Oe>=Lt-.01&&(Oe=0,jt=0,fi=!1,mi=!1,Qt(0)),kr&&($n(),qs()),Ke=!Ke,fi=!1,Gr(),Ke&&Xt&&yn&&js(),Ke||Ji(),yt()}for(let i of Ft){if(i.start<=0)continue;let e=document.createElement("span");e.style.left=i.start/Lt*100+"%",e.title=i.title,i.start>=92&&(e.className="chapter-major"),ev.appendChild(e)}di.max=Lt.toFixed(1);di.value=String(Oe);Qt(Oe);yt();(Zn!==null||Rn)&&(K0.style.display="none",tv.style.display="none",document.getElementById("tips").style.display="none",document.getElementById("replant").style.display="none");jp?Zi=!0:Gs.classList.add("hidden");iu&&(Gs.classList.add("hidden"),Zi=!1);function Av(){for(let i of["__grass","__flowers","__groundLeaves"]){let e=we[i];e&&(we.remove(e),e.material&&e.material.dispose())}we.__grass=null,we.__flowers=null,we.__groundLeaves=null}function su(i){H0(ve),Av();let e=In(i^2654435769);we.__grass=P0(i^1597463007),we.add(we.__grass),we.__flowers=U0(i^668265263),we.add(we.__flowers),we.__groundLeaves=D0(i^374761393),we.add(we.__groundLeaves),ve=z0(i);for(let t of Bs)t.life=0;for(let t=0;t<Yn;t++)Kt.setMatrixAt(t,Br);Kt.instanceMatrix.needsUpdate=!0}var ks=Math.floor(Math.random()*1e5);su(ks);var Rv=[[130,"\u590F","\u7B2C 1 \u5E74"],[150,"\u79CB","\u7B2C 1 \u5E74"],[170,"\u51AC","\u7B2C 1 \u5E74"],[190,"\u6625","\u7B2C 2 \u5E74"]],yp=new xs,Ih=new le;function $t(i,e=1800){vo&&(vo.textContent=i,vo.classList.add("show"),clearTimeout($t._t),$t._t=setTimeout(()=>vo.classList.remove("show"),e))}function Hr(i){i&&(i===Ws&&Iv(),i===nu&&Kp(Cn(Oe)),i.classList.add("show"))}function Yp(i){i&&i.classList.remove("show")}function Zp(){document.querySelectorAll(".modal.show").forEach(i=>i.classList.remove("show"))}function Jp(){return!!document.querySelector(".modal.show")}function Cv(i){let e=(Zh(i)%1+1)%1;return _n[Math.floor(e*4)%4].name}function Iv(){if(!Gh)return;let i=Cn(Oe);Gh.innerHTML=Ft.map((e,t)=>{let n=Cv((e.start+Math.min(e.end,Lt))/2);return'<button class="chapter-item'+(t===i?" current":"")+'" data-index="'+t+'"><div class="chapter-thumb" data-season="'+n+'"></div><div class="chapter-num">\u7B2C '+(t+1)+' \u7AE0</div><div class="chapter-name">'+e.title+'</div><div class="chapter-time">'+Fr(e.start)+"\u2013"+Fr(Math.min(e.end,Lt))+"</div></button>"}).join("")}function Kp(i){if(!fp)return;let e=_p[qn(i,0,_p.length-1)];e&&(dv.textContent="\u7B2C "+(i+1)+" \u7AE0 \xB7 "+Ft[i].title,fp.innerHTML='<div class="teacher-block"><b>\u53EF\u4EE5\u95EE</b><p>'+e.q+'</p></div><div class="teacher-block"><b>\u53EF\u4EE5\u52A8</b><p>'+e.a+"</p></div>")}function au(i,e=!0){i=qn(i,0,Ft.length-1);let t=Math.max(.01,Ft[i].start+.01);Gi(t,e),e||(Ke=!0,yt())}function $p(){let i=Cn(Oe);if(i>=Ft.length-1){Gi(Lt,!0);return}au(i+1,!0)}function Qp(){let i=Cn(Oe),e=Oe<=Ft[i].start+1.4;au(e?Math.max(0,i-1):i,!0)}function Vr(){Eo&&(Eo.classList.toggle("on",pi),Eo.textContent=pi?"\u6BCF\u7AE0\u505C \u2713":"\u6BCF\u7AE0\u505C"),Vh&&Vh.classList.toggle("on",yn),Hh&&Hh.classList.toggle("on",zr),kh&&kh.classList.toggle("on",Kn)}function ef(i){pi=!!i,Vr()}function Pv(){ef(!pi),pi||Gr(),$t(pi?"\u6BCF\u7AE0\u7ED3\u675F\u4F1A\u81EA\u52A8\u6682\u505C":"\u5DF2\u5173\u95ED\u81EA\u52A8\u6682\u505C")}function ou(i){zr=!!i,document.body.classList.toggle("projector",zr),Vr()}function tf(){ou(!zr),$t(zr?"\u6295\u5F71\u589E\u4EAE\u5DF2\u5F00\u542F":"\u6295\u5F71\u589E\u4EAE\u5DF2\u5173\u95ED")}function qh(){if(!Xs)return;wo=(speechSynthesis.getVoices?speechSynthesis.getVoices():[]).find(e=>/zh[-_]?CN|cmn|Chinese|Tingting|Xiaoxiao|Meijia|Huihui/i.test((e.lang||"")+" "+(e.name||"")))||null}Xs&&(qh(),speechSynthesis.addEventListener&&speechSynthesis.addEventListener("voiceschanged",qh));function Ji(){if(Xs){try{speechSynthesis.cancel()}catch{}jh=-1,window.dispatchEvent(new CustomEvent("tree:voice",{detail:{speaking:!1}}))}}function js(){if(!yn||!Xs||Zn!==null||Rn)return;let i=Cn(Oe);if(jh===i&&speechSynthesis.speaking)return;try{speechSynthesis.cancel()}catch{}wo||qh();let e=new SpeechSynthesisUtterance(Ft[i].text);wo&&(e.voice=wo),e.lang="zh-CN",e.rate=.92,e.pitch=1.04,e.volume=1,e.onstart=()=>window.dispatchEvent(new CustomEvent("tree:voice",{detail:{speaking:!0}})),e.onend=()=>window.dispatchEvent(new CustomEvent("tree:voice",{detail:{speaking:!1}})),e.onerror=()=>window.dispatchEvent(new CustomEvent("tree:voice",{detail:{speaking:!1}})),jh=i,window.dispatchEvent(new CustomEvent("tree:voice",{detail:{speaking:!0}}));try{speechSynthesis.speak(e)}catch{window.dispatchEvent(new CustomEvent("tree:voice",{detail:{speaking:!1}}))}}function Lv(){yn=!yn,Vr(),yn?Xt&&Ke&&js():Ji(),$t(yn?"\u6545\u4E8B\u59D0\u59D0\u6717\u8BFB\u5DF2\u5F00\u542F":"\u6717\u8BFB\u5DF2\u5173\u95ED")}function Uv(){Kn=!0,Ki(),$n(),Yi.classList.add("show"),Vr()}function lu(){Kn=!1,Yi.classList.remove("show","holding"),clearTimeout(Bo),Vr(),$t("\u5C4F\u5E55\u5DF2\u89E3\u9501")}function nf(){Kn?lu():Uv()}function cu(){document.body.classList.remove("idle"),clearTimeout(vp),Xt&&(vp=setTimeout(()=>{!Jp()&&!Zi&&!Kn&&document.body.classList.add("idle")},2600))}async function rf(){if(!(!Xt||!("wakeLock"in navigator)))try{Ps=await navigator.wakeLock.request("screen")}catch{Ps=null}}function Dv(){try{Ps&&Ps.release()}catch{}Ps=null}function sf(){let i=Jh();Pt.aspect=i.w/i.h,Pt.updateProjectionMatrix(),Ut.setSize(i.w,i.h)}function af(){if(document.fullscreenElement)return;let i=document.documentElement;if(!i.requestFullscreen){$t("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u5168\u5C4F\uFF0C\u6309 F11 \u4E5F\u53EF\u4EE5");return}let e=i.requestFullscreen();e&&e.catch&&e.catch(()=>$t("\u5168\u5C4F\u8BF7\u6C42\u88AB\u6D4F\u89C8\u5668\u62E6\u4F4F\u4E86\uFF0C\u6309 F11 \u4E5F\u53EF\u4EE5"))}function Nv(){if(document.fullscreenElement){let i=document.exitFullscreen();i&&i.catch&&i.catch(()=>{})}else af()}function Go(i={}){let e=i.reset!==!1;Xt=!0,Zi=!1,Gs.classList.add("hidden"),document.body.classList.add("classroom-mode"),document.body.classList.remove("idle"),sf(),Zp(),$n(),qs(),Ki(),e&&(Oe=0,jt=0,Jn=-1,mi=!1),Ke=!1,ef(!0),ou(!1),Vr(),Qt(Oe),yt(),!Rn&&Zn===null&&i.autoplay!==!1&&(Ke=!0,yt(),yn&&js()),i.fullscreen&&af(),rf(),cu()}function of(){if(Ke=!1,Ji(),$n(),qs(),Ki(),Gr(),Kn=!1,Yi.classList.remove("show","holding"),Dv(),Xt=!1,document.body.classList.remove("classroom-mode","idle","projector"),ou(!1),sf(),document.fullscreenElement){let i=document.exitFullscreen();i&&i.catch&&i.catch(()=>{})}Zi=!0,Gs.classList.remove("hidden"),Oe=0,jt=0,Jn=-1,Qt(0),yt()}function Ov(i){let e=i;for(;e;){if(e.userData&&e.userData.part)return e.userData.part;e=e.parent}return null}function hu(i,e){return i==="seed"?e<80:i==="cotyledon"?e>=54&&e<=82:i==="root"?e>=30:i==="trunk"?e>=52:i==="branch"?e>=90:i==="leaf"?e>=54:i==="flower"?e>=178&&e<=206:i==="fruit"?e>=216&&e<=252:i==="snow"?e>=156&&e<=184||e>=236:!0}function lf(i){if(!ve)return!1;let e=Yh(Oe);if(i==="seed")return!!(ve.seedMesh&&ve.seedMesh.visible&&ve.seedMesh.scale.x>.008);if(i==="root")return ve.roots.some(t=>t.mesh.visible);if(i==="trunk")return!!(ve.branches[0]&&ve.branches[0].mesh.visible&&e>.11);if(i==="branch")return ve.branches.some((t,n)=>n>0&&t.mesh.visible)&&e>.24;if(i==="leaf")return e>.13;if(i==="cotyledon")return ve.cotyledons.some(t=>t.visible&&t.scale.x>.04);if(i==="flower")return!!(ve.blossoms&&ve.blossoms.visible&&ve.blossomMat.opacity>.05);if(i==="fruit"){let t=(Zh(Oe)%1+1)%1;return(wp(Oe)>=2?Pe(.4,.52,t):0)>.02&&t<.82}return i==="snow"?!!(ve.snowCaps&&ve.snowCaps.visible&&ve.snowCapMat.opacity>.05):!1}function Bv(i){if(!ve||!ve.group)return[];let e=[],t=r=>{if(!r)return;let s=r.clone();ve.group.localToWorld(s),e.push(s)},n=r=>{r&&e.push(r.clone())};if(i==="seed")ve.seedMesh&&n(ve.seedMesh.getWorldPosition(new M));else if(i==="root"){for(let r of ve.roots)if(r.mesh.visible)for(let s=0;s<r.pts.length;s+=2)t(r.pts[s])}else if(i==="trunk"){let r=ve.branches[0];if(r&&r.mesh.visible)for(let s=0;s<r.pts.length;s+=2)t(r.pts[s])}else if(i==="branch")for(let r=0;r<ve.branches.length;r++){let s=ve.branches[r];if(!(r===0||!s.mesh.visible))for(let a=0;a<s.pts.length;a+=2)t(s.pts[a])}else if(i==="leaf"){let r=Yh(Oe);for(let s=0;s<ve.leafData.length;s+=25){let a=ve.leafData[s];a.grow!=null&&a.grow>r+.02||t(a.pos)}}else if(i==="cotyledon")for(let r of ve.cotyledons)r.visible&&r.scale.x>.04&&n(r.getWorldPosition(new M));else if(i==="flower"){if(ve.blossomData)for(let r=0;r<ve.blossomData.length;r+=8)t(ve.blossomData[r].pos)}else if(i==="fruit"){if(ve.fruitData)for(let r=0;r<ve.fruitData.length;r+=2)t(ve.fruitData[r].pos)}else if(i==="snow"&&ve.snowCapData)for(let r of ve.snowCapData)t(r.pos);return e}function uu(i){if(!ve||!ve.group)return[];let e=Ut.domElement.getBoundingClientRect(),t=[],n=new M;for(let r of Bv(i)){if(n.copy(r).project(Pt),n.z<-1||n.z>1)continue;let s=e.left+(n.x*.5+.5)*e.width,a=e.top+(-n.y*.5+.5)*e.height;s<e.left||s>e.right||a<e.top||a>e.bottom||t.push({x:s,y:a})}return t}function cf(i){return(bv[Cn(i)]||[]).filter(t=>!hu(t,i)||!lf(t)?!1:uu(t).length>=(t==="seed"?1:2))}function Fv(i,e){if(!An)return!1;let t=Ut.domElement.getBoundingClientRect(),n=Math.max(40,Math.min(80,t.width*.055)),r=n*n;for(let s of uu(An)){let a=s.x-i,o=s.y-e;if(a*a+o*o<=r)return!0}return!1}function hf(i,e){if(!ve||!ve.group)return null;let t=Ut.domElement.getBoundingClientRect();Ih.x=(i-t.left)/Math.max(1,t.width)*2-1,Ih.y=-((e-t.top)/Math.max(1,t.height))*2+1,yp.setFromCamera(Ih,Pt);let n=yp.intersectObject(ve.group,!0);for(let r of n){let s=Ov(r.object);if(s&&hu(s,Oe)&&lf(s))return s}return null}function Mp(i,e,t){let n=Ls[i];!n||!Oo||(fv.textContent=n.name.slice(-1),mv.textContent=n.name,gv.textContent=n.pinyin,vv.textContent=n.desc,Oo.classList.add("show"))}function Ki(){Oo&&Oo.classList.remove("show")}function zv(i,e){return i===e||i==="leaf"&&e==="cotyledon"}function qs(){ji=[],ui=0,Xh="",Fs=1}function Hv(){let i=cf(Oe);if(!i.length)return!1;let e=Cn(Oe),t=["seed","root","trunk","branch","leaf","cotyledon","flower","fruit","snow"],n=e+"|"+i.join(",");if(n!==Xh){let r=t.filter(a=>i.includes(a)),s=r.length?(e*2+1)%r.length:0;ji=r.slice(s).concat(r.slice(0,s)),ui=0,Fs=1,Xh=n}return ji.length>0}function uf(){if(!Hv()){$t("\u8FD9\u4E00\u7AE0\u6682\u65F6\u6CA1\u6709\u53EF\u627E\u7684\u90E8\u4F4D\uFF0C\u6362\u4E2A\u7AE0\u8282\u8BD5\u8BD5"),$n();return}ui>=ji.length&&(ui=0,Fs++);let i=ui+1,e=ji.length;An=ji[ui],ui++,kr=!0,xv.innerHTML="\u627E\u4E00\u627E\uFF1A<b>"+Ls[An].name+"</b>\u5728\u54EA\u91CC\uFF1F",gp&&(gp.textContent="\u7B2C "+Fs+" \u8F6E \xB7 "+i+"/"+e),Wh&&(Wh.style.display=e>1?"":"none"),Xi.classList.add("show"),Xi.classList.remove("shake"),Gr(),Ki(),Ke&&(Ke=!1,Ji(),yt())}function df(){if(!Xt){$t("\u8BF7\u5148\u8FDB\u5165\u8BFE\u5802\u6A21\u5F0F");return}uf()}function $n(){kr=!1,An=null,Xi&&Xi.classList.remove("show","shake")}function pf(i,e){if(Zi||Kn)return;let t=hf(i,e);if(kr){if(Fv(i,e)||t&&zv(An,t)){let r=An;Mp(r,i,e),$n(),$t("\u627E\u5230\u5566\uFF01\u8FD9\u662F"+Ls[r].name)}else t?(Xi.classList.remove("shake"),Xi.offsetWidth,Xi.classList.add("shake"),$t("\u8FD9\u91CC\u4E0D\u662F"+Ls[An].name+"\uFF0C\u518D\u627E\u627E\u770B")):$t("\u518D\u4ED4\u7EC6\u770B\u770B\uFF0C\u627E\u627E\u753B\u9762\u91CC\u7684"+Ls[An].name);return}t?(Xt&&Ke&&(Ke=!1,Ji(),yt()),Mp(t,i,e)):Ki()}function kv(){let i=Ut.domElement,e=document.createElement("canvas"),t=Math.min(720,i.width),n=Math.max(1,Math.round(t*i.height/Math.max(1,i.width)));return e.width=t,e.height=n,e.getContext("2d").drawImage(i,0,0,t,n),e.toDataURL("image/jpeg",.86)}async function Wo(){if(Ch)return;Ch=!0;let i={t:Oe,prevT:jt,playing:Ke,theta:Xe.theta,radius:Xe.radius,phi:Xe.phi},e=[];try{for(let[t,n,r]of Rv)Oe=t,jt=t,zs=t,Ke=!1,Xe.theta=1.46,Xe.radius=12.5,Xe.phi=1.46,yt(),Qt(t),await new Promise(s=>requestAnimationFrame(()=>requestAnimationFrame(s))),Ut.render(we,Pt),e.push({label:n,year:r,url:kv()});mp&&(mp.innerHTML=e.map(t=>'<figure class="quartet-item"><img src="'+t.url+'" alt="'+t.label+'"><figcaption><b>'+t.label+"</b><span>"+t.year+"</span></figcaption></figure>").join("")),Hr(pv)}finally{zs=null,Oe=i.t,jt=i.prevT,Ke=i.playing,Xe.theta=i.theta,Xe.radius=i.radius,Xe.phi=i.phi,yt(),Qt(Oe),Ch=!1}}function Vv(i){Is&&(Is.innerHTML=i,Is.classList.add("show"))}function Gr(){Is&&Is.classList.remove("show")}zh.addEventListener("click",ru);$0.addEventListener("click",()=>{Oe=0,jt=0,Ke=!0,fi=!1,mi=!1,Jn=-1,Qt(0),yt()});di.addEventListener("pointerdown",()=>{Hs=!0});di.addEventListener("input",i=>{Gi(parseFloat(i.target.value),!0)});di.addEventListener("change",()=>{Hs=!1,yt()});window.addEventListener("pointerup",()=>{Hs&&(Hs=!1,yt())});document.getElementById("replant").addEventListener("click",()=>{ks=Math.floor(Math.random()*1e5),su(ks),Oe=0,jt=0,Ke=!0,fi=!1,mi=!1,Jn=-1,Qt(0),yt()});nv.addEventListener("click",()=>Go({reset:!0,fullscreen:!0,autoplay:!0}));iv.addEventListener("click",()=>{Zi=!1,Gs.classList.add("hidden"),Gr(),Ke=!0,yt()});bo.addEventListener("click",ru);cv.addEventListener("click",Qp);hv.addEventListener("click",$p);uv.addEventListener("click",()=>{Oe=0,jt=0,Ke=!0,fi=!1,mi=!1,Jn=-1,Qt(0),yt(),yn&&js()});rv.addEventListener("click",()=>Hr(Ws));sv.addEventListener("click",()=>Hr(nu));av.addEventListener("click",df);ov.addEventListener("click",Wo);Eo.addEventListener("click",Pv);Hh.addEventListener("click",tf);kh.addEventListener("click",nf);lv.addEventListener("click",of);Vh.addEventListener("click",Lv);Mv.addEventListener("click",()=>Hr(Ws));Sv.addEventListener("click",Wo);Ev.addEventListener("click",()=>Go({reset:!1,fullscreen:!0,autoplay:!0}));_v.addEventListener("click",Ki);Wh.addEventListener("click",uf);yv.addEventListener("click",$n);Gh.addEventListener("click",i=>{let e=i.target.closest(".chapter-item");e&&(au(parseInt(e.dataset.index,10),!0),Yp(Ws))});document.querySelectorAll(".modal").forEach(i=>{i.addEventListener("pointerdown",e=>{e.target===i&&i.classList.remove("show")})});document.querySelectorAll("[data-close]").forEach(i=>{i.addEventListener("click",()=>Yp(document.getElementById(i.dataset.close)))});Yi.addEventListener("pointerdown",i=>{i.preventDefault(),Yi.classList.add("holding"),clearTimeout(Bo),Bo=setTimeout(lu,2e3)});["pointerup","pointercancel","pointerleave"].forEach(i=>{Yi.addEventListener(i,()=>{Yi.classList.remove("holding"),clearTimeout(Bo)})});window.addEventListener("pointermove",cu,{passive:!0});window.addEventListener("pointerdown",cu,{passive:!0});document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&Xt&&rf()});window.addEventListener("keydown",i=>{if(Kn){i.key==="Escape"&&(i.preventDefault(),lu());return}i.code==="Space"?(i.preventDefault(),ru()):i.key==="ArrowLeft"?(i.preventDefault(),Gi(Oe-5,!0)):i.key==="ArrowRight"?(i.preventDefault(),Gi(Oe+5,!0)):i.key==="Home"?(i.preventDefault(),Gi(0,!0)):i.key==="End"?(i.preventDefault(),Gi(Lt,!0)):i.key==="PageUp"?(i.preventDefault(),Qp()):i.key==="PageDown"?(i.preventDefault(),$p()):i.key==="f"||i.key==="F"?(i.preventDefault(),Nv()):i.key==="c"||i.key==="C"?(i.preventDefault(),Hr(Ws)):i.key==="t"||i.key==="T"?(i.preventDefault(),Hr(nu)):i.key==="q"||i.key==="Q"?(i.preventDefault(),Wo()):i.key==="p"||i.key==="P"?(i.preventDefault(),tf()):i.key==="l"||i.key==="L"?(i.preventDefault(),nf()):i.key==="Escape"?Jp()&&(i.preventDefault(),Zp()):(i.key==="r"||i.key==="R")&&(ks=Math.floor(Math.random()*1e5),su(ks),Oe=0,jt=0,Ke=!0,fi=!1,mi=!1,Jn=-1,Qt(0),yt())});var an=new Le,Or=new mt,Gv=new mt,ki=new M,Jt=new M,Ph=new Tt,Vi=new _e,lx=new _e,bs=new M,Sp=new M,Wv=new M,Lh=new M,Xv=new le(.5,.8),jv=new M;function Ep(i,e,t=1){if(Math.abs(e-i.lastK)<.003&&Math.abs(t-(i.lastFat===void 0?-1:i.lastFat))<.004)return;i.lastK=e,i.lastFat=t;let n=i.mesh.geometry.attributes.position,r=n.array,s=i.basePos,a=i.rings,o=i.radial,l=Math.min(a-1,Math.max(0,e*(a-1))),c=Math.min(a-2,Math.floor(l));if(bs.copy(i.pts[c]).lerp(i.pts[c+1],l-c),c+1<a){let u=Math.min(.1,(i.radii?i.radii[c]:.05)*1.4);bs.addScaledVector(i.pts[c+1].clone().sub(i.pts[c]).normalize(),u)}let h=(.45+.55*Math.min(1,e*1.7))*t;for(let u=0;u<a;u++){let d=i.pts[u],p=u*o*3;if(u>c)for(let m=0;m<o;m++){let x=p+m*3;r[x]=bs.x,r[x+1]=bs.y,r[x+2]=bs.z}else for(let m=0;m<o;m++){let x=p+m*3;r[x]=d.x+(s[x]-d.x)*h,r[x+1]=d.y+(s[x+1]-d.y)*h,r[x+2]=d.z+(s[x+2]-d.z)*h}}n.needsUpdate=!0}function ff(){requestAnimationFrame(ff);let i=performance.now(),e=Math.min(.1,Math.max(.001,(i-xp)/1e3));if(xp=i,!Rn&&Zn===null&&Ke){let G=Math.min(Lt,Oe+e),H=Cn(Oe),O=Cn(G);if(Xt&&pi&&G<Lt-.001&&O!==H){Oe=Math.min(Ft[H].end,Lt),Ke=!1,fi=!0;let ne=Ft[Math.min(Ft.length-1,H+1)].title;Vv("\u7B2C "+(H+1)+" \u7AE0\u7ED3\u675F \xB7 \u4E0B\u4E00\u7AE0\uFF1A<b>"+ne+"</b>"),Ji()}else Oe=G,Oe>=Lt-.001&&(Oe=Lt,Ke=!1,Xt&&!mi&&(mi=!0,setTimeout(()=>{Xt&&Wo()},900)))}let t=Rn?qp:zs!==null?zs:Zn!==null?Zn:Oe,n=Rn?1/60:Math.min(.05,Math.max(1e-4,t-jt));jt=t,Qt(t),yt();let s=(Zh(t)%1+1)%1,a=wp(t),o=Yh(t),l=u0(s,c0),c=G0(t);jn.topColor.value.copy(l.skyTop),jn.horizonColor.value.copy(l.horizon),jn.sunColor.value.copy(l.sun),jn.cloudCover.value=Math.min(1,l.cloud+c*.55),jn.cloudWarm.value=l.cloudWarm,jn.time.value=t,we.fog.color.copy(l.fog),xo.color.copy(l.horizon),xo.groundColor.copy(l.ground).multiplyScalar(.6),xo.intensity=l.hemi,Bt.color.copy(l.sun),Bt.intensity=l.sunI*(1-.38*c);let h=.16+.1*(.5+.5*Math.cos((s-.25)*Math.PI*2)),u=Xe.theta-Math.PI-.28+Math.sin(t*.03)*.04,d=Wv.set(Math.cos(u)*Math.cos(h),Math.sin(h),Math.sin(u)*Math.cos(h)).normalize();if(Bt.position.copy(d).multiplyScalar(34),As.position.copy(d).multiplyScalar(150),Rs.position.copy(d).multiplyScalar(148),As.material.color.copy(l.sun),Rs.material.color.copy(l.sun),Rs.material.opacity=.42*(.65+.35*(1-Pe(.6,.9,s)))*(1-.6*c),jn.sunDir.value.copy(d),Rp.color.copy(l.ground).multiplyScalar(1-.16*c),ws.length===3){let G=ws[0].uniforms;G.uBottomColor.value.copy(l.fog).lerp(l.skyTop,.05),G.uTopColor.value.copy(l.fog).lerp(l.skyTop,.38).multiplyScalar(.9),G.uSnowColor.value.setHex(15857919);let H=ws[1].uniforms;H.uBottomColor.value.copy(l.fog).lerp(l.ground,.12),H.uTopColor.value.copy(l.ground).lerp(l.fog,.52).multiplyScalar(.92);let O=ws[2].uniforms;O.uBottomColor.value.copy(l.ground).lerp(l.fog,.36),O.uTopColor.value.copy(l.ground).lerp(l.fog,.24).multiplyScalar(.88)}let p=Pe(.44,.56,s)*(1-Pe(.76,.84,s));we.__grass.material.color.setRGB(1+.95*p,1-.08*p,1-.85*p),Np.value=t;let m=Pe(.01,.07,s)*(1-Pe(.4,.48,s));we.__flowers.visible=m>.02,we.__flowers.material.opacity=m;let x=Pe(.52,.68,s),f=Pe(.7,.94,s);if(we.__groundLeaves.visible=s>.5&&s<.96,we.__groundLeaves.visible){we.__groundLeaves.material.opacity=1-.62*f;let G=we.__groundLeaves.userData.leafInfo;for(let H=0;H<G.length;H++){let O=G[H],ne=.18+.82*x,ce=O.size*ne*(1-.85*f);Jt.set(O.pos.x,O.pos.y-f*(.015+O.size*.35),O.pos.z),ki.set(ce,ce,ce),an.compose(Jt,O.quat,ki),we.__groundLeaves.setMatrixAt(H,an),Vi.copy(O.color).lerp(_o.setHex(2366226),Math.min(1,f*1.25)),we.__groundLeaves.setColorAt(H,Vi)}we.__groundLeaves.instanceMatrix.needsUpdate=!0,we.__groundLeaves.instanceColor&&(we.__groundLeaves.instanceColor.needsUpdate=!0)}let g=.45+.35*Math.cos((s-.03)*Math.PI*2);for(let G=0;G<Dh.length;G++)Dh[G].opacity=[.16,.1,.06][G]*g*(.88+.12*Math.sin(t*.05+G));if(eu.position.x=Math.sin(t*.018)*4,Nh.opacity=.18*(1-Pe(.72,.82,s))*(.7+.3*Math.sin(t*.7))*Pe(.35,.65,o),Nh.opacity>.01){let G=Co.attributes.position.array;for(let H=0;H<Ho;H++){let O=H*3;G[O+1]+=n*(.05+H%7*.008),G[O]+=Math.sin(t*.5+Lp[H])*n*.04,G[O+1]>7.2&&(G[O+1]=.2,G[O]=(Math.random()-.5)*22,G[O+2]=-10+Math.random()*12)}Co.attributes.position.needsUpdate=!0}let v=.18+.82*Pe(.2,.92,o),_=0;for(let G of ve.branches){let H=Pe(G.g0,G.g1,o);if(G.mesh.visible=H>.001,!G.mesh.visible)continue;Ep(G,H,v);let O=G.start.y+G.len*H;O>_&&(_=O)}for(let G of ve.roots){let H=Pe(G.g0,G.g1,o);G.mesh.visible=H>.001,G.mesh.visible&&Ep(G,H)}{let G=Pe(.04,.34,o),H=Math.max(.03,v*1.06);ve.flare.scale.set(H,Math.max(5e-4,G),H),ve.flare.visible=G>.02}let y=Pe(0,3,t),R=1+.14*Pe(16,32,t),T=Pe(32,48,t),I=1-Pe(66,80,t);ve.seedMesh.visible=t<80&&I>.01,ve.seedMesh.position.y=.055+.1*(1-y),ve.seedMesh.scale.set(.35*R*I,.28*R*I,.46*R*I),ve.seedTop.position.set(.018*T,.055*T,.006*T),ve.seedTop.rotation.z=-.62*T,ve.seedTop.rotation.x=.22*T,ve.seedBottom.position.y=-.008*T,ve.seedCrack.visible=T>.01&&I>.02,ve.seedCrack.material.transparent=!0,ve.seedCrack.material.opacity=(1-I)*Math.min(1,T*2.2),ve.seedCrack.scale.setScalar(1+.12*T);let D=ve.branches[0],B=D?Pe(D.g0,D.g1,o):0,k=D?D.start.y+D.len*B:.2,j=Pe(.09,.145,o)*(1-Pe(.34,.5,o));for(let G of ve.cotyledons)G.scale.setScalar(Math.max(.001,.12*j)),G.position.y=Math.max(.08,k*.94),G.visible=j>.01;ve.cotyledonMat.color.setHex(10474334);let V=s<.05?Pe(0,.05,s):1,Z=Pe(.1,.34,s),X=0,K=ve.leaves;for(let G=0;G<ve.leafData.length;G++){let H=ve.leafData[G],O=H.branch?Pe(H.branch.g0,H.branch.g1,o):1,ne=H.branch?Pe(Math.max(.02,H.siteT-.06),H.siteT+.06,O):1,ce=Pe(H.grow,Math.min(1,H.grow+.1),o)*ne,ue=Pe(.58+H.stag*.08,.72+H.stag*.05,s),Y=H.size*ce*V*(1-ue);if(Y<.002){an.makeScale(1e-4,1e-4,1e-4),K.setMatrixAt(G,an);continue}let me=Math.sin(t*1.6+H.phase)*.06*ce;H.branch?(bp(H.branch.pts,Math.min(H.siteT,O),Sp),Jt.copy(Sp).add(H.offset)):Jt.copy(H.pos),Jt.x+=me,Jt.z+=Math.cos(t*1.3+H.phase)*.05*ce,Or.copy(H.quat),Ph.set(me*.8,me*.5,me*.6),Or.multiply(Gv.setFromEuler(Ph)),ki.setScalar(Y),an.compose(Jt,Or,ki),K.setMatrixAt(G,an);let Ce=Pe(.46+H.stag*.1,.62+H.stag*.1,s);Vi.setHex(5212717).lerp(_o.setHex(2841630),Z),Vi.lerp(H.autumn,Ce),X>.01&&Vi.lerp(h0.setHex(16767462),X*.75),Vi.multiplyScalar(H.tone),K.setColorAt(G,Vi)}K.instanceMatrix.needsUpdate=!0,K.instanceColor&&(K.instanceColor.needsUpdate=!0);let ee=Pe(.02,.07,s)*(1-Pe(.22,.3,s))*Pe(.7,.9,o);ve.blossoms.visible=ee>.02,ve.blossomMat.opacity=ee*.95;let oe=Pe(.78,.88,s)*(1-Pe(.96,1,s));ve.snowCaps.visible=oe>.02,ve.snowCapMat.opacity=oe;let ie=a>=2?Pe(.4,.52,s):0,be=Pe(.7,.8,s),Te=ie*(1-Pe(.7,.8,s));{let G=ve.fruitData,H=ve.fruits,O=ve.stems,ne=Or.set(0,0,0,1);for(let ce=0;ce<G.length;ce++){let ue=G[ce],Y=ue.size*ie*(1-Pe(.8,.86,s));if(Y<.002){H.setMatrixAt(ce,Br),O.setMatrixAt(ce,Br);continue}let me=Math.sin(t*1.5+ue.phase)*.02*ie;Jt.copy(ue.pos),Jt.x+=me,Jt.y-=be*(1.2+ue.stag*.9),an.compose(Jt,ue.quat,ki.setScalar(Y)),H.setMatrixAt(ce,an),Jt.y+=Y*.92,an.compose(Jt,ne,ki.set(1,1,1)),be<.35?O.setMatrixAt(ce,an):O.setMatrixAt(ce,Br)}H.instanceMatrix.needsUpdate=!0,O.instanceMatrix.needsUpdate=!0}let ae=Pe(.18,.34,o),he=o>.5&&s>.52&&s<.88?6+26*Pe(.52,.68,s)*(1-Pe(.74,.88,s)):0,ye=s>.88||s<.12?10*ae:0,Me=he+ye;if(Me>0&&Math.random()<Me*n){let G=Math.random()>he/Math.max(.001,Me),H=ve.leafData[Math.floor(Math.random()*ve.leafData.length)],O=G?_o.setHex(16763356):H.autumn;W0(O);let ne=Bs[(Ts+Yn-1)%Yn];ne.pos.copy(H.pos),ne.size=G?.12:.2}for(let G=0;G<Yn;G++){let H=Bs[G];if(!(H.life<=0)){if(H.pos.addScaledVector(H.vel,n),H.pos.x+=Math.sin(t*2+G)*.35*n,H.pos.z+=Math.cos(t*1.7+G)*.3*n,H.rot.addScaledVector(H.spin,n),H.pos.y<=.03){H.life=0,Kt.setMatrixAt(G,Br);continue}Or.setFromEuler(Ph.set(H.rot.x,H.rot.y,H.rot.z)),an.compose(H.pos,Or,ki.setScalar(H.size)),Kt.setMatrixAt(G,an)}}Kt.instanceMatrix.needsUpdate=!0,Vp.opacity=1;let pe=Pe(.76,.88,s)*(1-Pe(.98,1,s));zp.opacity=pe*.95,Uo.visible=pe>.01;let w=Pe(.72,.8,s),b=s>.985?Pe(.985,1,s):s<.02?1:0,N=Math.max(1e-4,Math.max(1-w,b));if(we.__grass.material.opacity=N,we.__grass.scale.set(1,1,1),kp.opacity=c*.82,No.visible=c>.01,No.visible){let G=Do.attributes.position.array;for(let H=0;H<ko;H++){let O=H*3;G[O+1]-=Hp[H]*n,G[O]+=1.2*n,G[O+1]<0&&(G[O+1]=8+Math.random()*3,G[O]=(Math.random()-.5)*24,G[O+2]=-9+Math.random()*9)}Do.attributes.position.needsUpdate=!0}if(Uo.visible){let G=Lo.attributes.position.array;for(let H=0;H<Vs;H++){let O=H*3;G[O+1]-=Fp[H]*n*.9,G[O]+=Math.sin(t*.9+Oh[H])*n*.5,G[O+2]+=Math.cos(t*.7+Oh[H])*n*.4,G[O+1]<0&&(G[O+1]=24+Math.random()*4,G[O]=(Math.random()-.5)*56,G[O+2]=(Math.random()-.5)*56)}Lo.attributes.position.needsUpdate=!0}let L=Pe(0,1,o);Os.rotation.z=Math.sin(t*.62)*(.012+.018*c)*L,Os.rotation.x=Math.cos(t*.48)*(.01+.012*c)*L,Rn?Xe.theta=1.43+Math.sin(t*.05)*.085:Ke&&i-Vo>6e3&&(Xe.theta+=Xe.dir*.035*n,Xe.theta>Fh&&(Xe.theta=Fh,Xe.dir=-1),Xe.theta<Bh&&(Xe.theta=Bh,Xe.dir=1));let A=Math.max(.01,Pt.aspect),P=A<1.45?Math.min(2.8,Math.pow(1.45/A,.82)):1,S=X0(t),C;if(S)Xe.target.y=S.targetY,C=S.viewH/(2*Math.tan(Pt.fov*Math.PI/360));else{let G=Math.max(.9,_+.52),H=-.62-3.6*Pe(0,.34,o);Xe.target.y=(G+H)/2,C=(G-H)*1/(2*Math.tan(Pt.fov*Math.PI/360))}Xe.target.x=.5*Pe(.15,.7,o);let F=Math.max(1.35,C)*(Xe.radius/12.5)*P,te=Math.sin(Xe.phi),z=Math.cos(Xe.phi);Pt.position.set(Xe.target.x+F*te*Math.cos(Xe.theta),Xe.target.y+F*z,Xe.target.z+F*te*Math.sin(Xe.theta)),Pt.lookAt(Xe.target);let $=Math.floor(s*4)%4;_n[$].name!==Rh&&(Rh=_n[$].name,mo.textContent=Rh,Th.textContent=_n[$].sub,mo.style.animation="none",mo.offsetWidth,mo.style.animation="seasonIn .7s ease both"),Y0.textContent="\u7B2C "+a+" \u5E74";let Q=$===2&&Te>.45?"\u679C\u5B9E\u719F\u4E86":_n[$].sub;Th.textContent!==Q&&(Th.textContent=Q);let se=(s%1+1)%1;if(cp&&(cp.style.transform="translate(-50%, -100%) rotate("+(se*360).toFixed(2)+"deg)"),hp&&(hp.textContent="\u7B2C "+a+" \u5E74"),Ah){let G=_n[$].name+" \xB7 \u7B2C "+a+" \u5E74";Ah.textContent!==G&&(Ah.textContent=G)}l0&&Math.floor(t*2)!==Math.floor((t-n)*2)&&console.log("[debug]","t="+t.toFixed(1),"p="+s.toFixed(3),"g="+o.toFixed(3),"ground=#"+l.ground.getHexString(),"snowA="+pe.toFixed(2),"grassY="+we.__grass.scale.y.toFixed(2)),Lh.copy(As.position).project(Pt),Xv.set(Lh.x*.5+.5,Lh.y*.5+.5),Pt.getWorldDirection(jv),Ut.render(we,Pt)}window.addEventListener("resize",()=>{let i=Jh();Pt.aspect=i.w/i.h,Pt.updateProjectionMatrix(),Ut.setSize(i.w,i.h)});document.getElementById("loading").style.display="none";window.matchMedia("(pointer: coarse)").matches&&(document.getElementById("tips").textContent="\u5355\u6307\u62D6\u52A8\u73AF\u987E \xB7 \u53CC\u6307\u7F29\u653E \xB7 \u7528\u5E95\u90E8\u8FDB\u5EA6\u6761\u63A7\u5236\u64AD\u653E");/(^|[?&])dbg(=|&|$)/.test(location.search)&&(window.__scene=we,window.__sky=jn,window.__camera=Pt,window.__renderer=Ut,window.__probe=(i,e)=>{let t=new xs;return t.setFromCamera(new le(i,e),Pt),t.intersectObjects(we.children,!0).slice(0,5).map(n=>({name:n.object.name||n.object.type,geo:n.object.geometry&&n.object.geometry.type,verts:n.object.geometry&&n.object.geometry.attributes.position?n.object.geometry.attributes.position.count:0,dist:+n.distance.toFixed(2),pt:[+n.point.x.toFixed(2),+n.point.y.toFixed(2),+n.point.z.toFixed(2)]}))});Xp&&Go({reset:!1,fullscreen:!1,autoplay:Zn===null});window.__classroom={enter:Go,exit:of,state:()=>({classroomMode:Xt,autoPauseAtChapter:pi,voiceOn:yn,projectorBright:zr,touchLocked:Kn,storyTime:Oe,playing:Ke,currentChapter:Jn}),pickPartAt:hf,partVisibleAt:hu,findState:()=>({findActive:kr,findTarget:An,findBag:ji.slice(),findBagIndex:ui,findRound:Fs}),findablePartsAt:cf,partScreenPoints:uu,handleCanvasTap:pf,startFindGame:df,stopFindGame:$n,seekForTest:i=>{zs=i,Oe=i,jt=i,Ke=!1,Qt(i),yt()}};ff();})();
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
