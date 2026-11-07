// Båtkänsla: följer vattnets vågor (samma formel som vattenshadern), krängning i svängar,
// fören lyfter i fart, kölvatten och bogsvall, samt motorljud som följer farten.
import * as THREE from "three";
import { scene } from "./engine";
import { water } from "./water";

const waveAt = (x: number, z: number, t: number, amp: number): number =>
  (Math.sin(x * .08 + t * 1.1) * .18 + Math.sin(z * .11 - t * .9) * .14 + Math.sin((x + z) * .21 + t * 1.7) * .06) * amp;

// ---------- Kölvatten: ett band av punkter bakom båten som vidgas och bleknar ----------
const N = 48, SPACING = 0.45, LIFE = 3.2;
type Pt = { x: number; z: number; ax: number; az: number; age: number; v: number };
const pts: Pt[] = [];
let wake: THREE.Mesh | null = null, spray: THREE.Points | null = null;
const SP = 90; const spPos = new Float32Array(SP * 3), spVel = new Float32Array(SP * 3), spAge = new Float32Array(SP).fill(9);
let spI = 0;
function init(): void {
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(N * 2 * 3), 3));
  g.setAttribute("fade", new THREE.BufferAttribute(new Float32Array(N * 2), 1));
  const sd = new Float32Array(N * 2); for (let i = 0; i < N; i++) { sd[i * 2] = 1; sd[i * 2 + 1] = -1; } g.setAttribute("side", new THREE.BufferAttribute(sd, 1));
  const idx: number[] = []; for (let i = 0; i < N - 1; i++) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); } g.setIndex(idx);
  const m = new THREE.ShaderMaterial({ transparent: true, depthWrite: false, side: THREE.DoubleSide,
    vertexShader: "attribute float fade,side;varying float vF,vSd;varying vec2 vS;void main(){vF=fade;vSd=side;vS=position.xz;gl_Position=projectionMatrix*viewMatrix*vec4(position,1.);}",
    fragmentShader: "varying float vF,vSd;varying vec2 vS;void main(){float e=abs(vSd);float edge=smoothstep(.55,.95,e)*(1.-smoothstep(.97,1.,e)*.6);float n=.6+.4*sin(vS.x*3.1+vS.y*2.3)*sin(vS.y*4.7-vS.x*1.9);gl_FragColor=vec4(vec3(.96,.98,1.),vF*n*mix(.12,.9,edge));}" });
  wake = new THREE.Mesh(g, m); wake.frustumCulled = false; wake.renderOrder = 2; scene.add(wake);
  const sg = new THREE.BufferGeometry(); sg.setAttribute("position", new THREE.BufferAttribute(spPos, 3));
  spray = new THREE.Points(sg, new THREE.PointsMaterial({ color: 0xf4fbff, size: .16, transparent: true, opacity: .85, depthWrite: false }));
  spray.frustumCulled = false; scene.add(spray);
}

// ---------- Motorljud ----------
let ac: AudioContext | null = null, osc: OscillatorNode | null = null, osc2: OscillatorNode | null = null, gain: GainNode | null = null, filt: BiquadFilterNode | null = null;
function engine(on: boolean, speed: number): void {
  try {
    if (!on) { if (gain && ac) gain.gain.setTargetAtTime(0, ac.currentTime, .15); return; }
    if (!ac) {
      ac = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      osc = ac.createOscillator(); osc.type = "sawtooth"; osc2 = ac.createOscillator(); osc2.type = "square";
      filt = ac.createBiquadFilter(); filt.type = "lowpass"; filt.frequency.value = 380; gain = ac.createGain(); gain.gain.value = 0;
      osc.connect(filt); osc2.connect(filt); filt.connect(gain); gain.connect(ac.destination); osc.start(); osc2.start();
    }
    const k = Math.min(1, Math.abs(speed) / 11);
    osc!.frequency.setTargetAtTime(38 + 70 * k, ac.currentTime, .2); osc2!.frequency.setTargetAtTime(19 + 35 * k, ac.currentTime, .2);
    filt!.frequency.setTargetAtTime(260 + 700 * k, ac.currentTime, .2); gain!.gain.setTargetAtTime(.035 + .05 * k, ac.currentTime, .2);
  } catch { /* ljud ej tillgängligt */ }
}

