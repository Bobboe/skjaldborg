// @ts-nocheck
import * as THREE from "three";
import { attachCharacter, attachProp, play, SVEN, MAJKEN } from "./characters";
import { INTERACT_PROVIDERS, JETTIES, jettyAt } from "./hooks";
import { voicePlay, voiceStop } from "./voice";
import { pop } from "./build";
import { camS } from "./input";
import { SFX } from "./build";
import { player } from "./player";
import { bobBoat } from "./yard";
import { VC } from "./util";
import { ST, buildMode, dig, place, renderObj, save, updHud } from "./build";
import { scene } from "./engine";
import { input } from "./input";
import { P } from "./player";
import { ISLANDS, WS, sampleGrid } from "./terrain";
import { groundAt } from "./update";
import { $, clamp, colored, merge, mulberry, tr } from "./util";

// ================= Personer, jobb och minispel =================
function makePerson(c){const G=new THREE.Group(),M=x=>new THREE.MeshLambertMaterial({color:x});
  const body=new THREE.Mesh(new THREE.CapsuleGeometry(.38,.5,4,10),M(c.shirt));body.position.y=1.1;G.add(body);
  const head=new THREE.Mesh(new THREE.SphereGeometry(.3,16,12),M(c.skin||"#f1c7a4"));head.position.y=1.8;G.add(head);
  if(c.hat){const h=new THREE.Mesh(new THREE.SphereGeometry(.31,14,8,0,Math.PI*2,0,Math.PI/2),M(c.hat));h.position.y=1.84;G.add(h)}
  if(c.hair){const h=new THREE.Mesh(new THREE.SphereGeometry(.32,14,10,0,Math.PI*2,0,Math.PI*.62),M(c.hair));h.position.y=1.82;h.rotation.x=-.25;G.add(h)}
  if(c.beard){const b=new THREE.Mesh(new THREE.SphereGeometry(.23,12,8,0,Math.PI*2,Math.PI*.45,Math.PI*.55),M(c.beard));b.position.set(0,1.76,.1);G.add(b)}
  for(const s of[-1,1]){const e=new THREE.Mesh(new THREE.SphereGeometry(.045,8,6),M("#2a2a2a"));e.position.set(s*.11,1.82,.27);G.add(e)}
  for(const[x,y,l,r,col]of[[-.48,1.4,.42,.11,c.shirt],[.48,1.4,.42,.11,c.shirt],[-.17,.7,.5,.14,c.pants],[.17,.7,.5,.14,c.pants]]){const m=new THREE.Mesh(new THREE.CapsuleGeometry(r,l,3,8),M(col));m.position.set(x,y-l/2-r*.5,0);G.add(m)}
  G.traverse(o=>{if(o.isMesh)o.castShadow=true});scene.add(G);return G}
