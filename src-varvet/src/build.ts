// @ts-nocheck
import * as THREE from "three";
import { camS } from "./input";
import { HG } from "./terrain";
import { colored } from "./util";
import { VC } from "./util";
import { closeDlg } from "./jobs";
import { scene } from "./engine";
import { BOATM, DLG, GAMEON, dlgNext, endGame, jobState, nearI } from "./jobs";
import { running } from "./menu";
import { acc } from "./main";
import { COLL } from "./nature";
import { player } from "./player";
import { SEG, WS, YARD, heightTex, sampleGrid } from "./terrain";
import { groundAt, onJetty } from "./update";
import { $, merge, mulberry, tr } from "./util";
import { water } from "./water";
import { BOXES } from "./yard";

// ================= Resurser & byggande =================
const ST={virke:4,skrot:0,picked:0,pieces:[],obj:0,digs:[],kr:0,job:0,jobOn:0,life:null};// sparat tillstånd
const DBOX=[];// kollisioner från byggda väggar
const CELL=2,WALLH=2.6;
const PIECES={
 golv:{name:"Golv",cost:{virke:2},kind:"floor"},
 vagg:{name:"Vägg",cost:{virke:2},kind:"wall"},
 fonster:{name:"Fönster",cost:{virke:2,skrot:1},kind:"wall"},
 dorr:{name:"Dörr",cost:{virke:2,skrot:1},kind:"wall"},
 tak:{name:"Tak",cost:{virke:3},kind:"roof"},
 jamna:{name:"Jämna",cost:{},kind:"level"}};
const ORDER=["golv","vagg","fonster","dorr","tak","jamna"];
const DIRS=[[0,1],[1,0],[0,-1],[-1,0]];// r: 0=+z 1=+x 2=-z 3=-x
const cellOf=v=>Math.floor(v/CELL);
const cellC=i=>i*CELL+CELL/2;
function terrainBase(i,k){const x0=i*CELL,z0=k*CELL;let mx=-99,mn=99;for(const[a,b]of[[0,0],[CELL,0],[0,CELL],[CELL,CELL],[CELL/2,CELL/2],[CELL/2,0],[0,CELL/2],[CELL,CELL/2],[CELL/2,CELL]]){let g=sampleGrid(x0+a,z0+b);if(onJetty(x0+a,z0+b))g=Math.max(g,1.45);mx=Math.max(mx,g);mn=Math.min(mn,g)}return{top:Math.round((mx*.6+Math.max(mn,-.1)*.4+.12)*10)/10,mn,mx}}
const floorAt=(i,k)=>ST.pieces.find(p=>p.t==="golv"&&p.i===i&&p.k===k);
// Byggnivå: ett nytt golv ärver höjden från ett angränsande golv, så hela byggnaden blir plan.
function floorLevel(i,k){const f=floorAt(i,k);if(f)return f.y;let best=null;for(const[di,dk]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){const n=floorAt(i+di,k+dk);if(n&&(best===null||n.y>best))best=n.y}return best!==null?best:terrainBase(i,k).top}
function baseY(i,k){return floorLevel(i,k)}
function wallBase(i,k,r){const d=DIRS[r],a=floorAt(i,k),b=floorAt(i+d[0],k+d[1]);if(a||b)return Math.max(a?a.y:-99,b?b.y:-99);return floorLevel(i,k)}
function roofBase(i,k){let y=null;for(const e of[[i,k,0],[i,k,1],normEdge(i,k,2),normEdge(i,k,3)]){const w=ST.pieces.find(q=>PIECES[q.t].kind==="wall"&&q.i===e[0]&&q.k===e[1]&&q.r===e[2]);if(w&&(y===null||w.y>y))y=w.y}
  if(y!==null)return y+WALLH;const f=floorAt(i,k);if(f)return f.y+WALLH;for(const[di,dk]of[[1,0],[-1,0],[0,1],[0,-1]]){const n=ST.pieces.find(q=>q.t==="tak"&&q.i===i+di&&q.k===k+dk);if(n)return n.y}return floorLevel(i,k)+WALLH}
