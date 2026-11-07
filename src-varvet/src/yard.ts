// @ts-nocheck
import * as THREE from "three";
import { attachProp } from "./characters";
import { colored } from "./util";
import { VCD } from "./util";
import { VC } from "./util";
import { scene } from "./engine";
import { COLL } from "./nature";
import { H, ISLANDS, YARD } from "./terrain";
import { merge, tr } from "./util";

// ================= Varvet =================
const BOXES=[];// AABB-kollisioner {x0,x1,z0,z1}
let bobBoat;
function buildYard(){const parts=[];const Y=YARD.h;
  // Faluröd verkstadsbod med vita knutar och sadeltak
  const W=12,D=9,Hh=4.2,bx=4,bz=34;
  {const bp=[];  bp.push(colored(tr(new THREE.BoxGeometry(W,Hh,D),bx,Y+Hh/2,bz),"#b8392b"));
  for(const sx of[-1,1])for(const sz of[-1,1])bp.push(colored(tr(new THREE.BoxGeometry(.3,Hh,.3),bx+sx*W/2,Y+Hh/2,bz+sz*D/2),"#f2efe8"));
  bp.push(...gable(bx,Y+Hh,bz,W,D,2.3,"#3b3f45","#b8392b"));
  bp.push(colored(tr(new THREE.BoxGeometry(4.6,3.4,.2),bx,Y+1.7,bz+D/2+.05),"#6e1f17"));
  bp.push(colored(tr(new THREE.BoxGeometry(4.9,.22,.3),bx,Y+3.5,bz+D/2+.1),"#f2efe8"));
  for(const wx of[-4,4])bp.push(colored(tr(new THREE.BoxGeometry(1.3,1.1,.15),bx+wx,Y+2.4,bz+D/2+.04),"#cfe6f2"),colored(tr(new THREE.BoxGeometry(1.5,.12,.25),bx+wx,Y+1.8,bz+D/2+.08),"#f2efe8"));
  const hold=new THREE.Group();const bm=new THREE.Mesh(merge(bp),VC);bm.castShadow=true;bm.receiveShadow=true;hold.add(bm);hold.position.set(bx,0,bz);bm.position.set(-bx,0,-bz);scene.add(hold);
   attachProp(hold,"boden.glb",{fit:W+.4,rotY:0,ground:Y-.05,hideChildren:true,liner:.985})}
  BOXES.push({x0:bx-4.6,x1:bx+4.6,z0:bz-6.4,z1:bz+6.4,top:Y+7});
  // brygga
  const jx=14,jz0=58,jz1=90;parts.push(colored(tr(new THREE.BoxGeometry(3.2,.3,jz1-jz0),jx,1.3,(jz0+jz1)/2),"#9a7a55"));
  for(let z=jz0+1;z<jz1;z+=3)for(const s of[-1.4,1.4])parts.push(colored(tr(new THREE.CylinderGeometry(.16,.16,4.5,6),jx+s,-1.2,z),"#5e4630"));
  parts.push(colored(tr(new THREE.BoxGeometry(8,.3,3),jx,1.3,jz1+1.2),"#9a7a55"));
  // slip med räls och båt på vagn
  {const z0=YARD.z+10,z1=YARD.z+40,y0=YARD.h+.12,y1=-2.48,len=Math.hypot(z1-z0,y0-y1),ang=Math.atan2(y0-y1,z1-z0);
   for(const s of[-1,1]){const r=new THREE.BoxGeometry(.25,.25,len);r.rotateX(ang);r.translate(-12+s*1.3,(y0+y1)/2,(z0+z1)/2);parts.push(colored(r,"#5b5f66"))}}
  // gammal båt på bockar på planen
  const yb=new THREE.Mesh(boatGeo("#e9e4d8","#2f5d8a"),VCD);yb.position.set(-6,Y+1.15,47);yb.rotation.y=.4;yb.castShadow=true;scene.add(yb);
  for(const s of[-1.2,1.2])parts.push(colored(tr(new THREE.BoxGeometry(.3,1,2.6),-6+s*.4,Y+.5,47+s*1.1),"#6b5137"));
  BOXES.push({x0:-9.5,x1:-2.5,z0:44,z1:50,top:Y+2});
  // virkesstapel, tunnor, båtar på land
  for(let i=0;i<5;i++)parts.push(colored(tr(new THREE.BoxGeometry(3.6,.22,.4),-13,Y+.12+i*.24,36+i*.05),i%2?"#c49a66":"#b88b58"));
  BOXES.push({x0:-15,x1:-11,z0:35,z1:37.5,top:Y+1.4});
  for(let i=0;i<3;i++)parts.push(colored(tr(new THREE.CylinderGeometry(.42,.42,1.05,10),12+i*.95,Y+.52,40),i==1?"#2f5d8a":"#a33a2a"));
  BOXES.push({x0:11.4,x1:14.8,z0:39.4,z1:40.6,top:Y+1.2});
  // flaggstång
  parts.push(colored(tr(new THREE.CylinderGeometry(.07,.09,9,6),-3,Y+4.5,56),"#f2efe8"));
  COLL.push({x:-3,z:56,r:.3});
  const m=new THREE.Mesh(merge(parts),VC);m.castShadow=true;m.receiveShadow=true;scene.add(m);
  // svensk flagga
  const fl=new THREE.Group();fl.add(new THREE.Mesh(new THREE.PlaneGeometry(2.4,1.5),new THREE.MeshLambertMaterial({color:"#1f5aa6",side:THREE.DoubleSide})));
  const y1=new THREE.Mesh(new THREE.PlaneGeometry(2.4,.3),new THREE.MeshLambertMaterial({color:"#f3c316",side:THREE.DoubleSide}));y1.position.z=.01;fl.add(y1);
  const y2=new THREE.Mesh(new THREE.PlaneGeometry(.3,1.5),new THREE.MeshLambertMaterial({color:"#f3c316",side:THREE.DoubleSide}));y2.position.set(-.3,0,.01);fl.add(y2);
  fl.position.set(-1.8,Y+8.1,56);scene.add(fl);scene.userData.flag=fl;
  // båt som guppar vid bryggan
  bobBoat=new THREE.Mesh(boatGeo("#f4f1ea","#a33a2a"),VCD);bobBoat.position.set(jx-3.6,.15,80);bobBoat.rotation.y=0;bobBoat.castShadow=true;scene.add(bobBoat);
  // stuga på grannön
  const c=[];const I=ISLANDS[1],hx=I.x-8,hz=I.z+10,hy=H(hx,hz);c.push(colored(tr(new THREE.BoxGeometry(6,3,5),hx,hy+1.5,hz),"#b8392b"));c.push(...gable(hx,hy+3,hz,6,5,1.7,"#3b3f45","#b8392b"));
  const cm=new THREE.Mesh(merge(c),VC);cm.castShadow=true;scene.add(cm);BOXES.push({x0:hx-3.3,x1:hx+3.3,z0:hz-2.8,z1:hz+2.8,top:hy+5.5});
  // fyrlykta på den lilla ön
  const L=ISLANDS[3],ly=H(L.x,L.z);const lt=merge([colored(tr(new THREE.CylinderGeometry(.9,1.2,6,10),L.x,ly+3,L.z),"#f2efe8"),colored(tr(new THREE.CylinderGeometry(1.25,1.25,1.2,10),L.x,ly+2,L.z),"#c0392b"),colored(tr(new THREE.CylinderGeometry(.7,.7,1,8),L.x,ly+6.5,L.z),"#ffe9a0"),colored(tr(new THREE.ConeGeometry(1,1.2,10),L.x,ly+7.6,L.z),"#c0392b")]);
  const lm=new THREE.Mesh(lt,VC);lm.castShadow=true;scene.add(lm)}
