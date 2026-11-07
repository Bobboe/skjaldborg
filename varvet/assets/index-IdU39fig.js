var If=Object.defineProperty;var Uf=(n,t,e)=>t in n?If(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var fi=(n,t,e)=>Uf(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kc="170",Nf=0,Il=1,Ff=2,oh=1,ah=2,ti=3,Ri=0,je=1,sn=2,bi=0,Cr=1,Ul=2,Nl=3,Fl=4,Of=5,ki=100,zf=101,Bf=102,kf=103,Hf=104,Vf=200,Gf=201,Wf=202,Xf=203,Xa=204,qa=205,qf=206,Yf=207,$f=208,jf=209,Zf=210,Kf=211,Jf=212,Qf=213,td=214,Ya=0,$a=1,ja=2,Nr=3,Za=4,Ka=5,Ja=6,Qa=7,Jc=0,ed=1,nd=2,wi=0,id=1,rd=2,sd=3,ch=4,od=5,ad=6,cd=7,lh=300,Fr=301,Or=302,tc=303,ec=304,Go=306,Ro=1e3,Gi=1001,nc=1002,an=1003,ld=1004,Fs=1005,dn=1006,sa=1007,Wi=1008,li=1009,uh=1010,hh=1011,bs=1012,Qc=1013,Ji=1014,Fn=1015,$r=1016,tl=1017,el=1018,zr=1020,fh=35902,dh=1021,ph=1022,Tn=1023,mh=1024,gh=1025,Pr=1026,Br=1027,nl=1028,il=1029,_h=1030,rl=1031,sl=1033,go=33776,_o=33777,vo=33778,xo=33779,ic=35840,rc=35841,sc=35842,oc=35843,ac=36196,cc=37492,lc=37496,uc=37808,hc=37809,fc=37810,dc=37811,pc=37812,mc=37813,gc=37814,_c=37815,vc=37816,xc=37817,Mc=37818,yc=37819,Sc=37820,Ec=37821,Mo=36492,bc=36494,wc=36495,vh=36283,Tc=36284,Ac=36285,Rc=36286,ud=3200,hd=3201,xh=0,fd=1,Mi="",Qe="srgb",jr="srgb-linear",Wo="linear",fe="srgb",sr=7680,Ol=519,dd=512,pd=513,md=514,Mh=515,gd=516,_d=517,vd=518,xd=519,zl=35044,Bl="300 es",ri=2e3,Co=2001;class Zr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],oa=Math.PI/180,Cc=180/Math.PI;function Kr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]).toLowerCase()}function Fe(n,t,e){return Math.max(t,Math.min(e,n))}function Md(n,t){return(n%t+t)%t}function aa(n,t,e){return(1-e)*n+e*t}function is(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Je(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class st{constructor(t=0,e=0){st.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(t,e,i,r,s,a,o,c,l){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,l)}set(t,e,i,r,s,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],_=r[0],m=r[3],h=r[6],S=r[1],y=r[4],x=r[7],L=r[2],T=r[5],A=r[8];return s[0]=a*_+o*S+c*L,s[3]=a*m+o*y+c*T,s[6]=a*h+o*x+c*A,s[1]=l*_+u*S+f*L,s[4]=l*m+u*y+f*T,s[7]=l*h+u*x+f*A,s[2]=d*_+p*S+g*L,s[5]=d*m+p*y+g*T,s[8]=d*h+p*x+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=u*a-o*l,d=o*c-u*s,p=l*s-a*c,g=e*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(r*l-u*i)*_,t[2]=(o*i-r*a)*_,t[3]=d*_,t[4]=(u*e-r*c)*_,t[5]=(r*s-o*e)*_,t[6]=p*_,t[7]=(i*c-l*e)*_,t[8]=(a*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ca.makeScale(t,e)),this}rotate(t){return this.premultiply(ca.makeRotation(-t)),this}translate(t,e){return this.premultiply(ca.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ca=new $t;function yh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ws(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function yd(){const n=ws("canvas");return n.style.display="block",n}const kl={};function fs(n){n in kl||(kl[n]=!0,console.warn(n))}function Sd(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function Ed(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function bd(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const re={enabled:!0,workingColorSpace:jr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===fe&&(n.r=oi(n.r),n.g=oi(n.g),n.b=oi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===fe&&(n.r=Lr(n.r),n.g=Lr(n.g),n.b=Lr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Mi?Wo:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function oi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Lr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Hl=[.64,.33,.3,.6,.15,.06],Vl=[.2126,.7152,.0722],Gl=[.3127,.329],Wl=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xl=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);re.define({[jr]:{primaries:Hl,whitePoint:Gl,transfer:Wo,toXYZ:Wl,fromXYZ:Xl,luminanceCoefficients:Vl,workingColorSpaceConfig:{unpackColorSpace:Qe},outputColorSpaceConfig:{drawingBufferColorSpace:Qe}},[Qe]:{primaries:Hl,whitePoint:Gl,transfer:fe,toXYZ:Wl,fromXYZ:Xl,luminanceCoefficients:Vl,outputColorSpaceConfig:{drawingBufferColorSpace:Qe}}});let or;class wd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{or===void 0&&(or=ws("canvas")),or.width=t.width,or.height=t.height;const i=or.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=or}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ws("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=oi(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(oi(e[i]/255)*255):e[i]=oi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Td=0;class Sh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=Kr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(la(r[a].image)):s.push(la(r[a]))}else s=la(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function la(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?wd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ad=0;class Ge extends Zr{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,i=Gi,r=Gi,s=dn,a=Wi,o=Tn,c=li,l=Ge.DEFAULT_ANISOTROPY,u=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Kr(),this.name="",this.source=new Sh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ro:t.x=t.x-Math.floor(t.x);break;case Gi:t.x=t.x<0?0:1;break;case nc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ro:t.y=t.y-Math.floor(t.y);break;case Gi:t.y=t.y<0?0:1;break;case nc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=lh;Ge.DEFAULT_ANISOTROPY=1;class be{constructor(t=0,e=0,i=0,r=1){be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],u=c[4],f=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],h=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,x=(p+1)/2,L=(h+1)/2,T=(u+d)/4,A=(f+_)/4,P=(g+m)/4;return y>x&&y>L?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=T/i,s=A/i):x>L?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=T/r,s=P/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=A/s,r=P/s),this.set(i,r,s,e),this}let S=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-_)/S,this.z=(d-u)/S,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rd extends Zr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ge(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Sh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends Rd{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Eh extends Ge{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cd extends Ge{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class er{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3];const d=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(f!==_||c!==d||l!==p||u!==g){let m=1-o;const h=c*d+l*p+u*g+f*_,S=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const L=Math.sqrt(y),T=Math.atan2(L,h*S);m=Math.sin(m*T)/L,o=Math.sin(o*T)/L}const x=o*S;if(c=c*m+d*x,l=l*m+p*x,u=u*m+g*x,f=f*m+_*x,m===1-o){const L=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=L,l*=L,u*=L,f*=L}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return t[e]=o*g+u*f+c*p-l*d,t[e+1]=c*g+u*d+l*f-o*p,t[e+2]=l*g+u*p+o*d-c*f,t[e+3]=u*g-o*f-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),f=o(s/2),d=c(i/2),p=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*u*f+l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f+d*p*g;break;case"YZX":this._x=d*u*f+l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f-d*p*g;break;case"XZY":this._x=d*u*f-l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],f=e[10],d=i+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*i+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),f=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,i=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ql.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ql.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*i),u=2*(o*e-s*r),f=2*(s*i-a*e);return this.x=e+c*l+a*f-o*u,this.y=i+c*u+o*l-s*f,this.z=r+c*f+s*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ua.copy(this).projectOnVector(t),this.sub(ua)}reflect(t){return this.sub(ua.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ua=new D,ql=new er;class nr{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Mn):Mn.fromBufferAttribute(s,a),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Os.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Os.copy(i.boundingBox)),Os.applyMatrix4(t.matrixWorld),this.union(Os)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rs),zs.subVectors(this.max,rs),ar.subVectors(t.a,rs),cr.subVectors(t.b,rs),lr.subVectors(t.c,rs),di.subVectors(cr,ar),pi.subVectors(lr,cr),Di.subVectors(ar,lr);let e=[0,-di.z,di.y,0,-pi.z,pi.y,0,-Di.z,Di.y,di.z,0,-di.x,pi.z,0,-pi.x,Di.z,0,-Di.x,-di.y,di.x,0,-pi.y,pi.x,0,-Di.y,Di.x,0];return!ha(e,ar,cr,lr,zs)||(e=[1,0,0,0,1,0,0,0,1],!ha(e,ar,cr,lr,zs))?!1:(Bs.crossVectors(di,pi),e=[Bs.x,Bs.y,Bs.z],ha(e,ar,cr,lr,zs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Yn=[new D,new D,new D,new D,new D,new D,new D,new D],Mn=new D,Os=new nr,ar=new D,cr=new D,lr=new D,di=new D,pi=new D,Di=new D,rs=new D,zs=new D,Bs=new D,Ii=new D;function ha(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ii.fromArray(n,s);const o=r.x*Math.abs(Ii.x)+r.y*Math.abs(Ii.y)+r.z*Math.abs(Ii.z),c=t.dot(Ii),l=e.dot(Ii),u=i.dot(Ii);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Pd=new nr,ss=new D,fa=new D;class Jr{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Pd.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ss.subVectors(t,this.center);const e=ss.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(ss,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ss.copy(t.center).add(fa)),this.expandByPoint(ss.copy(t.center).sub(fa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $n=new D,da=new D,ks=new D,mi=new D,pa=new D,Hs=new D,ma=new D;class bh{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=$n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($n.copy(this.origin).addScaledVector(this.direction,e),$n.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){da.copy(t).add(e).multiplyScalar(.5),ks.copy(e).sub(t).normalize(),mi.copy(this.origin).sub(da);const s=t.distanceTo(e)*.5,a=-this.direction.dot(ks),o=mi.dot(this.direction),c=-mi.dot(ks),l=mi.lengthSq(),u=Math.abs(1-a*a);let f,d,p,g;if(u>0)if(f=a*c-o,d=a*o-c,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,p=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+l);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(da).addScaledVector(ks,d),p}intersectSphere(t,e){$n.subVectors(t.center,this.origin);const i=$n.dot(this.direction),r=$n.dot($n)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),u>=0?(s=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,$n)!==null}intersectTriangle(t,e,i,r,s){pa.subVectors(e,t),Hs.subVectors(i,t),ma.crossVectors(pa,Hs);let a=this.direction.dot(ma),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;mi.subVectors(this.origin,t);const c=o*this.direction.dot(Hs.crossVectors(mi,Hs));if(c<0)return null;const l=o*this.direction.dot(pa.cross(mi));if(l<0||c+l>a)return null;const u=-o*mi.dot(ma);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(t,e,i,r,s,a,o,c,l,u,f,d,p,g,_,m){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,l,u,f,d,p,g,_,m)}set(t,e,i,r,s,a,o,c,l,u,f,d,p,g,_,m){const h=this.elements;return h[0]=t,h[4]=e,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/ur.setFromMatrixColumn(t,0).length(),s=1/ur.setFromMatrixColumn(t,1).length(),a=1/ur.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=a*u,p=a*f,g=o*u,_=o*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=p+g*l,e[5]=d-_*l,e[9]=-o*c,e[2]=_-d*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*u,p=c*f,g=l*u,_=l*f;e[0]=d+_*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=_+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*u,p=c*f,g=l*u,_=l*f;e[0]=d-_*o,e[4]=-a*f,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=_-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*u,p=a*f,g=o*u,_=o*f;e[0]=c*u,e[4]=g*l-p,e[8]=d*l+_,e[1]=c*f,e[5]=_*l+d,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,p=a*l,g=o*c,_=o*l;e[0]=c*u,e[4]=_-d*f,e[8]=g*f+p,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=p*f+g,e[10]=d-_*f}else if(t.order==="XZY"){const d=a*c,p=a*l,g=o*c,_=o*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=d*f+_,e[5]=a*u,e[9]=p*f-g,e[2]=g*f-p,e[6]=o*u,e[10]=_*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ld,t,Dd)}lookAt(t,e,i){const r=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),gi.crossVectors(i,en),gi.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),gi.crossVectors(i,en)),gi.normalize(),Vs.crossVectors(en,gi),r[0]=gi.x,r[4]=Vs.x,r[8]=en.x,r[1]=gi.y,r[5]=Vs.y,r[9]=en.y,r[2]=gi.z,r[6]=Vs.z,r[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],h=i[14],S=i[3],y=i[7],x=i[11],L=i[15],T=r[0],A=r[4],P=r[8],M=r[12],v=r[1],R=r[5],O=r[9],F=r[13],k=r[2],Y=r[6],V=r[10],K=r[14],G=r[3],ct=r[7],_t=r[11],wt=r[15];return s[0]=a*T+o*v+c*k+l*G,s[4]=a*A+o*R+c*Y+l*ct,s[8]=a*P+o*O+c*V+l*_t,s[12]=a*M+o*F+c*K+l*wt,s[1]=u*T+f*v+d*k+p*G,s[5]=u*A+f*R+d*Y+p*ct,s[9]=u*P+f*O+d*V+p*_t,s[13]=u*M+f*F+d*K+p*wt,s[2]=g*T+_*v+m*k+h*G,s[6]=g*A+_*R+m*Y+h*ct,s[10]=g*P+_*O+m*V+h*_t,s[14]=g*M+_*F+m*K+h*wt,s[3]=S*T+y*v+x*k+L*G,s[7]=S*A+y*R+x*Y+L*ct,s[11]=S*P+y*O+x*V+L*_t,s[15]=S*M+y*F+x*K+L*wt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],f=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],h=t[15];return g*(+s*c*f-r*l*f-s*o*d+i*l*d+r*o*p-i*c*p)+_*(+e*c*p-e*l*d+s*a*d-r*a*p+r*l*u-s*c*u)+m*(+e*l*f-e*o*p-s*a*f+i*a*p+s*o*u-i*l*u)+h*(-r*o*u-e*c*f+e*o*d+r*a*f-i*a*d+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],h=t[15],S=f*m*l-_*d*l+_*c*p-o*m*p-f*c*h+o*d*h,y=g*d*l-u*m*l-g*c*p+a*m*p+u*c*h-a*d*h,x=u*_*l-g*f*l+g*o*p-a*_*p-u*o*h+a*f*h,L=g*f*c-u*_*c-g*o*d+a*_*d+u*o*m-a*f*m,T=e*S+i*y+r*x+s*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=S*A,t[1]=(_*d*s-f*m*s-_*r*p+i*m*p+f*r*h-i*d*h)*A,t[2]=(o*m*s-_*c*s+_*r*l-i*m*l-o*r*h+i*c*h)*A,t[3]=(f*c*s-o*d*s-f*r*l+i*d*l+o*r*p-i*c*p)*A,t[4]=y*A,t[5]=(u*m*s-g*d*s+g*r*p-e*m*p-u*r*h+e*d*h)*A,t[6]=(g*c*s-a*m*s-g*r*l+e*m*l+a*r*h-e*c*h)*A,t[7]=(a*d*s-u*c*s+u*r*l-e*d*l-a*r*p+e*c*p)*A,t[8]=x*A,t[9]=(g*f*s-u*_*s-g*i*p+e*_*p+u*i*h-e*f*h)*A,t[10]=(a*_*s-g*o*s+g*i*l-e*_*l-a*i*h+e*o*h)*A,t[11]=(u*o*s-a*f*s-u*i*l+e*f*l+a*i*p-e*o*p)*A,t[12]=L*A,t[13]=(u*_*r-g*f*r+g*i*d-e*_*d-u*i*m+e*f*m)*A,t[14]=(g*o*r-a*_*r-g*i*c+e*_*c+a*i*m-e*o*m)*A,t[15]=(a*f*r-u*o*r+u*i*c-e*f*c-a*i*d+e*o*d)*A,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,c=t.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,u=a+a,f=o+o,d=s*l,p=s*u,g=s*f,_=a*u,m=a*f,h=o*f,S=c*l,y=c*u,x=c*f,L=i.x,T=i.y,A=i.z;return r[0]=(1-(_+h))*L,r[1]=(p+x)*L,r[2]=(g-y)*L,r[3]=0,r[4]=(p-x)*T,r[5]=(1-(d+h))*T,r[6]=(m+S)*T,r[7]=0,r[8]=(g+y)*A,r[9]=(m-S)*A,r[10]=(1-(d+_))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=ur.set(r[0],r[1],r[2]).length();const a=ur.set(r[4],r[5],r[6]).length(),o=ur.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],yn.copy(this);const l=1/s,u=1/a,f=1/o;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=f,yn.elements[9]*=f,yn.elements[10]*=f,e.setFromRotationMatrix(yn),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,r,s,a,o=ri){const c=this.elements,l=2*s/(e-t),u=2*s/(i-r),f=(e+t)/(e-t),d=(i+r)/(i-r);let p,g;if(o===ri)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Co)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=ri){const c=this.elements,l=1/(e-t),u=1/(i-r),f=1/(a-s),d=(e+t)*l,p=(i+r)*u;let g,_;if(o===ri)g=(a+s)*f,_=-2*f;else if(o===Co)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ur=new D,yn=new ue,Ld=new D(0,0,0),Dd=new D(1,1,1),gi=new D,Vs=new D,en=new D,Yl=new ue,$l=new er;class gn{constructor(t=0,e=0,i=0,r=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Fe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Fe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Yl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $l.setFromEuler(this),this.setFromQuaternion($l,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class wh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Id=0;const jl=new D,hr=new er,jn=new ue,Gs=new D,os=new D,Ud=new D,Nd=new er,Zl=new D(1,0,0),Kl=new D(0,1,0),Jl=new D(0,0,1),Ql={type:"added"},Fd={type:"removed"},fr={type:"childadded",child:null},ga={type:"childremoved",child:null};class Ne extends Zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=Kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new D,e=new gn,i=new er,r=new D(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ue},normalMatrix:{value:new $t}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hr.setFromAxisAngle(t,e),this.quaternion.multiply(hr),this}rotateOnWorldAxis(t,e){return hr.setFromAxisAngle(t,e),this.quaternion.premultiply(hr),this}rotateX(t){return this.rotateOnAxis(Zl,t)}rotateY(t){return this.rotateOnAxis(Kl,t)}rotateZ(t){return this.rotateOnAxis(Jl,t)}translateOnAxis(t,e){return jl.copy(t).applyQuaternion(this.quaternion),this.position.add(jl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zl,t)}translateY(t){return this.translateOnAxis(Kl,t)}translateZ(t){return this.translateOnAxis(Jl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Gs.copy(t):Gs.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(os,Gs,this.up):jn.lookAt(Gs,os,this.up),this.quaternion.setFromRotationMatrix(jn),r&&(jn.extractRotation(r.matrixWorld),hr.setFromRotationMatrix(jn),this.quaternion.premultiply(hr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ql),fr.child=t,this.dispatchEvent(fr),fr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fd),ga.child=t,this.dispatchEvent(ga),ga.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ql),fr.child=t,this.dispatchEvent(fr),fr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,t,Ud),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,Nd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),f=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Ne.DEFAULT_UP=new D(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new D,Zn=new D,_a=new D,Kn=new D,dr=new D,pr=new D,tu=new D,va=new D,xa=new D,Ma=new D,ya=new be,Sa=new be,Ea=new be;class bn{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Sn.subVectors(t,e),r.cross(Sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){Sn.subVectors(r,e),Zn.subVectors(i,e),_a.subVectors(t,e);const a=Sn.dot(Sn),o=Sn.dot(Zn),c=Sn.dot(_a),l=Zn.dot(Zn),u=Zn.dot(_a),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(l*c-o*u)*d,g=(a*u-o*c)*d;return s.set(1-p-g,g,p)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(t,e,i,r,s,a,o,c){return this.getBarycoord(t,e,i,r,Kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Kn.x),c.addScaledVector(a,Kn.y),c.addScaledVector(o,Kn.z),c)}static getInterpolatedAttribute(t,e,i,r,s,a){return ya.setScalar(0),Sa.setScalar(0),Ea.setScalar(0),ya.fromBufferAttribute(t,e),Sa.fromBufferAttribute(t,i),Ea.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(ya,s.x),a.addScaledVector(Sa,s.y),a.addScaledVector(Ea,s.z),a}static isFrontFacing(t,e,i,r){return Sn.subVectors(i,e),Zn.subVectors(t,e),Sn.cross(Zn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Sn.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return bn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return bn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;dr.subVectors(r,i),pr.subVectors(s,i),va.subVectors(t,i);const c=dr.dot(va),l=pr.dot(va);if(c<=0&&l<=0)return e.copy(i);xa.subVectors(t,r);const u=dr.dot(xa),f=pr.dot(xa);if(u>=0&&f<=u)return e.copy(r);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(i).addScaledVector(dr,a);Ma.subVectors(t,s);const p=dr.dot(Ma),g=pr.dot(Ma);if(g>=0&&p<=g)return e.copy(s);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(i).addScaledVector(pr,o);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return tu.subVectors(s,r),o=(f-u)/(f-u+(p-g)),e.copy(r).addScaledVector(tu,o);const h=1/(m+_+d);return a=_*h,o=d*h,e.copy(i).addScaledVector(dr,a).addScaledVector(pr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Ws={h:0,s:0,l:0};function ba(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class At{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=re.workingColorSpace){return this.r=t,this.g=e,this.b=i,re.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=re.workingColorSpace){if(t=Md(t,1),e=Fe(e,0,1),i=Fe(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=ba(a,s,t+1/3),this.g=ba(a,s,t),this.b=ba(a,s,t-1/3)}return re.toWorkingColorSpace(this,r),this}setStyle(t,e=Qe){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qe){const i=Th[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=oi(t.r),this.g=oi(t.g),this.b=oi(t.b),this}copyLinearToSRGB(t){return this.r=Lr(t.r),this.g=Lr(t.g),this.b=Lr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return re.fromWorkingColorSpace(ke.copy(this),t),Math.round(Fe(ke.r*255,0,255))*65536+Math.round(Fe(ke.g*255,0,255))*256+Math.round(Fe(ke.b*255,0,255))}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(ke.copy(this),e);const i=ke.r,r=ke.g,s=ke.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=Qe){re.fromWorkingColorSpace(ke.copy(this),t);const e=ke.r,i=ke.g,r=ke.b;return t!==Qe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(_i),this.setHSL(_i.h+t,_i.s+e,_i.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(_i),t.getHSL(Ws);const i=aa(_i.h,Ws.h,e),r=aa(_i.s,Ws.s,e),s=aa(_i.l,Ws.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new At;At.NAMES=Th;let Od=0;class Qr extends Zr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=Kr(),this.name="",this.blending=Cr,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xa,this.blendDst=qa,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ol,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(i.blending=this.blending),this.side!==Ri&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xa&&(i.blendSrc=this.blendSrc),this.blendDst!==qa&&(i.blendDst=this.blendDst),this.blendEquation!==ki&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Nr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ol&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==sr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==sr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ir extends Qr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=Jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ae=new D,Xs=new st;class Te{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=zl,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Xs.fromBufferAttribute(this,e),Xs.applyMatrix3(t),this.setXY(e,Xs.x,Xs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=is(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Je(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=is(e,this.array)),e}setX(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=is(e,this.array)),e}setY(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=is(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=is(e,this.array)),e}setW(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),i=Je(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),i=Je(i,this.array),r=Je(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),i=Je(i,this.array),r=Je(r,this.array),s=Je(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==zl&&(t.usage=this.usage),t}}class Ah extends Te{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Rh extends Te{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class _e extends Te{constructor(t,e,i){super(new Float32Array(t),e,i)}}let zd=0;const ln=new ue,wa=new Ne,mr=new D,nn=new nr,as=new nr,Ie=new D;class Xe extends Zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Kr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yh(t)?Rh:Ah)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $t().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,i){return ln.makeTranslation(t,e,i),this.applyMatrix4(ln),this}scale(t,e,i){return ln.makeScale(t,e,i),this.applyMatrix4(ln),this}lookAt(t){return wa.lookAt(t),wa.updateMatrix(),this.applyMatrix4(wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _e(i,3))}else{for(let i=0,r=e.count;i<r;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];as.setFromBufferAttribute(o),this.morphTargetsRelative?(Ie.addVectors(nn.min,as.min),nn.expandByPoint(Ie),Ie.addVectors(nn.max,as.max),nn.expandByPoint(Ie)):(nn.expandByPoint(as.min),nn.expandByPoint(as.max))}nn.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)Ie.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Ie));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ie.fromBufferAttribute(o,l),c&&(mr.fromBufferAttribute(t,l),Ie.add(mr)),r=Math.max(r,i.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Te(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<i.count;P++)o[P]=new D,c[P]=new D;const l=new D,u=new D,f=new D,d=new st,p=new st,g=new st,_=new D,m=new D;function h(P,M,v){l.fromBufferAttribute(i,P),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,v),d.fromBufferAttribute(s,P),p.fromBufferAttribute(s,M),g.fromBufferAttribute(s,v),u.sub(l),f.sub(l),p.sub(d),g.sub(d);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(R),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(R),o[P].add(_),o[M].add(_),o[v].add(_),c[P].add(m),c[M].add(m),c[v].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let P=0,M=S.length;P<M;++P){const v=S[P],R=v.start,O=v.count;for(let F=R,k=R+O;F<k;F+=3)h(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const y=new D,x=new D,L=new D,T=new D;function A(P){L.fromBufferAttribute(r,P),T.copy(L);const M=o[P];y.copy(M),y.sub(L.multiplyScalar(L.dot(M))).normalize(),x.crossVectors(T,M);const R=x.dot(c[P])<0?-1:1;a.setXYZW(P,y.x,y.y,y.z,R)}for(let P=0,M=S.length;P<M;++P){const v=S[P],R=v.start,O=v.count;for(let F=R,k=R+O;F<k;F+=3)A(t.getX(F+0)),A(t.getX(F+1)),A(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new D,s=new D,a=new D,o=new D,c=new D,l=new D,u=new D,f=new D;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,f=o.normalized,d=new l.constructor(c.length*u);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*u;for(let h=0;h<u;h++)d[g++]=l[p++]}return new Te(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Xe,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,i);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const d=l[u],p=t(d,i);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const p=l[f];u.push(p.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const eu=new ue,Ui=new bh,qs=new Jr,nu=new D,Ys=new D,$s=new D,js=new D,Ta=new D,Zs=new D,iu=new D,Ks=new D;class Ht extends Ne{constructor(t=new Xe,e=new ir){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Zs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],f=s[c];u!==0&&(Ta.fromBufferAttribute(f,t),a?Zs.addScaledVector(Ta,u):Zs.addScaledVector(Ta.sub(e),u))}e.add(Zs)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qs.copy(i.boundingSphere),qs.applyMatrix4(s),Ui.copy(t.ray).recast(t.near),!(qs.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(qs,nu)===null||Ui.origin.distanceToSquared(nu)>(t.far-t.near)**2))&&(eu.copy(s).invert(),Ui.copy(t.ray).applyMatrix4(eu),!(i.boundingBox!==null&&Ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ui)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],h=a[m.materialIndex],S=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=S,L=y;x<L;x+=3){const T=o.getX(x),A=o.getX(x+1),P=o.getX(x+2);r=Js(this,h,t,i,l,u,f,T,A,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const S=o.getX(m),y=o.getX(m+1),x=o.getX(m+2);r=Js(this,a,t,i,l,u,f,S,y,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],h=a[m.materialIndex],S=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let x=S,L=y;x<L;x+=3){const T=x,A=x+1,P=x+2;r=Js(this,h,t,i,l,u,f,T,A,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const S=m,y=m+1,x=m+2;r=Js(this,a,t,i,l,u,f,S,y,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Bd(n,t,e,i,r,s,a,o){let c;if(t.side===je?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,t.side===Ri,o),c===null)return null;Ks.copy(o),Ks.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Ks);return l<e.near||l>e.far?null:{distance:l,point:Ks.clone(),object:n}}function Js(n,t,e,i,r,s,a,o,c,l){n.getVertexPosition(o,Ys),n.getVertexPosition(c,$s),n.getVertexPosition(l,js);const u=Bd(n,t,e,i,Ys,$s,js,iu);if(u){const f=new D;bn.getBarycoord(iu,Ys,$s,js,f),r&&(u.uv=bn.getInterpolatedAttribute(r,o,c,l,f,new st)),s&&(u.uv1=bn.getInterpolatedAttribute(s,o,c,l,f,new st)),a&&(u.normal=bn.getInterpolatedAttribute(a,o,c,l,f,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new D,materialIndex:0};bn.getNormal(Ys,$s,js,d.normal),u.face=d,u.barycoord=f}return u}class Ot extends Xe{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,e,t,a,s,0),g("z","y","x",1,-1,i,e,-t,a,s,1),g("x","z","y",1,1,t,i,e,r,a,2),g("x","z","y",1,-1,t,i,-e,r,a,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(u,3)),this.setAttribute("uv",new _e(f,2));function g(_,m,h,S,y,x,L,T,A,P,M){const v=x/A,R=L/P,O=x/2,F=L/2,k=T/2,Y=A+1,V=P+1;let K=0,G=0;const ct=new D;for(let _t=0;_t<V;_t++){const wt=_t*R-F;for(let Xt=0;Xt<Y;Xt++){const ae=Xt*v-O;ct[_]=ae*S,ct[m]=wt*y,ct[h]=k,l.push(ct.x,ct.y,ct.z),ct[_]=0,ct[m]=0,ct[h]=T>0?1:-1,u.push(ct.x,ct.y,ct.z),f.push(Xt/A),f.push(1-_t/P),K+=1}}for(let _t=0;_t<P;_t++)for(let wt=0;wt<A;wt++){const Xt=d+wt+Y*_t,ae=d+wt+Y*(_t+1),$=d+(wt+1)+Y*(_t+1),nt=d+(wt+1)+Y*_t;c.push(Xt,ae,nt),c.push(ae,$,nt),G+=6}o.addGroup(p,G,M),p+=G,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ot(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function kr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function qe(n){const t={};for(let e=0;e<n.length;e++){const i=kr(n[e]);for(const r in i)t[r]=i[r]}return t}function kd(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Ch(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const Ph={clone:kr,merge:qe};var Hd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _n extends Qr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hd,this.fragmentShader=Vd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=kr(t.uniforms),this.uniformsGroups=kd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Lh extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=ri}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vi=new D,ru=new st,su=new st;class hn extends Lh{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Cc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(oa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cc*2*Math.atan(Math.tan(oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vi.x,vi.y).multiplyScalar(-t/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vi.x,vi.y).multiplyScalar(-t/vi.z)}getViewSize(t,e){return this.getViewBounds(t,ru,su),e.subVectors(su,ru)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(oa*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const gr=-90,_r=1;class Gd extends Ne{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new hn(gr,_r,t,e);r.layers=this.layers,this.add(r);const s=new hn(gr,_r,t,e);s.layers=this.layers,this.add(s);const a=new hn(gr,_r,t,e);a.layers=this.layers,this.add(a);const o=new hn(gr,_r,t,e);o.layers=this.layers,this.add(o);const c=new hn(gr,_r,t,e);c.layers=this.layers,this.add(c);const l=new hn(gr,_r,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Co)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,a),t.setRenderTarget(i,2,r),t.render(e,o),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(f,d,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Dh extends Ge{constructor(t,e,i,r,s,a,o,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Fr,super(t,e,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Wd extends Ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Dh(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:dn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ot(5,5,5),s=new _n({name:"CubemapFromEquirect",uniforms:kr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:je,blending:bi});s.uniforms.tEquirect.value=e;const a=new Ht(r,s),o=e.minFilter;return e.minFilter===Wi&&(e.minFilter=dn),new Gd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}const Aa=new D,Xd=new D,qd=new $t;class zi{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Aa.subVectors(i,e).cross(Xd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Aa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||qd.getNormalMatrix(t),r=this.coplanarPoint(Aa).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new Jr,Qs=new D;class ol{constructor(t=new zi,e=new zi,i=new zi,r=new zi,s=new zi,a=new zi){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ri){const i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],f=r[6],d=r[7],p=r[8],g=r[9],_=r[10],m=r[11],h=r[12],S=r[13],y=r[14],x=r[15];if(i[0].setComponents(c-s,d-l,m-p,x-h).normalize(),i[1].setComponents(c+s,d+l,m+p,x+h).normalize(),i[2].setComponents(c+a,d+u,m+g,x+S).normalize(),i[3].setComponents(c-a,d-u,m-g,x-S).normalize(),i[4].setComponents(c-o,d-f,m-_,x-y).normalize(),e===ri)i[5].setComponents(c+o,d+f,m+_,x+y).normalize();else if(e===Co)i[5].setComponents(o,f,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(t){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Qs.x=r.normal.x>0?t.max.x:t.min.x,Qs.y=r.normal.y>0?t.max.y:t.min.y,Qs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ih(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Yd(n){const t=new WeakMap;function e(o,c){const l=o.array,u=o.usage,f=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){const u=c.array,f=c.updateRanges;if(n.bindBuffer(l,o),f.length===0)n.bufferSubData(l,0,u);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],_=f[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const _=f[p];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class Bn extends Xe{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,f=t/o,d=e/c,p=[],g=[],_=[],m=[];for(let h=0;h<u;h++){const S=h*d-a;for(let y=0;y<l;y++){const x=y*f-s;g.push(x,-S,0),_.push(0,0,1),m.push(y/o),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let S=0;S<o;S++){const y=S+l*h,x=S+l*(h+1),L=S+1+l*(h+1),T=S+1+l*h;p.push(y,x,T),p.push(x,L,T)}this.setIndex(p),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(_,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bn(t.width,t.height,t.widthSegments,t.heightSegments)}}var $d=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jd=`#ifdef USE_ALPHAHASH
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
#endif`,Zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tp=`#ifdef USE_AOMAP
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
#endif`,ep=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,np=`#ifdef USE_BATCHING
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
#endif`,ip=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,op=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ap=`#ifdef USE_IRIDESCENCE
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
#endif`,cp=`#ifdef USE_BUMPMAP
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
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_p=`#define PI 3.141592653589793
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
} // validated`,vp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xp=`vec3 transformedNormal = objectNormal;
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
#endif`,Mp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ep=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bp="gl_FragColor = linearToOutputTexel( gl_FragColor );",wp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tp=`#ifdef USE_ENVMAP
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
#endif`,Ap=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rp=`#ifdef USE_ENVMAP
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
#endif`,Cp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ip=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Up=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Np=`#ifdef USE_GRADIENTMAP
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
}`,Fp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Op=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bp=`uniform bool receiveShadow;
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
#endif`,kp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xp=`PhysicalMaterial material;
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
#endif`,qp=`struct PhysicalMaterial {
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
}`,Yp=`
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
#endif`,$p=`#if defined( RE_IndirectDiffuse )
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
#endif`,jp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,em=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,im=`#if defined( USE_POINTS_UV )
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
#endif`,rm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,om=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,am=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lm=`#ifdef USE_MORPHTARGETS
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
#endif`,um=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gm=`#ifdef USE_NORMALMAP
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
#endif`,_m=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ym=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Em=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Am=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dm=`float getShadowMask() {
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
}`,Im=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Um=`#ifdef USE_SKINNING
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
#endif`,Nm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fm=`#ifdef USE_SKINNING
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
#endif`,Om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,km=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hm=`#ifdef USE_TRANSMISSION
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
#endif`,Vm=`#ifdef USE_TRANSMISSION
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
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ym=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$m=`uniform sampler2D t2D;
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
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qm=`#include <common>
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
}`,t0=`#if DEPTH_PACKING == 3200
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
}`,e0=`#define DISTANCE
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
}`,n0=`#define DISTANCE
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
}`,i0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,r0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s0=`uniform float scale;
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
}`,o0=`uniform vec3 diffuse;
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
}`,a0=`#include <common>
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
}`,c0=`uniform vec3 diffuse;
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
}`,l0=`#define LAMBERT
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
}`,u0=`#define LAMBERT
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
}`,h0=`#define MATCAP
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
}`,f0=`#define MATCAP
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
}`,d0=`#define NORMAL
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
}`,p0=`#define NORMAL
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
}`,m0=`#define PHONG
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
}`,g0=`#define PHONG
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
}`,_0=`#define STANDARD
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
}`,v0=`#define STANDARD
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
}`,x0=`#define TOON
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
}`,M0=`#define TOON
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
}`,y0=`uniform float size;
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
}`,S0=`uniform vec3 diffuse;
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
}`,E0=`#include <common>
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
}`,b0=`uniform vec3 color;
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
}`,w0=`uniform float rotation;
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
}`,T0=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:$d,alphahash_pars_fragment:jd,alphamap_fragment:Zd,alphamap_pars_fragment:Kd,alphatest_fragment:Jd,alphatest_pars_fragment:Qd,aomap_fragment:tp,aomap_pars_fragment:ep,batching_pars_vertex:np,batching_vertex:ip,begin_vertex:rp,beginnormal_vertex:sp,bsdfs:op,iridescence_fragment:ap,bumpmap_pars_fragment:cp,clipping_planes_fragment:lp,clipping_planes_pars_fragment:up,clipping_planes_pars_vertex:hp,clipping_planes_vertex:fp,color_fragment:dp,color_pars_fragment:pp,color_pars_vertex:mp,color_vertex:gp,common:_p,cube_uv_reflection_fragment:vp,defaultnormal_vertex:xp,displacementmap_pars_vertex:Mp,displacementmap_vertex:yp,emissivemap_fragment:Sp,emissivemap_pars_fragment:Ep,colorspace_fragment:bp,colorspace_pars_fragment:wp,envmap_fragment:Tp,envmap_common_pars_fragment:Ap,envmap_pars_fragment:Rp,envmap_pars_vertex:Cp,envmap_physical_pars_fragment:kp,envmap_vertex:Pp,fog_vertex:Lp,fog_pars_vertex:Dp,fog_fragment:Ip,fog_pars_fragment:Up,gradientmap_pars_fragment:Np,lightmap_pars_fragment:Fp,lights_lambert_fragment:Op,lights_lambert_pars_fragment:zp,lights_pars_begin:Bp,lights_toon_fragment:Hp,lights_toon_pars_fragment:Vp,lights_phong_fragment:Gp,lights_phong_pars_fragment:Wp,lights_physical_fragment:Xp,lights_physical_pars_fragment:qp,lights_fragment_begin:Yp,lights_fragment_maps:$p,lights_fragment_end:jp,logdepthbuf_fragment:Zp,logdepthbuf_pars_fragment:Kp,logdepthbuf_pars_vertex:Jp,logdepthbuf_vertex:Qp,map_fragment:tm,map_pars_fragment:em,map_particle_fragment:nm,map_particle_pars_fragment:im,metalnessmap_fragment:rm,metalnessmap_pars_fragment:sm,morphinstance_vertex:om,morphcolor_vertex:am,morphnormal_vertex:cm,morphtarget_pars_vertex:lm,morphtarget_vertex:um,normal_fragment_begin:hm,normal_fragment_maps:fm,normal_pars_fragment:dm,normal_pars_vertex:pm,normal_vertex:mm,normalmap_pars_fragment:gm,clearcoat_normal_fragment_begin:_m,clearcoat_normal_fragment_maps:vm,clearcoat_pars_fragment:xm,iridescence_pars_fragment:Mm,opaque_fragment:ym,packing:Sm,premultiplied_alpha_fragment:Em,project_vertex:bm,dithering_fragment:wm,dithering_pars_fragment:Tm,roughnessmap_fragment:Am,roughnessmap_pars_fragment:Rm,shadowmap_pars_fragment:Cm,shadowmap_pars_vertex:Pm,shadowmap_vertex:Lm,shadowmask_pars_fragment:Dm,skinbase_vertex:Im,skinning_pars_vertex:Um,skinning_vertex:Nm,skinnormal_vertex:Fm,specularmap_fragment:Om,specularmap_pars_fragment:zm,tonemapping_fragment:Bm,tonemapping_pars_fragment:km,transmission_fragment:Hm,transmission_pars_fragment:Vm,uv_pars_fragment:Gm,uv_pars_vertex:Wm,uv_vertex:Xm,worldpos_vertex:qm,background_vert:Ym,background_frag:$m,backgroundCube_vert:jm,backgroundCube_frag:Zm,cube_vert:Km,cube_frag:Jm,depth_vert:Qm,depth_frag:t0,distanceRGBA_vert:e0,distanceRGBA_frag:n0,equirect_vert:i0,equirect_frag:r0,linedashed_vert:s0,linedashed_frag:o0,meshbasic_vert:a0,meshbasic_frag:c0,meshlambert_vert:l0,meshlambert_frag:u0,meshmatcap_vert:h0,meshmatcap_frag:f0,meshnormal_vert:d0,meshnormal_frag:p0,meshphong_vert:m0,meshphong_frag:g0,meshphysical_vert:_0,meshphysical_frag:v0,meshtoon_vert:x0,meshtoon_frag:M0,points_vert:y0,points_frag:S0,shadow_vert:E0,shadow_frag:b0,sprite_vert:w0,sprite_frag:T0},lt={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Un={basic:{uniforms:qe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:qe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new At(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:qe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:qe([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:qe([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new At(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:qe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:qe([lt.points,lt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:qe([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:qe([lt.common,lt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:qe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:qe([lt.sprite,lt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:qe([lt.common,lt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:qe([lt.lights,lt.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Un.physical={uniforms:qe([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const to={r:0,b:0,g:0},Fi=new gn,A0=new ue;function R0(n,t,e,i,r,s,a){const o=new At(0);let c=s===!0?0:1,l,u,f=null,d=0,p=null;function g(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?e:t).get(y)),y}function _(S){let y=!1;const x=g(S);x===null?h(o,c):x&&x.isColor&&(h(x,1),y=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===Go)?(u===void 0&&(u=new Ht(new Ot(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:kr(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Fi.copy(y.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(A0.makeRotationFromEuler(Fi)),u.material.toneMapped=re.getTransfer(x.colorSpace)!==fe,(f!==x||d!==x.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=x,d=x.version,p=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ht(new Bn(2,2),new _n({name:"BackgroundMaterial",uniforms:kr(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=re.getTransfer(x.colorSpace)!==fe,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||d!==x.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,f=x,d=x.version,p=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function h(S,y){S.getRGB(to,Ch(n)),i.buffers.color.setClear(to.r,to.g,to.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(S,y=1){o.set(S),c=y,h(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,h(o,c)},render:_,addToRenderList:m}}function C0(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(v,R,O,F,k){let Y=!1;const V=f(F,O,R);s!==V&&(s=V,l(s.object)),Y=p(v,F,O,k),Y&&g(v,F,O,k),k!==null&&t.update(k,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,x(v,R,O,F),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return n.createVertexArray()}function l(v){return n.bindVertexArray(v)}function u(v){return n.deleteVertexArray(v)}function f(v,R,O){const F=O.wireframe===!0;let k=i[v.id];k===void 0&&(k={},i[v.id]=k);let Y=k[R.id];Y===void 0&&(Y={},k[R.id]=Y);let V=Y[F];return V===void 0&&(V=d(c()),Y[F]=V),V}function d(v){const R=[],O=[],F=[];for(let k=0;k<e;k++)R[k]=0,O[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:O,attributeDivisors:F,object:v,attributes:{},index:null}}function p(v,R,O,F){const k=s.attributes,Y=R.attributes;let V=0;const K=O.getAttributes();for(const G in K)if(K[G].location>=0){const _t=k[G];let wt=Y[G];if(wt===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(wt=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(wt=v.instanceColor)),_t===void 0||_t.attribute!==wt||wt&&_t.data!==wt.data)return!0;V++}return s.attributesNum!==V||s.index!==F}function g(v,R,O,F){const k={},Y=R.attributes;let V=0;const K=O.getAttributes();for(const G in K)if(K[G].location>=0){let _t=Y[G];_t===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(_t=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(_t=v.instanceColor));const wt={};wt.attribute=_t,_t&&_t.data&&(wt.data=_t.data),k[G]=wt,V++}s.attributes=k,s.attributesNum=V,s.index=F}function _(){const v=s.newAttributes;for(let R=0,O=v.length;R<O;R++)v[R]=0}function m(v){h(v,0)}function h(v,R){const O=s.newAttributes,F=s.enabledAttributes,k=s.attributeDivisors;O[v]=1,F[v]===0&&(n.enableVertexAttribArray(v),F[v]=1),k[v]!==R&&(n.vertexAttribDivisor(v,R),k[v]=R)}function S(){const v=s.newAttributes,R=s.enabledAttributes;for(let O=0,F=R.length;O<F;O++)R[O]!==v[O]&&(n.disableVertexAttribArray(O),R[O]=0)}function y(v,R,O,F,k,Y,V){V===!0?n.vertexAttribIPointer(v,R,O,k,Y):n.vertexAttribPointer(v,R,O,F,k,Y)}function x(v,R,O,F){_();const k=F.attributes,Y=O.getAttributes(),V=R.defaultAttributeValues;for(const K in Y){const G=Y[K];if(G.location>=0){let ct=k[K];if(ct===void 0&&(K==="instanceMatrix"&&v.instanceMatrix&&(ct=v.instanceMatrix),K==="instanceColor"&&v.instanceColor&&(ct=v.instanceColor)),ct!==void 0){const _t=ct.normalized,wt=ct.itemSize,Xt=t.get(ct);if(Xt===void 0)continue;const ae=Xt.buffer,$=Xt.type,nt=Xt.bytesPerElement,Tt=$===n.INT||$===n.UNSIGNED_INT||ct.gpuType===Qc;if(ct.isInterleavedBufferAttribute){const rt=ct.data,Ft=rt.stride,Gt=ct.offset;if(rt.isInstancedInterleavedBuffer){for(let kt=0;kt<G.locationSize;kt++)h(G.location+kt,rt.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let kt=0;kt<G.locationSize;kt++)m(G.location+kt);n.bindBuffer(n.ARRAY_BUFFER,ae);for(let kt=0;kt<G.locationSize;kt++)y(G.location+kt,wt/G.locationSize,$,_t,Ft*nt,(Gt+wt/G.locationSize*kt)*nt,Tt)}else{if(ct.isInstancedBufferAttribute){for(let rt=0;rt<G.locationSize;rt++)h(G.location+rt,ct.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let rt=0;rt<G.locationSize;rt++)m(G.location+rt);n.bindBuffer(n.ARRAY_BUFFER,ae);for(let rt=0;rt<G.locationSize;rt++)y(G.location+rt,wt/G.locationSize,$,_t,wt*nt,wt/G.locationSize*rt*nt,Tt)}}else if(V!==void 0){const _t=V[K];if(_t!==void 0)switch(_t.length){case 2:n.vertexAttrib2fv(G.location,_t);break;case 3:n.vertexAttrib3fv(G.location,_t);break;case 4:n.vertexAttrib4fv(G.location,_t);break;default:n.vertexAttrib1fv(G.location,_t)}}}}S()}function L(){P();for(const v in i){const R=i[v];for(const O in R){const F=R[O];for(const k in F)u(F[k].object),delete F[k];delete R[O]}delete i[v]}}function T(v){if(i[v.id]===void 0)return;const R=i[v.id];for(const O in R){const F=R[O];for(const k in F)u(F[k].object),delete F[k];delete R[O]}delete i[v.id]}function A(v){for(const R in i){const O=i[R];if(O[v.id]===void 0)continue;const F=O[v.id];for(const k in F)u(F[k].object),delete F[k];delete O[v.id]}}function P(){M(),a=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:M,dispose:L,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function P0(n,t,e){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function a(l,u,f){f!==0&&(n.drawArraysInstanced(i,l,u,f),e.update(u,i,f))}function o(l,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];e.update(p,i,1)}function c(l,u,f,d){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*d[_];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function L0(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==Tn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const P=A===$r&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==li&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Fn&&!P)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:L,maxSamples:T}}function D0(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new zi,o=new $t,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const S=s?0:i,y=S*4;let x=h.clippingState||null;c.value=x,x=u(g,d,y,p);for(let L=0;L!==y;++L)x[L]=e[L];h.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,d,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const h=p+_*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<h)&&(m=new Float32Array(h));for(let y=0,x=p;y!==_;++y,x+=4)a.copy(f[y]).applyMatrix4(S,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function I0(n){let t=new WeakMap;function e(a,o){return o===tc?a.mapping=Fr:o===ec&&(a.mapping=Or),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===tc||o===ec)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Wd(c.height);return l.fromEquirectangularTexture(n,a),t.set(a,l),a.addEventListener("dispose",r),e(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class al extends Lh{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Er=4,ou=[.125,.215,.35,.446,.526,.582],Hi=20,Ra=new al,au=new At;let Ca=null,Pa=0,La=0,Da=!1;const Bi=(1+Math.sqrt(5))/2,vr=1/Bi,cu=[new D(-Bi,vr,0),new D(Bi,vr,0),new D(-vr,0,Bi),new D(vr,0,Bi),new D(0,Bi,-vr),new D(0,Bi,vr),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class lu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Ca=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),La=this._renderer.getActiveMipmapLevel(),Da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ca,Pa,La),this._renderer.xr.enabled=Da,t.scissorTest=!1,eo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fr||t.mapping===Or?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ca=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),La=this._renderer.getActiveMipmapLevel(),Da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:$r,format:Tn,colorSpace:jr,depthBuffer:!1},r=uu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uu(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=U0(s)),this._blurMaterial=N0(s,t,e)}return r}_compileMaterial(t){const e=new Ht(this._lodPlanes[0],t);this._renderer.compile(e,Ra)}_sceneToCubeUV(t,e,i,r){const o=new hn(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(au),u.toneMapping=wi,u.autoClear=!1;const p=new ir({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),g=new Ht(new Ot,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(au),_=!0);for(let h=0;h<6;h++){const S=h%3;S===0?(o.up.set(0,c[h],0),o.lookAt(l[h],0,0)):S===1?(o.up.set(0,0,c[h]),o.lookAt(0,l[h],0)):(o.up.set(0,c[h],0),o.lookAt(0,0,l[h]));const y=this._cubeSize;eo(r,S*y,h>2?y:0,y,y),u.setRenderTarget(r),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Fr||t.mapping===Or;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ht(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;eo(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,Ra)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=cu[(r-s-1)%cu.length];this._blur(t,s-1,s,a,o)}e.autoClear=i}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ht(this._lodPlanes[r],l),d=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Hi-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Hi;m>Hi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hi}`);const h=[];let S=0;for(let A=0;A<Hi;++A){const P=A/_,M=Math.exp(-P*P/2);h.push(M),A===0?S+=M:A<m&&(S+=2*M)}for(let A=0;A<h.length;A++)h[A]=h[A]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;const x=this._sizeLods[r],L=3*x*(r>y-Er?r-y+Er:0),T=4*(this._cubeSize-x);eo(e,L,T,3*x,2*x),c.setRenderTarget(e),c.render(f,Ra)}}function U0(n){const t=[],e=[],i=[];let r=n;const s=n-Er+1+ou.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>n-Er?c=ou[a-n+Er-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,_=3,m=2,h=1,S=new Float32Array(_*g*p),y=new Float32Array(m*g*p),x=new Float32Array(h*g*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,P=T>2?0:-1,M=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];S.set(M,_*g*T),y.set(d,m*g*T);const v=[T,T,T,T,T,T];x.set(v,h*g*T)}const L=new Xe;L.setAttribute("position",new Te(S,_)),L.setAttribute("uv",new Te(y,m)),L.setAttribute("faceIndex",new Te(x,h)),t.push(L),r>Er&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function uu(n,t,e){const i=new Ci(n,t,e);return i.texture.mapping=Go,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function eo(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function N0(n,t,e){const i=new Float32Array(Hi),r=new D(0,1,0);return new _n({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:cl(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function hu(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cl(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function fu(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function cl(){return`

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
	`}function F0(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===tc||c===ec,u=c===Fr||c===Or;if(l||u){let f=t.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new lu(n)),f=l?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return l&&p&&p.height>0||u&&p&&r(p)?(e===null&&(e=new lu(n)),f=l?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function O0(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&fs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function z0(n,t,e,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,h=_.length;m<h;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function c(f){const d=f.attributes;for(const g in d)t.update(d[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const _=p[g];for(let m=0,h=_.length;m<h;m++)t.update(_[m],n.ARRAY_BUFFER)}}function l(f){const d=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const S=p.array;_=p.version;for(let y=0,x=S.length;y<x;y+=3){const L=S[y+0],T=S[y+1],A=S[y+2];d.push(L,T,T,A,A,L)}}else if(g!==void 0){const S=g.array;_=g.version;for(let y=0,x=S.length/3-1;y<x;y+=3){const L=y+0,T=y+1,A=y+2;d.push(L,T,T,A,A,L)}}else return;const m=new(yh(d)?Rh:Ah)(d,1);m.version=_;const h=s.get(f);h&&t.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function B0(n,t,e){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,p){n.drawElements(i,p,s,d*a),e.update(p,i,1)}function l(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,d*a,g),e.update(p,i,g))}function u(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];e.update(m,i,1)}function f(d,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)l(d[h]/a,p[h],_[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,_,0,g);let h=0;for(let S=0;S<g;S++)h+=p[S]*_[S];e.update(h,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function k0(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function H0(n,t,e){const i=new WeakMap,r=new be;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let v=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",v)};var p=v;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let L=o.attributes.position.count*x,T=1;L>t.maxTextureSize&&(T=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const A=new Float32Array(L*T*4*f),P=new Eh(A,L,T,f);P.type=Fn,P.needsUpdate=!0;const M=x*4;for(let R=0;R<f;R++){const O=h[R],F=S[R],k=y[R],Y=L*T*4*R;for(let V=0;V<O.count;V++){const K=V*M;g===!0&&(r.fromBufferAttribute(O,V),A[Y+K+0]=r.x,A[Y+K+1]=r.y,A[Y+K+2]=r.z,A[Y+K+3]=0),_===!0&&(r.fromBufferAttribute(F,V),A[Y+K+4]=r.x,A[Y+K+5]=r.y,A[Y+K+6]=r.z,A[Y+K+7]=0),m===!0&&(r.fromBufferAttribute(k,V),A[Y+K+8]=r.x,A[Y+K+9]=r.y,A[Y+K+10]=r.z,A[Y+K+11]=k.itemSize===4?r.w:1)}}d={count:f,texture:P,size:new st(L,T)},i.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function V0(n,t,e,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==l&&(t.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}class ll extends Ge{constructor(t,e,i,r,s,a,o,c,l,u=Pr){if(u!==Pr&&u!==Br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Pr&&(i=Ji),i===void 0&&u===Br&&(i=zr),super(null,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:an,this.minFilter=c!==void 0?c:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Uh=new Ge,du=new ll(1,1),Nh=new Eh,Fh=new Cd,Oh=new Dh,pu=[],mu=[],gu=new Float32Array(16),_u=new Float32Array(9),vu=new Float32Array(4);function ts(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=pu[r];if(s===void 0&&(s=new Float32Array(r),pu[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function Le(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function De(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Xo(n,t){let e=mu[t];e===void 0&&(e=new Int32Array(t),mu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function G0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function W0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2fv(this.addr,t),De(e,t)}}function X0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;n.uniform3fv(this.addr,t),De(e,t)}}function q0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4fv(this.addr,t),De(e,t)}}function Y0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Le(e,i))return;vu.set(i),n.uniformMatrix2fv(this.addr,!1,vu),De(e,i)}}function $0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Le(e,i))return;_u.set(i),n.uniformMatrix3fv(this.addr,!1,_u),De(e,i)}}function j0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Le(e,i))return;gu.set(i),n.uniformMatrix4fv(this.addr,!1,gu),De(e,i)}}function Z0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function K0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2iv(this.addr,t),De(e,t)}}function J0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;n.uniform3iv(this.addr,t),De(e,t)}}function Q0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4iv(this.addr,t),De(e,t)}}function tg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function eg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2uiv(this.addr,t),De(e,t)}}function ng(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;n.uniform3uiv(this.addr,t),De(e,t)}}function ig(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4uiv(this.addr,t),De(e,t)}}function rg(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(du.compareFunction=Mh,s=du):s=Uh,e.setTexture2D(t||s,r)}function sg(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Fh,r)}function og(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Oh,r)}function ag(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Nh,r)}function cg(n){switch(n){case 5126:return G0;case 35664:return W0;case 35665:return X0;case 35666:return q0;case 35674:return Y0;case 35675:return $0;case 35676:return j0;case 5124:case 35670:return Z0;case 35667:case 35671:return K0;case 35668:case 35672:return J0;case 35669:case 35673:return Q0;case 5125:return tg;case 36294:return eg;case 36295:return ng;case 36296:return ig;case 35678:case 36198:case 36298:case 36306:case 35682:return rg;case 35679:case 36299:case 36307:return sg;case 35680:case 36300:case 36308:case 36293:return og;case 36289:case 36303:case 36311:case 36292:return ag}}function lg(n,t){n.uniform1fv(this.addr,t)}function ug(n,t){const e=ts(t,this.size,2);n.uniform2fv(this.addr,e)}function hg(n,t){const e=ts(t,this.size,3);n.uniform3fv(this.addr,e)}function fg(n,t){const e=ts(t,this.size,4);n.uniform4fv(this.addr,e)}function dg(n,t){const e=ts(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function pg(n,t){const e=ts(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function mg(n,t){const e=ts(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function gg(n,t){n.uniform1iv(this.addr,t)}function _g(n,t){n.uniform2iv(this.addr,t)}function vg(n,t){n.uniform3iv(this.addr,t)}function xg(n,t){n.uniform4iv(this.addr,t)}function Mg(n,t){n.uniform1uiv(this.addr,t)}function yg(n,t){n.uniform2uiv(this.addr,t)}function Sg(n,t){n.uniform3uiv(this.addr,t)}function Eg(n,t){n.uniform4uiv(this.addr,t)}function bg(n,t,e){const i=this.cache,r=t.length,s=Xo(e,r);Le(i,s)||(n.uniform1iv(this.addr,s),De(i,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Uh,s[a])}function wg(n,t,e){const i=this.cache,r=t.length,s=Xo(e,r);Le(i,s)||(n.uniform1iv(this.addr,s),De(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Fh,s[a])}function Tg(n,t,e){const i=this.cache,r=t.length,s=Xo(e,r);Le(i,s)||(n.uniform1iv(this.addr,s),De(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Oh,s[a])}function Ag(n,t,e){const i=this.cache,r=t.length,s=Xo(e,r);Le(i,s)||(n.uniform1iv(this.addr,s),De(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Nh,s[a])}function Rg(n){switch(n){case 5126:return lg;case 35664:return ug;case 35665:return hg;case 35666:return fg;case 35674:return dg;case 35675:return pg;case 35676:return mg;case 5124:case 35670:return gg;case 35667:case 35671:return _g;case 35668:case 35672:return vg;case 35669:case 35673:return xg;case 5125:return Mg;case 36294:return yg;case 36295:return Sg;case 36296:return Eg;case 35678:case 36198:case 36298:case 36306:case 35682:return bg;case 35679:case 36299:case 36307:return wg;case 35680:case 36300:case 36308:case 36293:return Tg;case 36289:case 36303:case 36311:case 36292:return Ag}}class Cg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=cg(e.type)}}class Pg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Rg(e.type)}}class Lg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const Ia=/(\w+)(\])?(\[|\.)?/g;function xu(n,t){n.seq.push(t),n.map[t.id]=t}function Dg(n,t,e){const i=n.name,r=i.length;for(Ia.lastIndex=0;;){const s=Ia.exec(i),a=Ia.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){xu(e,l===void 0?new Cg(o,n,t):new Pg(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new Lg(o),xu(e,f)),e=f}}}class yo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);Dg(s,a,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function Mu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Ig=37297;let Ug=0;function Ng(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const yu=new $t;function Fg(n){re._getMatrix(yu,re.workingColorSpace,n);const t=`mat3( ${yu.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(n)){case Wo:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Su(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Ng(n.getShaderSource(t),a)}else return r}function Og(n,t){const e=Fg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function zg(n,t){let e;switch(t){case id:e="Linear";break;case rd:e="Reinhard";break;case sd:e="Cineon";break;case ch:e="ACESFilmic";break;case ad:e="AgX";break;case cd:e="Neutral";break;case od:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const no=new D;function Bg(){re.getLuminanceCoefficients(no);const n=no.x.toFixed(4),t=no.y.toFixed(4),e=no.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ds).join(`
`)}function Hg(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Vg(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function ds(n){return n!==""}function Eu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Gg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pc(n){return n.replace(Gg,Xg)}const Wg=new Map;function Xg(n,t){let e=Zt[t];if(e===void 0){const i=Wg.get(t);if(i!==void 0)e=Zt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Pc(e)}const qg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wu(n){return n.replace(qg,Yg)}function Yg(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function $g(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===oh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===ah?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ti&&(t="SHADOWMAP_TYPE_VSM"),t}function jg(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Fr:case Or:t="ENVMAP_TYPE_CUBE";break;case Go:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Zg(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Or:t="ENVMAP_MODE_REFRACTION";break}return t}function Kg(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Jc:t="ENVMAP_BLENDING_MULTIPLY";break;case ed:t="ENVMAP_BLENDING_MIX";break;case nd:t="ENVMAP_BLENDING_ADD";break}return t}function Jg(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Qg(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=$g(e),l=jg(e),u=Zg(e),f=Kg(e),d=Jg(e),p=kg(e),g=Hg(s),_=r.createProgram();let m,h,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ds).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ds).join(`
`),h.length>0&&(h+=`
`)):(m=[Tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),h=[Tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wi?"#define TONE_MAPPING":"",e.toneMapping!==wi?Zt.tonemapping_pars_fragment:"",e.toneMapping!==wi?zg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Og("linearToOutputTexel",e.outputColorSpace),Bg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ds).join(`
`)),a=Pc(a),a=Eu(a,e),a=bu(a,e),o=Pc(o),o=Eu(o,e),o=bu(o,e),a=wu(a),o=wu(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",e.glslVersion===Bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=S+m+a,x=S+h+o,L=Mu(r,r.VERTEX_SHADER,y),T=Mu(r,r.FRAGMENT_SHADER,x);r.attachShader(_,L),r.attachShader(_,T),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(R){if(n.debug.checkShaderErrors){const O=r.getProgramInfoLog(_).trim(),F=r.getShaderInfoLog(L).trim(),k=r.getShaderInfoLog(T).trim();let Y=!0,V=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,L,T);else{const K=Su(r,L,"vertex"),G=Su(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+O+`
`+K+`
`+G)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(F===""||k==="")&&(V=!1);V&&(R.diagnostics={runnable:Y,programLog:O,vertexShader:{log:F,prefix:m},fragmentShader:{log:k,prefix:h}})}r.deleteShader(L),r.deleteShader(T),P=new yo(r,_),M=Vg(r,_)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(_,Ig)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ug++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=T,this}let t_=0;class e_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new n_(t),e.set(t,i)),i}}class n_{constructor(t){this.id=t_++,this.code=t,this.usedTimes=0}}function i_(n,t,e,i,r,s,a){const o=new wh,c=new e_,l=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,v,R,O,F){const k=O.fog,Y=F.geometry,V=M.isMeshStandardMaterial?O.environment:null,K=(M.isMeshStandardMaterial?e:t).get(M.envMap||V),G=K&&K.mapping===Go?K.image.height:null,ct=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const _t=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,wt=_t!==void 0?_t.length:0;let Xt=0;Y.morphAttributes.position!==void 0&&(Xt=1),Y.morphAttributes.normal!==void 0&&(Xt=2),Y.morphAttributes.color!==void 0&&(Xt=3);let ae,$,nt,Tt;if(ct){const he=Un[ct];ae=he.vertexShader,$=he.fragmentShader}else ae=M.vertexShader,$=M.fragmentShader,c.update(M),nt=c.getVertexShaderID(M),Tt=c.getFragmentShaderID(M);const rt=n.getRenderTarget(),Ft=n.state.buffers.depth.getReversed(),Gt=F.isInstancedMesh===!0,kt=F.isBatchedMesh===!0,ie=!!M.map,Z=!!M.matcap,et=!!K,C=!!M.aoMap,Dt=!!M.lightMap,Q=!!M.bumpMap,yt=!!M.normalMap,at=!!M.displacementMap,zt=!!M.emissiveMap,xt=!!M.metalnessMap,w=!!M.roughnessMap,E=M.anisotropy>0,z=M.clearcoat>0,X=M.dispersion>0,J=M.iridescence>0,q=M.sheen>0,Rt=M.transmission>0,ut=E&&!!M.anisotropyMap,Mt=z&&!!M.clearcoatMap,te=z&&!!M.clearcoatNormalMap,tt=z&&!!M.clearcoatRoughnessMap,Et=J&&!!M.iridescenceMap,Bt=J&&!!M.iridescenceThicknessMap,Vt=q&&!!M.sheenColorMap,bt=q&&!!M.sheenRoughnessMap,ee=!!M.specularMap,jt=!!M.specularColorMap,me=!!M.specularIntensityMap,I=Rt&&!!M.transmissionMap,ft=Rt&&!!M.thicknessMap,W=!!M.gradientMap,j=!!M.alphaMap,mt=M.alphaTest>0,dt=!!M.alphaHash,qt=!!M.extensions;let Se=wi;M.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Se=n.toneMapping);const ze={shaderID:ct,shaderType:M.type,shaderName:M.name,vertexShader:ae,fragmentShader:$,defines:M.defines,customVertexShaderID:nt,customFragmentShaderID:Tt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:kt,batchingColor:kt&&F._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&F.instanceColor!==null,instancingMorph:Gt&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?n.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:jr,alphaToCoverage:!!M.alphaToCoverage,map:ie,matcap:Z,envMap:et,envMapMode:et&&K.mapping,envMapCubeUVHeight:G,aoMap:C,lightMap:Dt,bumpMap:Q,normalMap:yt,displacementMap:d&&at,emissiveMap:zt,normalMapObjectSpace:yt&&M.normalMapType===fd,normalMapTangentSpace:yt&&M.normalMapType===xh,metalnessMap:xt,roughnessMap:w,anisotropy:E,anisotropyMap:ut,clearcoat:z,clearcoatMap:Mt,clearcoatNormalMap:te,clearcoatRoughnessMap:tt,dispersion:X,iridescence:J,iridescenceMap:Et,iridescenceThicknessMap:Bt,sheen:q,sheenColorMap:Vt,sheenRoughnessMap:bt,specularMap:ee,specularColorMap:jt,specularIntensityMap:me,transmission:Rt,transmissionMap:I,thicknessMap:ft,gradientMap:W,opaque:M.transparent===!1&&M.blending===Cr&&M.alphaToCoverage===!1,alphaMap:j,alphaTest:mt,alphaHash:dt,combine:M.combine,mapUv:ie&&_(M.map.channel),aoMapUv:C&&_(M.aoMap.channel),lightMapUv:Dt&&_(M.lightMap.channel),bumpMapUv:Q&&_(M.bumpMap.channel),normalMapUv:yt&&_(M.normalMap.channel),displacementMapUv:at&&_(M.displacementMap.channel),emissiveMapUv:zt&&_(M.emissiveMap.channel),metalnessMapUv:xt&&_(M.metalnessMap.channel),roughnessMapUv:w&&_(M.roughnessMap.channel),anisotropyMapUv:ut&&_(M.anisotropyMap.channel),clearcoatMapUv:Mt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:te&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:bt&&_(M.sheenRoughnessMap.channel),specularMapUv:ee&&_(M.specularMap.channel),specularColorMapUv:jt&&_(M.specularColorMap.channel),specularIntensityMapUv:me&&_(M.specularIntensityMap.channel),transmissionMapUv:I&&_(M.transmissionMap.channel),thicknessMapUv:ft&&_(M.thicknessMap.channel),alphaMapUv:j&&_(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(yt||E),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Y.attributes.uv&&(ie||j),fog:!!k,useFog:M.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ft,skinning:F.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Xt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Se,decodeVideoTexture:ie&&M.map.isVideoTexture===!0&&re.getTransfer(M.map.colorSpace)===fe,decodeVideoTextureEmissive:zt&&M.emissiveMap.isVideoTexture===!0&&re.getTransfer(M.emissiveMap.colorSpace)===fe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===sn,flipSided:M.side===je,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:qt&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&M.extensions.multiDraw===!0||kt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze}function h(M){const v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(const R in M.defines)v.push(R),v.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(S(v,M),y(v,M),v.push(n.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function S(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function y(M,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),M.push(o.mask)}function x(M){const v=g[M.type];let R;if(v){const O=Un[v];R=Ph.clone(O.uniforms)}else R=M.uniforms;return R}function L(M,v){let R;for(let O=0,F=u.length;O<F;O++){const k=u[O];if(k.cacheKey===v){R=k,++R.usedTimes;break}}return R===void 0&&(R=new Qg(n,v,M,s),u.push(R)),R}function T(M){if(--M.usedTimes===0){const v=u.indexOf(M);u[v]=u[u.length-1],u.pop(),M.destroy()}}function A(M){c.remove(M)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:x,acquireProgram:L,releaseProgram:T,releaseShaderCache:A,programs:u,dispose:P}}function r_(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function s_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Au(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ru(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(f,d,p,g,_,m){let h=n[t];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[t]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=_,h.group=m),t++,h}function o(f,d,p,g,_,m){const h=a(f,d,p,g,_,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):e.push(h)}function c(f,d,p,g,_,m){const h=a(f,d,p,g,_,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):e.unshift(h)}function l(f,d){e.length>1&&e.sort(f||s_),i.length>1&&i.sort(d||Au),r.length>1&&r.sort(d||Au)}function u(){for(let f=t,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function o_(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new Ru,n.set(i,[a])):r>=s.length?(a=new Ru,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function a_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new At};break;case"SpotLight":e={position:new D,direction:new D,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new At,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new At,groundColor:new At};break;case"RectAreaLight":e={color:new At,position:new D,halfWidth:new D,halfHeight:new D};break}return n[t.id]=e,e}}}function c_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let l_=0;function u_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function h_(n){const t=new a_,e=c_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new D);const r=new D,s=new ue,a=new ue;function o(l){let u=0,f=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,g=0,_=0,m=0,h=0,S=0,y=0,x=0,L=0,T=0,A=0;l.sort(u_);for(let M=0,v=l.length;M<v;M++){const R=l[M],O=R.color,F=R.intensity,k=R.distance,Y=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=O.r*F,f+=O.g*F,d+=O.b*F;else if(R.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(R.sh.coefficients[V],F);A++}else if(R.isDirectionalLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const K=R.shadow,G=e.get(R);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=R.shadow.matrix,S++}i.directional[p]=V,p++}else if(R.isSpotLight){const V=t.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(O).multiplyScalar(F),V.distance=k,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,i.spot[_]=V;const K=R.shadow;if(R.map&&(i.spotLightMap[L]=R.map,L++,K.updateMatrices(R),R.castShadow&&T++),i.spotLightMatrix[_]=K.matrix,R.castShadow){const G=e.get(R);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=Y,x++}_++}else if(R.isRectAreaLight){const V=t.get(R);V.color.copy(O).multiplyScalar(F),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=V,m++}else if(R.isPointLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){const K=R.shadow,G=e.get(R);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,G.shadowCameraNear=K.camera.near,G.shadowCameraFar=K.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=R.shadow.matrix,y++}i.point[g]=V,g++}else if(R.isHemisphereLight){const V=t.get(R);V.skyColor.copy(R.color).multiplyScalar(F),V.groundColor.copy(R.groundColor).multiplyScalar(F),i.hemi[h]=V,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==h||P.numDirectionalShadows!==S||P.numPointShadows!==y||P.numSpotShadows!==x||P.numSpotMaps!==L||P.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+L-T,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=h,P.numDirectionalShadows=S,P.numPointShadows=y,P.numSpotShadows=x,P.numSpotMaps=L,P.numLightProbes=A,i.version=l_++)}function c(l,u){let f=0,d=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let h=0,S=l.length;h<S;h++){const y=l[h];if(y.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(y.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:i}}function Cu(n){const t=new h_(n),e=[],i=[];function r(u){l.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function a(u){i.push(u)}function o(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function f_(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Cu(n),t.set(r,[o])):s>=a.length?(o=new Cu(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class d_ extends Qr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ud,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class p_ extends Qr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const m_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g_=`uniform sampler2D shadow_pass;
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
}`;function __(n,t,e){let i=new ol;const r=new st,s=new st,a=new be,o=new d_({depthPacking:hd}),c=new p_,l={},u=e.maxTextureSize,f={[Ri]:je,[je]:Ri,[sn]:sn},d=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:m_,fragmentShader:g_}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Xe;g.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ht(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oh;let h=this.type;this.render=function(T,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=n.getRenderTarget(),v=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),O=n.state;O.setBlending(bi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const F=h!==ti&&this.type===ti,k=h===ti&&this.type!==ti;for(let Y=0,V=T.length;Y<V;Y++){const K=T[Y],G=K.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const ct=G.getFrameExtents();if(r.multiply(ct),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ct.x),r.x=s.x*ct.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ct.y),r.y=s.y*ct.y,G.mapSize.y=s.y)),G.map===null||F===!0||k===!0){const wt=this.type!==ti?{minFilter:an,magFilter:an}:{};G.map!==null&&G.map.dispose(),G.map=new Ci(r.x,r.y,wt),G.map.texture.name=K.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const _t=G.getViewportCount();for(let wt=0;wt<_t;wt++){const Xt=G.getViewport(wt);a.set(s.x*Xt.x,s.y*Xt.y,s.x*Xt.z,s.y*Xt.w),O.viewport(a),G.updateMatrices(K,wt),i=G.getFrustum(),x(A,P,G.camera,K,this.type)}G.isPointLightShadow!==!0&&this.type===ti&&S(G,P),G.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(M,v,R)};function S(T,A){const P=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ci(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(A,null,P,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(A,null,P,p,_,null)}function y(T,A,P,M){let v=null;const R=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)v=R;else if(v=P.isPointLight===!0?c:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const O=v.uuid,F=A.uuid;let k=l[O];k===void 0&&(k={},l[O]=k);let Y=k[F];Y===void 0&&(Y=v.clone(),k[F]=Y,A.addEventListener("dispose",L)),v=Y}if(v.visible=A.visible,v.wireframe=A.wireframe,M===ti?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:f[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const O=n.properties.get(v);O.light=P}return v}function x(T,A,P,M,v){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===ti)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const F=t.update(T),k=T.material;if(Array.isArray(k)){const Y=F.groups;for(let V=0,K=Y.length;V<K;V++){const G=Y[V],ct=k[G.materialIndex];if(ct&&ct.visible){const _t=y(T,ct,M,v);T.onBeforeShadow(n,T,A,P,F,_t,G),n.renderBufferDirect(P,null,F,_t,T,G),T.onAfterShadow(n,T,A,P,F,_t,G)}}}else if(k.visible){const Y=y(T,k,M,v);T.onBeforeShadow(n,T,A,P,F,Y,null),n.renderBufferDirect(P,null,F,Y,T,null),T.onAfterShadow(n,T,A,P,F,Y,null)}}const O=T.children;for(let F=0,k=O.length;F<k;F++)x(O[F],A,P,M,v)}function L(T){T.target.removeEventListener("dispose",L);for(const P in l){const M=l[P],v=T.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}const v_={[Ya]:$a,[ja]:Ja,[Za]:Qa,[Nr]:Ka,[$a]:Ya,[Ja]:ja,[Qa]:Za,[Ka]:Nr};function x_(n,t){function e(){let I=!1;const ft=new be;let W=null;const j=new be(0,0,0,0);return{setMask:function(mt){W!==mt&&!I&&(n.colorMask(mt,mt,mt,mt),W=mt)},setLocked:function(mt){I=mt},setClear:function(mt,dt,qt,Se,ze){ze===!0&&(mt*=Se,dt*=Se,qt*=Se),ft.set(mt,dt,qt,Se),j.equals(ft)===!1&&(n.clearColor(mt,dt,qt,Se),j.copy(ft))},reset:function(){I=!1,W=null,j.set(-1,0,0,0)}}}function i(){let I=!1,ft=!1,W=null,j=null,mt=null;return{setReversed:function(dt){if(ft!==dt){const qt=t.get("EXT_clip_control");ft?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT);const Se=mt;mt=null,this.setClear(Se)}ft=dt},getReversed:function(){return ft},setTest:function(dt){dt?rt(n.DEPTH_TEST):Ft(n.DEPTH_TEST)},setMask:function(dt){W!==dt&&!I&&(n.depthMask(dt),W=dt)},setFunc:function(dt){if(ft&&(dt=v_[dt]),j!==dt){switch(dt){case Ya:n.depthFunc(n.NEVER);break;case $a:n.depthFunc(n.ALWAYS);break;case ja:n.depthFunc(n.LESS);break;case Nr:n.depthFunc(n.LEQUAL);break;case Za:n.depthFunc(n.EQUAL);break;case Ka:n.depthFunc(n.GEQUAL);break;case Ja:n.depthFunc(n.GREATER);break;case Qa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=dt}},setLocked:function(dt){I=dt},setClear:function(dt){mt!==dt&&(ft&&(dt=1-dt),n.clearDepth(dt),mt=dt)},reset:function(){I=!1,W=null,j=null,mt=null,ft=!1}}}function r(){let I=!1,ft=null,W=null,j=null,mt=null,dt=null,qt=null,Se=null,ze=null;return{setTest:function(he){I||(he?rt(n.STENCIL_TEST):Ft(n.STENCIL_TEST))},setMask:function(he){ft!==he&&!I&&(n.stencilMask(he),ft=he)},setFunc:function(he,vn,Xn){(W!==he||j!==vn||mt!==Xn)&&(n.stencilFunc(he,vn,Xn),W=he,j=vn,mt=Xn)},setOp:function(he,vn,Xn){(dt!==he||qt!==vn||Se!==Xn)&&(n.stencilOp(he,vn,Xn),dt=he,qt=vn,Se=Xn)},setLocked:function(he){I=he},setClear:function(he){ze!==he&&(n.clearStencil(he),ze=he)},reset:function(){I=!1,ft=null,W=null,j=null,mt=null,dt=null,qt=null,Se=null,ze=null}}}const s=new e,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let u={},f={},d=new WeakMap,p=[],g=null,_=!1,m=null,h=null,S=null,y=null,x=null,L=null,T=null,A=new At(0,0,0),P=0,M=!1,v=null,R=null,O=null,F=null,k=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,K=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=K>=1):G.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=K>=2);let ct=null,_t={};const wt=n.getParameter(n.SCISSOR_BOX),Xt=n.getParameter(n.VIEWPORT),ae=new be().fromArray(wt),$=new be().fromArray(Xt);function nt(I,ft,W,j){const mt=new Uint8Array(4),dt=n.createTexture();n.bindTexture(I,dt),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qt=0;qt<W;qt++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ft,0,n.RGBA,1,1,j,0,n.RGBA,n.UNSIGNED_BYTE,mt):n.texImage2D(ft+qt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,mt);return dt}const Tt={};Tt[n.TEXTURE_2D]=nt(n.TEXTURE_2D,n.TEXTURE_2D,1),Tt[n.TEXTURE_CUBE_MAP]=nt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[n.TEXTURE_2D_ARRAY]=nt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Tt[n.TEXTURE_3D]=nt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(n.DEPTH_TEST),a.setFunc(Nr),Q(!1),yt(Il),rt(n.CULL_FACE),C(bi);function rt(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function Ft(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function Gt(I,ft){return f[I]!==ft?(n.bindFramebuffer(I,ft),f[I]=ft,I===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ft),I===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ft),!0):!1}function kt(I,ft){let W=p,j=!1;if(I){W=d.get(ft),W===void 0&&(W=[],d.set(ft,W));const mt=I.textures;if(W.length!==mt.length||W[0]!==n.COLOR_ATTACHMENT0){for(let dt=0,qt=mt.length;dt<qt;dt++)W[dt]=n.COLOR_ATTACHMENT0+dt;W.length=mt.length,j=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,j=!0);j&&n.drawBuffers(W)}function ie(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const Z={[ki]:n.FUNC_ADD,[zf]:n.FUNC_SUBTRACT,[Bf]:n.FUNC_REVERSE_SUBTRACT};Z[kf]=n.MIN,Z[Hf]=n.MAX;const et={[Vf]:n.ZERO,[Gf]:n.ONE,[Wf]:n.SRC_COLOR,[Xa]:n.SRC_ALPHA,[Zf]:n.SRC_ALPHA_SATURATE,[$f]:n.DST_COLOR,[qf]:n.DST_ALPHA,[Xf]:n.ONE_MINUS_SRC_COLOR,[qa]:n.ONE_MINUS_SRC_ALPHA,[jf]:n.ONE_MINUS_DST_COLOR,[Yf]:n.ONE_MINUS_DST_ALPHA,[Kf]:n.CONSTANT_COLOR,[Jf]:n.ONE_MINUS_CONSTANT_COLOR,[Qf]:n.CONSTANT_ALPHA,[td]:n.ONE_MINUS_CONSTANT_ALPHA};function C(I,ft,W,j,mt,dt,qt,Se,ze,he){if(I===bi){_===!0&&(Ft(n.BLEND),_=!1);return}if(_===!1&&(rt(n.BLEND),_=!0),I!==Of){if(I!==m||he!==M){if((h!==ki||x!==ki)&&(n.blendEquation(n.FUNC_ADD),h=ki,x=ki),he)switch(I){case Cr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ul:n.blendFunc(n.ONE,n.ONE);break;case Nl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Fl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Cr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ul:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Nl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Fl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,y=null,L=null,T=null,A.set(0,0,0),P=0,m=I,M=he}return}mt=mt||ft,dt=dt||W,qt=qt||j,(ft!==h||mt!==x)&&(n.blendEquationSeparate(Z[ft],Z[mt]),h=ft,x=mt),(W!==S||j!==y||dt!==L||qt!==T)&&(n.blendFuncSeparate(et[W],et[j],et[dt],et[qt]),S=W,y=j,L=dt,T=qt),(Se.equals(A)===!1||ze!==P)&&(n.blendColor(Se.r,Se.g,Se.b,ze),A.copy(Se),P=ze),m=I,M=!1}function Dt(I,ft){I.side===sn?Ft(n.CULL_FACE):rt(n.CULL_FACE);let W=I.side===je;ft&&(W=!W),Q(W),I.blending===Cr&&I.transparent===!1?C(bi):C(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const j=I.stencilWrite;o.setTest(j),j&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),zt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?rt(n.SAMPLE_ALPHA_TO_COVERAGE):Ft(n.SAMPLE_ALPHA_TO_COVERAGE)}function Q(I){v!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),v=I)}function yt(I){I!==Nf?(rt(n.CULL_FACE),I!==R&&(I===Il?n.cullFace(n.BACK):I===Ff?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ft(n.CULL_FACE),R=I}function at(I){I!==O&&(V&&n.lineWidth(I),O=I)}function zt(I,ft,W){I?(rt(n.POLYGON_OFFSET_FILL),(F!==ft||k!==W)&&(n.polygonOffset(ft,W),F=ft,k=W)):Ft(n.POLYGON_OFFSET_FILL)}function xt(I){I?rt(n.SCISSOR_TEST):Ft(n.SCISSOR_TEST)}function w(I){I===void 0&&(I=n.TEXTURE0+Y-1),ct!==I&&(n.activeTexture(I),ct=I)}function E(I,ft,W){W===void 0&&(ct===null?W=n.TEXTURE0+Y-1:W=ct);let j=_t[W];j===void 0&&(j={type:void 0,texture:void 0},_t[W]=j),(j.type!==I||j.texture!==ft)&&(ct!==W&&(n.activeTexture(W),ct=W),n.bindTexture(I,ft||Tt[I]),j.type=I,j.texture=ft)}function z(){const I=_t[ct];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function X(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Rt(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ut(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Et(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Bt(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Vt(I){ae.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),ae.copy(I))}function bt(I){$.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),$.copy(I))}function ee(I,ft){let W=l.get(ft);W===void 0&&(W=new WeakMap,l.set(ft,W));let j=W.get(I);j===void 0&&(j=n.getUniformBlockIndex(ft,I.name),W.set(I,j))}function jt(I,ft){const j=l.get(ft).get(I);c.get(ft)!==j&&(n.uniformBlockBinding(ft,j,I.__bindingPointIndex),c.set(ft,j))}function me(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ct=null,_t={},f={},d=new WeakMap,p=[],g=null,_=!1,m=null,h=null,S=null,y=null,x=null,L=null,T=null,A=new At(0,0,0),P=0,M=!1,v=null,R=null,O=null,F=null,k=null,ae.set(0,0,n.canvas.width,n.canvas.height),$.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:rt,disable:Ft,bindFramebuffer:Gt,drawBuffers:kt,useProgram:ie,setBlending:C,setMaterial:Dt,setFlipSided:Q,setCullFace:yt,setLineWidth:at,setPolygonOffset:zt,setScissorTest:xt,activeTexture:w,bindTexture:E,unbindTexture:z,compressedTexImage2D:X,compressedTexImage3D:J,texImage2D:Et,texImage3D:Bt,updateUBOMapping:ee,uniformBlockBinding:jt,texStorage2D:te,texStorage3D:tt,texSubImage2D:q,texSubImage3D:Rt,compressedTexSubImage2D:ut,compressedTexSubImage3D:Mt,scissor:Vt,viewport:bt,reset:me}}function Pu(n,t,e,i){const r=M_(i);switch(e){case dh:return n*t;case mh:return n*t;case gh:return n*t*2;case nl:return n*t/r.components*r.byteLength;case il:return n*t/r.components*r.byteLength;case _h:return n*t*2/r.components*r.byteLength;case rl:return n*t*2/r.components*r.byteLength;case ph:return n*t*3/r.components*r.byteLength;case Tn:return n*t*4/r.components*r.byteLength;case sl:return n*t*4/r.components*r.byteLength;case go:case _o:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case vo:case xo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case rc:case oc:return Math.max(n,16)*Math.max(t,8)/4;case ic:case sc:return Math.max(n,8)*Math.max(t,8)/2;case ac:case cc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case lc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case uc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case hc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case fc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case dc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case pc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case mc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case gc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case _c:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case vc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case xc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Mc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case yc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Sc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ec:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Mo:case bc:case wc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case vh:case Tc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ac:case Rc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function M_(n){switch(n){case li:case uh:return{byteLength:1,components:1};case bs:case hh:case $r:return{byteLength:2,components:1};case tl:case el:return{byteLength:2,components:4};case Ji:case Qc:case Fn:return{byteLength:4,components:1};case fh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function y_(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new st,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,E){return p?new OffscreenCanvas(w,E):ws("canvas")}function _(w,E,z){let X=1;const J=xt(w);if((J.width>z||J.height>z)&&(X=z/Math.max(J.width,J.height)),X<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const q=Math.floor(X*J.width),Rt=Math.floor(X*J.height);f===void 0&&(f=g(q,Rt));const ut=E?g(q,Rt):f;return ut.width=q,ut.height=Rt,ut.getContext("2d").drawImage(w,0,0,q,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+Rt+")."),ut}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function m(w){return w.generateMipmaps}function h(w){n.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(w,E,z,X,J=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let q=E;if(E===n.RED&&(z===n.FLOAT&&(q=n.R32F),z===n.HALF_FLOAT&&(q=n.R16F),z===n.UNSIGNED_BYTE&&(q=n.R8)),E===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(q=n.R8UI),z===n.UNSIGNED_SHORT&&(q=n.R16UI),z===n.UNSIGNED_INT&&(q=n.R32UI),z===n.BYTE&&(q=n.R8I),z===n.SHORT&&(q=n.R16I),z===n.INT&&(q=n.R32I)),E===n.RG&&(z===n.FLOAT&&(q=n.RG32F),z===n.HALF_FLOAT&&(q=n.RG16F),z===n.UNSIGNED_BYTE&&(q=n.RG8)),E===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(q=n.RG8UI),z===n.UNSIGNED_SHORT&&(q=n.RG16UI),z===n.UNSIGNED_INT&&(q=n.RG32UI),z===n.BYTE&&(q=n.RG8I),z===n.SHORT&&(q=n.RG16I),z===n.INT&&(q=n.RG32I)),E===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(q=n.RGB8UI),z===n.UNSIGNED_SHORT&&(q=n.RGB16UI),z===n.UNSIGNED_INT&&(q=n.RGB32UI),z===n.BYTE&&(q=n.RGB8I),z===n.SHORT&&(q=n.RGB16I),z===n.INT&&(q=n.RGB32I)),E===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),z===n.UNSIGNED_INT&&(q=n.RGBA32UI),z===n.BYTE&&(q=n.RGBA8I),z===n.SHORT&&(q=n.RGBA16I),z===n.INT&&(q=n.RGBA32I)),E===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),E===n.RGBA){const Rt=J?Wo:re.getTransfer(X);z===n.FLOAT&&(q=n.RGBA32F),z===n.HALF_FLOAT&&(q=n.RGBA16F),z===n.UNSIGNED_BYTE&&(q=Rt===fe?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function x(w,E){let z;return w?E===null||E===Ji||E===zr?z=n.DEPTH24_STENCIL8:E===Fn?z=n.DEPTH32F_STENCIL8:E===bs&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ji||E===zr?z=n.DEPTH_COMPONENT24:E===Fn?z=n.DEPTH_COMPONENT32F:E===bs&&(z=n.DEPTH_COMPONENT16),z}function L(w,E){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==an&&w.minFilter!==dn?Math.log2(Math.max(E.width,E.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?E.mipmaps.length:1}function T(w){const E=w.target;E.removeEventListener("dispose",T),P(E),E.isVideoTexture&&u.delete(E)}function A(w){const E=w.target;E.removeEventListener("dispose",A),v(E)}function P(w){const E=i.get(w);if(E.__webglInit===void 0)return;const z=w.source,X=d.get(z);if(X){const J=X[E.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(w),Object.keys(X).length===0&&d.delete(z)}i.remove(w)}function M(w){const E=i.get(w);n.deleteTexture(E.__webglTexture);const z=w.source,X=d.get(z);delete X[E.__cacheKey],a.memory.textures--}function v(w){const E=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(E.__webglFramebuffer[X]))for(let J=0;J<E.__webglFramebuffer[X].length;J++)n.deleteFramebuffer(E.__webglFramebuffer[X][J]);else n.deleteFramebuffer(E.__webglFramebuffer[X]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[X])}else{if(Array.isArray(E.__webglFramebuffer))for(let X=0;X<E.__webglFramebuffer.length;X++)n.deleteFramebuffer(E.__webglFramebuffer[X]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let X=0;X<E.__webglColorRenderbuffer.length;X++)E.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[X]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const z=w.textures;for(let X=0,J=z.length;X<J;X++){const q=i.get(z[X]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(z[X])}i.remove(w)}let R=0;function O(){R=0}function F(){const w=R;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),R+=1,w}function k(w){const E=[];return E.push(w.wrapS),E.push(w.wrapT),E.push(w.wrapR||0),E.push(w.magFilter),E.push(w.minFilter),E.push(w.anisotropy),E.push(w.internalFormat),E.push(w.format),E.push(w.type),E.push(w.generateMipmaps),E.push(w.premultiplyAlpha),E.push(w.flipY),E.push(w.unpackAlignment),E.push(w.colorSpace),E.join()}function Y(w,E){const z=i.get(w);if(w.isVideoTexture&&at(w),w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){const X=w.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(z,w,E);return}}e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+E)}function V(w,E){const z=i.get(w);if(w.version>0&&z.__version!==w.version){$(z,w,E);return}e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+E)}function K(w,E){const z=i.get(w);if(w.version>0&&z.__version!==w.version){$(z,w,E);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+E)}function G(w,E){const z=i.get(w);if(w.version>0&&z.__version!==w.version){nt(z,w,E);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+E)}const ct={[Ro]:n.REPEAT,[Gi]:n.CLAMP_TO_EDGE,[nc]:n.MIRRORED_REPEAT},_t={[an]:n.NEAREST,[ld]:n.NEAREST_MIPMAP_NEAREST,[Fs]:n.NEAREST_MIPMAP_LINEAR,[dn]:n.LINEAR,[sa]:n.LINEAR_MIPMAP_NEAREST,[Wi]:n.LINEAR_MIPMAP_LINEAR},wt={[dd]:n.NEVER,[xd]:n.ALWAYS,[pd]:n.LESS,[Mh]:n.LEQUAL,[md]:n.EQUAL,[vd]:n.GEQUAL,[gd]:n.GREATER,[_d]:n.NOTEQUAL};function Xt(w,E){if(E.type===Fn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===dn||E.magFilter===sa||E.magFilter===Fs||E.magFilter===Wi||E.minFilter===dn||E.minFilter===sa||E.minFilter===Fs||E.minFilter===Wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,ct[E.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,ct[E.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,ct[E.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,_t[E.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,_t[E.minFilter]),E.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,wt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===an||E.minFilter!==Fs&&E.minFilter!==Wi||E.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ae(w,E){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,E.addEventListener("dispose",T));const X=E.source;let J=d.get(X);J===void 0&&(J={},d.set(X,J));const q=k(E);if(q!==w.__cacheKey){J[q]===void 0&&(J[q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),J[q].usedTimes++;const Rt=J[w.__cacheKey];Rt!==void 0&&(J[w.__cacheKey].usedTimes--,Rt.usedTimes===0&&M(E)),w.__cacheKey=q,w.__webglTexture=J[q].texture}return z}function $(w,E,z){let X=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(X=n.TEXTURE_3D);const J=ae(w,E),q=E.source;e.bindTexture(X,w.__webglTexture,n.TEXTURE0+z);const Rt=i.get(q);if(q.version!==Rt.__version||J===!0){e.activeTexture(n.TEXTURE0+z);const ut=re.getPrimaries(re.workingColorSpace),Mt=E.colorSpace===Mi?null:re.getPrimaries(E.colorSpace),te=E.colorSpace===Mi||ut===Mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let tt=_(E.image,!1,r.maxTextureSize);tt=zt(E,tt);const Et=s.convert(E.format,E.colorSpace),Bt=s.convert(E.type);let Vt=y(E.internalFormat,Et,Bt,E.colorSpace,E.isVideoTexture);Xt(X,E);let bt;const ee=E.mipmaps,jt=E.isVideoTexture!==!0,me=Rt.__version===void 0||J===!0,I=q.dataReady,ft=L(E,tt);if(E.isDepthTexture)Vt=x(E.format===Br,E.type),me&&(jt?e.texStorage2D(n.TEXTURE_2D,1,Vt,tt.width,tt.height):e.texImage2D(n.TEXTURE_2D,0,Vt,tt.width,tt.height,0,Et,Bt,null));else if(E.isDataTexture)if(ee.length>0){jt&&me&&e.texStorage2D(n.TEXTURE_2D,ft,Vt,ee[0].width,ee[0].height);for(let W=0,j=ee.length;W<j;W++)bt=ee[W],jt?I&&e.texSubImage2D(n.TEXTURE_2D,W,0,0,bt.width,bt.height,Et,Bt,bt.data):e.texImage2D(n.TEXTURE_2D,W,Vt,bt.width,bt.height,0,Et,Bt,bt.data);E.generateMipmaps=!1}else jt?(me&&e.texStorage2D(n.TEXTURE_2D,ft,Vt,tt.width,tt.height),I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,tt.width,tt.height,Et,Bt,tt.data)):e.texImage2D(n.TEXTURE_2D,0,Vt,tt.width,tt.height,0,Et,Bt,tt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){jt&&me&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ft,Vt,ee[0].width,ee[0].height,tt.depth);for(let W=0,j=ee.length;W<j;W++)if(bt=ee[W],E.format!==Tn)if(Et!==null)if(jt){if(I)if(E.layerUpdates.size>0){const mt=Pu(bt.width,bt.height,E.format,E.type);for(const dt of E.layerUpdates){const qt=bt.data.subarray(dt*mt/bt.data.BYTES_PER_ELEMENT,(dt+1)*mt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,dt,bt.width,bt.height,1,Et,qt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,bt.width,bt.height,tt.depth,Et,bt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,W,Vt,bt.width,bt.height,tt.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?I&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,bt.width,bt.height,tt.depth,Et,Bt,bt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,W,Vt,bt.width,bt.height,tt.depth,0,Et,Bt,bt.data)}else{jt&&me&&e.texStorage2D(n.TEXTURE_2D,ft,Vt,ee[0].width,ee[0].height);for(let W=0,j=ee.length;W<j;W++)bt=ee[W],E.format!==Tn?Et!==null?jt?I&&e.compressedTexSubImage2D(n.TEXTURE_2D,W,0,0,bt.width,bt.height,Et,bt.data):e.compressedTexImage2D(n.TEXTURE_2D,W,Vt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?I&&e.texSubImage2D(n.TEXTURE_2D,W,0,0,bt.width,bt.height,Et,Bt,bt.data):e.texImage2D(n.TEXTURE_2D,W,Vt,bt.width,bt.height,0,Et,Bt,bt.data)}else if(E.isDataArrayTexture)if(jt){if(me&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ft,Vt,tt.width,tt.height,tt.depth),I)if(E.layerUpdates.size>0){const W=Pu(tt.width,tt.height,E.format,E.type);for(const j of E.layerUpdates){const mt=tt.data.subarray(j*W/tt.data.BYTES_PER_ELEMENT,(j+1)*W/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,tt.width,tt.height,1,Et,Bt,mt)}E.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,Et,Bt,tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Vt,tt.width,tt.height,tt.depth,0,Et,Bt,tt.data);else if(E.isData3DTexture)jt?(me&&e.texStorage3D(n.TEXTURE_3D,ft,Vt,tt.width,tt.height,tt.depth),I&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,Et,Bt,tt.data)):e.texImage3D(n.TEXTURE_3D,0,Vt,tt.width,tt.height,tt.depth,0,Et,Bt,tt.data);else if(E.isFramebufferTexture){if(me)if(jt)e.texStorage2D(n.TEXTURE_2D,ft,Vt,tt.width,tt.height);else{let W=tt.width,j=tt.height;for(let mt=0;mt<ft;mt++)e.texImage2D(n.TEXTURE_2D,mt,Vt,W,j,0,Et,Bt,null),W>>=1,j>>=1}}else if(ee.length>0){if(jt&&me){const W=xt(ee[0]);e.texStorage2D(n.TEXTURE_2D,ft,Vt,W.width,W.height)}for(let W=0,j=ee.length;W<j;W++)bt=ee[W],jt?I&&e.texSubImage2D(n.TEXTURE_2D,W,0,0,Et,Bt,bt):e.texImage2D(n.TEXTURE_2D,W,Vt,Et,Bt,bt);E.generateMipmaps=!1}else if(jt){if(me){const W=xt(tt);e.texStorage2D(n.TEXTURE_2D,ft,Vt,W.width,W.height)}I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Et,Bt,tt)}else e.texImage2D(n.TEXTURE_2D,0,Vt,Et,Bt,tt);m(E)&&h(X),Rt.__version=q.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function nt(w,E,z){if(E.image.length!==6)return;const X=ae(w,E),J=E.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+z);const q=i.get(J);if(J.version!==q.__version||X===!0){e.activeTexture(n.TEXTURE0+z);const Rt=re.getPrimaries(re.workingColorSpace),ut=E.colorSpace===Mi?null:re.getPrimaries(E.colorSpace),Mt=E.colorSpace===Mi||Rt===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const te=E.isCompressedTexture||E.image[0].isCompressedTexture,tt=E.image[0]&&E.image[0].isDataTexture,Et=[];for(let j=0;j<6;j++)!te&&!tt?Et[j]=_(E.image[j],!0,r.maxCubemapSize):Et[j]=tt?E.image[j].image:E.image[j],Et[j]=zt(E,Et[j]);const Bt=Et[0],Vt=s.convert(E.format,E.colorSpace),bt=s.convert(E.type),ee=y(E.internalFormat,Vt,bt,E.colorSpace),jt=E.isVideoTexture!==!0,me=q.__version===void 0||X===!0,I=J.dataReady;let ft=L(E,Bt);Xt(n.TEXTURE_CUBE_MAP,E);let W;if(te){jt&&me&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,ee,Bt.width,Bt.height);for(let j=0;j<6;j++){W=Et[j].mipmaps;for(let mt=0;mt<W.length;mt++){const dt=W[mt];E.format!==Tn?Vt!==null?jt?I&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt,0,0,dt.width,dt.height,Vt,dt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt,ee,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt,0,0,dt.width,dt.height,Vt,bt,dt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt,ee,dt.width,dt.height,0,Vt,bt,dt.data)}}}else{if(W=E.mipmaps,jt&&me){W.length>0&&ft++;const j=xt(Et[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,ee,j.width,j.height)}for(let j=0;j<6;j++)if(tt){jt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Et[j].width,Et[j].height,Vt,bt,Et[j].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ee,Et[j].width,Et[j].height,0,Vt,bt,Et[j].data);for(let mt=0;mt<W.length;mt++){const qt=W[mt].image[j].image;jt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt+1,0,0,qt.width,qt.height,Vt,bt,qt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt+1,ee,qt.width,qt.height,0,Vt,bt,qt.data)}}else{jt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Vt,bt,Et[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ee,Vt,bt,Et[j]);for(let mt=0;mt<W.length;mt++){const dt=W[mt];jt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt+1,0,0,Vt,bt,dt.image[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,mt+1,ee,Vt,bt,dt.image[j])}}}m(E)&&h(n.TEXTURE_CUBE_MAP),q.__version=J.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function Tt(w,E,z,X,J,q){const Rt=s.convert(z.format,z.colorSpace),ut=s.convert(z.type),Mt=y(z.internalFormat,Rt,ut,z.colorSpace),te=i.get(E),tt=i.get(z);if(tt.__renderTarget=E,!te.__hasExternalTextures){const Et=Math.max(1,E.width>>q),Bt=Math.max(1,E.height>>q);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,q,Mt,Et,Bt,E.depth,0,Rt,ut,null):e.texImage2D(J,q,Mt,Et,Bt,0,Rt,ut,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),yt(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,J,tt.__webglTexture,0,Q(E)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,J,tt.__webglTexture,q),e.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(w,E,z){if(n.bindRenderbuffer(n.RENDERBUFFER,w),E.depthBuffer){const X=E.depthTexture,J=X&&X.isDepthTexture?X.type:null,q=x(E.stencilBuffer,J),Rt=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=Q(E);yt(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut,q,E.width,E.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,q,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,q,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Rt,n.RENDERBUFFER,w)}else{const X=E.textures;for(let J=0;J<X.length;J++){const q=X[J],Rt=s.convert(q.format,q.colorSpace),ut=s.convert(q.type),Mt=y(q.internalFormat,Rt,ut,q.colorSpace),te=Q(E);z&&yt(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,te,Mt,E.width,E.height):yt(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,Mt,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Mt,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ft(w,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=i.get(E.depthTexture);X.__renderTarget=E,(!X.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);const J=X.__webglTexture,q=Q(E);if(E.depthTexture.format===Pr)yt(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(E.depthTexture.format===Br)yt(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Gt(w){const E=i.get(w),z=w.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==w.depthTexture){const X=w.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),X){const J=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,X.removeEventListener("dispose",J)};X.addEventListener("dispose",J),E.__depthDisposeCallback=J}E.__boundDepthTexture=X}if(w.depthTexture&&!E.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ft(E.__webglFramebuffer,w)}else if(z){E.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[X]),E.__webglDepthbuffer[X]===void 0)E.__webglDepthbuffer[X]=n.createRenderbuffer(),rt(E.__webglDepthbuffer[X],w,!1);else{const J=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=E.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,q)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),rt(E.__webglDepthbuffer,w,!1);else{const X=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,J)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function kt(w,E,z){const X=i.get(w);E!==void 0&&Tt(X.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Gt(w)}function ie(w){const E=w.texture,z=i.get(w),X=i.get(E);w.addEventListener("dispose",A);const J=w.textures,q=w.isWebGLCubeRenderTarget===!0,Rt=J.length>1;if(Rt||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=E.version,a.memory.textures++),q){z.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer[ut]=[];for(let Mt=0;Mt<E.mipmaps.length;Mt++)z.__webglFramebuffer[ut][Mt]=n.createFramebuffer()}else z.__webglFramebuffer[ut]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer=[];for(let ut=0;ut<E.mipmaps.length;ut++)z.__webglFramebuffer[ut]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Rt)for(let ut=0,Mt=J.length;ut<Mt;ut++){const te=i.get(J[ut]);te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&yt(w)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ut=0;ut<J.length;ut++){const Mt=J[ut];z.__webglColorRenderbuffer[ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[ut]);const te=s.convert(Mt.format,Mt.colorSpace),tt=s.convert(Mt.type),Et=y(Mt.internalFormat,te,tt,Mt.colorSpace,w.isXRRenderTarget===!0),Bt=Q(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt,Et,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,z.__webglColorRenderbuffer[ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),rt(z.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Xt(n.TEXTURE_CUBE_MAP,E);for(let ut=0;ut<6;ut++)if(E.mipmaps&&E.mipmaps.length>0)for(let Mt=0;Mt<E.mipmaps.length;Mt++)Tt(z.__webglFramebuffer[ut][Mt],w,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Mt);else Tt(z.__webglFramebuffer[ut],w,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(E)&&h(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let ut=0,Mt=J.length;ut<Mt;ut++){const te=J[ut],tt=i.get(te);e.bindTexture(n.TEXTURE_2D,tt.__webglTexture),Xt(n.TEXTURE_2D,te),Tt(z.__webglFramebuffer,w,te,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,0),m(te)&&h(n.TEXTURE_2D)}e.unbindTexture()}else{let ut=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ut=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,X.__webglTexture),Xt(ut,E),E.mipmaps&&E.mipmaps.length>0)for(let Mt=0;Mt<E.mipmaps.length;Mt++)Tt(z.__webglFramebuffer[Mt],w,E,n.COLOR_ATTACHMENT0,ut,Mt);else Tt(z.__webglFramebuffer,w,E,n.COLOR_ATTACHMENT0,ut,0);m(E)&&h(ut),e.unbindTexture()}w.depthBuffer&&Gt(w)}function Z(w){const E=w.textures;for(let z=0,X=E.length;z<X;z++){const J=E[z];if(m(J)){const q=S(w),Rt=i.get(J).__webglTexture;e.bindTexture(q,Rt),h(q),e.unbindTexture()}}}const et=[],C=[];function Dt(w){if(w.samples>0){if(yt(w)===!1){const E=w.textures,z=w.width,X=w.height;let J=n.COLOR_BUFFER_BIT;const q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Rt=i.get(w),ut=E.length>1;if(ut)for(let Mt=0;Mt<E.length;Mt++)e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Mt=0;Mt<E.length;Mt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),ut){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Rt.__webglColorRenderbuffer[Mt]);const te=i.get(E[Mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,te,0)}n.blitFramebuffer(0,0,z,X,0,0,z,X,J,n.NEAREST),c===!0&&(et.length=0,C.length=0,et.push(n.COLOR_ATTACHMENT0+Mt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(et.push(q),C.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,C)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,et))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ut)for(let Mt=0;Mt<E.length;Mt++){e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,Rt.__webglColorRenderbuffer[Mt]);const te=i.get(E[Mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,te,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const E=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Q(w){return Math.min(r.maxSamples,w.samples)}function yt(w){const E=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function at(w){const E=a.render.frame;u.get(w)!==E&&(u.set(w,E),w.update())}function zt(w,E){const z=w.colorSpace,X=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==jr&&z!==Mi&&(re.getTransfer(z)===fe?(X!==Tn||J!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),E}function xt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.setTexture2D=Y,this.setTexture2DArray=V,this.setTexture3D=K,this.setTextureCube=G,this.rebindTextures=kt,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=yt}function S_(n,t){function e(i,r=Mi){let s;const a=re.getTransfer(r);if(i===li)return n.UNSIGNED_BYTE;if(i===tl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===el)return n.UNSIGNED_SHORT_5_5_5_1;if(i===fh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===uh)return n.BYTE;if(i===hh)return n.SHORT;if(i===bs)return n.UNSIGNED_SHORT;if(i===Qc)return n.INT;if(i===Ji)return n.UNSIGNED_INT;if(i===Fn)return n.FLOAT;if(i===$r)return n.HALF_FLOAT;if(i===dh)return n.ALPHA;if(i===ph)return n.RGB;if(i===Tn)return n.RGBA;if(i===mh)return n.LUMINANCE;if(i===gh)return n.LUMINANCE_ALPHA;if(i===Pr)return n.DEPTH_COMPONENT;if(i===Br)return n.DEPTH_STENCIL;if(i===nl)return n.RED;if(i===il)return n.RED_INTEGER;if(i===_h)return n.RG;if(i===rl)return n.RG_INTEGER;if(i===sl)return n.RGBA_INTEGER;if(i===go||i===_o||i===vo||i===xo)if(a===fe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===go)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===go)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_o)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ic||i===rc||i===sc||i===oc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ic)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===rc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===oc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ac||i===cc||i===lc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ac||i===cc)return a===fe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===lc)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===uc||i===hc||i===fc||i===dc||i===pc||i===mc||i===gc||i===_c||i===vc||i===xc||i===Mc||i===yc||i===Sc||i===Ec)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===uc)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hc)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fc)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dc)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===pc)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===mc)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===gc)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_c)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vc)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xc)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mc)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yc)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sc)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ec)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Mo||i===bc||i===wc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Mo)return a===fe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vh||i===Tc||i===Ac||i===Rc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Mo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Tc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ac)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class E_ extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class On extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const b_={type:"move"};class Ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new On,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new On,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new On,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),h=this._getHandJoint(l,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(b_)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new On;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const w_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,T_=`
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

}`;class A_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Ge,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new _n({vertexShader:w_,fragmentShader:T_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ht(new Bn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class R_ extends Zr{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,d=null,p=null,g=null;const _=new A_,m=e.getContextAttributes();let h=null,S=null;const y=[],x=[],L=new st;let T=null;const A=new hn;A.viewport=new be;const P=new hn;P.viewport=new be;const M=[A,P],v=new E_;let R=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let nt=y[$];return nt===void 0&&(nt=new Ua,y[$]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function($){let nt=y[$];return nt===void 0&&(nt=new Ua,y[$]=nt),nt.getGripSpace()},this.getHand=function($){let nt=y[$];return nt===void 0&&(nt=new Ua,y[$]=nt),nt.getHandSpace()};function F($){const nt=x.indexOf($.inputSource);if(nt===-1)return;const Tt=y[nt];Tt!==void 0&&(Tt.update($.inputSource,$.frame,l||a),Tt.dispatchEvent({type:$.type,data:$.inputSource}))}function k(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",Y);for(let $=0;$<y.length;$++){const nt=x[$];nt!==null&&(x[$]=null,y[$].disconnect(nt))}R=null,O=null,_.reset(),t.setRenderTarget(h),p=null,d=null,f=null,r=null,S=null,ae.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(h=t.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",k),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(L),r.renderState.layers===void 0){const nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,nt),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Ci(p.framebufferWidth,p.framebufferHeight,{format:Tn,type:li,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let nt=null,Tt=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?Br:Pr,Tt=m.stencil?zr:Ji);const Ft={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:s};f=new XRWebGLBinding(r,e),d=f.createProjectionLayer(Ft),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Ci(d.textureWidth,d.textureHeight,{format:Tn,type:li,depthTexture:new ll(d.textureWidth,d.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),ae.setContext(r),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y($){for(let nt=0;nt<$.removed.length;nt++){const Tt=$.removed[nt],rt=x.indexOf(Tt);rt>=0&&(x[rt]=null,y[rt].disconnect(Tt))}for(let nt=0;nt<$.added.length;nt++){const Tt=$.added[nt];let rt=x.indexOf(Tt);if(rt===-1){for(let Gt=0;Gt<y.length;Gt++)if(Gt>=x.length){x.push(Tt),rt=Gt;break}else if(x[Gt]===null){x[Gt]=Tt,rt=Gt;break}if(rt===-1)break}const Ft=y[rt];Ft&&Ft.connect(Tt)}}const V=new D,K=new D;function G($,nt,Tt){V.setFromMatrixPosition(nt.matrixWorld),K.setFromMatrixPosition(Tt.matrixWorld);const rt=V.distanceTo(K),Ft=nt.projectionMatrix.elements,Gt=Tt.projectionMatrix.elements,kt=Ft[14]/(Ft[10]-1),ie=Ft[14]/(Ft[10]+1),Z=(Ft[9]+1)/Ft[5],et=(Ft[9]-1)/Ft[5],C=(Ft[8]-1)/Ft[0],Dt=(Gt[8]+1)/Gt[0],Q=kt*C,yt=kt*Dt,at=rt/(-C+Dt),zt=at*-C;if(nt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(zt),$.translateZ(at),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ft[10]===-1)$.projectionMatrix.copy(nt.projectionMatrix),$.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const xt=kt+at,w=ie+at,E=Q-zt,z=yt+(rt-zt),X=Z*ie/w*xt,J=et*ie/w*xt;$.projectionMatrix.makePerspective(E,z,X,J,xt,w),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ct($,nt){nt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(nt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let nt=$.near,Tt=$.far;_.texture!==null&&(_.depthNear>0&&(nt=_.depthNear),_.depthFar>0&&(Tt=_.depthFar)),v.near=P.near=A.near=nt,v.far=P.far=A.far=Tt,(R!==v.near||O!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,O=v.far),A.layers.mask=$.layers.mask|2,P.layers.mask=$.layers.mask|4,v.layers.mask=A.layers.mask|P.layers.mask;const rt=$.parent,Ft=v.cameras;ct(v,rt);for(let Gt=0;Gt<Ft.length;Gt++)ct(Ft[Gt],rt);Ft.length===2?G(v,A,P):v.projectionMatrix.copy(A.projectionMatrix),_t($,v,rt)};function _t($,nt,Tt){Tt===null?$.matrix.copy(nt.matrixWorld):($.matrix.copy(Tt.matrixWorld),$.matrix.invert(),$.matrix.multiply(nt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(nt.projectionMatrix),$.projectionMatrixInverse.copy(nt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Cc*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let wt=null;function Xt($,nt){if(u=nt.getViewerPose(l||a),g=nt,u!==null){const Tt=u.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let rt=!1;Tt.length!==v.cameras.length&&(v.cameras.length=0,rt=!0);for(let Gt=0;Gt<Tt.length;Gt++){const kt=Tt[Gt];let ie=null;if(p!==null)ie=p.getViewport(kt);else{const et=f.getViewSubImage(d,kt);ie=et.viewport,Gt===0&&(t.setRenderTargetTextures(S,et.colorTexture,d.ignoreDepthValues?void 0:et.depthStencilTexture),t.setRenderTarget(S))}let Z=M[Gt];Z===void 0&&(Z=new hn,Z.layers.enable(Gt),Z.viewport=new be,M[Gt]=Z),Z.matrix.fromArray(kt.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(kt.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(ie.x,ie.y,ie.width,ie.height),Gt===0&&(v.matrix.copy(Z.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),rt===!0&&v.cameras.push(Z)}const Ft=r.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")){const Gt=f.getDepthInformation(Tt[0]);Gt&&Gt.isValid&&Gt.texture&&_.init(t,Gt,r.renderState)}}for(let Tt=0;Tt<y.length;Tt++){const rt=x[Tt],Ft=y[Tt];rt!==null&&Ft!==void 0&&Ft.update(rt,nt,l||a)}wt&&wt($,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),g=null}const ae=new Ih;ae.setAnimationLoop(Xt),this.setAnimationLoop=function($){wt=$},this.dispose=function(){}}}const Oi=new gn,C_=new ue;function P_(n,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Ch(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,S,y,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,x)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),_(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?c(m,h,S,y):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===je&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===je&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const S=t.get(h),y=S.envMap,x=S.envMapRotation;y&&(m.envMap.value=y,Oi.copy(x),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),m.envMapRotation.value.setFromMatrix4(C_.makeRotationFromEuler(Oi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,S,y){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*S,m.scale.value=y*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,S){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===je&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const S=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function L_(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,y){const x=y.program;i.uniformBlockBinding(S,x)}function l(S,y){let x=r[S.id];x===void 0&&(g(S),x=u(S),r[S.id]=x,S.addEventListener("dispose",m));const L=y.program;i.updateUBOMapping(S,L);const T=t.render.frame;s[S.id]!==T&&(d(S),s[S.id]=T)}function u(S){const y=f();S.__bindingPointIndex=y;const x=n.createBuffer(),L=S.__size,T=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,L,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,x),x}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const y=r[S.id],x=S.uniforms,L=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let T=0,A=x.length;T<A;T++){const P=Array.isArray(x[T])?x[T]:[x[T]];for(let M=0,v=P.length;M<v;M++){const R=P[M];if(p(R,T,M,L)===!0){const O=R.__offset,F=Array.isArray(R.value)?R.value:[R.value];let k=0;for(let Y=0;Y<F.length;Y++){const V=F[Y],K=_(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,O+k,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,k),k+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(S,y,x,L){const T=S.value,A=y+"_"+x;if(L[A]===void 0)return typeof T=="number"||typeof T=="boolean"?L[A]=T:L[A]=T.clone(),!0;{const P=L[A];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return L[A]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(S){const y=S.uniforms;let x=0;const L=16;for(let A=0,P=y.length;A<P;A++){const M=Array.isArray(y[A])?y[A]:[y[A]];for(let v=0,R=M.length;v<R;v++){const O=M[v],F=Array.isArray(O.value)?O.value:[O.value];for(let k=0,Y=F.length;k<Y;k++){const V=F[k],K=_(V),G=x%L,ct=G%K.boundary,_t=G+ct;x+=ct,_t!==0&&L-_t<K.storage&&(x+=L-_t),O.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=K.storage}}}const T=x%L;return T>0&&(x+=L-T),S.__size=x,S.__cache={},this}function _(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function h(){for(const S in r)n.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:c,update:l,dispose:h}}class D_{constructor(t={}){const{canvas:e=yd(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,h=null;const S=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qe,this.toneMapping=wi,this.toneMappingExposure=1;const x=this;let L=!1,T=0,A=0,P=null,M=-1,v=null;const R=new be,O=new be;let F=null;const k=new At(0);let Y=0,V=e.width,K=e.height,G=1,ct=null,_t=null;const wt=new be(0,0,V,K),Xt=new be(0,0,V,K);let ae=!1;const $=new ol;let nt=!1,Tt=!1;const rt=new ue,Ft=new ue,Gt=new D,kt=new be,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Z=!1;function et(){return P===null?G:1}let C=i;function Dt(b,U){return e.getContext(b,U)}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Kc}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),C===null){const U="webgl2";if(C=Dt(U,b),C===null)throw Dt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Q,yt,at,zt,xt,w,E,z,X,J,q,Rt,ut,Mt,te,tt,Et,Bt,Vt,bt,ee,jt,me,I;function ft(){Q=new O0(C),Q.init(),jt=new S_(C,Q),yt=new L0(C,Q,t,jt),at=new x_(C,Q),yt.reverseDepthBuffer&&d&&at.buffers.depth.setReversed(!0),zt=new k0(C),xt=new r_,w=new y_(C,Q,at,xt,yt,jt,zt),E=new I0(x),z=new F0(x),X=new Yd(C),me=new C0(C,X),J=new z0(C,X,zt,me),q=new V0(C,J,X,zt),Vt=new H0(C,yt,w),tt=new D0(xt),Rt=new i_(x,E,z,Q,yt,me,tt),ut=new P_(x,xt),Mt=new o_,te=new f_(Q),Bt=new R0(x,E,z,at,q,p,c),Et=new __(x,q,yt),I=new L_(C,zt,yt,at),bt=new P0(C,Q,zt),ee=new B0(C,Q,zt),zt.programs=Rt.programs,x.capabilities=yt,x.extensions=Q,x.properties=xt,x.renderLists=Mt,x.shadowMap=Et,x.state=at,x.info=zt}ft();const W=new R_(x,C);this.xr=W,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const b=Q.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Q.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(b){b!==void 0&&(G=b,this.setSize(V,K,!1))},this.getSize=function(b){return b.set(V,K)},this.setSize=function(b,U,B=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=b,K=U,e.width=Math.floor(b*G),e.height=Math.floor(U*G),B===!0&&(e.style.width=b+"px",e.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(V*G,K*G).floor()},this.setDrawingBufferSize=function(b,U,B){V=b,K=U,G=B,e.width=Math.floor(b*B),e.height=Math.floor(U*B),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(R)},this.getViewport=function(b){return b.copy(wt)},this.setViewport=function(b,U,B,H){b.isVector4?wt.set(b.x,b.y,b.z,b.w):wt.set(b,U,B,H),at.viewport(R.copy(wt).multiplyScalar(G).round())},this.getScissor=function(b){return b.copy(Xt)},this.setScissor=function(b,U,B,H){b.isVector4?Xt.set(b.x,b.y,b.z,b.w):Xt.set(b,U,B,H),at.scissor(O.copy(Xt).multiplyScalar(G).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(b){at.setScissorTest(ae=b)},this.setOpaqueSort=function(b){ct=b},this.setTransparentSort=function(b){_t=b},this.getClearColor=function(b){return b.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(b=!0,U=!0,B=!0){let H=0;if(b){let N=!1;if(P!==null){const it=P.texture.format;N=it===sl||it===rl||it===il}if(N){const it=P.texture.type,pt=it===li||it===Ji||it===bs||it===zr||it===tl||it===el,Ct=Bt.getClearColor(),Pt=Bt.getClearAlpha(),Wt=Ct.r,Yt=Ct.g,Lt=Ct.b;pt?(g[0]=Wt,g[1]=Yt,g[2]=Lt,g[3]=Pt,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=Wt,_[1]=Yt,_[2]=Lt,_[3]=Pt,C.clearBufferiv(C.COLOR,0,_))}else H|=C.COLOR_BUFFER_BIT}U&&(H|=C.DEPTH_BUFFER_BIT),B&&(H|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),Mt.dispose(),te.dispose(),xt.dispose(),E.dispose(),z.dispose(),q.dispose(),me.dispose(),I.dispose(),Rt.dispose(),W.dispose(),W.removeEventListener("sessionstart",wl),W.removeEventListener("sessionend",Tl),Li.stop()};function j(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const b=zt.autoReset,U=Et.enabled,B=Et.autoUpdate,H=Et.needsUpdate,N=Et.type;ft(),zt.autoReset=b,Et.enabled=U,Et.autoUpdate=B,Et.needsUpdate=H,Et.type=N}function dt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function qt(b){const U=b.target;U.removeEventListener("dispose",qt),Se(U)}function Se(b){ze(b),xt.remove(b)}function ze(b){const U=xt.get(b).programs;U!==void 0&&(U.forEach(function(B){Rt.releaseProgram(B)}),b.isShaderMaterial&&Rt.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,B,H,N,it){U===null&&(U=ie);const pt=N.isMesh&&N.matrixWorld.determinant()<0,Ct=Pf(b,U,B,H,N);at.setMaterial(H,pt);let Pt=B.index,Wt=1;if(H.wireframe===!0){if(Pt=J.getWireframeAttribute(B),Pt===void 0)return;Wt=2}const Yt=B.drawRange,Lt=B.attributes.position;let se=Yt.start*Wt,ge=(Yt.start+Yt.count)*Wt;it!==null&&(se=Math.max(se,it.start*Wt),ge=Math.min(ge,(it.start+it.count)*Wt)),Pt!==null?(se=Math.max(se,0),ge=Math.min(ge,Pt.count)):Lt!=null&&(se=Math.max(se,0),ge=Math.min(ge,Lt.count));const ve=ge-se;if(ve<0||ve===1/0)return;me.setup(N,H,Ct,B,Pt);let Ke,ce=bt;if(Pt!==null&&(Ke=X.get(Pt),ce=ee,ce.setIndex(Ke)),N.isMesh)H.wireframe===!0?(at.setLineWidth(H.wireframeLinewidth*et()),ce.setMode(C.LINES)):ce.setMode(C.TRIANGLES);else if(N.isLine){let Ut=H.linewidth;Ut===void 0&&(Ut=1),at.setLineWidth(Ut*et()),N.isLineSegments?ce.setMode(C.LINES):N.isLineLoop?ce.setMode(C.LINE_LOOP):ce.setMode(C.LINE_STRIP)}else N.isPoints?ce.setMode(C.POINTS):N.isSprite&&ce.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ce.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))ce.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ut=N._multiDrawStarts,qn=N._multiDrawCounts,le=N._multiDrawCount,xn=Pt?X.get(Pt).bytesPerElement:1,rr=xt.get(H).currentProgram.getUniforms();for(let tn=0;tn<le;tn++)rr.setValue(C,"_gl_DrawID",tn),ce.render(Ut[tn]/xn,qn[tn])}else if(N.isInstancedMesh)ce.renderInstances(se,ve,N.count);else if(B.isInstancedBufferGeometry){const Ut=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,qn=Math.min(B.instanceCount,Ut);ce.renderInstances(se,ve,qn)}else ce.render(se,ve)};function he(b,U,B){b.transparent===!0&&b.side===sn&&b.forceSinglePass===!1?(b.side=je,b.needsUpdate=!0,Ns(b,U,B),b.side=Ri,b.needsUpdate=!0,Ns(b,U,B),b.side=sn):Ns(b,U,B)}this.compile=function(b,U,B=null){B===null&&(B=b),h=te.get(B),h.init(U),y.push(h),B.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),b!==B&&b.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),h.setupLights();const H=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const it=N.material;if(it)if(Array.isArray(it))for(let pt=0;pt<it.length;pt++){const Ct=it[pt];he(Ct,B,N),H.add(Ct)}else he(it,B,N),H.add(it)}),y.pop(),h=null,H},this.compileAsync=function(b,U,B=null){const H=this.compile(b,U,B);return new Promise(N=>{function it(){if(H.forEach(function(pt){xt.get(pt).currentProgram.isReady()&&H.delete(pt)}),H.size===0){N(b);return}setTimeout(it,10)}Q.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let vn=null;function Xn(b){vn&&vn(b)}function wl(){Li.stop()}function Tl(){Li.start()}const Li=new Ih;Li.setAnimationLoop(Xn),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(b){vn=b,W.setAnimationLoop(b),b===null?Li.stop():Li.start()},W.addEventListener("sessionstart",wl),W.addEventListener("sessionend",Tl),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,U,P),h=te.get(b,y.length),h.init(U),y.push(h),Ft.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(Ft),Tt=this.localClippingEnabled,nt=tt.init(this.clippingPlanes,Tt),m=Mt.get(b,S.length),m.init(),S.push(m),W.enabled===!0&&W.isPresenting===!0){const it=x.xr.getDepthSensingMesh();it!==null&&ra(it,U,-1/0,x.sortObjects)}ra(b,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ct,_t),Z=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Z&&Bt.addToRenderList(m,b),this.info.render.frame++,nt===!0&&tt.beginShadows();const B=h.state.shadowsArray;Et.render(B,b,U),nt===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,N=m.transmissive;if(h.setupLights(),U.isArrayCamera){const it=U.cameras;if(N.length>0)for(let pt=0,Ct=it.length;pt<Ct;pt++){const Pt=it[pt];Rl(H,N,b,Pt)}Z&&Bt.render(b);for(let pt=0,Ct=it.length;pt<Ct;pt++){const Pt=it[pt];Al(m,b,Pt,Pt.viewport)}}else N.length>0&&Rl(H,N,b,U),Z&&Bt.render(b),Al(m,b,U);P!==null&&(w.updateMultisampleRenderTarget(P),w.updateRenderTargetMipmap(P)),b.isScene===!0&&b.onAfterRender(x,b,U),me.resetDefaultState(),M=-1,v=null,y.pop(),y.length>0?(h=y[y.length-1],nt===!0&&tt.setGlobalState(x.clippingPlanes,h.state.camera)):h=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function ra(b,U,B,H){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)h.pushLight(b),b.castShadow&&h.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||$.intersectsSprite(b)){H&&kt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ft);const pt=q.update(b),Ct=b.material;Ct.visible&&m.push(b,pt,Ct,B,kt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||$.intersectsObject(b))){const pt=q.update(b),Ct=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),kt.copy(b.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),kt.copy(pt.boundingSphere.center)),kt.applyMatrix4(b.matrixWorld).applyMatrix4(Ft)),Array.isArray(Ct)){const Pt=pt.groups;for(let Wt=0,Yt=Pt.length;Wt<Yt;Wt++){const Lt=Pt[Wt],se=Ct[Lt.materialIndex];se&&se.visible&&m.push(b,pt,se,B,kt.z,Lt)}}else Ct.visible&&m.push(b,pt,Ct,B,kt.z,null)}}const it=b.children;for(let pt=0,Ct=it.length;pt<Ct;pt++)ra(it[pt],U,B,H)}function Al(b,U,B,H){const N=b.opaque,it=b.transmissive,pt=b.transparent;h.setupLightsView(B),nt===!0&&tt.setGlobalState(x.clippingPlanes,B),H&&at.viewport(R.copy(H)),N.length>0&&Us(N,U,B),it.length>0&&Us(it,U,B),pt.length>0&&Us(pt,U,B),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function Rl(b,U,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[H.id]===void 0&&(h.state.transmissionRenderTarget[H.id]=new Ci(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?$r:li,minFilter:Wi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));const it=h.state.transmissionRenderTarget[H.id],pt=H.viewport||R;it.setSize(pt.z,pt.w);const Ct=x.getRenderTarget();x.setRenderTarget(it),x.getClearColor(k),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),Z&&Bt.render(B);const Pt=x.toneMapping;x.toneMapping=wi;const Wt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),h.setupLightsView(H),nt===!0&&tt.setGlobalState(x.clippingPlanes,H),Us(b,B,H),w.updateMultisampleRenderTarget(it),w.updateRenderTargetMipmap(it),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Lt=0,se=U.length;Lt<se;Lt++){const ge=U[Lt],ve=ge.object,Ke=ge.geometry,ce=ge.material,Ut=ge.group;if(ce.side===sn&&ve.layers.test(H.layers)){const qn=ce.side;ce.side=je,ce.needsUpdate=!0,Cl(ve,B,H,Ke,ce,Ut),ce.side=qn,ce.needsUpdate=!0,Yt=!0}}Yt===!0&&(w.updateMultisampleRenderTarget(it),w.updateRenderTargetMipmap(it))}x.setRenderTarget(Ct),x.setClearColor(k,Y),Wt!==void 0&&(H.viewport=Wt),x.toneMapping=Pt}function Us(b,U,B){const H=U.isScene===!0?U.overrideMaterial:null;for(let N=0,it=b.length;N<it;N++){const pt=b[N],Ct=pt.object,Pt=pt.geometry,Wt=H===null?pt.material:H,Yt=pt.group;Ct.layers.test(B.layers)&&Cl(Ct,U,B,Pt,Wt,Yt)}}function Cl(b,U,B,H,N,it){b.onBeforeRender(x,U,B,H,N,it),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(x,U,B,H,b,it),N.transparent===!0&&N.side===sn&&N.forceSinglePass===!1?(N.side=je,N.needsUpdate=!0,x.renderBufferDirect(B,U,H,N,b,it),N.side=Ri,N.needsUpdate=!0,x.renderBufferDirect(B,U,H,N,b,it),N.side=sn):x.renderBufferDirect(B,U,H,N,b,it),b.onAfterRender(x,U,B,H,N,it)}function Ns(b,U,B){U.isScene!==!0&&(U=ie);const H=xt.get(b),N=h.state.lights,it=h.state.shadowsArray,pt=N.state.version,Ct=Rt.getParameters(b,N.state,it,U,B),Pt=Rt.getProgramCacheKey(Ct);let Wt=H.programs;H.environment=b.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(b.isMeshStandardMaterial?z:E).get(b.envMap||H.environment),H.envMapRotation=H.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Wt===void 0&&(b.addEventListener("dispose",qt),Wt=new Map,H.programs=Wt);let Yt=Wt.get(Pt);if(Yt!==void 0){if(H.currentProgram===Yt&&H.lightsStateVersion===pt)return Ll(b,Ct),Yt}else Ct.uniforms=Rt.getUniforms(b),b.onBeforeCompile(Ct,x),Yt=Rt.acquireProgram(Ct,Pt),Wt.set(Pt,Yt),H.uniforms=Ct.uniforms;const Lt=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Lt.clippingPlanes=tt.uniform),Ll(b,Ct),H.needsLights=Df(b),H.lightsStateVersion=pt,H.needsLights&&(Lt.ambientLightColor.value=N.state.ambient,Lt.lightProbe.value=N.state.probe,Lt.directionalLights.value=N.state.directional,Lt.directionalLightShadows.value=N.state.directionalShadow,Lt.spotLights.value=N.state.spot,Lt.spotLightShadows.value=N.state.spotShadow,Lt.rectAreaLights.value=N.state.rectArea,Lt.ltc_1.value=N.state.rectAreaLTC1,Lt.ltc_2.value=N.state.rectAreaLTC2,Lt.pointLights.value=N.state.point,Lt.pointLightShadows.value=N.state.pointShadow,Lt.hemisphereLights.value=N.state.hemi,Lt.directionalShadowMap.value=N.state.directionalShadowMap,Lt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Lt.spotShadowMap.value=N.state.spotShadowMap,Lt.spotLightMatrix.value=N.state.spotLightMatrix,Lt.spotLightMap.value=N.state.spotLightMap,Lt.pointShadowMap.value=N.state.pointShadowMap,Lt.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Yt,H.uniformsList=null,Yt}function Pl(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=yo.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Ll(b,U){const B=xt.get(b);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function Pf(b,U,B,H,N){U.isScene!==!0&&(U=ie),w.resetTextureUnits();const it=U.fog,pt=H.isMeshStandardMaterial?U.environment:null,Ct=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:jr,Pt=(H.isMeshStandardMaterial?z:E).get(H.envMap||pt),Wt=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Yt=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Lt=!!B.morphAttributes.position,se=!!B.morphAttributes.normal,ge=!!B.morphAttributes.color;let ve=wi;H.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ve=x.toneMapping);const Ke=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ce=Ke!==void 0?Ke.length:0,Ut=xt.get(H),qn=h.state.lights;if(nt===!0&&(Tt===!0||b!==v)){const cn=b===v&&H.id===M;tt.setState(H,b,cn)}let le=!1;H.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==qn.state.version||Ut.outputColorSpace!==Ct||N.isBatchedMesh&&Ut.batching===!1||!N.isBatchedMesh&&Ut.batching===!0||N.isBatchedMesh&&Ut.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ut.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ut.instancing===!1||!N.isInstancedMesh&&Ut.instancing===!0||N.isSkinnedMesh&&Ut.skinning===!1||!N.isSkinnedMesh&&Ut.skinning===!0||N.isInstancedMesh&&Ut.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ut.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ut.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ut.instancingMorph===!1&&N.morphTexture!==null||Ut.envMap!==Pt||H.fog===!0&&Ut.fog!==it||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==tt.numPlanes||Ut.numIntersection!==tt.numIntersection)||Ut.vertexAlphas!==Wt||Ut.vertexTangents!==Yt||Ut.morphTargets!==Lt||Ut.morphNormals!==se||Ut.morphColors!==ge||Ut.toneMapping!==ve||Ut.morphTargetsCount!==ce)&&(le=!0):(le=!0,Ut.__version=H.version);let xn=Ut.currentProgram;le===!0&&(xn=Ns(H,U,N));let rr=!1,tn=!1,es=!1;const xe=xn.getUniforms(),Cn=Ut.uniforms;if(at.useProgram(xn.program)&&(rr=!0,tn=!0,es=!0),H.id!==M&&(M=H.id,tn=!0),rr||v!==b){at.buffers.depth.getReversed()?(rt.copy(b.projectionMatrix),Ed(rt),bd(rt),xe.setValue(C,"projectionMatrix",rt)):xe.setValue(C,"projectionMatrix",b.projectionMatrix),xe.setValue(C,"viewMatrix",b.matrixWorldInverse);const ui=xe.map.cameraPosition;ui!==void 0&&ui.setValue(C,Gt.setFromMatrixPosition(b.matrixWorld)),yt.logarithmicDepthBuffer&&xe.setValue(C,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&xe.setValue(C,"isOrthographic",b.isOrthographicCamera===!0),v!==b&&(v=b,tn=!0,es=!0)}if(N.isSkinnedMesh){xe.setOptional(C,N,"bindMatrix"),xe.setOptional(C,N,"bindMatrixInverse");const cn=N.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),xe.setValue(C,"boneTexture",cn.boneTexture,w))}N.isBatchedMesh&&(xe.setOptional(C,N,"batchingTexture"),xe.setValue(C,"batchingTexture",N._matricesTexture,w),xe.setOptional(C,N,"batchingIdTexture"),xe.setValue(C,"batchingIdTexture",N._indirectTexture,w),xe.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&xe.setValue(C,"batchingColorTexture",N._colorsTexture,w));const ns=B.morphAttributes;if((ns.position!==void 0||ns.normal!==void 0||ns.color!==void 0)&&Vt.update(N,B,xn),(tn||Ut.receiveShadow!==N.receiveShadow)&&(Ut.receiveShadow=N.receiveShadow,xe.setValue(C,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Cn.envMap.value=Pt,Cn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(Cn.envMapIntensity.value=U.environmentIntensity),tn&&(xe.setValue(C,"toneMappingExposure",x.toneMappingExposure),Ut.needsLights&&Lf(Cn,es),it&&H.fog===!0&&ut.refreshFogUniforms(Cn,it),ut.refreshMaterialUniforms(Cn,H,G,K,h.state.transmissionRenderTarget[b.id]),yo.upload(C,Pl(Ut),Cn,w)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(yo.upload(C,Pl(Ut),Cn,w),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&xe.setValue(C,"center",N.center),xe.setValue(C,"modelViewMatrix",N.modelViewMatrix),xe.setValue(C,"normalMatrix",N.normalMatrix),xe.setValue(C,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const cn=H.uniformsGroups;for(let ui=0,hi=cn.length;ui<hi;ui++){const Dl=cn[ui];I.update(Dl,xn),I.bind(Dl,xn)}}return xn}function Lf(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Df(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(b,U,B){xt.get(b.texture).__webglTexture=U,xt.get(b.depthTexture).__webglTexture=B;const H=xt.get(b);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){const B=xt.get(b);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,B=0){P=b,T=U,A=B;let H=!0,N=null,it=!1,pt=!1;if(b){const Pt=xt.get(b);if(Pt.__useDefaultFramebuffer!==void 0)at.bindFramebuffer(C.FRAMEBUFFER,null),H=!1;else if(Pt.__webglFramebuffer===void 0)w.setupRenderTarget(b);else if(Pt.__hasExternalTextures)w.rebindTextures(b,xt.get(b.texture).__webglTexture,xt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Lt=b.depthTexture;if(Pt.__boundDepthTexture!==Lt){if(Lt!==null&&xt.has(Lt)&&(b.width!==Lt.image.width||b.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(b)}}const Wt=b.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(pt=!0);const Yt=xt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Yt[U])?N=Yt[U][B]:N=Yt[U],it=!0):b.samples>0&&w.useMultisampledRTT(b)===!1?N=xt.get(b).__webglMultisampledFramebuffer:Array.isArray(Yt)?N=Yt[B]:N=Yt,R.copy(b.viewport),O.copy(b.scissor),F=b.scissorTest}else R.copy(wt).multiplyScalar(G).floor(),O.copy(Xt).multiplyScalar(G).floor(),F=ae;if(at.bindFramebuffer(C.FRAMEBUFFER,N)&&H&&at.drawBuffers(b,N),at.viewport(R),at.scissor(O),at.setScissorTest(F),it){const Pt=xt.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,Pt.__webglTexture,B)}else if(pt){const Pt=xt.get(b.texture),Wt=U||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Pt.__webglTexture,B||0,Wt)}M=-1},this.readRenderTargetPixels=function(b,U,B,H,N,it,pt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=xt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pt!==void 0&&(Ct=Ct[pt]),Ct){at.bindFramebuffer(C.FRAMEBUFFER,Ct);try{const Pt=b.texture,Wt=Pt.format,Yt=Pt.type;if(!yt.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-H&&B>=0&&B<=b.height-N&&C.readPixels(U,B,H,N,jt.convert(Wt),jt.convert(Yt),it)}finally{const Pt=P!==null?xt.get(P).__webglFramebuffer:null;at.bindFramebuffer(C.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(b,U,B,H,N,it,pt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=xt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pt!==void 0&&(Ct=Ct[pt]),Ct){const Pt=b.texture,Wt=Pt.format,Yt=Pt.type;if(!yt.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-H&&B>=0&&B<=b.height-N){at.bindFramebuffer(C.FRAMEBUFFER,Ct);const Lt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Lt),C.bufferData(C.PIXEL_PACK_BUFFER,it.byteLength,C.STREAM_READ),C.readPixels(U,B,H,N,jt.convert(Wt),jt.convert(Yt),0);const se=P!==null?xt.get(P).__webglFramebuffer:null;at.bindFramebuffer(C.FRAMEBUFFER,se);const ge=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Sd(C,ge,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Lt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,it),C.deleteBuffer(Lt),C.deleteSync(ge),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,U=null,B=0){b.isTexture!==!0&&(fs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,b=arguments[1]);const H=Math.pow(2,-B),N=Math.floor(b.image.width*H),it=Math.floor(b.image.height*H),pt=U!==null?U.x:0,Ct=U!==null?U.y:0;w.setTexture2D(b,0),C.copyTexSubImage2D(C.TEXTURE_2D,B,0,0,pt,Ct,N,it),at.unbindTexture()},this.copyTextureToTexture=function(b,U,B=null,H=null,N=0){b.isTexture!==!0&&(fs("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,b=arguments[1],U=arguments[2],N=arguments[3]||0,B=null);let it,pt,Ct,Pt,Wt,Yt,Lt,se,ge;const ve=b.isCompressedTexture?b.mipmaps[N]:b.image;B!==null?(it=B.max.x-B.min.x,pt=B.max.y-B.min.y,Ct=B.isBox3?B.max.z-B.min.z:1,Pt=B.min.x,Wt=B.min.y,Yt=B.isBox3?B.min.z:0):(it=ve.width,pt=ve.height,Ct=ve.depth||1,Pt=0,Wt=0,Yt=0),H!==null?(Lt=H.x,se=H.y,ge=H.z):(Lt=0,se=0,ge=0);const Ke=jt.convert(U.format),ce=jt.convert(U.type);let Ut;U.isData3DTexture?(w.setTexture3D(U,0),Ut=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(w.setTexture2DArray(U,0),Ut=C.TEXTURE_2D_ARRAY):(w.setTexture2D(U,0),Ut=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const qn=C.getParameter(C.UNPACK_ROW_LENGTH),le=C.getParameter(C.UNPACK_IMAGE_HEIGHT),xn=C.getParameter(C.UNPACK_SKIP_PIXELS),rr=C.getParameter(C.UNPACK_SKIP_ROWS),tn=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ve.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ve.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Pt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Wt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Yt);const es=b.isDataArrayTexture||b.isData3DTexture,xe=U.isDataArrayTexture||U.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const Cn=xt.get(b),ns=xt.get(U),cn=xt.get(Cn.__renderTarget),ui=xt.get(ns.__renderTarget);at.bindFramebuffer(C.READ_FRAMEBUFFER,cn.__webglFramebuffer),at.bindFramebuffer(C.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let hi=0;hi<Ct;hi++)es&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,xt.get(b).__webglTexture,N,Yt+hi),b.isDepthTexture?(xe&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,xt.get(U).__webglTexture,N,ge+hi),C.blitFramebuffer(Pt,Wt,it,pt,Lt,se,it,pt,C.DEPTH_BUFFER_BIT,C.NEAREST)):xe?C.copyTexSubImage3D(Ut,N,Lt,se,ge+hi,Pt,Wt,it,pt):C.copyTexSubImage2D(Ut,N,Lt,se,ge+hi,Pt,Wt,it,pt);at.bindFramebuffer(C.READ_FRAMEBUFFER,null),at.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else xe?b.isDataTexture||b.isData3DTexture?C.texSubImage3D(Ut,N,Lt,se,ge,it,pt,Ct,Ke,ce,ve.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(Ut,N,Lt,se,ge,it,pt,Ct,Ke,ve.data):C.texSubImage3D(Ut,N,Lt,se,ge,it,pt,Ct,Ke,ce,ve):b.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,N,Lt,se,it,pt,Ke,ce,ve.data):b.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,N,Lt,se,ve.width,ve.height,Ke,ve.data):C.texSubImage2D(C.TEXTURE_2D,N,Lt,se,it,pt,Ke,ce,ve);C.pixelStorei(C.UNPACK_ROW_LENGTH,qn),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,le),C.pixelStorei(C.UNPACK_SKIP_PIXELS,xn),C.pixelStorei(C.UNPACK_SKIP_ROWS,rr),C.pixelStorei(C.UNPACK_SKIP_IMAGES,tn),N===0&&U.generateMipmaps&&C.generateMipmap(Ut),at.unbindTexture()},this.copyTextureToTexture3D=function(b,U,B=null,H=null,N=0){return b.isTexture!==!0&&(fs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,H=arguments[1]||null,b=arguments[2],U=arguments[3],N=arguments[4]||0),fs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,U,B,H,N)},this.initRenderTarget=function(b){xt.get(b).__webglFramebuffer===void 0&&w.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),at.unbindTexture()},this.resetState=function(){T=0,A=0,P=null,at.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}}class ul{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new At(t),this.near=e,this.far=i}clone(){return new ul(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class zh extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Bh extends Ge{constructor(t=null,e=1,i=1,r,s,a,o,c,l=an,u=an,f,d){super(null,a,o,c,l,u,r,s,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lu extends Te{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const xr=new ue,Du=new ue,io=[],Iu=new nr,I_=new ue,cs=new Ht,ls=new Jr;class Po extends Ht{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Lu(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,I_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new nr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,xr),Iu.copy(t.boundingBox).applyMatrix4(xr),this.boundingBox.union(Iu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,xr),ls.copy(t.boundingSphere).applyMatrix4(xr),this.boundingSphere.union(ls)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=t*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(t,e){const i=this.matrixWorld,r=this.count;if(cs.geometry=this.geometry,cs.material=this.material,cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ls.copy(this.boundingSphere),ls.applyMatrix4(i),t.ray.intersectsSphere(ls)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,xr),Du.multiplyMatrices(i,xr),cs.matrixWorld=Du,cs.raycast(t,io);for(let a=0,o=io.length;a<o;a++){const c=io[a];c.instanceId=s,c.object=this,e.push(c)}io.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Lu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Bh(new Float32Array(r*this.count),r,this.count,nl,Fn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*t;s[c]=o,s.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class U_ extends Qr{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Lo=new D,Do=new D,Uu=new ue,us=new bh,ro=new Jr,Na=new D,Nu=new D;class N_ extends Ne{constructor(t=new Xe,e=new U_){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Lo.fromBufferAttribute(e,r-1),Do.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Lo.distanceTo(Do);t.setAttribute("lineDistance",new _e(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ro.copy(i.boundingSphere),ro.applyMatrix4(r),ro.radius+=s,t.ray.intersectsSphere(ro)===!1)return;Uu.copy(r).invert(),us.copy(t.ray).applyMatrix4(Uu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=l){const h=u.getX(_),S=u.getX(_+1),y=so(this,t,us,c,h,S);y&&e.push(y)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(p),h=so(this,t,us,c,_,m);h&&e.push(h)}}else{const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=l){const h=so(this,t,us,c,_,_+1);h&&e.push(h)}if(this.isLineLoop){const _=so(this,t,us,c,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function so(n,t,e,i,r,s){const a=n.geometry.attributes.position;if(Lo.fromBufferAttribute(a,r),Do.fromBufferAttribute(a,s),e.distanceSqToSegment(Lo,Do,Na,Nu)>i)return;Na.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Na);if(!(c<t.near||c>t.far))return{distance:c,point:Nu.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const Fu=new D,Ou=new D;class F_ extends N_{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)Fu.fromBufferAttribute(e,r),Ou.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Fu.distanceTo(Ou);t.setAttribute("lineDistance",new _e(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Wn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),s+=i.distanceTo(r),e.push(s),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let r=0;const s=i.length;let a;e?a=e:a=t*i[s-1];let o=0,c=s-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=i[r]-a,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===a)return r/(s-1);const u=i[r],d=i[r+1]-u,p=(a-u)/d;return(r+p)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=e||(a.isVector2?new st:new D);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new D,r=[],s=[],a=[],o=new D,c=new ue;for(let p=0;p<=t;p++){const g=p/t;r[p]=this.getTangentAt(g,new D)}s[0]=new D,a[0]=new D;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),d<=l&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Fe(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(r[p],s[p])}if(e===!0){let p=Math.acos(Fe(s[0].dot(s[t]),-1,1));p/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(p=-p);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],p*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class hl extends Wn{constructor(t=0,e=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new st){const i=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*u-p*f+this.aX,l=d*f+p*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class O_ extends hl{constructor(t,e,i,r,s,a){super(t,e,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function fl(){let n=0,t=0,e=0,i=0;function r(s,a,o,c){n=s,t=o,e=-3*s+3*a-2*o-c,i=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,u,f){let d=(a-s)/l-(o-s)/(l+u)+(o-a)/u,p=(o-a)/u-(c-a)/(u+f)+(c-o)/f;d*=u,p*=u,r(a,o,d,p)},calc:function(s){const a=s*s,o=a*s;return n+t*s+e*a+i*o}}}const oo=new D,Fa=new fl,Oa=new fl,za=new fl;class z_ extends Wn{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new D){const i=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,u;this.closed||o>0?l=r[(o-1)%s]:(oo.subVectors(r[0],r[1]).add(r[0]),l=oo);const f=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(oo.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=oo),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),p),_=Math.pow(f.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Fa.initNonuniformCatmullRom(l.x,f.x,d.x,u.x,g,_,m),Oa.initNonuniformCatmullRom(l.y,f.y,d.y,u.y,g,_,m),za.initNonuniformCatmullRom(l.z,f.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Fa.initCatmullRom(l.x,f.x,d.x,u.x,this.tension),Oa.initCatmullRom(l.y,f.y,d.y,u.y,this.tension),za.initCatmullRom(l.z,f.z,d.z,u.z,this.tension));return i.set(Fa.calc(c),Oa.calc(c),za.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new D().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function zu(n,t,e,i,r){const s=(i-t)*.5,a=(r-e)*.5,o=n*n,c=n*o;return(2*e-2*i+s+a)*c+(-3*e+3*i-2*s-a)*o+s*n+e}function B_(n,t){const e=1-n;return e*e*t}function k_(n,t){return 2*(1-n)*n*t}function H_(n,t){return n*n*t}function _s(n,t,e,i){return B_(n,t)+k_(n,e)+H_(n,i)}function V_(n,t){const e=1-n;return e*e*e*t}function G_(n,t){const e=1-n;return 3*e*e*n*t}function W_(n,t){return 3*(1-n)*n*n*t}function X_(n,t){return n*n*n*t}function vs(n,t,e,i,r){return V_(n,t)+G_(n,e)+W_(n,i)+X_(n,r)}class kh extends Wn{constructor(t=new st,e=new st,i=new st,r=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new st){const i=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(vs(t,r.x,s.x,a.x,o.x),vs(t,r.y,s.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class q_ extends Wn{constructor(t=new D,e=new D,i=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new D){const i=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(vs(t,r.x,s.x,a.x,o.x),vs(t,r.y,s.y,a.y,o.y),vs(t,r.z,s.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Hh extends Wn{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Y_ extends Wn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vh extends Wn{constructor(t=new st,e=new st,i=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new st){const i=e,r=this.v0,s=this.v1,a=this.v2;return i.set(_s(t,r.x,s.x,a.x),_s(t,r.y,s.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $_ extends Wn{constructor(t=new D,e=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new D){const i=e,r=this.v0,s=this.v1,a=this.v2;return i.set(_s(t,r.x,s.x,a.x),_s(t,r.y,s.y,a.y),_s(t,r.z,s.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gh extends Wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){const i=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],u=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return i.set(zu(o,c.x,l.x,u.x,f.x),zu(o,c.y,l.y,u.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new st().fromArray(r))}return this}}var Lc=Object.freeze({__proto__:null,ArcCurve:O_,CatmullRomCurve3:z_,CubicBezierCurve:kh,CubicBezierCurve3:q_,EllipseCurve:hl,LineCurve:Hh,LineCurve3:Y_,QuadraticBezierCurve:Vh,QuadraticBezierCurve3:$_,SplineCurve:Gh});class j_ extends Wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lc[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const a=r[s]-i,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,r=this.curves.length;i<r;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(new Lc[r.type]().fromJSON(r))}return this}}class Dc extends j_{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Hh(this.currentPoint.clone(),new st(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,r){const s=new Vh(this.currentPoint.clone(),new st(t,e),new st(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(t,e,i,r,s,a){const o=new kh(this.currentPoint.clone(),new st(t,e),new st(i,r),new st(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Gh(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,r,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,i,r,s,a),this}absarc(t,e,i,r,s,a){return this.absellipse(t,e,i,i,r,s,a),this}ellipse(t,e,i,r,s,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,i,r,s,a,o,c),this}absellipse(t,e,i,r,s,a,o,c){const l=new hl(t,e,i,r,s,a,o,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class dl extends Xe{constructor(t=[new st(0,-.5),new st(.5,0),new st(0,.5)],e=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:r},e=Math.floor(e),r=Fe(r,0,Math.PI*2);const s=[],a=[],o=[],c=[],l=[],u=1/e,f=new D,d=new st,p=new D,g=new D,_=new D;let m=0,h=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,h=t[S+1].y-t[S].y,p.x=h*1,p.y=-m,p.z=h*0,_.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[S+1].x-t[S].x,h=t[S+1].y-t[S].y,p.x=h*1,p.y=-m,p.z=h*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),c.push(p.x,p.y,p.z),_.copy(g)}for(let S=0;S<=e;S++){const y=i+S*u*r,x=Math.sin(y),L=Math.cos(y);for(let T=0;T<=t.length-1;T++){f.x=t[T].x*x,f.y=t[T].y,f.z=t[T].x*L,a.push(f.x,f.y,f.z),d.x=S/e,d.y=T/(t.length-1),o.push(d.x,d.y);const A=c[3*T+0]*x,P=c[3*T+1],M=c[3*T+0]*L;l.push(A,P,M)}}for(let S=0;S<e;S++)for(let y=0;y<t.length-1;y++){const x=y+S*t.length,L=x,T=x+t.length,A=x+t.length+1,P=x+1;s.push(L,T,P),s.push(A,P,T)}this.setIndex(s),this.setAttribute("position",new _e(a,3)),this.setAttribute("uv",new _e(o,2)),this.setAttribute("normal",new _e(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dl(t.points,t.segments,t.phiStart,t.phiLength)}}class Hr extends dl{constructor(t=1,e=1,i=4,r=8){const s=new Dc;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(i),r),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:r}}static fromJSON(t){return new Hr(t.radius,t.length,t.capSegments,t.radialSegments)}}class Ue extends Xe{constructor(t=1,e=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],p=[];let g=0;const _=[],m=i/2;let h=0;S(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new _e(f,3)),this.setAttribute("normal",new _e(d,3)),this.setAttribute("uv",new _e(p,2));function S(){const x=new D,L=new D;let T=0;const A=(e-t)/i;for(let P=0;P<=s;P++){const M=[],v=P/s,R=v*(e-t)+t;for(let O=0;O<=r;O++){const F=O/r,k=F*c+o,Y=Math.sin(k),V=Math.cos(k);L.x=R*Y,L.y=-v*i+m,L.z=R*V,f.push(L.x,L.y,L.z),x.set(Y,A,V).normalize(),d.push(x.x,x.y,x.z),p.push(F,1-v),M.push(g++)}_.push(M)}for(let P=0;P<r;P++)for(let M=0;M<s;M++){const v=_[M][P],R=_[M+1][P],O=_[M+1][P+1],F=_[M][P+1];(t>0||M!==0)&&(u.push(v,R,F),T+=3),(e>0||M!==s-1)&&(u.push(R,O,F),T+=3)}l.addGroup(h,T,0),h+=T}function y(x){const L=g,T=new st,A=new D;let P=0;const M=x===!0?t:e,v=x===!0?1:-1;for(let O=1;O<=r;O++)f.push(0,m*v,0),d.push(0,v,0),p.push(.5,.5),g++;const R=g;for(let O=0;O<=r;O++){const k=O/r*c+o,Y=Math.cos(k),V=Math.sin(k);A.x=M*V,A.y=m*v,A.z=M*Y,f.push(A.x,A.y,A.z),d.push(0,v,0),T.x=Y*.5+.5,T.y=V*.5*v+.5,p.push(T.x,T.y),g++}for(let O=0;O<r;O++){const F=L+O,k=R+O;x===!0?u.push(k,k+1,F):u.push(k+1,k,F),P+=3}l.addGroup(h,P,x===!0?1:2),h+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ue(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Si extends Ue{constructor(t=1,e=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Si(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qo extends Xe{constructor(t=[],e=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:r};const s=[],a=[];o(r),l(i),u(),this.setAttribute("position",new _e(s,3)),this.setAttribute("normal",new _e(s.slice(),3)),this.setAttribute("uv",new _e(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const y=new D,x=new D,L=new D;for(let T=0;T<e.length;T+=3)p(e[T+0],y),p(e[T+1],x),p(e[T+2],L),c(y,x,L,S)}function c(S,y,x,L){const T=L+1,A=[];for(let P=0;P<=T;P++){A[P]=[];const M=S.clone().lerp(x,P/T),v=y.clone().lerp(x,P/T),R=T-P;for(let O=0;O<=R;O++)O===0&&P===T?A[P][O]=M:A[P][O]=M.clone().lerp(v,O/R)}for(let P=0;P<T;P++)for(let M=0;M<2*(T-P)-1;M++){const v=Math.floor(M/2);M%2===0?(d(A[P][v+1]),d(A[P+1][v]),d(A[P][v])):(d(A[P][v+1]),d(A[P+1][v+1]),d(A[P+1][v]))}}function l(S){const y=new D;for(let x=0;x<s.length;x+=3)y.x=s[x+0],y.y=s[x+1],y.z=s[x+2],y.normalize().multiplyScalar(S),s[x+0]=y.x,s[x+1]=y.y,s[x+2]=y.z}function u(){const S=new D;for(let y=0;y<s.length;y+=3){S.x=s[y+0],S.y=s[y+1],S.z=s[y+2];const x=m(S)/2/Math.PI+.5,L=h(S)/Math.PI+.5;a.push(x,1-L)}g(),f()}function f(){for(let S=0;S<a.length;S+=6){const y=a[S+0],x=a[S+2],L=a[S+4],T=Math.max(y,x,L),A=Math.min(y,x,L);T>.9&&A<.1&&(y<.2&&(a[S+0]+=1),x<.2&&(a[S+2]+=1),L<.2&&(a[S+4]+=1))}}function d(S){s.push(S.x,S.y,S.z)}function p(S,y){const x=S*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function g(){const S=new D,y=new D,x=new D,L=new D,T=new st,A=new st,P=new st;for(let M=0,v=0;M<s.length;M+=9,v+=6){S.set(s[M+0],s[M+1],s[M+2]),y.set(s[M+3],s[M+4],s[M+5]),x.set(s[M+6],s[M+7],s[M+8]),T.set(a[v+0],a[v+1]),A.set(a[v+2],a[v+3]),P.set(a[v+4],a[v+5]),L.copy(S).add(y).add(x).divideScalar(3);const R=m(L);_(T,v+0,S,R),_(A,v+2,y,R),_(P,v+4,x,R)}}function _(S,y,x,L){L<0&&S.x===1&&(a[y]=S.x-1),x.x===0&&x.z===0&&(a[y]=L/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function h(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qo(t.vertices,t.indices,t.radius,t.details)}}class pl extends Dc{constructor(t){super(t),this.uuid=Kr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,r=this.holes.length;i<r;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(new Dc().fromJSON(r))}return this}}const Z_={triangulate:function(n,t,e=2){const i=t&&t.length,r=i?t[0]*e:n.length;let s=Wh(n,0,r,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,l,u,f,d,p;if(i&&(s=ev(n,t,s,e)),n.length>80*e){o=l=n[0],c=u=n[1];for(let g=e;g<r;g+=e)f=n[g],d=n[g+1],f<o&&(o=f),d<c&&(c=d),f>l&&(l=f),d>u&&(u=d);p=Math.max(l-o,u-c),p=p!==0?32767/p:0}return Ts(s,a,e,o,c,p,0),a}};function Wh(n,t,e,i,r){let s,a;if(r===fv(n,t,e,i)>0)for(s=t;s<e;s+=i)a=Bu(s,n[s],n[s+1],a);else for(s=e-i;s>=t;s-=i)a=Bu(s,n[s],n[s+1],a);return a&&Yo(a,a.next)&&(Rs(a),a=a.next),a}function Qi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Yo(e,e.next)||ye(e.prev,e,e.next)===0)){if(Rs(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Ts(n,t,e,i,r,s,a){if(!n)return;!a&&s&&ov(n,i,r,s);let o=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,s?J_(n,i,r,s):K_(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),Rs(n),n=l.next,o=l.next;continue}if(n=l,n===o){a?a===1?(n=Q_(Qi(n),t,e),Ts(n,t,e,i,r,s,2)):a===2&&tv(n,t,e,i,r,s):Ts(Qi(n),t,e,i,r,s,1);break}}}function K_(n){const t=n.prev,e=n,i=n.next;if(ye(t,e,i)>=0)return!1;const r=t.x,s=e.x,a=i.x,o=t.y,c=e.y,l=i.y,u=r<s?r<a?r:a:s<a?s:a,f=o<c?o<l?o:l:c<l?c:l,d=r>s?r>a?r:a:s>a?s:a,p=o>c?o>l?o:l:c>l?c:l;let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=f&&g.y<=p&&br(r,o,s,c,a,l,g.x,g.y)&&ye(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function J_(n,t,e,i){const r=n.prev,s=n,a=n.next;if(ye(r,s,a)>=0)return!1;const o=r.x,c=s.x,l=a.x,u=r.y,f=s.y,d=a.y,p=o<c?o<l?o:l:c<l?c:l,g=u<f?u<d?u:d:f<d?f:d,_=o>c?o>l?o:l:c>l?c:l,m=u>f?u>d?u:d:f>d?f:d,h=Ic(p,g,t,e,i),S=Ic(_,m,t,e,i);let y=n.prevZ,x=n.nextZ;for(;y&&y.z>=h&&x&&x.z<=S;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==r&&y!==a&&br(o,u,c,f,l,d,y.x,y.y)&&ye(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==a&&br(o,u,c,f,l,d,x.x,x.y)&&ye(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=h;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==r&&y!==a&&br(o,u,c,f,l,d,y.x,y.y)&&ye(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=S;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==a&&br(o,u,c,f,l,d,x.x,x.y)&&ye(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Q_(n,t,e){let i=n;do{const r=i.prev,s=i.next.next;!Yo(r,s)&&Xh(r,i,i.next,s)&&As(r,s)&&As(s,r)&&(t.push(r.i/e|0),t.push(i.i/e|0),t.push(s.i/e|0),Rs(i),Rs(i.next),i=n=s),i=i.next}while(i!==n);return Qi(i)}function tv(n,t,e,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&lv(a,o)){let c=qh(a,o);a=Qi(a,a.next),c=Qi(c,c.next),Ts(a,t,e,i,r,s,0),Ts(c,t,e,i,r,s,0);return}o=o.next}a=a.next}while(a!==n)}function ev(n,t,e,i){const r=[];let s,a,o,c,l;for(s=0,a=t.length;s<a;s++)o=t[s]*i,c=s<a-1?t[s+1]*i:n.length,l=Wh(n,o,c,i,!1),l===l.next&&(l.steiner=!0),r.push(cv(l));for(r.sort(nv),s=0;s<r.length;s++)e=iv(r[s],e);return e}function nv(n,t){return n.x-t.x}function iv(n,t){const e=rv(n,t);if(!e)return t;const i=qh(e,n);return Qi(i,i.next),Qi(e,e.next)}function rv(n,t){let e=t,i=-1/0,r;const s=n.x,a=n.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>i&&(i=d,r=e.x<e.next.x?e:e.next,d===s))return r}e=e.next}while(e!==t);if(!r)return null;const o=r,c=r.x,l=r.y;let u=1/0,f;e=r;do s>=e.x&&e.x>=c&&s!==e.x&&br(a<l?s:i,a,c,l,a<l?i:s,a,e.x,e.y)&&(f=Math.abs(a-e.y)/(s-e.x),As(e,n)&&(f<u||f===u&&(e.x>r.x||e.x===r.x&&sv(r,e)))&&(r=e,u=f)),e=e.next;while(e!==o);return r}function sv(n,t){return ye(n.prev,n,t.prev)<0&&ye(t.next,n,n.next)<0}function ov(n,t,e,i){let r=n;do r.z===0&&(r.z=Ic(r.x,r.y,t,e,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,av(r)}function av(n){let t,e,i,r,s,a,o,c,l=1;do{for(e=n,n=null,s=null,a=0;e;){for(a++,i=e,o=0,t=0;t<l&&(o++,i=i.nextZ,!!i);t++);for(c=l;o>0||c>0&&i;)o!==0&&(c===0||!i||e.z<=i.z)?(r=e,e=e.nextZ,o--):(r=i,i=i.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;e=i}s.nextZ=null,l*=2}while(a>1);return n}function Ic(n,t,e,i,r){return n=(n-e)*r|0,t=(t-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function cv(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function br(n,t,e,i,r,s,a,o){return(r-a)*(t-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(r-a)*(i-o)}function lv(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!uv(n,t)&&(As(n,t)&&As(t,n)&&hv(n,t)&&(ye(n.prev,n,t.prev)||ye(n,t.prev,t))||Yo(n,t)&&ye(n.prev,n,n.next)>0&&ye(t.prev,t,t.next)>0)}function ye(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Yo(n,t){return n.x===t.x&&n.y===t.y}function Xh(n,t,e,i){const r=co(ye(n,t,e)),s=co(ye(n,t,i)),a=co(ye(e,i,n)),o=co(ye(e,i,t));return!!(r!==s&&a!==o||r===0&&ao(n,e,t)||s===0&&ao(n,i,t)||a===0&&ao(e,n,i)||o===0&&ao(e,t,i))}function ao(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function co(n){return n>0?1:n<0?-1:0}function uv(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Xh(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function As(n,t){return ye(n.prev,n,n.next)<0?ye(n,t,n.next)>=0&&ye(n,n.prev,t)>=0:ye(n,t,n.prev)<0||ye(n,n.next,t)<0}function hv(n,t){let e=n,i=!1;const r=(n.x+t.x)/2,s=(n.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function qh(n,t){const e=new Uc(n.i,n.x,n.y),i=new Uc(t.i,t.x,t.y),r=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=r,r.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function Bu(n,t,e,i){const r=new Uc(n,t,e);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Rs(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Uc(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function fv(n,t,e,i){let r=0;for(let s=t,a=e-i;s<e;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}class xs{static area(t){const e=t.length;let i=0;for(let r=e-1,s=0;s<e;r=s++)i+=t[r].x*t[s].y-t[s].x*t[r].y;return i*.5}static isClockWise(t){return xs.area(t)<0}static triangulateShape(t,e){const i=[],r=[],s=[];ku(t),Hu(i,t);let a=t.length;e.forEach(ku);for(let c=0;c<e.length;c++)r.push(a),a+=e[c].length,Hu(i,e[c]);const o=Z_.triangulate(i,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function ku(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Hu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class $o extends Xe{constructor(t=new pl([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,r=[],s=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new _e(r,3)),this.setAttribute("uv",new _e(s,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const h=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:dv;let y,x=!1,L,T,A,P;h&&(y=h.getSpacedPoints(u),x=!0,d=!1,L=h.computeFrenetFrames(u,!1),T=new D,A=new D,P=new D),d||(m=0,p=0,g=0,_=0);const M=o.extractPoints(l);let v=M.shape;const R=M.holes;if(!xs.isClockWise(v)){v=v.reverse();for(let Z=0,et=R.length;Z<et;Z++){const C=R[Z];xs.isClockWise(C)&&(R[Z]=C.reverse())}}const F=xs.triangulateShape(v,R),k=v;for(let Z=0,et=R.length;Z<et;Z++){const C=R[Z];v=v.concat(C)}function Y(Z,et,C){return et||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(et,C)}const V=v.length,K=F.length;function G(Z,et,C){let Dt,Q,yt;const at=Z.x-et.x,zt=Z.y-et.y,xt=C.x-Z.x,w=C.y-Z.y,E=at*at+zt*zt,z=at*w-zt*xt;if(Math.abs(z)>Number.EPSILON){const X=Math.sqrt(E),J=Math.sqrt(xt*xt+w*w),q=et.x-zt/X,Rt=et.y+at/X,ut=C.x-w/J,Mt=C.y+xt/J,te=((ut-q)*w-(Mt-Rt)*xt)/(at*w-zt*xt);Dt=q+at*te-Z.x,Q=Rt+zt*te-Z.y;const tt=Dt*Dt+Q*Q;if(tt<=2)return new st(Dt,Q);yt=Math.sqrt(tt/2)}else{let X=!1;at>Number.EPSILON?xt>Number.EPSILON&&(X=!0):at<-Number.EPSILON?xt<-Number.EPSILON&&(X=!0):Math.sign(zt)===Math.sign(w)&&(X=!0),X?(Dt=-zt,Q=at,yt=Math.sqrt(E)):(Dt=at,Q=zt,yt=Math.sqrt(E/2))}return new st(Dt/yt,Q/yt)}const ct=[];for(let Z=0,et=k.length,C=et-1,Dt=Z+1;Z<et;Z++,C++,Dt++)C===et&&(C=0),Dt===et&&(Dt=0),ct[Z]=G(k[Z],k[C],k[Dt]);const _t=[];let wt,Xt=ct.concat();for(let Z=0,et=R.length;Z<et;Z++){const C=R[Z];wt=[];for(let Dt=0,Q=C.length,yt=Q-1,at=Dt+1;Dt<Q;Dt++,yt++,at++)yt===Q&&(yt=0),at===Q&&(at=0),wt[Dt]=G(C[Dt],C[yt],C[at]);_t.push(wt),Xt=Xt.concat(wt)}for(let Z=0;Z<m;Z++){const et=Z/m,C=p*Math.cos(et*Math.PI/2),Dt=g*Math.sin(et*Math.PI/2)+_;for(let Q=0,yt=k.length;Q<yt;Q++){const at=Y(k[Q],ct[Q],Dt);rt(at.x,at.y,-C)}for(let Q=0,yt=R.length;Q<yt;Q++){const at=R[Q];wt=_t[Q];for(let zt=0,xt=at.length;zt<xt;zt++){const w=Y(at[zt],wt[zt],Dt);rt(w.x,w.y,-C)}}}const ae=g+_;for(let Z=0;Z<V;Z++){const et=d?Y(v[Z],Xt[Z],ae):v[Z];x?(A.copy(L.normals[0]).multiplyScalar(et.x),T.copy(L.binormals[0]).multiplyScalar(et.y),P.copy(y[0]).add(A).add(T),rt(P.x,P.y,P.z)):rt(et.x,et.y,0)}for(let Z=1;Z<=u;Z++)for(let et=0;et<V;et++){const C=d?Y(v[et],Xt[et],ae):v[et];x?(A.copy(L.normals[Z]).multiplyScalar(C.x),T.copy(L.binormals[Z]).multiplyScalar(C.y),P.copy(y[Z]).add(A).add(T),rt(P.x,P.y,P.z)):rt(C.x,C.y,f/u*Z)}for(let Z=m-1;Z>=0;Z--){const et=Z/m,C=p*Math.cos(et*Math.PI/2),Dt=g*Math.sin(et*Math.PI/2)+_;for(let Q=0,yt=k.length;Q<yt;Q++){const at=Y(k[Q],ct[Q],Dt);rt(at.x,at.y,f+C)}for(let Q=0,yt=R.length;Q<yt;Q++){const at=R[Q];wt=_t[Q];for(let zt=0,xt=at.length;zt<xt;zt++){const w=Y(at[zt],wt[zt],Dt);x?rt(w.x,w.y+y[u-1].y,y[u-1].x+C):rt(w.x,w.y,f+C)}}}$(),nt();function $(){const Z=r.length/3;if(d){let et=0,C=V*et;for(let Dt=0;Dt<K;Dt++){const Q=F[Dt];Ft(Q[2]+C,Q[1]+C,Q[0]+C)}et=u+m*2,C=V*et;for(let Dt=0;Dt<K;Dt++){const Q=F[Dt];Ft(Q[0]+C,Q[1]+C,Q[2]+C)}}else{for(let et=0;et<K;et++){const C=F[et];Ft(C[2],C[1],C[0])}for(let et=0;et<K;et++){const C=F[et];Ft(C[0]+V*u,C[1]+V*u,C[2]+V*u)}}i.addGroup(Z,r.length/3-Z,0)}function nt(){const Z=r.length/3;let et=0;Tt(k,et),et+=k.length;for(let C=0,Dt=R.length;C<Dt;C++){const Q=R[C];Tt(Q,et),et+=Q.length}i.addGroup(Z,r.length/3-Z,1)}function Tt(Z,et){let C=Z.length;for(;--C>=0;){const Dt=C;let Q=C-1;Q<0&&(Q=Z.length-1);for(let yt=0,at=u+m*2;yt<at;yt++){const zt=V*yt,xt=V*(yt+1),w=et+Dt+zt,E=et+Q+zt,z=et+Q+xt,X=et+Dt+xt;Gt(w,E,z,X)}}}function rt(Z,et,C){c.push(Z),c.push(et),c.push(C)}function Ft(Z,et,C){kt(Z),kt(et),kt(C);const Dt=r.length/3,Q=S.generateTopUV(i,r,Dt-3,Dt-2,Dt-1);ie(Q[0]),ie(Q[1]),ie(Q[2])}function Gt(Z,et,C,Dt){kt(Z),kt(et),kt(Dt),kt(et),kt(C),kt(Dt);const Q=r.length/3,yt=S.generateSideWallUV(i,r,Q-6,Q-3,Q-2,Q-1);ie(yt[0]),ie(yt[1]),ie(yt[3]),ie(yt[1]),ie(yt[2]),ie(yt[3])}function kt(Z){r.push(c[Z*3+0]),r.push(c[Z*3+1]),r.push(c[Z*3+2])}function ie(Z){s.push(Z.x),s.push(Z.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return pv(e,i,t)}static fromJSON(t,e){const i=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=e[t.shapes[s]];i.push(o)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new Lc[r.type]().fromJSON(r)),new $o(i,t.options)}}const dv={generateTopUV:function(n,t,e,i,r){const s=t[e*3],a=t[e*3+1],o=t[i*3],c=t[i*3+1],l=t[r*3],u=t[r*3+1];return[new st(s,a),new st(o,c),new st(l,u)]},generateSideWallUV:function(n,t,e,i,r,s){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[i*3],u=t[i*3+1],f=t[i*3+2],d=t[r*3],p=t[r*3+1],g=t[r*3+2],_=t[s*3],m=t[s*3+1],h=t[s*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new st(a,1-c),new st(l,1-f),new st(d,1-g),new st(_,1-h)]:[new st(o,1-c),new st(u,1-f),new st(p,1-g),new st(m,1-h)]}};function pv(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Io extends qo{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Io(t.radius,t.detail)}}class ml extends qo{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ml(t.radius,t.detail)}}class on extends Xe{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const u=[],f=new D,d=new D,p=[],g=[],_=[],m=[];for(let h=0;h<=i;h++){const S=[],y=h/i;let x=0;h===0&&a===0?x=.5/e:h===i&&c===Math.PI&&(x=-.5/e);for(let L=0;L<=e;L++){const T=L/e;f.x=-t*Math.cos(r+T*s)*Math.sin(a+y*o),f.y=t*Math.cos(a+y*o),f.z=t*Math.sin(r+T*s)*Math.sin(a+y*o),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),m.push(T+x,1-y),S.push(l++)}u.push(S)}for(let h=0;h<i;h++)for(let S=0;S<e;S++){const y=u[h][S+1],x=u[h][S],L=u[h+1][S],T=u[h+1][S+1];(h!==0||a>0)&&p.push(y,x,T),(h!==i-1||c<Math.PI)&&p.push(x,L,T)}this.setIndex(p),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(_,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new on(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Is extends Xe{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],c=[],l=[],u=new D,f=new D,d=new D;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const _=g/r*s,m=p/i*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(_),f.y=(t+e*Math.cos(m))*Math.sin(_),f.z=e*Math.sin(m),o.push(f.x,f.y,f.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),d.subVectors(f,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/r),l.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const _=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,h=(r+1)*(p-1)+g,S=(r+1)*p+g;a.push(_,m,S),a.push(m,h,S)}this.setIndex(a),this.setAttribute("position",new _e(o,3)),this.setAttribute("normal",new _e(c,3)),this.setAttribute("uv",new _e(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Is(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class pn extends Qr{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xh,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=Jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Vu={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class mv{constructor(t,e,i){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=l.length;f<d;f+=2){const p=l[f],g=l[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const gv=new mv;class Yh{constructor(t){this.manager=t!==void 0?t:gv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Yh.DEFAULT_MATERIAL_NAME="__DEFAULT";class _v extends Yh{constructor(t){super(t)}load(t,e,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Vu.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=ws("img");function c(){u(),Vu.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(f){u(),r&&r(f),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class $h extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class vv extends $h{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ba=new ue,Gu=new D,Wu=new D;class xv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ol,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Gu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Gu),Wu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wu),e.updateMatrixWorld(),Ba.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ba),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ba)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Mv extends xv{constructor(){super(new al(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yv extends $h{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new Mv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kc);const Sv="/varvet/tex/",Ev=new _v,Xu=new Map;function bv(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Pn(n,t,e=160,i=6,r=34,s=.22){return(a,o,c)=>{a.fillStyle=n,a.fillRect(0,0,o,o);for(let l=0;l<e;l++){const u=c()*o,f=c()*o,d=i+c()*(r-i),p=t[l%t.length];for(const g of[-o,0,o])for(const _ of[-o,0,o]){const m=a.createRadialGradient(u+g,f+_,0,u+g,f+_,d);m.addColorStop(0,p),m.addColorStop(1,"rgba(0,0,0,0)"),a.globalAlpha=s*(.5+c()*.8),a.fillStyle=m,a.fillRect(u+g-d,f+_-d,d*2,d*2)}}a.globalAlpha=1}}function wv(n,t,e=256){const i=document.createElement("canvas");return i.width=i.height=e,n(i.getContext("2d"),e,bv(t)),i}function Ln(n,t,e=1,i=Qe){const r=Xu.get(n);if(r)return r;const s=new Ge(wv(t,e));s.wrapS=s.wrapT=Ro,s.colorSpace=i,s.anisotropy=4,s.needsUpdate=!0,Xu.set(n,s);const a=(o,c)=>Ev.load(Sv+n+o,l=>{s.dispose(),s.image=l,s.needsUpdate=!0,s.userData.real=!0},void 0,()=>c&&c());return a(".webp",()=>a(".png")),s}const Nn={grass:()=>Ln("grass",Pn("#86b35f",["#6f9e4c","#9cc46e","#5e8c43","#b3cf7d"],220,5,30),11),granite:()=>Ln("granite",Pn("#c4a69c",["#a98a82","#d8bdb2","#8f7471","#e6d3c9"],200,4,26,.3),12),sand:()=>Ln("sand",Pn("#e9d8ad",["#dcc795","#f3e6c4","#cdb684"],160,4,24),13),dirt:()=>Ln("dirt",Pn("#b39d7b",["#9c8565","#c9b592","#8a7457","#d6c6a5"],220,3,18,.28),14),planks:()=>Ln("planks",Pn("#8d7a63",["#7a6852","#a08d74","#6b5a47"],160,3,20),16),needles:()=>Ln("needles",Pn("#3f7a45",["#2f6338","#5a9455","#26532f"],220,4,18),17),leaves:()=>Ln("leaves",Pn("#8cbf55",["#6fa244","#b2d671","#5b8c3a"],220,4,18),18),pinebark:()=>Ln("pinebark",Pn("#9a5b3c",["#7d4a33","#b9704a","#6e6058"],160,3,14),19),birchbark:()=>Ln("birchbark",Pn("#ece6da",["#d9d0c0","#f6f2ea","#3b3734"],120,2,10),20),paper:()=>Ln("paper",Pn("#f4efe4",["#e9e1d0","#fbf8f1","#e2d8c4"],300,2,16,.35),15)};function Tv(){const n=new pn({vertexColors:!0}),t={tGrass:{value:Nn.grass()},tRock:{value:Nn.granite()},tSand:{value:Nn.sand()},tDirt:{value:Nn.dirt()},uScale:{value:.11}};return n.onBeforeCompile=e=>{Object.assign(e.uniforms,t),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 splat;
varying vec4 vSplat;
varying vec3 vWP;
varying vec3 vWN;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSplat = splat;
vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;
vWN = normalize(mat3(modelMatrix) * objectNormal);`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D tGrass, tRock, tSand, tDirt;
uniform float uScale;
varying vec4 vSplat;
varying vec3 vWP;
varying vec3 vWN;`).replace("#include <color_fragment>",`#include <color_fragment>
        vec2 uv = vWP.xz * uScale;
        vec3 n = abs(normalize(vWN));
        vec3 rockXZ = texture2D(tRock, uv * 0.7).rgb;
        vec3 rockSide = texture2D(tRock, vec2(vWP.x + vWP.z, vWP.y) * uScale * 0.7).rgb;
        vec3 rock = mix(rockSide, rockXZ, smoothstep(0.55, 0.85, n.y));
        vec4 w = vSplat / max(1e-3, vSplat.x + vSplat.y + vSplat.z + vSplat.w);
        vec3 tex = texture2D(tGrass, uv).rgb * w.x + rock * w.y + texture2D(tSand, uv * 1.3).rgb * w.z + texture2D(tDirt, uv * 1.6).rgb * w.w;
        diffuseColor.rgb = tex * vColor;`)},n}const Av="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",Rv=`
uniform sampler2D tScene; uniform sampler2D tDepth; uniform sampler2D tPaper;
uniform vec2 uRes; uniform float uNear, uFar, uStrength;
varying vec2 vUv;
float lin(float d){ float z = d * 2.0 - 1.0; return (2.0 * uNear * uFar) / (uFar + uNear - z * (uFar - uNear)); }
float luma(vec3 c){ return dot(c, vec3(0.299, 0.587, 0.114)); }
void main(){
  vec2 px = 1.0 / uRes;
  vec3 c = texture2D(tScene, vUv).rgb;
  // konturer från djupskillnader (relativt avståndet, så att de inte blir svarta långt bort)
  float d0 = lin(texture2D(tDepth, vUv).r);
  float dl = lin(texture2D(tDepth, vUv - vec2(px.x, 0.)).r), dr = lin(texture2D(tDepth, vUv + vec2(px.x, 0.)).r);
  float du = lin(texture2D(tDepth, vUv + vec2(0., px.y)).r), dd = lin(texture2D(tDepth, vUv - vec2(0., px.y)).r);
  float edge = (abs(dl + dr - 2.0 * d0) + abs(du + dd - 2.0 * d0)) / max(d0, 1.0);
  edge = smoothstep(0.04, 0.22, edge) * (1.0 - smoothstep(250.0, 600.0, d0));
  // pigment samlas i kanterna mellan färgfält
  vec3 cl = texture2D(tScene, vUv - vec2(px.x * 1.5, 0.)).rgb, cr = texture2D(tScene, vUv + vec2(px.x * 1.5, 0.)).rgb;
  vec3 cu = texture2D(tScene, vUv + vec2(0., px.y * 1.5)).rgb, cd = texture2D(tScene, vUv - vec2(0., px.y * 1.5)).rgb;
  float lap = abs(luma(cl) + luma(cr) + luma(cu) + luma(cd) - 4.0 * luma(c));
  // papper och pigmentkorn
  vec3 paper = texture2D(tPaper, vUv * uRes / 512.0).rgb;
  float grain = luma(paper);
  vec3 col = c;
  col = mix(vec3(luma(col)), col, 1.08);                       // lite mer mättnad
  col *= 1.0 - lap * 0.9 * uStrength;                           // mörkare pigmentkant
  col = mix(col, col * vec3(0.42, 0.34, 0.30), edge * 0.55 * uStrength); // varm, mjuk kontur
  col *= mix(1.0, grain * 1.04, 0.3 * uStrength);              // pappersstruktur
  col = mix(col, vec3(0.98, 0.96, 0.91), 0.035 * uStrength);    // lätt tvättad ton
  vec2 v = vUv - 0.5; col *= 1.0 - dot(v, v) * 0.35 * uStrength; // vinjett
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;class Cv{constructor(){fi(this,"enabled",!0);fi(this,"strength",1);fi(this,"rt");fi(this,"quad");fi(this,"qScene",new zh);fi(this,"qCam",new al(-1,1,1,-1,0,1));fi(this,"mat");this.rt=new Ci(4,4,{depthTexture:new ll(4,4),samples:4,type:$r}),this.mat=new _n({vertexShader:Av,fragmentShader:Rv,depthTest:!1,depthWrite:!1,uniforms:{tScene:{value:this.rt.texture},tDepth:{value:this.rt.depthTexture},tPaper:{value:Nn.paper()},uRes:{value:new st(4,4)},uNear:{value:.3},uFar:{value:900},uStrength:{value:1}}}),this.quad=new Ht(new Bn(2,2),this.mat),this.quad.frustumCulled=!1,this.qScene.add(this.quad)}render(t,e,i){if(!this.enabled){t.setRenderTarget(null),t.render(e,i);return}const r=t.getDrawingBufferSize(new st);(r.x!==this.rt.width||r.y!==this.rt.height)&&(this.rt.setSize(r.x,r.y),this.mat.uniforms.uRes.value.copy(r)),this.mat.uniforms.uNear.value=i.near,this.mat.uniforms.uFar.value=i.far,this.mat.uniforms.uStrength.value=this.strength,t.setRenderTarget(this.rt),t.render(e,i),t.setRenderTarget(null),t.render(this.qScene,this.qCam)}}function jh(n){const t=Nn.planks();n.onBeforeCompile=e=>{e.uniforms.tPlanks={value:t},e.uniforms.tNeedles={value:Nn.needles()},e.uniforms.tLeaves={value:Nn.leaves()},e.uniforms.tPineBark={value:Nn.pinebark()},e.uniforms.tBirchBark={value:Nn.birchbark()},e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float mat;
varying float vMat;
varying vec3 vWP2;
varying vec3 vWN2;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vMat = mat;
vec4 wpI = vec4(transformed, 1.0);
#ifdef USE_INSTANCING
wpI = instanceMatrix * wpI;
#endif
vWP2 = (modelMatrix * wpI).xyz;
vec3 nI = objectNormal;
#ifdef USE_INSTANCING
nI = mat3(instanceMatrix) * nI;
#endif
vWN2 = normalize(mat3(modelMatrix) * nI);`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D tPlanks, tNeedles, tLeaves, tPineBark, tBirchBark;
varying float vMat;
varying vec3 vWP2;
varying vec3 vWN2;
vec3 tri(sampler2D s, float sc){ vec3 w = pow(abs(normalize(vWN2)), vec3(4.0)); w /= (w.x + w.y + w.z); return texture2D(s, vWP2.zy * sc).rgb * w.x + texture2D(s, vWP2.xz * sc).rgb * w.y + texture2D(s, vWP2.xy * sc).rgb * w.z; }`).replace("#include <color_fragment>",`#include <color_fragment>
        if (vMat > 1.5) {
          // träd: 2 = barr, 3 = björklöv, 4 = tallbark, 5 = björkbark (målade texturer ersätter färgen)
          vec3 n = abs(normalize(vWN2));
          int id = int(vMat + 0.5);
          vec2 side = vec2(n.x > n.z ? vWP2.z : vWP2.x, vWP2.y);
          vec3 t;
          if (id == 2) t = tri(tNeedles, 0.55);
          else if (id == 3) t = tri(tLeaves, 0.5);
          else if (id == 4) t = texture2D(tPineBark, side * vec2(1.4, 0.7)).rgb;
          else t = texture2D(tBirchBark, side * vec2(1.4, 0.7)).rgb;
          diffuseColor.rgb = t * 1.05;
        } else if (vMat > 0.01) {
          vec3 n = abs(normalize(vWN2));
          float sc = 0.45;
          vec3 t = n.y > 0.6 ? texture2D(tPlanks, vWP2.xz * sc).rgb : (n.x > n.z ? texture2D(tPlanks, vec2(vWP2.z, vWP2.y) * sc).rgb : texture2D(tPlanks, vec2(vWP2.x, vWP2.y) * sc).rgb);
          float l = dot(t, vec3(0.299, 0.587, 0.114));
          diffuseColor.rgb *= mix(1.0, clamp(l / 0.2, 0.55, 1.45), vMat * 0.85);
        }`)}}const Pv=3;let In=1,Xi=!0,Ms=0,wr=0,ps=0,rn=null,Uo=60;function Lv(n,t){rn=n,Uo=t,In=1,Xi=n.shadowsAllowed,Ms=0,wr=0,ps=0,ms()}function Dv(n){Uo=n,Ms=0,wr=0}function Nc(){return{scale:In,shadows:Xi,dpr:rn?rn.renderer.getPixelRatio():1}}function ms(){if(!rn)return;const n=Math.min(window.devicePixelRatio||1,rn.maxDpr),t=Math.max(.6,Math.round(n*In*20)/20);Math.abs(rn.renderer.getPixelRatio()-t)>.01&&(rn.renderer.setPixelRatio(t),rn.renderer.setSize(window.innerWidth,window.innerHeight,!1)),rn.setShadows(Xi&&rn.shadowsAllowed)}function Iv(n){if(!rn||n<=0||n>.5||(Ms++,wr+=n,wr<Pv))return;const t=Ms/wr;Ms=0,wr=0,t<Uo*.88?(ps=0,In>.6?(In=Math.max(.6,In-.15),ms()):Xi&&rn.shadowsAllowed&&(Xi=!1,ms())):t>Uo*.97?++ps>=3&&(ps=0,!Xi&&rn.shadowsAllowed&&In>=.75?(Xi=!0,ms()):In<1&&(In=Math.min(1,In+.1),ms())):ps=0}const Re=Object.assign({q:1,fps:30,perf:0},(()=>{try{return JSON.parse(localStorage.getItem("varvet_set")||"{}")}catch{return{}}})()),Zh=()=>{try{localStorage.setItem("varvet_set",JSON.stringify(Re))}catch{}},Kh=[{dpr:1,shadow:0,smap:0,trees:.6},{dpr:1.5,shadow:1,smap:1024,trees:1},{dpr:2,shadow:1,smap:2048,trees:1}],tr=document.getElementById("c"),Ze=new D_({canvas:tr,antialias:!0,powerPreference:"high-performance"});Ze.outputColorSpace=Qe;Ze.toneMapping=ch;Ze.toneMappingExposure=1.05;Ze.shadowMap.type=ah;const Jt=new zh,Uv=new At("#9fd0ea"),Jh=new At("#bfdced");Jt.fog=new ul(Jh,90,420);const An=new hn(55,1,.3,900);{const n=new on(800,24,12),t=new _n({side:je,depthWrite:!1,fog:!1,uniforms:{top:{value:new At("#4f9ad6")},mid:{value:Uv},bot:{value:Jh}},vertexShader:"varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform vec3 top,mid,bot;varying vec3 vP;void main(){float y=vP.y;vec3 c=y>0.?mix(mid,top,pow(clamp(y*1.6,0.,1.),.8)):bot;c=mix(bot,c,smoothstep(-.02,.12,y));gl_FragColor=vec4(c,1.);}"}),e=new Ht(n,t);e.renderOrder=-1,e.frustumCulled=!1,Jt.add(e),Jt.userData.sky=e}const Fc=new vv("#e8f1f4","#8f9c6c",1.25);Jt.add(Fc);const pe=new yv("#ffe8c4",2);pe.position.set(60,90,40);Jt.add(pe);Jt.add(pe.target);pe.shadow.camera.left=-32;pe.shadow.camera.right=32;pe.shadow.camera.top=32;pe.shadow.camera.bottom=-32;pe.shadow.camera.near=10;pe.shadow.camera.far=220;pe.shadow.bias=-6e-4;pe.shadow.normalBias=.04;let Dn=Kh[Re.q];function Qh(){Dn=Kh[Re.q];const n=Math.min(devicePixelRatio||1,Dn.dpr);Ze.setPixelRatio(n),Ze.shadowMap.enabled=!!Dn.shadow,pe.castShadow=!!Dn.shadow,Dn.shadow&&(pe.shadow.mapSize.set(Dn.smap,Dn.smap),pe.shadow.map&&(pe.shadow.map.dispose(),pe.shadow.map=null)),Jt.traverse(t=>{t.material&&t.material.needsUpdate!==void 0&&(t.material.needsUpdate=!0)}),tf(),Lv({renderer:Ze,maxDpr:Dn.dpr,shadowsAllowed:!!Dn.shadow,setShadows:Nv},Re.fps)}function Nv(n){Ze.shadowMap.enabled===n&&pe.castShadow===n||(Ze.shadowMap.enabled=n,pe.castShadow=n,Jt.traverse(t=>{t.material&&(t.material.needsUpdate=!0)}))}function tf(){Ze.setSize(innerWidth,innerHeight,!1),An.aspect=innerWidth/innerHeight,An.fov=innerWidth<innerHeight?68:55,An.updateProjectionMatrix()}addEventListener("resize",tf);const qu=new Cv;function Fv(){qu.enabled=Re.q>=1,qu.render(Ze,Jt,An)}const jo=document.getElementById("perf");let lo=0,uo=0,Yu=0,$u=0,ka=0;function Ov(n,t){if(lo++,uo+=n,ka+=t,uo>=.5&&(Yu=lo/uo,$u=ka/lo,lo=0,uo=0,ka=0,Re.perf)){const e=Ze.info;jo.textContent=`FPS   ${Yu.toFixed(0)} / ${Re.fps}
CPU   ${$u.toFixed(1)} ms
Anrop ${e.render.calls}
Trian ${(e.render.triangles/1e3).toFixed(0)}k
DPR   ${Ze.getPixelRatio().toFixed(2)}
Auto  ${Math.round(Nc().scale*100)}% ${Nc().shadows?"skugg":"utan skugg"}
Kval  ${["Låg","Medel","Hög"][Re.q]}`}}function gl(n){const t=new Uint8Array(512),e=Zo(n),i=[...Array(256).keys()];for(let o=255;o>0;o--){const c=Math.floor(e()*(o+1));[i[o],i[c]]=[i[c],i[o]]}for(let o=0;o<512;o++)t[o]=i[o&255];const r=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],s=.5*(Math.sqrt(3)-1),a=(3-Math.sqrt(3))/6;return(o,c)=>{const l=(o+c)*s,u=Math.floor(o+l),f=Math.floor(c+l),d=(u+f)*a,p=o-(u-d),g=c-(f-d),_=p>g?1:0,m=1-_,h=p-_+a,S=g-m+a,y=p-1+2*a,x=g-1+2*a,L=u&255,T=f&255,A=(P,M,v,R)=>{let O=.5-v*v-R*R;if(O<0)return 0;O*=O;const F=r[t[P+t[M]]&7];return O*O*(F[0]*v+F[1]*R)};return 70*(A(L,T,p,g)+A(L+_,T+m,h,S)+A(L+1,T+1,y,x))}}function Zo(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const zv=gl(7),qi=gl(19),ef=gl(31),Oc=(n,t,e=4)=>{let i=0,r=1,s=.5;for(let a=0;a<e;a++)i+=s*zv(n*r,t*r),r*=2.03,s*=.5;return i},kn=(n,t,e)=>n<t?t:n>e?e:n,Ha=(n,t,e)=>n+(t-n)*e,Dr=(n,t,e)=>{const i=kn((e-n)/(t-n),0,1);return i*i*(3-2*i)},Bv={"#9a7a55":1,"#a47c52":1,"#8f6a45":1,"#c49a66":1,"#b88b58":1,"#6b5137":.8,"#5e4630":.8,"#7a5136":4,"#2f6b3d":2,"#357a43":2,"#3d8a4b":2,"#efece4":5,"#8cc35b":3,"#9bcf66":3,"#8a6646":.7,"#9a7552":.7,"#b8392b":.55,"#6e1f17":.55,"#e9e4d8":.35,"#f4f1ea":.35};function ht(n,t,e){const i=n.index?n.toNonIndexed():n,r=new At(t),s=i.attributes.position.count,a=new Float32Array(s*3);for(let o=0;o<s;o++)a[o*3]=r.r,a[o*3+1]=r.g,a[o*3+2]=r.b;return i.setAttribute("color",new Te(a,3)),i.setAttribute("mat",new Te(new Float32Array(s).fill(e??(Bv[String(t).toLowerCase()]||0)),1)),i.deleteAttribute("uv"),i}function Oe(n){let t=0;for(const c of n)t+=c.attributes.position.count;const e=new Float32Array(t*3),i=new Float32Array(t*3),r=new Float32Array(t*3),s=new Float32Array(t);let a=0;for(const c of n)e.set(c.attributes.position.array,a*3),i.set(c.attributes.normal.array,a*3),r.set(c.attributes.color.array,a*3),c.attributes.mat&&s.set(c.attributes.mat.array,a),a+=c.attributes.position.count;const o=new Xe;return o.setAttribute("position",new Te(e,3)),o.setAttribute("normal",new Te(i,3)),o.setAttribute("color",new Te(r,3)),o.setAttribute("mat",new Te(s,1)),o.computeBoundingSphere(),o}const It=(n,t,e,i,r=0,s=1)=>(n.scale(s,s,s),r&&n.rotateY(r),n.translate(t,e,i),n),ai=new pn({vertexColors:!0}),zc=new pn({vertexColors:!0,side:sn});jh(ai);jh(zc);const gt=n=>document.getElementById(n),Vr=[{x:0,z:0,rx:95,rz:72,peak:15},{x:175,z:-120,rx:46,rz:38,peak:9},{x:-160,z:140,rx:30,rz:26,peak:6},{x:120,z:150,rx:14,rz:12,peak:4}],de={x:0,z:44,r:18,h:1.3};function kv(n,t){let e=-1;for(const r of Vr){const s=(n-r.x)/r.rx,a=(t-r.z)/r.rz,o=.18*Oc(n*.012+r.x,t*.012+r.z,3),l=(1-(Math.sqrt(s*s+a*a)+o))*(r.peak/6);e=Math.max(e,l)}let i;if(e>0){const r=Dr(0,1.2,e);i=e*6*(.55+.45*r),i+=r*(Oc(n*.03,t*.03,4)*4.5+Math.abs(qi(n*.08,t*.08))*1.6)}else i=e*9;return i}function yi(n,t){let e=kv(n,t);const i=Math.hypot(n-de.x,t-de.z),r=1-Dr(de.r,de.r+10,i);if(e=Ha(e,de.h+ef(n*.1,t*.1)*.15,r),Math.abs(n+12)<5&&t>de.z+8&&t<de.z+48){const s=1-Dr(3,5,Math.abs(n+12)),a=Ha(de.h,-2.6,kn((t-(de.z+10))/30,0,1));e=Math.min(e,Ha(e,a,s))}return e}const Ee=460,Ve=230,Ei=new Float32Array((Ve+1)*(Ve+1));function Hn(n,t){const e=(n+Ee/2)/Ee*Ve,i=(t+Ee/2)/Ee*Ve;if(e<0||i<0||e>=Ve||i>=Ve)return-9;const r=e|0,s=i|0,a=e-r,o=i-s,c=Ei[s*(Ve+1)+r],l=Ei[s*(Ve+1)+r+1],u=Ei[(s+1)*(Ve+1)+r],f=Ei[(s+1)*(Ve+1)+r+1];return a+o<1?c+(l-c)*a+(u-c)*o:f+(u-f)*(1-a)+(l-f)*(1-o)}function Hv(){const n=new Bn(Ee,Ee,Ve,Ve);n.rotateX(-Math.PI/2);const t=n.attributes.position,e=new Float32Array(t.count*3);for(let o=0;o<t.count;o++){const c=t.getX(o),l=t.getZ(o),u=yi(c,l);t.setY(o,u),Ei[o]=u}n.computeVertexNormals();const i=n.attributes.normal,r=new Float32Array(t.count*4);for(let o=0;o<t.count;o++){const c=t.getX(o),l=t.getZ(o),u=t.getY(o),f=i.getY(o),d=ef(c*.05,l*.05);let p=0,g=0,_=0,m=0;if(u<-.4){_=1;const S=1-kn((-u-.4)/4,0,1)*.45;e[o*3]=S*.86,e[o*3+1]=S*.95,e[o*3+2]=S*.95}else{const h=1-Dr(.5+d*.4,1.3+d*.4,u),S=kn((.86-f)*5+(u>9?.4:0)+qi(c*.04,l*.04)*.5,0,1),y=Dr(.3,.65,S)*(1-h*.7);_=h*(1-y),g=y,p=(1-h)*(1-y);const x=Math.hypot(c-de.x,l-de.z);if(x<de.r+4&&u>.4){const T=(1-Dr(de.r-10,de.r+2,x))*.75*(.7+.3*qi(c*.15,l*.15));m=T,p*=1-T,_*=1-T}const L=.9+.16*kn(.5+d,0,1);e[o*3]=L,e[o*3+1]=L*(1.02-.04*g),e[o*3+2]=L*(.96+.04*g)}r[o*4]=p,r[o*4+1]=g,r[o*4+2]=_,r[o*4+3]=m}n.setAttribute("color",new Te(e,3)),n.setAttribute("splat",new Te(r,4));const s=Tv(),a=new Ht(n,s);return a.receiveShadow=!0,Jt.add(a),a}function nf(){const t=new Uint8Array(262144);for(let i=0;i<256;i++)for(let r=0;r<256;r++){const s=(r/255-.5)*Ee,a=(i/255-.5)*Ee,o=Hn(s,a),c=kn((o+8)/12,0,1);t[(i*256+r)*4]=c*255,t[(i*256+r)*4+3]=255}const e=new Bh(t,256,256);return e.magFilter=dn,e.minFilter=dn,e.needsUpdate=!0,e}let Ti;function Vv(){const n=new Bn(1600,1600,120,120);n.rotateX(-Math.PI/2);const t=new _n({transparent:!0,fog:!0,uniforms:Ph.merge([lt.fog,{t:{value:0},amp:{value:1},hT:{value:nf()},ws:{value:Ee},deep:{value:new At("#1e5f86")},shallow:{value:new At("#3fb5b8")},foam:{value:new At("#f4fbff")},sunDir:{value:new D(.5,.75,.35).normalize()}}]),vertexShader:`uniform float t,amp;varying vec3 vW;varying float vWave;
    #include <fog_pars_vertex>
    void main(){vec3 p=position;float w=sin(p.x*.08+t*1.1)*.18+sin(p.z*.11-t*.9)*.14+sin((p.x+p.z)*.21+t*1.7)*.06;p.y+=w*amp;vWave=w*amp;vec4 wp=modelMatrix*vec4(p,1.);vW=wp.xyz;vec4 mvPosition=viewMatrix*wp;gl_Position=projectionMatrix*mvPosition;
    #include <fog_vertex>
    }`,fragmentShader:`uniform float t,ws;uniform sampler2D hT;uniform vec3 deep,shallow,foam,sunDir;varying vec3 vW;varying float vWave;
    #include <fog_pars_fragment>
    void main(){vec2 uv=vW.xz/ws+.5;float h=-9.;if(uv.x>0.&&uv.y>0.&&uv.x<1.&&uv.y<1.)h=texture2D(hT,uv).r*12.-8.;float depth=max(0.,-h);
      vec3 c=mix(shallow,deep,smoothstep(.3,7.,depth));
      float rip=sin(vW.x*.9+t*2.)*sin(vW.z*.7-t*1.6)+sin((vW.x-vW.z)*.5+t*1.3)*.6;
      float f=smoothstep(.9,0.,depth+rip*.12)*(.65+.35*sin(t*2.+vW.x*.4+vW.z*.3));
      c=mix(c,foam,clamp(f,0.,1.)*.85);
      vec3 V=normalize(cameraPosition-vW);vec3 N=normalize(vec3(-.08*cos(vW.x*.08+t*1.1)+rip*.03,1.,-.06*cos(vW.z*.11-t*.9)+rip*.03));
      float fres=pow(1.-max(dot(V,N),0.),3.);c=mix(c,vec3(.78,.9,.97),fres*.55);
      float sp=pow(max(dot(reflect(-sunDir,N),V),0.),90.);c+=sp*.9;
      c+=vWave*.08;
      gl_FragColor=vec4(c,mix(.82,.97,smoothstep(.2,3.,depth)));
      #include <fog_fragment>
    }`});Ti=new Ht(n,t),Ti.renderOrder=1,Jt.add(Ti)}const mn={mx:0,mz:0,keys:{}},Qt={yaw:Math.PI,pitch:.38,dist:8.5,tYaw:Math.PI,tPitch:.38},So=document.getElementById("joy"),rf=document.getElementById("knob");let Cs=null,Bc={x:0,y:0},Ps=null,Eo={x:0,y:0};const hs=60;tr.addEventListener("pointerdown",n=>{n.clientX<innerWidth*.45&&Cs===null?(Cs=n.pointerId,Bc={x:n.clientX,y:n.clientY},So.style.display="block",So.style.left=n.clientX+"px",So.style.top=n.clientY+"px",rf.style.transform="",kc()):Ps===null&&(Ps=n.pointerId,Eo={x:n.clientX,y:n.clientY},kc()),tr.setPointerCapture(n.pointerId)});tr.addEventListener("pointermove",n=>{if(n.pointerId===Cs){let t=n.clientX-Bc.x,e=n.clientY-Bc.y;const i=Math.hypot(t,e);i>hs&&(t*=hs/i,e*=hs/i),rf.style.transform=`translate(${t}px,${e}px)`,mn.mx=t/hs,mn.mz=e/hs}else if(n.pointerId===Ps){const t=n.clientX-Eo.x,e=n.clientY-Eo.y;Eo={x:n.clientX,y:n.clientY},Qt.tYaw-=t*.006,Qt.tPitch=kn(Qt.tPitch+e*.004,.08,1.25)}});const sf=n=>{n.pointerId===Cs&&(Cs=null,mn.mx=mn.mz=0,So.style.display="none"),n.pointerId===Ps&&(Ps=null)};tr.addEventListener("pointerup",sf);tr.addEventListener("pointercancel",sf);tr.addEventListener("wheel",n=>{Qt.dist=kn(Qt.dist+n.deltaY*.01,4,18)},{passive:!0});addEventListener("keydown",n=>{mn.keys[n.code]=1,kc()});addEventListener("keyup",n=>{mn.keys[n.code]=0});let ju=0;function kc(){ju||(ju=1,setTimeout(()=>document.getElementById("hint").style.opacity=0,2500))}const of=[],vt={pos:new D(2,0,50),vel:new D,yaw:0,walk:0,speed:0,grounded:!0,vy:0},Ye=new On;Jt.add(Ye);const gs={};{const n="#f1c7a4",t="#2f5d8a",e="#3b3f45",i="#ffc21a",r=f=>new pn({color:f}),s=new Ht(new Hr(.36,.55,4,10),r(t));s.position.y=1.12,Ye.add(s);const a=new Ht(new on(.3,16,12),r(n));a.position.y=1.82,Ye.add(a);const o=new Ht(new on(.31,14,8,0,Math.PI*2,0,Math.PI/2),r(i));o.position.y=1.86,Ye.add(o);const c=new Ht(new Ue(.22,.22,.04,12),r(i));c.scale.set(1,1,.9),c.position.set(0,1.88,.28),Ye.add(c);for(const f of[-1,1]){const d=new Ht(new on(.045,8,6),r("#2a2a2a"));d.position.set(f*.11,1.84,.27),Ye.add(d)}const l=new Ht(new on(.22,12,8,0,Math.PI*2,Math.PI*.45,Math.PI*.55),r("#8a4a2a"));l.position.set(0,1.78,.1),Ye.add(l);const u=(f,d,p,g,_,m)=>{const h=new On;h.position.set(_,m,0);const S=new Ht(new Hr(p,d,3,8),r(g));S.position.y=-d/2-p*.5,h.add(S),Ye.add(h),gs[f]=h};u("la",.42,.11,t,-.46,1.42),u("ra",.42,.11,t,.46,1.42),u("ll",.5,.14,e,-.17,.72),u("rl",.5,.14,e,.17,.72),Ye.traverse(f=>{f.isMesh&&(f.castShadow=!0)})}const fn=[];function Gv(n){const t=Zo(42),e=(h,S,y,x)=>{const L=new Si(h,S,16,3),T=L.attributes.position,A=new D;for(let P=0;P<T.count;P++){A.fromBufferAttribute(T,P);const M=Math.hypot(A.x,A.z);if(M<1e-4)continue;const v=Math.atan2(A.z,A.x),R=M/h,O=A.y<-S/2+.001,F=O?Math.round(v/(Math.PI*2)*16)%2?1.12:.82:1,k=(1+.13*Math.sin(v*5+x)+.08*qi(Math.cos(v)*2+x,Math.sin(v)*2+A.y))*F;A.x*=k,A.z*=k,O&&(A.y-=.22*R+.12*Math.sin(v*3+x)),T.setXYZ(P,A.x,A.y,A.z)}return L.computeVertexNormals(),It(L,0,y,0)},i=Oe([ht(It(new Ue(.16,.3,2.6,8),0,1.3,0),"#7a5136"),ht(e(1.8,2.4,2.4,1),"#2f6b3d"),ht(e(1.45,2.2,3.5,2),"#357a43"),ht(e(1.1,2,4.55,3),"#357a43"),ht(e(.7,1.7,5.5,4),"#3d8a4b")]),r=(h,S,y,x,L)=>{const T=new Io(h,2),A=T.attributes.position,P=new D;for(let M=0;M<A.count;M++){P.fromBufferAttribute(A,M);const v=P.clone().normalize(),R=1+.22*qi(v.x*2.2+L,v.y*2.2+v.z*1.7)+.1*qi(v.z*5+L,v.x*5);P.multiplyScalar(R),P.y*=.85,A.setXYZ(M,P.x,P.y,P.z)}return T.computeVertexNormals(),It(T,S,y,x)},s=Oe([ht(It(new Ue(.11,.18,3.4,7),0,1.7,0),"#efece4"),ht(It(new Ue(.05,.08,1.4,5).rotateZ(.7),.45,3.3,0),"#efece4"),ht(r(1.35,0,4,0,1),"#8cc35b"),ht(r(1,.8,4.6,.3,2),"#9bcf66"),ht(r(.95,-.6,4.7,-.4,3),"#9bcf66"),ht(r(.8,.1,5.3,.5,4),"#8cc35b")]),a=(()=>{const h=new Io(1,2),S=h.attributes.position;for(let y=0;y<S.count;y++){const x=new D().fromBufferAttribute(S,y),L=1+.22*qi(x.x*1.7+3,x.z*1.7+x.y);x.multiplyScalar(L),x.y*=.62,S.setXYZ(y,x.x,x.y,x.z)}return h.computeVertexNormals(),Oe([ht(h,"#b8a29a")])})(),o=(h,S)=>{const y=[];let x=0;for(;y.length<h&&x<h*30;){x++;const L=(t()-.5)*Ee*.9,T=(t()-.5)*Ee*.9,A=yi(L,T);S(L,T,A)&&(Math.hypot(L-de.x,T-de.z)<de.r+6||fn.some(P=>Math.hypot(P.x-L,P.z-T)<P.r+1.2)||y.push({x:L,z:T,h:A}))}return y},c=(h,S)=>Math.hypot(yi(h+1.5,S)-yi(h-1.5,S),yi(h,S+1.5)-yi(h,S-1.5))/(2*1.5),l=o(Math.round(260*n.trees),(h,S,y)=>y>2.2&&c(h,S)<.55&&Oc(h*.02,S*.02,2)>-.15);for(const h of l)fn.push({x:h.x,z:h.z,r:.45,y6:h.h+6});const u=o(Math.round(70*n.trees),(h,S,y)=>y>1.6&&y<7&&c(h,S)<.4);for(const h of u)fn.push({x:h.x,z:h.z,r:.35,y6:h.h+5.5});const f=o(140,(h,S,y)=>y>-.8&&y<9),d=(h,S,y,x)=>{const L=new Po(h,ai,S.length),T=new ue,A=new er,P=new D,M=new D,v=new gn;return S.forEach((R,O)=>{const F=y();v.set(0,t()*6.28,0),A.setFromEuler(v),P.set(F,F*(.85+t()*.3),F),M.set(R.x,R.h-.15,R.z),T.compose(M,A,P),L.setMatrixAt(O,T)}),L.castShadow=x,L.receiveShadow=!0,Jt.add(L),L};d(i,l,()=>.8+t()*.7,!0),d(s,u,()=>.8+t()*.5,!0),d(a,f,()=>.6+t()*1.8,!0),f.forEach(h=>fn.push({x:h.x,z:h.z,r:.7}));const p=Oe([ht(It(new Si(.12,.5,4),0,.25,0),"#6da64e"),ht(It(new Si(.1,.4,4),.15,.2,.08),"#7bb558"),ht(It(new Si(.1,.45,4),-.12,.22,-.1),"#5e9a45")]),g=o(Math.round(700*n.trees),(h,S,y)=>y>1.2&&c(h,S)<.35);fn.length-=0;const _=new Po(p,ai,g.length),m=new ue;g.forEach((h,S)=>{m.makeRotationY(t()*6),m.setPosition(h.x,h.h,h.z),_.setMatrixAt(S,m)}),Jt.add(_)}const wn=[];let Kt;function Wv(){const n=[],t=de.h,e=12,i=9,r=4.2,s=4,a=34;n.push(ht(It(new Ot(e,r,i),s,t+r/2,a),"#b8392b"));for(const M of[-1,1])for(const v of[-1,1])n.push(ht(It(new Ot(.3,r,.3),s+M*e/2,t+r/2,a+v*i/2),"#f2efe8"));n.push(...Zu(s,t+r,a,e,i,2.3,"#3b3f45","#b8392b")),n.push(ht(It(new Ot(4.6,3.4,.2),s,t+1.7,a+i/2+.05),"#6e1f17")),n.push(ht(It(new Ot(4.9,.22,.3),s,t+3.5,a+i/2+.1),"#f2efe8"));for(const M of[-4,4])n.push(ht(It(new Ot(1.3,1.1,.15),s+M,t+2.4,a+i/2+.04),"#cfe6f2"),ht(It(new Ot(1.5,.12,.25),s+M,t+1.8,a+i/2+.08),"#f2efe8"));wn.push({x0:s-e/2-.3,x1:s+e/2+.3,z0:a-i/2-.3,z1:a+i/2+.3,top:t+7});const o=14,c=58,l=90;n.push(ht(It(new Ot(3.2,.3,l-c),o,1.3,(c+l)/2),"#9a7a55"));for(let M=c+1;M<l;M+=3)for(const v of[-1.4,1.4])n.push(ht(It(new Ue(.16,.16,4.5,6),o+v,-1.2,M),"#5e4630"));n.push(ht(It(new Ot(8,.3,3),o,1.3,l+1.2),"#9a7a55"));{const M=de.z+10,v=de.z+40,R=de.h+.12,O=-2.48,F=Math.hypot(v-M,R-O),k=Math.atan2(R-O,v-M);for(const Y of[-1,1]){const V=new Ot(.25,.25,F);V.rotateX(k),V.translate(-12+Y*1.3,(R+O)/2,(M+v)/2),n.push(ht(V,"#5b5f66"))}}const u=new Ht(Ku("#e9e4d8","#2f5d8a"),zc);u.position.set(-6,t+1.15,47),u.rotation.y=.4,u.castShadow=!0,Jt.add(u);for(const M of[-1.2,1.2])n.push(ht(It(new Ot(.3,1,2.6),-6+M*.4,t+.5,47+M*1.1),"#6b5137"));wn.push({x0:-9.5,x1:-2.5,z0:44,z1:50,top:t+2});for(let M=0;M<5;M++)n.push(ht(It(new Ot(3.6,.22,.4),-13,t+.12+M*.24,36+M*.05),M%2?"#c49a66":"#b88b58"));wn.push({x0:-15,x1:-11,z0:35,z1:37.5,top:t+1.4});for(let M=0;M<3;M++)n.push(ht(It(new Ue(.42,.42,1.05,10),12+M*.95,t+.52,40),M==1?"#2f5d8a":"#a33a2a"));wn.push({x0:11.4,x1:14.8,z0:39.4,z1:40.6,top:t+1.2}),n.push(ht(It(new Ue(.07,.09,9,6),-3,t+4.5,56),"#f2efe8")),fn.push({x:-3,z:56,r:.3});const f=new Ht(Oe(n),ai);f.castShadow=!0,f.receiveShadow=!0,Jt.add(f);const d=new On;d.add(new Ht(new Bn(2.4,1.5),new pn({color:"#1f5aa6",side:sn})));const p=new Ht(new Bn(2.4,.3),new pn({color:"#f3c316",side:sn}));p.position.z=.01,d.add(p);const g=new Ht(new Bn(.3,1.5),new pn({color:"#f3c316",side:sn}));g.position.set(-.3,0,.01),d.add(g),d.position.set(-1.8,t+8.1,56),Jt.add(d),Jt.userData.flag=d,Kt=new Ht(Ku("#f4f1ea","#a33a2a"),zc),Kt.position.set(o-3.6,.15,80),Kt.rotation.y=0,Kt.castShadow=!0,Jt.add(Kt);const _=[],m=Vr[1],h=m.x-8,S=m.z+10,y=yi(h,S);_.push(ht(It(new Ot(6,3,5),h,y+1.5,S),"#b8392b")),_.push(...Zu(h,y+3,S,6,5,1.7,"#3b3f45","#b8392b"));const x=new Ht(Oe(_),ai);x.castShadow=!0,Jt.add(x),wn.push({x0:h-3.3,x1:h+3.3,z0:S-2.8,z1:S+2.8,top:y+5.5});const L=Vr[3],T=yi(L.x,L.z),A=Oe([ht(It(new Ue(.9,1.2,6,10),L.x,T+3,L.z),"#f2efe8"),ht(It(new Ue(1.25,1.25,1.2,10),L.x,T+2,L.z),"#c0392b"),ht(It(new Ue(.7,.7,1,8),L.x,T+6.5,L.z),"#ffe9a0"),ht(It(new Si(1,1.2,10),L.x,T+7.6,L.z),"#c0392b")]),P=new Ht(A,ai);P.castShadow=!0,Jt.add(P)}function Zu(n,t,e,i,r,s,a,o){const c=r/2+.45,l=Math.hypot(c,s)+.1,u=Math.atan2(s,c),f=[];for(const p of[-1,1]){const g=new Ot(i+.8,.18,l);g.rotateX(p*u),g.translate(n,t+s/2+.05,e+p*c/2),f.push(ht(g,a))}const d=new pl;d.moveTo(-r/2,0),d.lineTo(r/2,0),d.lineTo(0,s),d.closePath();for(const p of[-1,1]){const g=new $o(d,{depth:.15,bevelEnabled:!1});g.rotateY(Math.PI/2),g.translate(n+p*i/2-(p>0?.15:0),t,e),f.push(ht(g,o))}return f}function Ku(n,t){const e=new on(1,16,8,0,Math.PI*2,Math.PI/2,Math.PI/2);e.scale(1.25,.85,3.2);const i=e.attributes.position;for(let o=0;o<i.count;o++){const c=i.getZ(o);c>0&&i.setX(o,i.getX(o)*(1-c/3.2*.75))}e.computeVertexNormals();const r=new Is(1,.07,5,24);r.rotateX(Math.PI/2),r.scale(1.25,1,3.2);const s=r.attributes.position;for(let o=0;o<s.count;o++){const c=s.getZ(o);c>0&&s.setX(o,s.getX(o)*(1-c/3.2*.75))}const a=new Ot(2.1,.1,.5);return a.translate(0,-.25,0),Oe([ht(e,n),ht(r,t),ht(a,"#9a7a55")])}new D(0,1,0);const Xv=new D;function qv(n,t){if(Hn(n,t)<-.55)return!1;for(const e of wn)if(n>e.x0&&n<e.x1&&t>e.z0&&t<e.z1)return!1;return!0}function Ko(n,t){return Math.abs(n-14)<1.6&&t>57&&t<91||Math.abs(n-14)<4&&t>89&&t<92.5}function $i(n,t){let e=Hn(n,t);if(Ko(n,t)&&(e=Math.max(e,1.45)),typeof ot<"u"&&ot.pieces.length){const i=px(n,t);i!=null&&(e=Math.max(e,i))}return e}function af(n){let t=mn.mx,e=mn.mz;const i=mn.keys;if((i.KeyW||i.ArrowUp)&&(e=-1),(i.KeyS||i.ArrowDown)&&(e=1),(i.KeyA||i.ArrowLeft)&&(t=-1),(i.KeyD||i.ArrowRight)&&(t=1),i.KeyQ&&(Qt.tYaw+=n*1.8),i.KeyE&&(Qt.tYaw-=n*1.8),(Me||Vn||Wx())&&(t=e=0),ne.on)ix(n,t,e);else{const u=Math.min(1,Math.hypot(t,e)),d=(u>.85||i.ShiftLeft?6.2:3.4)*u;if(u>.08){const _=-e/Math.max(u,.001),m=t/Math.max(u,.001),h=Math.cos(Qt.yaw),S=Math.sin(Qt.yaw),y=S*_-h*m,x=h*_+S*m,L=Math.atan2(y,x),T=Math.sin(L)*d,A=Math.cos(L)*d,P=Math.atan2(Math.sin(L-vt.yaw),Math.cos(L-vt.yaw));vt.yaw+=P*Math.min(1,n*12);const M=vt.pos.x+T*n,v=vt.pos.z+A*n,R=(O,F)=>(qv(O,F)||Ko(O,F))&&!dx(O,F,vt.pos.y)&&!fn.some(k=>Math.abs(k.x-O)<k.r+.35&&Math.abs(k.z-F)<k.r+.35&&Math.hypot(k.x-O,k.z-F)<k.r+.35)&&$i(O,F)-$i(vt.pos.x,vt.pos.z)<.9*Math.max(n*d,.05)+.35;R(M,v)?(vt.pos.x=M,vt.pos.z=v):R(M,vt.pos.z)?vt.pos.x=M:R(vt.pos.x,v)&&(vt.pos.z=v),vt.speed=d}else vt.speed=0;const p=$i(vt.pos.x,vt.pos.z);vt.pos.y+=(p-vt.pos.y)*Math.min(1,n*18),vt.walk+=n*vt.speed*2.1;const g=Math.sin(vt.walk)*Math.min(1,vt.speed/3)*.75;gs.la.rotation.x=g,gs.ra.rotation.x=-g,gs.ll.rotation.x=-g,gs.rl.rotation.x=g,Ye.position.copy(vt.pos),Ye.position.y+=Math.abs(Math.cos(vt.walk))*.06*Math.min(1,vt.speed/3),Ye.rotation.y=vt.yaw}Qt.yaw+=(Qt.tYaw-Qt.yaw)*Math.min(1,n*10),Qt.pitch+=(Qt.tPitch-Qt.pitch)*Math.min(1,n*10);const r=Xv.set(vt.pos.x,vt.pos.y+1.5,vt.pos.z);let s=Qt.dist;const a=()=>r.x-Math.sin(Qt.yaw)*Math.cos(Qt.pitch)*s,o=()=>r.z-Math.cos(Qt.yaw)*Math.cos(Qt.pitch)*s,c=()=>r.y+Math.sin(Qt.pitch)*s;for(let u=0;u<6;u++){const f=Math.max(Hn(a(),o()),0)+.6;if(c()>f)break;s*=.82}{const u=s;for(let f=1;f<=12;f++){const d=f/12;s=u*d;const p=a(),g=o(),_=c();let m=!1;for(const h of ys)if(p>h.x0-.35&&p<h.x1+.35&&g>h.z0-.35&&g<h.z1+.35&&_<h.y1+1.3&&_>h.y0-.5){m=!0;break}if(!m){for(const h of wn)if(p>h.x0&&p<h.x1&&g>h.z0&&g<h.z1&&_<(h.top||6.5)){m=!0;break}}if(!m&&f>3){for(const h of fn)if(h.r<.5&&_<h.y6&&Math.abs(h.x-p)<1.4&&Math.abs(h.z-g)<1.4&&Math.hypot(h.x-p,h.z-g)<1.3){m=!0;break}}if(m){s=Math.max(1.2,u*(f-1)/12);break}s=u}}An.position.set(a(),Math.max(c(),Math.max(Hn(a(),o()),.3)+.6),o()),An.lookAt(r),pe.position.set(vt.pos.x+60,vt.pos.y+90,vt.pos.z+40),pe.target.position.copy(vt.pos),Jt.userData.sky.position.copy(An.position),_x();const l=Yv(vt.pos.x,vt.pos.z);l!==Ju&&(Ju=l,document.getElementById("loc").textContent=l)}let Ju="";function Yv(n,t){return Math.hypot(n-de.x,t-de.z)<de.r+8||Ko(n,t)?"Varvet":Math.hypot(n-Vr[1].x,t-Vr[1].z)<60?"Grannön":"Varvsön"}function Qu(n){const t=new On,e=s=>new pn({color:s}),i=new Ht(new Hr(.38,.5,4,10),e(n.shirt));i.position.y=1.1,t.add(i);const r=new Ht(new on(.3,16,12),e(n.skin||"#f1c7a4"));if(r.position.y=1.8,t.add(r),n.hat){const s=new Ht(new on(.31,14,8,0,Math.PI*2,0,Math.PI/2),e(n.hat));s.position.y=1.84,t.add(s)}if(n.hair){const s=new Ht(new on(.32,14,10,0,Math.PI*2,0,Math.PI*.62),e(n.hair));s.position.y=1.82,s.rotation.x=-.25,t.add(s)}if(n.beard){const s=new Ht(new on(.23,12,8,0,Math.PI*2,Math.PI*.45,Math.PI*.55),e(n.beard));s.position.set(0,1.76,.1),t.add(s)}for(const s of[-1,1]){const a=new Ht(new on(.045,8,6),e("#2a2a2a"));a.position.set(s*.11,1.82,.27),t.add(a)}for(const[s,a,o,c,l]of[[-.48,1.4,.42,.11,n.shirt],[.48,1.4,.42,.11,n.shirt],[-.17,.7,.5,.14,n.pants],[.17,.7,.5,.14,n.pants]]){const u=new Ht(new Hr(c,o,3,8),e(l));u.position.set(s,a-o/2-c*.5,0),t.add(u)}return t.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),Jt.add(t),t}const ei={},Tr=new Ht(new Si(.22,.5,4),new ir({color:"#ffc21a"}));Tr.rotation.x=Math.PI;Jt.add(Tr);const Gr=new Ht(new Is(1.3,.12,6,28),new ir({color:"#ffc21a"}));Gr.rotation.x=Math.PI/2;Gr.visible=!1;Jt.add(Gr);let Ce=null;function $v(){ei.sven=Qu({shirt:"#3f6e4a",pants:"#2b3a52",hat:"#1f2a44",beard:"#d9d4cc",skin:"#efc2a0"}),ei.sven.position.set(12.2,1.45,62),ei.sven.rotation.y=Math.PI*.15;const n=Vr[1];let t=-.74,e=.67,i=n.x,r=n.z;for(let _=0;_<120&&(i+=t,r+=e,!(Hn(i,r)<-.4));_++);const s=i+t*9,a=r+e*9,o=Math.atan2(t,e);Ce={x0:i-t*2,z0:r-e*2,x1:s,z1:a,ang:o,boatX:s+e*3.2,boatZ:a-t*3.2};const c=[],l=Math.hypot(s-Ce.x0,a-Ce.z0),u=new Ot(2.6,.28,l);u.rotateY(o),u.translate((Ce.x0+s)/2,1.2,(Ce.z0+a)/2),c.push(ht(u,"#9a7a55"));for(let _=1;_<l;_+=3)for(const m of[-1.1,1.1]){const h=Ce.x0+t*_+e*m,S=Ce.z0+e*_-t*m;c.push(ht(It(new Ue(.15,.15,5,6),h,-1.2,S),"#5e4630"))}const f=new Ht(Oe(c),ai);f.castShadow=!0,Jt.add(f),ei.majken=Qu({shirt:"#c0392b",pants:"#2b2f36",hair:"#c9c2b8",skin:"#f2cdb0"}),ei.majken.position.set(s-t*1.5,1.35,a-e*1.5),ei.majken.rotation.y=o+Math.PI;const d=new On,p=new Ht(new Ot(.45,.55,.5),new pn({color:"#1d1f24"}));p.position.y=.55,d.add(p);const g=new Ht(new Ot(.12,.8,.14),new pn({color:"#2b2f36"}));g.position.y=-.05,d.add(g),d.position.set(0,.1,-3.05),Kt.add(d),ot.job>2&&(Kt.position.set(Ce.boatX,.5,Ce.boatZ),Kt.rotation.y=o)}const Hc=[{from:"sven",title:"Slipa Svens eka",reward:400,where:"Ekan på bockarna vid boden",offer:["Hej grannen! Kul att någon tar hand om varvet igen.","Min gamla eka står på bockarna där borta. Botten är full av havstulpaner och gammal färg.","Kan du slipa den ren? Jag betalar 400 kronor."],done:"Fint jobbat! Hon ser ut som ny. Här har du 400 kronor.",target:()=>({x:-6,z:47,r:4.6,label:"Slipa skrovet"}),game:"sand"},{from:"sven",title:"Byt propeller",reward:600,where:"Motorbåten vid bryggan",offer:["Nästa sak: propellern på motorbåten vid bryggan gick i en sten i somras.","Jag har köpt en ny. Kan du byta den? 600 kronor."],done:"Perfekt, nu går hon som ett spjut igen! 600 kronor till dig.",target:()=>({x:Kt.position.x+1.8,z:Kt.position.z-2.6,r:3,label:"Byt propellern"}),game:"prop"},{from:"sven",title:"Leverera båten till Grannön",reward:800,where:"Kör motorbåten till Majkens brygga",offer:["Jag har sålt motorbåten till Majken på Grannön.","Kan du köra över den till hennes brygga? Hon skjutsar dig tillbaka. 800 kronor!"],done:"",target:()=>({x:Kt.position.x+1.4,z:Kt.position.z,r:3.2,label:"Kör båten"}),game:"drive"}];function Wr(){return ot.job<Hc.length?Hc[ot.job]:null}function Vc(n){return ei[n].position}let Ai=null;function jv(){const n=[];for(const e of of)e(n);const t=Wr();if(t&&!ot.jobOn){const e=Vc(t.from);n.push({x:e.x,z:e.z,r:2.6,label:"Prata med "+(t.from==="sven"?"Sven":"Majken"),fn:()=>Qv(t)})}else if(t&&ot.jobOn){const e=t.target();n.push({x:e.x,z:e.z,r:e.r,label:e.label,fn:()=>uf(t)})}if(!t||ot.jobOn){const e=Vc("sven");n.push({x:e.x,z:e.z,r:2.2,label:"Prata med Sven",fn:()=>Ls("Sven",[t?ot.jobOn?"Du har ett jobb på gång: "+t.title.toLowerCase()+". "+t.where+".":"":"Det var allt för den här gången. Mer jobb kommer!"],null)})}return n}function Zv(n){if(Ai=null,zn||ne.on||Me)return;let t=99;for(const r of jv()){const s=Math.hypot(r.x-vt.pos.x,r.z-vt.pos.z);s<r.r&&s<t&&(t=s,Ai=r)}const e=Wr();let i=null;if(e&&!ot.jobOn)i=Vc(e.from).clone(),i.y+=2.6;else if(e&&ot.jobOn&&e.game!=="drive"){const r=e.target();i=new D(r.x,$i(r.x,r.z)+2.6,r.z)}else e&&ot.jobOn&&(i=Kt.position.clone(),i.y+=2.4);Tr.visible=!!i,i&&(Tr.position.copy(i),Tr.position.y+=Math.sin(n*3)*.15,Tr.rotation.y=n*2);for(const r in ei){const s=ei[r];if(s.children[0].scale.y=1+Math.sin(n*2+r.length)*.015,Math.hypot(s.position.x-vt.pos.x,s.position.z-vt.pos.z)<6){const o=Math.atan2(vt.pos.x-s.position.x,vt.pos.z-s.position.z);s.rotation.y+=Math.atan2(Math.sin(o-s.rotation.y),Math.cos(o-s.rotation.y))*.08}}}let Vn=null;function Kv(){gt("dlg").style.display="none",Vn=null}function Ls(n,t,e,i){Vn={who:n,lines:t.filter(Boolean),i:0,onEnd:e,accept:i},gt("dlg").style.display="block",cf()}const Jv=n=>"/varvet/ui/por_"+n.toLowerCase().replace(/å|ä/g,"a").replace(/ö/g,"o")+".png";function cf(){const n=Vn;gt("dlgWho").textContent=n.who;const t=gt("dlgPor");t.dataset.n!==n.who&&(t.dataset.n=n.who,t.style.display="none",t.onload=()=>t.style.display="block",t.onerror=()=>t.style.display="none",t.src=Jv(n.who)),gt("dlgTxt").textContent=n.lines[n.i];const e=n.i>=n.lines.length-1;gt("dlgNext").textContent=e?n.accept?"Ta jobbet":"OK":"Fortsätt",gt("dlgNo").style.display=e&&n.accept?"inline-block":"none"}function Gc(n=!0){const t=Vn;if(t){if(t.i<t.lines.length-1){t.i++,cf();return}gt("dlg").style.display="none",Vn=null,n&&t.onEnd&&t.onEnd()}}function Qv(n){Ls(n.from==="sven"?"Sven":"Majken",n.offer,()=>{ot.jobOn=1,Pe("Nytt jobb: "+n.title,2200),na(),Gn(),We("done")},!0)}function lf(){const n=Wr();ot.kr+=n.reward,ot.rykte=(ot.rykte||0)+5,ot.job++,ot.jobOn=0,Rn(),na(),Gn(),We("done"),Pe(`+${n.reward} kr`,2e3)}let Me=null;const Jo=()=>gt("gcv");function uf(n){if(n.game==="drive"){nx();return}Me={J:n,t:0},gt("game").style.display="flex",mn.mx=mn.mz=0;const t=Jo(),e=t.getBoundingClientRect(),i=Math.min(2,devicePixelRatio||1);t.width=e.width*i,t.height=e.height*i,Me.dpr=i,n.game==="sand"?tx():ex(),requestAnimationFrame(hf)}function Qo(n){const t=Me;if(Me=null,gt("game").style.display="none",!n)return;const e=t.J;Ls(e.from==="sven"?"Sven":"Majken",[e.done],lf)}function hf(){Me&&(requestAnimationFrame(hf),Me.draw())}function No(n){const t=Jo(),e=t.getBoundingClientRect();return{x:(n.clientX-e.left)*Me.dpr,y:(n.clientY-e.top)*Me.dpr}}function tx(){const n=Jo(),t=n.width,e=n.height,i=n.getContext("2d");gt("gTitle").textContent="Slipa skrovet",gt("gHelp").textContent="Dra fingret över påväxten tills botten är ren";const r=new Path2D,s=t/2,a=e*.42,o=t*.42,c=e*.3;r.moveTo(s-o,a-c*.3),r.lineTo(s+o*.95,a-c*.45),r.quadraticCurveTo(s+o*1.05,a+c*.4,s+o*.55,a+c*.8),r.quadraticCurveTo(s,a+c*1.05,s-o*.8,a+c*.6),r.quadraticCurveTo(s-o*1.02,a+c*.2,s-o,a-c*.3),r.closePath();const l=document.createElement("canvas");l.width=t,l.height=e;const u=l.getContext("2d");u.save(),u.clip(r);const f=Zo(5);u.fillStyle="#6b7d4a",u.fillRect(0,0,t,e);for(let m=0;m<260;m++)u.fillStyle=["#55663a","#7d8f55","#8a7a5a","#a39a86","#4b5a33"][m%5],u.beginPath(),u.arc(f()*t,a-c*.2+f()*c*1.3,(6+f()*22)*Me.dpr,0,7),u.fill();for(let m=0;m<120;m++)u.fillStyle="#e8e2d2",u.beginPath(),u.arc(f()*t,a+f()*c*.9,(2+f()*4)*Me.dpr,0,7),u.fill();u.restore();const d={last:null,prog:0,parts:[],total:0},p=()=>{const m=u.getImageData(0,0,t,e).data;let h=0;for(let S=3;S<m.length;S+=4*97)m[S]>40&&h++;return h};d.total=p();const g=m=>{u.globalCompositeOperation="destination-out",u.lineCap="round",u.lineWidth=46*Me.dpr,u.beginPath(),u.moveTo((d.last||m).x,(d.last||m).y),u.lineTo(m.x,m.y),u.stroke(),u.globalCompositeOperation="source-over",d.last=m;for(let h=0;h<2;h++)d.parts.push({x:m.x,y:m.y,vx:(Math.random()-.5)*6,vy:-Math.random()*4,l:1})};n.onpointerdown=m=>{d.last=No(m),g(d.last),n.setPointerCapture(m.pointerId),We("pick")},n.onpointermove=m=>{d.last&&g(No(m))},n.onpointerup=n.onpointercancel=()=>{d.last=null};let _=0;Me.draw=()=>{i.fillStyle="#cfe3ec",i.fillRect(0,0,t,e),i.fillStyle="#b9a789",i.fillRect(0,e*.82,t,e*.18),i.fillStyle="#6b5137";for(const m of[-.45,.4])i.fillRect(s+o*m-12*Me.dpr,a+c*.6,24*Me.dpr,e*.82-(a+c*.6));i.fillStyle="#f4f1ea",i.fill(r),i.save(),i.clip(r),i.fillStyle="#2f5d8a",i.fillRect(0,a-c*.5,t,c*.22),i.restore(),i.lineWidth=3*Me.dpr,i.strokeStyle="#5b5f66",i.stroke(r),i.drawImage(l,0,0);for(const m of d.parts)m.x+=m.vx,m.y+=m.vy,m.vy+=.35,m.l-=.03,i.fillStyle=`rgba(200,190,160,${m.l})`,i.fillRect(m.x,m.y,4*Me.dpr,4*Me.dpr);d.parts=d.parts.filter(m=>m.l>0),++_%12===0&&(d.prog=1-p()/d.total,gt("gBar").style.width=Math.min(100,d.prog/.92*100)+"%",d.prog>=.92&&(n.onpointerdown=n.onpointermove=null,setTimeout(()=>Qo(!0),400)))}}function ex(){const n=Jo(),t=n.width,e=n.height,i=n.getContext("2d"),r=Me.dpr,s=t*.45,a=e*.48,o={st:0,acc:0,lastA:null,drag:null,old:{x:s,y:a,on:!0,rot:0},nw:{x:t*.85,y:e*.75,on:!1,rot:0},nut:0},c=["Lossa muttern – snurra moturs runt propellern","Dra av den gamla propellern","Dra den nya propellern till axeln","Dra åt muttern – snurra medurs"];gt("gTitle").textContent="Byt propeller";const l=()=>{gt("gHelp").textContent=`${o.st+1}/4: ${c[o.st]}`,gt("gBar").style.width=o.st/4*100+"%"};l();const u=d=>Math.atan2(d.y-a,d.x-s);n.onpointerdown=d=>{const p=No(d);n.setPointerCapture(d.pointerId),o.st===0||o.st===3?o.lastA=u(p):o.st===1&&Math.hypot(p.x-o.old.x,p.y-o.old.y)<110*r?o.drag="old":o.st===2&&Math.hypot(p.x-o.nw.x,p.y-o.nw.y)<110*r&&(o.drag="nw")},n.onpointermove=d=>{const p=No(d);if(o.lastA!==null){const g=u(p);let _=g-o.lastA;_>Math.PI&&(_-=2*Math.PI),_<-Math.PI&&(_+=2*Math.PI),o.lastA=g;const m=o.st===0?-1:1;_*m>0&&(o.acc+=Math.abs(_),o.nut+=_,Math.random()<.15&&We("pick"));const h=Math.PI*2*2.5;gt("gBar").style.width=(o.st+Math.min(1,o.acc/h))/4*100+"%",o.acc>=h&&(o.acc=0,o.lastA=null,o.st===0?(o.st=1,l()):(n.onpointerdown=n.onpointermove=null,gt("gBar").style.width="100%",setTimeout(()=>Qo(!0),500)))}if(o.drag){const g=o[o.drag];g.x=p.x,g.y=p.y}},n.onpointerup=n.onpointercancel=()=>{o.lastA=null,o.drag==="old"&&(Math.hypot(o.old.x-s,o.old.y-a)>200*r?(o.old.on=!1,o.st=2,o.nw.on=!0,l(),We("place")):(o.old.x=s,o.old.y=a)),o.drag==="nw"&&Math.hypot(o.nw.x-s,o.nw.y-a)<60*r&&(o.nw.x=s,o.nw.y=a,o.st=3,l(),We("place")),o.drag=null};const f=(d,p,g)=>{i.save(),i.translate(d.x,d.y),i.rotate(g),i.fillStyle=p;for(let _=0;_<3;_++)i.rotate(Math.PI*2/3),i.beginPath(),i.ellipse(0,-48*r,24*r,48*r,.35,0,7),i.fill();i.fillStyle="#5b5f66",i.beginPath(),i.arc(0,0,18*r,0,7),i.fill(),i.restore()};Me.draw=()=>{if(i.fillStyle="#2a5a72",i.fillRect(0,0,t,e),i.fillStyle="#f4f1ea",i.beginPath(),i.moveTo(0,0),i.lineTo(t*.32,0),i.quadraticCurveTo(t*.36,e*.25,t*.2,e*.4),i.lineTo(0,e*.42),i.fill(),i.fillStyle="#1d1f24",i.fillRect(t*.18,e*.05,38*r,a-e*.05),i.fillStyle="#3a3f47",i.fillRect(t*.18,a-10*r,s-t*.18,20*r),o.old.on&&f(o.old,"#b88b3a",o.nut*.3),o.nw.on&&f(o.nw,"#e2c25a",o.st===3?o.nut*.3:0),o.st===2&&!o.drag&&(i.fillStyle="rgba(255,255,255,.75)",i.font=`${14*r}px system-ui`,i.textAlign="center",i.fillText("Ny propeller",o.nw.x,o.nw.y+80*r)),o.st===0||o.st===3){i.save(),i.translate(s,a),i.rotate(o.nut),i.fillStyle="#c0c6cc",i.beginPath();for(let p=0;p<6;p++){const g=p/6*Math.PI*2;i.lineTo(Math.cos(g)*16*r,Math.sin(g)*16*r)}i.fill(),i.restore(),i.strokeStyle="rgba(255,194,26,.8)",i.lineWidth=4*r,i.beginPath();const d=o.st===0?-1:1;i.arc(s,a,95*r,-Math.PI/2,-Math.PI/2+d*1.6,d<0),i.stroke()}o.st===1&&(i.strokeStyle="rgba(255,194,26,.6)",i.setLineDash([8*r,8*r]),i.beginPath(),i.arc(s,a,200*r,0,7),i.stroke(),i.setLineDash([]))}}const ne={on:!1,v:0,yaw:0};function nx(){ne.on=!0,ne.v=0,ne.yaw=Kt.rotation.y,Ye.visible=!0,gt("hint").style.opacity=1,gt("hint").textContent="Vänster tumme: gasa och styr · Kör till den gula ringen vid Grannön",Gr.visible=!0,Gr.position.set(Ce.boatX,.35,Ce.boatZ),Pe("Kör till Majkens brygga!",2200)}function ix(n,t,e){const i=-e,r=t;ne.v+=(i*11-ne.v)*Math.min(1,n*(i?.9:.5)),ne.yaw-=r*n*1.3*kn(Math.abs(ne.v)/4,.25,1)*Math.sign(ne.v||1);const s=Kt.position.x+Math.sin(ne.yaw)*ne.v*n,a=Kt.position.z+Math.cos(ne.yaw)*ne.v*n,o=(u,f)=>Hn(u,f)<-.3&&!(Math.abs(u-14)<2&&f>57&&f<92)&&Math.abs(u)<Ee/2-10&&Math.abs(f)<Ee/2-10,c=(u,f)=>o(u+Math.sin(ne.yaw)*2.8,f+Math.cos(ne.yaw)*2.8),l=!o(Kt.position.x,Kt.position.z);o(s,a)&&c(s,a)||l&&Hn(s,a)<=Hn(Kt.position.x,Kt.position.z)?(Kt.position.x=s,Kt.position.z=a):ne.v*=-.3,Kt.rotation.y=ne.yaw,Kt.rotation.x=-kn(ne.v/11,0,1)*.08,vt.pos.set(Kt.position.x,Kt.position.y+.1,Kt.position.z),vt.yaw=ne.yaw,Ye.position.set(Kt.position.x-Math.sin(ne.yaw)*2,Kt.position.y-.45,Kt.position.z-Math.cos(ne.yaw)*2),Ye.rotation.y=ne.yaw,Qt.tYaw+=Math.atan2(Math.sin(ne.yaw-Qt.tYaw),Math.cos(ne.yaw-Qt.tYaw))*Math.min(1,n*1.5),Math.random()<Math.abs(ne.v)*.02&&We("tick");{const u=Ce.boatX-Kt.position.x,f=Ce.boatZ-Kt.position.z,d=Math.atan2(u,f)-Qt.yaw;gt("compass").style.display="flex",gt("cArrow").style.transform=`rotate(${-d*180/Math.PI-90}deg)`,gt("cDist").textContent=Math.round(Math.hypot(u,f))+" m"}Math.hypot(Kt.position.x-Ce.boatX,Kt.position.z-Ce.boatZ)<4.5&&Math.abs(ne.v)<7.5&&rx()}function rx(){ne.on=!1,gt("compass").style.display="none",ne.v=0,Gr.visible=!1,Kt.position.set(Ce.boatX,.5,Ce.boatZ),Kt.rotation.set(0,Ce.ang,0),gt("hint").style.opacity=0,Ls("Majken",["Åh, där är hon! Tack ska du ha, den är ju fin som snus.","Sven sa att du skulle ha 800 kronor. Hoppa in i min eka så skjutsar jag dig hem."],()=>{lf(),ff(()=>{vt.pos.set(14,1.45,70),vt.yaw=Math.PI,Qt.tYaw=Qt.yaw=Math.PI,Ls("Sven",["Där är du ju! Bra jobbat idag.","Det var allt för demon – resten av varvets historia kommer snart."],null)})})}function ff(n){const t=gt("fade");t.style.opacity=1,setTimeout(()=>{n(),setTimeout(()=>t.style.opacity=0,300)},500)}function ta(n,t,e){const i=gt(n),r=()=>i.querySelectorAll("button").forEach(s=>s.classList.toggle("on",+s.dataset.v===Re[t]));i.querySelectorAll("button").forEach(s=>s.onclick=()=>{Re[t]=+s.dataset.v,Zh(),r(),e&&e()}),r()}ta("sQ","q",Qh);ta("sF","fps",()=>Dv(Re.fps));ta("sP","perf",()=>jo.style.display=Re.perf?"block":"none");jo.style.display=Re.perf?"block":"none";const df=()=>{gt("menu").style.display="flex",gt("mainCard").style.display="none",gt("settings").style.display="block"};gt("bSet").onclick=df;gt("bSet2").onclick=df;gt("bClose").onclick=()=>{gt("settings").style.display="none",ji?gt("menu").style.display="none":gt("mainCard").style.display="block"};gt("bPerf").onclick=()=>{Re.perf=Re.perf?0:1,Zh(),jo.style.display=Re.perf?"block":"none",ta("sP","perf")};gt("bPlay").onclick=()=>{ji=!0,gt("menu").style.display="none",Qt.yaw=Qt.tYaw=vt.yaw;try{document.documentElement.requestFullscreen&&innerWidth<900&&document.documentElement.requestFullscreen().catch(()=>{})}catch{}};let ji=!1;const ot={virke:4,skrot:0,picked:0,pieces:[],obj:0,digs:[],kr:0,job:0,jobOn:0,life:null},ys=[],Nt=2,Ir=2.6,we={golv:{name:"Golv",cost:{virke:2},kind:"floor"},vagg:{name:"Vägg",cost:{virke:2},kind:"wall"},fonster:{name:"Fönster",cost:{virke:2,skrot:1},kind:"wall"},dorr:{name:"Dörr",cost:{virke:2,skrot:1},kind:"wall"},tak:{name:"Tak",cost:{virke:3},kind:"roof"},jamna:{name:"Jämna",cost:{},kind:"level"}},Xr=["golv","vagg","fonster","dorr","tak","jamna"],ea=[[0,1],[1,0],[0,-1],[-1,0]],Ar=n=>Math.floor(n/Nt),qr=n=>n*Nt+Nt/2;function Fo(n,t){const e=n*Nt,i=t*Nt;let r=-99,s=99;for(const[a,o]of[[0,0],[Nt,0],[0,Nt],[Nt,Nt],[Nt/2,Nt/2],[Nt/2,0],[0,Nt/2],[Nt,Nt/2],[Nt/2,Nt]]){let c=Hn(e+a,i+o);Ko(e+a,i+o)&&(c=Math.max(c,1.45)),r=Math.max(r,c),s=Math.min(s,c)}return{top:Math.round((r*.6+Math.max(s,-.1)*.4+.12)*10)/10,mn:s,mx:r}}const Pi=(n,t)=>ot.pieces.find(e=>e.t==="golv"&&e.i===n&&e.k===t);function _l(n,t){const e=Pi(n,t);if(e)return e.y;let i=null;for(const[r,s]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){const a=Pi(n+r,t+s);a&&(i===null||a.y>i)&&(i=a.y)}return i!==null?i:Fo(n,t).top}function sx(n,t,e){const i=ea[e],r=Pi(n,t),s=Pi(n+i[0],t+i[1]);return r||s?Math.max(r?r.y:-99,s?s.y:-99):_l(n,t)}function ox(n,t){let e=null;for(const r of[[n,t,0],[n,t,1],Ds(n,t,2),Ds(n,t,3)]){const s=ot.pieces.find(a=>we[a.t].kind==="wall"&&a.i===r[0]&&a.k===r[1]&&a.r===r[2]);s&&(e===null||s.y>e)&&(e=s.y)}if(e!==null)return e+Ir;const i=Pi(n,t);if(i)return i.y+Ir;for(const[r,s]of[[1,0],[-1,0],[0,1],[0,-1]]){const a=ot.pieces.find(o=>o.t==="tak"&&o.i===n+r&&o.k===t+s);if(a)return a.y}return _l(n,t)+Ir}function Ds(n,t,e){return e===2?[n,t-1,0]:e===3?[n-1,t,1]:[n,t,e]}function th(n){return we[n.t].kind==="wall"?`w${n.i},${n.k},${n.r}`:we[n.t].kind+n.i+","+n.k}const ax="#a47c52",cx="#8f6a45",Jn="#b8392b",Qn="#f2efe8",lx="#bfe2f0",ux="#3b3f45";function pf(n){const t=Nt+.04,e=.22,i=Ir;if(n==="golv"){const r=[ht(It(new Ot(Nt+.02,5,Nt+.02),0,-2.65,0),"#9c9690"),ht(It(new Ot(Nt+.06,.12,Nt+.06),0,-.42,0),"#7f7a75"),ht(It(new Ot(Nt+.08,.14,Nt+.08),0,-.08,0),"#6b5137")];for(let s=0;s<5;s++)r.push(ht(It(new Ot(Nt/5-.03,.06,Nt),-Nt/2+Nt/10+s*Nt/5,.01,0),s%2?ax:cx));return Oe(r)}if(n==="vagg")return Oe([ht(It(new Ot(t,i,e),0,i/2,0),Jn),ht(It(new Ot(t,.12,e+.04),0,i-.06,0),Qn)]);if(n==="fonster")return Oe([ht(It(new Ot(t,.9,e),0,.45,0),Jn),ht(It(new Ot(t,.6,e),0,i-.3,0),Jn),ht(It(new Ot(.5,1.1,e),-t/2+.25,1.45,0),Jn),ht(It(new Ot(.5,1.1,e),t/2-.25,1.45,0),Jn),ht(It(new Ot(1.04,1.1,.06),0,1.45,0),lx),ht(It(new Ot(1.14,.1,e+.08),0,.9,0),Qn),ht(It(new Ot(1.14,.1,e+.08),0,2,0),Qn),ht(It(new Ot(.08,1.1,e+.08),0,1.45,0),Qn),ht(It(new Ot(t,.12,e+.04),0,i-.06,0),Qn)]);if(n==="dorr")return Oe([ht(It(new Ot(.55,i,e),-t/2+.275,i/2,0),Jn),ht(It(new Ot(.55,i,e),t/2-.275,i/2,0),Jn),ht(It(new Ot(t-1.1,.5,e),0,i-.25,0),Jn),ht(It(new Ot(.1,2.15,e+.08),-.47,1.07,0),Qn),ht(It(new Ot(.1,2.15,e+.08),.47,1.07,0),Qn),ht(It(new Ot(1.04,.1,e+.08),0,2.15,0),Qn),ht(It(new Ot(t,.12,e+.04),0,i-.06,0),Qn)]);if(n==="jamna")return Oe([ht(It(new Ot(Nt,.08,Nt),0,.04,0),"#c9b48f",0)]);if(n==="tak"){const s=Math.hypot(Nt,1.1)+.06,a=Math.atan2(1.1,Nt),o=new Ot(Nt+.3,.16,s);o.rotateX(-a),o.translate(0,1.1/2+.08,0);const c=new pl;c.moveTo(-Nt/2,0),c.lineTo(Nt/2,0),c.lineTo(Nt/2,1.1),c.closePath();const l=[ht(o,ux)];for(const u of[-1,1]){const f=new $o(c,{depth:.12,bevelEnabled:!1});f.rotateY(-Math.PI/2),f.translate(u*Nt/2+(u<0?.12:0),0,0),l.push(ht(f,Jn))}return Oe(l)}}const Sr={},mf=400;let Oo=null;function hx(n){Oo=n}function Wc(n,t,e,i,r){if(!Oo)return;const s=Oo.geometry,a=s.attributes.position;s.attributes.color;const o=Ee/Ve,c=3.2,l=n*Nt,u=l+Nt,f=t*Nt,d=f+Nt,p=Math.max(0,Math.floor((l-c+Ee/2)/o)),g=Math.min(Ve,Math.ceil((u+c+Ee/2)/o)),_=Math.max(0,Math.floor((f-c+Ee/2)/o)),m=Math.min(Ve,Math.ceil((d+c+Ee/2)/o)),h=s.attributes.splat;let S=!1;for(let y=_;y<=m;y++)for(let x=p;x<=g;x++){const L=-Ee/2+x*o,T=-Ee/2+y*o,A=Math.max(l-L,0,L-u),P=Math.max(f-T,0,T-d),M=Math.hypot(A,P);if(M>c)continue;const v=y*(Ve+1)+x,R=Ei[v];if(r){const F=M<=0?e-.02:R+(e-.02-R)*(1-M/c)*(1-M/c);if(Math.abs(F-R)>.005){if(Ei[v]=F,a.setY(v,F),h){const k=.5*(1-M/c);h.setXYZW(v,h.getX(v)*(1-k),h.getY(v)*(1-k),h.getZ(v)*(1-k),h.getW(v)+(1-h.getW(v))*k)}S=!0}continue}const O=e-.07+M*.6;if(R>O){if(Ei[v]=O,a.setY(v,O),h){const F=.75*(1-M/c);h.setXYZW(v,h.getX(v)*(1-F),h.getY(v)*(1-F),h.getZ(v)*(1-F),h.getW(v)+(1-h.getW(v))*F)}S=!0}}S&&i&&gf()}function gf(){const n=Oo.geometry;if(n.attributes.position.needsUpdate=!0,n.attributes.color.needsUpdate=!0,n.attributes.splat&&(n.attributes.splat.needsUpdate=!0),n.computeVertexNormals(),n.computeBoundingSphere(),Ti){const t=Ti.material.uniforms.hT.value,e=nf();t.image.data.set(e.image.data),t.needsUpdate=!0,e.dispose()}}function fx(){for(const n of ot.digs)Wc(n[0],n[1],n[2],!1,!!n[3]);ot.digs.length&&gf();for(const n of Xr){const t=new Po(pf(n),ai,mf);t.count=0,t.castShadow=!0,t.receiveShadow=!0,t.frustumCulled=!1,Jt.add(t),Sr[n]=t}gx(),vx(),vl(),Rn()}const si=new ue,zo=new er,Bo=new gn,bo=new D(1,1,1),Zi=new D;function ko(n,t){const e=we[n.t].kind;let i=qr(n.i),r=qr(n.k),s=0;if(e==="wall"){const a=ea[n.r];i+=a[0]*Nt/2,r+=a[1]*Nt/2,s=n.r%2?Math.PI/2:0}return e==="roof"&&(s=-n.r*Math.PI/2),Bo.set(0,s,0),zo.setFromEuler(Bo),Zi.set(i,n.y,r),t.compose(Zi,zo,bo),t}function vl(){const n={};for(const t of Xr)n[t]=0;for(const t of ot.pieces){const e=Sr[t.t];n[t.t]>=mf||e.setMatrixAt(n[t.t]++,ko(t,si))}for(const t of Xr)Sr[t].count=n[t],Sr[t].instanceMatrix.needsUpdate=!0,Sr[t].computeBoundingSphere&&Sr[t].computeBoundingSphere();ys.length=0;for(const t of ot.pieces){if(we[t.t].kind!=="wall")continue;const e=ea[t.r],i=qr(t.i)+e[0]*Nt/2,r=qr(t.k)+e[1]*Nt/2,s=t.r%2===0,a=.22,o=(c,l)=>{s?ys.push({x0:i+c,x1:i+l,z0:r-a,z1:r+a,y0:t.y,y1:t.y+Ir}):ys.push({x0:i-a,x1:i+a,z0:r+c,z1:r+l,y0:t.y,y1:t.y+Ir})};t.t==="dorr"?(o(-1.02,-.5),o(.5,1.02)):o(-1.02,1.02)}}function dx(n,t,e){for(const i of ys)if(n>i.x0-.25&&n<i.x1+.25&&t>i.z0-.25&&t<i.z1+.25&&e<i.y1-.2&&e>i.y0-1.5)return!0;return!1}function px(n,t){const e=Pi(Ar(n),Ar(t));return e?e.y:null}let un,Ho=!1,$e={t:"golv",r:0},zn=!1,oe=null;const _f=new ir({color:"#7dff8a",transparent:!0,opacity:.45,depthWrite:!1}),mx=new ir({color:"#ff5a4a",transparent:!0,opacity:.45,depthWrite:!1}),Xc={};function gx(){for(const n of Xr)Xc[n]=pf(n);un=new Ht(Xc.golv,_f),un.visible=!1,un.renderOrder=3,Jt.add(un)}function xl(){const n=Math.sin(vt.yaw),t=Math.cos(vt.yaw),e=we[$e.t].kind;let i,r,s=$e.r;if(e==="wall"){const o=vt.pos.x+n*.9,c=vt.pos.z+t*.9;i=Ar(o),r=Ar(c),s=Math.abs(n)>Math.abs(t)?n>0?1:3:t>0?0:2,s=(s+$e.r)%4;const l=Ds(i,r,s);i=l[0],r=l[1],s=l[2]}else{const o=vt.pos.x+n*2.2,c=vt.pos.z+t*2.2;i=Ar(o),r=Ar(c),e==="roof"&&(s=((Math.abs(n)>Math.abs(t)?n>0?1:3:t>0?0:2)+$e.r)%4)}const a={t:$e.t,i,k:r,r:e==="floor"?0:s};return a.y=e==="roof"?ox(i,r):e==="wall"?sx(i,r,s):e==="level"?(()=>{const o=Fo(i,r);return Math.round((o.mx+Math.max(o.mn,-.1))/2*10)/10})():_l(i,r),a}function vf(n){const t=we[n.t].kind,e=we[n.t].cost;for(const c in e)if(ot[c]<e[c])return"Saknar "+c;const i=th(n);if(ot.pieces.some(c=>th(c)===i))return"Upptaget";const r=n.i*Nt,s=n.k*Nt,a=r+Nt,o=s+Nt;if(t==="level"){const c=Fo(n.i,n.k);if(c.mx<-.2)return"För djupt vatten";if(Pi(n.i,n.k))return"Det är redan byggt här";if(c.mx-c.mn<.12)return"Redan plant";const l=n.i*Nt,u=n.k*Nt,f=l+Nt,d=u+Nt;for(const p of wn)if(p.x0<f&&p.x1>l&&p.z0<d&&p.z1>u)return"I vägen";for(const p of fn)if(p.x>l-.3&&p.x<f+.3&&p.z>u-.3&&p.z<d+.3)return"Träd eller sten i vägen";return""}if(t==="floor"){const c=Fo(n.i,n.k);if(c.mx<-.2)return"För djupt vatten";if(n.y-c.mn>3.5)return"För högt över marken";if(c.mx-n.y>1.6)return"Marken är för hög här";for(const l of wn)if(l.x0<a&&l.x1>r&&l.z0<o&&l.z1>s)return"I vägen";for(const l of fn)if(l.x>r-.3&&l.x<a+.3&&l.z>s-.3&&l.z<o+.3)return"Träd eller sten i vägen"}if(t==="wall"){const c=ea[n.r],l=qr(n.i)+c[0],u=qr(n.k)+c[1];if($i(l,u)<-.3&&!Pi(n.i,n.k))return"För djupt vatten";for(const f of fn)if(Math.hypot(f.x-l,f.z-u)<f.r+.9)return"Träd eller sten i vägen";for(const f of wn)if(l>f.x0-.3&&l<f.x1+.3&&u>f.z0-.3&&u<f.z1+.3)return"I vägen"}if(t==="roof"){const c=ot.pieces.filter(u=>we[u.t].kind==="wall"&&[[n.i,n.k,0],[n.i,n.k,1],Ds(n.i,n.k,2),Ds(n.i,n.k,3)].some(f=>f[0]===u.i&&f[1]===u.k&&f[2]===u.r)),l=ot.pieces.some(u=>u.t==="tak"&&Math.abs(u.i-n.i)+Math.abs(u.k-n.k)===1);if(!c.length&&!l)return"Taket behöver en vägg under sig"}return""}function _x(){if(!zn){un.visible=!1;return}oe=xl(),un.geometry=Xc[oe.t],ko(oe,si),si.decompose(un.position,un.quaternion,un.scale),un.position.y+=.02;const n=vf(oe);Ho=!n,un.material=Ho?_f:mx,un.visible=!0;const t=gt("bWhy");t.textContent=n||we[oe.t].name+" – "+xf(we[oe.t].cost),t.style.color=n?"#ff8a7a":"#9fe8a6"}const xf=n=>Object.keys(n).length?Object.entries(n).map(([t,e])=>`${e} ${t}`).join(" + "):"gratis";function Mf(){oe=xl();const n=vf(oe);if(Ho=!n,!Ho){We("no"),Pe(n);return}if(we[oe.t].kind==="level"){ot.digs.push([oe.i,oe.k,oe.y,1]),Wc(oe.i,oe.k,oe.y,!0,!0),We("rip"),Pe("Marken jämnad"),Gn();return}const t=we[oe.t].cost;for(const e in t)ot[e]-=t[e];ot.pieces.push({t:oe.t,i:oe.i,k:oe.k,r:oe.r,y:oe.y}),oe.t==="golv"&&(ot.digs.push([oe.i,oe.k,oe.y]),Wc(oe.i,oe.k,oe.y,!0)),vl(),Rn(),Sf(),Gn(),We("place"),Pe("+"+we[oe.t].name)}function eh(){oe=xl(),ko(oe,si);const n=new D().setFromMatrixPosition(si);let t=null,e=2.2;for(const r of ot.pieces){ko(r,si),Zi.setFromMatrixPosition(si);const s=Math.hypot(Zi.x-n.x,Zi.z-n.z)+(we[r.t].kind===we[$e.t].kind?0:.8);s<e&&(e=s,t=r)}if(!t){Pe("Inget att riva");return}ot.pieces.splice(ot.pieces.indexOf(t),1);const i=we[t.t].cost;for(const r in i)ot[r]+=i[r];vl(),Rn(),Gn(),We("rip"),Pe("Rev "+we[t.t].name.toLowerCase())}const Ur=[];let Vo={};function vx(){const n=Zo(77),t=(s,a,o)=>{let c=0,l=0;for(;l<a&&c<a*60;){c++;const u=(n()-.5)*Ee*.8,f=(n()-.5)*Ee*.8,d=$i(u,f);o(u,f,d)&&(fn.some(p=>Math.hypot(p.x-u,p.z-f)<p.r+1.4)||wn.some(p=>u>p.x0-1&&u<p.x1+1&&f>p.z0-1&&f<p.z1+1)||Ur.some(p=>Math.hypot(p.x-u,p.z-f)<5)||(Ur.push({type:s,x:u,z:f,y:d,ry:n()*6.28,gone:0}),l++))}};t("log",8,(s,a,o)=>Math.hypot(s-de.x,a-de.z)<34&&o>.6),t("log",26,(s,a,o)=>o>.25&&o<9),t("scrap",4,(s,a,o)=>Math.hypot(s-de.x,a-de.z)<30&&o>.6),t("scrap",8,(s,a,o)=>o>.2&&o<2.5);const e=Oe([ht(It(new Ue(.22,.26,2.2,8).rotateZ(Math.PI/2),0,.24,0),"#8a6646"),ht(It(new Ue(.18,.2,1.6,7).rotateZ(Math.PI/2),.2,.62,.1,.5),"#9a7552"),ht(It(new Ue(.21,.21,.04,8).rotateZ(Math.PI/2),1.11,.24,0),"#d9b98a")]),i=Oe([ht(It(new Ot(.9,.5,.7),0,.25,0,.3),"#7b8189"),ht(It(new Ue(.28,.28,.7,10),.5,.35,.3),"#a0522d"),ht(It(new Ot(.6,.3,.5),-.3,.62,-.1,.9),"#5b6168"),ht(It(new Is(.3,.08,6,12).rotateX(Math.PI/2),-.5,.1,.4),"#2b2b2b")]);for(const[s,a]of[["log",e],["scrap",i]]){const o=Ur.filter(l=>l.type===s),c=new Po(a,ai,o.length);c.castShadow=!0,Jt.add(c),Vo[s]={m:c,list:o}}const r=new Ht(new ml(.22),new ir({color:"#ffc21a"}));r.visible=!1,Jt.add(r),Vo.marker=r,Ml()}function Ml(){for(const n of["log","scrap"]){const{m:t,list:e}=Vo[n];e.forEach((i,r)=>{Bo.set(0,i.ry,0),zo.setFromEuler(Bo),bo.setScalar(i.gone>0?0:1),Zi.set(i.x,i.y-.05,i.z),si.compose(Zi,zo,bo),t.setMatrixAt(r,si)}),t.instanceMatrix.needsUpdate=!0}bo.setScalar(1)}let En=null;function xx(n,t){let e=!1;for(const a of Ur)a.gone>0&&(a.gone-=n,a.gone<=0&&(e=!0));e&&Ml(),En=null;let i=2.4;for(const a of Ur){if(a.gone>0)continue;const o=Math.hypot(a.x-vt.pos.x,a.z-vt.pos.z);o<i&&(i=o,En=a)}const r=Vo.marker;r.visible=!!En&&!zn,En&&(r.position.set(En.x,En.y+1.6+Math.sin(t*3)*.12,En.z),r.rotation.y=t*2);const s=gt("bAct");if(gt("bBuild").style.display=ne.on||Vn?"none":"block",Vn){s.style.display="none";return}zn?(s.style.display="block",s.textContent="Placera"):typeof Ai<"u"&&Ai?(s.style.display="block",s.textContent=Ai.label):ne.on?s.style.display="none":En?(s.style.display="block",s.textContent=En.type==="log"?"Plocka virke":"Plocka skrot"):s.style.display="none"}function yf(){if(!En)return;const n=En;n.type==="log"?(ot.virke+=2,ot.picked+=2,Pe("+2 virke")):(ot.skrot+=1,Pe("+1 skrot")),n.gone=120,Ml(),Rn(),Sf(),Gn(),We("pick")}const Rr=[{txt:"Plocka 10 virke",ok:()=>ot.picked>=10},{txt:"Lägg 4 golv",ok:()=>Va("floor")>=4},{txt:"Bygg 6 väggar (en med dörr)",ok:()=>Va("wall")>=6&&ot.pieces.some(n=>n.t==="dorr")},{txt:"Lägg tak över bygget",ok:()=>Va("roof")>=2}],Va=n=>ot.pieces.filter(t=>we[t.t].kind===n).length;function Sf(){for(;ot.obj<Rr.length&&Rr[ot.obj].ok();)ot.obj++,ot.obj<Rr.length?Pe("Klart! Nästa: "+Rr[ot.obj].txt,2600):Pe("Första bygget står klart! 🎉",3500),We("done");na()}function na(){const n=gt("obj"),t=typeof Wr=="function"?Wr():null;n.innerHTML=(ot.obj<Rr.length?"<b>Första bygget</b>"+Rr.map((e,i)=>`<div class="${i<ot.obj?"done":i===ot.obj?"now":""}">${i<ot.obj?"✓":i===ot.obj?"›":"·"} ${e.txt}</div>`).join(""):'<b>Första bygget</b><div class="done">✓ Klart</div>')+'<b style="display:block;margin-top:6px">Jobb</b>'+(t?ot.jobOn?`<div class="now">› ${t.title}</div><div>${t.where}</div>`:'<div class="now">› Prata med Sven på bryggan</div>':'<div class="done">✓ Alla jobb klara</div>')}const Mx="/varvet/ui/",Yi=(n,t="ico")=>`<img class="${t}" src="${Mx}it_${n}.png" alt="">`;function Rn(){gt("res").innerHTML=`<span>${Yi("virke")}${ot.virke}</span><span>${Yi("skrot")}${ot.skrot}</span><span>${Yi("kr")}${ot.kr} kr</span><span>${Yi("rykte")}${ot.rykte||0}</span>`,document.querySelectorAll("#bar .pc[data-t]").forEach(n=>{const t=we[n.dataset.t],e=Object.entries(t.cost).every(([i,r])=>ot[i]>=r);n.classList.toggle("on",n.dataset.t===$e.t),n.classList.toggle("dim",!e)})}let nh=0;function Pe(n,t=1400){const e=gt("pop");e.textContent=n,e.style.opacity=1,clearTimeout(nh),nh=setTimeout(()=>e.style.opacity=0,t)}let Mr=null;function We(n){try{Mr=Mr||new(window.AudioContext||window.webkitAudioContext);const t=Mr.currentTime,e=Mr.createOscillator(),i=Mr.createGain();e.connect(i),i.connect(Mr.destination);const r={pick:[520,780,.12],place:[180,120,.16],rip:[140,70,.18],no:[200,160,.12],done:[523,1046,.35],tick:[70,55,.05]}[n];e.type=n==="place"||n==="rip"?"square":"triangle",e.frequency.setValueAtTime(r[0],t),e.frequency.exponentialRampToValueAtTime(r[1],t+r[2]),i.gain.setValueAtTime(.08,t),i.gain.exponentialRampToValueAtTime(.001,t+r[2]+.05),e.start(t),e.stop(t+r[2]+.06)}catch{}}function Gn(){try{localStorage.setItem("varvet_save",JSON.stringify({v:1,virke:ot.virke,skrot:ot.skrot,picked:ot.picked,obj:ot.obj,pieces:ot.pieces,digs:ot.digs,kr:ot.kr,job:ot.job,jobOn:ot.jobOn,life:ot.life,rykte:ot.rykte||0,px:vt.pos.x,pz:vt.pos.z}))}catch{}}function yx(){try{const n=JSON.parse(localStorage.getItem("varvet_save")||"null");if(!n)return;Object.assign(ot,{virke:n.virke,skrot:n.skrot,picked:n.picked||0,obj:n.obj||0,pieces:n.pieces||[],digs:n.digs||[],kr:n.kr||0,job:n.job||0,jobOn:n.jobOn||0,life:n.life||null,rykte:n.rykte||0}),n.px!=null&&(vt.pos.x=n.px,vt.pos.z=n.pz)}catch{}}function qc(){zn?Mf():Ai?Ai.fn():yf()}function Yc(n){n&&(ne.on||Me)||(zn=n,n&&(gt("hint").style.opacity=0),gt("bar").style.display=n?"flex":"none",gt("bBuild").innerHTML=n?"Klar":`${Yi("verktyg","icob")}Bygg`,gt("bBuild").classList.toggle("acc",n),gt("bWhy").style.display=n?"block":"none",n&&(Qt.tPitch=Math.max(Qt.tPitch,.55)),Rn())}function Sx(){const n=gt("bar");n.innerHTML=Xr.map(t=>`<button class="pc" data-t="${t}"><i>${{golv:"▭",vagg:"▮",fonster:"▣",dorr:"⌂",tak:"◭",jamna:"⛏"}[t]}</i>${we[t].name}<small>${xf(we[t].cost).replace(/virke/g,Yi("virke","icos")).replace(/skrot/g,Yi("skrot","icos"))}</small></button>`).join("")+'<button class="pc" id="bRot"><i>↻</i>Vrid</button><button class="pc" id="bRip"><i>✕</i>Riv</button>',n.querySelectorAll(".pc[data-t]").forEach(t=>t.onclick=()=>{$e.t=t.dataset.t,$e.r=0,Rn()}),gt("bRot").onclick=()=>{$e.r=($e.r+1)%4},gt("bRip").onclick=eh,gt("bBuild").onclick=()=>Yc(!zn),gt("dlgNext").onclick=()=>Gc(!0),gt("dlgNo").onclick=Kv,gt("gX").onclick=()=>Qo(!1),gt("bAct").onclick=qc,addEventListener("keydown",t=>{ji&&(t.code==="KeyB"&&Yc(!zn),t.code==="KeyR"&&($e.r=($e.r+1)%4),t.code==="KeyX"&&zn&&eh(),(t.code==="Space"||t.code==="KeyF")&&(t.preventDefault(),Vn?Gc():qc()),zn&&/^Digit[1-5]$/.test(t.code)&&($e.t=Xr[+t.code.slice(5)-1],Rn()))}),na()}setInterval(()=>{ji&&Gn()},5e3);const yl=6*60,Sl=22*60,Ex=24*60,bx=(Sl-yl)/600,ci=18,El=["Vår","Sommar","Höst","Vinter"],bl=["Mån","Tis","Ons","Tor","Fre","Lör","Sön"],Yr={sol:{name:"Sol",icon:"☀️",cloud:0,sun:1,fog:[110,460],rain:0,wind:1,info:"Bra dag för allt arbete"},moln:{name:"Molnigt",icon:"⛅",cloud:.45,sun:.7,fog:[90,400],rain:0,wind:1.1,info:"Grått men lugnt"},regn:{name:"Regn",icon:"🌧️",cloud:.8,sun:.45,fog:[60,300],rain:1,wind:1.3,info:"Måla inte utomhus"},dimma:{name:"Dimma",icon:"🌫️",cloud:.7,sun:.5,fog:[12,120],rain:0,wind:.7,info:"Svårt att hitta till sjöss"},blast:{name:"Blåsigt",icon:"💨",cloud:.3,sun:.85,fog:[100,440],rain:0,wind:2,info:"Höga vågor för små båtar"},storm:{name:"Storm",icon:"⛈️",cloud:1,sun:.3,fog:[40,220],rain:2,wind:3,info:"Stanna i land"}},wx=[[.35,.25,.15,.12,.1,.03],[.5,.2,.1,.05,.12,.03],[.2,.25,.2,.12,.15,.08],[.2,.3,.15,.15,.12,.08]],Ef={virke:30,skrot:20},Tx=[{s:0,d:12,name:"Båtmässan i Kvarnvik"},{s:1,d:3,name:"Midsommar på Grannön"},{s:1,d:12,name:"Regattan"},{s:2,d:5,name:"Skaldjursfest"},{s:3,d:8,name:"Lucia"},{s:3,d:14,name:"Julmarknad"}];let St=null;const Ss=()=>Math.random();function Ki(n){const t=Math.floor(n/ci)%4,e=wx[t];let i=Ss(),r=0;for(;r<e.length-1&&(i-=e[r],!(i<0));r++);return Object.keys(Yr)[r]}function Ax(){return{day:0,min:yl,wx:"sol",fc:[Ki(1),Ki(2),Ki(3)],price:{virke:1,skrot:1},prev:{virke:1,skrot:1},orders:{virke:0,skrot:0},delivery:null,warned:!1}}function Rx(){St=ot.life||Ax(),ot.life=St,St.fc||(St.fc=[Ki(St.day+1),Ki(St.day+2),Ki(St.day+3)]),Ox(),Bx(),Vx(),of.push(n=>{n.push({x:4,z:39.4,r:2.4,label:St.min>=18*60?"Sova i boden":"Vila till i morgon",fn:()=>Tf(!1)}),St.delivery&&n.push({x:14,z:60,r:2.6,label:"Hämta leverans",fn:kx})}),Af(),Rf()}const Cx=()=>St;function ia(){return Math.floor(St.day/ci)%4}const bf=n=>`<img class="wxi" src="/varvet/ui/wx_${n}.png" alt="${Yr[n].name}">`,Px=n=>`${String(Math.floor(n/60)%24).padStart(2,"0")}:${String(Math.floor(n%60)).padStart(2,"0")}`;function wf(n=St.day){return`${bl[n%7]} · ${El[Math.floor(n/ci)%4]} dag ${n%ci+1}, år ${Math.floor(n/(ci*4))+1}`}let Ga=0;function Lx(n){if(!St)return;Vn||Me||Vi||wo||(St.min+=n*bx,!St.warned&&St.min>=Sl&&(St.warned=!0,Pe("Klockan är tio på kvällen – dags att sova",3200)),St.min>=Ex&&Tf(!0)),Fx(n),zx(n),Ga-=n,Ga<=0&&(Ga=1,Rf())}let wo=!1;function Tf(n){if(!wo){if(ne.on&&!n){Pe("Lägg till vid en brygga först");return}wo=!0,ff(()=>{if(wo=!1,n){const t=Math.min(ot.kr,150);ot.kr-=t,Pe(t?`Du somnade utomhus och vaknade stel och frusen (−${t} kr för värktabletter och kaffe)`:"Du somnade utomhus och vaknade stel och frusen",4200)}Dx(),vt.pos.set(4,1.3,41),vt.yaw=0,Qt.tYaw=Qt.yaw=0,Rn(),Gn(),setTimeout(()=>Pe(`${wf()} · ${Yr[St.wx].name}`,3600),n?4400:300)})}}function Dx(){St.day++,St.min=yl,St.warned=!1,St.wx=St.fc.shift(),St.fc.push(Ki(St.day+3)),St.prev={...St.price};const n=ia();for(const t of Object.keys(Ef)){const e=(Ss()-.5)*.16+(1-St.price[t])*.25;St.price[t]=Math.min(1.35,Math.max(.75,St.price[t]+e+(n===3?.02:0)))}(St.orders.virke||St.orders.skrot)&&(St.delivery={...St.orders},St.orders={virke:0,skrot:0}),Af()}function $c(n){return Math.round(Ef[n]*St.price[n])}const ho={day:[new At("#4f9ad6"),new At("#9fd0ea"),new At("#bfdced")],dusk:[new At("#5b6aa6"),new At("#f2a77c"),new At("#f5cba5")],night:[new At("#0d1830"),new At("#1f3155"),new At("#2a3a5a")],grey:[new At("#7f8c99"),new At("#aab4bd"),new At("#c3c9cf")]},yr=[new At,new At,new At],Ix=new At("#ffe8c4"),Ux=new At("#ff9d5c"),Nx=new At("#a9bde0");let fo=null,He={cloud:0,sun:1,fogN:110,fogF:460,rain:0,wind:1};function Af(n){const t=Yr[St.wx],e={cloud:t.cloud,sun:t.sun,fogN:t.fog[0],fogF:t.fog[1],rain:t.rain,wind:t.wind};He=e,jc=e}let jc=He;function Fx(n){for(const l in jc)He[l]+=(jc[l]-He[l])*Math.min(1,n*.5);const t=Math.min(1,Math.max(0,(St.min-300)/1080)),e=Math.sin(Math.PI*t),i=-1.9+3.8*t,r=Math.min(1,Math.max(0,(e-.02)/.25)),s=Math.exp(-Math.pow((e-.12)/.12,2))*(1-He.cloud*.8),a=Jt.userData.sky.material.uniforms;for(let l=0;l<3;l++)yr[l].copy(ho.night[l]).lerp(ho.day[l],r).lerp(ho.dusk[l],s*.85).lerp(ho.grey[l],He.cloud*.75*(.3+.7*r));a.top.value.copy(yr[0]),a.mid.value.copy(yr[1]),a.bot.value.copy(yr[2]),Jt.fog.color.copy(yr[2]),Jt.fog.near=He.fogN,Jt.fog.far=He.fogF;const o=vt.pos,c=Math.cos(Math.asin(Math.min(1,e)));if(r>0?(pe.position.set(o.x+Math.cos(i)*c*100,o.y+Math.max(.15,e)*100,o.z+Math.sin(i)*c*100),pe.color.copy(Ux).lerp(Ix,Math.min(1,e*2.2)),pe.intensity=(.4+1.8*r)*He.sun):(pe.position.set(o.x-40,o.y+90,o.z+30),pe.color.copy(Nx),pe.intensity=.35),pe.target.position.copy(o),Fc.intensity=(.35+.95*r)*(1-He.cloud*.15),Fc.color.copy(yr[1]).lerp(new At("#ffffff"),.5),Ti){const l=Ti.material.uniforms;fo||(fo={deep:l.deep.value.clone(),shallow:l.shallow.value.clone()});const u=.35+.65*r;l.deep.value.copy(fo.deep).multiplyScalar(u*(1-He.cloud*.25)),l.shallow.value.copy(fo.shallow).multiplyScalar(u*(1-He.cloud*.2)),l.amp&&(l.amp.value=He.wind)}}let ii=null;function Ox(){const t=new Float32Array(10800),e=new Float32Array(1800*2);for(let s=0;s<1800;s++){const a=(Ss()-.5)*60,o=Ss()*30,c=(Ss()-.5)*60;for(let l=0;l<2;l++)t.set([a,o,c],(s*2+l)*3),e[s*2+l]=l}const i=new Xe;i.setAttribute("position",new Te(t,3)),i.setAttribute("tip",new Te(e,1));const r=new _n({transparent:!0,depthWrite:!1,uniforms:{t:{value:0},cam:{value:new D},snow:{value:0},op:{value:0}},vertexShader:`uniform float t, snow; uniform vec3 cam; attribute float tip;
      void main(){ vec3 p = position; float sp = mix(24.0, 2.2, snow);
        p.y = mod(p.y - t * sp, 30.0); p.x += snow * sin(t * 1.3 + position.z) * 0.8;
        vec3 w = vec3(cam.x + mod(p.x - cam.x + 30.0, 60.0) - 30.0, cam.y - 8.0 + p.y, cam.z + mod(p.z - cam.z + 30.0, 60.0) - 30.0);
        w.y -= tip * mix(0.9, 0.08, snow); w.x += tip * 0.15;
        gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0); }`,fragmentShader:"uniform float op, snow; void main(){ gl_FragColor = vec4(mix(vec3(.78,.85,.92), vec3(1.0), snow), op); }"});ii=new F_(i,r),ii.frustumCulled=!1,ii.renderOrder=4,Jt.add(ii)}function zx(n){if(!ii)return;const t=ii.material.uniforms;t.t.value+=n,t.cam.value.copy(An.position),t.snow.value=ia()===3?1:0;const e=He.rain>.05?Math.min(.55,.25*He.rain+.1):0;t.op.value+=(e-t.op.value)*Math.min(1,n*.8),ii.visible=t.op.value>.01,ii.geometry.setDrawRange(0,Math.floor((He.rain>1.5?1:.55)*ii.geometry.attributes.position.count))}let xi=null;function Bx(){xi=new On;const n=new Ht(new Ot(1.2,.8,.9),new pn({color:"#a47c52"}));n.position.y=.4,xi.add(n);const t=new Ht(new Ot(1.25,.08,.95),new pn({color:"#7a5136"}));t.position.y=.82,xi.add(t),xi.position.set(15.3,1.45,60.5),xi.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),Jt.add(xi)}function kx(){const n=St.delivery;n&&(ot.virke+=n.virke,ot.skrot+=n.skrot,St.delivery=null,Rn(),Gn(),We("pick"),Pe(`Leverans hämtad: ${n.virke?n.virke+" virke ":""}${n.skrot?n.skrot+" skrot":""}`,2400))}function Hx(){xi&&(xi.visible=!!(St&&St.delivery))}let Vi=!1,To="shop",ni={virke:0,skrot:0};function Vx(){gt("bPhone").onclick=()=>{Vi=!Vi,gt("phone").style.display=Vi?"flex":"none",Vi&&(ni={virke:0,skrot:0},po())},gt("phX").onclick=()=>{Vi=!1,gt("phone").style.display="none"},document.querySelectorAll("#phTabs button").forEach(n=>n.onclick=()=>{To=n.dataset.t,po()}),gt("phBody").onclick=n=>{const t=n.target.closest("button");if(t){if(t.dataset.add){const[e,i]=t.dataset.add.split(":");ni[e]=Math.max(0,ni[e]+ +i),po()}if(t.dataset.buy){const e=Zc();if(!e)return;if(e>ot.kr){Pe("Inte tillräckligt med pengar"),We("no");return}ot.kr-=e,St.orders.virke+=ni.virke,St.orders.skrot+=ni.skrot,ni={virke:0,skrot:0},Rn(),Gn(),We("place"),Pe("Beställt – levereras till bryggan i morgon bitti",2600),po()}}}}const Zc=()=>ni.virke*$c("virke")+ni.skrot*$c("skrot");function Gx(n){const t=St.price[n]-St.prev[n];return Math.abs(t)<.01?"→":t>0?"↑":"↓"}function po(){document.querySelectorAll("#phTabs button").forEach(t=>t.classList.toggle("on",t.dataset.t===To));const n=gt("phBody");if(To==="shop"){const t=(r,s,a)=>`<div class="phRow"><img class="phIt" src="/varvet/ui/it_${r}.png" alt=""><div style="flex:1"><b>${s}</b><small>${$c(r)} kr/${a} ${Gx(r)}</small></div>
      <div class="phQty"><button data-add="${r}:-5">−5</button><span>${ni[r]}</span><button data-add="${r}:5">+5</button><button data-add="${r}:10">+10</button></div></div>`,e=St.orders.virke||St.orders.skrot?`<p class="phNote">Beställt till i morgon: ${St.orders.virke} virke, ${St.orders.skrot} skrot</p>`:"",i=St.delivery?'<p class="phNote">En leverans väntar vid bryggan</p>':"";n.innerHTML=`<h3>Kvarnviks Järn &amp; Trä</h3>${t("virke","Virke","st")}${t("skrot","Skrot och beslag","st")}
      <div class="phTot">Summa <b>${Zc()} kr</b> · Saldo ${ot.kr} kr</div><button class="btn acc" data-buy="1" ${Zc()?"":"disabled"}>Beställ – levereras 07:00 i morgon</button>${e}${i}
      <p class="phNote">Priserna ändras varje dag. Köp när pilen pekar nedåt.</p>`}else if(To==="wx"){const t=(e,i,r)=>`<div class="phWx"><span>${bf(i)}</span><div><b>${r}</b><small>${Yr[i].name} – ${Yr[i].info}</small></div></div>`;n.innerHTML=`<h3>Väder</h3>${t(St.day,St.wx,"I dag")}${St.fc.map((e,i)=>t(St.day+i+1,e,bl[(St.day+i+1)%7])).join("")}`}else{const t=ia(),e=St.day%ci,i=Tx.map(r=>{let s=(r.s-t)*ci+(r.d-1-e);return s<0&&(s+=ci*4),{...r,in:s}}).sort((r,s)=>r.in-s.in);n.innerHTML=`<h3>Kalender</h3><p class="phNote">${wf()}</p>${i.map(r=>`<div class="phRow"><div><b>${r.name}</b><small>${El[r.s]} dag ${r.d}</small></div><span>${r.in===0?"i dag":"om "+r.in+" d"}</span></div>`).join("")}`}}function Rf(){St&&(gt("clock").innerHTML=`${bl[St.day%7]} ${Px(St.min)} · ${El[ia()]} ${St.day%ci+1} ${bf(St.wx)}`,gt("clock").classList.toggle("late",St.min>=Sl))}const Wx=()=>Vi,Es=[],Xx=Math.random().toString(36).slice(2,10);let mo=[],ih=performance.now(),Wa="";function qx(){const n=window.SBCFG;return n&&n.url&&n.key?n:null}function Yx(){try{for(let n=0;n<localStorage.length;n++){const t=localStorage.key(n)||"";if(t.startsWith("sb-")&&t.endsWith("-auth-token")){const e=JSON.parse(localStorage.getItem(t)||"null");if(e&&e.access_token)return e.access_token}}}catch{}return null}function Ao(n,t){Es.push({kind:n,data:t}),Es.length>50&&Es.shift()}function $x(n,t){try{const e=n&&n.getExtension("WEBGL_debug_renderer_info");Wa=e&&n?String(n.getParameter(e.UNMASKED_RENDERER_WEBGL)):""}catch{Wa=""}Ao("session",{ua:navigator.userAgent,w:screen.width,h:screen.height,dpr:devicePixelRatio,gpu:Wa,backend:t,cores:navigator.hardwareConcurrency||0}),window.addEventListener("error",e=>Ao("error",{msg:String(e.message),src:`${e.filename}:${e.lineno}:${e.colno}`,stack:e.error&&e.error.stack?String(e.error.stack).slice(0,1500):""})),window.addEventListener("unhandledrejection",e=>Ao("error",{msg:"promise: "+String(e.reason&&e.reason.message||e.reason).slice(0,500)})),window.addEventListener("pagehide",()=>rh(!0)),setInterval(()=>rh(!1),6e4)}function jx(n,t){if(n>0&&n<1&&mo.push(n),performance.now()-ih>6e4&&mo.length>30){const e=mo.slice().sort((s,a)=>s-a),i=e.reduce((s,a)=>s+a,0)/e.length,r=e[Math.min(e.length-1,Math.floor(e.length*.99))];Ao("perf",{fps:+(1/i).toFixed(1),low1:+(1/r).toFixed(1),frames:e.length,...t}),mo=[],ih=performance.now()}}function rh(n){const t=qx();if(!t||!Es.length)return;const e=Es.splice(0).map(r=>({session:Xx,kind:r.kind,data:r.data})),i={"Content-Type":"application/json",apikey:t.key,Authorization:"Bearer "+(Yx()||t.key),Prefer:"return=minimal"};try{fetch(t.url+"/rest/v1/varvet_telemetry",{method:"POST",headers:i,body:JSON.stringify(e),keepalive:n}).catch(()=>{})}catch{}}let sh=performance.now();function Cf(n){requestAnimationFrame(Cf);const t=1e3/Re.fps-1.5,e=n-sh;if(e<t)return;const i=Math.min(.05,e/1e3);sh=n;const r=performance.now();ji&&(af(i),xx(i,n/1e3),Zv(n/1e3),Lx(i)),Hx();const s=n/1e3;Ti.material.uniforms.t.value=s,Kt&&(Kt.position.y=.5+Math.sin(s*1.3)*.08,Kt.rotation.z=Math.sin(s*1.1)*.04);const a=Jt.userData.flag;if(a&&(a.rotation.y=Math.sin(s*1.7)*.25),!ji){Qt.tYaw+=i*.08,Qt.yaw=Qt.tYaw;const o=60,c=Math.sin(s*.05)*o,l=50+Math.cos(s*.05)*o;An.position.set(c,22,l),An.lookAt(0,2,36),Jt.userData.sky.position.copy(An.position)}Fv(),Ov(i,performance.now()-r),ji&&(Iv(e/1e3),jx(e/1e3,{...Nc(),q:Re.q,goal:Re.fps}))}function Zx(){hx(Hv()),Vv(),Wv(),Gv(Dn),yx(),$v(),fx(),Sx(),Rx(),vt.pos.y=$i(vt.pos.x,vt.pos.z),Qh(),$x(Ze.getContext(),"webgl2"),gt("loading").remove(),requestAnimationFrame(Cf),window.__ready=!0}window.VARVET={life:()=>Cx(),player:vt,camS:Qt,input:mn,SET:Re,renderer:Ze,scene:Jt,update:af,act:qc,dlgNext:Gc,BOATM:ne,JOBS:Hc,startGame:uf,endGame:Qo,jobState:Wr,get nearI(){return Ai},get GAMEON(){return Me},get NJ(){return Ce},bobBoat:()=>Kt,ST:ot,setBuild:Yc,place:Mf,gather:yf,cur:$e,NODES:Ur,start:()=>gt("bPlay").onclick()};setTimeout(Zx,30);