function normEdge(i,k,r){if(r===2)return[i,k-1,0];if(r===3)return[i-1,k,1];return[i,k,r]}
function pieceKey(p){return PIECES[p.t].kind==="wall"?`w${p.i},${p.k},${p.r}`:PIECES[p.t].kind+p.i+","+p.k}
// --- geometrier (centrerade så att y=0 är underkant) ---
const plank="#a47c52",plank2="#8f6a45",wallC="#b8392b",trim="#f2efe8",glass="#bfe2f0",roofC="#3b3f45";
function geoFor(t){const L=CELL+.04,T=.22,H=WALLH;
  if(t==="golv"){const g=[colored(tr(new THREE.BoxGeometry(CELL+.02,5,CELL+.02),0,-2.65,0),"#9c9690"),colored(tr(new THREE.BoxGeometry(CELL+.06,.12,CELL+.06),0,-.42,0),"#7f7a75"),colored(tr(new THREE.BoxGeometry(CELL+.08,.14,CELL+.08),0,-.08,0),"#6b5137")];for(let i=0;i<5;i++)g.push(colored(tr(new THREE.BoxGeometry(CELL/5-.03,.06,CELL),-CELL/2+CELL/10+i*CELL/5,.01,0),i%2?plank:plank2));return merge(g)}
  if(t==="vagg"){return merge([colored(tr(new THREE.BoxGeometry(L,H,T),0,H/2,0),wallC),colored(tr(new THREE.BoxGeometry(L,.12,T+.04),0,H-.06,0),trim)])}
  if(t==="fonster"){return merge([colored(tr(new THREE.BoxGeometry(L,.9,T),0,.45,0),wallC),colored(tr(new THREE.BoxGeometry(L,.6,T),0,H-.3,0),wallC),
    colored(tr(new THREE.BoxGeometry(.5,1.1,T),-L/2+.25,1.45,0),wallC),colored(tr(new THREE.BoxGeometry(.5,1.1,T),L/2-.25,1.45,0),wallC),
    colored(tr(new THREE.BoxGeometry(1.04,1.1,.06),0,1.45,0),glass),colored(tr(new THREE.BoxGeometry(1.14,.1,T+.08),0,.9,0),trim),colored(tr(new THREE.BoxGeometry(1.14,.1,T+.08),0,2,0),trim),
    colored(tr(new THREE.BoxGeometry(.08,1.1,T+.08),0,1.45,0),trim),colored(tr(new THREE.BoxGeometry(L,.12,T+.04),0,H-.06,0),trim)])}
  if(t==="dorr"){return merge([colored(tr(new THREE.BoxGeometry(.55,H,T),-L/2+.275,H/2,0),wallC),colored(tr(new THREE.BoxGeometry(.55,H,T),L/2-.275,H/2,0),wallC),colored(tr(new THREE.BoxGeometry(L-1.1,.5,T),0,H-.25,0),wallC),
    colored(tr(new THREE.BoxGeometry(.1,2.15,T+.08),-.47,1.07,0),trim),colored(tr(new THREE.BoxGeometry(.1,2.15,T+.08),.47,1.07,0),trim),colored(tr(new THREE.BoxGeometry(1.04,.1,T+.08),0,2.15,0),trim),colored(tr(new THREE.BoxGeometry(L,.12,T+.04),0,H-.06,0),trim)])}
  if(t==="jamna"){return merge([colored(tr(new THREE.BoxGeometry(CELL,.08,CELL),0,.04,0),"#c9b48f",0)])}
  if(t==="tak"){const rise=1.1,len=Math.hypot(CELL,rise)+.06,a=Math.atan2(rise,CELL);const b=new THREE.BoxGeometry(CELL+.3,.16,len);b.rotateX(-a);b.translate(0,rise/2+.08,0);
    const sh=new THREE.Shape();sh.moveTo(-CELL/2,0);sh.lineTo(CELL/2,0);sh.lineTo(CELL/2,rise);sh.closePath();const out=[colored(b,roofC)];
    for(const s of[-1,1]){const g=new THREE.ExtrudeGeometry(sh,{depth:.12,bevelEnabled:false});g.rotateY(-Math.PI/2);g.translate(s*CELL/2+(s<0?.12:0),0,0);out.push(colored(g,wallC))}
    return merge(out)}}
