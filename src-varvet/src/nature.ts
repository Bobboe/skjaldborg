// @ts-nocheck
import * as THREE from "three";
import { colored } from "./util";
import { VC } from "./util";
import { cnt } from "./build";
import { scene } from "./engine";
import { H, WS, YARD } from "./terrain";
import { N2, fbm, merge, mulberry, tr } from "./util";
import { swayMat } from "./paint";
const PINE_M = swayMat(2.0, .0045), BIRCH_M = swayMat(2.6, .006), GRASS_M = swayMat(0, .3);

// ================= Natur: tallar, björkar, klippor (instansierade) =================
const COLL=[];// cirkelkollisioner {x,z,r}
function buildNature(q){const rnd=mulberry(42);
  // Granvåning: kon med taggig, hängande kjol och ojämn radie
  const tier=(r,h,y,seed)=>{const g=new THREE.ConeGeometry(r,h,16,3);const p=g.attributes.position;const v=new THREE.Vector3();
    for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i);const rad=Math.hypot(v.x,v.z);if(rad<1e-4)continue;const a=Math.atan2(v.z,v.x);const k=rad/r;
      const bottom=v.y<-h/2+1e-3;const jag=bottom?(Math.round(a/(Math.PI*2)*16)%2?1.12:.82):1;
      const f=(1+.13*Math.sin(a*5+seed)+.08*N2(Math.cos(a)*2+seed,Math.sin(a)*2+v.y))*jag;v.x*=f;v.z*=f;if(bottom)v.y-=.22*k+.12*Math.sin(a*3+seed);p.setXYZ(i,v.x,v.y,v.z)}
    g.computeVertexNormals();return tr(g,0,y,0)};
  const pine=merge([colored(tr(new THREE.CylinderGeometry(.16,.3,2.6,8),0,1.3,0),"#7a5136"),
    colored(tier(1.8,2.4,2.4,1),"#2f6b3d"),colored(tier(1.45,2.2,3.5,2),"#357a43"),colored(tier(1.1,2,4.55,3),"#357a43"),colored(tier(.7,1.7,5.5,4),"#3d8a4b")]);
  // Björkkrona: knöliga klumpar
  const blob=(r,x,y,z,seed)=>{const g=new THREE.IcosahedronGeometry(r,2);const p=g.attributes.position;const v=new THREE.Vector3();
    for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i);const n=v.clone().normalize();const k=1+.22*N2(n.x*2.2+seed,n.y*2.2+n.z*1.7)+.1*N2(n.z*5+seed,n.x*5);v.multiplyScalar(k);v.y*=.85;p.setXYZ(i,v.x,v.y,v.z)}
    g.computeVertexNormals();return tr(g,x,y,z)};
  const birch=merge([colored(tr(new THREE.CylinderGeometry(.11,.18,3.4,7),0,1.7,0),"#efece4"),colored(tr(new THREE.CylinderGeometry(.05,.08,1.4,5).rotateZ(.7),.45,3.3,0),"#efece4"),
    colored(blob(1.35,0,4,0,1),"#8cc35b"),colored(blob(1.0,.8,4.6,.3,2),"#9bcf66"),colored(blob(.95,-.6,4.7,-.4,3),"#9bcf66"),colored(blob(.8,.1,5.3,.5,4),"#8cc35b")]);
  const rockG=(()=>{const g=new THREE.IcosahedronGeometry(1,2);const p=g.attributes.position;for(let i=0;i<p.count;i++){const v=new THREE.Vector3().fromBufferAttribute(p,i);const k=1+.22*N2(v.x*1.7+3,v.z*1.7+v.y);v.multiplyScalar(k);v.y*=.62;p.setXYZ(i,v.x,v.y,v.z)}g.computeVertexNormals();return merge([colored(g,"#b8a29a")])})();
  const place=(cnt,ok)=>{const out=[];let tries=0;while(out.length<cnt&&tries<cnt*30){tries++;const x=(rnd()-.5)*WS*.9,z=(rnd()-.5)*WS*.9;const h=H(x,z);if(!ok(x,z,h))continue;if(Math.hypot(x-YARD.x,z-YARD.z)<YARD.r+6)continue;if(COLL.some(c=>Math.hypot(c.x-x,c.z-z)<c.r+1.2))continue;out.push({x,z,h})}return out};
  const slope=(x,z)=>{const e=1.5;return Math.hypot(H(x+e,z)-H(x-e,z),H(x,z+e)-H(x,z-e))/(2*e)};
  const pines=place(Math.round(260*q.trees),(x,z,h)=>h>2.2&&slope(x,z)<.55&&fbm(x*.02,z*.02,2)>-.15);
  for(const p of pines)COLL.push({x:p.x,z:p.z,r:.45,y6:p.h+6});
  const birches=place(Math.round(70*q.trees),(x,z,h)=>h>1.6&&h<7&&slope(x,z)<.4);
  for(const p of birches)COLL.push({x:p.x,z:p.z,r:.35,y6:p.h+5.5});
  const rocks=place(140,(x,z,h)=>h>-.8&&h<9);
  const mk=(geo,list,scaleF,cast,mat=VC)=>{const m=new THREE.InstancedMesh(geo,mat,list.length);const M=new THREE.Matrix4(),Q=new THREE.Quaternion(),S=new THREE.Vector3(),T=new THREE.Vector3(),E=new THREE.Euler();
    list.forEach((p,i)=>{const s=scaleF();E.set(0,rnd()*6.28,0);Q.setFromEuler(E);S.set(s,s*(.85+rnd()*.3),s);T.set(p.x,p.h-.15,p.z);M.compose(T,Q,S);m.setMatrixAt(i,M)});m.castShadow=cast;m.receiveShadow=true;scene.add(m);return m};
  mk(pine,pines,()=>.8+rnd()*.7,true,PINE_M);mk(birch,birches,()=>.8+rnd()*.5,true,BIRCH_M);
  const rm=mk(rockG,rocks,()=>.6+rnd()*1.8,true);
  rocks.forEach(p=>COLL.push({x:p.x,z:p.z,r:.7}));
  // gräsruggar: små platta kluster
  const grass=merge([colored(tr(new THREE.ConeGeometry(.12,.5,4),0,.25,0),"#6da64e"),colored(tr(new THREE.ConeGeometry(.1,.4,4),.15,.2,.08),"#7bb558"),colored(tr(new THREE.ConeGeometry(.1,.45,4),-.12,.22,-.1),"#5e9a45")]);
  const gl=place(Math.round(700*q.trees),(x,z,h)=>h>1.2&&slope(x,z)<.35);COLL.length-=0;
  const gm=new THREE.InstancedMesh(grass,GRASS_M,gl.length);const M=new THREE.Matrix4();gl.forEach((p,i)=>{M.makeRotationY(rnd()*6);M.setPosition(p.x,p.h,p.z);gm.setMatrixAt(i,M)});scene.add(gm)}


export { COLL, buildNature };
