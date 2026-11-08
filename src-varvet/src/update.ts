// @ts-nocheck
import * as THREE from "three";
import { play, setSpeed, locked } from "./characters";
import { isPhoneOpen } from "./life";
import { camS } from "./input";
import { player } from "./player";
import { DBOX, ST, buildTick, floorTopAt, hitDyn } from "./build";
import { camera, scene, sun } from "./engine";
import { input } from "./input";
import { BOATM, DLG, GAMEON, boatDrive } from "./jobs";
import { COLL } from "./nature";
import { P, limb } from "./player";
import { ISLANDS, YARD, sampleGrid } from "./terrain";
import { BOXES } from "./yard";
import { jettyAt } from "./hooks";

// ================= Uppdatering =================
const UP=new THREE.Vector3(0,1,0),tmp=new THREE.Vector3();
function walkable(x,z){if(sampleGrid(x,z)<-.55)return false;for(const b of BOXES)if(x>b.x0&&x<b.x1&&z>b.z0&&z<b.z1)return false;return true}
// bryggan och dess ände är gångbara över vatten
function onJetty(x,z){return(Math.abs(x-14)<1.6&&z>57&&z<91)||(Math.abs(x-14)<4&&z>89&&z<92.5)||!!jettyAt(x,z)}
function groundAt(x,z){let g=sampleGrid(x,z);if(onJetty(x,z)){const j=jettyAt(x,z);g=Math.max(g,j?j.h:1.45)}if(typeof ST!=="undefined"&&ST.pieces.length){const f=floorTopAt(x,z);if(f!=null)g=Math.max(g,f)}return g}
function update(dt){let mx=input.mx,mz=input.mz;const k=input.keys;if(k.KeyW||k.ArrowUp)mz=-1;if(k.KeyS||k.ArrowDown)mz=1;if(k.KeyA||k.ArrowLeft)mx=-1;if(k.KeyD||k.ArrowRight)mx=1;
  if(k.KeyQ)camS.tYaw+=dt*1.8;if(k.KeyE)camS.tYaw-=dt*1.8;
  if(GAMEON||DLG||isPhoneOpen()||window.__modal){mx=mz=0}
  if(BOATM.on){boatDrive(dt,mx,mz);if(P.userData.realModel)play(P,'sit')}else{
  const mag=Math.min(1,Math.hypot(mx,mz));const run=mag>.85||k.ShiftLeft;const sp=(run?6.2:3.4)*mag;
  if(mag>.08){const F=-mz/Math.max(mag,1e-3),Rt=mx/Math.max(mag,1e-3),cy_=Math.cos(camS.yaw),sy_=Math.sin(camS.yaw);const vx=sy_*F-cy_*Rt,vz=cy_*F+sy_*Rt;const a=Math.atan2(vx,vz);const tx=Math.sin(a)*sp,tz=Math.cos(a)*sp;
    const dyaw=Math.atan2(Math.sin(a-player.yaw),Math.cos(a-player.yaw));player.yaw+=dyaw*Math.min(1,dt*12);
    const nx=player.pos.x+tx*dt,nz=player.pos.z+tz*dt;
    const ok=(x,z)=>(walkable(x,z)||onJetty(x,z))&&!hitDyn(x,z,player.pos.y)&&!COLL.some(c=>Math.abs(c.x-x)<c.r+.35&&Math.abs(c.z-z)<c.r+.35&&Math.hypot(c.x-x,c.z-z)<c.r+.35)&&(groundAt(x,z)-groundAt(player.pos.x,player.pos.z))<.9*Math.max(dt*sp,.05)+.35;
    if(ok(nx,nz)){player.pos.x=nx;player.pos.z=nz}else if(ok(nx,player.pos.z))player.pos.x=nx;else if(ok(player.pos.x,nz))player.pos.z=nz;
    player.speed=sp}else player.speed=0;
  const g=groundAt(player.pos.x,player.pos.z);player.pos.y+=(g-player.pos.y)*Math.min(1,dt*18);
  player.walk+=dt*player.speed*2.1;const sw=Math.sin(player.walk)*Math.min(1,player.speed/3)*.75;
  limb.la.rotation.x=sw;limb.ra.rotation.x=-sw;limb.ll.rotation.x=-sw;limb.rl.rotation.x=sw;
  if(P.userData.realModel&&!locked(P)){if(player.speed>4.6){play(P,'run');setSpeed(P,'run',player.speed/5.2)}else if(player.speed>.2){play(P,'walk');setSpeed(P,'walk',Math.max(.6,player.speed/1.6))}else play(P,DLG?'talk':'idle')}
  P.position.copy(player.pos);if(!P.userData.realModel)P.position.y+=Math.abs(Math.cos(player.walk))*.06*Math.min(1,player.speed/3);P.rotation.y=player.yaw;}
  // kamera
  camS.yaw+=(camS.tYaw-camS.yaw)*Math.min(1,dt*10);camS.pitch+=(camS.tPitch-camS.pitch)*Math.min(1,dt*10);
  const tgt=tmp.set(player.pos.x,player.pos.y+1.5,player.pos.z);let d=camS.dist;
  const cx=()=>tgt.x-Math.sin(camS.yaw)*Math.cos(camS.pitch)*d,cz=()=>tgt.z-Math.cos(camS.yaw)*Math.cos(camS.pitch)*d,cy=()=>tgt.y+Math.sin(camS.pitch)*d;
  for(let i=0;i<6;i++){const gy=Math.max(sampleGrid(cx(),cz()),0)+.6;if(cy()>gy)break;d*=.82}
  {const D0=d;for(let s=1;s<=12;s++){const f=s/12;d=D0*f;const x=cx(),z=cz(),y=cy();let hit=false;for(const b of DBOX)if(x>b.x0-.35&&x<b.x1+.35&&z>b.z0-.35&&z<b.z1+.35&&y<b.y1+1.3&&y>b.y0-.5){hit=true;break}
    if(!hit)for(const b of BOXES)if(x>b.x0&&x<b.x1&&z>b.z0&&z<b.z1&&y<(b.top||6.5)){hit=true;break}if(!hit&&s>3)for(const c of COLL)if(c.r<.5&&y<c.y6&&Math.abs(c.x-x)<1.4&&Math.abs(c.z-z)<1.4&&Math.hypot(c.x-x,c.z-z)<1.3){hit=true;break}if(hit){d=Math.max(1.2,D0*(s-1)/12);break}d=D0}}
  camera.position.set(cx(),Math.max(cy(),Math.max(sampleGrid(cx(),cz()),.3)+.6),cz());camera.lookAt(tgt);
  // sol och skugga följer spelaren
  sun.position.set(player.pos.x+60,player.pos.y+90,player.pos.z+40);sun.target.position.copy(player.pos);
  scene.userData.sky.position.copy(camera.position);
  buildTick();
  // plats-text
  const L=locName(player.pos.x,player.pos.z);if(L!==curLoc){curLoc=L;document.getElementById("loc").textContent=L}}
let curLoc="";
function locName(x,z){if(Math.hypot(x-YARD.x,z-YARD.z)<YARD.r+8||onJetty(x,z))return"Varvet";if(Math.hypot(x-ISLANDS[1].x,z-ISLANDS[1].z)<60)return"Grannön";if(Math.hypot(x-ISLANDS[3].x,z-ISLANDS[3].z)<34)return"Fyrskäret";if(Math.hypot(x,z)>130)return"Till sjöss";return"Varvsön"}


export { UP, curLoc, groundAt, locName, onJetty, tmp, update, walkable };
