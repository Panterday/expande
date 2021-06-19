import { loadImages } from "./load-images";
import { initParticles } from "./particles";

export const startAll = ()=>{
    initParticles();

    loadImages(); 
}