const IM={};const IMCAP=400;
// Markarbete: sänk marken under och runt ett golv så att inget sticker upp genom det.
let TER=null;
function setTER(m){TER=m}
function dig(i,k,y,refresh,raise){if(!TER)return;const g=TER.geometry,pos=g.attributes.position,col=g.attributes.color,step=WS/SEG,M=3.2;
  const x0=i*CELL,x1=x0+CELL,z0=k*CELL,z1=z0+CELL;const a0=Math.max(0,Math.floor((x0-M+WS/2)/step)),a1=Math.min(SEG,Math.ceil((x1+M+WS/2)/step)),b0=Math.max(0,Math.floor((z0-M+WS/2)/step)),b1=Math.min(SEG,Math.ceil((z1+M+WS/2)/step));
  const spl=g.attributes.splat;let ch=false;
  for(let iz=b0;iz<=b1;iz++)for(let ix=a0;ix<=a1;ix++){const x=-WS/2+ix*step,z=-WS/2+iz*step;const dx=Math.max(x0-x,0,x-x1),dz=Math.max(z0-z,0,z-z1),d=Math.hypot(dx,dz);if(d>M)continue;
    const idx=iz*(SEG+1)+ix,h=HG[idx];if(raise){const nh=d<=0?y-.02:h+(y-.02-h)*(1-d/M)*(1-d/M);if(Math.abs(nh-h)>.005){HG[idx]=nh;pos.setY(idx,nh);if(spl){const k=.5*(1-d/M);spl.setXYZW(idx,spl.getX(idx)*(1-k),spl.getY(idx)*(1-k),spl.getZ(idx)*(1-k),spl.getW(idx)+(1-spl.getW(idx))*k)}ch=true}continue}const tgt=y-.07+d*.6;if(h>tgt){HG[idx]=tgt;pos.setY(idx,tgt);if(spl){const k=.75*(1-d/M);spl.setXYZW(idx,spl.getX(idx)*(1-k),spl.getY(idx)*(1-k),spl.getZ(idx)*(1-k),spl.getW(idx)+(1-spl.getW(idx))*k)}ch=true}}
  if(ch&&refresh)terrainRefresh()}
function terrainRefresh(){const g=TER.geometry;g.attributes.position.needsUpdate=true;g.attributes.color.needsUpdate=true;if(g.attributes.splat)g.attributes.splat.needsUpdate=true;g.computeVertexNormals();g.computeBoundingSphere();
  if(water){const t=water.material.uniforms.hT.value;const nt=heightTex();t.image.data.set(nt.image.data);t.needsUpdate=true;nt.dispose()}}
function initBuild(){for(const d of ST.digs)dig(d[0],d[1],d[2],false,!!d[3]);if(ST.digs.length)terrainRefresh();for(const t of ORDER){const m=new THREE.InstancedMesh(geoFor(t),VC,IMCAP);m.count=0;m.castShadow=true;m.receiveShadow=true;m.frustumCulled=false;scene.add(m);IM[t]=m}
  ghostInit();nodesInit();refreshBuilt();updHud()}
const _M=new THREE.Matrix4(),_Q=new THREE.Quaternion(),_E=new THREE.Euler(),_S=new THREE.Vector3(1,1,1),_T=new THREE.Vector3();
function pieceXform(p,M){const k=PIECES[p.t].kind;let x=cellC(p.i),z=cellC(p.k),ry=0;
  if(k==="wall"){const d=DIRS[p.r];x+=d[0]*CELL/2;z+=d[1]*CELL/2;ry=(p.r%2)?Math.PI/2:0}
  if(k==="roof"){ry=-p.r*Math.PI/2}
  _E.set(0,ry,0);_Q.setFromEuler(_E);_T.set(x,p.y,z);M.compose(_T,_Q,_S);return M}
