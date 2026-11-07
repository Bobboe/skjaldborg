// @ts-nocheck
import * as THREE from "three";
import { boatFx, seatPlayer, SEAT } from "./boatfx";
import { attachCharacter, PLAYER_DEFS } from "./characters";
import { charactersTick } from "./characters";
import { lifeInit, lifeTick, crateTick, timeOf } from "./life";
import { renderFrame } from "./engine";
import { qualityTick, qualityState } from "./quality";
import { telemetryInit, telemetryFrame } from "./telemetry";
import { camS } from "./input";
import { applyQuality } from "./engine";
import { setTER } from "./build";
import { running } from "./menu";
import { NODES, ST, act, cur, gather, initBuild, load, nodesTick, place, setBuild, uiInit } from "./build";
import { Q, camera, perfTick, renderer, scene } from "./engine";
import { input } from "./input";
import { NPC, BOATM, GAMEON, JOBS, NJ, dlgNext, endGame, interTick, jobState, jobsWorldInit, nearI, startGame } from "./jobs";
import { buildNature } from "./nature";
import { player, P } from "./player";
import { QUAL, SET } from "./settings";
import { buildTerrain } from "./terrain";
import { groundAt, update } from "./update";
import { $ } from "./util";
import { buildWater, water } from "./water";
import { bobBoat, buildYard } from "./yard";

// ================= Loop =================
let last=performance.now(),acc=0;
function frame(now){requestAnimationFrame(frame);const minDt=1000/SET.fps-1.5;const el=now-last;if(el<minDt)return;const dt=Math.min(.05,el/1000);last=now;
  const t0=performance.now();if(running){update(dt);nodesTick(dt,now/1000);interTick(now/1000);lifeTick(dt)}crateTick();charactersTick(dt);
  const t=now/1000;water.material.uniforms.t.value=t;if(bobBoat){if(BOATM.on)bobBoat.userData.yaw=BOATM.yaw;else if(bobBoat.userData.yaw==null)bobBoat.userData.yaw=bobBoat.rotation.y;boatFx(bobBoat,dt,t,BOATM.on,BOATM.on?BOATM.v:0,BOATM.steer||0,BOATM.on?BOATM.yaw:bobBoat.userData.yaw);if(BOATM.on)seatPlayer(P,bobBoat);else P.quaternion.setFromAxisAngle(new THREE.Vector3(0,1,0),P.rotation.y)}
  const fl=scene.userData.flag;if(fl)fl.rotation.y=Math.sin(t*1.7)*.25;
  if(!running){camS.tYaw+=dt*.08;camS.yaw=camS.tYaw;const r=60,cx=Math.sin(t*.05)*r,cz=50+Math.cos(t*.05)*r;camera.position.set(cx,22,cz);camera.lookAt(0,2,36);scene.userData.sky.position.copy(camera.position)}
  renderFrame();perfTick(dt,performance.now()-t0);if(running){qualityTick(el/1000);telemetryFrame(el/1000,{...qualityState(),q:SET.q,goal:SET.fps})}}

// ================= Start =================
function boot(){setTER(buildTerrain());buildWater();buildYard();buildNature(Q);load();jobsWorldInit();initBuild();uiInit();lifeInit();if(ST.char)attachCharacter(P,PLAYER_DEFS[ST.char]);player.pos.y=groundAt(player.pos.x,player.pos.z);applyQuality();telemetryInit(renderer.getContext(),"webgl2");$("loading").remove();requestAnimationFrame(frame);window.__ready=true}
window.VARVET={SEAT,NPC,P,life:()=>timeOf(),player,camS,input,SET,renderer,scene,update,act,dlgNext,BOATM,JOBS,startGame,endGame,jobState,get nearI(){return nearI},get GAMEON(){return GAMEON},get NJ(){return NJ},bobBoat:()=>bobBoat,ST,setBuild,place,gather,cur,NODES,start:()=>$("bPlay").onclick()};
setTimeout(boot,30);


export { acc, boot, frame, last };
