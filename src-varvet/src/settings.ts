// @ts-nocheck
import * as THREE from "three";

// ================= Inställningar =================
const SET=Object.assign({q:1,fps:30,perf:0},(()=>{try{return JSON.parse(localStorage.getItem("varvet_set")||"{}")}catch(e){return{}}})());
const saveSet=()=>{try{localStorage.setItem("varvet_set",JSON.stringify(SET))}catch(e){}};
const QUAL=[{dpr:1,shadow:0,smap:0,trees:.6},{dpr:1.5,shadow:1,smap:1024,trees:1},{dpr:2,shadow:1,smap:2048,trees:1}];


export { QUAL, SET, saveSet };