function refreshBuilt(){const cnt={};for(const t of ORDER)cnt[t]=0;
  for(const p of ST.pieces){const m=IM[p.t];if(cnt[p.t]>=IMCAP)continue;m.setMatrixAt(cnt[p.t]++,pieceXform(p,_M))}
  for(const t of ORDER){IM[t].count=cnt[t];IM[t].instanceMatrix.needsUpdate=true;IM[t].computeBoundingSphere&&IM[t].computeBoundingSphere()}
  DBOX.length=0;for(const p of ST.pieces){if(PIECES[p.t].kind!=="wall")continue;const d=DIRS[p.r],x=cellC(p.i)+d[0]*CELL/2,z=cellC(p.k)+d[1]*CELL/2,hor=p.r%2===0,th=.22;
    const seg=(a,b)=>{if(hor)DBOX.push({x0:x+a,x1:x+b,z0:z-th,z1:z+th,y0:p.y,y1:p.y+WALLH});else DBOX.push({x0:x-th,x1:x+th,z0:z+a,z1:z+b,y0:p.y,y1:p.y+WALLH})};
    if(p.t==="dorr"){seg(-1.02,-.5);seg(.5,1.02)}else seg(-1.02,1.02)}}
function hitDyn(x,z,y){for(const b of DBOX)if(x>b.x0-.25&&x<b.x1+.25&&z>b.z0-.25&&z<b.z1+.25&&y<b.y1-.2&&y>b.y0-1.5)return true;return false}
function floorTopAt(x,z){const f=floorAt(cellOf(x),cellOf(z));return f?f.y:null}

// --- spöke (förhandsvisning) ---
let ghost,ghostOK=false,cur={t:"golv",r:0},buildMode=false,gp=null;
const gMatOK=new THREE.MeshBasicMaterial({color:"#7dff8a",transparent:true,opacity:.45,depthWrite:false}),gMatNo=new THREE.MeshBasicMaterial({color:"#ff5a4a",transparent:true,opacity:.45,depthWrite:false});
const GG={};function ghostInit(){for(const t of ORDER)GG[t]=geoFor(t);ghost=new THREE.Mesh(GG.golv,gMatOK);ghost.visible=false;ghost.renderOrder=3;scene.add(ghost)}
function targetPiece(){const fx=Math.sin(player.yaw),fz=Math.cos(player.yaw);const kind=PIECES[cur.t].kind;
  let i,k,r=cur.r;
  if(kind==="wall"){// stå i rutan och titta mot kanten du vill bygga på
    const px=player.pos.x+fx*.9,pz=player.pos.z+fz*.9;i=cellOf(px);k=cellOf(pz);
    r=Math.abs(fx)>Math.abs(fz)?(fx>0?1:3):(fz>0?0:2);r=(r+cur.r)%4;const n=normEdge(i,k,r);i=n[0];k=n[1];r=n[2]}
  else{const px=player.pos.x+fx*2.2,pz=player.pos.z+fz*2.2;i=cellOf(px);k=cellOf(pz);if(kind==="roof"){const a=Math.abs(fx)>Math.abs(fz)?(fx>0?1:3):(fz>0?0:2);r=(a+cur.r)%4}}
  const p={t:cur.t,i,k,r:kind==="floor"?0:r};p.y=kind==="roof"?roofBase(i,k):kind==="wall"?wallBase(i,k,r):kind==="level"?(()=>{const tb=terrainBase(i,k);return Math.round(((tb.mx+Math.max(tb.mn,-.1))/2)*10)/10})():floorLevel(i,k);return p}
