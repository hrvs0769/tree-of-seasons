(()=>{var qd=2;var Pf=0,bh=1,Nn=2;var Yd=1,Mo=2;var Ui=100,Lf=101,Uf=102;var Df=200,Nf=201,Of=202,Bf=203,Xl=204,jl=205,Ff=206,zf=207,Hf=208,kf=209,Vf=210,Gf=211,Wf=212,Xf=213,jf=214,qf=0,Yf=1,Zf=2,Jf=3,Kf=4,$f=5,Qf=6,em=7;var Zd=4;var Jd=300,Rr=301,Cr=302,ql=303,Yl=304,So=306,Oi=1e3,Bi=1001,Zl=1002,Mn=1003,tm=1004;var ia=1005;var qn=1006,ll=1007;var br=1008;var fi=1009,Kd=1010,$d=1011,fs=1012,wh=1013,Fi=1014,Ln=1015,Rs=1016,Th=1017,Ah=1018,Ir=1020,Qd=35902,ep=1021,tp=1022,Un=1023,np=1024,ip=1025,ms=1026,Pr=1027,Rh=1028,Ch=1029,rp=1030,Ih=1031;var Ph=1033,za=33776,Ha=33777,ka=33778,Va=33779,Jl=35840,Kl=35841,$l=35842,Ql=35843,ec=36196,tc=37492,nc=37496,ic=37808,rc=37809,sc=37810,ac=37811,oc=37812,lc=37813,cc=37814,hc=37815,uc=37816,dc=37817,pc=37818,fc=37819,mc=37820,gc=37821,Ga=36492,vc=36494,_c=36495,sp=36283,xc=36284,yc=36285,Mc=36286;var Xa=2300,Sc=2301,cl=2302,Uu=2400,Du=2401,Nu=2402;var Er="",dt="srgb",Hr="srgb-linear",Eo="linear",ht="srgb";var sr=7680;var nm=512,im=513,rm=514,sm=515,am=516,om=517,lm=518,cm=519,Ec=35044,ji=35048;var Ou="300 es",Lr=2e3,ja=2001,mi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let i=0,s=n.length;i<s;i++)n[i].call(this,e);e.target=null}}},kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Wa=Math.PI/180,bc=180/Math.PI;function Yn(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(kt[255&r]+kt[r>>8&255]+kt[r>>16&255]+kt[r>>24&255]+"-"+kt[255&e]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[63&t|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[255&n]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]).toLowerCase()}function Ut(r,e,t){return Math.max(e,Math.min(t,r))}function hm(r,e){return(r%e+e)%e}function hl(r,e,t){return(1-t)*r+t*e}function Pn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ut(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var ce=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ve=class r{constructor(e,t,n,i,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],m=n[8],x=i[0],f=i[3],g=i[6],v=i[1],_=i[4],y=i[7],R=i[2],T=i[5],I=i[8];return s[0]=a*x+o*v+l*R,s[3]=a*f+o*_+l*T,s[6]=a*g+o*y+l*I,s[1]=c*x+h*v+d*R,s[4]=c*f+h*_+d*T,s[7]=c*g+h*y+d*I,s[2]=u*x+p*v+m*R,s[5]=u*f+p*_+m*T,s[8]=u*g+p*y+m*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*s,p=c*s-a*l,m=t*d+n*u+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=d*x,e[1]=(i*c-h*n)*x,e[2]=(o*n-i*a)*x,e[3]=u*x,e[4]=(h*t-i*l)*x,e[5]=(i*s-o*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ul.makeScale(e,t)),this}rotate(e){return this.premultiply(ul.makeRotation(-e)),this}translate(e,t){return this.premultiply(ul.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ul=new Ve;function ap(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function qa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function um(){let r=qa("canvas");return r.style.display="block",r}var Bu={};function hs(r){r in Bu||(Bu[r]=!0,console.warn(r))}var Qe={enabled:!0,workingColorSpace:Hr,spaces:{},convert:function(r,e,t){return this.enabled!==!1&&e!==t&&e&&t&&(this.spaces[e].transfer===ht&&(r.r=Zn(r.r),r.g=Zn(r.g),r.b=Zn(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ht&&(r.r=Tr(r.r),r.g=Tr(r.g),r.b=Tr(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Er?Eo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Zn(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function Tr(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var Fu=[.64,.33,.3,.6,.15,.06],zu=[.2126,.7152,.0722],Hu=[.3127,.329],ku=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vu=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715),ar;Qe.define({[Hr]:{primaries:Fu,whitePoint:Hu,transfer:Eo,toXYZ:ku,fromXYZ:Vu,luminanceCoefficients:zu,workingColorSpaceConfig:{unpackColorSpace:dt},outputColorSpaceConfig:{drawingBufferColorSpace:dt}},[dt]:{primaries:Fu,whitePoint:Hu,transfer:ht,toXYZ:ku,fromXYZ:Vu,luminanceCoefficients:zu,outputColorSpaceConfig:{drawingBufferColorSpace:dt}}});var wc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ar===void 0&&(ar=qa("canvas")),ar.width=e.width,ar.height=e.height;let n=ar.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ar}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=qa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=255*Zn(s[a]/255);return n.putImageData(i,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*Zn(t[n]/255)):t[n]=Zn(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},dm=0,Ya=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=Yn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(dl(i[a].image)):s.push(dl(i[a]))}else s=dl(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function dl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?wc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var pm=0,Zt=class r extends mi{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,l=1009,c=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=Yn(),this.name="",this.source=new Ya(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oi:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case Zl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Oi:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case Zl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Zt.DEFAULT_IMAGE=null,Zt.DEFAULT_MAPPING=Jd,Zt.DEFAULT_ANISOTROPY=1;var _t=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],m=l[9],x=l[2],f=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(m-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(m+f)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,y=(p+1)/2,R=(g+1)/2,T=(h+u)/4,I=(d+x)/4,U=(m+f)/4;return _>y&&_>R?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=T/n,s=I/n):y>R?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=T/i,s=U/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=I/s,i=U/s),this.set(n,i,s,t),this}let v=Math.sqrt((f-m)*(f-m)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(f-m)/v,this.y=(d-x)/v,this.z=(u-h)/v,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Tc=class extends mi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Zt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ya(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jn=class extends Tc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Za=class extends Zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ac=class extends Zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=s[a+0],p=s[a+1],m=s[a+2],x=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=d);if(o===1)return e[t+0]=u,e[t+1]=p,e[t+2]=m,void(e[t+3]=x);if(d!==x||l!==u||c!==p||h!==m){let f=1-o,g=l*u+c*p+h*m+d*x,v=g>=0?1:-1,_=1-g*g;if(_>Number.EPSILON){let R=Math.sqrt(_),T=Math.atan2(R,g*v);f=Math.sin(f*T)/R,o=Math.sin(o*T)/R}let y=o*v;if(l=l*f+u*y,c=c*f+p*y,h=h*f+m*y,d=d*f+x*y,f===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=R,c*=R,h*=R,d*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[a],u=s[a+1],p=s[a+2],m=s[a+3];return e[t]=o*m+h*d+l*p-c*u,e[t+1]=l*m+h*u+c*d-o*p,e[t+2]=c*m+h*p+o*u-l*d,e[t+3]=h*m-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(s/2),u=l(n/2),p=l(i/2),m=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*p*m,this._y=c*p*d-u*h*m,this._z=c*h*m+u*p*d,this._w=c*h*d-u*p*m;break;case"YXZ":this._x=u*h*d+c*p*m,this._y=c*p*d-u*h*m,this._z=c*h*m-u*p*d,this._w=c*h*d+u*p*m;break;case"ZXY":this._x=u*h*d-c*p*m,this._y=c*p*d+u*h*m,this._z=c*h*m+u*p*d,this._w=c*h*d-u*p*m;break;case"ZYX":this._x=u*h*d-c*p*m,this._y=c*p*d+u*h*m,this._z=c*h*m-u*p*d,this._w=c*h*d+u*p*m;break;case"YZX":this._x=u*h*d+c*p*m,this._y=c*p*d+u*h*m,this._z=c*h*m-u*p*d,this._w=c*h*d-u*p*m;break;case"XZY":this._x=u*h*d-c*p*m,this._y=c*p*d-u*h*m,this._z=c*h*m+u*p*d,this._w=c*h*d+u*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-s*d,this.z=i+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pl.copy(this).projectOnVector(e),this.sub(pl)}reflect(e){return this.sub(pl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},pl=new M,Gu=new yt,En=class{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,_n):_n.fromBufferAttribute(s,a),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ra.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ra.copy(n.boundingBox)),ra.applyMatrix4(e.matrixWorld),this.union(ra)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($r),sa.subVectors(this.max,$r),or.subVectors(e.a,$r),lr.subVectors(e.b,$r),cr.subVectors(e.c,$r),oi.subVectors(lr,or),li.subVectors(cr,lr),Ti.subVectors(or,cr);let t=[0,-oi.z,oi.y,0,-li.z,li.y,0,-Ti.z,Ti.y,oi.z,0,-oi.x,li.z,0,-li.x,Ti.z,0,-Ti.x,-oi.y,oi.x,0,-li.y,li.x,0,-Ti.y,Ti.x,0];return!!fl(t,or,lr,cr,sa)&&(t=[1,0,0,0,1,0,0,0,1],!!fl(t,or,lr,cr,sa)&&(aa.crossVectors(oi,li),t=[aa.x,aa.y,aa.z],fl(t,or,lr,cr,sa)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(_n).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Hn=[new M,new M,new M,new M,new M,new M,new M,new M],_n=new M,ra=new En,or=new M,lr=new M,cr=new M,oi=new M,li=new M,Ti=new M,$r=new M,sa=new M,aa=new M,Ai=new M;function fl(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Ai.fromArray(r,s);let o=i.x*Math.abs(Ai.x)+i.y*Math.abs(Ai.y)+i.z*Math.abs(Ai.z),l=e.dot(Ai),c=t.dot(Ai),h=n.dot(Ai);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var fm=new En,Qr=new M,ml=new M,bn=class{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):fm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qr.subVectors(e,this.center);let t=Qr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=.5*(n-this.radius);this.center.addScaledVector(Qr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ml.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qr.copy(e.center).add(ml)),this.expandByPoint(Qr.copy(e.center).sub(ml))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},kn=new M,gl=new M,oa=new M,ci=new M,vl=new M,la=new M,_l=new M,zi=class{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){gl.copy(e).add(t).multiplyScalar(.5),oa.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(gl);let s=.5*e.distanceTo(t),a=-this.direction.dot(oa),o=ci.dot(this.direction),l=-ci.dot(oa),c=ci.lengthSq(),h=Math.abs(1-a*a),d,u,p,m;if(h>0)if(d=a*l-o,u=a*o-l,m=s*h,d>=0)if(u>=-m)if(u<=m){let x=1/h;d*=x,u*=x,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(gl).addScaledVector(oa,u),p}intersectSphere(e,t){kn.subVectors(e.center,this.origin);let n=kn.dot(this.direction),i=kn.dot(kn)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||s>i?null:((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i?null:((o>n||n!=n)&&(n=o),(l<i||i!=i)&&(i=l),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,n,i,s){vl.subVectors(t,e),la.subVectors(n,e),_l.crossVectors(vl,la);let a,o=this.direction.dot(_l);if(o>0){if(i)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}ci.subVectors(this.origin,e);let l=a*this.direction.dot(la.crossVectors(ci,la));if(l<0)return null;let c=a*this.direction.dot(vl.cross(ci));if(c<0||l+c>o)return null;let h=-a*ci.dot(_l);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Le=class r{constructor(e,t,n,i,s,a,o,l,c,h,d,u,p,m,x,f){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,d,u,p,m,x,f)}set(e,t,n,i,s,a,o,l,c,h,d,u,p,m,x,f){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=p,g[7]=m,g[11]=x,g[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/hr.setFromMatrixColumn(e,0).length(),s=1/hr.setFromMatrixColumn(e,1).length(),a=1/hr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let u=a*h,p=a*d,m=o*h,x=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+m*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=m+p*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,p=l*d,m=c*h,x=c*d;t[0]=u+x*o,t[4]=m*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-m,t[6]=x+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,p=l*d,m=c*h,x=c*d;t[0]=u-x*o,t[4]=-a*d,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,p=a*d,m=o*h,x=o*d;t[0]=l*h,t[4]=m*c-p,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=p*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,p=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=x-u*d,t[8]=m*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+m,t[10]=u-x*d}else if(e.order==="XZY"){let u=a*l,p=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=a*h,t[9]=p*d-m,t[2]=m*d-p,t[6]=o*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mm,e,gm)}lookAt(e,t,n){let i=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),hi.crossVectors(n,Qt),hi.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),hi.crossVectors(n,Qt)),hi.normalize(),ca.crossVectors(Qt,hi),i[0]=hi.x,i[4]=ca.x,i[8]=Qt.x,i[1]=hi.y,i[5]=ca.y,i[9]=Qt.y,i[2]=hi.z,i[6]=ca.z,i[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],m=n[2],x=n[6],f=n[10],g=n[14],v=n[3],_=n[7],y=n[11],R=n[15],T=i[0],I=i[4],U=i[8],O=i[12],k=i[1],X=i[5],G=i[9],q=i[13],H=i[2],J=i[6],Q=i[10],le=i[14],oe=i[3],we=i[7],Se=i[11],re=i[15];return s[0]=a*T+o*k+l*H+c*oe,s[4]=a*I+o*X+l*J+c*we,s[8]=a*U+o*G+l*Q+c*Se,s[12]=a*O+o*q+l*le+c*re,s[1]=h*T+d*k+u*H+p*oe,s[5]=h*I+d*X+u*J+p*we,s[9]=h*U+d*G+u*Q+p*Se,s[13]=h*O+d*q+u*le+p*re,s[2]=m*T+x*k+f*H+g*oe,s[6]=m*I+x*X+f*J+g*we,s[10]=m*U+x*G+f*Q+g*Se,s[14]=m*O+x*q+f*le+g*re,s[3]=v*T+_*k+y*H+R*oe,s[7]=v*I+_*X+y*J+R*we,s[11]=v*U+_*G+y*Q+R*Se,s[15]=v*O+_*q+y*le+R*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14];return e[3]*(+s*l*d-i*c*d-s*o*u+n*c*u+i*o*p-n*l*p)+e[7]*(+t*l*p-t*c*u+s*a*u-i*a*p+i*c*h-s*l*h)+e[11]*(+t*c*d-t*o*p-s*a*d+n*a*p+s*o*h-n*c*h)+e[15]*(-i*o*h-t*l*d+t*o*u+i*a*d-n*a*u+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],m=e[12],x=e[13],f=e[14],g=e[15],v=d*f*c-x*u*c+x*l*p-o*f*p-d*l*g+o*u*g,_=m*u*c-h*f*c-m*l*p+a*f*p+h*l*g-a*u*g,y=h*x*c-m*d*c+m*o*p-a*x*p-h*o*g+a*d*g,R=m*d*l-h*x*l-m*o*u+a*x*u+h*o*f-a*d*f,T=t*v+n*_+i*y+s*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/T;return e[0]=v*I,e[1]=(x*u*s-d*f*s-x*i*p+n*f*p+d*i*g-n*u*g)*I,e[2]=(o*f*s-x*l*s+x*i*c-n*f*c-o*i*g+n*l*g)*I,e[3]=(d*l*s-o*u*s-d*i*c+n*u*c+o*i*p-n*l*p)*I,e[4]=_*I,e[5]=(h*f*s-m*u*s+m*i*p-t*f*p-h*i*g+t*u*g)*I,e[6]=(m*l*s-a*f*s-m*i*c+t*f*c+a*i*g-t*l*g)*I,e[7]=(a*u*s-h*l*s+h*i*c-t*u*c-a*i*p+t*l*p)*I,e[8]=y*I,e[9]=(m*d*s-h*x*s-m*n*p+t*x*p+h*n*g-t*d*g)*I,e[10]=(a*x*s-m*o*s+m*n*c-t*x*c-a*n*g+t*o*g)*I,e[11]=(h*o*s-a*d*s-h*n*c+t*d*c+a*n*p-t*o*p)*I,e[12]=R*I,e[13]=(h*x*i-m*d*i+m*n*u-t*x*u-h*n*f+t*d*f)*I,e[14]=(m*o*i-a*x*i-m*n*l+t*x*l+a*n*f-t*o*f)*I,e[15]=(a*d*i-h*o*i+h*n*l-t*d*l-a*n*u+t*o*u)*I,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,u=s*c,p=s*h,m=s*d,x=a*h,f=a*d,g=o*d,v=l*c,_=l*h,y=l*d,R=n.x,T=n.y,I=n.z;return i[0]=(1-(x+g))*R,i[1]=(p+y)*R,i[2]=(m-_)*R,i[3]=0,i[4]=(p-y)*T,i[5]=(1-(u+g))*T,i[6]=(f+v)*T,i[7]=0,i[8]=(m+_)*I,i[9]=(f-v)*I,i[10]=(1-(u+x))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=hr.set(i[0],i[1],i[2]).length(),a=hr.set(i[4],i[5],i[6]).length(),o=hr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],xn.copy(this);let l=1/s,c=1/a,h=1/o;return xn.elements[0]*=l,xn.elements[1]*=l,xn.elements[2]*=l,xn.elements[4]*=c,xn.elements[5]*=c,xn.elements[6]*=c,xn.elements[8]*=h,xn.elements[9]*=h,xn.elements[10]*=h,t.setFromRotationMatrix(xn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i),p,m;if(o===Lr)p=-(a+s)/(a-s),m=-2*a*s/(a-s);else{if(o!==ja)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),m=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(n-i),d=1/(a-s),u=(t+e)*c,p=(n+i)*h,m,x;if(o===Lr)m=(a+s)*d,x=-2*d;else{if(o!==ja)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);m=s*d,x=-1*d}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},hr=new M,xn=new Le,mm=new M(0,0,0),gm=new M(1,1,1),hi=new M,ca=new M,Qt=new M,Wu=new Le,Xu=new yt,Pt=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xu.setFromEuler(this),this.setFromQuaternion(Xu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pt.DEFAULT_ORDER="XYZ";var gs=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return!!(this.mask&e.mask)}isEnabled(e){return!!(this.mask&1<<e)}},vm=0,ju=new M,ur=new yt,Vn=new Le,ha=new M,es=new M,_m=new M,xm=new yt,qu=new M(1,0,0),Yu=new M(0,1,0),Zu=new M(0,0,1),Ju={type:"added"},ym={type:"removed"},dr={type:"childadded",child:null},xl={type:"childremoved",child:null},Ct=class r extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new M,t=new Pt,n=new yt,i=new M(1,1,1);t._onChange((function(){n.setFromEuler(t,!1)})),n._onChange((function(){t.setFromQuaternion(n,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Le},normalMatrix:{value:new Ve}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.multiply(ur),this}rotateOnWorldAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.premultiply(ur),this}rotateX(e){return this.rotateOnAxis(qu,e)}rotateY(e){return this.rotateOnAxis(Yu,e)}rotateZ(e){return this.rotateOnAxis(Zu,e)}translateOnAxis(e,t){return ju.copy(e).applyQuaternion(this.quaternion),this.position.add(ju.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qu,e)}translateY(e){return this.translateOnAxis(Yu,e)}translateZ(e){return this.translateOnAxis(Zu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ha.copy(e):ha.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(es,ha,this.up):Vn.lookAt(ha,es,this.up),this.quaternion.setFromRotationMatrix(Vn),i&&(Vn.extractRotation(i.matrixWorld),ur.setFromRotationMatrix(Vn),this.quaternion.premultiply(ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ju),dr.child=e,this.dispatchEvent(dr),dr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ym),xl.child=e,this.dispatchEvent(xl),xl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ju),dr.child=e,this.dispatchEvent(dr),dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,e,_m),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,xm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map((o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()}))),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Ct.DEFAULT_UP=new M(0,1,0),Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yn=new M,Gn=new M,yl=new M,Wn=new M,pr=new M,fr=new M,Ku=new M,Ml=new M,Sl=new M,El=new M,bl=new _t,wl=new _t,Tl=new _t,jn=class r{constructor(e=new M,t=new M,n=new M){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),yn.subVectors(e,t),i.cross(yn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){yn.subVectors(i,t),Gn.subVectors(n,t),yl.subVectors(e,t);let a=yn.dot(yn),o=yn.dot(Gn),l=yn.dot(yl),c=Gn.dot(Gn),h=Gn.dot(yl),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;let u=1/d,p=(c*l-o*h)*u,m=(a*h-o*l)*u;return s.set(1-p-m,m,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Wn)!==null&&Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Wn.x),l.addScaledVector(a,Wn.y),l.addScaledVector(o,Wn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return bl.setScalar(0),wl.setScalar(0),Tl.setScalar(0),bl.fromBufferAttribute(e,t),wl.fromBufferAttribute(e,n),Tl.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(bl,s.x),a.addScaledVector(wl,s.y),a.addScaledVector(Tl,s.z),a}static isFrontFacing(e,t,n,i){return yn.subVectors(n,t),Gn.subVectors(e,t),yn.cross(Gn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),.5*yn.cross(Gn).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;pr.subVectors(i,n),fr.subVectors(s,n),Ml.subVectors(e,n);let l=pr.dot(Ml),c=fr.dot(Ml);if(l<=0&&c<=0)return t.copy(n);Sl.subVectors(e,i);let h=pr.dot(Sl),d=fr.dot(Sl);if(h>=0&&d<=h)return t.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(pr,a);El.subVectors(e,s);let p=pr.dot(El),m=fr.dot(El);if(m>=0&&p<=m)return t.copy(s);let x=p*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(fr,o);let f=h*m-p*d;if(f<=0&&d-h>=0&&p-m>=0)return Ku.subVectors(s,i),o=(d-h)/(d-h+(p-m)),t.copy(i).addScaledVector(Ku,o);let g=1/(f+x+u);return a=x*g,o=u*g,t.copy(n).addScaledVector(pr,a).addScaledVector(fr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},op={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},ua={h:0,s:0,l:0};function Al(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var ve=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Qe.workingColorSpace){if(e=hm(e,1),t=Ut(t,0,1),n=Ut(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Al(a,s,e+1/3),this.g=Al(a,s,e),this.b=Al(a,s,e-1/3)}return Qe.toWorkingColorSpace(this,i),this}setStyle(e,t=dt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){let n=op[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return Qe.fromWorkingColorSpace(Vt.copy(this),e),65536*Math.round(Ut(255*Vt.r,0,255))+256*Math.round(Ut(255*Vt.g,0,255))+Math.round(Ut(255*Vt.b,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Vt.copy(this),t);let n=Vt.r,i=Vt.g,s=Vt.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=dt){Qe.fromWorkingColorSpace(Vt.copy(this),e);let t=Vt.r,n=Vt.g,i=Vt.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(e,t,n){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(ua);let n=hl(ui.h,ua.h,t),i=hl(ui.s,ua.s,t),s=hl(ui.l,ua.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vt=new ve;ve.NAMES=op;var Mm=0,Dn=class extends mi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=Yn(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xl,this.blendDst=jl,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xl&&(n.blendSrc=this.blendSrc),this.blendDst!==jl&&(n.blendDst=this.blendDst),this.blendEquation!==Ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==sr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==sr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},gi=class extends Dn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},a_=Sm();function Sm(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[256|l]=32768,i[l]=24,i[256|l]=24):c<-14?(n[l]=1024>>-c-14,n[256|l]=1024>>-c-14|32768,i[l]=-c-1,i[256|l]=-c-1):c<=15?(n[l]=c+15<<10,n[256|l]=c+15<<10|32768,i[l]=13,i[256|l]=13):c<128?(n[l]=31744,n[256|l]=64512,i[l]=24,i[256|l]=24):(n[l]=31744,n[256|l]=64512,i[l]=13,i[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}var Et=new M,da=new ce,It=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ec,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)da.fromBufferAttribute(this,t),da.applyMatrix3(e),this.setXY(t,da.x,da.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ec&&(e.usage=this.usage),e}};var Ja=class extends It{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ka=class extends It{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Re=class extends It{constructor(e,t,n){super(new Float32Array(e),t,n)}},Em=0,cn=new Le,Rl=new Ct,mr=new M,en=new En,ts=new En,Rt=new M,et=class r extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ap(e)?Ka:Ja)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ve().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,n){return cn.makeTranslation(e,t,n),this.applyMatrix4(cn),this}scale(e,t,n){return cn.makeScale(e,t,n),this.applyMatrix4(cn),this}lookAt(e){return Rl.lookAt(e),Rl.updateMatrix(),this.applyMatrix4(Rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Re(n,3))}else{for(let n=0,i=t.count;n<i;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new En);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];en.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new M,1/0);if(e){let n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];ts.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(en.min,ts.min),en.expandByPoint(Rt),Rt.addVectors(en.max,ts.max),en.expandByPoint(Rt)):(en.expandByPoint(ts.min),en.expandByPoint(ts.max))}en.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Rt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Rt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Rt.fromBufferAttribute(o,c),l&&(mr.fromBufferAttribute(e,c),Rt.add(mr)),i=Math.max(i,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new M,l[U]=new M;let c=new M,h=new M,d=new M,u=new ce,p=new ce,m=new ce,x=new M,f=new M;function g(U,O,k){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,O),d.fromBufferAttribute(n,k),u.fromBufferAttribute(s,U),p.fromBufferAttribute(s,O),m.fromBufferAttribute(s,k),h.sub(c),d.sub(c),p.sub(u),m.sub(u);let X=1/(p.x*m.y-m.x*p.y);isFinite(X)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(X),f.copy(d).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(X),o[U].add(x),o[O].add(x),o[k].add(x),l[U].add(f),l[O].add(f),l[k].add(f))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let U=0,O=v.length;U<O;++U){let k=v[U],X=k.start;for(let G=X,q=X+k.count;G<q;G+=3)g(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let _=new M,y=new M,R=new M,T=new M;function I(U){R.fromBufferAttribute(i,U),T.copy(R);let O=o[U];_.copy(O),_.sub(R.multiplyScalar(R.dot(O))).normalize(),y.crossVectors(T,O);let k=y.dot(l[U])<0?-1:1;a.setXYZW(U,_.x,_.y,_.z,k)}for(let U=0,O=v.length;U<O;++U){let k=v[U],X=k.start;for(let G=X,q=X+k.count;G<q;G+=3)I(e.getX(G+0)),I(e.getX(G+1)),I(e.getX(G+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new It(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let i=new M,s=new M,a=new M,o=new M,l=new M,c=new M,h=new M,d=new M;if(e)for(let u=0,p=e.count;u<p;u+=3){let m=e.getX(u+0),x=e.getX(u+1),f=e.getX(u+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,f),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),p=0,m=0;for(let x=0,f=l.length;x<f;x++){p=o.isInterleavedBufferAttribute?l[x]*o.data.stride+o.offset:l[x]*h;for(let g=0;g<h;g++)u[m++]=c[p++]}return new It(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=e(i[o],n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){let u=e(c[h],n);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$u=new Le,Ri=new zi,pa=new bn,Qu=new M,fa=new M,ma=new M,ga=new M,Cl=new M,va=new M,ed=new M,_a=new M,rt=class extends Ct{constructor(e=new et,t=new gi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){va.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],d=s[l];h!==0&&(Cl.fromBufferAttribute(d,e),a?va.addScaledVector(Cl,h):va.addScaledVector(Cl.sub(t),h))}t.add(va)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(s),Ri.copy(e.ray).recast(e.near),pa.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(pa,Qu)===null||Ri.origin.distanceToSquared(Qu)>(e.far-e.near)**2))return;$u.copy(s).invert(),Ri.copy(e.ray).applyMatrix4($u),n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,Ri)}}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=u.length;m<x;m++){let f=u[m],g=a[f.materialIndex];for(let v=Math.max(f.start,p.start),_=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));v<_;v+=3)i=xa(this,g,e,n,c,h,d,o.getX(v),o.getX(v+1),o.getX(v+2)),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=f.materialIndex,t.push(i))}else for(let m=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);m<x;m+=3)i=xa(this,a,e,n,c,h,d,o.getX(m),o.getX(m+1),o.getX(m+2)),i&&(i.faceIndex=Math.floor(m/3),t.push(i));else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=u.length;m<x;m++){let f=u[m],g=a[f.materialIndex];for(let v=Math.max(f.start,p.start),_=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));v<_;v+=3)i=xa(this,g,e,n,c,h,d,v,v+1,v+2),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=f.materialIndex,t.push(i))}else for(let m=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);m<x;m+=3)i=xa(this,a,e,n,c,h,d,m,m+1,m+2),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}};function xa(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,fa),r.getVertexPosition(l,ma),r.getVertexPosition(c,ga);let h=(function(d,u,p,m,x,f,g,v){let _;if(_=u.side===1?m.intersectTriangle(g,f,x,!0,v):m.intersectTriangle(x,f,g,u.side===0,v),_===null)return null;_a.copy(v),_a.applyMatrix4(d.matrixWorld);let y=p.ray.origin.distanceTo(_a);return y<p.near||y>p.far?null:{distance:y,point:_a.clone(),object:d}})(r,e,t,n,fa,ma,ga,ed);if(h){let d=new M;jn.getBarycoord(ed,fa,ma,ga,d),i&&(h.uv=jn.getInterpolatedAttribute(i,o,l,c,d,new ce)),s&&(h.uv1=jn.getInterpolatedAttribute(s,o,l,c,d,new ce)),a&&(h.normal=jn.getInterpolatedAttribute(a,o,l,c,d,new M),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new M,materialIndex:0};jn.getNormal(fa,ma,ga,u.normal),h.face=u,h.barycoord=d}return h}var Ur=class r extends et{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,p=0;function m(x,f,g,v,_,y,R,T,I,U,O){let k=y/I,X=R/U,G=y/2,q=R/2,H=T/2,J=I+1,Q=U+1,le=0,oe=0,we=new M;for(let Se=0;Se<Q;Se++){let re=Se*X-q;for(let he=0;he<J;he++){let me=he*k-G;we[x]=me*v,we[f]=re*_,we[g]=H,c.push(we.x,we.y,we.z),we[x]=0,we[f]=0,we[g]=T>0?1:-1,h.push(we.x,we.y,we.z),d.push(he/I),d.push(1-Se/U),le+=1}}for(let Se=0;Se<U;Se++)for(let re=0;re<I;re++){let he=u+re+J*Se,me=u+re+J*(Se+1),ye=u+(re+1)+J*(Se+1),fe=u+(re+1)+J*Se;l.push(he,me,fe),l.push(me,ye,fe),oe+=6}o.addGroup(p,oe,O),p+=oe,u+=le}m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(h,3)),this.setAttribute("uv",new Re(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Dr(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function qt(r){let e={};for(let t=0;t<r.length;t++){let n=Dr(r[t]);for(let i in n)e[i]=n[i]}return e}function lp(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}var bm={clone:Dr,merge:qt},tn=class extends Dn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Dr(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let i=0;i<t.length;i++)n.push(t[i].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},vs=class extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=Lr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},di=new M,td=new ce,nd=new ce,Yt=class extends vs{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*bc*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Wa*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*bc*Math.atan(Math.tan(.5*Wa*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(di.x,di.y).multiplyScalar(-e/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-e/di.z)}getViewSize(e,t){return this.getViewBounds(e,td,nd),t.subVectors(nd,td)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Wa*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},gr=-90,Rc=class extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Yt(gr,1,e,t);i.layers=this.layers,this.add(i);let s=new Yt(gr,1,e,t);s.layers=this.layers,this.add(s);let a=new Yt(gr,1,e,t);a.layers=this.layers,this.add(a);let o=new Yt(gr,1,e,t);o.layers=this.layers,this.add(o);let l=new Yt(gr,1,e,t);l.layers=this.layers,this.add(l);let c=new Yt(gr,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Lr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==ja)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},$a=class extends Zt{constructor(e,t,n,i,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:Rr,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Cc=class extends Jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new $a(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ur(5,5,5),s=new tn({name:"CubemapFromEquirect",uniforms:Dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let a=new rt(i,s),o=t.minFilter;return t.minFilter===br&&(t.minFilter=qn),new Rc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},Il=new M,wm=new M,Tm=new Ve,Xn=class{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Il.subVectors(n,t).cross(wm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Il),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Tm.getNormalMatrix(e),i=this.coplanarPoint(Il).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ci=new bn,ya=new M,Nr=class{constructor(e=new Xn,t=new Xn,n=new Xn,i=new Xn,s=new Xn,a=new Xn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],p=i[8],m=i[9],x=i[10],f=i[11],g=i[12],v=i[13],_=i[14],y=i[15];if(n[0].setComponents(l-s,u-c,f-p,y-g).normalize(),n[1].setComponents(l+s,u+c,f+p,y+g).normalize(),n[2].setComponents(l+a,u+h,f+m,y+v).normalize(),n[3].setComponents(l-a,u-h,f-m,y-v).normalize(),n[4].setComponents(l-o,u-d,f-x,y-_).normalize(),t===Lr)n[5].setComponents(l+o,u+d,f+x,y+_).normalize();else{if(t!==ja)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,d,x,_).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(ya.x=i.normal.x>0?e.max.x:e.min.x,ya.y=i.normal.y>0?e.max.y:e.min.y,ya.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ya)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function cp(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Am(r){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(r.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let i=e.get(t);if(i===void 0)e.set(t,(function(s,a){let o=s.array,l=s.usage,c=o.byteLength,h=r.createBuffer(),d;if(r.bindBuffer(a,h),r.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)d=r.FLOAT;else if(o instanceof Uint16Array)d=s.isFloat16BufferAttribute?r.HALF_FLOAT:r.UNSIGNED_SHORT;else if(o instanceof Int16Array)d=r.SHORT;else if(o instanceof Uint32Array)d=r.UNSIGNED_INT;else if(o instanceof Int32Array)d=r.INT;else if(o instanceof Int8Array)d=r.BYTE;else if(o instanceof Uint8Array)d=r.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);d=r.UNSIGNED_BYTE}return{buffer:h,type:d,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}})(t,n));else if(i.version<t.version){if(i.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let l=a.array,c=a.updateRanges;if(r.bindBuffer(o,s),c.length===0)r.bufferSubData(o,0,l);else{c.sort(((d,u)=>d.start-u.start));let h=0;for(let d=1;d<c.length;d++){let u=c[h],p=c[d];p.start<=u.start+u.count+1?u.count=Math.max(u.count,p.start+p.count-u.start):(++h,c[h]=p)}c.length=h+1;for(let d=0,u=c.length;d<u;d++){let p=c[d];r.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(i.buffer,t,n),i.version=t.version}}}}var un=class r extends et{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,u=t/l,p=[],m=[],x=[],f=[];for(let g=0;g<h;g++){let v=g*u-a;for(let _=0;_<c;_++){let y=_*d-s;m.push(y,-v,0),x.push(0,0,1),f.push(_/o),f.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){let _=v+c*g,y=v+c*(g+1),R=v+1+c*(g+1),T=v+1+c*g;p.push(_,y,T),p.push(y,R,T)}this.setIndex(p),this.setAttribute("position",new Re(m,3)),this.setAttribute("normal",new Re(x,3)),this.setAttribute("uv",new Re(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},We={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},pe={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},In={basic:{uniforms:qt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:qt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ve(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:qt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:qt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:qt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new ve(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:qt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:qt([pe.points,pe.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:qt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:qt([pe.common,pe.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:qt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:qt([pe.sprite,pe.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:qt([pe.common,pe.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:qt([pe.lights,pe.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};In.physical={uniforms:qt([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};var Ma={r:0,b:0,g:0},Ii=new Pt,Rm=new Le;function Cm(r,e,t,n,i,s,a){let o=new ve(0),l,c,h=s===!0?0:1,d=null,u=0,p=null;function m(f){let g=f.isScene===!0?f.background:null;return g&&g.isTexture&&(g=(f.backgroundBlurriness>0?t:e).get(g)),g}function x(f,g){f.getRGB(Ma,lp(r)),n.buffers.color.setClear(Ma.r,Ma.g,Ma.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(f,g=1){o.set(f),h=g,x(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(f){h=f,x(o,h)},render:function(f){let g=!1,v=m(f);v===null?x(o,h):v&&v.isColor&&(x(v,1),g=!0);let _=r.xr.getEnvironmentBlendMode();_==="additive"?n.buffers.color.setClear(0,0,0,1,a):_==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||g)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))},addToRenderList:function(f,g){let v=m(g);v&&(v.isCubeTexture||v.mapping===So)?(c===void 0&&(c=new rt(new Ur(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:Dr(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(_,y,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Ii.copy(g.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Rm.makeRotationFromEuler(Ii)),c.material.toneMapped=Qe.getTransfer(v.colorSpace)!==ht,d===v&&u===v.version&&p===r.toneMapping||(c.material.needsUpdate=!0,d=v,u=v.version,p=r.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new rt(new un(2,2),new tn({name:"BackgroundMaterial",uniforms:Dr(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(v.colorSpace)!==ht,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),d===v&&u===v.version&&p===r.toneMapping||(l.material.needsUpdate=!0,d=v,u=v.version,p=r.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}}}function Im(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=c(null),s=i,a=!1;function o(g){return r.bindVertexArray(g)}function l(g){return r.deleteVertexArray(g)}function c(g){let v=[],_=[],y=[];for(let R=0;R<t;R++)v[R]=0,_[R]=0,y[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:_,attributeDivisors:y,object:g,attributes:{},index:null}}function h(){let g=s.newAttributes;for(let v=0,_=g.length;v<_;v++)g[v]=0}function d(g){u(g,0)}function u(g,v){let _=s.newAttributes,y=s.enabledAttributes,R=s.attributeDivisors;_[g]=1,y[g]===0&&(r.enableVertexAttribArray(g),y[g]=1),R[g]!==v&&(r.vertexAttribDivisor(g,v),R[g]=v)}function p(){let g=s.newAttributes,v=s.enabledAttributes;for(let _=0,y=v.length;_<y;_++)v[_]!==g[_]&&(r.disableVertexAttribArray(_),v[_]=0)}function m(g,v,_,y,R,T,I){I===!0?r.vertexAttribIPointer(g,v,_,R,T):r.vertexAttribPointer(g,v,_,y,R,T)}function x(){f(),a=!0,s!==i&&(s=i,o(s.object))}function f(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:function(g,v,_,y,R){let T=!1,I=(function(U,O,k){let X=k.wireframe===!0,G=n[U.id];G===void 0&&(G={},n[U.id]=G);let q=G[O.id];q===void 0&&(q={},G[O.id]=q);let H=q[X];return H===void 0&&(H=c(r.createVertexArray()),q[X]=H),H})(y,_,v);s!==I&&(s=I,o(s.object)),T=(function(U,O,k,X){let G=s.attributes,q=O.attributes,H=0,J=k.getAttributes();for(let Q in J)if(J[Q].location>=0){let le=G[Q],oe=q[Q];if(oe===void 0&&(Q==="instanceMatrix"&&U.instanceMatrix&&(oe=U.instanceMatrix),Q==="instanceColor"&&U.instanceColor&&(oe=U.instanceColor)),le===void 0||le.attribute!==oe||oe&&le.data!==oe.data)return!0;H++}return s.attributesNum!==H||s.index!==X})(g,y,_,R),T&&(function(U,O,k,X){let G={},q=O.attributes,H=0,J=k.getAttributes();for(let Q in J)if(J[Q].location>=0){let le=q[Q];le===void 0&&(Q==="instanceMatrix"&&U.instanceMatrix&&(le=U.instanceMatrix),Q==="instanceColor"&&U.instanceColor&&(le=U.instanceColor));let oe={};oe.attribute=le,le&&le.data&&(oe.data=le.data),G[Q]=oe,H++}s.attributes=G,s.attributesNum=H,s.index=X})(g,y,_,R),R!==null&&e.update(R,r.ELEMENT_ARRAY_BUFFER),(T||a)&&(a=!1,(function(U,O,k,X){h();let G=X.attributes,q=k.getAttributes(),H=O.defaultAttributeValues;for(let J in q){let Q=q[J];if(Q.location>=0){let le=G[J];if(le===void 0&&(J==="instanceMatrix"&&U.instanceMatrix&&(le=U.instanceMatrix),J==="instanceColor"&&U.instanceColor&&(le=U.instanceColor)),le!==void 0){let oe=le.normalized,we=le.itemSize,Se=e.get(le);if(Se===void 0)continue;let re=Se.buffer,he=Se.type,me=Se.bytesPerElement,ye=he===r.INT||he===r.UNSIGNED_INT||le.gpuType===wh;if(le.isInterleavedBufferAttribute){let fe=le.data,w=fe.stride,b=le.offset;if(fe.isInstancedInterleavedBuffer){for(let D=0;D<Q.locationSize;D++)u(Q.location+D,fe.meshPerAttribute);U.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let D=0;D<Q.locationSize;D++)d(Q.location+D);r.bindBuffer(r.ARRAY_BUFFER,re);for(let D=0;D<Q.locationSize;D++)m(Q.location+D,we/Q.locationSize,he,oe,w*me,(b+we/Q.locationSize*D)*me,ye)}else{if(le.isInstancedBufferAttribute){for(let fe=0;fe<Q.locationSize;fe++)u(Q.location+fe,le.meshPerAttribute);U.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let fe=0;fe<Q.locationSize;fe++)d(Q.location+fe);r.bindBuffer(r.ARRAY_BUFFER,re);for(let fe=0;fe<Q.locationSize;fe++)m(Q.location+fe,we/Q.locationSize,he,oe,we*me,we/Q.locationSize*fe*me,ye)}}else if(H!==void 0){let oe=H[J];if(oe!==void 0)switch(oe.length){case 2:r.vertexAttrib2fv(Q.location,oe);break;case 3:r.vertexAttrib3fv(Q.location,oe);break;case 4:r.vertexAttrib4fv(Q.location,oe);break;default:r.vertexAttrib1fv(Q.location,oe)}}}}p()})(g,v,_,y),R!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(R).buffer))},reset:x,resetDefaultState:f,dispose:function(){x();for(let g in n){let v=n[g];for(let _ in v){let y=v[_];for(let R in y)l(y[R].object),delete y[R];delete v[_]}delete n[g]}},releaseStatesOfGeometry:function(g){if(n[g.id]===void 0)return;let v=n[g.id];for(let _ in v){let y=v[_];for(let R in y)l(y[R].object),delete y[R];delete v[_]}delete n[g.id]},releaseStatesOfProgram:function(g){for(let v in n){let _=n[v];if(_[g.id]===void 0)continue;let y=_[g.id];for(let R in y)l(y[R].object),delete y[R];delete _[g.id]}},initAttributes:h,enableAttribute:d,disableUnusedAttributes:p}}function Pm(r,e,t){let n;function i(s,a,o){o!==0&&(r.drawArraysInstanced(n,s,a,o),t.update(a,n,o))}this.setMode=function(s){n=s},this.render=function(s,a){r.drawArrays(n,s,a),t.update(a,n,1)},this.renderInstances=i,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,s,0,a,0,o);let l=0;for(let c=0;c<o;c++)l+=a[c];t.update(l,n,1)},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<s.length;h++)i(s[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(n,s,0,a,0,l,0,o);let h=0;for(let d=0;d<o;d++)h+=a[d]*l[d];t.update(h,n,1)}}}function Lm(r,e,t,n){let i;function s(u){if(u==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";u="mediump"}return u==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=t.logarithmicDepthBuffer===!0,c=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let u=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(u.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:s,textureFormatReadable:function(u){return u===Un||n.convert(u)===r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(u){let p=u===Rs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(u!==fi&&n.convert(u)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&u!==Ln&&!p)},precision:a,logarithmicDepthBuffer:l,reverseDepthBuffer:c,maxTextures:h,maxVertexTextures:d,maxTextureSize:r.getParameter(r.MAX_TEXTURE_SIZE),maxCubemapSize:r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:r.getParameter(r.MAX_VERTEX_ATTRIBS),maxVertexUniforms:r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:r.getParameter(r.MAX_VARYING_VECTORS),maxFragmentUniforms:r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:d>0,maxSamples:r.getParameter(r.MAX_SAMPLES)}}function Um(r){let e=this,t=null,n=0,i=!1,s=!1,a=new Xn,o=new Ve,l={value:null,needsUpdate:!1};function c(h,d,u,p){let m=h!==null?h.length:0,x=null;if(m!==0){if(x=l.value,p!==!0||x===null){let f=u+4*m,g=d.matrixWorldInverse;o.getNormalMatrix(g),(x===null||x.length<f)&&(x=new Float32Array(f));for(let v=0,_=u;v!==m;++v,_+=4)a.copy(h[v]).applyMatrix4(g,o),a.normal.toArray(x,_),x[_+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,x}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let u=h.length!==0||d||n!==0||i;return i=d,n=h.length,u},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=c(h,d,0)},this.setState=function(h,d,u){let p=h.clippingPlanes,m=h.clipIntersection,x=h.clipShadows,f=r.get(h);if(!i||p===null||p.length===0||s&&!x)s?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let g=s?0:n,v=4*g,_=f.clippingState||null;l.value=_,_=c(p,d,v,u);for(let y=0;y!==v;++y)_[y]=t[y];f.clippingState=_,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=g}}}function Dm(r){let e=new WeakMap;function t(i,s){return s===ql?i.mapping=Rr:s===Yl&&(i.mapping=Cr),i}function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping;if(s===ql||s===Yl){if(e.has(i))return t(e.get(i).texture,i.mapping);{let a=i.image;if(a&&a.height>0){let o=new Cc(a.height);return o.fromEquirectangularTexture(r,i),e.set(i,o),i.addEventListener("dispose",n),t(o.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}var Qa=class extends vs{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},id=[.125,.215,.35,.446,.526,.582],ns=20,Pl=new Qa,rd=new ve,Ll=null,Ul=0,Dl=0,Nl=!1,Li=(1+Math.sqrt(5))/2,vr=1/Li,sd=[new M(-Li,vr,0),new M(Li,vr,0),new M(-vr,0,Li),new M(vr,0,Li),new M(0,Li,-vr),new M(0,Li,vr),new M(-1,1,-1),new M(1,1,-1),new M(-1,1,1),new M(1,1,1)],eo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ll=this._renderer.getRenderTarget(),Ul=this._renderer.getActiveCubeFace(),Dl=this._renderer.getActiveMipmapLevel(),Nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ld(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=od(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ll,Ul,Dl),this._renderer.xr.enabled=Nl,e.scissorTest=!1,Sa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rr||e.mapping===Cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ll=this._renderer.getRenderTarget(),Ul=this._renderer.getActiveCubeFace(),Dl=this._renderer.getActiveMipmapLevel(),Nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:Rs,format:Un,colorSpace:Hr,depthBuffer:!1},i=ad(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ad(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,d=a-4+1+id.length;for(let u=0;u<d;u++){let p=Math.pow(2,h);l.push(p);let m=1/p;u>a-4?m=id[u-a+4-1]:u===0&&(m=0),c.push(m);let x=1/(p-2),f=-x,g=1+x,v=[f,f,g,f,g,g,f,f,g,g,f,g],_=6,y=6,R=3,T=2,I=1,U=new Float32Array(R*y*_),O=new Float32Array(T*y*_),k=new Float32Array(I*y*_);for(let G=0;G<_;G++){let q=G%3*2/3-1,H=G>2?0:-1,J=[q,H,0,q+2/3,H,0,q+2/3,H+1,0,q,H,0,q+2/3,H+1,0,q,H+1,0];U.set(J,R*y*G),O.set(v,T*y*G);let Q=[G,G,G,G,G,G];k.set(Q,I*y*G)}let X=new et;X.setAttribute("position",new It(U,R)),X.setAttribute("uv",new It(O,T)),X.setAttribute("faceIndex",new It(k,I)),o.push(X),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}})(s)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(ns),h=new M(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Lh(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})})(s,e,t)}return i}_compileMaterial(e){let t=new rt(this._lodPlanes[0],e);this._renderer.compile(t,Pl)}_sceneToCubeUV(e,t,n,i){let s=new Yt(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(rd),l.toneMapping=0,l.autoClear=!1;let d=new gi({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),u=new rt(new Ur,d),p=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,p=!0):(d.color.copy(rd),p=!0);for(let x=0;x<6;x++){let f=x%3;f===0?(s.up.set(0,a[x],0),s.lookAt(o[x],0,0)):f===1?(s.up.set(0,0,a[x]),s.lookAt(0,o[x],0)):(s.up.set(0,a[x],0),s.lookAt(0,0,o[x]));let g=this._cubeSize;Sa(i,f*g,x>2?g:0,g,g),l.setRenderTarget(i),p&&l.render(u,s),l.render(e,s)}u.geometry.dispose(),u.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Rr||e.mapping===Cr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ld()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=od());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new rt(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;Sa(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,Pl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=sd[(i-s-1)%sd.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new rt(this._lodPlanes[i],c),d=c.uniforms,u=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*u):2*Math.PI/39,m=s/p,x=isFinite(s)?1+Math.floor(3*m):ns;x>ns&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to 20`);let f=[],g=0;for(let y=0;y<ns;++y){let R=y/m,T=Math.exp(-R*R/2);f.push(T),y===0?g+=T:y<x&&(g+=2*T)}for(let y=0;y<f.length;y++)f[y]=f[y]/g;d.envMap.value=e.texture,d.samples.value=x,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=p,d.mipInt.value=v-n;let _=this._sizeLods[i];Sa(t,3*_*(i>v-4?i-v+4:0),4*(this._cubeSize-_),3*_,2*_),l.setRenderTarget(t),l.render(h,Pl)}};function ad(r,e,t){let n=new Jn(r,e,t);return n.texture.mapping=So,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sa(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function od(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lh(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ld(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Lh(){return`

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
	`}function Nm(r){let e=new WeakMap,t=null;function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping,a=s===ql||s===Yl,o=s===Rr||s===Cr;if(a||o){let l=e.get(i),c=l!==void 0?l.texture.pmremVersion:0;if(i.isRenderTargetTexture&&i.pmremVersion!==c)return t===null&&(t=new eo(r)),l=a?t.fromEquirectangular(i,l):t.fromCubemap(i,l),l.texture.pmremVersion=i.pmremVersion,e.set(i,l),l.texture;if(l!==void 0)return l.texture;{let h=i.image;return a&&h&&h.height>0||o&&h&&(function(d){let u=0,p=6;for(let m=0;m<p;m++)d[m]!==void 0&&u++;return u===p})(h)?(t===null&&(t=new eo(r)),l=a?t.fromEquirectangular(i):t.fromCubemap(i),l.texture.pmremVersion=i.pmremVersion,e.set(i,l),i.addEventListener("dispose",n),l.texture):null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Om(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&hs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Bm(r,e,t,n){let i={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let d in c.attributes)e.remove(c.attributes[d]);for(let d in c.morphAttributes){let u=c.morphAttributes[d];for(let p=0,m=u.length;p<m;p++)e.remove(u[p])}c.removeEventListener("dispose",a),delete i[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,d=l.attributes.position,u=0;if(h!==null){let x=h.array;u=h.version;for(let f=0,g=x.length;f<g;f+=3){let v=x[f+0],_=x[f+1],y=x[f+2];c.push(v,_,_,y,y,v)}}else{if(d===void 0)return;{let x=d.array;u=d.version;for(let f=0,g=x.length/3-1;f<g;f+=3){let v=f+0,_=f+1,y=f+2;c.push(v,_,_,y,y,v)}}}let p=new(ap(c)?Ka:Ja)(c,1);p.version=u;let m=s.get(l);m&&e.remove(m),s.set(l,p)}return{get:function(l,c){return i[c.id]===!0||(c.addEventListener("dispose",a),i[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let d in c)e.update(c[d],r.ARRAY_BUFFER);let h=l.morphAttributes;for(let d in h){let u=h[d];for(let p=0,m=u.length;p<m;p++)e.update(u[p],r.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function Fm(r,e,t){let n,i,s;function a(o,l,c){c!==0&&(r.drawElementsInstanced(n,l,i,o*s,c),t.update(l,n,c))}this.setMode=function(o){n=o},this.setIndex=function(o){i=o.type,s=o.bytesPerElement},this.render=function(o,l){r.drawElements(n,l,i,o*s),t.update(l,n,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,l,0,i,o,0,c);let h=0;for(let d=0;d<c;d++)h+=l[d];t.update(h,n,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<o.length;u++)a(o[u]/s,l[u],h[u]);else{d.multiDrawElementsInstancedWEBGL(n,l,0,i,o,0,h,0,c);let u=0;for(let p=0;p<c;p++)u+=l[p]*h[p];t.update(u,n,1)}}}function zm(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case r.TRIANGLES:e.triangles+=i*(t/3);break;case r.LINES:e.lines+=i*(t/2);break;case r.LINE_STRIP:e.lines+=i*(t-1);break;case r.LINE_LOOP:e.lines+=i*t;break;case r.POINTS:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function Hm(r,e,t){let n=new WeakMap,i=new _t;return{update:function(s,a,o){let l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,d=n.get(a);if(d===void 0||d.count!==h){let U=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",U)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],g=a.morphAttributes.color||[],v=0;u===!0&&(v=1),p===!0&&(v=2),m===!0&&(v=3);let _=a.attributes.position.count*v,y=1;_>e.maxTextureSize&&(y=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let R=new Float32Array(_*y*4*h),T=new Za(R,_,y,h);T.type=Ln,T.needsUpdate=!0;let I=4*v;for(let O=0;O<h;O++){let k=x[O],X=f[O],G=g[O],q=_*y*4*O;for(let H=0;H<k.count;H++){let J=H*I;u===!0&&(i.fromBufferAttribute(k,H),R[q+J+0]=i.x,R[q+J+1]=i.y,R[q+J+2]=i.z,R[q+J+3]=0),p===!0&&(i.fromBufferAttribute(X,H),R[q+J+4]=i.x,R[q+J+5]=i.y,R[q+J+6]=i.z,R[q+J+7]=0),m===!0&&(i.fromBufferAttribute(G,H),R[q+J+8]=i.x,R[q+J+9]=i.y,R[q+J+10]=i.z,R[q+J+11]=G.itemSize===4?i.w:1)}}d={count:h,texture:T,size:new ce(_,y)},n.set(a,d),a.addEventListener("dispose",U)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let u=0;for(let m=0;m<l.length;m++)u+=l[m];let p=a.morphTargetsRelative?1:1-u;o.getUniforms().setValue(r,"morphTargetBaseInfluence",p),o.getUniforms().setValue(r,"morphTargetInfluences",l)}o.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),o.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}}}function km(r,e,t,n){let i=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,l=a.geometry,c=e.get(a,l);if(i.get(c)!==o&&(e.update(c),i.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),i.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;i.get(h)!==o&&(h.update(),i.set(h,o))}return c},dispose:function(){i=new WeakMap}}}var to=class extends Zt{constructor(e,t,n,i,s,a,o,l,c,h=1026){if(h!==ms&&h!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ms&&(n=Fi),n===void 0&&h===Pr&&(n=Ir),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Mn,this.minFilter=l!==void 0?l:Mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},hp=new Zt,cd=new to(1,1),up=new Za,dp=new Ac,pp=new $a,hd=[],ud=[],dd=new Float32Array(16),pd=new Float32Array(9),fd=new Float32Array(4);function kr(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=hd[i];if(s===void 0&&(s=new Float32Array(i),hd[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Tt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function At(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function bo(r,e){let t=ud[e];t===void 0&&(t=new Int32Array(e),ud[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Vm(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Gm(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;r.uniform2fv(this.addr,e),At(t,e)}}function Wm(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;r.uniform3fv(this.addr,e),At(t,e)}}function Xm(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;r.uniform4fv(this.addr,e),At(t,e)}}function jm(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;fd.set(n),r.uniformMatrix2fv(this.addr,!1,fd),At(t,n)}}function qm(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;pd.set(n),r.uniformMatrix3fv(this.addr,!1,pd),At(t,n)}}function Ym(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;dd.set(n),r.uniformMatrix4fv(this.addr,!1,dd),At(t,n)}}function Zm(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Jm(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;r.uniform2iv(this.addr,e),At(t,e)}}function Km(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;r.uniform3iv(this.addr,e),At(t,e)}}function $m(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;r.uniform4iv(this.addr,e),At(t,e)}}function Qm(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function eg(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;r.uniform2uiv(this.addr,e),At(t,e)}}function tg(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;r.uniform3uiv(this.addr,e),At(t,e)}}function ng(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;r.uniform4uiv(this.addr,e),At(t,e)}}function ig(r,e,t){let n=this.cache,i=t.allocateTextureUnit(),s;n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),this.type===r.SAMPLER_2D_SHADOW?(cd.compareFunction=515,s=cd):s=hp,t.setTexture2D(e||s,i)}function rg(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||dp,i)}function sg(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||pp,i)}function ag(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||up,i)}function og(r,e){r.uniform1fv(this.addr,e)}function lg(r,e){let t=kr(e,this.size,2);r.uniform2fv(this.addr,t)}function cg(r,e){let t=kr(e,this.size,3);r.uniform3fv(this.addr,t)}function hg(r,e){let t=kr(e,this.size,4);r.uniform4fv(this.addr,t)}function ug(r,e){let t=kr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function dg(r,e){let t=kr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function pg(r,e){let t=kr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function fg(r,e){r.uniform1iv(this.addr,e)}function mg(r,e){r.uniform2iv(this.addr,e)}function gg(r,e){r.uniform3iv(this.addr,e)}function vg(r,e){r.uniform4iv(this.addr,e)}function _g(r,e){r.uniform1uiv(this.addr,e)}function xg(r,e){r.uniform2uiv(this.addr,e)}function yg(r,e){r.uniform3uiv(this.addr,e)}function Mg(r,e){r.uniform4uiv(this.addr,e)}function Sg(r,e,t){let n=this.cache,i=e.length,s=bo(t,i);Tt(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||hp,s[a])}function Eg(r,e,t){let n=this.cache,i=e.length,s=bo(t,i);Tt(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||dp,s[a])}function bg(r,e,t){let n=this.cache,i=e.length,s=bo(t,i);Tt(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||pp,s[a])}function wg(r,e,t){let n=this.cache,i=e.length,s=bo(t,i);Tt(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||up,s[a])}var Ic=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(i){switch(i){case 5126:return Vm;case 35664:return Gm;case 35665:return Wm;case 35666:return Xm;case 35674:return jm;case 35675:return qm;case 35676:return Ym;case 5124:case 35670:return Zm;case 35667:case 35671:return Jm;case 35668:case 35672:return Km;case 35669:case 35673:return $m;case 5125:return Qm;case 36294:return eg;case 36295:return tg;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return ig;case 35679:case 36299:case 36307:return rg;case 35680:case 36300:case 36308:case 36293:return sg;case 36289:case 36303:case 36311:case 36292:return ag}})(t.type)}},Pc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(i){switch(i){case 5126:return og;case 35664:return lg;case 35665:return cg;case 35666:return hg;case 35674:return ug;case 35675:return dg;case 35676:return pg;case 5124:case 35670:return fg;case 35667:case 35671:return mg;case 35668:case 35672:return gg;case 35669:case 35673:return vg;case 5125:return _g;case 36294:return xg;case 36295:return yg;case 36296:return Mg;case 35678:case 36198:case 36298:case 36306:case 35682:return Sg;case 35679:case 36299:case 36307:return Eg;case 35680:case 36300:case 36308:case 36293:return bg;case 36289:case 36303:case 36311:case 36292:return wg}})(t.type)}},Lc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},Ol=/(\w+)(\])?(\[|\.)?/g;function md(r,e){r.seq.push(e),r.map[e.id]=e}function Tg(r,e,t){let n=r.name,i=n.length;for(Ol.lastIndex=0;;){let s=Ol.exec(n),a=Ol.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===i){md(t,c===void 0?new Ic(o,r,e):new Pc(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new Lc(o),md(t,h)),t=h}}}var Ar=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i);Tg(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function gd(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var Ag=0,vd=new Ve;function _d(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+(function(o,l){let c=o.split(`
`),h=[],d=Math.max(l-6,0),u=Math.min(l+6,c.length);for(let p=d;p<u;p++){let m=p+1;h.push(`${m===l?">":" "} ${m}: ${c[p]}`)}return h.join(`
`)})(r.getShaderSource(e),a)}return i}function Rg(r,e){let t=(function(n){Qe._getMatrix(vd,Qe.workingColorSpace,n);let i=`mat3( ${vd.elements.map((s=>s.toFixed(4)))} )`;switch(Qe.getTransfer(n)){case Eo:return[i,"LinearTransferOETF"];case ht:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[i,"LinearTransferOETF"]}})(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Cg(r,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ea=new M;function Ig(){return Qe.getLuminanceCoefficients(Ea),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Ea.x.toFixed(4)}, ${Ea.y.toFixed(4)}, ${Ea.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function is(r){return r!==""}function xd(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Pg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uc(r){return r.replace(Pg,Ug)}var Lg=new Map;function Ug(r,e){let t=We[e];if(t===void 0){let n=Lg.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return Uc(t)}var Dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Md(r){return r.replace(Dg,Ng)}function Ng(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Sd(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Og(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(X){let G="SHADOWMAP_TYPE_BASIC";return X.shadowMapType===1?G="SHADOWMAP_TYPE_PCF":X.shadowMapType===2?G="SHADOWMAP_TYPE_PCF_SOFT":X.shadowMapType===3&&(G="SHADOWMAP_TYPE_VSM"),G})(t),c=(function(X){let G="ENVMAP_TYPE_CUBE";if(X.envMap)switch(X.envMapMode){case Rr:case Cr:G="ENVMAP_TYPE_CUBE";break;case So:G="ENVMAP_TYPE_CUBE_UV"}return G})(t),h=(function(X){let G="ENVMAP_MODE_REFLECTION";return X.envMap&&X.envMapMode===Cr&&(G="ENVMAP_MODE_REFRACTION"),G})(t),d=(function(X){let G="ENVMAP_BLENDING_NONE";if(X.envMap)switch(X.combine){case 0:G="ENVMAP_BLENDING_MULTIPLY";break;case 1:G="ENVMAP_BLENDING_MIX";break;case 2:G="ENVMAP_BLENDING_ADD"}return G})(t),u=(function(X){let G=X.envMapCubeUVHeight;if(G===null)return null;let q=Math.log2(G)-2,H=1/G;return{texelWidth:1/(3*Math.max(Math.pow(2,q),112)),texelHeight:H,maxMip:q}})(t),p=(function(X){return[X.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",X.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(is).join(`
`)})(t),m=(function(X){let G=[];for(let q in X){let H=X[q];H!==!1&&G.push("#define "+q+" "+H)}return G.join(`
`)})(s),x=i.createProgram(),f,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(is).join(`
`),f.length>0&&(f+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(is).join(`
`),g.length>0&&(g+=`
`)):(f=[Sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(is).join(`
`),g=[Sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?We.tonemapping_pars_fragment:"",t.toneMapping!==0?Cg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Rg("linearToOutputTexel",t.outputColorSpace),Ig(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(is).join(`
`)),a=Uc(a),a=xd(a,t),a=yd(a,t),o=Uc(o),o=xd(o,t),o=yd(o,t),a=Md(a),o=Md(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,g=["#define varying in",t.glslVersion===Ou?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ou?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let _=v+f+a,y=v+g+o,R=gd(i,i.VERTEX_SHADER,_),T=gd(i,i.FRAGMENT_SHADER,y);function I(X){if(r.debug.checkShaderErrors){let G=i.getProgramInfoLog(x).trim(),q=i.getShaderInfoLog(R).trim(),H=i.getShaderInfoLog(T).trim(),J=!0,Q=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,R,T);else{let le=_d(i,R,"vertex"),oe=_d(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+G+`
`+le+`
`+oe)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):q!==""&&H!==""||(Q=!1);Q&&(X.diagnostics={runnable:J,programLog:G,vertexShader:{log:q,prefix:f},fragmentShader:{log:H,prefix:g}})}i.deleteShader(R),i.deleteShader(T),U=new Ar(i,x),O=(function(G,q){let H={},J=G.getProgramParameter(q,G.ACTIVE_ATTRIBUTES);for(let Q=0;Q<J;Q++){let le=G.getActiveAttrib(q,Q),oe=le.name,we=1;le.type===G.FLOAT_MAT2&&(we=2),le.type===G.FLOAT_MAT3&&(we=3),le.type===G.FLOAT_MAT4&&(we=4),H[oe]={type:le.type,location:G.getAttribLocation(q,oe),locationSize:we}}return H})(i,x)}let U,O;i.attachShader(x,R),i.attachShader(x,T),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x),this.getUniforms=function(){return U===void 0&&I(this),U},this.getAttributes=function(){return O===void 0&&I(this),O};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=i.getProgramParameter(x,37297)),k},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ag++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=T,this}var Bg=0,Dc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Nc(e),t.set(e,n)),n}},Nc=class{constructor(e){this.id=Bg++,this.code=e,this.usedTimes=0}};function Fg(r,e,t,n,i,s,a){let o=new gs,l=new Dc,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(f){return c.add(f),f===0?"uv":`uv${f}`}return{getParameters:function(f,g,v,_,y){let R=_.fog,T=y.geometry,I=f.isMeshStandardMaterial?_.environment:null,U=(f.isMeshStandardMaterial?t:e).get(f.envMap||I),O=U&&U.mapping===So?U.image.height:null,k=m[f.type];f.precision!==null&&(p=i.getMaxPrecision(f.precision),p!==f.precision&&console.warn("THREE.WebGLProgram.getParameters:",f.precision,"not supported, using",p,"instead."));let X=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,G=X!==void 0?X.length:0,q,H,J,Q,le=0;if(T.morphAttributes.position!==void 0&&(le=1),T.morphAttributes.normal!==void 0&&(le=2),T.morphAttributes.color!==void 0&&(le=3),k){let at=In[k];q=at.vertexShader,H=at.fragmentShader}else q=f.vertexShader,H=f.fragmentShader,l.update(f),J=l.getVertexShaderID(f),Q=l.getFragmentShaderID(f);let oe=r.getRenderTarget(),we=r.state.buffers.depth.getReversed(),Se=y.isInstancedMesh===!0,re=y.isBatchedMesh===!0,he=!!f.map,me=!!f.matcap,ye=!!U,fe=!!f.aoMap,w=!!f.lightMap,b=!!f.bumpMap,D=!!f.normalMap,L=!!f.displacementMap,A=!!f.emissiveMap,P=!!f.metalnessMap,S=!!f.roughnessMap,C=f.anisotropy>0,F=f.clearcoat>0,te=f.dispersion>0,N=f.iridescence>0,K=f.sheen>0,$=f.transmission>0,ne=C&&!!f.anisotropyMap,V=F&&!!f.clearcoatMap,z=F&&!!f.clearcoatNormalMap,ae=F&&!!f.clearcoatRoughnessMap,Ae=N&&!!f.iridescenceMap,Ie=N&&!!f.iridescenceThicknessMap,De=K&&!!f.sheenColorMap,Me=K&&!!f.sheenRoughnessMap,Z=!!f.specularMap,ue=!!f.specularColorMap,ge=!!f.specularIntensityMap,se=$&&!!f.transmissionMap,ee=$&&!!f.thicknessMap,xe=!!f.gradientMap,Ke=!!f.alphaMap,nt=f.alphaTest>0,qe=!!f.alphaHash,Be=!!f.extensions,st=0;f.toneMapped&&(oe!==null&&oe.isXRRenderTarget!==!0||(st=r.toneMapping));let B={shaderID:k,shaderType:f.type,shaderName:f.name,vertexShader:q,fragmentShader:H,defines:f.defines,customVertexShaderID:J,customFragmentShaderID:Q,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:p,batching:re,batchingColor:re&&y._colorsTexture!==null,instancing:Se,instancingColor:Se&&y.instanceColor!==null,instancingMorph:Se&&y.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:oe===null?r.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Hr,alphaToCoverage:!!f.alphaToCoverage,map:he,matcap:me,envMap:ye,envMapMode:ye&&U.mapping,envMapCubeUVHeight:O,aoMap:fe,lightMap:w,bumpMap:b,normalMap:D,displacementMap:u&&L,emissiveMap:A,normalMapObjectSpace:D&&f.normalMapType===1,normalMapTangentSpace:D&&f.normalMapType===0,metalnessMap:P,roughnessMap:S,anisotropy:C,anisotropyMap:ne,clearcoat:F,clearcoatMap:V,clearcoatNormalMap:z,clearcoatRoughnessMap:ae,dispersion:te,iridescence:N,iridescenceMap:Ae,iridescenceThicknessMap:Ie,sheen:K,sheenColorMap:De,sheenRoughnessMap:Me,specularMap:Z,specularColorMap:ue,specularIntensityMap:ge,transmission:$,transmissionMap:se,thicknessMap:ee,gradientMap:xe,opaque:f.transparent===!1&&f.blending===1&&f.alphaToCoverage===!1,alphaMap:Ke,alphaTest:nt,alphaHash:qe,combine:f.combine,mapUv:he&&x(f.map.channel),aoMapUv:fe&&x(f.aoMap.channel),lightMapUv:w&&x(f.lightMap.channel),bumpMapUv:b&&x(f.bumpMap.channel),normalMapUv:D&&x(f.normalMap.channel),displacementMapUv:L&&x(f.displacementMap.channel),emissiveMapUv:A&&x(f.emissiveMap.channel),metalnessMapUv:P&&x(f.metalnessMap.channel),roughnessMapUv:S&&x(f.roughnessMap.channel),anisotropyMapUv:ne&&x(f.anisotropyMap.channel),clearcoatMapUv:V&&x(f.clearcoatMap.channel),clearcoatNormalMapUv:z&&x(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&x(f.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&x(f.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&x(f.iridescenceThicknessMap.channel),sheenColorMapUv:De&&x(f.sheenColorMap.channel),sheenRoughnessMapUv:Me&&x(f.sheenRoughnessMap.channel),specularMapUv:Z&&x(f.specularMap.channel),specularColorMapUv:ue&&x(f.specularColorMap.channel),specularIntensityMapUv:ge&&x(f.specularIntensityMap.channel),transmissionMapUv:se&&x(f.transmissionMap.channel),thicknessMapUv:ee&&x(f.thicknessMap.channel),alphaMapUv:Ke&&x(f.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(D||C),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,pointsUvs:y.isPoints===!0&&!!T.attributes.uv&&(he||Ke),fog:!!R,useFog:f.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:f.flatShading===!0,sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:we,skinning:y.isSkinnedMesh===!0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:le,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:f.dithering,shadowMapEnabled:r.shadowMap.enabled&&v.length>0,shadowMapType:r.shadowMap.type,toneMapping:st,decodeVideoTexture:he&&f.map.isVideoTexture===!0&&Qe.getTransfer(f.map.colorSpace)===ht,decodeVideoTextureEmissive:A&&f.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(f.emissiveMap.colorSpace)===ht,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===2,flipSided:f.side===1,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:Be&&f.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&f.extensions.multiDraw===!0||re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return B.vertexUv1s=c.has(1),B.vertexUv2s=c.has(2),B.vertexUv3s=c.has(3),c.clear(),B},getProgramCacheKey:function(f){let g=[];if(f.shaderID?g.push(f.shaderID):(g.push(f.customVertexShaderID),g.push(f.customFragmentShaderID)),f.defines!==void 0)for(let v in f.defines)g.push(v),g.push(f.defines[v]);return f.isRawShaderMaterial===!1&&((function(v,_){v.push(_.precision),v.push(_.outputColorSpace),v.push(_.envMapMode),v.push(_.envMapCubeUVHeight),v.push(_.mapUv),v.push(_.alphaMapUv),v.push(_.lightMapUv),v.push(_.aoMapUv),v.push(_.bumpMapUv),v.push(_.normalMapUv),v.push(_.displacementMapUv),v.push(_.emissiveMapUv),v.push(_.metalnessMapUv),v.push(_.roughnessMapUv),v.push(_.anisotropyMapUv),v.push(_.clearcoatMapUv),v.push(_.clearcoatNormalMapUv),v.push(_.clearcoatRoughnessMapUv),v.push(_.iridescenceMapUv),v.push(_.iridescenceThicknessMapUv),v.push(_.sheenColorMapUv),v.push(_.sheenRoughnessMapUv),v.push(_.specularMapUv),v.push(_.specularColorMapUv),v.push(_.specularIntensityMapUv),v.push(_.transmissionMapUv),v.push(_.thicknessMapUv),v.push(_.combine),v.push(_.fogExp2),v.push(_.sizeAttenuation),v.push(_.morphTargetsCount),v.push(_.morphAttributeCount),v.push(_.numDirLights),v.push(_.numPointLights),v.push(_.numSpotLights),v.push(_.numSpotLightMaps),v.push(_.numHemiLights),v.push(_.numRectAreaLights),v.push(_.numDirLightShadows),v.push(_.numPointLightShadows),v.push(_.numSpotLightShadows),v.push(_.numSpotLightShadowsWithMaps),v.push(_.numLightProbes),v.push(_.shadowMapType),v.push(_.toneMapping),v.push(_.numClippingPlanes),v.push(_.numClipIntersection),v.push(_.depthPacking)})(g,f),(function(v,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),v.push(o.mask)})(g,f),g.push(r.outputColorSpace)),g.push(f.customProgramCacheKey),g.join()},getUniforms:function(f){let g=m[f.type],v;if(g){let _=In[g];v=bm.clone(_.uniforms)}else v=f.uniforms;return v},acquireProgram:function(f,g){let v;for(let _=0,y=h.length;_<y;_++){let R=h[_];if(R.cacheKey===g){v=R,++v.usedTimes;break}}return v===void 0&&(v=new Og(r,g,f,s),h.push(v)),v},releaseProgram:function(f){if(--f.usedTimes==0){let g=h.indexOf(f);h[g]=h[h.length-1],h.pop(),f.destroy()}},releaseShaderCache:function(f){l.remove(f)},programs:h,dispose:function(){l.dispose()}}}function zg(){let r=new WeakMap;return{has:function(e){return r.has(e)},get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,n){r.get(e)[t]=n},dispose:function(){r=new WeakMap}}}function Hg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ed(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function bd(){let r=[],e=0,t=[],n=[],i=[];function s(a,o,l,c,h,d){let u=r[e];return u===void 0?(u={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:d},r[e]=u):(u.id=a.id,u.object=a,u.geometry=o,u.material=l,u.groupOrder=c,u.renderOrder=a.renderOrder,u.z=h,u.group=d),e++,u}return{opaque:t,transmissive:n,transparent:i,init:function(){e=0,t.length=0,n.length=0,i.length=0},push:function(a,o,l,c,h,d){let u=s(a,o,l,c,h,d);l.transmission>0?n.push(u):l.transparent===!0?i.push(u):t.push(u)},unshift:function(a,o,l,c,h,d){let u=s(a,o,l,c,h,d);l.transmission>0?n.unshift(u):l.transparent===!0?i.unshift(u):t.unshift(u)},finish:function(){for(let a=e,o=r.length;a<o;a++){let l=r[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||Hg),n.length>1&&n.sort(o||Ed),i.length>1&&i.sort(o||Ed)}}}function kg(){let r=new WeakMap;return{get:function(e,t){let n=r.get(e),i;return n===void 0?(i=new bd,r.set(e,[i])):t>=n.length?(i=new bd,n.push(i)):i=n[t],i},dispose:function(){r=new WeakMap}}}function Vg(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new ve};break;case"SpotLight":t={position:new M,direction:new M,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":t={color:new ve,position:new M,halfWidth:new M,halfHeight:new M}}return r[e.id]=t,t}}}var Gg=0;function Wg(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Xg(r){let e=new Vg,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new M);let i=new M,s=new Le,a=new Le;return{setup:function(o){let l=0,c=0,h=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let d=0,u=0,p=0,m=0,x=0,f=0,g=0,v=0,_=0,y=0,R=0;o.sort(Wg);for(let I=0,U=o.length;I<U;I++){let O=o[I],k=O.color,X=O.intensity,G=O.distance,q=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)l+=k.r*X,c+=k.g*X,h+=k.b*X;else if(O.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(O.sh.coefficients[H],X);R++}else if(O.isDirectionalLight){let H=e.get(O);if(H.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let J=O.shadow,Q=t.get(O);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,n.directionalShadow[d]=Q,n.directionalShadowMap[d]=q,n.directionalShadowMatrix[d]=O.shadow.matrix,f++}n.directional[d]=H,d++}else if(O.isSpotLight){let H=e.get(O);H.position.setFromMatrixPosition(O.matrixWorld),H.color.copy(k).multiplyScalar(X),H.distance=G,H.coneCos=Math.cos(O.angle),H.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),H.decay=O.decay,n.spot[p]=H;let J=O.shadow;if(O.map&&(n.spotLightMap[_]=O.map,_++,J.updateMatrices(O),O.castShadow&&y++),n.spotLightMatrix[p]=J.matrix,O.castShadow){let Q=t.get(O);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,n.spotShadow[p]=Q,n.spotShadowMap[p]=q,v++}p++}else if(O.isRectAreaLight){let H=e.get(O);H.color.copy(k).multiplyScalar(X),H.halfWidth.set(.5*O.width,0,0),H.halfHeight.set(0,.5*O.height,0),n.rectArea[m]=H,m++}else if(O.isPointLight){let H=e.get(O);if(H.color.copy(O.color).multiplyScalar(O.intensity),H.distance=O.distance,H.decay=O.decay,O.castShadow){let J=O.shadow,Q=t.get(O);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,Q.shadowCameraNear=J.camera.near,Q.shadowCameraFar=J.camera.far,n.pointShadow[u]=Q,n.pointShadowMap[u]=q,n.pointShadowMatrix[u]=O.shadow.matrix,g++}n.point[u]=H,u++}else if(O.isHemisphereLight){let H=e.get(O);H.skyColor.copy(O.color).multiplyScalar(X),H.groundColor.copy(O.groundColor).multiplyScalar(X),n.hemi[x]=H,x++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=c,n.ambient[2]=h;let T=n.hash;T.directionalLength===d&&T.pointLength===u&&T.spotLength===p&&T.rectAreaLength===m&&T.hemiLength===x&&T.numDirectionalShadows===f&&T.numPointShadows===g&&T.numSpotShadows===v&&T.numSpotMaps===_&&T.numLightProbes===R||(n.directional.length=d,n.spot.length=p,n.rectArea.length=m,n.point.length=u,n.hemi.length=x,n.directionalShadow.length=f,n.directionalShadowMap.length=f,n.pointShadow.length=g,n.pointShadowMap.length=g,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=f,n.pointShadowMatrix.length=g,n.spotLightMatrix.length=v+_-y,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=R,T.directionalLength=d,T.pointLength=u,T.spotLength=p,T.rectAreaLength=m,T.hemiLength=x,T.numDirectionalShadows=f,T.numPointShadows=g,T.numSpotShadows=v,T.numSpotMaps=_,T.numLightProbes=R,n.version=Gg++)},setupView:function(o,l){let c=0,h=0,d=0,u=0,p=0,m=l.matrixWorldInverse;for(let x=0,f=o.length;x<f;x++){let g=o[x];if(g.isDirectionalLight){let v=n.directional[c];v.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),c++}else if(g.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(g.isRectAreaLight){let v=n.rectArea[u];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(g.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(.5*g.width,0,0),v.halfHeight.set(0,.5*g.height,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),u++}else if(g.isPointLight){let v=n.point[h];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(m),h++}else if(g.isHemisphereLight){let v=n.hemi[p];v.direction.setFromMatrixPosition(g.matrixWorld),v.direction.transformDirection(m),p++}}},state:n}}function wd(r){let e=new Xg(r),t=[],n=[],i={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){i.camera=s,t.length=0,n.length=0},state:i,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){n.push(s)}}}function jg(r){let e=new WeakMap;return{get:function(t,n=0){let i=e.get(t),s;return i===void 0?(s=new wd(r),e.set(t,[s])):n>=i.length?(s=new wd(r),i.push(s)):s=i[n],s},dispose:function(){e=new WeakMap}}}var Oc=class extends Dn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Bc=class extends Dn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function qg(r,e,t){let n=new Nr,i=new ce,s=new ce,a=new _t,o=new Oc({depthPacking:3201}),l=new Bc,c={},h=t.maxTextureSize,d={[Pf]:1,[bh]:0,[Nn]:2},u=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let m=new et;m.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new rt(m,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let g=this.type;function v(T,I){let U=e.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Jn(i.x,i.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(I,null,U,u,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(I,null,U,p,x,null)}function _(T,I,U,O){let k=null,X=U.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(X!==void 0)k=X;else if(k=U.isPointLight===!0?l:o,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let G=k.uuid,q=I.uuid,H=c[G];H===void 0&&(H={},c[G]=H);let J=H[q];J===void 0&&(J=k.clone(),H[q]=J,I.addEventListener("dispose",R)),k=J}return k.visible=I.visible,k.wireframe=I.wireframe,k.side=O===3?I.shadowSide!==null?I.shadowSide:I.side:I.shadowSide!==null?I.shadowSide:d[I.side],k.alphaMap=I.alphaMap,k.alphaTest=I.alphaTest,k.map=I.map,k.clipShadows=I.clipShadows,k.clippingPlanes=I.clippingPlanes,k.clipIntersection=I.clipIntersection,k.displacementMap=I.displacementMap,k.displacementScale=I.displacementScale,k.displacementBias=I.displacementBias,k.wireframeLinewidth=I.wireframeLinewidth,k.linewidth=I.linewidth,U.isPointLight===!0&&k.isMeshDistanceMaterial===!0&&(r.properties.get(k).light=U),k}function y(T,I,U,O,k){if(T.visible===!1)return;if(T.layers.test(I.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&k===3)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,T.matrixWorld);let G=e.update(T),q=T.material;if(Array.isArray(q)){let H=G.groups;for(let J=0,Q=H.length;J<Q;J++){let le=H[J],oe=q[le.materialIndex];if(oe&&oe.visible){let we=_(T,oe,O,k);T.onBeforeShadow(r,T,I,U,G,we,le),r.renderBufferDirect(U,null,G,we,T,le),T.onAfterShadow(r,T,I,U,G,we,le)}}}else if(q.visible){let H=_(T,q,O,k);T.onBeforeShadow(r,T,I,U,G,H,null),r.renderBufferDirect(U,null,G,H,T,null),T.onAfterShadow(r,T,I,U,G,H,null)}}let X=T.children;for(let G=0,q=X.length;G<q;G++)y(X[G],I,U,O,k)}function R(T){T.target.removeEventListener("dispose",R);for(let I in c){let U=c[I],O=T.target.uuid;O in U&&(U[O].dispose(),delete U[O])}}this.render=function(T,I,U){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||T.length===0)return;let O=r.getRenderTarget(),k=r.getActiveCubeFace(),X=r.getActiveMipmapLevel(),G=r.state;G.setBlending(0),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let q=g!==3&&this.type===3,H=g===3&&this.type!==3;for(let J=0,Q=T.length;J<Q;J++){let le=T[J],oe=le.shadow;if(oe===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(oe.autoUpdate===!1&&oe.needsUpdate===!1)continue;i.copy(oe.mapSize);let we=oe.getFrameExtents();if(i.multiply(we),s.copy(oe.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/we.x),i.x=s.x*we.x,oe.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/we.y),i.y=s.y*we.y,oe.mapSize.y=s.y)),oe.map===null||q===!0||H===!0){let re=this.type!==3?{minFilter:Mn,magFilter:Mn}:{};oe.map!==null&&oe.map.dispose(),oe.map=new Jn(i.x,i.y,re),oe.map.texture.name=le.name+".shadowMap",oe.camera.updateProjectionMatrix()}r.setRenderTarget(oe.map),r.clear();let Se=oe.getViewportCount();for(let re=0;re<Se;re++){let he=oe.getViewport(re);a.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),G.viewport(a),oe.updateMatrices(le,re),n=oe.getFrustum(),y(I,U,oe.camera,le,this.type)}oe.isPointLightShadow!==!0&&this.type===3&&v(oe,U),oe.needsUpdate=!1}g=this.type,f.needsUpdate=!1,r.setRenderTarget(O,k,X)}}var Yg={[qf]:1,[Zf]:6,[Kf]:7,[Jf]:5,[Yf]:0,[Qf]:2,[em]:4,[$f]:3};function Zg(r,e){let t=new function(){let S=!1,C=new _t,F=null,te=new _t(0,0,0,0);return{setMask:function(N){F===N||S||(r.colorMask(N,N,N,N),F=N)},setLocked:function(N){S=N},setClear:function(N,K,$,ne,V){V===!0&&(N*=ne,K*=ne,$*=ne),C.set(N,K,$,ne),te.equals(C)===!1&&(r.clearColor(N,K,$,ne),te.copy(C))},reset:function(){S=!1,F=null,te.set(-1,0,0,0)}}},n=new function(){let S=!1,C=!1,F=null,te=null,N=null;return{setReversed:function(K){if(C!==K){let $=e.get("EXT_clip_control");C?$.clipControlEXT($.LOWER_LEFT_EXT,$.ZERO_TO_ONE_EXT):$.clipControlEXT($.LOWER_LEFT_EXT,$.NEGATIVE_ONE_TO_ONE_EXT);let ne=N;N=null,this.setClear(ne)}C=K},getReversed:function(){return C},setTest:function(K){K?ye(r.DEPTH_TEST):fe(r.DEPTH_TEST)},setMask:function(K){F===K||S||(r.depthMask(K),F=K)},setFunc:function(K){if(C&&(K=Yg[K]),te!==K){switch(K){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:default:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL)}te=K}},setLocked:function(K){S=K},setClear:function(K){N!==K&&(C&&(K=1-K),r.clearDepth(K),N=K)},reset:function(){S=!1,F=null,te=null,N=null,C=!1}}},i=new function(){let S=!1,C=null,F=null,te=null,N=null,K=null,$=null,ne=null,V=null;return{setTest:function(z){S||(z?ye(r.STENCIL_TEST):fe(r.STENCIL_TEST))},setMask:function(z){C===z||S||(r.stencilMask(z),C=z)},setFunc:function(z,ae,Ae){F===z&&te===ae&&N===Ae||(r.stencilFunc(z,ae,Ae),F=z,te=ae,N=Ae)},setOp:function(z,ae,Ae){K===z&&$===ae&&ne===Ae||(r.stencilOp(z,ae,Ae),K=z,$=ae,ne=Ae)},setLocked:function(z){S=z},setClear:function(z){V!==z&&(r.clearStencil(z),V=z)},reset:function(){S=!1,C=null,F=null,te=null,N=null,K=null,$=null,ne=null,V=null}}},s=new WeakMap,a=new WeakMap,o={},l={},c=new WeakMap,h=[],d=null,u=!1,p=null,m=null,x=null,f=null,g=null,v=null,_=null,y=new ve(0,0,0),R=0,T=!1,I=null,U=null,O=null,k=null,X=null,G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,H=0,J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(J)[1]),q=H>=1):J.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),q=H>=2);let Q=null,le={},oe=r.getParameter(r.SCISSOR_BOX),we=r.getParameter(r.VIEWPORT),Se=new _t().fromArray(oe),re=new _t().fromArray(we);function he(S,C,F,te){let N=new Uint8Array(4),K=r.createTexture();r.bindTexture(S,K),r.texParameteri(S,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(S,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let $=0;$<F;$++)S===r.TEXTURE_3D||S===r.TEXTURE_2D_ARRAY?r.texImage3D(C,0,r.RGBA,1,1,te,0,r.RGBA,r.UNSIGNED_BYTE,N):r.texImage2D(C+$,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,N);return K}let me={};function ye(S){o[S]!==!0&&(r.enable(S),o[S]=!0)}function fe(S){o[S]!==!1&&(r.disable(S),o[S]=!1)}me[r.TEXTURE_2D]=he(r.TEXTURE_2D,r.TEXTURE_2D,1),me[r.TEXTURE_CUBE_MAP]=he(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[r.TEXTURE_2D_ARRAY]=he(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),me[r.TEXTURE_3D]=he(r.TEXTURE_3D,r.TEXTURE_3D,1,1),t.setClear(0,0,0,1),n.setClear(1),i.setClear(0),ye(r.DEPTH_TEST),n.setFunc(3),L(!1),A(1),ye(r.CULL_FACE),D(0);let w={[Ui]:r.FUNC_ADD,[Lf]:r.FUNC_SUBTRACT,[Uf]:r.FUNC_REVERSE_SUBTRACT};w[103]=r.MIN,w[104]=r.MAX;let b={[Df]:r.ZERO,[Nf]:r.ONE,[Of]:r.SRC_COLOR,[Xl]:r.SRC_ALPHA,[Vf]:r.SRC_ALPHA_SATURATE,[Hf]:r.DST_COLOR,[Ff]:r.DST_ALPHA,[Bf]:r.ONE_MINUS_SRC_COLOR,[jl]:r.ONE_MINUS_SRC_ALPHA,[kf]:r.ONE_MINUS_DST_COLOR,[zf]:r.ONE_MINUS_DST_ALPHA,[Gf]:r.CONSTANT_COLOR,[Wf]:r.ONE_MINUS_CONSTANT_COLOR,[Xf]:r.CONSTANT_ALPHA,[jf]:r.ONE_MINUS_CONSTANT_ALPHA};function D(S,C,F,te,N,K,$,ne,V,z){if(S!==0){if(u===!1&&(ye(r.BLEND),u=!0),S===5)N=N||C,K=K||F,$=$||te,C===m&&N===g||(r.blendEquationSeparate(w[C],w[N]),m=C,g=N),F===x&&te===f&&K===v&&$===_||(r.blendFuncSeparate(b[F],b[te],b[K],b[$]),x=F,f=te,v=K,_=$),ne.equals(y)!==!1&&V===R||(r.blendColor(ne.r,ne.g,ne.b,V),y.copy(ne),R=V),p=S,T=!1;else if(S!==p||z!==T){if(m===Ui&&g===Ui||(r.blendEquation(r.FUNC_ADD),m=Ui,g=Ui),z)switch(S){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S)}else switch(S){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S)}x=null,f=null,v=null,_=null,y.set(0,0,0),R=0,p=S,T=z}}else u===!0&&(fe(r.BLEND),u=!1)}function L(S){I!==S&&(S?r.frontFace(r.CW):r.frontFace(r.CCW),I=S)}function A(S){S!==0?(ye(r.CULL_FACE),S!==U&&(S===1?r.cullFace(r.BACK):S===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):fe(r.CULL_FACE),U=S}function P(S,C,F){S?(ye(r.POLYGON_OFFSET_FILL),k===C&&X===F||(r.polygonOffset(C,F),k=C,X=F)):fe(r.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:n,stencil:i},enable:ye,disable:fe,bindFramebuffer:function(S,C){return l[S]!==C&&(r.bindFramebuffer(S,C),l[S]=C,S===r.DRAW_FRAMEBUFFER&&(l[r.FRAMEBUFFER]=C),S===r.FRAMEBUFFER&&(l[r.DRAW_FRAMEBUFFER]=C),!0)},drawBuffers:function(S,C){let F=h,te=!1;if(S){F=c.get(C),F===void 0&&(F=[],c.set(C,F));let N=S.textures;if(F.length!==N.length||F[0]!==r.COLOR_ATTACHMENT0){for(let K=0,$=N.length;K<$;K++)F[K]=r.COLOR_ATTACHMENT0+K;F.length=N.length,te=!0}}else F[0]!==r.BACK&&(F[0]=r.BACK,te=!0);te&&r.drawBuffers(F)},useProgram:function(S){return d!==S&&(r.useProgram(S),d=S,!0)},setBlending:D,setMaterial:function(S,C){S.side===2?fe(r.CULL_FACE):ye(r.CULL_FACE);let F=S.side===1;C&&(F=!F),L(F),S.blending===1&&S.transparent===!1?D(0):D(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),n.setFunc(S.depthFunc),n.setTest(S.depthTest),n.setMask(S.depthWrite),t.setMask(S.colorWrite);let te=S.stencilWrite;i.setTest(te),te&&(i.setMask(S.stencilWriteMask),i.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),i.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),P(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?ye(r.SAMPLE_ALPHA_TO_COVERAGE):fe(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:L,setCullFace:A,setLineWidth:function(S){S!==O&&(q&&r.lineWidth(S),O=S)},setPolygonOffset:P,setScissorTest:function(S){S?ye(r.SCISSOR_TEST):fe(r.SCISSOR_TEST)},activeTexture:function(S){S===void 0&&(S=r.TEXTURE0+G-1),Q!==S&&(r.activeTexture(S),Q=S)},bindTexture:function(S,C,F){F===void 0&&(F=Q===null?r.TEXTURE0+G-1:Q);let te=le[F];te===void 0&&(te={type:void 0,texture:void 0},le[F]=te),te.type===S&&te.texture===C||(Q!==F&&(r.activeTexture(F),Q=F),r.bindTexture(S,C||me[S]),te.type=S,te.texture=C)},unbindTexture:function(){let S=le[Q];S!==void 0&&S.type!==void 0&&(r.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},updateUBOMapping:function(S,C){let F=a.get(C);F===void 0&&(F=new WeakMap,a.set(C,F));let te=F.get(S);te===void 0&&(te=r.getUniformBlockIndex(C,S.name),F.set(S,te))},uniformBlockBinding:function(S,C){let F=a.get(C).get(S);s.get(C)!==F&&(r.uniformBlockBinding(C,F,S.__bindingPointIndex),s.set(C,F))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},scissor:function(S){Se.equals(S)===!1&&(r.scissor(S.x,S.y,S.z,S.w),Se.copy(S))},viewport:function(S){re.equals(S)===!1&&(r.viewport(S.x,S.y,S.z,S.w),re.copy(S))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),n.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),o={},Q=null,le={},l={},c=new WeakMap,h=[],d=null,u=!1,p=null,m=null,x=null,f=null,g=null,v=null,_=null,y=new ve(0,0,0),R=0,T=!1,I=null,U=null,O=null,k=null,X=null,Se.set(0,0,r.canvas.width,r.canvas.height),re.set(0,0,r.canvas.width,r.canvas.height),t.reset(),n.reset(),i.reset()}}}function Td(r,e,t,n){let i=(function(s){switch(s){case fi:case Kd:return{byteLength:1,components:1};case fs:case $d:case Rs:return{byteLength:2,components:1};case Th:case Ah:return{byteLength:2,components:4};case Fi:case wh:case Ln:return{byteLength:4,components:1};case Qd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(n);switch(t){case ep:case np:return r*e;case ip:return r*e*2;case Rh:case Ch:return r*e/i.components*i.byteLength;case rp:case Ih:return r*e*2/i.components*i.byteLength;case tp:return r*e*3/i.components*i.byteLength;case Un:case Ph:return r*e*4/i.components*i.byteLength;case za:case Ha:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ka:case Va:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Kl:case Ql:return Math.max(r,16)*Math.max(e,8)/4;case Jl:case $l:return Math.max(r,8)*Math.max(e,8)/2;case ec:case tc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case nc:case ic:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case rc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case sc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case ac:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case oc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case lc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case cc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case hc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case uc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case dc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case pc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case fc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case mc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case gc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ga:case vc:case _c:return Math.ceil(r/4)*Math.ceil(e/4)*16;case sp:case xc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case yc:case Mc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jg(r,e,t,n,i,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new ce,h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,b){return p?new OffscreenCanvas(w,b):qa("canvas")}function x(w,b,D){let L=1,A=fe(w);if((A.width>D||A.height>D)&&(L=D/Math.max(A.width,A.height)),L<1){if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let P=Math.floor(L*A.width),S=Math.floor(L*A.height);d===void 0&&(d=m(P,S));let C=b?m(P,S):d;return C.width=P,C.height=S,C.getContext("2d").drawImage(w,0,0,P,S),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+P+"x"+S+")."),C}return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),w}return w}function f(w){return w.generateMipmaps}function g(w){r.generateMipmap(w)}function v(w){return w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?r.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function _(w,b,D,L,A=!1){if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let P=b;if(b===r.RED&&(D===r.FLOAT&&(P=r.R32F),D===r.HALF_FLOAT&&(P=r.R16F),D===r.UNSIGNED_BYTE&&(P=r.R8)),b===r.RED_INTEGER&&(D===r.UNSIGNED_BYTE&&(P=r.R8UI),D===r.UNSIGNED_SHORT&&(P=r.R16UI),D===r.UNSIGNED_INT&&(P=r.R32UI),D===r.BYTE&&(P=r.R8I),D===r.SHORT&&(P=r.R16I),D===r.INT&&(P=r.R32I)),b===r.RG&&(D===r.FLOAT&&(P=r.RG32F),D===r.HALF_FLOAT&&(P=r.RG16F),D===r.UNSIGNED_BYTE&&(P=r.RG8)),b===r.RG_INTEGER&&(D===r.UNSIGNED_BYTE&&(P=r.RG8UI),D===r.UNSIGNED_SHORT&&(P=r.RG16UI),D===r.UNSIGNED_INT&&(P=r.RG32UI),D===r.BYTE&&(P=r.RG8I),D===r.SHORT&&(P=r.RG16I),D===r.INT&&(P=r.RG32I)),b===r.RGB_INTEGER&&(D===r.UNSIGNED_BYTE&&(P=r.RGB8UI),D===r.UNSIGNED_SHORT&&(P=r.RGB16UI),D===r.UNSIGNED_INT&&(P=r.RGB32UI),D===r.BYTE&&(P=r.RGB8I),D===r.SHORT&&(P=r.RGB16I),D===r.INT&&(P=r.RGB32I)),b===r.RGBA_INTEGER&&(D===r.UNSIGNED_BYTE&&(P=r.RGBA8UI),D===r.UNSIGNED_SHORT&&(P=r.RGBA16UI),D===r.UNSIGNED_INT&&(P=r.RGBA32UI),D===r.BYTE&&(P=r.RGBA8I),D===r.SHORT&&(P=r.RGBA16I),D===r.INT&&(P=r.RGBA32I)),b===r.RGB&&D===r.UNSIGNED_INT_5_9_9_9_REV&&(P=r.RGB9_E5),b===r.RGBA){let S=A?Eo:Qe.getTransfer(L);D===r.FLOAT&&(P=r.RGBA32F),D===r.HALF_FLOAT&&(P=r.RGBA16F),D===r.UNSIGNED_BYTE&&(P=S===ht?r.SRGB8_ALPHA8:r.RGBA8),D===r.UNSIGNED_SHORT_4_4_4_4&&(P=r.RGBA4),D===r.UNSIGNED_SHORT_5_5_5_1&&(P=r.RGB5_A1)}return P!==r.R16F&&P!==r.R32F&&P!==r.RG16F&&P!==r.RG32F&&P!==r.RGBA16F&&P!==r.RGBA32F||e.get("EXT_color_buffer_float"),P}function y(w,b){let D;return w?b===null||b===Fi||b===Ir?D=r.DEPTH24_STENCIL8:b===Ln?D=r.DEPTH32F_STENCIL8:b===fs&&(D=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Fi||b===Ir?D=r.DEPTH_COMPONENT24:b===Ln?D=r.DEPTH_COMPONENT32F:b===fs&&(D=r.DEPTH_COMPONENT16),D}function R(w,b){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==Mn&&w.minFilter!==qn?Math.log2(Math.max(b.width,b.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?b.mipmaps.length:1}function T(w){let b=w.target;b.removeEventListener("dispose",T),(function(D){let L=n.get(D);if(L.__webglInit===void 0)return;let A=D.source,P=u.get(A);if(P){let S=P[L.__cacheKey];S.usedTimes--,S.usedTimes===0&&U(D),Object.keys(P).length===0&&u.delete(A)}n.remove(D)})(b),b.isVideoTexture&&h.delete(b)}function I(w){let b=w.target;b.removeEventListener("dispose",I),(function(D){let L=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let P=0;P<6;P++){if(Array.isArray(L.__webglFramebuffer[P]))for(let S=0;S<L.__webglFramebuffer[P].length;S++)r.deleteFramebuffer(L.__webglFramebuffer[P][S]);else r.deleteFramebuffer(L.__webglFramebuffer[P]);L.__webglDepthbuffer&&r.deleteRenderbuffer(L.__webglDepthbuffer[P])}else{if(Array.isArray(L.__webglFramebuffer))for(let P=0;P<L.__webglFramebuffer.length;P++)r.deleteFramebuffer(L.__webglFramebuffer[P]);else r.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&r.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&r.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let P=0;P<L.__webglColorRenderbuffer.length;P++)L.__webglColorRenderbuffer[P]&&r.deleteRenderbuffer(L.__webglColorRenderbuffer[P]);L.__webglDepthRenderbuffer&&r.deleteRenderbuffer(L.__webglDepthRenderbuffer)}let A=D.textures;for(let P=0,S=A.length;P<S;P++){let C=n.get(A[P]);C.__webglTexture&&(r.deleteTexture(C.__webglTexture),a.memory.textures--),n.remove(A[P])}n.remove(D)})(b)}function U(w){let b=n.get(w);r.deleteTexture(b.__webglTexture);let D=w.source;delete u.get(D)[b.__cacheKey],a.memory.textures--}let O=0;function k(w,b){let D=n.get(w);if(w.isVideoTexture&&(function(L){let A=a.render.frame;h.get(L)!==A&&(h.set(L,A),L.update())})(w),w.isRenderTargetTexture===!1&&w.version>0&&D.__version!==w.version){let L=w.image;if(L===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(L.complete!==!1)return void Q(D,w,b);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(r.TEXTURE_2D,D.__webglTexture,r.TEXTURE0+b)}let X={[Oi]:r.REPEAT,[Bi]:r.CLAMP_TO_EDGE,[Zl]:r.MIRRORED_REPEAT},G={[Mn]:r.NEAREST,[tm]:r.NEAREST_MIPMAP_NEAREST,[ia]:r.NEAREST_MIPMAP_LINEAR,[qn]:r.LINEAR,[ll]:r.LINEAR_MIPMAP_NEAREST,[br]:r.LINEAR_MIPMAP_LINEAR},q={[nm]:r.NEVER,[cm]:r.ALWAYS,[im]:r.LESS,[sm]:r.LEQUAL,[rm]:r.EQUAL,[lm]:r.GEQUAL,[am]:r.GREATER,[om]:r.NOTEQUAL};function H(w,b){if(b.type!==Ln||e.has("OES_texture_float_linear")!==!1||b.magFilter!==qn&&b.magFilter!==ll&&b.magFilter!==ia&&b.magFilter!==br&&b.minFilter!==qn&&b.minFilter!==ll&&b.minFilter!==ia&&b.minFilter!==br||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,X[b.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,X[b.wrapT]),w!==r.TEXTURE_3D&&w!==r.TEXTURE_2D_ARRAY||r.texParameteri(w,r.TEXTURE_WRAP_R,X[b.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,G[b.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,G[b.minFilter]),b.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,q[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Mn||b.minFilter!==ia&&b.minFilter!==br||b.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let D=e.get("EXT_texture_filter_anisotropic");r.texParameterf(w,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function J(w,b){let D=!1;w.__webglInit===void 0&&(w.__webglInit=!0,b.addEventListener("dispose",T));let L=b.source,A=u.get(L);A===void 0&&(A={},u.set(L,A));let P=(function(S){let C=[];return C.push(S.wrapS),C.push(S.wrapT),C.push(S.wrapR||0),C.push(S.magFilter),C.push(S.minFilter),C.push(S.anisotropy),C.push(S.internalFormat),C.push(S.format),C.push(S.type),C.push(S.generateMipmaps),C.push(S.premultiplyAlpha),C.push(S.flipY),C.push(S.unpackAlignment),C.push(S.colorSpace),C.join()})(b);if(P!==w.__cacheKey){A[P]===void 0&&(A[P]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,D=!0),A[P].usedTimes++;let S=A[w.__cacheKey];S!==void 0&&(A[w.__cacheKey].usedTimes--,S.usedTimes===0&&U(b)),w.__cacheKey=P,w.__webglTexture=A[P].texture}return D}function Q(w,b,D){let L=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(L=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(L=r.TEXTURE_3D);let A=J(w,b),P=b.source;t.bindTexture(L,w.__webglTexture,r.TEXTURE0+D);let S=n.get(P);if(P.version!==S.__version||A===!0){t.activeTexture(r.TEXTURE0+D);let C=Qe.getPrimaries(Qe.workingColorSpace),F=b.colorSpace===Er?null:Qe.getPrimaries(b.colorSpace),te=b.colorSpace===Er||C===F?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let N=x(b.image,!1,i.maxTextureSize);N=ye(b,N);let K=s.convert(b.format,b.colorSpace),$=s.convert(b.type),ne,V=_(b.internalFormat,K,$,b.colorSpace,b.isVideoTexture);H(L,b);let z=b.mipmaps,ae=b.isVideoTexture!==!0,Ae=S.__version===void 0||A===!0,Ie=P.dataReady,De=R(b,N);if(b.isDepthTexture)V=y(b.format===Pr,b.type),Ae&&(ae?t.texStorage2D(r.TEXTURE_2D,1,V,N.width,N.height):t.texImage2D(r.TEXTURE_2D,0,V,N.width,N.height,0,K,$,null));else if(b.isDataTexture)if(z.length>0){ae&&Ae&&t.texStorage2D(r.TEXTURE_2D,De,V,z[0].width,z[0].height);for(let Me=0,Z=z.length;Me<Z;Me++)ne=z[Me],ae?Ie&&t.texSubImage2D(r.TEXTURE_2D,Me,0,0,ne.width,ne.height,K,$,ne.data):t.texImage2D(r.TEXTURE_2D,Me,V,ne.width,ne.height,0,K,$,ne.data);b.generateMipmaps=!1}else ae?(Ae&&t.texStorage2D(r.TEXTURE_2D,De,V,N.width,N.height),Ie&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,N.width,N.height,K,$,N.data)):t.texImage2D(r.TEXTURE_2D,0,V,N.width,N.height,0,K,$,N.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ae&&Ae&&t.texStorage3D(r.TEXTURE_2D_ARRAY,De,V,z[0].width,z[0].height,N.depth);for(let Me=0,Z=z.length;Me<Z;Me++)if(ne=z[Me],b.format!==Un)if(K!==null)if(ae){if(Ie)if(b.layerUpdates.size>0){let ue=Td(ne.width,ne.height,b.format,b.type);for(let ge of b.layerUpdates){let se=ne.data.subarray(ge*ue/ne.data.BYTES_PER_ELEMENT,(ge+1)*ue/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,ge,ne.width,ne.height,1,K,se)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,ne.width,ne.height,N.depth,K,ne.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Me,V,ne.width,ne.height,N.depth,0,ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?Ie&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,ne.width,ne.height,N.depth,K,$,ne.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Me,V,ne.width,ne.height,N.depth,0,K,$,ne.data)}else{ae&&Ae&&t.texStorage2D(r.TEXTURE_2D,De,V,z[0].width,z[0].height);for(let Me=0,Z=z.length;Me<Z;Me++)ne=z[Me],b.format!==Un?K!==null?ae?Ie&&t.compressedTexSubImage2D(r.TEXTURE_2D,Me,0,0,ne.width,ne.height,K,ne.data):t.compressedTexImage2D(r.TEXTURE_2D,Me,V,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?Ie&&t.texSubImage2D(r.TEXTURE_2D,Me,0,0,ne.width,ne.height,K,$,ne.data):t.texImage2D(r.TEXTURE_2D,Me,V,ne.width,ne.height,0,K,$,ne.data)}else if(b.isDataArrayTexture)if(ae){if(Ae&&t.texStorage3D(r.TEXTURE_2D_ARRAY,De,V,N.width,N.height,N.depth),Ie)if(b.layerUpdates.size>0){let Me=Td(N.width,N.height,b.format,b.type);for(let Z of b.layerUpdates){let ue=N.data.subarray(Z*Me/N.data.BYTES_PER_ELEMENT,(Z+1)*Me/N.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Z,N.width,N.height,1,K,$,ue)}b.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,N.width,N.height,N.depth,K,$,N.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,V,N.width,N.height,N.depth,0,K,$,N.data);else if(b.isData3DTexture)ae?(Ae&&t.texStorage3D(r.TEXTURE_3D,De,V,N.width,N.height,N.depth),Ie&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,N.width,N.height,N.depth,K,$,N.data)):t.texImage3D(r.TEXTURE_3D,0,V,N.width,N.height,N.depth,0,K,$,N.data);else if(b.isFramebufferTexture){if(Ae)if(ae)t.texStorage2D(r.TEXTURE_2D,De,V,N.width,N.height);else{let Me=N.width,Z=N.height;for(let ue=0;ue<De;ue++)t.texImage2D(r.TEXTURE_2D,ue,V,Me,Z,0,K,$,null),Me>>=1,Z>>=1}}else if(z.length>0){if(ae&&Ae){let Me=fe(z[0]);t.texStorage2D(r.TEXTURE_2D,De,V,Me.width,Me.height)}for(let Me=0,Z=z.length;Me<Z;Me++)ne=z[Me],ae?Ie&&t.texSubImage2D(r.TEXTURE_2D,Me,0,0,K,$,ne):t.texImage2D(r.TEXTURE_2D,Me,V,K,$,ne);b.generateMipmaps=!1}else if(ae){if(Ae){let Me=fe(N);t.texStorage2D(r.TEXTURE_2D,De,V,Me.width,Me.height)}Ie&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,K,$,N)}else t.texImage2D(r.TEXTURE_2D,0,V,K,$,N);f(b)&&g(L),S.__version=P.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function le(w,b,D,L,A,P){let S=s.convert(D.format,D.colorSpace),C=s.convert(D.type),F=_(D.internalFormat,S,C,D.colorSpace),te=n.get(b),N=n.get(D);if(N.__renderTarget=b,!te.__hasExternalTextures){let K=Math.max(1,b.width>>P),$=Math.max(1,b.height>>P);A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY?t.texImage3D(A,P,F,K,$,b.depth,0,S,C,null):t.texImage2D(A,P,F,K,$,0,S,C,null)}t.bindFramebuffer(r.FRAMEBUFFER,w),me(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,L,A,N.__webglTexture,0,he(b)):(A===r.TEXTURE_2D||A>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&A<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,L,A,N.__webglTexture,P),t.bindFramebuffer(r.FRAMEBUFFER,null)}function oe(w,b,D){if(r.bindRenderbuffer(r.RENDERBUFFER,w),b.depthBuffer){let L=b.depthTexture,A=L&&L.isDepthTexture?L.type:null,P=y(b.stencilBuffer,A),S=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,C=he(b);me(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,C,P,b.width,b.height):D?r.renderbufferStorageMultisample(r.RENDERBUFFER,C,P,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,P,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,S,r.RENDERBUFFER,w)}else{let L=b.textures;for(let A=0;A<L.length;A++){let P=L[A],S=s.convert(P.format,P.colorSpace),C=s.convert(P.type),F=_(P.internalFormat,S,C,P.colorSpace),te=he(b);D&&me(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,te,F,b.width,b.height):me(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,te,F,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,F,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function we(w){let b=n.get(w),D=w.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==w.depthTexture){let L=w.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),L){let A=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,L.removeEventListener("dispose",A)};L.addEventListener("dispose",A),b.__depthDisposeCallback=A}b.__boundDepthTexture=L}if(w.depthTexture&&!b.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");(function(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,L),!A.depthTexture||!A.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let P=n.get(A.depthTexture);P.__renderTarget=A,P.__webglTexture&&A.depthTexture.image.width===A.width&&A.depthTexture.image.height===A.height||(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),k(A.depthTexture,0);let S=P.__webglTexture,C=he(A);if(A.depthTexture.format===ms)me(A)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,S,0,C):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,S,0);else{if(A.depthTexture.format!==Pr)throw new Error("Unknown depthTexture format");me(A)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,S,0,C):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,S,0)}})(b.__webglFramebuffer,w)}else if(D){b.__webglDepthbuffer=[];for(let L=0;L<6;L++)if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[L]),b.__webglDepthbuffer[L]===void 0)b.__webglDepthbuffer[L]=r.createRenderbuffer(),oe(b.__webglDepthbuffer[L],w,!1);else{let A=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,P=b.__webglDepthbuffer[L];r.bindRenderbuffer(r.RENDERBUFFER,P),r.framebufferRenderbuffer(r.FRAMEBUFFER,A,r.RENDERBUFFER,P)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),oe(b.__webglDepthbuffer,w,!1);else{let L=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,A=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,A),r.framebufferRenderbuffer(r.FRAMEBUFFER,L,r.RENDERBUFFER,A)}t.bindFramebuffer(r.FRAMEBUFFER,null)}let Se=[],re=[];function he(w){return Math.min(i.maxSamples,w.samples)}function me(w){let b=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ye(w,b){let D=w.colorSpace,L=w.format,A=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||D!==Hr&&D!==Er&&(Qe.getTransfer(D)===ht?L===Un&&A===fi||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),b}function fe(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=function(){let w=O;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),O+=1,w},this.resetTextureUnits=function(){O=0},this.setTexture2D=k,this.setTexture2DArray=function(w,b){let D=n.get(w);w.version>0&&D.__version!==w.version?Q(D,w,b):t.bindTexture(r.TEXTURE_2D_ARRAY,D.__webglTexture,r.TEXTURE0+b)},this.setTexture3D=function(w,b){let D=n.get(w);w.version>0&&D.__version!==w.version?Q(D,w,b):t.bindTexture(r.TEXTURE_3D,D.__webglTexture,r.TEXTURE0+b)},this.setTextureCube=function(w,b){let D=n.get(w);w.version>0&&D.__version!==w.version?(function(L,A,P){if(A.image.length!==6)return;let S=J(L,A),C=A.source;t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+P);let F=n.get(C);if(C.version!==F.__version||S===!0){t.activeTexture(r.TEXTURE0+P);let te=Qe.getPrimaries(Qe.workingColorSpace),N=A.colorSpace===Er?null:Qe.getPrimaries(A.colorSpace),K=A.colorSpace===Er||te===N?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let $=A.isCompressedTexture||A.image[0].isCompressedTexture,ne=A.image[0]&&A.image[0].isDataTexture,V=[];for(let se=0;se<6;se++)V[se]=$||ne?ne?A.image[se].image:A.image[se]:x(A.image[se],!0,i.maxCubemapSize),V[se]=ye(A,V[se]);let z=V[0],ae=s.convert(A.format,A.colorSpace),Ae=s.convert(A.type),Ie=_(A.internalFormat,ae,Ae,A.colorSpace),De=A.isVideoTexture!==!0,Me=F.__version===void 0||S===!0,Z=C.dataReady,ue,ge=R(A,z);if(H(r.TEXTURE_CUBE_MAP,A),$){De&&Me&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ge,Ie,z.width,z.height);for(let se=0;se<6;se++){ue=V[se].mipmaps;for(let ee=0;ee<ue.length;ee++){let xe=ue[ee];A.format!==Un?ae!==null?De?Z&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ee,0,0,xe.width,xe.height,ae,xe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ee,Ie,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?Z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ee,0,0,xe.width,xe.height,ae,Ae,xe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ee,Ie,xe.width,xe.height,0,ae,Ae,xe.data)}}}else{if(ue=A.mipmaps,De&&Me){ue.length>0&&ge++;let se=fe(V[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ge,Ie,se.width,se.height)}for(let se=0;se<6;se++)if(ne){De?Z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,V[se].width,V[se].height,ae,Ae,V[se].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ie,V[se].width,V[se].height,0,ae,Ae,V[se].data);for(let ee=0;ee<ue.length;ee++){let xe=ue[ee].image[se].image;De?Z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ee+1,0,0,xe.width,xe.height,ae,Ae,xe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ee+1,Ie,xe.width,xe.height,0,ae,Ae,xe.data)}}else{De?Z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ae,Ae,V[se]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ie,ae,Ae,V[se]);for(let ee=0;ee<ue.length;ee++){let xe=ue[ee];De?Z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ee+1,0,0,ae,Ae,xe.image[se]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ee+1,Ie,ae,Ae,xe.image[se])}}}f(A)&&g(r.TEXTURE_CUBE_MAP),F.__version=C.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version})(D,w,b):t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+b)},this.rebindTextures=function(w,b,D){let L=n.get(w);b!==void 0&&le(L.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),D!==void 0&&we(w)},this.setupRenderTarget=function(w){let b=w.texture,D=n.get(w),L=n.get(b);w.addEventListener("dispose",I);let A=w.textures,P=w.isWebGLCubeRenderTarget===!0,S=A.length>1;if(S||(L.__webglTexture===void 0&&(L.__webglTexture=r.createTexture()),L.__version=b.version,a.memory.textures++),P){D.__webglFramebuffer=[];for(let C=0;C<6;C++)if(b.mipmaps&&b.mipmaps.length>0){D.__webglFramebuffer[C]=[];for(let F=0;F<b.mipmaps.length;F++)D.__webglFramebuffer[C][F]=r.createFramebuffer()}else D.__webglFramebuffer[C]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){D.__webglFramebuffer=[];for(let C=0;C<b.mipmaps.length;C++)D.__webglFramebuffer[C]=r.createFramebuffer()}else D.__webglFramebuffer=r.createFramebuffer();if(S)for(let C=0,F=A.length;C<F;C++){let te=n.get(A[C]);te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture(),a.memory.textures++)}if(w.samples>0&&me(w)===!1){D.__webglMultisampledFramebuffer=r.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let C=0;C<A.length;C++){let F=A[C];D.__webglColorRenderbuffer[C]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,D.__webglColorRenderbuffer[C]);let te=s.convert(F.format,F.colorSpace),N=s.convert(F.type),K=_(F.internalFormat,te,N,F.colorSpace,w.isXRRenderTarget===!0),$=he(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,$,K,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+C,r.RENDERBUFFER,D.__webglColorRenderbuffer[C])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(D.__webglDepthRenderbuffer=r.createRenderbuffer(),oe(D.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(P){t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture),H(r.TEXTURE_CUBE_MAP,b);for(let C=0;C<6;C++)if(b.mipmaps&&b.mipmaps.length>0)for(let F=0;F<b.mipmaps.length;F++)le(D.__webglFramebuffer[C][F],w,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+C,F);else le(D.__webglFramebuffer[C],w,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+C,0);f(b)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(S){for(let C=0,F=A.length;C<F;C++){let te=A[C],N=n.get(te);t.bindTexture(r.TEXTURE_2D,N.__webglTexture),H(r.TEXTURE_2D,te),le(D.__webglFramebuffer,w,te,r.COLOR_ATTACHMENT0+C,r.TEXTURE_2D,0),f(te)&&g(r.TEXTURE_2D)}t.unbindTexture()}else{let C=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(C=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(C,L.__webglTexture),H(C,b),b.mipmaps&&b.mipmaps.length>0)for(let F=0;F<b.mipmaps.length;F++)le(D.__webglFramebuffer[F],w,b,r.COLOR_ATTACHMENT0,C,F);else le(D.__webglFramebuffer,w,b,r.COLOR_ATTACHMENT0,C,0);f(b)&&g(C),t.unbindTexture()}w.depthBuffer&&we(w)},this.updateRenderTargetMipmap=function(w){let b=w.textures;for(let D=0,L=b.length;D<L;D++){let A=b[D];if(f(A)){let P=v(w),S=n.get(A).__webglTexture;t.bindTexture(P,S),g(P),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(w){if(w.samples>0){if(me(w)===!1){let b=w.textures,D=w.width,L=w.height,A=r.COLOR_BUFFER_BIT,P=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,S=n.get(w),C=b.length>1;if(C)for(let F=0;F<b.length;F++)t.bindFramebuffer(r.FRAMEBUFFER,S.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+F,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+F,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,S.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,S.__webglFramebuffer);for(let F=0;F<b.length;F++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(A|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(A|=r.STENCIL_BUFFER_BIT)),C){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,S.__webglColorRenderbuffer[F]);let te=n.get(b[F]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,te,0)}r.blitFramebuffer(0,0,D,L,0,0,D,L,A,r.NEAREST),l===!0&&(Se.length=0,re.length=0,Se.push(r.COLOR_ATTACHMENT0+F),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Se.push(P),re.push(P),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,re)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Se))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),C)for(let F=0;F<b.length;F++){t.bindFramebuffer(r.FRAMEBUFFER,S.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+F,r.RENDERBUFFER,S.__webglColorRenderbuffer[F]);let te=n.get(b[F]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+F,r.TEXTURE_2D,te,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,S.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let b=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}},this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=le,this.useMultisampledRTT=me}function Kg(r,e){return{convert:function(t,n=""){let i,s=Qe.getTransfer(n);if(t===fi)return r.UNSIGNED_BYTE;if(t===Th)return r.UNSIGNED_SHORT_4_4_4_4;if(t===Ah)return r.UNSIGNED_SHORT_5_5_5_1;if(t===Qd)return r.UNSIGNED_INT_5_9_9_9_REV;if(t===Kd)return r.BYTE;if(t===$d)return r.SHORT;if(t===fs)return r.UNSIGNED_SHORT;if(t===wh)return r.INT;if(t===Fi)return r.UNSIGNED_INT;if(t===Ln)return r.FLOAT;if(t===Rs)return r.HALF_FLOAT;if(t===ep)return r.ALPHA;if(t===tp)return r.RGB;if(t===Un)return r.RGBA;if(t===np)return r.LUMINANCE;if(t===ip)return r.LUMINANCE_ALPHA;if(t===ms)return r.DEPTH_COMPONENT;if(t===Pr)return r.DEPTH_STENCIL;if(t===Rh)return r.RED;if(t===Ch)return r.RED_INTEGER;if(t===rp)return r.RG;if(t===Ih)return r.RG_INTEGER;if(t===Ph)return r.RGBA_INTEGER;if(t===za||t===Ha||t===ka||t===Va)if(s===ht){if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i===null)return null;if(t===za)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===Ha)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===ka)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Va)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(i=e.get("WEBGL_compressed_texture_s3tc"),i===null)return null;if(t===za)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===Ha)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===ka)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Va)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===Jl||t===Kl||t===$l||t===Ql){if(i=e.get("WEBGL_compressed_texture_pvrtc"),i===null)return null;if(t===Jl)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Kl)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===$l)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Ql)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===ec||t===tc||t===nc){if(i=e.get("WEBGL_compressed_texture_etc"),i===null)return null;if(t===ec||t===tc)return s===ht?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(t===nc)return s===ht?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}if(t===ic||t===rc||t===sc||t===ac||t===oc||t===lc||t===cc||t===hc||t===uc||t===dc||t===pc||t===fc||t===mc||t===gc){if(i=e.get("WEBGL_compressed_texture_astc"),i===null)return null;if(t===ic)return s===ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===rc)return s===ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===sc)return s===ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===ac)return s===ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===oc)return s===ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===lc)return s===ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===cc)return s===ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===hc)return s===ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===uc)return s===ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===dc)return s===ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===pc)return s===ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===fc)return s===ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===mc)return s===ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===gc)return s===ht?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Ga||t===vc||t===_c){if(i=e.get("EXT_texture_compression_bptc"),i===null)return null;if(t===Ga)return s===ht?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===vc)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===_c)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===sp||t===xc||t===yc||t===Mc){if(i=e.get("EXT_texture_compression_rgtc"),i===null)return null;if(t===Ga)return i.COMPRESSED_RED_RGTC1_EXT;if(t===xc)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===yc)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===Mc)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===Ir?r.UNSIGNED_INT_24_8:r[t]!==void 0?r[t]:null}}}var Fc=class extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},hn=class extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}},$g={type:"move"},us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let f=t.getJointPose(x,n),g=this._getHandJoint(c,x);f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=f.radius),g.visible=f!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,m=.005;c.inputState.pinching&&u>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($g)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new hn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},zc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new Zt;e.properties.get(i).__webglTexture=t.texture,t.depthNear==n.depthNear&&t.depthFar==n.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new tn({vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new un(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hc=class extends mi{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,m=null,x=new zc,f=t.getContextAttributes(),g=null,v=null,_=[],y=[],R=new ce,T=null,I=new Yt;I.viewport=new _t;let U=new Yt;U.viewport=new _t;let O=[I,U],k=new Fc,X=null,G=null;function q(re){let he=y.indexOf(re.inputSource);if(he===-1)return;let me=_[he];me!==void 0&&(me.update(re.inputSource,re.frame,c||a),me.dispatchEvent({type:re.type,data:re.inputSource}))}function H(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",J);for(let re=0;re<_.length;re++){let he=y[re];he!==null&&(y[re]=null,_[re].disconnect(he))}X=null,G=null,x.reset(),e.setRenderTarget(g),p=null,u=null,d=null,i=null,v=null,Se.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}function J(re){for(let he=0;he<re.removed.length;he++){let me=re.removed[he],ye=y.indexOf(me);ye>=0&&(y[ye]=null,_[ye].disconnect(me))}for(let he=0;he<re.added.length;he++){let me=re.added[he],ye=y.indexOf(me);if(ye===-1){for(let w=0;w<_.length;w++){if(w>=y.length){y.push(me),ye=w;break}if(y[w]===null){y[w]=me,ye=w;break}}if(ye===-1)break}let fe=_[ye];fe&&fe.connect(me)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let he=_[re];return he===void 0&&(he=new us,_[re]=he),he.getTargetRaySpace()},this.getControllerGrip=function(re){let he=_[re];return he===void 0&&(he=new us,_[re]=he),he.getGripSpace()},this.getHand=function(re){let he=_[re];return he===void 0&&(he=new us,_[re]=he),he.getHandSpace()},this.setFramebufferScaleFactor=function(re){s=re,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){o=re,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(re){if(i=re,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",H),i.addEventListener("inputsourceschange",J),f.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(R),i.renderState.layers===void 0){let he={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,he),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Jn(p.framebufferWidth,p.framebufferHeight,{format:Un,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let he=null,me=null,ye=null;f.depth&&(ye=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=f.stencil?Pr:ms,me=f.stencil?Ir:Fi);let fe={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(fe),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Jn(u.textureWidth,u.textureHeight,{format:Un,type:fi,depthTexture:new to(u.textureWidth,u.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Se.setContext(i),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};let Q=new M,le=new M;function oe(re,he){he===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(he.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(i===null)return;let he=re.near,me=re.far;x.texture!==null&&(x.depthNear>0&&(he=x.depthNear),x.depthFar>0&&(me=x.depthFar)),k.near=U.near=I.near=he,k.far=U.far=I.far=me,X===k.near&&G===k.far||(i.updateRenderState({depthNear:k.near,depthFar:k.far}),X=k.near,G=k.far),I.layers.mask=2|re.layers.mask,U.layers.mask=4|re.layers.mask,k.layers.mask=I.layers.mask|U.layers.mask;let ye=re.parent,fe=k.cameras;oe(k,ye);for(let w=0;w<fe.length;w++)oe(fe[w],ye);fe.length===2?(function(w,b,D){Q.setFromMatrixPosition(b.matrixWorld),le.setFromMatrixPosition(D.matrixWorld);let L=Q.distanceTo(le),A=b.projectionMatrix.elements,P=D.projectionMatrix.elements,S=A[14]/(A[10]-1),C=A[14]/(A[10]+1),F=(A[9]+1)/A[5],te=(A[9]-1)/A[5],N=(A[8]-1)/A[0],K=(P[8]+1)/P[0],$=S*N,ne=S*K,V=L/(-N+K),z=V*-N;if(b.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(z),w.translateZ(V),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert(),A[10]===-1)w.projectionMatrix.copy(b.projectionMatrix),w.projectionMatrixInverse.copy(b.projectionMatrixInverse);else{let ae=S+V,Ae=C+V,Ie=$-z,De=ne+(L-z),Me=F*C/Ae*ae,Z=te*C/Ae*ae;w.projectionMatrix.makePerspective(Ie,De,Me,Z,ae,Ae),w.projectionMatrixInverse.copy(w.projectionMatrix).invert()}})(k,I,U):k.projectionMatrix.copy(I.projectionMatrix),(function(w,b,D){D===null?w.matrix.copy(b.matrixWorld):(w.matrix.copy(D.matrixWorld),w.matrix.invert(),w.matrix.multiply(b.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(b.projectionMatrix),w.projectionMatrixInverse.copy(b.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=2*bc*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)})(re,k,ye)},this.getCamera=function(){return k},this.getFoveation=function(){if(u!==null||p!==null)return l},this.setFoveation=function(re){l=re,u!==null&&(u.fixedFoveation=re),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=re)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(k)};let we=null,Se=new cp;Se.setAnimationLoop((function(re,he){if(h=he.getViewerPose(c||a),m=he,h!==null){let me=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ye=!1;me.length!==k.cameras.length&&(k.cameras.length=0,ye=!0);for(let w=0;w<me.length;w++){let b=me[w],D=null;if(p!==null)D=p.getViewport(b);else{let A=d.getViewSubImage(u,b);D=A.viewport,w===0&&(e.setRenderTargetTextures(v,A.colorTexture,u.ignoreDepthValues?void 0:A.depthStencilTexture),e.setRenderTarget(v))}let L=O[w];L===void 0&&(L=new Yt,L.layers.enable(w),L.viewport=new _t,O[w]=L),L.matrix.fromArray(b.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(b.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(D.x,D.y,D.width,D.height),w===0&&(k.matrix.copy(L.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),ye===!0&&k.cameras.push(L)}let fe=i.enabledFeatures;if(fe&&fe.includes("depth-sensing")){let w=d.getDepthInformation(me[0]);w&&w.isValid&&w.texture&&x.init(e,w,i.renderState)}}for(let me=0;me<_.length;me++){let ye=y[me],fe=_[me];ye!==null&&fe!==void 0&&fe.update(ye,he,c||a)}we&&we(re,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),m=null})),this.setAnimationLoop=function(re){we=re},this.dispose=function(){}}},Pi=new Pt,Qg=new Le;function e0(r,e){function t(i,s){i.matrixAutoUpdate===!0&&i.updateMatrix(),s.value.copy(i.matrix)}function n(i,s){i.opacity.value=s.opacity,s.color&&i.diffuse.value.copy(s.color),s.emissive&&i.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(i.map.value=s.map,t(s.map,i.mapTransform)),s.alphaMap&&(i.alphaMap.value=s.alphaMap,t(s.alphaMap,i.alphaMapTransform)),s.bumpMap&&(i.bumpMap.value=s.bumpMap,t(s.bumpMap,i.bumpMapTransform),i.bumpScale.value=s.bumpScale,s.side===1&&(i.bumpScale.value*=-1)),s.normalMap&&(i.normalMap.value=s.normalMap,t(s.normalMap,i.normalMapTransform),i.normalScale.value.copy(s.normalScale),s.side===1&&i.normalScale.value.negate()),s.displacementMap&&(i.displacementMap.value=s.displacementMap,t(s.displacementMap,i.displacementMapTransform),i.displacementScale.value=s.displacementScale,i.displacementBias.value=s.displacementBias),s.emissiveMap&&(i.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,i.emissiveMapTransform)),s.specularMap&&(i.specularMap.value=s.specularMap,t(s.specularMap,i.specularMapTransform)),s.alphaTest>0&&(i.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(i.envMap.value=o,Pi.copy(l),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),i.envMapRotation.value.setFromMatrix4(Qg.makeRotationFromEuler(Pi)),i.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=s.reflectivity,i.ior.value=s.ior,i.refractionRatio.value=s.refractionRatio),s.lightMap&&(i.lightMap.value=s.lightMap,i.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,i.lightMapTransform)),s.aoMap&&(i.aoMap.value=s.aoMap,i.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,i.aoMapTransform))}return{refreshFogUniforms:function(i,s){s.color.getRGB(i.fogColor.value,lp(r)),s.isFog?(i.fogNear.value=s.near,i.fogFar.value=s.far):s.isFogExp2&&(i.fogDensity.value=s.density)},refreshMaterialUniforms:function(i,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(i,s):s.isMeshToonMaterial?(n(i,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(i,s)):s.isMeshPhongMaterial?(n(i,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(i,s)):s.isMeshStandardMaterial?(n(i,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(i,s),s.isMeshPhysicalMaterial&&(function(c,h,d){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===1&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=d.texture,c.transmissionSamplerSize.value.set(d.width,d.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(i,s,l)):s.isMeshMatcapMaterial?(n(i,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(i,s)):s.isMeshDepthMaterial?n(i,s):s.isMeshDistanceMaterial?(n(i,s),(function(c,h){let d=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(d.matrixWorld),c.nearDistance.value=d.shadow.camera.near,c.farDistance.value=d.shadow.camera.far})(i,s)):s.isMeshNormalMaterial?n(i,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(i,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(i,s)):s.isPointsMaterial?(function(c,h,d,u){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*d,c.scale.value=.5*u,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(i,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(i,s):s.isShadowMaterial?(i.color.value.copy(s.color),i.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function t0(r,e,t,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(d,u,p,m){let x=d.value,f=u+"_"+p;if(m[f]===void 0)return m[f]=typeof x=="number"||typeof x=="boolean"?x:x.clone(),!0;{let g=m[f];if(typeof x=="number"||typeof x=="boolean"){if(g!==x)return m[f]=x,!0}else if(g.equals(x)===!1)return g.copy(x),!0}return!1}function c(d){let u={boundary:0,storage:0};return typeof d=="number"||typeof d=="boolean"?(u.boundary=4,u.storage=4):d.isVector2?(u.boundary=8,u.storage=8):d.isVector3||d.isColor?(u.boundary=16,u.storage=12):d.isVector4?(u.boundary=16,u.storage=16):d.isMatrix3?(u.boundary=48,u.storage=48):d.isMatrix4?(u.boundary=64,u.storage=64):d.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",d),u}function h(d){let u=d.target;u.removeEventListener("dispose",h);let p=a.indexOf(u.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(i[u.id]),delete i[u.id],delete s[u.id]}return{bind:function(d,u){let p=u.program;n.uniformBlockBinding(d,p)},update:function(d,u){let p=i[d.id];p===void 0&&((function(f){let g=f.uniforms,v=0,_=16;for(let R=0,T=g.length;R<T;R++){let I=Array.isArray(g[R])?g[R]:[g[R]];for(let U=0,O=I.length;U<O;U++){let k=I[U],X=Array.isArray(k.value)?k.value:[k.value];for(let G=0,q=X.length;G<q;G++){let H=c(X[G]),J=v%_,Q=J%H.boundary,le=J+Q;v+=Q,le!==0&&_-le<H.storage&&(v+=_-le),k.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=H.storage}}}let y=v%_;y>0&&(v+=_-y),f.__size=v,f.__cache={}})(d),p=(function(f){let g=(function(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();f.__bindingPointIndex=g;let v=r.createBuffer(),_=f.__size,y=f.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,_,y),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,g,v),v})(d),i[d.id]=p,d.addEventListener("dispose",h));let m=u.program;n.updateUBOMapping(d,m);let x=e.render.frame;s[d.id]!==x&&((function(f){let g=i[f.id],v=f.uniforms,_=f.__cache;r.bindBuffer(r.UNIFORM_BUFFER,g);for(let y=0,R=v.length;y<R;y++){let T=Array.isArray(v[y])?v[y]:[v[y]];for(let I=0,U=T.length;I<U;I++){let O=T[I];if(l(O,y,I,_)===!0){let k=O.__offset,X=Array.isArray(O.value)?O.value:[O.value],G=0;for(let q=0;q<X.length;q++){let H=X[q],J=c(H);typeof H=="number"||typeof H=="boolean"?(O.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,k+G,O.__data)):H.isMatrix3?(O.__data[0]=H.elements[0],O.__data[1]=H.elements[1],O.__data[2]=H.elements[2],O.__data[3]=0,O.__data[4]=H.elements[3],O.__data[5]=H.elements[4],O.__data[6]=H.elements[5],O.__data[7]=0,O.__data[8]=H.elements[6],O.__data[9]=H.elements[7],O.__data[10]=H.elements[8],O.__data[11]=0):(H.toArray(O.__data,G),G+=J.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,k,O.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)})(d),s[d.id]=x)},dispose:function(){for(let d in i)r.deleteBuffer(i[d]);a=[],i={},s={}}}}var no=class{constructor(e={}){let{canvas:t=um(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e,p;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let m=new Uint32Array(4),x=new Int32Array(4),f=null,g=null,v=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dt,this.toneMapping=0,this.toneMappingExposure=1;let y=this,R=!1,T=0,I=0,U=null,O=-1,k=null,X=new _t,G=new _t,q=null,H=new ve(0),J=0,Q=t.width,le=t.height,oe=1,we=null,Se=null,re=new _t(0,0,Q,le),he=new _t(0,0,Q,le),me=!1,ye=new Nr,fe=!1,w=!1,b=new Le,D=new Le,L=new M,A=new _t,P={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},S=!1;function C(){return U===null?oe:1}let F,te,N,K,$,ne,V,z,ae,Ae,Ie,De,Me,Z,ue,ge,se,ee,xe,Ke,nt,qe,Be,st,B=n;function at(E,W){return t.getContext(E,W)}try{let E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",Ft,!1),t.addEventListener("webglcontextrestored",He,!1),t.addEventListener("webglcontextcreationerror",it,!1),B===null){let W="webgl2";if(B=at(W,E),B===null)throw at(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}function $e(){F=new Om(B),F.init(),qe=new Kg(B,F),te=new Lm(B,F,e,qe),N=new Zg(B,F),te.reverseDepthBuffer&&u&&N.buffers.depth.setReversed(!0),K=new zm(B),$=new zg,ne=new Jg(B,F,N,$,te,qe,K),V=new Dm(y),z=new Nm(y),ae=new Am(B),Be=new Im(B,ae),Ae=new Bm(B,ae,K,Be),Ie=new km(B,Ae,ae,K),xe=new Hm(B,te,ne),ge=new Um($),De=new Fg(y,V,z,F,te,Be,ge),Me=new e0(y,$),Z=new kg,ue=new jg(F),ee=new Cm(y,V,z,N,Ie,p,l),se=new qg(y,Ie,te),st=new t0(B,K,te,N),Ke=new Pm(B,F,K),nt=new Fm(B,F,K),K.programs=De.programs,y.capabilities=te,y.extensions=F,y.properties=$,y.renderLists=Z,y.shadowMap=se,y.state=N,y.info=K}$e();let Fe=new Hc(y,B);function Ft(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function He(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let E=K.autoReset,W=se.enabled,Y=se.autoUpdate,ie=se.needsUpdate,j=se.type;$e(),K.autoReset=E,se.enabled=W,se.autoUpdate=Y,se.needsUpdate=ie,se.type=j}function it(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function lt(E){let W=E.target;W.removeEventListener("dispose",lt),(function(Y){(function(ie){let j=$.get(ie).programs;j!==void 0&&(j.forEach((function(de){De.releaseProgram(de)})),ie.isShaderMaterial&&De.releaseShaderCache(ie))})(Y),$.remove(Y)})(W)}function ot(E,W,Y){E.transparent===!0&&E.side===2&&E.forceSinglePass===!1?(E.side=1,E.needsUpdate=!0,na(E,W,Y),E.side=0,E.needsUpdate=!0,na(E,W,Y),E.side=2):na(E,W,Y)}this.xr=Fe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let E=F.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=F.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(E){E!==void 0&&(oe=E,this.setSize(Q,le,!1))},this.getSize=function(E){return E.set(Q,le)},this.setSize=function(E,W,Y=!0){Fe.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(Q=E,le=W,t.width=Math.floor(E*oe),t.height=Math.floor(W*oe),Y===!0&&(t.style.width=E+"px",t.style.height=W+"px"),this.setViewport(0,0,E,W))},this.getDrawingBufferSize=function(E){return E.set(Q*oe,le*oe).floor()},this.setDrawingBufferSize=function(E,W,Y){Q=E,le=W,oe=Y,t.width=Math.floor(E*Y),t.height=Math.floor(W*Y),this.setViewport(0,0,E,W)},this.getCurrentViewport=function(E){return E.copy(X)},this.getViewport=function(E){return E.copy(re)},this.setViewport=function(E,W,Y,ie){E.isVector4?re.set(E.x,E.y,E.z,E.w):re.set(E,W,Y,ie),N.viewport(X.copy(re).multiplyScalar(oe).round())},this.getScissor=function(E){return E.copy(he)},this.setScissor=function(E,W,Y,ie){E.isVector4?he.set(E.x,E.y,E.z,E.w):he.set(E,W,Y,ie),N.scissor(G.copy(he).multiplyScalar(oe).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(E){N.setScissorTest(me=E)},this.setOpaqueSort=function(E){we=E},this.setTransparentSort=function(E){Se=E},this.getClearColor=function(E){return E.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(E=!0,W=!0,Y=!0){let ie=0;if(E){let j=!1;if(U!==null){let de=U.texture.format;j=de===Ph||de===Ih||de===Ch}if(j){let de=U.texture.type,be=de===fi||de===Fi||de===fs||de===Ir||de===Th||de===Ah,Ce=ee.getClearColor(),Ue=ee.getClearAlpha(),ke=Ce.r,Ge=Ce.g,Ne=Ce.b;be?(m[0]=ke,m[1]=Ge,m[2]=Ne,m[3]=Ue,B.clearBufferuiv(B.COLOR,0,m)):(x[0]=ke,x[1]=Ge,x[2]=Ne,x[3]=Ue,B.clearBufferiv(B.COLOR,0,x))}else ie|=B.COLOR_BUFFER_BIT}W&&(ie|=B.DEPTH_BUFFER_BIT),Y&&(ie|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ft,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",it,!1),Z.dispose(),ue.dispose(),$.dispose(),V.dispose(),z.dispose(),Ie.dispose(),Be.dispose(),st.dispose(),De.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",zt),Fe.removeEventListener("sessionend",fn),Ht.stop()},this.renderBufferDirect=function(E,W,Y,ie,j,de){W===null&&(W=P);let be=j.isMesh&&j.matrixWorld.determinant()<0,Ce=(function(Je,Xt,Lt,Xe,ze){Xt.isScene!==!0&&(Xt=P),ne.resetTextureUnits();let mn=Xt.fog,nl=Xe.isMeshStandardMaterial?Xt.environment:null,Jr=U===null?y.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Hr,rr=(Xe.isMeshStandardMaterial?z:V).get(Xe.envMap||nl),il=Xe.vertexColors===!0&&!!Lt.attributes.color&&Lt.attributes.color.itemSize===4,rl=!!Lt.attributes.tangent&&(!!Xe.normalMap||Xe.anisotropy>0),sl=!!Lt.morphAttributes.position,si=!!Lt.morphAttributes.normal,Rf=!!Lt.morphAttributes.color,Cu=0;Xe.toneMapped&&(U!==null&&U.isXRRenderTarget!==!0||(Cu=y.toneMapping));let Iu=Lt.morphAttributes.position||Lt.morphAttributes.normal||Lt.morphAttributes.color,Cf=Iu!==void 0?Iu.length:0,Ze=$.get(Xe),If=g.state.lights;if(fe===!0&&(w===!0||Je!==k)){let ln=Je===k&&Xe.id===O;ge.setState(Xe,Je,ln)}let gn=!1;Xe.version===Ze.__version?Ze.needsLights&&Ze.lightsStateVersion!==If.state.version||Ze.outputColorSpace!==Jr||ze.isBatchedMesh&&Ze.batching===!1?gn=!0:ze.isBatchedMesh||Ze.batching!==!0?ze.isBatchedMesh&&Ze.batchingColor===!0&&ze.colorTexture===null||ze.isBatchedMesh&&Ze.batchingColor===!1&&ze.colorTexture!==null||ze.isInstancedMesh&&Ze.instancing===!1?gn=!0:ze.isInstancedMesh||Ze.instancing!==!0?ze.isSkinnedMesh&&Ze.skinning===!1?gn=!0:ze.isSkinnedMesh||Ze.skinning!==!0?ze.isInstancedMesh&&Ze.instancingColor===!0&&ze.instanceColor===null||ze.isInstancedMesh&&Ze.instancingColor===!1&&ze.instanceColor!==null||ze.isInstancedMesh&&Ze.instancingMorph===!0&&ze.morphTexture===null||ze.isInstancedMesh&&Ze.instancingMorph===!1&&ze.morphTexture!==null||Ze.envMap!==rr||Xe.fog===!0&&Ze.fog!==mn?gn=!0:Ze.numClippingPlanes===void 0||Ze.numClippingPlanes===ge.numPlanes&&Ze.numIntersection===ge.numIntersection?(Ze.vertexAlphas!==il||Ze.vertexTangents!==rl||Ze.morphTargets!==sl||Ze.morphNormals!==si||Ze.morphColors!==Rf||Ze.toneMapping!==Cu||Ze.morphTargetsCount!==Cf)&&(gn=!0):gn=!0:gn=!0:gn=!0:gn=!0:(gn=!0,Ze.__version=Xe.version);let bi=Ze.currentProgram;gn===!0&&(bi=na(Xe,Xt,ze));let Pu=!1,Kr=!1,al=!1,St=bi.getUniforms(),ai=Ze.uniforms;if(N.useProgram(bi.program)&&(Pu=!0,Kr=!0,al=!0),Xe.id!==O&&(O=Xe.id,Kr=!0),Pu||k!==Je){N.buffers.depth.getReversed()?(b.copy(Je.projectionMatrix),(function(wi){let gt=wi.elements;gt[2]=.5*gt[2]+.5*gt[3],gt[6]=.5*gt[6]+.5*gt[7],gt[10]=.5*gt[10]+.5*gt[11],gt[14]=.5*gt[14]+.5*gt[15]})(b),(function(wi){let gt=wi.elements;gt[11]===-1?(gt[10]=-gt[10]-1,gt[14]=-gt[14]):(gt[10]=-gt[10],gt[14]=1-gt[14])})(b),St.setValue(B,"projectionMatrix",b)):St.setValue(B,"projectionMatrix",Je.projectionMatrix),St.setValue(B,"viewMatrix",Je.matrixWorldInverse);let ln=St.map.cameraPosition;ln!==void 0&&ln.setValue(B,L.setFromMatrixPosition(Je.matrixWorld)),te.logarithmicDepthBuffer&&St.setValue(B,"logDepthBufFC",2/(Math.log(Je.far+1)/Math.LN2)),(Xe.isMeshPhongMaterial||Xe.isMeshToonMaterial||Xe.isMeshLambertMaterial||Xe.isMeshBasicMaterial||Xe.isMeshStandardMaterial||Xe.isShaderMaterial)&&St.setValue(B,"isOrthographic",Je.isOrthographicCamera===!0),k!==Je&&(k=Je,Kr=!0,al=!0)}if(ze.isSkinnedMesh){St.setOptional(B,ze,"bindMatrix"),St.setOptional(B,ze,"bindMatrixInverse");let ln=ze.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),St.setValue(B,"boneTexture",ln.boneTexture,ne))}ze.isBatchedMesh&&(St.setOptional(B,ze,"batchingTexture"),St.setValue(B,"batchingTexture",ze._matricesTexture,ne),St.setOptional(B,ze,"batchingIdTexture"),St.setValue(B,"batchingIdTexture",ze._indirectTexture,ne),St.setOptional(B,ze,"batchingColorTexture"),ze._colorsTexture!==null&&St.setValue(B,"batchingColorTexture",ze._colorsTexture,ne));let ol=Lt.morphAttributes;ol.position===void 0&&ol.normal===void 0&&ol.color===void 0||xe.update(ze,Lt,bi),(Kr||Ze.receiveShadow!==ze.receiveShadow)&&(Ze.receiveShadow=ze.receiveShadow,St.setValue(B,"receiveShadow",ze.receiveShadow)),Xe.isMeshGouraudMaterial&&Xe.envMap!==null&&(ai.envMap.value=rr,ai.flipEnvMap.value=rr.isCubeTexture&&rr.isRenderTargetTexture===!1?-1:1),Xe.isMeshStandardMaterial&&Xe.envMap===null&&Xt.environment!==null&&(ai.envMapIntensity.value=Xt.environmentIntensity),Kr&&(St.setValue(B,"toneMappingExposure",y.toneMappingExposure),Ze.needsLights&&(vn=al,(Cn=ai).ambientLightColor.needsUpdate=vn,Cn.lightProbe.needsUpdate=vn,Cn.directionalLights.needsUpdate=vn,Cn.directionalLightShadows.needsUpdate=vn,Cn.pointLights.needsUpdate=vn,Cn.pointLightShadows.needsUpdate=vn,Cn.spotLights.needsUpdate=vn,Cn.spotLightShadows.needsUpdate=vn,Cn.rectAreaLights.needsUpdate=vn,Cn.hemisphereLights.needsUpdate=vn),mn&&Xe.fog===!0&&Me.refreshFogUniforms(ai,mn),Me.refreshMaterialUniforms(ai,Xe,oe,le,g.state.transmissionRenderTarget[Je.id]),Ar.upload(B,Au(Ze),ai,ne));var Cn,vn;if(Xe.isShaderMaterial&&Xe.uniformsNeedUpdate===!0&&(Ar.upload(B,Au(Ze),ai,ne),Xe.uniformsNeedUpdate=!1),Xe.isSpriteMaterial&&St.setValue(B,"center",ze.center),St.setValue(B,"modelViewMatrix",ze.modelViewMatrix),St.setValue(B,"normalMatrix",ze.normalMatrix),St.setValue(B,"modelMatrix",ze.matrixWorld),Xe.isShaderMaterial||Xe.isRawShaderMaterial){let ln=Xe.uniformsGroups;for(let wi=0,gt=ln.length;wi<gt;wi++){let Lu=ln[wi];st.update(Lu,bi),st.bind(Lu,bi)}}return bi})(E,W,Y,ie,j);N.setMaterial(ie,be);let Ue=Y.index,ke=1;if(ie.wireframe===!0){if(Ue=Ae.getWireframeAttribute(Y),Ue===void 0)return;ke=2}let Ge=Y.drawRange,Ne=Y.attributes.position,Ye=Ge.start*ke,Mt=(Ge.start+Ge.count)*ke;de!==null&&(Ye=Math.max(Ye,de.start*ke),Mt=Math.min(Mt,(de.start+de.count)*ke)),Ue!==null?(Ye=Math.max(Ye,0),Mt=Math.min(Mt,Ue.count)):Ne!=null&&(Ye=Math.max(Ye,0),Mt=Math.min(Mt,Ne.count));let pt=Mt-Ye;if(pt<0||pt===1/0)return;let wt;Be.setup(j,ie,Ce,Y,Ue);let ft=Ke;if(Ue!==null&&(wt=ae.get(Ue),ft=nt,ft.setIndex(wt)),j.isMesh)ie.wireframe===!0?(N.setLineWidth(ie.wireframeLinewidth*C()),ft.setMode(B.LINES)):ft.setMode(B.TRIANGLES);else if(j.isLine){let Je=ie.linewidth;Je===void 0&&(Je=1),N.setLineWidth(Je*C()),j.isLineSegments?ft.setMode(B.LINES):j.isLineLoop?ft.setMode(B.LINE_LOOP):ft.setMode(B.LINE_STRIP)}else j.isPoints?ft.setMode(B.POINTS):j.isSprite&&ft.setMode(B.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)ft.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(F.get("WEBGL_multi_draw"))ft.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let Je=j._multiDrawStarts,Xt=j._multiDrawCounts,Lt=j._multiDrawCount,Xe=Ue?ae.get(Ue).bytesPerElement:1,ze=$.get(ie).currentProgram.getUniforms();for(let mn=0;mn<Lt;mn++)ze.setValue(B,"_gl_DrawID",mn),ft.render(Je[mn]/Xe,Xt[mn])}else if(j.isInstancedMesh)ft.renderInstances(Ye,pt,j.count);else if(Y.isInstancedBufferGeometry){let Je=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Xt=Math.min(Y.instanceCount,Je);ft.renderInstances(Ye,pt,Xt)}else ft.render(Ye,pt)},this.compile=function(E,W,Y=null){Y===null&&(Y=E),g=ue.get(Y),g.init(W),_.push(g),Y.traverseVisible((function(j){j.isLight&&j.layers.test(W.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))})),E!==Y&&E.traverseVisible((function(j){j.isLight&&j.layers.test(W.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))})),g.setupLights();let ie=new Set;return E.traverse((function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let de=j.material;if(de)if(Array.isArray(de))for(let be=0;be<de.length;be++){let Ce=de[be];ot(Ce,Y,j),ie.add(Ce)}else ot(de,Y,j),ie.add(de)})),_.pop(),g=null,ie},this.compileAsync=function(E,W,Y=null){let ie=this.compile(E,W,Y);return new Promise((j=>{function de(){ie.forEach((function(be){$.get(be).currentProgram.isReady()&&ie.delete(be)})),ie.size!==0?setTimeout(de,10):j(E)}F.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)}))};let ct=null;function zt(){Ht.stop()}function fn(){Ht.start()}let Ht=new cp;function on(E,W,Y,ie){if(E.visible===!1)return;if(E.layers.test(W.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(W);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ye.intersectsSprite(E)){ie&&A.setFromMatrixPosition(E.matrixWorld).applyMatrix4(D);let de=Ie.update(E),be=E.material;be.visible&&f.push(E,de,be,Y,A.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ye.intersectsObject(E))){let de=Ie.update(E),be=E.material;if(ie&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),A.copy(E.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),A.copy(de.boundingSphere.center)),A.applyMatrix4(E.matrixWorld).applyMatrix4(D)),Array.isArray(be)){let Ce=de.groups;for(let Ue=0,ke=Ce.length;Ue<ke;Ue++){let Ge=Ce[Ue],Ne=be[Ge.materialIndex];Ne&&Ne.visible&&f.push(E,de,Ne,Y,A.z,Ge)}}else be.visible&&f.push(E,de,be,Y,A.z,null)}}let j=E.children;for(let de=0,be=j.length;de<be;de++)on(j[de],W,Y,ie)}function bu(E,W,Y,ie){let j=E.opaque,de=E.transmissive,be=E.transparent;g.setupLightsView(Y),fe===!0&&ge.setGlobalState(y.clippingPlanes,Y),ie&&N.viewport(X.copy(ie)),j.length>0&&ta(j,W,Y),de.length>0&&ta(de,W,Y),be.length>0&&ta(be,W,Y),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function wu(E,W,Y,ie){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ie.id]===void 0&&(g.state.transmissionRenderTarget[ie.id]=new Jn(1,1,{generateMipmaps:!0,type:F.has("EXT_color_buffer_half_float")||F.has("EXT_color_buffer_float")?Rs:fi,minFilter:br,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));let j=g.state.transmissionRenderTarget[ie.id],de=ie.viewport||X;j.setSize(de.z,de.w);let be=y.getRenderTarget();y.setRenderTarget(j),y.getClearColor(H),J=y.getClearAlpha(),J<1&&y.setClearColor(16777215,.5),y.clear(),S&&ee.render(Y);let Ce=y.toneMapping;y.toneMapping=0;let Ue=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),g.setupLightsView(ie),fe===!0&&ge.setGlobalState(y.clippingPlanes,ie),ta(E,Y,ie),ne.updateMultisampleRenderTarget(j),ne.updateRenderTargetMipmap(j),F.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Ge=0,Ne=W.length;Ge<Ne;Ge++){let Ye=W[Ge],Mt=Ye.object,pt=Ye.geometry,wt=Ye.material,ft=Ye.group;if(wt.side===2&&Mt.layers.test(ie.layers)){let Je=wt.side;wt.side=1,wt.needsUpdate=!0,Tu(Mt,Y,ie,pt,wt,ft),wt.side=Je,wt.needsUpdate=!0,ke=!0}}ke===!0&&(ne.updateMultisampleRenderTarget(j),ne.updateRenderTargetMipmap(j))}y.setRenderTarget(be),y.setClearColor(H,J),Ue!==void 0&&(ie.viewport=Ue),y.toneMapping=Ce}function ta(E,W,Y){let ie=W.isScene===!0?W.overrideMaterial:null;for(let j=0,de=E.length;j<de;j++){let be=E[j],Ce=be.object,Ue=be.geometry,ke=ie===null?be.material:ie,Ge=be.group;Ce.layers.test(Y.layers)&&Tu(Ce,W,Y,Ue,ke,Ge)}}function Tu(E,W,Y,ie,j,de){E.onBeforeRender(y,W,Y,ie,j,de),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),j.onBeforeRender(y,W,Y,ie,E,de),j.transparent===!0&&j.side===2&&j.forceSinglePass===!1?(j.side=1,j.needsUpdate=!0,y.renderBufferDirect(Y,W,ie,j,E,de),j.side=0,j.needsUpdate=!0,y.renderBufferDirect(Y,W,ie,j,E,de),j.side=2):y.renderBufferDirect(Y,W,ie,j,E,de),E.onAfterRender(y,W,Y,ie,j,de)}function na(E,W,Y){W.isScene!==!0&&(W=P);let ie=$.get(E),j=g.state.lights,de=g.state.shadowsArray,be=j.state.version,Ce=De.getParameters(E,j.state,de,W,Y),Ue=De.getProgramCacheKey(Ce),ke=ie.programs;ie.environment=E.isMeshStandardMaterial?W.environment:null,ie.fog=W.fog,ie.envMap=(E.isMeshStandardMaterial?z:V).get(E.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&E.envMap===null?W.environmentRotation:E.envMapRotation,ke===void 0&&(E.addEventListener("dispose",lt),ke=new Map,ie.programs=ke);let Ge=ke.get(Ue);if(Ge!==void 0){if(ie.currentProgram===Ge&&ie.lightsStateVersion===be)return Ru(E,Ce),Ge}else Ce.uniforms=De.getUniforms(E),E.onBeforeCompile(Ce,y),Ge=De.acquireProgram(Ce,Ue),ke.set(Ue,Ge),ie.uniforms=Ce.uniforms;let Ne=ie.uniforms;return(E.isShaderMaterial||E.isRawShaderMaterial)&&E.clipping!==!0||(Ne.clippingPlanes=ge.uniform),Ru(E,Ce),ie.needsLights=(function(Ye){return Ye.isMeshLambertMaterial||Ye.isMeshToonMaterial||Ye.isMeshPhongMaterial||Ye.isMeshStandardMaterial||Ye.isShadowMaterial||Ye.isShaderMaterial&&Ye.lights===!0})(E),ie.lightsStateVersion=be,ie.needsLights&&(Ne.ambientLightColor.value=j.state.ambient,Ne.lightProbe.value=j.state.probe,Ne.directionalLights.value=j.state.directional,Ne.directionalLightShadows.value=j.state.directionalShadow,Ne.spotLights.value=j.state.spot,Ne.spotLightShadows.value=j.state.spotShadow,Ne.rectAreaLights.value=j.state.rectArea,Ne.ltc_1.value=j.state.rectAreaLTC1,Ne.ltc_2.value=j.state.rectAreaLTC2,Ne.pointLights.value=j.state.point,Ne.pointLightShadows.value=j.state.pointShadow,Ne.hemisphereLights.value=j.state.hemi,Ne.directionalShadowMap.value=j.state.directionalShadowMap,Ne.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ne.spotShadowMap.value=j.state.spotShadowMap,Ne.spotLightMatrix.value=j.state.spotLightMatrix,Ne.spotLightMap.value=j.state.spotLightMap,Ne.pointShadowMap.value=j.state.pointShadowMap,Ne.pointShadowMatrix.value=j.state.pointShadowMatrix),ie.currentProgram=Ge,ie.uniformsList=null,Ge}function Au(E){if(E.uniformsList===null){let W=E.currentProgram.getUniforms();E.uniformsList=Ar.seqWithValue(W.seq,E.uniforms)}return E.uniformsList}function Ru(E,W){let Y=$.get(E);Y.outputColorSpace=W.outputColorSpace,Y.batching=W.batching,Y.batchingColor=W.batchingColor,Y.instancing=W.instancing,Y.instancingColor=W.instancingColor,Y.instancingMorph=W.instancingMorph,Y.skinning=W.skinning,Y.morphTargets=W.morphTargets,Y.morphNormals=W.morphNormals,Y.morphColors=W.morphColors,Y.morphTargetsCount=W.morphTargetsCount,Y.numClippingPlanes=W.numClippingPlanes,Y.numIntersection=W.numClipIntersection,Y.vertexAlphas=W.vertexAlphas,Y.vertexTangents=W.vertexTangents,Y.toneMapping=W.toneMapping}Ht.setAnimationLoop((function(E){ct&&ct(E)})),typeof self<"u"&&Ht.setContext(self),this.setAnimationLoop=function(E){ct=E,Fe.setAnimationLoop(E),E===null?Ht.stop():Ht.start()},Fe.addEventListener("sessionstart",zt),Fe.addEventListener("sessionend",fn),this.render=function(E,W){if(W!==void 0&&W.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(R===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(W),W=Fe.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,W,U),g=ue.get(E,_.length),g.init(W),_.push(g),D.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ye.setFromProjectionMatrix(D),w=this.localClippingEnabled,fe=ge.init(this.clippingPlanes,w),f=Z.get(E,v.length),f.init(),v.push(f),Fe.enabled===!0&&Fe.isPresenting===!0){let de=y.xr.getDepthSensingMesh();de!==null&&on(de,W,-1/0,y.sortObjects)}on(E,W,0,y.sortObjects),f.finish(),y.sortObjects===!0&&f.sort(we,Se),S=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,S&&ee.addToRenderList(f,E),this.info.render.frame++,fe===!0&&ge.beginShadows();let Y=g.state.shadowsArray;se.render(Y,E,W),fe===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();let ie=f.opaque,j=f.transmissive;if(g.setupLights(),W.isArrayCamera){let de=W.cameras;if(j.length>0)for(let be=0,Ce=de.length;be<Ce;be++)wu(ie,j,E,de[be]);S&&ee.render(E);for(let be=0,Ce=de.length;be<Ce;be++){let Ue=de[be];bu(f,E,Ue,Ue.viewport)}}else j.length>0&&wu(ie,j,E,W),S&&ee.render(E),bu(f,E,W);U!==null&&(ne.updateMultisampleRenderTarget(U),ne.updateRenderTargetMipmap(U)),E.isScene===!0&&E.onAfterRender(y,E,W),Be.resetDefaultState(),O=-1,k=null,_.pop(),_.length>0?(g=_[_.length-1],fe===!0&&ge.setGlobalState(y.clippingPlanes,g.state.camera)):g=null,v.pop(),f=v.length>0?v[v.length-1]:null},this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(E,W,Y){$.get(E.texture).__webglTexture=W,$.get(E.depthTexture).__webglTexture=Y;let ie=$.get(E);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=Y===void 0,ie.__autoAllocateDepthBuffer||F.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,W){let Y=$.get(E);Y.__webglFramebuffer=W,Y.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(E,W=0,Y=0){U=E,T=W,I=Y;let ie=!0,j=null,de=!1,be=!1;if(E){let Ce=$.get(E);if(Ce.__useDefaultFramebuffer!==void 0)N.bindFramebuffer(B.FRAMEBUFFER,null),ie=!1;else if(Ce.__webglFramebuffer===void 0)ne.setupRenderTarget(E);else if(Ce.__hasExternalTextures)ne.rebindTextures(E,$.get(E.texture).__webglTexture,$.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ge=E.depthTexture;if(Ce.__boundDepthTexture!==Ge){if(Ge!==null&&$.has(Ge)&&(E.width!==Ge.image.width||E.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(E)}}let Ue=E.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(be=!0);let ke=$.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(j=Array.isArray(ke[W])?ke[W][Y]:ke[W],de=!0):j=E.samples>0&&ne.useMultisampledRTT(E)===!1?$.get(E).__webglMultisampledFramebuffer:Array.isArray(ke)?ke[Y]:ke,X.copy(E.viewport),G.copy(E.scissor),q=E.scissorTest}else X.copy(re).multiplyScalar(oe).floor(),G.copy(he).multiplyScalar(oe).floor(),q=me;if(N.bindFramebuffer(B.FRAMEBUFFER,j)&&ie&&N.drawBuffers(E,j),N.viewport(X),N.scissor(G),N.setScissorTest(q),de){let Ce=$.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ce.__webglTexture,Y)}else if(be){let Ce=$.get(E.texture),Ue=W||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ce.__webglTexture,Y||0,Ue)}O=-1},this.readRenderTargetPixels=function(E,W,Y,ie,j,de,be){if(!E||!E.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=$.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce){N.bindFramebuffer(B.FRAMEBUFFER,Ce);try{let Ue=E.texture,ke=Ue.format,Ge=Ue.type;if(!te.textureFormatReadable(ke))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Ge))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");W>=0&&W<=E.width-ie&&Y>=0&&Y<=E.height-j&&B.readPixels(W,Y,ie,j,qe.convert(ke),qe.convert(Ge),de)}finally{let Ue=U!==null?$.get(U).__webglFramebuffer:null;N.bindFramebuffer(B.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(E,W,Y,ie,j,de,be){if(!E||!E.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=$.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce){let Ue=E.texture,ke=Ue.format,Ge=Ue.type;if(!te.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=E.width-ie&&Y>=0&&Y<=E.height-j){N.bindFramebuffer(B.FRAMEBUFFER,Ce);let Ne=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ne),B.bufferData(B.PIXEL_PACK_BUFFER,de.byteLength,B.STREAM_READ),B.readPixels(W,Y,ie,j,qe.convert(ke),qe.convert(Ge),0);let Ye=U!==null?$.get(U).__webglFramebuffer:null;N.bindFramebuffer(B.FRAMEBUFFER,Ye);let Mt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await(function(pt,wt,ft){return new Promise((function(Je,Xt){setTimeout((function Lt(){switch(pt.clientWaitSync(wt,pt.SYNC_FLUSH_COMMANDS_BIT,0)){case pt.WAIT_FAILED:Xt();break;case pt.TIMEOUT_EXPIRED:setTimeout(Lt,ft);break;default:Je()}}),ft)}))})(B,Mt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ne),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,de),B.deleteBuffer(Ne),B.deleteSync(Mt),de}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,W=null,Y=0){E.isTexture!==!0&&(hs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1]);let ie=Math.pow(2,-Y),j=Math.floor(E.image.width*ie),de=Math.floor(E.image.height*ie),be=W!==null?W.x:0,Ce=W!==null?W.y:0;ne.setTexture2D(E,0),B.copyTexSubImage2D(B.TEXTURE_2D,Y,0,0,be,Ce,j,de),N.unbindTexture()},this.copyTextureToTexture=function(E,W,Y=null,ie=null,j=0){let de,be,Ce,Ue,ke,Ge,Ne,Ye,Mt;E.isTexture!==!0&&(hs("WebGLRenderer: copyTextureToTexture function signature has changed."),ie=arguments[0]||null,E=arguments[1],W=arguments[2],j=arguments[3]||0,Y=null);let pt=E.isCompressedTexture?E.mipmaps[j]:E.image;Y!==null?(de=Y.max.x-Y.min.x,be=Y.max.y-Y.min.y,Ce=Y.isBox3?Y.max.z-Y.min.z:1,Ue=Y.min.x,ke=Y.min.y,Ge=Y.isBox3?Y.min.z:0):(de=pt.width,be=pt.height,Ce=pt.depth||1,Ue=0,ke=0,Ge=0),ie!==null?(Ne=ie.x,Ye=ie.y,Mt=ie.z):(Ne=0,Ye=0,Mt=0);let wt=qe.convert(W.format),ft=qe.convert(W.type),Je;W.isData3DTexture?(ne.setTexture3D(W,0),Je=B.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(ne.setTexture2DArray(W,0),Je=B.TEXTURE_2D_ARRAY):(ne.setTexture2D(W,0),Je=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);let Xt=B.getParameter(B.UNPACK_ROW_LENGTH),Lt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Xe=B.getParameter(B.UNPACK_SKIP_PIXELS),ze=B.getParameter(B.UNPACK_SKIP_ROWS),mn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,pt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,pt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ue),B.pixelStorei(B.UNPACK_SKIP_ROWS,ke),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ge);let nl=E.isDataArrayTexture||E.isData3DTexture,Jr=W.isDataArrayTexture||W.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let rr=$.get(E),il=$.get(W),rl=$.get(rr.__renderTarget),sl=$.get(il.__renderTarget);N.bindFramebuffer(B.READ_FRAMEBUFFER,rl.__webglFramebuffer),N.bindFramebuffer(B.DRAW_FRAMEBUFFER,sl.__webglFramebuffer);for(let si=0;si<Ce;si++)nl&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,$.get(E).__webglTexture,j,Ge+si),E.isDepthTexture?(Jr&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,$.get(W).__webglTexture,j,Mt+si),B.blitFramebuffer(Ue,ke,de,be,Ne,Ye,de,be,B.DEPTH_BUFFER_BIT,B.NEAREST)):Jr?B.copyTexSubImage3D(Je,j,Ne,Ye,Mt+si,Ue,ke,de,be):B.copyTexSubImage2D(Je,j,Ne,Ye,Mt+si,Ue,ke,de,be);N.bindFramebuffer(B.READ_FRAMEBUFFER,null),N.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Jr?E.isDataTexture||E.isData3DTexture?B.texSubImage3D(Je,j,Ne,Ye,Mt,de,be,Ce,wt,ft,pt.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(Je,j,Ne,Ye,Mt,de,be,Ce,wt,pt.data):B.texSubImage3D(Je,j,Ne,Ye,Mt,de,be,Ce,wt,ft,pt):E.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,j,Ne,Ye,de,be,wt,ft,pt.data):E.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,j,Ne,Ye,pt.width,pt.height,wt,pt.data):B.texSubImage2D(B.TEXTURE_2D,j,Ne,Ye,de,be,wt,ft,pt);B.pixelStorei(B.UNPACK_ROW_LENGTH,Xt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Lt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Xe),B.pixelStorei(B.UNPACK_SKIP_ROWS,ze),B.pixelStorei(B.UNPACK_SKIP_IMAGES,mn),j===0&&W.generateMipmaps&&B.generateMipmap(Je),N.unbindTexture()},this.copyTextureToTexture3D=function(E,W,Y=null,ie=null,j=0){return E.isTexture!==!0&&(hs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,ie=arguments[1]||null,E=arguments[2],W=arguments[3],j=arguments[4]||0),hs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,W,Y,ie,j)},this.initRenderTarget=function(E){$.get(E).__webglFramebuffer===void 0&&ne.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ne.setTextureCube(E,0):E.isData3DTexture?ne.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ne.setTexture2DArray(E,0):ne.setTexture2D(E,0),N.unbindTexture()},this.resetState=function(){T=0,I=0,U=null,N.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Lr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}};var io=class r{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ve(e),this.near=t,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ro=class extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pt,this.environmentIntensity=1,this.environmentRotation=new Pt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},kc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ec,this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},jt=new M,so=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Pn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Pn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Pn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Pn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new It(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Or=class extends Dn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},_r,rs=new M,xr=new M,yr=new M,Mr=new ce,ss=new ce,fp=new Le,ba=new M,as=new M,wa=new M,Ad=new ce,Bl=new ce,Rd=new ce,_s=class extends Ct{constructor(e=new Or){if(super(),this.isSprite=!0,this.type="Sprite",_r===void 0){_r=new et;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new kc(t,5);_r.setIndex([0,1,2,0,2,3]),_r.setAttribute("position",new so(n,3,0,!1)),_r.setAttribute("uv",new so(n,2,3,!1))}this.geometry=_r,this.material=e,this.center=new ce(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xr.setFromMatrixScale(this.matrixWorld),fp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),yr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xr.multiplyScalar(-yr.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let a=this.center;Ta(ba.set(-.5,-.5,0),yr,a,xr,i,s),Ta(as.set(.5,-.5,0),yr,a,xr,i,s),Ta(wa.set(.5,.5,0),yr,a,xr,i,s),Ad.set(0,0),Bl.set(1,0),Rd.set(1,1);let o=e.ray.intersectTriangle(ba,as,wa,!1,rs);if(o===null&&(Ta(as.set(-.5,.5,0),yr,a,xr,i,s),Bl.set(0,1),o=e.ray.intersectTriangle(ba,wa,as,!1,rs),o===null))return;let l=e.ray.origin.distanceTo(rs);l<e.near||l>e.far||t.push({distance:l,point:rs.clone(),uv:jn.getInterpolation(rs,ba,as,wa,Ad,Bl,Rd,new ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ta(r,e,t,n,i,s){Mr.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(ss.x=s*Mr.x-i*Mr.y,ss.y=i*Mr.x+s*Mr.y):ss.copy(Mr),r.copy(e),r.x+=ss.x,r.y+=ss.y,r.applyMatrix4(fp)}var o_=new M,l_=new M;var c_=new M,h_=new _t,u_=new _t,d_=new M,p_=new Le,f_=new M,m_=new bn,g_=new Le,v_=new zi;var Vc=class extends Zt{constructor(e=null,t=1,n=1,i,s,a,o,l,c=1003,h=1003,d,u){super(null,a,o,l,c,h,i,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},__=new Le,x_=new Le;var ao=class extends It{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Sr=new Le,Cd=new Le,Aa=[],Id=new En,n0=new Le,os=new rt,ls=new bn,Jt=class extends rt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ao(new Float32Array(16*n),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,n0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new En),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Sr),Id.copy(e.boundingBox).applyMatrix4(Sr),this.boundingBox.union(Id)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new bn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Sr),ls.copy(e.boundingSphere).applyMatrix4(Sr),this.boundingSphere.union(ls)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=e*(n.length+1)+1;for(let a=0;a<n.length;a++)n[a]=i[s+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(os.geometry=this.geometry,os.material=this.material,os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ls.copy(this.boundingSphere),ls.applyMatrix4(n),e.ray.intersectsSphere(ls)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Sr),Cd.multiplyMatrices(n,Sr),os.matrixWorld=Cd,os.raycast(e,Aa);for(let a=0,o=Aa.length;a<o;a++){let l=Aa[a];l.instanceId=s,l.object=this,t.push(l)}Aa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ao(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Vc(new Float32Array(i*this.count),i,this.count,Rh,Ln));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Gc=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}},y_=new Le,M_=new ve(1,1,1),S_=new Nr,E_=new En,b_=new bn,w_=new M,T_=new M,A_=new M,R_=new Gc,C_=new rt;var xs=class extends Dn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},oo=new M,lo=new M,Pd=new Le,cs=new zi,Ra=new bn,Fl=new M,Ld=new M,Wc=class extends Ct{constructor(e=new et,t=new xs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)oo.fromBufferAttribute(t,i-1),lo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=oo.distanceTo(lo);e.setAttribute("lineDistance",new Re(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(i),Ra.radius+=s,e.ray.intersectsSphere(Ra)===!1)return;Pd.copy(i).invert(),cs.copy(e.ray).applyMatrix4(Pd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let u=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let m=u,x=p-1;m<x;m+=c){let f=h.getX(m),g=h.getX(m+1),v=Ca(this,e,cs,l,f,g);v&&t.push(v)}if(this.isLineLoop){let m=h.getX(p-1),x=h.getX(u),f=Ca(this,e,cs,l,m,x);f&&t.push(f)}}else{let u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let m=u,x=p-1;m<x;m+=c){let f=Ca(this,e,cs,l,m,m+1);f&&t.push(f)}if(this.isLineLoop){let m=Ca(this,e,cs,l,p-1,u);m&&t.push(m)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}};function Ca(r,e,t,n,i,s){let a=r.geometry.attributes.position;if(oo.fromBufferAttribute(a,i),lo.fromBufferAttribute(a,s),t.distanceSqToSegment(oo,lo,Fl,Ld)>n)return;Fl.applyMatrix4(r.matrixWorld);let o=e.ray.origin.distanceTo(Fl);return o<e.near||o>e.far?void 0:{distance:o,point:Ld.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}var Ud=new M,Dd=new M,co=class extends Wc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Ud.fromBufferAttribute(t,i),Dd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ud.distanceTo(Dd);e.setAttribute("lineDistance",new Re(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Hi=class extends Dn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Nd=new Le,Xc=new zi,Ia=new bn,Pa=new M,Br=class extends Ct{constructor(e=new et,t=new Hi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(i),Ia.radius+=s,e.ray.intersectsSphere(Ia)===!1)return;Nd.copy(i).invert(),Xc.copy(e.ray).applyMatrix4(Nd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null)for(let d=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);d<u;d++){let p=c.getX(d);Pa.fromBufferAttribute(h,p),Od(Pa,p,l,i,e,t,this)}else for(let d=Math.max(0,a.start),u=Math.min(h.count,a.start+a.count);d<u;d++)Pa.fromBufferAttribute(h,d),Od(Pa,d,l,i,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}};function Od(r,e,t,n,i,s,a){let o=Xc.distanceSqToPoint(r);if(o<t){let l=new M;Xc.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Dt=class extends Zt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,s=n.length,a;a=t||e*n[s-1];let o,l=0,c=s-1;for(;l<=c;)if(i=Math.floor(l+(c-l)/2),o=n[i]-a,o<0)l=i+1;else{if(!(o>0)){c=i;break}c=i-1}if(i=c,n[i]===a)return i/(s-1);let h=n[i];return(i+(a-h)/(n[i+1]-h))/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new ce:new M);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new M,i=[],s=[],a=[],o=new M,l=new Le;for(let p=0;p<=e;p++){let m=p/e;i[p]=this.getTangentAt(m,new M)}s[0]=new M,a[0]=new M;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Ut(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,m))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(Ut(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],p*m)),a[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ys=class extends dn{constructor(e=0,t=0,n=1,i=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ce){let n=t,i=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(s=a?0:i),this.aClockwise!==!0||a||(s===i?s=-i:s-=i);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},jc=class extends ys{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Uh(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,d){let u=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,p*=h,i(a,o,u,p)},calc:function(s){let a=s*s;return r+e*s+t*a+n*(a*s)}}}var La=new M,zl=new Uh,Hl=new Uh,kl=new Uh,qc=class extends dn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new M){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=i[(c-1)%s]:(La.subVectors(i[0],i[1]).add(i[0]),o=La);let d=i[c%s],u=i[(c+1)%s];if(this.closed||c+2<s?l=i[(c+2)%s]:(La.subVectors(i[s-1],i[s-2]).add(i[s-1]),l=La),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(o.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(u),p),f=Math.pow(u.distanceToSquared(l),p);x<1e-4&&(x=1),m<1e-4&&(m=x),f<1e-4&&(f=x),zl.initNonuniformCatmullRom(o.x,d.x,u.x,l.x,m,x,f),Hl.initNonuniformCatmullRom(o.y,d.y,u.y,l.y,m,x,f),kl.initNonuniformCatmullRom(o.z,d.z,u.z,l.z,m,x,f)}else this.curveType==="catmullrom"&&(zl.initCatmullRom(o.x,d.x,u.x,l.x,this.tension),Hl.initCatmullRom(o.y,d.y,u.y,l.y,this.tension),kl.initCatmullRom(o.z,d.z,u.z,l.z,this.tension));return n.set(zl.calc(h),Hl.calc(h),kl.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new M().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Bd(r,e,t,n,i){let s=.5*(n-e),a=.5*(i-t),o=r*r;return(2*t-2*n+s+a)*(r*o)+(-3*t+3*n-2*s-a)*o+s*r+t}function ds(r,e,t,n){return(function(i,s){let a=1-i;return a*a*s})(r,e)+(function(i,s){return 2*(1-i)*i*s})(r,t)+(function(i,s){return i*i*s})(r,n)}function ps(r,e,t,n,i){return(function(s,a){let o=1-s;return o*o*o*a})(r,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(r,t)+(function(s,a){return 3*(1-s)*s*s*a})(r,n)+(function(s,a){return s*s*s*a})(r,i)}var ho=class extends dn{constructor(e=new ce,t=new ce,n=new ce,i=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ce){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ps(e,i.x,s.x,a.x,o.x),ps(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Yc=class extends dn{constructor(e=new M,t=new M,n=new M,i=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new M){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ps(e,i.x,s.x,a.x,o.x),ps(e,i.y,s.y,a.y,o.y),ps(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},uo=class extends dn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zc=class extends dn{constructor(e=new M,t=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new M){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},po=class extends dn{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(ds(e,i.x,s.x,a.x),ds(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fo=class extends dn{constructor(e=new M,t=new M,n=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new M){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(ds(e,i.x,s.x,a.x),ds(e,i.y,s.y,a.y),ds(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},mo=class extends dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(Bd(o,l.x,c.x,h.x,d.x),Bd(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ce().fromArray(i))}return this}},go=Object.freeze({__proto__:null,ArcCurve:jc,CatmullRomCurve3:qc,CubicBezierCurve:ho,CubicBezierCurve3:Yc,EllipseCurve:ys,LineCurve:uo,LineCurve3:Zc,QuadraticBezierCurve:po,QuadraticBezierCurve3:fo,SplineCurve:mo}),Jc=class extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new go[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new go[i.type]().fromJSON(i))}return this}},Ms=class extends Jc{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new uo(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new po(this.currentPoint.clone(),new ce(e,t),new ce(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){let o=new ho(this.currentPoint.clone(),new ce(e,t),new ce(n,i),new ce(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new mo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){let c=new ys(e,t,n,i,s,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Fr=class r extends et{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Ut(i,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,d=new M,u=new ce,p=new M,m=new M,x=new M,f=0,g=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:f=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=1*g,p.y=-f,p.z=0*g,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:f=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=1*g,p.y=-f,p.z=0*g,m.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(m)}for(let v=0;v<=t;v++){let _=n+v*h*i,y=Math.sin(_),R=Math.cos(_);for(let T=0;T<=e.length-1;T++){d.x=e[T].x*y,d.y=e[T].y,d.z=e[T].x*R,a.push(d.x,d.y,d.z),u.x=v/t,u.y=T/(e.length-1),o.push(u.x,u.y);let I=l[3*T+0]*y,U=l[3*T+1],O=l[3*T+0]*R;c.push(I,U,O)}}for(let v=0;v<t;v++)for(let _=0;_<e.length-1;_++){let y=_+v*e.length,R=y,T=y+e.length,I=y+e.length+1,U=y+1;s.push(R,T,U),s.push(I,U,T)}this.setIndex(s),this.setAttribute("position",new Re(a,3)),this.setAttribute("uv",new Re(o,2)),this.setAttribute("normal",new Re(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},Kc=class r extends Fr{constructor(e=1,t=1,n=4,i=8){let s=new Ms;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new r(e.radius,e.length,e.capSegments,e.radialSegments)}},$c=class r extends et{constructor(e=1,t=32,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new M,h=new ce;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let p=n+d/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Re(a,3)),this.setAttribute("normal",new Re(o,3)),this.setAttribute("uv",new Re(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ki=class r extends et{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],d=[],u=[],p=[],m=0,x=[],f=n/2,g=0;function v(_){let y=m,R=new ce,T=new M,I=0,U=_===!0?e:t,O=_===!0?1:-1;for(let X=1;X<=i;X++)d.push(0,f*O,0),u.push(0,O,0),p.push(.5,.5),m++;let k=m;for(let X=0;X<=i;X++){let G=X/i*l+o,q=Math.cos(G),H=Math.sin(G);T.x=U*H,T.y=f*O,T.z=U*q,d.push(T.x,T.y,T.z),u.push(0,O,0),R.x=.5*q+.5,R.y=.5*H*O+.5,p.push(R.x,R.y),m++}for(let X=0;X<i;X++){let G=y+X,q=k+X;_===!0?h.push(q,q+1,G):h.push(q+1,q,G),I+=3}c.addGroup(g,I,_===!0?1:2),g+=I}(function(){let _=new M,y=new M,R=0,T=(t-e)/n;for(let I=0;I<=s;I++){let U=[],O=I/s,k=O*(t-e)+e;for(let X=0;X<=i;X++){let G=X/i,q=G*l+o,H=Math.sin(q),J=Math.cos(q);y.x=k*H,y.y=-O*n+f,y.z=k*J,d.push(y.x,y.y,y.z),_.set(H,T,J).normalize(),u.push(_.x,_.y,_.z),p.push(G,1-O),U.push(m++)}x.push(U)}for(let I=0;I<i;I++)for(let U=0;U<s;U++){let O=x[U][I],k=x[U+1][I],X=x[U+1][I+1],G=x[U][I+1];(e>0||U!==0)&&(h.push(O,k,G),R+=3),(t>0||U!==s-1)&&(h.push(k,X,G),R+=3)}c.addGroup(g,R,0),g+=R})(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Re(d,3)),this.setAttribute("normal",new Re(u,3)),this.setAttribute("uv",new Re(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Qc=class r extends ki{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Vi=class r extends et{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];function o(u,p,m,x){let f=x+1,g=[];for(let v=0;v<=f;v++){g[v]=[];let _=u.clone().lerp(m,v/f),y=p.clone().lerp(m,v/f),R=f-v;for(let T=0;T<=R;T++)g[v][T]=T===0&&v===f?_:_.clone().lerp(y,T/R)}for(let v=0;v<f;v++)for(let _=0;_<2*(f-v)-1;_++){let y=Math.floor(_/2);_%2==0?(l(g[v][y+1]),l(g[v+1][y]),l(g[v][y])):(l(g[v][y+1]),l(g[v+1][y+1]),l(g[v+1][y]))}}function l(u){s.push(u.x,u.y,u.z)}function c(u,p){let m=3*u;p.x=e[m+0],p.y=e[m+1],p.z=e[m+2]}function h(u,p,m,x){x<0&&u.x===1&&(a[p]=u.x-1),m.x===0&&m.z===0&&(a[p]=x/2/Math.PI+.5)}function d(u){return Math.atan2(u.z,-u.x)}(function(u){let p=new M,m=new M,x=new M;for(let f=0;f<t.length;f+=3)c(t[f+0],p),c(t[f+1],m),c(t[f+2],x),o(p,m,x,u)})(i),(function(u){let p=new M;for(let m=0;m<s.length;m+=3)p.x=s[m+0],p.y=s[m+1],p.z=s[m+2],p.normalize().multiplyScalar(u),s[m+0]=p.x,s[m+1]=p.y,s[m+2]=p.z})(n),(function(){let u=new M;for(let m=0;m<s.length;m+=3){u.x=s[m+0],u.y=s[m+1],u.z=s[m+2];let x=d(u)/2/Math.PI+.5,f=(p=u,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(x,1-f)}var p;(function(){let m=new M,x=new M,f=new M,g=new M,v=new ce,_=new ce,y=new ce;for(let R=0,T=0;R<s.length;R+=9,T+=6){m.set(s[R+0],s[R+1],s[R+2]),x.set(s[R+3],s[R+4],s[R+5]),f.set(s[R+6],s[R+7],s[R+8]),v.set(a[T+0],a[T+1]),_.set(a[T+2],a[T+3]),y.set(a[T+4],a[T+5]),g.copy(m).add(x).add(f).divideScalar(3);let I=d(g);h(v,T+0,m,I),h(_,T+2,x,I),h(y,T+4,f,I)}})(),(function(){for(let m=0;m<a.length;m+=6){let x=a[m+0],f=a[m+2],g=a[m+4],v=Math.max(x,f,g),_=Math.min(x,f,g);v>.9&&_<.1&&(x<.2&&(a[m+0]+=1),f<.2&&(a[m+2]+=1),g<.2&&(a[m+4]+=1))}})()})(),this.setAttribute("position",new Re(s,3)),this.setAttribute("normal",new Re(s.slice(),3)),this.setAttribute("uv",new Re(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},eh=class r extends Vi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Ua=new M,Da=new M,Vl=new M,Na=new jn,th=class extends et{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(Wa*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},p=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:x,b:f,c:g}=Na;if(x.fromBufferAttribute(o,c[0]),f.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),Na.getNormal(Vl),d[0]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,d[1]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,d[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,d[0]!==d[1]&&d[1]!==d[2]&&d[2]!==d[0])for(let v=0;v<3;v++){let _=(v+1)%3,y=d[v],R=d[_],T=Na[h[v]],I=Na[h[_]],U=`${y}_${R}`,O=`${R}_${y}`;O in u&&u[O]?(Vl.dot(u[O].normal)<=s&&(p.push(T.x,T.y,T.z),p.push(I.x,I.y,I.z)),u[O]=null):U in u||(u[U]={index0:c[v],index1:c[_],normal:Vl.clone()})}}for(let m in u)if(u[m]){let{index0:x,index1:f}=u[m];Ua.fromBufferAttribute(o,x),Da.fromBufferAttribute(o,f),p.push(Ua.x,Ua.y,Ua.z),p.push(Da.x,Da.y,Da.z)}this.setAttribute("position",new Re(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},vo=class extends Ms{constructor(e){super(e),this.uuid=Yn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Ms().fromJSON(i))}return this}},i0=function(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=Fd(r,0,i,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,d,u,p;if(n&&(s=(function(m,x,f,g){let v=[],_,y,R,T,I;for(_=0,y=x.length;_<y;_++)R=x[_]*g,T=_<y-1?x[_+1]*g:m.length,I=Fd(m,R,T,g,!1),I===I.next&&(I.steiner=!0),v.push(u0(I));for(v.sort(l0),_=0;_<v.length;_++)f=c0(v[_],f);return f})(r,e,s,t)),r.length>80*t){o=c=r[0],l=h=r[1];for(let m=t;m<i;m+=t)d=r[m],u=r[m+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return Ss(s,a,t,o,l,p,0),a};function Fd(r,e,t,n,i){let s,a;if(i===(function(o,l,c,h){let d=0;for(let u=l,p=c-h;u<c;u+=h)d+=(o[p]-o[u])*(o[u+1]+o[p+1]),p=u;return d})(r,e,t,n)>0)for(s=e;s<t;s+=n)a=zd(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=zd(s,r[s],r[s+1],a);return a&&wo(a,a.next)&&(bs(a),a=a.next),a}function Gi(r,e){if(!r)return r;e||(e=r);let t,n=r;do if(t=!1,n.steiner||!wo(n,n.next)&&xt(n.prev,n,n.next)!==0)n=n.next;else{if(bs(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function Ss(r,e,t,n,i,s,a){if(!r)return;!a&&s&&(function(h,d,u,p){let m=h;do m.z===0&&(m.z=nh(m.x,m.y,d,u,p)),m.prevZ=m.prev,m.nextZ=m.next,m=m.next;while(m!==h);m.prevZ.nextZ=null,m.prevZ=null,(function(x){let f,g,v,_,y,R,T,I,U=1;do{for(g=x,x=null,y=null,R=0;g;){for(R++,v=g,T=0,f=0;f<U&&(T++,v=v.nextZ,v);f++);for(I=U;T>0||I>0&&v;)T!==0&&(I===0||!v||g.z<=v.z)?(_=g,g=g.nextZ,T--):(_=v,v=v.nextZ,I--),y?y.nextZ=_:x=_,_.prevZ=y,y=_;g=v}y.nextZ=null,U*=2}while(R>1)})(m)})(r,n,i,s);let o,l,c=r;for(;r.prev!==r.next;)if(o=r.prev,l=r.next,s?s0(r,n,i,s):r0(r))e.push(o.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),bs(r),r=l.next,c=l.next;else if((r=l)===c){a?a===1?Ss(r=a0(Gi(r),e,t),e,t,n,i,s,2):a===2&&o0(r,e,t,n,i,s):Ss(Gi(r),e,t,n,i,s,1);break}}function r0(r){let e=r.prev,t=r,n=r.next;if(xt(e,t,n)>=0)return!1;let i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<s?i<a?i:a:s<a?s:a,d=o<l?o<c?o:c:l<c?l:c,u=i>s?i>a?i:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c,m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=p&&wr(i,o,s,l,a,c,m.x,m.y)&&xt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function s0(r,e,t,n){let i=r.prev,s=r,a=r.next;if(xt(i,s,a)>=0)return!1;let o=i.x,l=s.x,c=a.x,h=i.y,d=s.y,u=a.y,p=o<l?o<c?o:c:l<c?l:c,m=h<d?h<u?h:u:d<u?d:u,x=o>l?o>c?o:c:l>c?l:c,f=h>d?h>u?h:u:d>u?d:u,g=nh(p,m,e,t,n),v=nh(x,f,e,t,n),_=r.prevZ,y=r.nextZ;for(;_&&_.z>=g&&y&&y.z<=v;){if(_.x>=p&&_.x<=x&&_.y>=m&&_.y<=f&&_!==i&&_!==a&&wr(o,h,l,d,c,u,_.x,_.y)&&xt(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=p&&y.x<=x&&y.y>=m&&y.y<=f&&y!==i&&y!==a&&wr(o,h,l,d,c,u,y.x,y.y)&&xt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=g;){if(_.x>=p&&_.x<=x&&_.y>=m&&_.y<=f&&_!==i&&_!==a&&wr(o,h,l,d,c,u,_.x,_.y)&&xt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=v;){if(y.x>=p&&y.x<=x&&y.y>=m&&y.y<=f&&y!==i&&y!==a&&wr(o,h,l,d,c,u,y.x,y.y)&&xt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function a0(r,e,t){let n=r;do{let i=n.prev,s=n.next.next;!wo(i,s)&&mp(i,n,n.next,s)&&Es(i,s)&&Es(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),bs(n),bs(n.next),n=r=s),n=n.next}while(n!==r);return Gi(n)}function o0(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&d0(a,o)){let l=gp(a,o);return a=Gi(a,a.next),l=Gi(l,l.next),Ss(a,e,t,n,i,s,0),void Ss(l,e,t,n,i,s,0)}o=o.next}a=a.next}while(a!==r)}function l0(r,e){return r.x-e.x}function c0(r,e){let t=(function(i,s){let a,o=s,l=-1/0,c=i.x,h=i.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let f=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(f<=c&&f>l&&(l=f,a=o.x<o.next.x?o:o.next,f===c))return a}o=o.next}while(o!==s);if(!a)return null;let d=a,u=a.x,p=a.y,m,x=1/0;o=a;do c>=o.x&&o.x>=u&&c!==o.x&&wr(h<p?c:l,h,u,p,h<p?l:c,h,o.x,o.y)&&(m=Math.abs(h-o.y)/(c-o.x),Es(o,i)&&(m<x||m===x&&(o.x>a.x||o.x===a.x&&h0(a,o)))&&(a=o,x=m)),o=o.next;while(o!==d);return a})(r,e);if(!t)return e;let n=gp(t,r);return Gi(n,n.next),Gi(t,t.next)}function h0(r,e){return xt(r.prev,r,e.prev)<0&&xt(e.next,r,r.next)<0}function nh(r,e,t,n,i){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*i|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*i|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function u0(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function wr(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function d0(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!(function(t,n){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&mp(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1})(r,e)&&(Es(r,e)&&Es(e,r)&&(function(t,n){let i=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do i.y>o!=i.next.y>o&&i.next.y!==i.y&&a<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==t);return s})(r,e)&&(xt(r.prev,r,e.prev)||xt(r,e.prev,e))||wo(r,e)&&xt(r.prev,r,r.next)>0&&xt(e.prev,e,e.next)>0)}function xt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function wo(r,e){return r.x===e.x&&r.y===e.y}function mp(r,e,t,n){let i=Ba(xt(r,e,t)),s=Ba(xt(r,e,n)),a=Ba(xt(t,n,r)),o=Ba(xt(t,n,e));return i!==s&&a!==o||!(i!==0||!Oa(r,t,e))||!(s!==0||!Oa(r,n,e))||!(a!==0||!Oa(t,r,n))||!(o!==0||!Oa(t,e,n))}function Oa(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ba(r){return r>0?1:r<0?-1:0}function Es(r,e){return xt(r.prev,r,r.next)<0?xt(r,e,r.next)>=0&&xt(r,r.prev,e)>=0:xt(r,e,r.prev)<0||xt(r,r.next,e)<0}function gp(r,e){let t=new ih(r.i,r.x,r.y),n=new ih(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function zd(r,e,t,n){let i=new ih(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function bs(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function ih(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var pi=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return .5*n}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];Hd(e),kd(n,e);let a=e.length;t.forEach(Hd);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,kd(n,t[l]);let o=i0(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Hd(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function kd(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var rh=class r extends et{constructor(e=new vo([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:p0,_,y,R,T,I,U=!1;g&&(_=g.getSpacedPoints(h),U=!0,u=!1,y=g.computeFrenetFrames(h,!1),R=new M,T=new M,I=new M),u||(f=0,p=0,m=0,x=0);let O=o.extractPoints(c),k=O.shape,X=O.holes;if(!pi.isClockWise(k)){k=k.reverse();for(let L=0,A=X.length;L<A;L++){let P=X[L];pi.isClockWise(P)&&(X[L]=P.reverse())}}let G=pi.triangulateShape(k,X),q=k;for(let L=0,A=X.length;L<A;L++){let P=X[L];k=k.concat(P)}function H(L,A,P){return A||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(A,P)}let J=k.length,Q=G.length;function le(L,A,P){let S,C,F,te=L.x-A.x,N=L.y-A.y,K=P.x-L.x,$=P.y-L.y,ne=te*te+N*N,V=te*$-N*K;if(Math.abs(V)>Number.EPSILON){let z=Math.sqrt(ne),ae=Math.sqrt(K*K+$*$),Ae=A.x-N/z,Ie=A.y+te/z,De=((P.x-$/ae-Ae)*$-(P.y+K/ae-Ie)*K)/(te*$-N*K);S=Ae+te*De-L.x,C=Ie+N*De-L.y;let Me=S*S+C*C;if(Me<=2)return new ce(S,C);F=Math.sqrt(Me/2)}else{let z=!1;te>Number.EPSILON?K>Number.EPSILON&&(z=!0):te<-Number.EPSILON?K<-Number.EPSILON&&(z=!0):Math.sign(N)===Math.sign($)&&(z=!0),z?(S=-N,C=te,F=Math.sqrt(ne)):(S=te,C=N,F=Math.sqrt(ne/2))}return new ce(S/F,C/F)}let oe=[];for(let L=0,A=q.length,P=A-1,S=L+1;L<A;L++,P++,S++)P===A&&(P=0),S===A&&(S=0),oe[L]=le(q[L],q[P],q[S]);let we=[],Se,re=oe.concat();for(let L=0,A=X.length;L<A;L++){let P=X[L];Se=[];for(let S=0,C=P.length,F=C-1,te=S+1;S<C;S++,F++,te++)F===C&&(F=0),te===C&&(te=0),Se[S]=le(P[S],P[F],P[te]);we.push(Se),re=re.concat(Se)}for(let L=0;L<f;L++){let A=L/f,P=p*Math.cos(A*Math.PI/2),S=m*Math.sin(A*Math.PI/2)+x;for(let C=0,F=q.length;C<F;C++){let te=H(q[C],oe[C],S);ye(te.x,te.y,-P)}for(let C=0,F=X.length;C<F;C++){let te=X[C];Se=we[C];for(let N=0,K=te.length;N<K;N++){let $=H(te[N],Se[N],S);ye($.x,$.y,-P)}}}let he=m+x;for(let L=0;L<J;L++){let A=u?H(k[L],re[L],he):k[L];U?(T.copy(y.normals[0]).multiplyScalar(A.x),R.copy(y.binormals[0]).multiplyScalar(A.y),I.copy(_[0]).add(T).add(R),ye(I.x,I.y,I.z)):ye(A.x,A.y,0)}for(let L=1;L<=h;L++)for(let A=0;A<J;A++){let P=u?H(k[A],re[A],he):k[A];U?(T.copy(y.normals[L]).multiplyScalar(P.x),R.copy(y.binormals[L]).multiplyScalar(P.y),I.copy(_[L]).add(T).add(R),ye(I.x,I.y,I.z)):ye(P.x,P.y,d/h*L)}for(let L=f-1;L>=0;L--){let A=L/f,P=p*Math.cos(A*Math.PI/2),S=m*Math.sin(A*Math.PI/2)+x;for(let C=0,F=q.length;C<F;C++){let te=H(q[C],oe[C],S);ye(te.x,te.y,d+P)}for(let C=0,F=X.length;C<F;C++){let te=X[C];Se=we[C];for(let N=0,K=te.length;N<K;N++){let $=H(te[N],Se[N],S);U?ye($.x,$.y+_[h-1].y,_[h-1].x+P):ye($.x,$.y,d+P)}}}function me(L,A){let P=L.length;for(;--P>=0;){let S=P,C=P-1;C<0&&(C=L.length-1);for(let F=0,te=h+2*f;F<te;F++){let N=J*F,K=J*(F+1);w(A+S+N,A+C+N,A+C+K,A+S+K)}}}function ye(L,A,P){l.push(L),l.push(A),l.push(P)}function fe(L,A,P){b(L),b(A),b(P);let S=i.length/3,C=v.generateTopUV(n,i,S-3,S-2,S-1);D(C[0]),D(C[1]),D(C[2])}function w(L,A,P,S){b(L),b(A),b(S),b(A),b(P),b(S);let C=i.length/3,F=v.generateSideWallUV(n,i,C-6,C-3,C-2,C-1);D(F[0]),D(F[1]),D(F[3]),D(F[1]),D(F[2]),D(F[3])}function b(L){i.push(l[3*L+0]),i.push(l[3*L+1]),i.push(l[3*L+2])}function D(L){s.push(L.x),s.push(L.y)}(function(){let L=i.length/3;if(u){let A=0,P=J*A;for(let S=0;S<Q;S++){let C=G[S];fe(C[2]+P,C[1]+P,C[0]+P)}A=h+2*f,P=J*A;for(let S=0;S<Q;S++){let C=G[S];fe(C[0]+P,C[1]+P,C[2]+P)}}else{for(let A=0;A<Q;A++){let P=G[A];fe(P[2],P[1],P[0])}for(let A=0;A<Q;A++){let P=G[A];fe(P[0]+J*h,P[1]+J*h,P[2]+J*h)}}n.addGroup(L,i.length/3-L,0)})(),(function(){let L=i.length/3,A=0;me(q,A),A+=q.length;for(let P=0,S=X.length;P<S;P++){let C=X[P];me(C,A),A+=C.length}n.addGroup(L,i.length/3-L,1)})()}this.setAttribute("position",new Re(i,3)),this.setAttribute("uv",new Re(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,i){if(i.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];i.shapes.push(o.uuid)}else i.shapes.push(t.uuid);return i.options=Object.assign({},n),n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new go[i.type]().fromJSON(i)),new r(n,e.options)}},p0={generateTopUV:function(r,e,t,n,i){let s=e[3*t],a=e[3*t+1],o=e[3*n],l=e[3*n+1],c=e[3*i],h=e[3*i+1];return[new ce(s,a),new ce(o,l),new ce(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*n],h=e[3*n+1],d=e[3*n+2],u=e[3*i],p=e[3*i+1],m=e[3*i+2],x=e[3*s],f=e[3*s+1],g=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new ce(a,1-l),new ce(c,1-d),new ce(u,1-m),new ce(x,1-g)]:[new ce(o,1-l),new ce(h,1-d),new ce(p,1-m),new ce(f,1-g)]}},Wi=class r extends Vi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},sh=class r extends Vi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},ah=class r extends et{constructor(e=.5,t=1,n=32,i=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],l=[],c=[],h=[],d=e,u=(t-e)/(i=Math.max(1,i)),p=new M,m=new ce;for(let x=0;x<=i;x++){for(let f=0;f<=n;f++){let g=s+f/n*a;p.x=d*Math.cos(g),p.y=d*Math.sin(g),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,h.push(m.x,m.y)}d+=u}for(let x=0;x<i;x++){let f=x*(n+1);for(let g=0;g<n;g++){let v=g+f,_=v,y=v+n+1,R=v+n+2,T=v+1;o.push(_,y,T),o.push(y,R,T)}}this.setIndex(o),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(c,3)),this.setAttribute("uv",new Re(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},oh=class r extends et{constructor(e=new vo([new ce(0,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let d=i.length/3,u=h.extractPoints(t),p=u.shape,m=u.holes;pi.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,g=m.length;f<g;f++){let v=m[f];pi.isClockWise(v)===!0&&(m[f]=v.reverse())}let x=pi.triangulateShape(p,m);for(let f=0,g=m.length;f<g;f++){let v=m[f];p=p.concat(v)}for(let f=0,g=p.length;f<g;f++){let v=p[f];i.push(v.x,v.y,0),s.push(0,0,1),a.push(v.x,v.y)}for(let f=0,g=x.length;f<g;f++){let v=x[f],_=v[0]+d,y=v[1]+d,R=v[2]+d;n.push(_,y,R),l+=3}}this.setIndex(n),this.setAttribute("position",new Re(i,3)),this.setAttribute("normal",new Re(s,3)),this.setAttribute("uv",new Re(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let a=t[i];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let a=t[e.shapes[i]];n.push(a)}return new r(n,e.curveSegments)}},Kn=class r extends et{constructor(e=1,t=32,n=16,i=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new M,u=new M,p=[],m=[],x=[],f=[];for(let g=0;g<=n;g++){let v=[],_=g/n,y=0;g===0&&a===0?y=.5/t:g===n&&l===Math.PI&&(y=-.5/t);for(let R=0;R<=t;R++){let T=R/t;d.x=-e*Math.cos(i+T*s)*Math.sin(a+_*o),d.y=e*Math.cos(a+_*o),d.z=e*Math.sin(i+T*s)*Math.sin(a+_*o),m.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),f.push(T+y,1-_),v.push(c++)}h.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){let _=h[g][v+1],y=h[g][v],R=h[g+1][v],T=h[g+1][v+1];(g!==0||a>0)&&p.push(_,y,T),(g!==n-1||l<Math.PI)&&p.push(y,R,T)}this.setIndex(p),this.setAttribute("position",new Re(m,3)),this.setAttribute("normal",new Re(x,3)),this.setAttribute("uv",new Re(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},lh=class r extends Vi{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},ws=class r extends et{constructor(e=1,t=.4,n=12,i=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new M,d=new M,u=new M;for(let p=0;p<=n;p++)for(let m=0;m<=i;m++){let x=m/i*s,f=p/n*Math.PI*2;d.x=(e+t*Math.cos(f))*Math.cos(x),d.y=(e+t*Math.cos(f))*Math.sin(x),d.z=t*Math.sin(f),o.push(d.x,d.y,d.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(m/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=i;m++){let x=(i+1)*p+m-1,f=(i+1)*(p-1)+m-1,g=(i+1)*(p-1)+m,v=(i+1)*p+m;a.push(x,f,v),a.push(f,g,v)}this.setIndex(a),this.setAttribute("position",new Re(o,3)),this.setAttribute("normal",new Re(l,3)),this.setAttribute("uv",new Re(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},ch=class r extends et{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],h=[],d=new M,u=new M,p=new M,m=new M,x=new M,f=new M,g=new M;for(let _=0;_<=n;++_){let y=_/n*s*Math.PI*2;v(y,s,a,e,p),v(y+.01,s,a,e,m),f.subVectors(m,p),g.addVectors(m,p),x.crossVectors(f,g),g.crossVectors(x,f),x.normalize(),g.normalize();for(let R=0;R<=i;++R){let T=R/i*Math.PI*2,I=-t*Math.cos(T),U=t*Math.sin(T);d.x=p.x+(I*g.x+U*x.x),d.y=p.y+(I*g.y+U*x.y),d.z=p.z+(I*g.z+U*x.z),l.push(d.x,d.y,d.z),u.subVectors(d,p).normalize(),c.push(u.x,u.y,u.z),h.push(_/n),h.push(R/i)}}for(let _=1;_<=n;_++)for(let y=1;y<=i;y++){let R=(i+1)*(_-1)+(y-1),T=(i+1)*_+(y-1),I=(i+1)*_+y,U=(i+1)*(_-1)+y;o.push(R,T,U),o.push(T,I,U)}function v(_,y,R,T,I){let U=Math.cos(_),O=Math.sin(_),k=R/y*_,X=Math.cos(k);I.x=T*(2+X)*.5*U,I.y=T*(2+X)*O*.5,I.z=T*Math.sin(k)*.5}this.setIndex(o),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(c,3)),this.setAttribute("uv",new Re(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},hh=class r extends et{constructor(e=new fo(new M(-1,-1,0),new M(-1,1,0),new M(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new M,l=new M,c=new ce,h=new M,d=[],u=[],p=[],m=[];function x(f){h=e.getPointAt(f/t,h);let g=a.normals[f],v=a.binormals[f];for(let _=0;_<=i;_++){let y=_/i*Math.PI*2,R=Math.sin(y),T=-Math.cos(y);l.x=T*g.x+R*v.x,l.y=T*g.y+R*v.y,l.z=T*g.z+R*v.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}(function(){for(let f=0;f<t;f++)x(f);x(s===!1?t:0),(function(){for(let f=0;f<=t;f++)for(let g=0;g<=i;g++)c.x=f/t,c.y=g/i,p.push(c.x,c.y)})(),(function(){for(let f=1;f<=t;f++)for(let g=1;g<=i;g++){let v=(i+1)*(f-1)+(g-1),_=(i+1)*f+(g-1),y=(i+1)*f+g,R=(i+1)*(f-1)+g;m.push(v,_,R),m.push(_,y,R)}})()})(),this.setIndex(m),this.setAttribute("position",new Re(d,3)),this.setAttribute("normal",new Re(u,3)),this.setAttribute("uv",new Re(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new go[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},uh=class extends et{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new M,s=new M;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let d=l[c],u=d.start;for(let p=u,m=u+d.count;p<m;p+=3)for(let x=0;x<3;x++){let f=o.getX(p+x),g=o.getX(p+(x+1)%3);i.fromBufferAttribute(a,f),s.fromBufferAttribute(a,g),Vd(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,d=3*o+(c+1)%3;i.fromBufferAttribute(a,h),s.fromBufferAttribute(a,d),Vd(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Re(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Vd(r,e,t){let n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)!==!0&&t.has(i)!==!0&&(t.add(n),t.add(i),!0)}var I_=Object.freeze({__proto__:null,BoxGeometry:Ur,CapsuleGeometry:Kc,CircleGeometry:$c,ConeGeometry:Qc,CylinderGeometry:ki,DodecahedronGeometry:eh,EdgesGeometry:th,ExtrudeGeometry:rh,IcosahedronGeometry:Wi,LatheGeometry:Fr,OctahedronGeometry:sh,PlaneGeometry:un,PolyhedronGeometry:Vi,RingGeometry:ah,ShapeGeometry:oh,SphereGeometry:Kn,TetrahedronGeometry:lh,TorusGeometry:ws,TorusKnotGeometry:ch,TubeGeometry:hh,WireframeGeometry:uh});var mt=class extends Dn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Fa(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function f0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var zr=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];t:{e:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break n}if(e>=s)break t;{let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0}}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},dh=class extends zr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Uu,endingEnd:Uu}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Du:s=e,o=2*t-n;break;case Nu:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Du:a=e,l=2*n-t;break;case Nu:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,m=(n-t)/(i-t),x=m*m,f=x*m,g=-u*f+2*u*x-u*m,v=(1+u)*f+(-1.5-2*u)*x+(-.5+u)*m+1,_=(-1-p)*f+(1.5+p)*x+.5*m,y=p*f-p*x;for(let R=0;R!==o;++R)s[R]=g*a[h+R]+v*a[c+R]+_*a[l+R]+y*a[d+R];return s}},ph=class extends zr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)s[u]=a[c+u]*d+a[l+u]*h;return s}},fh=class extends zr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Sn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fa(t,this.TimeBufferType),this.values=Fa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fa(e.times,Array),values:Fa(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new fh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ph(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new dh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Xa:t=this.InterpolantFactoryMethodDiscrete;break;case Sc:t=this.InterpolantFactoryMethodLinear;break;case cl:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xa;case this.InterpolantFactoryMethodLinear:return Sc;case this.InterpolantFactoryMethodSmooth:return cl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&f0(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===cl,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(i)l=!0;else{let h=o*n,d=h-n,u=h+n;for(let p=0;p!==n;++p){let m=t[h+p];if(m!==t[d+p]||m!==t[u+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let u=0;u!==n;++u)t[d+u]=t[h+u]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};Sn.prototype.TimeBufferType=Float32Array,Sn.prototype.ValueBufferType=Float32Array,Sn.prototype.DefaultInterpolation=Sc;var Di=class extends Sn{constructor(e,t,n){super(e,t,n)}};Di.prototype.ValueTypeName="bool",Di.prototype.ValueBufferType=Array,Di.prototype.DefaultInterpolation=Xa,Di.prototype.InterpolantFactoryMethodLinear=void 0,Di.prototype.InterpolantFactoryMethodSmooth=void 0;var mh=class extends Sn{};mh.prototype.ValueTypeName="color";var gh=class extends Sn{};gh.prototype.ValueTypeName="number";var vh=class extends zr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)yt.slerpFlat(s,0,a,c-o,a,c,l);return s}},_o=class extends Sn{InterpolantFactoryMethodLinear(e){return new vh(this.times,this.values,this.getValueSize(),e)}};_o.prototype.ValueTypeName="quaternion",_o.prototype.InterpolantFactoryMethodSmooth=void 0;var Ni=class extends Sn{constructor(e,t,n){super(e,t,n)}};Ni.prototype.ValueTypeName="string",Ni.prototype.ValueBufferType=Array,Ni.prototype.DefaultInterpolation=Xa,Ni.prototype.InterpolantFactoryMethodLinear=void 0,Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var _h=class extends Sn{};_h.prototype.ValueTypeName="vector";var xh=class{constructor(e,t,n){let i=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,a===!1&&i.onStart!==void 0&&i.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,l),o===l&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],m=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}},m0=new xh,yh=class{constructor(e){this.manager=e!==void 0?e:m0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise((function(i,s){n.load(e,i,t,s)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};yh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ts=class extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},xo=class extends Ts{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Gl=new Le,Gd=new M,Wd=new M,Mh=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nr,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Gd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gd),Wd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wd),t.updateMatrixWorld(),Gl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Gl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var P_=new Le,L_=new M,U_=new M;var Sh=class extends Mh{constructor(){super(new Qa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xi=class extends Ts{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new Sh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},yo=class extends Ts{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var D_=new Le,N_=new Le,O_=new Le;var B_=new M,F_=new yt,z_=new M,H_=new M;var k_=new M,V_=new yt,G_=new M,W_=new M;var Dh="\\[\\]\\.:\\/",g0=new RegExp("["+Dh+"]","g"),Wl="[^"+Dh+"]",v0="[^"+Dh.replace("\\.","")+"]",_0=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Wl)+/(WCOD+)?/.source.replace("WCOD",v0)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wl)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wl)+"$"),x0=["material","materials","bones","map"],vt=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(g0,"")}static parseTrackName(e){let t=_0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);x0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vt.Composite=class{constructor(r,e,t){let n=t||vt.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,n)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray],vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var X_=new Float32Array(1);var Xd=new Le,As=class{constructor(e,t,n=0,i=1/0){this.ray=new zi(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new gs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Xd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xd),this}intersectObject(e,t=!0,n=[]){return Eh(e,this,n,t),n.sort(jd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Eh(e[i],this,n,t);return n.sort(jd),n}};function jd(r,e){return r.distance-e.distance}function Eh(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let s=r.children;for(let a=0,o=s.length;a<o;a++)Eh(s[a],e,t,!0)}}var j_=new ce;var q_=new M,Y_=new M;var Z_=new M;var J_=new M,K_=new Le,$_=new Le;var Q_=new M,ex=new ve,tx=new ve;var nx=new M,ix=new M,rx=new M;var sx=new M,ax=new vs;var ox=new En;var lx=new M;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var On=new M(0,1,0),Qn=(r,e,t)=>Math.min(t,Math.max(e,r)),Pe=(r,e,t)=>{let n=Qn((t-r)/(e-r),0,1);return n*n*(3-2*n)},Ee=(r,e,t)=>e+(t-e)*r();function Fp(r,e,t){let n=Math.min(r.length-1,Math.max(0,e*(r.length-1))),i=Math.min(r.length-2,Math.max(0,Math.floor(n))),s=n-i;return(t||new M).copy(r[i]).lerp(r[i+1],s)}function Rn(r){return function(){r|=0,r=r+1831565813|0;let e=Math.imul(r^r>>>15,1|r);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var M0=/debug/.test(location.search),Fo=20,Ji=120,zo=.25,Ot=Ji+(1-zo)*Fo*4+Fo*4-.1,Nh=[[0,0],[16,.004],[32,.02],[56,.06],[76,.14],[94,.28],[108,.5],[116,.75],[120,1]];function su(r){if(r<=0)return 0;if(r>=Ji)return 1;for(let e=1;e<Nh.length;e++){let[t,n]=Nh[e];if(r<=t){let[i,s]=Nh[e-1],a=Pe(0,1,(r-i)/Math.max(.001,t-i));return s+(n-s)*a}}return 1}function au(r){return r<Ji?.02+(zo-.02)*(r/Ji):zo+(r-Ji)/(Fo*4)}function zp(r){return r<Ji?1:1+Math.floor((r-Ji)/(Fo*4)+zo)}var wn=[{name:"\u6625",sub:"\u4E07\u7269\u53D1\u82BD",skyTop:5220584,horizon:16771012,fog:14085883,ground:8833386,sun:16763024,sunI:2.6,hemi:.5,snow:0,cloud:.58,cloudWarm:.16,exposure:.95,bloom:.22},{name:"\u590F",sub:"\u679D\u7E41\u53F6\u8302",skyTop:1603784,horizon:14217727,fog:13625845,ground:5546820,sun:16773840,sunI:2.8,hemi:.45,snow:0,cloud:.32,cloudWarm:.1,exposure:.92,bloom:.2},{name:"\u79CB",sub:"\u53F6\u5B50\u53D8\u7EA2",skyTop:6983632,horizon:16768424,fog:16180170,ground:10259018,sun:16751186,sunI:2.6,hemi:.42,snow:0,cloud:.26,cloudWarm:.55,exposure:1,bloom:.28},{name:"\u51AC",sub:"\u4E0B\u96EA\u4E86",skyTop:5210030,horizon:13624306,fog:13098220,ground:15923455,sun:12571903,sunI:1.8,hemi:.55,snow:1,cloud:.82,cloudWarm:.02,exposure:.88,bloom:.16}],S0={skyTop:new ve,horizon:new ve,fog:new ve,ground:new ve,sun:new ve,sunI:0,hemi:0,snow:0,cloud:0,cloudWarm:0,exposure:1,bloom:.8},Io=new ve,E0=new ve,Cs=new ve,Is=new ve;function b0(r,e){let t=(r%1+1)%1*wn.length,n=Math.floor(t)%wn.length,i=(n+1)%wn.length,s=Pe(.55,.95,t-Math.floor(t)),a=wn[n],o=wn[i];return e.skyTop.lerpColors(Cs.setHex(a.skyTop),Is.setHex(o.skyTop),s),e.horizon.lerpColors(Cs.setHex(a.horizon),Is.setHex(o.horizon),s),e.fog.lerpColors(Cs.setHex(a.fog),Is.setHex(o.fog),s),e.ground.lerpColors(Cs.setHex(a.ground),Is.setHex(o.ground),s),e.sun.lerpColors(Cs.setHex(a.sun),Is.setHex(o.sun),s),e.sunI=a.sunI+(o.sunI-a.sunI)*s,e.hemi=a.hemi+(o.hemi-a.hemi)*s,e.snow=a.snow+(o.snow-a.snow)*s,e.cloud=a.cloud+(o.cloud-a.cloud)*s,e.cloudWarm=a.cloudWarm+(o.cloudWarm-a.cloudWarm)*s,e.exposure=a.exposure+(o.exposure-a.exposure)*s,e.bloom=a.bloom+(o.bloom-a.bloom)*s,e}var Wh=document.getElementById("app"),Bt=new no({antialias:!1,powerPreference:"high-performance"});Bt.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75));function ou(){return{w:Math.max(1,Wh.clientWidth||window.innerWidth),h:Math.max(1,Wh.clientHeight||window.innerHeight)}}var Ho=ou();Bt.setSize(Ho.w,Ho.h);Bt.shadowMap.enabled=!0;Bt.shadowMap.type=qd;Bt.toneMapping=Zd;Bt.toneMappingExposure=1.12;Wh.appendChild(Bt.domElement);var Te=new ro;Te.fog=new io(13625845,34,165);var Nt=new Yt(38,Ho.w/Ho.h,.1,600),$n={topColor:{value:new ve(3118552)},horizonColor:{value:new ve(12576760)},sunColor:{value:new ve(16774109)},sunDir:{value:new M(.4,.7,.5).normalize()},time:{value:0},cloudCover:{value:.45},cloudWarm:{value:.2}},Hp=new rt(new Kn(320,48,30),new tn({uniforms:$n,side:bh,depthWrite:!1,fog:!1,vertexShader:`
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
    `}));Hp.frustumCulled=!1;Te.add(Hp);function w0(r,e){let n=document.createElement("canvas");n.width=n.height=128;let i=n.getContext("2d"),s=i.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);s.addColorStop(0,r),s.addColorStop(.45,e),s.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=s,i.fillRect(0,0,128,128);let a=new Dt(n);return a.colorSpace=dt,a}var Ns=new _s(new Or({map:w0("rgba(255,255,255,1)","rgba(255,236,180,0.55)"),blending:Mo,depthWrite:!1,depthTest:!0,fog:!1,transparent:!0,opacity:.9}));Ns.scale.setScalar(9);Te.add(Ns);function T0(){let e=document.createElement("canvas");e.width=e.height=512;let t=e.getContext("2d");t.clearRect(0,0,512,512);let n=512/2,i=512/2;for(let o=0;o<46;o++){let l=Math.random()*Math.PI*2,c=.004+Math.random()*.018,h=512*(.25+Math.random()*.45),d=t.createLinearGradient(n,i,n+Math.cos(l)*h,i+Math.sin(l)*h);d.addColorStop(0,`rgba(255,241,205,${.05+Math.random()*.09})`),d.addColorStop(1,"rgba(255,241,205,0)"),t.strokeStyle=d,t.lineWidth=512*c,t.beginPath(),t.moveTo(n,i),t.lineTo(n+Math.cos(l)*h,i+Math.sin(l)*h),t.stroke()}let s=t.createRadialGradient(n,i,0,n,i,512*.5);s.addColorStop(0,"rgba(255,245,215,0.55)"),s.addColorStop(.18,"rgba(255,228,170,0.16)"),s.addColorStop(1,"rgba(255,228,170,0)"),t.fillStyle=s,t.fillRect(0,0,512,512);let a=new Dt(e);return a.colorSpace=dt,a}var Os=new _s(new Or({map:T0(),blending:Mo,depthWrite:!1,depthTest:!0,fog:!1,transparent:!0,opacity:.55}));Os.scale.setScalar(72);Te.add(Os);var Po=new xo(12576760,4880954,.7);Te.add(Po);var A0=new yo(12376296,.38);Te.add(A0);var Gt=new Xi(16777215,2.4);Gt.castShadow=!0;Gt.shadow.mapSize.set(2048,2048);Gt.shadow.camera.left=-13;Gt.shadow.camera.right=13;Gt.shadow.camera.top=15;Gt.shadow.camera.bottom=-13;Gt.shadow.camera.near=1;Gt.shadow.camera.far=90;Gt.shadow.bias=-6e-4;Gt.shadow.normalBias=.06;Te.add(Gt);Te.add(Gt.target);var kp=new Xi(16773341,.85);kp.position.set(-14,9,-16);Te.add(kp);var Zo=new Xi(16773596,2.35);Zo.position.set(8,12,20);Zo.target.position.set(0,4,0);Te.add(Zo);Te.add(Zo.target);var Jo=new Xi(16769464,1.25);Jo.position.set(2.5,-3,18);Jo.target.position.set(0,-2.2,0);Te.add(Jo);Te.add(Jo.target);Gt.target.position.set(0,3,0);function R0(){let e=document.createElement("canvas");e.width=e.height=1024;let t=e.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,1024,1024);let n=(s,a,o,l,c)=>{t.fillStyle=`rgba(${l},${c})`;for(let h of[0,-1024,1024])for(let d of[0,-1024,1024])t.beginPath(),t.arc(s+h,a+d,o,0,Math.PI*2),t.fill()};for(let s=0;s<5200;s++){let a=Math.random()*1024,o=Math.random()*1024,l=3+Math.random()*9,c=-Math.PI/2+(Math.random()-.5)*1.1,h=Math.random()>.45;t.strokeStyle=h?`rgba(150,190,110,${.05+Math.random()*.11})`:`rgba(52,84,40,${.05+Math.random()*.13})`,t.lineWidth=.8+Math.random()*1.6,t.beginPath(),t.moveTo(a,o),t.lineTo(a+Math.cos(c)*l,o+Math.sin(c)*l),t.stroke()}for(let s=0;s<6e3;s++)t.fillStyle=`rgba(${Math.random()>.5?"96,132,70":"40,64,32"},${.04+Math.random()*.08})`,t.fillRect(Math.random()*1024,Math.random()*1024,1,1);let i=new Dt(e);return i.colorSpace=dt,i.wrapS=i.wrapT=Oi,i.repeat.set(14,14),i.anisotropy=8,i}var Vp=new mt({color:5546820,map:R0(),roughness:1,metalness:0,vertexColors:!0});function To(r,e){let t=Math.sin(r*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function Oh(r,e){let t=Math.floor(r),n=Math.floor(e),i=r-t,s=e-n,a=i*i*(3-2*i),o=s*s*(3-2*s),l=To(t,n),c=To(t+1,n),h=To(t,n+1),d=To(t+1,n+1);return(l*(1-a)+c*a)*(1-o)+(h*(1-a)+d*a)*o}function xi(r,e){return Oh(r,e)*.55+Oh(r*2.1,e*2.1)*.28+Oh(r*4.3,e*4.3)*.17}function C0(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,256);n.addColorStop(0,"#9c7248"),n.addColorStop(.45,"#7d5731"),n.addColorStop(1,"#5d3f22"),t.fillStyle=n,t.fillRect(0,0,256,256);for(let a=0;a<180;a++){let o=Math.random()*256,l=Math.random()*256,c=2+Math.random()*13,h=1.5+Math.random()*8,d=Math.random()>.55;t.fillStyle=d?`rgba(190,150,104,${.03+Math.random()*.07})`:`rgba(52,32,16,${.03+Math.random()*.08})`,t.beginPath(),t.ellipse(o,l,c,h,Math.random()*3.14,0,6.283),t.fill()}for(let a=0;a<9;a++){let o=Math.random()*256,l=Math.random()*256;t.strokeStyle=`rgba(40,24,12,${.12+Math.random()*.12})`,t.lineWidth=.8+Math.random()*1.1,t.beginPath(),t.moveTo(o,l),t.bezierCurveTo(o+8,l+6,o+3,l+22,o+10,l+34),t.stroke()}for(let a=0;a<260;a++){let o=Math.random()*256,l=Math.random()*256,c=.7+Math.random()*2.6;t.fillStyle=Math.random()>.5?"rgba(52,32,16,0.35)":"rgba(206,172,124,0.28)",t.beginPath(),t.ellipse(o,l,c,c*.8,Math.random()*3,0,Math.PI*2),t.fill()}let i=t.createRadialGradient(256*.36,256*.3,0,256*.36,256*.3,256*.55);i.addColorStop(0,"rgba(255,236,198,0.34)"),i.addColorStop(1,"rgba(255,236,198,0)"),t.fillStyle=i,t.fillRect(0,0,256,256);let s=new Dt(e);return s.colorSpace=dt,s.anisotropy=8,s}var ks=25,Vs=9;function I0(){let t=document.createElement("canvas");t.width=1024,t.height=512;let n=t.getContext("2d"),i=Rn(20240117);n.fillStyle="rgb(58,42,30)",n.fillRect(0,0,1024,512);let s=(c,h)=>{let d=[0,.1,.42,.7,1][h]*512,u=xi(c*.00135+h*23.7,h*5.3)-.5,p=xi(c*.0052+h*11.1,h*8.9)-.5,m=xi(c*.016+h*37.1,h*2.7)-.5;return d+u*58+p*20+m*6},a=[{top:-4,bottom:1,col:"rgb(58,40,26)"},{top:1,bottom:2,col:"rgb(92,66,42)"},{top:2,bottom:3,col:"rgb(112,88,56)"},{top:3,bottom:4,col:"rgb(104,86,62)"}];for(let c of a){n.fillStyle=c.col,n.beginPath();let h=c.top===-4?-4:c.top;h===-4?n.moveTo(0,-4):n.moveTo(0,s(0,h));for(let u=0;u<=1024;u+=16)n.lineTo(u,h===-4?-4:s(u,h));let d=c.bottom;for(let u=1024;u>=0;u-=16)n.lineTo(u,d>=4?512:s(u,d));n.closePath(),n.fill()}for(let c=0;c<34;c++){let h=i()*1024,d=1+Math.floor(i()*3),p=s(h,d)+(i()-.5)*28,m=22+i()*100,x=4+i()*18,f=i()>.5;n.fillStyle=f?"rgba(142,108,68,0.16)":"rgba(43,29,18,0.18)",n.beginPath(),n.ellipse(h,p,m,x,(i()-.5)*.14,0,6.283),n.fill()}for(let c of[1,2,3]){n.strokeStyle="rgba(12,7,4,0.42)",n.lineWidth=3,n.beginPath();let h=!1;for(let d=0;d<=1024;d+=8){let u=s(d,c);h?n.lineTo(d,u):(n.moveTo(d,u),h=!0)}n.stroke();for(let d=0;d<7;d++){let u=i()*1024,p=s(u,c)+(i()-.5)*7;n.strokeStyle=`rgba(12,7,4,${.12+i()*.2})`,n.lineWidth=2+i()*3,n.beginPath(),n.moveTo(u,p),n.quadraticCurveTo(u+8+i()*28,p+(i()-.5)*20,u+30+i()*70,p+(i()-.5)*24),n.stroke()}}for(let c=0;c<9600;c++){let h=i()*1024,d=i()*512,u=1.1+i()*3.9,p=i()>.5;n.fillStyle=p?`rgba(150,124,90,${.03+i()*.075})`:`rgba(26,16,9,${.04+i()*.1})`,n.beginPath(),n.ellipse(h,d,u,u*(.55+i()*.7),i()*3.14,0,6.283),n.fill(),n.fillStyle="rgba(18,11,6,0.07)",n.beginPath(),n.ellipse(h+u*.15,d+u*.45,u*.72,u*.28,0,0,6.283),n.fill()}for(let c=0;c<46;c++){let h=i()*1024,d=512*(.14+i()*.75),u=512*(.03+i()*.16);n.strokeStyle=`rgba(20,13,7,${.12+i()*.2})`,n.lineWidth=.8+i()*1.8,n.beginPath(),n.moveTo(h,d),n.bezierCurveTo(h+(i()-.5)*14,d+u*.4,h+(i()-.5)*18,d+u*.7,h+(i()-.5)*22,d+u),n.stroke()}for(let c=0;c<70;c++){let h=i()*1024,d=i()*512,u=30+i()*110,p=n.createRadialGradient(h,d,0,h,d,u),m=i()>.5;p.addColorStop(0,m?"rgba(126,84,44,0.13)":"rgba(36,24,14,0.13)"),p.addColorStop(1,"rgba(40,28,16,0)"),n.fillStyle=p,n.beginPath(),n.arc(h,d,u,0,6.283),n.fill()}for(let c=0;c<620;c++){let h=i()*1024,d=512*.1+i()*512*.9,u=1+Math.pow(i(),2.6)*2.3,p=.55+i()*.4;n.fillStyle=`rgba(${128*p|0},${116*p|0},${98*p|0},0.72)`,n.beginPath(),n.ellipse(h,d,u,u*(.62+i()*.4),i()*3.14,0,6.283),n.fill(),n.fillStyle="rgba(255,248,228,0.16)",n.beginPath(),n.ellipse(h-u*.3,d-u*.34,u*.5,u*.3,0,0,6.283),n.fill(),n.fillStyle="rgba(16,10,5,0.20)",n.beginPath(),n.ellipse(h+u*.18,d+u*.5,u*.8,u*.28,0,0,6.283),n.fill()}for(let c=0;c<26e3;c++){let h=i()*1024,d=i()*512;n.fillStyle=i()>.5?`rgba(20,13,7,${.06+i()*.12})`:`rgba(178,150,110,${.03+i()*.07})`,n.fillRect(h,d,1+i()*2,1+i()*2)}let o=n.createLinearGradient(0,0,0,512*.1);o.addColorStop(0,"rgba(18,12,7,0.58)"),o.addColorStop(.55,"rgba(30,20,12,0.22)"),o.addColorStop(1,"rgba(30,20,12,0)"),n.fillStyle=o,n.fillRect(0,0,1024,512*.1);for(let c=0;c<160;c++){let h=i()*1024,d=i()*512*.07;n.fillStyle=`rgba(190,160,116,${.02+i()*.05})`,n.beginPath(),n.ellipse(h,d,1+i()*4,1+i()*2,i()*3.14,0,6.283),n.fill()}let l=new Dt(t);return l.colorSpace=dt,l.wrapS=Oi,l.wrapT=Bi,l.flipY=!0,l.repeat.set(2.5,1),l.anisotropy=8,l}var vp=I0(),P0=new mt({map:vp,bumpMap:vp,bumpScale:.18,roughness:1,metalness:0,color:16777215,emissive:2759182,emissiveIntensity:.25}),L0=new mt({color:4008476,roughness:1,metalness:0,flatShading:!0}),U0=90;function D0(r,e,t){let n=[],i=[],s=[],a=[],o=new ve;for(let h=0;h<=e;h++){let d=r*Math.pow(h/e,1.9);for(let u=0;u<=t;u++){let p=u/t*Math.PI,m=Math.cos(p)*d,x=-Math.sin(p)*d;n.push(m,0,x),i.push(m/(2*r)+.5,x/(2*r)+.5);let f=xi(m*.036+11.3,x*.036+4.7),g=xi(m*.16,x*.16),v=.8+.34*f+.1*(g-.5);o.setRGB(v*1.02,v,v*.9),s.push(o.r,o.g,o.b)}}let l=t+1;for(let h=0;h<e;h++)for(let d=0;d<t;d++){let u=h*l+d,p=u+1,m=u+l,x=m+1;a.push(u,m,p,p,m,x)}let c=new et;return c.setAttribute("position",new Re(n,3)),c.setAttribute("uv",new Re(i,2)),c.setAttribute("color",new Re(s,3)),c.setIndex(a),c.computeVertexNormals(),c}var Gp=new rt(D0(U0,40,72),Vp);Gp.receiveShadow=!0;Te.add(Gp);(()=>{let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),n=t.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);n.addColorStop(0,"rgba(24,32,18,0.55)"),n.addColorStop(.45,"rgba(24,32,18,0.28)"),n.addColorStop(1,"rgba(24,32,18,0)"),t.fillStyle=n,t.fillRect(0,0,256,256);let i=new Dt(e);i.colorSpace=dt;let s=new rt(new un(7,7),new gi({map:i,transparent:!0,depthWrite:!1,opacity:.9}));s.rotation.x=-Math.PI/2,s.position.y=.02,Te.add(s)})();var lu=new rt(new ki(ks,ks,Vs,64,1,!0,Math.PI/2,Math.PI),L0);lu.position.y=-Vs/2;lu.receiveShadow=!0;Te.add(lu);var Wp=Vs+2.5,cu=new rt(new un(ks*2.8,Wp),P0);cu.position.set(0,-Wp/2,0);cu.receiveShadow=!1;Te.add(cu);(()=>{let r=Rn(4242),e=70,t=new mt({roughness:.88,metalness:0,flatShading:!0}),n=new Jt(new Wi(1,0),t,e);n.receiveShadow=!1,n.castShadow=!1;let i=new Le,s=new yt,a=new M,o=new M,l=new ve;for(let c=0;c<e;c++){let h=.035+Math.pow(r(),2)*.075;o.set(Ee(r,-11,11),Ee(r,-6.5,-.25),Ee(r,-.035,.01)),s.setFromEuler(new Pt(r()*3,r()*3,r()*3)),a.set(h*(1.1+r()*.5),h*(.8+r()*.4),h*.42),i.compose(o,s,a),n.setMatrixAt(c,i),l.setHex(r()>.45?10260348:7168339),n.setColorAt(c,l)}n.instanceMatrix.needsUpdate=!0,n.instanceColor&&(n.instanceColor.needsUpdate=!0),Te.add(n)})();(()=>{let r=Rn(9091),e=420,t=new Wi(1,0),n=new mt({roughness:.95,metalness:0,flatShading:!0,vertexColors:!1}),i=new Jt(t,n,e);i.receiveShadow=!0,i.castShadow=!1;let s=new Le,a=new yt,o=new M,l=new M,c=new ve;for(let h=0;h<e;h++){l.set(Ee(r,-13,13),Ee(r,-7.4,-.25),Ee(r,.005,.055)),a.setFromEuler(new Pt(r()*3,r()*3,r()*3));let d=.025+Math.pow(r(),2.2)*.1;o.set(d*Ee(r,.9,1.6),d*Ee(r,.4,.8),d*.45),s.compose(l,a,o),i.setMatrixAt(h,s);let u=.45+r()*.5;c.setRGB(.42*u,.32*u,.21*u),i.setColorAt(h,c)}i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),Te.add(i)})();var _p=ks*2.8,N0=(()=>{let e=[],t=[],n=[],i=new ve(4612138),s=new ve(2759698);for(let o=0;o<=240;o++){let l=-_p/2+o/240*_p,c=xi(l*.33+7.1,3.7)-.5,h=-.015+c*.11,d=-.1+c*.03;if(e.push(l,h,.05,l,d,.05),t.push(i.r,i.g,i.b,s.r,s.g,s.b),o<240){let u=o*2;n.push(u,u+2,u+1,u+1,u+2,u+3)}}let a=new et;return a.setAttribute("position",new Re(e,3)),a.setAttribute("color",new Re(t,3)),a.setIndex(n),a.computeVertexNormals(),a})(),O0=new mt({vertexColors:!0,roughness:1,metalness:0}),B0=new rt(N0,O0);Te.add(B0);(()=>{let t=document.createElement("canvas");t.width=256,t.height=256;let n=t.getContext("2d");n.clearRect(0,0,256,256);let i=n.createLinearGradient(0,0,256,0);i.addColorStop(0,"rgba(8,5,3,0.38)"),i.addColorStop(.14,"rgba(8,5,3,0.17)"),i.addColorStop(.34,"rgba(8,5,3,0.03)"),i.addColorStop(.66,"rgba(8,5,3,0.03)"),i.addColorStop(.86,"rgba(8,5,3,0.17)"),i.addColorStop(1,"rgba(8,5,3,0.38)"),n.fillStyle=i,n.fillRect(0,0,256,256);let s=n.createLinearGradient(0,0,0,256*.22);s.addColorStop(0,"rgba(6,4,2,0.22)"),s.addColorStop(1,"rgba(6,4,2,0)"),n.fillStyle=s,n.fillRect(0,0,256,256*.22);let a=n.createLinearGradient(0,256*.35,0,256);a.addColorStop(0,"rgba(6,4,2,0)"),a.addColorStop(1,"rgba(4,3,2,0.12)"),n.fillStyle=a,n.fillRect(0,256*.35,256,256*.65);let o=new Dt(t);o.colorSpace=dt;let l=new rt(new un(ks*2.8,Vs+5),new gi({map:o,transparent:!0,depthWrite:!1,fog:!1}));l.position.set(0,-(Vs+5)/2-.02,.028),Te.add(l)})();var Xp=new hn,Us=[];function hu(r,e,t,n,i,s,a){let h=Rn(n)()*100,d=[],u=[];for(let f=0;f<=256;f++){let g=f/256*Math.PI*2,v=Math.cos(g)*r,_=Math.sin(g)*r,y=xi(Math.cos(g)*3.3+h,Math.sin(g)*3.3+h*.7),R=xi(Math.cos(g)*8.6+h*2,Math.sin(g)*8.6),T=1-Math.abs(2*y-1),I=e+t*(.1+.9*Math.pow(T*.72+R*.28,1.55));for(let U=0;U<=7;U++){let O=U/7,k=-9+(I+9)*O;d.push(v,k,_)}}for(let f=0;f<256;f++){let g=f*8,v=(f+1)*8;for(let _=0;_<7;_++)u.push(g+_,g+_+1,v+_,g+_+1,v+_+1,v+_)}let p=new et;p.setAttribute("position",new Re(d,3)),p.setIndex(u);let m=new tn({uniforms:{uBottomColor:{value:new ve(i.bottom)},uTopColor:{value:new ve(i.top)},uSnowColor:{value:new ve(i.snow||16055295)},uBaseY:{value:e},uHeight:{value:t},uSnowLine:{value:e+t*(i.snowLine??.55)},uSnowStrength:{value:a||0},uOpacity:{value:s}},vertexShader:`
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
    `,transparent:s<.99,depthWrite:s>=.99,side:Nn,fog:!1});Us.push(m);let x=new rt(p,m);x.frustumCulled=!1,Xp.add(x)}hu(172,-1.4,24,1919,{bottom:12966374,top:8298424,snow:16055295,snowLine:.54},.9,.62);hu(124,-1.1,12.5,2027,{bottom:12441286,top:7904131},1,0);hu(82,-.9,5.2,3121,{bottom:10468747,top:7312496},1,0);Te.add(Xp);function F0(){let t=document.createElement("canvas");t.width=512,t.height=128;let n=t.getContext("2d");n.clearRect(0,0,512,128);for(let s=0;s<90;s++){let a=Math.random()*512,o=128*(.35+Math.random()*.45),l=20+Math.random()*70,c=n.createRadialGradient(a,o,0,a,o,l);c.addColorStop(0,`rgba(255,248,235,${.035+Math.random()*.05})`),c.addColorStop(1,"rgba(255,248,235,0)"),n.fillStyle=c,n.fillRect(a-l,o-l,l*2,l*2)}let i=new Dt(t);return i.colorSpace=dt,i}var z0=F0(),uu=new hn,Xh=[];for(let r=0;r<3;r++){let e=new gi({map:z0,transparent:!0,opacity:[.16,.1,.06][r],depthWrite:!1,fog:!1,blending:Yd,side:Nn});Xh.push(e);let t=new rt(new un([110,130,150][r],[5.5,7,9][r]),e);t.position.set(0,[.8,1.8,3.2][r],[-18,-30,-46][r]),t.renderOrder=1,uu.add(t)}Te.add(uu);var Ko=280,ko=new et,Lo=new Float32Array(Ko*3),jp=new Float32Array(Ko);for(let r=0;r<Ko;r++)Lo[r*3]=(Math.random()-.5)*22,Lo[r*3+1]=.3+Math.random()*6.5,Lo[r*3+2]=-10+Math.random()*12,jp[r]=Math.random()*Math.PI*2;ko.setAttribute("position",new It(Lo,3));var jh=new Hi({size:.042,map:Kp(),transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0,color:16770736,blending:Mo,fog:!1}),qp=new Br(ko,jh);qp.frustumCulled=!1;Te.add(qp);(()=>{let r=new mt({color:9076851,roughness:.9,flatShading:!0}),e=Rn(77);for(let t=0;t<8;t++){let n=new rt(new Wi(.09+e()*.12,0),r);n.position.set(Ee(e,-9,9),Ee(e,-2.9,-.7),-.02),n.rotation.set(e()*3,e()*3,e()*3),n.scale.set(1.1,.55+e()*.25,.24),Te.add(n)}})();function H0(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.clearRect(0,0,256,256),t.lineCap="round";for(let i=0;i<20;i++){let s=256*(.03+Math.random()*.94),a=256*(.08+Math.random()*.16),o=(Math.random()-.5)*256*.28,l=.72+Math.random()*.22;t.strokeStyle=`rgba(${76*l|0},${118*l|0},${48*l|0},0.95)`,t.lineWidth=1.4+Math.random()*1.8,t.beginPath(),t.moveTo(s,256),t.quadraticCurveTo(s+o*.4,256-a*.6,s+o,256-a),t.stroke()}for(let i=0;i<34;i++){let s=256*(.04+Math.random()*.92),a=256*(.26+Math.random()*.52),o=(Math.random()-.5)*256*.55,l=1.2+Math.random()*2,c=t.createLinearGradient(0,256,0,256-a),h=.82+Math.random()*.26;c.addColorStop(0,`rgba(${58*h|0},${92*h|0},${36*h|0},1)`),c.addColorStop(.5,`rgba(${98*h|0},${148*h|0},${64*h|0},1)`),c.addColorStop(.86,`rgba(${146*h|0},${190*h|0},${98*h|0},1)`),c.addColorStop(1,`rgba(${180*h|0},${212*h|0},${128*h|0},0.9)`),t.strokeStyle=c,t.lineWidth=l,t.beginPath(),t.moveTo(s,256),t.quadraticCurveTo(s+o*.35,256-a*.6,s+o,256-a),t.stroke()}for(let i=0;i<7;i++){let s=256*(.08+Math.random()*.84),a=256*(.5+Math.random()*.34),o=(Math.random()-.5)*256*.3;t.strokeStyle="rgba(126,160,84,0.9)",t.lineWidth=1.1,t.beginPath(),t.moveTo(s,256),t.quadraticCurveTo(s+o*.3,256-a*.68,s+o,256-a),t.stroke(),t.fillStyle="rgba(168,190,108,0.9)";for(let l=0;l<5;l++)t.beginPath(),t.ellipse(s+o+(l-2)*2.4,256-a+3+Math.abs(l-2)*1.3,1.3,3.1,.5,0,6.283),t.fill()}let n=new Dt(e);return n.colorSpace=dt,n.anisotropy=8,n}function k0(){let r=new et,e=[],t=[],n=[],i=[[-.5,0,.5,0],[0,-.5,0,.5]],s=0;for(let[a,o,l,c]of i)e.push(a,0,o,l,0,c,l,1,c,a,1,o),t.push(0,0,1,0,1,1,0,1),n.push(s,s+1,s+2,s,s+2,s+3),s+=4;return r.setAttribute("position",new Re(e,3)),r.setAttribute("uv",new Re(t,2)),r.setIndex(n),r.computeVertexNormals(),r}var V0=H0(),Yp=k0(),Zp={value:0};function G0(r,e=1){return r.onBeforeCompile=t=>{t.uniforms.uGrassTime=Zp,t.vertexShader=`uniform float uGrassTime;
`+t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
       float wx = instanceMatrix[3][0];
       float wz = instanceMatrix[3][2];
       float gust = sin(uGrassTime * 1.35 + wx * 0.28 + wz * 0.22) * 0.5 + sin(uGrassTime * 2.7 + wx * 0.6) * 0.22;
       transformed.x += gust * ${e.toFixed(2)} * smoothstep(0.0, 1.0, position.y);
       transformed.z += gust * ${(e*.45).toFixed(2)} * smoothstep(0.0, 1.0, position.y);`)},r}function W0(r){let e=Rn(r),t=16e3,n=G0(new mt({map:V0,alphaTest:.28,side:Nn,roughness:1,metalness:0,transparent:!0,opacity:1}),.085),i=new Jt(Yp,n,t);i.receiveShadow=!0,i.castShadow=!1;let s=new Le,a=new yt,o=new M,l=new M,c=new ve;for(let h=0;h<t;h++){let d=e()*Math.PI,u=.3+Math.pow(e(),.92)*34;if(e()<Pe(7,34,u)*.78){h--;continue}l.set(Math.cos(d)*u,0,-Math.sin(d)*u),a.setFromAxisAngle(On,e()*Math.PI*2);let p=Math.min(1,Math.max(0,(u-2)/34)),m=1-.2*p,x=1+.38*(1-Pe(2.5,9,u)),f=(.16+e()*.22)*m*x,g=(.11+e()*.11)*m;o.set(g*(.8+e()*.5),f,g*(.8+e()*.5)),s.compose(l,a,o),i.setMatrixAt(h,s);let v=(.84+e()*.3)*(1-.04*p);c.setRGB(v*(.96+e()*.06),v,v*(.86+e()*.1)),i.setColorAt(h,c)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),i}function X0(){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");t.clearRect(0,0,128,128);let n=128/2,i=128*.42;for(let a=0;a<5;a++){let o=a/5*Math.PI*2;t.fillStyle="rgba(255,252,244,0.98)",t.beginPath(),t.ellipse(n+Math.cos(o)*128*.14,i+Math.sin(o)*128*.14,128*.11,128*.075,o,0,6.283),t.fill()}t.fillStyle="rgba(243,190,74,1)",t.beginPath(),t.arc(n,i,128*.052,0,6.283),t.fill(),t.strokeStyle="rgba(84,120,52,0.95)",t.lineWidth=3,t.beginPath(),t.moveTo(n,i+128*.06),t.quadraticCurveTo(n+4,128*.75,n-3,128*.98),t.stroke();let s=new Dt(e);return s.colorSpace=dt,s.anisotropy=4,s}var Jp=X0();function j0(r){let e=Rn(r),t=1400,n=new mt({map:Jp,alphaTest:.35,side:Nn,roughness:.9,metalness:0,transparent:!0}),i=new Jt(Yp,n,t);i.castShadow=!1,i.receiveShadow=!1;let s=new Le,a=new yt,o=new M,l=new M,c=new ve;for(let h=0;h<t;h++){let d=e()*Math.PI,u=.8+Math.pow(e(),.85)*12;l.set(Math.cos(d)*u,.01,-Math.sin(d)*u),a.setFromAxisAngle(On,e()*Math.PI*2);let p=.075+e()*.11;o.set(p,p,p),s.compose(l,a,o),i.setMatrixAt(h,s);let m=e();m<.55?c.setHex(16776693):m<.82?c.setHex(16771496):m<.95?c.setHex(16766692):c.setHex(14084351),i.setColorAt(h,c)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),i}function q0(r){let e=Rn(r),t=1600,n=new mt({map:du,alphaTest:.4,side:Nn,roughness:.95,metalness:0,transparent:!0,opacity:0}),i=new Jt(Vo,n,t);i.receiveShadow=!0,i.castShadow=!1;let s=new Le,a=new yt,o=new M,l=new M,c=new Pt,h=new ve,d=[14242860,15243818,13185068,11827748,10382124],u=[];for(let p=0;p<t;p++){let m=e()*Math.PI,x=.4+Math.pow(e(),.75)*10.5;l.set(Math.cos(m)*x,.025+e()*.025,-Math.sin(m)*x),a.setFromEuler(c.set(-Math.PI/2+(e()-.5)*.35,e()*Math.PI*2,(e()-.5)*.25));let f=.16+e()*.16;o.set(f,f,f),s.compose(l,a,o),i.setMatrixAt(p,s),h.setHex(d[Math.floor(e()*d.length)]),i.setColorAt(p,h),u.push({pos:l.clone(),quat:a.clone(),size:f,color:h.clone()})}return i.userData.leafInfo=u,i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),i}function Y0(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.clearRect(0,0,256,256);let n=t.createLinearGradient(0,256*.06,0,256*.94);n.addColorStop(0,"#e8f3dd"),n.addColorStop(.45,"#ffffff"),n.addColorStop(1,"#dfe9d2"),t.fillStyle=n,t.beginPath(),t.moveTo(256/2,256*.04),t.bezierCurveTo(256*.95,256*.3,256*.9,256*.8,256/2,256*.96),t.bezierCurveTo(256*.1,256*.8,256*.05,256*.3,256/2,256*.04),t.closePath(),t.fill(),t.strokeStyle="rgba(112,140,96,0.45)",t.lineWidth=2.4,t.beginPath(),t.moveTo(256/2,256*.09),t.lineTo(256/2,256*.92),t.stroke(),t.lineWidth=1.1,t.strokeStyle="rgba(112,140,96,0.3)";for(let s=1;s<=6;s++){let a=256*(.1+.8*(s/7)),o=.34*Math.sin(Math.PI*(s/7))*256;t.beginPath(),t.moveTo(256/2,a),t.quadraticCurveTo(256/2+o*.6,a+256*.03,256/2+o,a+256*.09),t.stroke(),t.beginPath(),t.moveTo(256/2,a),t.quadraticCurveTo(256/2-o*.6,a+256*.03,256/2-o,a+256*.09),t.stroke()}let i=new Dt(e);return i.colorSpace=dt,i.anisotropy=8,i}function Z0(){let r=new un(1,1.35,2,4),e=r.attributes.position;for(let t=0;t<e.count;t++){let n=e.getX(t),s=(e.getY(t)+.675)/1.35,a=.13*(n*n*4-.4),o=-.1*s*s;e.setZ(t,a+o)}return r.computeVertexNormals(),r}var du=Y0(),Vo=Z0(),Gs=new hn;Te.add(Gs);var xp=new mt({map:du,alphaTest:.38,side:Nn,roughness:.86,metalness:0});function J0(){let t=document.createElement("canvas");t.width=256,t.height=256;let n=t.getContext("2d");n.fillStyle="#ffffff",n.fillRect(0,0,256,256);for(let s=0;s<220;s++){let a=Math.random()*256,o=30+Math.random()*160,l=Math.random()*256,c=Math.random()>.45;n.strokeStyle=c?`rgba(64,44,28,${.05+Math.random()*.11})`:`rgba(255,250,240,${.08+Math.random()*.16})`,n.lineWidth=.8+Math.random()*2.6,n.beginPath(),n.moveTo(a,l),n.quadraticCurveTo(a+(Math.random()-.5)*8,l+o*.5,a+(Math.random()-.5)*12,l+o),n.stroke()}for(let s=0;s<500;s++)n.fillStyle=`rgba(40,26,14,${.05+Math.random()*.14})`,n.fillRect(Math.random()*256,Math.random()*256,1+Math.random()*2,1+Math.random()*3);let i=new Dt(t);return i.colorSpace=dt,i.wrapS=i.wrapT=Oi,i.repeat.set(1,3),i.anisotropy=4,i}var vi=J0(),K0=new mt({color:5916210,map:vi,bumpMap:vi,bumpScale:.09,roughness:.93,metalness:0}),_e=null;function $0(r){let e=Rn(r),t=new hn,n=[],i=[],s=[],a=4,o=[.24,.16,.12,.08,.05];function l(Z,ue,ge){let se=Z.length,ee=[],xe=[],Ke=[],nt=[],qe=new M,Be=new M,st=new M,B=new M().subVectors(Z[1],Z[0]).normalize();Be.set(0,1,0),Math.abs(Be.dot(B))>.9&&Be.set(1,0,0),Be.addScaledVector(B,-Be.dot(B)).normalize();for(let $e=0;$e<se;$e++){let Fe=Z[Math.max(0,$e-1)],Ft=Z[Math.min(se-1,$e+1)];qe.subVectors(Ft,Fe).normalize(),Be.addScaledVector(qe,-Be.dot(qe)).normalize(),st.crossVectors(qe,Be).normalize();for(let He=0;He<ge;He++){let it=He/ge*Math.PI*2,lt=Math.cos(it),ot=Math.sin(it),ct=Be.x*lt+st.x*ot,zt=Be.y*lt+st.y*ot,fn=Be.z*lt+st.z*ot,Ht=1+.018*Math.sin(He*3.2+$e*.9)+.009*Math.sin(He*7.1+$e*1.7),on=ue[$e]*Ht;ee.push(Z[$e].x+ct*on,Z[$e].y+zt*on,Z[$e].z+fn*on),xe.push(ct,zt,fn),Ke.push(He/ge,$e/(se-1)*2)}}for(let $e=0;$e<se-1;$e++)for(let Fe=0;Fe<ge;Fe++){let Ft=$e*ge+Fe,He=$e*ge+(Fe+1)%ge,it=($e+1)*ge+Fe,lt=($e+1)*ge+(Fe+1)%ge;nt.push(Ft,He,it,He,lt,it)}let at=new et;return at.setAttribute("position",new Re(ee,3)),at.setAttribute("normal",new Re(xe,3)),at.setAttribute("uv",new Re(Ke,2)),at.setIndex(nt),at.computeBoundingSphere(),at}function c(Z,ue,ge,se,ee,xe,Ke){let nt=ee===0?16:ee===1?11:7,qe=ee===0?16:ee===1?10:7,Be=[Z.clone()],st=[se],B=ue.clone(),at=new M().crossVectors(ue,On);at.lengthSq()<1e-6&&at.set(1,0,0),at.normalize().applyAxisAngle(ue,e()*Math.PI*2);let $e=ee===0?Ee(e,.24,.52):Ee(e,.22,.62),Fe=ge/(nt-1);for(let lt=1;lt<nt;lt++){B.applyAxisAngle(at,$e/(nt-1)+Ee(e,-.025,.025)).normalize(),Be.push(Be[lt-1].clone().addScaledVector(B,Fe));let ot=lt/(nt-1);st.push(se*(1-.3*ot)*(1-.3*Math.pow(ot,4)))}Be.push(Be[nt-1].clone().addScaledVector(B,Fe*.35)),st.push(st[nt-1]*.85);let Ft=Be.length,He=l(Be,st,qe);s.push(He);let it=new rt(He,K0);return it.name="branch-d"+ee+"#"+n.length,it.userData.part=ee===0?"trunk":"branch",it.castShadow=!0,it.receiveShadow=!1,it.frustumCulled=!1,t.add(it),n.push({mesh:it,start:Z.clone(),len:ge,depth:ee,g0:xe,g1:Ke,rings:Ft,radial:qe,pts:Be,radii:st,basePos:Float32Array.from(He.attributes.position.array),lastK:-1}),{end:Be[Ft-1].clone(),endDir:B.clone(),pts:Be,radii:st,endR:st[Ft-1]}}function h(Z,ue,ge){let se=new M().crossVectors(Z,On);se.lengthSq()<1e-5&&se.set(1,0,0),se.normalize();let ee=new M().crossVectors(Z,se).normalize(),xe=Z.clone().multiplyScalar(Math.cos(ue));return xe.addScaledVector(se,Math.cos(ge)*Math.sin(ue)),xe.addScaledVector(ee,Math.sin(ge)*Math.sin(ue)),xe.normalize()}function d(Z,ue){let ge=ue*(Z.length-1),se=Math.min(Z.length-2,Math.max(0,Math.floor(ge))),ee=ge-se,xe=Z[se].clone().lerp(Z[se+1],ee),Ke=new M().subVectors(Z[se+1],Z[se]).normalize();return{p:xe,tangent:Ke}}function u(Z,ue,ge,se,ee,xe){let Ke=Math.min(1,xe+o[ee]),{end:nt,endDir:qe,pts:Be,radii:st,endR:B}=c(Z,ue,ge,se,ee,xe,Ke),at=n[n.length-1];if(ee===0&&xe<.12)for(let He=0;He<15;He++){let it=Ee(e,.5,1),{p:lt,tangent:ot}=d(Be,it),ct=new M().crossVectors(ot,On);ct.lengthSq()<.02&&ct.set(1,0,0),ct.normalize().applyAxisAngle(ot,e()*Math.PI*2),lt.addScaledVector(ct,.02+e()*.07),i.push({pos:lt,dir:ct.clone().addScaledVector(ot,Ee(e,.1,.7)).normalize(),g:.15+He*.012,stag:e(),sizeScale:.45,branch:at,siteT:it})}if(ee>=1){let He=ee===1?34:ee===2?48:ee===3?84:140;for(let it=0;it<He;it++){let lt=Ee(e,ee===a?.08:.24,1),{p:ot,tangent:ct}=d(Be,lt),zt=new M().crossVectors(ct,On);zt.lengthSq()<.02&&zt.set(1,0,0),zt.normalize().applyAxisAngle(ct,e()*Math.PI*2),ot.addScaledVector(zt,.03+e()*.2);let fn=zt.clone().multiplyScalar(Ee(e,.65,1)).addScaledVector(ct,Ee(e,-.4,.6)).normalize();i.push({pos:ot,dir:fn,g:Math.min(.82,xe+.02),stag:e(),branch:at,siteT:lt})}}if(ee>=1)for(let He=0;He<8;He++){let it=Ee(e,.86,1),{p:lt,tangent:ot}=d(Be,it),ct=new M().crossVectors(ot,On);ct.lengthSq()<.02&&ct.set(1,0,0),ct.normalize().applyAxisAngle(ot,e()*Math.PI*2),lt.addScaledVector(ct,.02+e()*.1),i.push({pos:lt,dir:ct.clone().addScaledVector(ot,Ee(e,-.3,.5)).normalize(),g:Math.min(.9,xe+.03),stag:e(),branch:at,siteT:it})}if(ee>=a)return;let $e=ge*Ee(e,.58,.7),Fe=se*Ee(e,.58,.7);if(ee<=1){let He=h(qe,Ee(e,.14,.32),e()*Math.PI*2);He.y-=.04+.05*ee,He.z>-.02&&(He.z=-.02-e()*.12),u(nt,He.normalize(),$e*.82,Math.max(.009,B*Ee(e,.96,1.04)),ee+1,Ke)}let Ft=ee===0?5:ee===1?4:ee===2?2:1;for(let He=0;He<Ft;He++){let it=ee<=1?He/Ft*Math.PI*2+Ee(e,-.42,.42):e()*Math.PI*2,lt=Ee(e,.6,1.14),ot=ee===0?Ee(e,.3,.85):Ee(e,.22,.94),{p:ct,tangent:zt}=d(Be,ot),fn=Math.min(st.length-1,Math.max(0,Math.round(ot*(st.length-1)))),Ht=st[fn],on=h(zt,lt,it);on.y-=.02+.02*ee,on.z>-.02&&(on.z=-.02-e()*.15),u(ct.clone().addScaledVector(zt,-.07),on.normalize(),$e*Ee(e,.92,1.18),Math.max(.01,Ht*Ee(e,.68,.86)),ee+1,Ke)}if(ee===0)for(let He=0;He<3;He++){let it=Ee(e,.16,.42),{p:lt,tangent:ot}=d(Be,it),ct=Math.min(st.length-1,Math.max(0,Math.round(it*(st.length-1)))),zt=st[ct],fn=He/3*Math.PI*2+Ee(e,-.5,.5),Ht=h(ot,Ee(e,.95,1.2),fn);Ht.y-=Ee(e,.02,.07),Ht.z>-.02&&(Ht.z=-.02-e()*.12),u(lt.clone().addScaledVector(ot,-.06),Ht.normalize(),$e*Ee(e,.78,1.02),Math.max(.018,zt*Ee(e,.45,.62)),1,Ke+.012*He)}}let p=Ee(e,3.15,3.6);u(new M(0,0,0),new M(Ee(e,-.1,.1),1,Ee(e,-.1,.1)).normalize(),p,Ee(e,.17,.21),0,.06);let m=[],x=new mt({color:7295288,map:vi,bumpMap:vi,bumpScale:.035,roughness:.94,metalness:0,flatShading:!1}),f=new mt({color:9268301,map:vi,bumpMap:vi,bumpScale:.03,roughness:.9,metalness:0,flatShading:!1});function g(Z,ue,ge,se,ee,xe){let Ke=[Z.clone()],nt=[se],qe=ue.clone().normalize(),Be=ge/ee,st=e()*Math.PI*2,B=e()*Math.PI*2;for(let at=1;at<=ee;at++){let $e=at/ee;qe.x+=Ee(e,-xe,xe)+Math.sin(at*.72+st)*xe*.62,qe.z+=Ee(e,-xe*.55,xe*.55)+Math.cos(at*.55+B)*xe*.38,qe.y-=.015+.075*$e,qe.normalize();let Fe=Ke[at-1].clone().addScaledVector(qe,Be);Fe.y=Math.max(-5.8,Fe.y),Fe.x>8?Fe.x=8:Fe.x<-8&&(Fe.x=-8),Fe.z=Math.min(.26,Math.max(.035,Fe.z)),Ke.push(Fe),nt.push(Math.max(.0035,se*(1-.88*Math.pow($e,.8))))}return{pts:Ke,radii:nt}}function v(Z,ue,ge,se,ee,xe){let Ke=l(Z,ue,ge);s.push(Ke);let nt=new rt(Ke,xe<=1?x:f);nt.userData.part="root",nt.receiveShadow=!1,nt.castShadow=!1,nt.frustumCulled=!1,t.add(nt);let qe={mesh:nt,pts:Z,radii:ue,rings:Z.length,radial:ge,basePos:Float32Array.from(Ke.attributes.position.array),lastK:-1};return m.push({...qe,g0:se,g1:ee,depth:xe}),qe}function _(Z,ue,ge,se,ee,xe){let Ke=ee===0?16:ee===1?9:ee===2?6:4,nt=ee===0?10:ee===1?7:ee===2?5:4,{pts:qe,radii:Be}=g(Z,ue,ge,se,Ke,ee===0?.22:.28),st=[.025,.02,.015,.01][Math.min(3,ee)],B=Math.min(.86,xe+st);if(v(qe,Be,nt,xe,B,ee),ee>=3)return;let at=ee===0?12:ee===1?3:2;for(let $e=0;$e<at;$e++){let Fe=ee===0?Ee(e,.06,.94):Ee(e,.18,.92),Ft=Math.min(Ke,Math.max(1,Math.round(Fe*Ke))),He=qe[Ft].clone(),it=Be[Ft],lt=e()<.5?-1:1,ot=Ee(e,.6,1.35),ct=new M(lt*Math.sin(ot)+Ee(e,-.3,.3),-Math.cos(ot)*Ee(e,.3,.75),Ee(e,-.25,.5)).normalize();_(He,ct,ge*Ee(e,.3,.55),Math.max(.01,it*Ee(e,.56,.8)),ee+1,B+.012*$e)}}_(new M(0,-.05,.06),new M(Ee(e,-.12,.12),-1,Ee(e,-.06,.14)),Ee(e,2.8,3.4),.11,0,.012);for(let Z=0;Z<6;Z++){let ue=Z/6*Math.PI*2+Ee(e,-.5,.5);_(new M(Math.cos(ue)*.07,-.06,.02+Math.sin(ue)*.05),new M(Math.cos(ue)*1.1,-.55,Math.sin(ue)*.5).normalize(),Ee(e,1.2,1.7),.075,1,.045)}let y=[];for(let Z=0;Z<=8;Z++){let ue=Z/8;y.push(new ce(.1+.125*Math.pow(1-ue,1.15),-.75*ue))}let R=new Fr(y,16);s.push(R);let T=new mt({color:6965808,map:vi,bumpMap:vi,bumpScale:.07,roughness:.98,metalness:0}),I=new rt(R,T);I.userData.part="root",I.position.set(0,-.015,0),I.scale.setScalar(.001),I.castShadow=!0,I.receiveShadow=!0,t.add(I);let U=[],O=Rn(Math.floor(e()*1e9)^1374496523);for(let Z of m)for(let ue=2;ue<Z.pts.length-1;ue+=2){let ge=Z.pts[ue],se=new M().subVectors(Z.pts[ue+1],Z.pts[ue-1]).normalize(),ee=new M().crossVectors(se,On);ee.lengthSq()<1e-5&&ee.set(1,0,0),ee.normalize();for(let xe=0;xe<2;xe++){let Ke=ee.clone().applyAxisAngle(se,O()*Math.PI*2),nt=.01+O()*.028,qe=ge.clone().addScaledVector(Ke,nt);U.push(ge.x,ge.y,ge.z,qe.x,qe.y,qe.z)}}let k=new et;k.setAttribute("position",new Re(U,3));let X=new xs({color:9005899,transparent:!0,opacity:.3,depthWrite:!1}),G=new co(k,X);G.userData.part="root",t.add(G),s.push(k);let q=Math.min(i.length,4e4),H=new Jt(Vo,xp,q);H.userData.part="leaf",H.instanceMatrix.setUsage(ji),H.castShadow=!0,H.frustumCulled=!1,t.add(H);let J=[],Q=new ve;for(let Z=0;Z<q;Z++){let ue=i[Z],ge=new yt().setFromUnitVectors(On,ue.dir);ge.multiply(new yt().setFromAxisAngle(On,e()*Math.PI*2));let se=new ve,ee=e();ee<.45?se.setHex(14836266):ee<.75?se.setHex(15708196):ee<.92?se.setHex(13185068):se.setHex(10320682);let xe=ue.pos.clone();xe.z=Math.min(xe.z,-.03-e()*.12),xe.y=Math.max(.18,xe.y);let Ke=ue.branch?Fp(ue.branch.pts,ue.siteT):xe.clone(),nt=xe.clone().sub(Ke);J.push({pos:xe,quat:ge,size:Ee(e,.2,.34)*(ue.sizeScale||1),grow:ue.g,stag:ue.stag,autumn:se,tone:Ee(e,.82,1.14),phase:e()*Math.PI*2,spin:Ee(e,.4,1.2),branch:ue.branch,siteT:ue.siteT,offset:nt}),H.setColorAt(Z,Q.setHex(16777215))}H.instanceColor&&(H.instanceColor.needsUpdate=!0);let le=56,oe=new Kn(1,14,11),we=new mt({roughness:.38,metalness:0}),Se=new Jt(oe,we,le);Se.userData.part="fruit",Se.instanceMatrix.setUsage(ji),Se.castShadow=!0,Se.frustumCulled=!1,t.add(Se);let re=new ki(.008,.011,.075,5,1);re.translate(0,.037,0);let he=new mt({color:5980711,roughness:1,metalness:0}),me=new Jt(re,he,le);me.userData.part="fruit",me.instanceMatrix.setUsage(ji),me.frustumCulled=!1,t.add(me);let ye=[],fe=J.filter(Z=>Z.pos.y>1.2&&Math.hypot(Z.pos.x,Z.pos.z)>1.6),w=fe.length>20?fe:J;for(let Z=0;Z<le;Z++){let ge=w[Math.floor(e()*w.length)].pos.clone();ge.y-=.05+e()*.07,ge.x+=Ee(e,-.05,.05),ge.z+=Ee(e,-.05,.05);let se=new ve,ee=e();ee<.62?se.setHex(12595754):ee<.86?se.setHex(14177580):se.setHex(14725690),ye.push({pos:ge,size:Ee(e,.085,.135),quat:new yt().setFromEuler(new Pt(e()*3,e()*3,e()*3)),phase:e()*Math.PI*2,stag:e()}),Se.setColorAt(Z,se),me.setColorAt(Z,Q.setHex(16777215))}Se.instanceColor&&(Se.instanceColor.needsUpdate=!0),me.instanceColor&&(me.instanceColor.needsUpdate=!0);let b=Math.min(2400,Math.floor(J.length*.11)),D=new un(1,1),L=new mt({map:Jp,alphaTest:.3,side:Nn,roughness:.9,metalness:0,transparent:!0,opacity:0}),A=new Jt(D,L,b);A.userData.part="flower",A.instanceMatrix.setUsage(ji),A.frustumCulled=!1,t.add(A);let P=[],S=new ve;for(let Z=0;Z<b;Z++){let ge=J[Math.floor(e()*J.length)].pos.clone(),se=new yt().setFromEuler(new Pt(e()*3,e()*3,e()*3)),ee=Ee(e,.045,.09);P.push({pos:ge,quat:se,size:ee}),e()<.7?S.setHex(16774904):S.setHex(16767462),A.setColorAt(Z,S),A.setMatrixAt(Z,new Le().compose(ge,se,new M(ee,ee,ee)))}A.instanceColor&&(A.instanceColor.needsUpdate=!0),A.instanceMatrix.needsUpdate=!0;let C=[];for(let Z of n){if(Z.depth<1)continue;let ue=Z.depth>=3?2:1;for(let ge=0;ge<ue;ge++){let se=Math.floor(Ee(e,.25,.96)*(Z.pts.length-1)),ee=Z.pts[se].clone(),xe=Z.radii?Z.radii[se]:.02;ee.y+=xe*1.05+.008,C.push({pos:ee,s:.038+xe*1.8})}}let F=new Kn(1,6,4),te=new mt({color:16252159,roughness:.82,metalness:0,transparent:!0,opacity:0}),N=new Jt(F,te,C.length);N.userData.part="snow",N.instanceMatrix.setUsage(ji),N.frustumCulled=!1,t.add(N);let K=C.map(Z=>({pos:Z.pos,quat:new yt().setFromEuler(new Pt(e()*.4,e()*3,e()*.4)),sx:Z.s*Ee(e,.65,.95),sy:Z.s*.48,sz:Z.s*Ee(e,.65,.95)}));for(let Z=0;Z<K.length;Z++){let ue=K[Z];N.setMatrixAt(Z,new Le().compose(ue.pos,ue.quat,new M(ue.sx,ue.sy,ue.sz)))}N.instanceMatrix.needsUpdate=!0;let $=new mt({map:C0(),roughness:.52,metalness:.02}),ne=new hn;ne.userData.part="seed",ne.position.set(0,.055,.07),ne.rotation.set(.42,.6,.15);let V=new rt(new Kn(.145,24,16,0,Math.PI*2,0,Math.PI*.5),$),z=new rt(new Kn(.145,24,16,0,Math.PI*2,Math.PI*.5,Math.PI*.5),$);V.scale.set(1,.78,1.3),z.scale.set(1,.78,1.3),V.castShadow=!0,z.castShadow=!0,ne.add(V,z);let ae=new rt(new ws(.128,.006,6,32),new mt({color:2758924,roughness:1,metalness:0}));ae.rotation.x=Math.PI/2,ne.add(ae),t.add(ne);let Ae=xp.clone(),Ie=[];for(let Z=0;Z<2;Z++){let ue=new rt(Vo,Ae);ue.userData.part="cotyledon",ue.scale.setScalar(.001),ue.position.set(Z===0?-.035:.035,.1,.03),ue.rotation.set(Z===0?.35:-.35,Z===0?-1.15:1.15,Z===0?.85:-.85),t.add(ue),Ie.push(ue)}let De={group:t,branches:n,leaves:H,leafData:J,roots:m,flare:I,flareMat:T,rootMats:[x,f],rootHairMat:X,seedMesh:ne,seedTop:V,seedBottom:z,seedCrack:ae,seedMat:$,cotyledons:Ie,cotyledonMat:Ae,geos:s,fruits:Se,stems:me,fruitData:ye,fruitGeo:oe,fruitMat:we,stemGeo:re,stemMat:he,blossoms:A,blossomMat:L,blossomGeo:D,blossomData:P,snowCaps:N,snowCapGeo:F,snowCapMat:te,snowCapData:K,radius:0};Gs.add(t);let Me=0;for(let Z of n)Me=Math.max(Me,Z.start.y+Z.len);return De.height=Me,De}function Q0(r){if(r){Gs.remove(r.group);for(let e of r.geos)e.dispose();r.leaves.dispose(),r.seedMesh.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),r.cotyledonMat.dispose();for(let e of r.rootMats)e.dispose();r.rootHairMat&&r.rootHairMat.dispose(),r.flareMat&&r.flareMat.dispose(),r.fruitGeo.dispose(),r.fruitMat.dispose(),r.stemGeo.dispose(),r.stemMat.dispose(),r.blossoms&&(r.blossoms.dispose(),r.blossomMat.dispose(),r.blossomGeo.dispose()),r.snowCaps&&(r.snowCaps.dispose(),r.snowCapMat.dispose(),r.snowCapGeo.dispose())}}function Kp(){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.5,"rgba(255,255,255,0.75)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);let i=new Dt(e);return i.colorSpace=dt,i}var Zs=9e3,Go=new et,Uo=new Float32Array(Zs*3),$p=new Float32Array(Zs),qh=new Float32Array(Zs);for(let r=0;r<Zs;r++)Uo[r*3]=(Math.random()-.5)*56,Uo[r*3+1]=Math.random()*26,Uo[r*3+2]=(Math.random()-.5)*56,$p[r]=.3+Math.random()*.55,qh[r]=Math.random()*Math.PI*2;Go.setAttribute("position",new It(Uo,3));var Qp=new Hi({size:.3,map:Kp(),transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0,color:16777215,fog:!1}),Wo=new Br(Go,Qp);Wo.frustumCulled=!1;Te.add(Wo);function ev(){let t=document.createElement("canvas");t.width=32,t.height=128;let n=t.getContext("2d"),i=n.createLinearGradient(0,0,0,128);i.addColorStop(0,"rgba(210,230,245,0)"),i.addColorStop(.25,"rgba(220,238,250,0.55)"),i.addColorStop(.75,"rgba(235,246,255,0.75)"),i.addColorStop(1,"rgba(235,246,255,0)"),n.fillStyle=i,n.fillRect(32*.4,0,32*.2,128);let s=new Dt(t);return s.colorSpace=dt,s}var $o=1400,Xo=new et,Do=new Float32Array($o*3),ef=new Float32Array($o);for(let r=0;r<$o;r++)Do[r*3]=(Math.random()-.5)*24,Do[r*3+1]=Math.random()*8,Do[r*3+2]=-9+Math.random()*9,ef[r]=10+Math.random()*8;Xo.setAttribute("position",new It(Do,3));var tf=new Hi({size:.46,map:ev(),transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0,color:14084342,fog:!1}),jo=new Br(Xo,tf);jo.frustumCulled=!1;Te.add(jo);var tv=[[16,31,.62],[40,54,.55],[62,72,.45],[128,138,.5],[206,216,.4]];function nv(r){let e=0;for(let[t,n,i]of tv)if(r>t&&r<n){let s=(r-t)/(n-t);e=Math.max(e,i*Pe(0,.18,s)*(1-Pe(.82,1,s)))}return e}var ei=220,nf=new mt({map:du,alphaTest:.45,side:Nn,roughness:.9,transparent:!1}),rn=new Jt(Vo,nf,ei);rn.instanceMatrix.setUsage(ji);rn.frustumCulled=!1;var Ws=[],Gr=new Le().makeScale(1e-4,1e-4,1e-4);for(let r=0;r<ei;r++)Ws.push({life:0,pos:new M,vel:new M,rot:new M,spin:new M,size:.2,color:new ve(16777215)}),rn.setMatrixAt(r,Gr),rn.setColorAt(r,Io.setHex(16777215));Te.add(rn);var Ds=0;function iv(r){let e=Ws[Ds];Ds=(Ds+1)%ei,e.life=1,e.pos.set((Math.random()-.5)*7,1+Math.random()*5.5,(Math.random()-.5)*7),e.vel.set((Math.random()-.5)*.5,-(.5+Math.random()*.5),(Math.random()-.5)*.5),e.rot.set(Math.random()*6.28,Math.random()*6.28,Math.random()*6.28),e.spin.set((Math.random()-.5)*2.4,(Math.random()-.5)*2.4,(Math.random()-.5)*2.4),e.size=.16+Math.random()*.1,e.color.copy(r),rn.setColorAt((Ds+ei-1)%ei,r),rn.instanceColor&&(rn.instanceColor.needsUpdate=!0)}var je={theta:1.46,phi:1.46,radius:12.5,dir:1,target:new M(0,3.3,0)},Yh=Math.PI/2-.62,Zh=Math.PI/2+.62,Ps=[[0,.1,.9],[18,.08,1.1],[32,0,1.3],[42,-.55,2.7],[56,-.7,3.1],[70,0,1.8],[76,.35,2.2],[94,1.2,3.8],[108,2.2,5.2],[120,3,10.8]];function rv(r){if(r>=Ps[Ps.length-1][0])return null;for(let e=1;e<Ps.length;e++){let[t,n,i]=Ps[e];if(r<=t){let[s,a,o]=Ps[e-1],l=Pe(0,1,(r-s)/Math.max(.001,t-s));return{targetY:a+(n-a)*l,viewH:o+(i-o)*l}}}return null}var Qo=-999,Tn=new Map,Bs=0,yp=0,Qi=Bt.domElement;Qi.style.touchAction="none";Qi.addEventListener("pointerdown",r=>{Tn.set(r.pointerId,{x:r.clientX,y:r.clientY,sx:r.clientX,sy:r.clientY,moved:!1}),Qo=performance.now(),Qi.setPointerCapture(r.pointerId)});Qi.addEventListener("pointermove",r=>{let e=Tn.get(r.pointerId);if(!e)return;let t=r.clientX-e.x,n=r.clientY-e.y;if(e.x=r.clientX,e.y=r.clientY,Math.hypot(r.clientX-e.sx,r.clientY-e.sy)>6&&(e.moved=!0),Qo=performance.now(),Tn.size===1)je.theta=Qn(je.theta-t*.006,Yh,Zh),je.phi=Qn(je.phi-n*.005,.42,1.52);else if(Tn.size===2){let[i,s]=[...Tn.values()],a=Math.hypot(i.x-s.x,i.y-s.y);Bs>0?je.radius=Qn(yp*(Bs/a),5.5,30):(Bs=a,yp=je.radius)}});function sv(r){let e=Tn.get(r.pointerId);Tn.delete(r.pointerId),Tn.size<2&&(Bs=0),e&&!e.moved&&Tn.size===0&&Tf(r.clientX,r.clientY)}function av(r){Tn.delete(r.pointerId),Tn.size<2&&(Bs=0)}Qi.addEventListener("pointerup",sv);Qi.addEventListener("pointercancel",av);Qi.addEventListener("wheel",r=>{r.preventDefault(),je.radius=Qn(je.radius*Math.exp(r.deltaY*.0012),5.5,30),Qo=performance.now()},{passive:!1});var Ao=document.getElementById("season"),Bh=document.getElementById("sub"),ov=document.getElementById("year"),lv=document.getElementById("chapterIndex"),Ro=document.getElementById("chapterTitle"),cv=document.getElementById("chapterText"),hv=document.getElementById("player"),Jh=document.getElementById("playBtn"),uv=document.getElementById("replayBtn"),yi=document.getElementById("timeline"),dv=document.getElementById("timecode"),pv=document.getElementById("marks"),fv=document.getElementById("narration"),Js=document.getElementById("startScreen"),mv=document.getElementById("startClassBtn"),gv=document.getElementById("freeViewBtn"),hx=document.getElementById("classroomTop"),Mp=document.getElementById("classChapterIndex"),Sp=document.getElementById("classChapterTitle"),Fh=document.getElementById("classSeason"),vv=document.getElementById("classChapterBtn"),_v=document.getElementById("classTeacherBtn"),xv=document.getElementById("classFindBtn"),yv=document.getElementById("classQuartetBtn"),No=document.getElementById("classAutoBtn"),Kh=document.getElementById("classProjectorBtn"),$h=document.getElementById("classLockBtn"),Mv=document.getElementById("classExitBtn"),ux=document.getElementById("seasonWheel"),Ep=document.getElementById("wheelNeedle"),bp=document.getElementById("wheelYear"),wp=document.getElementById("subtitleText"),Tp=document.getElementById("subtitleMeta"),Ap=document.getElementById("classTimecode"),Sv=document.getElementById("classPrevBtn"),Oo=document.getElementById("classPlayBtn"),Ev=document.getElementById("classNextBtn"),Qh=document.getElementById("classVoiceBtn"),bv=document.getElementById("classReplayBtn"),Ks=document.getElementById("chapterDrawer"),eu=document.getElementById("chapterGrid"),pu=document.getElementById("teacherPanel"),wv=document.getElementById("teacherTitle"),Rp=document.getElementById("teacherBody"),Tv=document.getElementById("quartetOverlay"),Cp=document.getElementById("quartetGrid"),qo=document.getElementById("partCard"),Av=document.getElementById("partGlyph"),Rv=document.getElementById("partName"),Cv=document.getElementById("partPinyin"),Iv=document.getElementById("partDesc"),Pv=document.getElementById("partClose"),Ki=document.getElementById("findBanner"),Lv=document.getElementById("findText"),Ip=document.getElementById("findProgress"),tu=document.getElementById("findNext"),Uv=document.getElementById("findClose"),Fs=document.getElementById("pausePrompt"),Co=document.getElementById("classToast"),er=document.getElementById("lockOverlay"),Dv=document.getElementById("chapterBtnNormal"),Nv=document.getElementById("quartetBtnNormal"),Ov=document.getElementById("classEnterBtn"),zh="",ni=-1,Kt=!1,Mi=!0,$s="speechSynthesis"in window,An=$s,Xr=!1,ii=!1,tr=!1,Si=!1,Bn=null,qr=!1,$i=[],_i=0,nu="",Xs=1,iu=-1,Bo=null,zs=null,Pp=0,Yo=0,Hh=!1,Ei=!1,Wt=[{start:0,end:16,title:"\u79CD\u5B50\u5165\u571F",text:"\u4E00\u9897\u5C0F\u5C0F\u7684\u79CD\u5B50\u843D\u8FDB\u677E\u8F6F\u7684\u6CE5\u571F\u91CC\u3002\u5B83\u5B89\u9759\u5730\u8EBA\u7740\uFF0C\u7B49\u5F85\u6C34\u5206\u548C\u6E29\u6696\u628A\u5B83\u5524\u9192\u3002"},{start:16,end:32,title:"\u6625\u96E8\u6ECB\u6DA6",text:"\u6625\u96E8\u843D\u4E0B\u6765\uFF0C\u79CD\u5B50\u559D\u9971\u4E86\u6C34\uFF0C\u8EAB\u4F53\u6162\u6162\u80C0\u5927\uFF0C\u575A\u786C\u7684\u5916\u58F3\u4ECE\u4E2D\u95F4\u88C2\u5F00\u4E00\u6761\u7F1D\u3002"},{start:32,end:56,title:"\u5411\u4E0B\u624E\u6839",text:"\u6700\u5148\u94BB\u51FA\u6765\u7684\u4E0D\u662F\u53F6\u5B50\uFF0C\u800C\u662F\u6839\u3002\u4E3B\u6839\u5411\u4E0B\u63A2\u7D22\uFF0C\u4FA7\u6839\u5411\u56DB\u5468\u94FA\u5F00\uFF0C\u628A\u6CE5\u571F\u7262\u7262\u6293\u4F4F\u3002"},{start:56,end:76,title:"\u7834\u571F\u53D1\u82BD",text:"\u5AE9\u82BD\u9876\u7740\u79CD\u58F3\u94BB\u51FA\u5730\u9762\uFF0C\u4E24\u7247\u5B50\u53F6\u6162\u6162\u5C55\u5F00\uFF0C\u7B2C\u4E00\u6B21\u89C1\u5230\u9633\u5149\u3002"},{start:76,end:94,title:"\u5E7C\u82D7\u521D\u957F",text:"\u5C0F\u82D7\u628A\u6839\u624E\u5F97\u66F4\u6DF1\uFF0C\u830E\u79C6\u53D8\u7C97\uFF0C\u7B2C\u4E00\u7247\u771F\u53F6\u8212\u5C55\u5F00\u6765\uFF0C\u5B83\u5F00\u59CB\u81EA\u5DF1\u5236\u9020\u517B\u5206\u3002"},{start:94,end:108,title:"\u5C0F\u6811\u6210\u5F62",text:"\u98CE\u5439\u8FC7\uFF0C\u96E8\u843D\u4E0B\uFF0C\u5C0F\u6811\u5728\u4E00\u6B21\u6B21\u6447\u6643\u4E2D\u53D8\u5F97\u66F4\u7ED3\u5B9E\uFF0C\u679D\u4E2B\u4E00\u5C42\u5C42\u5411\u5916\u4F38\u5C55\u3002"},{start:108,end:120,title:"\u957F\u6210\u5927\u6811",text:"\u4E00\u5E74\u53C8\u4E00\u5E74\uFF0C\u6811\u5E72\u7C97\u58EE\uFF0C\u6811\u51A0\u5982\u4F1E\uFF0C\u5B83\u7EC8\u4E8E\u957F\u6210\u4E86\u4E00\u68F5\u5927\u6811\u3002"},{start:120,end:140,title:"\u7B2C\u4E00\u5E74 \xB7 \u590F",text:"\u590F\u5929\u5230\u4E86\uFF0C\u53F6\u5B50\u6D53\u7EFF\uFF0C\u9633\u5149\u7A7F\u8FC7\u6811\u51A0\uFF0C\u6811\u836B\u4E0B\u51C9\u5FEB\u6781\u4E86\u3002"},{start:140,end:160,title:"\u7B2C\u4E00\u5E74 \xB7 \u79CB",text:"\u79CB\u5929\uFF0C\u53F6\u5B50\u53D8\u6210\u7EA2\u548C\u91D1\uFF0C\u4E00\u7247\u7247\u98D8\u843D\uFF0C\u6162\u6162\u8150\u70C2\uFF0C\u53D8\u6210\u6CE5\u571F\u91CC\u7684\u517B\u5206\u3002"},{start:160,end:180,title:"\u7B2C\u4E00\u5E74 \xB7 \u51AC",text:"\u51AC\u5929\uFF0C\u679D\u5934\u843D\u6EE1\u767D\u96EA\uFF0C\u6811\u5B89\u9759\u5730\u7761\u7740\uFF0C\u6839\u8FD8\u5728\u571F\u91CC\u547C\u5438\u3002"},{start:180,end:200,title:"\u7B2C\u4E8C\u5E74 \xB7 \u6625",text:"\u7B2C\u4E8C\u5E74\u6625\u5929\uFF0C\u6811\u53C8\u9192\u6765\uFF0C\u65B0\u82BD\u548C\u82B1\u6735\u4E00\u8D77\u5192\u51FA\u6765\u3002"},{start:200,end:220,title:"\u7B2C\u4E8C\u5E74 \xB7 \u590F",text:"\u590F\u5929\uFF0C\u6811\u836B\u50CF\u4E00\u628A\u5927\u4F1E\uFF0C\u5C0F\u9E1F\u548C\u6606\u866B\u90FD\u6765\u8FD9\u91CC\u4F11\u606F\u3002"},{start:220,end:240,title:"\u7B2C\u4E8C\u5E74 \xB7 \u79CB",text:"\u7B2C\u4E8C\u5E74\u79CB\u5929\uFF0C\u679D\u5934\u7ED3\u51FA\u679C\u5B9E\uFF0C\u679C\u5B9E\u91CC\u6709\u65B0\u7684\u79CD\u5B50\uFF0C\u751F\u547D\u5C31\u8FD9\u6837\u4F20\u4E0B\u53BB\u3002"},{start:240,end:260,title:"\u7B2C\u4E8C\u5E74 \xB7 \u51AC",text:"\u51AC\u5929\u53C8\u6765\u4E86\uFF0C\u4E00\u5E74\u7ED3\u675F\uFF0C\u65B0\u7684\u8F6E\u56DE\u53C8\u8981\u5F00\u59CB\u3002"}],Lp=[{q:"\u79CD\u5B50\u4F4F\u5728\u54EA\u91CC\uFF1F\u5B83\u8981\u559D\u4EC0\u4E48\u624D\u80FD\u9192\u6765\uFF1F",a:"\u62B1\u819D\u8E72\u4E0B\uFF0C\u5047\u88C5\u81EA\u5DF1\u662F\u4E00\u9897\u5C0F\u79CD\u5B50\u3002"},{q:"\u79CD\u5B50\u559D\u9971\u6C34\u4EE5\u540E\uFF0C\u5916\u9762\u7684\u58F3\u4F1A\u600E\u4E48\u6837\uFF1F",a:"\u624B\u6307\u8F7B\u8F7B\u70B9\u819D\u76D6\uFF0C\u6A21\u4EFF\u6625\u96E8\u4E00\u6EF4\u4E00\u6EF4\u843D\u4E0B\u6765\u3002"},{q:"\u5148\u94BB\u51FA\u6765\u7684\u662F\u53F6\u5B50\uFF0C\u8FD8\u662F\u6839\uFF1F",a:"\u53CC\u624B\u5411\u4E0B\u4F38\uFF0C\u5B66\u6839\u5F80\u6CE5\u571F\u6DF1\u5904\u94BB\u3002"},{q:"\u5AE9\u82BD\u9876\u5F00\u6CE5\u571F\u7684\u65F6\u5019\uFF0C\u7528\u4E86\u591A\u5927\u7684\u529B\u6C14\uFF1F",a:"\u6162\u6162\u7AD9\u8D77\u6765\uFF0C\u53CC\u624B\u5411\u4E0A\u4E3E\uFF0C\u5B66\u5AE9\u82BD\u9876\u5F00\u6CE5\u571F\u3002"},{q:"\u7B2C\u4E00\u7247\u771F\u53F6\u662F\u4EC0\u4E48\u989C\u8272\uFF1F\u5B83\u4E3A\u4EC0\u4E48\u9700\u8981\u9633\u5149\uFF1F",a:"\u624B\u638C\u644A\u5F00\uFF0C\u5F53\u4E00\u7247\u5C0F\u53F6\u5B50\u6652\u6652\u592A\u9633\u3002"},{q:"\u5C0F\u6811\u88AB\u98CE\u5439\u5F97\u6447\u6765\u6447\u53BB\uFF0C\u4E3A\u4EC0\u4E48\u6CA1\u6709\u5012\uFF1F",a:"\u5DE6\u53F3\u8F7B\u8F7B\u6447\u6446\uFF0C\u50CF\u4E00\u68F5\u5C0F\u6811\u5728\u98CE\u91CC\u3002"},{q:"\u5927\u6811\u6709\u591A\u5927\uFF1F\u6211\u4EEC\u4E00\u8D77\u6765\u62B1\u4E00\u62B1\u3002",a:"\u5F20\u5F00\u53CC\u81C2\uFF0C\u56F4\u6210\u4E00\u4E2A\u5927\u5706\u5708\u3002"},{q:"\u590F\u5929\u7AD9\u5728\u6811\u4E0B\uFF0C\u4E3A\u4EC0\u4E48\u89C9\u5F97\u51C9\u5FEB\uFF1F",a:"\u53CC\u624B\u642D\u5728\u5934\u9876\uFF0C\u505A\u4E00\u4E2A\u5C0F\u51C9\u68DA\u3002"},{q:"\u843D\u53F6\u98D8\u4E0B\u6765\u4EE5\u540E\uFF0C\u53BB\u4E86\u54EA\u91CC\uFF1F",a:"\u624B\u6307\u8F6C\u5708\uFF0C\u6162\u6162\u843D\u5230\u5730\u4E0A\uFF0C\u518D\u53D8\u6210\u6CE5\u571F\u7684\u517B\u5206\u3002"},{q:"\u51AC\u5929\u5927\u6811\u7761\u7740\u4E86\u5417\uFF1F\u96EA\u843D\u5728\u54EA\u91CC\uFF1F",a:"\u62B1\u8D77\u624B\u81C2\u8F7B\u8F7B\u6447\u6643\uFF0C\u5B66\u5927\u6811\u5728\u96EA\u91CC\u4F11\u606F\u3002"},{q:"\u7B2C\u4E8C\u5E74\u6625\u5929\uFF0C\u6811\u4E0A\u5148\u5F00\u51FA\u4EC0\u4E48\uFF1F",a:"\u53CC\u624B\u4ECE\u4E0B\u5DF4\u5411\u5916\u6253\u5F00\uFF0C\u5B66\u4E00\u6735\u82B1\u6162\u6162\u5F00\u653E\u3002"},{q:"\u590F\u5929\u8C01\u4F1A\u5728\u6811\u836B\u4E0B\u4F11\u606F\uFF1F",a:"\u5B66\u5C0F\u9E1F\u98DE\u4E00\u98DE\uFF0C\u518D\u627E\u4E2A\u6811\u836B\u505C\u4E0B\u6765\u3002"},{q:"\u679C\u5B9E\u91CC\u9762\u85CF\u7740\u4EC0\u4E48\uFF1F",a:"\u53CC\u624B\u6367\u6210\u4E00\u4E2A\u5C0F\u679C\u5B50\uFF0C\u91CC\u9762\u85CF\u7740\u65B0\u7684\u79CD\u5B50\u3002"},{q:"\u4E00\u5E74\u7ED3\u675F\u4E86\uFF0C\u660E\u5E74\u8FD8\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF1F",a:"\u7528\u624B\u753B\u4E00\u4E2A\u5927\u5706\u5708\uFF1A\u6625\u590F\u79CB\u51AC\uFF0C\u53C8\u56DE\u6765\u4E86\u3002"}],Bv=[["seed"],["seed"],["root","seed"],["root","trunk","cotyledon"],["leaf","trunk","root"],["leaf","branch","trunk","root"],["leaf","branch","trunk","root"],["leaf","branch","trunk","root"],["leaf","branch","trunk","root"],["branch","trunk","snow"],["flower","leaf","branch","trunk"],["leaf","branch","trunk","root"],["fruit","leaf","branch","trunk"],["snow","branch","trunk"]],Hs={seed:{name:"\u79CD\u5B50",pinyin:"zh\u01D2ng zi",desc:"\u79CD\u5B50\u7761\u5728\u6CE5\u571F\u91CC\uFF0C\u559D\u9971\u96E8\u6C34\u5C31\u4F1A\u6162\u6162\u9192\u6765\u3002"},root:{name:"\u6839",pinyin:"g\u0113n",desc:"\u6839\u628A\u6811\u7262\u7262\u6293\u4F4F\uFF0C\u8FD8\u5E2E\u5927\u6811\u559D\u6C34\u3002"},trunk:{name:"\u6811\u5E72",pinyin:"sh\xF9 g\xE0n",desc:"\u6811\u5E72\u53C8\u7C97\u53C8\u7ED3\u5B9E\uFF0C\u628A\u6C34\u548C\u517B\u5206\u9001\u5230\u6811\u679D\u4E0A\u3002"},branch:{name:"\u6811\u679D",pinyin:"sh\xF9 zh\u012B",desc:"\u6811\u679D\u5411\u56DB\u5468\u4F38\u5F00\uFF0C\u7ED9\u53F6\u5B50\u5B89\u5BB6\u3002"},leaf:{name:"\u53F6",pinyin:"y\xE8",desc:"\u53F6\u5B50\u6652\u7740\u592A\u9633\uFF0C\u4E3A\u5927\u6811\u5236\u9020\u517B\u5206\u3002"},cotyledon:{name:"\u5B50\u53F6",pinyin:"z\u01D0 y\xE8",desc:"\u5B50\u53F6\u662F\u79CD\u5B50\u5148\u957F\u51FA\u7684\u4E24\u7247\u5C0F\u53F6\u5B50\uFF0C\u5E2E\u5AE9\u82BD\u89C1\u9633\u5149\u3002"},flower:{name:"\u82B1",pinyin:"hu\u0101",desc:"\u82B1\u5F00\u7684\u65F6\u5019\uFF0C\u871C\u8702\u548C\u5C0F\u9E1F\u90FD\u6765\u4E86\u3002"},fruit:{name:"\u679C",pinyin:"gu\u01D2",desc:"\u679C\u5B9E\u91CC\u6709\u65B0\u7684\u79CD\u5B50\uFF0C\u751F\u547D\u5C31\u8FD9\u6837\u4F20\u4E0B\u53BB\u3002"},snow:{name:"\u96EA",pinyin:"xu\u011B",desc:"\u96EA\u82B1\u843D\u5728\u6811\u679D\u4E0A\uFF0C\u5927\u6811\u5728\u51AC\u5929\u5B89\u9759\u5730\u4F11\u606F\u3002"}},Fv=/(种子|泥土|水分|温暖|春雨|外壳|侧根|主根|根|嫩芽|种壳|子叶|真叶|阳光|养分|枝丫|树干|树冠|叶子|树荫|落叶|白雪|新芽|花朵|果实|小鸟|昆虫|轮回)/g;function zv(r){return r.replace(Fv,"<em>$1</em>")}var rf=new URLSearchParams(location.search).get("t0"),sf=(()=>{let r=parseFloat(rf);return isNaN(r)?0:r})(),ti=/(^|[?&])freeze(=|&|$)/.test(location.search)?sf:null,Fn=/(^|[?&])video(=|&|$)/.test(location.search),af=/(^|[?&])class(=|&|$)/.test(location.search),fu=/(^|[?&])stage(=|&|$)/.test(location.search),of=!Fn&&ti===null&&!af&&!fu&&rf===null,lf=0;Fn&&(window.__setVideoT=r=>{lf=r},window.__videoReady=!0);fu&&(document.body.classList.add("stage-only"),Mu());var Oe=Qn(sf,0,Ot),js=null,tt=!Fn&&ti===null&&!of,qs=!1,$t=Oe,Up=performance.now();function Wr(r){return r=Math.max(0,Math.round(r)),String(Math.floor(r/60)).padStart(2,"0")+":"+String(r%60).padStart(2,"0")}function zn(r){let e=0;for(let t=0;t<Wt.length;t++)r>=Wt[t].start&&(e=t);return e}function an(r){let e=zn(r);if(e===ni)return;ni=e,ea();let t=Wt[e];lv.textContent="\u7B2C "+(e+1)+" \u7AE0 / \u5171 "+Wt.length+" \u7AE0",Ro.textContent=t.title,cv.textContent=t.text,Ro.style.animation="none",Ro.offsetWidth,Ro.style.animation="seasonIn .5s ease both",Mp&&(Mp.textContent="\u7B2C "+(e+1)+" \u7AE0 / \u5171 "+Wt.length+" \u7AE0"),Sp&&(Sp.textContent=t.title),wp&&(wp.innerHTML=zv(t.text)),Tp&&(Tp.textContent="\u7B2C "+(e+1)+" \u7AE0 \xB7 "+t.title),df(e),ir(),Kt&&tt&&An&&Qs()}function bt(){yi&&(qs||(yi.value=String(Oe)),yi.style.setProperty("--progress",(Oe/Ot*100).toFixed(2)+"%"),dv.textContent=Wr(Oe)+" / "+Wr(Ot),Jh.textContent=tt?"\u23F8":"\u25B6",Jh.setAttribute("aria-label",tt?"\u6682\u505C":"\u64AD\u653E"),Oo&&(Oo.textContent=tt?"\u23F8":"\u25B6",Oo.setAttribute("aria-label",tt?"\u6682\u505C":"\u64AD\u653E")),Ap&&(Ap.textContent=Wr(Oe)+" / "+Wr(Ot)))}function Zi(r,e=!0){Oe=Qn(r,0,Ot),e&&(tt=!1),$t=Oe,Si=!1,Zr(),nr(),qr&&ri(),ea(),an(Oe),bt()}function mu(){Oe>=Ot-.01&&(Oe=0,$t=0,Si=!1,Ei=!1,an(0)),qr&&(ri(),ea()),tt=!tt,Si=!1,Zr(),tt&&Kt&&An&&Qs(),tt||nr(),bt()}for(let r of Wt){if(r.start<=0)continue;let e=document.createElement("span");e.style.left=r.start/Ot*100+"%",e.title=r.title,r.start>=92&&(e.className="chapter-major"),pv.appendChild(e)}yi.max=Ot.toFixed(1);yi.value=String(Oe);an(Oe);bt();(ti!==null||Fn)&&(hv.style.display="none",fv.style.display="none",document.getElementById("tips").style.display="none",document.getElementById("replant").style.display="none");of?tr=!0:Js.classList.add("hidden");fu&&(Js.classList.add("hidden"),tr=!1);function Hv(){for(let r of["__grass","__flowers","__groundLeaves"]){let e=Te[r];e&&(Te.remove(e),e.material&&e.material.dispose())}Te.__grass=null,Te.__flowers=null,Te.__groundLeaves=null}function gu(r){Q0(_e),Hv();let e=Rn(r^2654435769);Te.__grass=W0(r^1597463007),Te.add(Te.__grass),Te.__flowers=j0(r^668265263),Te.add(Te.__flowers),Te.__groundLeaves=q0(r^374761393),Te.add(Te.__groundLeaves),_e=$0(r);for(let t of Ws)t.life=0;for(let t=0;t<ei;t++)rn.setMatrixAt(t,Gr);rn.instanceMatrix.needsUpdate=!0}var Ys=Math.floor(Math.random()*1e5);gu(Ys);var kv=[[130,"\u590F","\u7B2C 1 \u5E74"],[150,"\u79CB","\u7B2C 1 \u5E74"],[170,"\u51AC","\u7B2C 1 \u5E74"],[190,"\u6625","\u7B2C 2 \u5E74"]],Dp=new As,kh=new ce;function sn(r,e=1800){Co&&(Co.textContent=r,Co.classList.add("show"),clearTimeout(sn._t),sn._t=setTimeout(()=>Co.classList.remove("show"),e))}function jr(r){r&&(r===Ks&&Gv(),r===pu&&df(zn(Oe)),r.classList.add("show"))}function cf(r){r&&r.classList.remove("show")}function hf(){document.querySelectorAll(".modal.show").forEach(r=>r.classList.remove("show"))}function uf(){return!!document.querySelector(".modal.show")}function Vv(r){let e=(au(r)%1+1)%1;return wn[Math.floor(e*4)%4].name}function Gv(){if(!eu)return;let r=zn(Oe);eu.innerHTML=Wt.map((e,t)=>{let n=Vv((e.start+Math.min(e.end,Ot))/2);return'<button class="chapter-item'+(t===r?" current":"")+'" data-index="'+t+'"><div class="chapter-thumb" data-season="'+n+'"></div><div class="chapter-num">\u7B2C '+(t+1)+' \u7AE0</div><div class="chapter-name">'+e.title+'</div><div class="chapter-time">'+Wr(e.start)+"\u2013"+Wr(Math.min(e.end,Ot))+"</div></button>"}).join("")}function df(r){if(!Rp)return;let e=Lp[Qn(r,0,Lp.length-1)];e&&(wv.textContent="\u7B2C "+(r+1)+" \u7AE0 \xB7 "+Wt[r].title,Rp.innerHTML='<div class="teacher-block"><b>\u53EF\u4EE5\u95EE</b><p>'+e.q+'</p></div><div class="teacher-block"><b>\u53EF\u4EE5\u52A8</b><p>'+e.a+"</p></div>")}function vu(r,e=!0){r=Qn(r,0,Wt.length-1);let t=Math.max(.01,Wt[r].start+.01);Zi(t,e),e||(tt=!0,bt())}function pf(){let r=zn(Oe);if(r>=Wt.length-1){Zi(Ot,!0);return}vu(r+1,!0)}function ff(){let r=zn(Oe),e=Oe<=Wt[r].start+1.4;vu(e?Math.max(0,r-1):r,!0)}function Yr(){No&&(No.classList.toggle("on",Mi),No.textContent=Mi?"\u6BCF\u7AE0\u505C \u2713":"\u6BCF\u7AE0\u505C"),Qh&&Qh.classList.toggle("on",An),Kh&&Kh.classList.toggle("on",Xr),$h&&$h.classList.toggle("on",ii)}function mf(r){Mi=!!r,Yr()}function Wv(){mf(!Mi),Mi||Zr(),sn(Mi?"\u6BCF\u7AE0\u7ED3\u675F\u4F1A\u81EA\u52A8\u6682\u505C":"\u5DF2\u5173\u95ED\u81EA\u52A8\u6682\u505C")}function _u(r){Xr=!!r,document.body.classList.toggle("projector",Xr),Yr()}function gf(){_u(!Xr),sn(Xr?"\u6295\u5F71\u589E\u4EAE\u5DF2\u5F00\u542F":"\u6295\u5F71\u589E\u4EAE\u5DF2\u5173\u95ED")}function ru(){if(!$s)return;Bo=(speechSynthesis.getVoices?speechSynthesis.getVoices():[]).find(e=>/zh[-_]?CN|cmn|Chinese|Tingting|Xiaoxiao|Meijia|Huihui/i.test((e.lang||"")+" "+(e.name||"")))||null}$s&&(ru(),speechSynthesis.addEventListener&&speechSynthesis.addEventListener("voiceschanged",ru));function nr(){if($s){try{speechSynthesis.cancel()}catch{}iu=-1,window.dispatchEvent(new CustomEvent("tree:voice",{detail:{speaking:!1}}))}}function Qs(){if(!An||!$s||ti!==null||Fn)return;let r=zn(Oe);if(iu===r&&speechSynthesis.speaking)return;try{speechSynthesis.cancel()}catch{}Bo||ru();let e=new SpeechSynthesisUtterance(Wt[r].text);Bo&&(e.voice=Bo),e.lang="zh-CN",e.rate=.92,e.pitch=1.04,e.volume=1,e.onstart=()=>window.dispatchEvent(new CustomEvent("tree:voice",{detail:{speaking:!0}})),e.onend=()=>window.dispatchEvent(new CustomEvent("tree:voice",{detail:{speaking:!1}})),e.onerror=()=>window.dispatchEvent(new CustomEvent("tree:voice",{detail:{speaking:!1}})),iu=r,window.dispatchEvent(new CustomEvent("tree:voice",{detail:{speaking:!0}}));try{speechSynthesis.speak(e)}catch{window.dispatchEvent(new CustomEvent("tree:voice",{detail:{speaking:!1}}))}}function Xv(){An=!An,Yr(),An?Kt&&tt&&Qs():nr(),sn(An?"\u6545\u4E8B\u59D0\u59D0\u6717\u8BFB\u5DF2\u5F00\u542F":"\u6717\u8BFB\u5DF2\u5173\u95ED")}function jv(){ii=!0,ir(),ri(),er.classList.add("show"),Yr()}function xu(){ii=!1,er.classList.remove("show","holding"),clearTimeout(Yo),Yr(),sn("\u5C4F\u5E55\u5DF2\u89E3\u9501")}function vf(){ii?xu():jv()}function yu(){document.body.classList.remove("idle"),clearTimeout(Pp),Kt&&(Pp=setTimeout(()=>{!uf()&&!tr&&!ii&&document.body.classList.add("idle")},2600))}async function _f(){if(!(!Kt||!("wakeLock"in navigator)))try{zs=await navigator.wakeLock.request("screen")}catch{zs=null}}function qv(){try{zs&&zs.release()}catch{}zs=null}function Mu(){let r=ou();Nt.aspect=r.w/r.h,Nt.updateProjectionMatrix(),Bt.setSize(r.w,r.h)}function xf(){if(document.fullscreenElement)return;let r=document.documentElement;if(!r.requestFullscreen){sn("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u5168\u5C4F\uFF0C\u6309 F11 \u4E5F\u53EF\u4EE5");return}let e=r.requestFullscreen();e&&e.catch&&e.catch(()=>sn("\u5168\u5C4F\u8BF7\u6C42\u88AB\u6D4F\u89C8\u5668\u62E6\u4F4F\u4E86\uFF0C\u6309 F11 \u4E5F\u53EF\u4EE5"))}function Yv(){if(document.fullscreenElement){let r=document.exitFullscreen();r&&r.catch&&r.catch(()=>{})}else xf()}function el(r={}){let e=r.reset!==!1;Kt=!0,tr=!1,Js.classList.add("hidden"),document.body.classList.add("classroom-mode"),document.body.classList.remove("idle"),Mu(),hf(),ri(),ea(),ir(),e&&(Oe=0,$t=0,ni=-1,Ei=!1),tt=!1,mf(!0),_u(!1),Yr(),an(Oe),bt(),!Fn&&ti===null&&r.autoplay!==!1&&(tt=!0,bt(),An&&Qs()),r.fullscreen&&xf(),_f(),yu()}function yf(){if(tt=!1,nr(),ri(),ea(),ir(),Zr(),ii=!1,er.classList.remove("show","holding"),qv(),Kt=!1,document.body.classList.remove("classroom-mode","idle","projector"),_u(!1),Mu(),document.fullscreenElement){let r=document.exitFullscreen();r&&r.catch&&r.catch(()=>{})}tr=!0,Js.classList.remove("hidden"),Oe=0,$t=0,ni=-1,an(0),bt()}function Zv(r){let e=r;for(;e;){if(e.userData&&e.userData.part)return e.userData.part;e=e.parent}return null}function Su(r,e){return r==="seed"?e<80:r==="cotyledon"?e>=54&&e<=82:r==="root"?e>=30:r==="trunk"?e>=52:r==="branch"?e>=90:r==="leaf"?e>=54:r==="flower"?e>=178&&e<=206:r==="fruit"?e>=216&&e<=252:r==="snow"?e>=156&&e<=184||e>=236:!0}function Mf(r){if(!_e)return!1;let e=su(Oe);if(r==="seed")return!!(_e.seedMesh&&_e.seedMesh.visible&&_e.seedMesh.scale.x>.008);if(r==="root")return _e.roots.some(t=>t.mesh.visible);if(r==="trunk")return!!(_e.branches[0]&&_e.branches[0].mesh.visible&&e>.11);if(r==="branch")return _e.branches.some((t,n)=>n>0&&t.mesh.visible)&&e>.24;if(r==="leaf")return e>.13;if(r==="cotyledon")return _e.cotyledons.some(t=>t.visible&&t.scale.x>.04);if(r==="flower")return!!(_e.blossoms&&_e.blossoms.visible&&_e.blossomMat.opacity>.05);if(r==="fruit"){let t=(au(Oe)%1+1)%1;return(zp(Oe)>=2?Pe(.4,.52,t):0)>.02&&t<.82}return r==="snow"?!!(_e.snowCaps&&_e.snowCaps.visible&&_e.snowCapMat.opacity>.05):!1}function Jv(r){if(!_e||!_e.group)return[];let e=[],t=i=>{if(!i)return;let s=i.clone();_e.group.localToWorld(s),e.push(s)},n=i=>{i&&e.push(i.clone())};if(r==="seed")_e.seedMesh&&n(_e.seedMesh.getWorldPosition(new M));else if(r==="root"){for(let i of _e.roots)if(i.mesh.visible)for(let s=0;s<i.pts.length;s+=2)t(i.pts[s])}else if(r==="trunk"){let i=_e.branches[0];if(i&&i.mesh.visible)for(let s=0;s<i.pts.length;s+=2)t(i.pts[s])}else if(r==="branch")for(let i=0;i<_e.branches.length;i++){let s=_e.branches[i];if(!(i===0||!s.mesh.visible))for(let a=0;a<s.pts.length;a+=2)t(s.pts[a])}else if(r==="leaf"){let i=su(Oe);for(let s=0;s<_e.leafData.length;s+=25){let a=_e.leafData[s];a.grow!=null&&a.grow>i+.02||t(a.pos)}}else if(r==="cotyledon")for(let i of _e.cotyledons)i.visible&&i.scale.x>.04&&n(i.getWorldPosition(new M));else if(r==="flower"){if(_e.blossomData)for(let i=0;i<_e.blossomData.length;i+=8)t(_e.blossomData[i].pos)}else if(r==="fruit"){if(_e.fruitData)for(let i=0;i<_e.fruitData.length;i+=2)t(_e.fruitData[i].pos)}else if(r==="snow"&&_e.snowCapData)for(let i of _e.snowCapData)t(i.pos);return e}function Eu(r){if(!_e||!_e.group)return[];let e=Bt.domElement.getBoundingClientRect(),t=[],n=new M;for(let i of Jv(r)){if(n.copy(i).project(Nt),n.z<-1||n.z>1)continue;let s=e.left+(n.x*.5+.5)*e.width,a=e.top+(-n.y*.5+.5)*e.height;s<e.left||s>e.right||a<e.top||a>e.bottom||t.push({x:s,y:a})}return t}function Sf(r){return(Bv[zn(r)]||[]).filter(t=>!Su(t,r)||!Mf(t)?!1:Eu(t).length>=(t==="seed"?1:2))}function Kv(r,e){if(!Bn)return!1;let t=Bt.domElement.getBoundingClientRect(),n=Math.max(40,Math.min(80,t.width*.055)),i=n*n;for(let s of Eu(Bn)){let a=s.x-r,o=s.y-e;if(a*a+o*o<=i)return!0}return!1}function Ef(r,e){if(!_e||!_e.group)return null;let t=Bt.domElement.getBoundingClientRect();kh.x=(r-t.left)/Math.max(1,t.width)*2-1,kh.y=-((e-t.top)/Math.max(1,t.height))*2+1,Dp.setFromCamera(kh,Nt);let n=Dp.intersectObject(_e.group,!0);for(let i of n){let s=Zv(i.object);if(s&&Su(s,Oe)&&Mf(s))return s}return null}function Np(r,e,t){let n=Hs[r];!n||!qo||(Av.textContent=n.name.slice(-1),Rv.textContent=n.name,Cv.textContent=n.pinyin,Iv.textContent=n.desc,qo.classList.add("show"))}function ir(){qo&&qo.classList.remove("show")}function $v(r,e){return r===e||r==="leaf"&&e==="cotyledon"}function ea(){$i=[],_i=0,nu="",Xs=1}function Qv(){let r=Sf(Oe);if(!r.length)return!1;let e=zn(Oe),t=["seed","root","trunk","branch","leaf","cotyledon","flower","fruit","snow"],n=e+"|"+r.join(",");if(n!==nu){let i=t.filter(a=>r.includes(a)),s=i.length?(e*2+1)%i.length:0;$i=i.slice(s).concat(i.slice(0,s)),_i=0,Xs=1,nu=n}return $i.length>0}function bf(){if(!Qv()){sn("\u8FD9\u4E00\u7AE0\u6682\u65F6\u6CA1\u6709\u53EF\u627E\u7684\u90E8\u4F4D\uFF0C\u6362\u4E2A\u7AE0\u8282\u8BD5\u8BD5"),ri();return}_i>=$i.length&&(_i=0,Xs++);let r=_i+1,e=$i.length;Bn=$i[_i],_i++,qr=!0,Lv.innerHTML="\u627E\u4E00\u627E\uFF1A<b>"+Hs[Bn].name+"</b>\u5728\u54EA\u91CC\uFF1F",Ip&&(Ip.textContent="\u7B2C "+Xs+" \u8F6E \xB7 "+r+"/"+e),tu&&(tu.style.display=e>1?"":"none"),Ki.classList.add("show"),Ki.classList.remove("shake"),Zr(),ir(),tt&&(tt=!1,nr(),bt())}function wf(){if(!Kt){sn("\u8BF7\u5148\u8FDB\u5165\u8BFE\u5802\u6A21\u5F0F");return}bf()}function ri(){qr=!1,Bn=null,Ki&&Ki.classList.remove("show","shake")}function Tf(r,e){if(tr||ii)return;let t=Ef(r,e);if(qr){if(Kv(r,e)||t&&$v(Bn,t)){let i=Bn;Np(i,r,e),ri(),sn("\u627E\u5230\u5566\uFF01\u8FD9\u662F"+Hs[i].name)}else t?(Ki.classList.remove("shake"),Ki.offsetWidth,Ki.classList.add("shake"),sn("\u8FD9\u91CC\u4E0D\u662F"+Hs[Bn].name+"\uFF0C\u518D\u627E\u627E\u770B")):sn("\u518D\u4ED4\u7EC6\u770B\u770B\uFF0C\u627E\u627E\u753B\u9762\u91CC\u7684"+Hs[Bn].name);return}t?(Kt&&tt&&(tt=!1,nr(),bt()),Np(t,r,e)):ir()}function e_(){let r=Bt.domElement,e=document.createElement("canvas"),t=Math.min(720,r.width),n=Math.max(1,Math.round(t*r.height/Math.max(1,r.width)));return e.width=t,e.height=n,e.getContext("2d").drawImage(r,0,0,t,n),e.toDataURL("image/jpeg",.86)}async function tl(){if(Hh)return;Hh=!0;let r={t:Oe,prevT:$t,playing:tt,theta:je.theta,radius:je.radius,phi:je.phi},e=[];try{for(let[t,n,i]of kv)Oe=t,$t=t,js=t,tt=!1,je.theta=1.46,je.radius=12.5,je.phi=1.46,bt(),an(t),await new Promise(s=>requestAnimationFrame(()=>requestAnimationFrame(s))),Bt.render(Te,Nt),e.push({label:n,year:i,url:e_()});Cp&&(Cp.innerHTML=e.map(t=>'<figure class="quartet-item"><img src="'+t.url+'" alt="'+t.label+'"><figcaption><b>'+t.label+"</b><span>"+t.year+"</span></figcaption></figure>").join("")),jr(Tv)}finally{js=null,Oe=r.t,$t=r.prevT,tt=r.playing,je.theta=r.theta,je.radius=r.radius,je.phi=r.phi,bt(),an(Oe),Hh=!1}}function t_(r){Fs&&(Fs.innerHTML=r,Fs.classList.add("show"))}function Zr(){Fs&&Fs.classList.remove("show")}Jh.addEventListener("click",mu);uv.addEventListener("click",()=>{Oe=0,$t=0,tt=!0,Si=!1,Ei=!1,ni=-1,an(0),bt()});yi.addEventListener("pointerdown",()=>{qs=!0});yi.addEventListener("input",r=>{Zi(parseFloat(r.target.value),!0)});yi.addEventListener("change",()=>{qs=!1,bt()});window.addEventListener("pointerup",()=>{qs&&(qs=!1,bt())});document.getElementById("replant").addEventListener("click",()=>{Ys=Math.floor(Math.random()*1e5),gu(Ys),Oe=0,$t=0,tt=!0,Si=!1,Ei=!1,ni=-1,an(0),bt()});mv.addEventListener("click",()=>el({reset:!0,fullscreen:!0,autoplay:!0}));gv.addEventListener("click",()=>{tr=!1,Js.classList.add("hidden"),Zr(),tt=!0,bt()});Oo.addEventListener("click",mu);Sv.addEventListener("click",ff);Ev.addEventListener("click",pf);bv.addEventListener("click",()=>{Oe=0,$t=0,tt=!0,Si=!1,Ei=!1,ni=-1,an(0),bt(),An&&Qs()});vv.addEventListener("click",()=>jr(Ks));_v.addEventListener("click",()=>jr(pu));xv.addEventListener("click",wf);yv.addEventListener("click",tl);No.addEventListener("click",Wv);Kh.addEventListener("click",gf);$h.addEventListener("click",vf);Mv.addEventListener("click",yf);Qh.addEventListener("click",Xv);Dv.addEventListener("click",()=>jr(Ks));Nv.addEventListener("click",tl);Ov.addEventListener("click",()=>el({reset:!1,fullscreen:!0,autoplay:!0}));Pv.addEventListener("click",ir);tu.addEventListener("click",bf);Uv.addEventListener("click",ri);eu.addEventListener("click",r=>{let e=r.target.closest(".chapter-item");e&&(vu(parseInt(e.dataset.index,10),!0),cf(Ks))});document.querySelectorAll(".modal").forEach(r=>{r.addEventListener("pointerdown",e=>{e.target===r&&r.classList.remove("show")})});document.querySelectorAll("[data-close]").forEach(r=>{r.addEventListener("click",()=>cf(document.getElementById(r.dataset.close)))});er.addEventListener("pointerdown",r=>{r.preventDefault(),er.classList.add("holding"),clearTimeout(Yo),Yo=setTimeout(xu,2e3)});["pointerup","pointercancel","pointerleave"].forEach(r=>{er.addEventListener(r,()=>{er.classList.remove("holding"),clearTimeout(Yo)})});window.addEventListener("pointermove",yu,{passive:!0});window.addEventListener("pointerdown",yu,{passive:!0});document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&Kt&&_f()});window.addEventListener("keydown",r=>{if(ii){r.key==="Escape"&&(r.preventDefault(),xu());return}r.code==="Space"?(r.preventDefault(),mu()):r.key==="ArrowLeft"?(r.preventDefault(),Zi(Oe-5,!0)):r.key==="ArrowRight"?(r.preventDefault(),Zi(Oe+5,!0)):r.key==="Home"?(r.preventDefault(),Zi(0,!0)):r.key==="End"?(r.preventDefault(),Zi(Ot,!0)):r.key==="PageUp"?(r.preventDefault(),ff()):r.key==="PageDown"?(r.preventDefault(),pf()):r.key==="f"||r.key==="F"?(r.preventDefault(),Yv()):r.key==="c"||r.key==="C"?(r.preventDefault(),jr(Ks)):r.key==="t"||r.key==="T"?(r.preventDefault(),jr(pu)):r.key==="q"||r.key==="Q"?(r.preventDefault(),tl()):r.key==="p"||r.key==="P"?(r.preventDefault(),gf()):r.key==="l"||r.key==="L"?(r.preventDefault(),vf()):r.key==="Escape"?uf()&&(r.preventDefault(),hf()):(r.key==="r"||r.key==="R")&&(Ys=Math.floor(Math.random()*1e5),gu(Ys),Oe=0,$t=0,tt=!0,Si=!1,Ei=!1,ni=-1,an(0),bt())});var pn=new Le,Vr=new yt,n_=new yt,qi=new M,nn=new M,Vh=new Pt,Yi=new ve,dx=new ve,Ls=new M,Op=new M,i_=new M,Gh=new M,r_=new ce(.5,.8),s_=new M;function Bp(r,e,t=1){if(Math.abs(e-r.lastK)<.003&&Math.abs(t-(r.lastFat===void 0?-1:r.lastFat))<.004)return;r.lastK=e,r.lastFat=t;let n=r.mesh.geometry.attributes.position,i=n.array,s=r.basePos,a=r.rings,o=r.radial,l=Math.min(a-1,Math.max(0,e*(a-1))),c=Math.min(a-2,Math.floor(l));if(Ls.copy(r.pts[c]).lerp(r.pts[c+1],l-c),c+1<a){let d=Math.min(.1,(r.radii?r.radii[c]:.05)*1.4);Ls.addScaledVector(r.pts[c+1].clone().sub(r.pts[c]).normalize(),d)}let h=(.45+.55*Math.min(1,e*1.7))*t;for(let d=0;d<a;d++){let u=r.pts[d],p=d*o*3;if(d>c)for(let m=0;m<o;m++){let x=p+m*3;i[x]=Ls.x,i[x+1]=Ls.y,i[x+2]=Ls.z}else for(let m=0;m<o;m++){let x=p+m*3;i[x]=u.x+(s[x]-u.x)*h,i[x+1]=u.y+(s[x+1]-u.y)*h,i[x+2]=u.z+(s[x+2]-u.z)*h}}n.needsUpdate=!0}function Af(){requestAnimationFrame(Af);let r=performance.now(),e=Math.min(.1,Math.max(.001,(r-Up)/1e3));if(Up=r,!Fn&&ti===null&&tt){let V=Math.min(Ot,Oe+e),z=zn(Oe),ae=zn(V);if(Kt&&Mi&&V<Ot-.001&&ae!==z){Oe=Math.min(Wt[z].end,Ot),tt=!1,Si=!0;let Ae=Wt[Math.min(Wt.length-1,z+1)].title;t_("\u7B2C "+(z+1)+" \u7AE0\u7ED3\u675F \xB7 \u4E0B\u4E00\u7AE0\uFF1A<b>"+Ae+"</b>"),nr()}else Oe=V,Oe>=Ot-.001&&(Oe=Ot,tt=!1,Kt&&!Ei&&(Ei=!0,setTimeout(()=>{Kt&&tl()},900)))}let t=Fn?lf:js!==null?js:ti!==null?ti:Oe,n=Fn?1/60:Math.min(.05,Math.max(1e-4,t-$t));$t=t,an(t),bt();let s=(au(t)%1+1)%1,a=zp(t),o=su(t),l=b0(s,S0),c=nv(t);$n.topColor.value.copy(l.skyTop),$n.horizonColor.value.copy(l.horizon),$n.sunColor.value.copy(l.sun),$n.cloudCover.value=Math.min(1,l.cloud+c*.55),$n.cloudWarm.value=l.cloudWarm,$n.time.value=t,Te.fog.color.copy(l.fog),Po.color.copy(l.horizon),Po.groundColor.copy(l.ground).multiplyScalar(.6),Po.intensity=l.hemi,Gt.color.copy(l.sun),Gt.intensity=l.sunI*(1-.38*c);let h=.16+.1*(.5+.5*Math.cos((s-.25)*Math.PI*2)),d=je.theta-Math.PI-.28+Math.sin(t*.03)*.04,u=i_.set(Math.cos(d)*Math.cos(h),Math.sin(h),Math.sin(d)*Math.cos(h)).normalize();if(Gt.position.copy(u).multiplyScalar(34),Ns.position.copy(u).multiplyScalar(150),Os.position.copy(u).multiplyScalar(148),Ns.material.color.copy(l.sun),Os.material.color.copy(l.sun),Os.material.opacity=.42*(.65+.35*(1-Pe(.6,.9,s)))*(1-.6*c),$n.sunDir.value.copy(u),Vp.color.copy(l.ground).multiplyScalar(1-.16*c),Us.length===3){let V=Us[0].uniforms;V.uBottomColor.value.copy(l.fog).lerp(l.skyTop,.05),V.uTopColor.value.copy(l.fog).lerp(l.skyTop,.38).multiplyScalar(.9),V.uSnowColor.value.setHex(15857919);let z=Us[1].uniforms;z.uBottomColor.value.copy(l.fog).lerp(l.ground,.12),z.uTopColor.value.copy(l.ground).lerp(l.fog,.52).multiplyScalar(.92);let ae=Us[2].uniforms;ae.uBottomColor.value.copy(l.ground).lerp(l.fog,.36),ae.uTopColor.value.copy(l.ground).lerp(l.fog,.24).multiplyScalar(.88)}let p=Pe(.44,.56,s)*(1-Pe(.76,.84,s));Te.__grass.material.color.setRGB(1+.95*p,1-.08*p,1-.85*p),Zp.value=t;let m=Pe(.01,.07,s)*(1-Pe(.4,.48,s));Te.__flowers.visible=m>.02,Te.__flowers.material.opacity=m;let x=Pe(.52,.68,s),f=Pe(.7,.94,s);if(Te.__groundLeaves.visible=s>.5&&s<.96,Te.__groundLeaves.visible){Te.__groundLeaves.material.opacity=1-.62*f;let V=Te.__groundLeaves.userData.leafInfo;for(let z=0;z<V.length;z++){let ae=V[z],Ae=.18+.82*x,Ie=ae.size*Ae*(1-.85*f);nn.set(ae.pos.x,ae.pos.y-f*(.015+ae.size*.35),ae.pos.z),qi.set(Ie,Ie,Ie),pn.compose(nn,ae.quat,qi),Te.__groundLeaves.setMatrixAt(z,pn),Yi.copy(ae.color).lerp(Io.setHex(2366226),Math.min(1,f*1.25)),Te.__groundLeaves.setColorAt(z,Yi)}Te.__groundLeaves.instanceMatrix.needsUpdate=!0,Te.__groundLeaves.instanceColor&&(Te.__groundLeaves.instanceColor.needsUpdate=!0)}let g=.45+.35*Math.cos((s-.03)*Math.PI*2);for(let V=0;V<Xh.length;V++)Xh[V].opacity=[.16,.1,.06][V]*g*(.88+.12*Math.sin(t*.05+V));if(uu.position.x=Math.sin(t*.018)*4,jh.opacity=.18*(1-Pe(.72,.82,s))*(.7+.3*Math.sin(t*.7))*Pe(.35,.65,o),jh.opacity>.01){let V=ko.attributes.position.array;for(let z=0;z<Ko;z++){let ae=z*3;V[ae+1]+=n*(.05+z%7*.008),V[ae]+=Math.sin(t*.5+jp[z])*n*.04,V[ae+1]>7.2&&(V[ae+1]=.2,V[ae]=(Math.random()-.5)*22,V[ae+2]=-10+Math.random()*12)}ko.attributes.position.needsUpdate=!0}let v=.18+.82*Pe(.2,.92,o),_=0;for(let V of _e.branches){let z=Pe(V.g0,V.g1,o);if(V.mesh.visible=z>.001,!V.mesh.visible)continue;Bp(V,z,v);let ae=V.start.y+V.len*z;ae>_&&(_=ae)}for(let V of _e.roots){let z=Pe(V.g0,V.g1,o);V.mesh.visible=z>.001,V.mesh.visible&&Bp(V,z)}{let V=Pe(.04,.34,o),z=Math.max(.03,v*1.06);_e.flare.scale.set(z,Math.max(5e-4,V),z),_e.flare.visible=V>.02}let y=Pe(0,3,t),R=1+.14*Pe(16,32,t),T=Pe(32,48,t),I=1-Pe(66,80,t);_e.seedMesh.visible=t<80&&I>.01,_e.seedMesh.position.y=.055+.1*(1-y),_e.seedMesh.scale.set(.35*R*I,.28*R*I,.46*R*I),_e.seedTop.position.set(.018*T,.055*T,.006*T),_e.seedTop.rotation.z=-.62*T,_e.seedTop.rotation.x=.22*T,_e.seedBottom.position.y=-.008*T,_e.seedCrack.visible=T>.01&&I>.02,_e.seedCrack.material.transparent=!0,_e.seedCrack.material.opacity=(1-I)*Math.min(1,T*2.2),_e.seedCrack.scale.setScalar(1+.12*T);let U=_e.branches[0],O=U?Pe(U.g0,U.g1,o):0,k=U?U.start.y+U.len*O:.2,X=Pe(.09,.145,o)*(1-Pe(.34,.5,o));for(let V of _e.cotyledons)V.scale.setScalar(Math.max(.001,.12*X)),V.position.y=Math.max(.08,k*.94),V.visible=X>.01;_e.cotyledonMat.color.setHex(10474334);let G=s<.05?Pe(0,.05,s):1,q=Pe(.1,.34,s),H=0,J=_e.leaves;for(let V=0;V<_e.leafData.length;V++){let z=_e.leafData[V],ae=z.branch?Pe(z.branch.g0,z.branch.g1,o):1,Ae=z.branch?Pe(Math.max(.02,z.siteT-.06),z.siteT+.06,ae):1,Ie=Pe(z.grow,Math.min(1,z.grow+.1),o)*Ae,De=Pe(.58+z.stag*.08,.72+z.stag*.05,s),Me=z.size*Ie*G*(1-De);if(Me<.002){pn.makeScale(1e-4,1e-4,1e-4),J.setMatrixAt(V,pn);continue}let Z=Math.sin(t*1.6+z.phase)*.06*Ie;z.branch?(Fp(z.branch.pts,Math.min(z.siteT,ae),Op),nn.copy(Op).add(z.offset)):nn.copy(z.pos),nn.x+=Z,nn.z+=Math.cos(t*1.3+z.phase)*.05*Ie,Vr.copy(z.quat),Vh.set(Z*.8,Z*.5,Z*.6),Vr.multiply(n_.setFromEuler(Vh)),qi.setScalar(Me),pn.compose(nn,Vr,qi),J.setMatrixAt(V,pn);let ue=Pe(.46+z.stag*.1,.62+z.stag*.1,s);Yi.setHex(5212717).lerp(Io.setHex(2841630),q),Yi.lerp(z.autumn,ue),H>.01&&Yi.lerp(E0.setHex(16767462),H*.75),Yi.multiplyScalar(z.tone),J.setColorAt(V,Yi)}J.instanceMatrix.needsUpdate=!0,J.instanceColor&&(J.instanceColor.needsUpdate=!0);let Q=Pe(.02,.07,s)*(1-Pe(.22,.3,s))*Pe(.7,.9,o);_e.blossoms.visible=Q>.02,_e.blossomMat.opacity=Q*.95;let le=Pe(.78,.88,s)*(1-Pe(.96,1,s));_e.snowCaps.visible=le>.02,_e.snowCapMat.opacity=le;let oe=a>=2?Pe(.4,.52,s):0,we=Pe(.7,.8,s),Se=oe*(1-Pe(.7,.8,s));{let V=_e.fruitData,z=_e.fruits,ae=_e.stems,Ae=Vr.set(0,0,0,1);for(let Ie=0;Ie<V.length;Ie++){let De=V[Ie],Me=De.size*oe*(1-Pe(.8,.86,s));if(Me<.002){z.setMatrixAt(Ie,Gr),ae.setMatrixAt(Ie,Gr);continue}let Z=Math.sin(t*1.5+De.phase)*.02*oe;nn.copy(De.pos),nn.x+=Z,nn.y-=we*(1.2+De.stag*.9),pn.compose(nn,De.quat,qi.setScalar(Me)),z.setMatrixAt(Ie,pn),nn.y+=Me*.92,pn.compose(nn,Ae,qi.set(1,1,1)),we<.35?ae.setMatrixAt(Ie,pn):ae.setMatrixAt(Ie,Gr)}z.instanceMatrix.needsUpdate=!0,ae.instanceMatrix.needsUpdate=!0}let re=Pe(.18,.34,o),he=o>.5&&s>.52&&s<.88?6+26*Pe(.52,.68,s)*(1-Pe(.74,.88,s)):0,me=s>.88||s<.12?10*re:0,ye=he+me;if(ye>0&&Math.random()<ye*n){let V=Math.random()>he/Math.max(.001,ye),z=_e.leafData[Math.floor(Math.random()*_e.leafData.length)],ae=V?Io.setHex(16763356):z.autumn;iv(ae);let Ae=Ws[(Ds+ei-1)%ei];Ae.pos.copy(z.pos),Ae.size=V?.12:.2}for(let V=0;V<ei;V++){let z=Ws[V];if(!(z.life<=0)){if(z.pos.addScaledVector(z.vel,n),z.pos.x+=Math.sin(t*2+V)*.35*n,z.pos.z+=Math.cos(t*1.7+V)*.3*n,z.rot.addScaledVector(z.spin,n),z.pos.y<=.03){z.life=0,rn.setMatrixAt(V,Gr);continue}Vr.setFromEuler(Vh.set(z.rot.x,z.rot.y,z.rot.z)),pn.compose(z.pos,Vr,qi.setScalar(z.size)),rn.setMatrixAt(V,pn)}}rn.instanceMatrix.needsUpdate=!0,nf.opacity=1;let fe=Pe(.76,.88,s)*(1-Pe(.98,1,s));Qp.opacity=fe*.95,Wo.visible=fe>.01;let w=Pe(.72,.8,s),b=s>.985?Pe(.985,1,s):s<.02?1:0,D=Math.max(1e-4,Math.max(1-w,b));if(Te.__grass.material.opacity=D,Te.__grass.scale.set(1,1,1),tf.opacity=c*.82,jo.visible=c>.01,jo.visible){let V=Xo.attributes.position.array;for(let z=0;z<$o;z++){let ae=z*3;V[ae+1]-=ef[z]*n,V[ae]+=1.2*n,V[ae+1]<0&&(V[ae+1]=8+Math.random()*3,V[ae]=(Math.random()-.5)*24,V[ae+2]=-9+Math.random()*9)}Xo.attributes.position.needsUpdate=!0}if(Wo.visible){let V=Go.attributes.position.array;for(let z=0;z<Zs;z++){let ae=z*3;V[ae+1]-=$p[z]*n*.9,V[ae]+=Math.sin(t*.9+qh[z])*n*.5,V[ae+2]+=Math.cos(t*.7+qh[z])*n*.4,V[ae+1]<0&&(V[ae+1]=24+Math.random()*4,V[ae]=(Math.random()-.5)*56,V[ae+2]=(Math.random()-.5)*56)}Go.attributes.position.needsUpdate=!0}let L=Pe(0,1,o);Gs.rotation.z=Math.sin(t*.62)*(.012+.018*c)*L,Gs.rotation.x=Math.cos(t*.48)*(.01+.012*c)*L,Fn?je.theta=1.43+Math.sin(t*.05)*.085:tt&&r-Qo>6e3&&(je.theta+=je.dir*.035*n,je.theta>Zh&&(je.theta=Zh,je.dir=-1),je.theta<Yh&&(je.theta=Yh,je.dir=1));let A=Math.max(.01,Nt.aspect),P=A<1.45?Math.min(2.8,Math.pow(1.45/A,.82)):1,S=rv(t),C;if(S)je.target.y=S.targetY,C=S.viewH/(2*Math.tan(Nt.fov*Math.PI/360));else{let V=Math.max(.9,_+.52),z=-.62-3.6*Pe(0,.34,o);je.target.y=(V+z)/2,C=(V-z)*1/(2*Math.tan(Nt.fov*Math.PI/360))}je.target.x=.5*Pe(.15,.7,o);let F=Math.max(1.35,C)*(je.radius/12.5)*P,te=Math.sin(je.phi),N=Math.cos(je.phi);Nt.position.set(je.target.x+F*te*Math.cos(je.theta),je.target.y+F*N,je.target.z+F*te*Math.sin(je.theta)),Nt.lookAt(je.target);let K=Math.floor(s*4)%4;wn[K].name!==zh&&(zh=wn[K].name,Ao.textContent=zh,Bh.textContent=wn[K].sub,Ao.style.animation="none",Ao.offsetWidth,Ao.style.animation="seasonIn .7s ease both"),ov.textContent="\u7B2C "+a+" \u5E74";let $=K===2&&Se>.45?"\u679C\u5B9E\u719F\u4E86":wn[K].sub;Bh.textContent!==$&&(Bh.textContent=$);let ne=(s%1+1)%1;if(Ep&&(Ep.style.transform="translate(-50%, -100%) rotate("+(ne*360).toFixed(2)+"deg)"),bp&&(bp.textContent="\u7B2C "+a+" \u5E74"),Fh){let V=wn[K].name+" \xB7 \u7B2C "+a+" \u5E74";Fh.textContent!==V&&(Fh.textContent=V)}M0&&Math.floor(t*2)!==Math.floor((t-n)*2)&&console.log("[debug]","t="+t.toFixed(1),"p="+s.toFixed(3),"g="+o.toFixed(3),"ground=#"+l.ground.getHexString(),"snowA="+fe.toFixed(2),"grassY="+Te.__grass.scale.y.toFixed(2)),Gh.copy(Ns.position).project(Nt),r_.set(Gh.x*.5+.5,Gh.y*.5+.5),Nt.getWorldDirection(s_),Bt.render(Te,Nt)}window.addEventListener("resize",()=>{let r=ou();Nt.aspect=r.w/r.h,Nt.updateProjectionMatrix(),Bt.setSize(r.w,r.h)});document.getElementById("loading").style.display="none";window.matchMedia("(pointer: coarse)").matches&&(document.getElementById("tips").textContent="\u5355\u6307\u62D6\u52A8\u73AF\u987E \xB7 \u53CC\u6307\u7F29\u653E \xB7 \u7528\u5E95\u90E8\u8FDB\u5EA6\u6761\u63A7\u5236\u64AD\u653E");/(^|[?&])dbg(=|&|$)/.test(location.search)&&(window.__scene=Te,window.__sky=$n,window.__camera=Nt,window.__renderer=Bt,window.__probe=(r,e)=>{let t=new As;return t.setFromCamera(new ce(r,e),Nt),t.intersectObjects(Te.children,!0).slice(0,5).map(n=>({name:n.object.name||n.object.type,geo:n.object.geometry&&n.object.geometry.type,verts:n.object.geometry&&n.object.geometry.attributes.position?n.object.geometry.attributes.position.count:0,dist:+n.distance.toFixed(2),pt:[+n.point.x.toFixed(2),+n.point.y.toFixed(2),+n.point.z.toFixed(2)]}))});af&&el({reset:!1,fullscreen:!1,autoplay:ti===null});window.__classroom={enter:el,exit:yf,state:()=>({classroomMode:Kt,autoPauseAtChapter:Mi,voiceOn:An,projectorBright:Xr,touchLocked:ii,storyTime:Oe,playing:tt,currentChapter:ni}),pickPartAt:Ef,partVisibleAt:Su,findState:()=>({findActive:qr,findTarget:Bn,findBag:$i.slice(),findBagIndex:_i,findRound:Xs}),findablePartsAt:Sf,partScreenPoints:Eu,handleCanvasTap:Tf,startFindGame:wf,stopFindGame:ri,seekForTest:r=>{js=r,Oe=r,$t=r,tt=!1,an(r),bt()}};Af();})();
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
