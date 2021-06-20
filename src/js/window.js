
import { initParticles } from "./particles";
import { scrollAnimations } from "./scroll-animations";

const startWindow = ()=>{
    window.addEventListener('load', ()=>{

        initParticles(); 

        scrollAnimations(); 

    }); 
}

export{
    startWindow
}