function canPlace(p){const kind=PIECES[p.t].kind;const c=PIECES[p.t].cost;for(const r in c)if(ST[r]<c[r])return"Saknar "+r;
  const key=pieceKey(p);if(ST.pieces.some(q=>pieceKey(q)===key))return"Upptaget";
  const x0=p.i*CELL,z0=p.k*CELL,x1=x0+CELL,z1=z0+CELL;
  if(kind==="level"){const tb=terrainBase(p.i,p.k);if(tb.mx<-.2)return"För djupt vatten";if(floorAt(p.i,p.k))return"Det är redan byggt här";if(tb.mx-tb.mn<.12)return"Redan plant";const x0=p.i*CELL,z0=p.k*CELL,x1=x0+CELL,z1=z0+CELL;for(const b of BOXES)if(b.x0<x1&&b.x1>x0&&b.z0<z1&&b.z1>z0)return"I vägen";for(const c of COLL)if(c.x>x0-.3&&c.x<x1+.3&&c.z>z0-.3&&c.z<z1+.3)return"Träd eller sten i vägen";return""}
  if(kind==="floor"){const tb=terrainBase(p.i,p.k);if(tb.mx<-.2)return"För djupt vatten";if(p.y-tb.mn>3.5)return"För högt över marken";if(tb.mx-p.y>1.6)return"Marken är för hög här";
    for(const b of BOXES)if(b.x0<x1&&b.x1>x0&&b.z0<z1&&b.z1>z0)return"I vägen";for(const c of COLL)if(c.x>x0-.3&&c.x<x1+.3&&c.z>z0-.3&&c.z<z1+.3)return"Träd eller sten i vägen"}
  if(kind==="wall"){const d=DIRS[p.r],mx=cellC(p.i)+d[0],mz=cellC(p.k)+d[1];if(groundAt(mx,mz)<-.3&&!floorAt(p.i,p.k))return"För djupt vatten";
    for(const c of COLL)if(Math.hypot(c.x-mx,c.z-mz)<c.r+.9)return"Träd eller sten i vägen";for(const b of BOXES)if(mx>b.x0-.3&&mx<b.x1+.3&&mz>b.z0-.3&&mz<b.z1+.3)return"I vägen"}
  if(kind==="roof"){const walls=ST.pieces.filter(q=>PIECES[q.t].kind==="wall"&&[[p.i,p.k,0],[p.i,p.k,1],normEdge(p.i,p.k,2),normEdge(p.i,p.k,3)].some(e=>e[0]===q.i&&e[1]===q.k&&e[2]===q.r));
    const nb=ST.pieces.some(q=>q.t==="tak"&&Math.abs(q.i-p.i)+Math.abs(q.k-p.k)===1);if(!walls.length&&!nb)return"Taket behöver en vägg under sig"}
  return""}
function buildTick(){if(!buildMode){ghost.visible=false;return}gp=targetPiece();ghost.geometry=GG[gp.t];pieceXform(gp,_M);_M.decompose(ghost.position,ghost.quaternion,ghost.scale);ghost.position.y+=.02;
  const why=canPlace(gp);ghostOK=!why;ghost.material=ghostOK?gMatOK:gMatNo;ghost.visible=true;const el=$("bWhy");el.textContent=why||PIECES[gp.t].name+" – "+costTxt(PIECES[gp.t].cost);el.style.color=why?"#ff8a7a":"#9fe8a6"}
const costTxt=c=>Object.keys(c).length?Object.entries(c).map(([r,n])=>`${n} ${r}`).join(" + "):"gratis";
function place(){gp=targetPiece();const why=canPlace(gp);ghostOK=!why;if(!ghostOK){SFX("no");pop(why);return}if(PIECES[gp.t].kind==="level"){ST.digs.push([gp.i,gp.k,gp.y,1]);dig(gp.i,gp.k,gp.y,true,true);SFX("rip");pop("Marken jämnad");save();return}const c=PIECES[gp.t].cost;for(const r in c)ST[r]-=c[r];ST.pieces.push({t:gp.t,i:gp.i,k:gp.k,r:gp.r,y:gp.y});if(gp.t==="golv"){ST.digs.push([gp.i,gp.k,gp.y]);dig(gp.i,gp.k,gp.y,true)}refreshBuilt();updHud();objCheck();save();SFX("place");pop("+"+PIECES[gp.t].name)}
function demolish(){gp=targetPiece();pieceXform(gp,_M);const pos=new THREE.Vector3().setFromMatrixPosition(_M);let best=null,bd=2.2;for(const p of ST.pieces){pieceXform(p,_M);_T.setFromMatrixPosition(_M);const d=Math.hypot(_T.x-pos.x,_T.z-pos.z)+(PIECES[p.t].kind===PIECES[cur.t].kind?0:.8);if(d<bd){bd=d;best=p}}
  if(!best){pop("Inget att riva");return}ST.pieces.splice(ST.pieces.indexOf(best),1);const c=PIECES[best.t].cost;for(const r in c)ST[r]+=c[r];refreshBuilt();updHud();save();SFX("rip");pop("Rev "+PIECES[best.t].name.toLowerCase())}

