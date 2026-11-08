(()=>{var Jp=2;var h0=0,Au=1,Tn=2;var Kp=1,Qn=2;var Mr=100,u0=101,d0=102;var p0=200,f0=201,m0=202,g0=203,Yc=204,Zc=205,v0=206,_0=207,x0=208,y0=209,M0=210,S0=211,E0=212,b0=213,w0=214,T0=0,A0=1,R0=2,C0=3,P0=4,I0=5,L0=6,U0=7;var $p=4;var Qp=300,hs=301,us=302,Jc=303,Kc=304,pl=306,br=1e3,wr=1001,$c=1002,Yn=1003,D0=1004;var Ja=1005;var yi=1006,uc=1007;var as=1008;var Xi=1009,ef=1010,tf=1011,ea=1012,Ru=1013,Tr=1014,si=1015,pa=1016,Cu=1017,Pu=1018,ds=1020,nf=35902,rf=1021,sf=1022,ai=1023,af=1024,of=1025,ta=1026,ps=1027,Iu=1028,Lu=1029,lf=1030,Uu=1031;var Du=1033,Uo=33776,Do=33777,No=33778,Bo=33779,Qc=35840,eh=35841,th=35842,nh=35843,ih=36196,rh=37492,sh=37496,ah=37808,oh=37809,lh=37810,ch=37811,hh=37812,uh=37813,dh=37814,ph=37815,fh=37816,mh=37817,gh=37818,vh=37819,_h=37820,xh=37821,Oo=36492,yh=36494,Mh=36495,cf=36283,Sh=36284,Eh=36285,bh=36286;var zo=2300,wh=2301,dc=2302,Bd=2400,Od=2401,Fd=2402;var ss="",ut="srgb",Ss="srgb-linear",fl="linear",vt="srgb";var kr=7680;var N0=512,B0=513,O0=514,F0=515,z0=516,H0=517,k0=518,V0=519,Th=35044,Zi=35048;var zd="300 es",fs=2e3,Ho=2001,ji=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,e);e.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Fo=Math.PI/180,Ah=180/Math.PI;function Mi(){let i=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(ln[255&i]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[255&e]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[63&t|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[255&n]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function nn(i,e,t){return Math.max(e,Math.min(t,i))}function G0(i,e){return(i%e+e)%e}function pc(i,e,t){return(1-t)*i+t*e}function ri(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(4294967295*i);case Uint16Array:return Math.round(65535*i);case Uint8Array:return Math.round(255*i);case Int32Array:return Math.round(2147483647*i);case Int16Array:return Math.round(32767*i);case Int8Array:return Math.round(127*i);default:throw new Error("Invalid component type.")}}var oe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ze=class i{constructor(e,t,n,r,s,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],m=n[8],_=r[0],f=r[3],g=r[6],v=r[1],x=r[4],y=r[7],A=r[2],T=r[5],P=r[8];return s[0]=a*_+o*v+l*A,s[3]=a*f+o*x+l*T,s[6]=a*g+o*y+l*P,s[1]=c*_+h*v+d*A,s[4]=c*f+h*x+d*T,s[7]=c*g+h*y+d*P,s[2]=u*_+p*v+m*A,s[5]=u*f+p*x+m*T,s[8]=u*g+p*y+m*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*s,p=c*s-a*l,m=t*d+n*u+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=d*_,e[1]=(r*c-h*n)*_,e[2]=(o*n-r*a)*_,e[3]=u*_,e[4]=(h*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(fc.makeScale(e,t)),this}rotate(e){return this.premultiply(fc.makeRotation(-e)),this}translate(e,t){return this.premultiply(fc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},fc=new Ze;function hf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ko(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function W0(){let i=ko("canvas");return i.style.display="block",i}var Hd={};function Js(i){i in Hd||(Hd[i]=!0,console.warn(i))}var pt={enabled:!0,workingColorSpace:Ss,spaces:{},convert:function(i,e,t){return this.enabled!==!1&&e!==t&&e&&t&&(this.spaces[e].transfer===vt&&(i.r=Si(i.r),i.g=Si(i.g),i.b=Si(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===vt&&(i.r=ls(i.r),i.g=ls(i.g),i.b=ls(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ss?fl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Si(i){return i<.04045?.0773993808*i:Math.pow(.9478672986*i+.0521327014,2.4)}function ls(i){return i<.0031308?12.92*i:1.055*Math.pow(i,.41666)-.055}var kd=[.64,.33,.3,.6,.15,.06],Vd=[.2126,.7152,.0722],Gd=[.3127,.329],Wd=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xd=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715),Vr;pt.define({[Ss]:{primaries:kd,whitePoint:Gd,transfer:fl,toXYZ:Wd,fromXYZ:Xd,luminanceCoefficients:Vd,workingColorSpaceConfig:{unpackColorSpace:ut},outputColorSpaceConfig:{drawingBufferColorSpace:ut}},[ut]:{primaries:kd,whitePoint:Gd,transfer:vt,toXYZ:Wd,fromXYZ:Xd,luminanceCoefficients:Vd,outputColorSpaceConfig:{drawingBufferColorSpace:ut}}});var Rh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vr===void 0&&(Vr=ko("canvas")),Vr.width=e.width,Vr.height=e.height;let n=Vr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Vr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ko("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=255*Si(s[a]/255);return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*Si(t[n]/255)):t[n]=Si(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},X0=0,Vo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=Mi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(mc(r[a].image)):s.push(mc(r[a]))}else s=mc(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function mc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var j0=0,Mn=class i extends ji{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=1001,r=1001,s=1006,a=1008,o=1023,l=1009,c=i.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=Mi(),this.name="",this.source=new Vo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case br:e.x=e.x-Math.floor(e.x);break;case wr:e.x=e.x<0?0:1;break;case $c:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case br:e.y=e.y-Math.floor(e.y);break;case wr:e.y=e.y<0?0:1;break;case $c:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Mn.DEFAULT_IMAGE=null,Mn.DEFAULT_MAPPING=Qp,Mn.DEFAULT_ANISOTROPY=1;var Ct=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],m=l[9],_=l[2],f=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(m-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(m+f)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,y=(p+1)/2,A=(g+1)/2,T=(h+u)/4,P=(d+_)/4,U=(m+f)/4;return x>y&&x>A?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=T/n,s=P/n):y>A?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=T/r,s=U/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=P/s,r=U/s),this.set(n,r,s,t),this}let v=Math.sqrt((f-m)*(f-m)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(f-m)/v,this.y=(d-_)/v,this.z=(u-h)/v,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ch=class extends ji{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Mn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Vo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ei=class extends Ch{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Go=class extends Mn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ph=class extends Mn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],d=n[r+3],u=s[a+0],p=s[a+1],m=s[a+2],_=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=d);if(o===1)return e[t+0]=u,e[t+1]=p,e[t+2]=m,void(e[t+3]=_);if(d!==_||l!==u||c!==p||h!==m){let f=1-o,g=l*u+c*p+h*m+d*_,v=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){let A=Math.sqrt(x),T=Math.atan2(A,g*v);f=Math.sin(f*T)/A,o=Math.sin(o*T)/A}let y=o*v;if(l=l*f+u*y,c=c*f+p*y,h=h*f+m*y,d=d*f+_*y,f===1-o){let A=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=A,c*=A,h*=A,d*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],d=s[a],u=s[a+1],p=s[a+2],m=s[a+3];return e[t]=o*m+h*d+l*p-c*u,e[t+1]=l*m+h*u+c*d-o*p,e[t+2]=c*m+h*p+o*u-l*d,e[t+3]=h*m-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),d=o(s/2),u=l(n/2),p=l(r/2),m=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*p*m,this._y=c*p*d-u*h*m,this._z=c*h*m+u*p*d,this._w=c*h*d-u*p*m;break;case"YXZ":this._x=u*h*d+c*p*m,this._y=c*p*d-u*h*m,this._z=c*h*m-u*p*d,this._w=c*h*d+u*p*m;break;case"ZXY":this._x=u*h*d-c*p*m,this._y=c*p*d+u*h*m,this._z=c*h*m+u*p*d,this._w=c*h*d-u*p*m;break;case"ZYX":this._x=u*h*d-c*p*m,this._y=c*p*d+u*h*m,this._z=c*h*m-u*p*d,this._w=c*h*d+u*p*m;break;case"YZX":this._x=u*h*d+c*p*m,this._y=c*p*d+u*h*m,this._z=c*h*m-u*p*d,this._w=c*h*d-u*p*m;break;case"XZY":this._x=u*h*d-c*p*m,this._y=c*p*d-u*h*m,this._z=c*h*m+u*p*d,this._w=c*h*d+u*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=r*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),h=2*(o*t-s*r),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-s*d,this.z=r+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return gc.copy(this).projectOnVector(e),this.sub(gc)}reflect(e){return this.sub(gc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},gc=new M,jd=new Pt,Jn=class{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xn):Xn.fromBufferAttribute(s,a),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ka.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ka.copy(n.boundingBox)),Ka.applyMatrix4(e.matrixWorld),this.union(Ka)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fs),$a.subVectors(this.max,Fs),Gr.subVectors(e.a,Fs),Wr.subVectors(e.b,Fs),Xr.subVectors(e.c,Fs),Fi.subVectors(Wr,Gr),zi.subVectors(Xr,Wr),fr.subVectors(Gr,Xr);let t=[0,-Fi.z,Fi.y,0,-zi.z,zi.y,0,-fr.z,fr.y,Fi.z,0,-Fi.x,zi.z,0,-zi.x,fr.z,0,-fr.x,-Fi.y,Fi.x,0,-zi.y,zi.x,0,-fr.y,fr.x,0];return!!vc(t,Gr,Wr,Xr,$a)&&(t=[1,0,0,0,1,0,0,0,1],!!vc(t,Gr,Wr,Xr,$a)&&(Qa.crossVectors(Fi,zi),t=[Qa.x,Qa.y,Qa.z],vc(t,Gr,Wr,Xr,$a)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Xn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},pi=[new M,new M,new M,new M,new M,new M,new M,new M],Xn=new M,Ka=new Jn,Gr=new M,Wr=new M,Xr=new M,Fi=new M,zi=new M,fr=new M,Fs=new M,$a=new M,Qa=new M,mr=new M;function vc(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){mr.fromArray(i,s);let o=r.x*Math.abs(mr.x)+r.y*Math.abs(mr.y)+r.z*Math.abs(mr.z),l=e.dot(mr),c=t.dot(mr),h=n.dot(mr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var q0=new Jn,zs=new M,_c=new M,Kn=class{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):q0.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zs.subVectors(e,this.center);let t=zs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=.5*(n-this.radius);this.center.addScaledVector(zs,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zs.copy(e.center).add(_c)),this.expandByPoint(zs.copy(e.center).sub(_c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},fi=new M,xc=new M,eo=new M,Hi=new M,yc=new M,to=new M,Mc=new M,Ar=class{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){xc.copy(e).add(t).multiplyScalar(.5),eo.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(xc);let s=.5*e.distanceTo(t),a=-this.direction.dot(eo),o=Hi.dot(this.direction),l=-Hi.dot(eo),c=Hi.lengthSq(),h=Math.abs(1-a*a),d,u,p,m;if(h>0)if(d=a*l-o,u=a*o-l,m=s*h,d>=0)if(u>=-m)if(u<=m){let _=1/h;d*=_,u*=_,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(xc).addScaledVector(eo,u),p}intersectSphere(e,t){fi.subVectors(e.center,this.origin);let n=fi.dot(this.direction),r=fi.dot(fi)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||s>r?null:((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>r?null:((o>n||n!=n)&&(n=o),(l<r||r!=r)&&(r=l),r<0?null:this.at(n>=0?n:r,t)))}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,n,r,s){yc.subVectors(t,e),to.subVectors(n,e),Mc.crossVectors(yc,to);let a,o=this.direction.dot(Mc);if(o>0){if(r)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Hi.subVectors(this.origin,e);let l=a*this.direction.dot(to.crossVectors(Hi,to));if(l<0)return null;let c=a*this.direction.dot(yc.cross(Hi));if(c<0||l+c>o)return null;let h=-a*Hi.dot(Mc);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fe=class i{constructor(e,t,n,r,s,a,o,l,c,h,d,u,p,m,_,f){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,h,d,u,p,m,_,f)}set(e,t,n,r,s,a,o,l,c,h,d,u,p,m,_,f){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=p,g[7]=m,g[11]=_,g[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/jr.setFromMatrixColumn(e,0).length(),s=1/jr.setFromMatrixColumn(e,1).length(),a=1/jr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let u=a*h,p=a*d,m=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+m*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=m+p*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,p=l*d,m=c*h,_=c*d;t[0]=u+_*o,t[4]=m*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-m,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,p=l*d,m=c*h,_=c*d;t[0]=u-_*o,t[4]=-a*d,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,p=a*d,m=o*h,_=o*d;t[0]=l*h,t[4]=m*c-p,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=p*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,p=a*c,m=o*l,_=o*c;t[0]=l*h,t[4]=_-u*d,t[8]=m*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+m,t[10]=u-_*d}else if(e.order==="XZY"){let u=a*l,p=a*c,m=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=a*h,t[9]=p*d-m,t[2]=m*d-p,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Y0,e,Z0)}lookAt(e,t,n){let r=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),ki.crossVectors(n,bn),ki.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),ki.crossVectors(n,bn)),ki.normalize(),no.crossVectors(bn,ki),r[0]=ki.x,r[4]=no.x,r[8]=bn.x,r[1]=ki.y,r[5]=no.y,r[9]=bn.y,r[2]=ki.z,r[6]=no.z,r[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],m=n[2],_=n[6],f=n[10],g=n[14],v=n[3],x=n[7],y=n[11],A=n[15],T=r[0],P=r[4],U=r[8],B=r[12],V=r[1],j=r[5],G=r[9],J=r[13],z=r[2],X=r[6],Z=r[10],se=r[14],te=r[3],me=r[7],Se=r[11],ie=r[15];return s[0]=a*T+o*V+l*z+c*te,s[4]=a*P+o*j+l*X+c*me,s[8]=a*U+o*G+l*Z+c*Se,s[12]=a*B+o*J+l*se+c*ie,s[1]=h*T+d*V+u*z+p*te,s[5]=h*P+d*j+u*X+p*me,s[9]=h*U+d*G+u*Z+p*Se,s[13]=h*B+d*J+u*se+p*ie,s[2]=m*T+_*V+f*z+g*te,s[6]=m*P+_*j+f*X+g*me,s[10]=m*U+_*G+f*Z+g*Se,s[14]=m*B+_*J+f*se+g*ie,s[3]=v*T+x*V+y*z+A*te,s[7]=v*P+x*j+y*X+A*me,s[11]=v*U+x*G+y*Z+A*Se,s[15]=v*B+x*J+y*se+A*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14];return e[3]*(+s*l*d-r*c*d-s*o*u+n*c*u+r*o*p-n*l*p)+e[7]*(+t*l*p-t*c*u+s*a*u-r*a*p+r*c*h-s*l*h)+e[11]*(+t*c*d-t*o*p-s*a*d+n*a*p+s*o*h-n*c*h)+e[15]*(-r*o*h-t*l*d+t*o*u+r*a*d-n*a*u+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],m=e[12],_=e[13],f=e[14],g=e[15],v=d*f*c-_*u*c+_*l*p-o*f*p-d*l*g+o*u*g,x=m*u*c-h*f*c-m*l*p+a*f*p+h*l*g-a*u*g,y=h*_*c-m*d*c+m*o*p-a*_*p-h*o*g+a*d*g,A=m*d*l-h*_*l-m*o*u+a*_*u+h*o*f-a*d*f,T=t*v+n*x+r*y+s*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/T;return e[0]=v*P,e[1]=(_*u*s-d*f*s-_*r*p+n*f*p+d*r*g-n*u*g)*P,e[2]=(o*f*s-_*l*s+_*r*c-n*f*c-o*r*g+n*l*g)*P,e[3]=(d*l*s-o*u*s-d*r*c+n*u*c+o*r*p-n*l*p)*P,e[4]=x*P,e[5]=(h*f*s-m*u*s+m*r*p-t*f*p-h*r*g+t*u*g)*P,e[6]=(m*l*s-a*f*s-m*r*c+t*f*c+a*r*g-t*l*g)*P,e[7]=(a*u*s-h*l*s+h*r*c-t*u*c-a*r*p+t*l*p)*P,e[8]=y*P,e[9]=(m*d*s-h*_*s-m*n*p+t*_*p+h*n*g-t*d*g)*P,e[10]=(a*_*s-m*o*s+m*n*c-t*_*c-a*n*g+t*o*g)*P,e[11]=(h*o*s-a*d*s-h*n*c+t*d*c+a*n*p-t*o*p)*P,e[12]=A*P,e[13]=(h*_*r-m*d*r+m*n*u-t*_*u-h*n*f+t*d*f)*P,e[14]=(m*o*r-a*_*r-m*n*l+t*_*l+a*n*f-t*o*f)*P,e[15]=(a*d*r-h*o*r+h*n*l-t*d*l-a*n*u+t*o*u)*P,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,u=s*c,p=s*h,m=s*d,_=a*h,f=a*d,g=o*d,v=l*c,x=l*h,y=l*d,A=n.x,T=n.y,P=n.z;return r[0]=(1-(_+g))*A,r[1]=(p+y)*A,r[2]=(m-x)*A,r[3]=0,r[4]=(p-y)*T,r[5]=(1-(u+g))*T,r[6]=(f+v)*T,r[7]=0,r[8]=(m+x)*P,r[9]=(f-v)*P,r[10]=(1-(u+_))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=jr.set(r[0],r[1],r[2]).length(),a=jr.set(r[4],r[5],r[6]).length(),o=jr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],jn.copy(this);let l=1/s,c=1/a,h=1/o;return jn.elements[0]*=l,jn.elements[1]*=l,jn.elements[2]*=l,jn.elements[4]*=c,jn.elements[5]*=c,jn.elements[6]*=c,jn.elements[8]*=h,jn.elements[9]*=h,jn.elements[10]*=h,t.setFromRotationMatrix(jn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),u=(n+r)/(n-r),p,m;if(o===fs)p=-(a+s)/(a-s),m=-2*a*s/(a-s);else{if(o!==Ho)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),m=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(n-r),d=1/(a-s),u=(t+e)*c,p=(n+r)*h,m,_;if(o===fs)m=(a+s)*d,_=-2*d;else{if(o!==Ho)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);m=s*d,_=-1*d}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},jr=new M,jn=new Fe,Y0=new M(0,0,0),Z0=new M(1,1,1),ki=new M,no=new M,bn=new M,qd=new Fe,Yd=new Pt,Wt=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],d=r[2],u=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(nn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yd.setFromEuler(this),this.setFromQuaternion(Yd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wt.DEFAULT_ORDER="XYZ";var na=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return!!(this.mask&e.mask)}isEnabled(e){return!!(this.mask&1<<e)}},J0=0,Zd=new M,qr=new Pt,mi=new Fe,io=new M,Hs=new M,K0=new M,$0=new Pt,Jd=new M(1,0,0),Kd=new M(0,1,0),$d=new M(0,0,1),Qd={type:"added"},Q0={type:"removed"},Yr={type:"childadded",child:null},Sc={type:"childremoved",child:null},$t=class i extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new M,t=new Wt,n=new Pt,r=new M(1,1,1);t._onChange((function(){n.setFromEuler(t,!1)})),n._onChange((function(){t.setFromQuaternion(n,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Fe},normalMatrix:{value:new Ze}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qr.setFromAxisAngle(e,t),this.quaternion.multiply(qr),this}rotateOnWorldAxis(e,t){return qr.setFromAxisAngle(e,t),this.quaternion.premultiply(qr),this}rotateX(e){return this.rotateOnAxis(Jd,e)}rotateY(e){return this.rotateOnAxis(Kd,e)}rotateZ(e){return this.rotateOnAxis($d,e)}translateOnAxis(e,t){return Zd.copy(e).applyQuaternion(this.quaternion),this.position.add(Zd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jd,e)}translateY(e){return this.translateOnAxis(Kd,e)}translateZ(e){return this.translateOnAxis($d,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?io.copy(e):io.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Hs,io,this.up):mi.lookAt(io,Hs,this.up),this.quaternion.setFromRotationMatrix(mi),r&&(mi.extractRotation(r.matrixWorld),qr.setFromRotationMatrix(mi),this.quaternion.premultiply(qr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qd),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Q0),Sc.child=e,this.dispatchEvent(Sc),Sc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qd),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,e,K0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,$0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map((o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()}))),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=r,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};$t.DEFAULT_UP=new M(0,1,0),$t.DEFAULT_MATRIX_AUTO_UPDATE=!0,$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var qn=new M,gi=new M,Ec=new M,vi=new M,Zr=new M,Jr=new M,ep=new M,bc=new M,wc=new M,Tc=new M,Ac=new Ct,Rc=new Ct,Cc=new Ct,xi=class i{constructor(e=new M,t=new M,n=new M){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),qn.subVectors(e,t),r.cross(qn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){qn.subVectors(r,t),gi.subVectors(n,t),Ec.subVectors(e,t);let a=qn.dot(qn),o=qn.dot(gi),l=qn.dot(Ec),c=gi.dot(gi),h=gi.dot(Ec),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;let u=1/d,p=(c*l-o*h)*u,m=(a*h-o*l)*u;return s.set(1-p-m,m,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,vi)!==null&&vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vi.x),l.addScaledVector(a,vi.y),l.addScaledVector(o,vi.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return Ac.setScalar(0),Rc.setScalar(0),Cc.setScalar(0),Ac.fromBufferAttribute(e,t),Rc.fromBufferAttribute(e,n),Cc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ac,s.x),a.addScaledVector(Rc,s.y),a.addScaledVector(Cc,s.z),a}static isFrontFacing(e,t,n,r){return qn.subVectors(n,t),gi.subVectors(e,t),qn.cross(gi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),.5*qn.cross(gi).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;Zr.subVectors(r,n),Jr.subVectors(s,n),bc.subVectors(e,n);let l=Zr.dot(bc),c=Jr.dot(bc);if(l<=0&&c<=0)return t.copy(n);wc.subVectors(e,r);let h=Zr.dot(wc),d=Jr.dot(wc);if(h>=0&&d<=h)return t.copy(r);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Zr,a);Tc.subVectors(e,s);let p=Zr.dot(Tc),m=Jr.dot(Tc);if(m>=0&&p<=m)return t.copy(s);let _=p*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Jr,o);let f=h*m-p*d;if(f<=0&&d-h>=0&&p-m>=0)return ep.subVectors(s,r),o=(d-h)/(d-h+(p-m)),t.copy(r).addScaledVector(ep,o);let g=1/(f+_+u);return a=_*g,o=u*g,t.copy(n).addScaledVector(Zr,a).addScaledVector(Jr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},uf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},ro={h:0,s:0,l:0};function Pc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+6*(e-i)*t:t<.5?e:t<2/3?i+6*(e-i)*(2/3-t):i}var xe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=pt.workingColorSpace){if(e=G0(e,1),t=nn(t,0,1),n=nn(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Pc(a,s,e+1/3),this.g=Pc(a,s,e),this.b=Pc(a,s,e-1/3)}return pt.toWorkingColorSpace(this,r),this}setStyle(e,t=ut){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ut){let n=uf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ut){return pt.fromWorkingColorSpace(cn.copy(this),e),65536*Math.round(nn(255*cn.r,0,255))+256*Math.round(nn(255*cn.g,0,255))+Math.round(nn(255*cn.b,0,255))}getHexString(e=ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(cn.copy(this),t);let n=cn.r,r=cn.g,s=cn.b,a=Math.max(n,r,s),o=Math.min(n,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=ut){pt.fromWorkingColorSpace(cn.copy(this),e);let t=cn.r,n=cn.g,r=cn.b;return e!==ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*r)})`}offsetHSL(e,t,n){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL(ro);let n=pc(Vi.h,ro.h,t),r=pc(Vi.s,ro.s,t),s=pc(Vi.l,ro.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new xe;xe.NAMES=uf;var eg=0,oi=class extends ji{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=Mi(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yc,this.blendDst=Zc,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kr,this.stencilZFail=kr,this.stencilZPass=kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Yc&&(n.blendSrc=this.blendSrc),this.blendDst!==Zc&&(n.blendDst=this.blendDst),this.blendEquation!==Mr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==kr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==kr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},yn=class extends oi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ay=tg();function tg(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[256|l]=32768,r[l]=24,r[256|l]=24):c<-14?(n[l]=1024>>-c-14,n[256|l]=1024>>-c-14|32768,r[l]=-c-1,r[256|l]=-c-1):c<=15?(n[l]=c+15<<10,n[256|l]=c+15<<10|32768,r[l]=13,r[256|l]=13):c<128?(n[l]=31744,n[256|l]=64512,r[l]=24,r[256|l]=24):(n[l]=31744,n[256|l]=64512,r[l]=13,r[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}var Ht=new M,so=new oe,Ut=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Th,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)so.fromBufferAttribute(this,t),so.applyMatrix3(e),this.setXY(t,so.x,so.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),r=_t(r,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Th&&(e.usage=this.usage),e}};var Wo=class extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Xo=class extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ue=class extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}},ng=0,Ln=new Fe,Ic=new $t,Kr=new M,wn=new Jn,ks=new Jn,Kt=new M,tt=class i extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hf(e)?Xo:Wo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,n){return Ln.makeTranslation(e,t,n),this.applyMatrix4(Ln),this}scale(e,t,n){return Ln.makeScale(e,t,n),this.applyMatrix4(Ln),this}lookAt(e){return Ic.lookAt(e),Ic.updateMatrix(),this.applyMatrix4(Ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ue(n,3))}else{for(let n=0,r=t.count;n<r;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new M,1/0);if(e){let n=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];ks.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(wn.min,ks.min),wn.expandByPoint(Kt),Kt.addVectors(wn.max,ks.max),wn.expandByPoint(Kt)):(wn.expandByPoint(ks.min),wn.expandByPoint(ks.max))}wn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Kt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Kt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Kt.fromBufferAttribute(o,c),l&&(Kr.fromBufferAttribute(e,c),Kt.add(Kr)),r=Math.max(r,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new M,l[U]=new M;let c=new M,h=new M,d=new M,u=new oe,p=new oe,m=new oe,_=new M,f=new M;function g(U,B,V){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,B),d.fromBufferAttribute(n,V),u.fromBufferAttribute(s,U),p.fromBufferAttribute(s,B),m.fromBufferAttribute(s,V),h.sub(c),d.sub(c),p.sub(u),m.sub(u);let j=1/(p.x*m.y-m.x*p.y);isFinite(j)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(j),f.copy(d).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(j),o[U].add(_),o[B].add(_),o[V].add(_),l[U].add(f),l[B].add(f),l[V].add(f))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let U=0,B=v.length;U<B;++U){let V=v[U],j=V.start;for(let G=j,J=j+V.count;G<J;G+=3)g(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let x=new M,y=new M,A=new M,T=new M;function P(U){A.fromBufferAttribute(r,U),T.copy(A);let B=o[U];x.copy(B),x.sub(A.multiplyScalar(A.dot(B))).normalize(),y.crossVectors(T,B);let V=y.dot(l[U])<0?-1:1;a.setXYZW(U,x.x,x.y,x.z,V)}for(let U=0,B=v.length;U<B;++U){let V=v[U],j=V.start;for(let G=j,J=j+V.count;G<J;G+=3)P(e.getX(G+0)),P(e.getX(G+1)),P(e.getX(G+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let r=new M,s=new M,a=new M,o=new M,l=new M,c=new M,h=new M,d=new M;if(e)for(let u=0,p=e.count;u<p;u+=3){let m=e.getX(u+0),_=e.getX(u+1),f=e.getX(u+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,f),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),p=0,m=0;for(let _=0,f=l.length;_<f;_++){p=o.isInterleavedBufferAttribute?l[_]*o.data.stride+o.offset:l[_]*h;for(let g=0;g<h;g++)u[m++]=c[p++]}return new Ut(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let l=e(r[o],n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){let u=e(c[h],n);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},tp=new Fe,gr=new Ar,ao=new Kn,np=new M,oo=new M,lo=new M,co=new M,Lc=new M,ho=new M,ip=new M,uo=new M,$e=class extends $t{constructor(e=new tt,t=new yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){ho.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],d=s[l];h!==0&&(Lc.fromBufferAttribute(d,e),a?ho.addScaledVector(Lc,h):ho.addScaledVector(Lc.sub(t),h))}t.add(ho)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;if(r!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(s),gr.copy(e.ray).recast(e.near),ao.containsPoint(gr.origin)===!1&&(gr.intersectSphere(ao,np)===null||gr.origin.distanceToSquared(np)>(e.far-e.near)**2))return;tp.copy(s).invert(),gr.copy(e.ray).applyMatrix4(tp),n.boundingBox!==null&&gr.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,gr)}}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=u.length;m<_;m++){let f=u[m],g=a[f.materialIndex];for(let v=Math.max(f.start,p.start),x=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));v<x;v+=3)r=po(this,g,e,n,c,h,d,o.getX(v),o.getX(v+1),o.getX(v+2)),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=f.materialIndex,t.push(r))}else for(let m=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);m<_;m+=3)r=po(this,a,e,n,c,h,d,o.getX(m),o.getX(m+1),o.getX(m+2)),r&&(r.faceIndex=Math.floor(m/3),t.push(r));else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=u.length;m<_;m++){let f=u[m],g=a[f.materialIndex];for(let v=Math.max(f.start,p.start),x=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));v<x;v+=3)r=po(this,g,e,n,c,h,d,v,v+1,v+2),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=f.materialIndex,t.push(r))}else for(let m=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);m<_;m+=3)r=po(this,a,e,n,c,h,d,m,m+1,m+2),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}};function po(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,oo),i.getVertexPosition(l,lo),i.getVertexPosition(c,co);let h=(function(d,u,p,m,_,f,g,v){let x;if(x=u.side===1?m.intersectTriangle(g,f,_,!0,v):m.intersectTriangle(_,f,g,u.side===0,v),x===null)return null;uo.copy(v),uo.applyMatrix4(d.matrixWorld);let y=p.ray.origin.distanceTo(uo);return y<p.near||y>p.far?null:{distance:y,point:uo.clone(),object:d}})(i,e,t,n,oo,lo,co,ip);if(h){let d=new M;xi.getBarycoord(ip,oo,lo,co,d),r&&(h.uv=xi.getInterpolatedAttribute(r,o,l,c,d,new oe)),s&&(h.uv1=xi.getInterpolatedAttribute(s,o,l,c,d,new oe)),a&&(h.normal=xi.getInterpolatedAttribute(a,o,l,c,d,new M),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new M,materialIndex:0};xi.getNormal(oo,lo,co,u.normal),h.face=u,h.barycoord=d}return h}var ms=class i extends tt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,p=0;function m(_,f,g,v,x,y,A,T,P,U,B){let V=y/P,j=A/U,G=y/2,J=A/2,z=T/2,X=P+1,Z=U+1,se=0,te=0,me=new M;for(let Se=0;Se<Z;Se++){let ie=Se*j-J;for(let le=0;le<X;le++){let we=le*V-G;me[_]=we*v,me[f]=ie*x,me[g]=z,c.push(me.x,me.y,me.z),me[_]=0,me[f]=0,me[g]=T>0?1:-1,h.push(me.x,me.y,me.z),d.push(le/P),d.push(1-Se/U),se+=1}}for(let Se=0;Se<U;Se++)for(let ie=0;ie<P;ie++){let le=u+ie+X*Se,we=u+ie+X*(Se+1),Te=u+(ie+1)+X*(Se+1),fe=u+(ie+1)+X*Se;l.push(le,we,fe),l.push(we,Te,fe),te+=6}o.addGroup(p,te,B),p+=te,u+=se}m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,r,a,2),m("x","z","y",1,-1,e,n,-t,r,a,3),m("x","y","z",1,-1,e,t,n,r,s,4),m("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ue(c,3)),this.setAttribute("normal",new Ue(h,3)),this.setAttribute("uv",new Ue(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function gs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function _n(i){let e={};for(let t=0;t<i.length;t++){let n=gs(i[t]);for(let r in n)e[r]=n[r]}return e}function df(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}var ig={clone:gs,merge:_n},Sn=class extends oi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gs(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let r=0;r<t.length;r++)n.push(t[r].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ia=class extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=fs}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Gi=new M,rp=new oe,sp=new oe,xn=class extends ia{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Ah*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Fo*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Ah*Math.atan(Math.tan(.5*Fo*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,t){return this.getViewBounds(e,rp,sp),t.subVectors(sp,rp)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Fo*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},$r=-90,Ih=class extends $t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new xn($r,1,e,t);r.layers=this.layers,this.add(r);let s=new xn($r,1,e,t);s.layers=this.layers,this.add(s);let a=new xn($r,1,e,t);a.layers=this.layers,this.add(a);let o=new xn($r,1,e,t);o.layers=this.layers,this.add(o);let l=new xn($r,1,e,t);l.layers=this.layers,this.add(l);let c=new xn($r,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===fs)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==Ho)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},jo=class extends Mn{constructor(e,t,n,r,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:hs,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Lh=class extends Ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new jo(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ms(5,5,5),s=new Sn({name:"CubemapFromEquirect",uniforms:gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let a=new $e(r,s),o=t.minFilter;return t.minFilter===as&&(t.minFilter=yi),new Ih(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}},Uc=new M,rg=new M,sg=new Ze,_i=class{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Uc.subVectors(n,t).cross(rg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Uc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||sg.getNormalMatrix(e),r=this.coplanarPoint(Uc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},vr=new Kn,fo=new M,vs=class{constructor(e=new _i,t=new _i,n=new _i,r=new _i,s=new _i,a=new _i){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],d=r[6],u=r[7],p=r[8],m=r[9],_=r[10],f=r[11],g=r[12],v=r[13],x=r[14],y=r[15];if(n[0].setComponents(l-s,u-c,f-p,y-g).normalize(),n[1].setComponents(l+s,u+c,f+p,y+g).normalize(),n[2].setComponents(l+a,u+h,f+m,y+v).normalize(),n[3].setComponents(l-a,u-h,f-m,y-v).normalize(),n[4].setComponents(l-o,u-d,f-_,y-x).normalize(),t===fs)n[5].setComponents(l+o,u+d,f+_,y+x).normalize();else{if(t!==Ho)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,d,_,x).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){return vr.center.set(0,0,0),vr.radius=.7071067811865476,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(fo.x=r.normal.x>0?e.max.x:e.min.x,fo.y=r.normal.y>0?e.max.y:e.min.y,fo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function pf(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function ag(i){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(i.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let r=e.get(t);if(r===void 0)e.set(t,(function(s,a){let o=s.array,l=s.usage,c=o.byteLength,h=i.createBuffer(),d;if(i.bindBuffer(a,h),i.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)d=i.FLOAT;else if(o instanceof Uint16Array)d=s.isFloat16BufferAttribute?i.HALF_FLOAT:i.UNSIGNED_SHORT;else if(o instanceof Int16Array)d=i.SHORT;else if(o instanceof Uint32Array)d=i.UNSIGNED_INT;else if(o instanceof Int32Array)d=i.INT;else if(o instanceof Int8Array)d=i.BYTE;else if(o instanceof Uint8Array)d=i.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);d=i.UNSIGNED_BYTE}return{buffer:h,type:d,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}})(t,n));else if(r.version<t.version){if(r.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let l=a.array,c=a.updateRanges;if(i.bindBuffer(o,s),c.length===0)i.bufferSubData(o,0,l);else{c.sort(((d,u)=>d.start-u.start));let h=0;for(let d=1;d<c.length;d++){let u=c[h],p=c[d];p.start<=u.start+u.count+1?u.count=Math.max(u.count,p.start+p.count-u.start):(++h,c[h]=p)}c.length=h+1;for(let d=0,u=c.length;d<u;d++){let p=c[d];i.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(r.buffer,t,n),r.version=t.version}}}}var Xt=class i extends tt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,d=e/o,u=t/l,p=[],m=[],_=[],f=[];for(let g=0;g<h;g++){let v=g*u-a;for(let x=0;x<c;x++){let y=x*d-s;m.push(y,-v,0),_.push(0,0,1),f.push(x/o),f.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){let x=v+c*g,y=v+c*(g+1),A=v+1+c*(g+1),T=v+1+c*g;p.push(x,y,T),p.push(y,A,T)}this.setIndex(p),this.setAttribute("position",new Ue(m,3)),this.setAttribute("normal",new Ue(_,3)),this.setAttribute("uv",new Ue(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ke={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},ve={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},ii={basic:{uniforms:_n([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:_n([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new xe(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:_n([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:_n([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:_n([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new xe(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:_n([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:_n([ve.points,ve.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:_n([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:_n([ve.common,ve.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:_n([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:_n([ve.sprite,ve.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:_n([ve.common,ve.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:_n([ve.lights,ve.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};ii.physical={uniforms:_n([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var mo={r:0,b:0,g:0},_r=new Wt,og=new Fe;function lg(i,e,t,n,r,s,a){let o=new xe(0),l,c,h=s===!0?0:1,d=null,u=0,p=null;function m(f){let g=f.isScene===!0?f.background:null;return g&&g.isTexture&&(g=(f.backgroundBlurriness>0?t:e).get(g)),g}function _(f,g){f.getRGB(mo,df(i)),n.buffers.color.setClear(mo.r,mo.g,mo.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(f,g=1){o.set(f),h=g,_(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(f){h=f,_(o,h)},render:function(f){let g=!1,v=m(f);v===null?_(o,h):v&&v.isColor&&(_(v,1),g=!0);let x=i.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,a):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||g)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))},addToRenderList:function(f,g){let v=m(g);v&&(v.isCubeTexture||v.mapping===pl)?(c===void 0&&(c=new $e(new ms(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:gs(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,y,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),_r.copy(g.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(og.makeRotationFromEuler(_r)),c.material.toneMapped=pt.getTransfer(v.colorSpace)!==vt,d===v&&u===v.version&&p===i.toneMapping||(c.material.needsUpdate=!0,d=v,u=v.version,p=i.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new $e(new Xt(2,2),new Sn({name:"BackgroundMaterial",uniforms:gs(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=pt.getTransfer(v.colorSpace)!==vt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),d===v&&u===v.version&&p===i.toneMapping||(l.material.needsUpdate=!0,d=v,u=v.version,p=i.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}}}function cg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=c(null),s=r,a=!1;function o(g){return i.bindVertexArray(g)}function l(g){return i.deleteVertexArray(g)}function c(g){let v=[],x=[],y=[];for(let A=0;A<t;A++)v[A]=0,x[A]=0,y[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:x,attributeDivisors:y,object:g,attributes:{},index:null}}function h(){let g=s.newAttributes;for(let v=0,x=g.length;v<x;v++)g[v]=0}function d(g){u(g,0)}function u(g,v){let x=s.newAttributes,y=s.enabledAttributes,A=s.attributeDivisors;x[g]=1,y[g]===0&&(i.enableVertexAttribArray(g),y[g]=1),A[g]!==v&&(i.vertexAttribDivisor(g,v),A[g]=v)}function p(){let g=s.newAttributes,v=s.enabledAttributes;for(let x=0,y=v.length;x<y;x++)v[x]!==g[x]&&(i.disableVertexAttribArray(x),v[x]=0)}function m(g,v,x,y,A,T,P){P===!0?i.vertexAttribIPointer(g,v,x,A,T):i.vertexAttribPointer(g,v,x,y,A,T)}function _(){f(),a=!0,s!==r&&(s=r,o(s.object))}function f(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:function(g,v,x,y,A){let T=!1,P=(function(U,B,V){let j=V.wireframe===!0,G=n[U.id];G===void 0&&(G={},n[U.id]=G);let J=G[B.id];J===void 0&&(J={},G[B.id]=J);let z=J[j];return z===void 0&&(z=c(i.createVertexArray()),J[j]=z),z})(y,x,v);s!==P&&(s=P,o(s.object)),T=(function(U,B,V,j){let G=s.attributes,J=B.attributes,z=0,X=V.getAttributes();for(let Z in X)if(X[Z].location>=0){let se=G[Z],te=J[Z];if(te===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(te=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(te=U.instanceColor)),se===void 0||se.attribute!==te||te&&se.data!==te.data)return!0;z++}return s.attributesNum!==z||s.index!==j})(g,y,x,A),T&&(function(U,B,V,j){let G={},J=B.attributes,z=0,X=V.getAttributes();for(let Z in X)if(X[Z].location>=0){let se=J[Z];se===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(se=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(se=U.instanceColor));let te={};te.attribute=se,se&&se.data&&(te.data=se.data),G[Z]=te,z++}s.attributes=G,s.attributesNum=z,s.index=j})(g,y,x,A),A!==null&&e.update(A,i.ELEMENT_ARRAY_BUFFER),(T||a)&&(a=!1,(function(U,B,V,j){h();let G=j.attributes,J=V.getAttributes(),z=B.defaultAttributeValues;for(let X in J){let Z=J[X];if(Z.location>=0){let se=G[X];if(se===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(se=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(se=U.instanceColor)),se!==void 0){let te=se.normalized,me=se.itemSize,Se=e.get(se);if(Se===void 0)continue;let ie=Se.buffer,le=Se.type,we=Se.bytesPerElement,Te=le===i.INT||le===i.UNSIGNED_INT||se.gpuType===Ru;if(se.isInterleavedBufferAttribute){let fe=se.data,w=fe.stride,b=se.offset;if(fe.isInstancedInterleavedBuffer){for(let L=0;L<Z.locationSize;L++)u(Z.location+L,fe.meshPerAttribute);U.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let L=0;L<Z.locationSize;L++)d(Z.location+L);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let L=0;L<Z.locationSize;L++)m(Z.location+L,me/Z.locationSize,le,te,w*we,(b+me/Z.locationSize*L)*we,Te)}else{if(se.isInstancedBufferAttribute){for(let fe=0;fe<Z.locationSize;fe++)u(Z.location+fe,se.meshPerAttribute);U.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let fe=0;fe<Z.locationSize;fe++)d(Z.location+fe);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let fe=0;fe<Z.locationSize;fe++)m(Z.location+fe,me/Z.locationSize,le,te,me*we,me/Z.locationSize*fe*we,Te)}}else if(z!==void 0){let te=z[X];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(Z.location,te);break;case 3:i.vertexAttrib3fv(Z.location,te);break;case 4:i.vertexAttrib4fv(Z.location,te);break;default:i.vertexAttrib1fv(Z.location,te)}}}}p()})(g,v,x,y),A!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(A).buffer))},reset:_,resetDefaultState:f,dispose:function(){_();for(let g in n){let v=n[g];for(let x in v){let y=v[x];for(let A in y)l(y[A].object),delete y[A];delete v[x]}delete n[g]}},releaseStatesOfGeometry:function(g){if(n[g.id]===void 0)return;let v=n[g.id];for(let x in v){let y=v[x];for(let A in y)l(y[A].object),delete y[A];delete v[x]}delete n[g.id]},releaseStatesOfProgram:function(g){for(let v in n){let x=n[v];if(x[g.id]===void 0)continue;let y=x[g.id];for(let A in y)l(y[A].object),delete y[A];delete x[g.id]}},initAttributes:h,enableAttribute:d,disableUnusedAttributes:p}}function hg(i,e,t){let n;function r(s,a,o){o!==0&&(i.drawArraysInstanced(n,s,a,o),t.update(a,n,o))}this.setMode=function(s){n=s},this.render=function(s,a){i.drawArrays(n,s,a),t.update(a,n,1)},this.renderInstances=r,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,s,0,a,0,o);let l=0;for(let c=0;c<o;c++)l+=a[c];t.update(l,n,1)},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<s.length;h++)r(s[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(n,s,0,a,0,l,0,o);let h=0;for(let d=0;d<o;d++)h+=a[d]*l[d];t.update(h,n,1)}}}function ug(i,e,t,n){let r;function s(u){if(u==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";u="mediump"}return u==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=t.logarithmicDepthBuffer===!0,c=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let u=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(u.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:s,textureFormatReadable:function(u){return u===ai||n.convert(u)===i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(u){let p=u===pa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(u!==Xi&&n.convert(u)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&u!==si&&!p)},precision:a,logarithmicDepthBuffer:l,reverseDepthBuffer:c,maxTextures:h,maxVertexTextures:d,maxTextureSize:i.getParameter(i.MAX_TEXTURE_SIZE),maxCubemapSize:i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:i.getParameter(i.MAX_VERTEX_ATTRIBS),maxVertexUniforms:i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:i.getParameter(i.MAX_VARYING_VECTORS),maxFragmentUniforms:i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:d>0,maxSamples:i.getParameter(i.MAX_SAMPLES)}}function dg(i){let e=this,t=null,n=0,r=!1,s=!1,a=new _i,o=new Ze,l={value:null,needsUpdate:!1};function c(h,d,u,p){let m=h!==null?h.length:0,_=null;if(m!==0){if(_=l.value,p!==!0||_===null){let f=u+4*m,g=d.matrixWorldInverse;o.getNormalMatrix(g),(_===null||_.length<f)&&(_=new Float32Array(f));for(let v=0,x=u;v!==m;++v,x+=4)a.copy(h[v]).applyMatrix4(g,o),a.normal.toArray(_,x),_[x+3]=a.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,_}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let u=h.length!==0||d||n!==0||r;return r=d,n=h.length,u},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=c(h,d,0)},this.setState=function(h,d,u){let p=h.clippingPlanes,m=h.clipIntersection,_=h.clipShadows,f=i.get(h);if(!r||p===null||p.length===0||s&&!_)s?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let g=s?0:n,v=4*g,x=f.clippingState||null;l.value=x,x=c(p,d,v,u);for(let y=0;y!==v;++y)x[y]=t[y];f.clippingState=x,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=g}}}function pg(i){let e=new WeakMap;function t(r,s){return s===Jc?r.mapping=hs:s===Kc&&(r.mapping=us),r}function n(r){let s=r.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping;if(s===Jc||s===Kc){if(e.has(r))return t(e.get(r).texture,r.mapping);{let a=r.image;if(a&&a.height>0){let o=new Lh(a.height);return o.fromEquirectangularTexture(i,r),e.set(r,o),r.addEventListener("dispose",n),t(o.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap}}}var qo=class extends ia{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ap=[.125,.215,.35,.446,.526,.582],Vs=20,Dc=new qo,op=new xe,Nc=null,Bc=0,Oc=0,Fc=!1,yr=(1+Math.sqrt(5))/2,Qr=1/yr,lp=[new M(-yr,Qr,0),new M(yr,Qr,0),new M(-Qr,0,yr),new M(Qr,0,yr),new M(0,yr,-Qr),new M(0,yr,Qr),new M(-1,1,-1),new M(1,1,-1),new M(-1,1,1),new M(1,1,1)],Yo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Nc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel(),Fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=up(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nc,Bc,Oc),this._renderer.xr.enabled=Fc,e.scissorTest=!1,go(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hs||e.mapping===us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel(),Fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:pa,format:ai,colorSpace:Ss,depthBuffer:!1},r=cp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cp(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,d=a-4+1+ap.length;for(let u=0;u<d;u++){let p=Math.pow(2,h);l.push(p);let m=1/p;u>a-4?m=ap[u-a+4-1]:u===0&&(m=0),c.push(m);let _=1/(p-2),f=-_,g=1+_,v=[f,f,g,f,g,g,f,f,g,g,f,g],x=6,y=6,A=3,T=2,P=1,U=new Float32Array(A*y*x),B=new Float32Array(T*y*x),V=new Float32Array(P*y*x);for(let G=0;G<x;G++){let J=G%3*2/3-1,z=G>2?0:-1,X=[J,z,0,J+2/3,z,0,J+2/3,z+1,0,J,z,0,J+2/3,z+1,0,J,z+1,0];U.set(X,A*y*G),B.set(v,T*y*G);let Z=[G,G,G,G,G,G];V.set(Z,P*y*G)}let j=new tt;j.setAttribute("position",new Ut(U,A)),j.setAttribute("uv",new Ut(B,T)),j.setAttribute("faceIndex",new Ut(V,P)),o.push(j),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}})(s)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(Vs),h=new M(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:Vs,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Nu(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})})(s,e,t)}return r}_compileMaterial(e){let t=new $e(this._lodPlanes[0],e);this._renderer.compile(t,Dc)}_sceneToCubeUV(e,t,n,r){let s=new xn(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(op),l.toneMapping=0,l.autoClear=!1;let d=new yn({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),u=new $e(new ms,d),p=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,p=!0):(d.color.copy(op),p=!0);for(let _=0;_<6;_++){let f=_%3;f===0?(s.up.set(0,a[_],0),s.lookAt(o[_],0,0)):f===1?(s.up.set(0,0,a[_]),s.lookAt(0,o[_],0)):(s.up.set(0,a[_],0),s.lookAt(0,0,o[_]));let g=this._cubeSize;go(r,f*g,_>2?g:0,g,g),l.setRenderTarget(r),p&&l.render(u,s),l.render(e,s)}u.geometry.dispose(),u.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===hs||e.mapping===us;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=up()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hp());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new $e(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;go(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,Dc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=lp[(r-s-1)%lp.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new $e(this._lodPlanes[r],c),d=c.uniforms,u=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*u):2*Math.PI/39,m=s/p,_=isFinite(s)?1+Math.floor(3*m):Vs;_>Vs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to 20`);let f=[],g=0;for(let y=0;y<Vs;++y){let A=y/m,T=Math.exp(-A*A/2);f.push(T),y===0?g+=T:y<_&&(g+=2*T)}for(let y=0;y<f.length;y++)f[y]=f[y]/g;d.envMap.value=e.texture,d.samples.value=_,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=p,d.mipInt.value=v-n;let x=this._sizeLods[r];go(t,3*x*(r>v-4?r-v+4:0),4*(this._cubeSize-x),3*x,2*x),l.setRenderTarget(t),l.render(h,Dc)}};function cp(i,e,t){let n=new Ei(i,e,t);return n.texture.mapping=pl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function go(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function hp(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nu(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function up(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Nu(){return`

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
	`}function fg(i){let e=new WeakMap,t=null;function n(r){let s=r.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping,a=s===Jc||s===Kc,o=s===hs||s===us;if(a||o){let l=e.get(r),c=l!==void 0?l.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==c)return t===null&&(t=new Yo(i)),l=a?t.fromEquirectangular(r,l):t.fromCubemap(r,l),l.texture.pmremVersion=r.pmremVersion,e.set(r,l),l.texture;if(l!==void 0)return l.texture;{let h=r.image;return a&&h&&h.height>0||o&&h&&(function(d){let u=0,p=6;for(let m=0;m<p;m++)d[m]!==void 0&&u++;return u===p})(h)?(t===null&&(t=new Yo(i)),l=a?t.fromEquirectangular(r):t.fromCubemap(r),l.texture.pmremVersion=r.pmremVersion,e.set(r,l),r.addEventListener("dispose",n),l.texture):null}}}return r},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function mg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Js("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function gg(i,e,t,n){let r={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let d in c.attributes)e.remove(c.attributes[d]);for(let d in c.morphAttributes){let u=c.morphAttributes[d];for(let p=0,m=u.length;p<m;p++)e.remove(u[p])}c.removeEventListener("dispose",a),delete r[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,d=l.attributes.position,u=0;if(h!==null){let _=h.array;u=h.version;for(let f=0,g=_.length;f<g;f+=3){let v=_[f+0],x=_[f+1],y=_[f+2];c.push(v,x,x,y,y,v)}}else{if(d===void 0)return;{let _=d.array;u=d.version;for(let f=0,g=_.length/3-1;f<g;f+=3){let v=f+0,x=f+1,y=f+2;c.push(v,x,x,y,y,v)}}}let p=new(hf(c)?Xo:Wo)(c,1);p.version=u;let m=s.get(l);m&&e.remove(m),s.set(l,p)}return{get:function(l,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let d in c)e.update(c[d],i.ARRAY_BUFFER);let h=l.morphAttributes;for(let d in h){let u=h[d];for(let p=0,m=u.length;p<m;p++)e.update(u[p],i.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function vg(i,e,t){let n,r,s;function a(o,l,c){c!==0&&(i.drawElementsInstanced(n,l,r,o*s,c),t.update(l,n,c))}this.setMode=function(o){n=o},this.setIndex=function(o){r=o.type,s=o.bytesPerElement},this.render=function(o,l){i.drawElements(n,l,r,o*s),t.update(l,n,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,l,0,r,o,0,c);let h=0;for(let d=0;d<c;d++)h+=l[d];t.update(h,n,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<o.length;u++)a(o[u]/s,l[u],h[u]);else{d.multiDrawElementsInstancedWEBGL(n,l,0,r,o,0,h,0,c);let u=0;for(let p=0;p<c;p++)u+=l[p]*h[p];t.update(u,n,1)}}}function _g(i){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,r){switch(e.calls++,n){case i.TRIANGLES:e.triangles+=r*(t/3);break;case i.LINES:e.lines+=r*(t/2);break;case i.LINE_STRIP:e.lines+=r*(t-1);break;case i.LINE_LOOP:e.lines+=r*t;break;case i.POINTS:e.points+=r*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function xg(i,e,t){let n=new WeakMap,r=new Ct;return{update:function(s,a,o){let l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,d=n.get(a);if(d===void 0||d.count!==h){let U=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",U)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],g=a.morphAttributes.color||[],v=0;u===!0&&(v=1),p===!0&&(v=2),m===!0&&(v=3);let x=a.attributes.position.count*v,y=1;x>e.maxTextureSize&&(y=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let A=new Float32Array(x*y*4*h),T=new Go(A,x,y,h);T.type=si,T.needsUpdate=!0;let P=4*v;for(let B=0;B<h;B++){let V=_[B],j=f[B],G=g[B],J=x*y*4*B;for(let z=0;z<V.count;z++){let X=z*P;u===!0&&(r.fromBufferAttribute(V,z),A[J+X+0]=r.x,A[J+X+1]=r.y,A[J+X+2]=r.z,A[J+X+3]=0),p===!0&&(r.fromBufferAttribute(j,z),A[J+X+4]=r.x,A[J+X+5]=r.y,A[J+X+6]=r.z,A[J+X+7]=0),m===!0&&(r.fromBufferAttribute(G,z),A[J+X+8]=r.x,A[J+X+9]=r.y,A[J+X+10]=r.z,A[J+X+11]=G.itemSize===4?r.w:1)}}d={count:h,texture:T,size:new oe(x,y)},n.set(a,d),a.addEventListener("dispose",U)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let u=0;for(let m=0;m<l.length;m++)u+=l[m];let p=a.morphTargetsRelative?1:1-u;o.getUniforms().setValue(i,"morphTargetBaseInfluence",p),o.getUniforms().setValue(i,"morphTargetInfluences",l)}o.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),o.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}}}function yg(i,e,t,n){let r=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,l=a.geometry,c=e.get(a,l);if(r.get(c)!==o&&(e.update(c),r.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),r.get(a)!==o&&(t.update(a.instanceMatrix,i.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,i.ARRAY_BUFFER),r.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;r.get(h)!==o&&(h.update(),r.set(h,o))}return c},dispose:function(){r=new WeakMap}}}var Zo=class extends Mn{constructor(e,t,n,r,s,a,o,l,c,h=1026){if(h!==ta&&h!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ta&&(n=Tr),n===void 0&&h===ps&&(n=ds),super(null,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Yn,this.minFilter=l!==void 0?l:Yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ff=new Mn,dp=new Zo(1,1),mf=new Go,gf=new Ph,vf=new jo,pp=[],fp=[],mp=new Float32Array(16),gp=new Float32Array(9),vp=new Float32Array(4);function Es(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=pp[r];if(s===void 0&&(s=new Float32Array(r),pp[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ml(i,e){let t=fp[e];t===void 0&&(t=new Int32Array(e),fp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Mg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Sg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2fv(this.addr,e),qt(t,e)}}function Eg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;i.uniform3fv(this.addr,e),qt(t,e)}}function bg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4fv(this.addr,e),qt(t,e)}}function wg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(jt(t,n))return;vp.set(n),i.uniformMatrix2fv(this.addr,!1,vp),qt(t,n)}}function Tg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(jt(t,n))return;gp.set(n),i.uniformMatrix3fv(this.addr,!1,gp),qt(t,n)}}function Ag(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(jt(t,n))return;mp.set(n),i.uniformMatrix4fv(this.addr,!1,mp),qt(t,n)}}function Rg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Cg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2iv(this.addr,e),qt(t,e)}}function Pg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3iv(this.addr,e),qt(t,e)}}function Ig(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4iv(this.addr,e),qt(t,e)}}function Lg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ug(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2uiv(this.addr,e),qt(t,e)}}function Dg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3uiv(this.addr,e),qt(t,e)}}function Ng(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4uiv(this.addr,e),qt(t,e)}}function Bg(i,e,t){let n=this.cache,r=t.allocateTextureUnit(),s;n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),this.type===i.SAMPLER_2D_SHADOW?(dp.compareFunction=515,s=dp):s=ff,t.setTexture2D(e||s,r)}function Og(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||gf,r)}function Fg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||vf,r)}function zg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||mf,r)}function Hg(i,e){i.uniform1fv(this.addr,e)}function kg(i,e){let t=Es(e,this.size,2);i.uniform2fv(this.addr,t)}function Vg(i,e){let t=Es(e,this.size,3);i.uniform3fv(this.addr,t)}function Gg(i,e){let t=Es(e,this.size,4);i.uniform4fv(this.addr,t)}function Wg(i,e){let t=Es(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Xg(i,e){let t=Es(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function jg(i,e){let t=Es(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function qg(i,e){i.uniform1iv(this.addr,e)}function Yg(i,e){i.uniform2iv(this.addr,e)}function Zg(i,e){i.uniform3iv(this.addr,e)}function Jg(i,e){i.uniform4iv(this.addr,e)}function Kg(i,e){i.uniform1uiv(this.addr,e)}function $g(i,e){i.uniform2uiv(this.addr,e)}function Qg(i,e){i.uniform3uiv(this.addr,e)}function ev(i,e){i.uniform4uiv(this.addr,e)}function tv(i,e,t){let n=this.cache,r=e.length,s=ml(t,r);jt(n,s)||(i.uniform1iv(this.addr,s),qt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||ff,s[a])}function nv(i,e,t){let n=this.cache,r=e.length,s=ml(t,r);jt(n,s)||(i.uniform1iv(this.addr,s),qt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||gf,s[a])}function iv(i,e,t){let n=this.cache,r=e.length,s=ml(t,r);jt(n,s)||(i.uniform1iv(this.addr,s),qt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||vf,s[a])}function rv(i,e,t){let n=this.cache,r=e.length,s=ml(t,r);jt(n,s)||(i.uniform1iv(this.addr,s),qt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||mf,s[a])}var Uh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(r){switch(r){case 5126:return Mg;case 35664:return Sg;case 35665:return Eg;case 35666:return bg;case 35674:return wg;case 35675:return Tg;case 35676:return Ag;case 5124:case 35670:return Rg;case 35667:case 35671:return Cg;case 35668:case 35672:return Pg;case 35669:case 35673:return Ig;case 5125:return Lg;case 36294:return Ug;case 36295:return Dg;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return Bg;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return Fg;case 36289:case 36303:case 36311:case 36292:return zg}})(t.type)}},Dh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(r){switch(r){case 5126:return Hg;case 35664:return kg;case 35665:return Vg;case 35666:return Gg;case 35674:return Wg;case 35675:return Xg;case 35676:return jg;case 5124:case 35670:return qg;case 35667:case 35671:return Yg;case 35668:case 35672:return Zg;case 35669:case 35673:return Jg;case 5125:return Kg;case 36294:return $g;case 36295:return Qg;case 36296:return ev;case 35678:case 36198:case 36298:case 36306:case 35682:return tv;case 35679:case 36299:case 36307:return nv;case 35680:case 36300:case 36308:case 36293:return iv;case 36289:case 36303:case 36311:case 36292:return rv}})(t.type)}},Nh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},zc=/(\w+)(\])?(\[|\.)?/g;function _p(i,e){i.seq.push(e),i.map[e.id]=e}function sv(i,e,t){let n=i.name,r=n.length;for(zc.lastIndex=0;;){let s=zc.exec(n),a=zc.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===r){_p(t,c===void 0?new Uh(o,i,e):new Dh(o,i,e));break}{let h=t.map[o];h===void 0&&(h=new Nh(o),_p(t,h)),t=h}}}var cs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r);sv(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function xp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var av=0,yp=new Ze;function Mp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+(function(o,l){let c=o.split(`
`),h=[],d=Math.max(l-6,0),u=Math.min(l+6,c.length);for(let p=d;p<u;p++){let m=p+1;h.push(`${m===l?">":" "} ${m}: ${c[p]}`)}return h.join(`
`)})(i.getShaderSource(e),a)}return r}function ov(i,e){let t=(function(n){pt._getMatrix(yp,pt.workingColorSpace,n);let r=`mat3( ${yp.elements.map((s=>s.toFixed(4)))} )`;switch(pt.getTransfer(n)){case fl:return[r,"LinearTransferOETF"];case vt:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[r,"LinearTransferOETF"]}})(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function lv(i,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var vo=new M;function cv(){return pt.getLuminanceCoefficients(vo),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${vo.x.toFixed(4)}, ${vo.y.toFixed(4)}, ${vo.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gs(i){return i!==""}function Sp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ep(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var hv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bh(i){return i.replace(hv,dv)}var uv=new Map;function dv(i,e){let t=Ke[e];if(t===void 0){let n=uv.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return Bh(t)}var pv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bp(i){return i.replace(pv,fv)}function fv(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function mv(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(j){let G="SHADOWMAP_TYPE_BASIC";return j.shadowMapType===1?G="SHADOWMAP_TYPE_PCF":j.shadowMapType===2?G="SHADOWMAP_TYPE_PCF_SOFT":j.shadowMapType===3&&(G="SHADOWMAP_TYPE_VSM"),G})(t),c=(function(j){let G="ENVMAP_TYPE_CUBE";if(j.envMap)switch(j.envMapMode){case hs:case us:G="ENVMAP_TYPE_CUBE";break;case pl:G="ENVMAP_TYPE_CUBE_UV"}return G})(t),h=(function(j){let G="ENVMAP_MODE_REFLECTION";return j.envMap&&j.envMapMode===us&&(G="ENVMAP_MODE_REFRACTION"),G})(t),d=(function(j){let G="ENVMAP_BLENDING_NONE";if(j.envMap)switch(j.combine){case 0:G="ENVMAP_BLENDING_MULTIPLY";break;case 1:G="ENVMAP_BLENDING_MIX";break;case 2:G="ENVMAP_BLENDING_ADD"}return G})(t),u=(function(j){let G=j.envMapCubeUVHeight;if(G===null)return null;let J=Math.log2(G)-2,z=1/G;return{texelWidth:1/(3*Math.max(Math.pow(2,J),112)),texelHeight:z,maxMip:J}})(t),p=(function(j){return[j.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",j.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)})(t),m=(function(j){let G=[];for(let J in j){let z=j[J];z!==!1&&G.push("#define "+J+" "+z)}return G.join(`
`)})(s),_=r.createProgram(),f,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Gs).join(`
`),f.length>0&&(f+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Gs).join(`
`),g.length>0&&(g+=`
`)):(f=[wp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),g=[wp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Ke.tonemapping_pars_fragment:"",t.toneMapping!==0?lv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,ov("linearToOutputTexel",t.outputColorSpace),cv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gs).join(`
`)),a=Bh(a),a=Sp(a,t),a=Ep(a,t),o=Bh(o),o=Sp(o,t),o=Ep(o,t),a=bp(a),o=bp(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,g=["#define varying in",t.glslVersion===zd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let x=v+f+a,y=v+g+o,A=xp(r,r.VERTEX_SHADER,x),T=xp(r,r.FRAGMENT_SHADER,y);function P(j){if(i.debug.checkShaderErrors){let G=r.getProgramInfoLog(_).trim(),J=r.getShaderInfoLog(A).trim(),z=r.getShaderInfoLog(T).trim(),X=!0,Z=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,A,T);else{let se=Mp(r,A,"vertex"),te=Mp(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+G+`
`+se+`
`+te)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):J!==""&&z!==""||(Z=!1);Z&&(j.diagnostics={runnable:X,programLog:G,vertexShader:{log:J,prefix:f},fragmentShader:{log:z,prefix:g}})}r.deleteShader(A),r.deleteShader(T),U=new cs(r,_),B=(function(G,J){let z={},X=G.getProgramParameter(J,G.ACTIVE_ATTRIBUTES);for(let Z=0;Z<X;Z++){let se=G.getActiveAttrib(J,Z),te=se.name,me=1;se.type===G.FLOAT_MAT2&&(me=2),se.type===G.FLOAT_MAT3&&(me=3),se.type===G.FLOAT_MAT4&&(me=4),z[te]={type:se.type,location:G.getAttribLocation(J,te),locationSize:me}}return z})(r,_)}let U,B;r.attachShader(_,A),r.attachShader(_,T),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),this.getUniforms=function(){return U===void 0&&P(this),U},this.getAttributes=function(){return B===void 0&&P(this),B};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=r.getProgramParameter(_,37297)),V},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=av++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=T,this}var gv=0,Oh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Fh(e),t.set(e,n)),n}},Fh=class{constructor(e){this.id=gv++,this.code=e,this.usedTimes=0}};function vv(i,e,t,n,r,s,a){let o=new na,l=new Oh,c=new Set,h=[],d=r.logarithmicDepthBuffer,u=r.vertexTextures,p=r.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(f){return c.add(f),f===0?"uv":`uv${f}`}return{getParameters:function(f,g,v,x,y){let A=x.fog,T=y.geometry,P=f.isMeshStandardMaterial?x.environment:null,U=(f.isMeshStandardMaterial?t:e).get(f.envMap||P),B=U&&U.mapping===pl?U.image.height:null,V=m[f.type];f.precision!==null&&(p=r.getMaxPrecision(f.precision),p!==f.precision&&console.warn("THREE.WebGLProgram.getParameters:",f.precision,"not supported, using",p,"instead."));let j=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,G=j!==void 0?j.length:0,J,z,X,Z,se=0;if(T.morphAttributes.position!==void 0&&(se=1),T.morphAttributes.normal!==void 0&&(se=2),T.morphAttributes.color!==void 0&&(se=3),V){let nt=ii[V];J=nt.vertexShader,z=nt.fragmentShader}else J=f.vertexShader,z=f.fragmentShader,l.update(f),X=l.getVertexShaderID(f),Z=l.getFragmentShaderID(f);let te=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Se=y.isInstancedMesh===!0,ie=y.isBatchedMesh===!0,le=!!f.map,we=!!f.matcap,Te=!!U,fe=!!f.aoMap,w=!!f.lightMap,b=!!f.bumpMap,L=!!f.normalMap,D=!!f.displacementMap,R=!!f.emissiveMap,I=!!f.metalnessMap,S=!!f.roughnessMap,C=f.anisotropy>0,H=f.clearcoat>0,Q=f.dispersion>0,F=f.iridescence>0,ee=f.sheen>0,$=f.transmission>0,re=C&&!!f.anisotropyMap,Me=H&&!!f.clearcoatMap,ge=H&&!!f.clearcoatNormalMap,Ie=H&&!!f.clearcoatRoughnessMap,Oe=F&&!!f.iridescenceMap,Ge=F&&!!f.iridescenceThicknessMap,We=ee&&!!f.sheenColorMap,Re=ee&&!!f.sheenRoughnessMap,et=!!f.specularMap,st=!!f.specularColorMap,ft=!!f.specularIntensityMap,Ce=$&&!!f.transmissionMap,je=$&&!!f.thicknessMap,q=!!f.gradientMap,de=!!f.alphaMap,be=f.alphaTest>0,Ee=!!f.alphaHash,ae=!!f.extensions,De=0;f.toneMapped&&(te!==null&&te.isXRRenderTarget!==!0||(De=i.toneMapping));let N={shaderID:V,shaderType:f.type,shaderName:f.name,vertexShader:J,fragmentShader:z,defines:f.defines,customVertexShaderID:X,customFragmentShaderID:Z,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:p,batching:ie,batchingColor:ie&&y._colorsTexture!==null,instancing:Se,instancingColor:Se&&y.instanceColor!==null,instancingMorph:Se&&y.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ss,alphaToCoverage:!!f.alphaToCoverage,map:le,matcap:we,envMap:Te,envMapMode:Te&&U.mapping,envMapCubeUVHeight:B,aoMap:fe,lightMap:w,bumpMap:b,normalMap:L,displacementMap:u&&D,emissiveMap:R,normalMapObjectSpace:L&&f.normalMapType===1,normalMapTangentSpace:L&&f.normalMapType===0,metalnessMap:I,roughnessMap:S,anisotropy:C,anisotropyMap:re,clearcoat:H,clearcoatMap:Me,clearcoatNormalMap:ge,clearcoatRoughnessMap:Ie,dispersion:Q,iridescence:F,iridescenceMap:Oe,iridescenceThicknessMap:Ge,sheen:ee,sheenColorMap:We,sheenRoughnessMap:Re,specularMap:et,specularColorMap:st,specularIntensityMap:ft,transmission:$,transmissionMap:Ce,thicknessMap:je,gradientMap:q,opaque:f.transparent===!1&&f.blending===1&&f.alphaToCoverage===!1,alphaMap:de,alphaTest:be,alphaHash:Ee,combine:f.combine,mapUv:le&&_(f.map.channel),aoMapUv:fe&&_(f.aoMap.channel),lightMapUv:w&&_(f.lightMap.channel),bumpMapUv:b&&_(f.bumpMap.channel),normalMapUv:L&&_(f.normalMap.channel),displacementMapUv:D&&_(f.displacementMap.channel),emissiveMapUv:R&&_(f.emissiveMap.channel),metalnessMapUv:I&&_(f.metalnessMap.channel),roughnessMapUv:S&&_(f.roughnessMap.channel),anisotropyMapUv:re&&_(f.anisotropyMap.channel),clearcoatMapUv:Me&&_(f.clearcoatMap.channel),clearcoatNormalMapUv:ge&&_(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&_(f.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&_(f.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&_(f.iridescenceThicknessMap.channel),sheenColorMapUv:We&&_(f.sheenColorMap.channel),sheenRoughnessMapUv:Re&&_(f.sheenRoughnessMap.channel),specularMapUv:et&&_(f.specularMap.channel),specularColorMapUv:st&&_(f.specularColorMap.channel),specularIntensityMapUv:ft&&_(f.specularIntensityMap.channel),transmissionMapUv:Ce&&_(f.transmissionMap.channel),thicknessMapUv:je&&_(f.thicknessMap.channel),alphaMapUv:de&&_(f.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(L||C),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,pointsUvs:y.isPoints===!0&&!!T.attributes.uv&&(le||de),fog:!!A,useFog:f.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:f.flatShading===!0,sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:me,skinning:y.isSkinnedMesh===!0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:se,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:f.dithering,shadowMapEnabled:i.shadowMap.enabled&&v.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,decodeVideoTexture:le&&f.map.isVideoTexture===!0&&pt.getTransfer(f.map.colorSpace)===vt,decodeVideoTextureEmissive:R&&f.emissiveMap.isVideoTexture===!0&&pt.getTransfer(f.emissiveMap.colorSpace)===vt,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===2,flipSided:f.side===1,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:ae&&f.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&f.extensions.multiDraw===!0||ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return N.vertexUv1s=c.has(1),N.vertexUv2s=c.has(2),N.vertexUv3s=c.has(3),c.clear(),N},getProgramCacheKey:function(f){let g=[];if(f.shaderID?g.push(f.shaderID):(g.push(f.customVertexShaderID),g.push(f.customFragmentShaderID)),f.defines!==void 0)for(let v in f.defines)g.push(v),g.push(f.defines[v]);return f.isRawShaderMaterial===!1&&((function(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)})(g,f),(function(v,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),v.push(o.mask)})(g,f),g.push(i.outputColorSpace)),g.push(f.customProgramCacheKey),g.join()},getUniforms:function(f){let g=m[f.type],v;if(g){let x=ii[g];v=ig.clone(x.uniforms)}else v=f.uniforms;return v},acquireProgram:function(f,g){let v;for(let x=0,y=h.length;x<y;x++){let A=h[x];if(A.cacheKey===g){v=A,++v.usedTimes;break}}return v===void 0&&(v=new mv(i,g,f,s),h.push(v)),v},releaseProgram:function(f){if(--f.usedTimes==0){let g=h.indexOf(f);h[g]=h[h.length-1],h.pop(),f.destroy()}},releaseShaderCache:function(f){l.remove(f)},programs:h,dispose:function(){l.dispose()}}}function _v(){let i=new WeakMap;return{has:function(e){return i.has(e)},get:function(e){let t=i.get(e);return t===void 0&&(t={},i.set(e,t)),t},remove:function(e){i.delete(e)},update:function(e,t,n){i.get(e)[t]=n},dispose:function(){i=new WeakMap}}}function xv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Tp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ap(){let i=[],e=0,t=[],n=[],r=[];function s(a,o,l,c,h,d){let u=i[e];return u===void 0?(u={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:d},i[e]=u):(u.id=a.id,u.object=a,u.geometry=o,u.material=l,u.groupOrder=c,u.renderOrder=a.renderOrder,u.z=h,u.group=d),e++,u}return{opaque:t,transmissive:n,transparent:r,init:function(){e=0,t.length=0,n.length=0,r.length=0},push:function(a,o,l,c,h,d){let u=s(a,o,l,c,h,d);l.transmission>0?n.push(u):l.transparent===!0?r.push(u):t.push(u)},unshift:function(a,o,l,c,h,d){let u=s(a,o,l,c,h,d);l.transmission>0?n.unshift(u):l.transparent===!0?r.unshift(u):t.unshift(u)},finish:function(){for(let a=e,o=i.length;a<o;a++){let l=i[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||xv),n.length>1&&n.sort(o||Tp),r.length>1&&r.sort(o||Tp)}}}function yv(){let i=new WeakMap;return{get:function(e,t){let n=i.get(e),r;return n===void 0?(r=new Ap,i.set(e,[r])):t>=n.length?(r=new Ap,n.push(r)):r=n[t],r},dispose:function(){i=new WeakMap}}}function Mv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new xe};break;case"SpotLight":t={position:new M,direction:new M,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new M,halfWidth:new M,halfHeight:new M}}return i[e.id]=t,t}}}var Sv=0;function Ev(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function bv(i){let e=new Mv,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new M);let r=new M,s=new Fe,a=new Fe;return{setup:function(o){let l=0,c=0,h=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let d=0,u=0,p=0,m=0,_=0,f=0,g=0,v=0,x=0,y=0,A=0;o.sort(Ev);for(let P=0,U=o.length;P<U;P++){let B=o[P],V=B.color,j=B.intensity,G=B.distance,J=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)l+=V.r*j,c+=V.g*j,h+=V.b*j;else if(B.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(B.sh.coefficients[z],j);A++}else if(B.isDirectionalLight){let z=e.get(B);if(z.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let X=B.shadow,Z=t.get(B);Z.shadowIntensity=X.intensity,Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,n.directionalShadow[d]=Z,n.directionalShadowMap[d]=J,n.directionalShadowMatrix[d]=B.shadow.matrix,f++}n.directional[d]=z,d++}else if(B.isSpotLight){let z=e.get(B);z.position.setFromMatrixPosition(B.matrixWorld),z.color.copy(V).multiplyScalar(j),z.distance=G,z.coneCos=Math.cos(B.angle),z.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),z.decay=B.decay,n.spot[p]=z;let X=B.shadow;if(B.map&&(n.spotLightMap[x]=B.map,x++,X.updateMatrices(B),B.castShadow&&y++),n.spotLightMatrix[p]=X.matrix,B.castShadow){let Z=t.get(B);Z.shadowIntensity=X.intensity,Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,n.spotShadow[p]=Z,n.spotShadowMap[p]=J,v++}p++}else if(B.isRectAreaLight){let z=e.get(B);z.color.copy(V).multiplyScalar(j),z.halfWidth.set(.5*B.width,0,0),z.halfHeight.set(0,.5*B.height,0),n.rectArea[m]=z,m++}else if(B.isPointLight){let z=e.get(B);if(z.color.copy(B.color).multiplyScalar(B.intensity),z.distance=B.distance,z.decay=B.decay,B.castShadow){let X=B.shadow,Z=t.get(B);Z.shadowIntensity=X.intensity,Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,Z.shadowCameraNear=X.camera.near,Z.shadowCameraFar=X.camera.far,n.pointShadow[u]=Z,n.pointShadowMap[u]=J,n.pointShadowMatrix[u]=B.shadow.matrix,g++}n.point[u]=z,u++}else if(B.isHemisphereLight){let z=e.get(B);z.skyColor.copy(B.color).multiplyScalar(j),z.groundColor.copy(B.groundColor).multiplyScalar(j),n.hemi[_]=z,_++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=c,n.ambient[2]=h;let T=n.hash;T.directionalLength===d&&T.pointLength===u&&T.spotLength===p&&T.rectAreaLength===m&&T.hemiLength===_&&T.numDirectionalShadows===f&&T.numPointShadows===g&&T.numSpotShadows===v&&T.numSpotMaps===x&&T.numLightProbes===A||(n.directional.length=d,n.spot.length=p,n.rectArea.length=m,n.point.length=u,n.hemi.length=_,n.directionalShadow.length=f,n.directionalShadowMap.length=f,n.pointShadow.length=g,n.pointShadowMap.length=g,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=f,n.pointShadowMatrix.length=g,n.spotLightMatrix.length=v+x-y,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=A,T.directionalLength=d,T.pointLength=u,T.spotLength=p,T.rectAreaLength=m,T.hemiLength=_,T.numDirectionalShadows=f,T.numPointShadows=g,T.numSpotShadows=v,T.numSpotMaps=x,T.numLightProbes=A,n.version=Sv++)},setupView:function(o,l){let c=0,h=0,d=0,u=0,p=0,m=l.matrixWorldInverse;for(let _=0,f=o.length;_<f;_++){let g=o[_];if(g.isDirectionalLight){let v=n.directional[c];v.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),c++}else if(g.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),d++}else if(g.isRectAreaLight){let v=n.rectArea[u];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(g.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(.5*g.width,0,0),v.halfHeight.set(0,.5*g.height,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),u++}else if(g.isPointLight){let v=n.point[h];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(m),h++}else if(g.isHemisphereLight){let v=n.hemi[p];v.direction.setFromMatrixPosition(g.matrixWorld),v.direction.transformDirection(m),p++}}},state:n}}function Rp(i){let e=new bv(i),t=[],n=[],r={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){r.camera=s,t.length=0,n.length=0},state:r,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){n.push(s)}}}function wv(i){let e=new WeakMap;return{get:function(t,n=0){let r=e.get(t),s;return r===void 0?(s=new Rp(i),e.set(t,[s])):n>=r.length?(s=new Rp(i),r.push(s)):s=r[n],s},dispose:function(){e=new WeakMap}}}var zh=class extends oi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Hh=class extends oi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Tv(i,e,t){let n=new vs,r=new oe,s=new oe,a=new Ct,o=new zh({depthPacking:3201}),l=new Hh,c={},h=t.maxTextureSize,d={[h0]:1,[Au]:0,[Tn]:2},u=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let m=new tt;m.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new $e(m,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let g=this.type;function v(T,P){let U=e.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ei(r.x,r.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(P,null,U,u,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(P,null,U,p,_,null)}function x(T,P,U,B){let V=null,j=U.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(j!==void 0)V=j;else if(V=U.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let G=V.uuid,J=P.uuid,z=c[G];z===void 0&&(z={},c[G]=z);let X=z[J];X===void 0&&(X=V.clone(),z[J]=X,P.addEventListener("dispose",A)),V=X}return V.visible=P.visible,V.wireframe=P.wireframe,V.side=B===3?P.shadowSide!==null?P.shadowSide:P.side:P.shadowSide!==null?P.shadowSide:d[P.side],V.alphaMap=P.alphaMap,V.alphaTest=P.alphaTest,V.map=P.map,V.clipShadows=P.clipShadows,V.clippingPlanes=P.clippingPlanes,V.clipIntersection=P.clipIntersection,V.displacementMap=P.displacementMap,V.displacementScale=P.displacementScale,V.displacementBias=P.displacementBias,V.wireframeLinewidth=P.wireframeLinewidth,V.linewidth=P.linewidth,U.isPointLight===!0&&V.isMeshDistanceMaterial===!0&&(i.properties.get(V).light=U),V}function y(T,P,U,B,V){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&V===3)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,T.matrixWorld);let G=e.update(T),J=T.material;if(Array.isArray(J)){let z=G.groups;for(let X=0,Z=z.length;X<Z;X++){let se=z[X],te=J[se.materialIndex];if(te&&te.visible){let me=x(T,te,B,V);T.onBeforeShadow(i,T,P,U,G,me,se),i.renderBufferDirect(U,null,G,me,T,se),T.onAfterShadow(i,T,P,U,G,me,se)}}}else if(J.visible){let z=x(T,J,B,V);T.onBeforeShadow(i,T,P,U,G,z,null),i.renderBufferDirect(U,null,G,z,T,null),T.onAfterShadow(i,T,P,U,G,z,null)}}let j=T.children;for(let G=0,J=j.length;G<J;G++)y(j[G],P,U,B,V)}function A(T){T.target.removeEventListener("dispose",A);for(let P in c){let U=c[P],B=T.target.uuid;B in U&&(U[B].dispose(),delete U[B])}}this.render=function(T,P,U){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||T.length===0)return;let B=i.getRenderTarget(),V=i.getActiveCubeFace(),j=i.getActiveMipmapLevel(),G=i.state;G.setBlending(0),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let J=g!==3&&this.type===3,z=g===3&&this.type!==3;for(let X=0,Z=T.length;X<Z;X++){let se=T[X],te=se.shadow;if(te===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;r.copy(te.mapSize);let me=te.getFrameExtents();if(r.multiply(me),s.copy(te.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/me.x),r.x=s.x*me.x,te.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/me.y),r.y=s.y*me.y,te.mapSize.y=s.y)),te.map===null||J===!0||z===!0){let ie=this.type!==3?{minFilter:Yn,magFilter:Yn}:{};te.map!==null&&te.map.dispose(),te.map=new Ei(r.x,r.y,ie),te.map.texture.name=se.name+".shadowMap",te.camera.updateProjectionMatrix()}i.setRenderTarget(te.map),i.clear();let Se=te.getViewportCount();for(let ie=0;ie<Se;ie++){let le=te.getViewport(ie);a.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),G.viewport(a),te.updateMatrices(se,ie),n=te.getFrustum(),y(P,U,te.camera,se,this.type)}te.isPointLightShadow!==!0&&this.type===3&&v(te,U),te.needsUpdate=!1}g=this.type,f.needsUpdate=!1,i.setRenderTarget(B,V,j)}}var Av={[T0]:1,[R0]:6,[P0]:7,[C0]:5,[A0]:0,[L0]:2,[U0]:4,[I0]:3};function Rv(i,e){let t=new function(){let S=!1,C=new Ct,H=null,Q=new Ct(0,0,0,0);return{setMask:function(F){H===F||S||(i.colorMask(F,F,F,F),H=F)},setLocked:function(F){S=F},setClear:function(F,ee,$,re,Me){Me===!0&&(F*=re,ee*=re,$*=re),C.set(F,ee,$,re),Q.equals(C)===!1&&(i.clearColor(F,ee,$,re),Q.copy(C))},reset:function(){S=!1,H=null,Q.set(-1,0,0,0)}}},n=new function(){let S=!1,C=!1,H=null,Q=null,F=null;return{setReversed:function(ee){if(C!==ee){let $=e.get("EXT_clip_control");C?$.clipControlEXT($.LOWER_LEFT_EXT,$.ZERO_TO_ONE_EXT):$.clipControlEXT($.LOWER_LEFT_EXT,$.NEGATIVE_ONE_TO_ONE_EXT);let re=F;F=null,this.setClear(re)}C=ee},getReversed:function(){return C},setTest:function(ee){ee?Te(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function(ee){H===ee||S||(i.depthMask(ee),H=ee)},setFunc:function(ee){if(C&&(ee=Av[ee]),Q!==ee){switch(ee){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:default:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL)}Q=ee}},setLocked:function(ee){S=ee},setClear:function(ee){F!==ee&&(C&&(ee=1-ee),i.clearDepth(ee),F=ee)},reset:function(){S=!1,H=null,Q=null,F=null,C=!1}}},r=new function(){let S=!1,C=null,H=null,Q=null,F=null,ee=null,$=null,re=null,Me=null;return{setTest:function(ge){S||(ge?Te(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function(ge){C===ge||S||(i.stencilMask(ge),C=ge)},setFunc:function(ge,Ie,Oe){H===ge&&Q===Ie&&F===Oe||(i.stencilFunc(ge,Ie,Oe),H=ge,Q=Ie,F=Oe)},setOp:function(ge,Ie,Oe){ee===ge&&$===Ie&&re===Oe||(i.stencilOp(ge,Ie,Oe),ee=ge,$=Ie,re=Oe)},setLocked:function(ge){S=ge},setClear:function(ge){Me!==ge&&(i.clearStencil(ge),Me=ge)},reset:function(){S=!1,C=null,H=null,Q=null,F=null,ee=null,$=null,re=null,Me=null}}},s=new WeakMap,a=new WeakMap,o={},l={},c=new WeakMap,h=[],d=null,u=!1,p=null,m=null,_=null,f=null,g=null,v=null,x=null,y=new xe(0,0,0),A=0,T=!1,P=null,U=null,B=null,V=null,j=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,z=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(X)[1]),J=z>=1):X.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),J=z>=2);let Z=null,se={},te=i.getParameter(i.SCISSOR_BOX),me=i.getParameter(i.VIEWPORT),Se=new Ct().fromArray(te),ie=new Ct().fromArray(me);function le(S,C,H,Q){let F=new Uint8Array(4),ee=i.createTexture();i.bindTexture(S,ee),i.texParameteri(S,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(S,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $=0;$<H;$++)S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY?i.texImage3D(C,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,F):i.texImage2D(C+$,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,F);return ee}let we={};function Te(S){o[S]!==!0&&(i.enable(S),o[S]=!0)}function fe(S){o[S]!==!1&&(i.disable(S),o[S]=!1)}we[i.TEXTURE_2D]=le(i.TEXTURE_2D,i.TEXTURE_2D,1),we[i.TEXTURE_CUBE_MAP]=le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[i.TEXTURE_2D_ARRAY]=le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),we[i.TEXTURE_3D]=le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),t.setClear(0,0,0,1),n.setClear(1),r.setClear(0),Te(i.DEPTH_TEST),n.setFunc(3),D(!1),R(1),Te(i.CULL_FACE),L(0);let w={[Mr]:i.FUNC_ADD,[u0]:i.FUNC_SUBTRACT,[d0]:i.FUNC_REVERSE_SUBTRACT};w[103]=i.MIN,w[104]=i.MAX;let b={[p0]:i.ZERO,[f0]:i.ONE,[m0]:i.SRC_COLOR,[Yc]:i.SRC_ALPHA,[M0]:i.SRC_ALPHA_SATURATE,[x0]:i.DST_COLOR,[v0]:i.DST_ALPHA,[g0]:i.ONE_MINUS_SRC_COLOR,[Zc]:i.ONE_MINUS_SRC_ALPHA,[y0]:i.ONE_MINUS_DST_COLOR,[_0]:i.ONE_MINUS_DST_ALPHA,[S0]:i.CONSTANT_COLOR,[E0]:i.ONE_MINUS_CONSTANT_COLOR,[b0]:i.CONSTANT_ALPHA,[w0]:i.ONE_MINUS_CONSTANT_ALPHA};function L(S,C,H,Q,F,ee,$,re,Me,ge){if(S!==0){if(u===!1&&(Te(i.BLEND),u=!0),S===5)F=F||C,ee=ee||H,$=$||Q,C===m&&F===g||(i.blendEquationSeparate(w[C],w[F]),m=C,g=F),H===_&&Q===f&&ee===v&&$===x||(i.blendFuncSeparate(b[H],b[Q],b[ee],b[$]),_=H,f=Q,v=ee,x=$),re.equals(y)!==!1&&Me===A||(i.blendColor(re.r,re.g,re.b,Me),y.copy(re),A=Me),p=S,T=!1;else if(S!==p||ge!==T){if(m===Mr&&g===Mr||(i.blendEquation(i.FUNC_ADD),m=Mr,g=Mr),ge)switch(S){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S)}else switch(S){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S)}_=null,f=null,v=null,x=null,y.set(0,0,0),A=0,p=S,T=ge}}else u===!0&&(fe(i.BLEND),u=!1)}function D(S){P!==S&&(S?i.frontFace(i.CW):i.frontFace(i.CCW),P=S)}function R(S){S!==0?(Te(i.CULL_FACE),S!==U&&(S===1?i.cullFace(i.BACK):S===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),U=S}function I(S,C,H){S?(Te(i.POLYGON_OFFSET_FILL),V===C&&j===H||(i.polygonOffset(C,H),V=C,j=H)):fe(i.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:n,stencil:r},enable:Te,disable:fe,bindFramebuffer:function(S,C){return l[S]!==C&&(i.bindFramebuffer(S,C),l[S]=C,S===i.DRAW_FRAMEBUFFER&&(l[i.FRAMEBUFFER]=C),S===i.FRAMEBUFFER&&(l[i.DRAW_FRAMEBUFFER]=C),!0)},drawBuffers:function(S,C){let H=h,Q=!1;if(S){H=c.get(C),H===void 0&&(H=[],c.set(C,H));let F=S.textures;if(H.length!==F.length||H[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,$=F.length;ee<$;ee++)H[ee]=i.COLOR_ATTACHMENT0+ee;H.length=F.length,Q=!0}}else H[0]!==i.BACK&&(H[0]=i.BACK,Q=!0);Q&&i.drawBuffers(H)},useProgram:function(S){return d!==S&&(i.useProgram(S),d=S,!0)},setBlending:L,setMaterial:function(S,C){S.side===2?fe(i.CULL_FACE):Te(i.CULL_FACE);let H=S.side===1;C&&(H=!H),D(H),S.blending===1&&S.transparent===!1?L(0):L(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),n.setFunc(S.depthFunc),n.setTest(S.depthTest),n.setMask(S.depthWrite),t.setMask(S.colorWrite);let Q=S.stencilWrite;r.setTest(Q),Q&&(r.setMask(S.stencilWriteMask),r.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),r.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),I(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?Te(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:D,setCullFace:R,setLineWidth:function(S){S!==B&&(J&&i.lineWidth(S),B=S)},setPolygonOffset:I,setScissorTest:function(S){S?Te(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)},activeTexture:function(S){S===void 0&&(S=i.TEXTURE0+G-1),Z!==S&&(i.activeTexture(S),Z=S)},bindTexture:function(S,C,H){H===void 0&&(H=Z===null?i.TEXTURE0+G-1:Z);let Q=se[H];Q===void 0&&(Q={type:void 0,texture:void 0},se[H]=Q),Q.type===S&&Q.texture===C||(Z!==H&&(i.activeTexture(H),Z=H),i.bindTexture(S,C||we[S]),Q.type=S,Q.texture=C)},unbindTexture:function(){let S=se[Z];S!==void 0&&S.type!==void 0&&(i.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)},compressedTexImage2D:function(){try{i.compressedTexImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexImage3D:function(){try{i.compressedTexImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texImage2D:function(){try{i.texImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texImage3D:function(){try{i.texImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},updateUBOMapping:function(S,C){let H=a.get(C);H===void 0&&(H=new WeakMap,a.set(C,H));let Q=H.get(S);Q===void 0&&(Q=i.getUniformBlockIndex(C,S.name),H.set(S,Q))},uniformBlockBinding:function(S,C){let H=a.get(C).get(S);s.get(C)!==H&&(i.uniformBlockBinding(C,H,S.__bindingPointIndex),s.set(C,H))},texStorage2D:function(){try{i.texStorage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texStorage3D:function(){try{i.texStorage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texSubImage2D:function(){try{i.texSubImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texSubImage3D:function(){try{i.texSubImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexSubImage2D:function(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexSubImage3D:function(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},scissor:function(S){Se.equals(S)===!1&&(i.scissor(S.x,S.y,S.z,S.w),Se.copy(S))},viewport:function(S){ie.equals(S)===!1&&(i.viewport(S.x,S.y,S.z,S.w),ie.copy(S))},reset:function(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),n.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),o={},Z=null,se={},l={},c=new WeakMap,h=[],d=null,u=!1,p=null,m=null,_=null,f=null,g=null,v=null,x=null,y=new xe(0,0,0),A=0,T=!1,P=null,U=null,B=null,V=null,j=null,Se.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),t.reset(),n.reset(),r.reset()}}}function Cp(i,e,t,n){let r=(function(s){switch(s){case Xi:case ef:return{byteLength:1,components:1};case ea:case tf:case pa:return{byteLength:2,components:1};case Cu:case Pu:return{byteLength:2,components:4};case Tr:case Ru:case si:return{byteLength:4,components:1};case nf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(n);switch(t){case rf:case af:return i*e;case of:return i*e*2;case Iu:case Lu:return i*e/r.components*r.byteLength;case lf:case Uu:return i*e*2/r.components*r.byteLength;case sf:return i*e*3/r.components*r.byteLength;case ai:case Du:return i*e*4/r.components*r.byteLength;case Uo:case Do:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case No:case Bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case eh:case nh:return Math.max(i,16)*Math.max(e,8)/4;case Qc:case th:return Math.max(i,8)*Math.max(e,8)/2;case ih:case rh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case sh:case ah:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case lh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ch:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case hh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case uh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case dh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ph:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case fh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case mh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case gh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case vh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case _h:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case xh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Oo:case yh:case Mh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case cf:case Sh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Eh:case bh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Cv(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new oe,h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,b){return p?new OffscreenCanvas(w,b):ko("canvas")}function _(w,b,L){let D=1,R=fe(w);if((R.width>L||R.height>L)&&(D=L/Math.max(R.width,R.height)),D<1){if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let I=Math.floor(D*R.width),S=Math.floor(D*R.height);d===void 0&&(d=m(I,S));let C=b?m(I,S):d;return C.width=I,C.height=S,C.getContext("2d").drawImage(w,0,0,I,S),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+I+"x"+S+")."),C}return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),w}return w}function f(w){return w.generateMipmaps}function g(w){i.generateMipmap(w)}function v(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(w,b,L,D,R=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let I=b;if(b===i.RED&&(L===i.FLOAT&&(I=i.R32F),L===i.HALF_FLOAT&&(I=i.R16F),L===i.UNSIGNED_BYTE&&(I=i.R8)),b===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(I=i.R8UI),L===i.UNSIGNED_SHORT&&(I=i.R16UI),L===i.UNSIGNED_INT&&(I=i.R32UI),L===i.BYTE&&(I=i.R8I),L===i.SHORT&&(I=i.R16I),L===i.INT&&(I=i.R32I)),b===i.RG&&(L===i.FLOAT&&(I=i.RG32F),L===i.HALF_FLOAT&&(I=i.RG16F),L===i.UNSIGNED_BYTE&&(I=i.RG8)),b===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&(I=i.RG8UI),L===i.UNSIGNED_SHORT&&(I=i.RG16UI),L===i.UNSIGNED_INT&&(I=i.RG32UI),L===i.BYTE&&(I=i.RG8I),L===i.SHORT&&(I=i.RG16I),L===i.INT&&(I=i.RG32I)),b===i.RGB_INTEGER&&(L===i.UNSIGNED_BYTE&&(I=i.RGB8UI),L===i.UNSIGNED_SHORT&&(I=i.RGB16UI),L===i.UNSIGNED_INT&&(I=i.RGB32UI),L===i.BYTE&&(I=i.RGB8I),L===i.SHORT&&(I=i.RGB16I),L===i.INT&&(I=i.RGB32I)),b===i.RGBA_INTEGER&&(L===i.UNSIGNED_BYTE&&(I=i.RGBA8UI),L===i.UNSIGNED_SHORT&&(I=i.RGBA16UI),L===i.UNSIGNED_INT&&(I=i.RGBA32UI),L===i.BYTE&&(I=i.RGBA8I),L===i.SHORT&&(I=i.RGBA16I),L===i.INT&&(I=i.RGBA32I)),b===i.RGB&&L===i.UNSIGNED_INT_5_9_9_9_REV&&(I=i.RGB9_E5),b===i.RGBA){let S=R?fl:pt.getTransfer(D);L===i.FLOAT&&(I=i.RGBA32F),L===i.HALF_FLOAT&&(I=i.RGBA16F),L===i.UNSIGNED_BYTE&&(I=S===vt?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT_4_4_4_4&&(I=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(I=i.RGB5_A1)}return I!==i.R16F&&I!==i.R32F&&I!==i.RG16F&&I!==i.RG32F&&I!==i.RGBA16F&&I!==i.RGBA32F||e.get("EXT_color_buffer_float"),I}function y(w,b){let L;return w?b===null||b===Tr||b===ds?L=i.DEPTH24_STENCIL8:b===si?L=i.DEPTH32F_STENCIL8:b===ea&&(L=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Tr||b===ds?L=i.DEPTH_COMPONENT24:b===si?L=i.DEPTH_COMPONENT32F:b===ea&&(L=i.DEPTH_COMPONENT16),L}function A(w,b){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==Yn&&w.minFilter!==yi?Math.log2(Math.max(b.width,b.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?b.mipmaps.length:1}function T(w){let b=w.target;b.removeEventListener("dispose",T),(function(L){let D=n.get(L);if(D.__webglInit===void 0)return;let R=L.source,I=u.get(R);if(I){let S=I[D.__cacheKey];S.usedTimes--,S.usedTimes===0&&U(L),Object.keys(I).length===0&&u.delete(R)}n.remove(L)})(b),b.isVideoTexture&&h.delete(b)}function P(w){let b=w.target;b.removeEventListener("dispose",P),(function(L){let D=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(D.__webglFramebuffer[I]))for(let S=0;S<D.__webglFramebuffer[I].length;S++)i.deleteFramebuffer(D.__webglFramebuffer[I][S]);else i.deleteFramebuffer(D.__webglFramebuffer[I]);D.__webglDepthbuffer&&i.deleteRenderbuffer(D.__webglDepthbuffer[I])}else{if(Array.isArray(D.__webglFramebuffer))for(let I=0;I<D.__webglFramebuffer.length;I++)i.deleteFramebuffer(D.__webglFramebuffer[I]);else i.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&i.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&i.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let I=0;I<D.__webglColorRenderbuffer.length;I++)D.__webglColorRenderbuffer[I]&&i.deleteRenderbuffer(D.__webglColorRenderbuffer[I]);D.__webglDepthRenderbuffer&&i.deleteRenderbuffer(D.__webglDepthRenderbuffer)}let R=L.textures;for(let I=0,S=R.length;I<S;I++){let C=n.get(R[I]);C.__webglTexture&&(i.deleteTexture(C.__webglTexture),a.memory.textures--),n.remove(R[I])}n.remove(L)})(b)}function U(w){let b=n.get(w);i.deleteTexture(b.__webglTexture);let L=w.source;delete u.get(L)[b.__cacheKey],a.memory.textures--}let B=0;function V(w,b){let L=n.get(w);if(w.isVideoTexture&&(function(D){let R=a.render.frame;h.get(D)!==R&&(h.set(D,R),D.update())})(w),w.isRenderTargetTexture===!1&&w.version>0&&L.__version!==w.version){let D=w.image;if(D===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(D.complete!==!1)return void Z(L,w,b);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+b)}let j={[br]:i.REPEAT,[wr]:i.CLAMP_TO_EDGE,[$c]:i.MIRRORED_REPEAT},G={[Yn]:i.NEAREST,[D0]:i.NEAREST_MIPMAP_NEAREST,[Ja]:i.NEAREST_MIPMAP_LINEAR,[yi]:i.LINEAR,[uc]:i.LINEAR_MIPMAP_NEAREST,[as]:i.LINEAR_MIPMAP_LINEAR},J={[N0]:i.NEVER,[V0]:i.ALWAYS,[B0]:i.LESS,[F0]:i.LEQUAL,[O0]:i.EQUAL,[k0]:i.GEQUAL,[z0]:i.GREATER,[H0]:i.NOTEQUAL};function z(w,b){if(b.type!==si||e.has("OES_texture_float_linear")!==!1||b.magFilter!==yi&&b.magFilter!==uc&&b.magFilter!==Ja&&b.magFilter!==as&&b.minFilter!==yi&&b.minFilter!==uc&&b.minFilter!==Ja&&b.minFilter!==as||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,j[b.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,j[b.wrapT]),w!==i.TEXTURE_3D&&w!==i.TEXTURE_2D_ARRAY||i.texParameteri(w,i.TEXTURE_WRAP_R,j[b.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,G[b.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,G[b.minFilter]),b.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,J[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Yn||b.minFilter!==Ja&&b.minFilter!==as||b.type===si&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let L=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function X(w,b){let L=!1;w.__webglInit===void 0&&(w.__webglInit=!0,b.addEventListener("dispose",T));let D=b.source,R=u.get(D);R===void 0&&(R={},u.set(D,R));let I=(function(S){let C=[];return C.push(S.wrapS),C.push(S.wrapT),C.push(S.wrapR||0),C.push(S.magFilter),C.push(S.minFilter),C.push(S.anisotropy),C.push(S.internalFormat),C.push(S.format),C.push(S.type),C.push(S.generateMipmaps),C.push(S.premultiplyAlpha),C.push(S.flipY),C.push(S.unpackAlignment),C.push(S.colorSpace),C.join()})(b);if(I!==w.__cacheKey){R[I]===void 0&&(R[I]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,L=!0),R[I].usedTimes++;let S=R[w.__cacheKey];S!==void 0&&(R[w.__cacheKey].usedTimes--,S.usedTimes===0&&U(b)),w.__cacheKey=I,w.__webglTexture=R[I].texture}return L}function Z(w,b,L){let D=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(D=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(D=i.TEXTURE_3D);let R=X(w,b),I=b.source;t.bindTexture(D,w.__webglTexture,i.TEXTURE0+L);let S=n.get(I);if(I.version!==S.__version||R===!0){t.activeTexture(i.TEXTURE0+L);let C=pt.getPrimaries(pt.workingColorSpace),H=b.colorSpace===ss?null:pt.getPrimaries(b.colorSpace),Q=b.colorSpace===ss||C===H?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let F=_(b.image,!1,r.maxTextureSize);F=Te(b,F);let ee=s.convert(b.format,b.colorSpace),$=s.convert(b.type),re,Me=x(b.internalFormat,ee,$,b.colorSpace,b.isVideoTexture);z(D,b);let ge=b.mipmaps,Ie=b.isVideoTexture!==!0,Oe=S.__version===void 0||R===!0,Ge=I.dataReady,We=A(b,F);if(b.isDepthTexture)Me=y(b.format===ps,b.type),Oe&&(Ie?t.texStorage2D(i.TEXTURE_2D,1,Me,F.width,F.height):t.texImage2D(i.TEXTURE_2D,0,Me,F.width,F.height,0,ee,$,null));else if(b.isDataTexture)if(ge.length>0){Ie&&Oe&&t.texStorage2D(i.TEXTURE_2D,We,Me,ge[0].width,ge[0].height);for(let Re=0,et=ge.length;Re<et;Re++)re=ge[Re],Ie?Ge&&t.texSubImage2D(i.TEXTURE_2D,Re,0,0,re.width,re.height,ee,$,re.data):t.texImage2D(i.TEXTURE_2D,Re,Me,re.width,re.height,0,ee,$,re.data);b.generateMipmaps=!1}else Ie?(Oe&&t.texStorage2D(i.TEXTURE_2D,We,Me,F.width,F.height),Ge&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,F.width,F.height,ee,$,F.data)):t.texImage2D(i.TEXTURE_2D,0,Me,F.width,F.height,0,ee,$,F.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ie&&Oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,We,Me,ge[0].width,ge[0].height,F.depth);for(let Re=0,et=ge.length;Re<et;Re++)if(re=ge[Re],b.format!==ai)if(ee!==null)if(Ie){if(Ge)if(b.layerUpdates.size>0){let st=Cp(re.width,re.height,b.format,b.type);for(let ft of b.layerUpdates){let Ce=re.data.subarray(ft*st/re.data.BYTES_PER_ELEMENT,(ft+1)*st/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Re,0,0,ft,re.width,re.height,1,ee,Ce)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Re,0,0,0,re.width,re.height,F.depth,ee,re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Re,Me,re.width,re.height,F.depth,0,re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?Ge&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Re,0,0,0,re.width,re.height,F.depth,ee,$,re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Re,Me,re.width,re.height,F.depth,0,ee,$,re.data)}else{Ie&&Oe&&t.texStorage2D(i.TEXTURE_2D,We,Me,ge[0].width,ge[0].height);for(let Re=0,et=ge.length;Re<et;Re++)re=ge[Re],b.format!==ai?ee!==null?Ie?Ge&&t.compressedTexSubImage2D(i.TEXTURE_2D,Re,0,0,re.width,re.height,ee,re.data):t.compressedTexImage2D(i.TEXTURE_2D,Re,Me,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?Ge&&t.texSubImage2D(i.TEXTURE_2D,Re,0,0,re.width,re.height,ee,$,re.data):t.texImage2D(i.TEXTURE_2D,Re,Me,re.width,re.height,0,ee,$,re.data)}else if(b.isDataArrayTexture)if(Ie){if(Oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,We,Me,F.width,F.height,F.depth),Ge)if(b.layerUpdates.size>0){let Re=Cp(F.width,F.height,b.format,b.type);for(let et of b.layerUpdates){let st=F.data.subarray(et*Re/F.data.BYTES_PER_ELEMENT,(et+1)*Re/F.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,F.width,F.height,1,ee,$,st)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,F.width,F.height,F.depth,ee,$,F.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,F.width,F.height,F.depth,0,ee,$,F.data);else if(b.isData3DTexture)Ie?(Oe&&t.texStorage3D(i.TEXTURE_3D,We,Me,F.width,F.height,F.depth),Ge&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,F.width,F.height,F.depth,ee,$,F.data)):t.texImage3D(i.TEXTURE_3D,0,Me,F.width,F.height,F.depth,0,ee,$,F.data);else if(b.isFramebufferTexture){if(Oe)if(Ie)t.texStorage2D(i.TEXTURE_2D,We,Me,F.width,F.height);else{let Re=F.width,et=F.height;for(let st=0;st<We;st++)t.texImage2D(i.TEXTURE_2D,st,Me,Re,et,0,ee,$,null),Re>>=1,et>>=1}}else if(ge.length>0){if(Ie&&Oe){let Re=fe(ge[0]);t.texStorage2D(i.TEXTURE_2D,We,Me,Re.width,Re.height)}for(let Re=0,et=ge.length;Re<et;Re++)re=ge[Re],Ie?Ge&&t.texSubImage2D(i.TEXTURE_2D,Re,0,0,ee,$,re):t.texImage2D(i.TEXTURE_2D,Re,Me,ee,$,re);b.generateMipmaps=!1}else if(Ie){if(Oe){let Re=fe(F);t.texStorage2D(i.TEXTURE_2D,We,Me,Re.width,Re.height)}Ge&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee,$,F)}else t.texImage2D(i.TEXTURE_2D,0,Me,ee,$,F);f(b)&&g(D),S.__version=I.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function se(w,b,L,D,R,I){let S=s.convert(L.format,L.colorSpace),C=s.convert(L.type),H=x(L.internalFormat,S,C,L.colorSpace),Q=n.get(b),F=n.get(L);if(F.__renderTarget=b,!Q.__hasExternalTextures){let ee=Math.max(1,b.width>>I),$=Math.max(1,b.height>>I);R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?t.texImage3D(R,I,H,ee,$,b.depth,0,S,C,null):t.texImage2D(R,I,H,ee,$,0,S,C,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),we(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,D,R,F.__webglTexture,0,le(b)):(R===i.TEXTURE_2D||R>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&R<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,D,R,F.__webglTexture,I),t.bindFramebuffer(i.FRAMEBUFFER,null)}function te(w,b,L){if(i.bindRenderbuffer(i.RENDERBUFFER,w),b.depthBuffer){let D=b.depthTexture,R=D&&D.isDepthTexture?D.type:null,I=y(b.stencilBuffer,R),S=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,C=le(b);we(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,C,I,b.width,b.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,C,I,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,I,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,S,i.RENDERBUFFER,w)}else{let D=b.textures;for(let R=0;R<D.length;R++){let I=D[R],S=s.convert(I.format,I.colorSpace),C=s.convert(I.type),H=x(I.internalFormat,S,C,I.colorSpace),Q=le(b);L&&we(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,H,b.width,b.height):we(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,H,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,H,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function me(w){let b=n.get(w),L=w.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==w.depthTexture){let D=w.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),D){let R=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,D.removeEventListener("dispose",R)};D.addEventListener("dispose",R),b.__depthDisposeCallback=R}b.__boundDepthTexture=D}if(w.depthTexture&&!b.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");(function(D,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!R.depthTexture||!R.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let I=n.get(R.depthTexture);I.__renderTarget=R,I.__webglTexture&&R.depthTexture.image.width===R.width&&R.depthTexture.image.height===R.height||(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),V(R.depthTexture,0);let S=I.__webglTexture,C=le(R);if(R.depthTexture.format===ta)we(R)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,S,0,C):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,S,0);else{if(R.depthTexture.format!==ps)throw new Error("Unknown depthTexture format");we(R)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,S,0,C):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,S,0)}})(b.__webglFramebuffer,w)}else if(L){b.__webglDepthbuffer=[];for(let D=0;D<6;D++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[D]),b.__webglDepthbuffer[D]===void 0)b.__webglDepthbuffer[D]=i.createRenderbuffer(),te(b.__webglDepthbuffer[D],w,!1);else{let R=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,I=b.__webglDepthbuffer[D];i.bindRenderbuffer(i.RENDERBUFFER,I),i.framebufferRenderbuffer(i.FRAMEBUFFER,R,i.RENDERBUFFER,I)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),te(b.__webglDepthbuffer,w,!1);else{let D=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,R=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,R),i.framebufferRenderbuffer(i.FRAMEBUFFER,D,i.RENDERBUFFER,R)}t.bindFramebuffer(i.FRAMEBUFFER,null)}let Se=[],ie=[];function le(w){return Math.min(r.maxSamples,w.samples)}function we(w){let b=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Te(w,b){let L=w.colorSpace,D=w.format,R=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||L!==Ss&&L!==ss&&(pt.getTransfer(L)===vt?D===ai&&R===Xi||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),b}function fe(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=function(){let w=B;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),B+=1,w},this.resetTextureUnits=function(){B=0},this.setTexture2D=V,this.setTexture2DArray=function(w,b){let L=n.get(w);w.version>0&&L.__version!==w.version?Z(L,w,b):t.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+b)},this.setTexture3D=function(w,b){let L=n.get(w);w.version>0&&L.__version!==w.version?Z(L,w,b):t.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+b)},this.setTextureCube=function(w,b){let L=n.get(w);w.version>0&&L.__version!==w.version?(function(D,R,I){if(R.image.length!==6)return;let S=X(D,R),C=R.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+I);let H=n.get(C);if(C.version!==H.__version||S===!0){t.activeTexture(i.TEXTURE0+I);let Q=pt.getPrimaries(pt.workingColorSpace),F=R.colorSpace===ss?null:pt.getPrimaries(R.colorSpace),ee=R.colorSpace===ss||Q===F?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let $=R.isCompressedTexture||R.image[0].isCompressedTexture,re=R.image[0]&&R.image[0].isDataTexture,Me=[];for(let Ce=0;Ce<6;Ce++)Me[Ce]=$||re?re?R.image[Ce].image:R.image[Ce]:_(R.image[Ce],!0,r.maxCubemapSize),Me[Ce]=Te(R,Me[Ce]);let ge=Me[0],Ie=s.convert(R.format,R.colorSpace),Oe=s.convert(R.type),Ge=x(R.internalFormat,Ie,Oe,R.colorSpace),We=R.isVideoTexture!==!0,Re=H.__version===void 0||S===!0,et=C.dataReady,st,ft=A(R,ge);if(z(i.TEXTURE_CUBE_MAP,R),$){We&&Re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Ge,ge.width,ge.height);for(let Ce=0;Ce<6;Ce++){st=Me[Ce].mipmaps;for(let je=0;je<st.length;je++){let q=st[je];R.format!==ai?Ie!==null?We?et&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,je,0,0,q.width,q.height,Ie,q.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,je,Ge,q.width,q.height,0,q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?et&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,je,0,0,q.width,q.height,Ie,Oe,q.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,je,Ge,q.width,q.height,0,Ie,Oe,q.data)}}}else{if(st=R.mipmaps,We&&Re){st.length>0&&ft++;let Ce=fe(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Ge,Ce.width,Ce.height)}for(let Ce=0;Ce<6;Ce++)if(re){We?et&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,Me[Ce].width,Me[Ce].height,Ie,Oe,Me[Ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Ge,Me[Ce].width,Me[Ce].height,0,Ie,Oe,Me[Ce].data);for(let je=0;je<st.length;je++){let q=st[je].image[Ce].image;We?et&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,je+1,0,0,q.width,q.height,Ie,Oe,q.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,je+1,Ge,q.width,q.height,0,Ie,Oe,q.data)}}else{We?et&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,Ie,Oe,Me[Ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Ge,Ie,Oe,Me[Ce]);for(let je=0;je<st.length;je++){let q=st[je];We?et&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,je+1,0,0,Ie,Oe,q.image[Ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,je+1,Ge,Ie,Oe,q.image[Ce])}}}f(R)&&g(i.TEXTURE_CUBE_MAP),H.__version=C.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version})(L,w,b):t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+b)},this.rebindTextures=function(w,b,L){let D=n.get(w);b!==void 0&&se(D.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&me(w)},this.setupRenderTarget=function(w){let b=w.texture,L=n.get(w),D=n.get(b);w.addEventListener("dispose",P);let R=w.textures,I=w.isWebGLCubeRenderTarget===!0,S=R.length>1;if(S||(D.__webglTexture===void 0&&(D.__webglTexture=i.createTexture()),D.__version=b.version,a.memory.textures++),I){L.__webglFramebuffer=[];for(let C=0;C<6;C++)if(b.mipmaps&&b.mipmaps.length>0){L.__webglFramebuffer[C]=[];for(let H=0;H<b.mipmaps.length;H++)L.__webglFramebuffer[C][H]=i.createFramebuffer()}else L.__webglFramebuffer[C]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){L.__webglFramebuffer=[];for(let C=0;C<b.mipmaps.length;C++)L.__webglFramebuffer[C]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(S)for(let C=0,H=R.length;C<H;C++){let Q=n.get(R[C]);Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&we(w)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let C=0;C<R.length;C++){let H=R[C];L.__webglColorRenderbuffer[C]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[C]);let Q=s.convert(H.format,H.colorSpace),F=s.convert(H.type),ee=x(H.internalFormat,Q,F,H.colorSpace,w.isXRRenderTarget===!0),$=le(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,$,ee,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+C,i.RENDERBUFFER,L.__webglColorRenderbuffer[C])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),te(L.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(I){t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture),z(i.TEXTURE_CUBE_MAP,b);for(let C=0;C<6;C++)if(b.mipmaps&&b.mipmaps.length>0)for(let H=0;H<b.mipmaps.length;H++)se(L.__webglFramebuffer[C][H],w,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+C,H);else se(L.__webglFramebuffer[C],w,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0);f(b)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(S){for(let C=0,H=R.length;C<H;C++){let Q=R[C],F=n.get(Q);t.bindTexture(i.TEXTURE_2D,F.__webglTexture),z(i.TEXTURE_2D,Q),se(L.__webglFramebuffer,w,Q,i.COLOR_ATTACHMENT0+C,i.TEXTURE_2D,0),f(Q)&&g(i.TEXTURE_2D)}t.unbindTexture()}else{let C=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(C=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(C,D.__webglTexture),z(C,b),b.mipmaps&&b.mipmaps.length>0)for(let H=0;H<b.mipmaps.length;H++)se(L.__webglFramebuffer[H],w,b,i.COLOR_ATTACHMENT0,C,H);else se(L.__webglFramebuffer,w,b,i.COLOR_ATTACHMENT0,C,0);f(b)&&g(C),t.unbindTexture()}w.depthBuffer&&me(w)},this.updateRenderTargetMipmap=function(w){let b=w.textures;for(let L=0,D=b.length;L<D;L++){let R=b[L];if(f(R)){let I=v(w),S=n.get(R).__webglTexture;t.bindTexture(I,S),g(I),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(w){if(w.samples>0){if(we(w)===!1){let b=w.textures,L=w.width,D=w.height,R=i.COLOR_BUFFER_BIT,I=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,S=n.get(w),C=b.length>1;if(C)for(let H=0;H<b.length;H++)t.bindFramebuffer(i.FRAMEBUFFER,S.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,S.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,S.__webglFramebuffer);for(let H=0;H<b.length;H++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(R|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(R|=i.STENCIL_BUFFER_BIT)),C){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,S.__webglColorRenderbuffer[H]);let Q=n.get(b[H]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,L,D,0,0,L,D,R,i.NEAREST),l===!0&&(Se.length=0,ie.length=0,Se.push(i.COLOR_ATTACHMENT0+H),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Se.push(I),ie.push(I),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ie)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Se))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),C)for(let H=0;H<b.length;H++){t.bindFramebuffer(i.FRAMEBUFFER,S.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.RENDERBUFFER,S.__webglColorRenderbuffer[H]);let Q=n.get(b[H]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.TEXTURE_2D,Q,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,S.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let b=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}},this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=se,this.useMultisampledRTT=we}function Pv(i,e){return{convert:function(t,n=""){let r,s=pt.getTransfer(n);if(t===Xi)return i.UNSIGNED_BYTE;if(t===Cu)return i.UNSIGNED_SHORT_4_4_4_4;if(t===Pu)return i.UNSIGNED_SHORT_5_5_5_1;if(t===nf)return i.UNSIGNED_INT_5_9_9_9_REV;if(t===ef)return i.BYTE;if(t===tf)return i.SHORT;if(t===ea)return i.UNSIGNED_SHORT;if(t===Ru)return i.INT;if(t===Tr)return i.UNSIGNED_INT;if(t===si)return i.FLOAT;if(t===pa)return i.HALF_FLOAT;if(t===rf)return i.ALPHA;if(t===sf)return i.RGB;if(t===ai)return i.RGBA;if(t===af)return i.LUMINANCE;if(t===of)return i.LUMINANCE_ALPHA;if(t===ta)return i.DEPTH_COMPONENT;if(t===ps)return i.DEPTH_STENCIL;if(t===Iu)return i.RED;if(t===Lu)return i.RED_INTEGER;if(t===lf)return i.RG;if(t===Uu)return i.RG_INTEGER;if(t===Du)return i.RGBA_INTEGER;if(t===Uo||t===Do||t===No||t===Bo)if(s===vt){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(t===Uo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(t===Uo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===Do)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===No)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Bo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===Qc||t===eh||t===th||t===nh){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(t===Qc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===eh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===th)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===nh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===ih||t===rh||t===sh){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(t===ih||t===rh)return s===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(t===sh)return s===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}if(t===ah||t===oh||t===lh||t===ch||t===hh||t===uh||t===dh||t===ph||t===fh||t===mh||t===gh||t===vh||t===_h||t===xh){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(t===ah)return s===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===oh)return s===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===lh)return s===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===ch)return s===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===hh)return s===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===uh)return s===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===dh)return s===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===ph)return s===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===fh)return s===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===mh)return s===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===gh)return s===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===vh)return s===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===_h)return s===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===xh)return s===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Oo||t===yh||t===Mh){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(t===Oo)return s===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===yh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Mh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===cf||t===Sh||t===Eh||t===bh){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(t===Oo)return r.COMPRESSED_RED_RGTC1_EXT;if(t===Sh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===Eh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===bh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===ds?i.UNSIGNED_INT_24_8:i[t]!==void 0?i[t]:null}}}var kh=class extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},hn=class extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}},Iv={type:"move"},Ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let f=t.getJointPose(_,n),g=this._getHandJoint(c,_);f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=f.radius),g.visible=f!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,m=.005;c.inputState.pinching&&u>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Iv)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new hn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Vh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new Mn;e.properties.get(r).__webglTexture=t.texture,t.depthNear==n.depthNear&&t.depthFar==n.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Sn({vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $e(new Xt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gh=class extends ji{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,m=null,_=new Vh,f=t.getContextAttributes(),g=null,v=null,x=[],y=[],A=new oe,T=null,P=new xn;P.viewport=new Ct;let U=new xn;U.viewport=new Ct;let B=[P,U],V=new kh,j=null,G=null;function J(ie){let le=y.indexOf(ie.inputSource);if(le===-1)return;let we=x[le];we!==void 0&&(we.update(ie.inputSource,ie.frame,c||a),we.dispatchEvent({type:ie.type,data:ie.inputSource}))}function z(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",X);for(let ie=0;ie<x.length;ie++){let le=y[ie];le!==null&&(y[ie]=null,x[ie].disconnect(le))}j=null,G=null,_.reset(),e.setRenderTarget(g),p=null,u=null,d=null,r=null,v=null,Se.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}function X(ie){for(let le=0;le<ie.removed.length;le++){let we=ie.removed[le],Te=y.indexOf(we);Te>=0&&(y[Te]=null,x[Te].disconnect(we))}for(let le=0;le<ie.added.length;le++){let we=ie.added[le],Te=y.indexOf(we);if(Te===-1){for(let w=0;w<x.length;w++){if(w>=y.length){y.push(we),Te=w;break}if(y[w]===null){y[w]=we,Te=w;break}}if(Te===-1)break}let fe=x[Te];fe&&fe.connect(we)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let le=x[ie];return le===void 0&&(le=new Ks,x[ie]=le),le.getTargetRaySpace()},this.getControllerGrip=function(ie){let le=x[ie];return le===void 0&&(le=new Ks,x[ie]=le),le.getGripSpace()},this.getHand=function(ie){let le=x[ie];return le===void 0&&(le=new Ks,x[ie]=le),le.getHandSpace()},this.setFramebufferScaleFactor=function(ie){s=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){o=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(ie){if(r=ie,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",z),r.addEventListener("inputsourceschange",X),f.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0){let le={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Ei(p.framebufferWidth,p.framebufferHeight,{format:ai,type:Xi,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let le=null,we=null,Te=null;f.depth&&(Te=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=f.stencil?ps:ta,we=f.stencil?ds:Tr);let fe={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};d=new XRWebGLBinding(r,t),u=d.createProjectionLayer(fe),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Ei(u.textureWidth,u.textureHeight,{format:ai,type:Xi,depthTexture:new Zo(u.textureWidth,u.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Se.setContext(r),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};let Z=new M,se=new M;function te(ie,le){le===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(le.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;let le=ie.near,we=ie.far;_.texture!==null&&(_.depthNear>0&&(le=_.depthNear),_.depthFar>0&&(we=_.depthFar)),V.near=U.near=P.near=le,V.far=U.far=P.far=we,j===V.near&&G===V.far||(r.updateRenderState({depthNear:V.near,depthFar:V.far}),j=V.near,G=V.far),P.layers.mask=2|ie.layers.mask,U.layers.mask=4|ie.layers.mask,V.layers.mask=P.layers.mask|U.layers.mask;let Te=ie.parent,fe=V.cameras;te(V,Te);for(let w=0;w<fe.length;w++)te(fe[w],Te);fe.length===2?(function(w,b,L){Z.setFromMatrixPosition(b.matrixWorld),se.setFromMatrixPosition(L.matrixWorld);let D=Z.distanceTo(se),R=b.projectionMatrix.elements,I=L.projectionMatrix.elements,S=R[14]/(R[10]-1),C=R[14]/(R[10]+1),H=(R[9]+1)/R[5],Q=(R[9]-1)/R[5],F=(R[8]-1)/R[0],ee=(I[8]+1)/I[0],$=S*F,re=S*ee,Me=D/(-F+ee),ge=Me*-F;if(b.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(ge),w.translateZ(Me),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert(),R[10]===-1)w.projectionMatrix.copy(b.projectionMatrix),w.projectionMatrixInverse.copy(b.projectionMatrixInverse);else{let Ie=S+Me,Oe=C+Me,Ge=$-ge,We=re+(D-ge),Re=H*C/Oe*Ie,et=Q*C/Oe*Ie;w.projectionMatrix.makePerspective(Ge,We,Re,et,Ie,Oe),w.projectionMatrixInverse.copy(w.projectionMatrix).invert()}})(V,P,U):V.projectionMatrix.copy(P.projectionMatrix),(function(w,b,L){L===null?w.matrix.copy(b.matrixWorld):(w.matrix.copy(L.matrixWorld),w.matrix.invert(),w.matrix.multiply(b.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(b.projectionMatrix),w.projectionMatrixInverse.copy(b.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=2*Ah*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)})(ie,V,Te)},this.getCamera=function(){return V},this.getFoveation=function(){if(u!==null||p!==null)return l},this.setFoveation=function(ie){l=ie,u!==null&&(u.fixedFoveation=ie),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ie)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(V)};let me=null,Se=new pf;Se.setAnimationLoop((function(ie,le){if(h=le.getViewerPose(c||a),m=le,h!==null){let we=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let Te=!1;we.length!==V.cameras.length&&(V.cameras.length=0,Te=!0);for(let w=0;w<we.length;w++){let b=we[w],L=null;if(p!==null)L=p.getViewport(b);else{let R=d.getViewSubImage(u,b);L=R.viewport,w===0&&(e.setRenderTargetTextures(v,R.colorTexture,u.ignoreDepthValues?void 0:R.depthStencilTexture),e.setRenderTarget(v))}let D=B[w];D===void 0&&(D=new xn,D.layers.enable(w),D.viewport=new Ct,B[w]=D),D.matrix.fromArray(b.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(b.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(L.x,L.y,L.width,L.height),w===0&&(V.matrix.copy(D.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Te===!0&&V.cameras.push(D)}let fe=r.enabledFeatures;if(fe&&fe.includes("depth-sensing")){let w=d.getDepthInformation(we[0]);w&&w.isValid&&w.texture&&_.init(e,w,r.renderState)}}for(let we=0;we<x.length;we++){let Te=y[we],fe=x[we];Te!==null&&fe!==void 0&&fe.update(Te,le,c||a)}me&&me(ie,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),m=null})),this.setAnimationLoop=function(ie){me=ie},this.dispose=function(){}}},xr=new Wt,Lv=new Fe;function Uv(i,e){function t(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function n(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,t(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,t(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,t(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===1&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,t(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===1&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,t(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,t(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(r.envMap.value=o,xr.copy(l),xr.x*=-1,xr.y*=-1,xr.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),r.envMapRotation.value.setFromMatrix4(Lv.makeRotationFromEuler(xr)),r.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap&&(r.lightMap.value=s.lightMap,r.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,r.lightMapTransform)),s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,df(i)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(r,s):s.isMeshToonMaterial?(n(r,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(r,s)):s.isMeshPhongMaterial?(n(r,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(r,s)):s.isMeshStandardMaterial?(n(r,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(r,s),s.isMeshPhysicalMaterial&&(function(c,h,d){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===1&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=d.texture,c.transmissionSamplerSize.value.set(d.width,d.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(r,s,l)):s.isMeshMatcapMaterial?(n(r,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(r,s)):s.isMeshDepthMaterial?n(r,s):s.isMeshDistanceMaterial?(n(r,s),(function(c,h){let d=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(d.matrixWorld),c.nearDistance.value=d.shadow.camera.near,c.farDistance.value=d.shadow.camera.far})(r,s)):s.isMeshNormalMaterial?n(r,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(r,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(r,s)):s.isPointsMaterial?(function(c,h,d,u){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*d,c.scale.value=.5*u,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Dv(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(d,u,p,m){let _=d.value,f=u+"_"+p;if(m[f]===void 0)return m[f]=typeof _=="number"||typeof _=="boolean"?_:_.clone(),!0;{let g=m[f];if(typeof _=="number"||typeof _=="boolean"){if(g!==_)return m[f]=_,!0}else if(g.equals(_)===!1)return g.copy(_),!0}return!1}function c(d){let u={boundary:0,storage:0};return typeof d=="number"||typeof d=="boolean"?(u.boundary=4,u.storage=4):d.isVector2?(u.boundary=8,u.storage=8):d.isVector3||d.isColor?(u.boundary=16,u.storage=12):d.isVector4?(u.boundary=16,u.storage=16):d.isMatrix3?(u.boundary=48,u.storage=48):d.isMatrix4?(u.boundary=64,u.storage=64):d.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",d),u}function h(d){let u=d.target;u.removeEventListener("dispose",h);let p=a.indexOf(u.__bindingPointIndex);a.splice(p,1),i.deleteBuffer(r[u.id]),delete r[u.id],delete s[u.id]}return{bind:function(d,u){let p=u.program;n.uniformBlockBinding(d,p)},update:function(d,u){let p=r[d.id];p===void 0&&((function(f){let g=f.uniforms,v=0,x=16;for(let A=0,T=g.length;A<T;A++){let P=Array.isArray(g[A])?g[A]:[g[A]];for(let U=0,B=P.length;U<B;U++){let V=P[U],j=Array.isArray(V.value)?V.value:[V.value];for(let G=0,J=j.length;G<J;G++){let z=c(j[G]),X=v%x,Z=X%z.boundary,se=X+Z;v+=Z,se!==0&&x-se<z.storage&&(v+=x-se),V.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=v,v+=z.storage}}}let y=v%x;y>0&&(v+=x-y),f.__size=v,f.__cache={}})(d),p=(function(f){let g=(function(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();f.__bindingPointIndex=g;let v=i.createBuffer(),x=f.__size,y=f.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,x,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,g,v),v})(d),r[d.id]=p,d.addEventListener("dispose",h));let m=u.program;n.updateUBOMapping(d,m);let _=e.render.frame;s[d.id]!==_&&((function(f){let g=r[f.id],v=f.uniforms,x=f.__cache;i.bindBuffer(i.UNIFORM_BUFFER,g);for(let y=0,A=v.length;y<A;y++){let T=Array.isArray(v[y])?v[y]:[v[y]];for(let P=0,U=T.length;P<U;P++){let B=T[P];if(l(B,y,P,x)===!0){let V=B.__offset,j=Array.isArray(B.value)?B.value:[B.value],G=0;for(let J=0;J<j.length;J++){let z=j[J],X=c(z);typeof z=="number"||typeof z=="boolean"?(B.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,V+G,B.__data)):z.isMatrix3?(B.__data[0]=z.elements[0],B.__data[1]=z.elements[1],B.__data[2]=z.elements[2],B.__data[3]=0,B.__data[4]=z.elements[3],B.__data[5]=z.elements[4],B.__data[6]=z.elements[5],B.__data[7]=0,B.__data[8]=z.elements[6],B.__data[9]=z.elements[7],B.__data[10]=z.elements[8],B.__data[11]=0):(z.toArray(B.__data,G),G+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,B.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)})(d),s[d.id]=_)},dispose:function(){for(let d in r)i.deleteBuffer(r[d]);a=[],r={},s={}}}}var Jo=class{constructor(e={}){let{canvas:t=W0(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e,p;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let m=new Uint32Array(4),_=new Int32Array(4),f=null,g=null,v=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ut,this.toneMapping=0,this.toneMappingExposure=1;let y=this,A=!1,T=0,P=0,U=null,B=-1,V=null,j=new Ct,G=new Ct,J=null,z=new xe(0),X=0,Z=t.width,se=t.height,te=1,me=null,Se=null,ie=new Ct(0,0,Z,se),le=new Ct(0,0,Z,se),we=!1,Te=new vs,fe=!1,w=!1,b=new Fe,L=new Fe,D=new M,R=new Ct,I={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},S=!1;function C(){return U===null?te:1}let H,Q,F,ee,$,re,Me,ge,Ie,Oe,Ge,We,Re,et,st,ft,Ce,je,q,de,be,Ee,ae,De,N=n;function nt(E,W){return t.getContext(E,W)}try{let E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",gt,!1),t.addEventListener("webglcontextrestored",zt,!1),t.addEventListener("webglcontextcreationerror",Mt,!1),N===null){let W="webgl2";if(N=nt(W,E),N===null)throw nt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}function Et(){H=new mg(N),H.init(),Ee=new Pv(N,H),Q=new ug(N,H,e,Ee),F=new Rv(N,H),Q.reverseDepthBuffer&&u&&F.buffers.depth.setReversed(!0),ee=new _g(N),$=new _v,re=new Cv(N,H,F,$,Q,Ee,ee),Me=new pg(y),ge=new fg(y),Ie=new ag(N),ae=new cg(N,Ie),Oe=new gg(N,Ie,ee,ae),Ge=new yg(N,Oe,Ie,ee),q=new xg(N,Q,re),ft=new dg($),We=new vv(y,Me,ge,H,Q,ae,ft),Re=new Uv(y,$),et=new yv,st=new wv(H),je=new lg(y,Me,ge,F,Ge,p,l),Ce=new Tv(y,Ge,Q),De=new Dv(N,ee,Q,F),de=new hg(N,H,ee),be=new vg(N,H,ee),ee.programs=We.programs,y.capabilities=Q,y.extensions=H,y.properties=$,y.renderLists=et,y.shadowMap=Ce,y.state=F,y.info=ee}Et();let Pe=new Gh(y,N);function gt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function zt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let E=ee.autoReset,W=Ce.enabled,K=Ce.autoUpdate,ne=Ce.needsUpdate,Y=Ce.type;Et(),ee.autoReset=E,Ce.enabled=W,Ce.autoUpdate=K,Ce.needsUpdate=ne,Ce.type=Y}function Mt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function qe(E){let W=E.target;W.removeEventListener("dispose",qe),(function(K){(function(ne){let Y=$.get(ne).programs;Y!==void 0&&(Y.forEach((function(ue){We.releaseProgram(ue)})),ne.isShaderMaterial&&We.releaseShaderCache(ne))})(K),$.remove(K)})(W)}function Tt(E,W,K){E.transparent===!0&&E.side===2&&E.forceSinglePass===!1?(E.side=1,E.needsUpdate=!0,it(E,W,K),E.side=0,E.needsUpdate=!0,it(E,W,K),E.side=2):it(E,W,K)}this.xr=Pe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let E=H.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=H.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(E){E!==void 0&&(te=E,this.setSize(Z,se,!1))},this.getSize=function(E){return E.set(Z,se)},this.setSize=function(E,W,K=!0){Pe.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(Z=E,se=W,t.width=Math.floor(E*te),t.height=Math.floor(W*te),K===!0&&(t.style.width=E+"px",t.style.height=W+"px"),this.setViewport(0,0,E,W))},this.getDrawingBufferSize=function(E){return E.set(Z*te,se*te).floor()},this.setDrawingBufferSize=function(E,W,K){Z=E,se=W,te=K,t.width=Math.floor(E*K),t.height=Math.floor(W*K),this.setViewport(0,0,E,W)},this.getCurrentViewport=function(E){return E.copy(j)},this.getViewport=function(E){return E.copy(ie)},this.setViewport=function(E,W,K,ne){E.isVector4?ie.set(E.x,E.y,E.z,E.w):ie.set(E,W,K,ne),F.viewport(j.copy(ie).multiplyScalar(te).round())},this.getScissor=function(E){return E.copy(le)},this.setScissor=function(E,W,K,ne){E.isVector4?le.set(E.x,E.y,E.z,E.w):le.set(E,W,K,ne),F.scissor(G.copy(le).multiplyScalar(te).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(E){F.setScissorTest(we=E)},this.setOpaqueSort=function(E){me=E},this.setTransparentSort=function(E){Se=E},this.getClearColor=function(E){return E.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor.apply(je,arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha.apply(je,arguments)},this.clear=function(E=!0,W=!0,K=!0){let ne=0;if(E){let Y=!1;if(U!==null){let ue=U.texture.format;Y=ue===Du||ue===Uu||ue===Lu}if(Y){let ue=U.texture.type,Ae=ue===Xi||ue===Tr||ue===ea||ue===ds||ue===Cu||ue===Pu,Ne=je.getClearColor(),ze=je.getClearAlpha(),Ye=Ne.r,Je=Ne.g,He=Ne.b;Ae?(m[0]=Ye,m[1]=Je,m[2]=He,m[3]=ze,N.clearBufferuiv(N.COLOR,0,m)):(_[0]=Ye,_[1]=Je,_[2]=He,_[3]=ze,N.clearBufferiv(N.COLOR,0,_))}else ne|=N.COLOR_BUFFER_BIT}W&&(ne|=N.DEPTH_BUFFER_BIT),K&&(ne|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",gt,!1),t.removeEventListener("webglcontextrestored",zt,!1),t.removeEventListener("webglcontextcreationerror",Mt,!1),et.dispose(),st.dispose(),$.dispose(),Me.dispose(),ge.dispose(),Ge.dispose(),ae.dispose(),De.dispose(),We.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",ke),Pe.removeEventListener("sessionend",ot),lt.stop()},this.renderBufferDirect=function(E,W,K,ne,Y,ue){W===null&&(W=I);let Ae=Y.isMesh&&Y.matrixWorld.determinant()<0,Ne=(function(ht,gn,tn,Qe,Xe){gn.isScene!==!0&&(gn=I),re.resetTextureUnits();let Vn=gn.fog,sc=Qe.isMeshStandardMaterial?gn.environment:null,Bs=U===null?y.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ss,Hr=(Qe.isMeshStandardMaterial?ge:Me).get(Qe.envMap||sc),ac=Qe.vertexColors===!0&&!!tn.attributes.color&&tn.attributes.color.itemSize===4,oc=!!tn.attributes.tangent&&(!!Qe.normalMap||Qe.anisotropy>0),lc=!!tn.morphAttributes.position,Bi=!!tn.morphAttributes.normal,o0=!!tn.morphAttributes.color,Ld=0;Qe.toneMapped&&(U!==null&&U.isXRRenderTarget!==!0||(Ld=y.toneMapping));let Ud=tn.morphAttributes.position||tn.morphAttributes.normal||tn.morphAttributes.color,l0=Ud!==void 0?Ud.length:0,at=$.get(Qe),c0=g.state.lights;if(fe===!0&&(w===!0||ht!==V)){let In=ht===V&&Qe.id===B;ft.setState(Qe,ht,In)}let Gn=!1;Qe.version===at.__version?at.needsLights&&at.lightsStateVersion!==c0.state.version||at.outputColorSpace!==Bs||Xe.isBatchedMesh&&at.batching===!1?Gn=!0:Xe.isBatchedMesh||at.batching!==!0?Xe.isBatchedMesh&&at.batchingColor===!0&&Xe.colorTexture===null||Xe.isBatchedMesh&&at.batchingColor===!1&&Xe.colorTexture!==null||Xe.isInstancedMesh&&at.instancing===!1?Gn=!0:Xe.isInstancedMesh||at.instancing!==!0?Xe.isSkinnedMesh&&at.skinning===!1?Gn=!0:Xe.isSkinnedMesh||at.skinning!==!0?Xe.isInstancedMesh&&at.instancingColor===!0&&Xe.instanceColor===null||Xe.isInstancedMesh&&at.instancingColor===!1&&Xe.instanceColor!==null||Xe.isInstancedMesh&&at.instancingMorph===!0&&Xe.morphTexture===null||Xe.isInstancedMesh&&at.instancingMorph===!1&&Xe.morphTexture!==null||at.envMap!==Hr||Qe.fog===!0&&at.fog!==Vn?Gn=!0:at.numClippingPlanes===void 0||at.numClippingPlanes===ft.numPlanes&&at.numIntersection===ft.numIntersection?(at.vertexAlphas!==ac||at.vertexTangents!==oc||at.morphTargets!==lc||at.morphNormals!==Bi||at.morphColors!==o0||at.toneMapping!==Ld||at.morphTargetsCount!==l0)&&(Gn=!0):Gn=!0:Gn=!0:Gn=!0:Gn=!0:(Gn=!0,at.__version=Qe.version);let dr=at.currentProgram;Gn===!0&&(dr=it(Qe,gn,Xe));let Dd=!1,Os=!1,cc=!1,Bt=dr.getUniforms(),Oi=at.uniforms;if(F.useProgram(dr.program)&&(Dd=!0,Os=!0,cc=!0),Qe.id!==B&&(B=Qe.id,Os=!0),Dd||V!==ht){F.buffers.depth.getReversed()?(b.copy(ht.projectionMatrix),(function(pr){let At=pr.elements;At[2]=.5*At[2]+.5*At[3],At[6]=.5*At[6]+.5*At[7],At[10]=.5*At[10]+.5*At[11],At[14]=.5*At[14]+.5*At[15]})(b),(function(pr){let At=pr.elements;At[11]===-1?(At[10]=-At[10]-1,At[14]=-At[14]):(At[10]=-At[10],At[14]=1-At[14])})(b),Bt.setValue(N,"projectionMatrix",b)):Bt.setValue(N,"projectionMatrix",ht.projectionMatrix),Bt.setValue(N,"viewMatrix",ht.matrixWorldInverse);let In=Bt.map.cameraPosition;In!==void 0&&In.setValue(N,D.setFromMatrixPosition(ht.matrixWorld)),Q.logarithmicDepthBuffer&&Bt.setValue(N,"logDepthBufFC",2/(Math.log(ht.far+1)/Math.LN2)),(Qe.isMeshPhongMaterial||Qe.isMeshToonMaterial||Qe.isMeshLambertMaterial||Qe.isMeshBasicMaterial||Qe.isMeshStandardMaterial||Qe.isShaderMaterial)&&Bt.setValue(N,"isOrthographic",ht.isOrthographicCamera===!0),V!==ht&&(V=ht,Os=!0,cc=!0)}if(Xe.isSkinnedMesh){Bt.setOptional(N,Xe,"bindMatrix"),Bt.setOptional(N,Xe,"bindMatrixInverse");let In=Xe.skeleton;In&&(In.boneTexture===null&&In.computeBoneTexture(),Bt.setValue(N,"boneTexture",In.boneTexture,re))}Xe.isBatchedMesh&&(Bt.setOptional(N,Xe,"batchingTexture"),Bt.setValue(N,"batchingTexture",Xe._matricesTexture,re),Bt.setOptional(N,Xe,"batchingIdTexture"),Bt.setValue(N,"batchingIdTexture",Xe._indirectTexture,re),Bt.setOptional(N,Xe,"batchingColorTexture"),Xe._colorsTexture!==null&&Bt.setValue(N,"batchingColorTexture",Xe._colorsTexture,re));let hc=tn.morphAttributes;hc.position===void 0&&hc.normal===void 0&&hc.color===void 0||q.update(Xe,tn,dr),(Os||at.receiveShadow!==Xe.receiveShadow)&&(at.receiveShadow=Xe.receiveShadow,Bt.setValue(N,"receiveShadow",Xe.receiveShadow)),Qe.isMeshGouraudMaterial&&Qe.envMap!==null&&(Oi.envMap.value=Hr,Oi.flipEnvMap.value=Hr.isCubeTexture&&Hr.isRenderTargetTexture===!1?-1:1),Qe.isMeshStandardMaterial&&Qe.envMap===null&&gn.environment!==null&&(Oi.envMapIntensity.value=gn.environmentIntensity),Os&&(Bt.setValue(N,"toneMappingExposure",y.toneMappingExposure),at.needsLights&&(Wn=cc,(ni=Oi).ambientLightColor.needsUpdate=Wn,ni.lightProbe.needsUpdate=Wn,ni.directionalLights.needsUpdate=Wn,ni.directionalLightShadows.needsUpdate=Wn,ni.pointLights.needsUpdate=Wn,ni.pointLightShadows.needsUpdate=Wn,ni.spotLights.needsUpdate=Wn,ni.spotLightShadows.needsUpdate=Wn,ni.rectAreaLights.needsUpdate=Wn,ni.hemisphereLights.needsUpdate=Wn),Vn&&Qe.fog===!0&&Re.refreshFogUniforms(Oi,Vn),Re.refreshMaterialUniforms(Oi,Qe,te,se,g.state.transmissionRenderTarget[ht.id]),cs.upload(N,Jt(at),Oi,re));var ni,Wn;if(Qe.isShaderMaterial&&Qe.uniformsNeedUpdate===!0&&(cs.upload(N,Jt(at),Oi,re),Qe.uniformsNeedUpdate=!1),Qe.isSpriteMaterial&&Bt.setValue(N,"center",Xe.center),Bt.setValue(N,"modelViewMatrix",Xe.modelViewMatrix),Bt.setValue(N,"normalMatrix",Xe.normalMatrix),Bt.setValue(N,"modelMatrix",Xe.matrixWorld),Qe.isShaderMaterial||Qe.isRawShaderMaterial){let In=Qe.uniformsGroups;for(let pr=0,At=In.length;pr<At;pr++){let Nd=In[pr];De.update(Nd,dr),De.bind(Nd,dr)}}return dr})(E,W,K,ne,Y);F.setMaterial(ne,Ae);let ze=K.index,Ye=1;if(ne.wireframe===!0){if(ze=Oe.getWireframeAttribute(K),ze===void 0)return;Ye=2}let Je=K.drawRange,He=K.attributes.position,rt=Je.start*Ye,Dt=(Je.start+Je.count)*Ye;ue!==null&&(rt=Math.max(rt,ue.start*Ye),Dt=Math.min(Dt,(ue.start+ue.count)*Ye)),ze!==null?(rt=Math.max(rt,0),Dt=Math.min(Dt,ze.count)):He!=null&&(rt=Math.max(rt,0),Dt=Math.min(Dt,He.count));let St=Dt-rt;if(St<0||St===1/0)return;let Gt;ae.setup(Y,ne,Ne,K,ze);let bt=de;if(ze!==null&&(Gt=Ie.get(ze),bt=be,bt.setIndex(Gt)),Y.isMesh)ne.wireframe===!0?(F.setLineWidth(ne.wireframeLinewidth*C()),bt.setMode(N.LINES)):bt.setMode(N.TRIANGLES);else if(Y.isLine){let ht=ne.linewidth;ht===void 0&&(ht=1),F.setLineWidth(ht*C()),Y.isLineSegments?bt.setMode(N.LINES):Y.isLineLoop?bt.setMode(N.LINE_LOOP):bt.setMode(N.LINE_STRIP)}else Y.isPoints?bt.setMode(N.POINTS):Y.isSprite&&bt.setMode(N.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)bt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(H.get("WEBGL_multi_draw"))bt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let ht=Y._multiDrawStarts,gn=Y._multiDrawCounts,tn=Y._multiDrawCount,Qe=ze?Ie.get(ze).bytesPerElement:1,Xe=$.get(ne).currentProgram.getUniforms();for(let Vn=0;Vn<tn;Vn++)Xe.setValue(N,"_gl_DrawID",Vn),bt.render(ht[Vn]/Qe,gn[Vn])}else if(Y.isInstancedMesh)bt.renderInstances(rt,St,Y.count);else if(K.isInstancedBufferGeometry){let ht=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,gn=Math.min(K.instanceCount,ht);bt.renderInstances(rt,St,gn)}else bt.render(rt,St)},this.compile=function(E,W,K=null){K===null&&(K=E),g=st.get(K),g.init(W),x.push(g),K.traverseVisible((function(Y){Y.isLight&&Y.layers.test(W.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))})),E!==K&&E.traverseVisible((function(Y){Y.isLight&&Y.layers.test(W.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))})),g.setupLights();let ne=new Set;return E.traverse((function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let ue=Y.material;if(ue)if(Array.isArray(ue))for(let Ae=0;Ae<ue.length;Ae++){let Ne=ue[Ae];Tt(Ne,K,Y),ne.add(Ne)}else Tt(ue,K,Y),ne.add(ue)})),x.pop(),g=null,ne},this.compileAsync=function(E,W,K=null){let ne=this.compile(E,W,K);return new Promise((Y=>{function ue(){ne.forEach((function(Ae){$.get(Ae).currentProgram.isReady()&&ne.delete(Ae)})),ne.size!==0?setTimeout(ue,10):Y(E)}H.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)}))};let mt=null;function ke(){lt.stop()}function ot(){lt.start()}let lt=new pf;function dt(E,W,K,ne){if(E.visible===!1)return;if(E.layers.test(W.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(W);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Te.intersectsSprite(E)){ne&&R.setFromMatrixPosition(E.matrixWorld).applyMatrix4(L);let ue=Ge.update(E),Ae=E.material;Ae.visible&&f.push(E,ue,Ae,K,R.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Te.intersectsObject(E))){let ue=Ge.update(E),Ae=E.material;if(ne&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),R.copy(E.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),R.copy(ue.boundingSphere.center)),R.applyMatrix4(E.matrixWorld).applyMatrix4(L)),Array.isArray(Ae)){let Ne=ue.groups;for(let ze=0,Ye=Ne.length;ze<Ye;ze++){let Je=Ne[ze],He=Ae[Je.materialIndex];He&&He.visible&&f.push(E,ue,He,K,R.z,Je)}}else Ae.visible&&f.push(E,ue,Ae,K,R.z,null)}}let Y=E.children;for(let ue=0,Ae=Y.length;ue<Ae;ue++)dt(Y[ue],W,K,ne)}function O(E,W,K,ne){let Y=E.opaque,ue=E.transmissive,Ae=E.transparent;g.setupLightsView(K),fe===!0&&ft.setGlobalState(y.clippingPlanes,K),ne&&F.viewport(j.copy(ne)),Y.length>0&&ce(Y,W,K),ue.length>0&&ce(ue,W,K),Ae.length>0&&ce(Ae,W,K),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function k(E,W,K,ne){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ne.id]===void 0&&(g.state.transmissionRenderTarget[ne.id]=new Ei(1,1,{generateMipmaps:!0,type:H.has("EXT_color_buffer_half_float")||H.has("EXT_color_buffer_float")?pa:Xi,minFilter:as,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace}));let Y=g.state.transmissionRenderTarget[ne.id],ue=ne.viewport||j;Y.setSize(ue.z,ue.w);let Ae=y.getRenderTarget();y.setRenderTarget(Y),y.getClearColor(z),X=y.getClearAlpha(),X<1&&y.setClearColor(16777215,.5),y.clear(),S&&je.render(K);let Ne=y.toneMapping;y.toneMapping=0;let ze=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),g.setupLightsView(ne),fe===!0&&ft.setGlobalState(y.clippingPlanes,ne),ce(E,K,ne),re.updateMultisampleRenderTarget(Y),re.updateRenderTargetMipmap(Y),H.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Je=0,He=W.length;Je<He;Je++){let rt=W[Je],Dt=rt.object,St=rt.geometry,Gt=rt.material,bt=rt.group;if(Gt.side===2&&Dt.layers.test(ne.layers)){let ht=Gt.side;Gt.side=1,Gt.needsUpdate=!0,ct(Dt,K,ne,St,Gt,bt),Gt.side=ht,Gt.needsUpdate=!0,Ye=!0}}Ye===!0&&(re.updateMultisampleRenderTarget(Y),re.updateRenderTargetMipmap(Y))}y.setRenderTarget(Ae),y.setClearColor(z,X),ze!==void 0&&(ne.viewport=ze),y.toneMapping=Ne}function ce(E,W,K){let ne=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,ue=E.length;Y<ue;Y++){let Ae=E[Y],Ne=Ae.object,ze=Ae.geometry,Ye=ne===null?Ae.material:ne,Je=Ae.group;Ne.layers.test(K.layers)&&ct(Ne,W,K,ze,Ye,Je)}}function ct(E,W,K,ne,Y,ue){E.onBeforeRender(y,W,K,ne,Y,ue),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Y.onBeforeRender(y,W,K,ne,E,ue),Y.transparent===!0&&Y.side===2&&Y.forceSinglePass===!1?(Y.side=1,Y.needsUpdate=!0,y.renderBufferDirect(K,W,ne,Y,E,ue),Y.side=0,Y.needsUpdate=!0,y.renderBufferDirect(K,W,ne,Y,E,ue),Y.side=2):y.renderBufferDirect(K,W,ne,Y,E,ue),E.onAfterRender(y,W,K,ne,Y,ue)}function it(E,W,K){W.isScene!==!0&&(W=I);let ne=$.get(E),Y=g.state.lights,ue=g.state.shadowsArray,Ae=Y.state.version,Ne=We.getParameters(E,Y.state,ue,W,K),ze=We.getProgramCacheKey(Ne),Ye=ne.programs;ne.environment=E.isMeshStandardMaterial?W.environment:null,ne.fog=W.fog,ne.envMap=(E.isMeshStandardMaterial?ge:Me).get(E.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&E.envMap===null?W.environmentRotation:E.envMapRotation,Ye===void 0&&(E.addEventListener("dispose",qe),Ye=new Map,ne.programs=Ye);let Je=Ye.get(ze);if(Je!==void 0){if(ne.currentProgram===Je&&ne.lightsStateVersion===Ae)return kn(E,Ne),Je}else Ne.uniforms=We.getUniforms(E),E.onBeforeCompile(Ne,y),Je=We.acquireProgram(Ne,ze),Ye.set(ze,Je),ne.uniforms=Ne.uniforms;let He=ne.uniforms;return(E.isShaderMaterial||E.isRawShaderMaterial)&&E.clipping!==!0||(He.clippingPlanes=ft.uniform),kn(E,Ne),ne.needsLights=(function(rt){return rt.isMeshLambertMaterial||rt.isMeshToonMaterial||rt.isMeshPhongMaterial||rt.isMeshStandardMaterial||rt.isShadowMaterial||rt.isShaderMaterial&&rt.lights===!0})(E),ne.lightsStateVersion=Ae,ne.needsLights&&(He.ambientLightColor.value=Y.state.ambient,He.lightProbe.value=Y.state.probe,He.directionalLights.value=Y.state.directional,He.directionalLightShadows.value=Y.state.directionalShadow,He.spotLights.value=Y.state.spot,He.spotLightShadows.value=Y.state.spotShadow,He.rectAreaLights.value=Y.state.rectArea,He.ltc_1.value=Y.state.rectAreaLTC1,He.ltc_2.value=Y.state.rectAreaLTC2,He.pointLights.value=Y.state.point,He.pointLightShadows.value=Y.state.pointShadow,He.hemisphereLights.value=Y.state.hemi,He.directionalShadowMap.value=Y.state.directionalShadowMap,He.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,He.spotShadowMap.value=Y.state.spotShadowMap,He.spotLightMatrix.value=Y.state.spotLightMatrix,He.spotLightMap.value=Y.state.spotLightMap,He.pointShadowMap.value=Y.state.pointShadowMap,He.pointShadowMatrix.value=Y.state.pointShadowMatrix),ne.currentProgram=Je,ne.uniformsList=null,Je}function Jt(E){if(E.uniformsList===null){let W=E.currentProgram.getUniforms();E.uniformsList=cs.seqWithValue(W.seq,E.uniforms)}return E.uniformsList}function kn(E,W){let K=$.get(E);K.outputColorSpace=W.outputColorSpace,K.batching=W.batching,K.batchingColor=W.batchingColor,K.instancing=W.instancing,K.instancingColor=W.instancingColor,K.instancingMorph=W.instancingMorph,K.skinning=W.skinning,K.morphTargets=W.morphTargets,K.morphNormals=W.morphNormals,K.morphColors=W.morphColors,K.morphTargetsCount=W.morphTargetsCount,K.numClippingPlanes=W.numClippingPlanes,K.numIntersection=W.numClipIntersection,K.vertexAlphas=W.vertexAlphas,K.vertexTangents=W.vertexTangents,K.toneMapping=W.toneMapping}lt.setAnimationLoop((function(E){mt&&mt(E)})),typeof self<"u"&&lt.setContext(self),this.setAnimationLoop=function(E){mt=E,Pe.setAnimationLoop(E),E===null?lt.stop():lt.start()},Pe.addEventListener("sessionstart",ke),Pe.addEventListener("sessionend",ot),this.render=function(E,W){if(W!==void 0&&W.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(A===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(W),W=Pe.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,W,U),g=st.get(E,x.length),g.init(W),x.push(g),L.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Te.setFromProjectionMatrix(L),w=this.localClippingEnabled,fe=ft.init(this.clippingPlanes,w),f=et.get(E,v.length),f.init(),v.push(f),Pe.enabled===!0&&Pe.isPresenting===!0){let ue=y.xr.getDepthSensingMesh();ue!==null&&dt(ue,W,-1/0,y.sortObjects)}dt(E,W,0,y.sortObjects),f.finish(),y.sortObjects===!0&&f.sort(me,Se),S=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,S&&je.addToRenderList(f,E),this.info.render.frame++,fe===!0&&ft.beginShadows();let K=g.state.shadowsArray;Ce.render(K,E,W),fe===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();let ne=f.opaque,Y=f.transmissive;if(g.setupLights(),W.isArrayCamera){let ue=W.cameras;if(Y.length>0)for(let Ae=0,Ne=ue.length;Ae<Ne;Ae++)k(ne,Y,E,ue[Ae]);S&&je.render(E);for(let Ae=0,Ne=ue.length;Ae<Ne;Ae++){let ze=ue[Ae];O(f,E,ze,ze.viewport)}}else Y.length>0&&k(ne,Y,E,W),S&&je.render(E),O(f,E,W);U!==null&&(re.updateMultisampleRenderTarget(U),re.updateRenderTargetMipmap(U)),E.isScene===!0&&E.onAfterRender(y,E,W),ae.resetDefaultState(),B=-1,V=null,x.pop(),x.length>0?(g=x[x.length-1],fe===!0&&ft.setGlobalState(y.clippingPlanes,g.state.camera)):g=null,v.pop(),f=v.length>0?v[v.length-1]:null},this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(E,W,K){$.get(E.texture).__webglTexture=W,$.get(E.depthTexture).__webglTexture=K;let ne=$.get(E);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=K===void 0,ne.__autoAllocateDepthBuffer||H.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,W){let K=$.get(E);K.__webglFramebuffer=W,K.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(E,W=0,K=0){U=E,T=W,P=K;let ne=!0,Y=null,ue=!1,Ae=!1;if(E){let Ne=$.get(E);if(Ne.__useDefaultFramebuffer!==void 0)F.bindFramebuffer(N.FRAMEBUFFER,null),ne=!1;else if(Ne.__webglFramebuffer===void 0)re.setupRenderTarget(E);else if(Ne.__hasExternalTextures)re.rebindTextures(E,$.get(E.texture).__webglTexture,$.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Je=E.depthTexture;if(Ne.__boundDepthTexture!==Je){if(Je!==null&&$.has(Je)&&(E.width!==Je.image.width||E.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(E)}}let ze=E.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ae=!0);let Ye=$.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Y=Array.isArray(Ye[W])?Ye[W][K]:Ye[W],ue=!0):Y=E.samples>0&&re.useMultisampledRTT(E)===!1?$.get(E).__webglMultisampledFramebuffer:Array.isArray(Ye)?Ye[K]:Ye,j.copy(E.viewport),G.copy(E.scissor),J=E.scissorTest}else j.copy(ie).multiplyScalar(te).floor(),G.copy(le).multiplyScalar(te).floor(),J=we;if(F.bindFramebuffer(N.FRAMEBUFFER,Y)&&ne&&F.drawBuffers(E,Y),F.viewport(j),F.scissor(G),F.setScissorTest(J),ue){let Ne=$.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ne.__webglTexture,K)}else if(Ae){let Ne=$.get(E.texture),ze=W||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ne.__webglTexture,K||0,ze)}B=-1},this.readRenderTargetPixels=function(E,W,K,ne,Y,ue,Ae){if(!E||!E.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=$.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ne=Ne[Ae]),Ne){F.bindFramebuffer(N.FRAMEBUFFER,Ne);try{let ze=E.texture,Ye=ze.format,Je=ze.type;if(!Q.textureFormatReadable(Ye))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Je))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");W>=0&&W<=E.width-ne&&K>=0&&K<=E.height-Y&&N.readPixels(W,K,ne,Y,Ee.convert(Ye),Ee.convert(Je),ue)}finally{let ze=U!==null?$.get(U).__webglFramebuffer:null;F.bindFramebuffer(N.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(E,W,K,ne,Y,ue,Ae){if(!E||!E.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=$.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ne=Ne[Ae]),Ne){let ze=E.texture,Ye=ze.format,Je=ze.type;if(!Q.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=E.width-ne&&K>=0&&K<=E.height-Y){F.bindFramebuffer(N.FRAMEBUFFER,Ne);let He=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,He),N.bufferData(N.PIXEL_PACK_BUFFER,ue.byteLength,N.STREAM_READ),N.readPixels(W,K,ne,Y,Ee.convert(Ye),Ee.convert(Je),0);let rt=U!==null?$.get(U).__webglFramebuffer:null;F.bindFramebuffer(N.FRAMEBUFFER,rt);let Dt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await(function(St,Gt,bt){return new Promise((function(ht,gn){setTimeout((function tn(){switch(St.clientWaitSync(Gt,St.SYNC_FLUSH_COMMANDS_BIT,0)){case St.WAIT_FAILED:gn();break;case St.TIMEOUT_EXPIRED:setTimeout(tn,bt);break;default:ht()}}),bt)}))})(N,Dt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,He),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ue),N.deleteBuffer(He),N.deleteSync(Dt),ue}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,W=null,K=0){E.isTexture!==!0&&(Js("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1]);let ne=Math.pow(2,-K),Y=Math.floor(E.image.width*ne),ue=Math.floor(E.image.height*ne),Ae=W!==null?W.x:0,Ne=W!==null?W.y:0;re.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,K,0,0,Ae,Ne,Y,ue),F.unbindTexture()},this.copyTextureToTexture=function(E,W,K=null,ne=null,Y=0){let ue,Ae,Ne,ze,Ye,Je,He,rt,Dt;E.isTexture!==!0&&(Js("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,E=arguments[1],W=arguments[2],Y=arguments[3]||0,K=null);let St=E.isCompressedTexture?E.mipmaps[Y]:E.image;K!==null?(ue=K.max.x-K.min.x,Ae=K.max.y-K.min.y,Ne=K.isBox3?K.max.z-K.min.z:1,ze=K.min.x,Ye=K.min.y,Je=K.isBox3?K.min.z:0):(ue=St.width,Ae=St.height,Ne=St.depth||1,ze=0,Ye=0,Je=0),ne!==null?(He=ne.x,rt=ne.y,Dt=ne.z):(He=0,rt=0,Dt=0);let Gt=Ee.convert(W.format),bt=Ee.convert(W.type),ht;W.isData3DTexture?(re.setTexture3D(W,0),ht=N.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(re.setTexture2DArray(W,0),ht=N.TEXTURE_2D_ARRAY):(re.setTexture2D(W,0),ht=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,W.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,W.unpackAlignment);let gn=N.getParameter(N.UNPACK_ROW_LENGTH),tn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Qe=N.getParameter(N.UNPACK_SKIP_PIXELS),Xe=N.getParameter(N.UNPACK_SKIP_ROWS),Vn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,St.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,St.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ze),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ye),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Je);let sc=E.isDataArrayTexture||E.isData3DTexture,Bs=W.isDataArrayTexture||W.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let Hr=$.get(E),ac=$.get(W),oc=$.get(Hr.__renderTarget),lc=$.get(ac.__renderTarget);F.bindFramebuffer(N.READ_FRAMEBUFFER,oc.__webglFramebuffer),F.bindFramebuffer(N.DRAW_FRAMEBUFFER,lc.__webglFramebuffer);for(let Bi=0;Bi<Ne;Bi++)sc&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,$.get(E).__webglTexture,Y,Je+Bi),E.isDepthTexture?(Bs&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,$.get(W).__webglTexture,Y,Dt+Bi),N.blitFramebuffer(ze,Ye,ue,Ae,He,rt,ue,Ae,N.DEPTH_BUFFER_BIT,N.NEAREST)):Bs?N.copyTexSubImage3D(ht,Y,He,rt,Dt+Bi,ze,Ye,ue,Ae):N.copyTexSubImage2D(ht,Y,He,rt,Dt+Bi,ze,Ye,ue,Ae);F.bindFramebuffer(N.READ_FRAMEBUFFER,null),F.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Bs?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(ht,Y,He,rt,Dt,ue,Ae,Ne,Gt,bt,St.data):W.isCompressedArrayTexture?N.compressedTexSubImage3D(ht,Y,He,rt,Dt,ue,Ae,Ne,Gt,St.data):N.texSubImage3D(ht,Y,He,rt,Dt,ue,Ae,Ne,Gt,bt,St):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Y,He,rt,ue,Ae,Gt,bt,St.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Y,He,rt,St.width,St.height,Gt,St.data):N.texSubImage2D(N.TEXTURE_2D,Y,He,rt,ue,Ae,Gt,bt,St);N.pixelStorei(N.UNPACK_ROW_LENGTH,gn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,tn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Qe),N.pixelStorei(N.UNPACK_SKIP_ROWS,Xe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Vn),Y===0&&W.generateMipmaps&&N.generateMipmap(ht),F.unbindTexture()},this.copyTextureToTexture3D=function(E,W,K=null,ne=null,Y=0){return E.isTexture!==!0&&(Js("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,ne=arguments[1]||null,E=arguments[2],W=arguments[3],Y=arguments[4]||0),Js('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,W,K,ne,Y)},this.initRenderTarget=function(E){$.get(E).__webglFramebuffer===void 0&&re.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?re.setTextureCube(E,0):E.isData3DTexture?re.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?re.setTexture2DArray(E,0):re.setTexture2D(E,0),F.unbindTexture()},this.resetState=function(){T=0,P=0,U=null,F.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}};var Ko=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new xe(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},$o=class extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wt,this.environmentIntensity=1,this.environmentRotation=new Wt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Wh=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Th,this.updateRanges=[],this.version=0,this.uuid=Mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},vn=new M,Qo=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ri(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),r=_t(r,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Rr=class extends oi{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},es,Ws=new M,ts=new M,ns=new M,is=new oe,Xs=new oe,_f=new Fe,_o=new M,js=new M,xo=new M,Pp=new oe,Hc=new oe,Ip=new oe,_s=class extends $t{constructor(e=new Rr){if(super(),this.isSprite=!0,this.type="Sprite",es===void 0){es=new tt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Wh(t,5);es.setIndex([0,1,2,0,2,3]),es.setAttribute("position",new Qo(n,3,0,!1)),es.setAttribute("uv",new Qo(n,2,3,!1))}this.geometry=es,this.material=e,this.center=new oe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ts.setFromMatrixScale(this.matrixWorld),_f.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ns.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ts.multiplyScalar(-ns.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let a=this.center;yo(_o.set(-.5,-.5,0),ns,a,ts,r,s),yo(js.set(.5,-.5,0),ns,a,ts,r,s),yo(xo.set(.5,.5,0),ns,a,ts,r,s),Pp.set(0,0),Hc.set(1,0),Ip.set(1,1);let o=e.ray.intersectTriangle(_o,js,xo,!1,Ws);if(o===null&&(yo(js.set(-.5,.5,0),ns,a,ts,r,s),Hc.set(0,1),o=e.ray.intersectTriangle(_o,xo,js,!1,Ws),o===null))return;let l=e.ray.origin.distanceTo(Ws);l<e.near||l>e.far||t.push({distance:l,point:Ws.clone(),uv:xi.getInterpolation(Ws,_o,js,xo,Pp,Hc,Ip,new oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function yo(i,e,t,n,r,s){is.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Xs.x=s*is.x-r*is.y,Xs.y=r*is.x+s*is.y):Xs.copy(is),i.copy(e),i.x+=Xs.x,i.y+=Xs.y,i.applyMatrix4(_f)}var oy=new M,ly=new M;var cy=new M,hy=new Ct,uy=new Ct,dy=new M,py=new Fe,fy=new M,my=new Kn,gy=new Fe,vy=new Ar;var Xh=class extends Mn{constructor(e=null,t=1,n=1,r,s,a,o,l,c=1003,h=1003,d,u){super(null,a,o,l,c,h,r,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},_y=new Fe,xy=new Fe;var el=class extends Ut{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},rs=new Fe,Lp=new Fe,Mo=[],Up=new Jn,Nv=new Fe,qs=new $e,Ys=new Kn,un=class extends $e{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new el(new Float32Array(16*n),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Nv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rs),Up.copy(e.boundingBox).applyMatrix4(rs),this.boundingBox.union(Up)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rs),Ys.copy(e.boundingSphere).applyMatrix4(rs),this.boundingSphere.union(Ys)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=e*(n.length+1)+1;for(let a=0;a<n.length;a++)n[a]=r[s+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(qs.geometry=this.geometry,qs.material=this.material,qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ys.copy(this.boundingSphere),Ys.applyMatrix4(n),e.ray.intersectsSphere(Ys)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,rs),Lp.multiplyMatrices(n,rs),qs.matrixWorld=Lp,qs.raycast(e,Mo);for(let a=0,o=Mo.length;a<o;a++){let l=Mo[a];l.instanceId=s,l.object=this,t.push(l)}Mo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new el(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xh(new Float32Array(r*this.count),r,this.count,Iu,si));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var jh=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,r){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=r}reset(){this.list.length=0,this.index=0}},yy=new Fe,My=new xe(1,1,1),Sy=new vs,Ey=new Jn,by=new Kn,wy=new M,Ty=new M,Ay=new M,Ry=new jh,Cy=new $e;var xs=class extends oi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},tl=new M,nl=new M,Dp=new Fe,Zs=new Ar,So=new Kn,kc=new M,Np=new M,qh=class extends $t{constructor(e=new tt,t=new xs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)tl.fromBufferAttribute(t,r-1),nl.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=tl.distanceTo(nl);e.setAttribute("lineDistance",new Ue(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(r),So.radius+=s,e.ray.intersectsSphere(So)===!1)return;Dp.copy(r).invert(),Zs.copy(e.ray).applyMatrix4(Dp);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let u=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let m=u,_=p-1;m<_;m+=c){let f=h.getX(m),g=h.getX(m+1),v=Eo(this,e,Zs,l,f,g);v&&t.push(v)}if(this.isLineLoop){let m=h.getX(p-1),_=h.getX(u),f=Eo(this,e,Zs,l,m,_);f&&t.push(f)}}else{let u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let m=u,_=p-1;m<_;m+=c){let f=Eo(this,e,Zs,l,m,m+1);f&&t.push(f)}if(this.isLineLoop){let m=Eo(this,e,Zs,l,p-1,u);m&&t.push(m)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Eo(i,e,t,n,r,s){let a=i.geometry.attributes.position;if(tl.fromBufferAttribute(a,r),nl.fromBufferAttribute(a,s),t.distanceSqToSegment(tl,nl,kc,Np)>n)return;kc.applyMatrix4(i.matrixWorld);let o=e.ray.origin.distanceTo(kc);return o<e.near||o>e.far?void 0:{distance:o,point:Np.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}var Bp=new M,Op=new M,ra=class extends qh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Bp.fromBufferAttribute(t,r),Op.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Bp.distanceTo(Op);e.setAttribute("lineDistance",new Ue(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var $n=class extends oi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Fp=new Fe,Yh=new Ar,bo=new Kn,wo=new M,li=class extends $t{constructor(e=new tt,t=new $n){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bo.copy(n.boundingSphere),bo.applyMatrix4(r),bo.radius+=s,e.ray.intersectsSphere(bo)===!1)return;Fp.copy(r).invert(),Yh.copy(e.ray).applyMatrix4(Fp);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null)for(let d=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);d<u;d++){let p=c.getX(d);wo.fromBufferAttribute(h,p),zp(wo,p,l,r,e,t,this)}else for(let d=Math.max(0,a.start),u=Math.min(h.count,a.start+a.count);d<u;d++)wo.fromBufferAttribute(h,d),zp(wo,d,l,r,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function zp(i,e,t,n,r,s,a){let o=Yh.distanceSqToPoint(i);if(o<t){let l=new M;Yh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var wt=class extends Mn{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,s=n.length,a;a=t||e*n[s-1];let o,l=0,c=s-1;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),o=n[r]-a,o<0)l=r+1;else{if(!(o>0)){c=r;break}c=r-1}if(r=c,n[r]===a)return r/(s-1);let h=n[r];return(r+(a-h)/(n[r+1]-h))/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new oe:new M);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new M,r=[],s=[],a=[],o=new M,l=new Fe;for(let p=0;p<=e;p++){let m=p/e;r[p]=this.getTangentAt(m,new M)}s[0]=new M,a[0]=new M;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),d=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(nn(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,m))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(nn(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],p*m)),a[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},sa=class extends Un{constructor(e=0,t=0,n=1,r=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new oe){let n=t,r=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(s=a?0:r),this.aClockwise!==!0||a||(s===r?s=-r:s-=r);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Zh=class extends sa{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Bu(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,d){let u=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,p*=h,r(a,o,u,p)},calc:function(s){let a=s*s;return i+e*s+t*a+n*(a*s)}}}var To=new M,Vc=new Bu,Gc=new Bu,Wc=new Bu,Jh=class extends Un{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new M){let n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=r[(c-1)%s]:(To.subVectors(r[0],r[1]).add(r[0]),o=To);let d=r[c%s],u=r[(c+1)%s];if(this.closed||c+2<s?l=r[(c+2)%s]:(To.subVectors(r[s-1],r[s-2]).add(r[s-1]),l=To),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(o.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(u),p),f=Math.pow(u.distanceToSquared(l),p);_<1e-4&&(_=1),m<1e-4&&(m=_),f<1e-4&&(f=_),Vc.initNonuniformCatmullRom(o.x,d.x,u.x,l.x,m,_,f),Gc.initNonuniformCatmullRom(o.y,d.y,u.y,l.y,m,_,f),Wc.initNonuniformCatmullRom(o.z,d.z,u.z,l.z,m,_,f)}else this.curveType==="catmullrom"&&(Vc.initCatmullRom(o.x,d.x,u.x,l.x,this.tension),Gc.initCatmullRom(o.y,d.y,u.y,l.y,this.tension),Wc.initCatmullRom(o.z,d.z,u.z,l.z,this.tension));return n.set(Vc.calc(h),Gc.calc(h),Wc.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new M().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Hp(i,e,t,n,r){let s=.5*(n-e),a=.5*(r-t),o=i*i;return(2*t-2*n+s+a)*(i*o)+(-3*t+3*n-2*s-a)*o+s*i+t}function $s(i,e,t,n){return(function(r,s){let a=1-r;return a*a*s})(i,e)+(function(r,s){return 2*(1-r)*r*s})(i,t)+(function(r,s){return r*r*s})(i,n)}function Qs(i,e,t,n,r){return(function(s,a){let o=1-s;return o*o*o*a})(i,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(i,t)+(function(s,a){return 3*(1-s)*s*s*a})(i,n)+(function(s,a){return s*s*s*a})(i,r)}var il=class extends Un{constructor(e=new oe,t=new oe,n=new oe,r=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new oe){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Qs(e,r.x,s.x,a.x,o.x),Qs(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Kh=class extends Un{constructor(e=new M,t=new M,n=new M,r=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new M){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Qs(e,r.x,s.x,a.x,o.x),Qs(e,r.y,s.y,a.y,o.y),Qs(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},rl=class extends Un{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$h=class extends Un{constructor(e=new M,t=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new M){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sl=class extends Un{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set($s(e,r.x,s.x,a.x),$s(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},al=class extends Un{constructor(e=new M,t=new M,n=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new M){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set($s(e,r.x,s.x,a.x),$s(e,r.y,s.y,a.y),$s(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ol=class extends Un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],d=r[a>r.length-3?r.length-1:a+2];return n.set(Hp(o,l.x,c.x,h.x,d.x),Hp(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new oe().fromArray(r))}return this}},ll=Object.freeze({__proto__:null,ArcCurve:Zh,CatmullRomCurve3:Jh,CubicBezierCurve:il,CubicBezierCurve3:Kh,EllipseCurve:sa,LineCurve:rl,LineCurve3:$h,QuadraticBezierCurve:sl,QuadraticBezierCurve3:al,SplineCurve:ol}),Qh=class extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ll[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new ll[r.type]().fromJSON(r))}return this}},aa=class extends Qh{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new rl(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new sl(this.currentPoint.clone(),new oe(e,t),new oe(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){let o=new il(this.currentPoint.clone(),new oe(e,t),new oe(n,r),new oe(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ol(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,r,s,a,o,l),this}absellipse(e,t,n,r,s,a,o,l){let c=new sa(e,t,n,r,s,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ys=class i extends tt{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],t=12,n=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=nn(r,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,d=new M,u=new oe,p=new M,m=new M,_=new M,f=0,g=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:f=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=1*g,p.y=-f,p.z=0*g,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:f=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=1*g,p.y=-f,p.z=0*g,m.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(m)}for(let v=0;v<=t;v++){let x=n+v*h*r,y=Math.sin(x),A=Math.cos(x);for(let T=0;T<=e.length-1;T++){d.x=e[T].x*y,d.y=e[T].y,d.z=e[T].x*A,a.push(d.x,d.y,d.z),u.x=v/t,u.y=T/(e.length-1),o.push(u.x,u.y);let P=l[3*T+0]*y,U=l[3*T+1],B=l[3*T+0]*A;c.push(P,U,B)}}for(let v=0;v<t;v++)for(let x=0;x<e.length-1;x++){let y=x+v*e.length,A=y,T=y+e.length,P=y+e.length+1,U=y+1;s.push(A,T,U),s.push(P,U,T)}this.setIndex(s),this.setAttribute("position",new Ue(a,3)),this.setAttribute("uv",new Ue(o,2)),this.setAttribute("normal",new Ue(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},eu=class i extends ys{constructor(e=1,t=1,n=4,r=8){let s=new aa;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},tu=class i extends tt{constructor(e=1,t=32,n=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new M,h=new oe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let p=n+d/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Ue(a,3)),this.setAttribute("normal",new Ue(o,3)),this.setAttribute("uv",new Ue(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},qi=class i extends tt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],d=[],u=[],p=[],m=0,_=[],f=n/2,g=0;function v(x){let y=m,A=new oe,T=new M,P=0,U=x===!0?e:t,B=x===!0?1:-1;for(let j=1;j<=r;j++)d.push(0,f*B,0),u.push(0,B,0),p.push(.5,.5),m++;let V=m;for(let j=0;j<=r;j++){let G=j/r*l+o,J=Math.cos(G),z=Math.sin(G);T.x=U*z,T.y=f*B,T.z=U*J,d.push(T.x,T.y,T.z),u.push(0,B,0),A.x=.5*J+.5,A.y=.5*z*B+.5,p.push(A.x,A.y),m++}for(let j=0;j<r;j++){let G=y+j,J=V+j;x===!0?h.push(J,J+1,G):h.push(J+1,J,G),P+=3}c.addGroup(g,P,x===!0?1:2),g+=P}(function(){let x=new M,y=new M,A=0,T=(t-e)/n;for(let P=0;P<=s;P++){let U=[],B=P/s,V=B*(t-e)+e;for(let j=0;j<=r;j++){let G=j/r,J=G*l+o,z=Math.sin(J),X=Math.cos(J);y.x=V*z,y.y=-B*n+f,y.z=V*X,d.push(y.x,y.y,y.z),x.set(z,T,X).normalize(),u.push(x.x,x.y,x.z),p.push(G,1-B),U.push(m++)}_.push(U)}for(let P=0;P<r;P++)for(let U=0;U<s;U++){let B=_[U][P],V=_[U+1][P],j=_[U+1][P+1],G=_[U][P+1];(e>0||U!==0)&&(h.push(B,V,G),A+=3),(t>0||U!==s-1)&&(h.push(V,j,G),A+=3)}c.addGroup(g,A,0),g+=A})(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ue(d,3)),this.setAttribute("normal",new Ue(u,3)),this.setAttribute("uv",new Ue(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},nu=class i extends qi{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Cr=class i extends tt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],a=[];function o(u,p,m,_){let f=_+1,g=[];for(let v=0;v<=f;v++){g[v]=[];let x=u.clone().lerp(m,v/f),y=p.clone().lerp(m,v/f),A=f-v;for(let T=0;T<=A;T++)g[v][T]=T===0&&v===f?x:x.clone().lerp(y,T/A)}for(let v=0;v<f;v++)for(let x=0;x<2*(f-v)-1;x++){let y=Math.floor(x/2);x%2==0?(l(g[v][y+1]),l(g[v+1][y]),l(g[v][y])):(l(g[v][y+1]),l(g[v+1][y+1]),l(g[v+1][y]))}}function l(u){s.push(u.x,u.y,u.z)}function c(u,p){let m=3*u;p.x=e[m+0],p.y=e[m+1],p.z=e[m+2]}function h(u,p,m,_){_<0&&u.x===1&&(a[p]=u.x-1),m.x===0&&m.z===0&&(a[p]=_/2/Math.PI+.5)}function d(u){return Math.atan2(u.z,-u.x)}(function(u){let p=new M,m=new M,_=new M;for(let f=0;f<t.length;f+=3)c(t[f+0],p),c(t[f+1],m),c(t[f+2],_),o(p,m,_,u)})(r),(function(u){let p=new M;for(let m=0;m<s.length;m+=3)p.x=s[m+0],p.y=s[m+1],p.z=s[m+2],p.normalize().multiplyScalar(u),s[m+0]=p.x,s[m+1]=p.y,s[m+2]=p.z})(n),(function(){let u=new M;for(let m=0;m<s.length;m+=3){u.x=s[m+0],u.y=s[m+1],u.z=s[m+2];let _=d(u)/2/Math.PI+.5,f=(p=u,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(_,1-f)}var p;(function(){let m=new M,_=new M,f=new M,g=new M,v=new oe,x=new oe,y=new oe;for(let A=0,T=0;A<s.length;A+=9,T+=6){m.set(s[A+0],s[A+1],s[A+2]),_.set(s[A+3],s[A+4],s[A+5]),f.set(s[A+6],s[A+7],s[A+8]),v.set(a[T+0],a[T+1]),x.set(a[T+2],a[T+3]),y.set(a[T+4],a[T+5]),g.copy(m).add(_).add(f).divideScalar(3);let P=d(g);h(v,T+0,m,P),h(x,T+2,_,P),h(y,T+4,f,P)}})(),(function(){for(let m=0;m<a.length;m+=6){let _=a[m+0],f=a[m+2],g=a[m+4],v=Math.max(_,f,g),x=Math.min(_,f,g);v>.9&&x<.1&&(_<.2&&(a[m+0]+=1),f<.2&&(a[m+2]+=1),g<.2&&(a[m+4]+=1))}})()})(),this.setAttribute("position",new Ue(s,3)),this.setAttribute("normal",new Ue(s.slice(),3)),this.setAttribute("uv",new Ue(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},iu=class i extends Cr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ao=new M,Ro=new M,Xc=new M,Co=new xi,ru=class extends tt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(Fo*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},p=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:_,b:f,c:g}=Co;if(_.fromBufferAttribute(o,c[0]),f.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),Co.getNormal(Xc),d[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,d[1]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,d[2]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,d[0]!==d[1]&&d[1]!==d[2]&&d[2]!==d[0])for(let v=0;v<3;v++){let x=(v+1)%3,y=d[v],A=d[x],T=Co[h[v]],P=Co[h[x]],U=`${y}_${A}`,B=`${A}_${y}`;B in u&&u[B]?(Xc.dot(u[B].normal)<=s&&(p.push(T.x,T.y,T.z),p.push(P.x,P.y,P.z)),u[B]=null):U in u||(u[U]={index0:c[v],index1:c[x],normal:Xc.clone()})}}for(let m in u)if(u[m]){let{index0:_,index1:f}=u[m];Ao.fromBufferAttribute(o,_),Ro.fromBufferAttribute(o,f),p.push(Ao.x,Ao.y,Ao.z),p.push(Ro.x,Ro.y,Ro.z)}this.setAttribute("position",new Ue(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},cl=class extends aa{constructor(e){super(e),this.uuid=Mi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new aa().fromJSON(r))}return this}},Bv=function(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=kp(i,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,d,u,p;if(n&&(s=(function(m,_,f,g){let v=[],x,y,A,T,P;for(x=0,y=_.length;x<y;x++)A=_[x]*g,T=x<y-1?_[x+1]*g:m.length,P=kp(m,A,T,g,!1),P===P.next&&(P.steiner=!0),v.push(Wv(P));for(v.sort(kv),x=0;x<v.length;x++)f=Vv(v[x],f);return f})(i,e,s,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let m=t;m<r;m+=t)d=i[m],u=i[m+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return oa(s,a,t,o,l,p,0),a};function kp(i,e,t,n,r){let s,a;if(r===(function(o,l,c,h){let d=0;for(let u=l,p=c-h;u<c;u+=h)d+=(o[p]-o[u])*(o[u+1]+o[p+1]),p=u;return d})(i,e,t,n)>0)for(s=e;s<t;s+=n)a=Vp(s,i[s],i[s+1],a);else for(s=t-n;s>=e;s-=n)a=Vp(s,i[s],i[s+1],a);return a&&gl(a,a.next)&&(ca(a),a=a.next),a}function Pr(i,e){if(!i)return i;e||(e=i);let t,n=i;do if(t=!1,n.steiner||!gl(n,n.next)&&Lt(n.prev,n,n.next)!==0)n=n.next;else{if(ca(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function oa(i,e,t,n,r,s,a){if(!i)return;!a&&s&&(function(h,d,u,p){let m=h;do m.z===0&&(m.z=su(m.x,m.y,d,u,p)),m.prevZ=m.prev,m.nextZ=m.next,m=m.next;while(m!==h);m.prevZ.nextZ=null,m.prevZ=null,(function(_){let f,g,v,x,y,A,T,P,U=1;do{for(g=_,_=null,y=null,A=0;g;){for(A++,v=g,T=0,f=0;f<U&&(T++,v=v.nextZ,v);f++);for(P=U;T>0||P>0&&v;)T!==0&&(P===0||!v||g.z<=v.z)?(x=g,g=g.nextZ,T--):(x=v,v=v.nextZ,P--),y?y.nextZ=x:_=x,x.prevZ=y,y=x;g=v}y.nextZ=null,U*=2}while(A>1)})(m)})(i,n,r,s);let o,l,c=i;for(;i.prev!==i.next;)if(o=i.prev,l=i.next,s?Fv(i,n,r,s):Ov(i))e.push(o.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),ca(i),i=l.next,c=l.next;else if((i=l)===c){a?a===1?oa(i=zv(Pr(i),e,t),e,t,n,r,s,2):a===2&&Hv(i,e,t,n,r,s):oa(Pr(i),e,t,n,r,s,1);break}}function Ov(i){let e=i.prev,t=i,n=i.next;if(Lt(e,t,n)>=0)return!1;let r=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=r<s?r<a?r:a:s<a?s:a,d=o<l?o<c?o:c:l<c?l:c,u=r>s?r>a?r:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c,m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=p&&os(r,o,s,l,a,c,m.x,m.y)&&Lt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Fv(i,e,t,n){let r=i.prev,s=i,a=i.next;if(Lt(r,s,a)>=0)return!1;let o=r.x,l=s.x,c=a.x,h=r.y,d=s.y,u=a.y,p=o<l?o<c?o:c:l<c?l:c,m=h<d?h<u?h:u:d<u?d:u,_=o>l?o>c?o:c:l>c?l:c,f=h>d?h>u?h:u:d>u?d:u,g=su(p,m,e,t,n),v=su(_,f,e,t,n),x=i.prevZ,y=i.nextZ;for(;x&&x.z>=g&&y&&y.z<=v;){if(x.x>=p&&x.x<=_&&x.y>=m&&x.y<=f&&x!==r&&x!==a&&os(o,h,l,d,c,u,x.x,x.y)&&Lt(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=p&&y.x<=_&&y.y>=m&&y.y<=f&&y!==r&&y!==a&&os(o,h,l,d,c,u,y.x,y.y)&&Lt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=g;){if(x.x>=p&&x.x<=_&&x.y>=m&&x.y<=f&&x!==r&&x!==a&&os(o,h,l,d,c,u,x.x,x.y)&&Lt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=v;){if(y.x>=p&&y.x<=_&&y.y>=m&&y.y<=f&&y!==r&&y!==a&&os(o,h,l,d,c,u,y.x,y.y)&&Lt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function zv(i,e,t){let n=i;do{let r=n.prev,s=n.next.next;!gl(r,s)&&xf(r,n,n.next,s)&&la(r,s)&&la(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),ca(n),ca(n.next),n=i=s),n=n.next}while(n!==i);return Pr(n)}function Hv(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Xv(a,o)){let l=yf(a,o);return a=Pr(a,a.next),l=Pr(l,l.next),oa(a,e,t,n,r,s,0),void oa(l,e,t,n,r,s,0)}o=o.next}a=a.next}while(a!==i)}function kv(i,e){return i.x-e.x}function Vv(i,e){let t=(function(r,s){let a,o=s,l=-1/0,c=r.x,h=r.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let f=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(f<=c&&f>l&&(l=f,a=o.x<o.next.x?o:o.next,f===c))return a}o=o.next}while(o!==s);if(!a)return null;let d=a,u=a.x,p=a.y,m,_=1/0;o=a;do c>=o.x&&o.x>=u&&c!==o.x&&os(h<p?c:l,h,u,p,h<p?l:c,h,o.x,o.y)&&(m=Math.abs(h-o.y)/(c-o.x),la(o,r)&&(m<_||m===_&&(o.x>a.x||o.x===a.x&&Gv(a,o)))&&(a=o,_=m)),o=o.next;while(o!==d);return a})(i,e);if(!t)return e;let n=yf(t,i);return Pr(n,n.next),Pr(t,t.next)}function Gv(i,e){return Lt(i.prev,i,e.prev)<0&&Lt(e.next,i,i.next)<0}function su(i,e,t,n,r){return(i=1431655765&((i=858993459&((i=252645135&((i=16711935&((i=(i-t)*r|0)|i<<8))|i<<4))|i<<2))|i<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Wv(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function os(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function Xv(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!(function(t,n){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==n.i&&r.next.i!==n.i&&xf(r,r.next,t,n))return!0;r=r.next}while(r!==t);return!1})(i,e)&&(la(i,e)&&la(e,i)&&(function(t,n){let r=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&a<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==t);return s})(i,e)&&(Lt(i.prev,i,e.prev)||Lt(i,e.prev,e))||gl(i,e)&&Lt(i.prev,i,i.next)>0&&Lt(e.prev,e,e.next)>0)}function Lt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function gl(i,e){return i.x===e.x&&i.y===e.y}function xf(i,e,t,n){let r=Io(Lt(i,e,t)),s=Io(Lt(i,e,n)),a=Io(Lt(t,n,i)),o=Io(Lt(t,n,e));return r!==s&&a!==o||!(r!==0||!Po(i,t,e))||!(s!==0||!Po(i,n,e))||!(a!==0||!Po(t,i,n))||!(o!==0||!Po(t,e,n))}function Po(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Io(i){return i>0?1:i<0?-1:0}function la(i,e){return Lt(i.prev,i,i.next)<0?Lt(i,e,i.next)>=0&&Lt(i,i.prev,e)>=0:Lt(i,e,i.prev)<0||Lt(i,i.next,e)<0}function yf(i,e){let t=new au(i.i,i.x,i.y),n=new au(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Vp(i,e,t,n){let r=new au(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function ca(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function au(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var Wi=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return .5*n}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];Gp(e),Wp(n,e);let a=e.length;t.forEach(Gp);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Wp(n,t[l]);let o=Bv(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Gp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Wp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ou=class i extends tt{constructor(e=new cl([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:jv,x,y,A,T,P,U=!1;g&&(x=g.getSpacedPoints(h),U=!0,u=!1,y=g.computeFrenetFrames(h,!1),A=new M,T=new M,P=new M),u||(f=0,p=0,m=0,_=0);let B=o.extractPoints(c),V=B.shape,j=B.holes;if(!Wi.isClockWise(V)){V=V.reverse();for(let D=0,R=j.length;D<R;D++){let I=j[D];Wi.isClockWise(I)&&(j[D]=I.reverse())}}let G=Wi.triangulateShape(V,j),J=V;for(let D=0,R=j.length;D<R;D++){let I=j[D];V=V.concat(I)}function z(D,R,I){return R||console.error("THREE.ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(R,I)}let X=V.length,Z=G.length;function se(D,R,I){let S,C,H,Q=D.x-R.x,F=D.y-R.y,ee=I.x-D.x,$=I.y-D.y,re=Q*Q+F*F,Me=Q*$-F*ee;if(Math.abs(Me)>Number.EPSILON){let ge=Math.sqrt(re),Ie=Math.sqrt(ee*ee+$*$),Oe=R.x-F/ge,Ge=R.y+Q/ge,We=((I.x-$/Ie-Oe)*$-(I.y+ee/Ie-Ge)*ee)/(Q*$-F*ee);S=Oe+Q*We-D.x,C=Ge+F*We-D.y;let Re=S*S+C*C;if(Re<=2)return new oe(S,C);H=Math.sqrt(Re/2)}else{let ge=!1;Q>Number.EPSILON?ee>Number.EPSILON&&(ge=!0):Q<-Number.EPSILON?ee<-Number.EPSILON&&(ge=!0):Math.sign(F)===Math.sign($)&&(ge=!0),ge?(S=-F,C=Q,H=Math.sqrt(re)):(S=Q,C=F,H=Math.sqrt(re/2))}return new oe(S/H,C/H)}let te=[];for(let D=0,R=J.length,I=R-1,S=D+1;D<R;D++,I++,S++)I===R&&(I=0),S===R&&(S=0),te[D]=se(J[D],J[I],J[S]);let me=[],Se,ie=te.concat();for(let D=0,R=j.length;D<R;D++){let I=j[D];Se=[];for(let S=0,C=I.length,H=C-1,Q=S+1;S<C;S++,H++,Q++)H===C&&(H=0),Q===C&&(Q=0),Se[S]=se(I[S],I[H],I[Q]);me.push(Se),ie=ie.concat(Se)}for(let D=0;D<f;D++){let R=D/f,I=p*Math.cos(R*Math.PI/2),S=m*Math.sin(R*Math.PI/2)+_;for(let C=0,H=J.length;C<H;C++){let Q=z(J[C],te[C],S);Te(Q.x,Q.y,-I)}for(let C=0,H=j.length;C<H;C++){let Q=j[C];Se=me[C];for(let F=0,ee=Q.length;F<ee;F++){let $=z(Q[F],Se[F],S);Te($.x,$.y,-I)}}}let le=m+_;for(let D=0;D<X;D++){let R=u?z(V[D],ie[D],le):V[D];U?(T.copy(y.normals[0]).multiplyScalar(R.x),A.copy(y.binormals[0]).multiplyScalar(R.y),P.copy(x[0]).add(T).add(A),Te(P.x,P.y,P.z)):Te(R.x,R.y,0)}for(let D=1;D<=h;D++)for(let R=0;R<X;R++){let I=u?z(V[R],ie[R],le):V[R];U?(T.copy(y.normals[D]).multiplyScalar(I.x),A.copy(y.binormals[D]).multiplyScalar(I.y),P.copy(x[D]).add(T).add(A),Te(P.x,P.y,P.z)):Te(I.x,I.y,d/h*D)}for(let D=f-1;D>=0;D--){let R=D/f,I=p*Math.cos(R*Math.PI/2),S=m*Math.sin(R*Math.PI/2)+_;for(let C=0,H=J.length;C<H;C++){let Q=z(J[C],te[C],S);Te(Q.x,Q.y,d+I)}for(let C=0,H=j.length;C<H;C++){let Q=j[C];Se=me[C];for(let F=0,ee=Q.length;F<ee;F++){let $=z(Q[F],Se[F],S);U?Te($.x,$.y+x[h-1].y,x[h-1].x+I):Te($.x,$.y,d+I)}}}function we(D,R){let I=D.length;for(;--I>=0;){let S=I,C=I-1;C<0&&(C=D.length-1);for(let H=0,Q=h+2*f;H<Q;H++){let F=X*H,ee=X*(H+1);w(R+S+F,R+C+F,R+C+ee,R+S+ee)}}}function Te(D,R,I){l.push(D),l.push(R),l.push(I)}function fe(D,R,I){b(D),b(R),b(I);let S=r.length/3,C=v.generateTopUV(n,r,S-3,S-2,S-1);L(C[0]),L(C[1]),L(C[2])}function w(D,R,I,S){b(D),b(R),b(S),b(R),b(I),b(S);let C=r.length/3,H=v.generateSideWallUV(n,r,C-6,C-3,C-2,C-1);L(H[0]),L(H[1]),L(H[3]),L(H[1]),L(H[2]),L(H[3])}function b(D){r.push(l[3*D+0]),r.push(l[3*D+1]),r.push(l[3*D+2])}function L(D){s.push(D.x),s.push(D.y)}(function(){let D=r.length/3;if(u){let R=0,I=X*R;for(let S=0;S<Z;S++){let C=G[S];fe(C[2]+I,C[1]+I,C[0]+I)}R=h+2*f,I=X*R;for(let S=0;S<Z;S++){let C=G[S];fe(C[0]+I,C[1]+I,C[2]+I)}}else{for(let R=0;R<Z;R++){let I=G[R];fe(I[2],I[1],I[0])}for(let R=0;R<Z;R++){let I=G[R];fe(I[0]+X*h,I[1]+X*h,I[2]+X*h)}}n.addGroup(D,r.length/3-D,0)})(),(function(){let D=r.length/3,R=0;we(J,R),R+=J.length;for(let I=0,S=j.length;I<S;I++){let C=j[I];we(C,R),R+=C.length}n.addGroup(D,r.length/3-D,1)})()}this.setAttribute("position",new Ue(r,3)),this.setAttribute("uv",new Ue(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,r){if(r.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];r.shapes.push(o.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},n),n.extrudePath!==void 0&&(r.options.extrudePath=n.extrudePath.toJSON()),r})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new ll[r.type]().fromJSON(r)),new i(n,e.options)}},jv={generateTopUV:function(i,e,t,n,r){let s=e[3*t],a=e[3*t+1],o=e[3*n],l=e[3*n+1],c=e[3*r],h=e[3*r+1];return[new oe(s,a),new oe(o,l),new oe(c,h)]},generateSideWallUV:function(i,e,t,n,r,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*n],h=e[3*n+1],d=e[3*n+2],u=e[3*r],p=e[3*r+1],m=e[3*r+2],_=e[3*s],f=e[3*s+1],g=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new oe(a,1-l),new oe(c,1-d),new oe(u,1-m),new oe(_,1-g)]:[new oe(o,1-l),new oe(h,1-d),new oe(p,1-m),new oe(f,1-g)]}},Yi=class i extends Cr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},lu=class i extends Cr{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},cu=class i extends tt{constructor(e=.5,t=1,n=32,r=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],l=[],c=[],h=[],d=e,u=(t-e)/(r=Math.max(1,r)),p=new M,m=new oe;for(let _=0;_<=r;_++){for(let f=0;f<=n;f++){let g=s+f/n*a;p.x=d*Math.cos(g),p.y=d*Math.sin(g),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,h.push(m.x,m.y)}d+=u}for(let _=0;_<r;_++){let f=_*(n+1);for(let g=0;g<n;g++){let v=g+f,x=v,y=v+n+1,A=v+n+2,T=v+1;o.push(x,y,T),o.push(y,A,T)}}this.setIndex(o),this.setAttribute("position",new Ue(l,3)),this.setAttribute("normal",new Ue(c,3)),this.setAttribute("uv",new Ue(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},hu=class i extends tt{constructor(e=new cl([new oe(0,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],r=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let d=r.length/3,u=h.extractPoints(t),p=u.shape,m=u.holes;Wi.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,g=m.length;f<g;f++){let v=m[f];Wi.isClockWise(v)===!0&&(m[f]=v.reverse())}let _=Wi.triangulateShape(p,m);for(let f=0,g=m.length;f<g;f++){let v=m[f];p=p.concat(v)}for(let f=0,g=p.length;f<g;f++){let v=p[f];r.push(v.x,v.y,0),s.push(0,0,1),a.push(v.x,v.y)}for(let f=0,g=_.length;f<g;f++){let v=_[f],x=v[0]+d,y=v[1]+d,A=v[2]+d;n.push(x,y,A),l+=3}}this.setIndex(n),this.setAttribute("position",new Ue(r,3)),this.setAttribute("normal",new Ue(s,3)),this.setAttribute("uv",new Ue(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let a=t[r];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];n.push(a)}return new i(n,e.curveSegments)}},ci=class i extends tt{constructor(e=1,t=32,n=16,r=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new M,u=new M,p=[],m=[],_=[],f=[];for(let g=0;g<=n;g++){let v=[],x=g/n,y=0;g===0&&a===0?y=.5/t:g===n&&l===Math.PI&&(y=-.5/t);for(let A=0;A<=t;A++){let T=A/t;d.x=-e*Math.cos(r+T*s)*Math.sin(a+x*o),d.y=e*Math.cos(a+x*o),d.z=e*Math.sin(r+T*s)*Math.sin(a+x*o),m.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),f.push(T+y,1-x),v.push(c++)}h.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){let x=h[g][v+1],y=h[g][v],A=h[g+1][v],T=h[g+1][v+1];(g!==0||a>0)&&p.push(x,y,T),(g!==n-1||l<Math.PI)&&p.push(y,A,T)}this.setIndex(p),this.setAttribute("position",new Ue(m,3)),this.setAttribute("normal",new Ue(_,3)),this.setAttribute("uv",new Ue(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},uu=class i extends Cr{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ha=class i extends tt{constructor(e=1,t=.4,n=12,r=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],l=[],c=[],h=new M,d=new M,u=new M;for(let p=0;p<=n;p++)for(let m=0;m<=r;m++){let _=m/r*s,f=p/n*Math.PI*2;d.x=(e+t*Math.cos(f))*Math.cos(_),d.y=(e+t*Math.cos(f))*Math.sin(_),d.z=t*Math.sin(f),o.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(m/r),c.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=r;m++){let _=(r+1)*p+m-1,f=(r+1)*(p-1)+m-1,g=(r+1)*(p-1)+m,v=(r+1)*p+m;a.push(_,f,v),a.push(f,g,v)}this.setIndex(a),this.setAttribute("position",new Ue(o,3)),this.setAttribute("normal",new Ue(l,3)),this.setAttribute("uv",new Ue(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},du=class i extends tt{constructor(e=1,t=.4,n=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:a},n=Math.floor(n),r=Math.floor(r);let o=[],l=[],c=[],h=[],d=new M,u=new M,p=new M,m=new M,_=new M,f=new M,g=new M;for(let x=0;x<=n;++x){let y=x/n*s*Math.PI*2;v(y,s,a,e,p),v(y+.01,s,a,e,m),f.subVectors(m,p),g.addVectors(m,p),_.crossVectors(f,g),g.crossVectors(_,f),_.normalize(),g.normalize();for(let A=0;A<=r;++A){let T=A/r*Math.PI*2,P=-t*Math.cos(T),U=t*Math.sin(T);d.x=p.x+(P*g.x+U*_.x),d.y=p.y+(P*g.y+U*_.y),d.z=p.z+(P*g.z+U*_.z),l.push(d.x,d.y,d.z),u.subVectors(d,p).normalize(),c.push(u.x,u.y,u.z),h.push(x/n),h.push(A/r)}}for(let x=1;x<=n;x++)for(let y=1;y<=r;y++){let A=(r+1)*(x-1)+(y-1),T=(r+1)*x+(y-1),P=(r+1)*x+y,U=(r+1)*(x-1)+y;o.push(A,T,U),o.push(T,P,U)}function v(x,y,A,T,P){let U=Math.cos(x),B=Math.sin(x),V=A/y*x,j=Math.cos(V);P.x=T*(2+j)*.5*U,P.y=T*(2+j)*B*.5,P.z=T*Math.sin(V)*.5}this.setIndex(o),this.setAttribute("position",new Ue(l,3)),this.setAttribute("normal",new Ue(c,3)),this.setAttribute("uv",new Ue(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},pu=class i extends tt{constructor(e=new al(new M(-1,-1,0),new M(-1,1,0),new M(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new M,l=new M,c=new oe,h=new M,d=[],u=[],p=[],m=[];function _(f){h=e.getPointAt(f/t,h);let g=a.normals[f],v=a.binormals[f];for(let x=0;x<=r;x++){let y=x/r*Math.PI*2,A=Math.sin(y),T=-Math.cos(y);l.x=T*g.x+A*v.x,l.y=T*g.y+A*v.y,l.z=T*g.z+A*v.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}(function(){for(let f=0;f<t;f++)_(f);_(s===!1?t:0),(function(){for(let f=0;f<=t;f++)for(let g=0;g<=r;g++)c.x=f/t,c.y=g/r,p.push(c.x,c.y)})(),(function(){for(let f=1;f<=t;f++)for(let g=1;g<=r;g++){let v=(r+1)*(f-1)+(g-1),x=(r+1)*f+(g-1),y=(r+1)*f+g,A=(r+1)*(f-1)+g;m.push(v,x,A),m.push(x,y,A)}})()})(),this.setIndex(m),this.setAttribute("position",new Ue(d,3)),this.setAttribute("normal",new Ue(u,3)),this.setAttribute("uv",new Ue(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new ll[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},fu=class extends tt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,r=new M,s=new M;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let d=l[c],u=d.start;for(let p=u,m=u+d.count;p<m;p+=3)for(let _=0;_<3;_++){let f=o.getX(p+_),g=o.getX(p+(_+1)%3);r.fromBufferAttribute(a,f),s.fromBufferAttribute(a,g),Xp(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,d=3*o+(c+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,d),Xp(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ue(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Xp(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)!==!0&&t.has(r)!==!0&&(t.add(n),t.add(r),!0)}var Py=Object.freeze({__proto__:null,BoxGeometry:ms,CapsuleGeometry:eu,CircleGeometry:tu,ConeGeometry:nu,CylinderGeometry:qi,DodecahedronGeometry:iu,EdgesGeometry:ru,ExtrudeGeometry:ou,IcosahedronGeometry:Yi,LatheGeometry:ys,OctahedronGeometry:lu,PlaneGeometry:Xt,PolyhedronGeometry:Cr,RingGeometry:cu,ShapeGeometry:hu,SphereGeometry:ci,TetrahedronGeometry:uu,TorusGeometry:ha,TorusKnotGeometry:du,TubeGeometry:pu,WireframeGeometry:fu});var xt=class extends oi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Lo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function qv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ms=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];t:{e:{let a;n:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break n}if(e>=s)break t;{let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0}}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},mu=class extends Ms{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bd,endingEnd:Bd}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Od:s=e,o=2*t-n;break;case Fd:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Od:a=e,l=2*n-t;break;case Fd:a=1,l=n+r[1]-r[0];break;default:a=e-1,l=t}let c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,m=(n-t)/(r-t),_=m*m,f=_*m,g=-u*f+2*u*_-u*m,v=(1+u)*f+(-1.5-2*u)*_+(-.5+u)*m+1,x=(-1-p)*f+(1.5+p)*_+.5*m,y=p*f-p*_;for(let A=0;A!==o;++A)s[A]=g*a[h+A]+v*a[c+A]+x*a[l+A]+y*a[d+A];return s}},gu=class extends Ms{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(r-t),d=1-h;for(let u=0;u!==o;++u)s[u]=a[c+u]*d+a[l+u]*h;return s}},vu=class extends Ms{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Zn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Lo(t,this.TimeBufferType),this.values=Lo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Lo(e.times,Array),values:Lo(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new vu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new mu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case zo:t=this.InterpolantFactoryMethodDiscrete;break;case wh:t=this.InterpolantFactoryMethodLinear;break;case dc:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zo;case this.InterpolantFactoryMethodLinear:return wh;case this.InterpolantFactoryMethodSmooth:return dc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&qv(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===dc,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(r)l=!0;else{let h=o*n,d=h-n,u=h+n;for(let p=0;p!==n;++p){let m=t[h+p];if(m!==t[d+p]||m!==t[u+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let u=0;u!==n;++u)t[d+u]=t[h+u]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};Zn.prototype.TimeBufferType=Float32Array,Zn.prototype.ValueBufferType=Float32Array,Zn.prototype.DefaultInterpolation=wh;var Sr=class extends Zn{constructor(e,t,n){super(e,t,n)}};Sr.prototype.ValueTypeName="bool",Sr.prototype.ValueBufferType=Array,Sr.prototype.DefaultInterpolation=zo,Sr.prototype.InterpolantFactoryMethodLinear=void 0,Sr.prototype.InterpolantFactoryMethodSmooth=void 0;var _u=class extends Zn{};_u.prototype.ValueTypeName="color";var xu=class extends Zn{};xu.prototype.ValueTypeName="number";var yu=class extends Ms{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)Pt.slerpFlat(s,0,a,c-o,a,c,l);return s}},hl=class extends Zn{InterpolantFactoryMethodLinear(e){return new yu(this.times,this.values,this.getValueSize(),e)}};hl.prototype.ValueTypeName="quaternion",hl.prototype.InterpolantFactoryMethodSmooth=void 0;var Er=class extends Zn{constructor(e,t,n){super(e,t,n)}};Er.prototype.ValueTypeName="string",Er.prototype.ValueBufferType=Array,Er.prototype.DefaultInterpolation=zo,Er.prototype.InterpolantFactoryMethodLinear=void 0,Er.prototype.InterpolantFactoryMethodSmooth=void 0;var Mu=class extends Zn{};Mu.prototype.ValueTypeName="vector";var Su=class{constructor(e,t,n){let r=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,a===!1&&r.onStart!==void 0&&r.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,l),o===l&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],m=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}},Yv=new Su,Eu=class{constructor(e){this.manager=e!==void 0?e:Yv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise((function(r,s){n.load(e,r,t,s)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Eu.DEFAULT_MATERIAL_NAME="__DEFAULT";var ua=class extends $t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ul=class extends ua{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},jc=new Fe,jp=new M,qp=new M,bu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vs,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;jp.setFromMatrixPosition(e.matrixWorld),t.position.copy(jp),qp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qp),t.updateMatrixWorld(),jc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Iy=new Fe,Ly=new M,Uy=new M;var wu=class extends bu{constructor(){super(new qo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ir=class extends ua{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new wu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},dl=class extends ua{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Dy=new Fe,Ny=new Fe,By=new Fe;var Oy=new M,Fy=new Pt,zy=new M,Hy=new M;var ky=new M,Vy=new Pt,Gy=new M,Wy=new M;var Ou="\\[\\]\\.:\\/",Zv=new RegExp("["+Ou+"]","g"),qc="[^"+Ou+"]",Jv="[^"+Ou.replace("\\.","")+"]",Kv=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",qc)+/(WCOD+)?/.source.replace("WCOD",Jv)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qc)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qc)+"$"),$v=["material","materials","bones","map"],Rt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Zv,"")}static parseTrackName(e){let t=Kv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);$v.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[r];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rt.Composite=class{constructor(i,e,t){let n=t||Rt.parseTrackName(e);this._targetGroup=i,this._bindings=i.subscribe_(e,n)}getValue(i,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(i,e)}setValue(i,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=t.length;n!==r;++n)t[n].setValue(i,e)}bind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].bind()}unbind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].unbind()}},Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray],Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xy=new Float32Array(1);var Yp=new Fe,da=class{constructor(e,t,n=0,r=1/0){this.ray=new Ar(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new na,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Yp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yp),this}intersectObject(e,t=!0,n=[]){return Tu(e,this,n,t),n.sort(Zp),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Tu(e[r],this,n,t);return n.sort(Zp),n}};function Zp(i,e){return i.distance-e.distance}function Tu(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let a=0,o=s.length;a<o;a++)Tu(s[a],e,t,!0)}}var jy=new oe;var qy=new M,Yy=new M;var Zy=new M;var Jy=new M,Ky=new Fe,$y=new Fe;var Qy=new M,e1=new xe,t1=new xe;var n1=new M,i1=new M,r1=new M;var s1=new M,a1=new ia;var o1=new Jn;var l1=new M;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var e_=/^(zh|cmn|yue)([-_]|$)/i,t_=/chinese|mandarin|中文|普通话|国语|國語|粤语|粵語/i,Sf=/(^|[^a-z])(online|natural|neural|premium|enhanced)([^a-z]|$)|云端|在线|自然|神经/i,Ef=/xiaoxiao|xiaoyi|yunjian|yunxi|yunyang|xiaohan|xiaomo|xiaoxuan|xiaorui|yunfeng|xiaobei|xiaoni|yunye|xiaochen|xiaoshuang|siri/i,n_=/tingting|meijia|sinji|huihui|kangkang|yaoyao|li[-_ ]?mu/i,i_=/compact|eloquence|whisper|novelty|bells|boing|bubbles|cellos|trinoids|zarvox|albert|bad news|good news|jester|organ|superstar|wobble|bahh|deranged|hysterical|pipe organ|rocko|junior|ralph|fred|kathy|princess|agnes|victoria|alex|daniel|samantha|karen|moira|tessa/i;function r_(i){if(!i)return!1;let e=String(i.lang||"").toLowerCase();return e_.test(e)?!0:t_.test(String(i.name||"")+" "+String(i.voiceURI||""))}function bf(i){if(!r_(i))return-1;let e=String(i.lang||"").toLowerCase(),t=(String(i.name||"")+" "+String(i.voiceURI||"")+" "+e).toLowerCase(),n=100;return/^zh[-_]?cn$/.test(e)||/^cmn[-_]?(cn|hans)/.test(e)?n+=40:/^zh[-_]?hans/.test(e)||/^zh([-_](sg|my))?$/.test(e)?n+=32:/^zh[-_](tw|hk|mo)/.test(e)||/^yue/.test(e)?n+=18:n+=10,i.localService===!1&&(n+=40),Sf.test(t)&&(n+=30),Ef.test(t)&&(n+=25),/google/.test(t)&&(n+=18),n_.test(t)&&(n+=8),i.default&&(n+=2),i_.test(t)&&(n-=80),n}function Mf(i){return(Array.isArray(i)?i:[]).map(e=>({v:e,score:bf(e)})).filter(e=>e.score>=0).sort((e,t)=>t.score-e.score||String(e.v.name||"").localeCompare(String(t.v.name||""))).map(e=>e.v)}function s_(i){return String(i||"").replace(/\s*[-–—]\s*(chinese|mandarin).*$/i,"").replace(/\s*\((natural|online)\)\s*/ig," ").replace(/\s+/g," ").trim()}function vl(i){if(!i)return null;let e=String(i.name||"")+" "+String(i.voiceURI||""),t=i.localService===!1,n=Sf.test(e)||Ef.test(e);return{name:s_(i.name||i.voiceURI||""),rawName:String(i.name||""),lang:String(i.lang||""),voiceURI:String(i.voiceURI||""),localService:i.localService!==!1,online:t,natural:n,default:!!i.default,score:bf(i)}}function wf(i={}){let e=typeof window<"u"?window:null,t=i.synth||e&&e.speechSynthesis||null,n=i.Utterance||e&&e.SpeechSynthesisUtterance||null,r=!!(t&&n),s=null,a=[],o=[],l=null,c=!1,h="",d=null,u=0,p=[];function m(){if(s!==null)return s.slice();if(!r)return[];try{return Array.from(t.getVoices()||[])}catch{return[]}}function _(){return r?a.length?o.length?"":"no-chinese":"no-voices":"unsupported"}function f(){return{supported:r,ready:c,available:!!l,reason:h,voice:vl(l),voices:o.map(vl),total:a.length}}function g(){let z=f();for(let X of p.slice())try{X(z)}catch{}}function v(){return a=m(),o=Mf(a),l=o[0]||null,c=!0,h=_(),g(),f()}function x(z){return typeof z!="function"?()=>{}:(p.push(z),z(f()),()=>{let X=p.indexOf(z);X>=0&&p.splice(X,1)})}function y(z){!e||!e.dispatchEvent||typeof e.CustomEvent!="function"||e.dispatchEvent(new e.CustomEvent("tree:voice",{detail:{speaking:!!z}}))}function A(){if(d=null,t)try{t.cancel()}catch{}y(!1)}function T(z,X={}){if(!r)return{ok:!1,reason:"unsupported"};if(v(),!l)return{ok:!1,reason:h||"no-voices"};A();let Z;try{Z=new n(String(z??""))}catch{return{ok:!1,reason:"unsupported"}}Z.voice=l,Z.lang=l.lang||"zh-CN",Z.rate=typeof X.rate=="number"?X.rate:.92,Z.pitch=typeof X.pitch=="number"?X.pitch:1.04,Z.volume=typeof X.volume=="number"?X.volume:1;let se=!1,te=me=>{if(!(se||d!==Z)&&(se=!0,d=null,y(!1),X.onend))try{X.onend(me)}catch{}};return Z.onstart=()=>{if(d===Z&&(y(!0),X.onstart))try{X.onstart()}catch{}},Z.onend=()=>te({type:"end"}),Z.onerror=me=>{if(d!==Z)return;let Se=me&&me.error||"error";if(!/canceled|interrupted/i.test(Se)&&X.onerror)try{X.onerror(Se,me)}catch{}te({type:"error",error:Se})},d=Z,setTimeout(()=>{if(d===Z)try{t.speak(Z)}catch(me){if(X.onerror)try{X.onerror("synthesis-failed",me)}catch{}te({type:"error",error:"synthesis-failed"})}},20),{ok:!0,voice:vl(l)}}function P(){if(!r)return!1;try{return t.pause(),!0}catch{return!1}}function U(){if(!r)return!1;try{return t.resume(),!0}catch{return!1}}function B(){return!!d||!!(r&&t.speaking)}function V(){return!!(r&&t.paused)}function j(z=1500){return v(),r&&l||s!==null||!r?Promise.resolve(f()):new Promise(X=>{let Z=!1,se=null,te=0,me=()=>{Z||(Z=!0,te&&clearTimeout(te),se&&se(),X(v()))};se=x(()=>{l&&me()}),te=setTimeout(me,Math.max(100,z||1500))})}function G(z){return s=Array.isArray(z)?z.map(X=>Object.assign({},X)):null,v()}function J(){return s=null,A(),v()}if(r){v();try{if(t.addEventListener)t.addEventListener("voiceschanged",v);else{let Z=t.onvoiceschanged;t.onvoiceschanged=function(se){typeof Z=="function"&&Z.call(t,se),v()}}}catch{}let z=0,X=()=>{l||z>=8||(z+=1,v(),u=setTimeout(X,z<4?150:400))};u=setTimeout(X,120)}return{supported:r,state:f,subscribe:x,refresh:v,speak:T,cancel:A,pause:P,resume:U,isSpeaking:B,isPaused:V,ensureAvailable:j,setVoicesForTest:G,resetForTest:J,rankVoices:z=>Mf(z).map(vl),_cleanup:()=>{u&&clearTimeout(u)}}}var hi=new M(0,1,0),Ot=(i,e,t)=>Math.min(t,Math.max(e,i)),he=(i,e,t)=>{let n=Ot((t-i)/(e-i),0,1);return n*n*(3-2*n)},_e=(i,e,t)=>e+(t-e)*i();function im(i,e,t){let n=Math.min(i.length-1,Math.max(0,e*(i.length-1))),r=Math.min(i.length-2,Math.max(0,Math.floor(n))),s=n-r;return(t||new M).copy(i[r]).lerp(i[r+1],s)}function Vt(i){return function(){i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var a_=1592598564,o_=Vt(a_);Math.random=()=>o_();var l_=/debug/.test(location.search),Il=20,Ur=120,Ll=.25,It=Ur+(1-Ll)*Il*4+Il*4-.1,Fu=[[0,0],[16,.004],[32,.02],[56,.06],[76,.14],[94,.28],[108,.5],[116,.75],[120,1]];function cd(i){if(i<=0)return 0;if(i>=Ur)return 1;for(let e=1;e<Fu.length;e++){let[t,n]=Fu[e];if(i<=t){let[r,s]=Fu[e-1],a=he(0,1,(i-r)/Math.max(.001,t-r));return s+(n-s)*a}}return 1}function Ua(i){return i<Ur?.02+(Ll-.02)*(i/Ur):Ll+(i-Ur)/(Il*4)}function rm(i){return i<Ur?1:1+Math.floor((i-Ur)/(Il*4)+Ll)}var ui=[{name:"\u6625",sub:"\u4E07\u7269\u53D1\u82BD",skyTop:5220584,horizon:16771012,fog:14085883,ground:8833386,sun:16763024,sunI:2.6,hemi:.5,snow:0,cloud:.58,cloudWarm:.16,exposure:.95,bloom:.22},{name:"\u590F",sub:"\u679D\u7E41\u53F6\u8302",skyTop:1603784,horizon:14217727,fog:13625845,ground:5546820,sun:16773840,sunI:2.8,hemi:.45,snow:0,cloud:.32,cloudWarm:.1,exposure:.92,bloom:.2},{name:"\u79CB",sub:"\u53F6\u5B50\u53D8\u7EA2",skyTop:6983632,horizon:16768424,fog:16180170,ground:10259018,sun:16751186,sunI:2.6,hemi:.42,snow:0,cloud:.26,cloudWarm:.55,exposure:1,bloom:.28},{name:"\u51AC",sub:"\u4E0B\u96EA\u4E86",skyTop:5210030,horizon:13624306,fog:13098220,ground:15923455,sun:12571903,sunI:1.8,hemi:.55,snow:1,cloud:.82,cloudWarm:.02,exposure:.88,bloom:.16}],c_={skyTop:new xe,horizon:new xe,fog:new xe,ground:new xe,sun:new xe,sunI:0,hemi:0,snow:0,cloud:0,cloudWarm:0,exposure:1,bloom:.8},Sl=new xe,zu=new xe,fa=new xe,ma=new xe;function h_(i,e){let t=(i%1+1)%1*ui.length,n=Math.floor(t)%ui.length,r=(n+1)%ui.length,s=he(.86,1,t-Math.floor(t)),a=ui[n],o=ui[r];return e.skyTop.lerpColors(fa.setHex(a.skyTop),ma.setHex(o.skyTop),s),e.horizon.lerpColors(fa.setHex(a.horizon),ma.setHex(o.horizon),s),e.fog.lerpColors(fa.setHex(a.fog),ma.setHex(o.fog),s),e.ground.lerpColors(fa.setHex(a.ground),ma.setHex(o.ground),s),e.sun.lerpColors(fa.setHex(a.sun),ma.setHex(o.sun),s),e.sunI=a.sunI+(o.sunI-a.sunI)*s,e.hemi=a.hemi+(o.hemi-a.hemi)*s,e.snow=a.snow+(o.snow-a.snow)*s,e.cloud=a.cloud+(o.cloud-a.cloud)*s,e.cloudWarm=a.cloudWarm+(o.cloudWarm-a.cloudWarm)*s,e.exposure=a.exposure+(o.exposure-a.exposure)*s,e.bloom=a.bloom+(o.bloom-a.bloom)*s,e}var Yu=document.getElementById("app"),en=new Jo({antialias:!1,powerPreference:"high-performance"});en.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75));function hd(){return{w:Math.max(1,Yu.clientWidth||window.innerWidth),h:Math.max(1,Yu.clientHeight||window.innerHeight)}}var Ul=hd();en.setSize(Ul.w,Ul.h);en.shadowMap.enabled=!0;en.shadowMap.type=Jp;en.toneMapping=$p;en.toneMappingExposure=1.12;Yu.appendChild(en.domElement);var ye=new $o;ye.fog=new Ko(13625845,34,205);var kt=new xn(38,Ul.w/Ul.h,.1,600),bi={topColor:{value:new xe(3118552)},horizonColor:{value:new xe(12576760)},sunColor:{value:new xe(16774109)},sunDir:{value:new M(.4,.7,.5).normalize()},time:{value:0},cloudCover:{value:.45},cloudWarm:{value:.2}},sm=new $e(new ci(320,48,30),new Sn({uniforms:bi,side:Au,depthWrite:!1,fog:!1,vertexShader:`
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
    `}));sm.frustumCulled=!1;ye.add(sm);function am(i,e){let n=document.createElement("canvas");n.width=n.height=128;let r=n.getContext("2d"),s=r.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);s.addColorStop(0,i),s.addColorStop(.38,e),s.addColorStop(.72,"rgba(255,246,220,0.16)"),s.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=s,r.fillRect(0,0,128,128);let a=new wt(n);return a.colorSpace=ut,a}var Dl=new _s(new Rr({map:am("rgba(255,255,255,1)","rgba(255,236,180,0.55)"),blending:Qn,depthWrite:!1,depthTest:!0,fog:!1,transparent:!0,opacity:.78}));Dl.scale.setScalar(6.5);ye.add(Dl);function u_(){let e=document.createElement("canvas");e.width=e.height=512;let t=e.getContext("2d");t.clearRect(0,0,512,512);let n=512/2,r=512/2;for(let o=0;o<28;o++){let l=o/28*Math.PI*2+(Math.random()-.5)*.22,c=512*(.18+Math.random()*.42),h=.006+Math.random()*.02;t.save(),t.translate(n,r),t.rotate(l);let d=t.createLinearGradient(0,0,c,0);d.addColorStop(0,`rgba(255,241,205,${.1+Math.random()*.1})`),d.addColorStop(.34,`rgba(255,238,196,${.025+Math.random()*.04})`),d.addColorStop(1,"rgba(255,238,196,0)"),t.fillStyle=d,t.beginPath(),t.moveTo(0,-512*h*.5),t.lineTo(c,-512*h*2.1),t.lineTo(c,512*h*2.1),t.lineTo(0,512*h*.5),t.closePath(),t.fill(),t.restore()}let s=t.createRadialGradient(n,r,0,n,r,512*.5);s.addColorStop(0,"rgba(255,245,215,0.42)"),s.addColorStop(.26,"rgba(255,228,170,0.12)"),s.addColorStop(1,"rgba(255,228,170,0)"),t.fillStyle=s,t.fillRect(0,0,512,512);let a=new wt(e);return a.colorSpace=ut,a}var Ta=new _s(new Rr({map:u_(),blending:Qn,depthWrite:!1,depthTest:!0,fog:!1,transparent:!0,opacity:.32}));Ta.scale.setScalar(52);ye.add(Ta);var El=new ul(12576760,4880954,.7);ye.add(El);var d_=new dl(12376296,.38);ye.add(d_);var mn=new Ir(16777215,2.4);mn.castShadow=!0;mn.shadow.mapSize.set(2048,2048);mn.shadow.camera.left=-20;mn.shadow.camera.right=20;mn.shadow.camera.top=18;mn.shadow.camera.bottom=-16;mn.shadow.camera.near=1;mn.shadow.camera.far=110;mn.shadow.bias=-6e-4;mn.shadow.normalBias=.06;ye.add(mn);ye.add(mn.target);var om=new Ir(16773341,.85);om.position.set(-14,9,-16);ye.add(om);var Ga=new Ir(16773596,2.35);Ga.position.set(8,12,20);Ga.target.position.set(0,4,0);ye.add(Ga);ye.add(Ga.target);var Wa=new Ir(16769464,1.25);Wa.position.set(2.5,-3,18);Wa.target.position.set(0,-2.2,0);ye.add(Wa);ye.add(Wa.target);mn.target.position.set(0,3,0);function p_(){let e=document.createElement("canvas");e.width=e.height=1024;let t=e.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,1024,1024);let n=(s,a,o,l,c)=>{t.fillStyle=`rgba(${l},${c})`;for(let h of[0,-1024,1024])for(let d of[0,-1024,1024])t.beginPath(),t.arc(s+h,a+d,o,0,Math.PI*2),t.fill()};for(let s=0;s<5200;s++){let a=Math.random()*1024,o=Math.random()*1024,l=3+Math.random()*9,c=-Math.PI/2+(Math.random()-.5)*1.1,h=Math.random()>.45;t.strokeStyle=h?`rgba(150,190,110,${.05+Math.random()*.11})`:`rgba(52,84,40,${.05+Math.random()*.13})`,t.lineWidth=.8+Math.random()*1.6,t.beginPath(),t.moveTo(a,o),t.lineTo(a+Math.cos(c)*l,o+Math.sin(c)*l),t.stroke()}for(let s=0;s<6e3;s++)t.fillStyle=`rgba(${Math.random()>.5?"96,132,70":"40,64,32"},${.04+Math.random()*.08})`,t.fillRect(Math.random()*1024,Math.random()*1024,1,1);let r=new wt(e);return r.colorSpace=ut,r.wrapS=r.wrapT=br,r.repeat.set(14,14),r.anisotropy=8,r}var lm=new xt({color:5546820,map:p_(),roughness:1,metalness:0,vertexColors:!0});function _l(i,e){let t=Math.sin(i*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function Hu(i,e){let t=Math.floor(i),n=Math.floor(e),r=i-t,s=e-n,a=r*r*(3-2*r),o=s*s*(3-2*s),l=_l(t,n),c=_l(t+1,n),h=_l(t,n+1),d=_l(t+1,n+1);return(l*(1-a)+c*a)*(1-o)+(h*(1-a)+d*a)*o}function ei(i,e){return Hu(i,e)*.55+Hu(i*2.1,e*2.1)*.28+Hu(i*4.3,e*4.3)*.17}function f_(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,256);n.addColorStop(0,"#9c7248"),n.addColorStop(.45,"#7d5731"),n.addColorStop(1,"#5d3f22"),t.fillStyle=n,t.fillRect(0,0,256,256);for(let a=0;a<180;a++){let o=Math.random()*256,l=Math.random()*256,c=2+Math.random()*13,h=1.5+Math.random()*8,d=Math.random()>.55;t.fillStyle=d?`rgba(190,150,104,${.03+Math.random()*.07})`:`rgba(52,32,16,${.03+Math.random()*.08})`,t.beginPath(),t.ellipse(o,l,c,h,Math.random()*3.14,0,6.283),t.fill()}for(let a=0;a<9;a++){let o=Math.random()*256,l=Math.random()*256;t.strokeStyle=`rgba(40,24,12,${.12+Math.random()*.12})`,t.lineWidth=.8+Math.random()*1.1,t.beginPath(),t.moveTo(o,l),t.bezierCurveTo(o+8,l+6,o+3,l+22,o+10,l+34),t.stroke()}for(let a=0;a<260;a++){let o=Math.random()*256,l=Math.random()*256,c=.7+Math.random()*2.6;t.fillStyle=Math.random()>.5?"rgba(52,32,16,0.35)":"rgba(206,172,124,0.28)",t.beginPath(),t.ellipse(o,l,c,c*.8,Math.random()*3,0,Math.PI*2),t.fill()}let r=t.createRadialGradient(256*.36,256*.3,0,256*.36,256*.3,256*.55);r.addColorStop(0,"rgba(255,236,198,0.34)"),r.addColorStop(1,"rgba(255,236,198,0)"),t.fillStyle=r,t.fillRect(0,0,256,256);let s=new wt(e);return s.colorSpace=ut,s.anisotropy=8,s}var Li=25,Da=12,m_=2.5,Ds=-9.6,g_=-10;function v_(){let t=document.createElement("canvas");t.width=2048,t.height=768;let n=t.getContext("2d"),r=Vt(20240117);n.fillStyle="rgb(86,64,42)",n.fillRect(0,0,2048,768);let s=(c,h)=>{let d=[0,.1,.42,.54,.66,.84,1][h]*768,u=h<=1?.55:h===2?.95:1.25,p=(ei(c*.0011+h*23.7,h*5.3)-.5)*95*u,m=(ei(c*.0042+h*11.1,h*8.9)-.5)*70*u,_=(ei(c*.012+h*37.1,h*2.7)-.5)*26*u,f=(ei(c*.042+h*7.7,h*13.1)-.5)*7*u;return d+p+m+_+f},a=[{top:-4,bottom:1,col:"rgb(96,70,44)"},{top:1,bottom:2,col:"rgb(112,84,54)"},{top:2,bottom:3,col:"rgb(126,100,66)"},{top:3,bottom:4,col:"rgb(92,84,64)"},{top:4,bottom:5,col:"rgb(48,64,68)"},{top:5,bottom:6,col:"rgb(26,42,52)"}];for(let c of a){n.fillStyle=c.col,n.beginPath();let h=c.top;n.moveTo(0,h===-4?-4:s(0,h));for(let d=0;d<=2048;d+=12)n.lineTo(d,h===-4?-4:s(d,h));for(let d=2048;d>=0;d-=12)n.lineTo(d,c.bottom>=6?768:s(d,c.bottom));n.closePath(),n.fill()}for(let c=0;c<240;c++){let h=r()*2048,d=r()*768,u=50+r()*190,p=ei(h*.0016,d*.0016)>.48,m=n.createRadialGradient(h,d,0,h,d,u);m.addColorStop(0,p?"rgba(158,130,92,0.10)":"rgba(28,22,16,0.10)"),m.addColorStop(1,"rgba(40,28,16,0)"),n.fillStyle=m,n.beginPath(),n.arc(h,d,u,0,6.283),n.fill()}for(let c=0;c<64;c++){let h=r()*2048,d=1+Math.floor(r()*5),u=s(h,d)+(r()-.5)*34,p=36+r()*150,m=6+r()*24;n.fillStyle=r()>.5?"rgba(150,116,72,0.20)":"rgba(36,26,16,0.22)",n.beginPath(),n.ellipse(h,u,p,m,(r()-.5)*.22,0,6.283),n.fill()}for(let c of[1,2,3,4,5]){n.strokeStyle=c>=4?"rgba(16,30,36,0.20)":"rgba(16,10,5,0.20)",n.lineWidth=2,n.beginPath();for(let h=0;h<=2048;h+=8){let d=s(h,c);h===0?n.moveTo(h,d):n.lineTo(h,d)}n.stroke();for(let h=0;h<8;h++){let d=r()*2048,u=s(d,c)+(r()-.5)*10;n.strokeStyle=`rgba(16,10,5,${.1+r()*.18})`,n.lineWidth=2+r()*3,n.beginPath(),n.moveTo(d,u),n.quadraticCurveTo(d+10+r()*30,u+(r()-.5)*24,d+34+r()*80,u+(r()-.5)*28),n.stroke()}}for(let c=0;c<20;c++){let h=r()*2048,d=768*(.04+r()*.72),u=50+r()*130,p=1+r()*3,m=n.createLinearGradient(h,d,h+(r()-.5)*30,d+u);m.addColorStop(0,"rgba(20,14,8,0.13)"),m.addColorStop(1,"rgba(20,14,8,0)"),n.fillStyle=m,n.beginPath(),n.moveTo(h-p,d),n.lineTo(h+p,d),n.lineTo(h+(r()-.5)*18+p*.3,d+u),n.lineTo(h+(r()-.5)*18-p*.3,d+u),n.closePath(),n.fill()}for(let c=0;c<13e3;c++){let h=r()*2048,d=r()*768,u=1.2+r()*4.6,p=r()>.5;n.fillStyle=p?`rgba(178,150,110,${.05+r()*.11})`:`rgba(28,18,10,${.05+r()*.13})`,n.beginPath(),n.ellipse(h,d,u,u*(.55+r()*.7),r()*3.14,0,6.283),n.fill()}for(let c=0;c<420;c++){let h=r()*2048,d=r()*768*.13,u=1.4+r()*5.2,p=.55+r()*.45;n.fillStyle=`rgba(${168*p|0},${136*p|0},${96*p|0},${.34+r()*.32})`,n.beginPath(),n.ellipse(h,d,u,u*(.6+r()*.5),r()*3.14,0,6.283),n.fill(),n.fillStyle="rgba(22,14,7,0.34)",n.beginPath(),n.ellipse(h+u*.16,d+u*.44,u*.78,u*.26,0,0,6.283),n.fill(),n.fillStyle="rgba(236,212,168,0.26)",n.beginPath(),n.ellipse(h-u*.3,d-u*.34,u*.46,u*.2,0,0,6.283),n.fill()}for(let c=0;c<180;c++){let h=r()*2048,d=r()*768*.2,u=1+r()*2.6;n.fillStyle="rgba(14,9,5,0.55)",n.beginPath(),n.ellipse(h,d,u,u*.8,r()*3.14,0,6.283),n.fill(),n.strokeStyle="rgba(196,166,122,0.28)",n.lineWidth=.8,n.beginPath(),n.ellipse(h,d-.5,u*1.2,u*.9,0,0,6.283),n.stroke()}for(let c=0;c<58;c++){let h=r()*2048,d=768*(.12+r()*.78),u=768*(.03+r()*.16);n.strokeStyle=`rgba(22,15,8,${.1+r()*.14})`,n.lineWidth=.8+r()*1.6,n.beginPath(),n.moveTo(h,d),n.bezierCurveTo(h+(r()-.5)*14,d+u*.4,h+(r()-.5)*18,d+u*.7,h+(r()-.5)*22,d+u),n.stroke()}for(let c=0;c<820;c++){let h=r()*2048,d=768*.08+r()*768*.92,u=1+Math.pow(r(),2.6)*2.8,p=.55+r()*.4,m=d>768*.66;n.fillStyle=m?`rgba(${108*p|0},${124*p|0},${124*p|0},0.72)`:`rgba(${136*p|0},${122*p|0},${102*p|0},0.72)`,n.beginPath(),n.ellipse(h,d,u,u*(.62+r()*.4),r()*3.14,0,6.283),n.fill(),n.fillStyle="rgba(255,248,228,0.18)",n.beginPath(),n.ellipse(h-u*.3,d-u*.34,u*.5,u*.3,0,0,6.283),n.fill(),n.fillStyle="rgba(16,10,5,0.20)",n.beginPath(),n.ellipse(h+u*.18,d+u*.5,u*.8,u*.28,0,0,6.283),n.fill()}for(let c=0;c<3e4;c++){let h=r()*2048,d=r()*768;n.fillStyle=r()>.5?`rgba(24,16,9,${.06+r()*.12})`:`rgba(196,168,126,${.03+r()*.07})`,n.fillRect(h,d,1+r()*2,1+r()*2)}for(let c=0;c<150;c++){let h=r()*2048,d=768*(.66+r()*.34),u=24+r()*90,p=n.createRadialGradient(h,d,0,h,d,u);p.addColorStop(0,`rgba(112,164,176,${.05+r()*.09})`),p.addColorStop(1,"rgba(112,164,176,0)"),n.fillStyle=p,n.beginPath(),n.arc(h,d,u,0,6.283),n.fill()}for(let c=0;c<54;c++){let h=r()*2048,d=768*(.63+r()*.12),u=40+r()*150,p=n.createLinearGradient(h,d,h,d+u);p.addColorStop(0,"rgba(164,206,216,0.10)"),p.addColorStop(1,"rgba(164,206,216,0)"),n.fillStyle=p,n.fillRect(h,d,1+r()*3,u)}let o=n.createLinearGradient(0,0,0,768*.055);o.addColorStop(0,"rgba(36,25,15,0.30)"),o.addColorStop(.5,"rgba(52,37,22,0.11)"),o.addColorStop(1,"rgba(52,37,22,0)"),n.fillStyle=o,n.fillRect(0,0,2048,768*.055),n.strokeStyle="rgba(214,184,138,0.30)",n.lineWidth=2.2,n.beginPath();for(let c=0;c<=2048;c+=6)n.lineTo(c,2+(ei(c*.012,1.7)-.5)*5);n.stroke();for(let c=0;c<220;c++){let h=r()*2048,d=r()*768*.06;n.fillStyle=`rgba(216,188,142,${.04+r()*.07})`,n.beginPath(),n.ellipse(h,d,1+r()*4,1+r()*2,r()*3.14,0,6.283),n.fill()}let l=new wt(t);return l.colorSpace=ut,l.wrapS=br,l.wrapT=wr,l.flipY=!0,l.repeat.set(1,1),l.anisotropy=8,l}var Tf=v_(),__=new xt({map:Tf,bumpMap:Tf,bumpScale:.14,roughness:1,metalness:0,color:16777215,emissive:2827290,emissiveIntensity:.22,fog:!1}),x_=new xt({color:4008476,roughness:1,metalness:0,flatShading:!0}),y_=90;function M_(i,e,t){let n=[],r=[],s=[],a=[],o=new xe;for(let h=0;h<=e;h++){let d=i*Math.pow(h/e,1.9);for(let u=0;u<=t;u++){let p=u/t*Math.PI,m=Math.cos(p)*d,_=-Math.sin(p)*d;n.push(m,0,_),r.push(m/(2*i)+.5,_/(2*i)+.5);let f=ei(m*.036+11.3,_*.036+4.7),g=ei(m*.16,_*.16),v=.8+.34*f+.1*(g-.5);o.setRGB(v*1.02,v,v*.9),s.push(o.r,o.g,o.b)}}let l=t+1;for(let h=0;h<e;h++)for(let d=0;d<t;d++){let u=h*l+d,p=u+1,m=u+l,_=m+1;a.push(u,m,p,p,m,_)}let c=new tt;return c.setAttribute("position",new Ue(n,3)),c.setAttribute("uv",new Ue(r,2)),c.setAttribute("color",new Ue(s,3)),c.setIndex(a),c.computeVertexNormals(),c}var cm=new $e(M_(y_,40,72),lm);cm.receiveShadow=!0;ye.add(cm);var bl=null;(()=>{let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),n=t.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);n.addColorStop(0,"rgba(24,32,18,0.55)"),n.addColorStop(.45,"rgba(24,32,18,0.28)"),n.addColorStop(1,"rgba(24,32,18,0)"),t.fillStyle=n,t.fillRect(0,0,256,256);let r=new wt(e);r.colorSpace=ut;let s=new $e(new Xt(7,7),new yn({map:r,transparent:!0,depthWrite:!1,opacity:.9}));s.rotation.x=-Math.PI/2,s.position.y=.02,bl=s,ye.add(s)})();var ud=new $e(new qi(Li,Li,Da,64,1,!0,Math.PI/2,Math.PI),x_);ud.position.y=-Da/2;ud.receiveShadow=!0;ye.add(ud);var hm=Da+m_,dd=new $e(new Xt(Li*2.8,hm),__);dd.position.set(0,-hm/2,0);dd.receiveShadow=!1;ye.add(dd);(()=>{let i=Vt(4242),e=120,t=new xt({roughness:.88,metalness:0,flatShading:!0}),n=new un(new Yi(1,0),t,e);n.receiveShadow=!1,n.castShadow=!1;let r=new Fe,s=new Pt,a=new M,o=new M,l=new xe;for(let c=0;c<e;c++){let h=.018+Math.pow(i(),2)*.042;o.set(_e(i,-13,13),_e(i,-12.5,-.7),_e(i,-.035,.01)),s.setFromEuler(new Wt(i()*3,i()*3,i()*3)),a.set(h*(1.1+i()*.5),h*(.8+i()*.4),h*.42),r.compose(o,s,a),n.setMatrixAt(c,r),l.setHex(i()>.45?5063220:3419170),n.setColorAt(c,l)}n.instanceMatrix.needsUpdate=!0,n.instanceColor&&(n.instanceColor.needsUpdate=!0),ye.add(n)})();(()=>{let i=Vt(9091),e=680,t=new Yi(1,0),n=new xt({roughness:.95,metalness:0,flatShading:!0,vertexColors:!1}),r=new un(t,n,e);r.receiveShadow=!0,r.castShadow=!1;let s=new Fe,a=new Pt,o=new M,l=new M,c=new xe;for(let h=0;h<e;h++){l.set(_e(i,-13,13),_e(i,-13.5,-.25),_e(i,.005,.055)),a.setFromEuler(new Wt(i()*3,i()*3,i()*3));let d=.018+Math.pow(i(),2.2)*.07;o.set(d*_e(i,.9,1.6),d*_e(i,.4,.8),d*.45),s.compose(l,a,o),r.setMatrixAt(h,s);let u=.34+i()*.42;c.setRGB(.42*u,.32*u,.21*u),r.setColorAt(h,c)}r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0),ye.add(r)})();var Af=Li*2.8,S_=(()=>{let e=[],t=[],n=[],r=new xe(4612138),s=new xe(2759698);for(let o=0;o<=240;o++){let l=-Af/2+o/240*Af,c=ei(l*.33+7.1,3.7)-.5,h=-.015+c*.34,d=-.1+c*.12;if(e.push(l,h,.05,l,d,.05),t.push(r.r,r.g,r.b,s.r,s.g,s.b),o<240){let u=o*2;n.push(u,u+2,u+1,u+1,u+2,u+3)}}let a=new tt;return a.setAttribute("position",new Ue(e,3)),a.setAttribute("color",new Ue(t,3)),a.setIndex(n),a.computeVertexNormals(),a})(),E_=new xt({vertexColors:!0,roughness:1,metalness:0}),b_=new $e(S_,E_);ye.add(b_);(()=>{let t=document.createElement("canvas");t.width=256,t.height=256;let n=t.getContext("2d");n.clearRect(0,0,256,256);let r=n.createLinearGradient(0,0,256,0);r.addColorStop(0,"rgba(8,5,3,0.30)"),r.addColorStop(.14,"rgba(8,5,3,0.13)"),r.addColorStop(.34,"rgba(8,5,3,0.02)"),r.addColorStop(.66,"rgba(8,5,3,0.02)"),r.addColorStop(.86,"rgba(8,5,3,0.13)"),r.addColorStop(1,"rgba(8,5,3,0.30)"),n.fillStyle=r,n.fillRect(0,0,256,256);let s=n.createLinearGradient(0,0,0,256*.1);s.addColorStop(0,"rgba(6,4,2,0.10)"),s.addColorStop(1,"rgba(6,4,2,0)"),n.fillStyle=s,n.fillRect(0,0,256,256*.1);let a=n.createLinearGradient(0,256*.8,0,256);a.addColorStop(0,"rgba(4,3,2,0)"),a.addColorStop(1,"rgba(4,3,2,0.55)"),n.fillStyle=a,n.fillRect(0,256*.8,256,256*.2);let o=n.createLinearGradient(0,256*.94,0,256);o.addColorStop(0,"rgba(4,3,2,0)"),o.addColorStop(1,"rgba(4,3,2,0.92)"),n.fillStyle=o,n.fillRect(0,256*.94,256,256*.06);let l=new wt(t);l.colorSpace=ut;let c=new $e(new Xt(Li*2.8,Da+5),new yn({map:l,transparent:!0,depthWrite:!1,fog:!1}));c.position.set(0,-(Da+5)/2-.02,.028),ye.add(c)})();var Nl=null,ar=new hn;ye.add(ar);var um=new yn({color:11065576,transparent:!0,opacity:0,blending:Qn,depthWrite:!1,fog:!1,side:Tn}),dm=new $e(new Xt(Li*2.8,.22),um);dm.position.set(0,Ds,.03);ar.add(dm);var pm=new yn({color:14677247,transparent:!0,opacity:0,blending:Qn,depthWrite:!1,fog:!1}),fm=new $e(new Xt(Li*2.8,.024),pm);fm.position.set(0,Ds+.11,.031);ar.add(fm);(()=>{let i=document.createElement("canvas");i.width=4,i.height=128;let e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,128);t.addColorStop(0,"rgba(150,206,222,0.55)"),t.addColorStop(.35,"rgba(96,158,180,0.22)"),t.addColorStop(1,"rgba(60,110,140,0)"),e.fillStyle=t,e.fillRect(0,0,4,128);let n=new wt(i);n.colorSpace=ut,Nl=new yn({map:n,transparent:!0,opacity:0,blending:Qn,depthWrite:!1,fog:!1});let r=new $e(new Xt(Li*2.8,2.6),Nl);r.position.set(0,Ds-1.15,.0305),ar.add(r)})();var Zu={uTime:{value:0},uOpacity:{value:0}},w_=new Sn({uniforms:Zu,transparent:!0,depthWrite:!1,fog:!1,blending:Qn,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    uniform float uTime; uniform float uOpacity; varying vec2 vUv;
    void main() {
      float y = vUv.y;
      float w1 = sin(y * 46.0 - uTime * 1.4 + sin(vUv.x * 22.0 + uTime * 0.35) * 1.6);
      float w2 = sin(y * 87.0 - uTime * 2.1 + vUv.x * 13.0);
      float band = smoothstep(0.55, 0.98, w1) * 0.55 + smoothstep(0.75, 1.0, w2) * 0.25;
      float fade = smoothstep(0.0, 0.15, y) * (1.0 - smoothstep(0.55, 1.0, y));
      gl_FragColor = vec4(0.62, 0.86, 0.96, band * fade * uOpacity);
    }`}),mm=new $e(new Xt(Li*2.8,2.4),w_);mm.position.set(0,Ds-1.15,.032);ar.add(mm);var Jl=150,Ti=new Float32Array(Jl*4);{let i=Vt(24225);for(let e=0;e<Jl;e++)Ti[e*4]=(i()-.5)*26,Ti[e*4+1]=i(),Ti[e*4+2]=.1+i()*.28,Ti[e*4+3]=i()*6.283}var Bl=new tt,T_=new Float32Array(Jl*3);Bl.setAttribute("position",new Ut(T_,3));var gm=new $n({size:.055,map:Ns(),color:13036794,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0,blending:Qn,fog:!1}),vm=new li(Bl,gm);vm.frustumCulled=!1;ar.add(vm);var Rf=72,_m=new tt;{let i=Vt(29168),e=new Float32Array(Rf*3);for(let t=0;t<Rf;t++)e[t*3]=(i()-.5)*17,e[t*3+1]=Ds+.18+i()*.75,e[t*3+2]=.3+i()*.28;_m.setAttribute("position",new Ut(e,3))}var xm=new $n({size:.075,map:Ns(),color:14217983,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0,blending:Qn,fog:!1}),ym=new li(_m,xm);ym.frustumCulled=!1;ar.add(ym);for(let i of ar.children)i.raycast=()=>{};function A_(){let t=document.createElement("canvas");t.width=128,t.height=64;let n=t.getContext("2d");n.strokeStyle="#3b4854",n.lineWidth=6,n.lineCap="round",n.lineJoin="round",n.beginPath(),n.moveTo(9,30),n.quadraticCurveTo(36,8,64,34),n.quadraticCurveTo(92,8,119,30),n.stroke(),n.fillStyle="#33404b",n.beginPath(),n.ellipse(64,35,7,4,0,0,6.283),n.fill();let r=new wt(t);return r.colorSpace=ut,r}function R_(){let t=document.createElement("canvas");t.width=128,t.height=96;let n=t.getContext("2d");n.fillStyle="#40566a",n.beginPath(),n.ellipse(60,58,30,19,-.16,0,6.283),n.fill(),n.beginPath(),n.arc(88,40,12,0,6.283),n.fill(),n.fillStyle="#e0a445",n.beginPath(),n.moveTo(99,38),n.lineTo(118,42),n.lineTo(99,47),n.closePath(),n.fill(),n.fillStyle="#6e8599",n.beginPath(),n.ellipse(54,55,22,10,-.2,0,6.283),n.fill(),n.fillStyle="#33485c",n.beginPath(),n.moveTo(36,52),n.lineTo(8,42),n.lineTo(12,70),n.closePath(),n.fill(),n.fillStyle="#f7fbff",n.beginPath(),n.arc(91,37,2.6,0,6.283),n.fill(),n.fillStyle="#101820",n.beginPath(),n.arc(92,37,1.3,0,6.283),n.fill(),n.strokeStyle="#3a3026",n.lineWidth=2,n.beginPath(),n.moveTo(54,75),n.lineTo(52,88),n.moveTo(68,75),n.lineTo(70,88),n.stroke();let r=new wt(t);return r.colorSpace=ut,r}function C_(){let t=document.createElement("canvas");t.width=128,t.height=96;let n=t.getContext("2d"),r=(a,o,l,c,h)=>{n.fillStyle=h,n.beginPath(),n.ellipse(a,o,l,c,0,0,6.283),n.fill(),n.fillStyle="rgba(255,250,225,0.85)",n.beginPath(),n.arc(a+l*.35,o-c*.25,l*.16,0,6.283),n.fill(),n.strokeStyle="rgba(74,42,20,0.65)",n.lineWidth=2,n.beginPath(),n.ellipse(a,o,l,c,0,0,6.283),n.stroke()};r(40,34,26,21,"#ef9a3c"),r(88,34,26,21,"#ef9a3c"),r(45,66,20,16,"#f4c05a"),r(83,66,20,16,"#f4c05a"),n.fillStyle="#4b3524",n.beginPath(),n.ellipse(64,48,4,26,0,0,6.283),n.fill(),n.strokeStyle="#4b3524",n.lineWidth=1.6,n.beginPath(),n.moveTo(62,24),n.quadraticCurveTo(54,10,48,12),n.moveTo(66,24),n.quadraticCurveTo(74,10,80,12),n.stroke();let s=new wt(t);return s.colorSpace=ut,s}function P_(){let t=document.createElement("canvas");t.width=96,t.height=64;let n=t.getContext("2d");n.fillStyle="rgba(226,244,255,0.75)",n.beginPath(),n.ellipse(40,22,18,9,-.5,0,6.283),n.fill(),n.beginPath(),n.ellipse(58,22,18,9,.5,0,6.283),n.fill(),n.fillStyle="#e8b62c",n.beginPath(),n.ellipse(48,38,24,13,0,0,6.283),n.fill(),n.fillStyle="#38291a";for(let s of[36,46,56])n.beginPath(),n.ellipse(s,38,3.4,12,0,0,6.283),n.fill();n.beginPath(),n.arc(70,34,7,0,6.283),n.fill(),n.strokeStyle="#38291a",n.lineWidth=1.6,n.beginPath(),n.moveTo(72,28),n.quadraticCurveTo(80,18,84,20),n.stroke();let r=new wt(t);return r.colorSpace=ut,r}function I_(){let t=document.createElement("canvas");t.width=64,t.height=64;let n=t.getContext("2d");n.fillStyle="#20201e",n.beginPath(),n.arc(32,30,10,0,6.283),n.fill(),n.fillStyle="#d8382e",n.beginPath(),n.ellipse(32,38,20,18,0,0,6.283),n.fill(),n.fillStyle="#20201e",n.beginPath(),n.moveTo(32,21),n.lineTo(32,56),n.lineWidth=2.5,n.stroke();for(let[s,a]of[[20,32],[44,32],[22,45],[42,45],[32,49]])n.beginPath(),n.arc(s,a,3.2,0,6.283),n.fill();let r=new wt(t);return r.colorSpace=ut,r}var Mm=new hn;ye.add(Mm);function Xa(i,e,t,n=1){let r=new yn({map:i,transparent:!0,opacity:n,depthWrite:!1,fog:!1,side:Tn,alphaTest:.02}),s=new un(new Xt(t,t*.62),r,e);s.instanceMatrix.setUsage(Zi),s.frustumCulled=!1,s.raycast=()=>{};for(let a=0;a<e;a++)s.setMatrixAt(a,new Fe().makeScale(1e-4,1e-4,1e-4));return Mm.add(s),s}var L_=A_(),U_=R_(),ga=Xa(L_,14,1),bs=Xa(U_,5,.88),ws=Xa(C_(),7,.7),va=Xa(P_(),5,.46),_a=Xa(I_(),5,.45),Sm=Vt(45437),Ts=[];for(let i=0;i<40;i++)Ts.push(Sm()*2-1);var Dn=[];for(let i=0;i<40;i++)Dn.push(Sm()*Math.PI*2);var Cf=[[46,84],[128,158],[196,232]];function D_(i){let e={u:0,env:0,idx:-1};for(let t=0;t<Cf.length;t++){let[n,r]=Cf[t];if(i<n||i>r)continue;let s=(i-n)/(r-n),a=he(0,.12,s)*(1-he(.88,1,s));a>e.env&&(e={u:s,env:a,idx:t})}return e}function N_(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),n=t.createRadialGradient(256/2,256/2,256*.05,256/2,256/2,256*.5);n.addColorStop(0,"rgba(18,30,14,0.62)"),n.addColorStop(.55,"rgba(20,32,16,0.34)"),n.addColorStop(1,"rgba(20,32,16,0)"),t.fillStyle=n,t.fillRect(0,0,256,256);let r=Vt(13941534);for(let a=0;a<90;a++){let o=r()*256,l=r()*256,c=2+r()*9;if(Math.hypot(o-256/2,l-256/2)/(256*.5)>.95)continue;let d=t.createRadialGradient(o,l,0,o,l,c);d.addColorStop(0,`rgba(255,244,198,${.05+r()*.13})`),d.addColorStop(1,"rgba(255,244,198,0)"),t.fillStyle=d,t.beginPath(),t.arc(o,l,c,0,6.283),t.fill()}let s=new wt(e);return s.colorSpace=ut,s}var Ju=new yn({map:N_(),transparent:!0,opacity:0,depthWrite:!1,fog:!1}),ja=new $e(new Xt(15,8),Ju);ja.rotation.x=-Math.PI/2;ja.position.set(0,.028,-4);ja.raycast=()=>{};ye.add(ja);function B_(){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);n.addColorStop(0,"rgba(20,28,34,0.55)"),n.addColorStop(1,"rgba(20,28,34,0)"),t.fillStyle=n,t.fillRect(0,0,128,128);let r=new wt(e);return r.colorSpace=ut,r}var Ku=[],Em=[];for(let i=0;i<3;i++){let e=new yn({map:B_(),transparent:!0,opacity:0,depthWrite:!1,fog:!1});Ku.push(e);let t=new $e(new Xt([16,22,28][i],[9,12,15][i]),e);t.rotation.x=-Math.PI/2,t.position.set(0,.035+i*.001,-12-i*5),t.raycast=()=>{},ye.add(t),Em.push(t)}var Kl=36,Ol=new tt,Ai=new Float32Array(Kl*4);{let i=Vt(61951);for(let e=0;e<Kl;e++)Ai[e*4]=(i()-.5)*22,Ai[e*4+1]=i(),Ai[e*4+2]=-2-i()*12,Ai[e*4+3]=i()*6.283}var O_=new Float32Array(Kl*3);Ol.setAttribute("position",new Ut(O_,3));var $u=new $n({size:.075,map:Ns(),color:16775920,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0,fog:!1}),Na=new li(Ol,$u);Na.frustumCulled=!1;Na.raycast=()=>{};ye.add(Na);var tr=new hn;{let i=new xt({color:7317564,roughness:.9}),e=new $e(new qi(.018,.026,.62,6),i);e.position.y=.31,tr.add(e);let t=new xt({color:10409050,roughness:.85,side:Tn});for(let r of[-1,1]){let s=new $e(new ci(.15,8,6),t);s.scale.set(1.5,.32,.85),s.position.set(r*.15,.6,0),s.rotation.z=r*.55,tr.add(s)}let n=new _s(new Rr({map:am("rgba(210,255,180,0.55)","rgba(180,240,150,0.18)"),blending:Qn,depthWrite:!1,transparent:!0,opacity:.7,fog:!1}));n.scale.setScalar(1.5),n.position.y=.45,tr.add(n)}tr.position.set(1.6,.01,-.6);tr.visible=!1;ye.add(tr);var $l=26,Fl=new tt,er=new Float32Array($l*4);{let i=Vt(24301);for(let e=0;e<$l;e++)er[e*4]=(i()-.5)*6,er[e*4+1]=i(),er[e*4+2]=-.4-i()*2.4,er[e*4+3]=i()*6.283}var F_=new Float32Array($l*3);Fl.setAttribute("position",new Ut(F_,3));var bm=new $n({size:.075,map:Ns(),color:13081180,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0,fog:!1}),Ba=new li(Fl,bm);Ba.frustumCulled=!1;Ba.raycast=()=>{};ye.add(Ba);var zl=[],As=[];(()=>{let i=Vt(6221057),e=[];for(let u=0;u<130;u++){let m=u<70?(i()-.5)*3:(i()-.5)*26,_=.055+i()*.05,f=.1+i()*.34,g=(i()-.5)*.1;if(e.push(m,-.02,_,m+g,-.02-f,_+(i()-.5)*.02),i()>.55){let v=f*(.4+i()*.3);e.push(m+g*.5,-.02-v,_,m+g*.5+(i()-.5)*.1,-.02-v-.06,_)}}let t=new tt;t.setAttribute("position",new Ue(e,3));let n=new ra(t,new xs({color:9073744,transparent:!0,opacity:.34,depthWrite:!1,fog:!1}));n.raycast=()=>{},ye.add(n);let r=105,s=new xt({color:7164984,roughness:1,flatShading:!0}),a=new un(new Yi(1,0),s,r),o=new Fe,l=new Pt,c=new M,h=new M,d=new xe;for(let u=0;u<r;u++){let p=u<85;h.set(p?(i()-.5)*2.4:(i()-.5)*24,-.02-i()*.3,.055+i()*.045);let m=.005+Math.pow(i(),2)*.02;l.setFromEuler(new Wt(i()*3,i()*3,i()*3)),c.set(m*1.4,m*.8,m*.5),o.compose(h,l,c),a.setMatrixAt(u,o),d.setHex(i()>.5?9071687:5915180),a.setColorAt(u,d)}a.instanceMatrix.needsUpdate=!0,a.instanceColor&&(a.instanceColor.needsUpdate=!0),a.raycast=()=>{},ye.add(a)})();var wm=new hn,ba=[];function pd(i,e,t,n,r,s,a){let h=Vt(n)()*100,d=[],u=[];for(let f=0;f<=256;f++){let g=f/256*Math.PI*2,v=Math.cos(g)*i,x=Math.sin(g)*i,y=ei(Math.cos(g)*3.3+h,Math.sin(g)*3.3+h*.7),A=ei(Math.cos(g)*8.6+h*2,Math.sin(g)*8.6),T=1-Math.abs(2*y-1),P=e+t*(.1+.9*Math.pow(T*.72+A*.28,1.55));for(let U=0;U<=7;U++){let B=U/7,V=-9+(P+9)*B;d.push(v,V,x)}}for(let f=0;f<256;f++){let g=f*8,v=(f+1)*8;for(let x=0;x<7;x++)u.push(g+x,g+x+1,v+x,g+x+1,v+x+1,v+x)}let p=new tt;p.setAttribute("position",new Ue(d,3)),p.setIndex(u);let m=new Sn({uniforms:{uBottomColor:{value:new xe(r.bottom)},uTopColor:{value:new xe(r.top)},uSnowColor:{value:new xe(r.snow||16055295)},uBaseY:{value:e},uHeight:{value:t},uSnowLine:{value:e+t*(r.snowLine??.55)},uSnowStrength:{value:a||0},uOpacity:{value:s}},vertexShader:`
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
    `,transparent:s<.99,depthWrite:s>=.99,side:Tn,fog:!1});ba.push(m);let _=new $e(p,m);_.frustumCulled=!1,wm.add(_)}pd(172,-1.4,24,1919,{bottom:12966374,top:8298424,snow:16055295,snowLine:.54},.9,.62);pd(124,-1.1,12.5,2027,{bottom:12441286,top:7904131},1,0);pd(82,-.9,5.2,3121,{bottom:10468747,top:7312496},1,0);ye.add(wm);function z_(){let t=document.createElement("canvas");t.width=512,t.height=128;let n=t.getContext("2d");n.clearRect(0,0,512,128);for(let s=0;s<90;s++){let a=Math.random()*512,o=128*(.35+Math.random()*.45),l=20+Math.random()*70,c=n.createRadialGradient(a,o,0,a,o,l);c.addColorStop(0,`rgba(255,248,235,${.035+Math.random()*.05})`),c.addColorStop(1,"rgba(255,248,235,0)"),n.fillStyle=c,n.fillRect(a-l,o-l,l*2,l*2)}let r=new wt(t);return r.colorSpace=ut,r}var H_=z_(),fd=new hn,Qu=[];for(let i=0;i<3;i++){let e=new yn({map:H_,transparent:!0,opacity:[.16,.1,.06][i],depthWrite:!1,fog:!1,blending:Kp,side:Tn});Qu.push(e);let t=new $e(new Xt([110,130,150][i],[5.5,7,9][i]),e);t.position.set(0,[.8,1.8,3.2][i],[-18,-30,-46][i]),t.renderOrder=1,fd.add(t)}ye.add(fd);var Ql=280,Hl=new tt,wl=new Float32Array(Ql*3),Tm=new Float32Array(Ql);for(let i=0;i<Ql;i++)wl[i*3]=(Math.random()-.5)*22,wl[i*3+1]=.3+Math.random()*6.5,wl[i*3+2]=-10+Math.random()*12,Tm[i]=Math.random()*Math.PI*2;Hl.setAttribute("position",new Ut(wl,3));var ed=new $n({size:.042,map:Ns(),transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0,color:16770736,blending:Qn,fog:!1}),Am=new li(Hl,ed);Am.frustumCulled=!1;ye.add(Am);(()=>{let i=new xt({color:9076851,roughness:.9,flatShading:!0}),e=Vt(77);for(let t=0;t<8;t++){let n=new $e(new Yi(.09+e()*.12,0),i);n.position.set(_e(e,-9,9),_e(e,-2.9,-.7),-.02),n.rotation.set(e()*3,e()*3,e()*3),n.scale.set(1.1,.55+e()*.25,.24),ye.add(n)}})();function k_(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.clearRect(0,0,256,256),t.lineCap="round";for(let r=0;r<20;r++){let s=256*(.03+Math.random()*.94),a=256*(.08+Math.random()*.16),o=(Math.random()-.5)*256*.28,l=.72+Math.random()*.22;t.strokeStyle=`rgba(${76*l|0},${118*l|0},${48*l|0},0.95)`,t.lineWidth=1.4+Math.random()*1.8,t.beginPath(),t.moveTo(s,256),t.quadraticCurveTo(s+o*.4,256-a*.6,s+o,256-a),t.stroke()}for(let r=0;r<34;r++){let s=256*(.04+Math.random()*.92),a=256*(.26+Math.random()*.52),o=(Math.random()-.5)*256*.55,l=1.2+Math.random()*2,c=t.createLinearGradient(0,256,0,256-a),h=.82+Math.random()*.26;c.addColorStop(0,`rgba(${58*h|0},${92*h|0},${36*h|0},1)`),c.addColorStop(.5,`rgba(${98*h|0},${148*h|0},${64*h|0},1)`),c.addColorStop(.86,`rgba(${146*h|0},${190*h|0},${98*h|0},1)`),c.addColorStop(1,`rgba(${180*h|0},${212*h|0},${128*h|0},0.9)`),t.strokeStyle=c,t.lineWidth=l,t.beginPath(),t.moveTo(s,256),t.quadraticCurveTo(s+o*.35,256-a*.6,s+o,256-a),t.stroke()}for(let r=0;r<7;r++){let s=256*(.08+Math.random()*.84),a=256*(.5+Math.random()*.34),o=(Math.random()-.5)*256*.3;t.strokeStyle="rgba(126,160,84,0.9)",t.lineWidth=1.1,t.beginPath(),t.moveTo(s,256),t.quadraticCurveTo(s+o*.3,256-a*.68,s+o,256-a),t.stroke(),t.fillStyle="rgba(168,190,108,0.9)";for(let l=0;l<5;l++)t.beginPath(),t.ellipse(s+o+(l-2)*2.4,256-a+3+Math.abs(l-2)*1.3,1.3,3.1,.5,0,6.283),t.fill()}let n=new wt(e);return n.colorSpace=ut,n.anisotropy=8,n}function V_(){let i=new tt,e=[],t=[],n=[],r=[[-.5,0,.5,0],[0,-.5,0,.5]],s=0;for(let[a,o,l,c]of r)e.push(a,0,o,l,0,c,l,1,c,a,1,o),t.push(0,0,1,0,1,1,0,1),n.push(s,s+1,s+2,s,s+2,s+3),s+=4;return i.setAttribute("position",new Ue(e,3)),i.setAttribute("uv",new Ue(t,2)),i.setIndex(n),i.computeVertexNormals(),i}var G_=k_(),Rm=V_(),Cm={value:0};function W_(i,e=1){return i.onBeforeCompile=t=>{t.uniforms.uGrassTime=Cm,t.vertexShader=`uniform float uGrassTime;
`+t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
       float wx = instanceMatrix[3][0];
       float wz = instanceMatrix[3][2];
       float gust = sin(uGrassTime * 1.35 + wx * 0.28 + wz * 0.22) * 0.5 + sin(uGrassTime * 2.7 + wx * 0.6) * 0.22;
       transformed.x += gust * ${e.toFixed(2)} * smoothstep(0.0, 1.0, position.y);
       transformed.z += gust * ${(e*.45).toFixed(2)} * smoothstep(0.0, 1.0, position.y);`)},i}function X_(i){let e=Vt(i),t=16e3,n=W_(new xt({map:G_,alphaTest:.28,side:Tn,roughness:1,metalness:0,transparent:!0,opacity:1}),.085),r=new un(Rm,n,t);r.receiveShadow=!0,r.castShadow=!1;let s=new Fe,a=new Pt,o=new M,l=new M,c=new xe;for(let h=0;h<t;h++){let d=e()*Math.PI,u=.3+Math.pow(e(),.92)*34;if(e()<he(7,34,u)*.78){h--;continue}l.set(Math.cos(d)*u,0,-Math.sin(d)*u),a.setFromAxisAngle(hi,e()*Math.PI*2);let p=Math.min(1,Math.max(0,(u-2)/34)),m=1-.2*p,_=1+.38*(1-he(2.5,9,u)),f=(.16+e()*.22)*m*_,g=(.11+e()*.11)*m;o.set(g*(.8+e()*.5),f,g*(.8+e()*.5)),s.compose(l,a,o),r.setMatrixAt(h,s);let v=(.84+e()*.3)*(1-.04*p);c.setRGB(v*(.96+e()*.06),v,v*(.86+e()*.1)),r.setColorAt(h,c)}return r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0),r}function j_(){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");t.clearRect(0,0,128,128);let n=128/2,r=128*.42;for(let a=0;a<5;a++){let o=a/5*Math.PI*2;t.fillStyle="rgba(255,252,244,0.98)",t.beginPath(),t.ellipse(n+Math.cos(o)*128*.14,r+Math.sin(o)*128*.14,128*.11,128*.075,o,0,6.283),t.fill()}t.fillStyle="rgba(243,190,74,1)",t.beginPath(),t.arc(n,r,128*.052,0,6.283),t.fill(),t.strokeStyle="rgba(84,120,52,0.95)",t.lineWidth=3,t.beginPath(),t.moveTo(n,r+128*.06),t.quadraticCurveTo(n+4,128*.75,n-3,128*.98),t.stroke();let s=new wt(e);return s.colorSpace=ut,s.anisotropy=4,s}var Pm=j_();function q_(i){let e=Vt(i),t=1400,n=new xt({map:Pm,alphaTest:.35,side:Tn,roughness:.9,metalness:0,transparent:!0}),r=new un(Rm,n,t);r.castShadow=!1,r.receiveShadow=!1;let s=new Fe,a=new Pt,o=new M,l=new M,c=new xe;for(let h=0;h<t;h++){let d=e()*Math.PI,u=.8+Math.pow(e(),.85)*12;l.set(Math.cos(d)*u,.01,-Math.sin(d)*u),a.setFromAxisAngle(hi,e()*Math.PI*2);let p=.075+e()*.11;o.set(p,p,p),s.compose(l,a,o),r.setMatrixAt(h,s);let m=e();m<.55?c.setHex(16776693):m<.82?c.setHex(16771496):m<.95?c.setHex(16766692):c.setHex(14084351),r.setColorAt(h,c)}return r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0),r}function Y_(i){let e=Vt(i),t=1600,n=new xt({map:md,alphaTest:.4,side:Tn,roughness:.95,metalness:0,transparent:!0,opacity:0}),r=new un(kl,n,t);r.receiveShadow=!0,r.castShadow=!1;let s=new Fe,a=new Pt,o=new M,l=new M,c=new Wt,h=new xe,d=[14242860,15243818,13185068,11827748,10382124],u=[];for(let p=0;p<t;p++){let m=e()*Math.PI,_=.4+Math.pow(e(),.75)*10.5;l.set(Math.cos(m)*_,.025+e()*.025,-Math.sin(m)*_),a.setFromEuler(c.set(-Math.PI/2+(e()-.5)*.35,e()*Math.PI*2,(e()-.5)*.25));let f=.16+e()*.16;o.set(f,f,f),s.compose(l,a,o),r.setMatrixAt(p,s),h.setHex(d[Math.floor(e()*d.length)]),r.setColorAt(p,h),u.push({pos:l.clone(),quat:a.clone(),size:f,color:h.clone()})}return r.userData.leafInfo=u,r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0),r}function Z_(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.clearRect(0,0,256,256);let n=t.createLinearGradient(0,256*.06,0,256*.94);n.addColorStop(0,"#e8f3dd"),n.addColorStop(.45,"#ffffff"),n.addColorStop(1,"#dfe9d2"),t.fillStyle=n,t.beginPath(),t.moveTo(256/2,256*.04),t.bezierCurveTo(256*.95,256*.3,256*.9,256*.8,256/2,256*.96),t.bezierCurveTo(256*.1,256*.8,256*.05,256*.3,256/2,256*.04),t.closePath(),t.fill(),t.strokeStyle="rgba(112,140,96,0.45)",t.lineWidth=2.4,t.beginPath(),t.moveTo(256/2,256*.09),t.lineTo(256/2,256*.92),t.stroke(),t.lineWidth=1.1,t.strokeStyle="rgba(112,140,96,0.3)";for(let s=1;s<=6;s++){let a=256*(.1+.8*(s/7)),o=.34*Math.sin(Math.PI*(s/7))*256;t.beginPath(),t.moveTo(256/2,a),t.quadraticCurveTo(256/2+o*.6,a+256*.03,256/2+o,a+256*.09),t.stroke(),t.beginPath(),t.moveTo(256/2,a),t.quadraticCurveTo(256/2-o*.6,a+256*.03,256/2-o,a+256*.09),t.stroke()}let r=new wt(e);return r.colorSpace=ut,r.anisotropy=8,r}function J_(){let i=new Xt(1,1.35,2,4),e=i.attributes.position;for(let t=0;t<e.count;t++){let n=e.getX(t),s=(e.getY(t)+.675)/1.35,a=.13*(n*n*4-.4),o=-.1*s*s;e.setZ(t,a+o)}return i.computeVertexNormals(),i}var md=Z_(),kl=J_(),Ps=new hn;ye.add(Ps);var Pf=new xt({map:md,alphaTest:.38,side:Tn,roughness:.86,metalness:0});function K_(){let t=document.createElement("canvas");t.width=256,t.height=256;let n=t.getContext("2d");n.fillStyle="#ffffff",n.fillRect(0,0,256,256);for(let s=0;s<220;s++){let a=Math.random()*256,o=30+Math.random()*160,l=Math.random()*256,c=Math.random()>.45;n.strokeStyle=c?`rgba(64,44,28,${.05+Math.random()*.11})`:`rgba(255,250,240,${.08+Math.random()*.16})`,n.lineWidth=.8+Math.random()*2.6,n.beginPath(),n.moveTo(a,l),n.quadraticCurveTo(a+(Math.random()-.5)*8,l+o*.5,a+(Math.random()-.5)*12,l+o),n.stroke()}for(let s=0;s<500;s++)n.fillStyle=`rgba(40,26,14,${.05+Math.random()*.14})`,n.fillRect(Math.random()*256,Math.random()*256,1+Math.random()*2,1+Math.random()*3);let r=new wt(t);return r.colorSpace=ut,r.wrapS=r.wrapT=br,r.repeat.set(1,3),r.anisotropy=4,r}var $i=K_(),$_=new xt({color:5916210,map:$i,bumpMap:$i,bumpScale:.09,roughness:.93,metalness:0}),pe=null;function Q_(i){let e=Vt(i),t=new hn,n=new hn;t.add(n);let r=[],s=[],a=[],o=4,l=[.24,.16,.12,.08,.05];function c(q,de,be){let Ee=q.length,ae=[],De=[],N=[],nt=[],Et=new M,Pe=new M,gt=new M,zt=new M().subVectors(q[1],q[0]).normalize();Pe.set(0,1,0),Math.abs(Pe.dot(zt))>.9&&Pe.set(1,0,0),Pe.addScaledVector(zt,-Pe.dot(zt)).normalize();for(let qe=0;qe<Ee;qe++){let Tt=q[Math.max(0,qe-1)],mt=q[Math.min(Ee-1,qe+1)];Et.subVectors(mt,Tt).normalize(),Pe.addScaledVector(Et,-Pe.dot(Et)).normalize(),gt.crossVectors(Et,Pe).normalize();for(let ke=0;ke<be;ke++){let ot=ke/be*Math.PI*2,lt=Math.cos(ot),dt=Math.sin(ot),O=Pe.x*lt+gt.x*dt,k=Pe.y*lt+gt.y*dt,ce=Pe.z*lt+gt.z*dt,ct=1+.018*Math.sin(ke*3.2+qe*.9)+.009*Math.sin(ke*7.1+qe*1.7),it=de[qe]*ct;ae.push(q[qe].x+O*it,q[qe].y+k*it,q[qe].z+ce*it),De.push(O,k,ce),N.push(ke/be,qe/(Ee-1)*2)}}for(let qe=0;qe<Ee-1;qe++)for(let Tt=0;Tt<be;Tt++){let mt=qe*be+Tt,ke=qe*be+(Tt+1)%be,ot=(qe+1)*be+Tt,lt=(qe+1)*be+(Tt+1)%be;nt.push(mt,ke,ot,ke,lt,ot)}let Mt=new tt;return Mt.setAttribute("position",new Ue(ae,3)),Mt.setAttribute("normal",new Ue(De,3)),Mt.setAttribute("uv",new Ue(N,2)),Mt.setIndex(nt),Mt.computeBoundingSphere(),Mt}function h(q,de,be,Ee,ae,De,N){let nt=ae===0?16:ae===1?11:7,Et=ae===0?16:ae===1?10:7,Pe=[q.clone()],gt=[Ee],zt=de.clone(),Mt=new M().crossVectors(de,hi);Mt.lengthSq()<1e-6&&Mt.set(1,0,0),Mt.normalize().applyAxisAngle(de,e()*Math.PI*2);let qe=ae===0?_e(e,.24,.52):_e(e,.22,.62),Tt=be/(nt-1);for(let lt=1;lt<nt;lt++){zt.applyAxisAngle(Mt,qe/(nt-1)+_e(e,-.025,.025)).normalize(),Pe.push(Pe[lt-1].clone().addScaledVector(zt,Tt));let dt=lt/(nt-1);gt.push(Ee*(1-.3*dt)*(1-.3*Math.pow(dt,4)))}Pe.push(Pe[nt-1].clone().addScaledVector(zt,Tt*.35)),gt.push(gt[nt-1]*.85);let mt=Pe.length,ke=c(Pe,gt,Et);a.push(ke);let ot=new $e(ke,$_);return ot.name="branch-d"+ae+"#"+r.length,ot.userData.part=ae===0?"trunk":"branch",ot.castShadow=!0,ot.receiveShadow=!1,ot.frustumCulled=!1,t.add(ot),r.push({mesh:ot,start:q.clone(),len:be,depth:ae,g0:De,g1:N,rings:mt,radial:Et,pts:Pe,radii:gt,basePos:Float32Array.from(ke.attributes.position.array),lastK:-1}),{end:Pe[mt-1].clone(),endDir:zt.clone(),pts:Pe,radii:gt,endR:gt[mt-1]}}function d(q,de,be){let Ee=new M().crossVectors(q,hi);Ee.lengthSq()<1e-5&&Ee.set(1,0,0),Ee.normalize();let ae=new M().crossVectors(q,Ee).normalize(),De=q.clone().multiplyScalar(Math.cos(de));return De.addScaledVector(Ee,Math.cos(be)*Math.sin(de)),De.addScaledVector(ae,Math.sin(be)*Math.sin(de)),De.normalize()}function u(q,de){let be=de*(q.length-1),Ee=Math.min(q.length-2,Math.max(0,Math.floor(be))),ae=be-Ee,De=q[Ee].clone().lerp(q[Ee+1],ae),N=new M().subVectors(q[Ee+1],q[Ee]).normalize();return{p:De,tangent:N}}function p(q,de,be,Ee,ae,De){let N=Math.min(1,De+l[ae]),{end:nt,endDir:Et,pts:Pe,radii:gt,endR:zt}=h(q,de,be,Ee,ae,De,N),Mt=r[r.length-1];if(ae===0&&De<.12)for(let ke=0;ke<15;ke++){let ot=_e(e,.5,1),{p:lt,tangent:dt}=u(Pe,ot),O=new M().crossVectors(dt,hi);O.lengthSq()<.02&&O.set(1,0,0),O.normalize().applyAxisAngle(dt,e()*Math.PI*2),lt.addScaledVector(O,.02+e()*.07),s.push({pos:lt,dir:O.clone().addScaledVector(dt,_e(e,.1,.7)).normalize(),g:.15+ke*.012,stag:e(),sizeScale:.45,branch:Mt,siteT:ot})}if(ae>=1){let ke=ae===1?34:ae===2?48:ae===3?84:140;for(let ot=0;ot<ke;ot++){let lt=_e(e,ae===o?.08:.24,1),{p:dt,tangent:O}=u(Pe,lt),k=new M().crossVectors(O,hi);k.lengthSq()<.02&&k.set(1,0,0),k.normalize().applyAxisAngle(O,e()*Math.PI*2),dt.addScaledVector(k,.03+e()*.2);let ce=k.clone().multiplyScalar(_e(e,.65,1)).addScaledVector(O,_e(e,-.4,.6)).normalize();s.push({pos:dt,dir:ce,g:Math.min(.82,De+.02),stag:e(),branch:Mt,siteT:lt})}}if(ae>=1)for(let ke=0;ke<8;ke++){let ot=_e(e,.86,1),{p:lt,tangent:dt}=u(Pe,ot),O=new M().crossVectors(dt,hi);O.lengthSq()<.02&&O.set(1,0,0),O.normalize().applyAxisAngle(dt,e()*Math.PI*2),lt.addScaledVector(O,.02+e()*.1),s.push({pos:lt,dir:O.clone().addScaledVector(dt,_e(e,-.3,.5)).normalize(),g:Math.min(.9,De+.03),stag:e(),branch:Mt,siteT:ot})}if(ae>=o)return;let qe=be*_e(e,.58,.7),Tt=Ee*_e(e,.58,.7);if(ae<=1){let ke=d(Et,_e(e,.14,.32),e()*Math.PI*2);ke.y-=.04+.05*ae,ke.z>-.02&&(ke.z=-.02-e()*.12),p(nt,ke.normalize(),qe*.82,Math.max(.009,zt*_e(e,.96,1.04)),ae+1,N)}let mt=ae===0?5:ae===1?4:ae===2?2:1;for(let ke=0;ke<mt;ke++){let ot=ae<=1?ke/mt*Math.PI*2+_e(e,-.42,.42):e()*Math.PI*2,lt=_e(e,.6,1.14),dt=ae===0?_e(e,.3,.85):_e(e,.22,.94),{p:O,tangent:k}=u(Pe,dt),ce=Math.min(gt.length-1,Math.max(0,Math.round(dt*(gt.length-1)))),ct=gt[ce],it=d(k,lt,ot);it.y-=.02+.02*ae,it.z>-.02&&(it.z=-.02-e()*.15),p(O.clone().addScaledVector(k,-.07),it.normalize(),qe*_e(e,.92,1.18),Math.max(.01,ct*_e(e,.68,.86)),ae+1,N)}if(ae===0)for(let ke=0;ke<3;ke++){let ot=_e(e,.16,.42),{p:lt,tangent:dt}=u(Pe,ot),O=Math.min(gt.length-1,Math.max(0,Math.round(ot*(gt.length-1)))),k=gt[O],ce=ke/3*Math.PI*2+_e(e,-.5,.5),ct=d(dt,_e(e,.95,1.2),ce);ct.y-=_e(e,.02,.07),ct.z>-.02&&(ct.z=-.02-e()*.12),p(lt.clone().addScaledVector(dt,-.06),ct.normalize(),qe*_e(e,.78,1.02),Math.max(.018,k*_e(e,.45,.62)),1,N+.012*ke)}}let m=_e(e,3.15,3.6);p(new M(0,0,0),new M(_e(e,-.1,.1),1,_e(e,-.1,.1)).normalize(),m,_e(e,.17,.21),0,.06);let _=[],f=new xt({color:7295288,map:$i,bumpMap:$i,bumpScale:.035,roughness:.94,metalness:0,flatShading:!1}),g=new xt({color:9268301,map:$i,bumpMap:$i,bumpScale:.03,roughness:.9,metalness:0,flatShading:!1});function v(q,de,be,Ee,ae,De,N=!1){let nt=[q.clone()],Et=[Ee],Pe=de.clone().normalize(),gt=be/ae,zt=e()*Math.PI*2,Mt=e()*Math.PI*2;for(let qe=1;qe<=ae;qe++){let Tt=qe/ae;Pe.x+=_e(e,-De,De)+Math.sin(qe*.72+zt)*De*.62,Pe.z+=_e(e,-De*.55,De*.55)+Math.cos(qe*.55+Mt)*De*.38,Pe.y-=N?.006+.02*Tt:.015+.075*Tt,Pe.normalize();let mt=nt[qe-1].clone().addScaledVector(Pe,gt);mt.y=Math.max(g_,mt.y),mt.x>11?mt.x=11:mt.x<-11&&(mt.x=-11),mt.z=Math.min(.62,Math.max(.05,mt.z)),nt.push(mt),Et.push(Math.max(.0028,Ee*(1-(N?.72:.88)*Math.pow(Tt,.8))))}return{pts:nt,radii:Et}}function x(q,de,be,Ee,ae,De){let N=c(q,de,be);a.push(N);let nt=new $e(N,De<=1?f:g);nt.userData.part="root",nt.receiveShadow=!1,nt.castShadow=!1,nt.frustumCulled=!1,n.add(nt);let Et={mesh:nt,pts:q,radii:de,rings:q.length,radial:be,basePos:Float32Array.from(N.attributes.position.array),lastK:-1};return _.push({...Et,g0:Ee,g1:ae,depth:De}),Et}function y(q,de,be,Ee,ae,De){let N=ae===0?24:ae===1?12:ae===2?7:5,nt=ae===0?12:ae===1?8:ae===2?6:4,{pts:Et,radii:Pe}=v(q,de,be,Ee,N,ae===0?.2:.28,ae===0),gt=[.025,.02,.015,.01][Math.min(3,ae)],zt=Math.min(.86,De+gt);if(x(Et,Pe,nt,De,zt,ae),ae>=3)return;let Mt=ae===0?14:ae===1?3:1;for(let qe=0;qe<Mt;qe++){let Tt=ae===0?_e(e,.06,.94):_e(e,.18,.92),mt=Math.min(N,Math.max(1,Math.round(Tt*N))),ke=Et[mt].clone(),ot=Pe[mt],lt=e()<.5?-1:1,dt=_e(e,.6,1.35),O=new M(lt*Math.sin(dt)+_e(e,-.3,.3),-Math.cos(dt)*_e(e,.3,.75),_e(e,-.25,.5)).normalize();y(ke,O,be*_e(e,.42,.62),Math.max(.01,ot*_e(e,.56,.8)),ae+1,Math.max(.006,zt-.015+.01*qe))}}y(new M(0,-.05,.06),new M(_e(e,-.1,.1),-1,_e(e,-.06,.14)),_e(e,4.7,5.5),.165,0,.022);for(let q=0;q<8;q++){let de=q/8*Math.PI*2+_e(e,-.5,.5);y(new M(Math.cos(de)*.07,-.06,.02+Math.sin(de)*.05),new M(Math.cos(de)*1.1,-.55,Math.sin(de)*.5).normalize(),_e(e,1.9,2.6),.1,1,.03)}{let q=Vt(Math.floor(e()*1e9)^1592598564);for(let de=0;de<7;de++){let be=new M(_e(q,-1.7,1.7),-3.1-q()*1.5,.1+q()*.26),Ee=new M(_e(q,-.24,.24),-1,_e(q,-.1,.16)).normalize(),{pts:ae,radii:De}=v(be,Ee,_e(q,4.4,6.2),_e(q,.055,.095),18,.16,!0);x(ae,De,8,1+de*.012,1.2+de*.012,1)}for(let de=0;de<8;de++){let be=new M(_e(q,-2.8,2.8),-7.4-q()*1.1,.12+q()*.3),Ee=new M(_e(q,-.85,.85),-1,_e(q,-.1,.16)).normalize(),{pts:ae,radii:De}=v(be,Ee,_e(q,2,3),_e(q,.02,.038),10,.24,!1);x(ae,De,5,1.08+de*.012,1.26+de*.012,2)}}let A=[];for(let q=0;q<=8;q++){let de=q/8;A.push(new oe(.13+.2*Math.pow(1-de,1.15),-1.05*de))}let T=new ys(A,16);a.push(T);let P=new xt({color:6965808,map:$i,bumpMap:$i,bumpScale:.07,roughness:.98,metalness:0}),U=new $e(T,P);U.userData.part="root",U.position.set(0,-.015,0),U.scale.setScalar(.001),U.castShadow=!0,U.receiveShadow=!0,n.add(U);let B=[],V=[],j=Vt(Math.floor(e()*1e9)^1374496523);for(let q of _)for(let de=2;de<q.pts.length-1;de+=2){let be=q.pts[de],Ee=new M().subVectors(q.pts[de+1],q.pts[de-1]).normalize(),ae=new M().crossVectors(Ee,hi);ae.lengthSq()<1e-5&&ae.set(1,0,0),ae.normalize();let De=q.g0>=1?5:3;for(let N=0;N<De;N++){let nt=ae.clone().applyAxisAngle(Ee,j()*Math.PI*2),Et=.018+j()*.048,Pe=be.clone().addScaledVector(nt,Et);B.push(be.x,be.y,be.z,Pe.x,Pe.y,Pe.z),V.push(q.g1)}}let G=V.map((q,de)=>de).sort((q,de)=>V[q]-V[de]),J=new Float32Array(B.length);for(let q=0;q<G.length;q++){let de=G[q];for(let be=0;be<6;be++)J[q*6+be]=B[de*6+be]}let z=G.map(q=>V[q]),X=new tt;X.setAttribute("position",new Ut(J,3)),X.setDrawRange(0,0);let Z=new xs({color:10190684,transparent:!0,opacity:.42,depthWrite:!1,fog:!1}),se=new ra(X,Z);se.userData.part="root",se.raycast=()=>{},n.add(se),a.push(X);let te=Math.min(s.length,4e4),me=new un(kl,Pf,te);me.userData.part="leaf",me.instanceMatrix.setUsage(Zi),me.castShadow=!0,me.frustumCulled=!1,t.add(me);let Se=[],ie=new xe;for(let q=0;q<te;q++){let de=s[q],be=new Pt().setFromUnitVectors(hi,de.dir);be.multiply(new Pt().setFromAxisAngle(hi,e()*Math.PI*2));let Ee=new xe,ae=e();ae<.45?Ee.setHex(14836266):ae<.75?Ee.setHex(15708196):ae<.92?Ee.setHex(13185068):Ee.setHex(10320682);let De=de.pos.clone();De.z=Math.min(De.z,-.03-e()*.12),De.y=Math.max(.18,De.y);let N=de.branch?im(de.branch.pts,de.siteT):De.clone(),nt=De.clone().sub(N);Se.push({pos:De,quat:be,size:_e(e,.2,.34)*(de.sizeScale||1),grow:de.g,stag:de.stag,autumn:Ee,tone:_e(e,.82,1.14),phase:e()*Math.PI*2,spin:_e(e,.4,1.2),branch:de.branch,siteT:de.siteT,offset:nt}),me.setColorAt(q,ie.setHex(16777215))}me.instanceColor&&(me.instanceColor.needsUpdate=!0);let le=56,we=new ci(1,14,11),Te=new xt({roughness:.38,metalness:0}),fe=new un(we,Te,le);fe.userData.part="fruit",fe.instanceMatrix.setUsage(Zi),fe.castShadow=!0,fe.frustumCulled=!1,t.add(fe);let w=new qi(.008,.011,.075,5,1);w.translate(0,.037,0);let b=new xt({color:5980711,roughness:1,metalness:0}),L=new un(w,b,le);L.userData.part="fruit",L.instanceMatrix.setUsage(Zi),L.frustumCulled=!1,t.add(L);let D=[],R=Se.filter(q=>q.pos.y>1.2&&Math.hypot(q.pos.x,q.pos.z)>1.6),I=R.length>20?R:Se;for(let q=0;q<le;q++){let be=I[Math.floor(e()*I.length)].pos.clone();be.y-=.05+e()*.07,be.x+=_e(e,-.05,.05),be.z+=.3+e()*.2;let Ee=new xe,ae=e();ae<.62?Ee.setHex(12595754):ae<.86?Ee.setHex(14177580):Ee.setHex(14725690),D.push({pos:be,size:_e(e,.13,.2),ripe:Ee.clone(),quat:new Pt().setFromEuler(new Wt(e()*3,e()*3,e()*3)),phase:e()*Math.PI*2,stag:e()}),fe.setColorAt(q,Ee),L.setColorAt(q,ie.setHex(16777215))}fe.instanceColor&&(fe.instanceColor.needsUpdate=!0),L.instanceColor&&(L.instanceColor.needsUpdate=!0);let S=Math.min(1800,Math.floor(Se.length*.085)),C=new Xt(1,1),H=new yn({map:Pm,alphaTest:.3,side:Tn,transparent:!0,opacity:0,depthWrite:!1}),Q=new un(C,H,S);Q.userData.part="flower",Q.instanceMatrix.setUsage(Zi),Q.frustumCulled=!1,t.add(Q);let F=[],ee=new xe;for(let q=0;q<S;q++){let be=Se[Math.floor(e()*Se.length)].pos.clone();be.z+=.34+e()*.22,be.y+=e()*.06;let Ee=new Pt().setFromEuler(new Wt(e()*3,e()*3,e()*3)),ae=_e(e,.2,.31);F.push({pos:be,quat:Ee,size:ae}),e()<.45?ee.setHex(16771056):ee.setHex(16752326),Q.setColorAt(q,ee),Q.setMatrixAt(q,new Fe().compose(be,Ee,new M(ae,ae,ae)))}Q.instanceColor&&(Q.instanceColor.needsUpdate=!0),Q.instanceMatrix.needsUpdate=!0;let $=[];for(let q of r){if(q.depth<1)continue;let de=q.depth>=3?3:2;for(let be=0;be<de;be++){let Ee=Math.floor(_e(e,.25,.96)*(q.pts.length-1)),ae=q.pts[Ee].clone(),De=q.radii?q.radii[Ee]:.02;ae.y+=De*1.05+.008,$.push({pos:ae,s:.085+De*2.6})}}let re=new ci(1,6,4),Me=new xt({color:16252159,roughness:.82,metalness:0,transparent:!0,opacity:0}),ge=new un(re,Me,$.length);ge.userData.part="snow",ge.instanceMatrix.setUsage(Zi),ge.frustumCulled=!1,t.add(ge);let Ie=$.map(q=>({pos:q.pos,quat:new Pt().setFromEuler(new Wt(e()*.4,e()*3,e()*.4)),sx:q.s*_e(e,.75,1.15),sy:q.s*.62,sz:q.s*_e(e,.75,1.15)}));for(let q=0;q<Ie.length;q++){let de=Ie[q];ge.setMatrixAt(q,new Fe().compose(de.pos,de.quat,new M(de.sx,de.sy,de.sz)))}ge.instanceMatrix.needsUpdate=!0;let Oe=new xt({map:f_(),roughness:.52,metalness:.02}),Ge=new hn;Ge.userData.part="seed",Ge.position.set(0,.055,.07),Ge.rotation.set(.42,.6,.15);let We=new $e(new ci(.145,24,16,0,Math.PI*2,0,Math.PI*.5),Oe),Re=new $e(new ci(.145,24,16,0,Math.PI*2,Math.PI*.5,Math.PI*.5),Oe);We.scale.set(1,.78,1.3),Re.scale.set(1,.78,1.3),We.castShadow=!0,Re.castShadow=!0,Ge.add(We,Re);let et=new $e(new ha(.128,.006,6,32),new xt({color:2758924,roughness:1,metalness:0}));et.rotation.x=Math.PI/2,Ge.add(et),t.add(Ge);let st=Pf.clone(),ft=[];for(let q=0;q<2;q++){let de=new $e(kl,st);de.userData.part="cotyledon",de.scale.setScalar(.001),de.position.set(q===0?-.035:.035,.1,.03),de.rotation.set(q===0?.35:-.35,q===0?-1.15:1.15,q===0?.85:-.85),t.add(de),ft.push(de)}let Ce={group:t,rootSub:n,branches:r,leaves:me,leafData:Se,roots:_,flare:U,flareMat:P,rootMats:[f,g],rootHairMat:Z,rootHairs:se,hairThresholds:z,seedMesh:Ge,seedTop:We,seedBottom:Re,seedCrack:et,seedMat:Oe,cotyledons:ft,cotyledonMat:st,geos:a,fruits:fe,stems:L,fruitData:D,fruitGeo:we,fruitMat:Te,stemGeo:w,stemMat:b,blossoms:Q,blossomMat:H,blossomGeo:C,blossomData:F,snowCaps:ge,snowCapGeo:re,snowCapMat:Me,snowCapData:Ie,radius:0};Ps.add(t);let je=0;for(let q of r)je=Math.max(je,q.start.y+q.len);return Ce.height=je,Ce}function ex(i){if(i){Ps.remove(i.group);for(let e of i.geos)e.dispose();i.leaves.dispose(),i.fruits&&i.fruits.dispose(),i.stems&&i.stems.dispose(),i.seedMesh.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(e.material.map&&e.material.map.dispose(),e.material.dispose())}),i.cotyledonMat.dispose();for(let e of i.rootMats)e.dispose();i.rootHairMat&&i.rootHairMat.dispose(),i.flareMat&&i.flareMat.dispose(),i.fruitGeo.dispose(),i.fruitMat.dispose(),i.stemGeo.dispose(),i.stemMat.dispose(),i.blossoms&&(i.blossoms.dispose(),i.blossomMat.dispose(),i.blossomGeo.dispose()),i.snowCaps&&(i.snowCaps.dispose(),i.snowCapMat.dispose(),i.snowCapGeo.dispose())}}function Ns(){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.5,"rgba(255,255,255,0.75)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new wt(e);return r.colorSpace=ut,r}var qa=9e3,Vl=new tt,Tl=new Float32Array(qa*3),Im=new Float32Array(qa),td=new Float32Array(qa);for(let i=0;i<qa;i++)Tl[i*3]=(Math.random()-.5)*56,Tl[i*3+1]=Math.random()*26,Tl[i*3+2]=-24+Math.random()*28,Im[i]=.3+Math.random()*.55,td[i]=Math.random()*Math.PI*2;Vl.setAttribute("position",new Ut(Tl,3));var Lm=new $n({size:.22,map:Ns(),transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0,color:16777215,fog:!1}),Gl=new li(Vl,Lm);Gl.frustumCulled=!1;ye.add(Gl);function tx(){let t=document.createElement("canvas");t.width=32,t.height=128;let n=t.getContext("2d"),r=n.createLinearGradient(0,0,0,128);r.addColorStop(0,"rgba(210,230,245,0)"),r.addColorStop(.25,"rgba(220,238,250,0.55)"),r.addColorStop(.75,"rgba(235,246,255,0.75)"),r.addColorStop(1,"rgba(235,246,255,0)"),n.fillStyle=r,n.fillRect(32*.4,0,32*.2,128);let s=new wt(t);return s.colorSpace=ut,s}var ec=1400,Wl=new tt,Al=new Float32Array(ec*3),Um=new Float32Array(ec);for(let i=0;i<ec;i++)Al[i*3]=(Math.random()-.5)*24,Al[i*3+1]=Math.random()*8,Al[i*3+2]=-9+Math.random()*9,Um[i]=10+Math.random()*8;Wl.setAttribute("position",new Ut(Al,3));var Dm=new $n({size:.46,map:tx(),transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0,color:14084342,fog:!1}),Xl=new li(Wl,Dm);Xl.frustumCulled=!1;ye.add(Xl);var nx=[[16,31,.62],[40,54,.55],[62,72,.45],[96,106,.42]];function ix(i){let e=0;for(let[t,n,r]of nx)if(i>t&&i<n){let s=(i-t)/(n-t);e=Math.max(e,r*he(0,.18,s)*(1-he(.82,1,s)))}return e}var Pi=220,Nm=new xt({map:md,alphaTest:.45,side:Tn,roughness:.9,transparent:!1}),Rn=new un(kl,Nm,Pi);Rn.instanceMatrix.setUsage(Zi);Rn.frustumCulled=!1;var Oa=[],Rs=new Fe().makeScale(1e-4,1e-4,1e-4);for(let i=0;i<Pi;i++)Oa.push({life:0,pos:new M,vel:new M,rot:new M,spin:new M,size:.2,color:new xe(16777215)}),Rn.setMatrixAt(i,Rs),Rn.setColorAt(i,Sl.setHex(16777215));ye.add(Rn);var wa=0;function rx(i){let e=Oa[wa];wa=(wa+1)%Pi,e.life=1,e.pos.set((Math.random()-.5)*7,1+Math.random()*5.5,(Math.random()-.5)*7),e.vel.set((Math.random()-.5)*.5,-(.5+Math.random()*.5),(Math.random()-.5)*.5),e.rot.set(Math.random()*6.28,Math.random()*6.28,Math.random()*6.28),e.spin.set((Math.random()-.5)*2.4,(Math.random()-.5)*2.4,(Math.random()-.5)*2.4),e.size=.16+Math.random()*.1,e.color.copy(i),Rn.setColorAt((wa+Pi-1)%Pi,i),Rn.instanceColor&&(Rn.instanceColor.needsUpdate=!0)}var Le={theta:1.46,phi:1.46,radius:12.5,dir:1,target:new M(0,3.3,0)},Qt={theta:Le.theta,phi:Le.phi,radius:Le.radius},sx=!!(window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches),fn={theta:0,phi:0},If=0,Aa=Math.PI/2-.36,Ra=Math.PI/2+.36,xa=[[0,.1,.9],[18,.08,1.1],[32,0,1.3],[42,-.55,2.7],[56,-.7,3.1],[70,0,1.8],[76,.35,2.2],[94,1.2,3.8],[108,2.2,5.2],[120,3,10.8]];function ku(i){if(i>=xa[xa.length-1][0])return null;for(let e=1;e<xa.length;e++){let[t,n,r]=xa[e];if(i<=t){let[s,a,o]=xa[e-1],l=he(0,1,(i-s)/Math.max(.001,t-s));return{targetY:a+(n-a)*l,viewH:o+(r-o)*l}}}return null}var Or=-999,Fn=new Map,Ca=0,Lf=0,Pn=en.domElement;Pn.style.touchAction="none";Pn.addEventListener("pointerdown",i=>{Fn.set(i.pointerId,{x:i.clientX,y:i.clientY,sx:i.clientX,sy:i.clientY,moved:!1}),Or=performance.now(),fn.theta=0,fn.phi=0,Pn.setPointerCapture(i.pointerId),document.body.classList.add("dragging")});Pn.addEventListener("pointermove",i=>{let e=Fn.get(i.pointerId);if(!e)return;let t=Math.hypot(i.clientX-e.sx,i.clientY-e.sy);if(!e.moved){if(t<=9){e.x=i.clientX,e.y=i.clientY;return}e.moved=!0,e.x=i.clientX,e.y=i.clientY,Or=performance.now();return}let n=i.clientX-e.x,r=i.clientY-e.y;if(e.x=i.clientX,e.y=i.clientY,Or=performance.now(),Fn.size===1){let s=-n*.006,a=-r*.005;Le.theta=Ot(Le.theta+s,Aa,Ra),Le.phi=Ot(Le.phi+a,.42,1.52);let o=performance.now(),l=Math.max(.008,(o-If)/1e3);If=o,fn.theta=fn.theta*.55+s/l*.45,fn.phi=fn.phi*.55+a/l*.45}else if(Fn.size===2){let[s,a]=[...Fn.values()],o=Math.hypot(s.x-a.x,s.y-a.y);Ca>0?Le.radius=Ot(Lf*(Ca/o),5.5,30):(Ca=o,Lf=Le.radius)}});function ax(i){let e=Fn.get(i.pointerId);Fn.delete(i.pointerId),Fn.size<2&&(Ca=0),document.body.classList.remove("dragging"),e&&!e.moved&&(fn.theta=0,fn.phi=0),e&&!e.moved&&Fn.size===0&&i0(i.clientX,i.clientY)}function ox(i){Fn.delete(i.pointerId),Fn.size<2&&(Ca=0),document.body.classList.remove("dragging")}Pn.addEventListener("pointerup",ax);Pn.addEventListener("pointercancel",ox);Pn.addEventListener("wheel",i=>{i.preventDefault(),Le.radius=Ot(Le.radius*Math.exp(i.deltaY*.0012),5.5,30),Or=performance.now()},{passive:!1});Pn.addEventListener("dblclick",i=>{i.preventDefault(),Le.theta=1.46,Le.phi=1.46,Le.radius=12.5,fn.theta=0,fn.phi=0,Or=performance.now(),hr(),on("\u89C6\u89D2\u5DF2\u590D\u4F4D")});Pn.tabIndex=0;Pn.setAttribute("role","application");Pn.setAttribute("aria-label","3D \u6811\u6728\u753B\u9762\uFF1A\u62D6\u52A8\u6216\u7528\u65B9\u5411\u952E\u73AF\u987E\uFF0C\u6EDA\u8F6E\u6216\u52A0\u51CF\u53F7\u7F29\u653E\uFF0C\u56DE\u8F66\u70B9\u8BA4\u753B\u9762\u4E2D\u592E\u7684\u90E8\u4F4D");Pn.addEventListener("keydown",i=>{if(i.key==="ArrowLeft"||i.key==="ArrowRight")Le.theta=Ot(Le.theta+(i.key==="ArrowLeft"?-.06:.06),Aa,Ra);else if(i.key==="ArrowUp"||i.key==="ArrowDown")Le.phi=Ot(Le.phi+(i.key==="ArrowUp"?-.06:.06),.42,1.52);else if(i.key==="+"||i.key==="=")Le.radius=Ot(Le.radius*.9,5.5,30);else if(i.key==="-"||i.key==="_")Le.radius=Ot(Le.radius*1.1,5.5,30);else if(i.key==="Enter"){let t=Pn.getBoundingClientRect(),n=Pd(t.left+t.width/2,t.top+t.height/2);n?ld(n,t.left+t.width/2,t.top+t.height/2):on("\u753B\u9762\u4E2D\u592E\u6CA1\u6709\u53EF\u70B9\u8BA4\u7684\u90E8\u4F4D\uFF0C\u8BD5\u8BD5\u79FB\u52A8\u89C6\u89D2")}else return;i.preventDefault(),i.stopPropagation(),Or=performance.now()});var ya=document.getElementById("season"),xl=document.getElementById("sub"),lx=document.getElementById("year"),cx=document.getElementById("chapterIndex"),Uf=document.getElementById("chapterTitle"),Df=document.getElementById("chapterText"),hx=document.getElementById("player"),Bm=document.getElementById("playBtn"),ux=document.getElementById("replayBtn"),Nn=document.getElementById("timeline"),dx=document.getElementById("timecode"),px=document.getElementById("marks"),fx=document.getElementById("narration"),ir=document.getElementById("startScreen"),nd=document.getElementById("startClassBtn"),Fa=document.getElementById("freeViewBtn"),d1=document.getElementById("classroomTop"),Nf=document.getElementById("classChapterIndex"),Bf=document.getElementById("classChapterTitle"),Ma=document.getElementById("classSeason"),mx=document.getElementById("classChapterBtn"),gx=document.getElementById("classTeacherBtn"),vx=document.getElementById("classFindBtn"),Om=document.getElementById("classQuartetBtn"),Rl=document.getElementById("classAutoBtn"),Cl=document.getElementById("classProjectorBtn"),_x=document.getElementById("classExitBtn"),p1=document.getElementById("seasonWheel"),yl=document.getElementById("wheelNeedle"),Of=document.getElementById("wheelYear"),Vu=document.getElementById("subtitleText"),Ff=document.getElementById("subtitleMeta"),zf=document.getElementById("classTimecode"),id=document.getElementById("classPrevBtn"),Fm=document.getElementById("classPlayBtn"),rd=document.getElementById("classNextBtn"),Ki=document.getElementById("classVoiceBtn"),xx=document.getElementById("classReplayBtn"),Ls=document.getElementById("chapterDrawer"),za=document.getElementById("chapterGrid"),gd=document.getElementById("teacherPanel"),yx=document.getElementById("teacherTitle"),Hf=document.getElementById("teacherBody"),Mx=document.getElementById("quartetOverlay"),kf=document.getElementById("quartetGrid"),sn=document.getElementById("partCard"),Sx=document.getElementById("partGlyph"),Ex=document.getElementById("partName"),bx=document.getElementById("partPinyin"),wx=document.getElementById("partDesc"),Tx=document.getElementById("partClose"),Dr=document.getElementById("findBanner"),Ax=document.getElementById("findText"),Vf=document.getElementById("findProgress"),sd=document.getElementById("findNext"),Rx=document.getElementById("findClose"),Nr=document.getElementById("pausePrompt"),Ml=document.getElementById("classToast"),Is=document.getElementById("voiceNotice"),Gf=document.getElementById("voiceNoticeText"),Wf=document.getElementById("voiceNoticeClose"),Cx=document.getElementById("chapterBtnNormal"),zm=document.getElementById("quartetBtnNormal"),Px=document.getElementById("classEnterBtn"),Ix=document.getElementById("helpBtn"),jl=document.getElementById("chapterRail"),Cs=document.getElementById("scrubTip"),Hm=document.getElementById("shortcutPanel"),Ha=document.getElementById("timelineWrap"),f1=document.getElementById("volumeWrap"),pn=document.getElementById("classProgress"),m1=document.getElementById("classVolume");function Xf(i,e){i&&(i.dataset.playing=e?"1":"0",i.setAttribute("aria-label",e?"\u6682\u505C":"\u64AD\u653E"))}var Sa="",rr=-1,an=!1,nr=!1,An=wf(),Lx=An.supported,Yt=!1,ad=0,Gu=!1,Fr=!1,Di=!1,Ui=!1,di=null,or=!1,Br=[],Qi=0,od="",ka=1,Pa=-1,Ia=null,jf=0,Wu=!1,sr=!1,ql=!1,Zt=[{start:0,end:16,title:"\u79CD\u5B50\u5165\u571F",text:"\u4E00\u9897\u5C0F\u5C0F\u7684\u79CD\u5B50\u843D\u8FDB\u677E\u8F6F\u7684\u6CE5\u571F\u91CC\u3002\u5B83\u5B89\u9759\u5730\u8EBA\u7740\uFF0C\u7B49\u5F85\u6C34\u5206\u548C\u6E29\u6696\u628A\u5B83\u5524\u9192\u3002"},{start:16,end:32,title:"\u6625\u96E8\u6ECB\u6DA6",text:"\u6625\u96E8\u843D\u4E0B\u6765\uFF0C\u79CD\u5B50\u559D\u9971\u4E86\u6C34\uFF0C\u8EAB\u4F53\u6162\u6162\u80C0\u5927\uFF0C\u575A\u786C\u7684\u5916\u58F3\u4ECE\u4E2D\u95F4\u88C2\u5F00\u4E00\u6761\u7F1D\u3002"},{start:32,end:56,title:"\u5411\u4E0B\u624E\u6839",text:"\u6700\u5148\u94BB\u51FA\u6765\u7684\u4E0D\u662F\u53F6\u5B50\uFF0C\u800C\u662F\u6839\u3002\u4E3B\u6839\u5411\u4E0B\u63A2\u7D22\uFF0C\u4FA7\u6839\u5411\u56DB\u5468\u94FA\u5F00\uFF0C\u628A\u6CE5\u571F\u7262\u7262\u6293\u4F4F\u3002"},{start:56,end:76,title:"\u7834\u571F\u53D1\u82BD",text:"\u5AE9\u82BD\u9876\u7740\u79CD\u58F3\u94BB\u51FA\u5730\u9762\uFF0C\u4E24\u7247\u5B50\u53F6\u6162\u6162\u5C55\u5F00\uFF0C\u7B2C\u4E00\u6B21\u89C1\u5230\u9633\u5149\u3002"},{start:76,end:94,title:"\u5E7C\u82D7\u521D\u957F",text:"\u5C0F\u82D7\u628A\u6839\u624E\u5F97\u66F4\u6DF1\uFF0C\u830E\u79C6\u53D8\u7C97\uFF0C\u7B2C\u4E00\u7247\u771F\u53F6\u8212\u5C55\u5F00\u6765\uFF0C\u5B83\u5F00\u59CB\u81EA\u5DF1\u5236\u9020\u517B\u5206\u3002"},{start:94,end:108,title:"\u5C0F\u6811\u6210\u5F62",text:"\u98CE\u5439\u8FC7\uFF0C\u96E8\u843D\u4E0B\uFF0C\u5C0F\u6811\u5728\u4E00\u6B21\u6B21\u6447\u6643\u4E2D\u53D8\u5F97\u66F4\u7ED3\u5B9E\uFF0C\u679D\u4E2B\u4E00\u5C42\u5C42\u5411\u5916\u4F38\u5C55\u3002"},{start:108,end:120,title:"\u957F\u6210\u5927\u6811",text:"\u4E00\u5E74\u53C8\u4E00\u5E74\uFF0C\u6811\u5E72\u7C97\u58EE\uFF0C\u6811\u51A0\u5982\u4F1E\uFF0C\u5B83\u7EC8\u4E8E\u957F\u6210\u4E86\u4E00\u68F5\u5927\u6811\u3002"},{start:120,end:140,title:"\u7B2C\u4E00\u5E74 \xB7 \u590F",text:"\u590F\u5929\u5230\u4E86\uFF0C\u53F6\u5B50\u6D53\u7EFF\uFF0C\u9633\u5149\u7A7F\u8FC7\u6811\u51A0\uFF0C\u6811\u836B\u4E0B\u51C9\u5FEB\u6781\u4E86\u3002"},{start:140,end:160,title:"\u7B2C\u4E00\u5E74 \xB7 \u79CB",text:"\u79CB\u5929\uFF0C\u53F6\u5B50\u53D8\u6210\u7EA2\u548C\u91D1\uFF0C\u4E00\u7247\u7247\u98D8\u843D\uFF0C\u6162\u6162\u8150\u70C2\uFF0C\u53D8\u6210\u6CE5\u571F\u91CC\u7684\u517B\u5206\u3002"},{start:160,end:180,title:"\u7B2C\u4E00\u5E74 \xB7 \u51AC",text:"\u51AC\u5929\uFF0C\u679D\u5934\u843D\u6EE1\u767D\u96EA\uFF0C\u6811\u5B89\u9759\u5730\u7761\u7740\uFF0C\u6839\u8FD8\u5728\u571F\u91CC\u547C\u5438\u3002"},{start:180,end:200,title:"\u7B2C\u4E8C\u5E74 \xB7 \u6625",text:"\u7B2C\u4E8C\u5E74\u6625\u5929\uFF0C\u6811\u53C8\u9192\u6765\uFF0C\u65B0\u82BD\u548C\u82B1\u6735\u4E00\u8D77\u5192\u51FA\u6765\u3002"},{start:200,end:220,title:"\u7B2C\u4E8C\u5E74 \xB7 \u590F",text:"\u590F\u5929\uFF0C\u6811\u836B\u50CF\u4E00\u628A\u5927\u4F1E\uFF0C\u5C0F\u9E1F\u548C\u6606\u866B\u90FD\u6765\u8FD9\u91CC\u4F11\u606F\u3002"},{start:220,end:240,title:"\u7B2C\u4E8C\u5E74 \xB7 \u79CB",text:"\u7B2C\u4E8C\u5E74\u79CB\u5929\uFF0C\u679D\u5934\u7ED3\u51FA\u679C\u5B9E\uFF0C\u679C\u5B9E\u91CC\u6709\u65B0\u7684\u79CD\u5B50\uFF0C\u751F\u547D\u5C31\u8FD9\u6837\u4F20\u4E0B\u53BB\u3002"},{start:240,end:260,title:"\u7B2C\u4E8C\u5E74 \xB7 \u51AC",text:"\u51AC\u5929\u53C8\u6765\u4E86\uFF0C\u4E00\u5E74\u7ED3\u675F\uFF0C\u65B0\u7684\u8F6E\u56DE\u53C8\u8981\u5F00\u59CB\u3002"}],qf=[{q:"\u79CD\u5B50\u4F4F\u5728\u54EA\u91CC\uFF1F\u5B83\u8981\u559D\u4EC0\u4E48\u624D\u80FD\u9192\u6765\uFF1F",a:"\u62B1\u819D\u8E72\u4E0B\uFF0C\u5047\u88C5\u81EA\u5DF1\u662F\u4E00\u9897\u5C0F\u79CD\u5B50\u3002"},{q:"\u79CD\u5B50\u559D\u9971\u6C34\u4EE5\u540E\uFF0C\u5916\u9762\u7684\u58F3\u4F1A\u600E\u4E48\u6837\uFF1F",a:"\u624B\u6307\u8F7B\u8F7B\u70B9\u819D\u76D6\uFF0C\u6A21\u4EFF\u6625\u96E8\u4E00\u6EF4\u4E00\u6EF4\u843D\u4E0B\u6765\u3002"},{q:"\u5148\u94BB\u51FA\u6765\u7684\u662F\u53F6\u5B50\uFF0C\u8FD8\u662F\u6839\uFF1F",a:"\u53CC\u624B\u5411\u4E0B\u4F38\uFF0C\u5B66\u6839\u5F80\u6CE5\u571F\u6DF1\u5904\u94BB\u3002"},{q:"\u5AE9\u82BD\u9876\u5F00\u6CE5\u571F\u7684\u65F6\u5019\uFF0C\u7528\u4E86\u591A\u5927\u7684\u529B\u6C14\uFF1F",a:"\u6162\u6162\u7AD9\u8D77\u6765\uFF0C\u53CC\u624B\u5411\u4E0A\u4E3E\uFF0C\u5B66\u5AE9\u82BD\u9876\u5F00\u6CE5\u571F\u3002"},{q:"\u7B2C\u4E00\u7247\u771F\u53F6\u662F\u4EC0\u4E48\u989C\u8272\uFF1F\u5B83\u4E3A\u4EC0\u4E48\u9700\u8981\u9633\u5149\uFF1F",a:"\u624B\u638C\u644A\u5F00\uFF0C\u5F53\u4E00\u7247\u5C0F\u53F6\u5B50\u6652\u6652\u592A\u9633\u3002"},{q:"\u5C0F\u6811\u88AB\u98CE\u5439\u5F97\u6447\u6765\u6447\u53BB\uFF0C\u4E3A\u4EC0\u4E48\u6CA1\u6709\u5012\uFF1F",a:"\u5DE6\u53F3\u8F7B\u8F7B\u6447\u6446\uFF0C\u50CF\u4E00\u68F5\u5C0F\u6811\u5728\u98CE\u91CC\u3002"},{q:"\u5927\u6811\u6709\u591A\u5927\uFF1F\u6211\u4EEC\u4E00\u8D77\u6765\u62B1\u4E00\u62B1\u3002",a:"\u5F20\u5F00\u53CC\u81C2\uFF0C\u56F4\u6210\u4E00\u4E2A\u5927\u5706\u5708\u3002"},{q:"\u590F\u5929\u7AD9\u5728\u6811\u4E0B\uFF0C\u4E3A\u4EC0\u4E48\u89C9\u5F97\u51C9\u5FEB\uFF1F",a:"\u53CC\u624B\u642D\u5728\u5934\u9876\uFF0C\u505A\u4E00\u4E2A\u5C0F\u51C9\u68DA\u3002"},{q:"\u843D\u53F6\u98D8\u4E0B\u6765\u4EE5\u540E\uFF0C\u53BB\u4E86\u54EA\u91CC\uFF1F",a:"\u624B\u6307\u8F6C\u5708\uFF0C\u6162\u6162\u843D\u5230\u5730\u4E0A\uFF0C\u518D\u53D8\u6210\u6CE5\u571F\u7684\u517B\u5206\u3002"},{q:"\u51AC\u5929\u5927\u6811\u7761\u7740\u4E86\u5417\uFF1F\u96EA\u843D\u5728\u54EA\u91CC\uFF1F",a:"\u62B1\u8D77\u624B\u81C2\u8F7B\u8F7B\u6447\u6643\uFF0C\u5B66\u5927\u6811\u5728\u96EA\u91CC\u4F11\u606F\u3002"},{q:"\u7B2C\u4E8C\u5E74\u6625\u5929\uFF0C\u6811\u4E0A\u5148\u5F00\u51FA\u4EC0\u4E48\uFF1F",a:"\u53CC\u624B\u4ECE\u4E0B\u5DF4\u5411\u5916\u6253\u5F00\uFF0C\u5B66\u4E00\u6735\u82B1\u6162\u6162\u5F00\u653E\u3002"},{q:"\u590F\u5929\u8C01\u4F1A\u5728\u6811\u836B\u4E0B\u4F11\u606F\uFF1F",a:"\u5B66\u5C0F\u9E1F\u98DE\u4E00\u98DE\uFF0C\u518D\u627E\u4E2A\u6811\u836B\u505C\u4E0B\u6765\u3002"},{q:"\u679C\u5B9E\u91CC\u9762\u85CF\u7740\u4EC0\u4E48\uFF1F",a:"\u53CC\u624B\u6367\u6210\u4E00\u4E2A\u5C0F\u679C\u5B50\uFF0C\u91CC\u9762\u85CF\u7740\u65B0\u7684\u79CD\u5B50\u3002"},{q:"\u4E00\u5E74\u7ED3\u675F\u4E86\uFF0C\u660E\u5E74\u8FD8\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF1F",a:"\u7528\u624B\u753B\u4E00\u4E2A\u5927\u5706\u5708\uFF1A\u6625\u590F\u79CB\u51AC\uFF0C\u53C8\u56DE\u6765\u4E86\u3002"}],Ux=[["seed"],["seed"],["root","seed"],["root","trunk","cotyledon"],["leaf","trunk","root"],["leaf","branch","trunk","root"],["leaf","branch","trunk","root"],["leaf","branch","trunk","root"],["leaf","branch","trunk","root"],["branch","trunk","snow"],["flower","leaf","branch","trunk"],["leaf","branch","trunk","root","bird","insect"],["fruit","leaf","branch","trunk"],["snow","branch","trunk"]],La={seed:{name:"\u79CD\u5B50",glyph:"\u79CD",pinyin:"zh\u01D2ng zi",desc:"\u79CD\u5B50\u7761\u5728\u6CE5\u571F\u91CC\uFF0C\u559D\u9971\u96E8\u6C34\u5C31\u4F1A\u6162\u6162\u9192\u6765\u3002"},root:{name:"\u6839",glyph:"\u6839",pinyin:"g\u0113n",desc:"\u6839\u628A\u6811\u7262\u7262\u6293\u4F4F\uFF0C\u8FD8\u5E2E\u5927\u6811\u559D\u6C34\u3002"},trunk:{name:"\u6811\u5E72",glyph:"\u5E72",pinyin:"sh\xF9 g\xE0n",desc:"\u6811\u5E72\u53C8\u7C97\u53C8\u7ED3\u5B9E\uFF0C\u628A\u6C34\u548C\u517B\u5206\u9001\u5230\u6811\u679D\u4E0A\u3002"},branch:{name:"\u6811\u679D",glyph:"\u679D",pinyin:"sh\xF9 zh\u012B",desc:"\u6811\u679D\u5411\u56DB\u5468\u4F38\u5F00\uFF0C\u7ED9\u53F6\u5B50\u5B89\u5BB6\u3002"},leaf:{name:"\u53F6",glyph:"\u53F6",pinyin:"y\xE8",desc:"\u53F6\u5B50\u6652\u7740\u592A\u9633\uFF0C\u4E3A\u5927\u6811\u5236\u9020\u517B\u5206\u3002"},cotyledon:{name:"\u5B50\u53F6",glyph:"\u53F6",pinyin:"z\u01D0 y\xE8",desc:"\u5B50\u53F6\u662F\u79CD\u5B50\u5148\u957F\u51FA\u7684\u4E24\u7247\u5C0F\u53F6\u5B50\uFF0C\u5E2E\u5AE9\u82BD\u89C1\u9633\u5149\u3002"},flower:{name:"\u82B1",glyph:"\u82B1",pinyin:"hu\u0101",desc:"\u82B1\u5F00\u7684\u65F6\u5019\uFF0C\u871C\u8702\u548C\u5C0F\u9E1F\u90FD\u6765\u4E86\u3002"},fruit:{name:"\u679C",glyph:"\u679C",pinyin:"gu\u01D2",desc:"\u679C\u5B9E\u91CC\u6709\u65B0\u7684\u79CD\u5B50\uFF0C\u751F\u547D\u5C31\u8FD9\u6837\u4F20\u4E0B\u53BB\u3002"},snow:{name:"\u96EA",glyph:"\u96EA",pinyin:"xu\u011B",desc:"\u96EA\u82B1\u843D\u5728\u6811\u679D\u4E0A\uFF0C\u5927\u6811\u5728\u51AC\u5929\u5B89\u9759\u5730\u4F11\u606F\u3002"},bird:{name:"\u5C0F\u9E1F",glyph:"\u9E1F",pinyin:"xi\u01CEo ni\u01CEo",desc:"\u590F\u5929\uFF0C\u5C0F\u9E1F\u98DE\u5230\u6811\u836B\u91CC\u6B47\u4E00\u6B47\uFF0C\u6709\u7684\u505C\u5728\u679D\u5934\u5531\u6B4C\u3002"},insect:{name:"\u6606\u866B",glyph:"\u866B",pinyin:"k\u016Bn ch\xF3ng",desc:"\u8774\u8776\u3001\u871C\u8702\u548C\u74E2\u866B\u4E5F\u559C\u6B22\u8FD9\u68F5\u5927\u6811\uFF0C\u56F4\u7740\u82B1\u6735\u98DE\u6765\u98DE\u53BB\u3002"}},Dx=/(种子|泥土|水分|温暖|春雨|外壳|侧根|主根|根|嫩芽|种壳|子叶|真叶|阳光|养分|枝丫|树干|树冠|叶子|树荫|落叶|白雪|新芽|花朵|果实|小鸟|昆虫|蜜蜂|蝴蝶|瓢虫|轮回)/g;function Nx(i){return i.replace(Dx,"<em>$1</em>")}var vd=new URLSearchParams(location.search).get("t0"),km=(()=>{let i=parseFloat(vd);return isNaN(i)?0:i})(),Bn=/(^|[?&])freeze(=|&|$)/.test(location.search)?km:null,On=/(^|[?&])video(=|&|$)/.test(location.search),_d=/(^|[?&])class(=|&|$)/.test(location.search),tc=/(^|[?&])stage(=|&|$)/.test(location.search),xd=!On&&Bn===null&&!_d&&!tc&&vd===null,Vm=0;On&&(window.__setVideoT=i=>{Vm=i},window.__videoReady=!0);tc&&(document.body.classList.add("stage-only"),Td());var Be=Ot(km,0,It),Lr=null,Ve=!On&&Bn===null&&!xd,zr=!1,Cn=Be,Yf=performance.now();function wi(i){return i=Math.max(0,Math.round(i)),String(Math.floor(i/60)).padStart(2,"0")+":"+String(i%60).padStart(2,"0")}function zn(i){let e=0;for(let t=0;t<Zt.length;t++)i>=Zt[t].start&&(e=t);return e}function Bx(){jl&&(jl.innerHTML=Zt.map(i=>'<span title="'+i.title+'"></span>').join(""))}function Ox(i){if(!jl)return;let e=jl.children;for(let t=0;t<e.length;t++)e[t].className=t<i?"done":t===i?"current":""}function Xu(i,e,t){i&&(i.style.animation="none",i.offsetWidth,i.style.animation=e+" "+t+" var(--ease-out) both")}function Hn(i){let e=zn(i);if(e===rr)return;rr=e,Za(),Ox(e);let t=Zt[e];cx.textContent="\u7B2C "+(e+1)+" \u7AE0 / \u5171 "+Zt.length+" \u7AE0",Uf.textContent=t.title,Df.textContent=t.text,Xu(Uf,"seasonIn",".45s"),Xu(Df,"textIn",".32s"),Nf&&(Nf.textContent="\u7B2C "+(e+1)+" \u7AE0 / \u5171 "+Zt.length+" \u7AE0"),Bf&&(Bf.textContent=t.title),Vu&&(Vu.innerHTML=Nx(t.text)),Ff&&(Ff.textContent="\u7B2C "+(e+1)+" \u7AE0 \xB7 "+t.title),Xu(Vu,"textIn",".3s"),Xm(e),hr(),an&&Ve&&Yt&&!zr&&cr()}var En={t:-1,sec:-1,playing:null,chapter:-1};function Ft(){if(!Nn)return;!zr&&Math.abs((parseFloat(Nn.value)||0)-Be)>.04&&(Nn.value=String(Be));let i=(Be/It*100).toFixed(2)+"%";i!==En.pct&&(Nn.style.setProperty("--progress",i),En.pct=i);let e=Math.round(Be);if(e!==En.sec){En.sec=e;let n=wi(Be)+" / "+wi(It);dx.textContent=n,zf&&(zf.textContent=n)}if(Ve!==En.playing&&(En.playing=Ve,Xf(Bm,Ve),Xf(Fm,Ve)),pn){i!==En.cpct&&(pn.style.setProperty("--cp",i),pn.firstElementChild.style.width=i,pn.setAttribute("aria-valuetext",wi(Be)+" / "+wi(It)),En.cpct=i);let n=Math.round(Be);n!==En.caria&&(pn.setAttribute("aria-valuenow",String(n)),En.caria=n)}if(Nn){let n=Math.round(Be);n!==En.tts&&(Nn.setAttribute("aria-valuetext",wi(Be)+" / "+wi(It)),En.tts=n)}let t=zn(Be);t!==En.chapter&&(En.chapter=t,id&&(id.disabled=t===0),rd&&(rd.disabled=t===Zt.length-1))}function Ri(i,e=!0){Be=Ot(i,0,It),e&&(Ve=!1),Cn=Be,Ui=!1,ur(),lr(),or&&Ni(),Za(),Hn(Be),Ft()}function yd(){Be>=It-.01&&(Be=0,Cn=0,Ui=!1,sr=!1,Hn(0)),or&&(Ni(),Za()),Ve=!Ve,Ui=!1,ur(),Ve&&an&&Yt&&cr(),Ve||lr(),Ft()}for(let i of Zt){if(i.start<=0)continue;let e=document.createElement("span");e.style.left=i.start/It*100+"%",e.title=i.title,i.start>=92&&(e.className="chapter-major"),px.appendChild(e)}Nn.max=It.toFixed(1);Nn.value=String(Be);Bx();document.body.dataset.season="\u6625";Hn(Be);Ft();var Fx=/(^|[?&])ui=1(&|$)/.test(location.search);(Bn!==null||On)&&!Fx&&(hx.style.display="none",fx.style.display="none",document.getElementById("tips").style.display="none",document.getElementById("replant").style.display="none");xd?Di=!0:ir.classList.add("hidden");tc&&(ir.classList.add("hidden"),Di=!1);function zx(){for(let i of["__grass","__flowers","__groundLeaves"]){let e=ye[i];e&&(ye.remove(e),e.material&&e.material.dispose(),e.dispose&&e.dispose())}ye.__grass=null,ye.__flowers=null,ye.__groundLeaves=null}function Md(i){ex(pe),zx();let e=Vt(i^2654435769);ye.__grass=X_(i^1597463007),ye.add(ye.__grass),ye.__flowers=q_(i^668265263),ye.add(ye.__flowers),ye.__groundLeaves=Y_(i^374761393),ye.add(ye.__groundLeaves),pe=Q_(i);for(let t of Oa)t.life=0;for(let t=0;t<Pi;t++)Rn.setMatrixAt(t,Rs);Rn.instanceMatrix.needsUpdate=!0}var Va=Bn!==null||On||tc||_d||vd!==null?20240601:Math.floor(Math.random()*1e5);Md(Va);var Hx=[[130,"\u590F","\u7B2C 1 \u5E74"],[150,"\u79CB","\u7B2C 1 \u5E74"],[170,"\u51AC","\u7B2C 1 \u5E74"],[190,"\u6625","\u7B2C 2 \u5E74"]],Zf=new da,ju=new oe;function on(i,e=1800){Ml&&(Ml.textContent=i,Ml.classList.add("show"),clearTimeout(on._t),on._t=setTimeout(()=>Ml.classList.remove("show"),e))}var Jf={unsupported:"\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 Web Speech \u6717\u8BFB\u3002\u8BF7\u4F7F\u7528\u6700\u65B0\u7248 Chrome\u3001Edge \u6216 Safari \u6253\u5F00\uFF1B\u6587\u5B57\u65C1\u767D\u4ECD\u53EF\u6B63\u5E38\u4F7F\u7528\u3002","no-voices":"\u5F53\u524D\u6D4F\u89C8\u5668\u6CA1\u6709\u53EF\u7528\u7684\u8BED\u97F3\u5305\uFF0C\u6717\u8BFB\u6682\u65F6\u65E0\u6CD5\u53D1\u58F0\u3002\u8BF7\u5728\u7CFB\u7EDF\u300C\u6717\u8BFB / \u8BED\u97F3\u300D\u8BBE\u7F6E\u91CC\u5B89\u88C5\u4E2D\u6587\u8BED\u97F3\uFF0C\u6216\u6539\u7528 Chrome / Edge \u6253\u5F00\uFF1B\u6587\u5B57\u65C1\u767D\u4ECD\u53EF\u6B63\u5E38\u4F7F\u7528\u3002","no-chinese":"\u6CA1\u6709\u68C0\u6D4B\u5230\u4E2D\u6587\u8BED\u97F3\uFF0C\u6717\u8BFB\u65E0\u6CD5\u6B63\u786E\u8BFB\u51FA\u4E2D\u6587\u3002\u8BF7\u5728\u7CFB\u7EDF\u8BED\u97F3\u8BBE\u7F6E\u4E2D\u5B89\u88C5\u4E2D\u6587\uFF08\u666E\u901A\u8BDD\uFF09\u8BED\u97F3\u540E\u91CD\u8BD5\uFF1B\u6587\u5B57\u65C1\u767D\u4ECD\u53EF\u6B63\u5E38\u4F7F\u7528\u3002",error:"\u6717\u8BFB\u542F\u52A8\u5931\u8D25\uFF0C\u53EF\u80FD\u662F\u7CFB\u7EDF\u8BED\u97F3\u670D\u52A1\u6682\u65F6\u4E0D\u53EF\u7528\u3002\u8BF7\u7A0D\u540E\u91CD\u8BD5\uFF0C\u6216\u6539\u7528 Chrome / Edge \u5E76\u68C0\u67E5\u4E2D\u6587\u8BED\u97F3\u5305\uFF1B\u6587\u5B57\u65C1\u767D\u4ECD\u53EF\u6B63\u5E38\u4F7F\u7528\u3002"},kx={unsupported:"\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u6717\u8BFB\uFF0C\u6587\u5B57\u65C1\u767D\u53EF\u6B63\u5E38\u4F7F\u7528\u3002","no-voices":"\u5F53\u524D\u6D4F\u89C8\u5668\u65E0\u4E2D\u6587\u8BED\u97F3\uFF0C\u6587\u5B57\u65C1\u767D\u53EF\u6B63\u5E38\u4F7F\u7528\u3002","no-chinese":"\u5F53\u524D\u6D4F\u89C8\u5668\u65E0\u4E2D\u6587\u8BED\u97F3\uFF0C\u6587\u5B57\u65C1\u767D\u53EF\u6B63\u5E38\u4F7F\u7528\u3002",error:"\u6717\u8BFB\u542F\u52A8\u5931\u8D25\uFF0C\u6587\u5B57\u65C1\u767D\u53EF\u6B63\u5E38\u4F7F\u7528\u3002"};function Vx(){try{return window.matchMedia("(max-width: 700px)").matches}catch{return window.innerWidth<=700}}function Yl(i,e=14e3){let t=Jf[i]||String(i||Jf["no-voices"]);if(Vx()){Us();let n=kx[i]||"\u5F53\u524D\u6D4F\u89C8\u5668\u6717\u8BFB\u4E0D\u53EF\u7528\uFF0C\u6587\u5B57\u65C1\u767D\u53EF\u6B63\u5E38\u4F7F\u7528\u3002";on(n,2800);return}!Is||!Gf||(Gf.textContent=t,Is.hidden=!1,Is.classList.add("show"),clearTimeout(ad),e>0&&(ad=setTimeout(Us,e)))}function Us(){Is&&(clearTimeout(ad),Is.classList.remove("show"),Is.hidden=!0)}var Ci=null,Gx=["app","sidebar","player","classroomTop","classroomBar","subtitleBar","seasonWheel","vignette"];function nc(i){for(let e of Gx){let t=document.getElementById(e);t&&(i?t.setAttribute("inert",""):t.removeAttribute("inert"))}}function Gm(i){return Array.prototype.filter.call(i.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),e=>!e.disabled&&e.offsetParent!==null)}function Ii(i){i&&(document.querySelectorAll(".modal.show").forEach(e=>{e!==i&&e.classList.remove("show")}),i===Ls&&Xx(),i===gd&&Xm(zn(Be)),Ci=document.activeElement,i.classList.add("show"),nc(!0),requestAnimationFrame(()=>{let e=i.querySelector(".modal-close")||Gm(i)[0];if(e&&e.focus({preventScroll:!0}),i===Ls&&za){let t=za.querySelector(".chapter-item.current");t&&t.scrollIntoView({block:"center",behavior:"smooth"})}}))}function Ya(i){!i||!i.classList.contains("show")||(i.classList.add("closing"),setTimeout(()=>{i.classList.remove("show","closing")},190),document.querySelector(".modal.show:not(.closing)")||nc(!1),Ci&&Ci.focus&&(Ci.focus({preventScroll:!0}),Ci=null))}function Wm(){document.querySelectorAll(".modal.show").forEach(e=>{e.classList.add("closing"),setTimeout(()=>{e.classList.remove("show","closing")},190)}),nc(!1),Ci&&Ci.focus&&(Ci.focus({preventScroll:!0}),Ci=null)}function Sd(){return!!document.querySelector(".modal.show")}function ic(i){if(ir)if(ir.setAttribute("aria-hidden",i?"false":"true"),nc(i),i)requestAnimationFrame(()=>{nd&&nd.focus({preventScroll:!0})});else{document.body.tabIndex=-1;try{document.body.focus({preventScroll:!0})}catch{}}}function Kf(i,e){let t=Gm(e);if(!t.length)return;let n=t[0],r=t[t.length-1];i.shiftKey&&(document.activeElement===n||!e.contains(document.activeElement))?(i.preventDefault(),r.focus()):!i.shiftKey&&(document.activeElement===r||!e.contains(document.activeElement))&&(i.preventDefault(),n.focus())}document.addEventListener("keydown",i=>{if(i.key==="Tab"){if(Sd()){Kf(i,document.querySelector(".modal.show"));return}Di&&Kf(i,ir)}});function Wx(i){let e=(Ua(i)%1+1)%1;return ui[Math.floor(e*4)%4].name}function Xx(){if(!za)return;let i=zn(Be);za.innerHTML=Zt.map((e,t)=>{let n=Wx((e.start+Math.min(e.end,It))/2),r=String(t+1).padStart(2,"0");return'<button class="chapter-item'+(t===i?" current":"")+'"'+(t===i?' aria-current="step"':"")+' data-index="'+t+'"><div class="chapter-thumb" data-season="'+n+'" data-num="'+r+'"></div><div class="chapter-num">\u7B2C '+(t+1)+' \u7AE0</div><div class="chapter-name">'+e.title+'</div><div class="chapter-time">'+wi(e.start)+"\u2013"+wi(Math.min(e.end,It))+"</div></button>"}).join("")}function Xm(i){if(!Hf)return;let e=qf[Ot(i,0,qf.length-1)];e&&(yx.textContent="\u7B2C "+(i+1)+" \u7AE0 \xB7 "+Zt[i].title,Hf.innerHTML='<div class="teacher-block"><b>\u53EF\u4EE5\u95EE</b><p>'+e.q+'</p></div><div class="teacher-block"><b>\u53EF\u4EE5\u52A8</b><p>'+e.a+"</p></div>")}function Ed(i,e=!0){i=Ot(i,0,Zt.length-1);let t=Math.max(.01,Zt[i].start+.01);Ri(t,e),e||(Ve=!0,Ft())}function jm(){let i=zn(Be);if(i>=Zt.length-1){Ri(It,!0);return}Ed(i+1,!0)}function qm(){let i=zn(Be),e=Be<=Zt[i].start+1.4;Ed(e?Math.max(0,i-1):i,!0)}function ti(){if(Rl&&(Rl.classList.toggle("on",nr),Rl.setAttribute("aria-pressed",nr?"true":"false")),Ki){let i=An.state();Ki.classList.toggle("on",Yt),Ki.classList.toggle("warn",!i.available),Ki.setAttribute("aria-pressed",Yt?"true":"false"),i.supported?i.available?Ki.title="\u6545\u4E8B\u59D0\u59D0\u6717\u8BFB":Ki.title="\u672A\u68C0\u6D4B\u5230\u4E2D\u6587\u8BED\u97F3\uFF0C\u70B9\u51FB\u67E5\u770B\u964D\u7EA7\u8BF4\u660E":Ki.title="\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u6717\u8BFB\uFF08Web Speech API\uFF09"}Cl&&(Cl.classList.toggle("on",Fr),Cl.setAttribute("aria-pressed",Fr?"true":"false"))}function Ym(i){nr=!!i,ti()}function jx(){Ym(!nr),nr||ur(),on(nr?"\u6BCF\u7AE0\u7ED3\u675F\u4F1A\u81EA\u52A8\u6682\u505C":"\u5DF2\u5173\u95ED\u81EA\u52A8\u6682\u505C")}function bd(i){Fr=!!i,document.body.classList.toggle("projector",Fr),ti()}function Zm(){bd(!Fr),on(Fr?"\u6295\u5F71\u589E\u4EAE\u5DF2\u5F00\u542F":"\u6295\u5F71\u589E\u4EAE\u5DF2\u5173\u95ED")}function lr(){An.cancel(),Pa=-1}function cr(){if(!Yt||!Lx||Bn!==null||On)return;let i=zn(Be);if(Pa===i&&An.isSpeaking())return;let e=An.speak(Zt[i].text,{rate:.92,pitch:1.04,volume:1,onerror:t=>{/canceled|interrupted/i.test(String(t||""))||Yl("error")}});if(!e.ok){Pa=-1,Yt=!1,ti(),Yl(e.reason);return}Pa=i}async function qx(){if(!Gu){Gu=!0;try{if(Yt){Yt=!1,lr(),ti(),Us(),on("\u6717\u8BFB\u5DF2\u5173\u95ED");return}if(!An.state().supported){Yt=!1,ti(),Yl("unsupported");return}let e=await An.ensureAvailable(1200);if(!e.available){Yt=!1,ti(),Yl(e.reason);return}Yt=!0,ti(),Us(),on("\u6717\u8BFB\u5DF2\u5F00\u542F",1800),an&&Ve&&cr()}finally{Gu=!1}}}An.subscribe(()=>ti());Wf&&Wf.addEventListener("click",Us);window.addEventListener("beforeunload",()=>An.cancel());function wd(){document.body.classList.remove("idle"),clearTimeout(jf),an&&(jf=setTimeout(()=>{!Sd()&&!Di&&document.body.classList.add("idle")},2600))}async function Jm(){if(!(!an||!("wakeLock"in navigator)))try{Ia=await navigator.wakeLock.request("screen")}catch{Ia=null}}function Yx(){try{Ia&&Ia.release()}catch{}Ia=null}function Td(){let i=hd();kt.aspect=i.w/i.h,kt.updateProjectionMatrix(),en.setSize(i.w,i.h)}function Km(){if(document.fullscreenElement)return;let i=document.documentElement;if(!i.requestFullscreen){on("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u5168\u5C4F\uFF0C\u6309 F11 \u4E5F\u53EF\u4EE5");return}let e=i.requestFullscreen();e&&e.catch&&e.catch(()=>on("\u5168\u5C4F\u8BF7\u6C42\u88AB\u6D4F\u89C8\u5668\u62E6\u4F4F\u4E86\uFF0C\u6309 F11 \u4E5F\u53EF\u4EE5"))}function Zx(){if(document.fullscreenElement){let i=document.exitFullscreen();i&&i.catch&&i.catch(()=>{})}else Km()}function $m(){Ii(document.getElementById("exitConfirm"))}function rc(i={}){let e=i.reset!==!1;an=!0,Di=!1,ir.classList.add("hidden"),ic(!1),document.body.classList.add("classroom-mode"),document.body.classList.remove("idle"),Td(),Wm(),Ni(),Za(),hr(),e&&(Be=0,Cn=0,rr=-1,sr=!1),Fa&&(Fa.textContent="\u81EA\u7531\u89C2\u770B"),Ve=!1,Ym(!1),bd(!1),ti(),Hn(Be),Ft(),!On&&Bn===null&&i.autoplay!==!1&&(Ve=!0,Ft(),Yt&&cr()),i.fullscreen&&Km(),Jm(),wd()}function Qm(){if(Ve=!1,lr(),Ni(),Za(),hr(),ur(),Yx(),an=!1,document.body.classList.remove("classroom-mode","idle","projector"),bd(!1),Td(),document.fullscreenElement){let i=document.exitFullscreen();i&&i.catch&&i.catch(()=>{})}Di=!0,ir.classList.remove("hidden"),ic(!0),Ve=!1,Fa&&(Fa.textContent=Be>1?"\u7EE7\u7EED\u89C2\u770B":"\u81EA\u7531\u89C2\u770B"),Ft()}function Jx(i){let e=i;for(;e;){if(e.userData&&e.userData.part)return e.userData.part;e=e.parent}return null}function Ad(i,e){if(!pe||!Rd(i))return!1;let t=(Ua(e)%1+1)%1;return i==="seed"?e<80:i==="cotyledon"?e>=60&&e<=100:i==="root"?e>=30:i==="trunk"?e>=56:i==="branch"?e>=90:i==="leaf"?e>=74&&t<.7:i==="flower"?e>=180&&e<=206:i==="fruit"?e>=220&&e<=242:i==="snow"?e>=160&&e<=180||e>=240&&e<=260:i==="bird"||i==="insect"?e>=198&&e<=220:!0}function Rd(i){if(!pe)return!1;let e=cd(Be);if(i==="seed")return!!(pe.seedMesh&&pe.seedMesh.visible&&pe.seedMesh.scale.x>.008);if(i==="root")return pe.roots.some(t=>t.mesh.visible);if(i==="trunk")return!!(pe.branches[0]&&pe.branches[0].mesh.visible&&e>.11);if(i==="branch")return pe.branches.some((t,n)=>n>0&&t.mesh.visible)&&e>.24;if(i==="leaf"){let t=(Ua(Be)%1+1)%1;return e>.13&&(t<.05||t<.7)}if(i==="cotyledon")return pe.cotyledons.some(t=>t.visible&&t.scale.x>.04);if(i==="flower")return!!(pe.blossoms&&pe.blossoms.visible&&pe.blossomMat.opacity>.05);if(i==="fruit"){let t=(Ua(Be)%1+1)%1;return(rm(Be)>=2?he(.5,.58,t):0)>.02&&t<.8}return i==="snow"?!!(pe.snowCaps&&pe.snowCaps.visible&&pe.snowCapMat.opacity>.05):i==="bird"?bs.visible&&zl.length>=2:i==="insect"?ws.visible&&As.length>=2:!1}function Kx(i){if(!pe||!pe.group)return[];let e=[],t=r=>{if(!r)return;let s=r.clone();pe.group.localToWorld(s),e.push(s)},n=r=>{r&&e.push(r.clone())};if(i==="seed")pe.seedMesh&&n(pe.seedMesh.getWorldPosition(new M));else if(i==="root"){let r=pe.rootSub||pe.group;for(let s of pe.roots)if(s.mesh.visible)for(let a=0;a<s.pts.length;a+=3){let o=s.pts[a].clone();r.localToWorld(o),e.push(o)}}else if(i==="trunk"){let r=pe.branches[0];if(r&&r.mesh.visible)for(let s=0;s<r.pts.length;s+=2)t(r.pts[s])}else if(i==="branch")for(let r=0;r<pe.branches.length;r++){let s=pe.branches[r];if(!(r===0||!s.mesh.visible))for(let a=0;a<s.pts.length;a+=2)t(s.pts[a])}else if(i==="leaf"){let r=cd(Be);for(let s=0;s<pe.leafData.length;s+=25){let a=pe.leafData[s];a.grow!=null&&a.grow>r+.02||t(a.pos)}}else if(i==="cotyledon")for(let r of pe.cotyledons)r.visible&&r.scale.x>.04&&n(r.getWorldPosition(new M));else if(i==="flower"){if(pe.blossomData)for(let r=0;r<pe.blossomData.length;r+=8)t(pe.blossomData[r].pos)}else if(i==="fruit"){if(pe.fruitData)for(let r=0;r<pe.fruitData.length;r+=2)t(pe.fruitData[r].pos)}else if(i==="snow"){if(pe.snowCapData)for(let r of pe.snowCapData)t(r.pos)}else if(i==="bird")for(let r of zl)n(r);else if(i==="insect")for(let r of As)n(r);return e}function Cd(i){if(!pe||!pe.group)return[];let e=en.domElement.getBoundingClientRect(),t=[],n=new M;for(let r of Kx(i)){if(n.copy(r).project(kt),n.z<-1||n.z>1)continue;let s=e.left+(n.x*.5+.5)*e.width,a=e.top+(-n.y*.5+.5)*e.height;s<e.left||s>e.right||a<e.top||a>e.bottom||t.push({x:s,y:a})}return t}function e0(i){return(Ux[zn(i)]||[]).filter(t=>!Ad(t,i)||!Rd(t)?!1:Cd(t).length>=(t==="seed"?1:2))}function $x(i,e){if(!di)return!1;let t=en.domElement.getBoundingClientRect(),n=Math.max(40,Math.min(80,t.width*.055)),r=n*n;for(let s of Cd(di)){let a=s.x-i,o=s.y-e;if(a*a+o*o<=r)return!0}return!1}function Pd(i,e){if(!pe||!pe.group)return null;let t=en.domElement.getBoundingClientRect();ju.x=(i-t.left)/Math.max(1,t.width)*2-1,ju.y=-((e-t.top)/Math.max(1,t.height))*2+1,Zf.setFromCamera(ju,kt);let n=Zf.intersectObject(pe.group,!0);for(let r of n){let s=Jx(r.object);if(s&&Ad(s,Be)&&Rd(s))return s}return null}function ld(i,e,t){let n=La[i];if(!(!n||!sn)&&(Sx.textContent=n.glyph||n.name.charAt(0),Ex.textContent=n.name,bx.textContent=n.pinyin,wx.textContent=n.desc,sn.style.left="",sn.style.right="",sn.style.top="",sn.style.bottom="",sn.classList.add("show"),requestAnimationFrame(()=>{try{sn.focus({preventScroll:!0})}catch{}}),Number.isFinite(e)&&Number.isFinite(t)&&window.innerWidth>700)){let r=sn.getBoundingClientRect(),s=14,a=12,o=e+s,l=t+s;o+r.width>window.innerWidth-a&&(o=e-r.width-s),l+r.height>window.innerHeight-a&&(l=t-r.height-s),o=Ot(o,a,Math.max(a,window.innerWidth-r.width-a)),l=Ot(l,a,Math.max(a,window.innerHeight-r.height-a)),sn.style.left=o+"px",sn.style.top=l+"px",sn.style.right="auto",sn.style.bottom="auto",sn.style.setProperty("--ox",Ot(e-o,6,r.width-6)+"px"),sn.style.setProperty("--oy",Ot(t-l,6,r.height-6)+"px")}}function hr(){sn&&sn.classList.remove("show")}function Qx(i,e){return i===e||i==="leaf"&&e==="cotyledon"}function Za(){Br=[],Qi=0,od="",ka=1}function ey(){let i=e0(Be);if(!i.length)return!1;let e=zn(Be),t=["seed","root","trunk","branch","leaf","cotyledon","flower","fruit","snow","bird","insect"],n=e+"|"+i.join(",");if(n!==od){let r=t.filter(a=>i.includes(a)),s=r.length?(e*2+1)%r.length:0;Br=r.slice(s).concat(r.slice(0,s)),Qi=0,ka=1,od=n}return Br.length>0}function t0(){if(!ey()){on("\u8FD9\u4E00\u7AE0\u6682\u65F6\u6CA1\u6709\u53EF\u627E\u7684\u90E8\u4F4D\uFF0C\u6362\u4E2A\u7AE0\u8282\u8BD5\u8BD5"),Ni();return}Qi>=Br.length&&(Qi=0,ka++);let i=Qi+1,e=Br.length;di=Br[Qi],Qi++,or=!0,Ax.innerHTML="\u627E\u4E00\u627E\uFF1A<b>"+La[di].name+"</b>\u5728\u54EA\u91CC\uFF1F",Vf&&(Vf.textContent="\u7B2C "+ka+" \u8F6E \xB7 "+i+"/"+e),sd&&(sd.style.display=e>1?"":"none"),Dr.classList.add("show"),Dr.classList.remove("shake"),ur(),hr(),Ve&&(Ve=!1,lr(),Ft())}function n0(){if(!an){on("\u8BF7\u5148\u8FDB\u5165\u8BFE\u5802\u6A21\u5F0F");return}t0()}function Ni(){or=!1,di=null,Dr&&Dr.classList.remove("show","shake")}function i0(i,e){if(Di)return;let t=Pd(i,e);if(or){if($x(i,e)||t&&Qx(di,t)){let r=di;ld(r,i,e),Ni(),on("\u627E\u5230\u5566\uFF01\u8FD9\u662F"+La[r].name)}else t?(Dr.classList.remove("shake"),Dr.offsetWidth,Dr.classList.add("shake"),on("\u8FD9\u91CC\u4E0D\u662F"+La[di].name+"\uFF0C\u518D\u627E\u627E\u770B")):on("\u518D\u4ED4\u7EC6\u770B\u770B\uFF0C\u627E\u627E\u753B\u9762\u91CC\u7684"+La[di].name);return}t?(an&&Ve&&(Ve=!1,lr(),Ft()),ld(t,i,e)):hr()}function ty(){let i=en.domElement,e=document.createElement("canvas"),t=Math.min(720,i.width),n=Math.max(1,Math.round(t*i.height/Math.max(1,i.width)));return e.width=t,e.height=n,e.getContext("2d").drawImage(i,0,0,t,n),e.toDataURL("image/jpeg",.86)}function $f(i){for(let e of[Om,zm])e&&(e.disabled=i,e.setAttribute("aria-busy",i?"true":"false"),e.classList.toggle("busy",i))}async function Id(){if(Wu)return;Wu=!0,ql=!0,$f(!0);let i={t:Be,prevT:Cn,playing:Ve,theta:Le.theta,radius:Le.radius,phi:Le.phi},e=[];try{for(let[t,n,r]of Hx)Be=t,Cn=t,Lr=t,Ve=!1,Le.theta=1.46,Le.radius=12.5,Le.phi=1.46,Ft(),Hn(t),await new Promise(s=>requestAnimationFrame(()=>requestAnimationFrame(s))),en.render(ye,kt),e.push({label:n,year:r,url:ty()});kf&&(kf.innerHTML=e.map(t=>'<figure class="quartet-item"><img src="'+t.url+'" alt="'+t.label+'"><figcaption><b>'+t.label+"</b><span>"+t.year+"</span></figcaption></figure>").join("")),Ii(Mx)}finally{Lr=null,ql=!1,Be=i.t,Cn=i.prevT,Ve=i.playing,Le.theta=i.theta,Le.radius=i.radius,Le.phi=i.phi,Ft(),Hn(Be),Wu=!1,$f(!1)}}function ny(i){Nr&&(Nr.innerHTML='<span class="pause-text">'+i+'</span><button class="pause-btn" id="pauseContinue" type="button">\u7EE7\u7EED\u64AD\u653E</button>',Nr.classList.add("show"))}Nr.addEventListener("click",i=>{i.target.closest("#pauseContinue")&&(ur(),Ui=!1,!(Be>=It-.01)&&(Ve=!0,Ft(),an&&Yt&&cr()))});function ur(){Nr&&Nr.classList.remove("show")}xd&&ic(!0);Bm.addEventListener("click",yd);ux.addEventListener("click",()=>{Be=0,Cn=0,Ve=!0,Ui=!1,sr=!1,rr=-1,Hn(0),Ft()});var Zl=!1;function r0(i){if(!Cs||!Ha)return;let e=Ha.getBoundingClientRect();if(e.width<=0)return;let t=Ot((i-e.left)/e.width,0,1),n=t*It,r=zn(n);Cs.textContent=wi(n)+" \xB7 "+Zt[r].title,Cs.style.left=t*100+"%",Cs.classList.add("show")}function iy(){zr=!0,Zl=Ve}function s0(){zr&&(zr=!1,Zl&&(Ve=!0,Zl=!1),Ft(),an&&Ve&&Yt&&cr())}Nn.addEventListener("pointerdown",()=>{iy()});Nn.addEventListener("input",i=>{Ri(parseFloat(i.target.value),!Zl)});Nn.addEventListener("change",s0);Ha.addEventListener("pointermove",i=>r0(i.clientX));Ha.addEventListener("pointerdown",i=>r0(i.clientX));Ha.addEventListener("pointerleave",()=>{zr||Cs.classList.remove("show")});window.addEventListener("pointerup",()=>{s0(),Cs.classList.remove("show")});var Pl=!1;function Qf(i){if(!pn)return;let e=pn.getBoundingClientRect();if(e.width<=0)return;let t=Ot((i-e.left)/e.width,0,1);Ri(t*It,!Pl)}pn&&(pn.addEventListener("pointerdown",i=>{Pl=Ve;try{pn.setPointerCapture(i.pointerId)}catch{}Qf(i.clientX)}),pn.addEventListener("pointermove",i=>{let e=!1;try{e=pn.hasPointerCapture(i.pointerId)}catch{}e&&Qf(i.clientX)}),pn.addEventListener("pointerup",i=>{try{pn.hasPointerCapture(i.pointerId)&&pn.releasePointerCapture(i.pointerId)}catch{}Pl&&(Ve=!0,Pl=!1,Ft())}),pn.addEventListener("keydown",i=>{(i.key==="ArrowLeft"||i.key==="ArrowRight")&&(i.preventDefault(),i.stopPropagation(),Ri(Be+(i.key==="ArrowLeft"?-5:5),!Ve))}));document.getElementById("replant").addEventListener("click",()=>{Va=Math.floor(Math.random()*1e5),Md(Va),Be=0,Cn=0,Ve=!0,Ui=!1,sr=!1,rr=-1,Hn(0),Ft()});nd.addEventListener("click",()=>rc({reset:!0,fullscreen:!0,autoplay:!0}));Fa.addEventListener("click",()=>{Di=!1,ir.classList.add("hidden"),ic(!1),ur(),Ve=!0,Ft()});Fm.addEventListener("click",yd);id.addEventListener("click",qm);rd.addEventListener("click",jm);xx.addEventListener("click",()=>{Be=0,Cn=0,Ve=!0,Ui=!1,sr=!1,rr=-1,Hn(0),Ft(),Yt&&cr()});mx.addEventListener("click",()=>Ii(Ls));gx.addEventListener("click",()=>Ii(gd));vx.addEventListener("click",n0);Om.addEventListener("click",Id);Rl.addEventListener("click",jx);Cl.addEventListener("click",Zm);_x.addEventListener("click",$m);document.getElementById("exitCancelBtn").addEventListener("click",()=>Ya(document.getElementById("exitConfirm")));document.getElementById("exitConfirmBtn").addEventListener("click",()=>{Ya(document.getElementById("exitConfirm")),Qm()});Ki.addEventListener("click",qx);Cx.addEventListener("click",()=>Ii(Ls));zm.addEventListener("click",Id);Px.addEventListener("click",()=>rc({reset:!1,fullscreen:!0,autoplay:!0}));Ix.addEventListener("click",()=>Ii(Hm));Tx.addEventListener("click",hr);sd.addEventListener("click",t0);Rx.addEventListener("click",Ni);za.addEventListener("click",i=>{let e=i.target.closest(".chapter-item");e&&(Ed(parseInt(e.dataset.index,10),!0),Ya(Ls))});document.querySelectorAll(".modal").forEach(i=>{i.addEventListener("pointerdown",e=>{e.target===i&&Ya(i)})});document.querySelectorAll("[data-close]").forEach(i=>{i.addEventListener("click",()=>Ya(document.getElementById(i.dataset.close)))});window.addEventListener("pointermove",wd,{passive:!0});window.addEventListener("pointerdown",wd,{passive:!0});document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&an&&Jm()});window.addEventListener("keydown",i=>{if(Sd()){i.key==="Escape"&&(i.preventDefault(),Wm());return}Di||i.target&&i.target.matches&&i.target.matches('input[type="range"]')&&i.target!==Nn||i.code==="Space"&&i.target&&i.target.closest&&i.target.closest('button, a, input, textarea, select, [contenteditable="true"]')||(i.code==="Space"?(i.preventDefault(),yd()):i.key==="ArrowLeft"?(i.preventDefault(),Ri(Be-5,!Ve)):i.key==="ArrowRight"?(i.preventDefault(),Ri(Be+5,!Ve)):i.key==="Home"?(i.preventDefault(),Ri(0,!Ve)):i.key==="End"?(i.preventDefault(),Ri(It,!Ve)):i.key==="PageUp"?(i.preventDefault(),qm()):i.key==="PageDown"?(i.preventDefault(),jm()):i.key==="f"||i.key==="F"?(i.preventDefault(),Zx()):i.key==="c"||i.key==="C"?(i.preventDefault(),Ii(Ls)):i.key==="t"||i.key==="T"?(i.preventDefault(),Ii(gd)):i.key==="q"||i.key==="Q"?(i.preventDefault(),Id()):i.key==="p"||i.key==="P"?(i.preventDefault(),Zm()):i.key==="?"||i.key==="/"&&i.shiftKey?(i.preventDefault(),Ii(Hm)):i.key==="Escape"?sn.classList.contains("show")?(i.preventDefault(),hr()):or?(i.preventDefault(),Ni()):Nr.classList.contains("show")?(i.preventDefault(),ur()):an&&(i.preventDefault(),$m()):(i.key==="r"||i.key==="R")&&(Va=Math.floor(Math.random()*1e5),Md(Va),Be=0,Cn=0,Ve=!0,Ui=!1,sr=!1,rr=-1,Hn(0),Ft()))});var Nt=new Fe,dn=new Pt,ry=new Pt,rn=new M,yt=new M,qu=new Wt,Ji=new xe,g1=new xe,Ea=new M,em=new M,sy=new M,v1=new M,_1=new oe(.5,.8),tm="",x1=new M;function nm(i,e,t=1){if(Math.abs(e-i.lastK)<.003&&Math.abs(t-(i.lastFat===void 0?-1:i.lastFat))<.004)return;i.lastK=e,i.lastFat=t;let n=i.mesh.geometry.attributes.position,r=n.array,s=i.basePos,a=i.rings,o=i.radial,l=Math.min(a-1,Math.max(0,e*(a-1))),c=Math.min(a-2,Math.floor(l));if(Ea.copy(i.pts[c]).lerp(i.pts[c+1],l-c),c+1<a){let d=Math.min(.1,(i.radii?i.radii[c]:.05)*1.4);Ea.addScaledVector(i.pts[c+1].clone().sub(i.pts[c]).normalize(),d)}let h=(.45+.55*Math.min(1,e*1.7))*t;for(let d=0;d<a;d++){let u=i.pts[d],p=d*o*3;if(d>c)for(let m=0;m<o;m++){let _=p+m*3;r[_]=Ea.x,r[_+1]=Ea.y,r[_+2]=Ea.z}else for(let m=0;m<o;m++){let _=p+m*3;r[_]=u.x+(s[_]-u.x)*h,r[_+1]=u.y+(s[_+1]-u.y)*h,r[_+2]=u.z+(s[_+2]-u.z)*h}}n.needsUpdate=!0}function a0(){requestAnimationFrame(a0);let i=performance.now(),e=Math.min(.1,Math.max(.001,(i-Yf)/1e3));if(Yf=i,!On&&Bn===null&&Ve){let O=Math.min(It,Be+e),k=zn(Be),ce=zn(O);if(an&&nr&&O<It-.001&&ce!==k){Be=Math.min(Zt[k].end,It),Ve=!1,Ui=!0;let ct=Zt[Math.min(Zt.length-1,k+1)].title;ny("\u7B2C "+(k+1)+" \u7AE0\u7ED3\u675F \xB7 \u4E0B\u4E00\u7AE0\uFF1A<b>"+ct+"</b>"),lr()}else Be=O,Be>=It-.001&&(Be=It,Ve=!1,an&&!sr&&(sr=!0,setTimeout(()=>{an&&on("\u672C\u8BFE\u64AD\u653E\u7ED3\u675F \xB7 \u53EF\u70B9\u300C\u56DB\u5B63\u5408\u5F71\u300D\u56DE\u987E\u56DB\u5B63")},900)))}let t=On?Vm:Lr!==null?Lr:Bn!==null?Bn:Be,n=On?1/60:Ve&&Bn===null&&Lr===null?Math.min(.05,Math.max(1e-4,t-Cn)):0;Cn=t,Hn(t),Ft();let r=On||Bn!==null||Lr!==null||ql;if(!r&&Fn.size===0&&(Math.abs(fn.theta)>.002||Math.abs(fn.phi)>.002)){Le.theta=Ot(Le.theta+fn.theta*e,Aa,Ra),Le.phi=Ot(Le.phi+fn.phi*e,.42,1.52);let O=Math.exp(-e*5.2);fn.theta*=O,fn.phi*=O}let s=r?1:1-Math.exp(-e*14);Qt.theta+=(Le.theta-Qt.theta)*s,Qt.phi+=(Le.phi-Qt.phi)*s,Qt.radius+=(Le.radius-Qt.radius)*s;let a=Math.abs(Le.theta-Qt.theta)>2e-4||Math.abs(Le.phi-Qt.phi)>2e-4||Math.abs(Le.radius-Qt.radius)>.002,l=(Ua(t)%1+1)%1,c=rm(t),h=cd(t),d=h+.3*he(120,235,t),u=h_(l,c_),p=ix(t);bi.topColor.value.copy(u.skyTop),bi.horizonColor.value.copy(u.horizon),bi.sunColor.value.copy(u.sun),bi.cloudCover.value=Math.min(1,u.cloud+p*.55),bi.cloudWarm.value=u.cloudWarm,bi.time.value=t,ye.fog.color.copy(u.fog),El.color.copy(u.horizon),El.groundColor.copy(u.ground).multiplyScalar(.6),El.intensity=u.hemi,mn.color.copy(u.sun),mn.intensity=u.sunI*(1-.38*p);let m=.16+.1*(.5+.5*Math.cos((l-.25)*Math.PI*2)),_=Qt.theta-Math.PI-.28+Math.sin(t*.03)*.04,f=sy.set(Math.cos(_)*Math.cos(m),Math.sin(m),Math.sin(_)*Math.cos(m)).normalize();if(mn.position.copy(f).multiplyScalar(34),Dl.position.copy(f).multiplyScalar(150),Ta.position.copy(f).multiplyScalar(148),Dl.material.color.copy(u.sun),Ta.material.color.copy(u.sun),Ta.material.opacity=.3*(.55+.45*(1-he(.6,.9,l)))*(1-.6*p)*(.75+.9*u.bloom),en.toneMappingExposure=1.12+(u.exposure-.94)*.32,bi.sunDir.value.copy(f),lm.color.copy(u.ground).multiplyScalar(1-.16*p),ba.length===3){let O=ba[0].uniforms;O.uBottomColor.value.copy(u.fog).lerp(u.skyTop,.05),O.uTopColor.value.copy(u.fog).lerp(u.skyTop,.38).multiplyScalar(.9),O.uSnowColor.value.setHex(15857919);let k=ba[1].uniforms;k.uBottomColor.value.copy(u.fog).lerp(u.ground,.12),k.uTopColor.value.copy(u.ground).lerp(u.fog,.52).multiplyScalar(.92);let ce=ba[2].uniforms;ce.uBottomColor.value.copy(u.ground).lerp(u.fog,.36),ce.uTopColor.value.copy(u.ground).lerp(u.fog,.24).multiplyScalar(.88)}let g=he(.44,.56,l)*(1-he(.76,.84,l));ye.__grass.material.color.setRGB(1+.95*g,1-.08*g,1-.85*g),Cm.value=t;let v=he(.01,.07,l)*(1-he(.4,.48,l));ye.__flowers.visible=v>.02,ye.__flowers.material.opacity=v;let x=he(.58,.7,l),y=he(.66,.92,l),A=he(.58,.66,l)*(1-he(.92,.99,l));if(ye.__groundLeaves.visible=A>.002,ye.__groundLeaves.visible){ye.__groundLeaves.material.opacity=A*(1-.62*y);let O=ye.__groundLeaves.userData.leafInfo;for(let k=0;k<O.length;k++){let ce=O[k],ct=.001+.999*x,it=ce.size*ct*(1-.85*y);yt.set(ce.pos.x,ce.pos.y-y*(.015+ce.size*.35),ce.pos.z),rn.set(it,it,it),Nt.compose(yt,ce.quat,rn),ye.__groundLeaves.setMatrixAt(k,Nt),Ji.copy(ce.color).lerp(Sl.setHex(2366226),Math.min(1,y*1.25)),ye.__groundLeaves.setColorAt(k,Ji)}ye.__groundLeaves.instanceMatrix.needsUpdate=!0,ye.__groundLeaves.instanceColor&&(ye.__groundLeaves.instanceColor.needsUpdate=!0)}let T=.45+.35*Math.cos((l-.03)*Math.PI*2);for(let O=0;O<Qu.length;O++)Qu[O].opacity=[.16,.1,.06][O]*T*(.88+.12*Math.sin(t*.05+O));if(fd.position.x=Math.sin(t*.018)*4,ed.opacity=.18*(1-he(.72,.82,l))*(.7+.3*Math.sin(t*.7))*he(.35,.65,h),ed.opacity>.01){let O=Hl.attributes.position.array;for(let k=0;k<Ql;k++){let ce=k*3;O[ce+1]+=n*(.05+k%7*.008),O[ce]+=Math.sin(t*.5+Tm[k])*n*.04,O[ce+1]>7.2&&(O[ce+1]=.2,O[ce]=(Math.random()-.5)*22,O[ce+2]=-10+Math.random()*12)}Hl.attributes.position.needsUpdate=!0}let P=.18+.82*he(.2,.92,h),U=ku(t),B=U?1-he(1,4.2,U.viewH):0;Ga.intensity=2.35+.55*B,Wa.intensity=1.25+.85*B,bl&&(bl.scale.setScalar(.3+1.85*he(.02,.95,h)),bl.material.opacity=.4+.48*P);let V=0;for(let O of pe.branches){let k=he(O.g0,O.g1,h);if(O.mesh.visible=k>.001,!O.mesh.visible)continue;nm(O,k,P);let ce=O.start.y+O.len*k;ce>V&&(V=ce)}let j=.22+.78*he(.03,1.05,d),G=he(.06,.85,d);pe.rootMats[0].color.setHex(11901554).lerp(zu.setHex(7295288),G),pe.rootMats[1].color.setHex(13021322).lerp(zu.setHex(9268301),G);for(let O of pe.roots){let k=he(O.g0,O.g1,d);O.mesh.visible=k>.001,O.mesh.visible&&nm(O,k,j)}if(pe.hairThresholds&&pe.rootHairs){let O=0,k=pe.hairThresholds.length;for(;O<k;){let ce=O+k>>1;pe.hairThresholds[ce]<=d?O=ce+1:k=ce}pe.rootHairs.geometry.setDrawRange(0,O*2),pe.rootHairs.visible=O>0}{let O=he(.04,.34,h),k=Math.max(.03,P*1.06);pe.flare.scale.set(k,Math.max(5e-4,O),k),pe.flare.visible=O>.02}let J=he(0,3,t),z=1+.14*he(16,32,t),X=he(18,30,t),Z=1-he(66,80,t),se=he(56,68,t)*(1-he(70,80,t));pe.seedMesh.visible=t<80&&Z>.01,pe.seedMesh.position.y=-.035+.1*(1-J)+.24*se,pe.seedMesh.scale.set(.35*z*Z,.28*z*Z,.46*z*Z),pe.seedTop.position.set(.018*X,.055*X,.006*X),pe.seedTop.rotation.z=-.62*X,pe.seedTop.rotation.x=.22*X,pe.seedBottom.position.y=-.008*X,pe.seedCrack.visible=X>.01&&Z>.02,pe.seedCrack.material.transparent=!0,pe.seedCrack.material.opacity=Math.min(1,X*2.2)*Z*.92,pe.seedCrack.scale.setScalar(1+.12*X);let te=pe.branches[0],me=te?he(te.g0,te.g1,h):0,Se=te?te.start.y+te.len*me:.2,ie=he(.09,.145,h)*(1-he(.28,.42,h));for(let O=0;O<pe.cotyledons.length;O++){let k=pe.cotyledons[O];k.scale.setScalar(Math.max(.001,.12*ie)),k.position.y=.12+.25*he(.06,.16,h),k.rotation.z=(O===0?1:-1)*(.95-.45*ie),k.visible=ie>.01}pe.cotyledonMat.color.setHex(10474334);let le=l<.05?he(0,.05,l):1,we=he(.1,.34,l),Te=0,fe=pe.leaves;for(let O=0;O<pe.leafData.length;O++){let k=pe.leafData[O],ce=k.branch?he(k.branch.g0,k.branch.g1,h):1,ct=k.branch?he(Math.max(.02,k.siteT-.06),k.siteT+.06,ce):1,it=he(k.grow,Math.min(1,k.grow+.1),h)*ct,Jt=he(.58+k.stag*.08,.72+k.stag*.05,l),kn=k.size*it*le*(1-Jt);if(kn<.002){Nt.makeScale(1e-4,1e-4,1e-4),fe.setMatrixAt(O,Nt);continue}let E=Math.sin(t*1.6+k.phase)*.06*it;k.branch?(im(k.branch.pts,Math.min(k.siteT,ce),em),yt.copy(em).add(k.offset)):yt.copy(k.pos),yt.x+=E,yt.z+=Math.cos(t*1.3+k.phase)*.05*it,dn.copy(k.quat),qu.set(E*.8,E*.5,E*.6),dn.multiply(ry.setFromEuler(qu)),rn.setScalar(kn),Nt.compose(yt,dn,rn),fe.setMatrixAt(O,Nt);let W=he(.46+k.stag*.1,.62+k.stag*.1,l);Ji.setHex(5212717).lerp(Sl.setHex(2841630),we),Ji.lerp(k.autumn,W),Te>.01&&Ji.lerp(zu.setHex(16767462),Te*.75),Ji.multiplyScalar(k.tone),fe.setColorAt(O,Ji)}fe.instanceMatrix.needsUpdate=!0,fe.instanceColor&&(fe.instanceColor.needsUpdate=!0);let w=c>=2?he(.02,.07,l)*(1-he(.22,.3,l)):0;pe.blossoms.visible=w>.02,pe.blossomMat.opacity=w*.95;let b=he(.75,.85,l)*(1-he(.92,.99,l));pe.snowCaps.visible=b>.02,pe.snowCapMat.opacity=b;let L=c>=2?he(.5,.58,l):0,D=c>=2?he(.54,.62,l):0,R=he(.68,.76,l),I=L*(1-he(.68,.76,l));{let O=pe.fruitData,k=pe.fruits,ce=pe.stems,ct=dn.set(0,0,0,1);for(let it=0;it<O.length;it++){let Jt=O[it],kn=Jt.size*L*(1-he(.74,.8,l));if(kn<.002){k.setMatrixAt(it,Rs),ce.setMatrixAt(it,Rs);continue}let E=Math.sin(t*1.5+Jt.phase)*.02*L;yt.copy(Jt.pos),yt.x+=E,yt.y=Math.max(.14,Jt.pos.y-R*(1.2+Jt.stag*.9)),Nt.compose(yt,Jt.quat,rn.setScalar(kn)),k.setMatrixAt(it,Nt),k.setColorAt(it,Ji.setHex(8366138).lerp(Jt.ripe,D)),yt.y+=kn*.92,Nt.compose(yt,ct,rn.set(1,1,1)),R<.35?ce.setMatrixAt(it,Nt):ce.setMatrixAt(it,Rs)}k.instanceMatrix.needsUpdate=!0,k.instanceColor&&(k.instanceColor.needsUpdate=!0),ce.instanceMatrix.needsUpdate=!0}let S=he(.18,.34,h),C=he(.52,.58,l)*(1-he(.7,.74,l)),H=h>.5&&C>.01?(8+30*he(.52,.68,l))*C:0,Q=l>.18&&l<.34&&c>=2?10*S:0,F=H+Q,ee=F*t;if(F>0&&n>0&&Math.floor(ee)>Math.floor(ee-F*n)){let O=Math.random()>H/Math.max(.001,F),k=pe.leafData[Math.floor(Math.random()*pe.leafData.length)],ce=O?Sl.setHex(16763356):k.autumn;rx(ce);let ct=Oa[(wa+Pi-1)%Pi];ct.pos.copy(k.pos),ct.size=O?.12:.2}for(let O=0;O<Pi;O++){let k=Oa[O];if(!(k.life<=0)){if(k.pos.addScaledVector(k.vel,n),k.pos.x+=Math.sin(t*2+O)*.35*n,k.pos.z+=Math.cos(t*1.7+O)*.3*n,k.rot.addScaledVector(k.spin,n),k.pos.y<=.03){k.life=0,Rn.setMatrixAt(O,Rs);continue}dn.setFromEuler(qu.set(k.rot.x,k.rot.y,k.rot.z)),Nt.compose(k.pos,dn,rn.setScalar(k.size)),Rn.setMatrixAt(O,Nt)}}Rn.instanceMatrix.needsUpdate=!0,Nm.opacity=1;let $=he(.98,1.16,d);um.opacity=.22*$,pm.opacity=.28*$,Nl&&(Nl.opacity=.3*$),Zu.uTime.value=t,Zu.uOpacity.value=.18*$,gm.opacity=.5*$;{let O=Bl.attributes.position.array;for(let k=0;k<Jl;k++){let ce=k*4;O[k*3]=Ti[ce]+Math.sin(t*.7+Ti[ce+3])*.12,O[k*3+1]=Ds-.15-(Ti[ce+1]+t*.28+Ti[ce+3]*.03)%1*2,O[k*3+2]=Ti[ce+2]}Bl.attributes.position.needsUpdate=!0}xm.opacity=(.42+.3*Math.sin(t*2.1))*$;let re=he(.75,.85,l)*(1-he(.92,.99,l));Lm.opacity=re*.95,Gl.visible=re>.01;let Me=he(.72,.8,l),ge=he(.9,1,l),Ie=Math.max(1e-4,Math.max(1-Me,ge));if(ye.__grass.material.opacity=Ie,ye.__grass.scale.set(1,1,1),Dm.opacity=p*.82,Xl.visible=p>.01,Xl.visible){let O=Wl.attributes.position.array;for(let k=0;k<ec;k++){let ce=k*3;O[ce+1]-=Um[k]*n,O[ce]+=1.2*n,O[ce+1]<0&&(O[ce+1]=8+Math.random()*3,O[ce]=(Math.random()-.5)*24,O[ce+2]=-9+Math.random()*9)}Wl.attributes.position.needsUpdate=!0}if(Gl.visible){let O=Vl.attributes.position.array;for(let k=0;k<qa;k++){let ce=k*3;O[ce+1]-=Im[k]*n*.9,O[ce]+=Math.sin(t*.9+td[k])*n*.5,O[ce+2]+=Math.cos(t*.7+td[k])*n*.4,O[ce+1]<0&&(O[ce+1]=24+Math.random()*4,O[ce]=(Math.random()-.5)*56,O[ce+2]=-24+Math.random()*28)}Vl.attributes.position.needsUpdate=!0}let Oe=D_(t),Ge=1-he(.12,.42,p),We=1-.78*he(.76,.84,l),Re=Oe.env*Ge*We;if(ga.visible=Re>.01,ga.material.opacity=Math.min(1,Re*1.25),ga.visible){let O=kt.quaternion;for(let k=0;k<14;k++){let ce=k<9,ct=ce?k:k-9,it=ct===0?0:Math.ceil(ct/2),Jt=ct===0?0:ct%2?1:-1,kn=Ts[k]*.35,E=Ts[(k+11)%40]*.3,W=-46+92*Oe.u+Jt*(.7+it*.55)+kn,K=9.5+5*Math.sin(Math.PI*Oe.u)-it*.38+E+.9*Math.sin(t*.35+Dn[k]),ne=-62+10*Math.sin(Math.PI*Oe.u)-it*.6,Y=ce?1.3:.7,ue=.55+.45*Math.sin(t*7+Dn[k]);yt.set(W,K,ne),dn.copy(O),rn.set(Y,Y*ue,Y),Nt.compose(yt,dn,rn),ga.setMatrixAt(k,Nt)}ga.instanceMatrix.needsUpdate=!0}let et=Math.min(1,he(196,199,t)*(1-he(218,222,t))*1+he(120,123,t)*(1-he(136,140,t))*.55),st=he(196,199,t)*(1-he(218,222,t)),ft=Math.min(1,he(181,184,t)*(1-he(202,206,t))+st*.7);if(zl=[],As=[],bs.visible=et>.01,bs.material.opacity=et,bs.visible){for(let O=0;O<5;O++){let k=O>=3,ce=k?2.6*Math.sin(t*.55+Dn[O]):-2.4+O*1.9+Ts[O]*.25,ct=k?4.6+.8*Math.sin(t*.9+Dn[O]):3.5+O%2*1.15+Math.sin(t*1.6+Dn[O])*.025,it=k?.85+.4*Math.cos(t*.5+Dn[O]):.55+Ts[(O+7)%40]*.25;yt.set(ce,ct,it),dn.copy(kt.quaternion);let Jt=.78+.06*Math.sin(t*2+Dn[O]);rn.set(Jt,Jt*(.92+.08*Math.sin(t*6+Dn[O])),Jt),Nt.compose(yt,dn,rn),bs.setMatrixAt(O,Nt),zl.push(yt.clone())}bs.instanceMatrix.needsUpdate=!0}if(ws.visible=st>.01,ws.material.opacity=st,ws.visible){for(let O=0;O<7;O++){let k=Dn[O];yt.set(2.7*Math.sin(t*.85+k),4+1.25*Math.sin(t*1.55+k),.7+.7*Math.cos(t*.7+k)),dn.copy(kt.quaternion);let ce=.35+.65*Math.abs(Math.sin(t*9+k)),ct=.68+.08*Ts[(O+3)%40];rn.set(ct*ce,ct,ct),Nt.compose(yt,dn,rn),ws.setMatrixAt(O,Nt),As.push(yt.clone())}ws.instanceMatrix.needsUpdate=!0}if(va.visible=ft>.01,va.material.opacity=ft,va.visible){for(let O=0;O<5;O++){let k=Dn[(O+9)%40];yt.set(2*Math.sin(t*1.15+k),4.3+.7*Math.sin(t*2.3+k),.6+.5*Math.cos(t*1.7+k)),dn.copy(kt.quaternion);let ce=.52;rn.set(ce,ce*(.85+.15*Math.sin(t*14+k)),ce),Nt.compose(yt,dn,rn),va.setMatrixAt(O,Nt),st>.1&&As.push(yt.clone())}va.instanceMatrix.needsUpdate=!0}if(_a.visible=st>.01,_a.material.opacity=st,_a.visible){for(let O=0;O<5;O++){yt.set(-1.9+O*.95+.12*Math.sin(t*.4+Dn[O]),2.7+O%3*.55,.42),dn.copy(kt.quaternion);let k=.36;rn.set(k,k,k),Nt.compose(yt,dn,rn),_a.setMatrixAt(O,Nt),As.push(yt.clone())}_a.instanceMatrix.needsUpdate=!0}let Ce=l<.05?he(0,.05,l):1-he(.56,.72,l),je=he(.16,.32,l)*(1-he(.62,.78,l));Ju.opacity=.88*he(.3,.9,h)*Ce*je*(1-.7*p),ja.visible=Ju.opacity>.01;for(let O=0;O<Ku.length;O++)Ku[O].opacity=(.05+.09*u.cloud)*(.6+.4*Math.sin(t*.05+O)),Em[O].position.x=(t*(.55+O*.18)+O*17)%70-35;let q=he(.1,.18,l)*(1-he(.34,.42,l));if($u.opacity=.55*q*he(.3,.9,h)*(1-p),Na.visible=$u.opacity>.01,Na.visible){let O=Ol.attributes.position.array;for(let k=0;k<Kl;k++){let ce=k*4;O[k*3]=Ai[ce]+Math.sin(t*.45+Ai[ce+3])*.55,O[k*3+1]=.3+(Ai[ce+1]*7+t*.22)%7,O[k*3+2]=Ai[ce+2]+Math.cos(t*.3+Ai[ce+3])*.4}Ol.attributes.position.needsUpdate=!0}let de=c>=2?he(.68,.72,l)*(1-he(.78,.84,l)):0;if(bm.opacity=.85*de,Ba.visible=de>.01,Ba.visible){let O=Fl.attributes.position.array;for(let k=0;k<$l;k++){let ce=k*4,ct=(er[ce+1]+t*.32)%1;O[k*3]=er[ce]+Math.sin(t*.9+er[ce+3])*.12,O[k*3+1]=.06+(1-ct)*2.6,O[k*3+2]=er[ce+2]}Fl.attributes.position.needsUpdate=!0}let be=he(250,259,t);tr.visible=be>.01,tr.scale.setScalar(.45+1.05*be);let Ee=he(0,1,h);Ps.rotation.z=Math.sin(t*.62)*(.012+.018*p)*Ee,Ps.rotation.x=Math.cos(t*.48)*(.01+.012*p)*Ee,pe.rootSub&&pe.rootSub.quaternion.copy(Ps.quaternion).invert(),On?Le.theta=1.43+Math.sin(t*.05)*.085:!sx&&Ve&&i-Or>6e3&&(Le.theta+=Le.dir*.035*n,Le.theta>Ra&&(Le.theta=Ra,Le.dir=-1),Le.theta<Aa&&(Le.theta=Aa,Le.dir=1));let ae=Math.max(.01,kt.aspect),De=ae<1.45?Math.min(2.8,Math.pow(1.45/ae,.82)):1,N=ku(t),nt=Math.max(.9,V+.52),Et=ql?0:he(205,255,t)*he(.9,1.45,ae),Pe=-.62-3.6*he(0,.34,h)-6.35*Et,gt=(nt+Pe)/2,zt=nt-Pe,Mt;if(N)Le.target.y=N.targetY,Mt=N.viewH/(2*Math.tan(kt.fov*Math.PI/360));else{let O=ku(119.999),k=he(120,130,t);Le.target.y=O.targetY+(gt-O.targetY)*k,Mt=(O.viewH+(zt-O.viewH)*k)/(2*Math.tan(kt.fov*Math.PI/360))}Le.target.x=.5*he(.15,.7,h);let qe=Math.max(1.35,Mt)*(Qt.radius/12.5)*De,Tt=Math.sin(Qt.phi),mt=Math.cos(Qt.phi);kt.position.set(Le.target.x+qe*Tt*Math.cos(Qt.theta),Le.target.y+qe*mt,Le.target.z+qe*Tt*Math.sin(Qt.theta)),kt.lookAt(Le.target);let ke=Math.floor(l*4)%4;t<It-2.2&&ui[ke].name!==Sa&&(Sa=ui[ke].name,ya.textContent=Sa,xl.textContent=ui[ke].sub,document.body.dataset.season=Sa,ya.style.animation="none",ya.offsetWidth,ya.style.animation="seasonIn .7s ease both"),lx.textContent="\u7B2C "+c+" \u5E74";let ot=ke===2&&I>.45?"\u679C\u5B9E\u719F\u4E86":ui[ke].sub;t<It-2.2&&xl.textContent!==ot&&(xl.textContent=ot);let lt=(l%1+1)%1;if(yl&&(yl.style.transform="translate(-50%, -100%) rotate("+(lt*360).toFixed(2)+"deg)"),Of&&(Of.textContent="\u7B2C "+c+" \u5E74"),Ma){let O="\u7B2C "+c+" \u5E74";Ma.textContent!==O&&(Ma.textContent=O)}t>=It-2.2&&(Sa="\u6625",ya.textContent="\u6625",xl.textContent="\u4E07\u7269\u53D1\u82BD \xB7 \u65B0\u7684\u8F6E\u56DE",document.body.dataset.season="\u6625",Ma&&(Ma.textContent="\u65B0\u7684\u4E00\u5E74"),yl&&(yl.style.transform="translate(-50%, -100%) rotate(0deg)")),l_&&Math.floor(t*2)!==Math.floor((t-n)*2)&&console.log("[debug]","t="+t.toFixed(1),"p="+l.toFixed(3),"g="+h.toFixed(3),"ground=#"+u.ground.getHexString(),"snowA="+re.toFixed(2),"grassY="+ye.__grass.scale.y.toFixed(2));let dt=n===0&&!Ve&&!zr&&!a?[t.toFixed(3),Qt.theta.toFixed(3),Qt.phi.toFixed(3),Qt.radius.toFixed(3),or?1:0].join("|"):"";(dt===""||dt!==tm)&&(tm=dt,en.render(ye,kt))}window.addEventListener("resize",()=>{let i=hd();kt.aspect=i.w/i.h,kt.updateProjectionMatrix(),en.setSize(i.w,i.h)});{let i=document.getElementById("loading");i&&(requestAnimationFrame(()=>i.classList.add("hidden")),setTimeout(()=>{i.style.display="none"},620))}window.matchMedia("(pointer: coarse)").matches&&(document.getElementById("tips").textContent="\u5355\u6307\u62D6\u52A8\u73AF\u987E \xB7 \u53CC\u6307\u7F29\u653E \xB7 \u7528\u5E95\u90E8\u8FDB\u5EA6\u6761\u63A7\u5236\u64AD\u653E");/(^|[?&])dbg(=|&|$)/.test(location.search)&&(window.__scene=ye,window.__sky=bi,window.__camera=kt,window.__renderer=en,window.__probe=(i,e)=>{let t=new da;return t.setFromCamera(new oe(i,e),kt),t.intersectObjects(ye.children,!0).slice(0,5).map(n=>({name:n.object.name||n.object.type,geo:n.object.geometry&&n.object.geometry.type,verts:n.object.geometry&&n.object.geometry.attributes.position?n.object.geometry.attributes.position.count:0,dist:+n.distance.toFixed(2),pt:[+n.point.x.toFixed(2),+n.point.y.toFixed(2),+n.point.z.toFixed(2)]}))});_d&&rc({reset:!1,fullscreen:!1,autoplay:Bn===null});window.__classroom={enter:rc,exit:Qm,state:()=>({classroomMode:an,autoPauseAtChapter:nr,voiceOn:Yt,projectorBright:Fr,storyTime:Be,playing:Ve,currentChapter:rr}),speech:{state:()=>An.state(),setVoicesForTest:i=>An.setVoicesForTest(i),resetForTest:()=>{An.setVoicesForTest(null),An.cancel(),Yt=!1,Pa=-1,ti(),Us()},setEnabled:i=>{Yt=!!i,Yt||lr(),ti()},speak:()=>cr()},pickPartAt:Pd,partVisibleAt:Ad,findState:()=>({findActive:or,findTarget:di,findBag:Br.slice(),findBagIndex:Qi,findRound:ka}),findablePartsAt:e0,partScreenPoints:Cd,handleCanvasTap:i0,startFindGame:n0,stopFindGame:Ni,seekForTest:i=>{Lr=i,Be=i,Cn=i,Ve=!1,Le.theta=1.46,Le.radius=12.5,Le.phi=1.46,Hn(i),Ft()}};a0();})();
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
