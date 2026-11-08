var Tg=Object.defineProperty;var Ag=(i,e,t)=>e in i?Tg(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Ri=(i,e,t)=>Ag(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ah="170",Rg=0,kd=1,Cg=2,Up=1,kp=2,Fi=3,Zi=0,gn=1,en=2,Ms=0,Vr=1,Fd=2,Od=3,Bd=4,Pg=5,Gs=100,Ig=101,Lg=102,Dg=103,Ng=104,Ug=200,kg=201,Fg=202,Og=203,hu=204,du=205,Bg=206,zg=207,Hg=208,Vg=209,Gg=210,Wg=211,Xg=212,jg=213,qg=214,fu=0,pu=1,mu=2,$r=3,gu=4,vu=5,_u=6,xu=7,Rh=0,Yg=1,Kg=2,Ss=0,$g=1,Jg=2,Zg=3,Fp=4,Qg=5,e0=6,t0=7,zd="attached",n0="detached",Op=300,Jr=301,Zr=302,yu=303,Mu=304,Wc=306,tr=1e3,gs=1001,Ac=1002,vn=1003,Bp=1004,Ha=1005,mn=1006,dc=1007,Vi=1008,Qi=1009,zp=1010,Hp=1011,ao=1012,Ch=1013,nr=1014,ri=1015,fa=1016,Ph=1017,Ih=1018,Qr=1020,Vp=35902,Gp=1021,Wp=1022,jn=1023,Xp=1024,jp=1025,Gr=1026,ea=1027,Lh=1028,Dh=1029,qp=1030,Nh=1031,Uh=1033,fc=33776,pc=33777,mc=33778,gc=33779,Su=35840,bu=35841,wu=35842,Eu=35843,Tu=36196,Au=37492,Ru=37496,Cu=37808,Pu=37809,Iu=37810,Lu=37811,Du=37812,Nu=37813,Uu=37814,ku=37815,Fu=37816,Ou=37817,Bu=37818,zu=37819,Hu=37820,Vu=37821,vc=36492,Gu=36494,Wu=36495,Yp=36283,Xu=36284,ju=36285,qu=36286,i0=2200,s0=2201,r0=2202,oo=2300,co=2301,dl=2302,Dr=2400,Nr=2401,Rc=2402,kh=2500,a0=2501,o0=0,Kp=1,Yu=2,c0=3200,l0=3201,Fh=0,u0=1,ps="",Yt="srgb",yn="srgb-linear",Xc="linear",Tt="srgb",hr=7680,Hd=519,h0=512,d0=513,f0=514,$p=515,p0=516,m0=517,g0=518,v0=519,Ku=35044,Vd="300 es",Gi=2e3,Cc=2001;class or{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gd=1234567;const $a=Math.PI/180,ta=180/Math.PI;function qn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function Kt(i,e,t){return Math.max(e,Math.min(t,i))}function Oh(i,e){return(i%e+e)%e}function _0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function x0(i,e,t){return i!==e?(t-i)/(e-i):0}function Ja(i,e,t){return(1-t)*i+t*e}function y0(i,e,t,n){return Ja(i,e,1-Math.exp(-t*n))}function M0(i,e=1){return e-Math.abs(Oh(i,e*2)-e)}function S0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function b0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function w0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function E0(i,e){return i+Math.random()*(e-i)}function T0(i){return i*(.5-Math.random())}function A0(i){i!==void 0&&(Gd=i);let e=Gd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function R0(i){return i*$a}function C0(i){return i*ta}function P0(i){return(i&i-1)===0&&i!==0}function I0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function L0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function D0(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,c*h,c*d,o*l);break;case"YZY":i.set(c*d,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*d,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ii(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function St(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const N0={DEG2RAD:$a,RAD2DEG:ta,generateUUID:qn,clamp:Kt,euclideanModulo:Oh,mapLinear:_0,inverseLerp:x0,lerp:Ja,damp:y0,pingpong:M0,smoothstep:S0,smootherstep:b0,randInt:w0,randFloat:E0,randFloatSpread:T0,seededRandom:A0,degToRad:R0,radToDeg:C0,isPowerOfTwo:P0,ceilPowerOfTwo:I0,floorPowerOfTwo:L0,setQuaternionFromProperEuler:D0,normalize:St,denormalize:ii};class ne{constructor(e=0,t=0){ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,n,s,r,a,o,c,l){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],_=s[1],y=s[4],x=s[7],P=s[2],E=s[5],A=s[8];return r[0]=a*v+o*_+c*P,r[3]=a*m+o*y+c*E,r[6]=a*p+o*x+c*A,r[1]=l*v+u*_+h*P,r[4]=l*m+u*y+h*E,r[7]=l*p+u*x+h*A,r[2]=d*v+f*_+g*P,r[5]=d*m+f*y+g*E,r[8]=d*p+f*x+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*r,f=l*r-a*c,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(s*l-u*n)*v,e[2]=(o*n-s*a)*v,e[3]=d*v,e[4]=(u*t-s*c)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(fl.makeScale(e,t)),this}rotate(e){return this.premultiply(fl.makeRotation(-e)),this}translate(e,t){return this.premultiply(fl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fl=new Qe;function Jp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function lo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function U0(){const i=lo("canvas");return i.style.display="block",i}const Wd={};function Va(i){i in Wd||(Wd[i]=!0,console.warn(i))}function k0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function F0(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function O0(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const at={enabled:!0,workingColorSpace:yn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Tt&&(i.r=qi(i.r),i.g=qi(i.g),i.b=qi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Tt&&(i.r=Wr(i.r),i.g=Wr(i.g),i.b=Wr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ps?Xc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Xd=[.64,.33,.3,.6,.15,.06],jd=[.2126,.7152,.0722],qd=[.3127,.329],Yd=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kd=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);at.define({[yn]:{primaries:Xd,whitePoint:qd,transfer:Xc,toXYZ:Yd,fromXYZ:Kd,luminanceCoefficients:jd,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:Xd,whitePoint:qd,transfer:Tt,toXYZ:Yd,fromXYZ:Kd,luminanceCoefficients:jd,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}});let dr;class B0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{dr===void 0&&(dr=lo("canvas")),dr.width=e.width,dr.height=e.height;const n=dr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=dr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=lo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=qi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qi(t[n]/255)*255):t[n]=qi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let z0=0;class Zp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=qn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(pl(s[a].image)):r.push(pl(s[a]))}else r=pl(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function pl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?B0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let H0=0;class $t extends or{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,n=gs,s=gs,r=mn,a=Vi,o=jn,c=Qi,l=$t.DEFAULT_ANISOTROPY,u=ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=qn(),this.name="",this.source=new Zp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Op)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tr:e.x=e.x-Math.floor(e.x);break;case gs:e.x=e.x<0?0:1;break;case Ac:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tr:e.y=e.y-Math.floor(e.y);break;case gs:e.y=e.y<0?0:1;break;case Ac:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Op;$t.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,n=0,s=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,x=(f+1)/2,P=(p+1)/2,E=(u+d)/4,A=(h+v)/4,C=(g+m)/4;return y>x&&y>P?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=E/n,r=A/n):x>P?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=E/s,r=C/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=A/r,s=C/r),this.set(n,s,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(h-v)/_,this.z=(d-u)/_,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class V0 extends or{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new $t(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Zp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Es extends V0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Qp extends $t{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class G0 extends $t{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _n{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(h!==v||c!==d||l!==f||u!==g){let m=1-o;const p=c*d+l*f+u*g+h*v,_=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const P=Math.sqrt(y),E=Math.atan2(P,p*_);m=Math.sin(m*E)/P,o=Math.sin(o*E)/P}const x=o*_;if(c=c*m+d*x,l=l*m+f*x,u=u*m+g*x,h=h*m+v*x,m===1-o){const P=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=P,l*=P,u*=P,h*=P}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-o*f,e[t+2]=l*g+u*f+o*d-c*h,e[t+3]=u*g-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($d.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($d.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ml.copy(this).projectOnVector(e),this.sub(ml)}reflect(e){return this.sub(ml.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ml=new I,$d=new _n;class Dn{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qn):Qn.fromBufferAttribute(r,a),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ro.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ro.copy(n.boundingBox)),Ro.applyMatrix4(e.matrixWorld),this.union(Ro)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ea),Co.subVectors(this.max,Ea),fr.subVectors(e.a,Ea),pr.subVectors(e.b,Ea),mr.subVectors(e.c,Ea),ss.subVectors(pr,fr),rs.subVectors(mr,pr),Ps.subVectors(fr,mr);let t=[0,-ss.z,ss.y,0,-rs.z,rs.y,0,-Ps.z,Ps.y,ss.z,0,-ss.x,rs.z,0,-rs.x,Ps.z,0,-Ps.x,-ss.y,ss.x,0,-rs.y,rs.x,0,-Ps.y,Ps.x,0];return!gl(t,fr,pr,mr,Co)||(t=[1,0,0,0,1,0,0,0,1],!gl(t,fr,pr,mr,Co))?!1:(Po.crossVectors(ss,rs),t=[Po.x,Po.y,Po.z],gl(t,fr,pr,mr,Co))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ci=[new I,new I,new I,new I,new I,new I,new I,new I],Qn=new I,Ro=new Dn,fr=new I,pr=new I,mr=new I,ss=new I,rs=new I,Ps=new I,Ea=new I,Co=new I,Po=new I,Is=new I;function gl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Is.fromArray(i,r);const o=s.x*Math.abs(Is.x)+s.y*Math.abs(Is.y)+s.z*Math.abs(Is.z),c=e.dot(Is),l=t.dot(Is),u=n.dot(Is);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const W0=new Dn,Ta=new I,vl=new I;class Si{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):W0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ta.subVectors(e,this.center);const t=Ta.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ta,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ta.copy(e.center).add(vl)),this.expandByPoint(Ta.copy(e.center).sub(vl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pi=new I,_l=new I,Io=new I,as=new I,xl=new I,Lo=new I,yl=new I;class jc{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,t),Pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){_l.copy(e).add(t).multiplyScalar(.5),Io.copy(t).sub(e).normalize(),as.copy(this.origin).sub(_l);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Io),o=as.dot(this.direction),c=-as.dot(Io),l=as.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*c-o,d=a*o-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(_l).addScaledVector(Io,d),f}intersectSphere(e,t){Pi.subVectors(e.center,this.origin);const n=Pi.dot(this.direction),s=Pi.dot(Pi)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,t,n,s,r){xl.subVectors(t,e),Lo.subVectors(n,e),yl.crossVectors(xl,Lo);let a=this.direction.dot(yl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;as.subVectors(this.origin,e);const c=o*this.direction.dot(Lo.crossVectors(as,Lo));if(c<0)return null;const l=o*this.direction.dot(xl.cross(as));if(l<0||c+l>a)return null;const u=-o*as.dot(yl);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(e,t,n,s,r,a,o,c,l,u,h,d,f,g,v,m){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,h,d,f,g,v,m)}set(e,t,n,s,r,a,o,c,l,u,h,d,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/gr.setFromMatrixColumn(e,0).length(),r=1/gr.setFromMatrixColumn(e,1).length(),a=1/gr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,f=a*h,g=o*u,v=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-v*l,t[9]=-o*c,t[2]=v-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,v=l*h;t[0]=d+v*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=v+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,v=l*h;t[0]=d-v*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,f=a*h,g=o*u,v=o*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+v,t[1]=c*h,t[5]=v*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,g=o*c,v=o*l;t[0]=c*u,t[4]=v-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-v*h}else if(e.order==="XZY"){const d=a*c,f=a*l,g=o*c,v=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+v,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(X0,e,j0)}lookAt(e,t,n){const s=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),os.crossVectors(n,Cn),os.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),os.crossVectors(n,Cn)),os.normalize(),Do.crossVectors(Cn,os),s[0]=os.x,s[4]=Do.x,s[8]=Cn.x,s[1]=os.y,s[5]=Do.y,s[9]=Cn.y,s[2]=os.z,s[6]=Do.z,s[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],_=n[3],y=n[7],x=n[11],P=n[15],E=s[0],A=s[4],C=s[8],S=s[12],M=s[1],R=s[5],F=s[9],k=s[13],B=s[2],Y=s[6],G=s[10],Z=s[14],W=s[3],de=s[7],Me=s[11],Ce=s[15];return r[0]=a*E+o*M+c*B+l*W,r[4]=a*A+o*R+c*Y+l*de,r[8]=a*C+o*F+c*G+l*Me,r[12]=a*S+o*k+c*Z+l*Ce,r[1]=u*E+h*M+d*B+f*W,r[5]=u*A+h*R+d*Y+f*de,r[9]=u*C+h*F+d*G+f*Me,r[13]=u*S+h*k+d*Z+f*Ce,r[2]=g*E+v*M+m*B+p*W,r[6]=g*A+v*R+m*Y+p*de,r[10]=g*C+v*F+m*G+p*Me,r[14]=g*S+v*k+m*Z+p*Ce,r[3]=_*E+y*M+x*B+P*W,r[7]=_*A+y*R+x*Y+P*de,r[11]=_*C+y*F+x*G+P*Me,r[15]=_*S+y*k+x*Z+P*Ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*c*h-s*l*h-r*o*d+n*l*d+s*o*f-n*c*f)+v*(+t*c*f-t*l*d+r*a*d-s*a*f+s*l*u-r*c*u)+m*(+t*l*h-t*o*f-r*a*h+n*a*f+r*o*u-n*l*u)+p*(-s*o*u-t*c*h+t*o*d+s*a*h-n*a*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],_=h*m*l-v*d*l+v*c*f-o*m*f-h*c*p+o*d*p,y=g*d*l-u*m*l-g*c*f+a*m*f+u*c*p-a*d*p,x=u*v*l-g*h*l+g*o*f-a*v*f-u*o*p+a*h*p,P=g*h*c-u*v*c-g*o*d+a*v*d+u*o*m-a*h*m,E=t*_+n*y+s*x+r*P;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=_*A,e[1]=(v*d*r-h*m*r-v*s*f+n*m*f+h*s*p-n*d*p)*A,e[2]=(o*m*r-v*c*r+v*s*l-n*m*l-o*s*p+n*c*p)*A,e[3]=(h*c*r-o*d*r-h*s*l+n*d*l+o*s*f-n*c*f)*A,e[4]=y*A,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*A,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*p-t*c*p)*A,e[7]=(a*d*r-u*c*r+u*s*l-t*d*l-a*s*f+t*c*f)*A,e[8]=x*A,e[9]=(g*h*r-u*v*r-g*n*f+t*v*f+u*n*p-t*h*p)*A,e[10]=(a*v*r-g*o*r+g*n*l-t*v*l-a*n*p+t*o*p)*A,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*f-t*o*f)*A,e[12]=P*A,e[13]=(u*v*s-g*h*s+g*n*d-t*v*d-u*n*m+t*h*m)*A,e[14]=(g*o*s-a*v*s-g*n*c+t*v*c+a*n*m-t*o*m)*A,e[15]=(a*h*s-u*o*s+u*n*c-t*h*c-a*n*d+t*o*d)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,d=r*l,f=r*u,g=r*h,v=a*u,m=a*h,p=o*h,_=c*l,y=c*u,x=c*h,P=n.x,E=n.y,A=n.z;return s[0]=(1-(v+p))*P,s[1]=(f+x)*P,s[2]=(g-y)*P,s[3]=0,s[4]=(f-x)*E,s[5]=(1-(d+p))*E,s[6]=(m+_)*E,s[7]=0,s[8]=(g+y)*A,s[9]=(m-_)*A,s[10]=(1-(d+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=gr.set(s[0],s[1],s[2]).length();const a=gr.set(s[4],s[5],s[6]).length(),o=gr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ei.copy(this);const l=1/r,u=1/a,h=1/o;return ei.elements[0]*=l,ei.elements[1]*=l,ei.elements[2]*=l,ei.elements[4]*=u,ei.elements[5]*=u,ei.elements[6]*=u,ei.elements[8]*=h,ei.elements[9]*=h,ei.elements[10]*=h,t.setFromRotationMatrix(ei),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Gi){const c=this.elements,l=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let f,g;if(o===Gi)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Cc)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Gi){const c=this.elements,l=1/(t-e),u=1/(n-s),h=1/(a-r),d=(t+e)*l,f=(n+s)*u;let g,v;if(o===Gi)g=(a+r)*h,v=-2*h;else if(o===Cc)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const gr=new I,ei=new qe,X0=new I(0,0,0),j0=new I(1,1,1),os=new I,Do=new I,Cn=new I,Jd=new qe,Zd=new _n;class Un{constructor(e=0,t=0,n=0,s=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Jd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zd.setFromEuler(this),this.setFromQuaternion(Zd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class em{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let q0=0;const Qd=new I,vr=new _n,Ii=new qe,No=new I,Aa=new I,Y0=new I,K0=new _n,ef=new I(1,0,0),tf=new I(0,1,0),nf=new I(0,0,1),sf={type:"added"},$0={type:"removed"},_r={type:"childadded",child:null},Ml={type:"childremoved",child:null};class Ut extends or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new I,t=new Un,n=new _n,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qe},normalMatrix:{value:new Qe}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new em,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vr.setFromAxisAngle(e,t),this.quaternion.multiply(vr),this}rotateOnWorldAxis(e,t){return vr.setFromAxisAngle(e,t),this.quaternion.premultiply(vr),this}rotateX(e){return this.rotateOnAxis(ef,e)}rotateY(e){return this.rotateOnAxis(tf,e)}rotateZ(e){return this.rotateOnAxis(nf,e)}translateOnAxis(e,t){return Qd.copy(e).applyQuaternion(this.quaternion),this.position.add(Qd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ef,e)}translateY(e){return this.translateOnAxis(tf,e)}translateZ(e){return this.translateOnAxis(nf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?No.copy(e):No.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Aa,No,this.up):Ii.lookAt(No,Aa,this.up),this.quaternion.setFromRotationMatrix(Ii),s&&(Ii.extractRotation(s.matrixWorld),vr.setFromRotationMatrix(Ii),this.quaternion.premultiply(vr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sf),_r.child=e,this.dispatchEvent(_r),_r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($0),Ml.child=e,this.dispatchEvent(Ml),Ml.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sf),_r.child=e,this.dispatchEvent(_r),_r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,e,Y0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,K0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Ut.DEFAULT_UP=new I(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new I,Li=new I,Sl=new I,Di=new I,xr=new I,yr=new I,rf=new I,bl=new I,wl=new I,El=new I,Tl=new mt,Al=new mt,Rl=new mt;class si{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ti.subVectors(e,t),s.cross(ti);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ti.subVectors(s,t),Li.subVectors(n,t),Sl.subVectors(e,t);const a=ti.dot(ti),o=ti.dot(Li),c=ti.dot(Sl),l=Li.dot(Li),u=Li.dot(Sl),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-o*u)*d,g=(a*u-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Di)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Di.x),c.addScaledVector(a,Di.y),c.addScaledVector(o,Di.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Tl.setScalar(0),Al.setScalar(0),Rl.setScalar(0),Tl.fromBufferAttribute(e,t),Al.fromBufferAttribute(e,n),Rl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Tl,r.x),a.addScaledVector(Al,r.y),a.addScaledVector(Rl,r.z),a}static isFrontFacing(e,t,n,s){return ti.subVectors(n,t),Li.subVectors(e,t),ti.cross(Li).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),ti.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return si.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;xr.subVectors(s,n),yr.subVectors(r,n),bl.subVectors(e,n);const c=xr.dot(bl),l=yr.dot(bl);if(c<=0&&l<=0)return t.copy(n);wl.subVectors(e,s);const u=xr.dot(wl),h=yr.dot(wl);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(xr,a);El.subVectors(e,r);const f=xr.dot(El),g=yr.dot(El);if(g>=0&&f<=g)return t.copy(r);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(yr,o);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return rf.subVectors(r,s),o=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(rf,o);const p=1/(m+v+d);return a=v*p,o=d*p,t.copy(n).addScaledVector(xr,a).addScaledVector(yr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},Uo={h:0,s:0,l:0};function Cl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=at.workingColorSpace){if(e=Oh(e,1),t=Kt(t,0,1),n=Kt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Cl(a,r,e+1/3),this.g=Cl(a,r,e),this.b=Cl(a,r,e-1/3)}return at.toWorkingColorSpace(this,s),this}setStyle(e,t=Yt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const n=tm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return at.fromWorkingColorSpace(ln.copy(this),e),Math.round(Kt(ln.r*255,0,255))*65536+Math.round(Kt(ln.g*255,0,255))*256+Math.round(Kt(ln.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(ln.copy(this),t);const n=ln.r,s=ln.g,r=ln.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=Yt){at.fromWorkingColorSpace(ln.copy(this),e);const t=ln.r,n=ln.g,s=ln.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(cs),this.setHSL(cs.h+e,cs.s+t,cs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(cs),e.getHSL(Uo);const n=Ja(cs.h,Uo.h,t),s=Ja(cs.s,Uo.s,t),r=Ja(cs.l,Uo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new pe;pe.NAMES=tm;let J0=0;class oi extends or{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=qn(),this.name="",this.blending=Vr,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hu,this.blendDst=du,this.blendEquation=Gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=$r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hr,this.stencilZFail=hr,this.stencilZPass=hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vr&&(n.blending=this.blending),this.side!==Zi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hu&&(n.blendSrc=this.blendSrc),this.blendDst!==du&&(n.blendDst=this.blendDst),this.blendEquation!==Gs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$r&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class wn extends oi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new I,ko=new ne;class wt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ku,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ko.fromBufferAttribute(this,t),ko.applyMatrix3(e),this.setXY(t,ko.x,ko.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ku&&(e.usage=this.usage),e}}class nm extends wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class im extends wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Et extends wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Z0=0;const zn=new qe,Pl=new Ut,Mr=new I,Pn=new Dn,Ra=new Dn,Qt=new I;class Ht extends or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jp(e)?im:nm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,n){return zn.makeTranslation(e,t,n),this.applyMatrix4(zn),this}scale(e,t,n){return zn.makeScale(e,t,n),this.applyMatrix4(zn),this}lookAt(e){return Pl.lookAt(e),Pl.updateMatrix(),this.applyMatrix4(Pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Et(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ra.setFromBufferAttribute(o),this.morphTargetsRelative?(Qt.addVectors(Pn.min,Ra.min),Pn.expandByPoint(Qt),Qt.addVectors(Pn.max,Ra.max),Pn.expandByPoint(Qt)):(Pn.expandByPoint(Ra.min),Pn.expandByPoint(Ra.max))}Pn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Qt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Qt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Qt.fromBufferAttribute(o,l),c&&(Mr.fromBufferAttribute(e,l),Qt.add(Mr)),s=Math.max(s,n.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new I,c[C]=new I;const l=new I,u=new I,h=new I,d=new ne,f=new ne,g=new ne,v=new I,m=new I;function p(C,S,M){l.fromBufferAttribute(n,C),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,M),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(R),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(R),o[C].add(v),o[S].add(v),o[M].add(v),c[C].add(m),c[S].add(m),c[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let C=0,S=_.length;C<S;++C){const M=_[C],R=M.start,F=M.count;for(let k=R,B=R+F;k<B;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const y=new I,x=new I,P=new I,E=new I;function A(C){P.fromBufferAttribute(s,C),E.copy(P);const S=o[C];y.copy(S),y.sub(P.multiplyScalar(P.dot(S))).normalize(),x.crossVectors(E,S);const R=x.dot(c[C])<0?-1:1;a.setXYZW(C,y.x,y.y,y.z,R)}for(let C=0,S=_.length;C<S;++C){const M=_[C],R=M.start,F=M.count;for(let k=R,B=R+F;k<B;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new I,r=new I,a=new I,o=new I,c=new I,l=new I,u=new I,h=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new wt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const af=new qe,Ls=new jc,Fo=new Si,of=new I,Oo=new I,Bo=new I,zo=new I,Il=new I,Ho=new I,cf=new I,Vo=new I;class Te extends Ut{constructor(e=new Ht,t=new wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ho.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(Il.fromBufferAttribute(h,e),a?Ho.addScaledVector(Il,u):Ho.addScaledVector(Il.sub(t),u))}t.add(Ho)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fo.copy(n.boundingSphere),Fo.applyMatrix4(r),Ls.copy(e.ray).recast(e.near),!(Fo.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Fo,of)===null||Ls.origin.distanceToSquared(of)>(e.far-e.near)**2))&&(af.copy(r).invert(),Ls.copy(e.ray).applyMatrix4(af),!(n.boundingBox!==null&&Ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ls)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,P=y;x<P;x+=3){const E=o.getX(x),A=o.getX(x+1),C=o.getX(x+2);s=Go(this,p,e,n,l,u,h,E,A,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=o.getX(m),y=o.getX(m+1),x=o.getX(m+2);s=Go(this,a,e,n,l,u,h,_,y,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,P=y;x<P;x+=3){const E=x,A=x+1,C=x+2;s=Go(this,p,e,n,l,u,h,E,A,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=m,y=m+1,x=m+2;s=Go(this,a,e,n,l,u,h,_,y,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Q0(i,e,t,n,s,r,a,o){let c;if(e.side===gn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Zi,o),c===null)return null;Vo.copy(o),Vo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Vo);return l<t.near||l>t.far?null:{distance:l,point:Vo.clone(),object:i}}function Go(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Oo),i.getVertexPosition(c,Bo),i.getVertexPosition(l,zo);const u=Q0(i,e,t,n,Oo,Bo,zo,cf);if(u){const h=new I;si.getBarycoord(cf,Oo,Bo,zo,h),s&&(u.uv=si.getInterpolatedAttribute(s,o,c,l,h,new ne)),r&&(u.uv1=si.getInterpolatedAttribute(r,o,c,l,h,new ne)),a&&(u.normal=si.getInterpolatedAttribute(a,o,c,l,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new I,materialIndex:0};si.getNormal(Oo,Bo,zo,d.normal),u.face=d,u.barycoord=h}return u}class Le extends Ht{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Et(l,3)),this.setAttribute("normal",new Et(u,3)),this.setAttribute("uv",new Et(h,2));function g(v,m,p,_,y,x,P,E,A,C,S){const M=x/A,R=P/C,F=x/2,k=P/2,B=E/2,Y=A+1,G=C+1;let Z=0,W=0;const de=new I;for(let Me=0;Me<G;Me++){const Ce=Me*R-k;for(let $e=0;$e<Y;$e++){const gt=$e*M-F;de[v]=gt*_,de[m]=Ce*y,de[p]=B,l.push(de.x,de.y,de.z),de[v]=0,de[m]=0,de[p]=E>0?1:-1,u.push(de.x,de.y,de.z),h.push($e/A),h.push(1-Me/C),Z+=1}}for(let Me=0;Me<C;Me++)for(let Ce=0;Ce<A;Ce++){const $e=d+Ce+Y*Me,gt=d+Ce+Y*(Me+1),K=d+(Ce+1)+Y*(Me+1),ae=d+(Ce+1)+Y*Me;c.push($e,gt,ae),c.push(gt,K,ae),W+=6}o.addGroup(f,W,S),f+=W,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Le(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function na(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function dn(i){const e={};for(let t=0;t<i.length;t++){const n=na(i[t]);for(const s in n)e[s]=n[s]}return e}function ev(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function sm(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const rm={clone:na,merge:dn};var tv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends oi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tv,this.fragmentShader=nv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=na(e.uniforms),this.uniformsGroups=ev(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class am extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=Gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ls=new I,lf=new ne,uf=new ne;class pn extends am{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ta*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($a*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ta*2*Math.atan(Math.tan($a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ls.x,ls.y).multiplyScalar(-e/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ls.x,ls.y).multiplyScalar(-e/ls.z)}getViewSize(e,t){return this.getViewBounds(e,lf,uf),t.subVectors(uf,lf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($a*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Sr=-90,br=1;class iv extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new pn(Sr,br,e,t);s.layers=this.layers,this.add(s);const r=new pn(Sr,br,e,t);r.layers=this.layers,this.add(r);const a=new pn(Sr,br,e,t);a.layers=this.layers,this.add(a);const o=new pn(Sr,br,e,t);o.layers=this.layers,this.add(o);const c=new pn(Sr,br,e,t);c.layers=this.layers,this.add(c);const l=new pn(Sr,br,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===Gi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Cc)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class om extends $t{constructor(e,t,n,s,r,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Jr,super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sv extends Es{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new om(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Le(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:na(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:Ms});r.uniforms.tEquirect.value=t;const a=new Te(s,r),o=t.minFilter;return t.minFilter===Vi&&(t.minFilter=mn),new iv(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const Ll=new I,rv=new I,av=new Qe;class Hs{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ll.subVectors(n,t).cross(rv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ll),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||av.getNormalMatrix(e),s=this.coplanarPoint(Ll).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ds=new Si,Wo=new I;class Bh{constructor(e=new Hs,t=new Hs,n=new Hs,s=new Hs,r=new Hs,a=new Hs){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gi){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],_=s[13],y=s[14],x=s[15];if(n[0].setComponents(c-r,d-l,m-f,x-p).normalize(),n[1].setComponents(c+r,d+l,m+f,x+p).normalize(),n[2].setComponents(c+a,d+u,m+g,x+_).normalize(),n[3].setComponents(c-a,d-u,m-g,x-_).normalize(),n[4].setComponents(c-o,d-h,m-v,x-y).normalize(),t===Gi)n[5].setComponents(c+o,d+h,m+v,x+y).normalize();else if(t===Cc)n[5].setComponents(o,h,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(e){return Ds.center.set(0,0,0),Ds.radius=.7071067811865476,Ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Wo.x=s.normal.x>0?e.max.x:e.min.x,Wo.y=s.normal.y>0?e.max.y:e.min.y,Wo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Wo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cm(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ov(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],v=h[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const v=h[f];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class yi extends Ht{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=e/o,d=t/c,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const _=p*d-a;for(let y=0;y<l;y++){const x=y*h-r;g.push(x,-_,0),v.push(0,0,1),m.push(y/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<o;_++){const y=_+l*p,x=_+l*(p+1),P=_+1+l*(p+1),E=_+1+l*p;f.push(y,x,E),f.push(x,P,E)}this.setIndex(f),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yi(e.width,e.height,e.widthSegments,e.heightSegments)}}var cv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lv=`#ifdef USE_ALPHAHASH
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
#endif`,uv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pv=`#ifdef USE_AOMAP
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
#endif`,mv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gv=`#ifdef USE_BATCHING
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
#endif`,vv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_v=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mv=`#ifdef USE_IRIDESCENCE
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
#endif`,Sv=`#ifdef USE_BUMPMAP
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
#endif`,bv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ev=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Av=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Iv=`#define PI 3.141592653589793
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
} // validated`,Lv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dv=`vec3 transformedNormal = objectNormal;
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
#endif`,Nv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ov="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zv=`#ifdef USE_ENVMAP
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
#endif`,Hv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vv=`#ifdef USE_ENVMAP
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
#endif`,Gv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wv=`#ifdef USE_ENVMAP
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
#endif`,Xv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kv=`#ifdef USE_GRADIENTMAP
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
}`,$v=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qv=`uniform bool receiveShadow;
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
#endif`,e_=`#ifdef USE_ENVMAP
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
#endif`,t_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r_=`PhysicalMaterial material;
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
#endif`,a_=`struct PhysicalMaterial {
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
}`,o_=`
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
#endif`,c_=`#if defined( RE_IndirectDiffuse )
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
#endif`,l_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,p_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,v_=`#if defined( USE_POINTS_UV )
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
#endif`,__=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,M_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,S_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b_=`#ifdef USE_MORPHTARGETS
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
#endif`,w_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,T_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,A_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,P_=`#ifdef USE_NORMALMAP
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
#endif`,I_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,N_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,U_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,k_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,F_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,O_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,z_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,H_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,j_=`float getShadowMask() {
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
}`,q_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Y_=`#ifdef USE_SKINNING
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
#endif`,K_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$_=`#ifdef USE_SKINNING
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
#endif`,J_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ex=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tx=`#ifdef USE_TRANSMISSION
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
#endif`,nx=`#ifdef USE_TRANSMISSION
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
#endif`,ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ax=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ox=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cx=`uniform sampler2D t2D;
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
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ux=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fx=`#include <common>
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
}`,px=`#if DEPTH_PACKING == 3200
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
}`,mx=`#define DISTANCE
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
}`,gx=`#define DISTANCE
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
}`,vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_x=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xx=`uniform float scale;
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
}`,yx=`uniform vec3 diffuse;
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
}`,Mx=`#include <common>
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
}`,Sx=`uniform vec3 diffuse;
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
}`,bx=`#define LAMBERT
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
}`,wx=`#define LAMBERT
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
}`,Ex=`#define MATCAP
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
}`,Tx=`#define MATCAP
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
}`,Ax=`#define NORMAL
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
}`,Rx=`#define NORMAL
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
}`,Cx=`#define PHONG
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
}`,Px=`#define PHONG
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
}`,Ix=`#define STANDARD
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
}`,Lx=`#define STANDARD
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
}`,Dx=`#define TOON
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
}`,Nx=`#define TOON
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
}`,Ux=`uniform float size;
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
}`,kx=`uniform vec3 diffuse;
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
}`,Fx=`#include <common>
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
}`,Ox=`uniform vec3 color;
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
}`,Bx=`uniform float rotation;
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
}`,zx=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:cv,alphahash_pars_fragment:lv,alphamap_fragment:uv,alphamap_pars_fragment:hv,alphatest_fragment:dv,alphatest_pars_fragment:fv,aomap_fragment:pv,aomap_pars_fragment:mv,batching_pars_vertex:gv,batching_vertex:vv,begin_vertex:_v,beginnormal_vertex:xv,bsdfs:yv,iridescence_fragment:Mv,bumpmap_pars_fragment:Sv,clipping_planes_fragment:bv,clipping_planes_pars_fragment:wv,clipping_planes_pars_vertex:Ev,clipping_planes_vertex:Tv,color_fragment:Av,color_pars_fragment:Rv,color_pars_vertex:Cv,color_vertex:Pv,common:Iv,cube_uv_reflection_fragment:Lv,defaultnormal_vertex:Dv,displacementmap_pars_vertex:Nv,displacementmap_vertex:Uv,emissivemap_fragment:kv,emissivemap_pars_fragment:Fv,colorspace_fragment:Ov,colorspace_pars_fragment:Bv,envmap_fragment:zv,envmap_common_pars_fragment:Hv,envmap_pars_fragment:Vv,envmap_pars_vertex:Gv,envmap_physical_pars_fragment:e_,envmap_vertex:Wv,fog_vertex:Xv,fog_pars_vertex:jv,fog_fragment:qv,fog_pars_fragment:Yv,gradientmap_pars_fragment:Kv,lightmap_pars_fragment:$v,lights_lambert_fragment:Jv,lights_lambert_pars_fragment:Zv,lights_pars_begin:Qv,lights_toon_fragment:t_,lights_toon_pars_fragment:n_,lights_phong_fragment:i_,lights_phong_pars_fragment:s_,lights_physical_fragment:r_,lights_physical_pars_fragment:a_,lights_fragment_begin:o_,lights_fragment_maps:c_,lights_fragment_end:l_,logdepthbuf_fragment:u_,logdepthbuf_pars_fragment:h_,logdepthbuf_pars_vertex:d_,logdepthbuf_vertex:f_,map_fragment:p_,map_pars_fragment:m_,map_particle_fragment:g_,map_particle_pars_fragment:v_,metalnessmap_fragment:__,metalnessmap_pars_fragment:x_,morphinstance_vertex:y_,morphcolor_vertex:M_,morphnormal_vertex:S_,morphtarget_pars_vertex:b_,morphtarget_vertex:w_,normal_fragment_begin:E_,normal_fragment_maps:T_,normal_pars_fragment:A_,normal_pars_vertex:R_,normal_vertex:C_,normalmap_pars_fragment:P_,clearcoat_normal_fragment_begin:I_,clearcoat_normal_fragment_maps:L_,clearcoat_pars_fragment:D_,iridescence_pars_fragment:N_,opaque_fragment:U_,packing:k_,premultiplied_alpha_fragment:F_,project_vertex:O_,dithering_fragment:B_,dithering_pars_fragment:z_,roughnessmap_fragment:H_,roughnessmap_pars_fragment:V_,shadowmap_pars_fragment:G_,shadowmap_pars_vertex:W_,shadowmap_vertex:X_,shadowmask_pars_fragment:j_,skinbase_vertex:q_,skinning_pars_vertex:Y_,skinning_vertex:K_,skinnormal_vertex:$_,specularmap_fragment:J_,specularmap_pars_fragment:Z_,tonemapping_fragment:Q_,tonemapping_pars_fragment:ex,transmission_fragment:tx,transmission_pars_fragment:nx,uv_pars_fragment:ix,uv_pars_vertex:sx,uv_vertex:rx,worldpos_vertex:ax,background_vert:ox,background_frag:cx,backgroundCube_vert:lx,backgroundCube_frag:ux,cube_vert:hx,cube_frag:dx,depth_vert:fx,depth_frag:px,distanceRGBA_vert:mx,distanceRGBA_frag:gx,equirect_vert:vx,equirect_frag:_x,linedashed_vert:xx,linedashed_frag:yx,meshbasic_vert:Mx,meshbasic_frag:Sx,meshlambert_vert:bx,meshlambert_frag:wx,meshmatcap_vert:Ex,meshmatcap_frag:Tx,meshnormal_vert:Ax,meshnormal_frag:Rx,meshphong_vert:Cx,meshphong_frag:Px,meshphysical_vert:Ix,meshphysical_frag:Lx,meshtoon_vert:Dx,meshtoon_frag:Nx,points_vert:Ux,points_frag:kx,shadow_vert:Fx,shadow_frag:Ox,sprite_vert:Bx,sprite_frag:zx},fe={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},mi={basic:{uniforms:dn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:dn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new pe(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:dn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:dn([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:dn([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new pe(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:dn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:dn([fe.points,fe.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:dn([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:dn([fe.common,fe.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:dn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:dn([fe.sprite,fe.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:dn([fe.common,fe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:dn([fe.lights,fe.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};mi.physical={uniforms:dn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Xo={r:0,b:0,g:0},Ns=new Un,Hx=new qe;function Vx(i,e,t,n,s,r,a){const o=new pe(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?t:e).get(y)),y}function v(_){let y=!1;const x=g(_);x===null?p(o,c):x&&x.isColor&&(p(x,1),y=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===Wc)?(u===void 0&&(u=new Te(new Le(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:na(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ns.copy(y.backgroundRotation),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Hx.makeRotationFromEuler(Ns)),u.material.toneMapped=at.getTransfer(x.colorSpace)!==Tt,(h!==x||d!==x.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=i.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Te(new yi(2,2),new kn({name:"BackgroundMaterial",uniforms:na(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=at.getTransfer(x.colorSpace)!==Tt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,f=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,y){_.getRGB(Xo,sm(i)),n.buffers.color.setClear(Xo.r,Xo.g,Xo.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),c=y,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(o,c)},render:v,addToRenderList:m}}function Gx(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(M,R,F,k,B){let Y=!1;const G=h(k,F,R);r!==G&&(r=G,l(r.object)),Y=f(M,k,F,B),Y&&g(M,k,F,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,x(M,R,F,k),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,R,F){const k=F.wireframe===!0;let B=n[M.id];B===void 0&&(B={},n[M.id]=B);let Y=B[R.id];Y===void 0&&(Y={},B[R.id]=Y);let G=Y[k];return G===void 0&&(G=d(c()),Y[k]=G),G}function d(M){const R=[],F=[],k=[];for(let B=0;B<t;B++)R[B]=0,F[B]=0,k[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:F,attributeDivisors:k,object:M,attributes:{},index:null}}function f(M,R,F,k){const B=r.attributes,Y=R.attributes;let G=0;const Z=F.getAttributes();for(const W in Z)if(Z[W].location>=0){const Me=B[W];let Ce=Y[W];if(Ce===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(Ce=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(Ce=M.instanceColor)),Me===void 0||Me.attribute!==Ce||Ce&&Me.data!==Ce.data)return!0;G++}return r.attributesNum!==G||r.index!==k}function g(M,R,F,k){const B={},Y=R.attributes;let G=0;const Z=F.getAttributes();for(const W in Z)if(Z[W].location>=0){let Me=Y[W];Me===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(Me=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(Me=M.instanceColor));const Ce={};Ce.attribute=Me,Me&&Me.data&&(Ce.data=Me.data),B[W]=Ce,G++}r.attributes=B,r.attributesNum=G,r.index=k}function v(){const M=r.newAttributes;for(let R=0,F=M.length;R<F;R++)M[R]=0}function m(M){p(M,0)}function p(M,R){const F=r.newAttributes,k=r.enabledAttributes,B=r.attributeDivisors;F[M]=1,k[M]===0&&(i.enableVertexAttribArray(M),k[M]=1),B[M]!==R&&(i.vertexAttribDivisor(M,R),B[M]=R)}function _(){const M=r.newAttributes,R=r.enabledAttributes;for(let F=0,k=R.length;F<k;F++)R[F]!==M[F]&&(i.disableVertexAttribArray(F),R[F]=0)}function y(M,R,F,k,B,Y,G){G===!0?i.vertexAttribIPointer(M,R,F,B,Y):i.vertexAttribPointer(M,R,F,k,B,Y)}function x(M,R,F,k){v();const B=k.attributes,Y=F.getAttributes(),G=R.defaultAttributeValues;for(const Z in Y){const W=Y[Z];if(W.location>=0){let de=B[Z];if(de===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(de=M.instanceColor)),de!==void 0){const Me=de.normalized,Ce=de.itemSize,$e=e.get(de);if($e===void 0)continue;const gt=$e.buffer,K=$e.type,ae=$e.bytesPerElement,Pe=K===i.INT||K===i.UNSIGNED_INT||de.gpuType===Ch;if(de.isInterleavedBufferAttribute){const le=de.data,Be=le.stride,Ye=de.offset;if(le.isInstancedInterleavedBuffer){for(let Xe=0;Xe<W.locationSize;Xe++)p(W.location+Xe,le.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Xe=0;Xe<W.locationSize;Xe++)m(W.location+Xe);i.bindBuffer(i.ARRAY_BUFFER,gt);for(let Xe=0;Xe<W.locationSize;Xe++)y(W.location+Xe,Ce/W.locationSize,K,Me,Be*ae,(Ye+Ce/W.locationSize*Xe)*ae,Pe)}else{if(de.isInstancedBufferAttribute){for(let le=0;le<W.locationSize;le++)p(W.location+le,de.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let le=0;le<W.locationSize;le++)m(W.location+le);i.bindBuffer(i.ARRAY_BUFFER,gt);for(let le=0;le<W.locationSize;le++)y(W.location+le,Ce/W.locationSize,K,Me,Ce*ae,Ce/W.locationSize*le*ae,Pe)}}else if(G!==void 0){const Me=G[Z];if(Me!==void 0)switch(Me.length){case 2:i.vertexAttrib2fv(W.location,Me);break;case 3:i.vertexAttrib3fv(W.location,Me);break;case 4:i.vertexAttrib4fv(W.location,Me);break;default:i.vertexAttrib1fv(W.location,Me)}}}}_()}function P(){C();for(const M in n){const R=n[M];for(const F in R){const k=R[F];for(const B in k)u(k[B].object),delete k[B];delete R[F]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;const R=n[M.id];for(const F in R){const k=R[F];for(const B in k)u(k[B].object),delete k[B];delete R[F]}delete n[M.id]}function A(M){for(const R in n){const F=n[R];if(F[M.id]===void 0)continue;const k=F[M.id];for(const B in k)u(k[B].object),delete k[B];delete F[M.id]}}function C(){S(),a=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function Wx(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*d[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Xx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==jn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const C=A===fa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Qi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ri&&!C)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:P,maxSamples:E}}function jx(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Hs,o=new Qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const _=r?0:n,y=_*4;let x=p.clippingState||null;c.value=x,x=u(g,d,y,f);for(let P=0;P!==y;++P)x[P]=t[P];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==v;++y,x+=4)a.copy(h[y]).applyMatrix4(_,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function qx(i){let e=new WeakMap;function t(a,o){return o===yu?a.mapping=Jr:o===Mu&&(a.mapping=Zr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===yu||o===Mu)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new sv(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class qc extends am{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ur=4,hf=[.125,.215,.35,.446,.526,.582],Ws=20,Dl=new qc,df=new pe;let Nl=null,Ul=0,kl=0,Fl=!1;const Vs=(1+Math.sqrt(5))/2,wr=1/Vs,ff=[new I(-Vs,wr,0),new I(Vs,wr,0),new I(-wr,0,Vs),new I(wr,0,Vs),new I(0,Vs,-wr),new I(0,Vs,wr),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class pf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Nl=this._renderer.getRenderTarget(),Ul=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nl,Ul,kl),this._renderer.xr.enabled=Fl,e.scissorTest=!1,jo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Jr||e.mapping===Zr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nl=this._renderer.getRenderTarget(),Ul=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:fa,format:jn,colorSpace:yn,depthBuffer:!1},s=mf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mf(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yx(r)),this._blurMaterial=Kx(r,e,t)}return s}_compileMaterial(e){const t=new Te(this._lodPlanes[0],e);this._renderer.compile(t,Dl)}_sceneToCubeUV(e,t,n,s){const o=new pn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(df),u.toneMapping=Ss,u.autoClear=!1;const f=new wn({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),g=new Te(new Le,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(df),v=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):_===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const y=this._cubeSize;jo(s,_*y,p>2?y:0,y,y),u.setRenderTarget(s),v&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Jr||e.mapping===Zr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gf());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Te(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;jo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Dl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ff[(s-r-1)%ff.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Te(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ws-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):Ws;m>Ws&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ws}`);const p=[];let _=0;for(let A=0;A<Ws;++A){const C=A/v,S=Math.exp(-C*C/2);p.push(S),A===0?_+=S:A<m&&(_+=2*S)}for(let A=0;A<p.length;A++)p[A]=p[A]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const x=this._sizeLods[s],P=3*x*(s>y-Ur?s-y+Ur:0),E=4*(this._cubeSize-x);jo(t,P,E,3*x,2*x),c.setRenderTarget(t),c.render(h,Dl)}}function Yx(i){const e=[],t=[],n=[];let s=i;const r=i-Ur+1+hf.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Ur?c=hf[a-i+Ur-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,v=3,m=2,p=1,_=new Float32Array(v*g*f),y=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let E=0;E<f;E++){const A=E%3*2/3-1,C=E>2?0:-1,S=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];_.set(S,v*g*E),y.set(d,m*g*E);const M=[E,E,E,E,E,E];x.set(M,p*g*E)}const P=new Ht;P.setAttribute("position",new wt(_,v)),P.setAttribute("uv",new wt(y,m)),P.setAttribute("faceIndex",new wt(x,p)),e.push(P),s>Ur&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function mf(i,e,t){const n=new Es(i,e,t);return n.texture.mapping=Wc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Kx(i,e,t){const n=new Float32Array(Ws),s=new I(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:Ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:zh(),fragmentShader:`

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
		`,blending:Ms,depthTest:!1,depthWrite:!1})}function gf(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zh(),fragmentShader:`

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
		`,blending:Ms,depthTest:!1,depthWrite:!1})}function vf(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ms,depthTest:!1,depthWrite:!1})}function zh(){return`

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
	`}function $x(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===yu||c===Mu,u=c===Jr||c===Zr;if(l||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new pf(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return l&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new pf(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Jx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Va("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Zx(i,e,t,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],i.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let v=0;if(f!==null){const _=f.array;v=f.version;for(let y=0,x=_.length;y<x;y+=3){const P=_[y+0],E=_[y+1],A=_[y+2];d.push(P,E,E,A,A,P)}}else if(g!==void 0){const _=g.array;v=g.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const P=y+0,E=y+1,A=y+2;d.push(P,E,E,A,A,P)}}else return;const m=new(Jp(d)?im:nm)(d,1);m.version=v;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function Qx(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_]*v[_];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function ey(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ty(i,e,t){const n=new WeakMap,s=new mt;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let M=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let P=o.attributes.position.count*x,E=1;P>e.maxTextureSize&&(E=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const A=new Float32Array(P*E*4*h),C=new Qp(A,P,E,h);C.type=ri,C.needsUpdate=!0;const S=x*4;for(let R=0;R<h;R++){const F=p[R],k=_[R],B=y[R],Y=P*E*4*R;for(let G=0;G<F.count;G++){const Z=G*S;g===!0&&(s.fromBufferAttribute(F,G),A[Y+Z+0]=s.x,A[Y+Z+1]=s.y,A[Y+Z+2]=s.z,A[Y+Z+3]=0),v===!0&&(s.fromBufferAttribute(k,G),A[Y+Z+4]=s.x,A[Y+Z+5]=s.y,A[Y+Z+6]=s.z,A[Y+Z+7]=0),m===!0&&(s.fromBufferAttribute(B,G),A[Y+Z+8]=s.x,A[Y+Z+9]=s.y,A[Y+Z+10]=s.z,A[Y+Z+11]=B.itemSize===4?s.w:1)}}d={count:h,texture:C,size:new ne(P,E)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function ny(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}class Hh extends $t{constructor(e,t,n,s,r,a,o,c,l,u=Gr){if(u!==Gr&&u!==ea)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Gr&&(n=nr),n===void 0&&u===ea&&(n=Qr),super(null,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:vn,this.minFilter=c!==void 0?c:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const lm=new $t,_f=new Hh(1,1),um=new Qp,hm=new G0,dm=new om,xf=[],yf=[],Mf=new Float32Array(16),Sf=new Float32Array(9),bf=new Float32Array(4);function pa(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=xf[s];if(r===void 0&&(r=new Float32Array(s),xf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Yc(i,e){let t=yf[e];t===void 0&&(t=new Int32Array(e),yf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function iy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function sy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2fv(this.addr,e),Zt(t,e)}}function ry(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;i.uniform3fv(this.addr,e),Zt(t,e)}}function ay(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4fv(this.addr,e),Zt(t,e)}}function oy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Jt(t,n))return;bf.set(n),i.uniformMatrix2fv(this.addr,!1,bf),Zt(t,n)}}function cy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Jt(t,n))return;Sf.set(n),i.uniformMatrix3fv(this.addr,!1,Sf),Zt(t,n)}}function ly(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Jt(t,n))return;Mf.set(n),i.uniformMatrix4fv(this.addr,!1,Mf),Zt(t,n)}}function uy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function hy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2iv(this.addr,e),Zt(t,e)}}function dy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;i.uniform3iv(this.addr,e),Zt(t,e)}}function fy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4iv(this.addr,e),Zt(t,e)}}function py(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function my(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2uiv(this.addr,e),Zt(t,e)}}function gy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;i.uniform3uiv(this.addr,e),Zt(t,e)}}function vy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4uiv(this.addr,e),Zt(t,e)}}function _y(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(_f.compareFunction=$p,r=_f):r=lm,t.setTexture2D(e||r,s)}function xy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||hm,s)}function yy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||dm,s)}function My(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||um,s)}function Sy(i){switch(i){case 5126:return iy;case 35664:return sy;case 35665:return ry;case 35666:return ay;case 35674:return oy;case 35675:return cy;case 35676:return ly;case 5124:case 35670:return uy;case 35667:case 35671:return hy;case 35668:case 35672:return dy;case 35669:case 35673:return fy;case 5125:return py;case 36294:return my;case 36295:return gy;case 36296:return vy;case 35678:case 36198:case 36298:case 36306:case 35682:return _y;case 35679:case 36299:case 36307:return xy;case 35680:case 36300:case 36308:case 36293:return yy;case 36289:case 36303:case 36311:case 36292:return My}}function by(i,e){i.uniform1fv(this.addr,e)}function wy(i,e){const t=pa(e,this.size,2);i.uniform2fv(this.addr,t)}function Ey(i,e){const t=pa(e,this.size,3);i.uniform3fv(this.addr,t)}function Ty(i,e){const t=pa(e,this.size,4);i.uniform4fv(this.addr,t)}function Ay(i,e){const t=pa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ry(i,e){const t=pa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Cy(i,e){const t=pa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Py(i,e){i.uniform1iv(this.addr,e)}function Iy(i,e){i.uniform2iv(this.addr,e)}function Ly(i,e){i.uniform3iv(this.addr,e)}function Dy(i,e){i.uniform4iv(this.addr,e)}function Ny(i,e){i.uniform1uiv(this.addr,e)}function Uy(i,e){i.uniform2uiv(this.addr,e)}function ky(i,e){i.uniform3uiv(this.addr,e)}function Fy(i,e){i.uniform4uiv(this.addr,e)}function Oy(i,e,t){const n=this.cache,s=e.length,r=Yc(t,s);Jt(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||lm,r[a])}function By(i,e,t){const n=this.cache,s=e.length,r=Yc(t,s);Jt(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||hm,r[a])}function zy(i,e,t){const n=this.cache,s=e.length,r=Yc(t,s);Jt(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||dm,r[a])}function Hy(i,e,t){const n=this.cache,s=e.length,r=Yc(t,s);Jt(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||um,r[a])}function Vy(i){switch(i){case 5126:return by;case 35664:return wy;case 35665:return Ey;case 35666:return Ty;case 35674:return Ay;case 35675:return Ry;case 35676:return Cy;case 5124:case 35670:return Py;case 35667:case 35671:return Iy;case 35668:case 35672:return Ly;case 35669:case 35673:return Dy;case 5125:return Ny;case 36294:return Uy;case 36295:return ky;case 36296:return Fy;case 35678:case 36198:case 36298:case 36306:case 35682:return Oy;case 35679:case 36299:case 36307:return By;case 35680:case 36300:case 36308:case 36293:return zy;case 36289:case 36303:case 36311:case 36292:return Hy}}class Gy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Sy(t.type)}}class Wy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vy(t.type)}}class Xy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Ol=/(\w+)(\])?(\[|\.)?/g;function wf(i,e){i.seq.push(e),i.map[e.id]=e}function jy(i,e,t){const n=i.name,s=n.length;for(Ol.lastIndex=0;;){const r=Ol.exec(n),a=Ol.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){wf(t,l===void 0?new Gy(o,i,e):new Wy(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Xy(o),wf(t,h)),t=h}}}class _c{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);jy(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Ef(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const qy=37297;let Yy=0;function Ky(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Tf=new Qe;function $y(i){at._getMatrix(Tf,at.workingColorSpace,i);const e=`mat3( ${Tf.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(i)){case Xc:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Af(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Ky(i.getShaderSource(e),a)}else return s}function Jy(i,e){const t=$y(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Zy(i,e){let t;switch(e){case $g:t="Linear";break;case Jg:t="Reinhard";break;case Zg:t="Cineon";break;case Fp:t="ACESFilmic";break;case e0:t="AgX";break;case t0:t="Neutral";break;case Qg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const qo=new I;function Qy(){at.getLuminanceCoefficients(qo);const i=qo.x.toFixed(4),e=qo.y.toFixed(4),t=qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ga).join(`
`)}function tM(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function nM(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ga(i){return i!==""}function Rf(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iM=/^[ \t]*#include +<([\w\d./]+)>/gm;function $u(i){return i.replace(iM,rM)}const sM=new Map;function rM(i,e){let t=tt[e];if(t===void 0){const n=sM.get(e);if(n!==void 0)t=tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return $u(t)}const aM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pf(i){return i.replace(aM,oM)}function oM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function If(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function cM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Up?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===kp?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function lM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Jr:case Zr:e="ENVMAP_TYPE_CUBE";break;case Wc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Zr:e="ENVMAP_MODE_REFRACTION";break}return e}function hM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Rh:e="ENVMAP_BLENDING_MULTIPLY";break;case Yg:e="ENVMAP_BLENDING_MIX";break;case Kg:e="ENVMAP_BLENDING_ADD";break}return e}function dM(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function fM(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=cM(t),l=lM(t),u=uM(t),h=hM(t),d=dM(t),f=eM(t),g=tM(r),v=s.createProgram();let m,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ga).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ga).join(`
`),p.length>0&&(p+=`
`)):(m=[If(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ga).join(`
`),p=[If(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ss?"#define TONE_MAPPING":"",t.toneMapping!==Ss?tt.tonemapping_pars_fragment:"",t.toneMapping!==Ss?Zy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,Jy("linearToOutputTexel",t.outputColorSpace),Qy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ga).join(`
`)),a=$u(a),a=Rf(a,t),a=Cf(a,t),o=$u(o),o=Rf(o,t),o=Cf(o,t),a=Pf(a),o=Pf(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Vd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=_+m+a,x=_+p+o,P=Ef(s,s.VERTEX_SHADER,y),E=Ef(s,s.FRAGMENT_SHADER,x);s.attachShader(v,P),s.attachShader(v,E),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(R){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(v).trim(),k=s.getShaderInfoLog(P).trim(),B=s.getShaderInfoLog(E).trim();let Y=!0,G=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,P,E);else{const Z=Af(s,P,"vertex"),W=Af(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+F+`
`+Z+`
`+W)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(k===""||B==="")&&(G=!1);G&&(R.diagnostics={runnable:Y,programLog:F,vertexShader:{log:k,prefix:m},fragmentShader:{log:B,prefix:p}})}s.deleteShader(P),s.deleteShader(E),C=new _c(s,v),S=nM(s,v)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,qy)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Yy++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=E,this}let pM=0;class mM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new gM(e),t.set(e,n)),n}}class gM{constructor(e){this.id=pM++,this.code=e,this.usedTimes=0}}function vM(i,e,t,n,s,r,a){const o=new em,c=new mM,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,R,F,k){const B=F.fog,Y=k.geometry,G=S.isMeshStandardMaterial?F.environment:null,Z=(S.isMeshStandardMaterial?t:e).get(S.envMap||G),W=Z&&Z.mapping===Wc?Z.image.height:null,de=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const Me=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ce=Me!==void 0?Me.length:0;let $e=0;Y.morphAttributes.position!==void 0&&($e=1),Y.morphAttributes.normal!==void 0&&($e=2),Y.morphAttributes.color!==void 0&&($e=3);let gt,K,ae,Pe;if(de){const Mt=mi[de];gt=Mt.vertexShader,K=Mt.fragmentShader}else gt=S.vertexShader,K=S.fragmentShader,c.update(S),ae=c.getVertexShaderID(S),Pe=c.getFragmentShaderID(S);const le=i.getRenderTarget(),Be=i.state.buffers.depth.getReversed(),Ye=k.isInstancedMesh===!0,Xe=k.isBatchedMesh===!0,ct=!!S.map,J=!!S.matcap,re=!!Z,L=!!S.aoMap,ke=!!S.lightMap,te=!!S.bumpMap,Ee=!!S.normalMap,he=!!S.displacementMap,Ge=!!S.emissiveMap,be=!!S.metalnessMap,T=!!S.roughnessMap,b=S.anisotropy>0,O=S.clearcoat>0,j=S.dispersion>0,Q=S.iridescence>0,q=S.sheen>0,Ie=S.transmission>0,me=b&&!!S.anisotropyMap,we=O&&!!S.clearcoatMap,rt=O&&!!S.clearcoatNormalMap,ie=O&&!!S.clearcoatRoughnessMap,Ae=Q&&!!S.iridescenceMap,We=Q&&!!S.iridescenceThicknessMap,je=q&&!!S.sheenColorMap,Re=q&&!!S.sheenRoughnessMap,ot=!!S.specularMap,et=!!S.specularColorMap,Ct=!!S.specularIntensityMap,D=Ie&&!!S.transmissionMap,ge=Ie&&!!S.thicknessMap,X=!!S.gradientMap,$=!!S.alphaMap,ye=S.alphaTest>0,_e=!!S.alphaHash,Je=!!S.extensions;let Ot=Ss;S.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Ot=i.toneMapping);const on={shaderID:de,shaderType:S.type,shaderName:S.name,vertexShader:gt,fragmentShader:K,defines:S.defines,customVertexShaderID:ae,customFragmentShaderID:Pe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Xe,batchingColor:Xe&&k._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&k.instanceColor!==null,instancingMorph:Ye&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:yn,alphaToCoverage:!!S.alphaToCoverage,map:ct,matcap:J,envMap:re,envMapMode:re&&Z.mapping,envMapCubeUVHeight:W,aoMap:L,lightMap:ke,bumpMap:te,normalMap:Ee,displacementMap:d&&he,emissiveMap:Ge,normalMapObjectSpace:Ee&&S.normalMapType===u0,normalMapTangentSpace:Ee&&S.normalMapType===Fh,metalnessMap:be,roughnessMap:T,anisotropy:b,anisotropyMap:me,clearcoat:O,clearcoatMap:we,clearcoatNormalMap:rt,clearcoatRoughnessMap:ie,dispersion:j,iridescence:Q,iridescenceMap:Ae,iridescenceThicknessMap:We,sheen:q,sheenColorMap:je,sheenRoughnessMap:Re,specularMap:ot,specularColorMap:et,specularIntensityMap:Ct,transmission:Ie,transmissionMap:D,thicknessMap:ge,gradientMap:X,opaque:S.transparent===!1&&S.blending===Vr&&S.alphaToCoverage===!1,alphaMap:$,alphaTest:ye,alphaHash:_e,combine:S.combine,mapUv:ct&&v(S.map.channel),aoMapUv:L&&v(S.aoMap.channel),lightMapUv:ke&&v(S.lightMap.channel),bumpMapUv:te&&v(S.bumpMap.channel),normalMapUv:Ee&&v(S.normalMap.channel),displacementMapUv:he&&v(S.displacementMap.channel),emissiveMapUv:Ge&&v(S.emissiveMap.channel),metalnessMapUv:be&&v(S.metalnessMap.channel),roughnessMapUv:T&&v(S.roughnessMap.channel),anisotropyMapUv:me&&v(S.anisotropyMap.channel),clearcoatMapUv:we&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:rt&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:We&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:je&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Re&&v(S.sheenRoughnessMap.channel),specularMapUv:ot&&v(S.specularMap.channel),specularColorMapUv:et&&v(S.specularColorMap.channel),specularIntensityMapUv:Ct&&v(S.specularIntensityMap.channel),transmissionMapUv:D&&v(S.transmissionMap.channel),thicknessMapUv:ge&&v(S.thicknessMap.channel),alphaMapUv:$&&v(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ee||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Y.attributes.uv&&(ct||$),fog:!!B,useFog:S.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Be,skinning:k.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:$e,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ot,decodeVideoTexture:ct&&S.map.isVideoTexture===!0&&at.getTransfer(S.map.colorSpace)===Tt,decodeVideoTextureEmissive:Ge&&S.emissiveMap.isVideoTexture===!0&&at.getTransfer(S.emissiveMap.colorSpace)===Tt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===en,flipSided:S.side===gn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Je&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&S.extensions.multiDraw===!0||Xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return on.vertexUv1s=l.has(1),on.vertexUv2s=l.has(2),on.vertexUv3s=l.has(3),l.clear(),on}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)M.push(R),M.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(_(M,S),y(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function _(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){const M=g[S.type];let R;if(M){const F=mi[M];R=rm.clone(F.uniforms)}else R=S.uniforms;return R}function P(S,M){let R;for(let F=0,k=u.length;F<k;F++){const B=u[F];if(B.cacheKey===M){R=B,++R.usedTimes;break}}return R===void 0&&(R=new fM(i,M,S,r),u.push(R)),R}function E(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function A(S){c.remove(S)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:P,releaseProgram:E,releaseShaderCache:A,programs:u,dispose:C}}function _M(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function xM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Lf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Df(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,f,g,v,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),e++,p}function o(h,d,f,g,v,m){const p=a(h,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(h,d,f,g,v,m){const p=a(h,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||xM),n.length>1&&n.sort(d||Lf),s.length>1&&s.sort(d||Lf)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function yM(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Df,i.set(n,[a])):s>=r.length?(a=new Df,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function MM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new pe};break;case"SpotLight":t={position:new I,direction:new I,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":t={color:new pe,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function SM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let bM=0;function wM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function EM(i){const e=new MM,t=SM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const s=new I,r=new qe,a=new qe;function o(l){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,_=0,y=0,x=0,P=0,E=0,A=0;l.sort(wM);for(let S=0,M=l.length;S<M;S++){const R=l[S],F=R.color,k=R.intensity,B=R.distance,Y=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=F.r*k,h+=F.g*k,d+=F.b*k;else if(R.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(R.sh.coefficients[G],k);A++}else if(R.isDirectionalLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Z=R.shadow,W=t.get(R);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=R.shadow.matrix,_++}n.directional[f]=G,f++}else if(R.isSpotLight){const G=e.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(F).multiplyScalar(k),G.distance=B,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,n.spot[v]=G;const Z=R.shadow;if(R.map&&(n.spotLightMap[P]=R.map,P++,Z.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[v]=Z.matrix,R.castShadow){const W=t.get(R);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=Y,x++}v++}else if(R.isRectAreaLight){const G=e.get(R);G.color.copy(F).multiplyScalar(k),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=G,m++}else if(R.isPointLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){const Z=R.shadow,W=t.get(R);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,W.shadowCameraNear=Z.camera.near,W.shadowCameraFar=Z.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=R.shadow.matrix,y++}n.point[g]=G,g++}else if(R.isHemisphereLight){const G=e.get(R);G.skyColor.copy(R.color).multiplyScalar(k),G.groundColor.copy(R.groundColor).multiplyScalar(k),n.hemi[p]=G,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==v||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==_||C.numPointShadows!==y||C.numSpotShadows!==x||C.numSpotMaps!==P||C.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+P-E,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,C.directionalLength=f,C.pointLength=g,C.spotLength=v,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=_,C.numPointShadows=y,C.numSpotShadows=x,C.numSpotMaps=P,C.numLightProbes=A,n.version=bM++)}function c(l,u){let h=0,d=0,f=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,_=l.length;p<_;p++){const y=l[p];if(y.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:n}}function Nf(i){const e=new EM(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function TM(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Nf(i),e.set(s,[o])):r>=a.length?(o=new Nf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class AM extends oi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=c0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class RM extends oi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const CM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PM=`uniform sampler2D shadow_pass;
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
}`;function IM(i,e,t){let n=new Bh;const s=new ne,r=new ne,a=new mt,o=new AM({depthPacking:l0}),c=new RM,l={},u=t.maxTextureSize,h={[Zi]:gn,[gn]:Zi,[en]:en},d=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:CM,fragmentShader:PM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ht;g.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Te(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Up;let p=this.type;this.render=function(E,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Ms),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const k=p!==Fi&&this.type===Fi,B=p===Fi&&this.type!==Fi;for(let Y=0,G=E.length;Y<G;Y++){const Z=E[Y],W=Z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const de=W.getFrameExtents();if(s.multiply(de),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/de.x),s.x=r.x*de.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/de.y),s.y=r.y*de.y,W.mapSize.y=r.y)),W.map===null||k===!0||B===!0){const Ce=this.type!==Fi?{minFilter:vn,magFilter:vn}:{};W.map!==null&&W.map.dispose(),W.map=new Es(s.x,s.y,Ce),W.map.texture.name=Z.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const Me=W.getViewportCount();for(let Ce=0;Ce<Me;Ce++){const $e=W.getViewport(Ce);a.set(r.x*$e.x,r.y*$e.y,r.x*$e.z,r.y*$e.w),F.viewport(a),W.updateMatrices(Z,Ce),n=W.getFrustum(),x(A,C,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===Fi&&_(W,C),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,R)};function _(E,A){const C=e.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Es(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,C,d,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,C,f,v,null)}function y(E,A,C,S){let M=null;const R=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)M=R;else if(M=C.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const F=M.uuid,k=A.uuid;let B=l[F];B===void 0&&(B={},l[F]=B);let Y=B[k];Y===void 0&&(Y=M.clone(),B[k]=Y,A.addEventListener("dispose",P)),M=Y}if(M.visible=A.visible,M.wireframe=A.wireframe,S===Fi?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:h[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=i.properties.get(M);F.light=C}return M}function x(E,A,C,S,M){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===Fi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const k=e.update(E),B=E.material;if(Array.isArray(B)){const Y=k.groups;for(let G=0,Z=Y.length;G<Z;G++){const W=Y[G],de=B[W.materialIndex];if(de&&de.visible){const Me=y(E,de,S,M);E.onBeforeShadow(i,E,A,C,k,Me,W),i.renderBufferDirect(C,null,k,Me,E,W),E.onAfterShadow(i,E,A,C,k,Me,W)}}}else if(B.visible){const Y=y(E,B,S,M);E.onBeforeShadow(i,E,A,C,k,Y,null),i.renderBufferDirect(C,null,k,Y,E,null),E.onAfterShadow(i,E,A,C,k,Y,null)}}const F=E.children;for(let k=0,B=F.length;k<B;k++)x(F[k],A,C,S,M)}function P(E){E.target.removeEventListener("dispose",P);for(const C in l){const S=l[C],M=E.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const LM={[fu]:pu,[mu]:_u,[gu]:xu,[$r]:vu,[pu]:fu,[_u]:mu,[xu]:gu,[vu]:$r};function DM(i,e){function t(){let D=!1;const ge=new mt;let X=null;const $=new mt(0,0,0,0);return{setMask:function(ye){X!==ye&&!D&&(i.colorMask(ye,ye,ye,ye),X=ye)},setLocked:function(ye){D=ye},setClear:function(ye,_e,Je,Ot,on){on===!0&&(ye*=Ot,_e*=Ot,Je*=Ot),ge.set(ye,_e,Je,Ot),$.equals(ge)===!1&&(i.clearColor(ye,_e,Je,Ot),$.copy(ge))},reset:function(){D=!1,X=null,$.set(-1,0,0,0)}}}function n(){let D=!1,ge=!1,X=null,$=null,ye=null;return{setReversed:function(_e){if(ge!==_e){const Je=e.get("EXT_clip_control");ge?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT);const Ot=ye;ye=null,this.setClear(Ot)}ge=_e},getReversed:function(){return ge},setTest:function(_e){_e?le(i.DEPTH_TEST):Be(i.DEPTH_TEST)},setMask:function(_e){X!==_e&&!D&&(i.depthMask(_e),X=_e)},setFunc:function(_e){if(ge&&(_e=LM[_e]),$!==_e){switch(_e){case fu:i.depthFunc(i.NEVER);break;case pu:i.depthFunc(i.ALWAYS);break;case mu:i.depthFunc(i.LESS);break;case $r:i.depthFunc(i.LEQUAL);break;case gu:i.depthFunc(i.EQUAL);break;case vu:i.depthFunc(i.GEQUAL);break;case _u:i.depthFunc(i.GREATER);break;case xu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=_e}},setLocked:function(_e){D=_e},setClear:function(_e){ye!==_e&&(ge&&(_e=1-_e),i.clearDepth(_e),ye=_e)},reset:function(){D=!1,X=null,$=null,ye=null,ge=!1}}}function s(){let D=!1,ge=null,X=null,$=null,ye=null,_e=null,Je=null,Ot=null,on=null;return{setTest:function(Mt){D||(Mt?le(i.STENCIL_TEST):Be(i.STENCIL_TEST))},setMask:function(Mt){ge!==Mt&&!D&&(i.stencilMask(Mt),ge=Mt)},setFunc:function(Mt,Jn,Ti){(X!==Mt||$!==Jn||ye!==Ti)&&(i.stencilFunc(Mt,Jn,Ti),X=Mt,$=Jn,ye=Ti)},setOp:function(Mt,Jn,Ti){(_e!==Mt||Je!==Jn||Ot!==Ti)&&(i.stencilOp(Mt,Jn,Ti),_e=Mt,Je=Jn,Ot=Ti)},setLocked:function(Mt){D=Mt},setClear:function(Mt){on!==Mt&&(i.clearStencil(Mt),on=Mt)},reset:function(){D=!1,ge=null,X=null,$=null,ye=null,_e=null,Je=null,Ot=null,on=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,_=null,y=null,x=null,P=null,E=null,A=new pe(0,0,0),C=0,S=!1,M=null,R=null,F=null,k=null,B=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Z=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=Z>=1):W.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=Z>=2);let de=null,Me={};const Ce=i.getParameter(i.SCISSOR_BOX),$e=i.getParameter(i.VIEWPORT),gt=new mt().fromArray(Ce),K=new mt().fromArray($e);function ae(D,ge,X,$){const ye=new Uint8Array(4),_e=i.createTexture();i.bindTexture(D,_e),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Je=0;Je<X;Je++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ge,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(ge+Je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return _e}const Pe={};Pe[i.TEXTURE_2D]=ae(i.TEXTURE_2D,i.TEXTURE_2D,1),Pe[i.TEXTURE_CUBE_MAP]=ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pe[i.TEXTURE_2D_ARRAY]=ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Pe[i.TEXTURE_3D]=ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(i.DEPTH_TEST),a.setFunc($r),te(!1),Ee(kd),le(i.CULL_FACE),L(Ms);function le(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function Be(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function Ye(D,ge){return h[D]!==ge?(i.bindFramebuffer(D,ge),h[D]=ge,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ge),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ge),!0):!1}function Xe(D,ge){let X=f,$=!1;if(D){X=d.get(ge),X===void 0&&(X=[],d.set(ge,X));const ye=D.textures;if(X.length!==ye.length||X[0]!==i.COLOR_ATTACHMENT0){for(let _e=0,Je=ye.length;_e<Je;_e++)X[_e]=i.COLOR_ATTACHMENT0+_e;X.length=ye.length,$=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,$=!0);$&&i.drawBuffers(X)}function ct(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const J={[Gs]:i.FUNC_ADD,[Ig]:i.FUNC_SUBTRACT,[Lg]:i.FUNC_REVERSE_SUBTRACT};J[Dg]=i.MIN,J[Ng]=i.MAX;const re={[Ug]:i.ZERO,[kg]:i.ONE,[Fg]:i.SRC_COLOR,[hu]:i.SRC_ALPHA,[Gg]:i.SRC_ALPHA_SATURATE,[Hg]:i.DST_COLOR,[Bg]:i.DST_ALPHA,[Og]:i.ONE_MINUS_SRC_COLOR,[du]:i.ONE_MINUS_SRC_ALPHA,[Vg]:i.ONE_MINUS_DST_COLOR,[zg]:i.ONE_MINUS_DST_ALPHA,[Wg]:i.CONSTANT_COLOR,[Xg]:i.ONE_MINUS_CONSTANT_COLOR,[jg]:i.CONSTANT_ALPHA,[qg]:i.ONE_MINUS_CONSTANT_ALPHA};function L(D,ge,X,$,ye,_e,Je,Ot,on,Mt){if(D===Ms){v===!0&&(Be(i.BLEND),v=!1);return}if(v===!1&&(le(i.BLEND),v=!0),D!==Pg){if(D!==m||Mt!==S){if((p!==Gs||x!==Gs)&&(i.blendEquation(i.FUNC_ADD),p=Gs,x=Gs),Mt)switch(D){case Vr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fd:i.blendFunc(i.ONE,i.ONE);break;case Od:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Vr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fd:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Od:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}_=null,y=null,P=null,E=null,A.set(0,0,0),C=0,m=D,S=Mt}return}ye=ye||ge,_e=_e||X,Je=Je||$,(ge!==p||ye!==x)&&(i.blendEquationSeparate(J[ge],J[ye]),p=ge,x=ye),(X!==_||$!==y||_e!==P||Je!==E)&&(i.blendFuncSeparate(re[X],re[$],re[_e],re[Je]),_=X,y=$,P=_e,E=Je),(Ot.equals(A)===!1||on!==C)&&(i.blendColor(Ot.r,Ot.g,Ot.b,on),A.copy(Ot),C=on),m=D,S=!1}function ke(D,ge){D.side===en?Be(i.CULL_FACE):le(i.CULL_FACE);let X=D.side===gn;ge&&(X=!X),te(X),D.blending===Vr&&D.transparent===!1?L(Ms):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const $=D.stencilWrite;o.setTest($),$&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ge(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):Be(i.SAMPLE_ALPHA_TO_COVERAGE)}function te(D){M!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),M=D)}function Ee(D){D!==Rg?(le(i.CULL_FACE),D!==R&&(D===kd?i.cullFace(i.BACK):D===Cg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Be(i.CULL_FACE),R=D}function he(D){D!==F&&(G&&i.lineWidth(D),F=D)}function Ge(D,ge,X){D?(le(i.POLYGON_OFFSET_FILL),(k!==ge||B!==X)&&(i.polygonOffset(ge,X),k=ge,B=X)):Be(i.POLYGON_OFFSET_FILL)}function be(D){D?le(i.SCISSOR_TEST):Be(i.SCISSOR_TEST)}function T(D){D===void 0&&(D=i.TEXTURE0+Y-1),de!==D&&(i.activeTexture(D),de=D)}function b(D,ge,X){X===void 0&&(de===null?X=i.TEXTURE0+Y-1:X=de);let $=Me[X];$===void 0&&($={type:void 0,texture:void 0},Me[X]=$),($.type!==D||$.texture!==ge)&&(de!==X&&(i.activeTexture(X),de=X),i.bindTexture(D,ge||Pe[D]),$.type=D,$.texture=ge)}function O(){const D=Me[de];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function We(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function je(D){gt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),gt.copy(D))}function Re(D){K.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),K.copy(D))}function ot(D,ge){let X=l.get(ge);X===void 0&&(X=new WeakMap,l.set(ge,X));let $=X.get(D);$===void 0&&($=i.getUniformBlockIndex(ge,D.name),X.set(D,$))}function et(D,ge){const $=l.get(ge).get(D);c.get(ge)!==$&&(i.uniformBlockBinding(ge,$,D.__bindingPointIndex),c.set(ge,$))}function Ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},de=null,Me={},h={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,_=null,y=null,x=null,P=null,E=null,A=new pe(0,0,0),C=0,S=!1,M=null,R=null,F=null,k=null,B=null,gt.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:le,disable:Be,bindFramebuffer:Ye,drawBuffers:Xe,useProgram:ct,setBlending:L,setMaterial:ke,setFlipSided:te,setCullFace:Ee,setLineWidth:he,setPolygonOffset:Ge,setScissorTest:be,activeTexture:T,bindTexture:b,unbindTexture:O,compressedTexImage2D:j,compressedTexImage3D:Q,texImage2D:Ae,texImage3D:We,updateUBOMapping:ot,uniformBlockBinding:et,texStorage2D:rt,texStorage3D:ie,texSubImage2D:q,texSubImage3D:Ie,compressedTexSubImage2D:me,compressedTexSubImage3D:we,scissor:je,viewport:Re,reset:Ct}}function Uf(i,e,t,n){const s=NM(n);switch(t){case Gp:return i*e;case Xp:return i*e;case jp:return i*e*2;case Lh:return i*e/s.components*s.byteLength;case Dh:return i*e/s.components*s.byteLength;case qp:return i*e*2/s.components*s.byteLength;case Nh:return i*e*2/s.components*s.byteLength;case Wp:return i*e*3/s.components*s.byteLength;case jn:return i*e*4/s.components*s.byteLength;case Uh:return i*e*4/s.components*s.byteLength;case fc:case pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case mc:case gc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bu:case Eu:return Math.max(i,16)*Math.max(e,8)/4;case Su:case wu:return Math.max(i,8)*Math.max(e,8)/2;case Tu:case Au:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ru:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Iu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Lu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Du:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Nu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Uu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ku:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Fu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ou:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Bu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case zu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Hu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Vu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case vc:case Gu:case Wu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Yp:case Xu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ju:case qu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function NM(i){switch(i){case Qi:case zp:return{byteLength:1,components:1};case ao:case Hp:case fa:return{byteLength:2,components:1};case Ph:case Ih:return{byteLength:2,components:4};case nr:case Ch:case ri:return{byteLength:4,components:1};case Vp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function UM(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ne,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,b){return f?new OffscreenCanvas(T,b):lo("canvas")}function v(T,b,O){let j=1;const Q=be(T);if((Q.width>O||Q.height>O)&&(j=O/Math.max(Q.width,Q.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const q=Math.floor(j*Q.width),Ie=Math.floor(j*Q.height);h===void 0&&(h=g(q,Ie));const me=b?g(q,Ie):h;return me.width=q,me.height=Ie,me.getContext("2d").drawImage(T,0,0,q,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+Ie+")."),me}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function _(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(T,b,O,j,Q=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=b;if(b===i.RED&&(O===i.FLOAT&&(q=i.R32F),O===i.HALF_FLOAT&&(q=i.R16F),O===i.UNSIGNED_BYTE&&(q=i.R8)),b===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.R8UI),O===i.UNSIGNED_SHORT&&(q=i.R16UI),O===i.UNSIGNED_INT&&(q=i.R32UI),O===i.BYTE&&(q=i.R8I),O===i.SHORT&&(q=i.R16I),O===i.INT&&(q=i.R32I)),b===i.RG&&(O===i.FLOAT&&(q=i.RG32F),O===i.HALF_FLOAT&&(q=i.RG16F),O===i.UNSIGNED_BYTE&&(q=i.RG8)),b===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RG8UI),O===i.UNSIGNED_SHORT&&(q=i.RG16UI),O===i.UNSIGNED_INT&&(q=i.RG32UI),O===i.BYTE&&(q=i.RG8I),O===i.SHORT&&(q=i.RG16I),O===i.INT&&(q=i.RG32I)),b===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGB8UI),O===i.UNSIGNED_SHORT&&(q=i.RGB16UI),O===i.UNSIGNED_INT&&(q=i.RGB32UI),O===i.BYTE&&(q=i.RGB8I),O===i.SHORT&&(q=i.RGB16I),O===i.INT&&(q=i.RGB32I)),b===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),O===i.UNSIGNED_INT&&(q=i.RGBA32UI),O===i.BYTE&&(q=i.RGBA8I),O===i.SHORT&&(q=i.RGBA16I),O===i.INT&&(q=i.RGBA32I)),b===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),b===i.RGBA){const Ie=Q?Xc:at.getTransfer(j);O===i.FLOAT&&(q=i.RGBA32F),O===i.HALF_FLOAT&&(q=i.RGBA16F),O===i.UNSIGNED_BYTE&&(q=Ie===Tt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(T,b){let O;return T?b===null||b===nr||b===Qr?O=i.DEPTH24_STENCIL8:b===ri?O=i.DEPTH32F_STENCIL8:b===ao&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===nr||b===Qr?O=i.DEPTH_COMPONENT24:b===ri?O=i.DEPTH_COMPONENT32F:b===ao&&(O=i.DEPTH_COMPONENT16),O}function P(T,b){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==vn&&T.minFilter!==mn?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function E(T){const b=T.target;b.removeEventListener("dispose",E),C(b),b.isVideoTexture&&u.delete(b)}function A(T){const b=T.target;b.removeEventListener("dispose",A),M(b)}function C(T){const b=n.get(T);if(b.__webglInit===void 0)return;const O=T.source,j=d.get(O);if(j){const Q=j[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(T),Object.keys(j).length===0&&d.delete(O)}n.remove(T)}function S(T){const b=n.get(T);i.deleteTexture(b.__webglTexture);const O=T.source,j=d.get(O);delete j[b.__cacheKey],a.memory.textures--}function M(T){const b=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(b.__webglFramebuffer[j]))for(let Q=0;Q<b.__webglFramebuffer[j].length;Q++)i.deleteFramebuffer(b.__webglFramebuffer[j][Q]);else i.deleteFramebuffer(b.__webglFramebuffer[j]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[j])}else{if(Array.isArray(b.__webglFramebuffer))for(let j=0;j<b.__webglFramebuffer.length;j++)i.deleteFramebuffer(b.__webglFramebuffer[j]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let j=0;j<b.__webglColorRenderbuffer.length;j++)b.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[j]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const O=T.textures;for(let j=0,Q=O.length;j<Q;j++){const q=n.get(O[j]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(O[j])}n.remove(T)}let R=0;function F(){R=0}function k(){const T=R;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),R+=1,T}function B(T){const b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.colorSpace),b.join()}function Y(T,b){const O=n.get(T);if(T.isVideoTexture&&he(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){const j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(O,T,b);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+b)}function G(T,b){const O=n.get(T);if(T.version>0&&O.__version!==T.version){K(O,T,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+b)}function Z(T,b){const O=n.get(T);if(T.version>0&&O.__version!==T.version){K(O,T,b);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+b)}function W(T,b){const O=n.get(T);if(T.version>0&&O.__version!==T.version){ae(O,T,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+b)}const de={[tr]:i.REPEAT,[gs]:i.CLAMP_TO_EDGE,[Ac]:i.MIRRORED_REPEAT},Me={[vn]:i.NEAREST,[Bp]:i.NEAREST_MIPMAP_NEAREST,[Ha]:i.NEAREST_MIPMAP_LINEAR,[mn]:i.LINEAR,[dc]:i.LINEAR_MIPMAP_NEAREST,[Vi]:i.LINEAR_MIPMAP_LINEAR},Ce={[h0]:i.NEVER,[v0]:i.ALWAYS,[d0]:i.LESS,[$p]:i.LEQUAL,[f0]:i.EQUAL,[g0]:i.GEQUAL,[p0]:i.GREATER,[m0]:i.NOTEQUAL};function $e(T,b){if(b.type===ri&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===mn||b.magFilter===dc||b.magFilter===Ha||b.magFilter===Vi||b.minFilter===mn||b.minFilter===dc||b.minFilter===Ha||b.minFilter===Vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,de[b.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,de[b.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,de[b.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Me[b.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Me[b.minFilter]),b.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Ce[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===vn||b.minFilter!==Ha&&b.minFilter!==Vi||b.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function gt(T,b){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",E));const j=b.source;let Q=d.get(j);Q===void 0&&(Q={},d.set(j,Q));const q=B(b);if(q!==T.__cacheKey){Q[q]===void 0&&(Q[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Q[q].usedTimes++;const Ie=Q[T.__cacheKey];Ie!==void 0&&(Q[T.__cacheKey].usedTimes--,Ie.usedTimes===0&&S(b)),T.__cacheKey=q,T.__webglTexture=Q[q].texture}return O}function K(T,b,O){let j=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(j=i.TEXTURE_3D);const Q=gt(T,b),q=b.source;t.bindTexture(j,T.__webglTexture,i.TEXTURE0+O);const Ie=n.get(q);if(q.version!==Ie.__version||Q===!0){t.activeTexture(i.TEXTURE0+O);const me=at.getPrimaries(at.workingColorSpace),we=b.colorSpace===ps?null:at.getPrimaries(b.colorSpace),rt=b.colorSpace===ps||me===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let ie=v(b.image,!1,s.maxTextureSize);ie=Ge(b,ie);const Ae=r.convert(b.format,b.colorSpace),We=r.convert(b.type);let je=y(b.internalFormat,Ae,We,b.colorSpace,b.isVideoTexture);$e(j,b);let Re;const ot=b.mipmaps,et=b.isVideoTexture!==!0,Ct=Ie.__version===void 0||Q===!0,D=q.dataReady,ge=P(b,ie);if(b.isDepthTexture)je=x(b.format===ea,b.type),Ct&&(et?t.texStorage2D(i.TEXTURE_2D,1,je,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,je,ie.width,ie.height,0,Ae,We,null));else if(b.isDataTexture)if(ot.length>0){et&&Ct&&t.texStorage2D(i.TEXTURE_2D,ge,je,ot[0].width,ot[0].height);for(let X=0,$=ot.length;X<$;X++)Re=ot[X],et?D&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,Re.width,Re.height,Ae,We,Re.data):t.texImage2D(i.TEXTURE_2D,X,je,Re.width,Re.height,0,Ae,We,Re.data);b.generateMipmaps=!1}else et?(Ct&&t.texStorage2D(i.TEXTURE_2D,ge,je,ie.width,ie.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie.width,ie.height,Ae,We,ie.data)):t.texImage2D(i.TEXTURE_2D,0,je,ie.width,ie.height,0,Ae,We,ie.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){et&&Ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,je,ot[0].width,ot[0].height,ie.depth);for(let X=0,$=ot.length;X<$;X++)if(Re=ot[X],b.format!==jn)if(Ae!==null)if(et){if(D)if(b.layerUpdates.size>0){const ye=Uf(Re.width,Re.height,b.format,b.type);for(const _e of b.layerUpdates){const Je=Re.data.subarray(_e*ye/Re.data.BYTES_PER_ELEMENT,(_e+1)*ye/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,_e,Re.width,Re.height,1,Ae,Je)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Re.width,Re.height,ie.depth,Ae,Re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,je,Re.width,Re.height,ie.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Re.width,Re.height,ie.depth,Ae,We,Re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,X,je,Re.width,Re.height,ie.depth,0,Ae,We,Re.data)}else{et&&Ct&&t.texStorage2D(i.TEXTURE_2D,ge,je,ot[0].width,ot[0].height);for(let X=0,$=ot.length;X<$;X++)Re=ot[X],b.format!==jn?Ae!==null?et?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,Re.width,Re.height,Ae,Re.data):t.compressedTexImage2D(i.TEXTURE_2D,X,je,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?D&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,Re.width,Re.height,Ae,We,Re.data):t.texImage2D(i.TEXTURE_2D,X,je,Re.width,Re.height,0,Ae,We,Re.data)}else if(b.isDataArrayTexture)if(et){if(Ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,je,ie.width,ie.height,ie.depth),D)if(b.layerUpdates.size>0){const X=Uf(ie.width,ie.height,b.format,b.type);for(const $ of b.layerUpdates){const ye=ie.data.subarray($*X/ie.data.BYTES_PER_ELEMENT,($+1)*X/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,ie.width,ie.height,1,Ae,We,ye)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Ae,We,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,je,ie.width,ie.height,ie.depth,0,Ae,We,ie.data);else if(b.isData3DTexture)et?(Ct&&t.texStorage3D(i.TEXTURE_3D,ge,je,ie.width,ie.height,ie.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Ae,We,ie.data)):t.texImage3D(i.TEXTURE_3D,0,je,ie.width,ie.height,ie.depth,0,Ae,We,ie.data);else if(b.isFramebufferTexture){if(Ct)if(et)t.texStorage2D(i.TEXTURE_2D,ge,je,ie.width,ie.height);else{let X=ie.width,$=ie.height;for(let ye=0;ye<ge;ye++)t.texImage2D(i.TEXTURE_2D,ye,je,X,$,0,Ae,We,null),X>>=1,$>>=1}}else if(ot.length>0){if(et&&Ct){const X=be(ot[0]);t.texStorage2D(i.TEXTURE_2D,ge,je,X.width,X.height)}for(let X=0,$=ot.length;X<$;X++)Re=ot[X],et?D&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,Ae,We,Re):t.texImage2D(i.TEXTURE_2D,X,je,Ae,We,Re);b.generateMipmaps=!1}else if(et){if(Ct){const X=be(ie);t.texStorage2D(i.TEXTURE_2D,ge,je,X.width,X.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae,We,ie)}else t.texImage2D(i.TEXTURE_2D,0,je,Ae,We,ie);m(b)&&p(j),Ie.__version=q.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function ae(T,b,O){if(b.image.length!==6)return;const j=gt(T,b),Q=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);const q=n.get(Q);if(Q.version!==q.__version||j===!0){t.activeTexture(i.TEXTURE0+O);const Ie=at.getPrimaries(at.workingColorSpace),me=b.colorSpace===ps?null:at.getPrimaries(b.colorSpace),we=b.colorSpace===ps||Ie===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const rt=b.isCompressedTexture||b.image[0].isCompressedTexture,ie=b.image[0]&&b.image[0].isDataTexture,Ae=[];for(let $=0;$<6;$++)!rt&&!ie?Ae[$]=v(b.image[$],!0,s.maxCubemapSize):Ae[$]=ie?b.image[$].image:b.image[$],Ae[$]=Ge(b,Ae[$]);const We=Ae[0],je=r.convert(b.format,b.colorSpace),Re=r.convert(b.type),ot=y(b.internalFormat,je,Re,b.colorSpace),et=b.isVideoTexture!==!0,Ct=q.__version===void 0||j===!0,D=Q.dataReady;let ge=P(b,We);$e(i.TEXTURE_CUBE_MAP,b);let X;if(rt){et&&Ct&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,ot,We.width,We.height);for(let $=0;$<6;$++){X=Ae[$].mipmaps;for(let ye=0;ye<X.length;ye++){const _e=X[ye];b.format!==jn?je!==null?et?D&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,0,0,_e.width,_e.height,je,_e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,ot,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,0,0,_e.width,_e.height,je,Re,_e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,ot,_e.width,_e.height,0,je,Re,_e.data)}}}else{if(X=b.mipmaps,et&&Ct){X.length>0&&ge++;const $=be(Ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,ot,$.width,$.height)}for(let $=0;$<6;$++)if(ie){et?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ae[$].width,Ae[$].height,je,Re,Ae[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ot,Ae[$].width,Ae[$].height,0,je,Re,Ae[$].data);for(let ye=0;ye<X.length;ye++){const Je=X[ye].image[$].image;et?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,0,0,Je.width,Je.height,je,Re,Je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,ot,Je.width,Je.height,0,je,Re,Je.data)}}else{et?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,je,Re,Ae[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ot,je,Re,Ae[$]);for(let ye=0;ye<X.length;ye++){const _e=X[ye];et?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,0,0,je,Re,_e.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,ot,je,Re,_e.image[$])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),q.__version=Q.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function Pe(T,b,O,j,Q,q){const Ie=r.convert(O.format,O.colorSpace),me=r.convert(O.type),we=y(O.internalFormat,Ie,me,O.colorSpace),rt=n.get(b),ie=n.get(O);if(ie.__renderTarget=b,!rt.__hasExternalTextures){const Ae=Math.max(1,b.width>>q),We=Math.max(1,b.height>>q);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,q,we,Ae,We,b.depth,0,Ie,me,null):t.texImage2D(Q,q,we,Ae,We,0,Ie,me,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Ee(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,Q,ie.__webglTexture,0,te(b)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,Q,ie.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(T,b,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),b.depthBuffer){const j=b.depthTexture,Q=j&&j.isDepthTexture?j.type:null,q=x(b.stencilBuffer,Q),Ie=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=te(b);Ee(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me,q,b.width,b.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,me,q,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,q,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ie,i.RENDERBUFFER,T)}else{const j=b.textures;for(let Q=0;Q<j.length;Q++){const q=j[Q],Ie=r.convert(q.format,q.colorSpace),me=r.convert(q.type),we=y(q.internalFormat,Ie,me,q.colorSpace),rt=te(b);O&&Ee(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,we,b.width,b.height):Ee(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,we,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,we,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Be(T,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(b.depthTexture);j.__renderTarget=b,(!j.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Y(b.depthTexture,0);const Q=j.__webglTexture,q=te(b);if(b.depthTexture.format===Gr)Ee(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(b.depthTexture.format===ea)Ee(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ye(T){const b=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==T.depthTexture){const j=T.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),j){const Q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,j.removeEventListener("dispose",Q)};j.addEventListener("dispose",Q),b.__depthDisposeCallback=Q}b.__boundDepthTexture=j}if(T.depthTexture&&!b.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Be(b.__webglFramebuffer,T)}else if(O){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]===void 0)b.__webglDepthbuffer[j]=i.createRenderbuffer(),le(b.__webglDepthbuffer[j],T,!1);else{const Q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=b.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,q)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),le(b.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Q)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(T,b,O){const j=n.get(T);b!==void 0&&Pe(j.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ye(T)}function ct(T){const b=T.texture,O=n.get(T),j=n.get(b);T.addEventListener("dispose",A);const Q=T.textures,q=T.isWebGLCubeRenderTarget===!0,Ie=Q.length>1;if(Ie||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=b.version,a.memory.textures++),q){O.__webglFramebuffer=[];for(let me=0;me<6;me++)if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer[me]=[];for(let we=0;we<b.mipmaps.length;we++)O.__webglFramebuffer[me][we]=i.createFramebuffer()}else O.__webglFramebuffer[me]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer=[];for(let me=0;me<b.mipmaps.length;me++)O.__webglFramebuffer[me]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Ie)for(let me=0,we=Q.length;me<we;me++){const rt=n.get(Q[me]);rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Ee(T)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let me=0;me<Q.length;me++){const we=Q[me];O.__webglColorRenderbuffer[me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[me]);const rt=r.convert(we.format,we.colorSpace),ie=r.convert(we.type),Ae=y(we.internalFormat,rt,ie,we.colorSpace,T.isXRRenderTarget===!0),We=te(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,We,Ae,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,O.__webglColorRenderbuffer[me])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),le(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),$e(i.TEXTURE_CUBE_MAP,b);for(let me=0;me<6;me++)if(b.mipmaps&&b.mipmaps.length>0)for(let we=0;we<b.mipmaps.length;we++)Pe(O.__webglFramebuffer[me][we],T,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,we);else Pe(O.__webglFramebuffer[me],T,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(b)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let me=0,we=Q.length;me<we;me++){const rt=Q[me],ie=n.get(rt);t.bindTexture(i.TEXTURE_2D,ie.__webglTexture),$e(i.TEXTURE_2D,rt),Pe(O.__webglFramebuffer,T,rt,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,0),m(rt)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let me=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(me=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,j.__webglTexture),$e(me,b),b.mipmaps&&b.mipmaps.length>0)for(let we=0;we<b.mipmaps.length;we++)Pe(O.__webglFramebuffer[we],T,b,i.COLOR_ATTACHMENT0,me,we);else Pe(O.__webglFramebuffer,T,b,i.COLOR_ATTACHMENT0,me,0);m(b)&&p(me),t.unbindTexture()}T.depthBuffer&&Ye(T)}function J(T){const b=T.textures;for(let O=0,j=b.length;O<j;O++){const Q=b[O];if(m(Q)){const q=_(T),Ie=n.get(Q).__webglTexture;t.bindTexture(q,Ie),p(q),t.unbindTexture()}}}const re=[],L=[];function ke(T){if(T.samples>0){if(Ee(T)===!1){const b=T.textures,O=T.width,j=T.height;let Q=i.COLOR_BUFFER_BIT;const q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=n.get(T),me=b.length>1;if(me)for(let we=0;we<b.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let we=0;we<b.length;we++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[we]);const rt=n.get(b[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,rt,0)}i.blitFramebuffer(0,0,O,j,0,0,O,j,Q,i.NEAREST),c===!0&&(re.length=0,L.length=0,re.push(i.COLOR_ATTACHMENT0+we),T.depthBuffer&&T.resolveDepthBuffer===!1&&(re.push(q),L.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),me)for(let we=0;we<b.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[we]);const rt=n.get(b[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,rt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const b=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function te(T){return Math.min(s.maxSamples,T.samples)}function Ee(T){const b=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function he(T){const b=a.render.frame;u.get(T)!==b&&(u.set(T,b),T.update())}function Ge(T,b){const O=T.colorSpace,j=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==yn&&O!==ps&&(at.getTransfer(O)===Tt?(j!==jn||Q!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),b}function be(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=Y,this.setTexture2DArray=G,this.setTexture3D=Z,this.setTextureCube=W,this.rebindTextures=Xe,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=Ee}function kM(i,e){function t(n,s=ps){let r;const a=at.getTransfer(s);if(n===Qi)return i.UNSIGNED_BYTE;if(n===Ph)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ih)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zp)return i.BYTE;if(n===Hp)return i.SHORT;if(n===ao)return i.UNSIGNED_SHORT;if(n===Ch)return i.INT;if(n===nr)return i.UNSIGNED_INT;if(n===ri)return i.FLOAT;if(n===fa)return i.HALF_FLOAT;if(n===Gp)return i.ALPHA;if(n===Wp)return i.RGB;if(n===jn)return i.RGBA;if(n===Xp)return i.LUMINANCE;if(n===jp)return i.LUMINANCE_ALPHA;if(n===Gr)return i.DEPTH_COMPONENT;if(n===ea)return i.DEPTH_STENCIL;if(n===Lh)return i.RED;if(n===Dh)return i.RED_INTEGER;if(n===qp)return i.RG;if(n===Nh)return i.RG_INTEGER;if(n===Uh)return i.RGBA_INTEGER;if(n===fc||n===pc||n===mc||n===gc)if(a===Tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===gc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===gc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Su||n===bu||n===wu||n===Eu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Su)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Eu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Tu||n===Au||n===Ru)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Tu||n===Au)return a===Tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ru)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Cu||n===Pu||n===Iu||n===Lu||n===Du||n===Nu||n===Uu||n===ku||n===Fu||n===Ou||n===Bu||n===zu||n===Hu||n===Vu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Cu)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pu)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Iu)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lu)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Du)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nu)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uu)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ku)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fu)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ou)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bu)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zu)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hu)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vu)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vc||n===Gu||n===Wu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===vc)return a===Tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Gu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yp||n===Xu||n===ju||n===qu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===vc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ju)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class FM extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class tn extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const OM={type:"move"};class Bl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(OM)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new tn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const BM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zM=`
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

}`;class HM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new $t,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new kn({vertexShader:BM,fragmentShader:zM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Te(new yi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VM extends or{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const v=new HM,m=t.getContextAttributes();let p=null,_=null;const y=[],x=[],P=new ne;let E=null;const A=new pn;A.viewport=new mt;const C=new pn;C.viewport=new mt;const S=[A,C],M=new FM;let R=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ae=y[K];return ae===void 0&&(ae=new Bl,y[K]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(K){let ae=y[K];return ae===void 0&&(ae=new Bl,y[K]=ae),ae.getGripSpace()},this.getHand=function(K){let ae=y[K];return ae===void 0&&(ae=new Bl,y[K]=ae),ae.getHandSpace()};function k(K){const ae=x.indexOf(K.inputSource);if(ae===-1)return;const Pe=y[ae];Pe!==void 0&&(Pe.update(K.inputSource,K.frame,l||a),Pe.dispatchEvent({type:K.type,data:K.inputSource}))}function B(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",Y);for(let K=0;K<y.length;K++){const ae=x[K];ae!==null&&(x[K]=null,y[K].disconnect(ae))}R=null,F=null,v.reset(),e.setRenderTarget(p),f=null,d=null,h=null,s=null,_=null,gt.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",B),s.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0){const ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Es(f.framebufferWidth,f.framebufferHeight,{format:jn,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ae=null,Pe=null,le=null;m.depth&&(le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?ea:Gr,Pe=m.stencil?Qr:nr);const Be={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(Be),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Es(d.textureWidth,d.textureHeight,{format:jn,type:Qi,depthTexture:new Hh(d.textureWidth,d.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),gt.setContext(s),gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Y(K){for(let ae=0;ae<K.removed.length;ae++){const Pe=K.removed[ae],le=x.indexOf(Pe);le>=0&&(x[le]=null,y[le].disconnect(Pe))}for(let ae=0;ae<K.added.length;ae++){const Pe=K.added[ae];let le=x.indexOf(Pe);if(le===-1){for(let Ye=0;Ye<y.length;Ye++)if(Ye>=x.length){x.push(Pe),le=Ye;break}else if(x[Ye]===null){x[Ye]=Pe,le=Ye;break}if(le===-1)break}const Be=y[le];Be&&Be.connect(Pe)}}const G=new I,Z=new I;function W(K,ae,Pe){G.setFromMatrixPosition(ae.matrixWorld),Z.setFromMatrixPosition(Pe.matrixWorld);const le=G.distanceTo(Z),Be=ae.projectionMatrix.elements,Ye=Pe.projectionMatrix.elements,Xe=Be[14]/(Be[10]-1),ct=Be[14]/(Be[10]+1),J=(Be[9]+1)/Be[5],re=(Be[9]-1)/Be[5],L=(Be[8]-1)/Be[0],ke=(Ye[8]+1)/Ye[0],te=Xe*L,Ee=Xe*ke,he=le/(-L+ke),Ge=he*-L;if(ae.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ge),K.translateZ(he),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Be[10]===-1)K.projectionMatrix.copy(ae.projectionMatrix),K.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const be=Xe+he,T=ct+he,b=te-Ge,O=Ee+(le-Ge),j=J*ct/T*be,Q=re*ct/T*be;K.projectionMatrix.makePerspective(b,O,j,Q,be,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function de(K,ae){ae===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ae.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ae=K.near,Pe=K.far;v.texture!==null&&(v.depthNear>0&&(ae=v.depthNear),v.depthFar>0&&(Pe=v.depthFar)),M.near=C.near=A.near=ae,M.far=C.far=A.far=Pe,(R!==M.near||F!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,F=M.far),A.layers.mask=K.layers.mask|2,C.layers.mask=K.layers.mask|4,M.layers.mask=A.layers.mask|C.layers.mask;const le=K.parent,Be=M.cameras;de(M,le);for(let Ye=0;Ye<Be.length;Ye++)de(Be[Ye],le);Be.length===2?W(M,A,C):M.projectionMatrix.copy(A.projectionMatrix),Me(K,M,le)};function Me(K,ae,Pe){Pe===null?K.matrix.copy(ae.matrixWorld):(K.matrix.copy(Pe.matrixWorld),K.matrix.invert(),K.matrix.multiply(ae.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ae.projectionMatrix),K.projectionMatrixInverse.copy(ae.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ta*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let Ce=null;function $e(K,ae){if(u=ae.getViewerPose(l||a),g=ae,u!==null){const Pe=u.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let le=!1;Pe.length!==M.cameras.length&&(M.cameras.length=0,le=!0);for(let Ye=0;Ye<Pe.length;Ye++){const Xe=Pe[Ye];let ct=null;if(f!==null)ct=f.getViewport(Xe);else{const re=h.getViewSubImage(d,Xe);ct=re.viewport,Ye===0&&(e.setRenderTargetTextures(_,re.colorTexture,d.ignoreDepthValues?void 0:re.depthStencilTexture),e.setRenderTarget(_))}let J=S[Ye];J===void 0&&(J=new pn,J.layers.enable(Ye),J.viewport=new mt,S[Ye]=J),J.matrix.fromArray(Xe.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Xe.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(ct.x,ct.y,ct.width,ct.height),Ye===0&&(M.matrix.copy(J.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),le===!0&&M.cameras.push(J)}const Be=s.enabledFeatures;if(Be&&Be.includes("depth-sensing")){const Ye=h.getDepthInformation(Pe[0]);Ye&&Ye.isValid&&Ye.texture&&v.init(e,Ye,s.renderState)}}for(let Pe=0;Pe<y.length;Pe++){const le=x[Pe],Be=y[Pe];le!==null&&Be!==void 0&&Be.update(le,ae,l||a)}Ce&&Ce(K,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),g=null}const gt=new cm;gt.setAnimationLoop($e),this.setAnimationLoop=function(K){Ce=K},this.dispose=function(){}}}const Us=new Un,GM=new qe;function WM(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,sm(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,_,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===gn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===gn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=e.get(p),y=_.envMap,x=_.envMapRotation;y&&(m.envMap.value=y,Us.copy(x),Us.x*=-1,Us.y*=-1,Us.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),m.envMapRotation.value.setFromMatrix4(GM.makeRotationFromEuler(Us)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===gn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function XM(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,y){const x=y.program;n.uniformBlockBinding(_,x)}function l(_,y){let x=s[_.id];x===void 0&&(g(_),x=u(_),s[_.id]=x,_.addEventListener("dispose",m));const P=y.program;n.updateUBOMapping(_,P);const E=e.render.frame;r[_.id]!==E&&(d(_),r[_.id]=E)}function u(_){const y=h();_.__bindingPointIndex=y;const x=i.createBuffer(),P=_.__size,E=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,P,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function h(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const y=s[_.id],x=_.uniforms,P=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let E=0,A=x.length;E<A;E++){const C=Array.isArray(x[E])?x[E]:[x[E]];for(let S=0,M=C.length;S<M;S++){const R=C[S];if(f(R,E,S,P)===!0){const F=R.__offset,k=Array.isArray(R.value)?R.value:[R.value];let B=0;for(let Y=0;Y<k.length;Y++){const G=k[Y],Z=v(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,F+B,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,B),B+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,y,x,P){const E=_.value,A=y+"_"+x;if(P[A]===void 0)return typeof E=="number"||typeof E=="boolean"?P[A]=E:P[A]=E.clone(),!0;{const C=P[A];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return P[A]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(_){const y=_.uniforms;let x=0;const P=16;for(let A=0,C=y.length;A<C;A++){const S=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,R=S.length;M<R;M++){const F=S[M],k=Array.isArray(F.value)?F.value:[F.value];for(let B=0,Y=k.length;B<Y;B++){const G=k[B],Z=v(G),W=x%P,de=W%Z.boundary,Me=W+de;x+=de,Me!==0&&P-Me<Z.storage&&(x+=P-Me),F.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=Z.storage}}}const E=x%P;return E>0&&(x+=P-E),_.__size=x,_.__cache={},this}function v(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class jM{constructor(e={}){const{canvas:t=U0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const _=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yt,this.toneMapping=Ss,this.toneMappingExposure=1;const x=this;let P=!1,E=0,A=0,C=null,S=-1,M=null;const R=new mt,F=new mt;let k=null;const B=new pe(0);let Y=0,G=t.width,Z=t.height,W=1,de=null,Me=null;const Ce=new mt(0,0,G,Z),$e=new mt(0,0,G,Z);let gt=!1;const K=new Bh;let ae=!1,Pe=!1;const le=new qe,Be=new qe,Ye=new I,Xe=new mt,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let J=!1;function re(){return C===null?W:1}let L=n;function ke(w,N){return t.getContext(w,N)}try{const w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ah}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",_e,!1),L===null){const N="webgl2";if(L=ke(N,w),L===null)throw ke(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let te,Ee,he,Ge,be,T,b,O,j,Q,q,Ie,me,we,rt,ie,Ae,We,je,Re,ot,et,Ct,D;function ge(){te=new Jx(L),te.init(),et=new kM(L,te),Ee=new Xx(L,te,e,et),he=new DM(L,te),Ee.reverseDepthBuffer&&d&&he.buffers.depth.setReversed(!0),Ge=new ey(L),be=new _M,T=new UM(L,te,he,be,Ee,et,Ge),b=new qx(x),O=new $x(x),j=new ov(L),Ct=new Gx(L,j),Q=new Zx(L,j,Ge,Ct),q=new ny(L,Q,j,Ge),je=new ty(L,Ee,T),ie=new jx(be),Ie=new vM(x,b,O,te,Ee,Ct,ie),me=new WM(x,be),we=new yM,rt=new TM(te),We=new Vx(x,b,O,he,q,f,c),Ae=new IM(x,q,Ee),D=new XM(L,Ge,Ee,he),Re=new Wx(L,te,Ge),ot=new Qx(L,te,Ge),Ge.programs=Ie.programs,x.capabilities=Ee,x.extensions=te,x.properties=be,x.renderLists=we,x.shadowMap=Ae,x.state=he,x.info=Ge}ge();const X=new VM(x,L);this.xr=X,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=te.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=te.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(w){w!==void 0&&(W=w,this.setSize(G,Z,!1))},this.getSize=function(w){return w.set(G,Z)},this.setSize=function(w,N,z=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,Z=N,t.width=Math.floor(w*W),t.height=Math.floor(N*W),z===!0&&(t.style.width=w+"px",t.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(G*W,Z*W).floor()},this.setDrawingBufferSize=function(w,N,z){G=w,Z=N,W=z,t.width=Math.floor(w*z),t.height=Math.floor(N*z),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(Ce)},this.setViewport=function(w,N,z,H){w.isVector4?Ce.set(w.x,w.y,w.z,w.w):Ce.set(w,N,z,H),he.viewport(R.copy(Ce).multiplyScalar(W).round())},this.getScissor=function(w){return w.copy($e)},this.setScissor=function(w,N,z,H){w.isVector4?$e.set(w.x,w.y,w.z,w.w):$e.set(w,N,z,H),he.scissor(F.copy($e).multiplyScalar(W).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(w){he.setScissorTest(gt=w)},this.setOpaqueSort=function(w){de=w},this.setTransparentSort=function(w){Me=w},this.getClearColor=function(w){return w.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor.apply(We,arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha.apply(We,arguments)},this.clear=function(w=!0,N=!0,z=!0){let H=0;if(w){let U=!1;if(C!==null){const oe=C.texture.format;U=oe===Uh||oe===Nh||oe===Dh}if(U){const oe=C.texture.type,xe=oe===Qi||oe===nr||oe===ao||oe===Qr||oe===Ph||oe===Ih,De=We.getClearColor(),Ne=We.getClearAlpha(),Ke=De.r,Ze=De.g,Ue=De.b;xe?(g[0]=Ke,g[1]=Ze,g[2]=Ue,g[3]=Ne,L.clearBufferuiv(L.COLOR,0,g)):(v[0]=Ke,v[1]=Ze,v[2]=Ue,v[3]=Ne,L.clearBufferiv(L.COLOR,0,v))}else H|=L.COLOR_BUFFER_BIT}N&&(H|=L.DEPTH_BUFFER_BIT),z&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),we.dispose(),rt.dispose(),be.dispose(),b.dispose(),O.dispose(),q.dispose(),Ct.dispose(),D.dispose(),Ie.dispose(),X.dispose(),X.removeEventListener("sessionstart",Rd),X.removeEventListener("sessionend",Cd),Cs.stop()};function $(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const w=Ge.autoReset,N=Ae.enabled,z=Ae.autoUpdate,H=Ae.needsUpdate,U=Ae.type;ge(),Ge.autoReset=w,Ae.enabled=N,Ae.autoUpdate=z,Ae.needsUpdate=H,Ae.type=U}function _e(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Je(w){const N=w.target;N.removeEventListener("dispose",Je),Ot(N)}function Ot(w){on(w),be.remove(w)}function on(w){const N=be.get(w).programs;N!==void 0&&(N.forEach(function(z){Ie.releaseProgram(z)}),w.isShaderMaterial&&Ie.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,z,H,U,oe){N===null&&(N=ct);const xe=U.isMesh&&U.matrixWorld.determinant()<0,De=bg(w,N,z,H,U);he.setMaterial(H,xe);let Ne=z.index,Ke=1;if(H.wireframe===!0){if(Ne=Q.getWireframeAttribute(z),Ne===void 0)return;Ke=2}const Ze=z.drawRange,Ue=z.attributes.position;let dt=Ze.start*Ke,Pt=(Ze.start+Ze.count)*Ke;oe!==null&&(dt=Math.max(dt,oe.start*Ke),Pt=Math.min(Pt,(oe.start+oe.count)*Ke)),Ne!==null?(dt=Math.max(dt,0),Pt=Math.min(Pt,Ne.count)):Ue!=null&&(dt=Math.max(dt,0),Pt=Math.min(Pt,Ue.count));const Lt=Pt-dt;if(Lt<0||Lt===1/0)return;Ct.setup(U,H,De,z,Ne);let Mn,vt=Re;if(Ne!==null&&(Mn=j.get(Ne),vt=ot,vt.setIndex(Mn)),U.isMesh)H.wireframe===!0?(he.setLineWidth(H.wireframeLinewidth*re()),vt.setMode(L.LINES)):vt.setMode(L.TRIANGLES);else if(U.isLine){let Fe=H.linewidth;Fe===void 0&&(Fe=1),he.setLineWidth(Fe*re()),U.isLineSegments?vt.setMode(L.LINES):U.isLineLoop?vt.setMode(L.LINE_LOOP):vt.setMode(L.LINE_STRIP)}else U.isPoints?vt.setMode(L.POINTS):U.isSprite&&vt.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)vt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))vt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Fe=U._multiDrawStarts,Ai=U._multiDrawCounts,_t=U._multiDrawCount,Zn=Ne?j.get(Ne).bytesPerElement:1,ur=be.get(H).currentProgram.getUniforms();for(let Rn=0;Rn<_t;Rn++)ur.setValue(L,"_gl_DrawID",Rn),vt.render(Fe[Rn]/Zn,Ai[Rn])}else if(U.isInstancedMesh)vt.renderInstances(dt,Lt,U.count);else if(z.isInstancedBufferGeometry){const Fe=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ai=Math.min(z.instanceCount,Fe);vt.renderInstances(dt,Lt,Ai)}else vt.render(dt,Lt)};function Mt(w,N,z){w.transparent===!0&&w.side===en&&w.forceSinglePass===!1?(w.side=gn,w.needsUpdate=!0,Ao(w,N,z),w.side=Zi,w.needsUpdate=!0,Ao(w,N,z),w.side=en):Ao(w,N,z)}this.compile=function(w,N,z=null){z===null&&(z=w),p=rt.get(z),p.init(N),y.push(p),z.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),w!==z&&w.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const H=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const oe=U.material;if(oe)if(Array.isArray(oe))for(let xe=0;xe<oe.length;xe++){const De=oe[xe];Mt(De,z,U),H.add(De)}else Mt(oe,z,U),H.add(oe)}),y.pop(),p=null,H},this.compileAsync=function(w,N,z=null){const H=this.compile(w,N,z);return new Promise(U=>{function oe(){if(H.forEach(function(xe){be.get(xe).currentProgram.isReady()&&H.delete(xe)}),H.size===0){U(w);return}setTimeout(oe,10)}te.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Jn=null;function Ti(w){Jn&&Jn(w)}function Rd(){Cs.stop()}function Cd(){Cs.start()}const Cs=new cm;Cs.setAnimationLoop(Ti),typeof self<"u"&&Cs.setContext(self),this.setAnimationLoop=function(w){Jn=w,X.setAnimationLoop(w),w===null?Cs.stop():Cs.start()},X.addEventListener("sessionstart",Rd),X.addEventListener("sessionend",Cd),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(N),N=X.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,N,C),p=rt.get(w,y.length),p.init(N),y.push(p),Be.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),K.setFromProjectionMatrix(Be),Pe=this.localClippingEnabled,ae=ie.init(this.clippingPlanes,Pe),m=we.get(w,_.length),m.init(),_.push(m),X.enabled===!0&&X.isPresenting===!0){const oe=x.xr.getDepthSensingMesh();oe!==null&&hl(oe,N,-1/0,x.sortObjects)}hl(w,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(de,Me),J=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,J&&We.addToRenderList(m,w),this.info.render.frame++,ae===!0&&ie.beginShadows();const z=p.state.shadowsArray;Ae.render(z,w,N),ae===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,U=m.transmissive;if(p.setupLights(),N.isArrayCamera){const oe=N.cameras;if(U.length>0)for(let xe=0,De=oe.length;xe<De;xe++){const Ne=oe[xe];Id(H,U,w,Ne)}J&&We.render(w);for(let xe=0,De=oe.length;xe<De;xe++){const Ne=oe[xe];Pd(m,w,Ne,Ne.viewport)}}else U.length>0&&Id(H,U,w,N),J&&We.render(w),Pd(m,w,N);C!==null&&(T.updateMultisampleRenderTarget(C),T.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(x,w,N),Ct.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],ae===!0&&ie.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function hl(w,N,z,H){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||K.intersectsSprite(w)){H&&Xe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Be);const xe=q.update(w),De=w.material;De.visible&&m.push(w,xe,De,z,Xe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||K.intersectsObject(w))){const xe=q.update(w),De=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Xe.copy(w.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Xe.copy(xe.boundingSphere.center)),Xe.applyMatrix4(w.matrixWorld).applyMatrix4(Be)),Array.isArray(De)){const Ne=xe.groups;for(let Ke=0,Ze=Ne.length;Ke<Ze;Ke++){const Ue=Ne[Ke],dt=De[Ue.materialIndex];dt&&dt.visible&&m.push(w,xe,dt,z,Xe.z,Ue)}}else De.visible&&m.push(w,xe,De,z,Xe.z,null)}}const oe=w.children;for(let xe=0,De=oe.length;xe<De;xe++)hl(oe[xe],N,z,H)}function Pd(w,N,z,H){const U=w.opaque,oe=w.transmissive,xe=w.transparent;p.setupLightsView(z),ae===!0&&ie.setGlobalState(x.clippingPlanes,z),H&&he.viewport(R.copy(H)),U.length>0&&To(U,N,z),oe.length>0&&To(oe,N,z),xe.length>0&&To(xe,N,z),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Id(w,N,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new Es(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?fa:Qi,minFilter:Vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const oe=p.state.transmissionRenderTarget[H.id],xe=H.viewport||R;oe.setSize(xe.z,xe.w);const De=x.getRenderTarget();x.setRenderTarget(oe),x.getClearColor(B),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),J&&We.render(z);const Ne=x.toneMapping;x.toneMapping=Ss;const Ke=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),ae===!0&&ie.setGlobalState(x.clippingPlanes,H),To(w,z,H),T.updateMultisampleRenderTarget(oe),T.updateRenderTargetMipmap(oe),te.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Ue=0,dt=N.length;Ue<dt;Ue++){const Pt=N[Ue],Lt=Pt.object,Mn=Pt.geometry,vt=Pt.material,Fe=Pt.group;if(vt.side===en&&Lt.layers.test(H.layers)){const Ai=vt.side;vt.side=gn,vt.needsUpdate=!0,Ld(Lt,z,H,Mn,vt,Fe),vt.side=Ai,vt.needsUpdate=!0,Ze=!0}}Ze===!0&&(T.updateMultisampleRenderTarget(oe),T.updateRenderTargetMipmap(oe))}x.setRenderTarget(De),x.setClearColor(B,Y),Ke!==void 0&&(H.viewport=Ke),x.toneMapping=Ne}function To(w,N,z){const H=N.isScene===!0?N.overrideMaterial:null;for(let U=0,oe=w.length;U<oe;U++){const xe=w[U],De=xe.object,Ne=xe.geometry,Ke=H===null?xe.material:H,Ze=xe.group;De.layers.test(z.layers)&&Ld(De,N,z,Ne,Ke,Ze)}}function Ld(w,N,z,H,U,oe){w.onBeforeRender(x,N,z,H,U,oe),w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(x,N,z,H,w,oe),U.transparent===!0&&U.side===en&&U.forceSinglePass===!1?(U.side=gn,U.needsUpdate=!0,x.renderBufferDirect(z,N,H,U,w,oe),U.side=Zi,U.needsUpdate=!0,x.renderBufferDirect(z,N,H,U,w,oe),U.side=en):x.renderBufferDirect(z,N,H,U,w,oe),w.onAfterRender(x,N,z,H,U,oe)}function Ao(w,N,z){N.isScene!==!0&&(N=ct);const H=be.get(w),U=p.state.lights,oe=p.state.shadowsArray,xe=U.state.version,De=Ie.getParameters(w,U.state,oe,N,z),Ne=Ie.getProgramCacheKey(De);let Ke=H.programs;H.environment=w.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(w.isMeshStandardMaterial?O:b).get(w.envMap||H.environment),H.envMapRotation=H.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Ke===void 0&&(w.addEventListener("dispose",Je),Ke=new Map,H.programs=Ke);let Ze=Ke.get(Ne);if(Ze!==void 0){if(H.currentProgram===Ze&&H.lightsStateVersion===xe)return Nd(w,De),Ze}else De.uniforms=Ie.getUniforms(w),w.onBeforeCompile(De,x),Ze=Ie.acquireProgram(De,Ne),Ke.set(Ne,Ze),H.uniforms=De.uniforms;const Ue=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ue.clippingPlanes=ie.uniform),Nd(w,De),H.needsLights=Eg(w),H.lightsStateVersion=xe,H.needsLights&&(Ue.ambientLightColor.value=U.state.ambient,Ue.lightProbe.value=U.state.probe,Ue.directionalLights.value=U.state.directional,Ue.directionalLightShadows.value=U.state.directionalShadow,Ue.spotLights.value=U.state.spot,Ue.spotLightShadows.value=U.state.spotShadow,Ue.rectAreaLights.value=U.state.rectArea,Ue.ltc_1.value=U.state.rectAreaLTC1,Ue.ltc_2.value=U.state.rectAreaLTC2,Ue.pointLights.value=U.state.point,Ue.pointLightShadows.value=U.state.pointShadow,Ue.hemisphereLights.value=U.state.hemi,Ue.directionalShadowMap.value=U.state.directionalShadowMap,Ue.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ue.spotShadowMap.value=U.state.spotShadowMap,Ue.spotLightMatrix.value=U.state.spotLightMatrix,Ue.spotLightMap.value=U.state.spotLightMap,Ue.pointShadowMap.value=U.state.pointShadowMap,Ue.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=Ze,H.uniformsList=null,Ze}function Dd(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=_c.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function Nd(w,N){const z=be.get(w);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function bg(w,N,z,H,U){N.isScene!==!0&&(N=ct),T.resetTextureUnits();const oe=N.fog,xe=H.isMeshStandardMaterial?N.environment:null,De=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:yn,Ne=(H.isMeshStandardMaterial?O:b).get(H.envMap||xe),Ke=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ze=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ue=!!z.morphAttributes.position,dt=!!z.morphAttributes.normal,Pt=!!z.morphAttributes.color;let Lt=Ss;H.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Lt=x.toneMapping);const Mn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,vt=Mn!==void 0?Mn.length:0,Fe=be.get(H),Ai=p.state.lights;if(ae===!0&&(Pe===!0||w!==M)){const Bn=w===M&&H.id===S;ie.setState(H,w,Bn)}let _t=!1;H.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Ai.state.version||Fe.outputColorSpace!==De||U.isBatchedMesh&&Fe.batching===!1||!U.isBatchedMesh&&Fe.batching===!0||U.isBatchedMesh&&Fe.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Fe.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Fe.instancing===!1||!U.isInstancedMesh&&Fe.instancing===!0||U.isSkinnedMesh&&Fe.skinning===!1||!U.isSkinnedMesh&&Fe.skinning===!0||U.isInstancedMesh&&Fe.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Fe.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Fe.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Fe.instancingMorph===!1&&U.morphTexture!==null||Fe.envMap!==Ne||H.fog===!0&&Fe.fog!==oe||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==ie.numPlanes||Fe.numIntersection!==ie.numIntersection)||Fe.vertexAlphas!==Ke||Fe.vertexTangents!==Ze||Fe.morphTargets!==Ue||Fe.morphNormals!==dt||Fe.morphColors!==Pt||Fe.toneMapping!==Lt||Fe.morphTargetsCount!==vt)&&(_t=!0):(_t=!0,Fe.__version=H.version);let Zn=Fe.currentProgram;_t===!0&&(Zn=Ao(H,N,U));let ur=!1,Rn=!1,ba=!1;const Dt=Zn.getUniforms(),ui=Fe.uniforms;if(he.useProgram(Zn.program)&&(ur=!0,Rn=!0,ba=!0),H.id!==S&&(S=H.id,Rn=!0),ur||M!==w){he.buffers.depth.getReversed()?(le.copy(w.projectionMatrix),F0(le),O0(le),Dt.setValue(L,"projectionMatrix",le)):Dt.setValue(L,"projectionMatrix",w.projectionMatrix),Dt.setValue(L,"viewMatrix",w.matrixWorldInverse);const ns=Dt.map.cameraPosition;ns!==void 0&&ns.setValue(L,Ye.setFromMatrixPosition(w.matrixWorld)),Ee.logarithmicDepthBuffer&&Dt.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Dt.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Rn=!0,ba=!0)}if(U.isSkinnedMesh){Dt.setOptional(L,U,"bindMatrix"),Dt.setOptional(L,U,"bindMatrixInverse");const Bn=U.skeleton;Bn&&(Bn.boneTexture===null&&Bn.computeBoneTexture(),Dt.setValue(L,"boneTexture",Bn.boneTexture,T))}U.isBatchedMesh&&(Dt.setOptional(L,U,"batchingTexture"),Dt.setValue(L,"batchingTexture",U._matricesTexture,T),Dt.setOptional(L,U,"batchingIdTexture"),Dt.setValue(L,"batchingIdTexture",U._indirectTexture,T),Dt.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&Dt.setValue(L,"batchingColorTexture",U._colorsTexture,T));const wa=z.morphAttributes;if((wa.position!==void 0||wa.normal!==void 0||wa.color!==void 0)&&je.update(U,z,Zn),(Rn||Fe.receiveShadow!==U.receiveShadow)&&(Fe.receiveShadow=U.receiveShadow,Dt.setValue(L,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(ui.envMap.value=Ne,ui.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(ui.envMapIntensity.value=N.environmentIntensity),Rn&&(Dt.setValue(L,"toneMappingExposure",x.toneMappingExposure),Fe.needsLights&&wg(ui,ba),oe&&H.fog===!0&&me.refreshFogUniforms(ui,oe),me.refreshMaterialUniforms(ui,H,W,Z,p.state.transmissionRenderTarget[w.id]),_c.upload(L,Dd(Fe),ui,T)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(_c.upload(L,Dd(Fe),ui,T),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Dt.setValue(L,"center",U.center),Dt.setValue(L,"modelViewMatrix",U.modelViewMatrix),Dt.setValue(L,"normalMatrix",U.normalMatrix),Dt.setValue(L,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Bn=H.uniformsGroups;for(let ns=0,is=Bn.length;ns<is;ns++){const Ud=Bn[ns];D.update(Ud,Zn),D.bind(Ud,Zn)}}return Zn}function wg(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function Eg(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,N,z){be.get(w.texture).__webglTexture=N,be.get(w.depthTexture).__webglTexture=z;const H=be.get(w);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){const z=be.get(w);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,z=0){C=w,E=N,A=z;let H=!0,U=null,oe=!1,xe=!1;if(w){const Ne=be.get(w);if(Ne.__useDefaultFramebuffer!==void 0)he.bindFramebuffer(L.FRAMEBUFFER,null),H=!1;else if(Ne.__webglFramebuffer===void 0)T.setupRenderTarget(w);else if(Ne.__hasExternalTextures)T.rebindTextures(w,be.get(w.texture).__webglTexture,be.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ue=w.depthTexture;if(Ne.__boundDepthTexture!==Ue){if(Ue!==null&&be.has(Ue)&&(w.width!==Ue.image.width||w.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(w)}}const Ke=w.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(xe=!0);const Ze=be.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ze[N])?U=Ze[N][z]:U=Ze[N],oe=!0):w.samples>0&&T.useMultisampledRTT(w)===!1?U=be.get(w).__webglMultisampledFramebuffer:Array.isArray(Ze)?U=Ze[z]:U=Ze,R.copy(w.viewport),F.copy(w.scissor),k=w.scissorTest}else R.copy(Ce).multiplyScalar(W).floor(),F.copy($e).multiplyScalar(W).floor(),k=gt;if(he.bindFramebuffer(L.FRAMEBUFFER,U)&&H&&he.drawBuffers(w,U),he.viewport(R),he.scissor(F),he.setScissorTest(k),oe){const Ne=be.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ne.__webglTexture,z)}else if(xe){const Ne=be.get(w.texture),Ke=N||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ne.__webglTexture,z||0,Ke)}S=-1},this.readRenderTargetPixels=function(w,N,z,H,U,oe,xe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xe!==void 0&&(De=De[xe]),De){he.bindFramebuffer(L.FRAMEBUFFER,De);try{const Ne=w.texture,Ke=Ne.format,Ze=Ne.type;if(!Ee.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ee.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-H&&z>=0&&z<=w.height-U&&L.readPixels(N,z,H,U,et.convert(Ke),et.convert(Ze),oe)}finally{const Ne=C!==null?be.get(C).__webglFramebuffer:null;he.bindFramebuffer(L.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(w,N,z,H,U,oe,xe){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xe!==void 0&&(De=De[xe]),De){const Ne=w.texture,Ke=Ne.format,Ze=Ne.type;if(!Ee.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ee.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-H&&z>=0&&z<=w.height-U){he.bindFramebuffer(L.FRAMEBUFFER,De);const Ue=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ue),L.bufferData(L.PIXEL_PACK_BUFFER,oe.byteLength,L.STREAM_READ),L.readPixels(N,z,H,U,et.convert(Ke),et.convert(Ze),0);const dt=C!==null?be.get(C).__webglFramebuffer:null;he.bindFramebuffer(L.FRAMEBUFFER,dt);const Pt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await k0(L,Pt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ue),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,oe),L.deleteBuffer(Ue),L.deleteSync(Pt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,N=null,z=0){w.isTexture!==!0&&(Va("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);const H=Math.pow(2,-z),U=Math.floor(w.image.width*H),oe=Math.floor(w.image.height*H),xe=N!==null?N.x:0,De=N!==null?N.y:0;T.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,xe,De,U,oe),he.unbindTexture()},this.copyTextureToTexture=function(w,N,z=null,H=null,U=0){w.isTexture!==!0&&(Va("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,w=arguments[1],N=arguments[2],U=arguments[3]||0,z=null);let oe,xe,De,Ne,Ke,Ze,Ue,dt,Pt;const Lt=w.isCompressedTexture?w.mipmaps[U]:w.image;z!==null?(oe=z.max.x-z.min.x,xe=z.max.y-z.min.y,De=z.isBox3?z.max.z-z.min.z:1,Ne=z.min.x,Ke=z.min.y,Ze=z.isBox3?z.min.z:0):(oe=Lt.width,xe=Lt.height,De=Lt.depth||1,Ne=0,Ke=0,Ze=0),H!==null?(Ue=H.x,dt=H.y,Pt=H.z):(Ue=0,dt=0,Pt=0);const Mn=et.convert(N.format),vt=et.convert(N.type);let Fe;N.isData3DTexture?(T.setTexture3D(N,0),Fe=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(T.setTexture2DArray(N,0),Fe=L.TEXTURE_2D_ARRAY):(T.setTexture2D(N,0),Fe=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const Ai=L.getParameter(L.UNPACK_ROW_LENGTH),_t=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Zn=L.getParameter(L.UNPACK_SKIP_PIXELS),ur=L.getParameter(L.UNPACK_SKIP_ROWS),Rn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Lt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Lt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ne),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ke),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ze);const ba=w.isDataArrayTexture||w.isData3DTexture,Dt=N.isDataArrayTexture||N.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const ui=be.get(w),wa=be.get(N),Bn=be.get(ui.__renderTarget),ns=be.get(wa.__renderTarget);he.bindFramebuffer(L.READ_FRAMEBUFFER,Bn.__webglFramebuffer),he.bindFramebuffer(L.DRAW_FRAMEBUFFER,ns.__webglFramebuffer);for(let is=0;is<De;is++)ba&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,be.get(w).__webglTexture,U,Ze+is),w.isDepthTexture?(Dt&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,be.get(N).__webglTexture,U,Pt+is),L.blitFramebuffer(Ne,Ke,oe,xe,Ue,dt,oe,xe,L.DEPTH_BUFFER_BIT,L.NEAREST)):Dt?L.copyTexSubImage3D(Fe,U,Ue,dt,Pt+is,Ne,Ke,oe,xe):L.copyTexSubImage2D(Fe,U,Ue,dt,Pt+is,Ne,Ke,oe,xe);he.bindFramebuffer(L.READ_FRAMEBUFFER,null),he.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Dt?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Fe,U,Ue,dt,Pt,oe,xe,De,Mn,vt,Lt.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(Fe,U,Ue,dt,Pt,oe,xe,De,Mn,Lt.data):L.texSubImage3D(Fe,U,Ue,dt,Pt,oe,xe,De,Mn,vt,Lt):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,U,Ue,dt,oe,xe,Mn,vt,Lt.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,U,Ue,dt,Lt.width,Lt.height,Mn,Lt.data):L.texSubImage2D(L.TEXTURE_2D,U,Ue,dt,oe,xe,Mn,vt,Lt);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ai),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_t),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Zn),L.pixelStorei(L.UNPACK_SKIP_ROWS,ur),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Rn),U===0&&N.generateMipmaps&&L.generateMipmap(Fe),he.unbindTexture()},this.copyTextureToTexture3D=function(w,N,z=null,H=null,U=0){return w.isTexture!==!0&&(Va("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,w=arguments[2],N=arguments[3],U=arguments[4]||0),Va('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,N,z,H,U)},this.initRenderTarget=function(w){be.get(w).__webglFramebuffer===void 0&&T.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),he.unbindTexture()},this.resetState=function(){E=0,A=0,C=null,he.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}class Vh{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new pe(e),this.near=t,this.far=n}clone(){return new Vh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class fm extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class qM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ku,this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const hn=new I;class Gh{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ii(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array),r=St(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Gh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const kf=new I,Ff=new mt,Of=new mt,YM=new I,Bf=new qe,Yo=new I,zl=new Si,zf=new qe,Hl=new jc;class KM extends Te{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=zd,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Dn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Yo),this.boundingBox.expandByPoint(Yo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Si),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Yo),this.boundingSphere.expandByPoint(Yo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zl.copy(this.boundingSphere),zl.applyMatrix4(s),e.ray.intersectsSphere(zl)!==!1&&(zf.copy(s).invert(),Hl.copy(e.ray).applyMatrix4(zf),!(this.boundingBox!==null&&Hl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Hl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new mt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===zd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===n0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Ff.fromBufferAttribute(s.attributes.skinIndex,e),Of.fromBufferAttribute(s.attributes.skinWeight,e),kf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Of.getComponent(r);if(a!==0){const o=Ff.getComponent(r);Bf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(YM.copy(kf).applyMatrix4(Bf),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class pm extends Ut{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Wh extends $t{constructor(e=null,t=1,n=1,s,r,a,o,c,l=vn,u=vn,h,d){super(null,a,o,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hf=new qe,$M=new qe;class Xh{constructor(e=[],t=[]){this.uuid=qn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:$M;Hf.multiplyMatrices(o,t[r]),Hf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Xh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Wh(t,e,e,jn,ri);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new pm),this.bones.push(a),this.boneInverses.push(new qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class Ju extends wt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Er=new qe,Vf=new qe,Ko=[],Gf=new Dn,JM=new qe,Ca=new Te,Pa=new Si;class uo extends Te{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ju(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,JM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Er),Gf.copy(e.boundingBox).applyMatrix4(Er),this.boundingBox.union(Gf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Si),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Er),Pa.copy(e.boundingSphere).applyMatrix4(Er),this.boundingSphere.union(Pa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Ca.geometry=this.geometry,Ca.material=this.material,Ca.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pa.copy(this.boundingSphere),Pa.applyMatrix4(n),e.ray.intersectsSphere(Pa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Er),Vf.multiplyMatrices(n,Er),Ca.matrixWorld=Vf,Ca.raycast(e,Ko);for(let a=0,o=Ko.length;a<o;a++){const c=Ko[a];c.instanceId=r,c.object=this,t.push(c)}Ko.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ju(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wh(new Float32Array(s*this.count),s,this.count,Lh,ri));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class mm extends oi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pc=new I,Ic=new I,Wf=new qe,Ia=new jc,$o=new Si,Vl=new I,Xf=new I;class jh extends Ut{constructor(e=new Ht,t=new mm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Pc.fromBufferAttribute(t,s-1),Ic.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Pc.distanceTo(Ic);e.setAttribute("lineDistance",new Et(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(s),$o.radius+=r,e.ray.intersectsSphere($o)===!1)return;Wf.copy(s).invert(),Ia.copy(e.ray).applyMatrix4(Wf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=l){const p=u.getX(v),_=u.getX(v+1),y=Jo(this,e,Ia,c,p,_);y&&t.push(y)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(f),p=Jo(this,e,Ia,c,v,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=l){const p=Jo(this,e,Ia,c,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=Jo(this,e,Ia,c,g-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Jo(i,e,t,n,s,r){const a=i.geometry.attributes.position;if(Pc.fromBufferAttribute(a,s),Ic.fromBufferAttribute(a,r),t.distanceSqToSegment(Pc,Ic,Vl,Xf)>n)return;Vl.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Vl);if(!(c<e.near||c>e.far))return{distance:c,point:Xf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const jf=new I,qf=new I;class gm extends jh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)jf.fromBufferAttribute(t,s),qf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+jf.distanceTo(qf);e.setAttribute("lineDistance",new Et(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ZM extends jh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class qh extends oi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yf=new qe,Zu=new jc,Zo=new Si,Qo=new I;class vm extends Ut{constructor(e=new Ht,t=new qh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(s),Zo.radius+=r,e.ray.intersectsSphere(Zo)===!1)return;Yf.copy(s).invert(),Zu.copy(e.ray).applyMatrix4(Yf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,v=f;g<v;g++){const m=l.getX(g);Qo.fromBufferAttribute(h,m),Kf(Qo,m,c,s,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,v=f;g<v;g++)Qo.fromBufferAttribute(h,g),Kf(Qo,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Kf(i,e,t,n,s,r,a){const o=Zu.distanceSqToPoint(i);if(o<t){const c=new I;Zu.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class bi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const u=n[s],d=n[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new ne:new I);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new I,s=[],r=[],a=[],o=new I,c=new qe;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Kt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Kt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Yh extends bi{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ne){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class QM extends Yh{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Kh(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,h){let d=(a-r)/l-(o-r)/(l+u)+(o-a)/u,f=(o-a)/u-(c-a)/(u+h)+(c-o)/h;d*=u,f*=u,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const ec=new I,Gl=new Kh,Wl=new Kh,Xl=new Kh;class eS extends bi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(ec.subVectors(s[0],s[1]).add(s[0]),l=ec);const h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(ec.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ec),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Gl.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,v,m),Wl.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,v,m),Xl.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(Gl.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Wl.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Xl.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(Gl.calc(c),Wl.calc(c),Xl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function $f(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function tS(i,e){const t=1-i;return t*t*e}function nS(i,e){return 2*(1-i)*i*e}function iS(i,e){return i*i*e}function Za(i,e,t,n){return tS(i,e)+nS(i,t)+iS(i,n)}function sS(i,e){const t=1-i;return t*t*t*e}function rS(i,e){const t=1-i;return 3*t*t*i*e}function aS(i,e){return 3*(1-i)*i*i*e}function oS(i,e){return i*i*i*e}function Qa(i,e,t,n,s){return sS(i,e)+rS(i,t)+aS(i,n)+oS(i,s)}class _m extends bi{constructor(e=new ne,t=new ne,n=new ne,s=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ne){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Qa(e,s.x,r.x,a.x,o.x),Qa(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class cS extends bi{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Qa(e,s.x,r.x,a.x,o.x),Qa(e,s.y,r.y,a.y,o.y),Qa(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class xm extends bi{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lS extends bi{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ym extends bi{constructor(e=new ne,t=new ne,n=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ne){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Za(e,s.x,r.x,a.x),Za(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uS extends bi{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Za(e,s.x,r.x,a.x),Za(e,s.y,r.y,a.y),Za(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Mm extends bi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set($f(o,c.x,l.x,u.x,h.x),$f(o,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ne().fromArray(s))}return this}}var Qu=Object.freeze({__proto__:null,ArcCurve:QM,CatmullRomCurve3:eS,CubicBezierCurve:_m,CubicBezierCurve3:cS,EllipseCurve:Yh,LineCurve:xm,LineCurve3:lS,QuadraticBezierCurve:ym,QuadraticBezierCurve3:uS,SplineCurve:Mm});class hS extends bi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Qu[s.type]().fromJSON(s))}return this}}class eh extends hS{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new xm(this.currentPoint.clone(),new ne(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new ym(this.currentPoint.clone(),new ne(e,t),new ne(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new _m(this.currentPoint.clone(),new ne(e,t),new ne(n,s),new ne(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Mm(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){const l=new Yh(e,t,n,s,r,a,o,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class $h extends Ht{constructor(e=[new ne(0,-.5),new ne(.5,0),new ne(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Kt(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],u=1/t,h=new I,d=new ne,f=new I,g=new I,v=new I;let m=0,p=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(g)}for(let _=0;_<=t;_++){const y=n+_*u*s,x=Math.sin(y),P=Math.cos(y);for(let E=0;E<=e.length-1;E++){h.x=e[E].x*x,h.y=e[E].y,h.z=e[E].x*P,a.push(h.x,h.y,h.z),d.x=_/t,d.y=E/(e.length-1),o.push(d.x,d.y);const A=c[3*E+0]*x,C=c[3*E+1],S=c[3*E+0]*P;l.push(A,C,S)}}for(let _=0;_<t;_++)for(let y=0;y<e.length-1;y++){const x=y+_*e.length,P=x,E=x+e.length,A=x+e.length+1,C=x+1;r.push(P,E,C),r.push(A,C,E)}this.setIndex(r),this.setAttribute("position",new Et(a,3)),this.setAttribute("uv",new Et(o,2)),this.setAttribute("normal",new Et(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $h(e.points,e.segments,e.phiStart,e.phiLength)}}class ia extends $h{constructor(e=1,t=1,n=4,s=8){const r=new eh;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new ia(e.radius,e.length,e.capSegments,e.radialSegments)}}class Vt extends Ht{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;_(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Et(h,3)),this.setAttribute("normal",new Et(d,3)),this.setAttribute("uv",new Et(f,2));function _(){const x=new I,P=new I;let E=0;const A=(t-e)/n;for(let C=0;C<=r;C++){const S=[],M=C/r,R=M*(t-e)+e;for(let F=0;F<=s;F++){const k=F/s,B=k*c+o,Y=Math.sin(B),G=Math.cos(B);P.x=R*Y,P.y=-M*n+m,P.z=R*G,h.push(P.x,P.y,P.z),x.set(Y,A,G).normalize(),d.push(x.x,x.y,x.z),f.push(k,1-M),S.push(g++)}v.push(S)}for(let C=0;C<s;C++)for(let S=0;S<r;S++){const M=v[S][C],R=v[S+1][C],F=v[S+1][C+1],k=v[S][C+1];(e>0||S!==0)&&(u.push(M,R,k),E+=3),(t>0||S!==r-1)&&(u.push(R,F,k),E+=3)}l.addGroup(p,E,0),p+=E}function y(x){const P=g,E=new ne,A=new I;let C=0;const S=x===!0?e:t,M=x===!0?1:-1;for(let F=1;F<=s;F++)h.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const R=g;for(let F=0;F<=s;F++){const B=F/s*c+o,Y=Math.cos(B),G=Math.sin(B);A.x=S*G,A.y=m*M,A.z=S*Y,h.push(A.x,A.y,A.z),d.push(0,M,0),E.x=Y*.5+.5,E.y=G*.5*M+.5,f.push(E.x,E.y),g++}for(let F=0;F<s;F++){const k=P+F,B=R+F;x===!0?u.push(B,B+1,k):u.push(B+1,B,k),C+=3}l.addGroup(p,C,x===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wi extends Vt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Wi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Kc extends Ht{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),l(n),u(),this.setAttribute("position",new Et(r,3)),this.setAttribute("normal",new Et(r.slice(),3)),this.setAttribute("uv",new Et(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const y=new I,x=new I,P=new I;for(let E=0;E<t.length;E+=3)f(t[E+0],y),f(t[E+1],x),f(t[E+2],P),c(y,x,P,_)}function c(_,y,x,P){const E=P+1,A=[];for(let C=0;C<=E;C++){A[C]=[];const S=_.clone().lerp(x,C/E),M=y.clone().lerp(x,C/E),R=E-C;for(let F=0;F<=R;F++)F===0&&C===E?A[C][F]=S:A[C][F]=S.clone().lerp(M,F/R)}for(let C=0;C<E;C++)for(let S=0;S<2*(E-C)-1;S++){const M=Math.floor(S/2);S%2===0?(d(A[C][M+1]),d(A[C+1][M]),d(A[C][M])):(d(A[C][M+1]),d(A[C+1][M+1]),d(A[C+1][M]))}}function l(_){const y=new I;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(_),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function u(){const _=new I;for(let y=0;y<r.length;y+=3){_.x=r[y+0],_.y=r[y+1],_.z=r[y+2];const x=m(_)/2/Math.PI+.5,P=p(_)/Math.PI+.5;a.push(x,1-P)}g(),h()}function h(){for(let _=0;_<a.length;_+=6){const y=a[_+0],x=a[_+2],P=a[_+4],E=Math.max(y,x,P),A=Math.min(y,x,P);E>.9&&A<.1&&(y<.2&&(a[_+0]+=1),x<.2&&(a[_+2]+=1),P<.2&&(a[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,y){const x=_*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function g(){const _=new I,y=new I,x=new I,P=new I,E=new ne,A=new ne,C=new ne;for(let S=0,M=0;S<r.length;S+=9,M+=6){_.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),E.set(a[M+0],a[M+1]),A.set(a[M+2],a[M+3]),C.set(a[M+4],a[M+5]),P.copy(_).add(y).add(x).divideScalar(3);const R=m(P);v(E,M+0,_,R),v(A,M+2,y,R),v(C,M+4,x,R)}}function v(_,y,x,P){P<0&&_.x===1&&(a[y]=_.x-1),x.x===0&&x.z===0&&(a[y]=P/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kc(e.vertices,e.indices,e.radius,e.details)}}class So extends eh{constructor(e){super(e),this.uuid=qn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new eh().fromJSON(s))}return this}}const dS={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Sm(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,u,h,d,f;if(n&&(r=vS(i,e,r,t)),i.length>80*t){o=l=i[0],c=u=i[1];for(let g=t;g<s;g+=t)h=i[g],d=i[g+1],h<o&&(o=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-o,u-c),f=f!==0?32767/f:0}return ho(r,a,t,o,c,f,0),a}};function Sm(i,e,t,n,s){let r,a;if(s===RS(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Jf(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Jf(r,i[r],i[r+1],a);return a&&$c(a,a.next)&&(po(a),a=a.next),a}function ir(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&($c(t,t.next)||Ft(t.prev,t,t.next)===0)){if(po(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ho(i,e,t,n,s,r,a){if(!i)return;!a&&r&&SS(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?pS(i,n,s,r):fS(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),po(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=mS(ir(i),e,t),ho(i,e,t,n,s,r,2)):a===2&&gS(i,e,t,n,s,r):ho(ir(i),e,t,n,s,r,1);break}}}function fS(i){const e=i.prev,t=i,n=i.next;if(Ft(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,u=s<r?s<a?s:a:r<a?r:a,h=o<c?o<l?o:l:c<l?c:l,d=s>r?s>a?s:a:r>a?r:a,f=o>c?o>l?o:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&kr(s,o,r,c,a,l,g.x,g.y)&&Ft(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function pS(i,e,t,n){const s=i.prev,r=i,a=i.next;if(Ft(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,u=s.y,h=r.y,d=a.y,f=o<c?o<l?o:l:c<l?c:l,g=u<h?u<d?u:d:h<d?h:d,v=o>c?o>l?o:l:c>l?c:l,m=u>h?u>d?u:d:h>d?h:d,p=th(f,g,e,t,n),_=th(v,m,e,t,n);let y=i.prevZ,x=i.nextZ;for(;y&&y.z>=p&&x&&x.z<=_;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&kr(o,u,c,h,l,d,y.x,y.y)&&Ft(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&kr(o,u,c,h,l,d,x.x,x.y)&&Ft(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&kr(o,u,c,h,l,d,y.x,y.y)&&Ft(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=_;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&kr(o,u,c,h,l,d,x.x,x.y)&&Ft(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function mS(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!$c(s,r)&&bm(s,n,n.next,r)&&fo(s,r)&&fo(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),po(n),po(n.next),n=i=r),n=n.next}while(n!==i);return ir(n)}function gS(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ES(a,o)){let c=wm(a,o);a=ir(a,a.next),c=ir(c,c.next),ho(a,e,t,n,s,r,0),ho(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function vS(i,e,t,n){const s=[];let r,a,o,c,l;for(r=0,a=e.length;r<a;r++)o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=Sm(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(wS(l));for(s.sort(_S),r=0;r<s.length;r++)t=xS(s[r],t);return t}function _S(i,e){return i.x-e.x}function xS(i,e){const t=yS(i,e);if(!t)return e;const n=wm(t,i);return ir(n,n.next),ir(t,t.next)}function yS(i,e){let t=e,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,c=s.x,l=s.y;let u=1/0,h;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&kr(a<l?r:n,a,c,l,a<l?n:r,a,t.x,t.y)&&(h=Math.abs(a-t.y)/(r-t.x),fo(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&MS(s,t)))&&(s=t,u=h)),t=t.next;while(t!==o);return s}function MS(i,e){return Ft(i.prev,i,e.prev)<0&&Ft(e.next,i,i.next)<0}function SS(i,e,t,n){let s=i;do s.z===0&&(s.z=th(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,bS(s)}function bS(i){let e,t,n,s,r,a,o,c,l=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(a>1);return i}function th(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function wS(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function kr(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function ES(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!TS(i,e)&&(fo(i,e)&&fo(e,i)&&AS(i,e)&&(Ft(i.prev,i,e.prev)||Ft(i,e.prev,e))||$c(i,e)&&Ft(i.prev,i,i.next)>0&&Ft(e.prev,e,e.next)>0)}function Ft(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function $c(i,e){return i.x===e.x&&i.y===e.y}function bm(i,e,t,n){const s=nc(Ft(i,e,t)),r=nc(Ft(i,e,n)),a=nc(Ft(t,n,i)),o=nc(Ft(t,n,e));return!!(s!==r&&a!==o||s===0&&tc(i,t,e)||r===0&&tc(i,n,e)||a===0&&tc(t,i,n)||o===0&&tc(t,e,n))}function tc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function nc(i){return i>0?1:i<0?-1:0}function TS(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&bm(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function fo(i,e){return Ft(i.prev,i,i.next)<0?Ft(i,e,i.next)>=0&&Ft(i,i.prev,e)>=0:Ft(i,e,i.prev)<0||Ft(i,i.next,e)<0}function AS(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function wm(i,e){const t=new nh(i.i,i.x,i.y),n=new nh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Jf(i,e,t,n){const s=new nh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function po(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function nh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function RS(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class bs{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return bs.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Zf(e),Qf(n,e);let a=e.length;t.forEach(Zf);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,Qf(n,t[c]);const o=dS.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function Zf(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Qf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Jc extends Ht{constructor(e=new So([new ne(.5,.5),new ne(-.5,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new Et(s,3)),this.setAttribute("uv",new Et(r,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:CS;let y,x=!1,P,E,A,C;p&&(y=p.getSpacedPoints(u),x=!0,d=!1,P=p.computeFrenetFrames(u,!1),E=new I,A=new I,C=new I),d||(m=0,f=0,g=0,v=0);const S=o.extractPoints(l);let M=S.shape;const R=S.holes;if(!bs.isClockWise(M)){M=M.reverse();for(let J=0,re=R.length;J<re;J++){const L=R[J];bs.isClockWise(L)&&(R[J]=L.reverse())}}const k=bs.triangulateShape(M,R),B=M;for(let J=0,re=R.length;J<re;J++){const L=R[J];M=M.concat(L)}function Y(J,re,L){return re||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(re,L)}const G=M.length,Z=k.length;function W(J,re,L){let ke,te,Ee;const he=J.x-re.x,Ge=J.y-re.y,be=L.x-J.x,T=L.y-J.y,b=he*he+Ge*Ge,O=he*T-Ge*be;if(Math.abs(O)>Number.EPSILON){const j=Math.sqrt(b),Q=Math.sqrt(be*be+T*T),q=re.x-Ge/j,Ie=re.y+he/j,me=L.x-T/Q,we=L.y+be/Q,rt=((me-q)*T-(we-Ie)*be)/(he*T-Ge*be);ke=q+he*rt-J.x,te=Ie+Ge*rt-J.y;const ie=ke*ke+te*te;if(ie<=2)return new ne(ke,te);Ee=Math.sqrt(ie/2)}else{let j=!1;he>Number.EPSILON?be>Number.EPSILON&&(j=!0):he<-Number.EPSILON?be<-Number.EPSILON&&(j=!0):Math.sign(Ge)===Math.sign(T)&&(j=!0),j?(ke=-Ge,te=he,Ee=Math.sqrt(b)):(ke=he,te=Ge,Ee=Math.sqrt(b/2))}return new ne(ke/Ee,te/Ee)}const de=[];for(let J=0,re=B.length,L=re-1,ke=J+1;J<re;J++,L++,ke++)L===re&&(L=0),ke===re&&(ke=0),de[J]=W(B[J],B[L],B[ke]);const Me=[];let Ce,$e=de.concat();for(let J=0,re=R.length;J<re;J++){const L=R[J];Ce=[];for(let ke=0,te=L.length,Ee=te-1,he=ke+1;ke<te;ke++,Ee++,he++)Ee===te&&(Ee=0),he===te&&(he=0),Ce[ke]=W(L[ke],L[Ee],L[he]);Me.push(Ce),$e=$e.concat(Ce)}for(let J=0;J<m;J++){const re=J/m,L=f*Math.cos(re*Math.PI/2),ke=g*Math.sin(re*Math.PI/2)+v;for(let te=0,Ee=B.length;te<Ee;te++){const he=Y(B[te],de[te],ke);le(he.x,he.y,-L)}for(let te=0,Ee=R.length;te<Ee;te++){const he=R[te];Ce=Me[te];for(let Ge=0,be=he.length;Ge<be;Ge++){const T=Y(he[Ge],Ce[Ge],ke);le(T.x,T.y,-L)}}}const gt=g+v;for(let J=0;J<G;J++){const re=d?Y(M[J],$e[J],gt):M[J];x?(A.copy(P.normals[0]).multiplyScalar(re.x),E.copy(P.binormals[0]).multiplyScalar(re.y),C.copy(y[0]).add(A).add(E),le(C.x,C.y,C.z)):le(re.x,re.y,0)}for(let J=1;J<=u;J++)for(let re=0;re<G;re++){const L=d?Y(M[re],$e[re],gt):M[re];x?(A.copy(P.normals[J]).multiplyScalar(L.x),E.copy(P.binormals[J]).multiplyScalar(L.y),C.copy(y[J]).add(A).add(E),le(C.x,C.y,C.z)):le(L.x,L.y,h/u*J)}for(let J=m-1;J>=0;J--){const re=J/m,L=f*Math.cos(re*Math.PI/2),ke=g*Math.sin(re*Math.PI/2)+v;for(let te=0,Ee=B.length;te<Ee;te++){const he=Y(B[te],de[te],ke);le(he.x,he.y,h+L)}for(let te=0,Ee=R.length;te<Ee;te++){const he=R[te];Ce=Me[te];for(let Ge=0,be=he.length;Ge<be;Ge++){const T=Y(he[Ge],Ce[Ge],ke);x?le(T.x,T.y+y[u-1].y,y[u-1].x+L):le(T.x,T.y,h+L)}}}K(),ae();function K(){const J=s.length/3;if(d){let re=0,L=G*re;for(let ke=0;ke<Z;ke++){const te=k[ke];Be(te[2]+L,te[1]+L,te[0]+L)}re=u+m*2,L=G*re;for(let ke=0;ke<Z;ke++){const te=k[ke];Be(te[0]+L,te[1]+L,te[2]+L)}}else{for(let re=0;re<Z;re++){const L=k[re];Be(L[2],L[1],L[0])}for(let re=0;re<Z;re++){const L=k[re];Be(L[0]+G*u,L[1]+G*u,L[2]+G*u)}}n.addGroup(J,s.length/3-J,0)}function ae(){const J=s.length/3;let re=0;Pe(B,re),re+=B.length;for(let L=0,ke=R.length;L<ke;L++){const te=R[L];Pe(te,re),re+=te.length}n.addGroup(J,s.length/3-J,1)}function Pe(J,re){let L=J.length;for(;--L>=0;){const ke=L;let te=L-1;te<0&&(te=J.length-1);for(let Ee=0,he=u+m*2;Ee<he;Ee++){const Ge=G*Ee,be=G*(Ee+1),T=re+ke+Ge,b=re+te+Ge,O=re+te+be,j=re+ke+be;Ye(T,b,O,j)}}}function le(J,re,L){c.push(J),c.push(re),c.push(L)}function Be(J,re,L){Xe(J),Xe(re),Xe(L);const ke=s.length/3,te=_.generateTopUV(n,s,ke-3,ke-2,ke-1);ct(te[0]),ct(te[1]),ct(te[2])}function Ye(J,re,L,ke){Xe(J),Xe(re),Xe(ke),Xe(re),Xe(L),Xe(ke);const te=s.length/3,Ee=_.generateSideWallUV(n,s,te-6,te-3,te-2,te-1);ct(Ee[0]),ct(Ee[1]),ct(Ee[3]),ct(Ee[1]),ct(Ee[2]),ct(Ee[3])}function Xe(J){s.push(c[J*3+0]),s.push(c[J*3+1]),s.push(c[J*3+2])}function ct(J){r.push(J.x),r.push(J.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return PS(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Qu[s.type]().fromJSON(s)),new Jc(n,e.options)}}const CS={generateTopUV:function(i,e,t,n,s){const r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],u=e[s*3+1];return[new ne(r,a),new ne(o,c),new ne(l,u)]},generateSideWallUV:function(i,e,t,n,s,r){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new ne(a,1-c),new ne(l,1-h),new ne(d,1-g),new ne(v,1-p)]:[new ne(o,1-c),new ne(u,1-h),new ne(f,1-g),new ne(m,1-p)]}};function PS(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Lc extends Kc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Lc(e.radius,e.detail)}}class Jh extends Kc{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Jh(e.radius,e.detail)}}class Zh extends Ht{constructor(e=new So([new ne(0,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],a=[];let o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Et(s,3)),this.setAttribute("normal",new Et(r,3)),this.setAttribute("uv",new Et(a,2));function l(u){const h=s.length/3,d=u.extractPoints(t);let f=d.shape;const g=d.holes;bs.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const _=g[m];bs.isClockWise(_)===!0&&(g[m]=_.reverse())}const v=bs.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const _=g[m];f=f.concat(_)}for(let m=0,p=f.length;m<p;m++){const _=f[m];s.push(_.x,_.y,0),r.push(0,0,1),a.push(_.x,_.y)}for(let m=0,p=v.length;m<p;m++){const _=v[m],y=_[0]+h,x=_[1]+h,P=_[2]+h;n.push(y,x,P),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return IS(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const a=t[e.shapes[s]];n.push(a)}return new Zh(n,e.curveSegments)}}function IS(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class bn extends Ht{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new I,d=new I,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const _=[],y=p/n;let x=0;p===0&&a===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let P=0;P<=t;P++){const E=P/t;h.x=-e*Math.cos(s+E*r)*Math.sin(a+y*o),h.y=e*Math.cos(a+y*o),h.z=e*Math.sin(s+E*r)*Math.sin(a+y*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(E+x,1-y),_.push(l++)}u.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){const y=u[p][_+1],x=u[p][_],P=u[p+1][_],E=u[p+1][_+1];(p!==0||a>0)&&f.push(y,x,E),(p!==n-1||c<Math.PI)&&f.push(x,P,E)}this.setIndex(f),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(v,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ma extends Ht{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],u=new I,h=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const v=g/s*r,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(v),h.y=(e+t*Math.cos(m))*Math.sin(v),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,_=(s+1)*f+g;a.push(v,m,_),a.push(m,p,_)}this.setIndex(a),this.setAttribute("position",new Et(o,3)),this.setAttribute("normal",new Et(c,3)),this.setAttribute("uv",new Et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ma(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Qh extends oi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fh,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wi extends Qh{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class rn extends oi{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fh,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function ic(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function LS(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function DS(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function ep(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function Em(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class bo{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class NS extends bo{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dr,endingEnd:Dr}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Nr:r=e,o=2*t-n;break;case Rc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Nr:a=e,c=2*n-t;break;case Rc:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,_=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*v+.5*g,x=f*m-f*v;for(let P=0;P!==o;++P)r[P]=p*a[u+P]+_*a[l+P]+y*a[c+P]+x*a[h+P];return r}}class Tm extends bo{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[l+d]*h+a[c+d]*u;return r}}class US extends bo{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ei{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ic(t,this.TimeBufferType),this.values=ic(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ic(e.times,Array),values:ic(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new US(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Tm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new NS(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case oo:t=this.InterpolantFactoryMethodDiscrete;break;case co:t=this.InterpolantFactoryMethodLinear;break;case dl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return oo;case this.InterpolantFactoryMethodLinear:return co;case this.InterpolantFactoryMethodSmooth:return dl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&LS(s))for(let o=0,c=s.length;o!==c;++o){const l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===dl,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(s)c=!0;else{const h=o*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const v=t[h+g];if(v!==t[d+g]||v!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Ei.prototype.TimeBufferType=Float32Array;Ei.prototype.ValueBufferType=Float32Array;Ei.prototype.DefaultInterpolation=co;class ga extends Ei{constructor(e,t,n){super(e,t,n)}}ga.prototype.ValueTypeName="bool";ga.prototype.ValueBufferType=Array;ga.prototype.DefaultInterpolation=oo;ga.prototype.InterpolantFactoryMethodLinear=void 0;ga.prototype.InterpolantFactoryMethodSmooth=void 0;class Am extends Ei{}Am.prototype.ValueTypeName="color";class sa extends Ei{}sa.prototype.ValueTypeName="number";class kS extends bo{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t);let l=e*o;for(let u=l+o;l!==u;l+=4)_n.slerpFlat(r,0,a,l-o,a,l,c);return r}}class ra extends Ei{InterpolantFactoryMethodLinear(e){return new kS(this.times,this.values,this.getValueSize(),e)}}ra.prototype.ValueTypeName="quaternion";ra.prototype.InterpolantFactoryMethodSmooth=void 0;class va extends Ei{constructor(e,t,n){super(e,t,n)}}va.prototype.ValueTypeName="string";va.prototype.ValueBufferType=Array;va.prototype.DefaultInterpolation=oo;va.prototype.InterpolantFactoryMethodLinear=void 0;va.prototype.InterpolantFactoryMethodSmooth=void 0;class aa extends Ei{}aa.prototype.ValueTypeName="vector";class ih{constructor(e="",t=-1,n=[],s=kh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=qn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(OS(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Ei.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const u=DS(c);c=ep(c,1,u),l=ep(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new sa(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(l)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,v){if(f.length!==0){const m=[],p=[];Em(f,m,p,g),m.length!==0&&v.push(new h(d,m,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)f[d[g].morphTargets[v]]=-1;for(const v in f){const m=[],p=[];for(let _=0;_!==d[g].morphTargets.length;++_){const y=d[g];m.push(y.time),p.push(y.morphTarget===v?1:0)}s.push(new sa(".morphTargetInfluence["+v+"]",m,p))}c=f.length*a}else{const f=".bones["+t[h].name+"]";n(aa,f+".position",d,"pos",s),n(ra,f+".quaternion",d,"rot",s),n(aa,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function FS(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return sa;case"vector":case"vector2":case"vector3":case"vector4":return aa;case"color":return Am;case"quaternion":return ra;case"bool":case"boolean":return ga;case"string":return va}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function OS(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=FS(i.type);if(i.times===void 0){const t=[],n=[];Em(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const vs={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class BS{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const zS=new BS;class _a{constructor(e){this.manager=e!==void 0?e:zS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}_a.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ni={};class HS extends Error{constructor(e,t){super(e),this.response=t}}class Rm extends _a{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=vs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ni[e]!==void 0){Ni[e].push({onLoad:t,onProgress:n,onError:s});return}Ni[e]=[],Ni[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Ni[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let v=0;const m=new ReadableStream({start(p){_();function _(){h.read().then(({done:y,value:x})=>{if(y)p.close();else{v+=x.byteLength;const P=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let E=0,A=u.length;E<A;E++){const C=u[E];C.onProgress&&C.onProgress(P)}p.enqueue(x),_()}},y=>{p.error(y)})}}});return new Response(m)}else throw new HS(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{vs.add(e,l);const u=Ni[e];delete Ni[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=Ni[e];if(u===void 0)throw this.manager.itemError(e),l;delete Ni[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Cm extends _a{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=vs.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=lo("img");function c(){u(),vs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class VS extends _a{constructor(e){super(e)}load(e,t,n,s){const r=new $t,a=new Cm(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Zc extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class GS extends Zc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const jl=new qe,tp=new I,np=new I;class ed{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bh,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;tp.setFromMatrixPosition(e.matrixWorld),t.position.copy(tp),np.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(np),t.updateMatrixWorld(),jl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class WS extends ed{constructor(){super(new pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ta*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class XS extends Zc{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new WS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ip=new qe,La=new I,ql=new I;class jS extends ed{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ne(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),La.setFromMatrixPosition(e.matrixWorld),n.position.copy(La),ql.copy(n.position),ql.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ql),n.updateMatrixWorld(),s.makeTranslation(-La.x,-La.y,-La.z),ip.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ip)}}class qS extends Zc{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new jS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class YS extends ed{constructor(){super(new qc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pm extends Zc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new YS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class eo{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class KS extends _a{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=vs.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return vs.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),vs.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});vs.add(e,c),r.manager.itemStart(e)}}class $S{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,s=this.valueSize,r=e*s+s;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,a=s;r!==a;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,s){_n.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){const a=this._workIndex*r;_n.multiplyQuaternionsFlat(e,a,e,t,e,n),_n.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,n,s,r){const a=1-s;for(let o=0;o!==r;++o){const c=t+o;e[c]=e[c]*a+e[n+o]*s}}_lerpAdditive(e,t,n,s,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*s}}}const td="\\[\\]\\.:\\/",JS=new RegExp("["+td+"]","g"),nd="[^"+td+"]",ZS="[^"+td.replace("\\.","")+"]",QS=/((?:WC+[\/:])*)/.source.replace("WC",nd),eb=/(WCOD+)?/.source.replace("WCOD",ZS),tb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nd),nb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nd),ib=new RegExp("^"+QS+eb+tb+nb+"$"),sb=["material","materials","bones","map"];class rb{constructor(e,t,n){const s=n||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class xt{constructor(e,t,n){this.path=t,this.parsedPath=n||xt.parseTrackName(t),this.node=xt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new xt.Composite(e,t,n):new xt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(JS,"")}static parseTrackName(e){const t=ib.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);sb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=xt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[s];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}xt.Composite=rb;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ab{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const r=t.tracks,a=r.length,o=new Array(a),c={endingStart:Dr,endingEnd:Dr};for(let l=0;l!==a;++l){const u=r[l].createInterpolant(null);o[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=s0,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const s=this._mixer,r=s.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case a0:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulateAdditive(o);break;case kh:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let s=this.time+e,r=this._loopCount;const a=n===r0;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(n===i0){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){const o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=Nr,s.endingEnd=Nr):(e?s.endingStart=this.zeroSlopeAtStart?Nr:Dr:s.endingStart=Rc,t?s.endingEnd=this.zeroSlopeAtEnd?Nr:Dr:s.endingEnd=Rc)}_scheduleFading(e,t,n){const s=this._mixer,r=s.time;let a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}}const ob=new Float32Array(1);class cb extends or{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){const d=s[h],f=d.name;let g=u[f];if(g!==void 0)++g.referenceCount,a[h]=g;else{if(g=a[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const v=t&&t._propertyBindings[h].binding.parsedPath;g=new $S(xt.create(n,f,v),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),a[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const s=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const s=this._bindingsByRootAndName,r=this._bindings;let a=s[t];a===void 0&&(a={},s[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Tm(new Float32Array(2),new Float32Array(2),1,ob),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const s=t||this._root,r=s.uuid;let a=typeof e=="string"?ih.findByName(s,e):e;const o=a!==null?a.uuid:e,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=kh),c!==void 0){const h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const u=new ab(this,a,t,n);return this._bindAction(u,l),this._addInactiveAction(u,o,r),u}existingAction(e,t){const n=t||this._root,s=n.uuid,r=typeof e=="string"?ih.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(s,e,r,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ah}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ah);const Rt=Object.assign({q:1,fps:30,perf:0,snd:1,voice:1,look:1},(()=>{try{return JSON.parse(localStorage.getItem("varvet_set")||"{}")}catch{return{}}})()),Im=()=>{try{localStorage.setItem("varvet_set",JSON.stringify(Rt))}catch{}},Lm=[{dpr:1,shadow:0,smap:0,trees:.6},{dpr:1.5,shadow:1,smap:1024,trees:1},{dpr:2,shadow:1,smap:2048,trees:1}];function sp(i,e){if(e===o0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Yu||e===Kp){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Yu)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class lb extends _a{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new pb(t)}),this.register(function(t){return new mb(t)}),this.register(function(t){return new wb(t)}),this.register(function(t){return new Eb(t)}),this.register(function(t){return new Tb(t)}),this.register(function(t){return new vb(t)}),this.register(function(t){return new _b(t)}),this.register(function(t){return new xb(t)}),this.register(function(t){return new yb(t)}),this.register(function(t){return new fb(t)}),this.register(function(t){return new Mb(t)}),this.register(function(t){return new gb(t)}),this.register(function(t){return new bb(t)}),this.register(function(t){return new Sb(t)}),this.register(function(t){return new hb(t)}),this.register(function(t){return new Ab(t)}),this.register(function(t){return new Rb(t)})}load(e,t,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=eo.extractUrlBase(e);a=eo.resolveURL(l,this.path)}else a=eo.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Rm(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Dm){try{a[it.KHR_BINARY_GLTF]=new Cb(e)}catch(h){s&&s(h);return}r=JSON.parse(a[it.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Vb(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case it.KHR_MATERIALS_UNLIT:a[h]=new db;break;case it.KHR_DRACO_MESH_COMPRESSION:a[h]=new Pb(r,this.dracoLoader);break;case it.KHR_TEXTURE_TRANSFORM:a[h]=new Ib;break;case it.KHR_MESH_QUANTIZATION:a[h]=new Lb;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function ub(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const it={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class hb{constructor(e){this.parser=e,this.name=it.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new pe(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],yn);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Pm(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new qS(u),l.distance=h;break;case"spot":l=new XS(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Oi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class db{constructor(){this.name=it.KHR_MATERIALS_UNLIT}getMaterialType(){return wn}extendParams(e,t,n){const s=[];e.color=new pe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],yn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Yt))}return Promise.all(s)}}class fb{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class pb{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ne(o,o)}return Promise.all(r)}}class mb{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class gb{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class vb{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new pe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],yn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Yt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class _b{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class xb{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new pe().setRGB(o[0],o[1],o[2],yn),Promise.all(r)}}class yb{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Mb{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new pe().setRGB(o[0],o[1],o[2],yn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Yt)),Promise.all(r)}}class Sb{constructor(e){this.parser=e,this.name=it.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class bb{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class wb{constructor(e){this.parser=e,this.name=it.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class Eb{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Tb{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Ab{constructor(e){this.name=it.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}}class Rb{constructor(e){this.name=it.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==Vn.TRIANGLES&&l.mode!==Vn.TRIANGLE_STRIP&&l.mode!==Vn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(const g of h){const v=new qe,m=new I,p=new _n,_=new I(1,1,1),y=new uo(g.geometry,g.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&_.fromBufferAttribute(c.SCALE,x),y.setMatrixAt(x,v.compose(m,p,_));for(const x in c)if(x==="_COLOR_0"){const P=c[x];y.instanceColor=new Ju(P.array,P.itemSize,P.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);Ut.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Dm="glTF",Da=12,rp={JSON:1313821514,BIN:5130562};class Cb{constructor(e){this.name=it.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Da),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Dm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Da,r=new DataView(e,Da);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===rp.JSON){const l=new Uint8Array(e,Da+a,o);this.content=n.decode(l)}else if(c===rp.BIN){const l=Da+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Pb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=it.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const u in a){const h=sh[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=sh[u]||u.toLowerCase();if(a[u]!==void 0){const d=n.accessors[e.attributes[u]],f=Xr[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(const g in f.attributes){const v=f.attributes[g],m=c[g];m!==void 0&&(v.normalized=m)}h(f)},o,l,yn,d)})})}}class Ib{constructor(){this.name=it.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Lb{constructor(){this.name=it.KHR_MESH_QUANTIZATION}}class Nm extends bo{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,g=e*l,v=g-l,m=-2*f+3*d,p=f-d,_=1-m,y=p-d+h;for(let x=0;x!==o;x++){const P=a[v+x+o],E=a[v+x+c]*u,A=a[g+x+o],C=a[g+x]*u;r[x]=_*P+y*E+m*A+p*C}return r}}const Db=new _n;class Nb extends Nm{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return Db.fromArray(r).normalize().toArray(r),r}}const Vn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Xr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ap={9728:vn,9729:mn,9984:Bp,9985:dc,9986:Ha,9987:Vi},op={33071:gs,33648:Ac,10497:tr},Yl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},sh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},us={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ub={CUBICSPLINE:void 0,LINEAR:co,STEP:oo},Kl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function kb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Qh({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Zi})),i.DefaultMaterial}function ks(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Oi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Fb(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Ob(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Bb(i){let e;const t=i.extensions&&i.extensions[it.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+$l(t.attributes):e=i.indices+":"+$l(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+$l(i.targets[n]);return e}function $l(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function rh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function zb(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Hb=new qe;class Vb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ub,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new VS(this.options.manager):this.textureLoader=new KS(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Rm(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return ks(r,o,s),Oi(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,u]of a.children.entries())r(u,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[it.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(eo.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=Yl[s.type],o=Xr[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new wt(l,a,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=Yl[s.type],l=Xr[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let v,m;if(f&&f!==h){const p=Math.floor(d/f),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let y=t.cache.get(_);y||(v=new l(o,p*f,s.count*f/u),y=new qM(v,f/u),t.cache.add(_,y)),m=new Gh(y,c,d%f/u,g)}else o===null?v=new l(s.count*c):v=new l(o,d,s.count*c),m=new wt(v,c,g);if(s.sparse!==void 0){const p=Yl.SCALAR,_=Xr[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,P=new _(a[1],y,s.sparse.count*p),E=new l(a[2],x,s.sparse.count*c);o!==null&&(m=new wt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,C=P.length;A<C;A++){const S=P[A];if(m.setX(S,E[A*c]),c>=2&&m.setY(S,E[A*c+1]),c>=3&&m.setZ(S,E[A*c+2]),c>=4&&m.setW(S,E[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return u.magFilter=ap[d.magFilter]||mn,u.minFilter=ap[d.minFilter]||Vi,u.wrapS=op[d.wrapS]||tr,u.wrapT=op[d.wrapT]||tr,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==vn&&u.minFilter!==mn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=s.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(v){const m=new $t(v);m.needsUpdate=!0,d(m)}),t.load(eo.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),Oi(h,a),h.userData.mimeType=a.mimeType||zb(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[it.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[it.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[it.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new qh,oi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new mm,oi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Qh}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[it.KHR_MATERIALS_UNLIT]){const h=s[it.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new pe(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],yn),o.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,Yt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=en);const u=r.alphaMode||Kl.OPAQUE;if(u===Kl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Kl.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==wn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ne(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==wn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==wn){const h=r.emissiveFactor;o.emissive=new pe().setRGB(h[0],h[1],h[2],yn)}return r.emissiveTexture!==void 0&&a!==wn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Yt)),Promise.all(l).then(function(){const h=new a(o);return r.name&&(h.name=r.name),Oi(h,r),t.associations.set(h,{materials:e}),r.extensions&&ks(s,h,r),h})}createUniqueName(e){const t=xt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[it.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return cp(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],u=Bb(l),h=s[u];if(h)a.push(h.promise);else{let d;l.extensions&&l.extensions[it.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=cp(new Ht,l,t),s[u]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const u=a[c].material===void 0?kb(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const v=u[f],m=a[f];let p;const _=l[f];if(m.mode===Vn.TRIANGLES||m.mode===Vn.TRIANGLE_STRIP||m.mode===Vn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new KM(v,_):new Te(v,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Vn.TRIANGLE_STRIP?p.geometry=sp(p.geometry,Kp):m.mode===Vn.TRIANGLE_FAN&&(p.geometry=sp(p.geometry,Yu));else if(m.mode===Vn.LINES)p=new gm(v,_);else if(m.mode===Vn.LINE_STRIP)p=new jh(v,_);else if(m.mode===Vn.LINE_LOOP)p=new ZM(v,_);else if(m.mode===Vn.POINTS)p=new vm(v,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Ob(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Oi(p,r),m.extensions&&ks(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&ks(s,h[0],r),h[0];const d=new tn;r.extensions&&ks(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new pn(N0.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new qc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Oi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],c=[];for(let l=0,u=a.length;l<u;l++){const h=a[l];if(h){o.push(h);const d=new qe;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Xh(o,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const f=s.channels[h],g=s.samplers[f.sampler],v=f.target,m=v.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,_=s.parameters!==void 0?s.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",_)),l.push(g),u.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],v=h[3],m=h[4],p=[];for(let _=0,y=d.length;_<y;_++){const x=d[_],P=f[_],E=g[_],A=v[_],C=m[_];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const S=n._createAnimationTracks(x,P,E,A,C);if(S)for(let M=0;M<S.length;M++)p.push(S[M])}return new ih(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Hb)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(r.isBone===!0?u=new pm:l.length>1?u=new tn:l.length===1?u=l[0]:u=new Ut,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=a),Oi(u,r),r.extensions&&ks(n,u,r),r.matrix!==void 0){const h=new qe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new tn;n.name&&(r.name=s.createUniqueName(n.name)),Oi(r,n),n.extensions&&ks(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[d,f]of s.associations)(d instanceof oi||d instanceof $t)&&h.set(d,f);return u.traverse(d=>{const f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],o=e.name?e.name:e.uuid,c=[];us[r.path]===us.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(us[r.path]){case us.weights:l=sa;break;case us.rotation:l=ra;break;case us.position:case us.scale:l=aa;break;default:switch(n.itemSize){case 1:l=sa;break;case 2:case 3:default:l=aa;break}break}const u=s.interpolation!==void 0?Ub[s.interpolation]:co,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+us[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=rh(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof ra?Nb:Nm;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Gb(i,e,t){const n=e.attributes,s=new Dn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),o.normalized){const u=rh(Xr[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new I,c=new I;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const v=rh(Xr[d.componentType]);c.multiplyScalar(v)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new Si;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function cp(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(const a in n){const o=sh[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return at.workingColorSpace!==yn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${at.workingColorSpace}" not supported.`),Oi(i,e),Gb(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Fb(i,e.targets,t):i})}const Um=new lb,xa=new Map;function sr(i,e,t="idle"){Um.load("/varvet/models/"+e.file,n=>{const s=n.scene;if(s.traverse(c=>{const l=c;if(!l.isMesh)return;const u=l.material;l.material=new rn({map:u.map,side:en}),l.castShadow=!0,l.receiveShadow=!0,l.frustumCulled=!1}),e.height){const c=new Dn().setFromObject(s),l=c.max.y-c.min.y;l>0&&s.scale.setScalar(e.height/l)}for(const c of[...i.children])i.remove(c);i.add(s),i.userData.realModel=!0;const r=new cb(s),a={};for(const[c,l]of Object.entries(e.anims)){const u=n.animations.find(h=>h.name===l);if(u){for(const h of u.tracks)if(/Hips\.position$/i.test(h.name)){const d=h.values;for(let f=0;f<d.length;f+=3)d[f]=d[0],d[f+2]=d[2]}a[c]=r.clipAction(u)}}const o={mixer:r,actions:a,cur:""};xa.set(i,o),_s(i,t,0)},void 0,n=>console.warn("Kunde inte ladda",e.file,n))}function _s(i,e,t=.35){const n=xa.get(i);if(!n||n.cur===e)return;const s=n.actions[e];if(!s)return;const r=n.actions[n.cur];s.reset().setEffectiveWeight(1).fadeIn(t).play(),r&&r.fadeOut(t),n.cur=e}function lp(i,e,t){var s;const n=(s=xa.get(i))==null?void 0:s.actions[e];n&&(n.timeScale=t)}function Wb(i,e,t="idle",n=1400){const s=xa.get(i);!s||!s.actions[e]||(_s(i,e,.2),s.lock=performance.now()+n,setTimeout(()=>{s.cur===e&&_s(i,t,.3)},n))}const Xb=i=>{var e;return(((e=xa.get(i))==null?void 0:e.lock)||0)>performance.now()};function jb(i){for(const e of xa.values())e.mixer.update(i)}const qb={file:"sven.glb",height:1.8,anims:{idle:"Idle_11",talk:"Stand_and_Chat",walk:"Walking",run:"Running",pick:"Female_Bend_Over_Pick_Up_Inspect",work:"_01a1b7c1_4e5f_70d8_8a3b_cb3eefccb99a",hammer:"_01a1b7c3_a88d_7729_a2f3_067451260fca"}},Yb={file:"spelare_man.glb",height:1.78,anims:{idle:"Idle_11",walk:"Walking",run:"Running",talk:"Listening_Gesture",pick:"Female_Bend_Over_Pick_Up_Inspect",jump:"Regular_Jump",sit:"Chair_Sit_Idle_M",work:"_01a1b7c1_4e5f_70d8_8a3b_cb3eefccb99a",hammer:"_01a1b7c3_a88d_7729_a2f3_067451260fca"}},Kb={file:"spelare_kvinna.glb",height:1.7,anims:{idle:"Idle_15",walk:"Walking_Woman",run:"Running",talk:"Talk_with_Left_Hand_on_Hip",pick:"Female_Bend_Over_Pick_Up_Inspect",jump:"Regular_Jump",sit:"Chair_Sit_Idle_F",work:"_01a1b7c1_4e5f_70d8_8a3b_cb3eefccb99a",hammer:"_01a1b7c3_a88d_7729_a2f3_067451260fca"}},km={man:Yb,kvinna:Kb},$b={file:"majken.glb",height:1.66,anims:{idle:"Idle_6",talk:"Talk_with_Left_Hand_on_Hip",walk:"Walking",stroll:"Thoughtful_Walk",run:"Running",sit:"Chair_Sit_Idle_F"}};function id(i,e,t){Um.load("/varvet/models/"+e,n=>{const s=n.scene;s.traverse(c=>{const l=c;if(!l.isMesh)return;const u=l.material;l.material=new rn({map:u.map,side:en}),l.castShadow=!0,l.receiveShadow=!0});const r=new Dn().setFromObject(s),a=r.getSize(new I);if(s.scale.setScalar(t.fit/Math.max(a.x,a.z)),t.rotY&&(s.rotation.y=t.rotY),s.position.y=t.y||0,t.ground!=null){s.updateMatrixWorld(!0);const c=new Dn().setFromObject(s);s.position.y+=t.ground-c.min.y}if(t.hideChildren)for(const c of i.children)c.visible=!1;const o=i;if(o.isMesh&&(o.geometry=new Ht),i.add(s),i.userData.realModel=!0,t.waterMask!=null&&i.add(Jb(s,t.waterMask)),t.liner){const c=s.clone(!0);c.scale.multiplyScalar(t.liner),c.traverse(u=>{const h=u;h.isMesh&&(h.castShadow=!1)});const l=new Dn().setFromObject(s).getCenter(new I);i.worldToLocal(l),c.position.y=s.position.y+(l.y-s.position.y)*(1-t.liner),i.add(c)}},void 0,n=>console.warn("Kunde inte ladda",e,n))}function Jb(i,e){i.updateMatrix();const t=[],n=new I;i.traverse(f=>{const g=f;if(!g.isMesh)return;const v=g.geometry.attributes.position;g.updateMatrix();for(let m=0;m<v.count;m+=3)n.fromBufferAttribute(v,m).applyMatrix4(g.matrix).applyMatrix4(i.matrix),t.push([n.x,n.z])}),t.sort((f,g)=>f[0]-g[0]||f[1]-g[1]);const s=(f,g,v)=>(g[0]-f[0])*(v[1]-f[1])-(g[1]-f[1])*(v[0]-f[0]),r=[],a=[];for(const f of t){for(;r.length>=2&&s(r[r.length-2],r[r.length-1],f)<=0;)r.pop();r.push(f)}for(let f=t.length-1;f>=0;f--){const g=t[f];for(;a.length>=2&&s(a[a.length-2],a[a.length-1],g)<=0;)a.pop();a.push(g)}const o=r.slice(0,-1).concat(a.slice(0,-1)),c=o.reduce((f,g)=>f+g[0],0)/o.length,l=o.reduce((f,g)=>f+g[1],0)/o.length,u=new So(o.map(([f,g])=>new ne(c+(f-c)*.96,-(l+(g-l)*.96)))),h=new Zh(u);h.rotateX(-Math.PI/2),h.translate(0,e,0);const d=new Te(h,new wn({colorWrite:!1,depthWrite:!0,transparent:!0,side:en}));return d.renderOrder=.5,d.frustumCulled=!1,d}const Zb={file:"leo.glb",height:1.78,anims:{idle:"Idle_9",talk:"Stand_and_Chat",walk:"Walking",run:"Running",pick:"Female_Bend_Over_Pick_Up_Inspect",work:"_01a1b7c1_4e5f_70d8_8a3b_cb3eefccb99a",hammer:"_01a1b7c3_a88d_7729_a2f3_067451260fca"}},Qb={file:"ingrid.glb",height:1.64,anims:{idle:"Idle_4",talk:"Talk_with_Left_Hand_on_Hip",walk:"Walking",run:"Running",sit:"Chair_Sit_Idle_F",pick:"Female_Bend_Over_Pick_Up_Inspect"}},e1={file:"karin.glb",height:1.68,anims:{idle:"Idle_7",talk:"Talk_with_Left_Hand_on_Hip",walk:"Walking",run:"Running",sit:"Chair_Sit_Idle_F",pick:"Female_Bend_Over_Pick_Up_Inspect"}},t1={file:"ake.glb",height:1.74,anims:{idle:"Idle_11",talk:"Talk_Passionately",walk:"Walking",run:"Running",pick:"Female_Bend_Over_Pick_Up_Inspect",work:"_01a1b7c1_4e5f_70d8_8a3b_cb3eefccb99a",hammer:"_01a1b7c3_a88d_7729_a2f3_067451260fca"}},n1="/varvet/tex/",i1=new Cm,up=new Map;function s1(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function hi(i,e,t=160,n=6,s=34,r=.22){return(a,o,c)=>{a.fillStyle=i,a.fillRect(0,0,o,o);for(let l=0;l<t;l++){const u=c()*o,h=c()*o,d=n+c()*(s-n),f=e[l%e.length];for(const g of[-o,0,o])for(const v of[-o,0,o]){const m=a.createRadialGradient(u+g,h+v,0,u+g,h+v,d);m.addColorStop(0,f),m.addColorStop(1,"rgba(0,0,0,0)"),a.globalAlpha=r*(.5+c()*.8),a.fillStyle=m,a.fillRect(u+g-d,h+v-d,d*2,d*2)}}a.globalAlpha=1}}function r1(i,e,t=256){const n=document.createElement("canvas");return n.width=n.height=t,i(n.getContext("2d"),t,s1(e)),n}function di(i,e,t=1,n=Yt){const s=up.get(i);if(s)return s;const r=new $t(r1(e,t));r.wrapS=r.wrapT=tr,r.colorSpace=n,r.anisotropy=4,r.needsUpdate=!0,up.set(i,r);const a=(o,c)=>i1.load(n1+i+o,l=>{r.dispose(),r.image=l,r.needsUpdate=!0,r.userData.real=!0},void 0,()=>c&&c());return a(".webp",()=>a(".png")),r}const vi={grass:()=>di("grass",hi("#86b35f",["#6f9e4c","#9cc46e","#5e8c43","#b3cf7d"],220,5,30),11),granite:()=>di("granite",hi("#c4a69c",["#a98a82","#d8bdb2","#8f7471","#e6d3c9"],200,4,26,.3),12),sand:()=>di("sand",hi("#e9d8ad",["#dcc795","#f3e6c4","#cdb684"],160,4,24),13),dirt:()=>di("dirt",hi("#b39d7b",["#9c8565","#c9b592","#8a7457","#d6c6a5"],220,3,18,.28),14),planks:()=>di("planks",hi("#8d7a63",["#7a6852","#a08d74","#6b5a47"],160,3,20),16),needles:()=>di("needles",hi("#3f7a45",["#2f6338","#5a9455","#26532f"],220,4,18),17),leaves:()=>di("leaves",hi("#8cbf55",["#6fa244","#b2d671","#5b8c3a"],220,4,18),18),pinebark:()=>di("pinebark",hi("#9a5b3c",["#7d4a33","#b9704a","#6e6058"],160,3,14),19),birchbark:()=>di("birchbark",hi("#ece6da",["#d9d0c0","#f6f2ea","#3b3734"],120,2,10),20),paper:()=>di("paper",hi("#f4efe4",["#e9e1d0","#fbf8f1","#e2d8c4"],300,2,16,.35),15)},Fm={value:1};function a1(){const i=new rn({vertexColors:!0}),e={tGrass:{value:vi.grass()},tRock:{value:vi.granite()},tSand:{value:vi.sand()},tDirt:{value:vi.dirt()},uScale:{value:.11},uDetail:Fm};return i.onBeforeCompile=t=>{Object.assign(t.uniforms,e),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 splat;
varying vec4 vSplat;
varying vec3 vWP;
varying vec3 vWN;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSplat = splat;
vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;
vWN = normalize(mat3(modelMatrix) * objectNormal);`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D tGrass, tRock, tSand, tDirt;
uniform float uScale, uDetail;
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
        // detaljlager: samma texturer i högre frekvens ger skärpa nära kameran utan att ändra färgen
        if (uDetail > 0.5) {
          vec2 du = uv * 4.7 + vec2(0.37, 0.61);
          vec3 dt = texture2D(tGrass, du).rgb * w.x + texture2D(tRock, du * 0.8).rgb * w.y + texture2D(tSand, du).rgb * w.z + texture2D(tDirt, du).rgb * w.w;
          float l = dot(dt, vec3(0.299, 0.587, 0.114)), lb = dot(tex, vec3(0.299, 0.587, 0.114));
          tex *= clamp(1.0 + (l - lb) * 1.1, 0.7, 1.3);
        }
        diffuseColor.rgb = tex * vColor;`)},i}const o1="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",c1=`
uniform sampler2D tScene; uniform sampler2D tDepth; uniform sampler2D tPaper;
uniform vec2 uRes; uniform float uNear, uFar, uStrength, uClean;
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
  if (uClean > 0.5) {
    // skarp stil: skärpa (oskarp mask), lätt kontrast och mättnad, svag kontur, ingen papperseffekt
    vec3 blur = (cl + cr + cu + cd) * 0.25;
    col = c + (c - blur) * 0.35;
    col = mix(vec3(luma(col)), col, 1.03);
    col = (col - 0.5) * 1.03 + 0.5;
    col = mix(col, col * vec3(0.55, 0.5, 0.48), edge * 0.22);
    vec2 v0 = vUv - 0.5; col *= 1.0 - dot(v0, v0) * 0.18;
    gl_FragColor = vec4(max(col, 0.0), 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    return;
  }
  col = mix(vec3(luma(col)), col, 1.08);                       // lite mer mättnad
  col *= 1.0 - lap * 0.9 * uStrength;                           // mörkare pigmentkant
  col = mix(col, col * vec3(0.42, 0.34, 0.30), edge * 0.55 * uStrength); // varm, mjuk kontur
  col *= mix(1.0, grain * 1.04, 0.3 * uStrength);              // pappersstruktur
  col = mix(col, vec3(0.98, 0.96, 0.91), 0.035 * uStrength);    // lätt tvättad ton
  vec2 v = vUv - 0.5; col *= 1.0 - dot(v, v) * 0.35 * uStrength; // vinjett
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;class l1{constructor(){Ri(this,"enabled",!0);Ri(this,"strength",1);Ri(this,"clean",!0);Ri(this,"rt");Ri(this,"quad");Ri(this,"qScene",new fm);Ri(this,"qCam",new qc(-1,1,1,-1,0,1));Ri(this,"mat");this.rt=new Es(4,4,{depthTexture:new Hh(4,4),samples:4,type:fa}),this.mat=new kn({vertexShader:o1,fragmentShader:c1,depthTest:!1,depthWrite:!1,uniforms:{tScene:{value:this.rt.texture},tDepth:{value:this.rt.depthTexture},tPaper:{value:vi.paper()},uRes:{value:new ne(4,4)},uNear:{value:.3},uFar:{value:900},uStrength:{value:1},uClean:{value:1}}}),this.quad=new Te(new yi(2,2),this.mat),this.quad.frustumCulled=!1,this.qScene.add(this.quad)}render(e,t,n){if(!this.enabled){e.setRenderTarget(null),e.render(t,n);return}const s=e.getDrawingBufferSize(new ne);(s.x!==this.rt.width||s.y!==this.rt.height)&&(this.rt.setSize(s.x,s.y),this.mat.uniforms.uRes.value.copy(s)),this.mat.uniforms.uNear.value=n.near,this.mat.uniforms.uFar.value=n.far,this.mat.uniforms.uStrength.value=this.strength,this.mat.uniforms.uClean.value=this.clean?1:0,e.setRenderTarget(this.rt),e.render(t,n),e.setRenderTarget(null),e.render(this.qScene,this.qCam)}}function sd(i){const e=vi.planks();i.onBeforeCompile=t=>{t.uniforms.tPlanks={value:e},t.uniforms.tNeedles={value:vi.needles()},t.uniforms.tLeaves={value:vi.leaves()},t.uniforms.tPineBark={value:vi.pinebark()},t.uniforms.tBirchBark={value:vi.birchbark()},t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
        }`)}}const Dc={t:{value:0},w:{value:1}};function rd(i,e){const t=new rn({vertexColors:!0});sd(t);const n=t.onBeforeCompile;return t.onBeforeCompile=(s,r)=>{s.uniforms.uWT=Dc.t,s.uniforms.uWW=Dc.w,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
uniform float uWT, uWW;`).replace("#include <begin_vertex>",`#include <begin_vertex>
{ float hh = max(0.0, transformed.y - ${i.toFixed(2)}); vec3 ip = vec3(0.0);
#ifdef USE_INSTANCING
ip = instanceMatrix[3].xyz;
#endif
float ph = uWT * 1.6 + ip.x * 0.21 + ip.z * 0.17; float sw = hh * hh * ${e.toFixed(4)} * uWW;
transformed.x += sin(ph) * sw + sin(ph * 2.3 + 1.0) * sw * 0.3; transformed.z += cos(ph * 0.8) * sw * 0.7; }`),n.call(t,s,r)},t.customProgramCacheKey=()=>"sway"+i+"_"+e,t}const u1=3;let pi=1,qs=!0,to=0,Fr=0,Wa=0,Ln=null,Nc=60;function h1(i,e){Ln=i,Nc=e,pi=1,qs=i.shadowsAllowed,to=0,Fr=0,Wa=0,Xa()}function d1(i){Nc=i,to=0,Fr=0}function ah(){return{scale:pi,shadows:qs,dpr:Ln?Ln.renderer.getPixelRatio():1}}function Xa(){if(!Ln)return;const i=Math.min(window.devicePixelRatio||1,Ln.maxDpr),e=Math.max(.6,Math.round(i*pi*20)/20);Math.abs(Ln.renderer.getPixelRatio()-e)>.01&&(Ln.renderer.setPixelRatio(e),Ln.renderer.setSize(window.innerWidth,window.innerHeight,!1)),Ln.setShadows(qs&&Ln.shadowsAllowed)}function f1(i){if(!Ln||i<=0||i>.5||(to++,Fr+=i,Fr<u1))return;const e=to/Fr;to=0,Fr=0,e<Nc*.88?(Wa=0,pi>.6?(pi=Math.max(.6,pi-.15),Xa()):qs&&Ln.shadowsAllowed&&(qs=!1,Xa())):e>Nc*.97?++Wa>=3&&(Wa=0,!qs&&Ln.shadowsAllowed&&pi>=.75?(qs=!0,Xa()):pi<1&&(pi=Math.min(1,pi+.1),Xa())):Wa=0}const rr=document.getElementById("c"),xn=new jM({canvas:rr,antialias:!0,powerPreference:"high-performance"});xn.outputColorSpace=Yt;xn.toneMapping=Fp;xn.toneMappingExposure=1.05;xn.shadowMap.type=kp;const ze=new fm,p1=new pe("#9fd0ea"),Om=new pe("#bfdced");ze.fog=new Vh(Om,90,420);const Wt=new pn(55,1,.3,900);{const i=new bn(800,24,12),e=new kn({side:gn,depthWrite:!1,fog:!1,uniforms:{top:{value:new pe("#4f9ad6")},mid:{value:p1},bot:{value:Om}},vertexShader:"varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform vec3 top,mid,bot;varying vec3 vP;void main(){float y=vP.y;vec3 c=y>0.?mix(mid,top,pow(clamp(y*1.6,0.,1.),.8)):bot;c=mix(bot,c,smoothstep(-.02,.12,y));gl_FragColor=vec4(c,1.);}"}),t=new Te(i,e);t.renderOrder=-1,t.frustumCulled=!1,ze.add(t),ze.userData.sky=t}const oh=new GS("#e8f1f4","#8f9c6c",1.25);ze.add(oh);const yt=new Pm("#ffe8c4",2);yt.position.set(60,90,40);ze.add(yt);ze.add(yt.target);yt.shadow.camera.left=-32;yt.shadow.camera.right=32;yt.shadow.camera.top=32;yt.shadow.camera.bottom=-32;yt.shadow.camera.near=10;yt.shadow.camera.far=220;yt.shadow.bias=-6e-4;yt.shadow.normalBias=.04;let fi=Lm[Rt.q];function Bm(){fi=Lm[Rt.q];const i=Math.min(devicePixelRatio||1,fi.dpr);xn.setPixelRatio(i),xn.shadowMap.enabled=!!fi.shadow,yt.castShadow=!!fi.shadow,fi.shadow&&(yt.shadow.mapSize.set(fi.smap,fi.smap),yt.shadow.map&&(yt.shadow.map.dispose(),yt.shadow.map=null)),ze.traverse(e=>{e.material&&e.material.needsUpdate!==void 0&&(e.material.needsUpdate=!0)}),zm(),h1({renderer:xn,maxDpr:fi.dpr,shadowsAllowed:!!fi.shadow,setShadows:m1},Rt.fps)}function m1(i){xn.shadowMap.enabled===i&&yt.castShadow===i||(xn.shadowMap.enabled=i,yt.castShadow=i,ze.traverse(e=>{e.material&&(e.material.needsUpdate=!0)}))}function zm(){xn.setSize(innerWidth,innerHeight,!1),Wt.aspect=innerWidth/innerHeight,Wt.fov=innerWidth<innerHeight?68:55,Wt.userData.baseFov=Wt.fov,Wt.updateProjectionMatrix()}addEventListener("resize",zm);const Jl=new l1;function g1(){Jl.enabled=Rt.q>=1,Jl.clean=Rt.look===1,Fm.value=Rt.look===1?1:0,Jl.render(xn,ze,Wt)}const Qc=document.getElementById("perf");let sc=0,rc=0,hp=0,dp=0,Zl=0;function v1(i,e){if(sc++,rc+=i,Zl+=e,rc>=.5&&(hp=sc/rc,dp=Zl/sc,sc=0,rc=0,Zl=0,Rt.perf)){const t=xn.info;Qc.textContent=`FPS   ${hp.toFixed(0)} / ${Rt.fps}
CPU   ${dp.toFixed(1)} ms
Anrop ${t.render.calls}
Trian ${(t.render.triangles/1e3).toFixed(0)}k
DPR   ${xn.getPixelRatio().toFixed(2)}
Auto  ${Math.round(ah().scale*100)}% ${ah().shadows?"skugg":"utan skugg"}
Kval  ${["Låg","Medel","Hög"][Rt.q]}`}}function ad(i){const e=new Uint8Array(512),t=el(i),n=[...Array(256).keys()];for(let o=255;o>0;o--){const c=Math.floor(t()*(o+1));[n[o],n[c]]=[n[c],n[o]]}for(let o=0;o<512;o++)e[o]=n[o&255];const s=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],r=.5*(Math.sqrt(3)-1),a=(3-Math.sqrt(3))/6;return(o,c)=>{const l=(o+c)*r,u=Math.floor(o+l),h=Math.floor(c+l),d=(u+h)*a,f=o-(u-d),g=c-(h-d),v=f>g?1:0,m=1-v,p=f-v+a,_=g-m+a,y=f-1+2*a,x=g-1+2*a,P=u&255,E=h&255,A=(C,S,M,R)=>{let F=.5-M*M-R*R;if(F<0)return 0;F*=F;const k=s[e[C+e[S]]&7];return F*F*(k[0]*M+k[1]*R)};return 70*(A(P,E,f,g)+A(P+v,E+m,p,_)+A(P+1,E+1,y,x))}}function el(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const _1=ad(7),Ys=ad(19),Hm=ad(31),ch=(i,e,t=4)=>{let n=0,s=1,r=.5;for(let a=0;a<t;a++)n+=r*_1(i*s,e*s),s*=2.03,r*=.5;return n},Yi=(i,e,t)=>i<e?e:i>t?t:i,Ql=(i,e,t)=>i+(e-i)*t,jr=(i,e,t)=>{const n=Yi((t-i)/(e-i),0,1);return n*n*(3-2*n)},x1={"#9a7a55":1,"#a47c52":1,"#8f6a45":1,"#c49a66":1,"#b88b58":1,"#6b5137":.8,"#5e4630":.8,"#7a5136":4,"#2f6b3d":2,"#357a43":2,"#3d8a4b":2,"#efece4":5,"#8cc35b":3,"#9bcf66":3,"#8a6646":.7,"#9a7552":.7,"#b8392b":.55,"#6e1f17":.55,"#e9e4d8":.35,"#f4f1ea":.35};function ce(i,e,t){const n=i.index?i.toNonIndexed():i,s=new pe(e),r=n.attributes.position.count,a=new Float32Array(r*3);for(let o=0;o<r;o++)a[o*3]=s.r,a[o*3+1]=s.g,a[o*3+2]=s.b;return n.setAttribute("color",new wt(a,3)),n.setAttribute("mat",new wt(new Float32Array(r).fill(t??(x1[String(e).toLowerCase()]||0)),1)),n.deleteAttribute("uv"),n}function Nt(i){let e=0;for(const c of i)e+=c.attributes.position.count;const t=new Float32Array(e*3),n=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e);let a=0;for(const c of i)t.set(c.attributes.position.array,a*3),n.set(c.attributes.normal.array,a*3),s.set(c.attributes.color.array,a*3),c.attributes.mat&&r.set(c.attributes.mat.array,a),a+=c.attributes.position.count;const o=new Ht;return o.setAttribute("position",new wt(t,3)),o.setAttribute("normal",new wt(n,3)),o.setAttribute("color",new wt(s,3)),o.setAttribute("mat",new wt(r,1)),o.computeBoundingSphere(),o}const Se=(i,e,t,n,s=0,r=1)=>(i.scale(r,r,r),s&&i.rotateY(s),i.translate(e,t,n),i),Xt=new rn({vertexColors:!0}),lh=new rn({vertexColors:!0,side:en});sd(Xt);sd(lh);const ee=i=>document.getElementById(i),Yn={mx:0,mz:0,keys:{}},He={yaw:Math.PI,pitch:.38,dist:8.5,tYaw:Math.PI,tPitch:.38},xc=document.getElementById("joy"),Vm=document.getElementById("knob");let mo=null,uh={x:0,y:0},go=null,yc={x:0,y:0};const Na=60;rr.addEventListener("pointerdown",i=>{i.clientX<innerWidth*.45&&mo===null?(mo=i.pointerId,uh={x:i.clientX,y:i.clientY},xc.style.display="block",xc.style.left=i.clientX+"px",xc.style.top=i.clientY+"px",Vm.style.transform="",hh()):go===null&&(go=i.pointerId,yc={x:i.clientX,y:i.clientY},hh()),rr.setPointerCapture(i.pointerId)});rr.addEventListener("pointermove",i=>{if(i.pointerId===mo){let e=i.clientX-uh.x,t=i.clientY-uh.y;const n=Math.hypot(e,t);n>Na&&(e*=Na/n,t*=Na/n),Vm.style.transform=`translate(${e}px,${t}px)`,Yn.mx=e/Na,Yn.mz=t/Na}else if(i.pointerId===go){const e=i.clientX-yc.x,t=i.clientY-yc.y;yc={x:i.clientX,y:i.clientY},He.tYaw-=e*.006,He.tPitch=Yi(He.tPitch+t*.004,.08,1.25)}});const Gm=i=>{i.pointerId===mo&&(mo=null,Yn.mx=Yn.mz=0,xc.style.display="none"),i.pointerId===go&&(go=null)};rr.addEventListener("pointerup",Gm);rr.addEventListener("pointercancel",Gm);rr.addEventListener("wheel",i=>{He.dist=Yi(He.dist+i.deltaY*.01,4,18)},{passive:!0});addEventListener("keydown",i=>{Yn.keys[i.code]=1,hh()});addEventListener("keyup",i=>{Yn.keys[i.code]=0});let fp=0;function hh(){fp||(fp=1,setTimeout(()=>document.getElementById("hint").style.opacity=0,2500))}const _i=[{x:0,z:0,rx:95,rz:72,peak:15},{x:175,z:-120,rx:46,rz:38,peak:9},{x:-160,z:140,rx:30,rz:26,peak:6},{x:120,z:150,rx:14,rz:12,peak:4}],lt={x:0,z:44,r:18,h:1.3};function y1(i,e){let t=-1;for(const s of _i){const r=(i-s.x)/s.rx,a=(e-s.z)/s.rz,o=.18*ch(i*.012+s.x,e*.012+s.z,3),l=(1-(Math.sqrt(r*r+a*a)+o))*(s.peak/6);t=Math.max(t,l)}let n;if(t>0){const s=jr(0,1.2,t);n=t*6*(.55+.45*s),n+=s*(ch(i*.03,e*.03,4)*4.5+Math.abs(Ys(i*.08,e*.08))*1.6)}else n=t*9;return n}function ms(i,e){let t=y1(i,e);const n=Math.hypot(i-lt.x,e-lt.z),s=1-jr(lt.r,lt.r+10,n);if(t=Ql(t,lt.h+Hm(i*.1,e*.1)*.15,s),Math.abs(i+12)<5&&e>lt.z+8&&e<lt.z+48){const r=1-jr(3,5,Math.abs(i+12)),a=Ql(lt.h,-2.6,Yi((e-(lt.z+10))/30,0,1));t=Math.min(t,Ql(t,a,r))}return t}const Bt=460,un=230,xs=new Float32Array((un+1)*(un+1));function En(i,e){const t=(i+Bt/2)/Bt*un,n=(e+Bt/2)/Bt*un;if(t<0||n<0||t>=un||n>=un)return-9;const s=t|0,r=n|0,a=t-s,o=n-r,c=xs[r*(un+1)+s],l=xs[r*(un+1)+s+1],u=xs[(r+1)*(un+1)+s],h=xs[(r+1)*(un+1)+s+1];return a+o<1?c+(l-c)*a+(u-c)*o:h+(u-h)*(1-a)+(l-h)*(1-o)}function M1(){const i=new yi(Bt,Bt,un,un);i.rotateX(-Math.PI/2);const e=i.attributes.position,t=new Float32Array(e.count*3);for(let o=0;o<e.count;o++){const c=e.getX(o),l=e.getZ(o),u=ms(c,l);e.setY(o,u),xs[o]=u}i.computeVertexNormals();const n=i.attributes.normal,s=new Float32Array(e.count*4);for(let o=0;o<e.count;o++){const c=e.getX(o),l=e.getZ(o),u=e.getY(o),h=n.getY(o),d=Hm(c*.05,l*.05);let f=0,g=0,v=0,m=0;if(u<-.4){v=1;const _=1-Yi((-u-.4)/4,0,1)*.45;t[o*3]=_*.86,t[o*3+1]=_*.95,t[o*3+2]=_*.95}else{const p=1-jr(.5+d*.4,1.3+d*.4,u),_=Yi((.86-h)*5+(u>9?.4:0)+Ys(c*.04,l*.04)*.5,0,1),y=jr(.3,.65,_)*(1-p*.7);v=p*(1-y),g=y,f=(1-p)*(1-y);const x=Math.hypot(c-lt.x,l-lt.z);if(x<lt.r+4&&u>.4){const E=(1-jr(lt.r-10,lt.r+2,x))*.75*(.7+.3*Ys(c*.15,l*.15));m=E,f*=1-E,v*=1-E}const P=.9+.16*Yi(.5+d,0,1);t[o*3]=P,t[o*3+1]=P*(1.02-.04*g),t[o*3+2]=P*(.96+.04*g)}s[o*4]=f,s[o*4+1]=g,s[o*4+2]=v,s[o*4+3]=m}i.setAttribute("color",new wt(t,3)),i.setAttribute("splat",new wt(s,4));const r=a1(),a=new Te(i,r);return a.receiveShadow=!0,ze.add(a),a}function Wm(){const e=new Uint8Array(262144);for(let n=0;n<256;n++)for(let s=0;s<256;s++){const r=(s/255-.5)*Bt,a=(n/255-.5)*Bt,o=En(r,a),c=Yi((o+8)/12,0,1);e[(n*256+s)*4]=c*255,e[(n*256+s)*4+3]=255}const t=new Wh(e,256,256);return t.magFilter=mn,t.minFilter=mn,t.needsUpdate=!0,t}const tl=[],od=[];function cd(i,e,t=0){for(const n of od){const s=n.x1-n.x0,r=n.z1-n.z0,a=s*s+r*r,o=Math.max(0,Math.min(1,((i-n.x0)*s+(e-n.z0)*r)/a));if(Math.hypot(i-(n.x0+s*o),e-(n.z0+r*o))<n.w+t)return n}return null}const Xm=[],ld=[],jm="/varvet/voice/";let Or=null,qr=null;fetch(jm+"index.json").then(i=>i.ok?i.json():[]).then(i=>{Or=new Set(i)}).catch(()=>{Or=new Set});const S1=i=>i.split(/[ (·]/)[0].toLowerCase().replace(/å|ä/g,"a").replace(/ö/g,"o"),b1=i=>{let e=5381;for(let t=0;t<i.length;t++)e=(e<<5)+e+i.charCodeAt(t)|0;return(e>>>0).toString(36)};function w1(i){let e=i;const t=(V.pname||"").trim();if(t)e=e.split(t).join("{namn}");else for(const s of["grabben","jäntan"])e=e.split(s).join("{namn}");const n=V.story&&V.story.c2&&V.story.c2.name;return n&&(e=e.split(n).join("{båt}")),e}const E1=(i,e)=>S1(i)+"_"+b1(w1(e));function nl(){if(qr){try{qr.pause()}catch{}qr=null}}function qm(i,e){nl();const t=E1(i,e);window.__vlog&&window.__vlog.push({who:i,text:e,k:t,has:!!Or&&Or.has(t)}),!(!Rt.voice||!Or)&&Or.has(t)&&(qr=new Audio(jm+t+".mp3"),qr.volume=.95,qr.play().catch(()=>{}))}const ue={pos:new I(2,0,50),vel:new I,yaw:0,walk:0,speed:0,grounded:!0,vy:0},pt=new tn;ze.add(pt);const ja={};{const i="#f1c7a4",e="#2f5d8a",t="#3b3f45",n="#ffc21a",s=h=>new rn({color:h}),r=new Te(new ia(.36,.55,4,10),s(e));r.position.y=1.12,pt.add(r);const a=new Te(new bn(.3,16,12),s(i));a.position.y=1.82,pt.add(a);const o=new Te(new bn(.31,14,8,0,Math.PI*2,0,Math.PI/2),s(n));o.position.y=1.86,pt.add(o);const c=new Te(new Vt(.22,.22,.04,12),s(n));c.scale.set(1,1,.9),c.position.set(0,1.88,.28),pt.add(c);for(const h of[-1,1]){const d=new Te(new bn(.045,8,6),s("#2a2a2a"));d.position.set(h*.11,1.84,.27),pt.add(d)}const l=new Te(new bn(.22,12,8,0,Math.PI*2,Math.PI*.45,Math.PI*.55),s("#8a4a2a"));l.position.set(0,1.78,.1),pt.add(l);const u=(h,d,f,g,v,m)=>{const p=new tn;p.position.set(v,m,0);const _=new Te(new ia(f,d,3,8),s(g));_.position.y=-d/2-f*.5,p.add(_),pt.add(p),ja[h]=p};u("la",.42,.11,e,-.46,1.42),u("ra",.42,.11,e,.46,1.42),u("ll",.5,.14,t,-.17,.72),u("rl",.5,.14,t,.17,.72),pt.traverse(h=>{h.isMesh&&(h.castShadow=!0)})}const T1=rd(2,.0045),A1=rd(2.6,.006),R1=rd(0,.3),Wn=[];function C1(i){const e=el(42),t=(p,_,y,x)=>{const P=new Wi(p,_,16,3),E=P.attributes.position,A=new I;for(let C=0;C<E.count;C++){A.fromBufferAttribute(E,C);const S=Math.hypot(A.x,A.z);if(S<1e-4)continue;const M=Math.atan2(A.z,A.x),R=S/p,F=A.y<-_/2+.001,k=F?Math.round(M/(Math.PI*2)*16)%2?1.12:.82:1,B=(1+.13*Math.sin(M*5+x)+.08*Ys(Math.cos(M)*2+x,Math.sin(M)*2+A.y))*k;A.x*=B,A.z*=B,F&&(A.y-=.22*R+.12*Math.sin(M*3+x)),E.setXYZ(C,A.x,A.y,A.z)}return P.computeVertexNormals(),Se(P,0,y,0)},n=Nt([ce(Se(new Vt(.16,.3,2.6,8),0,1.3,0),"#7a5136"),ce(t(1.8,2.4,2.4,1),"#2f6b3d"),ce(t(1.45,2.2,3.5,2),"#357a43"),ce(t(1.1,2,4.55,3),"#357a43"),ce(t(.7,1.7,5.5,4),"#3d8a4b")]),s=(p,_,y,x,P)=>{const E=new Lc(p,2),A=E.attributes.position,C=new I;for(let S=0;S<A.count;S++){C.fromBufferAttribute(A,S);const M=C.clone().normalize(),R=1+.22*Ys(M.x*2.2+P,M.y*2.2+M.z*1.7)+.1*Ys(M.z*5+P,M.x*5);C.multiplyScalar(R),C.y*=.85,A.setXYZ(S,C.x,C.y,C.z)}return E.computeVertexNormals(),Se(E,_,y,x)},r=Nt([ce(Se(new Vt(.11,.18,3.4,7),0,1.7,0),"#efece4"),ce(Se(new Vt(.05,.08,1.4,5).rotateZ(.7),.45,3.3,0),"#efece4"),ce(s(1.35,0,4,0,1),"#8cc35b"),ce(s(1,.8,4.6,.3,2),"#9bcf66"),ce(s(.95,-.6,4.7,-.4,3),"#9bcf66"),ce(s(.8,.1,5.3,.5,4),"#8cc35b")]),a=(()=>{const p=new Lc(1,2),_=p.attributes.position;for(let y=0;y<_.count;y++){const x=new I().fromBufferAttribute(_,y),P=1+.22*Ys(x.x*1.7+3,x.z*1.7+x.y);x.multiplyScalar(P),x.y*=.62,_.setXYZ(y,x.x,x.y,x.z)}return p.computeVertexNormals(),Nt([ce(p,"#b8a29a")])})(),o=(p,_)=>{const y=[];let x=0;for(;y.length<p&&x<p*30;){x++;const P=(e()-.5)*Bt*.9,E=(e()-.5)*Bt*.9,A=ms(P,E);_(P,E,A)&&(Math.hypot(P-lt.x,E-lt.z)<lt.r+6||Wn.some(C=>Math.hypot(C.x-P,C.z-E)<C.r+1.2)||y.push({x:P,z:E,h:A}))}return y},c=(p,_)=>Math.hypot(ms(p+1.5,_)-ms(p-1.5,_),ms(p,_+1.5)-ms(p,_-1.5))/(2*1.5),l=o(Math.round(260*i.trees),(p,_,y)=>y>2.2&&c(p,_)<.55&&ch(p*.02,_*.02,2)>-.15);for(const p of l)Wn.push({x:p.x,z:p.z,r:.45,y6:p.h+6});const u=o(Math.round(70*i.trees),(p,_,y)=>y>1.6&&y<7&&c(p,_)<.4);for(const p of u)Wn.push({x:p.x,z:p.z,r:.35,y6:p.h+5.5});const h=o(140,(p,_,y)=>y>-.8&&y<9),d=(p,_,y,x,P=Xt)=>{const E=new uo(p,P,_.length),A=new qe,C=new _n,S=new I,M=new I,R=new Un;return _.forEach((F,k)=>{const B=y();R.set(0,e()*6.28,0),C.setFromEuler(R),S.set(B,B*(.85+e()*.3),B),M.set(F.x,F.h-.15,F.z),A.compose(M,C,S),E.setMatrixAt(k,A)}),E.castShadow=x,E.receiveShadow=!0,ze.add(E),E};d(n,l,()=>.8+e()*.7,!0,T1),d(r,u,()=>.8+e()*.5,!0,A1),d(a,h,()=>.6+e()*1.8,!0),h.forEach(p=>Wn.push({x:p.x,z:p.z,r:.7}));const f=Nt([ce(Se(new Wi(.12,.5,4),0,.25,0),"#6da64e"),ce(Se(new Wi(.1,.4,4),.15,.2,.08),"#7bb558"),ce(Se(new Wi(.1,.45,4),-.12,.22,-.1),"#5e9a45")]),g=o(Math.round(700*i.trees),(p,_,y)=>y>1.2&&c(p,_)<.35);Wn.length-=0;const v=new uo(f,R1,g.length),m=new qe;g.forEach((p,_)=>{m.makeRotationY(e()*6),m.setPosition(p.x,p.h,p.z),v.setMatrixAt(_,m)}),ze.add(v)}const Xn=[];let At;function P1(){const i=[],e=lt.h,t=12,n=9,s=4.2,r=4,a=34;{const S=[];S.push(ce(Se(new Le(t,s,n),r,e+s/2,a),"#b8392b"));for(const F of[-1,1])for(const k of[-1,1])S.push(ce(Se(new Le(.3,s,.3),r+F*t/2,e+s/2,a+k*n/2),"#f2efe8"));S.push(...pp(r,e+s,a,t,n,2.3,"#3b3f45","#b8392b")),S.push(ce(Se(new Le(4.6,3.4,.2),r,e+1.7,a+n/2+.05),"#6e1f17")),S.push(ce(Se(new Le(4.9,.22,.3),r,e+3.5,a+n/2+.1),"#f2efe8"));for(const F of[-4,4])S.push(ce(Se(new Le(1.3,1.1,.15),r+F,e+2.4,a+n/2+.04),"#cfe6f2"),ce(Se(new Le(1.5,.12,.25),r+F,e+1.8,a+n/2+.08),"#f2efe8"));const M=new tn,R=new Te(Nt(S),Xt);R.castShadow=!0,R.receiveShadow=!0,M.add(R),M.position.set(r,0,a),R.position.set(-r,0,-a),ze.add(M),id(M,"boden.glb",{fit:t+.4,rotY:0,ground:e-.05,hideChildren:!0,liner:.985})}Xn.push({x0:r-4.6,x1:r+4.6,z0:a-6.4,z1:a+6.4,top:e+7});const o=14,c=58,l=90;i.push(ce(Se(new Le(3.2,.3,l-c),o,1.3,(c+l)/2),"#9a7a55"));for(let S=c+1;S<l;S+=3)for(const M of[-1.4,1.4])i.push(ce(Se(new Vt(.16,.16,4.5,6),o+M,-1.2,S),"#5e4630"));i.push(ce(Se(new Le(8,.3,3),o,1.3,l+1.2),"#9a7a55"));{const S=lt.z+10,M=lt.z+40,R=lt.h+.12,F=-2.48,k=Math.hypot(M-S,R-F),B=Math.atan2(R-F,M-S);for(const Y of[-1,1]){const G=new Le(.25,.25,k);G.rotateX(B),G.translate(-12+Y*1.3,(R+F)/2,(S+M)/2),i.push(ce(G,"#5b5f66"))}}const u=new Te(oa("#e9e4d8","#2f5d8a"),lh);u.position.set(-6,e+1.15,47),u.rotation.y=.4,u.castShadow=!0,ze.add(u);for(const S of[-1.2,1.2])i.push(ce(Se(new Le(.3,1,2.6),-6+S*.4,e+.5,47+S*1.1),"#6b5137"));Xn.push({x0:-9.5,x1:-2.5,z0:44,z1:50,top:e+2});for(let S=0;S<5;S++)i.push(ce(Se(new Le(3.6,.22,.4),-13,e+.12+S*.24,36+S*.05),S%2?"#c49a66":"#b88b58"));Xn.push({x0:-15,x1:-11,z0:35,z1:37.5,top:e+1.4});for(let S=0;S<3;S++)i.push(ce(Se(new Vt(.42,.42,1.05,10),12+S*.95,e+.52,40),S==1?"#2f5d8a":"#a33a2a"));Xn.push({x0:11.4,x1:14.8,z0:39.4,z1:40.6,top:e+1.2}),i.push(ce(Se(new Vt(.07,.09,9,6),-3,e+4.5,56),"#f2efe8")),Wn.push({x:-3,z:56,r:.3});const h=new Te(Nt(i),Xt);h.castShadow=!0,h.receiveShadow=!0,ze.add(h);const d=new tn;d.add(new Te(new yi(2.4,1.5),new rn({color:"#1f5aa6",side:en})));const f=new Te(new yi(2.4,.3),new rn({color:"#f3c316",side:en}));f.position.z=.01,d.add(f);const g=new Te(new yi(.3,1.5),new rn({color:"#f3c316",side:en}));g.position.set(-.3,0,.01),d.add(g),d.position.set(-1.8,e+8.1,56),ze.add(d),ze.userData.flag=d,At=new Te(oa("#f4f1ea","#a33a2a"),lh),At.position.set(o-3.6,.15,80),At.rotation.y=0,At.castShadow=!0,ze.add(At);const v=[],m=_i[1],p=m.x-8,_=m.z+10,y=ms(p,_);v.push(ce(Se(new Le(6,3,5),p,y+1.5,_),"#b8392b")),v.push(...pp(p,y+3,_,6,5,1.7,"#3b3f45","#b8392b"));const x=new Te(Nt(v),Xt);x.castShadow=!0,ze.add(x),Xn.push({x0:p-3.3,x1:p+3.3,z0:_-2.8,z1:_+2.8,top:y+5.5});const P=_i[3],E=ms(P.x,P.z),A=Nt([ce(Se(new Vt(.9,1.2,6,10),P.x,E+3,P.z),"#f2efe8"),ce(Se(new Vt(1.25,1.25,1.2,10),P.x,E+2,P.z),"#c0392b"),ce(Se(new Vt(.7,.7,1,8),P.x,E+6.5,P.z),"#ffe9a0"),ce(Se(new Wi(1,1.2,10),P.x,E+7.6,P.z),"#c0392b")]),C=new Te(A,Xt);C.castShadow=!0,ze.add(C)}function pp(i,e,t,n,s,r,a,o){const c=s/2+.45,l=Math.hypot(c,r)+.1,u=Math.atan2(r,c),h=[];for(const f of[-1,1]){const g=new Le(n+.8,.18,l);g.rotateX(f*u),g.translate(i,e+r/2+.05,t+f*c/2),h.push(ce(g,a))}const d=new So;d.moveTo(-s/2,0),d.lineTo(s/2,0),d.lineTo(0,r),d.closePath();for(const f of[-1,1]){const g=new Jc(d,{depth:.15,bevelEnabled:!1});g.rotateY(Math.PI/2),g.translate(i+f*n/2-(f>0?.15:0),e,t),h.push(ce(g,o))}return h}function oa(i,e){const t=new bn(1,16,8,0,Math.PI*2,Math.PI/2,Math.PI/2);t.scale(1.25,.85,3.2);const n=t.attributes.position;for(let o=0;o<n.count;o++){const c=n.getZ(o);c>0&&n.setX(o,n.getX(o)*(1-c/3.2*.75))}t.computeVertexNormals();const s=new ma(1,.07,5,24);s.rotateX(Math.PI/2),s.scale(1.25,1,3.2);const r=s.attributes.position;for(let o=0;o<r.count;o++){const c=r.getZ(o);c>0&&r.setX(o,r.getX(o)*(1-c/3.2*.75))}const a=new Le(2.1,.1,.5);return a.translate(0,-.25,0),Nt([ce(t,i),ce(s,e),ce(a,"#9a7a55")])}let Tn;function I1(){const i=new yi(1600,1600,120,120);i.rotateX(-Math.PI/2);const e=new kn({transparent:!0,fog:!0,uniforms:rm.merge([fe.fog,{t:{value:0},amp:{value:1},hT:{value:Wm()},ws:{value:Bt},deep:{value:new pe("#1e5f86")},shallow:{value:new pe("#3fb5b8")},foam:{value:new pe("#f4fbff")},sunDir:{value:new I(.5,.75,.35).normalize()},sunCol:{value:new pe(1,1,1)},abyss:{value:new pe("#123f5e")}}]),vertexShader:`uniform float t,amp;varying vec3 vW;varying float vWave;
    #include <fog_pars_vertex>
    void main(){vec3 p=position;float w=sin(p.x*.08+t*1.1)*.18+sin(p.z*.11-t*.9)*.14+sin((p.x+p.z)*.21+t*1.7)*.06;p.y+=w*amp;vWave=w*amp;vec4 wp=modelMatrix*vec4(p,1.);vW=wp.xyz;vec4 mvPosition=viewMatrix*wp;gl_Position=projectionMatrix*mvPosition;
    #include <fog_vertex>
    }`,fragmentShader:`uniform float t,ws;uniform sampler2D hT;uniform vec3 deep,shallow,foam,sunDir,sunCol,abyss;varying vec3 vW;varying float vWave;
    #include <fog_pars_fragment>
    float hsh(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
    float vn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hsh(i),hsh(i+vec2(1,0)),f.x),mix(hsh(i+vec2(0,1)),hsh(i+vec2(1,1)),f.x),f.y);}
    void main(){vec2 uv=vW.xz/ws+.5;float h=-9.;if(uv.x>0.&&uv.y>0.&&uv.x<1.&&uv.y<1.)h=texture2D(hT,uv).r*12.-8.;float depth=max(0.,-h);
      vec3 c=mix(shallow,deep,smoothstep(.3,6.,depth));c=mix(c,abyss,smoothstep(5.,8.5,depth));
      float rip=sin(vW.x*.9+t*2.)*sin(vW.z*.7-t*1.6)+sin((vW.x-vW.z)*.5+t*1.3)*.6;
      float n1=vn(vW.xz*.35+vec2(t*.15,-t*.11)),n2=vn(vW.xz*1.7-vec2(t*.4,t*.33));
      // skum: fast kant mot land + vågband som rullar in mot stranden och bryts upp av brus
      float edge=smoothstep(.9,0.,depth+rip*.12)*(.65+.35*sin(t*2.+vW.x*.4+vW.z*.3));
      float band=(1.-smoothstep(0.,.14,fract(depth*.75+t*.22+n1*.35)))*smoothstep(2.4,.35,depth)*smoothstep(.35,.7,n2);
      c=mix(c,foam,clamp(edge+band*.75,0.,1.)*.85);
      vec3 V=normalize(cameraPosition-vW);
      vec3 N=normalize(vec3(-.08*cos(vW.x*.08+t*1.1)+rip*.03+(n2-.5)*.06,1.,-.06*cos(vW.z*.11-t*.9)+rip*.03+(n1-.5)*.06));
      float fres=pow(1.-max(dot(V,N),0.),3.);
      vec3 sky=mix(fogColor,vec3(.78,.9,.97),.35);c=mix(c,sky,fres*.6);
      vec3 R=reflect(-sunDir,N);float sp=pow(max(dot(R,V),0.),90.);c+=sp*.9*sunCol;
      // solglitter: små gnistor i vågtopparna
      vec3 N2=normalize(N+vec3(n2-.5,0.,vn(vW.xz*2.3+t*.5)-.5)*.35);float gl=pow(max(dot(reflect(-sunDir,N2),V),0.),600.)*step(.55,n2);
      c+=gl*2.2*sunCol;
      c+=vWave*.08;
      gl_FragColor=vec4(c,mix(.82,.97,smoothstep(.2,3.,depth)));
      #include <fog_fragment>
    }`});Tn=new Te(i,e),Tn.renderOrder=1,ze.add(Tn)}const ud=6*60,hd=22*60,L1=24*60,D1=(hd-ud)/600,Ki=18,dd=["Vår","Sommar","Höst","Vinter"],fd=["Mån","Tis","Ons","Tor","Fre","Lör","Sön"],Ts={sol:{name:"Sol",icon:"☀️",cloud:0,sun:1,fog:[110,460],rain:0,wind:1,info:"Bra dag för allt arbete"},moln:{name:"Molnigt",icon:"⛅",cloud:.45,sun:.7,fog:[90,400],rain:0,wind:1.1,info:"Grått men lugnt"},regn:{name:"Regn",icon:"🌧️",cloud:.8,sun:.45,fog:[60,300],rain:1,wind:1.3,info:"Måla inte utomhus"},dimma:{name:"Dimma",icon:"🌫️",cloud:.7,sun:.5,fog:[12,120],rain:0,wind:.7,info:"Svårt att hitta till sjöss"},blast:{name:"Blåsigt",icon:"💨",cloud:.3,sun:.85,fog:[100,440],rain:0,wind:2,info:"Höga vågor för små båtar"},storm:{name:"Storm",icon:"⛈️",cloud:1,sun:.3,fog:[40,220],rain:2,wind:3,info:"Stanna i land"}},N1=[[.35,.25,.15,.12,.1,.03],[.5,.2,.1,.05,.12,.03],[.2,.25,.2,.12,.15,.08],[.2,.3,.15,.15,.12,.08]],Ym={virke:30,skrot:20},U1=[{s:0,d:12,name:"Båtmässan i Kvarnvik"},{s:1,d:3,name:"Midsommar på Grannön"},{s:1,d:12,name:"Regattan"},{s:2,d:5,name:"Skaldjursfest"},{s:3,d:8,name:"Lucia"},{s:3,d:14,name:"Julmarknad"}];let ve=null;const no=()=>Math.random();function Mi(i){const e=Math.floor(i/Ki)%4,t=N1[e];let n=no(),s=0;for(;s<t.length-1&&(n-=t[s],!(n<0));s++);return Object.keys(Ts)[s]}function k1(){return{day:0,min:ud,wx:"sol",fc:[Mi(1),Mi(2),Mi(3)],price:{virke:1,skrot:1},prev:{virke:1,skrot:1},orders:{virke:0,skrot:0},delivery:null,warned:!1}}function F1(i,e=8*60){ve.day=i,ve.min=e,ve.warned=!1,ve.fc=[Mi(i+1),Mi(i+2),Mi(i+3)],ve.wx="sol",pd(),md()}function O1(){ve=V.life||k1(),V.life=ve,ve.fc||(ve.fc=[Mi(ve.day+1),Mi(ve.day+2),Mi(ve.day+3)]),j1(),Y1(),J1(),tl.push(i=>{i.push({x:4,z:41.6,r:2.6,label:ve.min>=18*60?"Sova i boden":"Vila till i morgon",fn:()=>$m(!1)}),ve.delivery&&i.push({x:14.8,z:58.4,r:2.2,label:"Hämta leverans",fn:K1})}),pd(),md()}const $i=()=>ve;function il(){return Math.floor(ve.day/Ki)%4}function ca(){return ve?Ts[ve.wx]:Ts.sol}const Km=i=>`<img class="wxi" src="/varvet/ui/wx_${i}.png" alt="${Ts[i].name}">`,B1=i=>`${String(Math.floor(i/60)%24).padStart(2,"0")}:${String(Math.floor(i%60)).padStart(2,"0")}`;function dh(i=ve.day){return`${fd[i%7]} · ${dd[Math.floor(i/Ki)%4]} dag ${i%Ki+1}, år ${Math.floor(i/(Ki*4))+1}`}let eu=0;function z1(i){if(!ve)return;jt||ut||Xs||Mc||(ve.min+=i*D1,!ve.warned&&ve.min>=hd&&(ve.warned=!0,ht("Klockan är tio på kvällen – dags att sova",3200)),ve.min>=L1&&$m(!0)),X1(i),q1(i),eu-=i,eu<=0&&(eu=1,md())}let Mc=!1;function $m(i){if(!Mc){if(se.on&&!i){ht("Lägg till vid en brygga först");return}se.on&&se.forceHome&&se.forceHome(),Mc=!0,ts(()=>{if(Mc=!1,i){const e=Math.min(V.kr,150);V.kr-=e,ht(e?`Du somnade utomhus och vaknade stel och frusen (−${e} kr för värktabletter och kaffe)`:"Du somnade utomhus och vaknade stel och frusen",4200)}H1(),ue.pos.set(4,1.3,42.4),ue.yaw=0,He.tYaw=He.yaw=0,Fn(),an(),setTimeout(()=>ht(`${dh()} · ${Ts[ve.wx].name}`,3600),i?4400:300)})}}function H1(){ve.day++,ve.min=ud,ve.warned=!1,ve.wx=ve.fc.shift(),ve.fc.push(Mi(ve.day+3)),ve.prev={...ve.price};const i=il();for(const e of Object.keys(Ym)){const t=(no()-.5)*.16+(1-ve.price[e])*.25;ve.price[e]=Math.min(1.35,Math.max(.75,ve.price[e]+t+(i===3?.02:0)))}(ve.orders.virke||ve.orders.skrot)&&(ve.delivery={...ve.orders},ve.orders={virke:0,skrot:0}),pd();for(const e of Xm)try{e()}catch(t){console.warn(t)}}function fh(i){return Math.round(Ym[i]*ve.price[i])}const ac={day:[new pe("#4f9ad6"),new pe("#9fd0ea"),new pe("#bfdced")],dusk:[new pe("#5b6aa6"),new pe("#f2a77c"),new pe("#f5cba5")],night:[new pe("#0d1830"),new pe("#1f3155"),new pe("#2a3a5a")],grey:[new pe("#7f8c99"),new pe("#aab4bd"),new pe("#c3c9cf")]},Tr=[new pe,new pe,new pe],V1=new pe("#ffe8c4"),G1=new pe("#ff9d5c"),W1=new pe("#a9bde0");let oc=null,nn={cloud:0,sun:1,fogN:110,fogF:460,rain:0,wind:1};function pd(i){const e=Ts[ve.wx],t={cloud:e.cloud,sun:e.sun,fogN:e.fog[0],fogF:e.fog[1],rain:e.rain,wind:e.wind};nn=t,ph=t}let ph=nn;function X1(i){for(const l in ph)nn[l]+=(ph[l]-nn[l])*Math.min(1,i*.5);const e=Math.min(1,Math.max(0,(ve.min-300)/1080)),t=Math.sin(Math.PI*e),n=-1.9+3.8*e,s=Math.min(1,Math.max(0,(t-.02)/.25)),r=Math.exp(-Math.pow((t-.12)/.12,2))*(1-nn.cloud*.8),a=ze.userData.sky.material.uniforms;for(let l=0;l<3;l++)Tr[l].copy(ac.night[l]).lerp(ac.day[l],s).lerp(ac.dusk[l],r*.85).lerp(ac.grey[l],nn.cloud*.75*(.3+.7*s));a.top.value.copy(Tr[0]),a.mid.value.copy(Tr[1]),a.bot.value.copy(Tr[2]),ze.fog.color.copy(Tr[2]),ze.fog.near=nn.fogN,ze.fog.far=nn.fogF;const o=ue.pos,c=Math.cos(Math.asin(Math.min(1,t)));if(s>0?(yt.position.set(o.x+Math.cos(n)*c*100,o.y+Math.max(.15,t)*100,o.z+Math.sin(n)*c*100),yt.color.copy(G1).lerp(V1,Math.min(1,t*2.2)),yt.intensity=(.4+1.8*s)*nn.sun):(yt.position.set(o.x-40,o.y+90,o.z+30),yt.color.copy(W1),yt.intensity=.35),yt.target.position.copy(o),oh.intensity=(.35+.95*s)*(1-nn.cloud*.15),oh.color.copy(Tr[1]).lerp(new pe("#ffffff"),.5),Tn){const l=Tn.material.uniforms;oc||(oc={deep:l.deep.value.clone(),shallow:l.shallow.value.clone()});const u=.35+.65*s;l.deep.value.copy(oc.deep).multiplyScalar(u*(1-nn.cloud*.25)),l.shallow.value.copy(oc.shallow).multiplyScalar(u*(1-nn.cloud*.2)),l.amp&&(l.amp.value=nn.wind),l.sunDir&&(l.sunDir.value.copy(yt.position).sub(o).normalize(),l.sunCol.value.copy(yt.color).multiplyScalar(s>0?Math.min(1.2,yt.intensity*.55)*(1-nn.cloud*.7):.35))}}let zi=null;function j1(){const e=new Float32Array(10800),t=new Float32Array(1800*2);for(let r=0;r<1800;r++){const a=(no()-.5)*60,o=no()*30,c=(no()-.5)*60;for(let l=0;l<2;l++)e.set([a,o,c],(r*2+l)*3),t[r*2+l]=l}const n=new Ht;n.setAttribute("position",new wt(e,3)),n.setAttribute("tip",new wt(t,1));const s=new kn({transparent:!0,depthWrite:!1,uniforms:{t:{value:0},cam:{value:new I},snow:{value:0},op:{value:0}},vertexShader:`uniform float t, snow; uniform vec3 cam; attribute float tip;
      void main(){ vec3 p = position; float sp = mix(24.0, 2.2, snow);
        p.y = mod(p.y - t * sp, 30.0); p.x += snow * sin(t * 1.3 + position.z) * 0.8;
        vec3 w = vec3(cam.x + mod(p.x - cam.x + 30.0, 60.0) - 30.0, cam.y - 8.0 + p.y, cam.z + mod(p.z - cam.z + 30.0, 60.0) - 30.0);
        w.y -= tip * mix(0.9, 0.08, snow); w.x += tip * 0.15;
        gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0); }`,fragmentShader:"uniform float op, snow; void main(){ gl_FragColor = vec4(mix(vec3(.78,.85,.92), vec3(1.0), snow), op); }"});zi=new gm(n,s),zi.frustumCulled=!1,zi.renderOrder=4,ze.add(zi)}function q1(i){if(!zi)return;const e=zi.material.uniforms;e.t.value+=i,e.cam.value.copy(Wt.position),e.snow.value=il()===3?1:0;const t=nn.rain>.05?Math.min(.55,.25*nn.rain+.1):0;e.op.value+=(t-e.op.value)*Math.min(1,i*.8),zi.visible=e.op.value>.01,zi.geometry.setDrawRange(0,Math.floor((nn.rain>1.5?1:.55)*zi.geometry.attributes.position.count))}let ds=null;function Y1(){ds=new tn;const i=new Te(new Le(1.2,.8,.9),new rn({color:"#a47c52"}));i.position.y=.4,ds.add(i);const e=new Te(new Le(1.25,.08,.95),new rn({color:"#7a5136"}));e.position.y=.82,ds.add(e),ds.position.set(15.2,1.45,58.4),ds.traverse(t=>{t.isMesh&&(t.castShadow=!0)}),ze.add(ds)}function K1(){const i=ve.delivery;i&&(V.virke+=i.virke,V.skrot+=i.skrot,ve.delivery=null,Fn(),an(),st("pick"),ht(`Leverans hämtad: ${i.virke?i.virke+" virke ":""}${i.skrot?i.skrot+" skrot":""}`,2400))}function $1(){ds&&(ds.visible=!!(ve&&ve.delivery))}let Xs=!1,qa="shop",Bi={virke:0,skrot:0};function J1(){ee("bPhone").onclick=()=>{Xs=!Xs,ee("phone").style.display=Xs?"flex":"none",Xs&&(Bi={virke:0,skrot:0},cc())},ee("phX").onclick=()=>{Xs=!1,ee("phone").style.display="none"},document.querySelectorAll("#phTabs button").forEach(i=>i.onclick=()=>{qa=i.dataset.t,cc()}),ee("phBody").onclick=i=>{const e=i.target.closest("button");if(e){if(e.dataset.add){const[t,n]=e.dataset.add.split(":");Bi[t]=Math.max(0,Bi[t]+ +n),cc()}if(e.dataset.buy){const t=mh();if(!t)return;if(t>V.kr){ht("Inte tillräckligt med pengar"),st("no");return}V.kr-=t,ve.orders.virke+=Bi.virke,ve.orders.skrot+=Bi.skrot,Bi={virke:0,skrot:0},Fn(),an(),st("place"),ht("Beställt – levereras till bryggan i morgon bitti",2600),cc()}}}}const mh=()=>Bi.virke*fh("virke")+Bi.skrot*fh("skrot");function Z1(i){const e=ve.price[i]-ve.prev[i];return Math.abs(e)<.01?"→":e>0?"↑":"↓"}function cc(){document.querySelectorAll("#phTabs button").forEach(e=>e.classList.toggle("on",e.dataset.t===qa));const i=ee("phBody");if(qa==="shop"){const e=(s,r,a)=>`<div class="phRow"><img class="phIt" src="/varvet/ui/it_${s}.png" alt=""><div style="flex:1"><b>${r}</b><small>${fh(s)} kr/${a} ${Z1(s)}</small></div>
      <div class="phQty"><button data-add="${s}:-5">−5</button><span>${Bi[s]}</span><button data-add="${s}:5">+5</button><button data-add="${s}:10">+10</button></div></div>`,t=ve.orders.virke||ve.orders.skrot?`<p class="phNote">Beställt till i morgon: ${ve.orders.virke} virke, ${ve.orders.skrot} skrot</p>`:"",n=ve.delivery?'<p class="phNote">En leverans väntar vid bryggan</p>':"";i.innerHTML=`<h3>Kvarnviks Järn &amp; Trä</h3>${e("virke","Virke","st")}${e("skrot","Skrot och beslag","st")}
      <div class="phTot">Summa <b>${mh()} kr</b> · Saldo ${V.kr} kr</div><button class="btn acc" data-buy="1" ${mh()?"":"disabled"}>Beställ – levereras 07:00 i morgon</button>${t}${n}
      <p class="phNote">Priserna ändras varje dag. Köp när pilen pekar nedåt.</p>`}else if(qa==="wx"){const e=(t,n,s)=>`<div class="phWx"><span>${Km(n)}</span><div><b>${s}</b><small>${Ts[n].name} – ${Ts[n].info}</small></div></div>`;i.innerHTML=`<h3>Väder</h3>${e(ve.day,ve.wx,"I dag")}${ve.fc.map((t,n)=>e(ve.day+n+1,t,fd[(ve.day+n+1)%7])).join("")}`}else if(qa==="dag"){const e=pE();i.innerHTML="<h3>Dagbok</h3>"+(e.length?e.map(t=>`<div class="phRow"><div><small>${dh(t.d)}</small>${t.t}</div></div>`).join(""):'<p class="phNote">Inget skrivet än.</p>')}else{const e=il(),t=ve.day%Ki,n=U1.map(s=>{let r=(s.s-e)*Ki+(s.d-1-t);return r<0&&(r+=Ki*4),{...s,in:r}}).sort((s,r)=>s.in-r.in);i.innerHTML=`<h3>Kalender</h3><p class="phNote">${dh()}</p>${n.map(s=>`<div class="phRow"><div><b>${s.name}</b><small>${dd[s.s]} dag ${s.d}</small></div><span>${s.in===0?"i dag":"om "+s.in+" d"}</span></div>`).join("")}`}}function md(){ve&&(ee("clock").innerHTML=`${fd[ve.day%7]} ${B1(ve.min)} · ${dd[il()]} ${ve.day%Ki+1} ${Km(ve.wx)}`,ee("clock").classList.toggle("late",ve.min>=hd))}const Q1=()=>Xs;new I(0,1,0);const ew=new I;function tw(i,e){if(En(i,e)<-.55)return!1;for(const t of Xn)if(i>t.x0&&i<t.x1&&e>t.z0&&e<t.z1)return!1;return!0}function wo(i,e){return Math.abs(i-14)<1.6&&e>57&&e<91||Math.abs(i-14)<4&&e>89&&e<92.5||!!cd(i,e)}function An(i,e){let t=En(i,e);if(wo(i,e)){const n=cd(i,e);t=Math.max(t,n?n.h:1.45)}if(typeof V<"u"&&V.pieces.length){const n=Lw(i,e);n!=null&&(t=Math.max(t,n))}return t}function Jm(i){let e=Yn.mx,t=Yn.mz;const n=Yn.keys;if((n.KeyW||n.ArrowUp)&&(t=-1),(n.KeyS||n.ArrowDown)&&(t=1),(n.KeyA||n.ArrowLeft)&&(e=-1),(n.KeyD||n.ArrowRight)&&(e=1),n.KeyQ&&(He.tYaw+=i*1.8),n.KeyE&&(He.tYaw-=i*1.8),(ut||jt||Q1()||window.__modal)&&(e=t=0),se.on)hw(i,e,t),pt.userData.realModel&&_s(pt,"sit");else{const u=Math.min(1,Math.hypot(e,t)),d=(u>.85||n.ShiftLeft?6.2:3.4)*u;if(u>.08){const v=-t/Math.max(u,.001),m=e/Math.max(u,.001),p=Math.cos(He.yaw),_=Math.sin(He.yaw),y=_*v-p*m,x=p*v+_*m,P=Math.atan2(y,x),E=Math.sin(P)*d,A=Math.cos(P)*d,C=Math.atan2(Math.sin(P-ue.yaw),Math.cos(P-ue.yaw));ue.yaw+=C*Math.min(1,i*12);const S=ue.pos.x+E*i,M=ue.pos.z+A*i,R=(F,k)=>(tw(F,k)||wo(F,k))&&!Iw(F,k,ue.pos.y)&&!Wn.some(B=>Math.abs(B.x-F)<B.r+.35&&Math.abs(B.z-k)<B.r+.35&&Math.hypot(B.x-F,B.z-k)<B.r+.35)&&An(F,k)-An(ue.pos.x,ue.pos.z)<.9*Math.max(i*d,.05)+.35;R(S,M)?(ue.pos.x=S,ue.pos.z=M):R(S,ue.pos.z)?ue.pos.x=S:R(ue.pos.x,M)&&(ue.pos.z=M),ue.speed=d}else ue.speed=0;const f=An(ue.pos.x,ue.pos.z);ue.pos.y+=(f-ue.pos.y)*Math.min(1,i*18),ue.walk+=i*ue.speed*2.1;const g=Math.sin(ue.walk)*Math.min(1,ue.speed/3)*.75;ja.la.rotation.x=g,ja.ra.rotation.x=-g,ja.ll.rotation.x=-g,ja.rl.rotation.x=g,pt.userData.realModel&&!Xb(pt)&&(ue.speed>4.6?(_s(pt,"run"),lp(pt,"run",ue.speed/5.2)):ue.speed>.2?(_s(pt,"walk"),lp(pt,"walk",Math.max(.6,ue.speed/1.6))):_s(pt,jt?"talk":"idle")),pt.position.copy(ue.pos),pt.userData.realModel||(pt.position.y+=Math.abs(Math.cos(ue.walk))*.06*Math.min(1,ue.speed/3)),pt.rotation.y=ue.yaw}He.yaw+=(He.tYaw-He.yaw)*Math.min(1,i*10),He.pitch+=(He.tPitch-He.pitch)*Math.min(1,i*10);const s=ew.set(ue.pos.x,ue.pos.y+1.5,ue.pos.z);He.boatD=(He.boatD||0)+((se.on?1.6+Math.abs(se.v)*.3:0)-(He.boatD||0))*Math.min(1,i*1.5);let r=He.dist+He.boatD;const a=()=>s.x-Math.sin(He.yaw)*Math.cos(He.pitch)*r,o=()=>s.z-Math.cos(He.yaw)*Math.cos(He.pitch)*r,c=()=>s.y+Math.sin(He.pitch)*r;for(let u=0;u<6;u++){const h=Math.max(En(a(),o()),0)+.6;if(c()>h)break;r*=.82}{const u=r;for(let h=1;h<=12;h++){const d=h/12;r=u*d;const f=a(),g=o(),v=c();let m=!1;for(const p of io)if(f>p.x0-.35&&f<p.x1+.35&&g>p.z0-.35&&g<p.z1+.35&&v<p.y1+1.3&&v>p.y0-.5){m=!0;break}if(!m){for(const p of Xn)if(f>p.x0&&f<p.x1&&g>p.z0&&g<p.z1&&v<(p.top||6.5)){m=!0;break}}if(!m&&h>3){for(const p of Wn)if(p.r<.5&&v<p.y6&&Math.abs(p.x-f)<1.4&&Math.abs(p.z-g)<1.4&&Math.hypot(p.x-f,p.z-g)<1.3){m=!0;break}}if(m){r=Math.max(1.2,u*(h-1)/12);break}r=u}}Wt.position.set(a(),Math.max(c(),Math.max(En(a(),o()),.3)+.6),o()),Wt.lookAt(s),yt.position.set(ue.pos.x+60,ue.pos.y+90,ue.pos.z+40),yt.target.position.copy(ue.pos),ze.userData.sky.position.copy(Wt.position),Uw();const l=nw(ue.pos.x,ue.pos.z);l!==mp&&(mp=l,document.getElementById("loc").textContent=l)}let mp="";function nw(i,e){return Math.hypot(i-lt.x,e-lt.z)<lt.r+8||wo(i,e)?"Varvet":Math.hypot(i-_i[1].x,e-_i[1].z)<60?"Grannön":Math.hypot(i-_i[3].x,e-_i[3].z)<34?"Fyrskäret":Math.hypot(i,e)>130?"Till sjöss":"Varvsön"}function vo(i){const e=new tn,t=r=>new rn({color:r}),n=new Te(new ia(.38,.5,4,10),t(i.shirt));n.position.y=1.1,e.add(n);const s=new Te(new bn(.3,16,12),t(i.skin||"#f1c7a4"));if(s.position.y=1.8,e.add(s),i.hat){const r=new Te(new bn(.31,14,8,0,Math.PI*2,0,Math.PI/2),t(i.hat));r.position.y=1.84,e.add(r)}if(i.hair){const r=new Te(new bn(.32,14,10,0,Math.PI*2,0,Math.PI*.62),t(i.hair));r.position.y=1.82,r.rotation.x=-.25,e.add(r)}if(i.beard){const r=new Te(new bn(.23,12,8,0,Math.PI*2,Math.PI*.45,Math.PI*.55),t(i.beard));r.position.set(0,1.76,.1),e.add(r)}for(const r of[-1,1]){const a=new Te(new bn(.045,8,6),t("#2a2a2a"));a.position.set(r*.11,1.82,.27),e.add(a)}for(const[r,a,o,c,l]of[[-.48,1.4,.42,.11,i.shirt],[.48,1.4,.42,.11,i.shirt],[-.17,.7,.5,.14,i.pants],[.17,.7,.5,.14,i.pants]]){const u=new Te(new ia(c,o,3,8),t(l));u.position.set(r,a-o/2-c*.5,0),e.add(u)}return e.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),ze.add(e),e}const Ve={},Xi=new Te(new Wi(.22,.5,4),new wn({color:"#ffc21a"}));Xi.rotation.x=Math.PI;ze.add(Xi);const ci=new Te(new ma(1.3,.12,6,28),new wn({color:"#ffc21a"}));ci.rotation.x=Math.PI/2;ci.visible=!1;ze.add(ci);let bt=null;function iw(){Ve.sven=vo({shirt:"#3f6e4a",pants:"#2b3a52",hat:"#1f2a44",beard:"#d9d4cc",skin:"#efc2a0"}),Ve.sven.position.set(13.6,Math.max(1.45,An(13.6,62)),62),Ve.sven.rotation.y=Math.PI*.15,Ve.sven.userData.name="Sven",sr(Ve.sven,qb);const i=_i[1];let e=-.74,t=.67,n=i.x,s=i.z;for(let v=0;v<120&&(n+=e,s+=t,!(En(n,s)<-.4));v++);const r=n+e*9,a=s+t*9,o=Math.atan2(e,t);bt={x0:n-e*2,z0:s-t*2,x1:r,z1:a,ang:o,boatX:r+t*3.2,boatZ:a-e*3.2};const c=[],l=Math.hypot(r-bt.x0,a-bt.z0),u=new Le(2.6,.28,l);u.rotateY(o),u.translate((bt.x0+r)/2,1.2,(bt.z0+a)/2),c.push(ce(u,"#9a7a55"));for(let v=1;v<l;v+=3)for(const m of[-1.1,1.1]){const p=bt.x0+e*v+t*m,_=bt.z0+t*v-e*m;c.push(ce(Se(new Vt(.15,.15,5,6),p,-1.2,_),"#5e4630"))}const h=new Te(Nt(c),Xt);h.castShadow=!0,ze.add(h),od.push({x0:bt.x0-e*3,z0:bt.z0-t*3,x1:r,z1:a,w:1.25,h:1.34}),Ve.majken=vo({shirt:"#c0392b",pants:"#2b2f36",hair:"#c9c2b8",skin:"#f2cdb0"}),Ve.majken.position.set(r-e*1.5,1.35,a-t*1.5),Ve.majken.rotation.y=o+Math.PI,Ve.majken.userData.name="Majken",Ve.majken.position.y=Math.max(1.34,An(Ve.majken.position.x,Ve.majken.position.z)),sr(Ve.majken,$b);const d=new tn,f=new Te(new Le(.45,.55,.5),new rn({color:"#1d1f24"}));f.position.y=.55,d.add(f);const g=new Te(new Le(.12,.8,.14),new rn({color:"#2b2f36"}));g.position.y=-.05,d.add(g),d.position.set(0,.1,-3.05),At.add(d),id(At,"motorbat.glb",{fit:5.8,rotY:Math.PI/2,y:.05,hideChildren:!0,liner:.975,waterMask:-.12}),V.job>2&&(At.position.set(bt.boatX,.5,bt.boatZ),At.rotation.y=o)}const gh=[{from:"sven",title:"Slipa Svens eka",reward:400,where:"Ekan på bockarna vid boden",offer:["Så du är Edvins barnbarn. Jag ser det på ögonen. Jag heter Sven – jag bor på andra sidan viken.","Här är nyckeln. Den har legat i min kakburk i trettio år.","Varvet är i ett sorgligt skick, men det går att få liv i. Och börjar du ta jobb så kommer folket tillbaka.","Min gamla eka står på bockarna där borta. Botten är full av havstulpaner och gammal färg.","Kan du slipa den ren? Jag betalar 400 kronor."],done:"Fint jobbat! Hon ser ut som ny. Här har du 400 kronor.",target:()=>({x:-6,z:47,r:4.6,label:"Slipa skrovet"}),game:"sand"},{from:"sven",title:"Byt propeller",reward:600,where:"Motorbåten vid bryggan",offer:["Nästa sak: propellern på motorbåten vid bryggan gick i en sten i somras.","Jag har köpt en ny. Kan du byta den? 600 kronor."],done:"Perfekt, nu går hon som ett spjut igen! 600 kronor till dig.",target:()=>({x:At.position.x+1.8,z:At.position.z-2.6,r:3,label:"Byt propellern"}),game:"prop"},{from:"sven",title:"Leverera båten till Grannön",reward:800,where:"Kör motorbåten till Majkens brygga",offer:["Jag har sålt motorbåten till Majken på Grannön.","Kan du köra över den till hennes brygga? Hon skjutsar dig tillbaka. 800 kronor!"],done:"",target:()=>({x:At.position.x+1.4,z:At.position.z,r:3.2,label:"Kör båten"}),game:"drive"}];function la(){return V.job<gh.length?gh[V.job]:null}function vh(i){return Ve[i].position}let Ji=null;function Zm(){const i=[];for(const t of tl)t(i);const e=la();if(e&&!V.jobOn){const t=vh(e.from);i.push({x:t.x,z:t.z,r:2.6,label:"Prata med "+(e.from==="sven"?"Sven":"Majken"),fn:()=>ow(e)})}else if(e&&V.jobOn){const t=e.target();i.push({x:t.x,z:t.z,r:t.r,label:t.label,fn:()=>_d(e)})}if(!e||V.jobOn){const t=vh("sven");i.push({x:t.x,z:t.z,r:2.2,label:"Prata med Sven",fn:()=>kt("Sven",[e?V.jobOn?"Du har ett jobb på gång: "+e.title.toLowerCase()+". "+e.where+".":"":"Inga fler jobb från mig just nu. Men ryktet sprider sig – snart står folk i kö."],null)})}return i}function sw(i){if(Ji=null,se.on&&se.dockItem&&!ut&&!jt&&(Ji=se.dockItem()),xi||se.on||ut)return;let e=99;for(const s of Zm()){const r=Math.hypot(s.x-ue.pos.x,s.z-ue.pos.z);r<s.r&&r<e&&(e=r,Ji=s)}const t=la();let n=null;if(t&&!V.jobOn)n=vh(t.from).clone(),n.y+=2.6;else if(t&&V.jobOn&&t.game!=="drive"){const s=t.target();n=new I(s.x,An(s.x,s.z)+2.6,s.z)}else t&&V.jobOn&&(n=At.position.clone(),n.y+=2.4);Xi.visible=!!n,n&&(Xi.position.copy(n),Xi.position.y+=Math.sin(i*3)*.15,Xi.rotation.y=i*2);for(const s in Ve){const r=Ve[s];if(r.userData.realModel?_s(r,jt&&jt.who.split(/[ ·(]/)[0]===r.userData.name?"talk":"idle"):r.visible&&(r.children[0].scale.y=1+Math.sin(i*2+s.length)*.015),!r.visible)continue;if(Math.hypot(r.position.x-ue.pos.x,r.position.z-ue.pos.z)<6){const o=Math.atan2(ue.pos.x-r.position.x,ue.pos.z-r.position.z);r.rotation.y+=Math.atan2(Math.sin(o-r.rotation.y),Math.cos(o-r.rotation.y))*.08}}}let jt=null;function rw(){const i=jt;ee("dlg").style.display="none",jt=null,nl(),i&&i.onNo&&i.onNo()}function gd(i,e,t,n,s,r){kt(i,e,s,!0),jt.yes=t,jt.no=n,jt.onNo=r,vd()}function kt(i,e,t,n){jt={who:i,lines:e.filter(Boolean),i:0,onEnd:t,accept:n},ee("dlg").style.display="block",vd()}const aw=i=>"/varvet/ui/por_"+i.split(/[ (·]/)[0].toLowerCase().replace(/å|ä/g,"a").replace(/ö/g,"o")+".png";function vd(){const i=jt;ee("dlgWho").textContent=i.who;const e=ee("dlgPor");e.dataset.n!==i.who&&(e.dataset.n=i.who,e.style.display="none",e.onload=()=>e.style.display="block",e.onerror=()=>e.style.display="none",e.src=aw(i.who)),ee("dlgTxt").textContent=i.lines[i.i],qm(i.who,i.lines[i.i]);const t=i.i>=i.lines.length-1;ee("dlgNext").textContent=t?i.accept?i.yes||"Ta jobbet":"OK":"Fortsätt",ee("dlgNo").textContent=i.no||"Inte nu",ee("dlgNo").style.display=t&&i.accept?"inline-block":"none"}function _h(i=!0){const e=jt;if(e){if(e.i<e.lines.length-1){e.i++,vd();return}ee("dlg").style.display="none",jt=null,i&&e.onEnd&&e.onEnd()}}function ow(i){kt(i.from==="sven"?"Sven":"Majken",i.offer,()=>{V.jobOn=1,ht("Nytt jobb: "+i.title,2200),lr(),an(),st("done")},!0)}function Qm(){const i=la();V.kr+=i.reward,V.rykte=(V.rykte||0)+5,V.job++,V.jobOn=0,Fn(),lr(),an(),st("done"),ht(`+${i.reward} kr`,2e3)}let ut=null;const ya=()=>ee("gcv");function _d(i){if(i.game==="drive"){uw();return}ut={J:i,t:0},ee("game").style.display="flex",Yn.mx=Yn.mz=0;const e=ya(),t=e.getBoundingClientRect(),n=Math.min(2,devicePixelRatio||1);e.width=t.width*n,e.height=t.height*n,ut.dpr=n,i.init?i.init():i.game==="sand"?cw():lw(),requestAnimationFrame(eg)}function Eo(i){const e=ut;if(!e||(ut=null,ee("game").style.display="none",!i))return;const t=e.J;if(t.onDone){t.onDone(e.q);return}kt(t.from==="sven"?"Sven":"Majken",[t.done],Qm)}function eg(){ut&&(requestAnimationFrame(eg),ut.draw())}function es(i){const e=ya(),t=e.getBoundingClientRect();return{x:(i.clientX-t.left)*ut.dpr,y:(i.clientY-t.top)*ut.dpr}}function cw(){const i=ya(),e=i.width,t=i.height,n=i.getContext("2d");ee("gTitle").textContent="Slipa skrovet",ee("gHelp").textContent="Dra fingret över påväxten tills botten är ren";const s=new Path2D,r=e/2,a=t*.42,o=e*.42,c=t*.3;s.moveTo(r-o,a-c*.3),s.lineTo(r+o*.95,a-c*.45),s.quadraticCurveTo(r+o*1.05,a+c*.4,r+o*.55,a+c*.8),s.quadraticCurveTo(r,a+c*1.05,r-o*.8,a+c*.6),s.quadraticCurveTo(r-o*1.02,a+c*.2,r-o,a-c*.3),s.closePath();const l=document.createElement("canvas");l.width=e,l.height=t;const u=l.getContext("2d");u.save(),u.clip(s);const h=el(5);u.fillStyle="#6b7d4a",u.fillRect(0,0,e,t);for(let m=0;m<260;m++)u.fillStyle=["#55663a","#7d8f55","#8a7a5a","#a39a86","#4b5a33"][m%5],u.beginPath(),u.arc(h()*e,a-c*.2+h()*c*1.3,(6+h()*22)*ut.dpr,0,7),u.fill();for(let m=0;m<120;m++)u.fillStyle="#e8e2d2",u.beginPath(),u.arc(h()*e,a+h()*c*.9,(2+h()*4)*ut.dpr,0,7),u.fill();u.restore();const d={last:null,prog:0,parts:[],total:0},f=()=>{const m=u.getImageData(0,0,e,t).data;let p=0;for(let _=3;_<m.length;_+=4*97)m[_]>40&&p++;return p};d.total=f();const g=m=>{u.globalCompositeOperation="destination-out",u.lineCap="round",u.lineWidth=46*ut.dpr,u.beginPath(),u.moveTo((d.last||m).x,(d.last||m).y),u.lineTo(m.x,m.y),u.stroke(),u.globalCompositeOperation="source-over",d.last=m;for(let p=0;p<2;p++)d.parts.push({x:m.x,y:m.y,vx:(Math.random()-.5)*6,vy:-Math.random()*4,l:1})};i.onpointerdown=m=>{d.last=es(m),g(d.last),i.setPointerCapture(m.pointerId),st("pick")},i.onpointermove=m=>{d.last&&g(es(m))},i.onpointerup=i.onpointercancel=()=>{d.last=null};let v=0;ut.draw=()=>{n.fillStyle="#cfe3ec",n.fillRect(0,0,e,t),n.fillStyle="#b9a789",n.fillRect(0,t*.82,e,t*.18),n.fillStyle="#6b5137";for(const m of[-.45,.4])n.fillRect(r+o*m-12*ut.dpr,a+c*.6,24*ut.dpr,t*.82-(a+c*.6));n.fillStyle="#f4f1ea",n.fill(s),n.save(),n.clip(s),n.fillStyle="#2f5d8a",n.fillRect(0,a-c*.5,e,c*.22),n.restore(),n.lineWidth=3*ut.dpr,n.strokeStyle="#5b5f66",n.stroke(s),n.drawImage(l,0,0);for(const m of d.parts)m.x+=m.vx,m.y+=m.vy,m.vy+=.35,m.l-=.03,n.fillStyle=`rgba(200,190,160,${m.l})`,n.fillRect(m.x,m.y,4*ut.dpr,4*ut.dpr);d.parts=d.parts.filter(m=>m.l>0),++v%12===0&&(d.prog=1-f()/d.total,ee("gBar").style.width=Math.min(100,d.prog/.92*100)+"%",d.prog>=.92&&(i.onpointerdown=i.onpointermove=null,setTimeout(()=>Eo(!0),400)))}}function lw(){const i=ya(),e=i.width,t=i.height,n=i.getContext("2d"),s=ut.dpr,r=e*.45,a=t*.48,o={st:0,acc:0,lastA:null,drag:null,old:{x:r,y:a,on:!0,rot:0},nw:{x:e*.85,y:t*.75,on:!1,rot:0},nut:0},c=["Lossa muttern – snurra moturs runt propellern","Dra av den gamla propellern","Dra den nya propellern till axeln","Dra åt muttern – snurra medurs"];ee("gTitle").textContent="Byt propeller";const l=()=>{ee("gHelp").textContent=`${o.st+1}/4: ${c[o.st]}`,ee("gBar").style.width=o.st/4*100+"%"};l();const u=d=>Math.atan2(d.y-a,d.x-r);i.onpointerdown=d=>{const f=es(d);i.setPointerCapture(d.pointerId),o.st===0||o.st===3?o.lastA=u(f):o.st===1&&Math.hypot(f.x-o.old.x,f.y-o.old.y)<110*s?o.drag="old":o.st===2&&Math.hypot(f.x-o.nw.x,f.y-o.nw.y)<110*s&&(o.drag="nw")},i.onpointermove=d=>{const f=es(d);if(o.lastA!==null){const g=u(f);let v=g-o.lastA;v>Math.PI&&(v-=2*Math.PI),v<-Math.PI&&(v+=2*Math.PI),o.lastA=g;const m=o.st===0?-1:1;v*m>0&&(o.acc+=Math.abs(v),o.nut+=v,Math.random()<.15&&st("pick"));const p=Math.PI*2*2.5;ee("gBar").style.width=(o.st+Math.min(1,o.acc/p))/4*100+"%",o.acc>=p&&(o.acc=0,o.lastA=null,o.st===0?(o.st=1,l()):(i.onpointerdown=i.onpointermove=null,ee("gBar").style.width="100%",setTimeout(()=>Eo(!0),500)))}if(o.drag){const g=o[o.drag];g.x=f.x,g.y=f.y}},i.onpointerup=i.onpointercancel=()=>{o.lastA=null,o.drag==="old"&&(Math.hypot(o.old.x-r,o.old.y-a)>200*s?(o.old.on=!1,o.st=2,o.nw.on=!0,l(),st("place")):(o.old.x=r,o.old.y=a)),o.drag==="nw"&&Math.hypot(o.nw.x-r,o.nw.y-a)<60*s&&(o.nw.x=r,o.nw.y=a,o.st=3,l(),st("place")),o.drag=null};const h=(d,f,g)=>{n.save(),n.translate(d.x,d.y),n.rotate(g),n.fillStyle=f;for(let v=0;v<3;v++)n.rotate(Math.PI*2/3),n.beginPath(),n.ellipse(0,-48*s,24*s,48*s,.35,0,7),n.fill();n.fillStyle="#5b5f66",n.beginPath(),n.arc(0,0,18*s,0,7),n.fill(),n.restore()};ut.draw=()=>{if(n.fillStyle="#2a5a72",n.fillRect(0,0,e,t),n.fillStyle="#f4f1ea",n.beginPath(),n.moveTo(0,0),n.lineTo(e*.32,0),n.quadraticCurveTo(e*.36,t*.25,e*.2,t*.4),n.lineTo(0,t*.42),n.fill(),n.fillStyle="#1d1f24",n.fillRect(e*.18,t*.05,38*s,a-t*.05),n.fillStyle="#3a3f47",n.fillRect(e*.18,a-10*s,r-e*.18,20*s),o.old.on&&h(o.old,"#b88b3a",o.nut*.3),o.nw.on&&h(o.nw,"#e2c25a",o.st===3?o.nut*.3:0),o.st===2&&!o.drag&&(n.fillStyle="rgba(255,255,255,.75)",n.font=`${14*s}px system-ui`,n.textAlign="center",n.fillText("Ny propeller",o.nw.x,o.nw.y+80*s)),o.st===0||o.st===3){n.save(),n.translate(r,a),n.rotate(o.nut),n.fillStyle="#c0c6cc",n.beginPath();for(let f=0;f<6;f++){const g=f/6*Math.PI*2;n.lineTo(Math.cos(g)*16*s,Math.sin(g)*16*s)}n.fill(),n.restore(),n.strokeStyle="rgba(255,194,26,.8)",n.lineWidth=4*s,n.beginPath();const d=o.st===0?-1:1;n.arc(r,a,95*s,-Math.PI/2,-Math.PI/2+d*1.6,d<0),n.stroke()}o.st===1&&(n.strokeStyle="rgba(255,194,26,.6)",n.setLineDash([8*s,8*s]),n.beginPath(),n.arc(r,a,200*s,0,7),n.stroke(),n.setLineDash([]))}}const se={on:!1,v:0,yaw:0,boat:null,free:!1,target:null,dockItem:null,forceHome:null,race:null};function uw(){se.on=!0,se.v=0,se.boat=At,se.free=!1,se.target={x:bt.boatX,z:bt.boatZ,r:4.5,ring:!0,onArrive:dw},se.yaw=At.rotation.y,pt.visible=!0,ee("hint").style.opacity=1,ee("hint").textContent="Vänster tumme: gasa och styr · Kör till den gula ringen vid Grannön",ci.visible=!0,ci.position.set(bt.boatX,.35,bt.boatZ),ht("Kör till Majkens brygga!",2200)}function hw(i,e,t){const n=se.boat||At,s=-t;se.steer=(se.steer||0)+(e-(se.steer||0))*Math.min(1,i*4.5);const r=se.steer,a=se.vmax||11;se.v+=(s*a-se.v)*Math.min(1,i*(s?.9:.5)),se.lock&&(se.v*=Math.max(0,1-i*3)),se.yaw-=r*i*1.3*Yi(Math.abs(se.v)/4,.25,1)*Math.sign(se.v||1);const o=n.position.x+Math.sin(se.yaw)*se.v*i,c=n.position.z+Math.cos(se.yaw)*se.v*i,l=(f,g)=>En(f,g)<-.3&&!(Math.abs(f-14)<2&&g>57&&g<92)&&!cd(f,g,.5)&&Math.abs(f)<Bt/2-10&&Math.abs(g)<Bt/2-10,u=(f,g)=>l(f+Math.sin(se.yaw)*2.8,g+Math.cos(se.yaw)*2.8),h=!l(n.position.x,n.position.z);l(o,c)&&u(o,c)||h&&En(o,c)<=En(n.position.x,n.position.z)?(n.position.x=o,n.position.z=c):se.v*=-.3,ue.pos.set(n.position.x,n.position.y+.1,n.position.z),ue.yaw=se.yaw,He.tYaw+=Math.atan2(Math.sin(se.yaw-He.tYaw),Math.cos(se.yaw-He.tYaw))*Math.min(1,i*1.5),Math.random()<Math.abs(se.v)*.02&&st("tick");const d=se.target;if(d){const f=d.x-n.position.x,g=d.z-n.position.z,v=Math.atan2(f,g)-He.yaw;ee("compass").style.display="flex",ee("cArrow").style.transform=`rotate(${-v*180/Math.PI-90}deg)`,ee("cDist").textContent=(d.label?d.label+" · ":"")+Math.round(Math.hypot(f,g))+" m",ci.visible=!!d.ring,d.ring&&ci.position.set(d.x,.35,d.z),d.onArrive&&Math.hypot(f,g)<d.r&&Math.abs(se.v)<(d.vmax||7.5)&&d.onArrive()}else ee("compass").style.display="none",ci.visible=!1}function dw(){se.on=!1,se.target=null,ee("compass").style.display="none",se.v=0,ci.visible=!1,At.position.set(bt.boatX,.5,bt.boatZ),At.rotation.set(0,bt.ang,0),At.userData.yaw=bt.ang,ee("hint").style.opacity=0,kt("Majken",["Åh, där är hon! Tack ska du ha, den är ju fin som snus.","Sven sa att du skulle ha 800 kronor. Hoppa in i min eka så skjutsar jag dig hem."],()=>{Qm(),ts(()=>{ue.pos.set(14,1.45,70),ue.yaw=Math.PI,He.tYaw=He.yaw=Math.PI,kt("Sven",["Där är du ju! Majken ringde redan och skröt om båten. Bra jobbat."],null)})})}function ts(i){const e=ee("fade");e.style.opacity=1,setTimeout(()=>{i(),setTimeout(()=>e.style.opacity=0,300)},500)}let nt=null,li=null,xd=null,xh=null,yh=null,tg=null,ng=null,Ar=0,tu=6,nu=4,gp=0,lc=0;const ws={on:!0};function fw(i=4){const e=nt.sampleRate*i,t=nt.createBuffer(1,e,nt.sampleRate),n=t.getChannelData(0);let s=0;for(let r=0;r<e;r++){const a=Math.random()*2-1;s=(s+.02*a)/1.02,n[r]=s*3.5+a*.25}return t}function iu(i,e,t=.7){const n=nt.createBufferSource();n.buffer=xd,n.loop=!0,n.loopStart=Math.random(),n.start(0,Math.random()*3);const s=nt.createBiquadFilter();s.type=i,s.frequency.value=e,s.Q.value=t;const r=nt.createGain();return r.gain.value=0,n.connect(s),s.connect(r),r.connect(li),{g:r,f:s}}function ig(){if(nt){nt.state==="suspended"&&nt.resume();return}try{nt=new(window.AudioContext||window.webkitAudioContext),li=nt.createGain(),ws.on=!!Rt.snd,li.gain.value=ws.on?.9:0,li.connect(nt.destination),xd=fw(),xh=iu("lowpass",520),yh=iu("bandpass",650,.6),ng=yh.f,tg=iu("highpass",2600),document.addEventListener("visibilitychange",()=>{nt&&(document.hidden?nt.suspend():nt.resume())})}catch{nt=null}}const su=(i,e,t=.4)=>i.gain.setTargetAtTime(ws.on?e:0,nt.currentTime,t);function pw(){ws.on=!!Rt.snd,li&&nt&&li.gain.setTargetAtTime(ws.on?.9:0,nt.currentTime,.1)}function Br({type:i="bandpass",freq:e=1e3,q:t=1,dur:n=.08,gain:s=.08,pan:r=0,at:a=0}){const o=nt.currentTime+a,c=nt.createBufferSource();c.buffer=xd;const l=nt.createBiquadFilter();l.type=i,l.frequency.value=e,l.Q.value=t;const u=nt.createGain();u.gain.setValueAtTime(0,o),u.gain.linearRampToValueAtTime(s,o+.006),u.gain.exponentialRampToValueAtTime(5e-4,o+n);const h=nt.createStereoPanner?nt.createStereoPanner():null;c.connect(l),l.connect(u),h?(h.pan.value=r,u.connect(h),h.connect(li)):u.connect(li),c.start(o,Math.random()*3),c.stop(o+n+.05)}function Uc({type:i="sine",f0:e=200,f1:t=120,dur:n=.1,gain:s=.06,at:r=0,lp:a=0,pan:o=0}){const c=nt.currentTime+r,l=nt.createOscillator(),u=nt.createGain();l.type=i,l.frequency.setValueAtTime(e,c),l.frequency.exponentialRampToValueAtTime(Math.max(20,t),c+n),u.gain.setValueAtTime(0,c),u.gain.linearRampToValueAtTime(s,c+Math.min(.03,n*.2)),u.gain.exponentialRampToValueAtTime(5e-4,c+n);let h=l;if(a){const f=nt.createBiquadFilter();f.type="lowpass",f.frequency.value=a,l.connect(f),h=f}const d=nt.createStereoPanner?nt.createStereoPanner():null;h.connect(u),d?(d.pan.value=o,u.connect(d),d.connect(li)):u.connect(li),l.start(c),l.stop(c+n+.05)}function mw(i){const e=.85+Math.random()*.3;if(i==="wood")Uc({f0:150*e,f1:90,dur:.09,gain:.07}),Br({freq:900*e,q:1.4,dur:.06,gain:.05}),Math.random()<.06&&gw();else if(i==="gravel")for(let t=0;t<3;t++)Br({type:"highpass",freq:2200*e,q:.5,dur:.05,gain:.035,at:t*.025});else Br(i==="rock"?{freq:1600*e,q:2,dur:.04,gain:.04}:{freq:1100*e,q:.5,dur:.11,gain:.03})}function gw(){const i=nt.createOscillator(),e=nt.createBiquadFilter(),t=nt.createGain(),n=nt.currentTime;i.type="sawtooth",i.frequency.setValueAtTime(170,n),i.frequency.linearRampToValueAtTime(240,n+.2),i.frequency.linearRampToValueAtTime(190,n+.38),e.type="bandpass",e.frequency.value=900,e.Q.value=6,t.gain.setValueAtTime(0,n),t.gain.linearRampToValueAtTime(.03,n+.05),t.gain.exponentialRampToValueAtTime(5e-4,n+.42),i.connect(e),e.connect(t),t.connect(li),i.start(n),i.stop(n+.45)}function vw(i){const e=Math.random()*1.6-.8,t=2+Math.floor(Math.random()*3),n=1350+Math.random()*400,s=.045*i;for(let r=0;r<t;r++){const a=r*(.22+Math.random()*.08);Uc({type:"triangle",f0:n*1.5,f1:n,dur:.2,gain:s,at:a,lp:3200,pan:e}),Uc({type:"sine",f0:n*3,f1:n*2,dur:.16,gain:s*.25,at:a,pan:e})}}function _w(){for(const i of[92,138])Uc({type:"sawtooth",f0:i,f1:i*.99,dur:2.6,gain:.035,lp:380,pan:-.3})}function xw(i=.08){nt&&(Br({type:"lowpass",freq:900,dur:.5,gain:i}),Br({type:"bandpass",freq:2400,q:.8,dur:.25,gain:i*.5,at:.03}))}function yw(i,e){return wo(i,e)?"wood":Math.hypot(i-lt.x,e-lt.z)<lt.r?"gravel":En(i,e)>6?"rock":"grass"}function Mw(i,e){if(!nt||!e)return;Ar+=i;const t=$i(),n=ca();if(!t||!n)return;const s=ue.pos,r=se.on;let a=0;for(let l=0;l<8;l++){const u=l/8*Math.PI*2+Ar;En(s.x+Math.cos(u)*11,s.z+Math.sin(u)*11)<-.2&&a++}lc+=((r?.75:a/8)-lc)*Math.min(1,i*1.5);const o=.55+.45*Math.sin(Ar*.9)*Math.sin(Ar*.37+1);su(xh.g,(.015+.11*lc)*o*(.8+n.wind*.25),.3),xh.f.frequency.setTargetAtTime(380+300*o+(r?200:0),nt.currentTime,.3),su(yh.g,Math.max(0,.008+.03*(n.wind-.7)+Math.max(0,s.y-4)*.002),.8),ng.frequency.setTargetAtTime(520+260*Math.sin(Ar*.23)+140*Math.sin(Ar*.71),nt.currentTime,.5),su(tg.g,n.rain?.03*n.rain:0,1);const c=t.min>6*60+30&&t.min<20*60+30;if(tu-=i,tu<=0&&(tu=7+Math.random()*14,c&&!n.rain&&n.wind<2.5&&lc>.15&&ws.on&&vw(.4+Math.random()*.6)),nu-=i,nu<=0&&(nu=26,n.name==="Dimma"&&ws.on&&_w()),!r&&ue.speed>.4){const l=Math.floor(ue.walk/Math.PI);l!==gp&&(gp=l,ws.on&&mw(yw(s.x,s.z)))}}function cr(i,e,t){const n=ee(i),s=()=>n.querySelectorAll("button").forEach(r=>r.classList.toggle("on",+r.dataset.v===Rt[e]));n.querySelectorAll("button").forEach(r=>r.onclick=()=>{Rt[e]=+r.dataset.v,Im(),s(),t&&t()}),s()}cr("sQ","q",Bm);cr("sF","fps",()=>d1(Rt.fps));cr("sP","perf",()=>Qc.style.display=Rt.perf?"block":"none");cr("sS","snd",pw);cr("sL","look");cr("sV","voice",nl);Qc.style.display=Rt.perf?"block":"none";const sg=()=>{ee("menu").style.display="flex",ee("mainCard").style.display="none",ee("settings").style.display="block"};ee("bSet").onclick=sg;ee("bSet2").onclick=sg;ee("bClose").onclick=()=>{ee("settings").style.display="none",Hi?ee("menu").style.display="none":ee("mainCard").style.display="block"};ee("bPerf").onclick=()=>{Rt.perf=Rt.perf?0:1,Im(),Qc.style.display=Rt.perf?"block":"none",cr("sP","perf")};let Sc="kvinna";function Sw(){Sc=V.char||"kvinna";const i=!V.char;ee("pick").style.display=i?"block":"none",ee("pname").value=V.pname||"",document.querySelectorAll(".pickc").forEach(e=>{e.classList.toggle("on",e.dataset.c===Sc),e.onclick=()=>{Sc=e.dataset.c,document.querySelectorAll(".pickc").forEach(t=>t.classList.toggle("on",t===e))}})}setTimeout(Sw,0);ee("bPlay").onclick=()=>{V.char||(V.char=Sc,V.pname=(ee("pname").value||"").trim().slice(0,16),sr(pt,km[V.char]),an()),Hi=!0,ee("menu").style.display="none",He.yaw=He.tYaw=ue.yaw;try{document.documentElement.requestFullscreen&&innerWidth<900&&document.documentElement.requestFullscreen().catch(()=>{})}catch{}};let Hi=!1;const V={char:null,pname:"",virke:4,skrot:0,picked:0,pieces:[],obj:0,digs:[],kr:0,job:0,jobOn:0,life:null},io=[],Oe=2,Yr=2.6,zt={golv:{name:"Golv",cost:{virke:2},kind:"floor"},vagg:{name:"Vägg",cost:{virke:2},kind:"wall"},fonster:{name:"Fönster",cost:{virke:2,skrot:1},kind:"wall"},dorr:{name:"Dörr",cost:{virke:2,skrot:1},kind:"wall"},tak:{name:"Tak",cost:{virke:3},kind:"roof"},jamna:{name:"Jämna",cost:{},kind:"level"}},ua=["golv","vagg","fonster","dorr","tak","jamna"],sl=[[0,1],[1,0],[0,-1],[-1,0]],zr=i=>Math.floor(i/Oe),ha=i=>i*Oe+Oe/2;function kc(i,e){const t=i*Oe,n=e*Oe;let s=-99,r=99;for(const[a,o]of[[0,0],[Oe,0],[0,Oe],[Oe,Oe],[Oe/2,Oe/2],[Oe/2,0],[0,Oe/2],[Oe,Oe/2],[Oe/2,Oe]]){let c=En(t+a,n+o);wo(t+a,n+o)&&(c=Math.max(c,1.45)),s=Math.max(s,c),r=Math.min(r,c)}return{top:Math.round((s*.6+Math.max(r,-.1)*.4+.12)*10)/10,mn:r,mx:s}}const As=(i,e)=>V.pieces.find(t=>t.t==="golv"&&t.i===i&&t.k===e);function yd(i,e){const t=As(i,e);if(t)return t.y;let n=null;for(const[s,r]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){const a=As(i+s,e+r);a&&(n===null||a.y>n)&&(n=a.y)}return n!==null?n:kc(i,e).top}function bw(i,e,t){const n=sl[t],s=As(i,e),r=As(i+n[0],e+n[1]);return s||r?Math.max(s?s.y:-99,r?r.y:-99):yd(i,e)}function ww(i,e){let t=null;for(const s of[[i,e,0],[i,e,1],_o(i,e,2),_o(i,e,3)]){const r=V.pieces.find(a=>zt[a.t].kind==="wall"&&a.i===s[0]&&a.k===s[1]&&a.r===s[2]);r&&(t===null||r.y>t)&&(t=r.y)}if(t!==null)return t+Yr;const n=As(i,e);if(n)return n.y+Yr;for(const[s,r]of[[1,0],[-1,0],[0,1],[0,-1]]){const a=V.pieces.find(o=>o.t==="tak"&&o.i===i+s&&o.k===e+r);if(a)return a.y}return yd(i,e)+Yr}function _o(i,e,t){return t===2?[i,e-1,0]:t===3?[i-1,e,1]:[i,e,t]}function vp(i){return zt[i.t].kind==="wall"?`w${i.i},${i.k},${i.r}`:zt[i.t].kind+i.i+","+i.k}const Ew="#a47c52",Tw="#8f6a45",Ui="#b8392b",ki="#f2efe8",Aw="#bfe2f0",Rw="#3b3f45";function rg(i){const e=Oe+.04,t=.22,n=Yr;if(i==="golv"){const s=[ce(Se(new Le(Oe+.02,5,Oe+.02),0,-2.65,0),"#9c9690"),ce(Se(new Le(Oe+.06,.12,Oe+.06),0,-.42,0),"#7f7a75"),ce(Se(new Le(Oe+.08,.14,Oe+.08),0,-.08,0),"#6b5137")];for(let r=0;r<5;r++)s.push(ce(Se(new Le(Oe/5-.03,.06,Oe),-Oe/2+Oe/10+r*Oe/5,.01,0),r%2?Ew:Tw));return Nt(s)}if(i==="vagg")return Nt([ce(Se(new Le(e,n,t),0,n/2,0),Ui),ce(Se(new Le(e,.12,t+.04),0,n-.06,0),ki)]);if(i==="fonster")return Nt([ce(Se(new Le(e,.9,t),0,.45,0),Ui),ce(Se(new Le(e,.6,t),0,n-.3,0),Ui),ce(Se(new Le(.5,1.1,t),-e/2+.25,1.45,0),Ui),ce(Se(new Le(.5,1.1,t),e/2-.25,1.45,0),Ui),ce(Se(new Le(1.04,1.1,.06),0,1.45,0),Aw),ce(Se(new Le(1.14,.1,t+.08),0,.9,0),ki),ce(Se(new Le(1.14,.1,t+.08),0,2,0),ki),ce(Se(new Le(.08,1.1,t+.08),0,1.45,0),ki),ce(Se(new Le(e,.12,t+.04),0,n-.06,0),ki)]);if(i==="dorr")return Nt([ce(Se(new Le(.55,n,t),-e/2+.275,n/2,0),Ui),ce(Se(new Le(.55,n,t),e/2-.275,n/2,0),Ui),ce(Se(new Le(e-1.1,.5,t),0,n-.25,0),Ui),ce(Se(new Le(.1,2.15,t+.08),-.47,1.07,0),ki),ce(Se(new Le(.1,2.15,t+.08),.47,1.07,0),ki),ce(Se(new Le(1.04,.1,t+.08),0,2.15,0),ki),ce(Se(new Le(e,.12,t+.04),0,n-.06,0),ki)]);if(i==="jamna")return Nt([ce(Se(new Le(Oe,.08,Oe),0,.04,0),"#c9b48f",0)]);if(i==="tak"){const r=Math.hypot(Oe,1.1)+.06,a=Math.atan2(1.1,Oe),o=new Le(Oe+.3,.16,r);o.rotateX(-a),o.translate(0,1.1/2+.08,0);const c=new So;c.moveTo(-Oe/2,0),c.lineTo(Oe/2,0),c.lineTo(Oe/2,1.1),c.closePath();const l=[ce(o,Rw)];for(const u of[-1,1]){const h=new Jc(c,{depth:.12,bevelEnabled:!1});h.rotateY(-Math.PI/2),h.translate(u*Oe/2+(u<0?.12:0),0,0),l.push(ce(h,Ui))}return Nt(l)}}const Ir={},ag=400;let Fc=null;function Cw(i){Fc=i}function Mh(i,e,t,n,s){if(!Fc)return;const r=Fc.geometry,a=r.attributes.position;r.attributes.color;const o=Bt/un,c=3.2,l=i*Oe,u=l+Oe,h=e*Oe,d=h+Oe,f=Math.max(0,Math.floor((l-c+Bt/2)/o)),g=Math.min(un,Math.ceil((u+c+Bt/2)/o)),v=Math.max(0,Math.floor((h-c+Bt/2)/o)),m=Math.min(un,Math.ceil((d+c+Bt/2)/o)),p=r.attributes.splat;let _=!1;for(let y=v;y<=m;y++)for(let x=f;x<=g;x++){const P=-Bt/2+x*o,E=-Bt/2+y*o,A=Math.max(l-P,0,P-u),C=Math.max(h-E,0,E-d),S=Math.hypot(A,C);if(S>c)continue;const M=y*(un+1)+x,R=xs[M];if(s){const k=S<=0?t-.02:R+(t-.02-R)*(1-S/c)*(1-S/c);if(Math.abs(k-R)>.005){if(xs[M]=k,a.setY(M,k),p){const B=.5*(1-S/c);p.setXYZW(M,p.getX(M)*(1-B),p.getY(M)*(1-B),p.getZ(M)*(1-B),p.getW(M)+(1-p.getW(M))*B)}_=!0}continue}const F=t-.07+S*.6;if(R>F){if(xs[M]=F,a.setY(M,F),p){const k=.75*(1-S/c);p.setXYZW(M,p.getX(M)*(1-k),p.getY(M)*(1-k),p.getZ(M)*(1-k),p.getW(M)+(1-p.getW(M))*k)}_=!0}}_&&n&&og()}function og(){const i=Fc.geometry;if(i.attributes.position.needsUpdate=!0,i.attributes.color.needsUpdate=!0,i.attributes.splat&&(i.attributes.splat.needsUpdate=!0),i.computeVertexNormals(),i.computeBoundingSphere(),Tn){const e=Tn.material.uniforms.hT.value,t=Wm();e.image.data.set(t.image.data),e.needsUpdate=!0,t.dispose()}}function Pw(){for(const i of V.digs)Mh(i[0],i[1],i[2],!1,!!i[3]);V.digs.length&&og();for(const i of ua){const e=new uo(rg(i),Xt,ag);e.count=0,e.castShadow=!0,e.receiveShadow=!0,e.frustumCulled=!1,ze.add(e),Ir[i]=e}Nw(),kw(),Md(),Fn()}const ji=new qe,Oc=new _n,Bc=new Un,bc=new I(1,1,1),er=new I;function zc(i,e){const t=zt[i.t].kind;let n=ha(i.i),s=ha(i.k),r=0;if(t==="wall"){const a=sl[i.r];n+=a[0]*Oe/2,s+=a[1]*Oe/2,r=i.r%2?Math.PI/2:0}return t==="roof"&&(r=-i.r*Math.PI/2),Bc.set(0,r,0),Oc.setFromEuler(Bc),er.set(n,i.y,s),e.compose(er,Oc,bc),e}function Md(){const i={};for(const e of ua)i[e]=0;for(const e of V.pieces){const t=Ir[e.t];i[e.t]>=ag||t.setMatrixAt(i[e.t]++,zc(e,ji))}for(const e of ua)Ir[e].count=i[e],Ir[e].instanceMatrix.needsUpdate=!0,Ir[e].computeBoundingSphere&&Ir[e].computeBoundingSphere();io.length=0;for(const e of V.pieces){if(zt[e.t].kind!=="wall")continue;const t=sl[e.r],n=ha(e.i)+t[0]*Oe/2,s=ha(e.k)+t[1]*Oe/2,r=e.r%2===0,a=.22,o=(c,l)=>{r?io.push({x0:n+c,x1:n+l,z0:s-a,z1:s+a,y0:e.y,y1:e.y+Yr}):io.push({x0:n-a,x1:n+a,z0:s+c,z1:s+l,y0:e.y,y1:e.y+Yr})};e.t==="dorr"?(o(-1.02,-.5),o(.5,1.02)):o(-1.02,1.02)}}function Iw(i,e,t){for(const n of io)if(i>n.x0-.25&&i<n.x1+.25&&e>n.z0-.25&&e<n.z1+.25&&t<n.y1-.2&&t>n.y0-1.5)return!0;return!1}function Lw(i,e){const t=As(zr(i),zr(e));return t?t.y:null}let Gn,Hc=!1,fn={t:"golv",r:0},xi=!1,ft=null;const cg=new wn({color:"#7dff8a",transparent:!0,opacity:.45,depthWrite:!1}),Dw=new wn({color:"#ff5a4a",transparent:!0,opacity:.45,depthWrite:!1}),Sh={};function Nw(){for(const i of ua)Sh[i]=rg(i);Gn=new Te(Sh.golv,cg),Gn.visible=!1,Gn.renderOrder=3,ze.add(Gn)}function Sd(){const i=Math.sin(ue.yaw),e=Math.cos(ue.yaw),t=zt[fn.t].kind;let n,s,r=fn.r;if(t==="wall"){const o=ue.pos.x+i*.9,c=ue.pos.z+e*.9;n=zr(o),s=zr(c),r=Math.abs(i)>Math.abs(e)?i>0?1:3:e>0?0:2,r=(r+fn.r)%4;const l=_o(n,s,r);n=l[0],s=l[1],r=l[2]}else{const o=ue.pos.x+i*2.2,c=ue.pos.z+e*2.2;n=zr(o),s=zr(c),t==="roof"&&(r=((Math.abs(i)>Math.abs(e)?i>0?1:3:e>0?0:2)+fn.r)%4)}const a={t:fn.t,i:n,k:s,r:t==="floor"?0:r};return a.y=t==="roof"?ww(n,s):t==="wall"?bw(n,s,r):t==="level"?(()=>{const o=kc(n,s);return Math.round((o.mx+Math.max(o.mn,-.1))/2*10)/10})():yd(n,s),a}function lg(i){const e=zt[i.t].kind,t=zt[i.t].cost;for(const c in t)if(V[c]<t[c])return"Saknar "+c;const n=vp(i);if(V.pieces.some(c=>vp(c)===n))return"Upptaget";const s=i.i*Oe,r=i.k*Oe,a=s+Oe,o=r+Oe;if(e==="level"){const c=kc(i.i,i.k);if(c.mx<-.2)return"För djupt vatten";if(As(i.i,i.k))return"Det är redan byggt här";if(c.mx-c.mn<.12)return"Redan plant";const l=i.i*Oe,u=i.k*Oe,h=l+Oe,d=u+Oe;for(const f of Xn)if(f.x0<h&&f.x1>l&&f.z0<d&&f.z1>u)return"I vägen";for(const f of Wn)if(f.x>l-.3&&f.x<h+.3&&f.z>u-.3&&f.z<d+.3)return"Träd eller sten i vägen";return""}if(e==="floor"){const c=kc(i.i,i.k);if(c.mx<-.2)return"För djupt vatten";if(i.y-c.mn>3.5)return"För högt över marken";if(c.mx-i.y>1.6)return"Marken är för hög här";for(const l of Xn)if(l.x0<a&&l.x1>s&&l.z0<o&&l.z1>r)return"I vägen";for(const l of Wn)if(l.x>s-.3&&l.x<a+.3&&l.z>r-.3&&l.z<o+.3)return"Träd eller sten i vägen"}if(e==="wall"){const c=sl[i.r],l=ha(i.i)+c[0],u=ha(i.k)+c[1];if(An(l,u)<-.3&&!As(i.i,i.k))return"För djupt vatten";for(const h of Wn)if(Math.hypot(h.x-l,h.z-u)<h.r+.9)return"Träd eller sten i vägen";for(const h of Xn)if(l>h.x0-.3&&l<h.x1+.3&&u>h.z0-.3&&u<h.z1+.3)return"I vägen"}if(e==="roof"){const c=V.pieces.filter(u=>zt[u.t].kind==="wall"&&[[i.i,i.k,0],[i.i,i.k,1],_o(i.i,i.k,2),_o(i.i,i.k,3)].some(h=>h[0]===u.i&&h[1]===u.k&&h[2]===u.r)),l=V.pieces.some(u=>u.t==="tak"&&Math.abs(u.i-i.i)+Math.abs(u.k-i.k)===1);if(!c.length&&!l)return"Taket behöver en vägg under sig"}return""}function Uw(){if(!xi){Gn.visible=!1;return}ft=Sd(),Gn.geometry=Sh[ft.t],zc(ft,ji),ji.decompose(Gn.position,Gn.quaternion,Gn.scale),Gn.position.y+=.02;const i=lg(ft);Hc=!i,Gn.material=Hc?cg:Dw,Gn.visible=!0;const e=ee("bWhy");e.textContent=i||zt[ft.t].name+" – "+ug(zt[ft.t].cost),e.style.color=i?"#ff8a7a":"#9fe8a6"}const ug=i=>Object.keys(i).length?Object.entries(i).map(([e,t])=>`${t} ${e}`).join(" + "):"gratis";function hg(){ft=Sd();const i=lg(ft);if(Hc=!i,!Hc){st("no"),ht(i);return}if(zt[ft.t].kind==="level"){V.digs.push([ft.i,ft.k,ft.y,1]),Mh(ft.i,ft.k,ft.y,!0,!0),st("rip"),ht("Marken jämnad"),an();return}const e=zt[ft.t].cost;for(const t in e)V[t]-=e[t];V.pieces.push({t:ft.t,i:ft.i,k:ft.k,r:ft.r,y:ft.y}),ft.t==="golv"&&(V.digs.push([ft.i,ft.k,ft.y]),Mh(ft.i,ft.k,ft.y,!0)),Md(),Fn(),fg(),an(),st("place"),ht("+"+zt[ft.t].name)}function _p(){ft=Sd(),zc(ft,ji);const i=new I().setFromMatrixPosition(ji);let e=null,t=2.2;for(const s of V.pieces){zc(s,ji),er.setFromMatrixPosition(ji);const r=Math.hypot(er.x-i.x,er.z-i.z)+(zt[s.t].kind===zt[fn.t].kind?0:.8);r<t&&(t=r,e=s)}if(!e){ht("Inget att riva");return}V.pieces.splice(V.pieces.indexOf(e),1);const n=zt[e.t].cost;for(const s in n)V[s]+=n[s];Md(),Fn(),an(),st("rip"),ht("Rev "+zt[e.t].name.toLowerCase())}const Kr=[];let Vc={};function kw(){const i=el(77),e=(r,a,o)=>{let c=0,l=0;for(;l<a&&c<a*60;){c++;const u=(i()-.5)*Bt*.8,h=(i()-.5)*Bt*.8,d=An(u,h);o(u,h,d)&&(Wn.some(f=>Math.hypot(f.x-u,f.z-h)<f.r+1.4)||Xn.some(f=>u>f.x0-1&&u<f.x1+1&&h>f.z0-1&&h<f.z1+1)||Kr.some(f=>Math.hypot(f.x-u,f.z-h)<5)||(Kr.push({type:r,x:u,z:h,y:d,ry:i()*6.28,gone:0}),l++))}};e("log",8,(r,a,o)=>Math.hypot(r-lt.x,a-lt.z)<34&&o>.6),e("log",26,(r,a,o)=>o>.25&&o<9),e("scrap",4,(r,a,o)=>Math.hypot(r-lt.x,a-lt.z)<30&&o>.6),e("scrap",8,(r,a,o)=>o>.2&&o<2.5);const t=Nt([ce(Se(new Vt(.22,.26,2.2,8).rotateZ(Math.PI/2),0,.24,0),"#8a6646"),ce(Se(new Vt(.18,.2,1.6,7).rotateZ(Math.PI/2),.2,.62,.1,.5),"#9a7552"),ce(Se(new Vt(.21,.21,.04,8).rotateZ(Math.PI/2),1.11,.24,0),"#d9b98a")]),n=Nt([ce(Se(new Le(.9,.5,.7),0,.25,0,.3),"#7b8189"),ce(Se(new Vt(.28,.28,.7,10),.5,.35,.3),"#a0522d"),ce(Se(new Le(.6,.3,.5),-.3,.62,-.1,.9),"#5b6168"),ce(Se(new ma(.3,.08,6,12).rotateX(Math.PI/2),-.5,.1,.4),"#2b2b2b")]);for(const[r,a]of[["log",t],["scrap",n]]){const o=Kr.filter(l=>l.type===r),c=new uo(a,Xt,o.length);c.castShadow=!0,ze.add(c),Vc[r]={m:c,list:o}}const s=new Te(new Jh(.22),new wn({color:"#ffc21a"}));s.visible=!1,ze.add(s),Vc.marker=s,bd()}function bd(){for(const i of["log","scrap"]){const{m:e,list:t}=Vc[i];t.forEach((n,s)=>{Bc.set(0,n.ry,0),Oc.setFromEuler(Bc),bc.setScalar(n.gone>0?0:1),er.set(n.x,n.y-.05,n.z),ji.compose(er,Oc,bc),e.setMatrixAt(s,ji)}),e.instanceMatrix.needsUpdate=!0}bc.setScalar(1)}let ni=null;function Fw(i,e){let t=!1;for(const a of Kr)a.gone>0&&(a.gone-=i,a.gone<=0&&(t=!0));t&&bd(),ni=null;let n=2.4;for(const a of Kr){if(a.gone>0)continue;const o=Math.hypot(a.x-ue.pos.x,a.z-ue.pos.z);o<n&&(n=o,ni=a)}const s=Vc.marker;s.visible=!!ni&&!xi,ni&&(s.position.set(ni.x,ni.y+1.6+Math.sin(e*3)*.12,ni.z),s.rotation.y=e*2);const r=ee("bAct");if(ee("bBuild").style.display=se.on||jt?"none":"block",jt){r.style.display="none";return}xi?(r.style.display="block",r.textContent="Placera"):typeof Ji<"u"&&Ji?(r.style.display="block",r.textContent=Ji.label):se.on?r.style.display="none":ni?(r.style.display="block",r.textContent=ni.type==="log"?"Plocka virke":"Plocka skrot"):r.style.display="none"}function dg(){if(!ni)return;const i=ni;Wb(pt,"pick","idle",1600),i.type==="log"?(V.virke+=2,V.picked+=2,ht("+2 virke")):(V.skrot+=1,ht("+1 skrot")),i.gone=120,bd(),Fn(),fg(),an(),st("pick")}const Ks=[{txt:"Plocka 10 virke",ok:()=>V.picked>=10},{txt:"Lägg 4 golv",ok:()=>ru("floor")>=4},{txt:"Bygg 6 väggar (en med dörr)",ok:()=>ru("wall")>=6&&V.pieces.some(i=>i.t==="dorr")},{txt:"Lägg tak över bygget",ok:()=>ru("roof")>=2}],ru=i=>V.pieces.filter(e=>zt[e.t].kind===i).length;function fg(){for(;V.obj<Ks.length&&Ks[V.obj].ok();)V.obj++,V.obj<Ks.length?ht("Klart! Nästa: "+Ks[V.obj].txt,2600):ht("Första bygget står klart! 🎉",3500),st("done");lr()}function lr(){const i=ee("obj"),e=typeof la=="function"?la():null,t=yg(),n=V.obj<Ks.length?Ks.map((r,a)=>`<div class="${a<V.obj?"done":a===V.obj?"now":""}">${a<V.obj?"✓":a===V.obj?"›":"·"} ${r.txt}</div>`).join(""):"";let s=t?`<b>${t.chapter}</b><div class="now">› ${t.text}</div>`+(t.list?n:""):n?`<b>Första bygget</b>${n}`:"";e&&V.jobOn&&(s+=`<b style="display:block;margin-top:6px">Jobb</b><div class="now">› ${e.title}</div><div>${e.where}</div>`),i.innerHTML=s,i.style.display=s?"block":"none"}const Ow="/varvet/ui/",$s=(i,e="ico")=>`<img class="${e}" src="${Ow}it_${i}.png" alt="">`;function Fn(){ee("res").innerHTML=`<span>${$s("virke")}${V.virke}</span><span>${$s("skrot")}${V.skrot}</span><span>${$s("kr")}${V.kr} kr</span><span>${$s("rykte")}${V.rykte||0}</span>`,document.querySelectorAll("#bar .pc[data-t]").forEach(i=>{const e=zt[i.dataset.t],t=Object.entries(e.cost).every(([n,s])=>V[n]>=s);i.classList.toggle("on",i.dataset.t===fn.t),i.classList.toggle("dim",!t)})}let xp=0;function ht(i,e=1400){const t=ee("pop");t.textContent=i,t.style.opacity=1,clearTimeout(xp),xp=setTimeout(()=>t.style.opacity=0,e)}let Rr=null;function st(i){if(Rt.snd)try{Rr=Rr||new(window.AudioContext||window.webkitAudioContext);const e=Rr.currentTime,t=Rr.createOscillator(),n=Rr.createGain();t.connect(n),n.connect(Rr.destination);const s={pick:[520,780,.12],place:[180,120,.16],rip:[140,70,.18],no:[200,160,.12],done:[523,1046,.35],tick:[70,55,.05]}[i];t.type=i==="place"||i==="rip"?"square":"triangle",t.frequency.setValueAtTime(s[0],e),t.frequency.exponentialRampToValueAtTime(s[1],e+s[2]),n.gain.setValueAtTime(.08,e),n.gain.exponentialRampToValueAtTime(.001,e+s[2]+.05),t.start(e),t.stop(e+s[2]+.06)}catch{}}function an(){try{localStorage.setItem("varvet_save",JSON.stringify({v:1,virke:V.virke,skrot:V.skrot,picked:V.picked,obj:V.obj,pieces:V.pieces,digs:V.digs,kr:V.kr,job:V.job,jobOn:V.jobOn,life:V.life,char:V.char,pname:V.pname,rykte:V.rykte||0,story:V.story||null,px:ue.pos.x,pz:ue.pos.z}))}catch{}}function Bw(){try{const i=JSON.parse(localStorage.getItem("varvet_save")||"null");if(!i)return;Object.assign(V,{virke:i.virke,skrot:i.skrot,picked:i.picked||0,obj:i.obj||0,pieces:i.pieces||[],digs:i.digs||[],kr:i.kr||0,job:i.job||0,jobOn:i.jobOn||0,life:i.life||null,char:i.char||null,pname:i.pname||"",rykte:i.rykte||0,story:i.story||null}),i.px!=null&&(ue.pos.x=i.px,ue.pos.z=i.pz)}catch{}}function bh(){xi?hg():Ji?Ji.fn():dg()}function wh(i){i&&(se.on||ut)||(xi=i,i&&(ee("hint").style.opacity=0),ee("bar").style.display=i?"flex":"none",ee("bBuild").innerHTML=i?"Klar":`${$s("verktyg","icob")}Bygg`,ee("bBuild").classList.toggle("acc",i),ee("bWhy").style.display=i?"block":"none",i&&(He.tPitch=Math.max(He.tPitch,.55)),Fn())}function zw(){const i=ee("bar");i.innerHTML=ua.map(e=>`<button class="pc" data-t="${e}"><i>${{golv:"▭",vagg:"▮",fonster:"▣",dorr:"⌂",tak:"◭",jamna:"⛏"}[e]}</i>${zt[e].name}<small>${ug(zt[e].cost).replace(/virke/g,$s("virke","icos")).replace(/skrot/g,$s("skrot","icos"))}</small></button>`).join("")+'<button class="pc" id="bRot"><i>↻</i>Vrid</button><button class="pc" id="bRip"><i>✕</i>Riv</button>',i.querySelectorAll(".pc[data-t]").forEach(e=>e.onclick=()=>{fn.t=e.dataset.t,fn.r=0,Fn()}),ee("bRot").onclick=()=>{fn.r=(fn.r+1)%4},ee("bRip").onclick=_p,ee("bBuild").onclick=()=>wh(!xi),ee("dlgNext").onclick=()=>_h(!0),ee("dlgNo").onclick=rw,ee("gX").onclick=()=>Eo(!1),ee("bAct").onclick=bh,addEventListener("keydown",e=>{!Hi||window.__modal||e.target&&e.target.tagName==="INPUT"||(e.code==="KeyB"&&wh(!xi),e.code==="KeyR"&&(fn.r=(fn.r+1)%4),e.code==="KeyX"&&xi&&_p(),(e.code==="Space"||e.code==="KeyF")&&(e.preventDefault(),jt?_h():bh()),xi&&/^Digit[1-5]$/.test(e.code)&&(fn.t=ua[+e.code.slice(5)-1],Fn()))}),lr()}setInterval(()=>{Hi&&an()},5e3);const da="#c49a66",so="#9c7448",wd="#1b2026";let ys=[];const ar=i=>{try{navigator.vibrate&&navigator.vibrate(i)}catch{}};function xo(i,e,t,n,s=4,r=3,a=3){for(let o=0;o<t;o++)ys.push({x:i,y:e,vx:(Math.random()-.5)*s,vy:-Math.random()*r,l:1,col:n,s:a*(.6+Math.random()*.8)});ys.length>400&&ys.splice(0,ys.length-400)}function rl(i,e){for(const t of ys)t.x+=t.vx*e,t.y+=t.vy*e,t.vy+=.25,t.vx*=.98,t.l-=.022,i.globalAlpha=Math.max(0,t.l),i.fillStyle=t.col,i.fillRect(t.x,t.y,t.s*e,t.s*e);i.globalAlpha=1,ys=ys.filter(t=>t.l>0)}const Ma=i=>{ee("gBar").style.width=Math.max(0,Math.min(100,i*100))+"%"},al=i=>{ut.q=i,ar([20,40,30]);const e=ya();e.onpointerdown=e.onpointermove=e.onpointerup=null,Ma(1),st("done"),setTimeout(()=>Eo(!0),600)};function ol(i,e){ys=[];const t=ya(),n=ut.dpr;return ee("gTitle").textContent=i,ee("gHelp").textContent=e,Ma(0),{c:t,x:t.getContext("2d"),W:t.width,H:t.height,k:n}}function Gc(i,e,t,n,s,r,a=1){i.strokeStyle="rgba(90,60,30,.25)",i.lineWidth=1.5*r;for(let o=0;o<9;o++){const c=t+s*(o+.5)/9;i.beginPath(),i.moveTo(e,c);for(let l=0;l<=12;l++)i.lineTo(e+n*l/12,c+Math.sin(l*1.7+o*a)*2.5*r);i.stroke()}}function Hw(){const{c:i,x:e,W:t,H:n,k:s}=ol("Såga kölen","Dra sågen längs den streckade linjen, från vänster till höger"),r=t*.08,a=t*.92,o=n*.5,c=u=>o+Math.sin(u*Math.PI)*n*.09-n*.03*u,l={prog:0,on:!1,good:0,n:0,bad:0,saw:{x:r,y:c(0)}};i.onpointerdown=u=>{i.setPointerCapture(u.pointerId),l.on=!0},i.onpointerup=i.onpointercancel=()=>{l.on=!1},i.onpointermove=u=>{if(!l.on)return;const h=es(u),d=(h.x-r)/(a-r);if(d<0||d>1.02)return;const f=Math.abs(h.y-c(Math.min(1,d)));if(l.saw={x:h.x,y:h.y},f>34*s){l.bad||ar(40),l.bad=1;return}l.bad=0,l.n++,f<14*s&&l.good++,d>l.prog&&d<l.prog+.08&&(l.prog=Math.min(1,d),xo(h.x,c(l.prog)+4*s,3,Math.random()<.5?"#e2c08f":"#c49a66",5,4),Math.random()<.3&&(st("tick"),ar(6)),Ma(l.prog),l.prog>.985&&al(l.good/Math.max(1,l.n)))},ut.draw=()=>{e.fillStyle=wd,e.fillRect(0,0,t,n),e.fillStyle="#3a3f47",e.fillRect(0,n*.78,t,n*.22),e.fillStyle=da,e.fillRect(r-20*s,o-n*.2,a-r+40*s,n*.38),Gc(e,r-20*s,o-n*.2,a-r+40*s,n*.38,s),e.strokeStyle="#5a3d22",e.lineWidth=5*s,e.beginPath();for(let d=0;d<=60;d++){const f=d/60*l.prog,g=r+(a-r)*f;d?e.lineTo(g,c(f)):e.moveTo(g,c(f))}e.stroke(),e.setLineDash([10*s,8*s]),e.strokeStyle="rgba(30,30,30,.7)",e.lineWidth=2.5*s,e.beginPath();for(let d=0;d<=60;d++){const f=l.prog+(1-l.prog)*d/60,g=r+(a-r)*f;d?e.lineTo(g,c(f)):e.moveTo(g,c(f))}e.stroke(),e.setLineDash([]);const u=Math.max(l.saw.x,r+(a-r)*l.prog),h=l.on?l.saw.y:c(l.prog);e.save(),e.translate(u,h),e.fillStyle=l.bad?"#d9534f":"#c0c6cc",e.beginPath(),e.moveTo(-70*s,-6*s),e.lineTo(10*s,-14*s),e.lineTo(10*s,8*s),e.lineTo(-70*s,10*s),e.fill(),e.fillStyle="#8a4a2a",e.fillRect(10*s,-20*s,34*s,30*s),e.restore(),rl(e,s),l.bad&&(e.fillStyle="#ffb4a8",e.font=`700 ${15*s}px system-ui`,e.textAlign="center",e.fillText("Sågen kärvar – tillbaka till linjen!",t/2,n*.9))}}function Vw(){const{c:i,x:e,W:t,H:n,k:s}=ol("Spika spanten","Tryck när visaren är i det gröna fältet. Två bra slag per spik"),r=6,a=Array.from({length:r},(l,u)=>({x:t*(.16+u*.136),d:0})),o={i:0,t:0,hits:0,miss:0,shake:0,ham:0},c=()=>.5+Math.sin(o.i*1.9)*.18;i.onpointerdown=()=>{const l=(Math.sin(o.t)+1)/2,u=Math.abs(l-c())<.11;if(o.ham=1,u){const h=a[o.i];if(h.d++,o.hits++,st("place"),ar(18),xo(h.x,n*.42,7,"#d1a874",7,5),xo(h.x,n*.42-10*s,3,"#fff3c4",9,6,2),h.d>=2&&(o.i++,Ma(o.i/r),o.i>=r))return al(o.hits/(o.hits+o.miss))}else o.miss++,o.shake=1,st("no"),ar([30,30,30])},ut.draw=()=>{if(o.t+=.055+o.i*.006,o.shake*=.85,o.ham*=.8,e.fillStyle=wd,e.fillRect(0,0,t,n),e.save(),e.translate((Math.random()-.5)*o.shake*8*s,0),e.fillStyle=da,e.fillRect(t*.08,n*.42,t*.84,n*.16),Gc(e,t*.08,n*.42,t*.84,n*.16,s,3),e.fillStyle=so,e.fillRect(t*.08,n*.58,t*.84,n*.05),a.forEach((g,v)=>{const m=n*.42-(2-g.d)*16*s;e.fillStyle="#9aa1a8",e.fillRect(g.x-3*s,m,6*s,(2-g.d)*16*s+4*s),e.fillStyle=v===o.i?"#ffc21a":"#c0c6cc",e.fillRect(g.x-9*s,m-4*s,18*s,5*s)}),o.i<r){const g=a[o.i];e.save(),e.translate(g.x+30*s,n*.3-(1-o.ham)*30*s),e.rotate(-.5+o.ham*.5),e.fillStyle="#6b4a2b",e.fillRect(0,-6*s,80*s,12*s),e.fillStyle="#3a3f47",e.fillRect(-26*s,-18*s,30*s,36*s),e.restore()}e.restore(),rl(e,s);const l=t*.2,u=t*.6,h=n*.8,d=c();e.fillStyle="#2a2f36",e.fillRect(l,h,u,18*s),e.fillStyle="#3fae5a",e.fillRect(l+u*(d-.11),h,u*.22,18*s);const f=(Math.sin(o.t)+1)/2;e.fillStyle="#fff",e.fillRect(l+u*f-3*s,h-6*s,6*s,30*s)}}function Gw(){const{c:i,x:e,W:t,H:n,k:s}=ol("Lägg bordgångarna","Dra plankan till den markerade raden, nerifrån och upp"),r=5,a=t*.12,o=t*.72,c=n*.12,l=n*.1,u=g=>({y:c+(r-1-g)*l,inset:(r-1-g)*0+(g===0?t*.05:0)}),h={done:0,drag:null,p:{x:t*.86,y:n*.78},tries:0},f=(()=>{const g=new Path2D;return g.moveTo(a,c),g.lineTo(o+t*.06,c-l*.3),g.quadraticCurveTo(o+t*.05,c+l*3.8,o-t*.06,c+l*r),g.lineTo(a+t*.06,c+l*r),g.quadraticCurveTo(a-t*.02,c+l*2.5,a,c),g})();i.onpointerdown=g=>{const v=es(g);Math.hypot(v.x-h.p.x,v.y-h.p.y)<120*s&&(h.drag={dx:h.p.x-v.x,dy:h.p.y-v.y},i.setPointerCapture(g.pointerId))},i.onpointermove=g=>{if(!h.drag)return;const v=es(g);h.p={x:v.x+h.drag.dx,y:v.y+h.drag.dy}},i.onpointerup=i.onpointercancel=()=>{if(!h.drag)return;h.drag=null,h.tries++;const g=u(h.done),v=g.y+l/2,m=(a+o)/2;if(Math.abs(h.p.y-v)<l*.7&&Math.abs(h.p.x-m)<t*.25){h.done++,st("place"),ar(25);for(let p=0;p<6;p++)xo(a+(o-a)*p/5,v,4,"#cdb38f",6,3);Ma(h.done/r),h.p={x:t*.86,y:n*.78},h.done>=r&&al(r/h.tries)}else st("no"),ar(40),h.p={x:t*.86,y:n*.78}},ut.draw=()=>{e.fillStyle=wd,e.fillRect(0,0,t,n),e.save(),e.clip(f),e.fillStyle="#14181d",e.fillRect(0,0,t,n);for(let g=0;g<7;g++){const v=a+(o-a)*(g+.5)/7;e.fillStyle=so,e.fillRect(v-6*s,0,12*s,n)}for(let g=0;g<h.done;g++){const v=u(g);e.fillStyle=g%2?da:"#d1a874",e.fillRect(0,v.y+2*s,t,l-4*s),Gc(e,0,v.y+2*s,t,l-4*s,s,g+2)}if(h.done<r){const g=u(h.done);e.strokeStyle="#ffc21a",e.lineWidth=3*s,e.setLineDash([10*s,6*s]),e.strokeRect(-10,g.y+3*s,t+20,l-6*s),e.setLineDash([])}if(e.restore(),e.strokeStyle="#e8e2d2",e.lineWidth=3*s,e.stroke(f),e.fillStyle=so,e.fillRect(a+t*.05,c+l*r,o-a-t*.05,10*s),h.done<r){for(let g=0;g<r-h.done-1;g++)e.fillStyle=so,e.fillRect(t*.76,n*.88-g*8*s,t*.2,7*s);e.fillStyle=da,e.fillRect(h.p.x-t*.12,h.p.y-l*.4,t*.24,l*.8),Gc(e,h.p.x-t*.12,h.p.y-l*.4,t*.24,l*.8,s,5)}rl(e,s)}}function Ww(i="#f4f1ea"){const{c:e,x:t,W:n,H:s,k:r}=ol("Måla skrovet","Dra penseln över skrovet tills det är helt målat"),a=n/2,o=s*.45,c=n*.4,l=s*.26,u=new Path2D;u.moveTo(a-c,o-l*.5),u.lineTo(a+c,o-l*.75),u.quadraticCurveTo(a+c*1.02,o+l*.3,a+c*.55,o+l*.85),u.quadraticCurveTo(a,o+l*1.05,a-c*.8,o+l*.6),u.quadraticCurveTo(a-c*1.02,o,a-c,o-l*.5),u.closePath();const h=document.createElement("canvas");h.width=n,h.height=s;const d=h.getContext("2d"),f=document.createElement("canvas");f.width=n,f.height=s;const g=f.getContext("2d");g.fillStyle="#fff",g.fill(u);const v=(()=>{const _=g.getImageData(0,0,n,s).data;let y=0;for(let x=3;x<_.length;x+=4*61)_[x]>0&&y++;return y})(),m={last:null,prog:0,chk:0},p=_=>{Math.random()<.12&&xo(_.x,_.y,1,i,1,-1,4),d.save(),d.clip(u),d.strokeStyle=i,d.lineCap="round",d.lineWidth=42*r,d.beginPath(),d.moveTo((m.last||_).x,(m.last||_).y),d.lineTo(_.x,_.y),d.stroke(),d.restore(),m.last=_};e.onpointerdown=_=>{e.setPointerCapture(_.pointerId),m.last=es(_),p(m.last)},e.onpointermove=_=>{m.last&&p(es(_))},e.onpointerup=e.onpointercancel=()=>{m.last=null},ut.draw=()=>{t.fillStyle="#cfe3ec",t.fillRect(0,0,n,s),t.fillStyle="#b9a789",t.fillRect(0,s*.82,n,s*.18),t.save(),t.clip(u),t.fillStyle=da,t.fillRect(0,0,n,s);for(let _=0;_<6;_++)t.fillStyle=_%2?so:da,t.fillRect(0,o-l+_*l*.36,n,3*r);if(t.restore(),t.drawImage(h,0,0),rl(t,r),t.lineWidth=3*r,t.strokeStyle="#5b5f66",t.stroke(u),++m.chk%12===0){const _=d.getImageData(0,0,n,s).data;let y=0;for(let x=3;x<_.length;x+=4*61)_[x]>0&&y++;m.prog=y/v,Ma(m.prog/.93),m.prog>=.93&&(m.chk=-1e9,al(1))}}}const It=()=>{const i=V.story;return i.c2||(i.c2={stage:0,launched:!1,dock:"varvet",name:"",staff:null,q:[]}),i.c2},Rs=()=>It().name||"båten",pg={leo:{name:"Leo",full:"Leo Nyström",wage:120,virke:4,skrot:1,look:{shirt:"#d9822b",pants:"#2b3a52",hair:"#6b4a2b",skin:"#f3cfb3"}},ake:{name:"Åke",full:"Åke Persson",wage:280,virke:8,skrot:2,look:{shirt:"#7a8b5a",pants:"#3b3f45",hat:"#a33a2a",beard:"#bdb6aa",skin:"#e9bd98"}}},Nn={};function Xw(i,e,t,n){const s=Math.hypot(t-i,n-e),r=(t-i)/s,a=(n-e)/s;let o=i,c=e;for(let _=0;_<200&&(o+=r,c+=a,!(En(o,c)<-.4));_++);const l=o-r*3,u=c-a*3,h=o+r*9,d=c+a*9,f=Math.atan2(r,a),g=Math.hypot(h-l,d-u),v=[],m=new Le(2.6,.28,g);m.rotateY(f),m.translate((l+h)/2,1.2,(u+d)/2),v.push(ce(m,"#9a7a55"));for(let _=1;_<g;_+=3)for(const y of[-1.1,1.1])v.push(ce(Se(new Vt(.15,.15,5,6),l+r*_+a*y,-1.2,u+a*_-r*y),"#5e4630"));const p=new Te(Nt(v),Xt);return p.castShadow=!0,p.receiveShadow=!0,ze.add(p),od.push({x0:l,z0:u,x1:h,z1:d,w:1.25,h:1.34}),{sx:o,sz:c,dx:r,dz:a,ex:h,ez:d,ang:f}}function jw(){Nn.varvet={id:"varvet",name:"Varvet",bx:10.4,bz:74,yaw:0,px:14,pz:74};{const t=Math.sin(bt.ang),n=Math.cos(bt.ang),s=bt.x1,r=bt.z1;Nn.grannon={id:"grannon",name:"Grannön",bx:s-n*3.2-t*2.5,bz:r+t*3.2-n*2.5,yaw:bt.ang,px:s-t*2.5,pz:r-n*2.5}}const i=_i[3],e=Xw(i.x,i.z,0,0);Nn.fyr={id:"fyr",name:"Fyrskäret",bx:e.ex-e.dx*2.5+e.dz*3.2,bz:e.ez-e.dz*2.5-e.dx*3.2,yaw:e.ang,px:e.ex-e.dx*2.5,pz:e.ez-e.dz*2.5,land:{x:e.sx-e.dx*3,z:e.sz-e.dz*3}}}let sn=null;function qw(){sn=new Te(oa("#f4f1ea","#2f5d8a"),Xt),sn.castShadow=!0,ze.add(sn);const i=new tn,e=new Te(new Le(.45,.55,.5),new rn({color:"#2b3a52"}));e.position.y=.55,i.add(e);const t=new Te(new Le(.12,.8,.14),new rn({color:"#2b2f36"}));t.position.y=-.05,i.add(t),i.position.set(0,.1,-3.05),sn.add(i),id(sn,"motorbat.glb",{fit:5.8,rotY:Math.PI/2,y:.05,hideChildren:!0,liner:.975,waterMask:-.12}),ld.push(sn),cl(It().dock)}function cl(i){const e=Nn[i]||Nn.varvet;sn.position.set(e.bx,.45,e.bz),sn.rotation.set(0,e.yaw,0),sn.userData.yaw=e.yaw,sn.visible=!!It().launched}let Lr=null;function Yw(i){i===Lr||i&&Lr&&i.x===Lr.x&&i.z===Lr.z||(Lr=i,se.on&&se.free&&(se.target=i))}function Kw(){if(ca().wind>=3){ht("Storm – ingen kör ut i det här vädret",2600),st("no");return}Object.assign(se,{on:!0,v:0,boat:sn,free:!0,vmax:11,yaw:sn.userData.yaw,target:Lr,lock:!1}),ee("hint").style.opacity=1,ee("hint").textContent="Vänster tumme: gasa och styr · Lägg till vid en brygga för att gå i land",ca().wind>=2&&ht("Det blåser – håll farten nere i vågorna",2600)}function ll(i,e=sn){se.on=!1,se.free=!1,se.target=null,se.v=0,ee("compass").style.display="none",ci.visible=!1,ee("hint").style.opacity=0,e===sn&&(It().dock=i.id,cl(i.id)),ue.pos.set(i.px,An(i.px,i.pz),i.pz),ue.yaw=i.yaw+Math.PI,He.tYaw=He.yaw=i.yaw+Math.PI,pt.position.copy(ue.pos),an()}function $w(){if(!se.free)return null;const i=se.boat;for(const e of Object.values(Nn))if(Math.hypot(i.position.x-e.bx,i.position.z-e.bz)<10&&Math.abs(se.v)<5)return{x:e.bx,z:e.bz,r:99,label:"Lägg till · "+e.name,fn:()=>{st("place"),xw(.05),ll(e),ht("Förtöjd vid "+e.name,1600)}};return null}const gi={x:-12,z:49},Eh=[{name:"Kölen",label:"Såga kölen",cost:{virke:6},game:Hw,done:"Kölen ligger på bockarna. Rak och fin."},{name:"Spanten",label:"Spika spanten",cost:{virke:6,skrot:4},game:Vw,done:"Spanten sitter. Nu ser det ut som en båt – om man kisar."},{name:"Bordgångarna",label:"Lägg bordgångarna",cost:{virke:10,skrot:4},game:Gw,done:"Skrovet är tätt. Nästan i alla fall."},{name:"Färgen",label:"Måla skrovet",cost:{kr:400},game:Ww,rain:!0,done:"Vit och blank. Nu ska hon bara i sjön."}];let fs=null;function Jw(){const i=lt.h;fs=new tn,fs.position.set(gi.x,i,gi.z),ze.add(fs);const e=[];for(const c of[-1.6,1.6])e.push(ce(Se(new Le(1.8,.5,.3),0,.25,c),"#6b5137"));const t=new Te(Nt(e),Xt);t.castShadow=!0,fs.add(t);const n=new Te(Nt([ce(Se(new Le(.16,.26,5.2),0,.66,0),"#9c7448"),ce(Se(new Le(.16,1.1,.2).rotateX(-.35),0,1.15,2.6),"#9c7448")]),Xt),s=[];for(let c=0;c<7;c++){const l=(c-3)/3.4,u=(1-Math.max(0,l)*.7)*1.15,h=new ma(u,.05,4,14,Math.PI);h.rotateZ(Math.PI),h.scale(1,.75,1),h.translate(0,1.5,l*2.4),s.push(ce(h,"#c49a66"))}const r=new Te(Nt(s),Xt),a=new Te(oa("#c49a66","#9c7448"),Xt),o=new Te(oa("#f4f1ea","#2f5d8a"),Xt);for(const c of[a,o])c.position.y=1.5,c.scale.setScalar(.9);for(const c of[n,r,a,o])c.castShadow=!0,fs.add(c);fs.userData={keel:n,ribM:r,hullW:a,hullP:o},Ed(),Xn.push({x0:gi.x-1.4,x1:gi.x+1.4,z0:gi.z-3,z1:gi.z+3,top:i+2.4})}function Ed(){if(!fs)return;const i=It().stage,e=It().launched,t=fs.userData;t.keel.visible=i>=1&&i<3&&!e,t.ribM.visible=i>=2&&i<3&&!e,t.hullW.visible=i===3&&!e,t.hullP.visible=i>=4&&!e}const mg=i=>Object.entries(i).map(([e,t])=>e==="kr"?t+" kr":t+" "+e).join(", "),Zw=i=>Object.entries(i).every(([e,t])=>(V[e]||0)>=t);function Qw(i){const e=Eh[i];if(!Zw(e.cost)){ht("Du behöver "+mg(e.cost)+" · beställ i telefonen eller plocka",3200),st("no");return}if(e.rain&&ca().rain){ht("Det regnar – färgen fäster inte. Vänta på uppehåll.",3e3),st("no");return}_d({init:e.game,onDone:t=>{for(const[n,s]of Object.entries(e.cost))V[n]-=s;Fn(),It().stage=i+1,It().q.push(t||1),Ed(),an(),kt("Sven",[e.done],null)}})}const Ua=i=>({x:gi.x,z:gi.z+4.4,r:2.8,label:`${Eh[i].label} (${mg(Eh[i].cost)})`,fn:()=>Qw(i)}),ka=()=>new I(gi.x,lt.h+3.2,gi.z);function eE(i){const e=ee("nameBox"),t=ee("nbIn");e.style.display="flex",t.value=It().name||"Lilla Sjöstjärnan",window.__modal=!0,setTimeout(()=>{try{t.focus(),t.select()}catch{}},50),ee("nbOk").onclick=()=>{const n=t.value.trim().slice(0,24)||"Lilla Sjöstjärnan";e.style.display="none",window.__modal=!1,ts(()=>{const s=It();s.name=n,s.launched=!0,s.dock="varvet",Ed(),cl("varvet"),ll(Nn.varvet),st("done"),setTimeout(()=>ht(`«${n}» är sjösatt!`,3e3),300),i&&i()})}}function Td(i){Ve.staff&&(ze.remove(Ve.staff),delete Ve.staff);const e=pg[i],t=vo(e.look);t.position.set(-9.6,An(-9.6,39.6),39.6),t.rotation.y=.6,t.userData.name=e.name,Ve.staff=t,sr(t,i==="leo"?Zb:t1)}function tE(){It().staff||Td("leo")}function yp(i){It().staff=i,Td(i),an()}const yo=()=>It().staff?pg[It().staff]:null,nE=["Jag har sorterat spikarna efter storlek. Och sen efter färg. Det finns tydligen bara en färg.","Sven säger att jag håller hammaren som en glasstrut. Vad betyder det?","Jag tappade en planka i sjön men jag hämtade den. Nästan hela.","När jag blir stor ska jag också ha ett varv. Eller två."],iE=["Mäta två gånger, såga en gång. Inte tvärtom.","Din morfar lärde mig skarva bordgångar. Det var 1979.","Virket från Kvarnvik är för fuktigt. Låt det ligga en vecka.","Bra att någon tar hand om det här stället igen."];let Fa="";function sE(){const i=yo();if(!i)return;const e=Math.min(V.kr,i.wage);V.kr-=e,V.virke+=i.virke,V.skrot+=i.skrot,Fa=`${i.name} jobbade i går: +${i.virke} virke, +${i.skrot} skrot · lön −${e} kr`,It().staff==="leo"&&Math.random()<.25&&(V.skrot=Math.max(0,V.skrot-1),Fa+=" · Leo tappade en låda spik i sjön"),Fn(),setTimeout(()=>{Fa&&ht(Fa,4200),Fa=""},4200)}function rE(){const i=Nn.fyr.land;Ve.ingrid=vo({shirt:"#2f5d8a",pants:"#2b2f36",hair:"#e8e4dc",skin:"#f0c9ab"}),Ve.ingrid.position.set(i.x,An(i.x,i.z),i.z),Ve.ingrid.userData.name="Ingrid",sr(Ve.ingrid,Qb),Ve.karin=vo({shirt:"#6b6f76",pants:"#2b3a52",hair:"#c9b48f",skin:"#f2cdb0"}),Ve.karin.position.set(14,1.45,87),Ve.karin.rotation.y=Math.PI,Ve.karin.userData.name="Karin",sr(Ve.karin,e1),Ve.karin.visible=!1;const e=_i[3],t=new Te(new bn(.6,10,8),new wn({color:"#ffe9a0",transparent:!0}));t.position.set(e.x,An(e.x,e.z)+6.5,e.z),ze.add(t),ze.userData.fyrLamp=t}const ai=[[135,-76],[116,-38],[118,28],[150,60],[176,12],[182,-58]],ul=[{name:"Fiskar-Olle",c:["#e8d8b0","#a33a2a"],v:9.4},{name:"Bengtssons pojkar",c:["#d8e2ea","#2b3a52"],v:9.9},{name:"Västkust Marina",c:["#1d1f24","#c0c6cc"],v:10.4}];let qt=null,Ad=[];function aE(){for(const[i,e]of ai.slice(1)){const t=new Te(Nt([ce(Se(new Vt(.5,.7,1.4,8),0,.3,0),"#e8742a"),ce(Se(new Wi(.35,.8,8),0,1.4,0),"#f4f1ea")]),Xt);t.position.set(i,0,e),t.visible=!1,ze.add(t),Ad.push(t)}for(const i of ul){const e=new Te(oa(i.c[0],i.c[1]),Xt);e.castShadow=!0,e.visible=!1,ze.add(e),ld.push(e),i.mesh=e}}function Mp(i,e){const t=i?At:sn;ts(()=>{const[n,s]=ai[0],[r,a]=ai[1],o=Math.atan2(r-n,a-s),c=Math.cos(o),l=-Math.sin(o);t.position.set(n,.45,s),t.rotation.set(0,o,0),t.userData.yaw=o,ul.forEach((u,h)=>{const d=(h+1)*4.2*(h%2?-1:1)-2;u.mesh.position.set(n+c*d-Math.sin(o)*(h*1.5),.45,s+l*d-Math.cos(o)*(h*1.5)),u.yaw=o,u.i=1,u.done=0,u.sp=0,u.mesh.visible=!0,u.mesh.userData.yaw=o,u.mesh.userData.v=0}),Ad.forEach(u=>u.visible=!0),qt={boat:t,borrow:i,i:1,t:-3.5,fin:[],onEnd:e,count:4},Object.assign(se,{on:!0,v:0,boat:t,free:!1,vmax:i?12.2:11,yaw:o,lock:!0,race:qt}),ee("hint").style.opacity=1,ee("hint").textContent="Runda bojarna i ordning – först i mål vinner!",He.tYaw=He.yaw=o,gg()})}function gg(){const i=qt.i>=ai.length,[e,t]=i?ai[0]:ai[qt.i];se.target={x:e,z:t,r:9,ring:!0,vmax:99,label:i?"Mål":`Boj ${qt.i}/${ai.length-1}`,onArrive:()=>{if(st("pick"),i)return oE();qt.i++,gg()}}}function oE(){const i=qt.fin.length+1;qt.fin.push("Du");const e=qt;qt=null,se.target=null,se.lock=!0,ee("compass").style.display="none",ci.visible=!1,ht(i===1?"Först i mål!":`Du kom ${i}:a`,2400),setTimeout(()=>ts(()=>{ul.forEach(t=>t.mesh.visible=!1),Ad.forEach(t=>t.visible=!1),se.race=null,se.lock=!1,e.borrow&&(At.position.set(bt.boatX,.45,bt.boatZ),At.rotation.set(0,bt.ang,0),At.userData.yaw=bt.ang),ll(Nn.grannon,e.boat),e.borrow||cl("grannon"),e.onEnd&&e.onEnd(i,e)}),1600)}function cE(i){if(qt){if(qt.lock!==!1){qt.t+=i;const e=Math.ceil(-qt.t);if(e!==qt.count&&e>=0&&(qt.count=e,e>0&&(ht(String(e),800),st("tick"))),qt.t>=0)qt.lock=!1,se.lock=!1,ht("Kör!",1e3),st("done");else return}for(const e of ul){const t=e.mesh;if(e.done)e.sp*=Math.max(0,1-i);else{const n=e.i>=ai.length,[s,r]=n?ai[0]:ai[e.i],a=Math.atan2(s-t.position.x,r-t.position.z),o=Math.atan2(Math.sin(a-e.yaw),Math.cos(a-e.yaw));e.yaw+=Math.max(-1.1*i,Math.min(1.1*i,o)),e.sp+=(e.v*(1-Math.min(.5,Math.abs(o)*.4))*(.97+.06*Math.sin(performance.now()/900+e.v))-e.sp)*Math.min(1,i*.8),Math.hypot(s-t.position.x,r-t.position.z)<6&&(n?(e.done=1,qt.fin.push(e.name)):e.i++)}t.position.x+=Math.sin(e.yaw)*e.sp*i,t.position.z+=Math.cos(e.yaw)*e.sp*i,t.userData.yaw=e.yaw,t.userData.v=e.sp}}}function lE(){It(),jw(),qw(),Jw(),rE(),aE(),It().staff&&Td(It().staff),se.dockItem=$w,se.forceHome=()=>{const i=se.boat;i===sn||!i?ll(Nn.varvet):se.on=!1},Xm.push(sE),tl.push(i=>{if(se.on)return;const e=It();if(e.launched){const t=Nn[e.dock];i.push({x:t.px,z:t.pz,r:2.4,label:"Kör "+Rs(),fn:Kw})}if(Ve.staff&&yo()){const t=Ve.staff.position,n=yo();i.push({x:t.x,z:t.z,r:2.2,label:"Prata med "+n.name,fn:()=>{const s=e.staff==="leo"?nE:iE;kt(n.name,[s[Math.floor(Math.random()*s.length)]],null)}})}})}function uE(i,e){cE(i);const t=ze.userData.fyrLamp;t&&(t.material.opacity=.35+.65*Math.max(0,Math.sin(e*2.2))**6)}const vg=()=>(V.pname||"").trim()||(V.char==="man"?"grabben":"jäntan"),Js={x:6.6,z:41.4},hE=()=>`Advokatfirman Strand & Berg
Storgatan 4, Kvarnvik

Angående: dödsboet efter Edvin Lind

Hej ${V.pname||""},

Efter många års utredning har tingsrätten nu fastställt att Edvin Lind, som försvann till sjöss natten mot den 14 oktober 1994, ska anses vara avliden.

Som hans enda barnbarn tillfaller Lindvarvet på Varvsön dig: byggnader, mark, brygga och tillhörande lösöre. Fastigheten har stått obrukad sedan dess.

Vi har även mottagit en förfrågan från Västkust Marina Invest AB, som är intresserade av att förvärva marken. Kontakta oss om du önskar sälja.

Nyckeln finns hos grannen, Sven Ek.

Med vänlig hälsning
Gunilla Strand, advokat`,dE=()=>`Till den som öppnar den här kistan –

Är det du, Karin? Eller kanske ditt barn. Jag hoppas det.

Varvet är inte mycket att se på just nu, men det har burit den här ön i hundra år. Sven vet var allting finns. Lita på honom, men låt honom aldrig koka kaffet.

Om jag inte kommer tillbaka från det jag måste göra i natt, så finns svaret där krysset är.

/ E.`,Zs=[{id:"intro",obj:"Läs brevet från advokaten",start:()=>Sa("Brev från advokaten",hE(),()=>{vE(),_g()})},{id:"sven",obj:"Hämta nyckeln hos Sven på bryggan",at:()=>Cr("sven"),done:()=>V.jobOn||V.job>0,diary:"Kom ut till Varvsön. Morfars varv är mitt nu – vad jag nu ska göra med det."},{id:"eka",obj:"Slipa Svens eka vid boden",done:()=>V.job>=1},{id:"karin",obj:"Svara i telefonen",start:()=>setTimeout(()=>_E(),1800),done:()=>Sn("karin")},{id:"kista",obj:"Öppna Edvins gamla kista vid boden",at:()=>new I(Js.x,2.6,Js.z),act:()=>({...Js,r:2.4,label:"Öppna Edvins kista",fn:ME}),done:()=>Sn("kista")},{id:"virke",obj:"Samla 10 virke till lagningar",done:()=>V.picked>=10},{id:"propeller",obj:"Byt propeller på Svens motorbåt",done:()=>V.job>=2},{id:"leverans",obj:"Kör motorbåten till Majken på Grannön",done:()=>V.job>=3,diary:"Träffade Majken på Grannön. Hon visste redan vem jag var. Alla vet vem jag är här."},{id:"bygge",obj:"Bygg ett förråd: golv, väggar och tak",done:()=>V.obj>=Ks.length,list:!0},{id:"kvall",obj:()=>$i().min<18*60?"Möt Sven på bryggan i kväll (efter 18:00)":"Sätt dig med Sven på bryggan",at:()=>$i().min>=18*60?Cr("sven"):null,act:()=>$i().min>=18*60?{x:Ve.sven.position.x,z:Ve.sven.position.z,r:2.6,label:"Sätt dig med Sven",fn:SE}:null,done:()=>Sn("kvall")},{id:"c2",ch:2,obj:"Ett år senare …",start:AE,done:()=>Sn("c2")},{id:"kol",ch:2,obj:"Bygg båten: såga kölen vid slipen",at:ka,act:()=>Ua(0),done:()=>It().stage>=1},{id:"leo",ch:2,obj:"Någon väntar på dig vid varvet",start:()=>tE(),at:()=>Cr("staff"),act:()=>Ve.staff?{x:Ve.staff.position.x,z:Ve.staff.position.z,r:2.6,label:"Prata med killen",fn:RE}:null,done:()=>!!It().staff},{id:"spant",ch:2,obj:"Bygg båten: spika spanten",at:ka,act:()=>Ua(1),done:()=>It().stage>=2},{id:"sida1",ch:2,obj:()=>yo().name+" har hittat något",start:()=>setTimeout(CE,1500),done:()=>Sn("sida1")},{id:"bord",ch:2,obj:"Bygg båten: lägg bordgångarna",at:ka,act:()=>Ua(2),done:()=>It().stage>=3},{id:"mala",ch:2,obj:()=>ca().rain?"Måla båten – men vänta tills det slutat regna":"Bygg båten: måla skrovet",at:ka,act:()=>Ua(3),done:()=>It().stage>=4},{id:"sjosatt",ch:2,obj:"Sjösätt båten från slipen",at:ka,act:()=>({...Ua(3),label:"Sjösätt båten",fn:()=>eE(PE)}),done:()=>Sn("sjosatt")},{id:"provtur",ch:2,obj:()=>`Provkör ${Rs()} till Majkens brygga på Grannön`,sea:()=>uc("grannon"),done:()=>It().dock==="grannon"&&!se.on,diary:()=>`Första turen med ${Rs()}. Hon går rakt och tar inte in en droppe. Majken vinkade från bryggan.`},{id:"ingrid",ch:2,obj:()=>ca().wind>=2?"Vänta på lugnt väder innan du åker till Fyrskäret (se prognosen i telefonen)":"Åk ut till Fyr-Ingrid på Fyrskäret",start:IE,sea:()=>uc("fyr"),at:()=>Cr("ingrid"),act:()=>({x:Ve.ingrid.position.x,z:Ve.ingrid.position.z,r:2.8,label:"Prata med Ingrid",fn:LE}),done:()=>Sn("ingrid")},{id:"karin",ch:2,obj:"Möt mamma på bryggan vid varvet",start:DE,sea:()=>uc("varvet"),at:()=>Cr("karin"),act:()=>({x:Ve.karin.position.x,z:Ve.karin.position.z,r:2.6,label:"Prata med mamma",fn:NE}),done:()=>Sn("karin2")},{id:"regatta",ch:2,obj:"Kör till Grannön och anmäl dig till regattan hos Majken",start:UE,sea:()=>uc("grannon"),at:()=>Cr("majken"),act:()=>({x:Ve.majken.position.x,z:Ve.majken.position.z,r:2.6,label:"Anmäl dig till regattan",fn:kE}),done:()=>Sn("regatta")},{id:"bolaget",ch:2,obj:"Läs brevet från kommunen",start:()=>setTimeout(FE,1200),done:()=>Sn("bolaget")},{id:"slut2",ch:2,obj:"Kapitel 3 – Stormen kommer snart",start:()=>Th("Kapitel 2 – Hantverket","Klart")}],fE={1:"Kapitel 1 · Arvet",2:"Kapitel 2 · Hantverket"},uc=i=>{const e=Nn[i];return{x:e.bx,z:e.bz,r:10,ring:!0,label:e.name}},Kn=()=>V.story,Sn=i=>!!(Kn()&&Kn().flags[i]),$n=i=>{Kn().flags[i]=1,an()};function Cr(i){if(!Ve[i]||!Ve[i].visible)return null;const e=Ve[i].position;return new I(e.x,e.y+2.6,e.z)}function On(i){const e=$i();Kn().diary.unshift({d:e?e.day:0,t:i})}function _g(){const i=Zs[Kn().step];i&&i.diary&&On(typeof i.diary=="function"?i.diary():i.diary),Kn().step++,Kn().started=!1,an(),lr(),st("done")}function xg(){return Kn()?Zs[Kn().step]:null}function yg(){const i=xg();return i?{text:typeof i.obj=="function"?i.obj():i.obj,list:!!i.list,chapter:fE[i.ch||1]}:null}const pE=()=>Kn()?Kn().diary:[];function mE(){if(!V.story&&(V.story={step:0,flags:{},diary:[],started:!1},V.job>0||V.picked>0))for(V.story.step=1;V.story.step<Zs.length&&Zs[V.story.step].done&&Zs[V.story.step].done()&&!Zs[V.story.step].start;)V.story.step++;V.story.started=!1,xE(),tl.push(i=>{const e=xg();if(!e||!e.act)return;const t=e.act();t&&i.unshift(t)})}let au=0,Sp="";function gE(i){const e=Kn();if(!e)return;const t=Zs[e.step];if(t){!e.started&&!jt&&!ut&&!se.on&&(e.started=!0,t.start&&t.start()),au-=i,t.done&&au<=0&&!jt&&!ut&&t.done()&&(au=.25,_g());{const n=yg(),s=n?n.text:"";s!==Sp&&(Sp=s,lr())}if(Yw(t.sea?t.sea():null),t.at){const n=t.at();n&&(Xi.visible=!0,Xi.position.copy(n),Xi.position.y+=Math.sin(performance.now()/330)*.15)}yE()}}function Sa(i,e,t){ee("letTitle").textContent=i,ee("letBody").textContent=e,ee("letter").style.display="flex",/Edvin/.test(i)&&qm("Edvin",e),ee("letOk").onclick=()=>{nl(),ee("letter").style.display="none",t&&t()}}function vE(){ts(()=>{ue.pos.set(14,1.45,88),ue.yaw=Math.PI,He.tYaw=He.yaw=Math.PI,setTimeout(()=>ht("Varvsön · Lindvarvet",3200),400)})}function _E(){st("done"),kt("Karin (mamma) · 📞",[`Hej ${vg()}, det är mamma. Advokaten sa att du åkt ut till ön.`,"Jag vet att du menar väl. Men det där varvet har inte gett vår familj något annat än sorg.","Det ligger ett bud från Västkust Marina på bordet. Ta det och kom hem.","…Och hälsa Sven. Om han fortfarande lever, den envisa gamla jäveln."],()=>{$n("karin"),On("Mamma ringde. Hon vill att jag säljer. Hon lät inte arg – mest trött.")})}let Pr=null,Hr=null,wc=0;function xE(){const i=Math.max(1.3,An(Js.x,Js.z));Pr=new tn,Pr.position.set(Js.x,i,Js.z),Pr.rotation.y=-.35;const e=new Te(Nt([ce(Se(new Le(1.1,.55,.62),0,.275,0),"#6b4a2b",1),ce(Se(new Le(1.14,.08,.66),0,.08,0),"#3a3f45",0),ce(Se(new Le(1.14,.08,.66),0,.47,0),"#3a3f45",0)]),Xt);Hr=new tn,Hr.position.set(0,.55,-.31);const t=new Te(Nt([ce(Se(new Vt(.31,.31,1.1,10,1,!1,0,Math.PI).rotateZ(Math.PI/2),0,0,.31),"#7a5136",1)]),Xt);Hr.add(t),Pr.add(e,Hr),Pr.traverse(n=>{n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0)}),ze.add(Pr),Sn("kista")&&(wc=1)}function yE(){if(!Hr)return;const i=Sn("kista")?1:0;wc+=(i-wc)*.08,Hr.rotation.x=-wc*1.7}function ME(){st("rip"),$n("kista"),setTimeout(()=>Sa("Ett brev i Edvins handstil",dE(),()=>{ht("Du hittade ett vattenskadat sjökort med ett blyertskryss vid Ytterskären",4200),On("I morfars kista: ett brev till mamma – eller mig – och ett sjökort med ett kryss långt ute vid Ytterskären."),lr()}),700)}function SE(){ts(()=>{$i().min=Math.max($i().min,19*60+30);const i=Ve.sven.position;ue.pos.set(i.x-.2,i.y,i.z+1.6),ue.yaw=Math.PI*.9,He.tYaw=He.yaw=Math.PI*.75,He.tPitch=He.pitch=.15,setTimeout(()=>kt("Sven",["Sätt dig en stund. Det är som finast här när solen går ner.","Edvin och jag satt på den här bryggan varenda kväll i fyrtio år. Han pratade om båtar. Jag pratade om fisk. Ingen av oss lyssnade.","Natten han försvann blåste det full storm. Han sa inte ett ord – bara startade Sjöstjärnan och körde rakt ut. Ingen har nånsin förstått varför.",Sn("kista")?"Ett kryss vid Ytterskären, säger du… Dit kommer man inte med den där snipan. Inte en chans.":"Har du tittat i hans gamla kista vid boden? Han låste den aldrig.",`Men du, ${vg()}… du har gjort mer för det här varvet på några dagar än nån gjort på trettio år. Edvin hade varit stolt.`],()=>{$n("kvall"),On("Satt med Sven på bryggan. Morfar körde ut i stormen 1994 och ingen vet varför. Jag tänker inte sälja. Inte än.")}),600)})}function Th(i,e){const t=ee("chapter");ee("chTitle").textContent=i,ee("chSub").textContent=e,t.style.opacity=1,t.style.display="flex",setTimeout(()=>{t.style.opacity=0,setTimeout(()=>t.style.display="none",900)},4200)}const bE=`12 juni 1994

Började på ritningen i dag. En båt som klarar Ytterskären i full storm – lång, bred, självlänsande. Ingen härute har en sådan.

Karin tittade på papperet och gick ut utan ett ord. Hon tror att jag bygger åt mig själv.

Jag bygger åt dem som inte har någon.`,wE=`13 oktober 1994

Stormvarning för Skagerack. Radion har sprakat hela kvällen.

Om det blir som de säger tar sig ingen fiskare härute in i natt. Sjöstjärnan är inte byggd för sådant här väder.

Men hon är det enda som finns.`,EE=`2 september 1994

Wahl var här igen och ville köpa marken. Jag sa nej, för tredje gången. Han svor och sa att havet tar varvet förr eller senare.

Kanske det. Men inte medan jag lever.`,TE=`SAMRÅDSHANDLING
Ändring av detaljplan för Varvsön 1:7 och 1:12

Västkust Marina Invest AB har förvärvat fastigheten Varvsön 1:12 (f.d. Bengtssons) och begärt att detaljplanen ändras.

Förslaget innebär att markanvändningen ändras från ”Varvsverksamhet” till ”Bostäder och fritidsbåtshamn”. Ändringen omfattar även grannfastigheten Varvsön 1:7 (Lindvarvet).

Synpunkter lämnas skriftligen till kommunen.

Kvarnviks kommun
Samhällsbyggnadsförvaltningen`;function AE(){Th("Kapitel 1 – Arvet","Klart"),setTimeout(()=>{const i=$i();i&&i.day<72&&F1(72,8*60),Th("Kapitel 2 – Hantverket","Ett år senare"),setTimeout(()=>kt("Sven",["Ett år. Kan du tänka dig? Folk har börjat komma hit med sina båtar igen.","Men nu när Majken har fått min motorbåt står du här utan båt. En båtbyggare utan båt – det är som en bagare utan bröd.","Edvin sa alltid att man inte är båtbyggare förrän man byggt sin första egen. Bockarna vid slipen står tomma.","Börja med kölen. Virke kan du plocka eller beställa i telefonen."],()=>{$n("c2"),On("Ett år på ön. Sven tycker att det är dags att jag bygger en egen båt. Jag tror han har rätt.")}),5200)},5400)}function RE(){gd("Leo",["Hej! Är det du som äger varvet? Jag heter Leo. Leo Nyström. Majken är min moster.","Jag har sett dig bygga från färjan. Jag vill lära mig! Jag kan bära, spika, sopa – allt.","Jag… tappar saker ibland. Men jag är stark! Och billig: 120 kronor om dagen."],"Anställ Leo","Hellre en erfaren snickare",()=>{yp("leo"),kt("Leo",["Ja!! Du kommer inte ångra dig. Typ.","Jag börjar direkt – jag samlar virke och skrot åt dig varje dag."],()=>On("Anställde Leo, 19 år. Han tappade en hammare i sjön inom en timme. Men han skrattar hela tiden."))},()=>{kt("Leo",["Okej… jag fattar. Moster säger att Åke Persson letar jobb. Han är typ hundra år, men han kan allt."],()=>ts(()=>{yp("ake"),kt("Åke",["Åke Persson. Snickrat i fyrtio år, varav tio med din morfar.","280 kronor om dagen. Då får du kvalitet – dubbelt så mycket virke och skrot som en lärling."],()=>On("Anställde Åke Persson. Han var lärling hos morfar en gång. Han säger inte mycket, men allt han gör blir rakt."))}))})}function CE(){const i=yo();kt(i.name,[i.name==="Leo"?"Chefen! Det låg ett gammalt papper bakom virkesstapeln. Det står 1994 på det.":"Det här låg bakom virkesstapeln. Jag känner igen handstilen. Edvins."],()=>Sa("En sida ur Edvins dagbok",bE,()=>{$n("sida1"),On("En sida ur morfars dagbok: han ritade en båt som skulle klara Ytterskären i storm. ”Jag bygger åt dem som inte har någon.”")}))}function PE(){setTimeout(()=>kt("Sven",[`${Rs()}! Fint namn.`,"Hon flyter. Och hon läcker inte ens. Edvin hade nickat – mer än så fick man aldrig av honom.","Ta en provtur. Kör över till Majken på Grannön och visa upp henne."],()=>{$n("sjosatt"),On(`Sjösatte min första egna båt: ${Rs()}.`)}),900)}function IE(){const i=()=>setTimeout(()=>{st("done"),kt("Sven · 📞",["Fyr-Ingrid ringde. Hon har hört att Edvins barnbarn har egen båt nu.","Hon vill träffa dig. Åk ut till Fyrskäret – men bara när det är lugnt väder. Inte i blåst."],null)},1500);It().dock==="grannon"?kt("Majken",["Men se! Edvins barnbarn i egen båt. Han hade varit så stolt.","Och den är byggd här på öarna. Det har inte hänt på trettio år."],i):i()}function LE(){kt("Ingrid",["Så du är Edvins barnbarn. Du lägger till som han – för fort och för nära.","Jag har vaktat den här fyren i fyrtio år. Natten mot den fjortonde oktober 1994 satt jag uppe, som alltid när det blåser.","Kvart i två sprakade radion. Ett nödanrop på kanal sexton, svagt och sönderhackat. Jag uppfattade aldrig båtens namn.","Tio minuter senare såg jag Sjöstjärnans lanternor gå rakt ut mot Ytterskären. I tio meters sjö.","Jag berättade det för polisen. De skrev ner det. Sen glömde alla bort det – utom jag.","Edvin lämnade det här hos mig veckan innan. ”Om något händer”, sa han. Jag har aldrig vågat läsa det. Nu är det ditt."],()=>Sa("En sida ur Edvins dagbok",wE,()=>{$n("ingrid"),On("Fyr-Ingrid hörde ett nödanrop natten morfar försvann. Någon annan var ute i stormen. Han körde ut för att hjälpa någon?")}))}function DE(){Ve.karin.visible=!0,st("done"),ht("📱 Mamma: Jag kommer ut med eftermiddagsbåten. Möt mig på bryggan.",4200)}function NE(){gd("Karin",["Så det är här du gömmer dig.","Du ser ut precis som han när du står där med verktygen. Det är inte menat som en komplimang.","Vet du hur det var att växa upp här? Pappa var alltid ute på sjön eller i boden. Mamma satt ensam vid fönstret.","Och en natt körde han bara ut. Utan ett ord. Han valde havet framför oss – igen."],"”Det här är mitt nu.”","”Jag vill förstå varför.”",()=>{$n("karinHard"),kt("Karin",["Då är du lika envis som han.","…Jag åker med kvällsbåten. Hälsa Sven."],bp)},()=>{$n("karinSoft"),kt("Karin",["Varför…","Det har jag frågat mig själv i trettio år.","Om du hittar svaret – berätta det för mig. Jag tror inte att jag orkar leta själv."],bp)})}function bp(){ts(()=>{Ve.karin.visible=!1,$n("karin2"),On(Sn("karinSoft")?"Mamma var här. Vi grälade – och sen grälade vi inte. Hon vill också veta varför.":"Mamma var här. Vi grälade. Hon åkte med kvällsbåten utan att säga hejdå ordentligt.")})}function UE(){setTimeout(()=>{st("done"),kt("Majken · 📞",["Det är regatta på Grannön i dag! Alla som har en båt ställer upp – det är tradition.","Kom hit och anmäl dig. Första pris är 2 000 kronor och en hel ös beröm."],null)},1500)}function kE(){gd("Majken",[`Kör du ${Rs()}, eller vill du låna min? Min är snabbare.`,"Men folk lägger märke till vem som har byggt båten man vinner med."],`Kör ${Rs()}`,"Låna Majkens",()=>Mp(!1,wp),()=>Mp(!0,wp))}function wp(i,e){const t=[2e3,1e3,500,200][i-1],n=[15,8,4,2][i-1]*(e.borrow?1:2);V.kr+=t,V.rykte=(V.rykte||0)+n,an();const s=i===1?e.borrow?"Först i mål! Även om det var min båt, så.":"Först i mål – i en båt du byggt själv! Det har ön inte sett sedan Edvin.":i===4?"Sist, men du kom i mål. Det är mer än Fiskar-Olle klarade 2019.":i===2?"Du kom andra! Inte illa för första gången.":"Du kom tredje! Inte illa för första gången.";ht(`+${t} kr · +${n} rykte`,3e3),kt("Majken",[s,"Här är prispengarna. Och folk pratar om dig nu.","Förresten – din morfar lämnade en gång en bok här för att binda om. Den här sidan låg kvar. Jag tycker att du ska ha den."],()=>Sa("En sida ur Edvins dagbok",EE,()=>{$n("regatta"),On(`Regattan på Grannön: plats ${i}${e.borrow?" i Majkens båt":" med "+Rs()}. Och ännu en sida från morfar – om en man som hette Wahl.`)}))}function FE(){Sa("Brev från Kvarnviks kommun",TE,()=>setTimeout(()=>{st("done"),kt("Sven · 📞",["Har du också fått brevet från kommunen? Västkust Marina har köpt Bengtssons mark. Precis bakom ditt varv.","Nu vill de rita om planen så att varvet blir bostäder och en marina för plastbåtar.","Rasmus Wahl heter vd:n. Wahl… Det namnet har jag inte hört på länge.","Han har tid och pengar. Men han har inte ön på sin sida. Fortsätt som du gör."],()=>{$n("bolaget"),On("Västkust Marina har köpt grannmarken och kommunen vill ändra detaljplanen. Vd:n heter Rasmus Wahl. Samma namn som i morfars dagbok.")})},800))}const Ya=(i,e,t,n)=>(Math.sin(i*.08+t*1.1)*.18+Math.sin(e*.11-t*.9)*.14+Math.sin((i+e)*.21+t*1.7)*.06)*n,js=48,OE=.45,Ep=3.2,Hn=[];let Qs=null,Ec=null;const Mo=90,hs=new Float32Array(Mo*3),Fs=new Float32Array(Mo*3),ou=new Float32Array(Mo).fill(9);let Tp=0;function BE(){const i=new Ht;i.setAttribute("position",new wt(new Float32Array(js*2*3),3)),i.setAttribute("fade",new wt(new Float32Array(js*2),1));const e=new Float32Array(js*2);for(let r=0;r<js;r++)e[r*2]=1,e[r*2+1]=-1;i.setAttribute("side",new wt(e,1));const t=[];for(let r=0;r<js-1;r++){const a=r*2;t.push(a,a+1,a+2,a+1,a+3,a+2)}i.setIndex(t);const n=new kn({transparent:!0,depthWrite:!1,side:en,vertexShader:"attribute float fade,side;varying float vF,vSd;varying vec2 vS;void main(){vF=fade;vSd=side;vS=position.xz;gl_Position=projectionMatrix*viewMatrix*vec4(position,1.);}",fragmentShader:"varying float vF,vSd;varying vec2 vS;void main(){float e=abs(vSd);float edge=smoothstep(.55,.95,e)*(1.-smoothstep(.97,1.,e)*.6);float n=.6+.4*sin(vS.x*3.1+vS.y*2.3)*sin(vS.y*4.7-vS.x*1.9);gl_FragColor=vec4(vec3(.96,.98,1.),vF*n*mix(.12,.9,edge));}"});Qs=new Te(i,n),Qs.frustumCulled=!1,Qs.renderOrder=2,ze.add(Qs);const s=new Ht;s.setAttribute("position",new wt(hs,3)),Ec=new vm(s,new qh({color:16055295,size:.16,transparent:!0,opacity:.85,depthWrite:!1})),Ec.frustumCulled=!1,ze.add(Ec)}let In=null,Oa=null,Ba=null,Os=null,Bs=null;function zE(i,e){try{if(Rt.snd||(i=!1),!i){Os&&In&&Os.gain.setTargetAtTime(0,In.currentTime,.15);return}In||(In=new(window.AudioContext||window.webkitAudioContext),Oa=In.createOscillator(),Oa.type="sawtooth",Ba=In.createOscillator(),Ba.type="square",Bs=In.createBiquadFilter(),Bs.type="lowpass",Bs.frequency.value=380,Os=In.createGain(),Os.gain.value=0,Oa.connect(Bs),Ba.connect(Bs),Bs.connect(Os),Os.connect(In.destination),Oa.start(),Ba.start());const t=Math.min(1,Math.abs(e)/11);Oa.frequency.setTargetAtTime(38+70*t,In.currentTime,.2),Ba.frequency.setTargetAtTime(19+35*t,In.currentTime,.2),Bs.frequency.setTargetAtTime(260+700*t,In.currentTime,.2),Os.gain.setTargetAtTime(.035+.05*t,In.currentTime,.2)}catch{}}let za=NaN,cu=NaN,Ap=null;function Mg(i,e,t,n,s,r,a=!1){var A;const o=Tn?((A=Tn.material.uniforms.amp)==null?void 0:A.value)??1:1,c=i.position.x,l=i.position.z,u=Math.sin(r)*2.4,h=Math.cos(r)*2.4,d=Math.cos(r)*.9,f=-Math.sin(r)*.9,g=Ya(c+u,l+h,t,o),v=Ya(c-u,l-h,t,o),m=Ya(c-d,l-f,t,o),p=Ya(c+d,l+f,t,o),_=.45+(g+v+m+p)/4;i.position.y+=(_-i.position.y)*Math.min(1,e*6);const y=Math.min(1,Math.abs(n)/11),x=Math.max(0,Math.sin(t*2.6+c*.15+l*.11))**4*.045*y*o;i.position.y+=x*.25;const P=Math.atan2(v-g,4.8)-y*.1-x-(a?Math.sin(t*9)*.004*y:0),E=i.userData;E.roll=(E.roll||0)+(-s*y*.16-(E.roll||0))*Math.min(1,e*3),i.rotation.set(P,r,Math.atan2(m-p,1.8)+E.roll,"YXZ")}function HE(i,e,t,n,s,r,a){var g;Qs||BE();const o=Tn?((g=Tn.material.uniforms.amp)==null?void 0:g.value)??1:1,c=i.position.x,l=i.position.z;Mg(i,e,t,s,r,a,n);const u=Math.min(1,Math.abs(s)/11);i!==Ap&&(Ap=i,za=NaN,Hn.length=0),isNaN(za)&&(za=c,cu=l),Math.hypot(c-za,l-cu)>OE&&Math.abs(s)>.6&&(Hn.unshift({x:c-Math.sin(a)*2.6,z:l-Math.cos(a)*2.6,ax:Math.cos(a),az:-Math.sin(a),age:0,v:u}),Hn.length>js&&Hn.pop(),za=c,cu=l);for(const v of Hn)v.age+=e;for(;Hn.length&&Hn[Hn.length-1].age>Ep;)Hn.pop();const d=Qs.geometry.attributes.position,f=Qs.geometry.attributes.fade;for(let v=0;v<js;v++){const m=Hn[Math.min(v,Hn.length-1)];if(!m){d.setXYZ(v*2,c,-9,l),d.setXYZ(v*2+1,c,-9,l),f.setX(v*2,0),f.setX(v*2+1,0);continue}const p=m.age/Ep,_=.5+p*3.2*(.5+m.v),y=Ya(m.x,m.z,t,o)+.06,x=v<Hn.length?(1-p)*m.v*(v===0?.4:1):0;d.setXYZ(v*2,m.x+m.ax*_,y,m.z+m.az*_),d.setXYZ(v*2+1,m.x-m.ax*_,y,m.z-m.az*_),f.setX(v*2,x),f.setX(v*2+1,x)}if(d.needsUpdate=!0,f.needsUpdate=!0,n&&u>.25)for(let v=0;v<Math.ceil(u*3);v++){const m=Tp=(Tp+1)%Mo,p=Math.random()<.5?-1:1;hs[m*3]=c+Math.sin(a)*2.2+Math.cos(a)*p*.5,hs[m*3+1]=i.position.y-.1,hs[m*3+2]=l+Math.cos(a)*2.2-Math.sin(a)*p*.5,Fs[m*3]=Math.cos(a)*p*(1+Math.random())*u*2,Fs[m*3+1]=1.2+Math.random()*1.6*u,Fs[m*3+2]=-Math.sin(a)*p*(1+Math.random())*u*2,ou[m]=0}for(let v=0;v<Mo;v++){if(ou[v]>.8){hs[v*3+1]=-50;continue}ou[v]+=e,Fs[v*3+1]-=9*e,hs[v*3]+=Fs[v*3]*e,hs[v*3+1]+=Fs[v*3+1]*e,hs[v*3+2]+=Fs[v*3+2]*e}Ec.geometry.attributes.position.needsUpdate=!0,zE(n,s)}const Ka={x:0,y:.25,z:-1.6,yaw:0},lu=new I,Rp=new I,Cp=new _n,Pp=new _n;let zs=null,Ip=null;function VE(i){return Ip===i&&zs&&zs.parent||(zs=null,Ip=i,i.traverse(e=>{!zs&&/hips$/i.test(e.name)&&(zs=e)})),zs}function GE(i,e){e.updateMatrixWorld(!0),lu.set(Ka.x,Ka.y,Ka.z).applyMatrix4(e.matrixWorld),e.getWorldQuaternion(Cp),Pp.setFromAxisAngle(new I(0,1,0),Ka.yaw),i.quaternion.copy(Cp).multiply(Pp),i.position.copy(lu);const t=i.userData.realModel?VE(i):null;t&&(i.updateMatrixWorld(!0),t.getWorldPosition(Rp),i.position.add(lu.sub(Rp)))}const ro=[],WE=Math.random().toString(36).slice(2,10);let hc=[],Lp=performance.now(),uu="";function XE(){const i=window.SBCFG;return i&&i.url&&i.key?i:null}function jE(){try{for(let i=0;i<localStorage.length;i++){const e=localStorage.key(i)||"";if(e.startsWith("sb-")&&e.endsWith("-auth-token")){const t=JSON.parse(localStorage.getItem(e)||"null");if(t&&t.access_token)return t.access_token}}}catch{}return null}function Tc(i,e){ro.push({kind:i,data:e}),ro.length>50&&ro.shift()}function qE(i,e){try{const t=i&&i.getExtension("WEBGL_debug_renderer_info");uu=t&&i?String(i.getParameter(t.UNMASKED_RENDERER_WEBGL)):""}catch{uu=""}Tc("session",{ua:navigator.userAgent,w:screen.width,h:screen.height,dpr:devicePixelRatio,gpu:uu,backend:e,cores:navigator.hardwareConcurrency||0}),window.addEventListener("error",t=>Tc("error",{msg:String(t.message),src:`${t.filename}:${t.lineno}:${t.colno}`,stack:t.error&&t.error.stack?String(t.error.stack).slice(0,1500):""})),window.addEventListener("unhandledrejection",t=>Tc("error",{msg:"promise: "+String(t.reason&&t.reason.message||t.reason).slice(0,500)})),window.addEventListener("pagehide",()=>Dp(!0)),setInterval(()=>Dp(!1),6e4)}function YE(i,e){if(i>0&&i<1&&hc.push(i),performance.now()-Lp>6e4&&hc.length>30){const t=hc.slice().sort((r,a)=>r-a),n=t.reduce((r,a)=>r+a,0)/t.length,s=t[Math.min(t.length-1,Math.floor(t.length*.99))];Tc("perf",{fps:+(1/n).toFixed(1),low1:+(1/s).toFixed(1),frames:t.length,...e}),hc=[],Lp=performance.now()}}function Dp(i){const e=XE();if(!e||!ro.length)return;const t=ro.splice(0).map(s=>({session:WE,kind:s.kind,data:s.data})),n={"Content-Type":"application/json",apikey:e.key,Authorization:"Bearer "+(jE()||e.key),Prefer:"return=minimal"};try{fetch(e.url+"/rest/v1/varvet_telemetry",{method:"POST",headers:n,body:JSON.stringify(t),keepalive:i}).catch(()=>{})}catch{}}let Np=performance.now();function Sg(i){requestAnimationFrame(Sg);const e=1e3/Rt.fps-1.5,t=i-Np;if(t<e)return;const n=Math.min(.05,t/1e3);Np=i;const s=performance.now();Hi&&(Jm(n),Fw(n,i/1e3),sw(i/1e3),z1(n),gE(n)),$1(),jb(n);const r=i/1e3;Tn.material.uniforms.t.value=r,Hi&&uE(n,r),Mw(n,Hi),Dc.t.value=r,Dc.w.value=.6+.5*(Tn.material.uniforms.amp?Tn.material.uniforms.amp.value:1);{const o=se.on?Math.min(1,Math.abs(se.v)/11):0,c=Wt.userData.baseFov||Wt.fov;Wt.userData.baseFov=c;const l=c+o*7;Math.abs(Wt.fov-l)>.02&&(Wt.fov+=(l-Wt.fov)*Math.min(1,n*2),Wt.updateProjectionMatrix())}if(At){const o=se.on?se.boat:At;for(const c of[At,...ld]){if(!c.visible)continue;const l=se.on&&c===se.boat,u=l?se.yaw:c.userData.yaw??(c.userData.yaw=c.rotation.y);l&&(c.userData.yaw=u),c===o?HE(c,n,r,se.on,l?se.v:0,l&&se.steer||0,u):Mg(c,n,r,c.userData.v||0,0,u)}se.on?GE(pt,se.boat):pt.quaternion.setFromAxisAngle(new I(0,1,0),pt.rotation.y)}const a=ze.userData.flag;if(a&&(a.rotation.y=Math.sin(r*1.7)*.25),!Hi){He.tYaw+=n*.08,He.yaw=He.tYaw;const o=60,c=Math.sin(r*.05)*o,l=50+Math.cos(r*.05)*o;Wt.position.set(c,22,l),Wt.lookAt(0,2,36),ze.userData.sky.position.copy(Wt.position)}g1(),v1(n,performance.now()-s),Hi&&(f1(t/1e3),YE(t/1e3,{...ah(),q:Rt.q,goal:Rt.fps}))}function KE(){Cw(M1()),I1(),P1(),C1(fi),Bw(),iw(),mE(),lE(),Pw(),zw(),O1(),V.char&&sr(pt,km[V.char]),ue.pos.y=An(ue.pos.x,ue.pos.z),Bm(),qE(xn.getContext(),"webgl2"),ee("loading").remove(),requestAnimationFrame(Sg),window.__ready=!0}window.VARVET={SET:Rt,inter:()=>Zm().map(i=>i.label+"@"+i.x.toFixed(1)+","+i.z.toFixed(1)),myBoat:()=>sn,DOCKS:Nn,COURSE:ai,sg:En,story:()=>V.story,SEAT:Ka,NPC:Ve,P:pt,life:()=>$i(),player:ue,camS:He,input:Yn,SET:Rt,renderer:xn,scene:ze,update:Jm,act:bh,dlgNext:_h,BOATM:se,JOBS:gh,startGame:_d,endGame:Eo,jobState:la,get nearI(){return Ji},get GAMEON(){return ut},get NJ(){return bt},bobBoat:()=>At,ST:V,setBuild:wh,place:hg,gather:dg,cur:fn,NODES:Kr,start:()=>ee("bPlay").onclick()};setTimeout(KE,30);addEventListener("pointerdown",ig);addEventListener("keydown",ig);