// --- resursnoder: drivved och skrothögar ---
const NODES=[];let nodeIM={};
function nodesInit(){const rnd=mulberry(77);const add=(type,n,ok)=>{let tries=0,c=0;while(c<n&&tries<n*60){tries++;const x=(rnd()-.5)*WS*.8,z=(rnd()-.5)*WS*.8,h=groundAt(x,z);if(!ok(x,z,h))continue;if(COLL.some(q=>Math.hypot(q.x-x,q.z-z)<q.r+1.4))continue;if(BOXES.some(b=>x>b.x0-1&&x<b.x1+1&&z>b.z0-1&&z<b.z1+1))continue;if(NODES.some(q=>Math.hypot(q.x-x,q.z-z)<5))continue;NODES.push({type,x,z,y:h,ry:rnd()*6.28,gone:0});c++}};
  add("log",8,(x,z,h)=>Math.hypot(x-YARD.x,z-YARD.z)<34&&h>.6);
  add("log",26,(x,z,h)=>h>.25&&h<9);
  add("scrap",4,(x,z,h)=>Math.hypot(x-YARD.x,z-YARD.z)<30&&h>.6);
  add("scrap",8,(x,z,h)=>h>.2&&h<2.5);
  const logG=merge([colored(tr(new THREE.CylinderGeometry(.22,.26,2.2,8).rotateZ(Math.PI/2),0,.24,0),"#8a6646"),colored(tr(new THREE.CylinderGeometry(.18,.2,1.6,7).rotateZ(Math.PI/2),.2,.62,.1,.5),"#9a7552"),colored(tr(new THREE.CylinderGeometry(.21,.21,.04,8).rotateZ(Math.PI/2),1.11,.24,0),"#d9b98a")]);
  const scrG=merge([colored(tr(new THREE.BoxGeometry(.9,.5,.7),0,.25,0,.3),"#7b8189"),colored(tr(new THREE.CylinderGeometry(.28,.28,.7,10),.5,.35,.3),"#a0522d"),colored(tr(new THREE.BoxGeometry(.6,.3,.5),-.3,.62,-.1,.9),"#5b6168"),colored(tr(new THREE.TorusGeometry(.3,.08,6,12).rotateX(Math.PI/2),-.5,.1,.4),"#2b2b2b")]);
  for(const[type,g]of[["log",logG],["scrap",scrG]]){const list=NODES.filter(n=>n.type===type);const m=new THREE.InstancedMesh(g,VC,list.length);m.castShadow=true;scene.add(m);nodeIM[type]={m,list}}
  // markör ovanför närmaste nod
  const mk=new THREE.Mesh(new THREE.OctahedronGeometry(.22),new THREE.MeshBasicMaterial({color:"#ffc21a"}));mk.visible=false;scene.add(mk);nodeIM.marker=mk;refreshNodes()}
function refreshNodes(){for(const type of["log","scrap"]){const{m,list}=nodeIM[type];list.forEach((n,i)=>{_E.set(0,n.ry,0);_Q.setFromEuler(_E);_S.setScalar(n.gone>0?0:1);_T.set(n.x,n.y-.05,n.z);_M.compose(_T,_Q,_S);m.setMatrixAt(i,_M)});m.instanceMatrix.needsUpdate=true}_S.setScalar(1)}
let nearNode=null;
function nodesTick(dt,t){let ch=false;for(const n of NODES)if(n.gone>0){n.gone-=dt;if(n.gone<=0){ch=true}}if(ch)refreshNodes();
  nearNode=null;let bd=2.4;for(const n of NODES){if(n.gone>0)continue;const d=Math.hypot(n.x-player.pos.x,n.z-player.pos.z);if(d<bd){bd=d;nearNode=n}}
  const mk=nodeIM.marker;mk.visible=!!nearNode&&!buildMode;if(nearNode){mk.position.set(nearNode.x,nearNode.y+1.6+Math.sin(t*3)*.12,nearNode.z);mk.rotation.y=t*2}
  const b=$("bAct");$("bBuild").style.display=BOATM.on||DLG?"none":"block";if(DLG){b.style.display="none";return}if(buildMode){b.style.display="block";b.textContent="Placera"}else if(typeof nearI!=="undefined"&&nearI){b.style.display="block";b.textContent=nearI.label}else if(BOATM.on){b.style.display="none"}else if(nearNode){b.style.display="block";b.textContent=nearNode.type==="log"?"Plocka virke":"Plocka skrot"}else b.style.display="none"}
