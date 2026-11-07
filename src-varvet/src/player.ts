// @ts-nocheck
import * as THREE from "three";
import { scene } from "./engine";

// ================= Spelaren =================
const player={pos:new THREE.Vector3(2,0,50),vel:new THREE.Vector3(),yaw:0,walk:0,speed:0,grounded:true,vy:0};
const P=new THREE.Group();scene.add(P);
const limb={};
{const skin="#f1c7a4",shirt="#2f5d8a",pants="#3b3f45",cap="#ffc21a";const M=c=>new THREE.MeshLambertMaterial({color:c});
  const body=new THREE.Mesh(new THREE.CapsuleGeometry(.36,.55,4,10),M(shirt));body.position.y=1.12;P.add(body);
  const head=new THREE.Mesh(new THREE.SphereGeometry(.3,16,12),M(skin));head.position.y=1.82;P.add(head);
  const capm=new THREE.Mesh(new THREE.SphereGeometry(.31,14,8,0,Math.PI*2,0,Math.PI/2),M(cap));capm.position.y=1.86;P.add(capm);
  const brim=new THREE.Mesh(new THREE.CylinderGeometry(.22,.22,.04,12),M(cap));brim.scale.set(1,1,.9);brim.position.set(0,1.88,.28);P.add(brim);
  for(const s of[-1,1]){const eye=new THREE.Mesh(new THREE.SphereGeometry(.045,8,6),M("#2a2a2a"));eye.position.set(s*.11,1.84,.27);P.add(eye)}
  const beard=new THREE.Mesh(new THREE.SphereGeometry(.22,12,8,0,Math.PI*2,Math.PI*.45,Math.PI*.55),M("#8a4a2a"));beard.position.set(0,1.78,.1);P.add(beard);
  const mk=(name,len,rad,col,x,y)=>{const piv=new THREE.Group();piv.position.set(x,y,0);const m=new THREE.Mesh(new THREE.CapsuleGeometry(rad,len,3,8),M(col));m.position.y=-len/2-rad*.5;piv.add(m);P.add(piv);limb[name]=piv};
  mk("la",.42,.11,shirt,-.46,1.42);mk("ra",.42,.11,shirt,.46,1.42);mk("ll",.5,.14,pants,-.17,.72);mk("rl",.5,.14,pants,.17,.72);
  P.traverse(o=>{if(o.isMesh)o.castShadow=true})}


export { P, limb, player };
