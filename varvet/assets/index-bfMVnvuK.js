var om=Object.defineProperty;var am=(i,e,t)=>e in i?om(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Fi=(i,e,t)=>am(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ru="170",cm=0,bh=1,lm=2,yf=1,Mf=2,Mi=3,Li=0,on=1,qt=2,Qi=0,pr=1,Eh=2,wh=3,Th=4,um=5,xs=100,hm=101,dm=102,fm=103,pm=104,mm=200,gm=201,_m=202,vm=203,gl=204,_l=205,xm=206,ym=207,Mm=208,Sm=209,bm=210,Em=211,wm=212,Tm=213,Am=214,vl=0,xl=1,yl=2,Sr=3,Ml=4,Sl=5,bl=6,El=7,Cu=0,Rm=1,Cm=2,es=0,Pm=1,Im=2,Lm=3,Sf=4,Dm=5,Nm=6,Um=7,Ah="attached",Fm="detached",bf=300,br=301,Er=302,wl=303,Tl=304,tc=306,Ns=1e3,Yi=1001,Ba=1002,an=1003,Ef=1004,oo=1005,rn=1006,Ea=1007,wi=1008,Di=1009,wf=1010,Tf=1011,Eo=1012,Pu=1013,Us=1014,Xn=1015,Br=1016,Iu=1017,Lu=1018,wr=1020,Af=35902,Rf=1021,Cf=1022,Pn=1023,Pf=1024,If=1025,mr=1026,Tr=1027,Du=1028,Nu=1029,Lf=1030,Uu=1031,Fu=1033,wa=33776,Ta=33777,Aa=33778,Ra=33779,Al=35840,Rl=35841,Cl=35842,Pl=35843,Il=36196,Ll=37492,Dl=37496,Nl=37808,Ul=37809,Fl=37810,Ol=37811,kl=37812,Bl=37813,zl=37814,Hl=37815,Vl=37816,Gl=37817,Wl=37818,Xl=37819,jl=37820,ql=37821,Ca=36492,Yl=36494,Kl=36495,Df=36283,$l=36284,Zl=36285,Jl=36286,Om=2200,km=2201,Bm=2202,wo=2300,To=2301,Mc=2302,ar=2400,cr=2401,za=2402,Ou=2500,zm=2501,Hm=0,Nf=1,Ql=2,Vm=3200,Gm=3201,ku=0,Wm=1,ji="",Bt="srgb",un="srgb-linear",nc="linear",xt="srgb",Vs=7680,Rh=519,Xm=512,jm=513,qm=514,Uf=515,Ym=516,Km=517,$m=518,Zm=519,eu=35044,Ch="300 es",Ti=2e3,Ha=2001;class Bs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ph=1234567;const mo=Math.PI/180,Ar=180/Math.PI;function Ln(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function zt(i,e,t){return Math.max(e,Math.min(t,i))}function Bu(i,e){return(i%e+e)%e}function Jm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Qm(i,e,t){return i!==e?(t-i)/(e-i):0}function go(i,e,t){return(1-t)*i+t*e}function eg(i,e,t,n){return go(i,e,1-Math.exp(-t*n))}function tg(i,e=1){return e-Math.abs(Bu(i,e*2)-e)}function ng(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ig(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function sg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function rg(i,e){return i+Math.random()*(e-i)}function og(i){return i*(.5-Math.random())}function ag(i){i!==void 0&&(Ph=i);let e=Ph+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cg(i){return i*mo}function lg(i){return i*Ar}function ug(i){return(i&i-1)===0&&i!==0}function hg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function dg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function fg(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Vn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const pg={DEG2RAD:mo,RAD2DEG:Ar,generateUUID:Ln,clamp:zt,euclideanModulo:Bu,mapLinear:Jm,inverseLerp:Qm,lerp:go,damp:eg,pingpong:tg,smoothstep:ng,smootherstep:ig,randInt:sg,randFloat:rg,randFloatSpread:og,seededRandom:ag,degToRad:cg,radToDeg:lg,isPowerOfTwo:ug,ceilPowerOfTwo:hg,floorPowerOfTwo:dg,setQuaternionFromProperEuler:fg,normalize:gt,denormalize:Vn};class te{constructor(e=0,t=0){te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,n,s,r,o,a,c,l){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],y=s[1],S=s[4],v=s[7],P=s[2],w=s[5],T=s[8];return r[0]=o*_+a*y+c*P,r[3]=o*m+a*S+c*w,r[6]=o*p+a*v+c*T,r[1]=l*_+u*y+h*P,r[4]=l*m+u*S+h*w,r[7]=l*p+u*v+h*T,r[2]=d*_+f*y+g*P,r[5]=d*m+f*S+g*w,r[8]=d*p+f*v+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*l-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Sc.makeScale(e,t)),this}rotate(e){return this.premultiply(Sc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Sc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sc=new Je;function Ff(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ao(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function mg(){const i=Ao("canvas");return i.style.display="block",i}const Ih={};function ao(i){i in Ih||(Ih[i]=!0,console.warn(i))}function gg(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function _g(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vg(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const st={enabled:!0,workingColorSpace:un,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===xt&&(i.r=Ci(i.r),i.g=Ci(i.g),i.b=Ci(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===xt&&(i.r=gr(i.r),i.g=gr(i.g),i.b=gr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ji?nc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Lh=[.64,.33,.3,.6,.15,.06],Dh=[.2126,.7152,.0722],Nh=[.3127,.329],Uh=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fh=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);st.define({[un]:{primaries:Lh,whitePoint:Nh,transfer:nc,toXYZ:Uh,fromXYZ:Fh,luminanceCoefficients:Dh,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:Lh,whitePoint:Nh,transfer:xt,toXYZ:Uh,fromXYZ:Fh,luminanceCoefficients:Dh,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}});let Gs;class xg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gs===void 0&&(Gs=Ao("canvas")),Gs.width=e.width,Gs.height=e.height;const n=Gs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ao("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ci(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ci(t[n]/255)*255):t[n]=Ci(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yg=0;class Of{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=Ln(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(bc(s[o].image)):r.push(bc(s[o]))}else r=bc(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function bc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mg=0;class Vt extends Bs{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,n=Yi,s=Yi,r=rn,o=wi,a=Pn,c=Di,l=Vt.DEFAULT_ANISOTROPY,u=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=Ln(),this.name="",this.source=new Of(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ns:e.x=e.x-Math.floor(e.x);break;case Yi:e.x=e.x<0?0:1;break;case Ba:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ns:e.y=e.y-Math.floor(e.y);break;case Yi:e.y=e.y<0?0:1;break;case Ba:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=bf;Vt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,s=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,v=(f+1)/2,P=(p+1)/2,w=(u+d)/4,T=(h+_)/4,C=(g+m)/4;return S>v&&S>P?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=w/n,r=T/n):v>P?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=C/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=T/r,s=C/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-_)/y,this.z=(d-u)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sg extends Bs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Vt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Of(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class is extends Sg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class kf extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bg extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==f||u!==g){let m=1-a;const p=c*d+l*f+u*g+h*_,y=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const P=Math.sqrt(S),w=Math.atan2(P,p*y);m=Math.sin(m*w)/P,a=Math.sin(a*w)/P}const v=a*y;if(c=c*m+d*v,l=l*m+f*v,u=u*m+g*v,h=h*m+_*v,m===1-a){const P=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=P,l*=P,u*=P,h*=P}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-a*f,e[t+2]=l*g+u*f+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Oh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Oh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ec.copy(this).projectOnVector(e),this.sub(Ec)}reflect(e){return this.sub(Ec.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ec=new I,Oh=new cn;class Mn{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(r,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ho.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ho.copy(n.boundingBox)),Ho.applyMatrix4(e.matrixWorld),this.union(Ho)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qr),Vo.subVectors(this.max,qr),Ws.subVectors(e.a,qr),Xs.subVectors(e.b,qr),js.subVectors(e.c,qr),Oi.subVectors(Xs,Ws),ki.subVectors(js,Xs),os.subVectors(Ws,js);let t=[0,-Oi.z,Oi.y,0,-ki.z,ki.y,0,-os.z,os.y,Oi.z,0,-Oi.x,ki.z,0,-ki.x,os.z,0,-os.x,-Oi.y,Oi.x,0,-ki.y,ki.x,0,-os.y,os.x,0];return!wc(t,Ws,Xs,js,Vo)||(t=[1,0,0,0,1,0,0,0,1],!wc(t,Ws,Xs,js,Vo))?!1:(Go.crossVectors(Oi,ki),t=[Go.x,Go.y,Go.z],wc(t,Ws,Xs,js,Vo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fi=[new I,new I,new I,new I,new I,new I,new I,new I],On=new I,Ho=new Mn,Ws=new I,Xs=new I,js=new I,Oi=new I,ki=new I,os=new I,qr=new I,Vo=new I,Go=new I,as=new I;function wc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){as.fromArray(i,r);const a=s.x*Math.abs(as.x)+s.y*Math.abs(as.y)+s.z*Math.abs(as.z),c=e.dot(as),l=t.dot(as),u=n.dot(as);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Eg=new Mn,Yr=new I,Tc=new I;class ai{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Eg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yr.subVectors(e,this.center);const t=Yr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Yr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yr.copy(e.center).add(Tc)),this.expandByPoint(Yr.copy(e.center).sub(Tc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pi=new I,Ac=new I,Wo=new I,Bi=new I,Rc=new I,Xo=new I,Cc=new I;class ic{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ac.copy(e).add(t).multiplyScalar(.5),Wo.copy(t).sub(e).normalize(),Bi.copy(this.origin).sub(Ac);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Wo),a=Bi.dot(this.direction),c=-Bi.dot(Wo),l=Bi.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ac).addScaledVector(Wo,d),f}intersectSphere(e,t){pi.subVectors(e.center,this.origin);const n=pi.dot(this.direction),s=pi.dot(pi)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,n,s,r){Rc.subVectors(t,e),Xo.subVectors(n,e),Cc.crossVectors(Rc,Xo);let o=this.direction.dot(Cc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bi.subVectors(this.origin,e);const c=a*this.direction.dot(Xo.crossVectors(Bi,Xo));if(c<0)return null;const l=a*this.direction.dot(Rc.cross(Bi));if(l<0||c+l>o)return null;const u=-a*Bi.dot(Cc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ge{constructor(e,t,n,s,r,o,a,c,l,u,h,d,f,g,_,m){Ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,h,d,f,g,_,m)}set(e,t,n,s,r,o,a,c,l,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ge().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/qs.setFromMatrixColumn(e,0).length(),r=1/qs.setFromMatrixColumn(e,1).length(),o=1/qs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wg,e,Tg)}lookAt(e,t,n){const s=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),zi.crossVectors(n,mn),zi.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),zi.crossVectors(n,mn)),zi.normalize(),jo.crossVectors(mn,zi),s[0]=zi.x,s[4]=jo.x,s[8]=mn.x,s[1]=zi.y,s[5]=jo.y,s[9]=mn.y,s[2]=zi.z,s[6]=jo.z,s[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],S=n[7],v=n[11],P=n[15],w=s[0],T=s[4],C=s[8],M=s[12],x=s[1],R=s[5],O=s[9],N=s[13],B=s[2],q=s[6],V=s[10],J=s[14],G=s[3],ue=s[7],xe=s[11],Te=s[15];return r[0]=o*w+a*x+c*B+l*G,r[4]=o*T+a*R+c*q+l*ue,r[8]=o*C+a*O+c*V+l*xe,r[12]=o*M+a*N+c*J+l*Te,r[1]=u*w+h*x+d*B+f*G,r[5]=u*T+h*R+d*q+f*ue,r[9]=u*C+h*O+d*V+f*xe,r[13]=u*M+h*N+d*J+f*Te,r[2]=g*w+_*x+m*B+p*G,r[6]=g*T+_*R+m*q+p*ue,r[10]=g*C+_*O+m*V+p*xe,r[14]=g*M+_*N+m*J+p*Te,r[3]=y*w+S*x+v*B+P*G,r[7]=y*T+S*R+v*q+P*ue,r[11]=y*C+S*O+v*V+P*xe,r[15]=y*M+S*N+v*J+P*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*h-s*l*h-r*a*d+n*l*d+s*a*f-n*c*f)+_*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*u-r*c*u)+m*(+t*l*h-t*a*f-r*o*h+n*o*f+r*a*u-n*l*u)+p*(-s*a*u-t*c*h+t*a*d+s*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=h*m*l-_*d*l+_*c*f-a*m*f-h*c*p+a*d*p,S=g*d*l-u*m*l-g*c*f+o*m*f+u*c*p-o*d*p,v=u*_*l-g*h*l+g*a*f-o*_*f-u*a*p+o*h*p,P=g*h*c-u*_*c-g*a*d+o*_*d+u*a*m-o*h*m,w=t*y+n*S+s*v+r*P;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=y*T,e[1]=(_*d*r-h*m*r-_*s*f+n*m*f+h*s*p-n*d*p)*T,e[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*T,e[3]=(h*c*r-a*d*r-h*s*l+n*d*l+a*s*f-n*c*f)*T,e[4]=S*T,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*T,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*T,e[7]=(o*d*r-u*c*r+u*s*l-t*d*l-o*s*f+t*c*f)*T,e[8]=v*T,e[9]=(g*h*r-u*_*r-g*n*f+t*_*f+u*n*p-t*h*p)*T,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*p+t*a*p)*T,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*f-t*a*f)*T,e[12]=P*T,e[13]=(u*_*s-g*h*s+g*n*d-t*_*d-u*n*m+t*h*m)*T,e[14]=(g*a*s-o*_*s-g*n*c+t*_*c+o*n*m-t*a*m)*T,e[15]=(o*h*s-u*a*s+u*n*c-t*h*c-o*n*d+t*a*d)*T,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,g=r*h,_=o*u,m=o*h,p=a*h,y=c*l,S=c*u,v=c*h,P=n.x,w=n.y,T=n.z;return s[0]=(1-(_+p))*P,s[1]=(f+v)*P,s[2]=(g-S)*P,s[3]=0,s[4]=(f-v)*w,s[5]=(1-(d+p))*w,s[6]=(m+y)*w,s[7]=0,s[8]=(g+S)*T,s[9]=(m-y)*T,s[10]=(1-(d+_))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=qs.set(s[0],s[1],s[2]).length();const o=qs.set(s[4],s[5],s[6]).length(),a=qs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],kn.copy(this);const l=1/r,u=1/o,h=1/a;return kn.elements[0]*=l,kn.elements[1]*=l,kn.elements[2]*=l,kn.elements[4]*=u,kn.elements[5]*=u,kn.elements[6]*=u,kn.elements[8]*=h,kn.elements[9]*=h,kn.elements[10]*=h,t.setFromRotationMatrix(kn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Ti){const c=this.elements,l=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let f,g;if(a===Ti)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ha)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Ti){const c=this.elements,l=1/(t-e),u=1/(n-s),h=1/(o-r),d=(t+e)*l,f=(n+s)*u;let g,_;if(a===Ti)g=(o+r)*h,_=-2*h;else if(a===Ha)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qs=new I,kn=new Ge,wg=new I(0,0,0),Tg=new I(1,1,1),zi=new I,jo=new I,mn=new I,kh=new Ge,Bh=new cn;class Sn{constructor(e=0,t=0,n=0,s=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return kh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bh.setFromEuler(this),this.setFromQuaternion(Bh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class Bf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ag=0;const zh=new I,Ys=new cn,mi=new Ge,qo=new I,Kr=new I,Rg=new I,Cg=new cn,Hh=new I(1,0,0),Vh=new I(0,1,0),Gh=new I(0,0,1),Wh={type:"added"},Pg={type:"removed"},Ks={type:"childadded",child:null},Pc={type:"childremoved",child:null};class At extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new I,t=new Sn,n=new cn,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ge},normalMatrix:{value:new Je}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(Hh,e)}rotateY(e){return this.rotateOnAxis(Vh,e)}rotateZ(e){return this.rotateOnAxis(Gh,e)}translateOnAxis(e,t){return zh.copy(e).applyQuaternion(this.quaternion),this.position.add(zh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hh,e)}translateY(e){return this.translateOnAxis(Vh,e)}translateZ(e){return this.translateOnAxis(Gh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qo.copy(e):qo.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Kr,qo,this.up):mi.lookAt(qo,Kr,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),Ys.setFromRotationMatrix(mi),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wh),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pg),Pc.child=e,this.dispatchEvent(Pc),Pc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wh),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,e,Rg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,Cg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}At.DEFAULT_UP=new I(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new I,gi=new I,Ic=new I,_i=new I,$s=new I,Zs=new I,Xh=new I,Lc=new I,Dc=new I,Nc=new I,Uc=new lt,Fc=new lt,Oc=new lt;class Gn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Bn.subVectors(e,t),s.cross(Bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Bn.subVectors(s,t),gi.subVectors(n,t),Ic.subVectors(e,t);const o=Bn.dot(Bn),a=Bn.dot(gi),c=Bn.dot(Ic),l=gi.dot(gi),u=gi.dot(Ic),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,_i)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,_i.x),c.addScaledVector(o,_i.y),c.addScaledVector(a,_i.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Uc.setScalar(0),Fc.setScalar(0),Oc.setScalar(0),Uc.fromBufferAttribute(e,t),Fc.fromBufferAttribute(e,n),Oc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Uc,r.x),o.addScaledVector(Fc,r.y),o.addScaledVector(Oc,r.z),o}static isFrontFacing(e,t,n,s){return Bn.subVectors(n,t),gi.subVectors(e,t),Bn.cross(gi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Bn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Gn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;$s.subVectors(s,n),Zs.subVectors(r,n),Lc.subVectors(e,n);const c=$s.dot(Lc),l=Zs.dot(Lc);if(c<=0&&l<=0)return t.copy(n);Dc.subVectors(e,s);const u=$s.dot(Dc),h=Zs.dot(Dc);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector($s,o);Nc.subVectors(e,r);const f=$s.dot(Nc),g=Zs.dot(Nc);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Zs,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Xh.subVectors(r,s),a=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(Xh,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector($s,o).addScaledVector(Zs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},Yo={h:0,s:0,l:0};function kc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=st.workingColorSpace){if(e=Bu(e,1),t=zt(t,0,1),n=zt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=kc(o,r,e+1/3),this.g=kc(o,r,e),this.b=kc(o,r,e-1/3)}return st.toWorkingColorSpace(this,s),this}setStyle(e,t=Bt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){const n=zf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return st.fromWorkingColorSpace($t.copy(this),e),Math.round(zt($t.r*255,0,255))*65536+Math.round(zt($t.g*255,0,255))*256+Math.round(zt($t.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace($t.copy(this),t);const n=$t.r,s=$t.g,r=$t.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Bt){st.fromWorkingColorSpace($t.copy(this),e);const t=$t.r,n=$t.g,s=$t.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+t,Hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hi),e.getHSL(Yo);const n=go(Hi.h,Yo.h,t),s=go(Hi.s,Yo.s,t),r=go(Hi.l,Yo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new pe;pe.NAMES=zf;let Ig=0;class jn extends Bs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=Ln(),this.name="",this.blending=pr,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gl,this.blendDst=_l,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vs,this.stencilZFail=Vs,this.stencilZPass=Vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pr&&(n.blending=this.blending),this.side!==Li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==gl&&(n.blendSrc=this.blendSrc),this.blendDst!==_l&&(n.blendDst=this.blendDst),this.blendEquation!==xs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Sr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class yn extends jn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Cu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new I,Ko=new te;class _t{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=eu,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ko.fromBufferAttribute(this,t),Ko.applyMatrix3(e),this.setXY(t,Ko.x,Ko.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==eu&&(e.usage=this.usage),e}}class Hf extends _t{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Vf extends _t{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class vt extends _t{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Lg=0;const Tn=new Ge,Bc=new At,Js=new I,gn=new Mn,$r=new Mn,jt=new I;class Lt extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ff(e)?Vf:Hf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,n){return Tn.makeTranslation(e,t,n),this.applyMatrix4(Tn),this}scale(e,t,n){return Tn.makeScale(e,t,n),this.applyMatrix4(Tn),this}lookAt(e){return Bc.lookAt(e),Bc.updateMatrix(),this.applyMatrix4(Bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new vt(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];$r.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(gn.min,$r.min),gn.expandByPoint(jt),jt.addVectors(gn.max,$r.max),gn.expandByPoint(jt)):(gn.expandByPoint($r.min),gn.expandByPoint($r.max))}gn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)jt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(jt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)jt.fromBufferAttribute(a,l),c&&(Js.fromBufferAttribute(e,l),jt.add(Js)),s=Math.max(s,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _t(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new I,c[C]=new I;const l=new I,u=new I,h=new I,d=new te,f=new te,g=new te,_=new I,m=new I;function p(C,M,x){l.fromBufferAttribute(n,C),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,x),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,x),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(R),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(R),a[C].add(_),a[M].add(_),a[x].add(_),c[C].add(m),c[M].add(m),c[x].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,M=y.length;C<M;++C){const x=y[C],R=x.start,O=x.count;for(let N=R,B=R+O;N<B;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const S=new I,v=new I,P=new I,w=new I;function T(C){P.fromBufferAttribute(s,C),w.copy(P);const M=a[C];S.copy(M),S.sub(P.multiplyScalar(P.dot(M))).normalize(),v.crossVectors(w,M);const R=v.dot(c[C])<0?-1:1;o.setXYZW(C,S.x,S.y,S.z,R)}for(let C=0,M=y.length;C<M;++C){const x=y[C],R=x.start,O=x.count;for(let N=R,B=R+O;N<B;N+=3)T(e.getX(N+0)),T(e.getX(N+1)),T(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,u=new I,h=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new _t(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jh=new Ge,cs=new ic,$o=new ai,qh=new I,Zo=new I,Jo=new I,Qo=new I,zc=new I,ea=new I,Yh=new I,ta=new I;class Oe extends At{constructor(e=new Lt,t=new yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ea.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(zc.fromBufferAttribute(h,e),o?ea.addScaledVector(zc,u):ea.addScaledVector(zc.sub(t),u))}t.add(ea)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(r),cs.copy(e.ray).recast(e.near),!($o.containsPoint(cs.origin)===!1&&(cs.intersectSphere($o,qh)===null||cs.origin.distanceToSquared(qh)>(e.far-e.near)**2))&&(jh.copy(r).invert(),cs.copy(e.ray).applyMatrix4(jh),!(n.boundingBox!==null&&cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,P=S;v<P;v+=3){const w=a.getX(v),T=a.getX(v+1),C=a.getX(v+2);s=na(this,p,e,n,l,u,h,w,T,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),S=a.getX(m+1),v=a.getX(m+2);s=na(this,o,e,n,l,u,h,y,S,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,P=S;v<P;v+=3){const w=v,T=v+1,C=v+2;s=na(this,p,e,n,l,u,h,w,T,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,S=m+1,v=m+2;s=na(this,o,e,n,l,u,h,y,S,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Dg(i,e,t,n,s,r,o,a){let c;if(e.side===on?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Li,a),c===null)return null;ta.copy(a),ta.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ta);return l<t.near||l>t.far?null:{distance:l,point:ta.clone(),object:i}}function na(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Zo),i.getVertexPosition(c,Jo),i.getVertexPosition(l,Qo);const u=Dg(i,e,t,n,Zo,Jo,Qo,Yh);if(u){const h=new I;Gn.getBarycoord(Yh,Zo,Jo,Qo,h),s&&(u.uv=Gn.getInterpolatedAttribute(s,a,c,l,h,new te)),r&&(u.uv1=Gn.getInterpolatedAttribute(r,a,c,l,h,new te)),o&&(u.normal=Gn.getInterpolatedAttribute(o,a,c,l,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new I,materialIndex:0};Gn.getNormal(Zo,Jo,Qo,d.normal),u.face=d,u.barycoord=h}return u}class Fe extends Lt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(h,2));function g(_,m,p,y,S,v,P,w,T,C,M){const x=v/T,R=P/C,O=v/2,N=P/2,B=w/2,q=T+1,V=C+1;let J=0,G=0;const ue=new I;for(let xe=0;xe<V;xe++){const Te=xe*R-N;for(let Ye=0;Ye<q;Ye++){const ut=Ye*x-O;ue[_]=ut*y,ue[m]=Te*S,ue[p]=B,l.push(ue.x,ue.y,ue.z),ue[_]=0,ue[m]=0,ue[p]=w>0?1:-1,u.push(ue.x,ue.y,ue.z),h.push(Ye/T),h.push(1-xe/C),J+=1}}for(let xe=0;xe<C;xe++)for(let Te=0;Te<T;Te++){const Ye=d+Te+q*xe,ut=d+Te+q*(xe+1),K=d+(Te+1)+q*(xe+1),se=d+(Te+1)+q*xe;c.push(Ye,ut,se),c.push(ut,K,se),G+=6}a.addGroup(f,G,M),f+=G,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fe(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function tn(i){const e={};for(let t=0;t<i.length;t++){const n=Rr(i[t]);for(const s in n)e[s]=n[s]}return e}function Ng(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Gf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const Wf={clone:Rr,merge:tn};var Ug=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends jn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ug,this.fragmentShader=Fg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rr(e.uniforms),this.uniformsGroups=Ng(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Xf extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=Ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vi=new I,Kh=new te,$h=new te;class sn extends Xf{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ar*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ar*2*Math.atan(Math.tan(mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z)}getViewSize(e,t){return this.getViewBounds(e,Kh,$h),t.subVectors($h,Kh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(mo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qs=-90,er=1;class Og extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new sn(Qs,er,e,t);s.layers=this.layers,this.add(s);const r=new sn(Qs,er,e,t);r.layers=this.layers,this.add(r);const o=new sn(Qs,er,e,t);o.layers=this.layers,this.add(o);const a=new sn(Qs,er,e,t);a.layers=this.layers,this.add(a);const c=new sn(Qs,er,e,t);c.layers=this.layers,this.add(c);const l=new sn(Qs,er,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Ti)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ha)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class jf extends Vt{constructor(e,t,n,s,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:br,super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kg extends is{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new jf(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Fe(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:Rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:Qi});r.uniforms.tEquirect.value=t;const o=new Oe(s,r),a=t.minFilter;return t.minFilter===wi&&(t.minFilter=rn),new Og(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const Hc=new I,Bg=new I,zg=new Je;class _s{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Hc.subVectors(n,t).cross(Bg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Hc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||zg.getNormalMatrix(e),s=this.coplanarPoint(Hc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ls=new ai,ia=new I;class zu{constructor(e=new _s,t=new _s,n=new _s,s=new _s,r=new _s,o=new _s){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ti){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],y=s[13],S=s[14],v=s[15];if(n[0].setComponents(c-r,d-l,m-f,v-p).normalize(),n[1].setComponents(c+r,d+l,m+f,v+p).normalize(),n[2].setComponents(c+o,d+u,m+g,v+y).normalize(),n[3].setComponents(c-o,d-u,m-g,v-y).normalize(),n[4].setComponents(c-a,d-h,m-_,v-S).normalize(),t===Ti)n[5].setComponents(c+a,d+h,m+_,v+S).normalize();else if(t===Ha)n[5].setComponents(a,h,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){return ls.center.set(0,0,0),ls.radius=.7071067811865476,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ia.x=s.normal.x>0?e.max.x:e.min.x,ia.y=s.normal.y>0?e.max.y:e.min.y,ia.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ia)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Hg(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class ii extends Lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*d-o;for(let S=0;S<l;S++){const v=S*h-r;g.push(v,-y,0),_.push(0,0,1),m.push(S/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){const S=y+l*p,v=y+l*(p+1),P=y+1+l*(p+1),w=y+1+l*p;f.push(S,v,w),f.push(v,P,w)}this.setIndex(f),this.setAttribute("position",new vt(g,3)),this.setAttribute("normal",new vt(_,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ii(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gg=`#ifdef USE_ALPHAHASH
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
#endif`,Wg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yg=`#ifdef USE_AOMAP
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
#endif`,Kg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$g=`#ifdef USE_BATCHING
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
#endif`,Zg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,t0=`#ifdef USE_IRIDESCENCE
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
#endif`,n0=`#ifdef USE_BUMPMAP
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
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,a0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,c0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,l0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,u0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,h0=`#define PI 3.141592653589793
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
} // validated`,d0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,f0=`vec3 transformedNormal = objectNormal;
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
#endif`,p0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v0="gl_FragColor = linearToOutputTexel( gl_FragColor );",x0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,y0=`#ifdef USE_ENVMAP
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
#endif`,M0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,S0=`#ifdef USE_ENVMAP
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
#endif`,b0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,E0=`#ifdef USE_ENVMAP
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
#endif`,w0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,T0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,A0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,R0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,C0=`#ifdef USE_GRADIENTMAP
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
}`,P0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,I0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,L0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,D0=`uniform bool receiveShadow;
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
#endif`,N0=`#ifdef USE_ENVMAP
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
#endif`,U0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,F0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B0=`PhysicalMaterial material;
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
#endif`,z0=`struct PhysicalMaterial {
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
}`,H0=`
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
#endif`,V0=`#if defined( RE_IndirectDiffuse )
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
#endif`,G0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,W0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,X0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Y0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,K0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Z0=`#if defined( USE_POINTS_UV )
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
#endif`,J0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,e_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,t_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,n_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i_=`#ifdef USE_MORPHTARGETS
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
#endif`,s_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,o_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,a_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,u_=`#ifdef USE_NORMALMAP
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
#endif`,h_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,d_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,p_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,m_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,g_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,__=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,v_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,y_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,b_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,T_=`float getShadowMask() {
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
}`,A_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,R_=`#ifdef USE_SKINNING
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
#endif`,C_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,P_=`#ifdef USE_SKINNING
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
#endif`,I_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,U_=`#ifdef USE_TRANSMISSION
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
#endif`,F_=`#ifdef USE_TRANSMISSION
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
#endif`,O_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const H_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V_=`uniform sampler2D t2D;
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
}`,G_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,X_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q_=`#include <common>
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
}`,Y_=`#if DEPTH_PACKING == 3200
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
}`,K_=`#define DISTANCE
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
}`,$_=`#define DISTANCE
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
}`,Z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,J_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q_=`uniform float scale;
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
}`,ev=`uniform vec3 diffuse;
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
}`,tv=`#include <common>
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
}`,nv=`uniform vec3 diffuse;
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
}`,iv=`#define LAMBERT
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
}`,sv=`#define LAMBERT
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
}`,rv=`#define MATCAP
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
}`,ov=`#define MATCAP
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
}`,av=`#define NORMAL
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
}`,cv=`#define NORMAL
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
}`,lv=`#define PHONG
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
}`,uv=`#define PHONG
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
}`,hv=`#define STANDARD
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
}`,dv=`#define STANDARD
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
}`,fv=`#define TOON
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
}`,pv=`#define TOON
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
}`,mv=`uniform float size;
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
}`,gv=`uniform vec3 diffuse;
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
}`,_v=`#include <common>
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
}`,vv=`uniform vec3 color;
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
}`,xv=`uniform float rotation;
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
}`,yv=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:Vg,alphahash_pars_fragment:Gg,alphamap_fragment:Wg,alphamap_pars_fragment:Xg,alphatest_fragment:jg,alphatest_pars_fragment:qg,aomap_fragment:Yg,aomap_pars_fragment:Kg,batching_pars_vertex:$g,batching_vertex:Zg,begin_vertex:Jg,beginnormal_vertex:Qg,bsdfs:e0,iridescence_fragment:t0,bumpmap_pars_fragment:n0,clipping_planes_fragment:i0,clipping_planes_pars_fragment:s0,clipping_planes_pars_vertex:r0,clipping_planes_vertex:o0,color_fragment:a0,color_pars_fragment:c0,color_pars_vertex:l0,color_vertex:u0,common:h0,cube_uv_reflection_fragment:d0,defaultnormal_vertex:f0,displacementmap_pars_vertex:p0,displacementmap_vertex:m0,emissivemap_fragment:g0,emissivemap_pars_fragment:_0,colorspace_fragment:v0,colorspace_pars_fragment:x0,envmap_fragment:y0,envmap_common_pars_fragment:M0,envmap_pars_fragment:S0,envmap_pars_vertex:b0,envmap_physical_pars_fragment:N0,envmap_vertex:E0,fog_vertex:w0,fog_pars_vertex:T0,fog_fragment:A0,fog_pars_fragment:R0,gradientmap_pars_fragment:C0,lightmap_pars_fragment:P0,lights_lambert_fragment:I0,lights_lambert_pars_fragment:L0,lights_pars_begin:D0,lights_toon_fragment:U0,lights_toon_pars_fragment:F0,lights_phong_fragment:O0,lights_phong_pars_fragment:k0,lights_physical_fragment:B0,lights_physical_pars_fragment:z0,lights_fragment_begin:H0,lights_fragment_maps:V0,lights_fragment_end:G0,logdepthbuf_fragment:W0,logdepthbuf_pars_fragment:X0,logdepthbuf_pars_vertex:j0,logdepthbuf_vertex:q0,map_fragment:Y0,map_pars_fragment:K0,map_particle_fragment:$0,map_particle_pars_fragment:Z0,metalnessmap_fragment:J0,metalnessmap_pars_fragment:Q0,morphinstance_vertex:e_,morphcolor_vertex:t_,morphnormal_vertex:n_,morphtarget_pars_vertex:i_,morphtarget_vertex:s_,normal_fragment_begin:r_,normal_fragment_maps:o_,normal_pars_fragment:a_,normal_pars_vertex:c_,normal_vertex:l_,normalmap_pars_fragment:u_,clearcoat_normal_fragment_begin:h_,clearcoat_normal_fragment_maps:d_,clearcoat_pars_fragment:f_,iridescence_pars_fragment:p_,opaque_fragment:m_,packing:g_,premultiplied_alpha_fragment:__,project_vertex:v_,dithering_fragment:x_,dithering_pars_fragment:y_,roughnessmap_fragment:M_,roughnessmap_pars_fragment:S_,shadowmap_pars_fragment:b_,shadowmap_pars_vertex:E_,shadowmap_vertex:w_,shadowmask_pars_fragment:T_,skinbase_vertex:A_,skinning_pars_vertex:R_,skinning_vertex:C_,skinnormal_vertex:P_,specularmap_fragment:I_,specularmap_pars_fragment:L_,tonemapping_fragment:D_,tonemapping_pars_fragment:N_,transmission_fragment:U_,transmission_pars_fragment:F_,uv_pars_fragment:O_,uv_pars_vertex:k_,uv_vertex:B_,worldpos_vertex:z_,background_vert:H_,background_frag:V_,backgroundCube_vert:G_,backgroundCube_frag:W_,cube_vert:X_,cube_frag:j_,depth_vert:q_,depth_frag:Y_,distanceRGBA_vert:K_,distanceRGBA_frag:$_,equirect_vert:Z_,equirect_frag:J_,linedashed_vert:Q_,linedashed_frag:ev,meshbasic_vert:tv,meshbasic_frag:nv,meshlambert_vert:iv,meshlambert_frag:sv,meshmatcap_vert:rv,meshmatcap_frag:ov,meshnormal_vert:av,meshnormal_frag:cv,meshphong_vert:lv,meshphong_frag:uv,meshphysical_vert:hv,meshphysical_frag:dv,meshtoon_vert:fv,meshtoon_frag:pv,points_vert:mv,points_frag:gv,shadow_vert:_v,shadow_frag:vv,sprite_vert:xv,sprite_frag:yv},he={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},ei={basic:{uniforms:tn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:tn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new pe(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:tn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:tn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:tn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new pe(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:tn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:tn([he.points,he.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:tn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:tn([he.common,he.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:tn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:tn([he.sprite,he.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:tn([he.common,he.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:tn([he.lights,he.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};ei.physical={uniforms:tn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const sa={r:0,b:0,g:0},us=new Sn,Mv=new Ge;function Sv(i,e,t,n,s,r,o){const a=new pe(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?t:e).get(S)),S}function _(y){let S=!1;const v=g(y);v===null?p(a,c):v&&v.isColor&&(p(v,1),S=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,S){const v=g(S);v&&(v.isCubeTexture||v.mapping===tc)?(u===void 0&&(u=new Oe(new Fe(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:Rr(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),us.copy(S.backgroundRotation),us.x*=-1,us.y*=-1,us.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Mv.makeRotationFromEuler(us)),u.material.toneMapped=st.getTransfer(v.colorSpace)!==xt,(h!==v||d!==v.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Oe(new ii(2,2),new bn({name:"BackgroundMaterial",uniforms:Rr(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=st.getTransfer(v.colorSpace)!==xt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,S){y.getRGB(sa,Gf(i)),n.buffers.color.setClear(sa.r,sa.g,sa.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),c=S,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:_,addToRenderList:m}}function bv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(x,R,O,N,B){let q=!1;const V=h(N,O,R);r!==V&&(r=V,l(r.object)),q=f(x,N,O,B),q&&g(x,N,O,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,v(x,R,O,N),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function h(x,R,O){const N=O.wireframe===!0;let B=n[x.id];B===void 0&&(B={},n[x.id]=B);let q=B[R.id];q===void 0&&(q={},B[R.id]=q);let V=q[N];return V===void 0&&(V=d(c()),q[N]=V),V}function d(x){const R=[],O=[],N=[];for(let B=0;B<t;B++)R[B]=0,O[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:O,attributeDivisors:N,object:x,attributes:{},index:null}}function f(x,R,O,N){const B=r.attributes,q=R.attributes;let V=0;const J=O.getAttributes();for(const G in J)if(J[G].location>=0){const xe=B[G];let Te=q[G];if(Te===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(Te=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(Te=x.instanceColor)),xe===void 0||xe.attribute!==Te||Te&&xe.data!==Te.data)return!0;V++}return r.attributesNum!==V||r.index!==N}function g(x,R,O,N){const B={},q=R.attributes;let V=0;const J=O.getAttributes();for(const G in J)if(J[G].location>=0){let xe=q[G];xe===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(xe=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(xe=x.instanceColor));const Te={};Te.attribute=xe,xe&&xe.data&&(Te.data=xe.data),B[G]=Te,V++}r.attributes=B,r.attributesNum=V,r.index=N}function _(){const x=r.newAttributes;for(let R=0,O=x.length;R<O;R++)x[R]=0}function m(x){p(x,0)}function p(x,R){const O=r.newAttributes,N=r.enabledAttributes,B=r.attributeDivisors;O[x]=1,N[x]===0&&(i.enableVertexAttribArray(x),N[x]=1),B[x]!==R&&(i.vertexAttribDivisor(x,R),B[x]=R)}function y(){const x=r.newAttributes,R=r.enabledAttributes;for(let O=0,N=R.length;O<N;O++)R[O]!==x[O]&&(i.disableVertexAttribArray(O),R[O]=0)}function S(x,R,O,N,B,q,V){V===!0?i.vertexAttribIPointer(x,R,O,B,q):i.vertexAttribPointer(x,R,O,N,B,q)}function v(x,R,O,N){_();const B=N.attributes,q=O.getAttributes(),V=R.defaultAttributeValues;for(const J in q){const G=q[J];if(G.location>=0){let ue=B[J];if(ue===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(ue=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(ue=x.instanceColor)),ue!==void 0){const xe=ue.normalized,Te=ue.itemSize,Ye=e.get(ue);if(Ye===void 0)continue;const ut=Ye.buffer,K=Ye.type,se=Ye.bytesPerElement,Re=K===i.INT||K===i.UNSIGNED_INT||ue.gpuType===Pu;if(ue.isInterleavedBufferAttribute){const oe=ue.data,ke=oe.stride,We=ue.offset;if(oe.isInstancedInterleavedBuffer){for(let He=0;He<G.locationSize;He++)p(G.location+He,oe.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let He=0;He<G.locationSize;He++)m(G.location+He);i.bindBuffer(i.ARRAY_BUFFER,ut);for(let He=0;He<G.locationSize;He++)S(G.location+He,Te/G.locationSize,K,xe,ke*se,(We+Te/G.locationSize*He)*se,Re)}else{if(ue.isInstancedBufferAttribute){for(let oe=0;oe<G.locationSize;oe++)p(G.location+oe,ue.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let oe=0;oe<G.locationSize;oe++)m(G.location+oe);i.bindBuffer(i.ARRAY_BUFFER,ut);for(let oe=0;oe<G.locationSize;oe++)S(G.location+oe,Te/G.locationSize,K,xe,Te*se,Te/G.locationSize*oe*se,Re)}}else if(V!==void 0){const xe=V[J];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(G.location,xe);break;case 3:i.vertexAttrib3fv(G.location,xe);break;case 4:i.vertexAttrib4fv(G.location,xe);break;default:i.vertexAttrib1fv(G.location,xe)}}}}y()}function P(){C();for(const x in n){const R=n[x];for(const O in R){const N=R[O];for(const B in N)u(N[B].object),delete N[B];delete R[O]}delete n[x]}}function w(x){if(n[x.id]===void 0)return;const R=n[x.id];for(const O in R){const N=R[O];for(const B in N)u(N[B].object),delete N[B];delete R[O]}delete n[x.id]}function T(x){for(const R in n){const O=n[R];if(O[x.id]===void 0)continue;const N=O[x.id];for(const B in N)u(N[B].object),delete N[B];delete O[x.id]}}function C(){M(),o=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:M,dispose:P,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Ev(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function wv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Pn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const C=T===Br&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Di&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Xn&&!C)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:P,maxSamples:w}}function Tv(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new _s,a=new Je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const y=r?0:n,S=y*4;let v=p.clippingState||null;c.value=v,v=u(g,d,S,f);for(let P=0;P!==S;++P)v[P]=t[P];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,v=f;S!==_;++S,v+=4)o.copy(h[S]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Av(i){let e=new WeakMap;function t(o,a){return a===wl?o.mapping=br:a===Tl&&(o.mapping=Er),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===wl||a===Tl)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new kg(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class sc extends Xf{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const lr=4,Zh=[.125,.215,.35,.446,.526,.582],ys=20,Vc=new sc,Jh=new pe;let Gc=null,Wc=0,Xc=0,jc=!1;const vs=(1+Math.sqrt(5))/2,tr=1/vs,Qh=[new I(-vs,tr,0),new I(vs,tr,0),new I(-tr,0,vs),new I(tr,0,vs),new I(0,vs,-tr),new I(0,vs,tr),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class ed{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Gc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),Xc=this._renderer.getActiveMipmapLevel(),jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=id(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gc,Wc,Xc),this._renderer.xr.enabled=jc,e.scissorTest=!1,ra(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===br||e.mapping===Er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),Xc=this._renderer.getActiveMipmapLevel(),jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Br,format:Pn,colorSpace:un,depthBuffer:!1},s=td(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=td(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rv(r)),this._blurMaterial=Cv(r,e,t)}return s}_compileMaterial(e){const t=new Oe(this._lodPlanes[0],e);this._renderer.compile(t,Vc)}_sceneToCubeUV(e,t,n,s){const a=new sn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Jh),u.toneMapping=es,u.autoClear=!1;const f=new yn({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),g=new Oe(new Fe,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Jh),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const S=this._cubeSize;ra(s,y*S,p>2?S:0,S,S),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===br||e.mapping===Er;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=id()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Oe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;ra(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Vc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Qh[(s-r-1)%Qh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Oe(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ys-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):ys;m>ys&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ys}`);const p=[];let y=0;for(let T=0;T<ys;++T){const C=T/_,M=Math.exp(-C*C/2);p.push(M),T===0?y+=M:T<m&&(y+=2*M)}for(let T=0;T<p.length;T++)p[T]=p[T]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const v=this._sizeLods[s],P=3*v*(s>S-lr?s-S+lr:0),w=4*(this._cubeSize-v);ra(t,P,w,3*v,2*v),c.setRenderTarget(t),c.render(h,Vc)}}function Rv(i){const e=[],t=[],n=[];let s=i;const r=i-lr+1+Zh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-lr?c=Zh[o-i+lr-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),S=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let w=0;w<f;w++){const T=w%3*2/3-1,C=w>2?0:-1,M=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];y.set(M,_*g*w),S.set(d,m*g*w);const x=[w,w,w,w,w,w];v.set(x,p*g*w)}const P=new Lt;P.setAttribute("position",new _t(y,_)),P.setAttribute("uv",new _t(S,m)),P.setAttribute("faceIndex",new _t(v,p)),e.push(P),s>lr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function td(i,e,t){const n=new is(i,e,t);return n.texture.mapping=tc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ra(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Cv(i,e,t){const n=new Float32Array(ys),s=new I(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Hu(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function nd(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hu(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function id(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Hu(){return`

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
	`}function Pv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===wl||c===Tl,u=c===br||c===Er;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new ed(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new ed(i)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Iv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ao("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Lv(i,e,t,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],i.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let S=0,v=y.length;S<v;S+=3){const P=y[S+0],w=y[S+1],T=y[S+2];d.push(P,w,w,T,T,P)}}else if(g!==void 0){const y=g.array;_=g.version;for(let S=0,v=y.length/3-1;S<v;S+=3){const P=S+0,w=S+1,T=S+2;d.push(P,w,w,T,T,P)}}else return;const m=new(Ff(d)?Vf:Hf)(d,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Dv(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*_[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Nv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Uv(i,e,t){const n=new WeakMap,s=new lt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let x=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var f=x;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let P=a.attributes.position.count*v,w=1;P>e.maxTextureSize&&(w=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const T=new Float32Array(P*w*4*h),C=new kf(T,P,w,h);C.type=Xn,C.needsUpdate=!0;const M=v*4;for(let R=0;R<h;R++){const O=p[R],N=y[R],B=S[R],q=P*w*4*R;for(let V=0;V<O.count;V++){const J=V*M;g===!0&&(s.fromBufferAttribute(O,V),T[q+J+0]=s.x,T[q+J+1]=s.y,T[q+J+2]=s.z,T[q+J+3]=0),_===!0&&(s.fromBufferAttribute(N,V),T[q+J+4]=s.x,T[q+J+5]=s.y,T[q+J+6]=s.z,T[q+J+7]=0),m===!0&&(s.fromBufferAttribute(B,V),T[q+J+8]=s.x,T[q+J+9]=s.y,T[q+J+10]=s.z,T[q+J+11]=B.itemSize===4?s.w:1)}}d={count:h,texture:C,size:new te(P,w)},n.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Fv(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class Vu extends Vt{constructor(e,t,n,s,r,o,a,c,l,u=mr){if(u!==mr&&u!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===mr&&(n=Us),n===void 0&&u===Tr&&(n=wr),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:an,this.minFilter=c!==void 0?c:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Yf=new Vt,sd=new Vu(1,1),Kf=new kf,$f=new bg,Zf=new jf,rd=[],od=[],ad=new Float32Array(16),cd=new Float32Array(9),ld=new Float32Array(4);function zr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=rd[s];if(r===void 0&&(r=new Float32Array(s),rd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function rc(i,e){let t=od[e];t===void 0&&(t=new Int32Array(e),od[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ov(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function kv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2fv(this.addr,e),Xt(t,e)}}function Bv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;i.uniform3fv(this.addr,e),Xt(t,e)}}function zv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4fv(this.addr,e),Xt(t,e)}}function Hv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;ld.set(n),i.uniformMatrix2fv(this.addr,!1,ld),Xt(t,n)}}function Vv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;cd.set(n),i.uniformMatrix3fv(this.addr,!1,cd),Xt(t,n)}}function Gv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;ad.set(n),i.uniformMatrix4fv(this.addr,!1,ad),Xt(t,n)}}function Wv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Xv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2iv(this.addr,e),Xt(t,e)}}function jv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3iv(this.addr,e),Xt(t,e)}}function qv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4iv(this.addr,e),Xt(t,e)}}function Yv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Kv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2uiv(this.addr,e),Xt(t,e)}}function $v(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3uiv(this.addr,e),Xt(t,e)}}function Zv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4uiv(this.addr,e),Xt(t,e)}}function Jv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(sd.compareFunction=Uf,r=sd):r=Yf,t.setTexture2D(e||r,s)}function Qv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||$f,s)}function ex(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Zf,s)}function tx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Kf,s)}function nx(i){switch(i){case 5126:return Ov;case 35664:return kv;case 35665:return Bv;case 35666:return zv;case 35674:return Hv;case 35675:return Vv;case 35676:return Gv;case 5124:case 35670:return Wv;case 35667:case 35671:return Xv;case 35668:case 35672:return jv;case 35669:case 35673:return qv;case 5125:return Yv;case 36294:return Kv;case 36295:return $v;case 36296:return Zv;case 35678:case 36198:case 36298:case 36306:case 35682:return Jv;case 35679:case 36299:case 36307:return Qv;case 35680:case 36300:case 36308:case 36293:return ex;case 36289:case 36303:case 36311:case 36292:return tx}}function ix(i,e){i.uniform1fv(this.addr,e)}function sx(i,e){const t=zr(e,this.size,2);i.uniform2fv(this.addr,t)}function rx(i,e){const t=zr(e,this.size,3);i.uniform3fv(this.addr,t)}function ox(i,e){const t=zr(e,this.size,4);i.uniform4fv(this.addr,t)}function ax(i,e){const t=zr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function cx(i,e){const t=zr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function lx(i,e){const t=zr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ux(i,e){i.uniform1iv(this.addr,e)}function hx(i,e){i.uniform2iv(this.addr,e)}function dx(i,e){i.uniform3iv(this.addr,e)}function fx(i,e){i.uniform4iv(this.addr,e)}function px(i,e){i.uniform1uiv(this.addr,e)}function mx(i,e){i.uniform2uiv(this.addr,e)}function gx(i,e){i.uniform3uiv(this.addr,e)}function _x(i,e){i.uniform4uiv(this.addr,e)}function vx(i,e,t){const n=this.cache,s=e.length,r=rc(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Yf,r[o])}function xx(i,e,t){const n=this.cache,s=e.length,r=rc(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||$f,r[o])}function yx(i,e,t){const n=this.cache,s=e.length,r=rc(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Zf,r[o])}function Mx(i,e,t){const n=this.cache,s=e.length,r=rc(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Kf,r[o])}function Sx(i){switch(i){case 5126:return ix;case 35664:return sx;case 35665:return rx;case 35666:return ox;case 35674:return ax;case 35675:return cx;case 35676:return lx;case 5124:case 35670:return ux;case 35667:case 35671:return hx;case 35668:case 35672:return dx;case 35669:case 35673:return fx;case 5125:return px;case 36294:return mx;case 36295:return gx;case 36296:return _x;case 35678:case 36198:case 36298:case 36306:case 35682:return vx;case 35679:case 36299:case 36307:return xx;case 35680:case 36300:case 36308:case 36293:return yx;case 36289:case 36303:case 36311:case 36292:return Mx}}class bx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=nx(t.type)}}class Ex{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sx(t.type)}}class wx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const qc=/(\w+)(\])?(\[|\.)?/g;function ud(i,e){i.seq.push(e),i.map[e.id]=e}function Tx(i,e,t){const n=i.name,s=n.length;for(qc.lastIndex=0;;){const r=qc.exec(n),o=qc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){ud(t,l===void 0?new bx(a,i,e):new Ex(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new wx(a),ud(t,h)),t=h}}}class Pa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Tx(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function hd(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Ax=37297;let Rx=0;function Cx(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const dd=new Je;function Px(i){st._getMatrix(dd,st.workingColorSpace,i);const e=`mat3( ${dd.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(i)){case nc:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function fd(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Cx(i.getShaderSource(e),o)}else return s}function Ix(i,e){const t=Px(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Lx(i,e){let t;switch(e){case Pm:t="Linear";break;case Im:t="Reinhard";break;case Lm:t="Cineon";break;case Sf:t="ACESFilmic";break;case Nm:t="AgX";break;case Um:t="Neutral";break;case Dm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const oa=new I;function Dx(){st.getLuminanceCoefficients(oa);const i=oa.x.toFixed(4),e=oa.y.toFixed(4),t=oa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(co).join(`
`)}function Ux(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Fx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function co(i){return i!==""}function pd(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function md(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ox=/^[ \t]*#include +<([\w\d./]+)>/gm;function tu(i){return i.replace(Ox,Bx)}const kx=new Map;function Bx(i,e){let t=et[e];if(t===void 0){const n=kx.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return tu(t)}const zx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gd(i){return i.replace(zx,Hx)}function Hx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _d(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Vx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Mf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function Gx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case br:case Er:e="ENVMAP_TYPE_CUBE";break;case tc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Er:e="ENVMAP_MODE_REFRACTION";break}return e}function Xx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Cu:e="ENVMAP_BLENDING_MULTIPLY";break;case Rm:e="ENVMAP_BLENDING_MIX";break;case Cm:e="ENVMAP_BLENDING_ADD";break}return e}function jx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function qx(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Vx(t),l=Gx(t),u=Wx(t),h=Xx(t),d=jx(t),f=Nx(t),g=Ux(r),_=s.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(co).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(co).join(`
`),p.length>0&&(p+=`
`)):(m=[_d(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(co).join(`
`),p=[_d(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==es?"#define TONE_MAPPING":"",t.toneMapping!==es?et.tonemapping_pars_fragment:"",t.toneMapping!==es?Lx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,Ix("linearToOutputTexel",t.outputColorSpace),Dx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(co).join(`
`)),o=tu(o),o=pd(o,t),o=md(o,t),a=tu(a),a=pd(a,t),a=md(a,t),o=gd(o),a=gd(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=y+m+o,v=y+p+a,P=hd(s,s.VERTEX_SHADER,S),w=hd(s,s.FRAGMENT_SHADER,v);s.attachShader(_,P),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(R){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(_).trim(),N=s.getShaderInfoLog(P).trim(),B=s.getShaderInfoLog(w).trim();let q=!0,V=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,P,w);else{const J=fd(s,P,"vertex"),G=fd(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+O+`
`+J+`
`+G)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(N===""||B==="")&&(V=!1);V&&(R.diagnostics={runnable:q,programLog:O,vertexShader:{log:N,prefix:m},fragmentShader:{log:B,prefix:p}})}s.deleteShader(P),s.deleteShader(w),C=new Pa(s,_),M=Fx(s,_)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,Ax)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Rx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=w,this}let Yx=0;class Kx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new $x(e),t.set(e,n)),n}}class $x{constructor(e){this.id=Yx++,this.code=e,this.usedTimes=0}}function Zx(i,e,t,n,s,r,o){const a=new Bf,c=new Kx,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,x,R,O,N){const B=O.fog,q=N.geometry,V=M.isMeshStandardMaterial?O.environment:null,J=(M.isMeshStandardMaterial?t:e).get(M.envMap||V),G=J&&J.mapping===tc?J.image.height:null,ue=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const xe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Te=xe!==void 0?xe.length:0;let Ye=0;q.morphAttributes.position!==void 0&&(Ye=1),q.morphAttributes.normal!==void 0&&(Ye=2),q.morphAttributes.color!==void 0&&(Ye=3);let ut,K,se,Re;if(ue){const mt=ei[ue];ut=mt.vertexShader,K=mt.fragmentShader}else ut=M.vertexShader,K=M.fragmentShader,c.update(M),se=c.getVertexShaderID(M),Re=c.getFragmentShaderID(M);const oe=i.getRenderTarget(),ke=i.state.buffers.depth.getReversed(),We=N.isInstancedMesh===!0,He=N.isBatchedMesh===!0,ot=!!M.map,Z=!!M.matcap,ie=!!J,L=!!M.aoMap,De=!!M.lightMap,ee=!!M.bumpMap,Se=!!M.normalMap,ce=!!M.displacementMap,Be=!!M.emissiveMap,ye=!!M.metalnessMap,A=!!M.roughnessMap,b=M.anisotropy>0,k=M.clearcoat>0,X=M.dispersion>0,Q=M.iridescence>0,j=M.sheen>0,Ce=M.transmission>0,fe=b&&!!M.anisotropyMap,Me=k&&!!M.clearcoatMap,it=k&&!!M.clearcoatNormalMap,ne=k&&!!M.clearcoatRoughnessMap,Ee=Q&&!!M.iridescenceMap,ze=Q&&!!M.iridescenceThicknessMap,Ve=j&&!!M.sheenColorMap,we=j&&!!M.sheenRoughnessMap,rt=!!M.specularMap,Qe=!!M.specularColorMap,St=!!M.specularIntensityMap,D=Ce&&!!M.transmissionMap,me=Ce&&!!M.thicknessMap,W=!!M.gradientMap,$=!!M.alphaMap,ve=M.alphaTest>0,ge=!!M.alphaHash,$e=!!M.extensions;let Ct=es;M.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ct=i.toneMapping);const Yt={shaderID:ue,shaderType:M.type,shaderName:M.name,vertexShader:ut,fragmentShader:K,defines:M.defines,customVertexShaderID:se,customFragmentShaderID:Re,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:He,batchingColor:He&&N._colorsTexture!==null,instancing:We,instancingColor:We&&N.instanceColor!==null,instancingMorph:We&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:un,alphaToCoverage:!!M.alphaToCoverage,map:ot,matcap:Z,envMap:ie,envMapMode:ie&&J.mapping,envMapCubeUVHeight:G,aoMap:L,lightMap:De,bumpMap:ee,normalMap:Se,displacementMap:d&&ce,emissiveMap:Be,normalMapObjectSpace:Se&&M.normalMapType===Wm,normalMapTangentSpace:Se&&M.normalMapType===ku,metalnessMap:ye,roughnessMap:A,anisotropy:b,anisotropyMap:fe,clearcoat:k,clearcoatMap:Me,clearcoatNormalMap:it,clearcoatRoughnessMap:ne,dispersion:X,iridescence:Q,iridescenceMap:Ee,iridescenceThicknessMap:ze,sheen:j,sheenColorMap:Ve,sheenRoughnessMap:we,specularMap:rt,specularColorMap:Qe,specularIntensityMap:St,transmission:Ce,transmissionMap:D,thicknessMap:me,gradientMap:W,opaque:M.transparent===!1&&M.blending===pr&&M.alphaToCoverage===!1,alphaMap:$,alphaTest:ve,alphaHash:ge,combine:M.combine,mapUv:ot&&_(M.map.channel),aoMapUv:L&&_(M.aoMap.channel),lightMapUv:De&&_(M.lightMap.channel),bumpMapUv:ee&&_(M.bumpMap.channel),normalMapUv:Se&&_(M.normalMap.channel),displacementMapUv:ce&&_(M.displacementMap.channel),emissiveMapUv:Be&&_(M.emissiveMap.channel),metalnessMapUv:ye&&_(M.metalnessMap.channel),roughnessMapUv:A&&_(M.roughnessMap.channel),anisotropyMapUv:fe&&_(M.anisotropyMap.channel),clearcoatMapUv:Me&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:it&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:we&&_(M.sheenRoughnessMap.channel),specularMapUv:rt&&_(M.specularMap.channel),specularColorMapUv:Qe&&_(M.specularColorMap.channel),specularIntensityMapUv:St&&_(M.specularIntensityMap.channel),transmissionMapUv:D&&_(M.transmissionMap.channel),thicknessMapUv:me&&_(M.thicknessMap.channel),alphaMapUv:$&&_(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Se||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!q.attributes.uv&&(ot||$),fog:!!B,useFog:M.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ke,skinning:N.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Ye,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ct,decodeVideoTexture:ot&&M.map.isVideoTexture===!0&&st.getTransfer(M.map.colorSpace)===xt,decodeVideoTextureEmissive:Be&&M.emissiveMap.isVideoTexture===!0&&st.getTransfer(M.emissiveMap.colorSpace)===xt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===qt,flipSided:M.side===on,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:$e&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&M.extensions.multiDraw===!0||He)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Yt.vertexUv1s=l.has(1),Yt.vertexUv2s=l.has(2),Yt.vertexUv3s=l.has(3),l.clear(),Yt}function p(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const R in M.defines)x.push(R),x.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(y(x,M),S(x,M),x.push(i.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function y(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function S(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const x=g[M.type];let R;if(x){const O=ei[x];R=Wf.clone(O.uniforms)}else R=M.uniforms;return R}function P(M,x){let R;for(let O=0,N=u.length;O<N;O++){const B=u[O];if(B.cacheKey===x){R=B,++R.usedTimes;break}}return R===void 0&&(R=new qx(i,x,M,r),u.push(R)),R}function w(M){if(--M.usedTimes===0){const x=u.indexOf(M);u[x]=u[u.length-1],u.pop(),M.destroy()}}function T(M){c.remove(M)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:P,releaseProgram:w,releaseShaderCache:T,programs:u,dispose:C}}function Jx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Qx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function vd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function xd(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,f,g,_,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||Qx),n.length>1&&n.sort(d||vd),s.length>1&&s.sort(d||vd)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function ey(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new xd,i.set(n,[o])):s>=r.length?(o=new xd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function ty(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new pe};break;case"SpotLight":t={position:new I,direction:new I,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":t={color:new pe,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function ny(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let iy=0;function sy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ry(i){const e=new ty,t=ny(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const s=new I,r=new Ge,o=new Ge;function a(l){let u=0,h=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,S=0,v=0,P=0,w=0,T=0;l.sort(sy);for(let M=0,x=l.length;M<x;M++){const R=l[M],O=R.color,N=R.intensity,B=R.distance,q=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=O.r*N,h+=O.g*N,d+=O.b*N;else if(R.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(R.sh.coefficients[V],N);T++}else if(R.isDirectionalLight){const V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const J=R.shadow,G=t.get(R);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=R.shadow.matrix,y++}n.directional[f]=V,f++}else if(R.isSpotLight){const V=e.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(O).multiplyScalar(N),V.distance=B,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,n.spot[_]=V;const J=R.shadow;if(R.map&&(n.spotLightMap[P]=R.map,P++,J.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[_]=J.matrix,R.castShadow){const G=t.get(R);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=q,v++}_++}else if(R.isRectAreaLight){const V=e.get(R);V.color.copy(O).multiplyScalar(N),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=V,m++}else if(R.isPointLight){const V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){const J=R.shadow,G=t.get(R);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,G.shadowCameraNear=J.camera.near,G.shadowCameraFar=J.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=R.shadow.matrix,S++}n.point[g]=V,g++}else if(R.isHemisphereLight){const V=e.get(R);V.skyColor.copy(R.color).multiplyScalar(N),V.groundColor.copy(R.groundColor).multiplyScalar(N),n.hemi[p]=V,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==S||C.numSpotShadows!==v||C.numSpotMaps!==P||C.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+P-w,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=S,C.numSpotShadows=v,C.numSpotMaps=P,C.numLightProbes=T,n.version=iy++)}function c(l,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const S=l[p];if(S.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(S.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function yd(i){const e=new ry(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function oy(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new yd(i),e.set(s,[a])):r>=o.length?(a=new yd(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class ay extends jn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Vm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cy extends jn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ly=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uy=`uniform sampler2D shadow_pass;
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
}`;function hy(i,e,t){let n=new zu;const s=new te,r=new te,o=new lt,a=new ay({depthPacking:Gm}),c=new cy,l={},u=t.maxTextureSize,h={[Li]:on,[on]:Li,[qt]:qt},d=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:ly,fragmentShader:uy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Lt;g.setAttribute("position",new _t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Oe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yf;let p=this.type;this.render=function(w,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=i.getRenderTarget(),x=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Qi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const N=p!==Mi&&this.type===Mi,B=p===Mi&&this.type!==Mi;for(let q=0,V=w.length;q<V;q++){const J=w[q],G=J.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ue=G.getFrameExtents();if(s.multiply(ue),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ue.x),s.x=r.x*ue.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ue.y),s.y=r.y*ue.y,G.mapSize.y=r.y)),G.map===null||N===!0||B===!0){const Te=this.type!==Mi?{minFilter:an,magFilter:an}:{};G.map!==null&&G.map.dispose(),G.map=new is(s.x,s.y,Te),G.map.texture.name=J.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const xe=G.getViewportCount();for(let Te=0;Te<xe;Te++){const Ye=G.getViewport(Te);o.set(r.x*Ye.x,r.y*Ye.y,r.x*Ye.z,r.y*Ye.w),O.viewport(o),G.updateMatrices(J,Te),n=G.getFrustum(),v(T,C,G.camera,J,this.type)}G.isPointLightShadow!==!0&&this.type===Mi&&y(G,C),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,x,R)};function y(w,T){const C=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new is(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(T,null,C,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(T,null,C,f,_,null)}function S(w,T,C,M){let x=null;const R=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)x=R;else if(x=C.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const O=x.uuid,N=T.uuid;let B=l[O];B===void 0&&(B={},l[O]=B);let q=B[N];q===void 0&&(q=x.clone(),B[N]=q,T.addEventListener("dispose",P)),x=q}if(x.visible=T.visible,x.wireframe=T.wireframe,M===Mi?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:h[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const O=i.properties.get(x);O.light=C}return x}function v(w,T,C,M,x){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===Mi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const N=e.update(w),B=w.material;if(Array.isArray(B)){const q=N.groups;for(let V=0,J=q.length;V<J;V++){const G=q[V],ue=B[G.materialIndex];if(ue&&ue.visible){const xe=S(w,ue,M,x);w.onBeforeShadow(i,w,T,C,N,xe,G),i.renderBufferDirect(C,null,N,xe,w,G),w.onAfterShadow(i,w,T,C,N,xe,G)}}}else if(B.visible){const q=S(w,B,M,x);w.onBeforeShadow(i,w,T,C,N,q,null),i.renderBufferDirect(C,null,N,q,w,null),w.onAfterShadow(i,w,T,C,N,q,null)}}const O=w.children;for(let N=0,B=O.length;N<B;N++)v(O[N],T,C,M,x)}function P(w){w.target.removeEventListener("dispose",P);for(const C in l){const M=l[C],x=w.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const dy={[vl]:xl,[yl]:bl,[Ml]:El,[Sr]:Sl,[xl]:vl,[bl]:yl,[El]:Ml,[Sl]:Sr};function fy(i,e){function t(){let D=!1;const me=new lt;let W=null;const $=new lt(0,0,0,0);return{setMask:function(ve){W!==ve&&!D&&(i.colorMask(ve,ve,ve,ve),W=ve)},setLocked:function(ve){D=ve},setClear:function(ve,ge,$e,Ct,Yt){Yt===!0&&(ve*=Ct,ge*=Ct,$e*=Ct),me.set(ve,ge,$e,Ct),$.equals(me)===!1&&(i.clearColor(ve,ge,$e,Ct),$.copy(me))},reset:function(){D=!1,W=null,$.set(-1,0,0,0)}}}function n(){let D=!1,me=!1,W=null,$=null,ve=null;return{setReversed:function(ge){if(me!==ge){const $e=e.get("EXT_clip_control");me?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT);const Ct=ve;ve=null,this.setClear(Ct)}me=ge},getReversed:function(){return me},setTest:function(ge){ge?oe(i.DEPTH_TEST):ke(i.DEPTH_TEST)},setMask:function(ge){W!==ge&&!D&&(i.depthMask(ge),W=ge)},setFunc:function(ge){if(me&&(ge=dy[ge]),$!==ge){switch(ge){case vl:i.depthFunc(i.NEVER);break;case xl:i.depthFunc(i.ALWAYS);break;case yl:i.depthFunc(i.LESS);break;case Sr:i.depthFunc(i.LEQUAL);break;case Ml:i.depthFunc(i.EQUAL);break;case Sl:i.depthFunc(i.GEQUAL);break;case bl:i.depthFunc(i.GREATER);break;case El:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=ge}},setLocked:function(ge){D=ge},setClear:function(ge){ve!==ge&&(me&&(ge=1-ge),i.clearDepth(ge),ve=ge)},reset:function(){D=!1,W=null,$=null,ve=null,me=!1}}}function s(){let D=!1,me=null,W=null,$=null,ve=null,ge=null,$e=null,Ct=null,Yt=null;return{setTest:function(mt){D||(mt?oe(i.STENCIL_TEST):ke(i.STENCIL_TEST))},setMask:function(mt){me!==mt&&!D&&(i.stencilMask(mt),me=mt)},setFunc:function(mt,Un,hi){(W!==mt||$!==Un||ve!==hi)&&(i.stencilFunc(mt,Un,hi),W=mt,$=Un,ve=hi)},setOp:function(mt,Un,hi){(ge!==mt||$e!==Un||Ct!==hi)&&(i.stencilOp(mt,Un,hi),ge=mt,$e=Un,Ct=hi)},setLocked:function(mt){D=mt},setClear:function(mt){Yt!==mt&&(i.clearStencil(mt),Yt=mt)},reset:function(){D=!1,me=null,W=null,$=null,ve=null,ge=null,$e=null,Ct=null,Yt=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,S=null,v=null,P=null,w=null,T=new pe(0,0,0),C=0,M=!1,x=null,R=null,O=null,N=null,B=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,J=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=J>=1):G.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=J>=2);let ue=null,xe={};const Te=i.getParameter(i.SCISSOR_BOX),Ye=i.getParameter(i.VIEWPORT),ut=new lt().fromArray(Te),K=new lt().fromArray(Ye);function se(D,me,W,$){const ve=new Uint8Array(4),ge=i.createTexture();i.bindTexture(D,ge),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<W;$e++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(me+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return ge}const Re={};Re[i.TEXTURE_2D]=se(i.TEXTURE_2D,i.TEXTURE_2D,1),Re[i.TEXTURE_CUBE_MAP]=se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[i.TEXTURE_2D_ARRAY]=se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Re[i.TEXTURE_3D]=se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(i.DEPTH_TEST),o.setFunc(Sr),ee(!1),Se(bh),oe(i.CULL_FACE),L(Qi);function oe(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function ke(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function We(D,me){return h[D]!==me?(i.bindFramebuffer(D,me),h[D]=me,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=me),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=me),!0):!1}function He(D,me){let W=f,$=!1;if(D){W=d.get(me),W===void 0&&(W=[],d.set(me,W));const ve=D.textures;if(W.length!==ve.length||W[0]!==i.COLOR_ATTACHMENT0){for(let ge=0,$e=ve.length;ge<$e;ge++)W[ge]=i.COLOR_ATTACHMENT0+ge;W.length=ve.length,$=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,$=!0);$&&i.drawBuffers(W)}function ot(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const Z={[xs]:i.FUNC_ADD,[hm]:i.FUNC_SUBTRACT,[dm]:i.FUNC_REVERSE_SUBTRACT};Z[fm]=i.MIN,Z[pm]=i.MAX;const ie={[mm]:i.ZERO,[gm]:i.ONE,[_m]:i.SRC_COLOR,[gl]:i.SRC_ALPHA,[bm]:i.SRC_ALPHA_SATURATE,[Mm]:i.DST_COLOR,[xm]:i.DST_ALPHA,[vm]:i.ONE_MINUS_SRC_COLOR,[_l]:i.ONE_MINUS_SRC_ALPHA,[Sm]:i.ONE_MINUS_DST_COLOR,[ym]:i.ONE_MINUS_DST_ALPHA,[Em]:i.CONSTANT_COLOR,[wm]:i.ONE_MINUS_CONSTANT_COLOR,[Tm]:i.CONSTANT_ALPHA,[Am]:i.ONE_MINUS_CONSTANT_ALPHA};function L(D,me,W,$,ve,ge,$e,Ct,Yt,mt){if(D===Qi){_===!0&&(ke(i.BLEND),_=!1);return}if(_===!1&&(oe(i.BLEND),_=!0),D!==um){if(D!==m||mt!==M){if((p!==xs||v!==xs)&&(i.blendEquation(i.FUNC_ADD),p=xs,v=xs),mt)switch(D){case pr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Eh:i.blendFunc(i.ONE,i.ONE);break;case wh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Th:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case pr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Eh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case wh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Th:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,S=null,P=null,w=null,T.set(0,0,0),C=0,m=D,M=mt}return}ve=ve||me,ge=ge||W,$e=$e||$,(me!==p||ve!==v)&&(i.blendEquationSeparate(Z[me],Z[ve]),p=me,v=ve),(W!==y||$!==S||ge!==P||$e!==w)&&(i.blendFuncSeparate(ie[W],ie[$],ie[ge],ie[$e]),y=W,S=$,P=ge,w=$e),(Ct.equals(T)===!1||Yt!==C)&&(i.blendColor(Ct.r,Ct.g,Ct.b,Yt),T.copy(Ct),C=Yt),m=D,M=!1}function De(D,me){D.side===qt?ke(i.CULL_FACE):oe(i.CULL_FACE);let W=D.side===on;me&&(W=!W),ee(W),D.blending===pr&&D.transparent===!1?L(Qi):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const $=D.stencilWrite;a.setTest($),$&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Be(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):ke(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(D){x!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),x=D)}function Se(D){D!==cm?(oe(i.CULL_FACE),D!==R&&(D===bh?i.cullFace(i.BACK):D===lm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ke(i.CULL_FACE),R=D}function ce(D){D!==O&&(V&&i.lineWidth(D),O=D)}function Be(D,me,W){D?(oe(i.POLYGON_OFFSET_FILL),(N!==me||B!==W)&&(i.polygonOffset(me,W),N=me,B=W)):ke(i.POLYGON_OFFSET_FILL)}function ye(D){D?oe(i.SCISSOR_TEST):ke(i.SCISSOR_TEST)}function A(D){D===void 0&&(D=i.TEXTURE0+q-1),ue!==D&&(i.activeTexture(D),ue=D)}function b(D,me,W){W===void 0&&(ue===null?W=i.TEXTURE0+q-1:W=ue);let $=xe[W];$===void 0&&($={type:void 0,texture:void 0},xe[W]=$),($.type!==D||$.texture!==me)&&(ue!==W&&(i.activeTexture(W),ue=W),i.bindTexture(D,me||Re[D]),$.type=D,$.texture=me)}function k(){const D=xe[ue];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function X(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ze(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ve(D){ut.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),ut.copy(D))}function we(D){K.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),K.copy(D))}function rt(D,me){let W=l.get(me);W===void 0&&(W=new WeakMap,l.set(me,W));let $=W.get(D);$===void 0&&($=i.getUniformBlockIndex(me,D.name),W.set(D,$))}function Qe(D,me){const $=l.get(me).get(D);c.get(me)!==$&&(i.uniformBlockBinding(me,$,D.__bindingPointIndex),c.set(me,$))}function St(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ue=null,xe={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,S=null,v=null,P=null,w=null,T=new pe(0,0,0),C=0,M=!1,x=null,R=null,O=null,N=null,B=null,ut.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:oe,disable:ke,bindFramebuffer:We,drawBuffers:He,useProgram:ot,setBlending:L,setMaterial:De,setFlipSided:ee,setCullFace:Se,setLineWidth:ce,setPolygonOffset:Be,setScissorTest:ye,activeTexture:A,bindTexture:b,unbindTexture:k,compressedTexImage2D:X,compressedTexImage3D:Q,texImage2D:Ee,texImage3D:ze,updateUBOMapping:rt,uniformBlockBinding:Qe,texStorage2D:it,texStorage3D:ne,texSubImage2D:j,texSubImage3D:Ce,compressedTexSubImage2D:fe,compressedTexSubImage3D:Me,scissor:Ve,viewport:we,reset:St}}function Md(i,e,t,n){const s=py(n);switch(t){case Rf:return i*e;case Pf:return i*e;case If:return i*e*2;case Du:return i*e/s.components*s.byteLength;case Nu:return i*e/s.components*s.byteLength;case Lf:return i*e*2/s.components*s.byteLength;case Uu:return i*e*2/s.components*s.byteLength;case Cf:return i*e*3/s.components*s.byteLength;case Pn:return i*e*4/s.components*s.byteLength;case Fu:return i*e*4/s.components*s.byteLength;case wa:case Ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Aa:case Ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Rl:case Pl:return Math.max(i,16)*Math.max(e,8)/4;case Al:case Cl:return Math.max(i,8)*Math.max(e,8)/2;case Il:case Ll:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Dl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ul:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Fl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case kl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Bl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case zl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Vl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case jl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ql:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ca:case Yl:case Kl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Df:case $l:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Zl:case Jl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function py(i){switch(i){case Di:case wf:return{byteLength:1,components:1};case Eo:case Tf:case Br:return{byteLength:2,components:1};case Iu:case Lu:return{byteLength:2,components:4};case Us:case Pu:case Xn:return{byteLength:4,components:1};case Af:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function my(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new te,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,b){return f?new OffscreenCanvas(A,b):Ao("canvas")}function _(A,b,k){let X=1;const Q=ye(A);if((Q.width>k||Q.height>k)&&(X=k/Math.max(Q.width,Q.height)),X<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const j=Math.floor(X*Q.width),Ce=Math.floor(X*Q.height);h===void 0&&(h=g(j,Ce));const fe=b?g(j,Ce):h;return fe.width=j,fe.height=Ce,fe.getContext("2d").drawImage(A,0,0,j,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+Ce+")."),fe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(A,b,k,X,Q=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let j=b;if(b===i.RED&&(k===i.FLOAT&&(j=i.R32F),k===i.HALF_FLOAT&&(j=i.R16F),k===i.UNSIGNED_BYTE&&(j=i.R8)),b===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.R8UI),k===i.UNSIGNED_SHORT&&(j=i.R16UI),k===i.UNSIGNED_INT&&(j=i.R32UI),k===i.BYTE&&(j=i.R8I),k===i.SHORT&&(j=i.R16I),k===i.INT&&(j=i.R32I)),b===i.RG&&(k===i.FLOAT&&(j=i.RG32F),k===i.HALF_FLOAT&&(j=i.RG16F),k===i.UNSIGNED_BYTE&&(j=i.RG8)),b===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.RG8UI),k===i.UNSIGNED_SHORT&&(j=i.RG16UI),k===i.UNSIGNED_INT&&(j=i.RG32UI),k===i.BYTE&&(j=i.RG8I),k===i.SHORT&&(j=i.RG16I),k===i.INT&&(j=i.RG32I)),b===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.RGB8UI),k===i.UNSIGNED_SHORT&&(j=i.RGB16UI),k===i.UNSIGNED_INT&&(j=i.RGB32UI),k===i.BYTE&&(j=i.RGB8I),k===i.SHORT&&(j=i.RGB16I),k===i.INT&&(j=i.RGB32I)),b===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),k===i.UNSIGNED_INT&&(j=i.RGBA32UI),k===i.BYTE&&(j=i.RGBA8I),k===i.SHORT&&(j=i.RGBA16I),k===i.INT&&(j=i.RGBA32I)),b===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),b===i.RGBA){const Ce=Q?nc:st.getTransfer(X);k===i.FLOAT&&(j=i.RGBA32F),k===i.HALF_FLOAT&&(j=i.RGBA16F),k===i.UNSIGNED_BYTE&&(j=Ce===xt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function v(A,b){let k;return A?b===null||b===Us||b===wr?k=i.DEPTH24_STENCIL8:b===Xn?k=i.DEPTH32F_STENCIL8:b===Eo&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Us||b===wr?k=i.DEPTH_COMPONENT24:b===Xn?k=i.DEPTH_COMPONENT32F:b===Eo&&(k=i.DEPTH_COMPONENT16),k}function P(A,b){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==an&&A.minFilter!==rn?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function w(A){const b=A.target;b.removeEventListener("dispose",w),C(b),b.isVideoTexture&&u.delete(b)}function T(A){const b=A.target;b.removeEventListener("dispose",T),x(b)}function C(A){const b=n.get(A);if(b.__webglInit===void 0)return;const k=A.source,X=d.get(k);if(X){const Q=X[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(A),Object.keys(X).length===0&&d.delete(k)}n.remove(A)}function M(A){const b=n.get(A);i.deleteTexture(b.__webglTexture);const k=A.source,X=d.get(k);delete X[b.__cacheKey],o.memory.textures--}function x(A){const b=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(b.__webglFramebuffer[X]))for(let Q=0;Q<b.__webglFramebuffer[X].length;Q++)i.deleteFramebuffer(b.__webglFramebuffer[X][Q]);else i.deleteFramebuffer(b.__webglFramebuffer[X]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[X])}else{if(Array.isArray(b.__webglFramebuffer))for(let X=0;X<b.__webglFramebuffer.length;X++)i.deleteFramebuffer(b.__webglFramebuffer[X]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let X=0;X<b.__webglColorRenderbuffer.length;X++)b.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[X]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const k=A.textures;for(let X=0,Q=k.length;X<Q;X++){const j=n.get(k[X]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(k[X])}n.remove(A)}let R=0;function O(){R=0}function N(){const A=R;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),R+=1,A}function B(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function q(A,b){const k=n.get(A);if(A.isVideoTexture&&ce(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){const X=A.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(k,A,b);return}}t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+b)}function V(A,b){const k=n.get(A);if(A.version>0&&k.__version!==A.version){K(k,A,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+b)}function J(A,b){const k=n.get(A);if(A.version>0&&k.__version!==A.version){K(k,A,b);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+b)}function G(A,b){const k=n.get(A);if(A.version>0&&k.__version!==A.version){se(k,A,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+b)}const ue={[Ns]:i.REPEAT,[Yi]:i.CLAMP_TO_EDGE,[Ba]:i.MIRRORED_REPEAT},xe={[an]:i.NEAREST,[Ef]:i.NEAREST_MIPMAP_NEAREST,[oo]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[Ea]:i.LINEAR_MIPMAP_NEAREST,[wi]:i.LINEAR_MIPMAP_LINEAR},Te={[Xm]:i.NEVER,[Zm]:i.ALWAYS,[jm]:i.LESS,[Uf]:i.LEQUAL,[qm]:i.EQUAL,[$m]:i.GEQUAL,[Ym]:i.GREATER,[Km]:i.NOTEQUAL};function Ye(A,b){if(b.type===Xn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===rn||b.magFilter===Ea||b.magFilter===oo||b.magFilter===wi||b.minFilter===rn||b.minFilter===Ea||b.minFilter===oo||b.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ue[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ue[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ue[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,xe[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,xe[b.minFilter]),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Te[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===an||b.minFilter!==oo&&b.minFilter!==wi||b.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ut(A,b){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",w));const X=b.source;let Q=d.get(X);Q===void 0&&(Q={},d.set(X,Q));const j=B(b);if(j!==A.__cacheKey){Q[j]===void 0&&(Q[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Q[j].usedTimes++;const Ce=Q[A.__cacheKey];Ce!==void 0&&(Q[A.__cacheKey].usedTimes--,Ce.usedTimes===0&&M(b)),A.__cacheKey=j,A.__webglTexture=Q[j].texture}return k}function K(A,b,k){let X=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(X=i.TEXTURE_3D);const Q=ut(A,b),j=b.source;t.bindTexture(X,A.__webglTexture,i.TEXTURE0+k);const Ce=n.get(j);if(j.version!==Ce.__version||Q===!0){t.activeTexture(i.TEXTURE0+k);const fe=st.getPrimaries(st.workingColorSpace),Me=b.colorSpace===ji?null:st.getPrimaries(b.colorSpace),it=b.colorSpace===ji||fe===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let ne=_(b.image,!1,s.maxTextureSize);ne=Be(b,ne);const Ee=r.convert(b.format,b.colorSpace),ze=r.convert(b.type);let Ve=S(b.internalFormat,Ee,ze,b.colorSpace,b.isVideoTexture);Ye(X,b);let we;const rt=b.mipmaps,Qe=b.isVideoTexture!==!0,St=Ce.__version===void 0||Q===!0,D=j.dataReady,me=P(b,ne);if(b.isDepthTexture)Ve=v(b.format===Tr,b.type),St&&(Qe?t.texStorage2D(i.TEXTURE_2D,1,Ve,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,Ve,ne.width,ne.height,0,Ee,ze,null));else if(b.isDataTexture)if(rt.length>0){Qe&&St&&t.texStorage2D(i.TEXTURE_2D,me,Ve,rt[0].width,rt[0].height);for(let W=0,$=rt.length;W<$;W++)we=rt[W],Qe?D&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,we.width,we.height,Ee,ze,we.data):t.texImage2D(i.TEXTURE_2D,W,Ve,we.width,we.height,0,Ee,ze,we.data);b.generateMipmaps=!1}else Qe?(St&&t.texStorage2D(i.TEXTURE_2D,me,Ve,ne.width,ne.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ne.width,ne.height,Ee,ze,ne.data)):t.texImage2D(i.TEXTURE_2D,0,Ve,ne.width,ne.height,0,Ee,ze,ne.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Qe&&St&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,Ve,rt[0].width,rt[0].height,ne.depth);for(let W=0,$=rt.length;W<$;W++)if(we=rt[W],b.format!==Pn)if(Ee!==null)if(Qe){if(D)if(b.layerUpdates.size>0){const ve=Md(we.width,we.height,b.format,b.type);for(const ge of b.layerUpdates){const $e=we.data.subarray(ge*ve/we.data.BYTES_PER_ELEMENT,(ge+1)*ve/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,ge,we.width,we.height,1,Ee,$e)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,we.width,we.height,ne.depth,Ee,we.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Ve,we.width,we.height,ne.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,we.width,we.height,ne.depth,Ee,ze,we.data):t.texImage3D(i.TEXTURE_2D_ARRAY,W,Ve,we.width,we.height,ne.depth,0,Ee,ze,we.data)}else{Qe&&St&&t.texStorage2D(i.TEXTURE_2D,me,Ve,rt[0].width,rt[0].height);for(let W=0,$=rt.length;W<$;W++)we=rt[W],b.format!==Pn?Ee!==null?Qe?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,we.width,we.height,Ee,we.data):t.compressedTexImage2D(i.TEXTURE_2D,W,Ve,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?D&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,we.width,we.height,Ee,ze,we.data):t.texImage2D(i.TEXTURE_2D,W,Ve,we.width,we.height,0,Ee,ze,we.data)}else if(b.isDataArrayTexture)if(Qe){if(St&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,Ve,ne.width,ne.height,ne.depth),D)if(b.layerUpdates.size>0){const W=Md(ne.width,ne.height,b.format,b.type);for(const $ of b.layerUpdates){const ve=ne.data.subarray($*W/ne.data.BYTES_PER_ELEMENT,($+1)*W/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,ne.width,ne.height,1,Ee,ze,ve)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,Ee,ze,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ve,ne.width,ne.height,ne.depth,0,Ee,ze,ne.data);else if(b.isData3DTexture)Qe?(St&&t.texStorage3D(i.TEXTURE_3D,me,Ve,ne.width,ne.height,ne.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,Ee,ze,ne.data)):t.texImage3D(i.TEXTURE_3D,0,Ve,ne.width,ne.height,ne.depth,0,Ee,ze,ne.data);else if(b.isFramebufferTexture){if(St)if(Qe)t.texStorage2D(i.TEXTURE_2D,me,Ve,ne.width,ne.height);else{let W=ne.width,$=ne.height;for(let ve=0;ve<me;ve++)t.texImage2D(i.TEXTURE_2D,ve,Ve,W,$,0,Ee,ze,null),W>>=1,$>>=1}}else if(rt.length>0){if(Qe&&St){const W=ye(rt[0]);t.texStorage2D(i.TEXTURE_2D,me,Ve,W.width,W.height)}for(let W=0,$=rt.length;W<$;W++)we=rt[W],Qe?D&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,Ee,ze,we):t.texImage2D(i.TEXTURE_2D,W,Ve,Ee,ze,we);b.generateMipmaps=!1}else if(Qe){if(St){const W=ye(ne);t.texStorage2D(i.TEXTURE_2D,me,Ve,W.width,W.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,ze,ne)}else t.texImage2D(i.TEXTURE_2D,0,Ve,Ee,ze,ne);m(b)&&p(X),Ce.__version=j.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function se(A,b,k){if(b.image.length!==6)return;const X=ut(A,b),Q=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+k);const j=n.get(Q);if(Q.version!==j.__version||X===!0){t.activeTexture(i.TEXTURE0+k);const Ce=st.getPrimaries(st.workingColorSpace),fe=b.colorSpace===ji?null:st.getPrimaries(b.colorSpace),Me=b.colorSpace===ji||Ce===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const it=b.isCompressedTexture||b.image[0].isCompressedTexture,ne=b.image[0]&&b.image[0].isDataTexture,Ee=[];for(let $=0;$<6;$++)!it&&!ne?Ee[$]=_(b.image[$],!0,s.maxCubemapSize):Ee[$]=ne?b.image[$].image:b.image[$],Ee[$]=Be(b,Ee[$]);const ze=Ee[0],Ve=r.convert(b.format,b.colorSpace),we=r.convert(b.type),rt=S(b.internalFormat,Ve,we,b.colorSpace),Qe=b.isVideoTexture!==!0,St=j.__version===void 0||X===!0,D=Q.dataReady;let me=P(b,ze);Ye(i.TEXTURE_CUBE_MAP,b);let W;if(it){Qe&&St&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,rt,ze.width,ze.height);for(let $=0;$<6;$++){W=Ee[$].mipmaps;for(let ve=0;ve<W.length;ve++){const ge=W[ve];b.format!==Pn?Ve!==null?Qe?D&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve,0,0,ge.width,ge.height,Ve,ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve,rt,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve,0,0,ge.width,ge.height,Ve,we,ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve,rt,ge.width,ge.height,0,Ve,we,ge.data)}}}else{if(W=b.mipmaps,Qe&&St){W.length>0&&me++;const $=ye(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,rt,$.width,$.height)}for(let $=0;$<6;$++)if(ne){Qe?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ee[$].width,Ee[$].height,Ve,we,Ee[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,rt,Ee[$].width,Ee[$].height,0,Ve,we,Ee[$].data);for(let ve=0;ve<W.length;ve++){const $e=W[ve].image[$].image;Qe?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve+1,0,0,$e.width,$e.height,Ve,we,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve+1,rt,$e.width,$e.height,0,Ve,we,$e.data)}}else{Qe?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ve,we,Ee[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,rt,Ve,we,Ee[$]);for(let ve=0;ve<W.length;ve++){const ge=W[ve];Qe?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve+1,0,0,Ve,we,ge.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve+1,rt,Ve,we,ge.image[$])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),j.__version=Q.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Re(A,b,k,X,Q,j){const Ce=r.convert(k.format,k.colorSpace),fe=r.convert(k.type),Me=S(k.internalFormat,Ce,fe,k.colorSpace),it=n.get(b),ne=n.get(k);if(ne.__renderTarget=b,!it.__hasExternalTextures){const Ee=Math.max(1,b.width>>j),ze=Math.max(1,b.height>>j);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,j,Me,Ee,ze,b.depth,0,Ce,fe,null):t.texImage2D(Q,j,Me,Ee,ze,0,Ce,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Se(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,Q,ne.__webglTexture,0,ee(b)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,Q,ne.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(A,b,k){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer){const X=b.depthTexture,Q=X&&X.isDepthTexture?X.type:null,j=v(b.stencilBuffer,Q),Ce=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=ee(b);Se(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,j,b.width,b.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,j,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,j,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,A)}else{const X=b.textures;for(let Q=0;Q<X.length;Q++){const j=X[Q],Ce=r.convert(j.format,j.colorSpace),fe=r.convert(j.type),Me=S(j.internalFormat,Ce,fe,j.colorSpace),it=ee(b);k&&Se(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,Me,b.width,b.height):Se(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,Me,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Me,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ke(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(b.depthTexture);X.__renderTarget=b,(!X.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q(b.depthTexture,0);const Q=X.__webglTexture,j=ee(b);if(b.depthTexture.format===mr)Se(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(b.depthTexture.format===Tr)Se(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function We(A){const b=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){const X=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),X){const Q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,X.removeEventListener("dispose",Q)};X.addEventListener("dispose",Q),b.__depthDisposeCallback=Q}b.__boundDepthTexture=X}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ke(b.__webglFramebuffer,A)}else if(k){b.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[X]),b.__webglDepthbuffer[X]===void 0)b.__webglDepthbuffer[X]=i.createRenderbuffer(),oe(b.__webglDepthbuffer[X],A,!1);else{const Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,j)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),oe(b.__webglDepthbuffer,A,!1);else{const X=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,Q)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(A,b,k){const X=n.get(A);b!==void 0&&Re(X.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&We(A)}function ot(A){const b=A.texture,k=n.get(A),X=n.get(b);A.addEventListener("dispose",T);const Q=A.textures,j=A.isWebGLCubeRenderTarget===!0,Ce=Q.length>1;if(Ce||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=b.version,o.memory.textures++),j){k.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[fe]=[];for(let Me=0;Me<b.mipmaps.length;Me++)k.__webglFramebuffer[fe][Me]=i.createFramebuffer()}else k.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let fe=0;fe<b.mipmaps.length;fe++)k.__webglFramebuffer[fe]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let fe=0,Me=Q.length;fe<Me;fe++){const it=n.get(Q[fe]);it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Se(A)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let fe=0;fe<Q.length;fe++){const Me=Q[fe];k.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[fe]);const it=r.convert(Me.format,Me.colorSpace),ne=r.convert(Me.type),Ee=S(Me.internalFormat,it,ne,Me.colorSpace,A.isXRRenderTarget===!0),ze=ee(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,Ee,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,k.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),oe(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,b);for(let fe=0;fe<6;fe++)if(b.mipmaps&&b.mipmaps.length>0)for(let Me=0;Me<b.mipmaps.length;Me++)Re(k.__webglFramebuffer[fe][Me],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Me);else Re(k.__webglFramebuffer[fe],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(b)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let fe=0,Me=Q.length;fe<Me;fe++){const it=Q[fe],ne=n.get(it);t.bindTexture(i.TEXTURE_2D,ne.__webglTexture),Ye(i.TEXTURE_2D,it),Re(k.__webglFramebuffer,A,it,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,0),m(it)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(fe=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,X.__webglTexture),Ye(fe,b),b.mipmaps&&b.mipmaps.length>0)for(let Me=0;Me<b.mipmaps.length;Me++)Re(k.__webglFramebuffer[Me],A,b,i.COLOR_ATTACHMENT0,fe,Me);else Re(k.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,fe,0);m(b)&&p(fe),t.unbindTexture()}A.depthBuffer&&We(A)}function Z(A){const b=A.textures;for(let k=0,X=b.length;k<X;k++){const Q=b[k];if(m(Q)){const j=y(A),Ce=n.get(Q).__webglTexture;t.bindTexture(j,Ce),p(j),t.unbindTexture()}}}const ie=[],L=[];function De(A){if(A.samples>0){if(Se(A)===!1){const b=A.textures,k=A.width,X=A.height;let Q=i.COLOR_BUFFER_BIT;const j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(A),fe=b.length>1;if(fe)for(let Me=0;Me<b.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Me=0;Me<b.length;Me++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Me]);const it=n.get(b[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,it,0)}i.blitFramebuffer(0,0,k,X,0,0,k,X,Q,i.NEAREST),c===!0&&(ie.length=0,L.length=0,ie.push(i.COLOR_ATTACHMENT0+Me),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ie.push(j),L.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let Me=0;Me<b.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Me]);const it=n.get(b[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,it,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function ee(A){return Math.min(s.maxSamples,A.samples)}function Se(A){const b=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ce(A){const b=o.render.frame;u.get(A)!==b&&(u.set(A,b),A.update())}function Be(A,b){const k=A.colorSpace,X=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==un&&k!==ji&&(st.getTransfer(k)===xt?(X!==Pn||Q!==Di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),b}function ye(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=O,this.setTexture2D=q,this.setTexture2DArray=V,this.setTexture3D=J,this.setTextureCube=G,this.rebindTextures=He,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=Se}function gy(i,e){function t(n,s=ji){let r;const o=st.getTransfer(s);if(n===Di)return i.UNSIGNED_BYTE;if(n===Iu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Lu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Af)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wf)return i.BYTE;if(n===Tf)return i.SHORT;if(n===Eo)return i.UNSIGNED_SHORT;if(n===Pu)return i.INT;if(n===Us)return i.UNSIGNED_INT;if(n===Xn)return i.FLOAT;if(n===Br)return i.HALF_FLOAT;if(n===Rf)return i.ALPHA;if(n===Cf)return i.RGB;if(n===Pn)return i.RGBA;if(n===Pf)return i.LUMINANCE;if(n===If)return i.LUMINANCE_ALPHA;if(n===mr)return i.DEPTH_COMPONENT;if(n===Tr)return i.DEPTH_STENCIL;if(n===Du)return i.RED;if(n===Nu)return i.RED_INTEGER;if(n===Lf)return i.RG;if(n===Uu)return i.RG_INTEGER;if(n===Fu)return i.RGBA_INTEGER;if(n===wa||n===Ta||n===Aa||n===Ra)if(o===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Al||n===Rl||n===Cl||n===Pl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Al)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Rl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Cl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Il||n===Ll||n===Dl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Il||n===Ll)return o===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Dl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Nl||n===Ul||n===Fl||n===Ol||n===kl||n===Bl||n===zl||n===Hl||n===Vl||n===Gl||n===Wl||n===Xl||n===jl||n===ql)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Nl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ul)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ol)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Hl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ql)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ca||n===Yl||n===Kl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ca)return o===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Kl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Df||n===$l||n===Zl||n===Jl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ca)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$l)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===wr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class _y extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qt extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vy={type:"move"};class Yc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vy)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const xy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yy=`
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

}`;class My{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Vt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new bn({vertexShader:xy,fragmentShader:yy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Oe(new ii(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Sy extends Bs{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const _=new My,m=t.getContextAttributes();let p=null,y=null;const S=[],v=[],P=new te;let w=null;const T=new sn;T.viewport=new lt;const C=new sn;C.viewport=new lt;const M=[T,C],x=new _y;let R=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let se=S[K];return se===void 0&&(se=new Yc,S[K]=se),se.getTargetRaySpace()},this.getControllerGrip=function(K){let se=S[K];return se===void 0&&(se=new Yc,S[K]=se),se.getGripSpace()},this.getHand=function(K){let se=S[K];return se===void 0&&(se=new Yc,S[K]=se),se.getHandSpace()};function N(K){const se=v.indexOf(K.inputSource);if(se===-1)return;const Re=S[se];Re!==void 0&&(Re.update(K.inputSource,K.frame,l||o),Re.dispatchEvent({type:K.type,data:K.inputSource}))}function B(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",q);for(let K=0;K<S.length;K++){const se=v[K];se!==null&&(v[K]=null,S[K].disconnect(se))}R=null,O=null,_.reset(),e.setRenderTarget(p),f=null,d=null,h=null,s=null,y=null,ut.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",B),s.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0){const se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new is(f.framebufferWidth,f.framebufferHeight,{format:Pn,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let se=null,Re=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=m.stencil?Tr:mr,Re=m.stencil?wr:Us);const ke={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(ke),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new is(d.textureWidth,d.textureHeight,{format:Pn,type:Di,depthTexture:new Vu(d.textureWidth,d.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ut.setContext(s),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(K){for(let se=0;se<K.removed.length;se++){const Re=K.removed[se],oe=v.indexOf(Re);oe>=0&&(v[oe]=null,S[oe].disconnect(Re))}for(let se=0;se<K.added.length;se++){const Re=K.added[se];let oe=v.indexOf(Re);if(oe===-1){for(let We=0;We<S.length;We++)if(We>=v.length){v.push(Re),oe=We;break}else if(v[We]===null){v[We]=Re,oe=We;break}if(oe===-1)break}const ke=S[oe];ke&&ke.connect(Re)}}const V=new I,J=new I;function G(K,se,Re){V.setFromMatrixPosition(se.matrixWorld),J.setFromMatrixPosition(Re.matrixWorld);const oe=V.distanceTo(J),ke=se.projectionMatrix.elements,We=Re.projectionMatrix.elements,He=ke[14]/(ke[10]-1),ot=ke[14]/(ke[10]+1),Z=(ke[9]+1)/ke[5],ie=(ke[9]-1)/ke[5],L=(ke[8]-1)/ke[0],De=(We[8]+1)/We[0],ee=He*L,Se=He*De,ce=oe/(-L+De),Be=ce*-L;if(se.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Be),K.translateZ(ce),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ke[10]===-1)K.projectionMatrix.copy(se.projectionMatrix),K.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const ye=He+ce,A=ot+ce,b=ee-Be,k=Se+(oe-Be),X=Z*ot/A*ye,Q=ie*ot/A*ye;K.projectionMatrix.makePerspective(b,k,X,Q,ye,A),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ue(K,se){se===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(se.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let se=K.near,Re=K.far;_.texture!==null&&(_.depthNear>0&&(se=_.depthNear),_.depthFar>0&&(Re=_.depthFar)),x.near=C.near=T.near=se,x.far=C.far=T.far=Re,(R!==x.near||O!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,O=x.far),T.layers.mask=K.layers.mask|2,C.layers.mask=K.layers.mask|4,x.layers.mask=T.layers.mask|C.layers.mask;const oe=K.parent,ke=x.cameras;ue(x,oe);for(let We=0;We<ke.length;We++)ue(ke[We],oe);ke.length===2?G(x,T,C):x.projectionMatrix.copy(T.projectionMatrix),xe(K,x,oe)};function xe(K,se,Re){Re===null?K.matrix.copy(se.matrixWorld):(K.matrix.copy(Re.matrixWorld),K.matrix.invert(),K.matrix.multiply(se.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(se.projectionMatrix),K.projectionMatrixInverse.copy(se.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ar*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let Te=null;function Ye(K,se){if(u=se.getViewerPose(l||o),g=se,u!==null){const Re=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let oe=!1;Re.length!==x.cameras.length&&(x.cameras.length=0,oe=!0);for(let We=0;We<Re.length;We++){const He=Re[We];let ot=null;if(f!==null)ot=f.getViewport(He);else{const ie=h.getViewSubImage(d,He);ot=ie.viewport,We===0&&(e.setRenderTargetTextures(y,ie.colorTexture,d.ignoreDepthValues?void 0:ie.depthStencilTexture),e.setRenderTarget(y))}let Z=M[We];Z===void 0&&(Z=new sn,Z.layers.enable(We),Z.viewport=new lt,M[We]=Z),Z.matrix.fromArray(He.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(He.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(ot.x,ot.y,ot.width,ot.height),We===0&&(x.matrix.copy(Z.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),oe===!0&&x.cameras.push(Z)}const ke=s.enabledFeatures;if(ke&&ke.includes("depth-sensing")){const We=h.getDepthInformation(Re[0]);We&&We.isValid&&We.texture&&_.init(e,We,s.renderState)}}for(let Re=0;Re<S.length;Re++){const oe=v[Re],ke=S[Re];oe!==null&&ke!==void 0&&ke.update(oe,se,l||o)}Te&&Te(K,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),g=null}const ut=new qf;ut.setAnimationLoop(Ye),this.setAnimationLoop=function(K){Te=K},this.dispose=function(){}}}const hs=new Sn,by=new Ge;function Ey(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Gf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,S,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===on&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===on&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),S=y.envMap,v=y.envMapRotation;S&&(m.envMap.value=S,hs.copy(v),hs.x*=-1,hs.y*=-1,hs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),m.envMapRotation.value.setFromMatrix4(by.makeRotationFromEuler(hs)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function wy(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,S){const v=S.program;n.uniformBlockBinding(y,v)}function l(y,S){let v=s[y.id];v===void 0&&(g(y),v=u(y),s[y.id]=v,y.addEventListener("dispose",m));const P=S.program;n.updateUBOMapping(y,P);const w=e.render.frame;r[y.id]!==w&&(d(y),r[y.id]=w)}function u(y){const S=h();y.__bindingPointIndex=S;const v=i.createBuffer(),P=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,P,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const S=s[y.id],v=y.uniforms,P=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let w=0,T=v.length;w<T;w++){const C=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,x=C.length;M<x;M++){const R=C[M];if(f(R,w,M,P)===!0){const O=R.__offset,N=Array.isArray(R.value)?R.value:[R.value];let B=0;for(let q=0;q<N.length;q++){const V=N[q],J=_(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,O+B,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,B),B+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,S,v,P){const w=y.value,T=S+"_"+v;if(P[T]===void 0)return typeof w=="number"||typeof w=="boolean"?P[T]=w:P[T]=w.clone(),!0;{const C=P[T];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return P[T]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(y){const S=y.uniforms;let v=0;const P=16;for(let T=0,C=S.length;T<C;T++){const M=Array.isArray(S[T])?S[T]:[S[T]];for(let x=0,R=M.length;x<R;x++){const O=M[x],N=Array.isArray(O.value)?O.value:[O.value];for(let B=0,q=N.length;B<q;B++){const V=N[B],J=_(V),G=v%P,ue=G%J.boundary,xe=G+ue;v+=ue,xe!==0&&P-xe<J.storage&&(v+=P-xe),O.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=J.storage}}}const w=v%P;return w>0&&(v+=P-w),y.__size=v,y.__cache={},this}function _(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){const S=y.target;S.removeEventListener("dispose",m);const v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Ty{constructor(e={}){const{canvas:t=mg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bt,this.toneMapping=es,this.toneMappingExposure=1;const v=this;let P=!1,w=0,T=0,C=null,M=-1,x=null;const R=new lt,O=new lt;let N=null;const B=new pe(0);let q=0,V=t.width,J=t.height,G=1,ue=null,xe=null;const Te=new lt(0,0,V,J),Ye=new lt(0,0,V,J);let ut=!1;const K=new zu;let se=!1,Re=!1;const oe=new Ge,ke=new Ge,We=new I,He=new lt,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Z=!1;function ie(){return C===null?G:1}let L=n;function De(E,U){return t.getContext(E,U)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ru}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",ge,!1),L===null){const U="webgl2";if(L=De(U,E),L===null)throw De(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ee,Se,ce,Be,ye,A,b,k,X,Q,j,Ce,fe,Me,it,ne,Ee,ze,Ve,we,rt,Qe,St,D;function me(){ee=new Iv(L),ee.init(),Qe=new gy(L,ee),Se=new wv(L,ee,e,Qe),ce=new fy(L,ee),Se.reverseDepthBuffer&&d&&ce.buffers.depth.setReversed(!0),Be=new Nv(L),ye=new Jx,A=new my(L,ee,ce,ye,Se,Qe,Be),b=new Av(v),k=new Pv(v),X=new Hg(L),St=new bv(L,X),Q=new Lv(L,X,Be,St),j=new Fv(L,Q,X,Be),Ve=new Uv(L,Se,A),ne=new Tv(ye),Ce=new Zx(v,b,k,ee,Se,St,ne),fe=new Ey(v,ye),Me=new ey,it=new oy(ee),ze=new Sv(v,b,k,ce,j,f,c),Ee=new hy(v,j,Se),D=new wy(L,Be,Se,ce),we=new Ev(L,ee,Be),rt=new Dv(L,ee,Be),Be.programs=Ce.programs,v.capabilities=Se,v.extensions=ee,v.properties=ye,v.renderLists=Me,v.shadowMap=Ee,v.state=ce,v.info=Be}me();const W=new Sy(v,L);this.xr=W,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=ee.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ee.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(V,J,!1))},this.getSize=function(E){return E.set(V,J)},this.setSize=function(E,U,z=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=E,J=U,t.width=Math.floor(E*G),t.height=Math.floor(U*G),z===!0&&(t.style.width=E+"px",t.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(V*G,J*G).floor()},this.setDrawingBufferSize=function(E,U,z){V=E,J=U,G=z,t.width=Math.floor(E*z),t.height=Math.floor(U*z),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(R)},this.getViewport=function(E){return E.copy(Te)},this.setViewport=function(E,U,z,H){E.isVector4?Te.set(E.x,E.y,E.z,E.w):Te.set(E,U,z,H),ce.viewport(R.copy(Te).multiplyScalar(G).round())},this.getScissor=function(E){return E.copy(Ye)},this.setScissor=function(E,U,z,H){E.isVector4?Ye.set(E.x,E.y,E.z,E.w):Ye.set(E,U,z,H),ce.scissor(O.copy(Ye).multiplyScalar(G).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(E){ce.setScissorTest(ut=E)},this.setOpaqueSort=function(E){ue=E},this.setTransparentSort=function(E){xe=E},this.getClearColor=function(E){return E.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(E=!0,U=!0,z=!0){let H=0;if(E){let F=!1;if(C!==null){const re=C.texture.format;F=re===Fu||re===Uu||re===Nu}if(F){const re=C.texture.type,_e=re===Di||re===Us||re===Eo||re===wr||re===Iu||re===Lu,Pe=ze.getClearColor(),Ie=ze.getClearAlpha(),Xe=Pe.r,Ze=Pe.g,Le=Pe.b;_e?(g[0]=Xe,g[1]=Ze,g[2]=Le,g[3]=Ie,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Xe,_[1]=Ze,_[2]=Le,_[3]=Ie,L.clearBufferiv(L.COLOR,0,_))}else H|=L.COLOR_BUFFER_BIT}U&&(H|=L.DEPTH_BUFFER_BIT),z&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Me.dispose(),it.dispose(),ye.dispose(),b.dispose(),k.dispose(),j.dispose(),St.dispose(),D.dispose(),Ce.dispose(),W.dispose(),W.removeEventListener("sessionstart",mh),W.removeEventListener("sessionend",gh),rs.stop()};function $(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const E=Be.autoReset,U=Ee.enabled,z=Ee.autoUpdate,H=Ee.needsUpdate,F=Ee.type;me(),Be.autoReset=E,Ee.enabled=U,Ee.autoUpdate=z,Ee.needsUpdate=H,Ee.type=F}function ge(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function $e(E){const U=E.target;U.removeEventListener("dispose",$e),Ct(U)}function Ct(E){Yt(E),ye.remove(E)}function Yt(E){const U=ye.get(E).programs;U!==void 0&&(U.forEach(function(z){Ce.releaseProgram(z)}),E.isShaderMaterial&&Ce.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,z,H,F,re){U===null&&(U=ot);const _e=F.isMesh&&F.matrixWorld.determinant()<0,Pe=im(E,U,z,H,F);ce.setMaterial(H,_e);let Ie=z.index,Xe=1;if(H.wireframe===!0){if(Ie=Q.getWireframeAttribute(z),Ie===void 0)return;Xe=2}const Ze=z.drawRange,Le=z.attributes.position;let at=Ze.start*Xe,bt=(Ze.start+Ze.count)*Xe;re!==null&&(at=Math.max(at,re.start*Xe),bt=Math.min(bt,(re.start+re.count)*Xe)),Ie!==null?(at=Math.max(at,0),bt=Math.min(bt,Ie.count)):Le!=null&&(at=Math.max(at,0),bt=Math.min(bt,Le.count));const wt=bt-at;if(wt<0||wt===1/0)return;St.setup(F,H,Pe,z,Ie);let dn,ht=we;if(Ie!==null&&(dn=X.get(Ie),ht=rt,ht.setIndex(dn)),F.isMesh)H.wireframe===!0?(ce.setLineWidth(H.wireframeLinewidth*ie()),ht.setMode(L.LINES)):ht.setMode(L.TRIANGLES);else if(F.isLine){let Ne=H.linewidth;Ne===void 0&&(Ne=1),ce.setLineWidth(Ne*ie()),F.isLineSegments?ht.setMode(L.LINES):F.isLineLoop?ht.setMode(L.LINE_LOOP):ht.setMode(L.LINE_STRIP)}else F.isPoints?ht.setMode(L.POINTS):F.isSprite&&ht.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ht.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))ht.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ne=F._multiDrawStarts,di=F._multiDrawCounts,dt=F._multiDrawCount,Fn=Ie?X.get(Ie).bytesPerElement:1,Hs=ye.get(H).currentProgram.getUniforms();for(let pn=0;pn<dt;pn++)Hs.setValue(L,"_gl_DrawID",pn),ht.render(Ne[pn]/Fn,di[pn])}else if(F.isInstancedMesh)ht.renderInstances(at,wt,F.count);else if(z.isInstancedBufferGeometry){const Ne=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,di=Math.min(z.instanceCount,Ne);ht.renderInstances(at,wt,di)}else ht.render(at,wt)};function mt(E,U,z){E.transparent===!0&&E.side===qt&&E.forceSinglePass===!1?(E.side=on,E.needsUpdate=!0,zo(E,U,z),E.side=Li,E.needsUpdate=!0,zo(E,U,z),E.side=qt):zo(E,U,z)}this.compile=function(E,U,z=null){z===null&&(z=E),p=it.get(z),p.init(U),S.push(p),z.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),E!==z&&E.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const H=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const re=F.material;if(re)if(Array.isArray(re))for(let _e=0;_e<re.length;_e++){const Pe=re[_e];mt(Pe,z,F),H.add(Pe)}else mt(re,z,F),H.add(re)}),S.pop(),p=null,H},this.compileAsync=function(E,U,z=null){const H=this.compile(E,U,z);return new Promise(F=>{function re(){if(H.forEach(function(_e){ye.get(_e).currentProgram.isReady()&&H.delete(_e)}),H.size===0){F(E);return}setTimeout(re,10)}ee.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Un=null;function hi(E){Un&&Un(E)}function mh(){rs.stop()}function gh(){rs.start()}const rs=new qf;rs.setAnimationLoop(hi),typeof self<"u"&&rs.setContext(self),this.setAnimationLoop=function(E){Un=E,W.setAnimationLoop(E),E===null?rs.stop():rs.start()},W.addEventListener("sessionstart",mh),W.addEventListener("sessionend",gh),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,U,C),p=it.get(E,S.length),p.init(U),S.push(p),ke.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),K.setFromProjectionMatrix(ke),Re=this.localClippingEnabled,se=ne.init(this.clippingPlanes,Re),m=Me.get(E,y.length),m.init(),y.push(m),W.enabled===!0&&W.isPresenting===!0){const re=v.xr.getDepthSensingMesh();re!==null&&yc(re,U,-1/0,v.sortObjects)}yc(E,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ue,xe),Z=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Z&&ze.addToRenderList(m,E),this.info.render.frame++,se===!0&&ne.beginShadows();const z=p.state.shadowsArray;Ee.render(z,E,U),se===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,F=m.transmissive;if(p.setupLights(),U.isArrayCamera){const re=U.cameras;if(F.length>0)for(let _e=0,Pe=re.length;_e<Pe;_e++){const Ie=re[_e];vh(H,F,E,Ie)}Z&&ze.render(E);for(let _e=0,Pe=re.length;_e<Pe;_e++){const Ie=re[_e];_h(m,E,Ie,Ie.viewport)}}else F.length>0&&vh(H,F,E,U),Z&&ze.render(E),_h(m,E,U);C!==null&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(v,E,U),St.resetDefaultState(),M=-1,x=null,S.pop(),S.length>0?(p=S[S.length-1],se===!0&&ne.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function yc(E,U,z,H){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||K.intersectsSprite(E)){H&&He.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ke);const _e=j.update(E),Pe=E.material;Pe.visible&&m.push(E,_e,Pe,z,He.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||K.intersectsObject(E))){const _e=j.update(E),Pe=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),He.copy(E.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),He.copy(_e.boundingSphere.center)),He.applyMatrix4(E.matrixWorld).applyMatrix4(ke)),Array.isArray(Pe)){const Ie=_e.groups;for(let Xe=0,Ze=Ie.length;Xe<Ze;Xe++){const Le=Ie[Xe],at=Pe[Le.materialIndex];at&&at.visible&&m.push(E,_e,at,z,He.z,Le)}}else Pe.visible&&m.push(E,_e,Pe,z,He.z,null)}}const re=E.children;for(let _e=0,Pe=re.length;_e<Pe;_e++)yc(re[_e],U,z,H)}function _h(E,U,z,H){const F=E.opaque,re=E.transmissive,_e=E.transparent;p.setupLightsView(z),se===!0&&ne.setGlobalState(v.clippingPlanes,z),H&&ce.viewport(R.copy(H)),F.length>0&&Bo(F,U,z),re.length>0&&Bo(re,U,z),_e.length>0&&Bo(_e,U,z),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function vh(E,U,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new is(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?Br:Di,minFilter:wi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const re=p.state.transmissionRenderTarget[H.id],_e=H.viewport||R;re.setSize(_e.z,_e.w);const Pe=v.getRenderTarget();v.setRenderTarget(re),v.getClearColor(B),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),Z&&ze.render(z);const Ie=v.toneMapping;v.toneMapping=es;const Xe=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),se===!0&&ne.setGlobalState(v.clippingPlanes,H),Bo(E,z,H),A.updateMultisampleRenderTarget(re),A.updateRenderTargetMipmap(re),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Le=0,at=U.length;Le<at;Le++){const bt=U[Le],wt=bt.object,dn=bt.geometry,ht=bt.material,Ne=bt.group;if(ht.side===qt&&wt.layers.test(H.layers)){const di=ht.side;ht.side=on,ht.needsUpdate=!0,xh(wt,z,H,dn,ht,Ne),ht.side=di,ht.needsUpdate=!0,Ze=!0}}Ze===!0&&(A.updateMultisampleRenderTarget(re),A.updateRenderTargetMipmap(re))}v.setRenderTarget(Pe),v.setClearColor(B,q),Xe!==void 0&&(H.viewport=Xe),v.toneMapping=Ie}function Bo(E,U,z){const H=U.isScene===!0?U.overrideMaterial:null;for(let F=0,re=E.length;F<re;F++){const _e=E[F],Pe=_e.object,Ie=_e.geometry,Xe=H===null?_e.material:H,Ze=_e.group;Pe.layers.test(z.layers)&&xh(Pe,U,z,Ie,Xe,Ze)}}function xh(E,U,z,H,F,re){E.onBeforeRender(v,U,z,H,F,re),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(v,U,z,H,E,re),F.transparent===!0&&F.side===qt&&F.forceSinglePass===!1?(F.side=on,F.needsUpdate=!0,v.renderBufferDirect(z,U,H,F,E,re),F.side=Li,F.needsUpdate=!0,v.renderBufferDirect(z,U,H,F,E,re),F.side=qt):v.renderBufferDirect(z,U,H,F,E,re),E.onAfterRender(v,U,z,H,F,re)}function zo(E,U,z){U.isScene!==!0&&(U=ot);const H=ye.get(E),F=p.state.lights,re=p.state.shadowsArray,_e=F.state.version,Pe=Ce.getParameters(E,F.state,re,U,z),Ie=Ce.getProgramCacheKey(Pe);let Xe=H.programs;H.environment=E.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(E.isMeshStandardMaterial?k:b).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Xe===void 0&&(E.addEventListener("dispose",$e),Xe=new Map,H.programs=Xe);let Ze=Xe.get(Ie);if(Ze!==void 0){if(H.currentProgram===Ze&&H.lightsStateVersion===_e)return Mh(E,Pe),Ze}else Pe.uniforms=Ce.getUniforms(E),E.onBeforeCompile(Pe,v),Ze=Ce.acquireProgram(Pe,Ie),Xe.set(Ie,Ze),H.uniforms=Pe.uniforms;const Le=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Le.clippingPlanes=ne.uniform),Mh(E,Pe),H.needsLights=rm(E),H.lightsStateVersion=_e,H.needsLights&&(Le.ambientLightColor.value=F.state.ambient,Le.lightProbe.value=F.state.probe,Le.directionalLights.value=F.state.directional,Le.directionalLightShadows.value=F.state.directionalShadow,Le.spotLights.value=F.state.spot,Le.spotLightShadows.value=F.state.spotShadow,Le.rectAreaLights.value=F.state.rectArea,Le.ltc_1.value=F.state.rectAreaLTC1,Le.ltc_2.value=F.state.rectAreaLTC2,Le.pointLights.value=F.state.point,Le.pointLightShadows.value=F.state.pointShadow,Le.hemisphereLights.value=F.state.hemi,Le.directionalShadowMap.value=F.state.directionalShadowMap,Le.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Le.spotShadowMap.value=F.state.spotShadowMap,Le.spotLightMatrix.value=F.state.spotLightMatrix,Le.spotLightMap.value=F.state.spotLightMap,Le.pointShadowMap.value=F.state.pointShadowMap,Le.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Ze,H.uniformsList=null,Ze}function yh(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Pa.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Mh(E,U){const z=ye.get(E);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function im(E,U,z,H,F){U.isScene!==!0&&(U=ot),A.resetTextureUnits();const re=U.fog,_e=H.isMeshStandardMaterial?U.environment:null,Pe=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:un,Ie=(H.isMeshStandardMaterial?k:b).get(H.envMap||_e),Xe=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ze=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Le=!!z.morphAttributes.position,at=!!z.morphAttributes.normal,bt=!!z.morphAttributes.color;let wt=es;H.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(wt=v.toneMapping);const dn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ht=dn!==void 0?dn.length:0,Ne=ye.get(H),di=p.state.lights;if(se===!0&&(Re===!0||E!==x)){const wn=E===x&&H.id===M;ne.setState(H,E,wn)}let dt=!1;H.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==di.state.version||Ne.outputColorSpace!==Pe||F.isBatchedMesh&&Ne.batching===!1||!F.isBatchedMesh&&Ne.batching===!0||F.isBatchedMesh&&Ne.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ne.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ne.instancing===!1||!F.isInstancedMesh&&Ne.instancing===!0||F.isSkinnedMesh&&Ne.skinning===!1||!F.isSkinnedMesh&&Ne.skinning===!0||F.isInstancedMesh&&Ne.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ne.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ne.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ne.instancingMorph===!1&&F.morphTexture!==null||Ne.envMap!==Ie||H.fog===!0&&Ne.fog!==re||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ne.numPlanes||Ne.numIntersection!==ne.numIntersection)||Ne.vertexAlphas!==Xe||Ne.vertexTangents!==Ze||Ne.morphTargets!==Le||Ne.morphNormals!==at||Ne.morphColors!==bt||Ne.toneMapping!==wt||Ne.morphTargetsCount!==ht)&&(dt=!0):(dt=!0,Ne.__version=H.version);let Fn=Ne.currentProgram;dt===!0&&(Fn=zo(H,U,F));let Hs=!1,pn=!1,Xr=!1;const Tt=Fn.getUniforms(),Kn=Ne.uniforms;if(ce.useProgram(Fn.program)&&(Hs=!0,pn=!0,Xr=!0),H.id!==M&&(M=H.id,pn=!0),Hs||x!==E){ce.buffers.depth.getReversed()?(oe.copy(E.projectionMatrix),_g(oe),vg(oe),Tt.setValue(L,"projectionMatrix",oe)):Tt.setValue(L,"projectionMatrix",E.projectionMatrix),Tt.setValue(L,"viewMatrix",E.matrixWorldInverse);const Ni=Tt.map.cameraPosition;Ni!==void 0&&Ni.setValue(L,We.setFromMatrixPosition(E.matrixWorld)),Se.logarithmicDepthBuffer&&Tt.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Tt.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,pn=!0,Xr=!0)}if(F.isSkinnedMesh){Tt.setOptional(L,F,"bindMatrix"),Tt.setOptional(L,F,"bindMatrixInverse");const wn=F.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),Tt.setValue(L,"boneTexture",wn.boneTexture,A))}F.isBatchedMesh&&(Tt.setOptional(L,F,"batchingTexture"),Tt.setValue(L,"batchingTexture",F._matricesTexture,A),Tt.setOptional(L,F,"batchingIdTexture"),Tt.setValue(L,"batchingIdTexture",F._indirectTexture,A),Tt.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&Tt.setValue(L,"batchingColorTexture",F._colorsTexture,A));const jr=z.morphAttributes;if((jr.position!==void 0||jr.normal!==void 0||jr.color!==void 0)&&Ve.update(F,z,Fn),(pn||Ne.receiveShadow!==F.receiveShadow)&&(Ne.receiveShadow=F.receiveShadow,Tt.setValue(L,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Kn.envMap.value=Ie,Kn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(Kn.envMapIntensity.value=U.environmentIntensity),pn&&(Tt.setValue(L,"toneMappingExposure",v.toneMappingExposure),Ne.needsLights&&sm(Kn,Xr),re&&H.fog===!0&&fe.refreshFogUniforms(Kn,re),fe.refreshMaterialUniforms(Kn,H,G,J,p.state.transmissionRenderTarget[E.id]),Pa.upload(L,yh(Ne),Kn,A)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Pa.upload(L,yh(Ne),Kn,A),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Tt.setValue(L,"center",F.center),Tt.setValue(L,"modelViewMatrix",F.modelViewMatrix),Tt.setValue(L,"normalMatrix",F.normalMatrix),Tt.setValue(L,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const wn=H.uniformsGroups;for(let Ni=0,Ui=wn.length;Ni<Ui;Ni++){const Sh=wn[Ni];D.update(Sh,Fn),D.bind(Sh,Fn)}}return Fn}function sm(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function rm(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,U,z){ye.get(E.texture).__webglTexture=U,ye.get(E.depthTexture).__webglTexture=z;const H=ye.get(E);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const z=ye.get(E);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,z=0){C=E,w=U,T=z;let H=!0,F=null,re=!1,_e=!1;if(E){const Ie=ye.get(E);if(Ie.__useDefaultFramebuffer!==void 0)ce.bindFramebuffer(L.FRAMEBUFFER,null),H=!1;else if(Ie.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(Ie.__hasExternalTextures)A.rebindTextures(E,ye.get(E.texture).__webglTexture,ye.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Le=E.depthTexture;if(Ie.__boundDepthTexture!==Le){if(Le!==null&&ye.has(Le)&&(E.width!==Le.image.width||E.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}const Xe=E.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(_e=!0);const Ze=ye.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ze[U])?F=Ze[U][z]:F=Ze[U],re=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?F=ye.get(E).__webglMultisampledFramebuffer:Array.isArray(Ze)?F=Ze[z]:F=Ze,R.copy(E.viewport),O.copy(E.scissor),N=E.scissorTest}else R.copy(Te).multiplyScalar(G).floor(),O.copy(Ye).multiplyScalar(G).floor(),N=ut;if(ce.bindFramebuffer(L.FRAMEBUFFER,F)&&H&&ce.drawBuffers(E,F),ce.viewport(R),ce.scissor(O),ce.setScissorTest(N),re){const Ie=ye.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ie.__webglTexture,z)}else if(_e){const Ie=ye.get(E.texture),Xe=U||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ie.__webglTexture,z||0,Xe)}M=-1},this.readRenderTargetPixels=function(E,U,z,H,F,re,_e){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=ye.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_e!==void 0&&(Pe=Pe[_e]),Pe){ce.bindFramebuffer(L.FRAMEBUFFER,Pe);try{const Ie=E.texture,Xe=Ie.format,Ze=Ie.type;if(!Se.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-H&&z>=0&&z<=E.height-F&&L.readPixels(U,z,H,F,Qe.convert(Xe),Qe.convert(Ze),re)}finally{const Ie=C!==null?ye.get(C).__webglFramebuffer:null;ce.bindFramebuffer(L.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(E,U,z,H,F,re,_e){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=ye.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_e!==void 0&&(Pe=Pe[_e]),Pe){const Ie=E.texture,Xe=Ie.format,Ze=Ie.type;if(!Se.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-H&&z>=0&&z<=E.height-F){ce.bindFramebuffer(L.FRAMEBUFFER,Pe);const Le=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Le),L.bufferData(L.PIXEL_PACK_BUFFER,re.byteLength,L.STREAM_READ),L.readPixels(U,z,H,F,Qe.convert(Xe),Qe.convert(Ze),0);const at=C!==null?ye.get(C).__webglFramebuffer:null;ce.bindFramebuffer(L.FRAMEBUFFER,at);const bt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await gg(L,bt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Le),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,re),L.deleteBuffer(Le),L.deleteSync(bt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,z=0){E.isTexture!==!0&&(ao("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const H=Math.pow(2,-z),F=Math.floor(E.image.width*H),re=Math.floor(E.image.height*H),_e=U!==null?U.x:0,Pe=U!==null?U.y:0;A.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,_e,Pe,F,re),ce.unbindTexture()},this.copyTextureToTexture=function(E,U,z=null,H=null,F=0){E.isTexture!==!0&&(ao("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,E=arguments[1],U=arguments[2],F=arguments[3]||0,z=null);let re,_e,Pe,Ie,Xe,Ze,Le,at,bt;const wt=E.isCompressedTexture?E.mipmaps[F]:E.image;z!==null?(re=z.max.x-z.min.x,_e=z.max.y-z.min.y,Pe=z.isBox3?z.max.z-z.min.z:1,Ie=z.min.x,Xe=z.min.y,Ze=z.isBox3?z.min.z:0):(re=wt.width,_e=wt.height,Pe=wt.depth||1,Ie=0,Xe=0,Ze=0),H!==null?(Le=H.x,at=H.y,bt=H.z):(Le=0,at=0,bt=0);const dn=Qe.convert(U.format),ht=Qe.convert(U.type);let Ne;U.isData3DTexture?(A.setTexture3D(U,0),Ne=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(A.setTexture2DArray(U,0),Ne=L.TEXTURE_2D_ARRAY):(A.setTexture2D(U,0),Ne=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const di=L.getParameter(L.UNPACK_ROW_LENGTH),dt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Fn=L.getParameter(L.UNPACK_SKIP_PIXELS),Hs=L.getParameter(L.UNPACK_SKIP_ROWS),pn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,wt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,wt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ie),L.pixelStorei(L.UNPACK_SKIP_ROWS,Xe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ze);const Xr=E.isDataArrayTexture||E.isData3DTexture,Tt=U.isDataArrayTexture||U.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Kn=ye.get(E),jr=ye.get(U),wn=ye.get(Kn.__renderTarget),Ni=ye.get(jr.__renderTarget);ce.bindFramebuffer(L.READ_FRAMEBUFFER,wn.__webglFramebuffer),ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let Ui=0;Ui<Pe;Ui++)Xr&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ye.get(E).__webglTexture,F,Ze+Ui),E.isDepthTexture?(Tt&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ye.get(U).__webglTexture,F,bt+Ui),L.blitFramebuffer(Ie,Xe,re,_e,Le,at,re,_e,L.DEPTH_BUFFER_BIT,L.NEAREST)):Tt?L.copyTexSubImage3D(Ne,F,Le,at,bt+Ui,Ie,Xe,re,_e):L.copyTexSubImage2D(Ne,F,Le,at,bt+Ui,Ie,Xe,re,_e);ce.bindFramebuffer(L.READ_FRAMEBUFFER,null),ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Tt?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(Ne,F,Le,at,bt,re,_e,Pe,dn,ht,wt.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Ne,F,Le,at,bt,re,_e,Pe,dn,wt.data):L.texSubImage3D(Ne,F,Le,at,bt,re,_e,Pe,dn,ht,wt):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,F,Le,at,re,_e,dn,ht,wt.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,F,Le,at,wt.width,wt.height,dn,wt.data):L.texSubImage2D(L.TEXTURE_2D,F,Le,at,re,_e,dn,ht,wt);L.pixelStorei(L.UNPACK_ROW_LENGTH,di),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,dt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Fn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Hs),L.pixelStorei(L.UNPACK_SKIP_IMAGES,pn),F===0&&U.generateMipmaps&&L.generateMipmap(Ne),ce.unbindTexture()},this.copyTextureToTexture3D=function(E,U,z=null,H=null,F=0){return E.isTexture!==!0&&(ao("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,E=arguments[2],U=arguments[3],F=arguments[4]||0),ao('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,U,z,H,F)},this.initRenderTarget=function(E){ye.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),ce.unbindTexture()},this.resetState=function(){w=0,T=0,C=null,ce.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}class Gu{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new pe(e),this.near=t,this.far=n}clone(){return new Gu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Jf extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ay{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=eu,this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new I;class Wu{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new _t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Wu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Sd=new I,bd=new lt,Ed=new lt,Ry=new I,wd=new Ge,aa=new I,Kc=new ai,Td=new Ge,$c=new ic;class Cy extends Oe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ah,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Mn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,aa),this.boundingBox.expandByPoint(aa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ai),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,aa),this.boundingSphere.expandByPoint(aa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Kc.copy(this.boundingSphere),Kc.applyMatrix4(s),e.ray.intersectsSphere(Kc)!==!1&&(Td.copy(s).invert(),$c.copy(e.ray).applyMatrix4(Td),!(this.boundingBox!==null&&$c.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,$c)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new lt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ah?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Fm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;bd.fromBufferAttribute(s.attributes.skinIndex,e),Ed.fromBufferAttribute(s.attributes.skinWeight,e),Sd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Ed.getComponent(r);if(o!==0){const a=bd.getComponent(r);wd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Ry.copy(Sd).applyMatrix4(wd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Qf extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Xu extends Vt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=an,u=an,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ad=new Ge,Py=new Ge;class ju{constructor(e=[],t=[]){this.uuid=Ln(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Py;Ad.multiplyMatrices(a,t[r]),Ad.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new ju(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Xu(t,e,e,Pn,Xn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Qf),this.bones.push(o),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class nu extends _t{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const nr=new Ge,Rd=new Ge,ca=[],Cd=new Mn,Iy=new Ge,Zr=new Oe,Jr=new ai;class Ro extends Oe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new nu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Iy)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,nr),Cd.copy(e.boundingBox).applyMatrix4(nr),this.boundingBox.union(Cd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ai),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,nr),Jr.copy(e.boundingSphere).applyMatrix4(nr),this.boundingSphere.union(Jr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Zr.geometry=this.geometry,Zr.material=this.material,Zr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jr.copy(this.boundingSphere),Jr.applyMatrix4(n),e.ray.intersectsSphere(Jr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,nr),Rd.multiplyMatrices(n,nr),Zr.matrixWorld=Rd,Zr.raycast(e,ca);for(let o=0,a=ca.length;o<a;o++){const c=ca[o];c.instanceId=r,c.object=this,t.push(c)}ca.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new nu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xu(new Float32Array(s*this.count),s,this.count,Du,Xn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ep extends jn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Va=new I,Ga=new I,Pd=new Ge,Qr=new ic,la=new ai,Zc=new I,Id=new I;class qu extends At{constructor(e=new Lt,t=new ep){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Va.fromBufferAttribute(t,s-1),Ga.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Va.distanceTo(Ga);e.setAttribute("lineDistance",new vt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(s),la.radius+=r,e.ray.intersectsSphere(la)===!1)return;Pd.copy(s).invert(),Qr.copy(e.ray).applyMatrix4(Pd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=u.getX(_),y=u.getX(_+1),S=ua(this,e,Qr,c,p,y);S&&t.push(S)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=ua(this,e,Qr,c,_,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=ua(this,e,Qr,c,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=ua(this,e,Qr,c,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ua(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(Va.fromBufferAttribute(o,s),Ga.fromBufferAttribute(o,r),t.distanceSqToSegment(Va,Ga,Zc,Id)>n)return;Zc.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Zc);if(!(c<e.near||c>e.far))return{distance:c,point:Id.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Ld=new I,Dd=new I;class tp extends qu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Ld.fromBufferAttribute(t,s),Dd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ld.distanceTo(Dd);e.setAttribute("lineDistance",new vt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ly extends qu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Yu extends jn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Nd=new Ge,iu=new ic,ha=new ai,da=new I;class np extends At{constructor(e=new Lt,t=new Yu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(s),ha.radius+=r,e.ray.intersectsSphere(ha)===!1)return;Nd.copy(s).invert(),iu.copy(e.ray).applyMatrix4(Nd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);da.fromBufferAttribute(h,m),Ud(da,m,c,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++)da.fromBufferAttribute(h,g),Ud(da,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ud(i,e,t,n,s,r,o){const a=iu.distanceSqToPoint(i);if(a<t){const c=new I;iu.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class ci{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new te:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new I,s=[],r=[],o=[],a=new I,c=new Ge;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(zt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(zt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ku extends ci{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new te){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Dy extends Ku{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function $u(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const fa=new I,Jc=new $u,Qc=new $u,el=new $u;class Ny extends ci{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(fa.subVectors(s[0],s[1]).add(s[0]),l=fa);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(fa.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=fa),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Jc.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,_,m),Qc.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,_,m),el.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Jc.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Qc.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),el.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(Jc.calc(c),Qc.calc(c),el.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Fd(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Uy(i,e){const t=1-i;return t*t*e}function Fy(i,e){return 2*(1-i)*i*e}function Oy(i,e){return i*i*e}function _o(i,e,t,n){return Uy(i,e)+Fy(i,t)+Oy(i,n)}function ky(i,e){const t=1-i;return t*t*t*e}function By(i,e){const t=1-i;return 3*t*t*i*e}function zy(i,e){return 3*(1-i)*i*i*e}function Hy(i,e){return i*i*i*e}function vo(i,e,t,n,s){return ky(i,e)+By(i,t)+zy(i,n)+Hy(i,s)}class ip extends ci{constructor(e=new te,t=new te,n=new te,s=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new te){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vo(e,s.x,r.x,o.x,a.x),vo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Vy extends ci{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vo(e,s.x,r.x,o.x,a.x),vo(e,s.y,r.y,o.y,a.y),vo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sp extends ci{constructor(e=new te,t=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new te){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gy extends ci{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rp extends ci{constructor(e=new te,t=new te,n=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new te){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(_o(e,s.x,r.x,o.x),_o(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wy extends ci{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(_o(e,s.x,r.x,o.x),_o(e,s.y,r.y,o.y),_o(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class op extends ci{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new te){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Fd(a,c.x,l.x,u.x,h.x),Fd(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new te().fromArray(s))}return this}}var su=Object.freeze({__proto__:null,ArcCurve:Dy,CatmullRomCurve3:Ny,CubicBezierCurve:ip,CubicBezierCurve3:Vy,EllipseCurve:Ku,LineCurve:sp,LineCurve3:Gy,QuadraticBezierCurve:rp,QuadraticBezierCurve3:Wy,SplineCurve:op});class Xy extends ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new su[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new su[s.type]().fromJSON(s))}return this}}class ru extends Xy{constructor(e){super(),this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new sp(this.currentPoint.clone(),new te(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new rp(this.currentPoint.clone(),new te(e,t),new te(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new ip(this.currentPoint.clone(),new te(e,t),new te(n,s),new te(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new op(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new Ku(e,t,n,s,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Zu extends Lt{constructor(e=[new te(0,-.5),new te(.5,0),new te(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=zt(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/t,h=new I,d=new te,f=new I,g=new I,_=new I;let m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let y=0;y<=t;y++){const S=n+y*u*s,v=Math.sin(S),P=Math.cos(S);for(let w=0;w<=e.length-1;w++){h.x=e[w].x*v,h.y=e[w].y,h.z=e[w].x*P,o.push(h.x,h.y,h.z),d.x=y/t,d.y=w/(e.length-1),a.push(d.x,d.y);const T=c[3*w+0]*v,C=c[3*w+1],M=c[3*w+0]*P;l.push(T,C,M)}}for(let y=0;y<t;y++)for(let S=0;S<e.length-1;S++){const v=S+y*e.length,P=v,w=v+e.length,T=v+e.length+1,C=v+1;r.push(P,w,C),r.push(T,C,w)}this.setIndex(r),this.setAttribute("position",new vt(o,3)),this.setAttribute("uv",new vt(a,2)),this.setAttribute("normal",new vt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zu(e.points,e.segments,e.phiStart,e.phiLength)}}class Cr extends Zu{constructor(e=1,t=1,n=4,s=8){const r=new ru;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new Cr(e.radius,e.length,e.capSegments,e.radialSegments)}}class Ht extends Lt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;y(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new vt(h,3)),this.setAttribute("normal",new vt(d,3)),this.setAttribute("uv",new vt(f,2));function y(){const v=new I,P=new I;let w=0;const T=(t-e)/n;for(let C=0;C<=r;C++){const M=[],x=C/r,R=x*(t-e)+e;for(let O=0;O<=s;O++){const N=O/s,B=N*c+a,q=Math.sin(B),V=Math.cos(B);P.x=R*q,P.y=-x*n+m,P.z=R*V,h.push(P.x,P.y,P.z),v.set(q,T,V).normalize(),d.push(v.x,v.y,v.z),f.push(N,1-x),M.push(g++)}_.push(M)}for(let C=0;C<s;C++)for(let M=0;M<r;M++){const x=_[M][C],R=_[M+1][C],O=_[M+1][C+1],N=_[M][C+1];(e>0||M!==0)&&(u.push(x,R,N),w+=3),(t>0||M!==r-1)&&(u.push(R,O,N),w+=3)}l.addGroup(p,w,0),p+=w}function S(v){const P=g,w=new te,T=new I;let C=0;const M=v===!0?e:t,x=v===!0?1:-1;for(let O=1;O<=s;O++)h.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),g++;const R=g;for(let O=0;O<=s;O++){const B=O/s*c+a,q=Math.cos(B),V=Math.sin(B);T.x=M*V,T.y=m*x,T.z=M*q,h.push(T.x,T.y,T.z),d.push(0,x,0),w.x=q*.5+.5,w.y=V*.5*x+.5,f.push(w.x,w.y),g++}for(let O=0;O<s;O++){const N=P+O,B=R+O;v===!0?u.push(B,B+1,N):u.push(B+1,B,N),C+=3}l.addGroup(p,C,v===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ht(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ki extends Ht{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Ki(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class oc extends Lt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new vt(r,3)),this.setAttribute("normal",new vt(r.slice(),3)),this.setAttribute("uv",new vt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const S=new I,v=new I,P=new I;for(let w=0;w<t.length;w+=3)f(t[w+0],S),f(t[w+1],v),f(t[w+2],P),c(S,v,P,y)}function c(y,S,v,P){const w=P+1,T=[];for(let C=0;C<=w;C++){T[C]=[];const M=y.clone().lerp(v,C/w),x=S.clone().lerp(v,C/w),R=w-C;for(let O=0;O<=R;O++)O===0&&C===w?T[C][O]=M:T[C][O]=M.clone().lerp(x,O/R)}for(let C=0;C<w;C++)for(let M=0;M<2*(w-C)-1;M++){const x=Math.floor(M/2);M%2===0?(d(T[C][x+1]),d(T[C+1][x]),d(T[C][x])):(d(T[C][x+1]),d(T[C+1][x+1]),d(T[C+1][x]))}}function l(y){const S=new I;for(let v=0;v<r.length;v+=3)S.x=r[v+0],S.y=r[v+1],S.z=r[v+2],S.normalize().multiplyScalar(y),r[v+0]=S.x,r[v+1]=S.y,r[v+2]=S.z}function u(){const y=new I;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];const v=m(y)/2/Math.PI+.5,P=p(y)/Math.PI+.5;o.push(v,1-P)}g(),h()}function h(){for(let y=0;y<o.length;y+=6){const S=o[y+0],v=o[y+2],P=o[y+4],w=Math.max(S,v,P),T=Math.min(S,v,P);w>.9&&T<.1&&(S<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),P<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,S){const v=y*3;S.x=e[v+0],S.y=e[v+1],S.z=e[v+2]}function g(){const y=new I,S=new I,v=new I,P=new I,w=new te,T=new te,C=new te;for(let M=0,x=0;M<r.length;M+=9,x+=6){y.set(r[M+0],r[M+1],r[M+2]),S.set(r[M+3],r[M+4],r[M+5]),v.set(r[M+6],r[M+7],r[M+8]),w.set(o[x+0],o[x+1]),T.set(o[x+2],o[x+3]),C.set(o[x+4],o[x+5]),P.copy(y).add(S).add(v).divideScalar(3);const R=m(P);_(w,x+0,y,R),_(T,x+2,S,R),_(C,x+4,v,R)}}function _(y,S,v,P){P<0&&y.x===1&&(o[S]=y.x-1),v.x===0&&v.z===0&&(o[S]=P/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oc(e.vertices,e.indices,e.radius,e.details)}}class Fo extends ru{constructor(e){super(e),this.uuid=Ln(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new ru().fromJSON(s))}return this}}const jy={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=ap(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,d,f;if(n&&(r=Zy(i,e,r,t)),i.length>80*t){a=l=i[0],c=u=i[1];for(let g=t;g<s;g+=t)h=i[g],d=i[g+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-a,u-c),f=f!==0?32767/f:0}return Co(r,o,t,a,c,f,0),o}};function ap(i,e,t,n,s){let r,o;if(s===cM(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Od(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Od(r,i[r],i[r+1],o);return o&&ac(o,o.next)&&(Io(o),o=o.next),o}function Fs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ac(t,t.next)||Rt(t.prev,t,t.next)===0)){if(Io(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Co(i,e,t,n,s,r,o){if(!i)return;!o&&r&&nM(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Yy(i,n,s,r):qy(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Io(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Ky(Fs(i),e,t),Co(i,e,t,n,s,r,2)):o===2&&$y(i,e,t,n,s,r):Co(Fs(i),e,t,n,s,r,1);break}}}function qy(i){const e=i.prev,t=i,n=i.next;if(Rt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&ur(s,a,r,c,o,l,g.x,g.y)&&Rt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Yy(i,e,t,n){const s=i.prev,r=i,o=i.next;if(Rt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=u<h?u<d?u:d:h<d?h:d,_=a>c?a>l?a:l:c>l?c:l,m=u>h?u>d?u:d:h>d?h:d,p=ou(f,g,e,t,n),y=ou(_,m,e,t,n);let S=i.prevZ,v=i.nextZ;for(;S&&S.z>=p&&v&&v.z<=y;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&ur(a,u,c,h,l,d,S.x,S.y)&&Rt(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ur(a,u,c,h,l,d,v.x,v.y)&&Rt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&ur(a,u,c,h,l,d,S.x,S.y)&&Rt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ur(a,u,c,h,l,d,v.x,v.y)&&Rt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Ky(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!ac(s,r)&&cp(s,n,n.next,r)&&Po(s,r)&&Po(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Io(n),Io(n.next),n=i=r),n=n.next}while(n!==i);return Fs(n)}function $y(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&rM(o,a)){let c=lp(o,a);o=Fs(o,o.next),c=Fs(c,c.next),Co(o,e,t,n,s,r,0),Co(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Zy(i,e,t,n){const s=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=ap(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(sM(l));for(s.sort(Jy),r=0;r<s.length;r++)t=Qy(s[r],t);return t}function Jy(i,e){return i.x-e.x}function Qy(i,e){const t=eM(i,e);if(!t)return e;const n=lp(t,i);return Fs(n,n.next),Fs(t,t.next)}function eM(i,e){let t=e,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,h;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&ur(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),Po(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&tM(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function tM(i,e){return Rt(i.prev,i,e.prev)<0&&Rt(e.next,i,i.next)<0}function nM(i,e,t,n){let s=i;do s.z===0&&(s.z=ou(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,iM(s)}function iM(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function ou(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function sM(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ur(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function rM(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!oM(i,e)&&(Po(i,e)&&Po(e,i)&&aM(i,e)&&(Rt(i.prev,i,e.prev)||Rt(i,e.prev,e))||ac(i,e)&&Rt(i.prev,i,i.next)>0&&Rt(e.prev,e,e.next)>0)}function Rt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ac(i,e){return i.x===e.x&&i.y===e.y}function cp(i,e,t,n){const s=ma(Rt(i,e,t)),r=ma(Rt(i,e,n)),o=ma(Rt(t,n,i)),a=ma(Rt(t,n,e));return!!(s!==r&&o!==a||s===0&&pa(i,t,e)||r===0&&pa(i,n,e)||o===0&&pa(t,i,n)||a===0&&pa(t,e,n))}function pa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ma(i){return i>0?1:i<0?-1:0}function oM(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&cp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Po(i,e){return Rt(i.prev,i,i.next)<0?Rt(i,e,i.next)>=0&&Rt(i,i.prev,e)>=0:Rt(i,e,i.prev)<0||Rt(i,i.next,e)<0}function aM(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function lp(i,e){const t=new au(i.i,i.x,i.y),n=new au(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Od(i,e,t,n){const s=new au(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Io(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function au(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function cM(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class ts{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return ts.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];kd(e),Bd(n,e);let o=e.length;t.forEach(kd);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Bd(n,t[c]);const a=jy.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function kd(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Bd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class cc extends Lt{constructor(e=new Fo([new te(.5,.5),new te(-.5,.5),new te(-.5,-.5),new te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new vt(s,3)),this.setAttribute("uv",new vt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:lM;let S,v=!1,P,w,T,C;p&&(S=p.getSpacedPoints(u),v=!0,d=!1,P=p.computeFrenetFrames(u,!1),w=new I,T=new I,C=new I),d||(m=0,f=0,g=0,_=0);const M=a.extractPoints(l);let x=M.shape;const R=M.holes;if(!ts.isClockWise(x)){x=x.reverse();for(let Z=0,ie=R.length;Z<ie;Z++){const L=R[Z];ts.isClockWise(L)&&(R[Z]=L.reverse())}}const N=ts.triangulateShape(x,R),B=x;for(let Z=0,ie=R.length;Z<ie;Z++){const L=R[Z];x=x.concat(L)}function q(Z,ie,L){return ie||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(ie,L)}const V=x.length,J=N.length;function G(Z,ie,L){let De,ee,Se;const ce=Z.x-ie.x,Be=Z.y-ie.y,ye=L.x-Z.x,A=L.y-Z.y,b=ce*ce+Be*Be,k=ce*A-Be*ye;if(Math.abs(k)>Number.EPSILON){const X=Math.sqrt(b),Q=Math.sqrt(ye*ye+A*A),j=ie.x-Be/X,Ce=ie.y+ce/X,fe=L.x-A/Q,Me=L.y+ye/Q,it=((fe-j)*A-(Me-Ce)*ye)/(ce*A-Be*ye);De=j+ce*it-Z.x,ee=Ce+Be*it-Z.y;const ne=De*De+ee*ee;if(ne<=2)return new te(De,ee);Se=Math.sqrt(ne/2)}else{let X=!1;ce>Number.EPSILON?ye>Number.EPSILON&&(X=!0):ce<-Number.EPSILON?ye<-Number.EPSILON&&(X=!0):Math.sign(Be)===Math.sign(A)&&(X=!0),X?(De=-Be,ee=ce,Se=Math.sqrt(b)):(De=ce,ee=Be,Se=Math.sqrt(b/2))}return new te(De/Se,ee/Se)}const ue=[];for(let Z=0,ie=B.length,L=ie-1,De=Z+1;Z<ie;Z++,L++,De++)L===ie&&(L=0),De===ie&&(De=0),ue[Z]=G(B[Z],B[L],B[De]);const xe=[];let Te,Ye=ue.concat();for(let Z=0,ie=R.length;Z<ie;Z++){const L=R[Z];Te=[];for(let De=0,ee=L.length,Se=ee-1,ce=De+1;De<ee;De++,Se++,ce++)Se===ee&&(Se=0),ce===ee&&(ce=0),Te[De]=G(L[De],L[Se],L[ce]);xe.push(Te),Ye=Ye.concat(Te)}for(let Z=0;Z<m;Z++){const ie=Z/m,L=f*Math.cos(ie*Math.PI/2),De=g*Math.sin(ie*Math.PI/2)+_;for(let ee=0,Se=B.length;ee<Se;ee++){const ce=q(B[ee],ue[ee],De);oe(ce.x,ce.y,-L)}for(let ee=0,Se=R.length;ee<Se;ee++){const ce=R[ee];Te=xe[ee];for(let Be=0,ye=ce.length;Be<ye;Be++){const A=q(ce[Be],Te[Be],De);oe(A.x,A.y,-L)}}}const ut=g+_;for(let Z=0;Z<V;Z++){const ie=d?q(x[Z],Ye[Z],ut):x[Z];v?(T.copy(P.normals[0]).multiplyScalar(ie.x),w.copy(P.binormals[0]).multiplyScalar(ie.y),C.copy(S[0]).add(T).add(w),oe(C.x,C.y,C.z)):oe(ie.x,ie.y,0)}for(let Z=1;Z<=u;Z++)for(let ie=0;ie<V;ie++){const L=d?q(x[ie],Ye[ie],ut):x[ie];v?(T.copy(P.normals[Z]).multiplyScalar(L.x),w.copy(P.binormals[Z]).multiplyScalar(L.y),C.copy(S[Z]).add(T).add(w),oe(C.x,C.y,C.z)):oe(L.x,L.y,h/u*Z)}for(let Z=m-1;Z>=0;Z--){const ie=Z/m,L=f*Math.cos(ie*Math.PI/2),De=g*Math.sin(ie*Math.PI/2)+_;for(let ee=0,Se=B.length;ee<Se;ee++){const ce=q(B[ee],ue[ee],De);oe(ce.x,ce.y,h+L)}for(let ee=0,Se=R.length;ee<Se;ee++){const ce=R[ee];Te=xe[ee];for(let Be=0,ye=ce.length;Be<ye;Be++){const A=q(ce[Be],Te[Be],De);v?oe(A.x,A.y+S[u-1].y,S[u-1].x+L):oe(A.x,A.y,h+L)}}}K(),se();function K(){const Z=s.length/3;if(d){let ie=0,L=V*ie;for(let De=0;De<J;De++){const ee=N[De];ke(ee[2]+L,ee[1]+L,ee[0]+L)}ie=u+m*2,L=V*ie;for(let De=0;De<J;De++){const ee=N[De];ke(ee[0]+L,ee[1]+L,ee[2]+L)}}else{for(let ie=0;ie<J;ie++){const L=N[ie];ke(L[2],L[1],L[0])}for(let ie=0;ie<J;ie++){const L=N[ie];ke(L[0]+V*u,L[1]+V*u,L[2]+V*u)}}n.addGroup(Z,s.length/3-Z,0)}function se(){const Z=s.length/3;let ie=0;Re(B,ie),ie+=B.length;for(let L=0,De=R.length;L<De;L++){const ee=R[L];Re(ee,ie),ie+=ee.length}n.addGroup(Z,s.length/3-Z,1)}function Re(Z,ie){let L=Z.length;for(;--L>=0;){const De=L;let ee=L-1;ee<0&&(ee=Z.length-1);for(let Se=0,ce=u+m*2;Se<ce;Se++){const Be=V*Se,ye=V*(Se+1),A=ie+De+Be,b=ie+ee+Be,k=ie+ee+ye,X=ie+De+ye;We(A,b,k,X)}}}function oe(Z,ie,L){c.push(Z),c.push(ie),c.push(L)}function ke(Z,ie,L){He(Z),He(ie),He(L);const De=s.length/3,ee=y.generateTopUV(n,s,De-3,De-2,De-1);ot(ee[0]),ot(ee[1]),ot(ee[2])}function We(Z,ie,L,De){He(Z),He(ie),He(De),He(ie),He(L),He(De);const ee=s.length/3,Se=y.generateSideWallUV(n,s,ee-6,ee-3,ee-2,ee-1);ot(Se[0]),ot(Se[1]),ot(Se[3]),ot(Se[1]),ot(Se[2]),ot(Se[3])}function He(Z){s.push(c[Z*3+0]),s.push(c[Z*3+1]),s.push(c[Z*3+2])}function ot(Z){r.push(Z.x),r.push(Z.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return uM(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new su[s.type]().fromJSON(s)),new cc(n,e.options)}}const lM={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],u=e[s*3+1];return[new te(r,o),new te(a,c),new te(l,u)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new te(o,1-c),new te(l,1-h),new te(d,1-g),new te(_,1-p)]:[new te(a,1-c),new te(u,1-h),new te(f,1-g),new te(m,1-p)]}};function uM(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Wa extends oc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Wa(e.radius,e.detail)}}class Ju extends oc{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ju(e.radius,e.detail)}}class Qu extends Lt{constructor(e=new Fo([new te(0,.5),new te(-.5,-.5),new te(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new vt(s,3)),this.setAttribute("normal",new vt(r,3)),this.setAttribute("uv",new vt(o,2));function l(u){const h=s.length/3,d=u.extractPoints(t);let f=d.shape;const g=d.holes;ts.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const y=g[m];ts.isClockWise(y)===!0&&(g[m]=y.reverse())}const _=ts.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const y=g[m];f=f.concat(y)}for(let m=0,p=f.length;m<p;m++){const y=f[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,p=_.length;m<p;m++){const y=_[m],S=y[0]+h,v=y[1]+h,P=y[2]+h;n.push(S,v,P),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return hM(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];n.push(o)}return new Qu(n,e.curveSegments)}}function hM(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class xn extends Lt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new I,d=new I,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const y=[],S=p/n;let v=0;p===0&&o===0?v=.5/t:p===n&&c===Math.PI&&(v=-.5/t);for(let P=0;P<=t;P++){const w=P/t;h.x=-e*Math.cos(s+w*r)*Math.sin(o+S*a),h.y=e*Math.cos(o+S*a),h.z=e*Math.sin(s+w*r)*Math.sin(o+S*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(w+v,1-S),y.push(l++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const S=u[p][y+1],v=u[p][y],P=u[p+1][y],w=u[p+1][y+1];(p!==0||o>0)&&f.push(S,v,w),(p!==n-1||c<Math.PI)&&f.push(v,P,w)}this.setIndex(f),this.setAttribute("position",new vt(g,3)),this.setAttribute("normal",new vt(_,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Oo extends Lt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new I,h=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,y=(s+1)*f+g;o.push(_,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new vt(a,3)),this.setAttribute("normal",new vt(c,3)),this.setAttribute("uv",new vt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class eh extends jn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ku,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class li extends eh{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class fn extends jn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ku,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Cu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function ga(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function dM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function fM(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function zd(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function up(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class ko{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class pM extends ko{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ar,endingEnd:ar}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case cr:r=e,a=2*t-n;break;case za:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case cr:o=e,c=2*n-t;break;case za:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,S=(-1-f)*m+(1.5+f)*_+.5*g,v=f*m-f*_;for(let P=0;P!==a;++P)r[P]=p*o[u+P]+y*o[l+P]+S*o[c+P]+v*o[h+P];return r}}class hp extends ko{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}}class mM extends ko{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class ui{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ga(t,this.TimeBufferType),this.values=ga(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ga(e.times,Array),values:ga(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new mM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pM(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case wo:t=this.InterpolantFactoryMethodDiscrete;break;case To:t=this.InterpolantFactoryMethodLinear;break;case Mc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wo;case this.InterpolantFactoryMethodLinear:return To;case this.InterpolantFactoryMethodSmooth:return Mc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&dM(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Mc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}ui.prototype.TimeBufferType=Float32Array;ui.prototype.ValueBufferType=Float32Array;ui.prototype.DefaultInterpolation=To;class Hr extends ui{constructor(e,t,n){super(e,t,n)}}Hr.prototype.ValueTypeName="bool";Hr.prototype.ValueBufferType=Array;Hr.prototype.DefaultInterpolation=wo;Hr.prototype.InterpolantFactoryMethodLinear=void 0;Hr.prototype.InterpolantFactoryMethodSmooth=void 0;class dp extends ui{}dp.prototype.ValueTypeName="color";class Pr extends ui{}Pr.prototype.ValueTypeName="number";class gM extends ko{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t);let l=e*a;for(let u=l+a;l!==u;l+=4)cn.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Ir extends ui{InterpolantFactoryMethodLinear(e){return new gM(this.times,this.values,this.getValueSize(),e)}}Ir.prototype.ValueTypeName="quaternion";Ir.prototype.InterpolantFactoryMethodSmooth=void 0;class Vr extends ui{constructor(e,t,n){super(e,t,n)}}Vr.prototype.ValueTypeName="string";Vr.prototype.ValueBufferType=Array;Vr.prototype.DefaultInterpolation=wo;Vr.prototype.InterpolantFactoryMethodLinear=void 0;Vr.prototype.InterpolantFactoryMethodSmooth=void 0;class Lr extends ui{}Lr.prototype.ValueTypeName="vector";class cu{constructor(e="",t=-1,n=[],s=Ou){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Ln(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(vM(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(ui.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=fM(c);c=zd(c,1,u),l=zd(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Pr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,_){if(f.length!==0){const m=[],p=[];up(f,m,p,g),m.length!==0&&_.push(new h(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){const S=d[g];m.push(S.time),p.push(S.morphTarget===_?1:0)}s.push(new Pr(".morphTargetInfluence["+_+"]",m,p))}c=f.length*o}else{const f=".bones["+t[h].name+"]";n(Lr,f+".position",d,"pos",s),n(Ir,f+".quaternion",d,"rot",s),n(Lr,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function _M(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Pr;case"vector":case"vector2":case"vector3":case"vector4":return Lr;case"color":return dp;case"quaternion":return Ir;case"bool":case"boolean":return Hr;case"string":return Vr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function vM(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=_M(i.type);if(i.times===void 0){const t=[],n=[];up(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const $i={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class xM{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const yM=new xM;class Gr{constructor(e){this.manager=e!==void 0?e:yM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Gr.DEFAULT_MATERIAL_NAME="__DEFAULT";const vi={};class MM extends Error{constructor(e,t){super(e),this.response=t}}class fp extends Gr{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=$i.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(vi[e]!==void 0){vi[e].push({onLoad:t,onProgress:n,onError:s});return}vi[e]=[],vi[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=vi[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){y();function y(){h.read().then(({done:S,value:v})=>{if(S)p.close();else{_+=v.byteLength;const P=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let w=0,T=u.length;w<T;w++){const C=u[w];C.onProgress&&C.onProgress(P)}p.enqueue(v),y()}},S=>{p.error(S)})}}});return new Response(m)}else throw new MM(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{$i.add(e,l);const u=vi[e];delete vi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=vi[e];if(u===void 0)throw this.manager.itemError(e),l;delete vi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class pp extends Gr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=$i.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Ao("img");function c(){u(),$i.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class SM extends Gr{constructor(e){super(e)}load(e,t,n,s){const r=new Vt,o=new pp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class lc extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class bM extends lc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const tl=new Ge,Hd=new I,Vd=new I;class th{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zu,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Hd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hd),Vd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vd),t.updateMatrixWorld(),tl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(tl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class EM extends th{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ar*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class wM extends lc{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new EM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Gd=new Ge,eo=new I,nl=new I;class TM extends th{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new te(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),eo.setFromMatrixPosition(e.matrixWorld),n.position.copy(eo),nl.copy(n.position),nl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(nl),n.updateMatrixWorld(),s.makeTranslation(-eo.x,-eo.y,-eo.z),Gd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gd)}}class AM extends lc{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new TM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class RM extends th{constructor(){super(new sc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mp extends lc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new RM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class xo{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class CM extends Gr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=$i.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return $i.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),$i.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});$i.add(e,c),r.manager.itemStart(e)}}class PM{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,s=this.valueSize,r=e*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){cn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){const o=this._workIndex*r;cn.multiplyQuaternionsFlat(e,o,e,t,e,n),cn.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){const o=1-s;for(let a=0;a!==r;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*s}}}const nh="\\[\\]\\.:\\/",IM=new RegExp("["+nh+"]","g"),ih="[^"+nh+"]",LM="[^"+nh.replace("\\.","")+"]",DM=/((?:WC+[\/:])*)/.source.replace("WC",ih),NM=/(WCOD+)?/.source.replace("WCOD",LM),UM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ih),FM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ih),OM=new RegExp("^"+DM+NM+UM+FM+"$"),kM=["material","materials","bones","map"];class BM{constructor(e,t,n){const s=n||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ft{constructor(e,t,n){this.path=t,this.parsedPath=n||ft.parseTrackName(t),this.node=ft.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ft.Composite(e,t,n):new ft(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(IM,"")}static parseTrackName(e){const t=OM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);kM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=ft.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[s];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ft.Composite=BM;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class zM{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const r=t.tracks,o=r.length,a=new Array(o),c={endingStart:ar,endingEnd:ar};for(let l=0;l!==o;++l){const u=r[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=km,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case zm:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case Ou:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let s=this.time+e,r=this._loopCount;const o=n===Bm;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===Om){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){const a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=cr,s.endingEnd=cr):(e?s.endingStart=this.zeroSlopeAtStart?cr:ar:s.endingStart=za,t?s.endingEnd=this.zeroSlopeAtEnd?cr:ar:s.endingEnd=za)}_scheduleFading(e,t,n){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}}const HM=new Float32Array(1);class VM extends Bs{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){const d=s[h],f=d.name;let g=u[f];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const _=t&&t._propertyBindings[h].binding.parsedPath;g=new PM(ft.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const s=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new hp(new Float32Array(2),new Float32Array(2),1,HM),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const s=t||this._root,r=s.uuid;let o=typeof e=="string"?cu.findByName(s,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Ou),c!==void 0){const h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const u=new zM(this,o,t,n);return this._bindAction(u,l),this._addInactiveAction(u,a,r),u}existingAction(e,t){const n=t||this._root,s=n.uuid,r=typeof e=="string"?cu.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(s,e,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ru}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ru);function Wd(i,e){if(e===Hm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ql||e===Nf){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Ql)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class GM extends Gr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new YM(t)}),this.register(function(t){return new KM(t)}),this.register(function(t){return new sS(t)}),this.register(function(t){return new rS(t)}),this.register(function(t){return new oS(t)}),this.register(function(t){return new ZM(t)}),this.register(function(t){return new JM(t)}),this.register(function(t){return new QM(t)}),this.register(function(t){return new eS(t)}),this.register(function(t){return new qM(t)}),this.register(function(t){return new tS(t)}),this.register(function(t){return new $M(t)}),this.register(function(t){return new iS(t)}),this.register(function(t){return new nS(t)}),this.register(function(t){return new XM(t)}),this.register(function(t){return new aS(t)}),this.register(function(t){return new cS(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=xo.extractUrlBase(e);o=xo.resolveURL(l,this.path)}else o=xo.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new fp(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===gp){try{o[nt.KHR_BINARY_GLTF]=new lS(e)}catch(h){s&&s(h);return}r=JSON.parse(o[nt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new SS(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case nt.KHR_MATERIALS_UNLIT:o[h]=new jM;break;case nt.KHR_DRACO_MESH_COMPRESSION:o[h]=new uS(r,this.dracoLoader);break;case nt.KHR_TEXTURE_TRANSFORM:o[h]=new hS;break;case nt.KHR_MESH_QUANTIZATION:o[h]=new dS;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function WM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const nt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class XM{constructor(e){this.parser=e,this.name=nt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new pe(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],un);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new mp(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new AM(u),l.distance=h;break;case"spot":l=new wM(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Si(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class jM{constructor(){this.name=nt.KHR_MATERIALS_UNLIT}getMaterialType(){return yn}extendParams(e,t,n){const s=[];e.color=new pe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],un),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Bt))}return Promise.all(s)}}class qM{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class YM{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new te(a,a)}return Promise.all(r)}}class KM{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class $M{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class ZM{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new pe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],un)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Bt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class JM{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class QM{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new pe().setRGB(a[0],a[1],a[2],un),Promise.all(r)}}class eS{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class tS{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new pe().setRGB(a[0],a[1],a[2],un),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Bt)),Promise.all(r)}}class nS{constructor(e){this.parser=e,this.name=nt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class iS{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class sS{constructor(e){this.parser=e,this.name=nt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class rS{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class oS{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class aS{constructor(e){this.name=nt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}}class cS{constructor(e){this.name=nt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==An.TRIANGLES&&l.mode!==An.TRIANGLE_STRIP&&l.mode!==An.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(const g of h){const _=new Ge,m=new I,p=new cn,y=new I(1,1,1),S=new Ro(g.geometry,g.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&y.fromBufferAttribute(c.SCALE,v),S.setMatrixAt(v,_.compose(m,p,y));for(const v in c)if(v==="_COLOR_0"){const P=c[v];S.instanceColor=new nu(P.array,P.itemSize,P.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);At.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),f.push(S)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const gp="glTF",to=12,Xd={JSON:1313821514,BIN:5130562};class lS{constructor(e){this.name=nt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,to),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==gp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-to,r=new DataView(e,to);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Xd.JSON){const l=new Uint8Array(e,to+o,a);this.content=n.decode(l)}else if(c===Xd.BIN){const l=to+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class uS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=nt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=lu[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=lu[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=_r[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}h(f)},a,l,un,d)})})}}class hS{constructor(){this.name=nt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class dS{constructor(){this.name=nt.KHR_MESH_QUANTIZATION}}class _p extends ko{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,g=e*l,_=g-l,m=-2*f+3*d,p=f-d,y=1-m,S=p-d+h;for(let v=0;v!==a;v++){const P=o[_+v+a],w=o[_+v+c]*u,T=o[g+v+a],C=o[g+v]*u;r[v]=y*P+S*w+m*T+p*C}return r}}const fS=new cn;class pS extends _p{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return fS.fromArray(r).normalize().toArray(r),r}}const An={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},_r={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},jd={9728:an,9729:rn,9984:Ef,9985:Ea,9986:oo,9987:wi},qd={33071:Yi,33648:Ba,10497:Ns},il={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},lu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Gi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},mS={CUBICSPLINE:void 0,LINEAR:To,STEP:wo},sl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function gS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new eh({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Li})),i.DefaultMaterial}function ds(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Si(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function _S(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function vS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function xS(i){let e;const t=i.extensions&&i.extensions[nt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+rl(t.attributes):e=i.indices+":"+rl(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+rl(i.targets[n]);return e}function rl(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function uu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function yS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const MS=new Ge;class SS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new WM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new SM(this.options.manager):this.textureLoader=new CM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new fp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return ds(r,a,s),Si(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[nt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(xo.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=il[s.type],a=_r[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new _t(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=il[s.type],l=_r[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(f&&f!==h){const p=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let S=t.cache.get(y);S||(_=new l(a,p*f,s.count*f/u),S=new Ay(_,f/u),t.cache.add(y,S)),m=new Wu(S,c,d%f/u,g)}else a===null?_=new l(s.count*c):_=new l(a,d,s.count*c),m=new _t(_,c,g);if(s.sparse!==void 0){const p=il.SCALAR,y=_r[s.sparse.indices.componentType],S=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,P=new y(o[1],S,s.sparse.count*p),w=new l(o[2],v,s.sparse.count*c);a!==null&&(m=new _t(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,C=P.length;T<C;T++){const M=P[T];if(m.setX(M,w[T*c]),c>=2&&m.setY(M,w[T*c+1]),c>=3&&m.setZ(M,w[T*c+2]),c>=4&&m.setW(M,w[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=jd[d.magFilter]||rn,u.minFilter=jd[d.minFilter]||wi,u.wrapS=qd[d.wrapS]||Ns,u.wrapT=qd[d.wrapT]||Ns,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==an&&u.minFilter!==rn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Vt(_);m.needsUpdate=!0,d(m)}),t.load(xo.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),Si(h,o),h.userData.mimeType=o.mimeType||yS(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[nt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[nt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[nt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Yu,jn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new ep,jn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return eh}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[nt.KHR_MATERIALS_UNLIT]){const h=s[nt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new pe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],un),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,Bt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=qt);const u=r.alphaMode||sl.OPAQUE;if(u===sl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===sl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==yn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new te(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==yn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==yn){const h=r.emissiveFactor;a.emissive=new pe().setRGB(h[0],h[1],h[2],un)}return r.emissiveTexture!==void 0&&o!==yn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Bt)),Promise.all(l).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Si(h,r),t.associations.set(h,{materials:e}),r.extensions&&ds(s,h,r),h})}createUniqueName(e){const t=ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[nt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Yd(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=xS(l),h=s[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[nt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Yd(new Lt,l,t),s[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?gS(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],m=o[f];let p;const y=l[f];if(m.mode===An.TRIANGLES||m.mode===An.TRIANGLE_STRIP||m.mode===An.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Cy(_,y):new Oe(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===An.TRIANGLE_STRIP?p.geometry=Wd(p.geometry,Nf):m.mode===An.TRIANGLE_FAN&&(p.geometry=Wd(p.geometry,Ql));else if(m.mode===An.LINES)p=new tp(_,y);else if(m.mode===An.LINE_STRIP)p=new qu(_,y);else if(m.mode===An.LINE_LOOP)p=new Ly(_,y);else if(m.mode===An.POINTS)p=new np(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&vS(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Si(p,r),m.extensions&&ds(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&ds(s,h[0],r),h[0];const d=new Qt;r.extensions&&ds(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new sn(pg.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new sc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Si(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const d=new Ge;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ju(a,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const f=s.channels[h],g=s.samplers[f.sampler],_=f.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let y=0,S=d.length;y<S;y++){const v=d[y],P=f[y],w=g[y],T=_[y],C=m[y];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const M=n._createAnimationTracks(v,P,w,T,C);if(M)for(let x=0;x<M.length;x++)p.push(M[x])}return new cu(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,MS)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new Qf:l.length>1?u=new Qt:l.length===1?u=l[0]:u=new At,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Si(u,r),r.extensions&&ds(n,u,r),r.matrix!==void 0){const h=new Ge;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new Qt;n.name&&(r.name=s.createUniqueName(n.name)),Si(r,n),n.extensions&&ds(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[d,f]of s.associations)(d instanceof jn||d instanceof Vt)&&h.set(d,f);return u.traverse(d=>{const f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,c=[];Gi[r.path]===Gi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Gi[r.path]){case Gi.weights:l=Pr;break;case Gi.rotation:l=Ir;break;case Gi.position:case Gi.scale:l=Lr;break;default:switch(n.itemSize){case 1:l=Pr;break;case 2:case 3:default:l=Lr;break}break}const u=s.interpolation!==void 0?mS[s.interpolation]:To,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+Gi[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=uu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Ir?pS:_p;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function bS(i,e,t){const n=e.attributes,s=new Mn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),a.normalized){const u=uu(_r[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new I,c=new I;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=uu(_r[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new ai;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Yd(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=lu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return st.workingColorSpace!==un&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),Si(i,e),bS(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?_S(i,e.targets,t):i})}const vp=new GM,Wr=new Map;function Xa(i,e,t="idle"){vp.load("/varvet/models/"+e.file,n=>{const s=n.scene;if(s.traverse(c=>{const l=c;if(!l.isMesh)return;const u=l.material;l.material=new fn({map:u.map,side:qt}),l.castShadow=!0,l.receiveShadow=!0,l.frustumCulled=!1}),e.height){const c=new Mn().setFromObject(s),l=c.max.y-c.min.y;l>0&&s.scale.setScalar(e.height/l)}for(const c of[...i.children])i.remove(c);i.add(s),i.userData.realModel=!0;const r=new VM(s),o={};for(const[c,l]of Object.entries(e.anims)){const u=n.animations.find(h=>h.name===l);if(u){for(const h of u.tracks)if(/Hips\.position$/i.test(h.name)){const d=h.values;for(let f=0;f<d.length;f+=3)d[f]=d[0],d[f+2]=d[2]}o[c]=r.clipAction(u)}}const a={mixer:r,actions:o,cur:""};Wr.set(i,a),Zi(i,t,0)},void 0,n=>console.warn("Kunde inte ladda",e.file,n))}function Zi(i,e,t=.35){const n=Wr.get(i);if(!n||n.cur===e)return;const s=n.actions[e];if(!s)return;const r=n.actions[n.cur];s.reset().setEffectiveWeight(1).fadeIn(t).play(),r&&r.fadeOut(t),n.cur=e}function Kd(i,e,t){var s;const n=(s=Wr.get(i))==null?void 0:s.actions[e];n&&(n.timeScale=t)}function ES(i,e,t="idle",n=1400){const s=Wr.get(i);!s||!s.actions[e]||(Zi(i,e,.2),s.lock=performance.now()+n,setTimeout(()=>{s.cur===e&&Zi(i,t,.3)},n))}const wS=i=>{var e;return(((e=Wr.get(i))==null?void 0:e.lock)||0)>performance.now()};function TS(i){for(const e of Wr.values())e.mixer.update(i)}const AS={file:"sven.glb",height:1.8,anims:{idle:"Idle_11",talk:"Stand_and_Chat",walk:"Walking",run:"Running",pick:"Female_Bend_Over_Pick_Up_Inspect",work:"_01a1b7c1_4e5f_70d8_8a3b_cb3eefccb99a",hammer:"_01a1b7c3_a88d_7729_a2f3_067451260fca"}},RS={file:"spelare_man.glb",height:1.78,anims:{idle:"Idle_11",walk:"Walking",run:"Running",talk:"Listening_Gesture",pick:"Female_Bend_Over_Pick_Up_Inspect",jump:"Regular_Jump",sit:"Chair_Sit_Idle_M",work:"_01a1b7c1_4e5f_70d8_8a3b_cb3eefccb99a",hammer:"_01a1b7c3_a88d_7729_a2f3_067451260fca"}},CS={file:"spelare_kvinna.glb",height:1.7,anims:{idle:"Idle_15",walk:"Walking_Woman",run:"Running",talk:"Talk_with_Left_Hand_on_Hip",pick:"Female_Bend_Over_Pick_Up_Inspect",jump:"Regular_Jump",sit:"Chair_Sit_Idle_F",work:"_01a1b7c1_4e5f_70d8_8a3b_cb3eefccb99a",hammer:"_01a1b7c3_a88d_7729_a2f3_067451260fca"}},xp={man:RS,kvinna:CS},PS={file:"majken.glb",height:1.66,anims:{idle:"Idle_6",talk:"Talk_with_Left_Hand_on_Hip",walk:"Walking",stroll:"Thoughtful_Walk",run:"Running",sit:"Chair_Sit_Idle_F"}};function yp(i,e,t){vp.load("/varvet/models/"+e,n=>{const s=n.scene;s.traverse(c=>{const l=c;if(!l.isMesh)return;const u=l.material;l.material=new fn({map:u.map,side:qt}),l.castShadow=!0,l.receiveShadow=!0});const r=new Mn().setFromObject(s),o=r.getSize(new I);if(s.scale.setScalar(t.fit/Math.max(o.x,o.z)),t.rotY&&(s.rotation.y=t.rotY),s.position.y=t.y||0,t.ground!=null){s.updateMatrixWorld(!0);const c=new Mn().setFromObject(s);s.position.y+=t.ground-c.min.y}if(t.hideChildren)for(const c of i.children)c.visible=!1;const a=i;if(a.isMesh&&(a.geometry=new Lt),i.add(s),i.userData.realModel=!0,t.waterMask!=null&&i.add(IS(s,t.waterMask)),t.liner){const c=s.clone(!0);c.scale.multiplyScalar(t.liner),c.traverse(u=>{const h=u;h.isMesh&&(h.castShadow=!1)});const l=new Mn().setFromObject(s).getCenter(new I);i.worldToLocal(l),c.position.y=s.position.y+(l.y-s.position.y)*(1-t.liner),i.add(c)}},void 0,n=>console.warn("Kunde inte ladda",e,n))}function IS(i,e){i.updateMatrix();const t=[],n=new I;i.traverse(f=>{const g=f;if(!g.isMesh)return;const _=g.geometry.attributes.position;g.updateMatrix();for(let m=0;m<_.count;m+=3)n.fromBufferAttribute(_,m).applyMatrix4(g.matrix).applyMatrix4(i.matrix),t.push([n.x,n.z])}),t.sort((f,g)=>f[0]-g[0]||f[1]-g[1]);const s=(f,g,_)=>(g[0]-f[0])*(_[1]-f[1])-(g[1]-f[1])*(_[0]-f[0]),r=[],o=[];for(const f of t){for(;r.length>=2&&s(r[r.length-2],r[r.length-1],f)<=0;)r.pop();r.push(f)}for(let f=t.length-1;f>=0;f--){const g=t[f];for(;o.length>=2&&s(o[o.length-2],o[o.length-1],g)<=0;)o.pop();o.push(g)}const a=r.slice(0,-1).concat(o.slice(0,-1)),c=a.reduce((f,g)=>f+g[0],0)/a.length,l=a.reduce((f,g)=>f+g[1],0)/a.length,u=new Fo(a.map(([f,g])=>new te(c+(f-c)*.96,-(l+(g-l)*.96)))),h=new Qu(u);h.rotateX(-Math.PI/2),h.translate(0,e,0);const d=new Oe(h,new yn({colorWrite:!1,depthWrite:!0,transparent:!0,side:qt}));return d.renderOrder=.5,d.frustumCulled=!1,d}const LS="/varvet/tex/",DS=new pp,$d=new Map;function NS(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function $n(i,e,t=160,n=6,s=34,r=.22){return(o,a,c)=>{o.fillStyle=i,o.fillRect(0,0,a,a);for(let l=0;l<t;l++){const u=c()*a,h=c()*a,d=n+c()*(s-n),f=e[l%e.length];for(const g of[-a,0,a])for(const _ of[-a,0,a]){const m=o.createRadialGradient(u+g,h+_,0,u+g,h+_,d);m.addColorStop(0,f),m.addColorStop(1,"rgba(0,0,0,0)"),o.globalAlpha=r*(.5+c()*.8),o.fillStyle=m,o.fillRect(u+g-d,h+_-d,d*2,d*2)}}o.globalAlpha=1}}function US(i,e,t=256){const n=document.createElement("canvas");return n.width=n.height=t,i(n.getContext("2d"),t,NS(e)),n}function Zn(i,e,t=1,n=Bt){const s=$d.get(i);if(s)return s;const r=new Vt(US(e,t));r.wrapS=r.wrapT=Ns,r.colorSpace=n,r.anisotropy=4,r.needsUpdate=!0,$d.set(i,r);const o=(a,c)=>DS.load(LS+i+a,l=>{r.dispose(),r.image=l,r.needsUpdate=!0,r.userData.real=!0},void 0,()=>c&&c());return o(".webp",()=>o(".png")),r}const ti={grass:()=>Zn("grass",$n("#86b35f",["#6f9e4c","#9cc46e","#5e8c43","#b3cf7d"],220,5,30),11),granite:()=>Zn("granite",$n("#c4a69c",["#a98a82","#d8bdb2","#8f7471","#e6d3c9"],200,4,26,.3),12),sand:()=>Zn("sand",$n("#e9d8ad",["#dcc795","#f3e6c4","#cdb684"],160,4,24),13),dirt:()=>Zn("dirt",$n("#b39d7b",["#9c8565","#c9b592","#8a7457","#d6c6a5"],220,3,18,.28),14),planks:()=>Zn("planks",$n("#8d7a63",["#7a6852","#a08d74","#6b5a47"],160,3,20),16),needles:()=>Zn("needles",$n("#3f7a45",["#2f6338","#5a9455","#26532f"],220,4,18),17),leaves:()=>Zn("leaves",$n("#8cbf55",["#6fa244","#b2d671","#5b8c3a"],220,4,18),18),pinebark:()=>Zn("pinebark",$n("#9a5b3c",["#7d4a33","#b9704a","#6e6058"],160,3,14),19),birchbark:()=>Zn("birchbark",$n("#ece6da",["#d9d0c0","#f6f2ea","#3b3734"],120,2,10),20),paper:()=>Zn("paper",$n("#f4efe4",["#e9e1d0","#fbf8f1","#e2d8c4"],300,2,16,.35),15)};function FS(){const i=new fn({vertexColors:!0}),e={tGrass:{value:ti.grass()},tRock:{value:ti.granite()},tSand:{value:ti.sand()},tDirt:{value:ti.dirt()},uScale:{value:.11}};return i.onBeforeCompile=t=>{Object.assign(t.uniforms,e),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 splat;
varying vec4 vSplat;
varying vec3 vWP;
varying vec3 vWN;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSplat = splat;
vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;
vWN = normalize(mat3(modelMatrix) * objectNormal);`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = tex * vColor;`)},i}const OS="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",kS=`
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
}`;class BS{constructor(){Fi(this,"enabled",!0);Fi(this,"strength",1);Fi(this,"rt");Fi(this,"quad");Fi(this,"qScene",new Jf);Fi(this,"qCam",new sc(-1,1,1,-1,0,1));Fi(this,"mat");this.rt=new is(4,4,{depthTexture:new Vu(4,4),samples:4,type:Br}),this.mat=new bn({vertexShader:OS,fragmentShader:kS,depthTest:!1,depthWrite:!1,uniforms:{tScene:{value:this.rt.texture},tDepth:{value:this.rt.depthTexture},tPaper:{value:ti.paper()},uRes:{value:new te(4,4)},uNear:{value:.3},uFar:{value:900},uStrength:{value:1}}}),this.quad=new Oe(new ii(2,2),this.mat),this.quad.frustumCulled=!1,this.qScene.add(this.quad)}render(e,t,n){if(!this.enabled){e.setRenderTarget(null),e.render(t,n);return}const s=e.getDrawingBufferSize(new te);(s.x!==this.rt.width||s.y!==this.rt.height)&&(this.rt.setSize(s.x,s.y),this.mat.uniforms.uRes.value.copy(s)),this.mat.uniforms.uNear.value=n.near,this.mat.uniforms.uFar.value=n.far,this.mat.uniforms.uStrength.value=this.strength,e.setRenderTarget(this.rt),e.render(t,n),e.setRenderTarget(null),e.render(this.qScene,this.qCam)}}function Mp(i){const e=ti.planks();i.onBeforeCompile=t=>{t.uniforms.tPlanks={value:e},t.uniforms.tNeedles={value:ti.needles()},t.uniforms.tLeaves={value:ti.leaves()},t.uniforms.tPineBark={value:ti.pinebark()},t.uniforms.tBirchBark={value:ti.birchbark()},t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
vWN2 = normalize(mat3(modelMatrix) * nI);`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
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
        }`)}}const zS=3;let Qn=1,bs=!0,yo=0,hr=0,lo=0,vn=null,ja=60;function HS(i,e){vn=i,ja=e,Qn=1,bs=i.shadowsAllowed,yo=0,hr=0,lo=0,uo()}function VS(i){ja=i,yo=0,hr=0}function hu(){return{scale:Qn,shadows:bs,dpr:vn?vn.renderer.getPixelRatio():1}}function uo(){if(!vn)return;const i=Math.min(window.devicePixelRatio||1,vn.maxDpr),e=Math.max(.6,Math.round(i*Qn*20)/20);Math.abs(vn.renderer.getPixelRatio()-e)>.01&&(vn.renderer.setPixelRatio(e),vn.renderer.setSize(window.innerWidth,window.innerHeight,!1)),vn.setShadows(bs&&vn.shadowsAllowed)}function GS(i){if(!vn||i<=0||i>.5||(yo++,hr+=i,hr<zS))return;const e=yo/hr;yo=0,hr=0,e<ja*.88?(lo=0,Qn>.6?(Qn=Math.max(.6,Qn-.15),uo()):bs&&vn.shadowsAllowed&&(bs=!1,uo())):e>ja*.97?++lo>=3&&(lo=0,!bs&&vn.shadowsAllowed&&Qn>=.75?(bs=!0,uo()):Qn<1&&(Qn=Math.min(1,Qn+.1),uo())):lo=0}const Ot=Object.assign({q:1,fps:30,perf:0},(()=>{try{return JSON.parse(localStorage.getItem("varvet_set")||"{}")}catch{return{}}})()),Sp=()=>{try{localStorage.setItem("varvet_set",JSON.stringify(Ot))}catch{}},bp=[{dpr:1,shadow:0,smap:0,trees:.6},{dpr:1.5,shadow:1,smap:1024,trees:1},{dpr:2,shadow:1,smap:2048,trees:1}],Os=document.getElementById("c"),ln=new Ty({canvas:Os,antialias:!0,powerPreference:"high-performance"});ln.outputColorSpace=Bt;ln.toneMapping=Sf;ln.toneMappingExposure=1.05;ln.shadowMap.type=Mf;const qe=new Jf,WS=new pe("#9fd0ea"),Ep=new pe("#bfdced");qe.fog=new Gu(Ep,90,420);const qn=new sn(55,1,.3,900);{const i=new xn(800,24,12),e=new bn({side:on,depthWrite:!1,fog:!1,uniforms:{top:{value:new pe("#4f9ad6")},mid:{value:WS},bot:{value:Ep}},vertexShader:"varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform vec3 top,mid,bot;varying vec3 vP;void main(){float y=vP.y;vec3 c=y>0.?mix(mid,top,pow(clamp(y*1.6,0.,1.),.8)):bot;c=mix(bot,c,smoothstep(-.02,.12,y));gl_FragColor=vec4(c,1.);}"}),t=new Oe(i,e);t.renderOrder=-1,t.frustumCulled=!1,qe.add(t),qe.userData.sky=t}const du=new bM("#e8f1f4","#8f9c6c",1.25);qe.add(du);const Mt=new mp("#ffe8c4",2);Mt.position.set(60,90,40);qe.add(Mt);qe.add(Mt.target);Mt.shadow.camera.left=-32;Mt.shadow.camera.right=32;Mt.shadow.camera.top=32;Mt.shadow.camera.bottom=-32;Mt.shadow.camera.near=10;Mt.shadow.camera.far=220;Mt.shadow.bias=-6e-4;Mt.shadow.normalBias=.04;let Jn=bp[Ot.q];function wp(){Jn=bp[Ot.q];const i=Math.min(devicePixelRatio||1,Jn.dpr);ln.setPixelRatio(i),ln.shadowMap.enabled=!!Jn.shadow,Mt.castShadow=!!Jn.shadow,Jn.shadow&&(Mt.shadow.mapSize.set(Jn.smap,Jn.smap),Mt.shadow.map&&(Mt.shadow.map.dispose(),Mt.shadow.map=null)),qe.traverse(e=>{e.material&&e.material.needsUpdate!==void 0&&(e.material.needsUpdate=!0)}),Tp(),HS({renderer:ln,maxDpr:Jn.dpr,shadowsAllowed:!!Jn.shadow,setShadows:XS},Ot.fps)}function XS(i){ln.shadowMap.enabled===i&&Mt.castShadow===i||(ln.shadowMap.enabled=i,Mt.castShadow=i,qe.traverse(e=>{e.material&&(e.material.needsUpdate=!0)}))}function Tp(){ln.setSize(innerWidth,innerHeight,!1),qn.aspect=innerWidth/innerHeight,qn.fov=innerWidth<innerHeight?68:55,qn.updateProjectionMatrix()}addEventListener("resize",Tp);const Zd=new BS;function jS(){Zd.enabled=Ot.q>=1,Zd.render(ln,qe,qn)}const uc=document.getElementById("perf");let _a=0,va=0,Jd=0,Qd=0,ol=0;function qS(i,e){if(_a++,va+=i,ol+=e,va>=.5&&(Jd=_a/va,Qd=ol/_a,_a=0,va=0,ol=0,Ot.perf)){const t=ln.info;uc.textContent=`FPS   ${Jd.toFixed(0)} / ${Ot.fps}
CPU   ${Qd.toFixed(1)} ms
Anrop ${t.render.calls}
Trian ${(t.render.triangles/1e3).toFixed(0)}k
DPR   ${ln.getPixelRatio().toFixed(2)}
Auto  ${Math.round(hu().scale*100)}% ${hu().shadows?"skugg":"utan skugg"}
Kval  ${["Låg","Medel","Hög"][Ot.q]}`}}function sh(i){const e=new Uint8Array(512),t=hc(i),n=[...Array(256).keys()];for(let a=255;a>0;a--){const c=Math.floor(t()*(a+1));[n[a],n[c]]=[n[c],n[a]]}for(let a=0;a<512;a++)e[a]=n[a&255];const s=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],r=.5*(Math.sqrt(3)-1),o=(3-Math.sqrt(3))/6;return(a,c)=>{const l=(a+c)*r,u=Math.floor(a+l),h=Math.floor(c+l),d=(u+h)*o,f=a-(u-d),g=c-(h-d),_=f>g?1:0,m=1-_,p=f-_+o,y=g-m+o,S=f-1+2*o,v=g-1+2*o,P=u&255,w=h&255,T=(C,M,x,R)=>{let O=.5-x*x-R*R;if(O<0)return 0;O*=O;const N=s[e[C+e[M]]&7];return O*O*(N[0]*x+N[1]*R)};return 70*(T(P,w,f,g)+T(P+_,w+m,p,y)+T(P+1,w+1,S,v))}}function hc(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const YS=sh(7),Es=sh(19),Ap=sh(31),fu=(i,e,t=4)=>{let n=0,s=1,r=.5;for(let o=0;o<t;o++)n+=r*YS(i*s,e*s),s*=2.03,r*=.5;return n},Pi=(i,e,t)=>i<e?e:i>t?t:i,al=(i,e,t)=>i+(e-i)*t,vr=(i,e,t)=>{const n=Pi((t-i)/(e-i),0,1);return n*n*(3-2*n)},KS={"#9a7a55":1,"#a47c52":1,"#8f6a45":1,"#c49a66":1,"#b88b58":1,"#6b5137":.8,"#5e4630":.8,"#7a5136":4,"#2f6b3d":2,"#357a43":2,"#3d8a4b":2,"#efece4":5,"#8cc35b":3,"#9bcf66":3,"#8a6646":.7,"#9a7552":.7,"#b8392b":.55,"#6e1f17":.55,"#e9e4d8":.35,"#f4f1ea":.35};function le(i,e,t){const n=i.index?i.toNonIndexed():i,s=new pe(e),r=n.attributes.position.count,o=new Float32Array(r*3);for(let a=0;a<r;a++)o[a*3]=s.r,o[a*3+1]=s.g,o[a*3+2]=s.b;return n.setAttribute("color",new _t(o,3)),n.setAttribute("mat",new _t(new Float32Array(r).fill(t??(KS[String(e).toLowerCase()]||0)),1)),n.deleteAttribute("uv"),n}function Ft(i){let e=0;for(const c of i)e+=c.attributes.position.count;const t=new Float32Array(e*3),n=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e);let o=0;for(const c of i)t.set(c.attributes.position.array,o*3),n.set(c.attributes.normal.array,o*3),s.set(c.attributes.color.array,o*3),c.attributes.mat&&r.set(c.attributes.mat.array,o),o+=c.attributes.position.count;const a=new Lt;return a.setAttribute("position",new _t(t,3)),a.setAttribute("normal",new _t(n,3)),a.setAttribute("color",new _t(s,3)),a.setAttribute("mat",new _t(r,1)),a.computeBoundingSphere(),a}const Ae=(i,e,t,n,s=0,r=1)=>(i.scale(r,r,r),s&&i.rotateY(s),i.translate(e,t,n),i),In=new fn({vertexColors:!0}),pu=new fn({vertexColors:!0,side:qt});Mp(In);Mp(pu);const ae=i=>document.getElementById(i),Dn={mx:0,mz:0,keys:{}},je={yaw:Math.PI,pitch:.38,dist:8.5,tYaw:Math.PI,tPitch:.38},Ia=document.getElementById("joy"),Rp=document.getElementById("knob");let Lo=null,mu={x:0,y:0},Do=null,La={x:0,y:0};const no=60;Os.addEventListener("pointerdown",i=>{i.clientX<innerWidth*.45&&Lo===null?(Lo=i.pointerId,mu={x:i.clientX,y:i.clientY},Ia.style.display="block",Ia.style.left=i.clientX+"px",Ia.style.top=i.clientY+"px",Rp.style.transform="",gu()):Do===null&&(Do=i.pointerId,La={x:i.clientX,y:i.clientY},gu()),Os.setPointerCapture(i.pointerId)});Os.addEventListener("pointermove",i=>{if(i.pointerId===Lo){let e=i.clientX-mu.x,t=i.clientY-mu.y;const n=Math.hypot(e,t);n>no&&(e*=no/n,t*=no/n),Rp.style.transform=`translate(${e}px,${t}px)`,Dn.mx=e/no,Dn.mz=t/no}else if(i.pointerId===Do){const e=i.clientX-La.x,t=i.clientY-La.y;La={x:i.clientX,y:i.clientY},je.tYaw-=e*.006,je.tPitch=Pi(je.tPitch+t*.004,.08,1.25)}});const Cp=i=>{i.pointerId===Lo&&(Lo=null,Dn.mx=Dn.mz=0,Ia.style.display="none"),i.pointerId===Do&&(Do=null)};Os.addEventListener("pointerup",Cp);Os.addEventListener("pointercancel",Cp);Os.addEventListener("wheel",i=>{je.dist=Pi(je.dist+i.deltaY*.01,4,18)},{passive:!0});addEventListener("keydown",i=>{Dn.keys[i.code]=1,gu()});addEventListener("keyup",i=>{Dn.keys[i.code]=0});let ef=0;function gu(){ef||(ef=1,setTimeout(()=>document.getElementById("hint").style.opacity=0,2500))}const Dr=[{x:0,z:0,rx:95,rz:72,peak:15},{x:175,z:-120,rx:46,rz:38,peak:9},{x:-160,z:140,rx:30,rz:26,peak:6},{x:120,z:150,rx:14,rz:12,peak:4}],yt={x:0,z:44,r:18,h:1.3};function $S(i,e){let t=-1;for(const s of Dr){const r=(i-s.x)/s.rx,o=(e-s.z)/s.rz,a=.18*fu(i*.012+s.x,e*.012+s.z,3),l=(1-(Math.sqrt(r*r+o*o)+a))*(s.peak/6);t=Math.max(t,l)}let n;if(t>0){const s=vr(0,1.2,t);n=t*6*(.55+.45*s),n+=s*(fu(i*.03,e*.03,4)*4.5+Math.abs(Es(i*.08,e*.08))*1.6)}else n=t*9;return n}function qi(i,e){let t=$S(i,e);const n=Math.hypot(i-yt.x,e-yt.z),s=1-vr(yt.r,yt.r+10,n);if(t=al(t,yt.h+Ap(i*.1,e*.1)*.15,s),Math.abs(i+12)<5&&e>yt.z+8&&e<yt.z+48){const r=1-vr(3,5,Math.abs(i+12)),o=al(yt.h,-2.6,Pi((e-(yt.z+10))/30,0,1));t=Math.min(t,al(t,o,r))}return t}const Pt=460,Jt=230,Ji=new Float32Array((Jt+1)*(Jt+1));function si(i,e){const t=(i+Pt/2)/Pt*Jt,n=(e+Pt/2)/Pt*Jt;if(t<0||n<0||t>=Jt||n>=Jt)return-9;const s=t|0,r=n|0,o=t-s,a=n-r,c=Ji[r*(Jt+1)+s],l=Ji[r*(Jt+1)+s+1],u=Ji[(r+1)*(Jt+1)+s],h=Ji[(r+1)*(Jt+1)+s+1];return o+a<1?c+(l-c)*o+(u-c)*a:h+(u-h)*(1-o)+(l-h)*(1-a)}function ZS(){const i=new ii(Pt,Pt,Jt,Jt);i.rotateX(-Math.PI/2);const e=i.attributes.position,t=new Float32Array(e.count*3);for(let a=0;a<e.count;a++){const c=e.getX(a),l=e.getZ(a),u=qi(c,l);e.setY(a,u),Ji[a]=u}i.computeVertexNormals();const n=i.attributes.normal,s=new Float32Array(e.count*4);for(let a=0;a<e.count;a++){const c=e.getX(a),l=e.getZ(a),u=e.getY(a),h=n.getY(a),d=Ap(c*.05,l*.05);let f=0,g=0,_=0,m=0;if(u<-.4){_=1;const y=1-Pi((-u-.4)/4,0,1)*.45;t[a*3]=y*.86,t[a*3+1]=y*.95,t[a*3+2]=y*.95}else{const p=1-vr(.5+d*.4,1.3+d*.4,u),y=Pi((.86-h)*5+(u>9?.4:0)+Es(c*.04,l*.04)*.5,0,1),S=vr(.3,.65,y)*(1-p*.7);_=p*(1-S),g=S,f=(1-p)*(1-S);const v=Math.hypot(c-yt.x,l-yt.z);if(v<yt.r+4&&u>.4){const w=(1-vr(yt.r-10,yt.r+2,v))*.75*(.7+.3*Es(c*.15,l*.15));m=w,f*=1-w,_*=1-w}const P=.9+.16*Pi(.5+d,0,1);t[a*3]=P,t[a*3+1]=P*(1.02-.04*g),t[a*3+2]=P*(.96+.04*g)}s[a*4]=f,s[a*4+1]=g,s[a*4+2]=_,s[a*4+3]=m}i.setAttribute("color",new _t(t,3)),i.setAttribute("splat",new _t(s,4));const r=FS(),o=new Oe(i,r);return o.receiveShadow=!0,qe.add(o),o}function Pp(){const e=new Uint8Array(262144);for(let n=0;n<256;n++)for(let s=0;s<256;s++){const r=(s/255-.5)*Pt,o=(n/255-.5)*Pt,a=si(r,o),c=Pi((a+8)/12,0,1);e[(n*256+s)*4]=c*255,e[(n*256+s)*4+3]=255}const t=new Xu(e,256,256);return t.magFilter=rn,t.minFilter=rn,t.needsUpdate=!0,t}const rh=[],de={pos:new I(2,0,50),vel:new I,yaw:0,walk:0,speed:0,grounded:!0,vy:0},pt=new Qt;qe.add(pt);const ho={};{const i="#f1c7a4",e="#2f5d8a",t="#3b3f45",n="#ffc21a",s=h=>new fn({color:h}),r=new Oe(new Cr(.36,.55,4,10),s(e));r.position.y=1.12,pt.add(r);const o=new Oe(new xn(.3,16,12),s(i));o.position.y=1.82,pt.add(o);const a=new Oe(new xn(.31,14,8,0,Math.PI*2,0,Math.PI/2),s(n));a.position.y=1.86,pt.add(a);const c=new Oe(new Ht(.22,.22,.04,12),s(n));c.scale.set(1,1,.9),c.position.set(0,1.88,.28),pt.add(c);for(const h of[-1,1]){const d=new Oe(new xn(.045,8,6),s("#2a2a2a"));d.position.set(h*.11,1.84,.27),pt.add(d)}const l=new Oe(new xn(.22,12,8,0,Math.PI*2,Math.PI*.45,Math.PI*.55),s("#8a4a2a"));l.position.set(0,1.78,.1),pt.add(l);const u=(h,d,f,g,_,m)=>{const p=new Qt;p.position.set(_,m,0);const y=new Oe(new Cr(f,d,3,8),s(g));y.position.y=-d/2-f*.5,p.add(y),pt.add(p),ho[h]=p};u("la",.42,.11,e,-.46,1.42),u("ra",.42,.11,e,.46,1.42),u("ll",.5,.14,t,-.17,.72),u("rl",.5,.14,t,.17,.72),pt.traverse(h=>{h.isMesh&&(h.castShadow=!0)})}const Cn=[];function JS(i){const e=hc(42),t=(p,y,S,v)=>{const P=new Ki(p,y,16,3),w=P.attributes.position,T=new I;for(let C=0;C<w.count;C++){T.fromBufferAttribute(w,C);const M=Math.hypot(T.x,T.z);if(M<1e-4)continue;const x=Math.atan2(T.z,T.x),R=M/p,O=T.y<-y/2+.001,N=O?Math.round(x/(Math.PI*2)*16)%2?1.12:.82:1,B=(1+.13*Math.sin(x*5+v)+.08*Es(Math.cos(x)*2+v,Math.sin(x)*2+T.y))*N;T.x*=B,T.z*=B,O&&(T.y-=.22*R+.12*Math.sin(x*3+v)),w.setXYZ(C,T.x,T.y,T.z)}return P.computeVertexNormals(),Ae(P,0,S,0)},n=Ft([le(Ae(new Ht(.16,.3,2.6,8),0,1.3,0),"#7a5136"),le(t(1.8,2.4,2.4,1),"#2f6b3d"),le(t(1.45,2.2,3.5,2),"#357a43"),le(t(1.1,2,4.55,3),"#357a43"),le(t(.7,1.7,5.5,4),"#3d8a4b")]),s=(p,y,S,v,P)=>{const w=new Wa(p,2),T=w.attributes.position,C=new I;for(let M=0;M<T.count;M++){C.fromBufferAttribute(T,M);const x=C.clone().normalize(),R=1+.22*Es(x.x*2.2+P,x.y*2.2+x.z*1.7)+.1*Es(x.z*5+P,x.x*5);C.multiplyScalar(R),C.y*=.85,T.setXYZ(M,C.x,C.y,C.z)}return w.computeVertexNormals(),Ae(w,y,S,v)},r=Ft([le(Ae(new Ht(.11,.18,3.4,7),0,1.7,0),"#efece4"),le(Ae(new Ht(.05,.08,1.4,5).rotateZ(.7),.45,3.3,0),"#efece4"),le(s(1.35,0,4,0,1),"#8cc35b"),le(s(1,.8,4.6,.3,2),"#9bcf66"),le(s(.95,-.6,4.7,-.4,3),"#9bcf66"),le(s(.8,.1,5.3,.5,4),"#8cc35b")]),o=(()=>{const p=new Wa(1,2),y=p.attributes.position;for(let S=0;S<y.count;S++){const v=new I().fromBufferAttribute(y,S),P=1+.22*Es(v.x*1.7+3,v.z*1.7+v.y);v.multiplyScalar(P),v.y*=.62,y.setXYZ(S,v.x,v.y,v.z)}return p.computeVertexNormals(),Ft([le(p,"#b8a29a")])})(),a=(p,y)=>{const S=[];let v=0;for(;S.length<p&&v<p*30;){v++;const P=(e()-.5)*Pt*.9,w=(e()-.5)*Pt*.9,T=qi(P,w);y(P,w,T)&&(Math.hypot(P-yt.x,w-yt.z)<yt.r+6||Cn.some(C=>Math.hypot(C.x-P,C.z-w)<C.r+1.2)||S.push({x:P,z:w,h:T}))}return S},c=(p,y)=>Math.hypot(qi(p+1.5,y)-qi(p-1.5,y),qi(p,y+1.5)-qi(p,y-1.5))/(2*1.5),l=a(Math.round(260*i.trees),(p,y,S)=>S>2.2&&c(p,y)<.55&&fu(p*.02,y*.02,2)>-.15);for(const p of l)Cn.push({x:p.x,z:p.z,r:.45,y6:p.h+6});const u=a(Math.round(70*i.trees),(p,y,S)=>S>1.6&&S<7&&c(p,y)<.4);for(const p of u)Cn.push({x:p.x,z:p.z,r:.35,y6:p.h+5.5});const h=a(140,(p,y,S)=>S>-.8&&S<9),d=(p,y,S,v)=>{const P=new Ro(p,In,y.length),w=new Ge,T=new cn,C=new I,M=new I,x=new Sn;return y.forEach((R,O)=>{const N=S();x.set(0,e()*6.28,0),T.setFromEuler(x),C.set(N,N*(.85+e()*.3),N),M.set(R.x,R.h-.15,R.z),w.compose(M,T,C),P.setMatrixAt(O,w)}),P.castShadow=v,P.receiveShadow=!0,qe.add(P),P};d(n,l,()=>.8+e()*.7,!0),d(r,u,()=>.8+e()*.5,!0),d(o,h,()=>.6+e()*1.8,!0),h.forEach(p=>Cn.push({x:p.x,z:p.z,r:.7}));const f=Ft([le(Ae(new Ki(.12,.5,4),0,.25,0),"#6da64e"),le(Ae(new Ki(.1,.4,4),.15,.2,.08),"#7bb558"),le(Ae(new Ki(.1,.45,4),-.12,.22,-.1),"#5e9a45")]),g=a(Math.round(700*i.trees),(p,y,S)=>S>1.2&&c(p,y)<.35);Cn.length-=0;const _=new Ro(f,In,g.length),m=new Ge;g.forEach((p,y)=>{m.makeRotationY(e()*6),m.setPosition(p.x,p.h,p.z),_.setMatrixAt(y,m)}),qe.add(_)}const Wn=[];let Ke;function QS(){const i=[],e=yt.h,t=12,n=9,s=4.2,r=4,o=34;{const M=[];M.push(le(Ae(new Fe(t,s,n),r,e+s/2,o),"#b8392b"));for(const O of[-1,1])for(const N of[-1,1])M.push(le(Ae(new Fe(.3,s,.3),r+O*t/2,e+s/2,o+N*n/2),"#f2efe8"));M.push(...tf(r,e+s,o,t,n,2.3,"#3b3f45","#b8392b")),M.push(le(Ae(new Fe(4.6,3.4,.2),r,e+1.7,o+n/2+.05),"#6e1f17")),M.push(le(Ae(new Fe(4.9,.22,.3),r,e+3.5,o+n/2+.1),"#f2efe8"));for(const O of[-4,4])M.push(le(Ae(new Fe(1.3,1.1,.15),r+O,e+2.4,o+n/2+.04),"#cfe6f2"),le(Ae(new Fe(1.5,.12,.25),r+O,e+1.8,o+n/2+.08),"#f2efe8"));const x=new Qt,R=new Oe(Ft(M),In);R.castShadow=!0,R.receiveShadow=!0,x.add(R),x.position.set(r,0,o),R.position.set(-r,0,-o),qe.add(x),yp(x,"boden.glb",{fit:t+.4,rotY:0,ground:e-.05,hideChildren:!0,liner:.985})}Wn.push({x0:r-4.6,x1:r+4.6,z0:o-6.4,z1:o+6.4,top:e+7});const a=14,c=58,l=90;i.push(le(Ae(new Fe(3.2,.3,l-c),a,1.3,(c+l)/2),"#9a7a55"));for(let M=c+1;M<l;M+=3)for(const x of[-1.4,1.4])i.push(le(Ae(new Ht(.16,.16,4.5,6),a+x,-1.2,M),"#5e4630"));i.push(le(Ae(new Fe(8,.3,3),a,1.3,l+1.2),"#9a7a55"));{const M=yt.z+10,x=yt.z+40,R=yt.h+.12,O=-2.48,N=Math.hypot(x-M,R-O),B=Math.atan2(R-O,x-M);for(const q of[-1,1]){const V=new Fe(.25,.25,N);V.rotateX(B),V.translate(-12+q*1.3,(R+O)/2,(M+x)/2),i.push(le(V,"#5b5f66"))}}const u=new Oe(nf("#e9e4d8","#2f5d8a"),pu);u.position.set(-6,e+1.15,47),u.rotation.y=.4,u.castShadow=!0,qe.add(u);for(const M of[-1.2,1.2])i.push(le(Ae(new Fe(.3,1,2.6),-6+M*.4,e+.5,47+M*1.1),"#6b5137"));Wn.push({x0:-9.5,x1:-2.5,z0:44,z1:50,top:e+2});for(let M=0;M<5;M++)i.push(le(Ae(new Fe(3.6,.22,.4),-13,e+.12+M*.24,36+M*.05),M%2?"#c49a66":"#b88b58"));Wn.push({x0:-15,x1:-11,z0:35,z1:37.5,top:e+1.4});for(let M=0;M<3;M++)i.push(le(Ae(new Ht(.42,.42,1.05,10),12+M*.95,e+.52,40),M==1?"#2f5d8a":"#a33a2a"));Wn.push({x0:11.4,x1:14.8,z0:39.4,z1:40.6,top:e+1.2}),i.push(le(Ae(new Ht(.07,.09,9,6),-3,e+4.5,56),"#f2efe8")),Cn.push({x:-3,z:56,r:.3});const h=new Oe(Ft(i),In);h.castShadow=!0,h.receiveShadow=!0,qe.add(h);const d=new Qt;d.add(new Oe(new ii(2.4,1.5),new fn({color:"#1f5aa6",side:qt})));const f=new Oe(new ii(2.4,.3),new fn({color:"#f3c316",side:qt}));f.position.z=.01,d.add(f);const g=new Oe(new ii(.3,1.5),new fn({color:"#f3c316",side:qt}));g.position.set(-.3,0,.01),d.add(g),d.position.set(-1.8,e+8.1,56),qe.add(d),qe.userData.flag=d,Ke=new Oe(nf("#f4f1ea","#a33a2a"),pu),Ke.position.set(a-3.6,.15,80),Ke.rotation.y=0,Ke.castShadow=!0,qe.add(Ke);const _=[],m=Dr[1],p=m.x-8,y=m.z+10,S=qi(p,y);_.push(le(Ae(new Fe(6,3,5),p,S+1.5,y),"#b8392b")),_.push(...tf(p,S+3,y,6,5,1.7,"#3b3f45","#b8392b"));const v=new Oe(Ft(_),In);v.castShadow=!0,qe.add(v),Wn.push({x0:p-3.3,x1:p+3.3,z0:y-2.8,z1:y+2.8,top:S+5.5});const P=Dr[3],w=qi(P.x,P.z),T=Ft([le(Ae(new Ht(.9,1.2,6,10),P.x,w+3,P.z),"#f2efe8"),le(Ae(new Ht(1.25,1.25,1.2,10),P.x,w+2,P.z),"#c0392b"),le(Ae(new Ht(.7,.7,1,8),P.x,w+6.5,P.z),"#ffe9a0"),le(Ae(new Ki(1,1.2,10),P.x,w+7.6,P.z),"#c0392b")]),C=new Oe(T,In);C.castShadow=!0,qe.add(C)}function tf(i,e,t,n,s,r,o,a){const c=s/2+.45,l=Math.hypot(c,r)+.1,u=Math.atan2(r,c),h=[];for(const f of[-1,1]){const g=new Fe(n+.8,.18,l);g.rotateX(f*u),g.translate(i,e+r/2+.05,t+f*c/2),h.push(le(g,o))}const d=new Fo;d.moveTo(-s/2,0),d.lineTo(s/2,0),d.lineTo(0,r),d.closePath();for(const f of[-1,1]){const g=new cc(d,{depth:.15,bevelEnabled:!1});g.rotateY(Math.PI/2),g.translate(i+f*n/2-(f>0?.15:0),e,t),h.push(le(g,a))}return h}function nf(i,e){const t=new xn(1,16,8,0,Math.PI*2,Math.PI/2,Math.PI/2);t.scale(1.25,.85,3.2);const n=t.attributes.position;for(let a=0;a<n.count;a++){const c=n.getZ(a);c>0&&n.setX(a,n.getX(a)*(1-c/3.2*.75))}t.computeVertexNormals();const s=new Oo(1,.07,5,24);s.rotateX(Math.PI/2),s.scale(1.25,1,3.2);const r=s.attributes.position;for(let a=0;a<r.count;a++){const c=r.getZ(a);c>0&&r.setX(a,r.getX(a)*(1-c/3.2*.75))}const o=new Fe(2.1,.1,.5);return o.translate(0,-.25,0),Ft([le(t,i),le(s,e),le(o,"#9a7a55")])}let ri;function eb(){const i=new ii(1600,1600,120,120);i.rotateX(-Math.PI/2);const e=new bn({transparent:!0,fog:!0,uniforms:Wf.merge([he.fog,{t:{value:0},amp:{value:1},hT:{value:Pp()},ws:{value:Pt},deep:{value:new pe("#1e5f86")},shallow:{value:new pe("#3fb5b8")},foam:{value:new pe("#f4fbff")},sunDir:{value:new I(.5,.75,.35).normalize()}}]),vertexShader:`uniform float t,amp;varying vec3 vW;varying float vWave;
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
    }`});ri=new Oe(i,e),ri.renderOrder=1,qe.add(ri)}const oh=6*60,ah=22*60,tb=24*60,nb=(ah-oh)/600,Ii=18,ch=["Vår","Sommar","Höst","Vinter"],lh=["Mån","Tis","Ons","Tor","Fre","Lör","Sön"],Nr={sol:{name:"Sol",icon:"☀️",cloud:0,sun:1,fog:[110,460],rain:0,wind:1,info:"Bra dag för allt arbete"},moln:{name:"Molnigt",icon:"⛅",cloud:.45,sun:.7,fog:[90,400],rain:0,wind:1.1,info:"Grått men lugnt"},regn:{name:"Regn",icon:"🌧️",cloud:.8,sun:.45,fog:[60,300],rain:1,wind:1.3,info:"Måla inte utomhus"},dimma:{name:"Dimma",icon:"🌫️",cloud:.7,sun:.5,fog:[12,120],rain:0,wind:.7,info:"Svårt att hitta till sjöss"},blast:{name:"Blåsigt",icon:"💨",cloud:.3,sun:.85,fog:[100,440],rain:0,wind:2,info:"Höga vågor för små båtar"},storm:{name:"Storm",icon:"⛈️",cloud:1,sun:.3,fog:[40,220],rain:2,wind:3,info:"Stanna i land"}},ib=[[.35,.25,.15,.12,.1,.03],[.5,.2,.1,.05,.12,.03],[.2,.25,.2,.12,.15,.08],[.2,.3,.15,.15,.12,.08]],Ip={virke:30,skrot:20},sb=[{s:0,d:12,name:"Båtmässan i Kvarnvik"},{s:1,d:3,name:"Midsommar på Grannön"},{s:1,d:12,name:"Regattan"},{s:2,d:5,name:"Skaldjursfest"},{s:3,d:8,name:"Lucia"},{s:3,d:14,name:"Julmarknad"}];let be=null;const Mo=()=>Math.random();function Ps(i){const e=Math.floor(i/Ii)%4,t=ib[e];let n=Mo(),s=0;for(;s<t.length-1&&(n-=t[s],!(n<0));s++);return Object.keys(Nr)[s]}function rb(){return{day:0,min:oh,wx:"sol",fc:[Ps(1),Ps(2),Ps(3)],price:{virke:1,skrot:1},prev:{virke:1,skrot:1},orders:{virke:0,skrot:0},delivery:null,warned:!1}}function ob(){be=Y.life||rb(),Y.life=be,be.fc||(be.fc=[Ps(be.day+1),Ps(be.day+2),Ps(be.day+3)]),pb(),gb(),xb(),rh.push(i=>{i.push({x:4,z:41.6,r:2.6,label:be.min>=18*60?"Sova i boden":"Vila till i morgon",fn:()=>Dp(!1)}),be.delivery&&i.push({x:14.8,z:58.4,r:2.2,label:"Hämta leverans",fn:_b})}),Np(),Up()}const Is=()=>be;function dc(){return Math.floor(be.day/Ii)%4}const Lp=i=>`<img class="wxi" src="/varvet/ui/wx_${i}.png" alt="${Nr[i].name}">`,ab=i=>`${String(Math.floor(i/60)%24).padStart(2,"0")}:${String(Math.floor(i%60)).padStart(2,"0")}`;function _u(i=be.day){return`${lh[i%7]} · ${ch[Math.floor(i/Ii)%4]} dag ${i%Ii+1}, år ${Math.floor(i/(Ii*4))+1}`}let cl=0;function cb(i){if(!be)return;hn||Et||Ms||Da||(be.min+=i*nb,!be.warned&&be.min>=ah&&(be.warned=!0,Dt("Klockan är tio på kvällen – dags att sova",3200)),be.min>=tb&&Dp(!0)),fb(i),mb(i),cl-=i,cl<=0&&(cl=1,Up())}let Da=!1;function Dp(i){if(!Da){if(tt.on&&!i){Dt("Lägg till vid en brygga först");return}Da=!0,gc(()=>{if(Da=!1,i){const e=Math.min(Y.kr,150);Y.kr-=e,Dt(e?`Du somnade utomhus och vaknade stel och frusen (−${e} kr för värktabletter och kaffe)`:"Du somnade utomhus och vaknade stel och frusen",4200)}lb(),de.pos.set(4,1.3,42.4),de.yaw=0,je.tYaw=je.yaw=0,Yn(),En(),setTimeout(()=>Dt(`${_u()} · ${Nr[be.wx].name}`,3600),i?4400:300)})}}function lb(){be.day++,be.min=oh,be.warned=!1,be.wx=be.fc.shift(),be.fc.push(Ps(be.day+3)),be.prev={...be.price};const i=dc();for(const e of Object.keys(Ip)){const t=(Mo()-.5)*.16+(1-be.price[e])*.25;be.price[e]=Math.min(1.35,Math.max(.75,be.price[e]+t+(i===3?.02:0)))}(be.orders.virke||be.orders.skrot)&&(be.delivery={...be.orders},be.orders={virke:0,skrot:0}),Np()}function vu(i){return Math.round(Ip[i]*be.price[i])}const xa={day:[new pe("#4f9ad6"),new pe("#9fd0ea"),new pe("#bfdced")],dusk:[new pe("#5b6aa6"),new pe("#f2a77c"),new pe("#f5cba5")],night:[new pe("#0d1830"),new pe("#1f3155"),new pe("#2a3a5a")],grey:[new pe("#7f8c99"),new pe("#aab4bd"),new pe("#c3c9cf")]},ir=[new pe,new pe,new pe],ub=new pe("#ffe8c4"),hb=new pe("#ff9d5c"),db=new pe("#a9bde0");let ya=null,Zt={cloud:0,sun:1,fogN:110,fogF:460,rain:0,wind:1};function Np(i){const e=Nr[be.wx],t={cloud:e.cloud,sun:e.sun,fogN:e.fog[0],fogF:e.fog[1],rain:e.rain,wind:e.wind};Zt=t,xu=t}let xu=Zt;function fb(i){for(const l in xu)Zt[l]+=(xu[l]-Zt[l])*Math.min(1,i*.5);const e=Math.min(1,Math.max(0,(be.min-300)/1080)),t=Math.sin(Math.PI*e),n=-1.9+3.8*e,s=Math.min(1,Math.max(0,(t-.02)/.25)),r=Math.exp(-Math.pow((t-.12)/.12,2))*(1-Zt.cloud*.8),o=qe.userData.sky.material.uniforms;for(let l=0;l<3;l++)ir[l].copy(xa.night[l]).lerp(xa.day[l],s).lerp(xa.dusk[l],r*.85).lerp(xa.grey[l],Zt.cloud*.75*(.3+.7*s));o.top.value.copy(ir[0]),o.mid.value.copy(ir[1]),o.bot.value.copy(ir[2]),qe.fog.color.copy(ir[2]),qe.fog.near=Zt.fogN,qe.fog.far=Zt.fogF;const a=de.pos,c=Math.cos(Math.asin(Math.min(1,t)));if(s>0?(Mt.position.set(a.x+Math.cos(n)*c*100,a.y+Math.max(.15,t)*100,a.z+Math.sin(n)*c*100),Mt.color.copy(hb).lerp(ub,Math.min(1,t*2.2)),Mt.intensity=(.4+1.8*s)*Zt.sun):(Mt.position.set(a.x-40,a.y+90,a.z+30),Mt.color.copy(db),Mt.intensity=.35),Mt.target.position.copy(a),du.intensity=(.35+.95*s)*(1-Zt.cloud*.15),du.color.copy(ir[1]).lerp(new pe("#ffffff"),.5),ri){const l=ri.material.uniforms;ya||(ya={deep:l.deep.value.clone(),shallow:l.shallow.value.clone()});const u=.35+.65*s;l.deep.value.copy(ya.deep).multiplyScalar(u*(1-Zt.cloud*.25)),l.shallow.value.copy(ya.shallow).multiplyScalar(u*(1-Zt.cloud*.2)),l.amp&&(l.amp.value=Zt.wind)}}let Ei=null;function pb(){const e=new Float32Array(10800),t=new Float32Array(1800*2);for(let r=0;r<1800;r++){const o=(Mo()-.5)*60,a=Mo()*30,c=(Mo()-.5)*60;for(let l=0;l<2;l++)e.set([o,a,c],(r*2+l)*3),t[r*2+l]=l}const n=new Lt;n.setAttribute("position",new _t(e,3)),n.setAttribute("tip",new _t(t,1));const s=new bn({transparent:!0,depthWrite:!1,uniforms:{t:{value:0},cam:{value:new I},snow:{value:0},op:{value:0}},vertexShader:`uniform float t, snow; uniform vec3 cam; attribute float tip;
      void main(){ vec3 p = position; float sp = mix(24.0, 2.2, snow);
        p.y = mod(p.y - t * sp, 30.0); p.x += snow * sin(t * 1.3 + position.z) * 0.8;
        vec3 w = vec3(cam.x + mod(p.x - cam.x + 30.0, 60.0) - 30.0, cam.y - 8.0 + p.y, cam.z + mod(p.z - cam.z + 30.0, 60.0) - 30.0);
        w.y -= tip * mix(0.9, 0.08, snow); w.x += tip * 0.15;
        gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0); }`,fragmentShader:"uniform float op, snow; void main(){ gl_FragColor = vec4(mix(vec3(.78,.85,.92), vec3(1.0), snow), op); }"});Ei=new tp(n,s),Ei.frustumCulled=!1,Ei.renderOrder=4,qe.add(Ei)}function mb(i){if(!Ei)return;const e=Ei.material.uniforms;e.t.value+=i,e.cam.value.copy(qn.position),e.snow.value=dc()===3?1:0;const t=Zt.rain>.05?Math.min(.55,.25*Zt.rain+.1):0;e.op.value+=(t-e.op.value)*Math.min(1,i*.8),Ei.visible=e.op.value>.01,Ei.geometry.setDrawRange(0,Math.floor((Zt.rain>1.5?1:.55)*Ei.geometry.attributes.position.count))}let Xi=null;function gb(){Xi=new Qt;const i=new Oe(new Fe(1.2,.8,.9),new fn({color:"#a47c52"}));i.position.y=.4,Xi.add(i);const e=new Oe(new Fe(1.25,.08,.95),new fn({color:"#7a5136"}));e.position.y=.82,Xi.add(e),Xi.position.set(15.2,1.45,58.4),Xi.traverse(t=>{t.isMesh&&(t.castShadow=!0)}),qe.add(Xi)}function _b(){const i=be.delivery;i&&(Y.virke+=i.virke,Y.skrot+=i.skrot,be.delivery=null,Yn(),En(),Gt("pick"),Dt(`Leverans hämtad: ${i.virke?i.virke+" virke ":""}${i.skrot?i.skrot+" skrot":""}`,2400))}function vb(){Xi&&(Xi.visible=!!(be&&be.delivery))}let Ms=!1,fo="shop",bi={virke:0,skrot:0};function xb(){ae("bPhone").onclick=()=>{Ms=!Ms,ae("phone").style.display=Ms?"flex":"none",Ms&&(bi={virke:0,skrot:0},Ma())},ae("phX").onclick=()=>{Ms=!1,ae("phone").style.display="none"},document.querySelectorAll("#phTabs button").forEach(i=>i.onclick=()=>{fo=i.dataset.t,Ma()}),ae("phBody").onclick=i=>{const e=i.target.closest("button");if(e){if(e.dataset.add){const[t,n]=e.dataset.add.split(":");bi[t]=Math.max(0,bi[t]+ +n),Ma()}if(e.dataset.buy){const t=yu();if(!t)return;if(t>Y.kr){Dt("Inte tillräckligt med pengar"),Gt("no");return}Y.kr-=t,be.orders.virke+=bi.virke,be.orders.skrot+=bi.skrot,bi={virke:0,skrot:0},Yn(),En(),Gt("place"),Dt("Beställt – levereras till bryggan i morgon bitti",2600),Ma()}}}}const yu=()=>bi.virke*vu("virke")+bi.skrot*vu("skrot");function yb(i){const e=be.price[i]-be.prev[i];return Math.abs(e)<.01?"→":e>0?"↑":"↓"}function Ma(){document.querySelectorAll("#phTabs button").forEach(e=>e.classList.toggle("on",e.dataset.t===fo));const i=ae("phBody");if(fo==="shop"){const e=(s,r,o)=>`<div class="phRow"><img class="phIt" src="/varvet/ui/it_${s}.png" alt=""><div style="flex:1"><b>${r}</b><small>${vu(s)} kr/${o} ${yb(s)}</small></div>
      <div class="phQty"><button data-add="${s}:-5">−5</button><span>${bi[s]}</span><button data-add="${s}:5">+5</button><button data-add="${s}:10">+10</button></div></div>`,t=be.orders.virke||be.orders.skrot?`<p class="phNote">Beställt till i morgon: ${be.orders.virke} virke, ${be.orders.skrot} skrot</p>`:"",n=be.delivery?'<p class="phNote">En leverans väntar vid bryggan</p>':"";i.innerHTML=`<h3>Kvarnviks Järn &amp; Trä</h3>${e("virke","Virke","st")}${e("skrot","Skrot och beslag","st")}
      <div class="phTot">Summa <b>${yu()} kr</b> · Saldo ${Y.kr} kr</div><button class="btn acc" data-buy="1" ${yu()?"":"disabled"}>Beställ – levereras 07:00 i morgon</button>${t}${n}
      <p class="phNote">Priserna ändras varje dag. Köp när pilen pekar nedåt.</p>`}else if(fo==="wx"){const e=(t,n,s)=>`<div class="phWx"><span>${Lp(n)}</span><div><b>${s}</b><small>${Nr[n].name} – ${Nr[n].info}</small></div></div>`;i.innerHTML=`<h3>Väder</h3>${e(be.day,be.wx,"I dag")}${be.fc.map((t,n)=>e(be.day+n+1,t,lh[(be.day+n+1)%7])).join("")}`}else if(fo==="dag"){const e=i1();i.innerHTML="<h3>Dagbok</h3>"+(e.length?e.map(t=>`<div class="phRow"><div><small>${_u(t.d)}</small>${t.t}</div></div>`).join(""):'<p class="phNote">Inget skrivet än.</p>')}else{const e=dc(),t=be.day%Ii,n=sb.map(s=>{let r=(s.s-e)*Ii+(s.d-1-t);return r<0&&(r+=Ii*4),{...s,in:r}}).sort((s,r)=>s.in-r.in);i.innerHTML=`<h3>Kalender</h3><p class="phNote">${_u()}</p>${n.map(s=>`<div class="phRow"><div><b>${s.name}</b><small>${ch[s.s]} dag ${s.d}</small></div><span>${s.in===0?"i dag":"om "+s.in+" d"}</span></div>`).join("")}`}}function Up(){be&&(ae("clock").innerHTML=`${lh[be.day%7]} ${ab(be.min)} · ${ch[dc()]} ${be.day%Ii+1} ${Lp(be.wx)}`,ae("clock").classList.toggle("late",be.min>=ah))}const Mb=()=>Ms;new I(0,1,0);const Sb=new I;function bb(i,e){if(si(i,e)<-.55)return!1;for(const t of Wn)if(i>t.x0&&i<t.x1&&e>t.z0&&e<t.z1)return!1;return!0}function fc(i,e){return Math.abs(i-14)<1.6&&e>57&&e<91||Math.abs(i-14)<4&&e>89&&e<92.5}function oi(i,e){let t=si(i,e);if(fc(i,e)&&(t=Math.max(t,1.45)),typeof Y<"u"&&Y.pieces.length){const n=jb(i,e);n!=null&&(t=Math.max(t,n))}return t}function Fp(i){let e=Dn.mx,t=Dn.mz;const n=Dn.keys;if((n.KeyW||n.ArrowUp)&&(t=-1),(n.KeyS||n.ArrowDown)&&(t=1),(n.KeyA||n.ArrowLeft)&&(e=-1),(n.KeyD||n.ArrowRight)&&(e=1),n.KeyQ&&(je.tYaw+=i*1.8),n.KeyE&&(je.tYaw-=i*1.8),(Et||hn||Mb())&&(e=t=0),tt.on)Nb(i,e,t),pt.userData.realModel&&Zi(pt,"sit");else{const u=Math.min(1,Math.hypot(e,t)),d=(u>.85||n.ShiftLeft?6.2:3.4)*u;if(u>.08){const _=-t/Math.max(u,.001),m=e/Math.max(u,.001),p=Math.cos(je.yaw),y=Math.sin(je.yaw),S=y*_-p*m,v=p*_+y*m,P=Math.atan2(S,v),w=Math.sin(P)*d,T=Math.cos(P)*d,C=Math.atan2(Math.sin(P-de.yaw),Math.cos(P-de.yaw));de.yaw+=C*Math.min(1,i*12);const M=de.pos.x+w*i,x=de.pos.z+T*i,R=(O,N)=>(bb(O,N)||fc(O,N))&&!Xb(O,N,de.pos.y)&&!Cn.some(B=>Math.abs(B.x-O)<B.r+.35&&Math.abs(B.z-N)<B.r+.35&&Math.hypot(B.x-O,B.z-N)<B.r+.35)&&oi(O,N)-oi(de.pos.x,de.pos.z)<.9*Math.max(i*d,.05)+.35;R(M,x)?(de.pos.x=M,de.pos.z=x):R(M,de.pos.z)?de.pos.x=M:R(de.pos.x,x)&&(de.pos.z=x),de.speed=d}else de.speed=0;const f=oi(de.pos.x,de.pos.z);de.pos.y+=(f-de.pos.y)*Math.min(1,i*18),de.walk+=i*de.speed*2.1;const g=Math.sin(de.walk)*Math.min(1,de.speed/3)*.75;ho.la.rotation.x=g,ho.ra.rotation.x=-g,ho.ll.rotation.x=-g,ho.rl.rotation.x=g,pt.userData.realModel&&!wS(pt)&&(de.speed>4.6?(Zi(pt,"run"),Kd(pt,"run",de.speed/5.2)):de.speed>.2?(Zi(pt,"walk"),Kd(pt,"walk",Math.max(.6,de.speed/1.6))):Zi(pt,hn?"talk":"idle")),pt.position.copy(de.pos),pt.userData.realModel||(pt.position.y+=Math.abs(Math.cos(de.walk))*.06*Math.min(1,de.speed/3)),pt.rotation.y=de.yaw}je.yaw+=(je.tYaw-je.yaw)*Math.min(1,i*10),je.pitch+=(je.tPitch-je.pitch)*Math.min(1,i*10);const s=Sb.set(de.pos.x,de.pos.y+1.5,de.pos.z);let r=je.dist;const o=()=>s.x-Math.sin(je.yaw)*Math.cos(je.pitch)*r,a=()=>s.z-Math.cos(je.yaw)*Math.cos(je.pitch)*r,c=()=>s.y+Math.sin(je.pitch)*r;for(let u=0;u<6;u++){const h=Math.max(si(o(),a()),0)+.6;if(c()>h)break;r*=.82}{const u=r;for(let h=1;h<=12;h++){const d=h/12;r=u*d;const f=o(),g=a(),_=c();let m=!1;for(const p of So)if(f>p.x0-.35&&f<p.x1+.35&&g>p.z0-.35&&g<p.z1+.35&&_<p.y1+1.3&&_>p.y0-.5){m=!0;break}if(!m){for(const p of Wn)if(f>p.x0&&f<p.x1&&g>p.z0&&g<p.z1&&_<(p.top||6.5)){m=!0;break}}if(!m&&h>3){for(const p of Cn)if(p.r<.5&&_<p.y6&&Math.abs(p.x-f)<1.4&&Math.abs(p.z-g)<1.4&&Math.hypot(p.x-f,p.z-g)<1.3){m=!0;break}}if(m){r=Math.max(1.2,u*(h-1)/12);break}r=u}}qn.position.set(o(),Math.max(c(),Math.max(si(o(),a()),.3)+.6),a()),qn.lookAt(s),Mt.position.set(de.pos.x+60,de.pos.y+90,de.pos.z+40),Mt.target.position.copy(de.pos),qe.userData.sky.position.copy(qn.position),Kb();const l=Eb(de.pos.x,de.pos.z);l!==sf&&(sf=l,document.getElementById("loc").textContent=l)}let sf="";function Eb(i,e){return Math.hypot(i-yt.x,e-yt.z)<yt.r+8||fc(i,e)?"Varvet":Math.hypot(i-Dr[1].x,e-Dr[1].z)<60?"Grannön":"Varvsön"}function rf(i){const e=new Qt,t=r=>new fn({color:r}),n=new Oe(new Cr(.38,.5,4,10),t(i.shirt));n.position.y=1.1,e.add(n);const s=new Oe(new xn(.3,16,12),t(i.skin||"#f1c7a4"));if(s.position.y=1.8,e.add(s),i.hat){const r=new Oe(new xn(.31,14,8,0,Math.PI*2,0,Math.PI/2),t(i.hat));r.position.y=1.84,e.add(r)}if(i.hair){const r=new Oe(new xn(.32,14,10,0,Math.PI*2,0,Math.PI*.62),t(i.hair));r.position.y=1.82,r.rotation.x=-.25,e.add(r)}if(i.beard){const r=new Oe(new xn(.23,12,8,0,Math.PI*2,Math.PI*.45,Math.PI*.55),t(i.beard));r.position.set(0,1.76,.1),e.add(r)}for(const r of[-1,1]){const o=new Oe(new xn(.045,8,6),t("#2a2a2a"));o.position.set(r*.11,1.82,.27),e.add(o)}for(const[r,o,a,c,l]of[[-.48,1.4,.42,.11,i.shirt],[.48,1.4,.42,.11,i.shirt],[-.17,.7,.5,.14,i.pants],[.17,.7,.5,.14,i.pants]]){const u=new Oe(new Cr(c,a,3,8),t(l));u.position.set(r,o-a/2-c*.5,0),e.add(u)}return e.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),qe.add(e),e}const kt={},Ai=new Oe(new Ki(.22,.5,4),new yn({color:"#ffc21a"}));Ai.rotation.x=Math.PI;qe.add(Ai);const Ur=new Oe(new Oo(1.3,.12,6,28),new yn({color:"#ffc21a"}));Ur.rotation.x=Math.PI/2;Ur.visible=!1;qe.add(Ur);let Ut=null;function wb(){kt.sven=rf({shirt:"#3f6e4a",pants:"#2b3a52",hat:"#1f2a44",beard:"#d9d4cc",skin:"#efc2a0"}),kt.sven.position.set(13.6,Math.max(1.45,oi(13.6,62)),62),kt.sven.rotation.y=Math.PI*.15,Xa(kt.sven,AS);const i=Dr[1];let e=-.74,t=.67,n=i.x,s=i.z;for(let _=0;_<120&&(n+=e,s+=t,!(si(n,s)<-.4));_++);const r=n+e*9,o=s+t*9,a=Math.atan2(e,t);Ut={x0:n-e*2,z0:s-t*2,x1:r,z1:o,ang:a,boatX:r+t*3.2,boatZ:o-e*3.2};const c=[],l=Math.hypot(r-Ut.x0,o-Ut.z0),u=new Fe(2.6,.28,l);u.rotateY(a),u.translate((Ut.x0+r)/2,1.2,(Ut.z0+o)/2),c.push(le(u,"#9a7a55"));for(let _=1;_<l;_+=3)for(const m of[-1.1,1.1]){const p=Ut.x0+e*_+t*m,y=Ut.z0+t*_-e*m;c.push(le(Ae(new Ht(.15,.15,5,6),p,-1.2,y),"#5e4630"))}const h=new Oe(Ft(c),In);h.castShadow=!0,qe.add(h),kt.majken=rf({shirt:"#c0392b",pants:"#2b2f36",hair:"#c9c2b8",skin:"#f2cdb0"}),kt.majken.position.set(r-e*1.5,1.35,o-t*1.5),kt.majken.rotation.y=a+Math.PI,kt.majken.position.y=Math.max(1.34,oi(kt.majken.position.x,kt.majken.position.z)),Xa(kt.majken,PS);const d=new Qt,f=new Oe(new Fe(.45,.55,.5),new fn({color:"#1d1f24"}));f.position.y=.55,d.add(f);const g=new Oe(new Fe(.12,.8,.14),new fn({color:"#2b2f36"}));g.position.y=-.05,d.add(g),d.position.set(0,.1,-3.05),Ke.add(d),yp(Ke,"motorbat.glb",{fit:5.8,rotY:Math.PI/2,y:.05,hideChildren:!0,liner:.975,waterMask:-.12}),Y.job>2&&(Ke.position.set(Ut.boatX,.5,Ut.boatZ),Ke.rotation.y=a)}const Mu=[{from:"sven",title:"Slipa Svens eka",reward:400,where:"Ekan på bockarna vid boden",offer:["Så du är Edvins barnbarn. Jag ser det på ögonen. Jag heter Sven – jag bor på andra sidan viken.","Här är nyckeln. Den har legat i min kakburk i trettio år.","Varvet är i ett sorgligt skick, men det går att få liv i. Och börjar du ta jobb så kommer folket tillbaka.","Min gamla eka står på bockarna där borta. Botten är full av havstulpaner och gammal färg.","Kan du slipa den ren? Jag betalar 400 kronor."],done:"Fint jobbat! Hon ser ut som ny. Här har du 400 kronor.",target:()=>({x:-6,z:47,r:4.6,label:"Slipa skrovet"}),game:"sand"},{from:"sven",title:"Byt propeller",reward:600,where:"Motorbåten vid bryggan",offer:["Nästa sak: propellern på motorbåten vid bryggan gick i en sten i somras.","Jag har köpt en ny. Kan du byta den? 600 kronor."],done:"Perfekt, nu går hon som ett spjut igen! 600 kronor till dig.",target:()=>({x:Ke.position.x+1.8,z:Ke.position.z-2.6,r:3,label:"Byt propellern"}),game:"prop"},{from:"sven",title:"Leverera båten till Grannön",reward:800,where:"Kör motorbåten till Majkens brygga",offer:["Jag har sålt motorbåten till Majken på Grannön.","Kan du köra över den till hennes brygga? Hon skjutsar dig tillbaka. 800 kronor!"],done:"",target:()=>({x:Ke.position.x+1.4,z:Ke.position.z,r:3.2,label:"Kör båten"}),game:"drive"}];function Fr(){return Y.job<Mu.length?Mu[Y.job]:null}function Su(i){return kt[i].position}let ns=null;function Tb(){const i=[];for(const t of rh)t(i);const e=Fr();if(e&&!Y.jobOn){const t=Su(e.from);i.push({x:t.x,z:t.z,r:2.6,label:"Prata med "+(e.from==="sven"?"Sven":"Majken"),fn:()=>Pb(e)})}else if(e&&Y.jobOn){const t=e.target();i.push({x:t.x,z:t.z,r:t.r,label:t.label,fn:()=>Bp(e)})}if(!e||Y.jobOn){const t=Su("sven");i.push({x:t.x,z:t.z,r:2.2,label:"Prata med Sven",fn:()=>ks("Sven",[e?Y.jobOn?"Du har ett jobb på gång: "+e.title.toLowerCase()+". "+e.where+".":"":"Inga fler jobb från mig just nu. Men ryktet sprider sig – snart står folk i kö."],null)})}return i}function Ab(i){if(ns=null,ni||tt.on||Et)return;let e=99;for(const s of Tb()){const r=Math.hypot(s.x-de.pos.x,s.z-de.pos.z);r<s.r&&r<e&&(e=r,ns=s)}const t=Fr();let n=null;if(t&&!Y.jobOn)n=Su(t.from).clone(),n.y+=2.6;else if(t&&Y.jobOn&&t.game!=="drive"){const s=t.target();n=new I(s.x,oi(s.x,s.z)+2.6,s.z)}else t&&Y.jobOn&&(n=Ke.position.clone(),n.y+=2.4);Ai.visible=!!n,n&&(Ai.position.copy(n),Ai.position.y+=Math.sin(i*3)*.15,Ai.rotation.y=i*2);for(const s in kt){const r=kt[s];if(r.userData.realModel?Zi(r,hn&&hn.who===(s==="sven"?"Sven":"Majken")?"talk":"idle"):r.children[0].scale.y=1+Math.sin(i*2+s.length)*.015,Math.hypot(r.position.x-de.pos.x,r.position.z-de.pos.z)<6){const a=Math.atan2(de.pos.x-r.position.x,de.pos.z-r.position.z);r.rotation.y+=Math.atan2(Math.sin(a-r.rotation.y),Math.cos(a-r.rotation.y))*.08}}}let hn=null;function Rb(){ae("dlg").style.display="none",hn=null}function ks(i,e,t,n){hn={who:i,lines:e.filter(Boolean),i:0,onEnd:t,accept:n},ae("dlg").style.display="block",Op()}const Cb=i=>"/varvet/ui/por_"+i.split(/[ (·]/)[0].toLowerCase().replace(/å|ä/g,"a").replace(/ö/g,"o")+".png";function Op(){const i=hn;ae("dlgWho").textContent=i.who;const e=ae("dlgPor");e.dataset.n!==i.who&&(e.dataset.n=i.who,e.style.display="none",e.onload=()=>e.style.display="block",e.onerror=()=>e.style.display="none",e.src=Cb(i.who)),ae("dlgTxt").textContent=i.lines[i.i];const t=i.i>=i.lines.length-1;ae("dlgNext").textContent=t?i.accept?"Ta jobbet":"OK":"Fortsätt",ae("dlgNo").style.display=t&&i.accept?"inline-block":"none"}function bu(i=!0){const e=hn;if(e){if(e.i<e.lines.length-1){e.i++,Op();return}ae("dlg").style.display="none",hn=null,i&&e.onEnd&&e.onEnd()}}function Pb(i){ks(i.from==="sven"?"Sven":"Majken",i.offer,()=>{Y.jobOn=1,Dt("Nytt jobb: "+i.title,2200),zs(),En(),Gt("done")},!0)}function kp(){const i=Fr();Y.kr+=i.reward,Y.rykte=(Y.rykte||0)+5,Y.job++,Y.jobOn=0,Yn(),zs(),En(),Gt("done"),Dt(`+${i.reward} kr`,2e3)}let Et=null;const pc=()=>ae("gcv");function Bp(i){if(i.game==="drive"){Db();return}Et={J:i,t:0},ae("game").style.display="flex",Dn.mx=Dn.mz=0;const e=pc(),t=e.getBoundingClientRect(),n=Math.min(2,devicePixelRatio||1);e.width=t.width*n,e.height=t.height*n,Et.dpr=n,i.game==="sand"?Ib():Lb(),requestAnimationFrame(zp)}function mc(i){const e=Et;if(Et=null,ae("game").style.display="none",!i)return;const t=e.J;ks(t.from==="sven"?"Sven":"Majken",[t.done],kp)}function zp(){Et&&(requestAnimationFrame(zp),Et.draw())}function qa(i){const e=pc(),t=e.getBoundingClientRect();return{x:(i.clientX-t.left)*Et.dpr,y:(i.clientY-t.top)*Et.dpr}}function Ib(){const i=pc(),e=i.width,t=i.height,n=i.getContext("2d");ae("gTitle").textContent="Slipa skrovet",ae("gHelp").textContent="Dra fingret över påväxten tills botten är ren";const s=new Path2D,r=e/2,o=t*.42,a=e*.42,c=t*.3;s.moveTo(r-a,o-c*.3),s.lineTo(r+a*.95,o-c*.45),s.quadraticCurveTo(r+a*1.05,o+c*.4,r+a*.55,o+c*.8),s.quadraticCurveTo(r,o+c*1.05,r-a*.8,o+c*.6),s.quadraticCurveTo(r-a*1.02,o+c*.2,r-a,o-c*.3),s.closePath();const l=document.createElement("canvas");l.width=e,l.height=t;const u=l.getContext("2d");u.save(),u.clip(s);const h=hc(5);u.fillStyle="#6b7d4a",u.fillRect(0,0,e,t);for(let m=0;m<260;m++)u.fillStyle=["#55663a","#7d8f55","#8a7a5a","#a39a86","#4b5a33"][m%5],u.beginPath(),u.arc(h()*e,o-c*.2+h()*c*1.3,(6+h()*22)*Et.dpr,0,7),u.fill();for(let m=0;m<120;m++)u.fillStyle="#e8e2d2",u.beginPath(),u.arc(h()*e,o+h()*c*.9,(2+h()*4)*Et.dpr,0,7),u.fill();u.restore();const d={last:null,prog:0,parts:[],total:0},f=()=>{const m=u.getImageData(0,0,e,t).data;let p=0;for(let y=3;y<m.length;y+=4*97)m[y]>40&&p++;return p};d.total=f();const g=m=>{u.globalCompositeOperation="destination-out",u.lineCap="round",u.lineWidth=46*Et.dpr,u.beginPath(),u.moveTo((d.last||m).x,(d.last||m).y),u.lineTo(m.x,m.y),u.stroke(),u.globalCompositeOperation="source-over",d.last=m;for(let p=0;p<2;p++)d.parts.push({x:m.x,y:m.y,vx:(Math.random()-.5)*6,vy:-Math.random()*4,l:1})};i.onpointerdown=m=>{d.last=qa(m),g(d.last),i.setPointerCapture(m.pointerId),Gt("pick")},i.onpointermove=m=>{d.last&&g(qa(m))},i.onpointerup=i.onpointercancel=()=>{d.last=null};let _=0;Et.draw=()=>{n.fillStyle="#cfe3ec",n.fillRect(0,0,e,t),n.fillStyle="#b9a789",n.fillRect(0,t*.82,e,t*.18),n.fillStyle="#6b5137";for(const m of[-.45,.4])n.fillRect(r+a*m-12*Et.dpr,o+c*.6,24*Et.dpr,t*.82-(o+c*.6));n.fillStyle="#f4f1ea",n.fill(s),n.save(),n.clip(s),n.fillStyle="#2f5d8a",n.fillRect(0,o-c*.5,e,c*.22),n.restore(),n.lineWidth=3*Et.dpr,n.strokeStyle="#5b5f66",n.stroke(s),n.drawImage(l,0,0);for(const m of d.parts)m.x+=m.vx,m.y+=m.vy,m.vy+=.35,m.l-=.03,n.fillStyle=`rgba(200,190,160,${m.l})`,n.fillRect(m.x,m.y,4*Et.dpr,4*Et.dpr);d.parts=d.parts.filter(m=>m.l>0),++_%12===0&&(d.prog=1-f()/d.total,ae("gBar").style.width=Math.min(100,d.prog/.92*100)+"%",d.prog>=.92&&(i.onpointerdown=i.onpointermove=null,setTimeout(()=>mc(!0),400)))}}function Lb(){const i=pc(),e=i.width,t=i.height,n=i.getContext("2d"),s=Et.dpr,r=e*.45,o=t*.48,a={st:0,acc:0,lastA:null,drag:null,old:{x:r,y:o,on:!0,rot:0},nw:{x:e*.85,y:t*.75,on:!1,rot:0},nut:0},c=["Lossa muttern – snurra moturs runt propellern","Dra av den gamla propellern","Dra den nya propellern till axeln","Dra åt muttern – snurra medurs"];ae("gTitle").textContent="Byt propeller";const l=()=>{ae("gHelp").textContent=`${a.st+1}/4: ${c[a.st]}`,ae("gBar").style.width=a.st/4*100+"%"};l();const u=d=>Math.atan2(d.y-o,d.x-r);i.onpointerdown=d=>{const f=qa(d);i.setPointerCapture(d.pointerId),a.st===0||a.st===3?a.lastA=u(f):a.st===1&&Math.hypot(f.x-a.old.x,f.y-a.old.y)<110*s?a.drag="old":a.st===2&&Math.hypot(f.x-a.nw.x,f.y-a.nw.y)<110*s&&(a.drag="nw")},i.onpointermove=d=>{const f=qa(d);if(a.lastA!==null){const g=u(f);let _=g-a.lastA;_>Math.PI&&(_-=2*Math.PI),_<-Math.PI&&(_+=2*Math.PI),a.lastA=g;const m=a.st===0?-1:1;_*m>0&&(a.acc+=Math.abs(_),a.nut+=_,Math.random()<.15&&Gt("pick"));const p=Math.PI*2*2.5;ae("gBar").style.width=(a.st+Math.min(1,a.acc/p))/4*100+"%",a.acc>=p&&(a.acc=0,a.lastA=null,a.st===0?(a.st=1,l()):(i.onpointerdown=i.onpointermove=null,ae("gBar").style.width="100%",setTimeout(()=>mc(!0),500)))}if(a.drag){const g=a[a.drag];g.x=f.x,g.y=f.y}},i.onpointerup=i.onpointercancel=()=>{a.lastA=null,a.drag==="old"&&(Math.hypot(a.old.x-r,a.old.y-o)>200*s?(a.old.on=!1,a.st=2,a.nw.on=!0,l(),Gt("place")):(a.old.x=r,a.old.y=o)),a.drag==="nw"&&Math.hypot(a.nw.x-r,a.nw.y-o)<60*s&&(a.nw.x=r,a.nw.y=o,a.st=3,l(),Gt("place")),a.drag=null};const h=(d,f,g)=>{n.save(),n.translate(d.x,d.y),n.rotate(g),n.fillStyle=f;for(let _=0;_<3;_++)n.rotate(Math.PI*2/3),n.beginPath(),n.ellipse(0,-48*s,24*s,48*s,.35,0,7),n.fill();n.fillStyle="#5b5f66",n.beginPath(),n.arc(0,0,18*s,0,7),n.fill(),n.restore()};Et.draw=()=>{if(n.fillStyle="#2a5a72",n.fillRect(0,0,e,t),n.fillStyle="#f4f1ea",n.beginPath(),n.moveTo(0,0),n.lineTo(e*.32,0),n.quadraticCurveTo(e*.36,t*.25,e*.2,t*.4),n.lineTo(0,t*.42),n.fill(),n.fillStyle="#1d1f24",n.fillRect(e*.18,t*.05,38*s,o-t*.05),n.fillStyle="#3a3f47",n.fillRect(e*.18,o-10*s,r-e*.18,20*s),a.old.on&&h(a.old,"#b88b3a",a.nut*.3),a.nw.on&&h(a.nw,"#e2c25a",a.st===3?a.nut*.3:0),a.st===2&&!a.drag&&(n.fillStyle="rgba(255,255,255,.75)",n.font=`${14*s}px system-ui`,n.textAlign="center",n.fillText("Ny propeller",a.nw.x,a.nw.y+80*s)),a.st===0||a.st===3){n.save(),n.translate(r,o),n.rotate(a.nut),n.fillStyle="#c0c6cc",n.beginPath();for(let f=0;f<6;f++){const g=f/6*Math.PI*2;n.lineTo(Math.cos(g)*16*s,Math.sin(g)*16*s)}n.fill(),n.restore(),n.strokeStyle="rgba(255,194,26,.8)",n.lineWidth=4*s,n.beginPath();const d=a.st===0?-1:1;n.arc(r,o,95*s,-Math.PI/2,-Math.PI/2+d*1.6,d<0),n.stroke()}a.st===1&&(n.strokeStyle="rgba(255,194,26,.6)",n.setLineDash([8*s,8*s]),n.beginPath(),n.arc(r,o,200*s,0,7),n.stroke(),n.setLineDash([]))}}const tt={on:!1,v:0,yaw:0};function Db(){tt.on=!0,tt.v=0,tt.yaw=Ke.rotation.y,pt.visible=!0,ae("hint").style.opacity=1,ae("hint").textContent="Vänster tumme: gasa och styr · Kör till den gula ringen vid Grannön",Ur.visible=!0,Ur.position.set(Ut.boatX,.35,Ut.boatZ),Dt("Kör till Majkens brygga!",2200)}function Nb(i,e,t){const n=-t,s=e;tt.steer=s,tt.v+=(n*11-tt.v)*Math.min(1,i*(n?.9:.5)),tt.yaw-=s*i*1.3*Pi(Math.abs(tt.v)/4,.25,1)*Math.sign(tt.v||1);const r=Ke.position.x+Math.sin(tt.yaw)*tt.v*i,o=Ke.position.z+Math.cos(tt.yaw)*tt.v*i,a=(u,h)=>si(u,h)<-.3&&!(Math.abs(u-14)<2&&h>57&&h<92)&&Math.abs(u)<Pt/2-10&&Math.abs(h)<Pt/2-10,c=(u,h)=>a(u+Math.sin(tt.yaw)*2.8,h+Math.cos(tt.yaw)*2.8),l=!a(Ke.position.x,Ke.position.z);a(r,o)&&c(r,o)||l&&si(r,o)<=si(Ke.position.x,Ke.position.z)?(Ke.position.x=r,Ke.position.z=o):tt.v*=-.3,de.pos.set(Ke.position.x,Ke.position.y+.1,Ke.position.z),de.yaw=tt.yaw,je.tYaw+=Math.atan2(Math.sin(tt.yaw-je.tYaw),Math.cos(tt.yaw-je.tYaw))*Math.min(1,i*1.5),Math.random()<Math.abs(tt.v)*.02&&Gt("tick");{const u=Ut.boatX-Ke.position.x,h=Ut.boatZ-Ke.position.z,d=Math.atan2(u,h)-je.yaw;ae("compass").style.display="flex",ae("cArrow").style.transform=`rotate(${-d*180/Math.PI-90}deg)`,ae("cDist").textContent=Math.round(Math.hypot(u,h))+" m"}Math.hypot(Ke.position.x-Ut.boatX,Ke.position.z-Ut.boatZ)<4.5&&Math.abs(tt.v)<7.5&&Ub()}function Ub(){tt.on=!1,ae("compass").style.display="none",tt.v=0,Ur.visible=!1,Ke.position.set(Ut.boatX,.5,Ut.boatZ),Ke.rotation.set(0,Ut.ang,0),Ke.userData.yaw=Ut.ang,ae("hint").style.opacity=0,ks("Majken",["Åh, där är hon! Tack ska du ha, den är ju fin som snus.","Sven sa att du skulle ha 800 kronor. Hoppa in i min eka så skjutsar jag dig hem."],()=>{kp(),gc(()=>{de.pos.set(14,1.45,70),de.yaw=Math.PI,je.tYaw=je.yaw=Math.PI,ks("Sven",["Där är du ju! Majken ringde redan och skröt om båten. Bra jobbat."],null)})})}function gc(i){const e=ae("fade");e.style.opacity=1,setTimeout(()=>{i(),setTimeout(()=>e.style.opacity=0,300)},500)}function _c(i,e,t){const n=ae(i),s=()=>n.querySelectorAll("button").forEach(r=>r.classList.toggle("on",+r.dataset.v===Ot[e]));n.querySelectorAll("button").forEach(r=>r.onclick=()=>{Ot[e]=+r.dataset.v,Sp(),s(),t&&t()}),s()}_c("sQ","q",wp);_c("sF","fps",()=>VS(Ot.fps));_c("sP","perf",()=>uc.style.display=Ot.perf?"block":"none");uc.style.display=Ot.perf?"block":"none";const Hp=()=>{ae("menu").style.display="flex",ae("mainCard").style.display="none",ae("settings").style.display="block"};ae("bSet").onclick=Hp;ae("bSet2").onclick=Hp;ae("bClose").onclick=()=>{ae("settings").style.display="none",Ls?ae("menu").style.display="none":ae("mainCard").style.display="block"};ae("bPerf").onclick=()=>{Ot.perf=Ot.perf?0:1,Sp(),uc.style.display=Ot.perf?"block":"none",_c("sP","perf")};let Na="kvinna";function Fb(){Na=Y.char||"kvinna";const i=!Y.char;ae("pick").style.display=i?"block":"none",ae("pname").value=Y.pname||"",document.querySelectorAll(".pickc").forEach(e=>{e.classList.toggle("on",e.dataset.c===Na),e.onclick=()=>{Na=e.dataset.c,document.querySelectorAll(".pickc").forEach(t=>t.classList.toggle("on",t===e))}})}setTimeout(Fb,0);ae("bPlay").onclick=()=>{Y.char||(Y.char=Na,Y.pname=(ae("pname").value||"").trim().slice(0,16),Xa(pt,xp[Y.char]),En()),Ls=!0,ae("menu").style.display="none",je.yaw=je.tYaw=de.yaw;try{document.documentElement.requestFullscreen&&innerWidth<900&&document.documentElement.requestFullscreen().catch(()=>{})}catch{}};let Ls=!1;const Y={char:null,pname:"",virke:4,skrot:0,picked:0,pieces:[],obj:0,digs:[],kr:0,job:0,jobOn:0,life:null},So=[],Ue=2,xr=2.6,It={golv:{name:"Golv",cost:{virke:2},kind:"floor"},vagg:{name:"Vägg",cost:{virke:2},kind:"wall"},fonster:{name:"Fönster",cost:{virke:2,skrot:1},kind:"wall"},dorr:{name:"Dörr",cost:{virke:2,skrot:1},kind:"wall"},tak:{name:"Tak",cost:{virke:3},kind:"roof"},jamna:{name:"Jämna",cost:{},kind:"level"}},Or=["golv","vagg","fonster","dorr","tak","jamna"],vc=[[0,1],[1,0],[0,-1],[-1,0]],dr=i=>Math.floor(i/Ue),kr=i=>i*Ue+Ue/2;function Ya(i,e){const t=i*Ue,n=e*Ue;let s=-99,r=99;for(const[o,a]of[[0,0],[Ue,0],[0,Ue],[Ue,Ue],[Ue/2,Ue/2],[Ue/2,0],[0,Ue/2],[Ue,Ue/2],[Ue/2,Ue]]){let c=si(t+o,n+a);fc(t+o,n+a)&&(c=Math.max(c,1.45)),s=Math.max(s,c),r=Math.min(r,c)}return{top:Math.round((s*.6+Math.max(r,-.1)*.4+.12)*10)/10,mn:r,mx:s}}const ss=(i,e)=>Y.pieces.find(t=>t.t==="golv"&&t.i===i&&t.k===e);function uh(i,e){const t=ss(i,e);if(t)return t.y;let n=null;for(const[s,r]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){const o=ss(i+s,e+r);o&&(n===null||o.y>n)&&(n=o.y)}return n!==null?n:Ya(i,e).top}function Ob(i,e,t){const n=vc[t],s=ss(i,e),r=ss(i+n[0],e+n[1]);return s||r?Math.max(s?s.y:-99,r?r.y:-99):uh(i,e)}function kb(i,e){let t=null;for(const s of[[i,e,0],[i,e,1],No(i,e,2),No(i,e,3)]){const r=Y.pieces.find(o=>It[o.t].kind==="wall"&&o.i===s[0]&&o.k===s[1]&&o.r===s[2]);r&&(t===null||r.y>t)&&(t=r.y)}if(t!==null)return t+xr;const n=ss(i,e);if(n)return n.y+xr;for(const[s,r]of[[1,0],[-1,0],[0,1],[0,-1]]){const o=Y.pieces.find(a=>a.t==="tak"&&a.i===i+s&&a.k===e+r);if(o)return o.y}return uh(i,e)+xr}function No(i,e,t){return t===2?[i,e-1,0]:t===3?[i-1,e,1]:[i,e,t]}function of(i){return It[i.t].kind==="wall"?`w${i.i},${i.k},${i.r}`:It[i.t].kind+i.i+","+i.k}const Bb="#a47c52",zb="#8f6a45",xi="#b8392b",yi="#f2efe8",Hb="#bfe2f0",Vb="#3b3f45";function Vp(i){const e=Ue+.04,t=.22,n=xr;if(i==="golv"){const s=[le(Ae(new Fe(Ue+.02,5,Ue+.02),0,-2.65,0),"#9c9690"),le(Ae(new Fe(Ue+.06,.12,Ue+.06),0,-.42,0),"#7f7a75"),le(Ae(new Fe(Ue+.08,.14,Ue+.08),0,-.08,0),"#6b5137")];for(let r=0;r<5;r++)s.push(le(Ae(new Fe(Ue/5-.03,.06,Ue),-Ue/2+Ue/10+r*Ue/5,.01,0),r%2?Bb:zb));return Ft(s)}if(i==="vagg")return Ft([le(Ae(new Fe(e,n,t),0,n/2,0),xi),le(Ae(new Fe(e,.12,t+.04),0,n-.06,0),yi)]);if(i==="fonster")return Ft([le(Ae(new Fe(e,.9,t),0,.45,0),xi),le(Ae(new Fe(e,.6,t),0,n-.3,0),xi),le(Ae(new Fe(.5,1.1,t),-e/2+.25,1.45,0),xi),le(Ae(new Fe(.5,1.1,t),e/2-.25,1.45,0),xi),le(Ae(new Fe(1.04,1.1,.06),0,1.45,0),Hb),le(Ae(new Fe(1.14,.1,t+.08),0,.9,0),yi),le(Ae(new Fe(1.14,.1,t+.08),0,2,0),yi),le(Ae(new Fe(.08,1.1,t+.08),0,1.45,0),yi),le(Ae(new Fe(e,.12,t+.04),0,n-.06,0),yi)]);if(i==="dorr")return Ft([le(Ae(new Fe(.55,n,t),-e/2+.275,n/2,0),xi),le(Ae(new Fe(.55,n,t),e/2-.275,n/2,0),xi),le(Ae(new Fe(e-1.1,.5,t),0,n-.25,0),xi),le(Ae(new Fe(.1,2.15,t+.08),-.47,1.07,0),yi),le(Ae(new Fe(.1,2.15,t+.08),.47,1.07,0),yi),le(Ae(new Fe(1.04,.1,t+.08),0,2.15,0),yi),le(Ae(new Fe(e,.12,t+.04),0,n-.06,0),yi)]);if(i==="jamna")return Ft([le(Ae(new Fe(Ue,.08,Ue),0,.04,0),"#c9b48f",0)]);if(i==="tak"){const r=Math.hypot(Ue,1.1)+.06,o=Math.atan2(1.1,Ue),a=new Fe(Ue+.3,.16,r);a.rotateX(-o),a.translate(0,1.1/2+.08,0);const c=new Fo;c.moveTo(-Ue/2,0),c.lineTo(Ue/2,0),c.lineTo(Ue/2,1.1),c.closePath();const l=[le(a,Vb)];for(const u of[-1,1]){const h=new cc(c,{depth:.12,bevelEnabled:!1});h.rotateY(-Math.PI/2),h.translate(u*Ue/2+(u<0?.12:0),0,0),l.push(le(h,xi))}return Ft(l)}}const or={},Gp=400;let Ka=null;function Gb(i){Ka=i}function Eu(i,e,t,n,s){if(!Ka)return;const r=Ka.geometry,o=r.attributes.position;r.attributes.color;const a=Pt/Jt,c=3.2,l=i*Ue,u=l+Ue,h=e*Ue,d=h+Ue,f=Math.max(0,Math.floor((l-c+Pt/2)/a)),g=Math.min(Jt,Math.ceil((u+c+Pt/2)/a)),_=Math.max(0,Math.floor((h-c+Pt/2)/a)),m=Math.min(Jt,Math.ceil((d+c+Pt/2)/a)),p=r.attributes.splat;let y=!1;for(let S=_;S<=m;S++)for(let v=f;v<=g;v++){const P=-Pt/2+v*a,w=-Pt/2+S*a,T=Math.max(l-P,0,P-u),C=Math.max(h-w,0,w-d),M=Math.hypot(T,C);if(M>c)continue;const x=S*(Jt+1)+v,R=Ji[x];if(s){const N=M<=0?t-.02:R+(t-.02-R)*(1-M/c)*(1-M/c);if(Math.abs(N-R)>.005){if(Ji[x]=N,o.setY(x,N),p){const B=.5*(1-M/c);p.setXYZW(x,p.getX(x)*(1-B),p.getY(x)*(1-B),p.getZ(x)*(1-B),p.getW(x)+(1-p.getW(x))*B)}y=!0}continue}const O=t-.07+M*.6;if(R>O){if(Ji[x]=O,o.setY(x,O),p){const N=.75*(1-M/c);p.setXYZW(x,p.getX(x)*(1-N),p.getY(x)*(1-N),p.getZ(x)*(1-N),p.getW(x)+(1-p.getW(x))*N)}y=!0}}y&&n&&Wp()}function Wp(){const i=Ka.geometry;if(i.attributes.position.needsUpdate=!0,i.attributes.color.needsUpdate=!0,i.attributes.splat&&(i.attributes.splat.needsUpdate=!0),i.computeVertexNormals(),i.computeBoundingSphere(),ri){const e=ri.material.uniforms.hT.value,t=Pp();e.image.data.set(t.image.data),e.needsUpdate=!0,t.dispose()}}function Wb(){for(const i of Y.digs)Eu(i[0],i[1],i[2],!1,!!i[3]);Y.digs.length&&Wp();for(const i of Or){const e=new Ro(Vp(i),In,Gp);e.count=0,e.castShadow=!0,e.receiveShadow=!0,e.frustumCulled=!1,qe.add(e),or[i]=e}Yb(),$b(),hh(),Yn()}const Ri=new Ge,$a=new cn,Za=new Sn,Ua=new I(1,1,1),Ds=new I;function Ja(i,e){const t=It[i.t].kind;let n=kr(i.i),s=kr(i.k),r=0;if(t==="wall"){const o=vc[i.r];n+=o[0]*Ue/2,s+=o[1]*Ue/2,r=i.r%2?Math.PI/2:0}return t==="roof"&&(r=-i.r*Math.PI/2),Za.set(0,r,0),$a.setFromEuler(Za),Ds.set(n,i.y,s),e.compose(Ds,$a,Ua),e}function hh(){const i={};for(const e of Or)i[e]=0;for(const e of Y.pieces){const t=or[e.t];i[e.t]>=Gp||t.setMatrixAt(i[e.t]++,Ja(e,Ri))}for(const e of Or)or[e].count=i[e],or[e].instanceMatrix.needsUpdate=!0,or[e].computeBoundingSphere&&or[e].computeBoundingSphere();So.length=0;for(const e of Y.pieces){if(It[e.t].kind!=="wall")continue;const t=vc[e.r],n=kr(e.i)+t[0]*Ue/2,s=kr(e.k)+t[1]*Ue/2,r=e.r%2===0,o=.22,a=(c,l)=>{r?So.push({x0:n+c,x1:n+l,z0:s-o,z1:s+o,y0:e.y,y1:e.y+xr}):So.push({x0:n-o,x1:n+o,z0:s+c,z1:s+l,y0:e.y,y1:e.y+xr})};e.t==="dorr"?(a(-1.02,-.5),a(.5,1.02)):a(-1.02,1.02)}}function Xb(i,e,t){for(const n of So)if(i>n.x0-.25&&i<n.x1+.25&&e>n.z0-.25&&e<n.z1+.25&&t<n.y1-.2&&t>n.y0-1.5)return!0;return!1}function jb(i,e){const t=ss(dr(i),dr(e));return t?t.y:null}let Rn,Qa=!1,nn={t:"golv",r:0},ni=!1,ct=null;const Xp=new yn({color:"#7dff8a",transparent:!0,opacity:.45,depthWrite:!1}),qb=new yn({color:"#ff5a4a",transparent:!0,opacity:.45,depthWrite:!1}),wu={};function Yb(){for(const i of Or)wu[i]=Vp(i);Rn=new Oe(wu.golv,Xp),Rn.visible=!1,Rn.renderOrder=3,qe.add(Rn)}function dh(){const i=Math.sin(de.yaw),e=Math.cos(de.yaw),t=It[nn.t].kind;let n,s,r=nn.r;if(t==="wall"){const a=de.pos.x+i*.9,c=de.pos.z+e*.9;n=dr(a),s=dr(c),r=Math.abs(i)>Math.abs(e)?i>0?1:3:e>0?0:2,r=(r+nn.r)%4;const l=No(n,s,r);n=l[0],s=l[1],r=l[2]}else{const a=de.pos.x+i*2.2,c=de.pos.z+e*2.2;n=dr(a),s=dr(c),t==="roof"&&(r=((Math.abs(i)>Math.abs(e)?i>0?1:3:e>0?0:2)+nn.r)%4)}const o={t:nn.t,i:n,k:s,r:t==="floor"?0:r};return o.y=t==="roof"?kb(n,s):t==="wall"?Ob(n,s,r):t==="level"?(()=>{const a=Ya(n,s);return Math.round((a.mx+Math.max(a.mn,-.1))/2*10)/10})():uh(n,s),o}function jp(i){const e=It[i.t].kind,t=It[i.t].cost;for(const c in t)if(Y[c]<t[c])return"Saknar "+c;const n=of(i);if(Y.pieces.some(c=>of(c)===n))return"Upptaget";const s=i.i*Ue,r=i.k*Ue,o=s+Ue,a=r+Ue;if(e==="level"){const c=Ya(i.i,i.k);if(c.mx<-.2)return"För djupt vatten";if(ss(i.i,i.k))return"Det är redan byggt här";if(c.mx-c.mn<.12)return"Redan plant";const l=i.i*Ue,u=i.k*Ue,h=l+Ue,d=u+Ue;for(const f of Wn)if(f.x0<h&&f.x1>l&&f.z0<d&&f.z1>u)return"I vägen";for(const f of Cn)if(f.x>l-.3&&f.x<h+.3&&f.z>u-.3&&f.z<d+.3)return"Träd eller sten i vägen";return""}if(e==="floor"){const c=Ya(i.i,i.k);if(c.mx<-.2)return"För djupt vatten";if(i.y-c.mn>3.5)return"För högt över marken";if(c.mx-i.y>1.6)return"Marken är för hög här";for(const l of Wn)if(l.x0<o&&l.x1>s&&l.z0<a&&l.z1>r)return"I vägen";for(const l of Cn)if(l.x>s-.3&&l.x<o+.3&&l.z>r-.3&&l.z<a+.3)return"Träd eller sten i vägen"}if(e==="wall"){const c=vc[i.r],l=kr(i.i)+c[0],u=kr(i.k)+c[1];if(oi(l,u)<-.3&&!ss(i.i,i.k))return"För djupt vatten";for(const h of Cn)if(Math.hypot(h.x-l,h.z-u)<h.r+.9)return"Träd eller sten i vägen";for(const h of Wn)if(l>h.x0-.3&&l<h.x1+.3&&u>h.z0-.3&&u<h.z1+.3)return"I vägen"}if(e==="roof"){const c=Y.pieces.filter(u=>It[u.t].kind==="wall"&&[[i.i,i.k,0],[i.i,i.k,1],No(i.i,i.k,2),No(i.i,i.k,3)].some(h=>h[0]===u.i&&h[1]===u.k&&h[2]===u.r)),l=Y.pieces.some(u=>u.t==="tak"&&Math.abs(u.i-i.i)+Math.abs(u.k-i.k)===1);if(!c.length&&!l)return"Taket behöver en vägg under sig"}return""}function Kb(){if(!ni){Rn.visible=!1;return}ct=dh(),Rn.geometry=wu[ct.t],Ja(ct,Ri),Ri.decompose(Rn.position,Rn.quaternion,Rn.scale),Rn.position.y+=.02;const i=jp(ct);Qa=!i,Rn.material=Qa?Xp:qb,Rn.visible=!0;const e=ae("bWhy");e.textContent=i||It[ct.t].name+" – "+qp(It[ct.t].cost),e.style.color=i?"#ff8a7a":"#9fe8a6"}const qp=i=>Object.keys(i).length?Object.entries(i).map(([e,t])=>`${t} ${e}`).join(" + "):"gratis";function Yp(){ct=dh();const i=jp(ct);if(Qa=!i,!Qa){Gt("no"),Dt(i);return}if(It[ct.t].kind==="level"){Y.digs.push([ct.i,ct.k,ct.y,1]),Eu(ct.i,ct.k,ct.y,!0,!0),Gt("rip"),Dt("Marken jämnad"),En();return}const e=It[ct.t].cost;for(const t in e)Y[t]-=e[t];Y.pieces.push({t:ct.t,i:ct.i,k:ct.k,r:ct.r,y:ct.y}),ct.t==="golv"&&(Y.digs.push([ct.i,ct.k,ct.y]),Eu(ct.i,ct.k,ct.y,!0)),hh(),Yn(),$p(),En(),Gt("place"),Dt("+"+It[ct.t].name)}function af(){ct=dh(),Ja(ct,Ri);const i=new I().setFromMatrixPosition(Ri);let e=null,t=2.2;for(const s of Y.pieces){Ja(s,Ri),Ds.setFromMatrixPosition(Ri);const r=Math.hypot(Ds.x-i.x,Ds.z-i.z)+(It[s.t].kind===It[nn.t].kind?0:.8);r<t&&(t=r,e=s)}if(!e){Dt("Inget att riva");return}Y.pieces.splice(Y.pieces.indexOf(e),1);const n=It[e.t].cost;for(const s in n)Y[s]+=n[s];hh(),Yn(),En(),Gt("rip"),Dt("Rev "+It[e.t].name.toLowerCase())}const yr=[];let ec={};function $b(){const i=hc(77),e=(r,o,a)=>{let c=0,l=0;for(;l<o&&c<o*60;){c++;const u=(i()-.5)*Pt*.8,h=(i()-.5)*Pt*.8,d=oi(u,h);a(u,h,d)&&(Cn.some(f=>Math.hypot(f.x-u,f.z-h)<f.r+1.4)||Wn.some(f=>u>f.x0-1&&u<f.x1+1&&h>f.z0-1&&h<f.z1+1)||yr.some(f=>Math.hypot(f.x-u,f.z-h)<5)||(yr.push({type:r,x:u,z:h,y:d,ry:i()*6.28,gone:0}),l++))}};e("log",8,(r,o,a)=>Math.hypot(r-yt.x,o-yt.z)<34&&a>.6),e("log",26,(r,o,a)=>a>.25&&a<9),e("scrap",4,(r,o,a)=>Math.hypot(r-yt.x,o-yt.z)<30&&a>.6),e("scrap",8,(r,o,a)=>a>.2&&a<2.5);const t=Ft([le(Ae(new Ht(.22,.26,2.2,8).rotateZ(Math.PI/2),0,.24,0),"#8a6646"),le(Ae(new Ht(.18,.2,1.6,7).rotateZ(Math.PI/2),.2,.62,.1,.5),"#9a7552"),le(Ae(new Ht(.21,.21,.04,8).rotateZ(Math.PI/2),1.11,.24,0),"#d9b98a")]),n=Ft([le(Ae(new Fe(.9,.5,.7),0,.25,0,.3),"#7b8189"),le(Ae(new Ht(.28,.28,.7,10),.5,.35,.3),"#a0522d"),le(Ae(new Fe(.6,.3,.5),-.3,.62,-.1,.9),"#5b6168"),le(Ae(new Oo(.3,.08,6,12).rotateX(Math.PI/2),-.5,.1,.4),"#2b2b2b")]);for(const[r,o]of[["log",t],["scrap",n]]){const a=yr.filter(l=>l.type===r),c=new Ro(o,In,a.length);c.castShadow=!0,qe.add(c),ec[r]={m:c,list:a}}const s=new Oe(new Ju(.22),new yn({color:"#ffc21a"}));s.visible=!1,qe.add(s),ec.marker=s,fh()}function fh(){for(const i of["log","scrap"]){const{m:e,list:t}=ec[i];t.forEach((n,s)=>{Za.set(0,n.ry,0),$a.setFromEuler(Za),Ua.setScalar(n.gone>0?0:1),Ds.set(n.x,n.y-.05,n.z),Ri.compose(Ds,$a,Ua),e.setMatrixAt(s,Ri)}),e.instanceMatrix.needsUpdate=!0}Ua.setScalar(1)}let Hn=null;function Zb(i,e){let t=!1;for(const o of yr)o.gone>0&&(o.gone-=i,o.gone<=0&&(t=!0));t&&fh(),Hn=null;let n=2.4;for(const o of yr){if(o.gone>0)continue;const a=Math.hypot(o.x-de.pos.x,o.z-de.pos.z);a<n&&(n=a,Hn=o)}const s=ec.marker;s.visible=!!Hn&&!ni,Hn&&(s.position.set(Hn.x,Hn.y+1.6+Math.sin(e*3)*.12,Hn.z),s.rotation.y=e*2);const r=ae("bAct");if(ae("bBuild").style.display=tt.on||hn?"none":"block",hn){r.style.display="none";return}ni?(r.style.display="block",r.textContent="Placera"):typeof ns<"u"&&ns?(r.style.display="block",r.textContent=ns.label):tt.on?r.style.display="none":Hn?(r.style.display="block",r.textContent=Hn.type==="log"?"Plocka virke":"Plocka skrot"):r.style.display="none"}function Kp(){if(!Hn)return;const i=Hn;ES(pt,"pick","idle",1600),i.type==="log"?(Y.virke+=2,Y.picked+=2,Dt("+2 virke")):(Y.skrot+=1,Dt("+1 skrot")),i.gone=120,fh(),Yn(),$p(),En(),Gt("pick")}const ws=[{txt:"Plocka 10 virke",ok:()=>Y.picked>=10},{txt:"Lägg 4 golv",ok:()=>ll("floor")>=4},{txt:"Bygg 6 väggar (en med dörr)",ok:()=>ll("wall")>=6&&Y.pieces.some(i=>i.t==="dorr")},{txt:"Lägg tak över bygget",ok:()=>ll("roof")>=2}],ll=i=>Y.pieces.filter(e=>It[e.t].kind===i).length;function $p(){for(;Y.obj<ws.length&&ws[Y.obj].ok();)Y.obj++,Y.obj<ws.length?Dt("Klart! Nästa: "+ws[Y.obj].txt,2600):Dt("Första bygget står klart! 🎉",3500),Gt("done");zs()}function zs(){const i=ae("obj"),e=typeof Fr=="function"?Fr():null,t=em(),n=Y.obj<ws.length?ws.map((r,o)=>`<div class="${o<Y.obj?"done":o===Y.obj?"now":""}">${o<Y.obj?"✓":o===Y.obj?"›":"·"} ${r.txt}</div>`).join(""):"";let s=t?`<b>Kapitel 1 · Arvet</b><div class="now">› ${t.text}</div>`+(t.list?n:""):n?`<b>Första bygget</b>${n}`:"";e&&Y.jobOn&&(s+=`<b style="display:block;margin-top:6px">Jobb</b><div class="now">› ${e.title}</div><div>${e.where}</div>`),i.innerHTML=s,i.style.display=s?"block":"none"}const Jb="/varvet/ui/",Ts=(i,e="ico")=>`<img class="${e}" src="${Jb}it_${i}.png" alt="">`;function Yn(){ae("res").innerHTML=`<span>${Ts("virke")}${Y.virke}</span><span>${Ts("skrot")}${Y.skrot}</span><span>${Ts("kr")}${Y.kr} kr</span><span>${Ts("rykte")}${Y.rykte||0}</span>`,document.querySelectorAll("#bar .pc[data-t]").forEach(i=>{const e=It[i.dataset.t],t=Object.entries(e.cost).every(([n,s])=>Y[n]>=s);i.classList.toggle("on",i.dataset.t===nn.t),i.classList.toggle("dim",!t)})}let cf=0;function Dt(i,e=1400){const t=ae("pop");t.textContent=i,t.style.opacity=1,clearTimeout(cf),cf=setTimeout(()=>t.style.opacity=0,e)}let sr=null;function Gt(i){try{sr=sr||new(window.AudioContext||window.webkitAudioContext);const e=sr.currentTime,t=sr.createOscillator(),n=sr.createGain();t.connect(n),n.connect(sr.destination);const s={pick:[520,780,.12],place:[180,120,.16],rip:[140,70,.18],no:[200,160,.12],done:[523,1046,.35],tick:[70,55,.05]}[i];t.type=i==="place"||i==="rip"?"square":"triangle",t.frequency.setValueAtTime(s[0],e),t.frequency.exponentialRampToValueAtTime(s[1],e+s[2]),n.gain.setValueAtTime(.08,e),n.gain.exponentialRampToValueAtTime(.001,e+s[2]+.05),t.start(e),t.stop(e+s[2]+.06)}catch{}}function En(){try{localStorage.setItem("varvet_save",JSON.stringify({v:1,virke:Y.virke,skrot:Y.skrot,picked:Y.picked,obj:Y.obj,pieces:Y.pieces,digs:Y.digs,kr:Y.kr,job:Y.job,jobOn:Y.jobOn,life:Y.life,char:Y.char,pname:Y.pname,rykte:Y.rykte||0,px:de.pos.x,pz:de.pos.z}))}catch{}}function Qb(){try{const i=JSON.parse(localStorage.getItem("varvet_save")||"null");if(!i)return;Object.assign(Y,{virke:i.virke,skrot:i.skrot,picked:i.picked||0,obj:i.obj||0,pieces:i.pieces||[],digs:i.digs||[],kr:i.kr||0,job:i.job||0,jobOn:i.jobOn||0,life:i.life||null,char:i.char||null,pname:i.pname||"",rykte:i.rykte||0}),i.px!=null&&(de.pos.x=i.px,de.pos.z=i.pz)}catch{}}function Tu(){ni?Yp():ns?ns.fn():Kp()}function Au(i){i&&(tt.on||Et)||(ni=i,i&&(ae("hint").style.opacity=0),ae("bar").style.display=i?"flex":"none",ae("bBuild").innerHTML=i?"Klar":`${Ts("verktyg","icob")}Bygg`,ae("bBuild").classList.toggle("acc",i),ae("bWhy").style.display=i?"block":"none",i&&(je.tPitch=Math.max(je.tPitch,.55)),Yn())}function e1(){const i=ae("bar");i.innerHTML=Or.map(e=>`<button class="pc" data-t="${e}"><i>${{golv:"▭",vagg:"▮",fonster:"▣",dorr:"⌂",tak:"◭",jamna:"⛏"}[e]}</i>${It[e].name}<small>${qp(It[e].cost).replace(/virke/g,Ts("virke","icos")).replace(/skrot/g,Ts("skrot","icos"))}</small></button>`).join("")+'<button class="pc" id="bRot"><i>↻</i>Vrid</button><button class="pc" id="bRip"><i>✕</i>Riv</button>',i.querySelectorAll(".pc[data-t]").forEach(e=>e.onclick=()=>{nn.t=e.dataset.t,nn.r=0,Yn()}),ae("bRot").onclick=()=>{nn.r=(nn.r+1)%4},ae("bRip").onclick=af,ae("bBuild").onclick=()=>Au(!ni),ae("dlgNext").onclick=()=>bu(!0),ae("dlgNo").onclick=Rb,ae("gX").onclick=()=>mc(!1),ae("bAct").onclick=Tu,addEventListener("keydown",e=>{Ls&&(e.code==="KeyB"&&Au(!ni),e.code==="KeyR"&&(nn.r=(nn.r+1)%4),e.code==="KeyX"&&ni&&af(),(e.code==="Space"||e.code==="KeyF")&&(e.preventDefault(),hn?bu():Tu()),ni&&/^Digit[1-5]$/.test(e.code)&&(nn.t=Or[+e.code.slice(5)-1],Yn()))}),zs()}setInterval(()=>{Ls&&En()},5e3);const Zp=()=>(Y.pname||"").trim()||(Y.char==="man"?"grabben":"jäntan"),As={x:6.6,z:41.4},t1=()=>`Advokatfirman Strand & Berg
Storgatan 4, Kvarnvik

Angående: dödsboet efter Edvin Lind

Hej ${Y.pname||""},

Efter många års utredning har tingsrätten nu fastställt att Edvin Lind, som försvann till sjöss natten mot den 14 oktober 1994, ska anses vara avliden.

Som hans enda barnbarn tillfaller Lindvarvet på Varvsön dig: byggnader, mark, brygga och tillhörande lösöre. Fastigheten har stått obrukad sedan dess.

Vi har även mottagit en förfrågan från Västkust Marina Invest AB, som är intresserade av att förvärva marken. Kontakta oss om du önskar sälja.

Nyckeln finns hos grannen, Sven Ek.

Med vänlig hälsning
Gunilla Strand, advokat`,n1=()=>`Till den som öppnar den här kistan –

Är det du, Karin? Eller kanske ditt barn. Jag hoppas det.

Varvet är inte mycket att se på just nu, men det har burit den här ön i hundra år. Sven vet var allting finns. Lita på honom, men låt honom aldrig koka kaffet.

Om jag inte kommer tillbaka från det jag måste göra i natt, så finns svaret där krysset är.

/ E.`,Rs=[{id:"intro",obj:"Läs brevet från advokaten",start:()=>tm("Brev från advokaten",t1(),()=>{o1(),Jp()})},{id:"sven",obj:"Hämta nyckeln hos Sven på bryggan",at:()=>lf("sven"),done:()=>Y.jobOn||Y.job>0,diary:"Kom ut till Varvsön. Morfars varv är mitt nu – vad jag nu ska göra med det."},{id:"eka",obj:"Slipa Svens eka vid boden",done:()=>Y.job>=1},{id:"karin",obj:"Svara i telefonen",start:()=>setTimeout(()=>a1(),1800),done:()=>Mr("karin")},{id:"kista",obj:"Öppna Edvins gamla kista vid boden",at:()=>new I(As.x,2.6,As.z),act:()=>({...As,r:2.4,label:"Öppna Edvins kista",fn:u1}),done:()=>Mr("kista")},{id:"virke",obj:"Samla 10 virke till lagningar",done:()=>Y.picked>=10},{id:"propeller",obj:"Byt propeller på Svens motorbåt",done:()=>Y.job>=2},{id:"leverans",obj:"Kör motorbåten till Majken på Grannön",done:()=>Y.job>=3,diary:"Träffade Majken på Grannön. Hon visste redan vem jag var. Alla vet vem jag är här."},{id:"bygge",obj:"Bygg ett förråd: golv, väggar och tak",done:()=>Y.obj>=ws.length,list:!0},{id:"kvall",obj:()=>Is().min<18*60?"Möt Sven på bryggan i kväll (efter 18:00)":"Sätt dig med Sven på bryggan",at:()=>Is().min>=18*60?lf("sven"):null,act:()=>Is().min>=18*60?{x:kt.sven.position.x,z:kt.sven.position.z,r:2.6,label:"Sätt dig med Sven",fn:h1}:null,done:()=>Mr("kvall")},{id:"slut1",obj:"Kapitel 2 – Hantverket kommer snart",start:()=>d1("Kapitel 1 – Arvet","Klart")}],Nn=()=>Y.story,Mr=i=>!!(Nn()&&Nn().flags[i]),ph=i=>{Nn().flags[i]=1,En()};function lf(i){const e=kt[i].position;return new I(e.x,e.y+2.6,e.z)}function xc(i){const e=Is();Nn().diary.unshift({d:e?e.day:0,t:i})}function Jp(){const i=Rs[Nn().step];i&&i.diary&&xc(i.diary),Nn().step++,Nn().started=!1,En(),zs(),Gt("done")}function Qp(){return Nn()?Rs[Nn().step]:null}function em(){const i=Qp();return i?{text:typeof i.obj=="function"?i.obj():i.obj,list:!!i.list}:null}const i1=()=>Nn()?Nn().diary:[];function s1(){if(!Y.story&&(Y.story={step:0,flags:{},diary:[],started:!1},Y.job>0||Y.picked>0))for(Y.story.step=1;Y.story.step<Rs.length&&Rs[Y.story.step].done&&Rs[Y.story.step].done()&&!Rs[Y.story.step].start;)Y.story.step++;c1(),rh.push(i=>{const e=Qp();if(!e||!e.act)return;const t=e.act();t&&i.unshift(t)})}let ul=0,uf="";function r1(i){const e=Nn();if(!e)return;const t=Rs[e.step];if(t){!e.started&&!hn&&!Et&&!tt.on&&(e.started=!0,t.start&&t.start()),ul-=i,t.done&&ul<=0&&!hn&&!Et&&t.done()&&(ul=.25,Jp());{const n=em(),s=n?n.text:"";s!==uf&&(uf=s,zs())}if(t.at){const n=t.at();n&&(Ai.visible=!0,Ai.position.copy(n),Ai.position.y+=Math.sin(performance.now()/330)*.15)}l1()}}function tm(i,e,t){ae("letTitle").textContent=i,ae("letBody").textContent=e,ae("letter").style.display="flex",ae("letOk").onclick=()=>{ae("letter").style.display="none",t&&t()}}function o1(){gc(()=>{de.pos.set(14,1.45,88),de.yaw=Math.PI,je.tYaw=je.yaw=Math.PI,setTimeout(()=>Dt("Varvsön · Lindvarvet",3200),400)})}function a1(){Gt("done"),ks("Karin (mamma) · 📞",[`Hej ${Zp()}, det är mamma. Advokaten sa att du åkt ut till ön.`,"Jag vet att du menar väl. Men det där varvet har inte gett vår familj något annat än sorg.","Det ligger ett bud från Västkust Marina på bordet. Ta det och kom hem.","…Och hälsa Sven. Om han fortfarande lever, den envisa gamla jäveln."],()=>{ph("karin"),xc("Mamma ringde. Hon vill att jag säljer. Hon lät inte arg – mest trött.")})}let rr=null,fr=null,Fa=0;function c1(){const i=Math.max(1.3,oi(As.x,As.z));rr=new Qt,rr.position.set(As.x,i,As.z),rr.rotation.y=-.35;const e=new Oe(Ft([le(Ae(new Fe(1.1,.55,.62),0,.275,0),"#6b4a2b",1),le(Ae(new Fe(1.14,.08,.66),0,.08,0),"#3a3f45",0),le(Ae(new Fe(1.14,.08,.66),0,.47,0),"#3a3f45",0)]),In);fr=new Qt,fr.position.set(0,.55,-.31);const t=new Oe(Ft([le(Ae(new Ht(.31,.31,1.1,10,1,!1,0,Math.PI).rotateZ(Math.PI/2),0,0,.31),"#7a5136",1)]),In);fr.add(t),rr.add(e,fr),rr.traverse(n=>{n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0)}),qe.add(rr),Mr("kista")&&(Fa=1)}function l1(){if(!fr)return;const i=Mr("kista")?1:0;Fa+=(i-Fa)*.08,fr.rotation.x=-Fa*1.7}function u1(){Gt("rip"),ph("kista"),setTimeout(()=>tm("Ett brev i Edvins handstil",n1(),()=>{Dt("Du hittade ett vattenskadat sjökort med ett blyertskryss vid Ytterskären",4200),xc("I morfars kista: ett brev till mamma – eller mig – och ett sjökort med ett kryss långt ute vid Ytterskären."),zs()}),700)}function h1(){gc(()=>{Is().min=Math.max(Is().min,19*60+30);const i=kt.sven.position;de.pos.set(i.x-.2,i.y,i.z+1.6),de.yaw=Math.PI*.9,je.tYaw=je.yaw=Math.PI*.75,je.tPitch=je.pitch=.15,setTimeout(()=>ks("Sven",["Sätt dig en stund. Det är som finast här när solen går ner.","Edvin och jag satt på den här bryggan varenda kväll i fyrtio år. Han pratade om båtar. Jag pratade om fisk. Ingen av oss lyssnade.","Natten han försvann blåste det full storm. Han sa inte ett ord – bara startade Sjöstjärnan och körde rakt ut. Ingen har nånsin förstått varför.",Mr("kista")?"Ett kryss vid Ytterskären, säger du… Dit kommer man inte med den där snipan. Inte en chans.":"Har du tittat i hans gamla kista vid boden? Han låste den aldrig.",`Men du, ${Zp()}… du har gjort mer för det här varvet på några dagar än nån gjort på trettio år. Edvin hade varit stolt.`],()=>{ph("kvall"),xc("Satt med Sven på bryggan. Morfar körde ut i stormen 1994 och ingen vet varför. Jag tänker inte sälja. Inte än.")}),600)})}function d1(i,e){const t=ae("chapter");ae("chTitle").textContent=i,ae("chSub").textContent=e,t.style.opacity=1,t.style.display="flex",setTimeout(()=>{t.style.opacity=0,setTimeout(()=>t.style.display="none",900)},4200)}const io=(i,e,t,n)=>(Math.sin(i*.08+t*1.1)*.18+Math.sin(e*.11-t*.9)*.14+Math.sin((i+e)*.21+t*1.7)*.06)*n,Ss=48,f1=.45,hf=3.2,zn=[];let Cs=null,Oa=null;const Uo=90,Wi=new Float32Array(Uo*3),fs=new Float32Array(Uo*3),hl=new Float32Array(Uo).fill(9);let df=0;function p1(){const i=new Lt;i.setAttribute("position",new _t(new Float32Array(Ss*2*3),3)),i.setAttribute("fade",new _t(new Float32Array(Ss*2),1));const e=new Float32Array(Ss*2);for(let r=0;r<Ss;r++)e[r*2]=1,e[r*2+1]=-1;i.setAttribute("side",new _t(e,1));const t=[];for(let r=0;r<Ss-1;r++){const o=r*2;t.push(o,o+1,o+2,o+1,o+3,o+2)}i.setIndex(t);const n=new bn({transparent:!0,depthWrite:!1,side:qt,vertexShader:"attribute float fade,side;varying float vF,vSd;varying vec2 vS;void main(){vF=fade;vSd=side;vS=position.xz;gl_Position=projectionMatrix*viewMatrix*vec4(position,1.);}",fragmentShader:"varying float vF,vSd;varying vec2 vS;void main(){float e=abs(vSd);float edge=smoothstep(.55,.95,e)*(1.-smoothstep(.97,1.,e)*.6);float n=.6+.4*sin(vS.x*3.1+vS.y*2.3)*sin(vS.y*4.7-vS.x*1.9);gl_FragColor=vec4(vec3(.96,.98,1.),vF*n*mix(.12,.9,edge));}"});Cs=new Oe(i,n),Cs.frustumCulled=!1,Cs.renderOrder=2,qe.add(Cs);const s=new Lt;s.setAttribute("position",new _t(Wi,3)),Oa=new np(s,new Yu({color:16055295,size:.16,transparent:!0,opacity:.85,depthWrite:!1})),Oa.frustumCulled=!1,qe.add(Oa)}let _n=null,so=null,ro=null,ps=null,ms=null;function m1(i,e){try{if(!i){ps&&_n&&ps.gain.setTargetAtTime(0,_n.currentTime,.15);return}_n||(_n=new(window.AudioContext||window.webkitAudioContext),so=_n.createOscillator(),so.type="sawtooth",ro=_n.createOscillator(),ro.type="square",ms=_n.createBiquadFilter(),ms.type="lowpass",ms.frequency.value=380,ps=_n.createGain(),ps.gain.value=0,so.connect(ms),ro.connect(ms),ms.connect(ps),ps.connect(_n.destination),so.start(),ro.start());const t=Math.min(1,Math.abs(e)/11);so.frequency.setTargetAtTime(38+70*t,_n.currentTime,.2),ro.frequency.setTargetAtTime(19+35*t,_n.currentTime,.2),ms.frequency.setTargetAtTime(260+700*t,_n.currentTime,.2),ps.gain.setTargetAtTime(.035+.05*t,_n.currentTime,.2)}catch{}}let Sa=NaN,dl=NaN,fl=0;function g1(i,e,t,n,s,r,o){var C;Cs||p1();const a=ri?((C=ri.material.uniforms.amp)==null?void 0:C.value)??1:1,c=i.position.x,l=i.position.z,u=Math.sin(o)*2.4,h=Math.cos(o)*2.4,d=Math.cos(o)*.9,f=-Math.sin(o)*.9,g=io(c+u,l+h,t,a),_=io(c-u,l-h,t,a),m=io(c-d,l-f,t,a),p=io(c+d,l+f,t,a),y=.45+(g+_+m+p)/4;i.position.y+=(y-i.position.y)*Math.min(1,e*6);const S=Math.min(1,Math.abs(s)/11),v=Math.atan2(_-g,4.8)-S*.1-(n?Math.sin(t*9)*.004*S:0);fl+=(-r*S*.16-fl)*Math.min(1,e*3),i.rotation.set(v,o,Math.atan2(m-p,1.8)+fl,"YXZ"),isNaN(Sa)&&(Sa=c,dl=l),Math.hypot(c-Sa,l-dl)>f1&&Math.abs(s)>.6&&(zn.unshift({x:c-Math.sin(o)*2.6,z:l-Math.cos(o)*2.6,ax:Math.cos(o),az:-Math.sin(o),age:0,v:S}),zn.length>Ss&&zn.pop(),Sa=c,dl=l);for(const M of zn)M.age+=e;for(;zn.length&&zn[zn.length-1].age>hf;)zn.pop();const w=Cs.geometry.attributes.position,T=Cs.geometry.attributes.fade;for(let M=0;M<Ss;M++){const x=zn[Math.min(M,zn.length-1)];if(!x){w.setXYZ(M*2,c,-9,l),w.setXYZ(M*2+1,c,-9,l),T.setX(M*2,0),T.setX(M*2+1,0);continue}const R=x.age/hf,O=.5+R*3.2*(.5+x.v),N=io(x.x,x.z,t,a)+.06,B=M<zn.length?(1-R)*x.v*(M===0?.4:1):0;w.setXYZ(M*2,x.x+x.ax*O,N,x.z+x.az*O),w.setXYZ(M*2+1,x.x-x.ax*O,N,x.z-x.az*O),T.setX(M*2,B),T.setX(M*2+1,B)}if(w.needsUpdate=!0,T.needsUpdate=!0,n&&S>.25)for(let M=0;M<Math.ceil(S*3);M++){const x=df=(df+1)%Uo,R=Math.random()<.5?-1:1;Wi[x*3]=c+Math.sin(o)*2.2+Math.cos(o)*R*.5,Wi[x*3+1]=i.position.y-.1,Wi[x*3+2]=l+Math.cos(o)*2.2-Math.sin(o)*R*.5,fs[x*3]=Math.cos(o)*R*(1+Math.random())*S*2,fs[x*3+1]=1.2+Math.random()*1.6*S,fs[x*3+2]=-Math.sin(o)*R*(1+Math.random())*S*2,hl[x]=0}for(let M=0;M<Uo;M++){if(hl[M]>.8){Wi[M*3+1]=-50;continue}hl[M]+=e,fs[M*3+1]-=9*e,Wi[M*3]+=fs[M*3]*e,Wi[M*3+1]+=fs[M*3+1]*e,Wi[M*3+2]+=fs[M*3+2]*e}Oa.geometry.attributes.position.needsUpdate=!0,m1(n,s)}const po={x:0,y:.25,z:-1.6,yaw:0},pl=new I,ff=new I,pf=new cn,mf=new cn;let gs=null,gf=null;function _1(i){return gf===i&&gs&&gs.parent||(gs=null,gf=i,i.traverse(e=>{!gs&&/hips$/i.test(e.name)&&(gs=e)})),gs}function v1(i,e){e.updateMatrixWorld(!0),pl.set(po.x,po.y,po.z).applyMatrix4(e.matrixWorld),e.getWorldQuaternion(pf),mf.setFromAxisAngle(new I(0,1,0),po.yaw),i.quaternion.copy(pf).multiply(mf),i.position.copy(pl);const t=i.userData.realModel?_1(i):null;t&&(i.updateMatrixWorld(!0),t.getWorldPosition(ff),i.position.add(pl.sub(ff)))}const bo=[],x1=Math.random().toString(36).slice(2,10);let ba=[],_f=performance.now(),ml="";function y1(){const i=window.SBCFG;return i&&i.url&&i.key?i:null}function M1(){try{for(let i=0;i<localStorage.length;i++){const e=localStorage.key(i)||"";if(e.startsWith("sb-")&&e.endsWith("-auth-token")){const t=JSON.parse(localStorage.getItem(e)||"null");if(t&&t.access_token)return t.access_token}}}catch{}return null}function ka(i,e){bo.push({kind:i,data:e}),bo.length>50&&bo.shift()}function S1(i,e){try{const t=i&&i.getExtension("WEBGL_debug_renderer_info");ml=t&&i?String(i.getParameter(t.UNMASKED_RENDERER_WEBGL)):""}catch{ml=""}ka("session",{ua:navigator.userAgent,w:screen.width,h:screen.height,dpr:devicePixelRatio,gpu:ml,backend:e,cores:navigator.hardwareConcurrency||0}),window.addEventListener("error",t=>ka("error",{msg:String(t.message),src:`${t.filename}:${t.lineno}:${t.colno}`,stack:t.error&&t.error.stack?String(t.error.stack).slice(0,1500):""})),window.addEventListener("unhandledrejection",t=>ka("error",{msg:"promise: "+String(t.reason&&t.reason.message||t.reason).slice(0,500)})),window.addEventListener("pagehide",()=>vf(!0)),setInterval(()=>vf(!1),6e4)}function b1(i,e){if(i>0&&i<1&&ba.push(i),performance.now()-_f>6e4&&ba.length>30){const t=ba.slice().sort((r,o)=>r-o),n=t.reduce((r,o)=>r+o,0)/t.length,s=t[Math.min(t.length-1,Math.floor(t.length*.99))];ka("perf",{fps:+(1/n).toFixed(1),low1:+(1/s).toFixed(1),frames:t.length,...e}),ba=[],_f=performance.now()}}function vf(i){const e=y1();if(!e||!bo.length)return;const t=bo.splice(0).map(s=>({session:x1,kind:s.kind,data:s.data})),n={"Content-Type":"application/json",apikey:e.key,Authorization:"Bearer "+(M1()||e.key),Prefer:"return=minimal"};try{fetch(e.url+"/rest/v1/varvet_telemetry",{method:"POST",headers:n,body:JSON.stringify(t),keepalive:i}).catch(()=>{})}catch{}}let xf=performance.now();function nm(i){requestAnimationFrame(nm);const e=1e3/Ot.fps-1.5,t=i-xf;if(t<e)return;const n=Math.min(.05,t/1e3);xf=i;const s=performance.now();Ls&&(Fp(n),Zb(n,i/1e3),Ab(i/1e3),cb(n),r1(n)),vb(),TS(n);const r=i/1e3;ri.material.uniforms.t.value=r,Ke&&(tt.on?Ke.userData.yaw=tt.yaw:Ke.userData.yaw==null&&(Ke.userData.yaw=Ke.rotation.y),g1(Ke,n,r,tt.on,tt.on?tt.v:0,tt.steer||0,tt.on?tt.yaw:Ke.userData.yaw),tt.on?v1(pt,Ke):pt.quaternion.setFromAxisAngle(new I(0,1,0),pt.rotation.y));const o=qe.userData.flag;if(o&&(o.rotation.y=Math.sin(r*1.7)*.25),!Ls){je.tYaw+=n*.08,je.yaw=je.tYaw;const a=60,c=Math.sin(r*.05)*a,l=50+Math.cos(r*.05)*a;qn.position.set(c,22,l),qn.lookAt(0,2,36),qe.userData.sky.position.copy(qn.position)}jS(),qS(n,performance.now()-s),Ls&&(GS(t/1e3),b1(t/1e3,{...hu(),q:Ot.q,goal:Ot.fps}))}function E1(){Gb(ZS()),eb(),QS(),JS(Jn),Qb(),wb(),s1(),Wb(),e1(),ob(),Y.char&&Xa(pt,xp[Y.char]),de.pos.y=oi(de.pos.x,de.pos.z),wp(),S1(ln.getContext(),"webgl2"),ae("loading").remove(),requestAnimationFrame(nm),window.__ready=!0}window.VARVET={story:()=>Y.story,SEAT:po,NPC:kt,P:pt,life:()=>Is(),player:de,camS:je,input:Dn,SET:Ot,renderer:ln,scene:qe,update:Fp,act:Tu,dlgNext:bu,BOATM:tt,JOBS:Mu,startGame:Bp,endGame:mc,jobState:Fr,get nearI(){return ns},get GAMEON(){return Et},get NJ(){return Ut},bobBoat:()=>Ke,ST:Y,setBuild:Au,place:Yp,gather:Kp,cur:nn,NODES:yr,start:()=>ae("bPlay").onclick()};setTimeout(E1,30);
