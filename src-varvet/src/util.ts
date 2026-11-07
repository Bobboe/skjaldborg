// @ts-nocheck
import * as THREE from "three";

// ================= Brus =================
function makeNoise(seed){const p=new Uint8Array(512);const r=mulberry(seed);const a=[...Array(256).keys()];for(let i=255;i>0;i--){const j=Math.floor(r()*(i+1));[a[i],a[j]]=[a[j],a[i]]}for(let i=0;i<512;i++)p[i]=a[i&255];
  const G=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]];const F2=.5*(Math.sqrt(3)-1),G2=(3-Math.sqrt(3))/6;
  return(x,y)=>{const s=(x+y)*F2,i=Math.floor(x+s),j=Math.floor(y+s),t=(i+j)*G2,x0=x-(i-t),y0=y-(j-t);const i1=x0>y0?1:0,j1=1-i1;const x1=x0-i1+G2,y1=y0-j1+G2,x2=x0-1+2*G2,y2=y0-1+2*G2;const ii=i&255,jj=j&255;
    const c=(gx,gy,xx,yy)=>{let tt=.5-xx*xx-yy*yy;if(tt<0)return 0;tt*=tt;const g=G[p[gx+p[gy]]&7];return tt*tt*(g[0]*xx+g[1]*yy)};
    return 70*(c(ii,jj,x0,y0)+c(ii+i1,jj+j1,x1,y1)+c(ii+1,jj+1,x2,y2))}}
function mulberry(a){return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
const N1=makeNoise(7),N2=makeNoise(19),N3=makeNoise(31);
const fbm=(x,y,o=4)=>{let a=0,f=1,s=.5;for(let i=0;i<o;i++){a+=s*N1(x*f,y*f);f*=2.03;s*=.5}return a};
const clamp=(v,a,b)=>v<a?a:v>b?b:v,lerp=(a,b,t)=>a+(b-a)*t,sstep=(a,b,v)=>{const t=clamp((v-a)/(b-a),0,1);return t*t*(3-2*t)};

// ================= Hjälp: slå ihop geometrier med färg =================
function colored(geo,color){const g=geo.index?geo.toNonIndexed():geo;const c=new THREE.Color(color),n=g.attributes.position.count,a=new Float32Array(n*3);for(let i=0;i<n;i++){a[i*3]=c.r;a[i*3+1]=c.g;a[i*3+2]=c.b}g.setAttribute("color",new THREE.BufferAttribute(a,3));g.deleteAttribute("uv");return g}
function merge(list){let n=0;for(const g of list)n+=g.attributes.position.count;const P=new Float32Array(n*3),Nn=new Float32Array(n*3),C=new Float32Array(n*3);let o=0;
  for(const g of list){P.set(g.attributes.position.array,o*3);Nn.set(g.attributes.normal.array,o*3);C.set(g.attributes.color.array,o*3);o+=g.attributes.position.count}
  const r=new THREE.BufferGeometry();r.setAttribute("position",new THREE.BufferAttribute(P,3));r.setAttribute("normal",new THREE.BufferAttribute(Nn,3));r.setAttribute("color",new THREE.BufferAttribute(C,3));r.computeBoundingSphere();return r}
const tr=(g,x,y,z,ry=0,s=1)=>{g.scale(s,s,s);if(ry)g.rotateY(ry);g.translate(x,y,z);return g};
const VC=new THREE.MeshLambertMaterial({vertexColors:true}),VCD=new THREE.MeshLambertMaterial({vertexColors:true,side:THREE.DoubleSide});

const $=id=>document.getElementById(id);


export { $, N1, N2, N3, VC, VCD, clamp, colored, fbm, lerp, makeNoise, merge, mulberry, sstep, tr };