const NPC={};const MARK=new THREE.Mesh(new THREE.ConeGeometry(.22,.5,4),new THREE.MeshBasicMaterial({color:"#ffc21a"}));MARK.rotation.x=Math.PI;scene.add(MARK);
const TGT=new THREE.Mesh(new THREE.TorusGeometry(1.3,.12,6,28),new THREE.MeshBasicMaterial({color:"#ffc21a"}));TGT.rotation.x=Math.PI/2;TGT.visible=false;scene.add(TGT);
let NJ=null;// Grannöns brygga
function jobsWorldInit(){
  NPC.sven=makePerson({shirt:"#3f6e4a",pants:"#2b3a52",hat:"#1f2a44",beard:"#d9d4cc",skin:"#efc2a0"});NPC.sven.position.set(13.6,Math.max(1.45,groundAt(13.6,62)),62);NPC.sven.rotation.y=Math.PI*.15;NPC.sven.userData.name="Sven";attachCharacter(NPC.sven,SVEN);
  // Grannöns brygga: från stranden ut mot Varvsön
  const I=ISLANDS[1];let dx=-.74,dz=.67,x=I.x,z=I.z;for(let s=0;s<120;s++){x+=dx;z+=dz;if(sampleGrid(x,z)<-.4)break}
  const ex=x+dx*9,ez=z+dz*9,ang=Math.atan2(dx,dz);NJ={x0:x-dx*2,z0:z-dz*2,x1:ex,z1:ez,ang,boatX:ex+dz*3.2,boatZ:ez-dx*3.2};
  const parts=[];const len=Math.hypot(ex-NJ.x0,ez-NJ.z0);const g=new THREE.BoxGeometry(2.6,.28,len);g.rotateY(ang);g.translate((NJ.x0+ex)/2,1.2,(NJ.z0+ez)/2);parts.push(colored(g,"#9a7a55"));
  for(let t=1;t<len;t+=3)for(const s of[-1.1,1.1]){const px=NJ.x0+dx*t+dz*s,pz=NJ.z0+dz*t-dx*s;parts.push(colored(tr(new THREE.CylinderGeometry(.15,.15,5,6),px,-1.2,pz),"#5e4630"))}
  const m=new THREE.Mesh(merge(parts),VC);m.castShadow=true;scene.add(m);JETTIES.push({x0:NJ.x0-dx*3,z0:NJ.z0-dz*3,x1:ex,z1:ez,w:1.25,h:1.34});
  NPC.majken=makePerson({shirt:"#c0392b",pants:"#2b2f36",hair:"#c9c2b8",skin:"#f2cdb0"});NPC.majken.position.set(ex-dx*1.5,1.35,ez-dz*1.5);NPC.majken.rotation.y=ang+Math.PI;NPC.majken.userData.name="Majken";NPC.majken.position.y=Math.max(1.34,groundAt(NPC.majken.position.x,NPC.majken.position.z));attachCharacter(NPC.majken,MAJKEN);
  // utombordsmotor på motorbåten
  const mo=new THREE.Group();const a=new THREE.Mesh(new THREE.BoxGeometry(.45,.55,.5),new THREE.MeshLambertMaterial({color:"#1d1f24"}));a.position.y=.55;mo.add(a);
  const sh=new THREE.Mesh(new THREE.BoxGeometry(.12,.8,.14),new THREE.MeshLambertMaterial({color:"#2b2f36"}));sh.position.y=-.05;mo.add(sh);mo.position.set(0,.1,-3.05);bobBoat.add(mo);attachProp(bobBoat,"motorbat.glb",{fit:5.8,rotY:Math.PI/2,y:.05,hideChildren:true,liner:.975,waterMask:-.12});
  if(ST.job>2){bobBoat.position.set(NJ.boatX,.5,NJ.boatZ);bobBoat.rotation.y=ang}}

// --- jobblista ---
const JOBS=[
 {from:"sven",title:"Slipa Svens eka",reward:400,where:"Ekan på bockarna vid boden",
  offer:["Så du är Edvins barnbarn. Jag ser det på ögonen. Jag heter Sven – jag bor på andra sidan viken.","Här är nyckeln. Den har legat i min kakburk i trettio år.","Varvet är i ett sorgligt skick, men det går att få liv i. Och börjar du ta jobb så kommer folket tillbaka.","Min gamla eka står på bockarna där borta. Botten är full av havstulpaner och gammal färg.","Kan du slipa den ren? Jag betalar 400 kronor."],
  done:"Fint jobbat! Hon ser ut som ny. Här har du 400 kronor.",target:()=>({x:-6,z:47,r:4.6,label:"Slipa skrovet"}),game:"sand"},
 {from:"sven",title:"Byt propeller",reward:600,where:"Motorbåten vid bryggan",
  offer:["Nästa sak: propellern på motorbåten vid bryggan gick i en sten i somras.","Jag har köpt en ny. Kan du byta den? 600 kronor."],
  done:"Perfekt, nu går hon som ett spjut igen! 600 kronor till dig.",target:()=>({x:bobBoat.position.x+1.8,z:bobBoat.position.z-2.6,r:3,label:"Byt propellern"}),game:"prop"},
 {from:"sven",title:"Leverera båten till Grannön",reward:800,where:"Kör motorbåten till Majkens brygga",
  offer:["Jag har sålt motorbåten till Majken på Grannön.","Kan du köra över den till hennes brygga? Hon skjutsar dig tillbaka. 800 kronor!"],
  done:"",target:()=>({x:bobBoat.position.x+1.4,z:bobBoat.position.z,r:3.2,label:"Kör båten"}),game:"drive"}];
