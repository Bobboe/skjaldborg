// Små registreringspunkter så att nya moduler kan haka på utan cirkulära beroenden.
export interface Interactable { x: number; z: number; r: number; label: string; fn: () => void }
export const INTERACT_PROVIDERS: Array<(list: Interactable[]) => void> = [];
/** Bryggor man kan gå på: segment från (x0,z0) till (x1,z1), halv bredd w, däckshöjd h. */
export interface Jetty { x0: number; z0: number; x1: number; z1: number; w: number; h: number }
export const JETTIES: Jetty[] = [];
export function jettyAt(x: number, z: number, pad = 0): Jetty | null {
  for (const j of JETTIES) {
    const dx = j.x1 - j.x0, dz = j.z1 - j.z0, L2 = dx * dx + dz * dz;
    const t = Math.max(0, Math.min(1, ((x - j.x0) * dx + (z - j.z0) * dz) / L2));
    if (Math.hypot(x - (j.x0 + dx * t), z - (j.z0 + dz * t)) < j.w + pad) return j;
  }
  return null;
}
/** Körs varje ny morgon (lön, personal, händelser). */
export const DAY_HOOKS: Array<() => void> = [];
/** Extra båtar som ska guppa på vågorna (egen båt, regattabåtar). */
export const BOATS: any[] = [];
