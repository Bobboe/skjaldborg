// Akvarellstilen: målade texturer (från ChatGPT, med kodmålade reservbilder tills de finns),
// terrängmaterial som blandar texturerna och en efterbehandling som ger penseldrag och papper.
import * as THREE from "three";

// ---------- Texturer ----------
const BASE = import.meta.env.BASE_URL + "tex/";
const loader = new THREE.ImageLoader();
const cache = new Map<string, THREE.Texture>();

type Painter = (ctx: CanvasRenderingContext2D, size: number, rnd: () => number) => void;

function mulberry(a: number): () => number {
  return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
/** Sömlös målad fläckstruktur: grundfärg + mjuka fläckar i några nyanser, ritade med omslag runt kanterna. */
export function blotches(base: string, shades: string[], count = 160, rMin = 6, rMax = 34, alpha = 0.22): Painter {
  return (x, S, rnd) => {
    x.fillStyle = base; x.fillRect(0, 0, S, S);
    for (let i = 0; i < count; i++) {
      const cx = rnd() * S, cy = rnd() * S, r = rMin + rnd() * (rMax - rMin);
      const col = shades[i % shades.length];
      for (const ox of [-S, 0, S]) for (const oy of [-S, 0, S]) {
        const g = x.createRadialGradient(cx + ox, cy + oy, 0, cx + ox, cy + oy, r);
        g.addColorStop(0, col); g.addColorStop(1, "rgba(0,0,0,0)");
        x.globalAlpha = alpha * (0.5 + rnd() * 0.8); x.fillStyle = g; x.fillRect(cx + ox - r, cy + oy - r, r * 2, r * 2);
      }
    }
    x.globalAlpha = 1;
  };
}
function canvasTex(p: Painter, seed: number, size = 256): HTMLCanvasElement {
  const c = document.createElement("canvas"); c.width = c.height = size;
  p(c.getContext("2d")!, size, mulberry(seed)); return c;
}
/** Hämtar en målad textur från /tex/<namn>.webp eller .png; visar kodmålad reserv tills bilden laddats. */
export function paintedTex(name: string, fallback: Painter, seed = 1, colorSpace: THREE.ColorSpace = THREE.SRGBColorSpace): THREE.Texture {
  const hit = cache.get(name); if (hit) return hit;
  const t = new THREE.Texture(canvasTex(fallback, seed));
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = colorSpace; t.anisotropy = 4; t.needsUpdate = true;
  cache.set(name, t);
  const tryLoad = (ext: string, next?: () => void) => loader.load(BASE + name + ext, img => { t.dispose(); t.image = img; t.needsUpdate = true; t.userData.real = true; }, undefined, () => next && next());
  tryLoad(".webp", () => tryLoad(".png"));
  return t;
}

// Reservtexturer i akvarellton tills ChatGPT-bilderna finns
export const TEX = {
  grass: () => paintedTex("grass", blotches("#86b35f", ["#6f9e4c", "#9cc46e", "#5e8c43", "#b3cf7d"], 220, 5, 30), 11),
  granite: () => paintedTex("granite", blotches("#c4a69c", ["#a98a82", "#d8bdb2", "#8f7471", "#e6d3c9"], 200, 4, 26, 0.3), 12),
  sand: () => paintedTex("sand", blotches("#e9d8ad", ["#dcc795", "#f3e6c4", "#cdb684"], 160, 4, 24), 13),
  dirt: () => paintedTex("dirt", blotches("#b39d7b", ["#9c8565", "#c9b592", "#8a7457", "#d6c6a5"], 220, 3, 18, 0.28), 14),
  planks: () => paintedTex("planks", blotches("#8d7a63", ["#7a6852", "#a08d74", "#6b5a47"], 160, 3, 20), 16),
  needles: () => paintedTex("needles", blotches("#3f7a45", ["#2f6338", "#5a9455", "#26532f"], 220, 4, 18), 17),
  leaves: () => paintedTex("leaves", blotches("#8cbf55", ["#6fa244", "#b2d671", "#5b8c3a"], 220, 4, 18), 18),
  pinebark: () => paintedTex("pinebark", blotches("#9a5b3c", ["#7d4a33", "#b9704a", "#6e6058"], 160, 3, 14), 19),
  birchbark: () => paintedTex("birchbark", blotches("#ece6da", ["#d9d0c0", "#f6f2ea", "#3b3734"], 120, 2, 10), 20),
  paper: () => paintedTex("paper", blotches("#f4efe4", ["#e9e1d0", "#fbf8f1", "#e2d8c4"], 300, 2, 16, 0.35), 15),
};

// ---------- Terrängmaterial: blandar fyra målade texturer efter attributet "splat" ----------
export function terrainMaterial(): THREE.MeshLambertMaterial {
  const m = new THREE.MeshLambertMaterial({ vertexColors: true });
  const u = { tGrass: { value: TEX.grass() }, tRock: { value: TEX.granite() }, tSand: { value: TEX.sand() }, tDirt: { value: TEX.dirt() }, uScale: { value: 0.11 } };
  m.onBeforeCompile = sh => {
    Object.assign(sh.uniforms, u);
    sh.vertexShader = sh.vertexShader
      .replace("#include <common>", "#include <common>\nattribute vec4 splat;\nvarying vec4 vSplat;\nvarying vec3 vWP;\nvarying vec3 vWN;")
      .replace("#include <begin_vertex>", "#include <begin_vertex>\nvSplat = splat;\nvWP = (modelMatrix * vec4(transformed, 1.0)).xyz;\nvWN = normalize(mat3(modelMatrix) * objectNormal);");
    sh.fragmentShader = sh.fragmentShader
      .replace("#include <common>", "#include <common>\nuniform sampler2D tGrass, tRock, tSand, tDirt;\nuniform float uScale;\nvarying vec4 vSplat;\nvarying vec3 vWP;\nvarying vec3 vWN;")
      .replace("#include <color_fragment>", `#include <color_fragment>
        vec2 uv = vWP.xz * uScale;
        vec3 n = abs(normalize(vWN));
        vec3 rockXZ = texture2D(tRock, uv * 0.7).rgb;
        vec3 rockSide = texture2D(tRock, vec2(vWP.x + vWP.z, vWP.y) * uScale * 0.7).rgb;
        vec3 rock = mix(rockSide, rockXZ, smoothstep(0.55, 0.85, n.y));
        vec4 w = vSplat / max(1e-3, vSplat.x + vSplat.y + vSplat.z + vSplat.w);
        vec3 tex = texture2D(tGrass, uv).rgb * w.x + rock * w.y + texture2D(tSand, uv * 1.3).rgb * w.z + texture2D(tDirt, uv * 1.6).rgb * w.w;
        diffuseColor.rgb = tex * vColor;`);
  };
  return m;
}

// ---------- Efterbehandling: konturer, pigmentkanter, papper ----------
const POST_VS = "varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}";
const POST_FS = `
uniform sampler2D tScene; uniform sampler2D tDepth; uniform sampler2D tPaper;
uniform vec2 uRes; uniform float uNear, uFar, uStrength;
varying vec2 vUv;
float lin(float d){ float z = d * 2.0 - 1.0; return (2.0 * uNear * uFar) / (uFar + uNear - z * (uFar - uNear)); }
float luma(vec3 c){ return dot(c, vec3(0.299, 0.587, 0.114)); }
void main(){
  vec2 px = 1.0 / uRes;
  vec3 c = texture2D(tScene, vUv).rgb;
  // konturer från djupskillnader (relativt avståndet, så att de inte blir svarta långt bort)
  float d0 = lin(texture2D(tDepth, vUv).r);
  float dl = lin(texture2D(tDepth, vUv - vec2(px.x, 0.)).r), dr = lin(texture2D(tDepth, vUv + vec2(px.x, 0.)).r);
  float du = lin(texture2D(tDepth, vUv + vec2(0., px.y)).r), dd = lin(texture2D(tDepth, vUv - vec2(0., px.y)).r);
  float edge = (abs(dl + dr - 2.0 * d0) + abs(du + dd - 2.0 * d0)) / max(d0, 1.0);
  edge = smoothstep(0.04, 0.22, edge) * (1.0 - smoothstep(250.0, 600.0, d0));
  // pigment samlas i kanterna mellan färgfält
  vec3 cl = texture2D(tScene, vUv - vec2(px.x * 1.5, 0.)).rgb, cr = texture2D(tScene, vUv + vec2(px.x * 1.5, 0.)).rgb;
  vec3 cu = texture2D(tScene, vUv + vec2(0., px.y * 1.5)).rgb, cd = texture2D(tScene, vUv - vec2(0., px.y * 1.5)).rgb;
  float lap = abs(luma(cl) + luma(cr) + luma(cu) + luma(cd) - 4.0 * luma(c));
  // papper och pigmentkorn
  vec3 paper = texture2D(tPaper, vUv * uRes / 512.0).rgb;
  float grain = luma(paper);
  vec3 col = c;
  col = mix(vec3(luma(col)), col, 1.08);                       // lite mer mättnad
  col *= 1.0 - lap * 0.9 * uStrength;                           // mörkare pigmentkant
  col = mix(col, col * vec3(0.42, 0.34, 0.30), edge * 0.55 * uStrength); // varm, mjuk kontur
  col *= mix(1.0, grain * 1.04, 0.3 * uStrength);              // pappersstruktur
  col = mix(col, vec3(0.98, 0.96, 0.91), 0.035 * uStrength);    // lätt tvättad ton
  vec2 v = vUv - 0.5; col *= 1.0 - dot(v, v) * 0.35 * uStrength; // vinjett
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;

export class WatercolorPost {
  enabled = true;
  strength = 1;
  private rt: THREE.WebGLRenderTarget;
  private quad: THREE.Mesh;
  private qScene = new THREE.Scene();
  private qCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  private mat: THREE.ShaderMaterial;
  constructor() {
    this.rt = new THREE.WebGLRenderTarget(4, 4, { depthTexture: new THREE.DepthTexture(4, 4), samples: 4, type: THREE.HalfFloatType });
    this.mat = new THREE.ShaderMaterial({
      vertexShader: POST_VS, fragmentShader: POST_FS, depthTest: false, depthWrite: false,
      uniforms: { tScene: { value: this.rt.texture }, tDepth: { value: this.rt.depthTexture }, tPaper: { value: TEX.paper() }, uRes: { value: new THREE.Vector2(4, 4) }, uNear: { value: 0.3 }, uFar: { value: 900 }, uStrength: { value: 1 } },
    });
    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.mat); this.quad.frustumCulled = false; this.qScene.add(this.quad);
  }
  render(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera): void {
    if (!this.enabled) { renderer.setRenderTarget(null); renderer.render(scene, camera); return; }
    const s = renderer.getDrawingBufferSize(new THREE.Vector2());
    if (s.x !== this.rt.width || s.y !== this.rt.height) { this.rt.setSize(s.x, s.y); (this.mat.uniforms.uRes.value as THREE.Vector2).copy(s); }
    this.mat.uniforms.uNear.value = camera.near; this.mat.uniforms.uFar.value = camera.far; this.mat.uniforms.uStrength.value = this.strength;
    renderer.setRenderTarget(this.rt); renderer.render(scene, camera);
    renderer.setRenderTarget(null); renderer.render(this.qScene, this.qCam);
  }
}

// ---------- Trä- och brädstruktur på objekt (attributet "mat": 0 = slät, 1 = trä) ----------
// Texturen läggs i världskoordinater från tre håll, så bryggor, golv och väggar får plankor utan UV-koordinater.
export function patchWood(m: THREE.Material): void {
  const tex = TEX.planks();
  (m as THREE.MeshLambertMaterial).onBeforeCompile = sh => {
    sh.uniforms.tPlanks = { value: tex };
    sh.uniforms.tNeedles = { value: TEX.needles() }; sh.uniforms.tLeaves = { value: TEX.leaves() };
    sh.uniforms.tPineBark = { value: TEX.pinebark() }; sh.uniforms.tBirchBark = { value: TEX.birchbark() };
    sh.vertexShader = sh.vertexShader
      .replace("#include <common>", "#include <common>\nattribute float mat;\nvarying float vMat;\nvarying vec3 vWP2;\nvarying vec3 vWN2;")
      .replace("#include <begin_vertex>", "#include <begin_vertex>\nvMat = mat;\nvec4 wpI = vec4(transformed, 1.0);\n#ifdef USE_INSTANCING\nwpI = instanceMatrix * wpI;\n#endif\nvWP2 = (modelMatrix * wpI).xyz;\nvec3 nI = objectNormal;\n#ifdef USE_INSTANCING\nnI = mat3(instanceMatrix) * nI;\n#endif\nvWN2 = normalize(mat3(modelMatrix) * nI);");
    sh.fragmentShader = sh.fragmentShader
      .replace("#include <common>", "#include <common>\nuniform sampler2D tPlanks, tNeedles, tLeaves, tPineBark, tBirchBark;\nvarying float vMat;\nvarying vec3 vWP2;\nvarying vec3 vWN2;\nvec3 tri(sampler2D s, float sc){ vec3 w = pow(abs(normalize(vWN2)), vec3(4.0)); w /= (w.x + w.y + w.z); return texture2D(s, vWP2.zy * sc).rgb * w.x + texture2D(s, vWP2.xz * sc).rgb * w.y + texture2D(s, vWP2.xy * sc).rgb * w.z; }")
      .replace("#include <color_fragment>", `#include <color_fragment>
        if (vMat > 1.5) {
          // träd: 2 = barr, 3 = björklöv, 4 = tallbark, 5 = björkbark (målade texturer ersätter färgen)
          vec3 n = abs(normalize(vWN2));
          int id = int(vMat + 0.5);
          vec2 side = vec2(n.x > n.z ? vWP2.z : vWP2.x, vWP2.y);
          vec3 t;
          if (id == 2) t = tri(tNeedles, 0.55);
          else if (id == 3) t = tri(tLeaves, 0.5);
          else if (id == 4) t = texture2D(tPineBark, side * vec2(1.4, 0.7)).rgb;
          else t = texture2D(tBirchBark, side * vec2(1.4, 0.7)).rgb;
          diffuseColor.rgb = t * 1.05;
        } else if (vMat > 0.01) {
          vec3 n = abs(normalize(vWN2));
          float sc = 0.45;
          vec3 t = n.y > 0.6 ? texture2D(tPlanks, vWP2.xz * sc).rgb : (n.x > n.z ? texture2D(tPlanks, vec2(vWP2.z, vWP2.y) * sc).rgb : texture2D(tPlanks, vec2(vWP2.x, vWP2.y) * sc).rgb);
          float l = dot(t, vec3(0.299, 0.587, 0.114));
          diffuseColor.rgb *= mix(1.0, clamp(l / 0.2, 0.55, 1.45), vMat * 0.85);
        }`);
  };
}

// ---------- Vind i växtligheten: toppen av träd och gräs vajar, mer när det blåser ----------
export const WIND = { t: { value: 0 }, w: { value: 1 } };
export function swayMat(base: number, k: number): THREE.MeshLambertMaterial {
  const m = new THREE.MeshLambertMaterial({ vertexColors: true }); patchWood(m);
  const prev = m.onBeforeCompile;
  m.onBeforeCompile = (sh, r) => {
    sh.uniforms.uWT = WIND.t; sh.uniforms.uWW = WIND.w;
    sh.vertexShader = sh.vertexShader.replace("#include <common>", "#include <common>\nuniform float uWT, uWW;")
      .replace("#include <begin_vertex>", `#include <begin_vertex>
{ float hh = max(0.0, transformed.y - ${base.toFixed(2)}); vec3 ip = vec3(0.0);
#ifdef USE_INSTANCING
ip = instanceMatrix[3].xyz;
#endif
float ph = uWT * 1.6 + ip.x * 0.21 + ip.z * 0.17; float sw = hh * hh * ${k.toFixed(4)} * uWW;
transformed.x += sin(ph) * sw + sin(ph * 2.3 + 1.0) * sw * 0.3; transformed.z += cos(ph * 0.8) * sw * 0.7; }`);
    prev.call(m, sh, r);
  };
  m.customProgramCacheKey = () => "sway" + base + "_" + k;
  return m;
}
