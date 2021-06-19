import 'particles.js'; 
import { config } from './config-particles';

const initParticles = ()=>{
    const particlesJS = window.particlesJS;
    particlesJS('particles-js', config(), null)
}

export{
    initParticles
}