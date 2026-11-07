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
