// Automatisk kvalitetsanpassning: sänker upplösningen (och till sist skuggorna) när bildfrekvensen
// inte når målet, och höjer försiktigt igen när det finns marginal. Spelarens val i inställningarna
// är taket; automatiken går aldrig över det.
import type * as THREE from "three";

export interface QualityTarget { renderer: THREE.WebGLRenderer; maxDpr: number; shadowsAllowed: boolean; setShadows: (on: boolean) => void; }

const WINDOW_S = 3;
let scale = 1;
let shadowsOn = true;
let frames = 0, time = 0, goodWindows = 0;
let target: QualityTarget | null = null;
let fpsGoal = 60;

export function qualityInit(t: QualityTarget, fps: number): void {
  target = t; fpsGoal = fps; scale = 1; shadowsOn = t.shadowsAllowed; frames = 0; time = 0; goodWindows = 0; apply();
}
export function qualitySetGoal(fps: number): void { fpsGoal = fps; frames = 0; time = 0; }
export function qualityState(): { scale: number; shadows: boolean; dpr: number } {
  return { scale, shadows: shadowsOn, dpr: target ? target.renderer.getPixelRatio() : 1 };
}
function apply(): void {
  if (!target) return;
  const dev = Math.min(window.devicePixelRatio || 1, target.maxDpr);
  const dpr = Math.max(0.6, Math.round(dev * scale * 20) / 20);
  if (Math.abs(target.renderer.getPixelRatio() - dpr) > 0.01) {
    target.renderer.setPixelRatio(dpr);
    target.renderer.setSize(window.innerWidth, window.innerHeight, false);
  }
  target.setShadows(shadowsOn && target.shadowsAllowed);
}
/** Anropas efter varje ritad bildruta med tiden sedan förra ritade bildrutan (sekunder). */
export function qualityTick(frameDt: number): void {
  if (!target || frameDt <= 0 || frameDt > 0.5) return;
  frames++; time += frameDt;
  if (time < WINDOW_S) return;
  const fps = frames / time; frames = 0; time = 0;
  if (fps < fpsGoal * 0.88) {
    goodWindows = 0;
    if (scale > 0.6) { scale = Math.max(0.6, scale - 0.15); apply(); }
    else if (shadowsOn && target.shadowsAllowed) { shadowsOn = false; apply(); }
  } else if (fps > fpsGoal * 0.97) {
    if (++goodWindows >= 3) {
      goodWindows = 0;
      if (!shadowsOn && target.shadowsAllowed && scale >= 0.75) { shadowsOn = true; apply(); }
      else if (scale < 1) { scale = Math.min(1, scale + 0.1); apply(); }
    }
  } else goodWindows = 0;
}
