// Riktiga karaktärsmodeller (Meshy → GLB). Ersätter kodfigurens innehåll när modellen laddats,
// så att position, vridning och interaktioner fortsätter fungera som förut.
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export interface CharDef {
  file: string;
  height?: number;                 // önskad höjd i meter (skalar modellen)
  anims: Record<string, string>;   // våra namn → klippnamn i filen
}
interface Live { mixer: THREE.AnimationMixer; actions: Record<string, THREE.AnimationAction>; cur: string; lock?: number }

const loader = new GLTFLoader();
const LIVE = new Map<THREE.Object3D, Live>();

/** Laddar en karaktär och lägger den i `holder` (kodfiguren tas bort när modellen är klar). */
export function attachCharacter(holder: THREE.Object3D, def: CharDef, start = "idle"): void {
  loader.load(import.meta.env.BASE_URL + "models/" + def.file, gltf => {
    const root = gltf.scene;
    root.traverse(o => {
      const m = o as THREE.SkinnedMesh;
      if (!m.isMesh) return;
      const src = m.material as THREE.MeshStandardMaterial;
      // Lambert som resten av världen: ingen glans, samma ljus, konturerna läggs på i efterbehandlingen
      m.material = new THREE.MeshLambertMaterial({ map: src.map, side: THREE.DoubleSide });
      m.castShadow = true; m.receiveShadow = true; m.frustumCulled = false;
    });
    if (def.height) {
      const box = new THREE.Box3().setFromObject(root), h = box.max.y - box.min.y;
      if (h > 0) root.scale.setScalar(def.height / h);
    }
    for (const c of [...holder.children]) holder.remove(c);
    holder.add(root);
    holder.userData.realModel = true;
    const mixer = new THREE.AnimationMixer(root);
    const actions: Record<string, THREE.AnimationAction> = {};
    for (const [key, clipName] of Object.entries(def.anims)) {
      const clip = gltf.animations.find(a => a.name === clipName);
      if (!clip) continue;
      // Ta bort förflyttning i höften så att figuren står kvar där spelet placerar den
      for (const tr of clip.tracks) if (/Hips\.position$/i.test(tr.name)) { const v = tr.values; for (let i = 0; i < v.length; i += 3) { v[i] = v[0]; v[i + 2] = v[2]; } }
      actions[key] = mixer.clipAction(clip);
    }
    const live: Live = { mixer, actions, cur: "" };
    LIVE.set(holder, live);
    play(holder, start, 0);
  }, undefined, err => console.warn("Kunde inte ladda", def.file, err));
}

/** Byter animation mjukt. Okänd nyckel ignoreras. */
export function play(holder: THREE.Object3D, key: string, fade = 0.35): void {
  const L = LIVE.get(holder); if (!L || L.cur === key) return;
  const next = L.actions[key]; if (!next) return;
  const prev = L.actions[L.cur];
  next.reset().setEffectiveWeight(1).fadeIn(fade).play();
  if (prev) prev.fadeOut(fade);
  L.cur = key;
}
/** Sätter uppspelningshastigheten för en animation (t.ex. gång efter faktisk fart). */
export function setSpeed(holder: THREE.Object3D, key: string, k: number): void { const a = LIVE.get(holder)?.actions[key]; if (a) a.timeScale = k; }
/** Spelar en animation en gång och återgår sedan till `back`. */
export function once(holder: THREE.Object3D, key: string, back = "idle", ms = 1400): void {
  const L = LIVE.get(holder); if (!L || !L.actions[key]) return;
  play(holder, key, 0.2); L.lock = performance.now() + ms; setTimeout(() => { if (L.cur === key) play(holder, back, 0.3); }, ms);
}
export const locked = (holder: THREE.Object3D): boolean => (LIVE.get(holder)?.lock || 0) > performance.now();
export const current = (holder: THREE.Object3D): string => LIVE.get(holder)?.cur || "";
export function charactersTick(dt: number): void { for (const L of LIVE.values()) L.mixer.update(dt); }

export const SVEN: CharDef = {
  file: "sven.glb", height: 1.8,
  anims: { idle: "Idle_11", talk: "Stand_and_Chat", walk: "Walking", run: "Running", pick: "Female_Bend_Over_Pick_Up_Inspect",
    work: "_01a1b7c1_4e5f_70d8_8a3b_cb3eefccb99a", hammer: "_01a1b7c3_a88d_7729_a2f3_067451260fca" },
};

export const PLAYER_MAN: CharDef = {
  file: "spelare_man.glb", height: 1.78,
  anims: { idle: "Idle_11", walk: "Walking", run: "Running", talk: "Listening_Gesture", pick: "Female_Bend_Over_Pick_Up_Inspect", jump: "Regular_Jump",
    sit: "Chair_Sit_Idle_M",
    work: "_01a1b7c1_4e5f_70d8_8a3b_cb3eefccb99a", hammer: "_01a1b7c3_a88d_7729_a2f3_067451260fca" },
};