function gather(){if(!nearNode)return;const n=nearNode;if(n.type==="log"){ST.virke+=2;ST.picked+=2;pop("+2 virke")}else{ST.skrot+=1;pop("+1 skrot")}n.gone=120;refreshNodes();updHud();objCheck();save();SFX("pick")}

// --- uppdrag ---
const OBJ=[{txt:"Plocka 10 virke",ok:()=>ST.picked>=10},{txt:"Lägg 4 golv",ok:()=>cnt("floor")>=4},{txt:"Bygg 6 väggar (en med dörr)",ok:()=>cnt("wall")>=6&&ST.pieces.some(p=>p.t==="dorr")},{txt:"Lägg tak över bygget",ok:()=>cnt("roof")>=2}];
const cnt=k=>ST.pieces.filter(p=>PIECES[p.t].kind===k).length;
function objCheck(){while(ST.obj<OBJ.length&&OBJ[ST.obj].ok()){ST.obj++;if(ST.obj<OBJ.length)pop("Klart! Nästa: "+OBJ[ST.obj].txt,2600);else pop("Första bygget står klart! 🎉",3500);SFX("done")}renderObj()}
function renderObj(){const el=$("obj");const J=typeof jobState==="function"?jobState():null;el.innerHTML=(ST.obj<OBJ.length?`<b>Första bygget</b>`+OBJ.map((o,i)=>`<div class="${i<ST.obj?"done":i===ST.obj?"now":""}">${i<ST.obj?"✓":i===ST.obj?"›":"·"} ${o.txt}</div>`).join(""):`<b>Första bygget</b><div class="done">✓ Klart</div>`)+`<b style="display:block;margin-top:6px">Jobb</b>`+(J?(ST.jobOn?`<div class="now">› ${J.title}</div><div>${J.where}</div>`:`<div class="now">› Prata med Sven på bryggan</div>`):`<div class="done">✓ Alla jobb klara</div>`)}
const UI=import.meta.env.BASE_URL+"ui/";const ICO=(k,c="ico")=>`<img class="${c}" src="${UI}it_${k}.png" alt="">`;
function updHud(){$("res").innerHTML=`<span>${ICO("virke")}${ST.virke}</span><span>${ICO("skrot")}${ST.skrot}</span><span>${ICO("kr")}${ST.kr} kr</span>`;
  document.querySelectorAll("#bar .pc[data-t]").forEach(b=>{const P=PIECES[b.dataset.t];const can=Object.entries(P.cost).every(([r,n])=>ST[r]>=n);b.classList.toggle("on",b.dataset.t===cur.t);b.classList.toggle("dim",!can)})}
let popT=0;function pop(t,ms=1400){const el=$("pop");el.textContent=t;el.style.opacity=1;clearTimeout(popT);popT=setTimeout(()=>el.style.opacity=0,ms)}
// enkla ljud
let AC=null;function SFX(k){try{AC=AC||new(window.AudioContext||window.webkitAudioContext)();const t=AC.currentTime,o=AC.createOscillator(),g=AC.createGain();o.connect(g);g.connect(AC.destination);
  const f={pick:[520,780,.12],place:[180,120,.16],rip:[140,70,.18],no:[200,160,.12],done:[523,1046,.35],tick:[70,55,.05]}[k];o.type=k==="place"||k==="rip"?"square":"triangle";o.frequency.setValueAtTime(f[0],t);o.frequency.exponentialRampToValueAtTime(f[1],t+f[2]);g.gain.setValueAtTime(.08,t);g.gain.exponentialRampToValueAtTime(.001,t+f[2]+.05);o.start(t);o.stop(t+f[2]+.06)}catch(e){}}
