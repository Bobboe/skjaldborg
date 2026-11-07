// @ts-nocheck
import * as THREE from "three";
import { cv } from "./engine";
import { $, clamp } from "./util";

// ================= Inmatning =================
const input={mx:0,mz:0,keys:{}};const camS={yaw:Math.PI,pitch:.38,dist:8.5,tYaw:Math.PI,tPitch:.38};
const joy=document.getElementById("joy"),knob=document.getElementById("knob");let joyId=null,joyO={x:0,y:0},lookId=null,lookP={x:0,y:0};
const R=60;
cv.addEventListener("pointerdown",e=>{if(e.clientX<innerWidth*.45&&joyId===null){joyId=e.pointerId;joyO={x:e.clientX,y:e.clientY};joy.style.display="block";joy.style.left=e.clientX+"px";joy.style.top=e.clientY+"px";knob.style.transform="";hideHint()}
  else if(lookId===null){lookId=e.pointerId;lookP={x:e.clientX,y:e.clientY};hideHint()}cv.setPointerCapture(e.pointerId)});
cv.addEventListener("pointermove",e=>{if(e.pointerId===joyId){let dx=e.clientX-joyO.x,dy=e.clientY-joyO.y;const l=Math.hypot(dx,dy);if(l>R){dx*=R/l;dy*=R/l}knob.style.transform=`translate(${dx}px,${dy}px)`;input.mx=dx/R;input.mz=dy/R}
  else if(e.pointerId===lookId){const dx=e.clientX-lookP.x,dy=e.clientY-lookP.y;lookP={x:e.clientX,y:e.clientY};camS.tYaw-=dx*.006;camS.tPitch=clamp(camS.tPitch+dy*.004,.08,1.25)}});
const endP=e=>{if(e.pointerId===joyId){joyId=null;input.mx=input.mz=0;joy.style.display="none"}if(e.pointerId===lookId)lookId=null};
cv.addEventListener("pointerup",endP);cv.addEventListener("pointercancel",endP);
cv.addEventListener("wheel",e=>{camS.dist=clamp(camS.dist+e.deltaY*.01,4,18)},{passive:true});
addEventListener("keydown",e=>{input.keys[e.code]=1;hideHint()});addEventListener("keyup",e=>{input.keys[e.code]=0});
let hintT=0;function hideHint(){if(hintT)return;hintT=1;setTimeout(()=>document.getElementById("hint").style.opacity=0,2500)}


export { R, camS, endP, hintT, input, joy, joyId, joyO, knob, lookId, lookP };
