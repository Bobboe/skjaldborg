// @ts-nocheck
import * as THREE from "three";
import { scene } from "./engine";
import { WS, heightTex } from "./terrain";
import { clamp } from "./util";

// ================= Vatten =================
let water;
function buildWater(){const g=new THREE.PlaneGeometry(1600,1600,120,120);g.rotateX(-Math.PI/2);
  const m=new THREE.ShaderMaterial({transparent:true,fog:true,uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.fog,{t:{value:0},amp:{value:1},hT:{value:heightTex()},ws:{value:WS},deep:{value:new THREE.Color("#1e5f86")},shallow:{value:new THREE.Color("#3fb5b8")},foam:{value:new THREE.Color("#f4fbff")},sunDir:{value:new THREE.Vector3(.5,.75,.35).normalize()}}]),
  vertexShader:`uniform float t,amp;varying vec3 vW;varying float vWave;
    #include <fog_pars_vertex>
    void main(){vec3 p=position;float w=sin(p.x*.08+t*1.1)*.18+sin(p.z*.11-t*.9)*.14+sin((p.x+p.z)*.21+t*1.7)*.06;p.y+=w*amp;vWave=w*amp;vec4 wp=modelMatrix*vec4(p,1.);vW=wp.xyz;vec4 mvPosition=viewMatrix*wp;gl_Position=projectionMatrix*mvPosition;
    #include <fog_vertex>
    }`,
  fragmentShader:`uniform float t,ws;uniform sampler2D hT;uniform vec3 deep,shallow,foam,sunDir;varying vec3 vW;varying float vWave;
    #include <fog_pars_fragment>
    void main(){vec2 uv=vW.xz/ws+.5;float h=-9.;if(uv.x>0.&&uv.y>0.&&uv.x<1.&&uv.y<1.)h=texture2D(hT,uv).r*12.-8.;float depth=max(0.,-h);
      vec3 c=mix(shallow,deep,smoothstep(.3,7.,depth));
      float rip=sin(vW.x*.9+t*2.)*sin(vW.z*.7-t*1.6)+sin((vW.x-vW.z)*.5+t*1.3)*.6;
      float f=smoothstep(.9,0.,depth+rip*.12)*(.65+.35*sin(t*2.+vW.x*.4+vW.z*.3));
      c=mix(c,foam,clamp(f,0.,1.)*.85);
      vec3 V=normalize(cameraPosition-vW);vec3 N=normalize(vec3(-.08*cos(vW.x*.08+t*1.1)+rip*.03,1.,-.06*cos(vW.z*.11-t*.9)+rip*.03));
      float fres=pow(1.-max(dot(V,N),0.),3.);c=mix(c,vec3(.78,.9,.97),fres*.55);
      float sp=pow(max(dot(reflect(-sunDir,N),V),0.),90.);c+=sp*.9;
      c+=vWave*.08;
      gl_FragColor=vec4(c,mix(.82,.97,smoothstep(.2,3.,depth)));
      #include <fog_fragment>
    }`});
  water=new THREE.Mesh(g,m);water.renderOrder=1;scene.add(water)}


export { buildWater, water };
