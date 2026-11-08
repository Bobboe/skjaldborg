// @ts-nocheck
import * as THREE from "three";
import { WatercolorPost, TERRAIN_DETAIL } from "./paint";
import { qualityInit, qualityState } from "./quality";
import { QUAL, SET } from "./settings";
import { $, clamp } from "./util";

// ================= Rendering =================
const cv=document.getElementById("c");
const renderer=new THREE.WebGLRenderer({canvas:cv,antialias:true,powerPreference:"high-performance"});
renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;
renderer.shadowMap.type=THREE.PCFSoftShadowMap;
const scene=new THREE.Scene();
const SKY=new THREE.Color("#9fd0ea"),FOG=new THREE.Color("#bfdced");
scene.fog=new THREE.Fog(FOG,90,420);
const camera=new THREE.PerspectiveCamera(55,1,.3,900);

// himmel
{const g=new THREE.SphereGeometry(800,24,12);const m=new THREE.ShaderMaterial({side:THREE.BackSide,depthWrite:false,fog:false,uniforms:{top:{value:new THREE.Color("#4f9ad6")},mid:{value:SKY},bot:{value:FOG}},
  vertexShader:"varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
  fragmentShader:"uniform vec3 top,mid,bot;varying vec3 vP;void main(){float y=vP.y;vec3 c=y>0.?mix(mid,top,pow(clamp(y*1.6,0.,1.),.8)):bot;c=mix(bot,c,smoothstep(-.02,.12,y));gl_FragColor=vec4(c,1.);}"});
  const s=new THREE.Mesh(g,m);s.renderOrder=-1;s.frustumCulled=false;scene.add(s);scene.userData.sky=s}

const hemi=new THREE.HemisphereLight("#e8f1f4","#8f9c6c",1.25);scene.add(hemi);
const sun=new THREE.DirectionalLight("#ffe8c4",2.0);sun.position.set(60,90,40);scene.add(sun);scene.add(sun.target);
sun.shadow.camera.left=-32;sun.shadow.camera.right=32;sun.shadow.camera.top=32;sun.shadow.camera.bottom=-32;sun.shadow.camera.near=10;sun.shadow.camera.far=220;sun.shadow.bias=-.0006;sun.shadow.normalBias=.04;

// ================= Kvalitet, storlek, prestanda =================
let Q=QUAL[SET.q];function applyQuality(){Q=QUAL[SET.q];const dpr=Math.min(devicePixelRatio||1,Q.dpr);renderer.setPixelRatio(dpr);renderer.shadowMap.enabled=!!Q.shadow;sun.castShadow=!!Q.shadow;
  if(Q.shadow){sun.shadow.mapSize.set(Q.smap,Q.smap);if(sun.shadow.map){sun.shadow.map.dispose();sun.shadow.map=null}}
  scene.traverse(o=>{if(o.material&&o.material.needsUpdate!==undefined)o.material.needsUpdate=true});resize();qualityInit({renderer,maxDpr:Q.dpr,shadowsAllowed:!!Q.shadow,setShadows:setShadows},SET.fps)}
function setShadows(on){if(renderer.shadowMap.enabled===on&&sun.castShadow===on)return;renderer.shadowMap.enabled=on;sun.castShadow=on;scene.traverse(o=>{if(o.material)o.material.needsUpdate=true})}
function resize(){renderer.setSize(innerWidth,innerHeight,false);camera.aspect=innerWidth/innerHeight;camera.fov=innerWidth<innerHeight?68:55;camera.userData.baseFov=camera.fov;camera.updateProjectionMatrix()}
addEventListener("resize",resize);
// målad efterbehandling (av på Låg)
const post=new WatercolorPost();
function renderFrame(){post.enabled=SET.q>=1;post.clean=SET.look===1;TERRAIN_DETAIL.value=SET.look===1?1:0;post.render(renderer,scene,camera)}
const perfEl=document.getElementById("perf");let fT=0,fN=0,fAcc=0,fpsShow=0,msShow=0,cpuAcc=0;
function perfTick(dt,cpu){fN++;fAcc+=dt;cpuAcc+=cpu;if(fAcc>=.5){fpsShow=fN/fAcc;msShow=cpuAcc/fN;fN=0;fAcc=0;cpuAcc=0;
  if(SET.perf){const i=renderer.info;perfEl.textContent=`FPS   ${fpsShow.toFixed(0)} / ${SET.fps}\nCPU   ${msShow.toFixed(1)} ms\nAnrop ${i.render.calls}\nTrian ${(i.render.triangles/1000).toFixed(0)}k\nDPR   ${renderer.getPixelRatio().toFixed(2)}\nAuto  ${Math.round(qualityState().scale*100)}% ${qualityState().shadows?"skugg":"utan skugg"}\nKval  ${["Låg","Medel","Hög"][SET.q]}`}}}


export { post, renderFrame, setShadows, FOG, Q, SKY, applyQuality, camera, cpuAcc, cv, fAcc, fN, fT, fpsShow, hemi, msShow, perfEl, perfTick, renderer, resize, scene, sun };