let lastX = NaN, lastZ = NaN, roll = 0;
/** Anropas varje bildruta. `driving` = spelaren kör, `v` = fart, `steer` = −1..1. */
export function boatFx(boat: THREE.Object3D, dt: number, t: number, driving: boolean, v: number, steer: number, yaw: number): void {
  if (!wake) init();
  const amp = water ? ((water.material as THREE.ShaderMaterial).uniforms.amp?.value ?? 1) : 1;
  const x = boat.position.x, z = boat.position.z;
  // flyt: medelhöjd under båten och lutning mellan för/akter och sidorna
  const fx = Math.sin(yaw) * 2.4, fz = Math.cos(yaw) * 2.4, sx = Math.cos(yaw) * .9, sz = -Math.sin(yaw) * .9;
  const hb = waveAt(x + fx, z + fz, t, amp), hs = waveAt(x - fx, z - fz, t, amp), hl = waveAt(x - sx, z - sz, t, amp), hr = waveAt(x + sx, z + sz, t, amp);
  const yTarget = .45 + (hb + hs + hl + hr) / 4;
  boat.position.y += (yTarget - boat.position.y) * Math.min(1, dt * 6);
  const k = Math.min(1, Math.abs(v) / 11);
  const pitch = Math.atan2(hs - hb, 4.8) - k * .1 - (driving ? Math.sin(t * 9) * .004 * k : 0);
  roll += ((-steer * k * .16) - roll) * Math.min(1, dt * 3);
  boat.rotation.set(pitch, yaw, Math.atan2(hl - hr, 1.8) + roll, "YXZ");
  // kölvatten
  if (isNaN(lastX)) { lastX = x; lastZ = z; }
  const moved = Math.hypot(x - lastX, z - lastZ);
  if (moved > SPACING && Math.abs(v) > .6) {
    pts.unshift({ x: x - Math.sin(yaw) * 2.6, z: z - Math.cos(yaw) * 2.6, ax: Math.cos(yaw), az: -Math.sin(yaw), age: 0, v: k }); if (pts.length > N) pts.pop();
    lastX = x; lastZ = z;
  }
  for (const p of pts) p.age += dt;
  while (pts.length && pts[pts.length - 1].age > LIFE) pts.pop();
  const pos = wake!.geometry.attributes.position as THREE.BufferAttribute, fade = wake!.geometry.attributes.fade as THREE.BufferAttribute;
  for (let i = 0; i < N; i++) {
    const p = pts[Math.min(i, pts.length - 1)];
    if (!p) { pos.setXYZ(i * 2, x, -9, z); pos.setXYZ(i * 2 + 1, x, -9, z); fade.setX(i * 2, 0); fade.setX(i * 2 + 1, 0); continue; }
    const a = p.age / LIFE, w = .5 + a * 3.2 * (.5 + p.v), y = waveAt(p.x, p.z, t, amp) + .06, f = i < pts.length ? (1 - a) * p.v * (i === 0 ? .4 : 1) : 0;
    pos.setXYZ(i * 2, p.x + p.ax * w, y, p.z + p.az * w); pos.setXYZ(i * 2 + 1, p.x - p.ax * w, y, p.z - p.az * w);
    fade.setX(i * 2, f); fade.setX(i * 2 + 1, f);
  }
  pos.needsUpdate = true; fade.needsUpdate = true;
  // bogsvall
  if (driving && k > .25) for (let n = 0; n < Math.ceil(k * 3); n++) {
    const i = spI = (spI + 1) % SP, side = Math.random() < .5 ? -1 : 1;
    spPos[i * 3] = x + Math.sin(yaw) * 2.2 + Math.cos(yaw) * side * .5; spPos[i * 3 + 1] = boat.position.y - .1; spPos[i * 3 + 2] = z + Math.cos(yaw) * 2.2 - Math.sin(yaw) * side * .5;
    spVel[i * 3] = Math.cos(yaw) * side * (1 + Math.random()) * k * 2; spVel[i * 3 + 1] = 1.2 + Math.random() * 1.6 * k; spVel[i * 3 + 2] = -Math.sin(yaw) * side * (1 + Math.random()) * k * 2; spAge[i] = 0;
  }
  for (let i = 0; i < SP; i++) {
    if (spAge[i] > .8) { spPos[i * 3 + 1] = -50; continue; }
    spAge[i] += dt; spVel[i * 3 + 1] -= 9 * dt; spPos[i * 3] += spVel[i * 3] * dt; spPos[i * 3 + 1] += spVel[i * 3 + 1] * dt; spPos[i * 3 + 2] += spVel[i * 3 + 2] * dt;
  }
  (spray!.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
  engine(driving, v);
}

// Sittplats i båtens eget koordinatsystem (meter): akterspegelns toft vid motorn
export const SEAT = { x: 0, y: -0.15, z: -1.6, yaw: 0 };
const _v = new THREE.Vector3(), _q = new THREE.Quaternion(), _q2 = new THREE.Quaternion();
/** Placerar spelaren på sittplatsen och låter den följa båtens gung och krängning. */
export function seatPlayer(p: THREE.Object3D, boat: THREE.Object3D): void {
  boat.updateMatrixWorld(true);
  _v.set(SEAT.x, SEAT.y, SEAT.z).applyMatrix4(boat.matrixWorld); p.position.copy(_v);
  boat.getWorldQuaternion(_q); _q2.setFromAxisAngle(new THREE.Vector3(0, 1, 0), SEAT.yaw); p.quaternion.copy(_q).multiply(_q2);
}