export const PLAYER_WOMAN: CharDef = {
  file: "spelare_kvinna.glb", height: 1.7,
  anims: { idle: "Idle_15", walk: "Walking_Woman", run: "Running", talk: "Talk_with_Left_Hand_on_Hip", pick: "Female_Bend_Over_Pick_Up_Inspect", jump: "Regular_Jump",
    sit: "Chair_Sit_Idle_F", work: "_01a1b7c1_4e5f_70d8_8a3b_cb3eefccb99a", hammer: "_01a1b7c3_a88d_7729_a2f3_067451260fca" },
};
export const PLAYER_DEFS: Record<string, CharDef> = { man: PLAYER_MAN, kvinna: PLAYER_WOMAN };

export const MAJKEN: CharDef = {
  file: "majken.glb", height: 1.66,
  anims: { idle: "Idle_6", talk: "Talk_with_Left_Hand_on_Hip", walk: "Walking", stroll: "Thoughtful_Walk", run: "Running", sit: "Chair_Sit_Idle_F" },
};

/** Statisk modell (båt, hus, föremål) som ersätter en kodform. `fit` = längd i meter längs modellens längsta axel. */
export function attachProp(holder: THREE.Mesh | THREE.Object3D, file: string, opt: { fit: number; rotY?: number; y?: number; hideChildren?: boolean; liner?: number; waterMask?: number }): void {
  loader.load(import.meta.env.BASE_URL + "models/" + file, gltf => {
    const root = gltf.scene;
    root.traverse(o => { const m = o as THREE.Mesh; if (!m.isMesh) return; const src = m.material as THREE.MeshStandardMaterial;
      m.material = new THREE.MeshLambertMaterial({ map: src.map, side: THREE.DoubleSide }); m.castShadow = true; m.receiveShadow = true; });
    const box = new THREE.Box3().setFromObject(root), sz = box.getSize(new THREE.Vector3());
    root.scale.setScalar(opt.fit / Math.max(sz.x, sz.z));
    if (opt.rotY) root.rotation.y = opt.rotY;
    root.position.y = opt.y || 0;
    if (opt.hideChildren) for (const c of holder.children) c.visible = false;
    const h = holder as THREE.Mesh; if (h.isMesh) { h.geometry = new THREE.BufferGeometry(); }
    holder.add(root); holder.userData.realModel = true;
    if (opt.waterMask != null) holder.add(waterMask(root, opt.waterMask));
    if (opt.liner) { // inre kopia som täcker små hål i AI-modellens skal
      const inner = root.clone(true); inner.scale.multiplyScalar(opt.liner); inner.traverse(o => { const m = o as THREE.Mesh; if (m.isMesh) { m.castShadow = false; } });
      const c = new THREE.Box3().setFromObject(root).getCenter(new THREE.Vector3()); holder.worldToLocal(c);
      inner.position.y = root.position.y + (c.y - root.position.y) * (1 - opt.liner); holder.add(inner);
    }
  }, undefined, err => console.warn("Kunde inte ladda", file, err));
}

/** Osynlig yta i relingshöjd som bara skriver djup, ritas före vattnet: hindrar havsytan från att synas inne i båten. */
function waterMask(root: THREE.Object3D, y: number): THREE.Mesh {
  root.updateMatrix(); const pts: [number, number][] = []; const v = new THREE.Vector3();
  root.traverse(o => { const m = o as THREE.Mesh; if (!m.isMesh) return; const p = m.geometry.attributes.position; m.updateMatrix();
    for (let i = 0; i < p.count; i += 3) { v.fromBufferAttribute(p, i).applyMatrix4(m.matrix).applyMatrix4(root.matrix); pts.push([v.x, v.z]); } });
  // konvext hölje (monotone chain), krympt 4 % mot mitten
  pts.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const cr = (o: number[], a: number[], b: number[]) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lo: [number, number][] = [], up: [number, number][] = [];
  for (const p of pts) { while (lo.length >= 2 && cr(lo[lo.length - 2], lo[lo.length - 1], p) <= 0) lo.pop(); lo.push(p); }
  for (let i = pts.length - 1; i >= 0; i--) { const p = pts[i]; while (up.length >= 2 && cr(up[up.length - 2], up[up.length - 1], p) <= 0) up.pop(); up.push(p); }
  const hull = lo.slice(0, -1).concat(up.slice(0, -1));
  const cx = hull.reduce((a, p) => a + p[0], 0) / hull.length, cz = hull.reduce((a, p) => a + p[1], 0) / hull.length;
  const shape = new THREE.Shape(hull.map(([x, z]) => new THREE.Vector2(cx + (x - cx) * .96, -(cz + (z - cz) * .96))));
  const g = new THREE.ShapeGeometry(shape); g.rotateX(-Math.PI / 2); g.translate(0, y, 0);
  const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ colorWrite: false, depthWrite: true, transparent: true, side: THREE.DoubleSide }));
  m.renderOrder = 0.5; m.frustumCulled = false; return m;
}
