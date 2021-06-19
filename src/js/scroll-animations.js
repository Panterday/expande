import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger); 

export const scrollAnimations = ()=>{

    gsap.to('#background', {
        scrollTrigger: {
            trigger: '.main',
            scrub: true
        },
        height: '150%'
    })
}