// sparning
function save(){try{localStorage.setItem("varvet_save",JSON.stringify({v:1,virke:ST.virke,skrot:ST.skrot,picked:ST.picked,obj:ST.obj,pieces:ST.pieces,digs:ST.digs,kr:ST.kr,job:ST.job,jobOn:ST.jobOn,life:ST.life,px:player.pos.x,pz:player.pos.z}))}catch(e){}}
function load(){try{const d=JSON.parse(localStorage.getItem("varvet_save")||"null");if(!d)return;Object.assign(ST,{virke:d.virke,skrot:d.skrot,picked:d.picked||0,obj:d.obj||0,pieces:d.pieces||[],digs:d.digs||[],kr:d.kr||0,job:d.job||0,jobOn:d.jobOn||0,life:d.life||null});if(d.px!=null){player.pos.x=d.px;player.pos.z=d.pz}}catch(e){}}
function act(){if(buildMode)place();else if(nearI)nearI.fn();else gather()}
function setBuild(on){if(on&&(BOATM.on||GAMEON))return;buildMode=on;if(on)$("hint").style.opacity=0;$("bar").style.display=on?"flex":"none";$("bBuild").innerHTML=on?"Klar":`${ICO("verktyg","icob")}Bygg`;$("bBuild").classList.toggle("acc",on);$("bWhy").style.display=on?"block":"none";if(on)camS.tPitch=Math.max(camS.tPitch,.55);updHud()}
function uiInit(){const bar=$("bar");bar.innerHTML=ORDER.map(t=>`<button class="pc" data-t="${t}"><i>${{golv:"▭",vagg:"▮",fonster:"▣",dorr:"⌂",tak:"◭",jamna:"⛏"}[t]}</i>${PIECES[t].name}<small>${costTxt(PIECES[t].cost).replace(/virke/g,ICO("virke","icos")).replace(/skrot/g,ICO("skrot","icos"))}</small></button>`).join("")+`<button class="pc" id="bRot"><i>↻</i>Vrid</button><button class="pc" id="bRip"><i>✕</i>Riv</button>`;
  bar.querySelectorAll(".pc[data-t]").forEach(b=>b.onclick=()=>{cur.t=b.dataset.t;cur.r=0;updHud()});$("bRot").onclick=()=>{cur.r=(cur.r+1)%4};$("bRip").onclick=demolish;
  $("bBuild").onclick=()=>setBuild(!buildMode);$("dlgNext").onclick=()=>dlgNext(true);$("dlgNo").onclick=closeDlg;$("gX").onclick=()=>endGame(false);$("bAct").onclick=act;
  addEventListener("keydown",e=>{if(!running)return;if(e.code==="KeyB")setBuild(!buildMode);if(e.code==="KeyR")cur.r=(cur.r+1)%4;if(e.code==="KeyX"&&buildMode)demolish();if(e.code==="Space"||e.code==="KeyF"){e.preventDefault();if(DLG)dlgNext();else act()}
    if(buildMode&&/^Digit[1-5]$/.test(e.code)){cur.t=ORDER[+e.code.slice(5)-1];updHud()}});
  renderObj()}
setInterval(()=>{if(running)save()},5000);


export { AC, CELL, DBOX, DIRS, GG, IM, NODES, OBJ, ORDER, PIECES, SFX, ST, TER, WALLH, _E, _M, _Q, _S, _T, act, baseY, buildMode, buildTick, canPlace, cellC, cellOf, cnt, costTxt, cur, demolish, dig, floorAt, floorLevel, floorTopAt, gMatNo, gMatOK, gather, geoFor, ghost, ghostOK, glass, gp, hitDyn, initBuild, load, nearNode, nodesInit, nodesTick, normEdge, objCheck, pieceKey, pieceXform, place, plank, plank2, pop, popT, refreshBuilt, refreshNodes, renderObj, roofBase, roofC, save, setBuild, setTER, targetPiece, terrainBase, terrainRefresh, trim, uiInit, updHud, wallBase, wallC };
