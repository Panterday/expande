import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger); 

export const scrollAnimations = ()=>{

    gsap.from('#background', {
        scrollTrigger: {
            trigger: '#section-1 .description h1',
            scrub: true,
            start: 'top center'
        },
        opacity: 0
    })

    gsap.from('#section-1 img', {
        scrollTrigger: {
            trigger: '#section-1 .description h1',
            start: 'top center'
        },
        opacity: 0,
        x: 200,
        duration: 1
    })

    gsap.from('#section-1 .description', {
        scrollTrigger: {
            trigger: '#section-1 .description',
            start: 'top center'
        },
        opacity: 0,
        x: -200,
        duration: 1
    })

    gsap.from('#section-2 img', {
        scrollTrigger: {
            trigger: '#section-2 .description h1',
            start: 'top center'
        },
        opacity: 0,
        x: 200,
        duration: 1
    })

    gsap.from('#section-2 .description', {
        scrollTrigger: {
            trigger: '#section-2 .description',
            start: 'top center'
        },
        opacity: 0,
        x: -200,
        duration: 1
    })

    gsap.from('#section-3 img', {
        scrollTrigger: {
            trigger: '#section-3 .description h1',
            start: 'top center'
        },
        opacity: 0,
        x: 200,
        duration: 1
    })

    gsap.from('#section-3 .description', {
        scrollTrigger: {
            trigger: '#section-3 .description',
            start: 'top center'
        },
        opacity: 0,
        x: -200,
        duration: 1
    })

    gsap.from('#section-4 img', {
        scrollTrigger: {
            trigger: '#section-4 .description h1',
            start: 'top center'
        },
        opacity: 0,
        x: 200,
        duration: 1
    })

    gsap.from('#section-4 .description', {
        scrollTrigger: {
            trigger: '#section-4 .description',
            start: 'top center'
        },
        opacity: 0,
        x: -200,
        duration: 1
    })
}