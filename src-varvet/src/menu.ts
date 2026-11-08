// @ts-nocheck
import * as THREE from "three";
import { attachCharacter, PLAYER_DEFS } from "./characters";
import { ST, save } from "./build";
import { P } from "./player";
import { qualitySetGoal } from "./quality";
import { camS } from "./input";
import { applyQuality } from "./engine";
import { perfEl } from "./engine";
import { player } from "./player";
import { SET, saveSet } from "./settings";
import { $ } from "./util";
import { soundApply } from "./sound";
import { voiceStop } from "./voice";

// ================= Meny =================
function segInit(id,key,cb){const el=$(id);const upd=()=>el.querySelectorAll("button").forEach(b=>b.classList.toggle("on",+b.dataset.v===SET[key]));el.querySelectorAll("button").forEach(b=>b.onclick=()=>{SET[key]=+b.dataset.v;saveSet();upd();cb&&cb()});upd()}
segInit("sQ","q",applyQuality);segInit("sF","fps",()=>qualitySetGoal(SET.fps));segInit("sP","perf",()=>perfEl.style.display=SET.perf?"block":"none");
segInit("sS","snd",soundApply);segInit("sV","voice",voiceStop);
perfEl.style.display=SET.perf?"block":"none";
const openSet=()=>{$("menu").style.display="flex";$("mainCard").style.display="none";$("settings").style.display="block"};
$("bSet").onclick=openSet;$("bSet2").onclick=openSet;
$("bClose").onclick=()=>{$("settings").style.display="none";if(running)$("menu").style.display="none";else $("mainCard").style.display="block"};
$("bPerf").onclick=()=>{SET.perf=SET.perf?0:1;saveSet();perfEl.style.display=SET.perf?"block":"none";segInit("sP","perf")};
// Val av spelfigur (första gången, eller om sparningen saknar figur)
let pickC="kvinna";
function pickInit(){pickC=ST.char||"kvinna";const first=!ST.char;$("pick").style.display=first?"block":"none";$("pname").value=ST.pname||"";
  document.querySelectorAll(".pickc").forEach(b=>{b.classList.toggle("on",b.dataset.c===pickC);b.onclick=()=>{pickC=b.dataset.c;document.querySelectorAll(".pickc").forEach(x=>x.classList.toggle("on",x===b))}})}
setTimeout(pickInit,0);
$("bPlay").onclick=()=>{if(!ST.char){ST.char=pickC;ST.pname=($("pname").value||"").trim().slice(0,16);attachCharacter(P,PLAYER_DEFS[ST.char]);save()}running=true;$("menu").style.display="none";camS.yaw=camS.tYaw=player.yaw;
  try{if(document.documentElement.requestFullscreen&&innerWidth<900)document.documentElement.requestFullscreen().catch(()=>{})}catch(e){}};


let running=false;

export { openSet, running, segInit };
