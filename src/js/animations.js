import gsap from 'gsap'

export const startingAnimations = ()=>{
    gsap.from('.home h1', {
        opacity: 0,
        duration: 3
    })
}