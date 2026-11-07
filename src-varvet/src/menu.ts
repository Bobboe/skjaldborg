// @ts-nocheck
import * as THREE from "three";
import { qualitySetGoal } from "./quality";
import { camS } from "./input";
import { applyQuality } from "./engine";
import { perfEl } from "./engine";
import { player } from "./player";
import { SET, saveSet } from "./settings";
import { $ } from "./util";

// ================= Meny =================
function segInit(id,key,cb){const el=$(id);const upd=()=>el.querySelectorAll("button").forEach(b=>b.classList.toggle("on",+b.dataset.v===SET[key]));el.querySelectorAll("button").forEach(b=>b.onclick=()=>{SET[key]=+b.dataset.v;saveSet();upd();cb&&cb()});upd()}
segInit("sQ","q",applyQuality);segInit("sF","fps",()=>qualitySetGoal(SET.fps));segInit("sP","perf",()=>perfEl.style.display=SET.perf?"block":"none");
perfEl.style.display=SET.perf?"block":"none";
const openSet=()=>{$("menu").style.display="flex";$("mainCard").style.display="none";$("settings").style.display="block"};
$("bSet").onclick=openSet;$("bSet2").onclick=openSet;
$("bClose").onclick=()=>{$("settings").style.display="none";if(running)$("menu").style.display="none";else $("mainCard").style.display="block"};
$("bPerf").onclick=()=>{SET.perf=SET.perf?0:1;saveSet();perfEl.style.display=SET.perf?"block":"none";segInit("sP","perf")};
$("bPlay").onclick=()=>{running=true;$("menu").style.display="none";camS.yaw=camS.tYaw=player.yaw;
  try{if(document.documentElement.requestFullscreen&&innerWidth<900)document.documentElement.requestFullscreen().catch(()=>{})}catch(e){}};


let running=false;

export { openSet, running, segInit };
