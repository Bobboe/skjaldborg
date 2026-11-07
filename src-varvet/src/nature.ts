// @ts-nocheck
import * as THREE from "three";
import { colored } from "./util";
import { VC } from "./util";
import { cnt } from "./build";
import { scene } from "./engine";
import { H, WS, YARD } from "./terrain";
import { N2, fbm, merge, mulberry, tr } from "./util";

// ================= Natur: tallar, björkar, klippor (instansierade) =================
const COLL=[];// cirkelkollisioner {x,z,r}
function buildNature(q){const rnd=mulberry(42);
  const pine=merge([colored(tr(new THREE.CylinderGeometry(.18,.28,2.4,7),0,1.2,0),"#7a5136"),
    colored(tr(new THREE.ConeGeometry(1.7,2.6,9),0,2.6,0),"#2f6b3d"),colored(tr(new THREE.ConeGeometry(1.35,2.3,9),0,3.8,0),"#357a43"),colored(tr(new THREE.ConeGeometry(.95,1.9,9),0,4.9,0),"#3d8a4b")]);
  const birch=merge([colored(tr(new THREE.CylinderGeometry(.13,.18,3.2,6),0,1.6,0),"#efece4"),
    colored(tr(new THREE.IcosahedronGeometry(1.5,1),0,3.9,0),"#8cc35b"),colored(tr(new THREE.IcosahedronGeometry(1.1,1),.7,4.6,.3),"#9bcf66")]);
  const rockG=(()=>{const g=new THREE.IcosahedronGeometry(1,2);const p=g.attributes.position;for(let i=0;i<p.count;i++){const v=new THREE.Vector3().fromBufferAttribute(p,i);const k=1+.22*N2(v.x*1.7+3,v.z*1.7+v.y);v.multiplyScalar(k);v.y*=.62;p.setXYZ(i,v.x,v.y,v.z)}g.computeVertexNormals();return merge([colored(g,"#b8a29a")])})();
  const place=(cnt,ok)=>{const out=[];let tries=0;while(out.length<cnt&&tries<cnt*30){tries++;const x=(rnd()-.5)*WS*.9,z=(rnd()-.5)*WS*.9;const h=H(x,z);if(!ok(x,z,h))continue;if(Math.hypot(x-YARD.x,z-YARD.z)<YARD.r+6)continue;if(COLL.some(c=>Math.hypot(c.x-x,c.z-z)<c.r+1.2))continue;out.push({x,z,h})}return out};
  const slope=(x,z)=>{const e=1.5;return Math.hypot(H(x+e,z)-H(x-e,z),H(x,z+e)-H(x,z-e))/(2*e)};
  const pines=place(Math.round(260*q.trees),(x,z,h)=>h>2.2&&slope(x,z)<.55&&fbm(x*.02,z*.02,2)>-.15);
  for(const p of pines)COLL.push({x:p.x,z:p.z,r:.45,y6:p.h+6});
  const birches=place(Math.round(70*q.trees),(x,z,h)=>h>1.6&&h<7&&slope(x,z)<.4);
  for(const p of birches)COLL.push({x:p.x,z:p.z,r:.35,y6:p.h+5.5});
  const rocks=place(140,(x,z,h)=>h>-.8&&h<9);
  const mk=(geo,list,scaleF,cast)=>{const m=new THREE.InstancedMesh(geo,VC,list.length);const M=new THREE.Matrix4(),Q=new THREE.Quaternion(),S=new THREE.Vector3(),T=new THREE.Vector3(),E=new THREE.Euler();
    list.forEach((p,i)=>{const s=scaleF();E.set(0,rnd()*6.28,0);Q.setFromEuler(E);S.set(s,s*(.85+rnd()*.3),s);T.set(p.x,p.h-.15,p.z);M.compose(T,Q,S);m.setMatrixAt(i,M)});m.castShadow=cast;m.receiveShadow=true;scene.add(m);return m};
  mk(pine,pines,()=>.8+rnd()*.7,true);mk(birch,birches,()=>.8+rnd()*.5,true);
  const rm=mk(rockG,rocks,()=>.6+rnd()*1.8,true);
  rocks.forEach(p=>COLL.push({x:p.x,z:p.z,r:.7}));
  // gräsruggar: små platta kluster
  const grass=merge([colored(tr(new THREE.ConeGeometry(.12,.5,4),0,.25,0),"#6da64e"),colored(tr(new THREE.ConeGeometry(.1,.4,4),.15,.2,.08),"#7bb558"),colored(tr(new THREE.ConeGeometry(.1,.45,4),-.12,.22,-.1),"#5e9a45")]);
  const gl=place(Math.round(700*q.trees),(x,z,h)=>h>1.2&&slope(x,z)<.35);COLL.length-=0;
  const gm=new THREE.InstancedMesh(grass,VC,gl.length);const M=new THREE.Matrix4();gl.forEach((p,i)=>{M.makeRotationY(rnd()*6);M.setPosition(p.x,p.h,p.z);gm.setMatrixAt(i,M)});scene.add(gm)}


export { COLL, buildNature };