// sadeltak: två lutande takskivor + gavelspetsar
function gable(x,y,z,W,D,rise,cRoof,cWall){const half=D/2+.45,len=Math.hypot(half,rise)+.1,ang=Math.atan2(rise,half),out=[];
  for(const s of[-1,1]){const b=new THREE.BoxGeometry(W+.8,.18,len);b.rotateX(s*ang);b.translate(x,y+rise/2+.05,z+s*half/2);out.push(colored(b,cRoof))}
  const sh=new THREE.Shape();sh.moveTo(-D/2,0);sh.lineTo(D/2,0);sh.lineTo(0,rise);sh.closePath();
  for(const s of[-1,1]){const g=new THREE.ExtrudeGeometry(sh,{depth:.15,bevelEnabled:false});g.rotateY(Math.PI/2);g.translate(x+s*W/2-(s>0?.15:0),y,z);out.push(colored(g,cWall))}
  return out}
function boatGeo(c1,c2){// enkel snipa: halv ellipsoid + list
  const g=new THREE.SphereGeometry(1,16,8,0,Math.PI*2,Math.PI/2,Math.PI/2);g.scale(1.25,.85,3.2);const p=g.attributes.position;for(let i=0;i<p.count;i++){const z=p.getZ(i);if(z>0)p.setX(i,p.getX(i)*(1-z/3.2*.75))}g.computeVertexNormals();
  const top=new THREE.TorusGeometry(1,.07,5,24);top.rotateX(Math.PI/2);top.scale(1.25,1,3.2);const tp=top.attributes.position;for(let i=0;i<tp.count;i++){const z=tp.getZ(i);if(z>0)tp.setX(i,tp.getX(i)*(1-z/3.2*.75))}
  const seat=new THREE.BoxGeometry(2.1,.1,.5);seat.translate(0,-.25,0);
  return merge([colored(g,c1),colored(top,c2),colored(seat,"#9a7a55")])}


export { BOXES, boatGeo, bobBoat, buildYard, gable };