// ST.job = index för aktuellt jobb, ST.jobOn = antaget
function jobState(){return ST.job<JOBS.length?JOBS[ST.job]:null}
function npcPos(id){return NPC[id].position}
// --- interaktioner ---
let nearI=null;
function interactables(){const L=[];for(const f of INTERACT_PROVIDERS)f(L);const J=jobState();
  if(J&&!ST.jobOn){const p=npcPos(J.from);L.push({x:p.x,z:p.z,r:2.6,label:"Prata med "+(J.from==="sven"?"Sven":"Majken"),fn:()=>talk(J)})}
  else if(J&&ST.jobOn){const t=J.target();L.push({x:t.x,z:t.z,r:t.r,label:t.label,fn:()=>startGame(J)})}
  if(!J||ST.jobOn){const p=npcPos("sven");L.push({x:p.x,z:p.z,r:2.2,label:"Prata med Sven",fn:()=>dialog("Sven",[J?(ST.jobOn?"Du har ett jobb på gång: "+J.title.toLowerCase()+". "+J.where+".":""):"Inga fler jobb från mig just nu. Men ryktet sprider sig – snart står folk i kö."],null)})}
  return L}
function interTick(t){nearI=null;if(BOATM.on&&BOATM.dockItem&&!GAMEON&&!DLG){nearI=BOATM.dockItem()}if(buildMode||BOATM.on||GAMEON)return;let bd=99;for(const it of interactables()){const d=Math.hypot(it.x-player.pos.x,it.z-player.pos.z);if(d<it.r&&d<bd){bd=d;nearI=it}}
  const J=jobState();let mp=null;if(J&&!ST.jobOn){mp=npcPos(J.from).clone();mp.y+=2.6}else if(J&&ST.jobOn&&J.game!=="drive"){const q=J.target();mp=new THREE.Vector3(q.x,groundAt(q.x,q.z)+2.6,q.z)}else if(J&&ST.jobOn){mp=bobBoat.position.clone();mp.y+=2.4}
  MARK.visible=!!mp;if(mp){MARK.position.copy(mp);MARK.position.y+=Math.sin(t*3)*.15;MARK.rotation.y=t*2}
  for(const id in NPC){const n=NPC[id];if(n.userData.realModel)play(n,DLG&&DLG.who.split(/[ ·(]/)[0]===n.userData.name?'talk':'idle');else if(n.visible)n.children[0].scale.y=1+Math.sin(t*2+id.length)*.015;if(!n.visible)continue;const d=Math.hypot(n.position.x-player.pos.x,n.position.z-player.pos.z);if(d<6){const a=Math.atan2(player.pos.x-n.position.x,player.pos.z-n.position.z);n.rotation.y+=Math.atan2(Math.sin(a-n.rotation.y),Math.cos(a-n.rotation.y))*.08}}}
// --- dialog ---
let DLG=null;
function closeDlg(){const d=DLG;$("dlg").style.display="none";DLG=null;voiceStop();if(d&&d.onNo)d.onNo()}
/** Dialog som slutar med två val. */
function choice(who,lines,yes,no,onYes,onNo){dialog(who,lines,onYes,true);DLG.yes=yes;DLG.no=no;DLG.onNo=onNo;dlgShow()}
function dialog(who,lines,onEnd,accept){DLG={who,lines:lines.filter(Boolean),i:0,onEnd,accept};$("dlg").style.display="block";dlgShow()}
const POR=n=>import.meta.env.BASE_URL+"ui/por_"+n.split(/[ (·]/)[0].toLowerCase().replace(/å|ä/g,"a").replace(/ö/g,"o")+".png";
function dlgShow(){const d=DLG;$("dlgWho").textContent=d.who;const pi=$("dlgPor");if(pi.dataset.n!==d.who){pi.dataset.n=d.who;pi.style.display="none";pi.onload=()=>pi.style.display="block";pi.onerror=()=>pi.style.display="none";pi.src=POR(d.who)}$("dlgTxt").textContent=d.lines[d.i];voicePlay(d.who,d.lines[d.i]);const last=d.i>=d.lines.length-1;$("dlgNext").textContent=last?(d.accept?(d.yes||"Ta jobbet"):"OK"):"Fortsätt";$("dlgNo").textContent=d.no||"Inte nu";$("dlgNo").style.display=last&&d.accept?"inline-block":"none"}
function dlgNext(ok=true){const d=DLG;if(!d)return;if(d.i<d.lines.length-1){d.i++;dlgShow();return}$("dlg").style.display="none";DLG=null;if(ok&&d.onEnd)d.onEnd()}
function talk(J){dialog(J.from==="sven"?"Sven":"Majken",J.offer,()=>{ST.jobOn=1;pop("Nytt jobb: "+J.title,2200);renderObj();save();SFX("done")},true)}
function jobDone(){const J=jobState();ST.kr+=J.reward;ST.rykte=(ST.rykte||0)+5;ST.job++;ST.jobOn=0;updHud();renderObj();save();SFX("done");pop(`+${J.reward} kr`,2000)}

// --- minispel ---
let GAMEON=null;
const gcv=()=>$("gcv");
function startGame(J){if(J.game==="drive"){boatStart();return}GAMEON={J,t:0};$("game").style.display="flex";input.mx=input.mz=0;
  const c=gcv(),r=c.getBoundingClientRect(),dpr=Math.min(2,devicePixelRatio||1);c.width=r.width*dpr;c.height=r.height*dpr;GAMEON.dpr=dpr;
  if(J.init)J.init();else if(J.game==="sand")sandInit();else propInit();requestAnimationFrame(gameLoop)}
function endGame(ok){const G=GAMEON;if(!G)return;GAMEON=null;$("game").style.display="none";if(!ok)return;const J=G.J;if(J.onDone){J.onDone(G.q);return}dialog(J.from==="sven"?"Sven":"Majken",[J.done],jobDone)}
function gameLoop(){if(!GAMEON)return;requestAnimationFrame(gameLoop);GAMEON.draw()}
function gPt(e){const c=gcv(),r=c.getBoundingClientRect();return{x:(e.clientX-r.left)*GAMEON.dpr,y:(e.clientY-r.top)*GAMEON.dpr}}
// Slipa skrov: dra fingret över påväxten tills skrovet är rent
function sandInit(){const c=gcv(),W=c.width,H=c.height,x=c.getContext("2d");$("gTitle").textContent="Slipa skrovet";$("gHelp").textContent="Dra fingret över påväxten tills botten är ren";
  const hull=new Path2D();const cx=W/2,cy=H*.42,hw=W*.42,hh=H*.3;hull.moveTo(cx-hw,cy-hh*.3);hull.lineTo(cx+hw*.95,cy-hh*.45);hull.quadraticCurveTo(cx+hw*1.05,cy+hh*.4,cx+hw*.55,cy+hh*.8);hull.quadraticCurveTo(cx,cy+hh*1.05,cx-hw*.8,cy+hh*.6);hull.quadraticCurveTo(cx-hw*1.02,cy+hh*.2,cx-hw,cy-hh*.3);hull.closePath();
  const dirt=document.createElement("canvas");dirt.width=W;dirt.height=H;const d=dirt.getContext("2d");d.save();d.clip(hull);const rnd=mulberry(5);
  d.fillStyle="#6b7d4a";d.fillRect(0,0,W,H);for(let i=0;i<260;i++){d.fillStyle=["#55663a","#7d8f55","#8a7a5a","#a39a86","#4b5a33"][i%5];d.beginPath();d.arc(rnd()*W,cy-hh*.2+rnd()*hh*1.3,(6+rnd()*22)*GAMEON.dpr,0,7);d.fill()}
  for(let i=0;i<120;i++){d.fillStyle="#e8e2d2";d.beginPath();d.arc(rnd()*W,cy+rnd()*hh*.9,(2+rnd()*4)*GAMEON.dpr,0,7);d.fill()}d.restore();
  const S={hull,dirt,d,W,H,cx,cy,hw,hh,last:null,prog:0,parts:[],total:0};
  // räkna ursprunglig smuts
  const cnt=()=>{const im=d.getImageData(0,0,W,H).data;let n=0;for(let i=3;i<im.length;i+=4*97)if(im[i]>40)n++;return n};S.total=cnt();
  const brush=(p)=>{d.globalCompositeOperation="destination-out";d.lineCap="round";d.lineWidth=46*GAMEON.dpr;d.beginPath();d.moveTo((S.last||p).x,(S.last||p).y);d.lineTo(p.x,p.y);d.stroke();d.globalCompositeOperation="source-over";S.last=p;
    for(let i=0;i<2;i++)S.parts.push({x:p.x,y:p.y,vx:(Math.random()-.5)*6,vy:-Math.random()*4,l:1})};
  c.onpointerdown=e=>{S.last=gPt(e);brush(S.last);c.setPointerCapture(e.pointerId);SFX("pick")};c.onpointermove=e=>{if(S.last)brush(gPt(e))};c.onpointerup=c.onpointercancel=()=>{S.last=null};
  let chk=0;GAMEON.draw=()=>{x.fillStyle="#cfe3ec";x.fillRect(0,0,W,H);x.fillStyle="#b9a789";x.fillRect(0,H*.82,W,H*.18);
    x.fillStyle="#6b5137";for(const s of[-.45,.4])x.fillRect(cx+hw*s-12*GAMEON.dpr,cy+hh*.6,24*GAMEON.dpr,H*.82-(cy+hh*.6));
    x.fillStyle="#f4f1ea";x.fill(hull);x.save();x.clip(hull);x.fillStyle="#2f5d8a";x.fillRect(0,cy-hh*.5,W,hh*.22);x.restore();x.lineWidth=3*GAMEON.dpr;x.strokeStyle="#5b5f66";x.stroke(hull);
    x.drawImage(dirt,0,0);for(const p of S.parts){p.x+=p.vx;p.y+=p.vy;p.vy+=.35;p.l-=.03;x.fillStyle=`rgba(200,190,160,${p.l})`;x.fillRect(p.x,p.y,4*GAMEON.dpr,4*GAMEON.dpr)}S.parts=S.parts.filter(p=>p.l>0);
    if(++chk%12===0){S.prog=1-cnt()/S.total;$("gBar").style.width=Math.min(100,S.prog/.92*100)+"%";if(S.prog>=.92){c.onpointerdown=c.onpointermove=null;setTimeout(()=>endGame(true),400)}}}}
// Byta propeller: lossa mutter, ta av, sätt på ny, dra åt
function propInit(){const c=gcv(),W=c.width,H=c.height,x=c.getContext("2d"),k=GAMEON.dpr;const cx=W*.45,cy=H*.48;
  const S={st:0,acc:0,lastA:null,drag:null,old:{x:cx,y:cy,on:true,rot:0},nw:{x:W*.85,y:H*.75,on:false,rot:0},nut:0};
  const steps=["Lossa muttern – snurra moturs runt propellern","Dra av den gamla propellern","Dra den nya propellern till axeln","Dra åt muttern – snurra medurs"];
  $("gTitle").textContent="Byt propeller";const help=()=>{$("gHelp").textContent=`${S.st+1}/4: ${steps[S.st]}`;$("gBar").style.width=(S.st/4*100)+"%"};help();
  const ang=p=>Math.atan2(p.y-cy,p.x-cx);
  c.onpointerdown=e=>{const p=gPt(e);c.setPointerCapture(e.pointerId);if(S.st===0||S.st===3){S.lastA=ang(p)}else if(S.st===1&&Math.hypot(p.x-S.old.x,p.y-S.old.y)<110*k)S.drag="old";else if(S.st===2&&Math.hypot(p.x-S.nw.x,p.y-S.nw.y)<110*k)S.drag="nw"};
  c.onpointermove=e=>{const p=gPt(e);if(S.lastA!==null){const a=ang(p);let da=a-S.lastA;if(da>Math.PI)da-=2*Math.PI;if(da<-Math.PI)da+=2*Math.PI;S.lastA=a;const dir=S.st===0?-1:1;if(da*dir>0){S.acc+=Math.abs(da);S.nut+=da;if(Math.random()<.15)SFX("pick")}
      const need=Math.PI*2*2.5;$("gBar").style.width=((S.st+Math.min(1,S.acc/need))/4*100)+"%";if(S.acc>=need){S.acc=0;S.lastA=null;if(S.st===0){S.st=1;help()}else{c.onpointerdown=c.onpointermove=null;$("gBar").style.width="100%";setTimeout(()=>endGame(true),500)}}}
    if(S.drag){const o=S[S.drag];o.x=p.x;o.y=p.y}};
  c.onpointerup=c.onpointercancel=()=>{S.lastA=null;if(S.drag==="old"){if(Math.hypot(S.old.x-cx,S.old.y-cy)>200*k){S.old.on=false;S.st=2;S.nw.on=true;help();SFX("place")}else{S.old.x=cx;S.old.y=cy}}
    if(S.drag==="nw"){if(Math.hypot(S.nw.x-cx,S.nw.y-cy)<60*k){S.nw.x=cx;S.nw.y=cy;S.st=3;help();SFX("place")}}S.drag=null};
  const drawProp=(p,col,rot)=>{x.save();x.translate(p.x,p.y);x.rotate(rot);x.fillStyle=col;for(let i=0;i<3;i++){x.rotate(Math.PI*2/3);x.beginPath();x.ellipse(0,-48*k,24*k,48*k,.35,0,7);x.fill()}x.fillStyle="#5b5f66";x.beginPath();x.arc(0,0,18*k,0,7);x.fill();x.restore()};
  GAMEON.draw=()=>{x.fillStyle="#2a5a72";x.fillRect(0,0,W,H);x.fillStyle="#f4f1ea";x.beginPath();x.moveTo(0,0);x.lineTo(W*.32,0);x.quadraticCurveTo(W*.36,H*.25,W*.2,H*.4);x.lineTo(0,H*.42);x.fill();
    x.fillStyle="#1d1f24";x.fillRect(W*.18,H*.05,38*k,cy-H*.05);x.fillStyle="#3a3f47";x.fillRect(W*.18,cy-10*k,cx-W*.18,20*k);
    if(S.old.on)drawProp(S.old,"#b88b3a",S.nut*.3);if(S.nw.on)drawProp(S.nw,"#e2c25a",S.st===3?S.nut*.3:0);
    if(S.st===2&&!S.drag){x.fillStyle="rgba(255,255,255,.75)";x.font=`${14*k}px system-ui`;x.textAlign="center";x.fillText("Ny propeller",S.nw.x,S.nw.y+80*k)}
    if(S.st===0||S.st===3){x.save();x.translate(cx,cy);x.rotate(S.nut);x.fillStyle="#c0c6cc";x.beginPath();for(let i=0;i<6;i++){const a=i/6*Math.PI*2;x.lineTo(Math.cos(a)*16*k,Math.sin(a)*16*k)}x.fill();x.restore();
      x.strokeStyle="rgba(255,194,26,.8)";x.lineWidth=4*k;x.beginPath();const dir=S.st===0?-1:1;x.arc(cx,cy,95*k,-Math.PI/2,-Math.PI/2+dir*1.6,dir<0);x.stroke()}
    if(S.st===1){x.strokeStyle="rgba(255,194,26,.6)";x.setLineDash([8*k,8*k]);x.beginPath();x.arc(cx,cy,200*k,0,7);x.stroke();x.setLineDash([])}}}

// --- båtkörning ---
const BOATM={on:false,v:0,yaw:0,boat:null,free:false,target:null,dockItem:null,forceHome:null,race:null};
function boatStart(){BOATM.on=true;BOATM.v=0;BOATM.boat=bobBoat;BOATM.free=false;BOATM.target={x:NJ.boatX,z:NJ.boatZ,r:4.5,ring:true,onArrive:boatArrive};BOATM.yaw=bobBoat.rotation.y;P.visible=true;$("hint").style.opacity=1;$("hint").textContent="Vänster tumme: gasa och styr · Kör till den gula ringen vid Grannön";TGT.visible=true;TGT.position.set(NJ.boatX,.35,NJ.boatZ);pop("Kör till Majkens brygga!",2200)}
function boatDrive(dt,mx,mz){const B=BOATM.boat||bobBoat;const thr=-mz;BOATM.steer=(BOATM.steer||0)+(mx-(BOATM.steer||0))*Math.min(1,dt*4.5);const st=BOATM.steer;const vmax=BOATM.vmax||11;BOATM.v+=(thr*vmax-BOATM.v)*Math.min(1,dt*(thr?0.9:.5));if(BOATM.lock){BOATM.v*=Math.max(0,1-dt*3)}BOATM.yaw-=st*dt*1.3*clamp(Math.abs(BOATM.v)/4,.25,1)*Math.sign(BOATM.v||1);
  const nx=B.position.x+Math.sin(BOATM.yaw)*BOATM.v*dt,nz=B.position.z+Math.cos(BOATM.yaw)*BOATM.v*dt;
  const free=(x,z)=>sampleGrid(x,z)<-.3&&!(Math.abs(x-14)<2&&z>57&&z<92)&&!jettyAt(x,z,.5)&&Math.abs(x)<WS/2-10&&Math.abs(z)<WS/2-10;
  const bow=(x,z)=>free(x+Math.sin(BOATM.yaw)*2.8,z+Math.cos(BOATM.yaw)*2.8);
  const stuck=!free(B.position.x,B.position.z);if((free(nx,nz)&&bow(nx,nz))||(stuck&&sampleGrid(nx,nz)<=sampleGrid(B.position.x,B.position.z))){B.position.x=nx;B.position.z=nz}else{BOATM.v*=-.3}
  player.pos.set(B.position.x,B.position.y+.1,B.position.z);player.yaw=BOATM.yaw;
  // kameran bakom båten
  camS.tYaw+=Math.atan2(Math.sin(BOATM.yaw-camS.tYaw),Math.cos(BOATM.yaw-camS.tYaw))*Math.min(1,dt*1.5);
  if(Math.random()<Math.abs(BOATM.v)*.02)SFX("tick");
  const T=BOATM.target;
  if(T){const dx=T.x-B.position.x,dz=T.z-B.position.z;const a=Math.atan2(dx,dz)-camS.yaw;$("compass").style.display="flex";$("cArrow").style.transform=`rotate(${-a*180/Math.PI-90}deg)`;$("cDist").textContent=(T.label?T.label+" · ":"")+Math.round(Math.hypot(dx,dz))+" m";
    TGT.visible=!!T.ring;if(T.ring)TGT.position.set(T.x,.35,T.z);
    if(T.onArrive&&Math.hypot(dx,dz)<T.r&&Math.abs(BOATM.v)<(T.vmax||7.5))T.onArrive()}else{$("compass").style.display="none";TGT.visible=false}}
function boatArrive(){BOATM.on=false;BOATM.target=null;$("compass").style.display="none";BOATM.v=0;TGT.visible=false;bobBoat.position.set(NJ.boatX,.5,NJ.boatZ);bobBoat.rotation.set(0,NJ.ang,0);bobBoat.userData.yaw=NJ.ang;$("hint").style.opacity=0;
  dialog("Majken",["Åh, där är hon! Tack ska du ha, den är ju fin som snus.","Sven sa att du skulle ha 800 kronor. Hoppa in i min eka så skjutsar jag dig hem."],()=>{jobDone();fade(()=>{player.pos.set(14,1.45,70);player.yaw=Math.PI;camS.tYaw=camS.yaw=Math.PI;dialog("Sven",["Där är du ju! Majken ringde redan och skröt om båten. Bra jobbat."],null)})})}
function fade(mid){const f=$("fade");f.style.opacity=1;setTimeout(()=>{mid();setTimeout(()=>f.style.opacity=0,300)},500)}


export { choice, BOATM, DLG, GAMEON, JOBS, MARK, NJ, NPC, TGT, boatArrive, boatDrive, boatStart, closeDlg, dialog, dlgNext, dlgShow, endGame, fade, gPt, gameLoop, gcv, interTick, interactables, jobDone, jobState, jobsWorldInit, makePerson, nearI, npcPos, propInit, sandInit, startGame, talk };
