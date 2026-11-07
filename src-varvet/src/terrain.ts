// @ts-nocheck
import * as THREE from "three";
import { clamp } from "./util";
import { scene } from "./engine";
import { N2, N3, fbm, lerp, sstep } from "./util";

// ================= Världen (höjd i meter, havsyta = 0) =================
const ISLANDS=[{x:0,z:0,rx:95,rz:72,peak:15},{x:175,z:-120,rx:46,rz:38,peak:9},{x:-160,z:140,rx:30,rz:26,peak:6},{x:120,z:150,rx:14,rz:12,peak:4}];
const YARD={x:0,z:44,r:18,h:1.3};
function rawH(x,z){let m=-1;for(const I of ISLANDS){const dx=(x-I.x)/I.rx,dz=(z-I.z)/I.rz;const wob=.18*fbm(x*.012+I.x,z*.012+I.z,3);const d=Math.sqrt(dx*dx+dz*dz)+wob;const v=(1-d)*(I.peak/6);m=Math.max(m,v)}
  let h;if(m>0){const k=sstep(0,1.2,m);h=m*6*(.55+.45*k);h+=k*(fbm(x*.03,z*.03,4)*4.5+Math.abs(N2(x*.08,z*.08))*1.6)}else{h=m*9}
  return h}
function H(x,z){let h=rawH(x,z);
  // plan varvsplan
  const dy=Math.hypot(x-YARD.x,z-YARD.z);const w=1-sstep(YARD.r,YARD.r+10,dy);h=lerp(h,YARD.h+N3(x*.1,z*.1)*.15,w);
  // slip ner i vattnet
  if(Math.abs(x+12)<5&&z>YARD.z+8&&z<YARD.z+48){const k=1-sstep(3,5,Math.abs(x+12));const sh=lerp(YARD.h,-2.6,clamp((z-(YARD.z+10))/30,0,1));h=Math.min(h,lerp(h,sh,k))}
  return h}

// ================= Terräng =================
const WS=460,SEG=230;const HG=new Float32Array((SEG+1)*(SEG+1));
function sampleGrid(x,z){const fx=(x+WS/2)/WS*SEG,fz=(z+WS/2)/WS*SEG;if(fx<0||fz<0||fx>=SEG||fz>=SEG)return -9;const ix=fx|0,iz=fz|0,tx=fx-ix,tz=fz-iz;const a=HG[iz*(SEG+1)+ix],b=HG[iz*(SEG+1)+ix+1],c=HG[(iz+1)*(SEG+1)+ix],d=HG[(iz+1)*(SEG+1)+ix+1];
  return tx+tz<1?a+(b-a)*tx+(c-a)*tz:d+(c-d)*(1-tx)+(b-d)*(1-tz)}
function buildTerrain(){const g=new THREE.PlaneGeometry(WS,WS,SEG,SEG);g.rotateX(-Math.PI/2);const pos=g.attributes.position;const col=new Float32Array(pos.count*3);
  for(let i=0;i<pos.count;i++){const x=pos.getX(i),z=pos.getZ(i);const h=H(x,z);pos.setY(i,h);HG[i]=h}
  g.computeVertexNormals();const nor=g.attributes.normal;
  const cSand=new THREE.Color("#e8d6a6"),cGrass=new THREE.Color("#7fb35a"),cGrass2=new THREE.Color("#5f9a47"),cRock=new THREE.Color("#b49a92"),cRock2=new THREE.Color("#8d7c7a"),cSea=new THREE.Color("#7a8f86"),cYard=new THREE.Color("#a99a7f"),c=new THREE.Color();
  for(let i=0;i<pos.count;i++){const x=pos.getX(i),z=pos.getZ(i),h=pos.getY(i),ny=nor.getY(i);const n=N3(x*.05,z*.05);
    if(h<-.4)c.copy(cSea).lerp(cSand,clamp((h+3)/3,0,1));
    else if(h<.9+n*.4)c.copy(cSand);
    else{c.copy(cGrass).lerp(cGrass2,clamp(.5+n,0,1));const rock=clamp((.86-ny)*5+(h>9?.4:0)+N2(x*.04,z*.04)*.5,0,1);c.lerp(rock>.5?cRock:cRock2,sstep(.25,.6,rock))}
    const dy=Math.hypot(x-YARD.x,z-YARD.z);if(dy<YARD.r+4&&h>.4)c.lerp(cYard,(1-sstep(YARD.r-10,YARD.r+2,dy))*.55*(.7+.3*N2(x*.15,z*.15)));
    col[i*3]=c.r;col[i*3+1]=c.g;col[i*3+2]=c.b}
  g.setAttribute("color",new THREE.BufferAttribute(col,3));
  const m=new THREE.MeshLambertMaterial({vertexColors:true});const mesh=new THREE.Mesh(g,m);mesh.receiveShadow=true;scene.add(mesh);return mesh}

// höjdtextur för vattnet (djup, skum vid strand)
function heightTex(){const R=256,d=new Uint8Array(R*R*4);for(let j=0;j<R;j++)for(let i=0;i<R;i++){const x=(i/(R-1)-.5)*WS,z=(j/(R-1)-.5)*WS;const h=sampleGrid(x,z);const v=clamp((h+8)/12,0,1);d[(j*R+i)*4]=v*255;d[(j*R+i)*4+3]=255}
  const t=new THREE.DataTexture(d,R,R);t.magFilter=THREE.LinearFilter;t.minFilter=THREE.LinearFilter;t.needsUpdate=true;return t}


export { H, HG, ISLANDS, SEG, WS, YARD, buildTerrain, heightTex, rawH, sampleGrid };
