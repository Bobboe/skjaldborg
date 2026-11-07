// Små registreringspunkter så att nya moduler kan haka på utan cirkulära beroenden.
export interface Interactable { x: number; z: number; r: number; label: string; fn: () => void }
export const INTERACT_PROVIDERS: Array<(list: Interactable[]) => void> = [];
