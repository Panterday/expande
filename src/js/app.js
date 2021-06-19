import { loadImages } from "./load-images";
import { initParticles } from "./particles";
import { startWindow } from "./window";

export const startAll = ()=>{
    startWindow(); 

    loadImages(); 
}