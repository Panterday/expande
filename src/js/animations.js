import gsap from 'gsap'

let state = 0;
let stateDesc = 0; 

const startingAnimations = ()=>{
    gsap.from('.home h1', {
        opacity: 0,
        duration: 3
    })
}

const setStateMenu = (s)=>{
    state = s; 
    console.log(state)
}

const show = (selector, directionX, directionY = 0)=>{
    if(state === 0){
        state = 1; 
        gsap.set(selector, {
            display: 'flex', 
            opacity: 1,
            x: 0,
            y: 0,
        })

        gsap.from(selector, {
            opacity: 0,
            x: directionX,
            ease: 'Elastic.easeOut',
            duration: 2
        })
    }else{
        state = 0;
        gsap.set(selector, {
            opacity: 1,
            x: 0,
            y: 0,
        })
        gsap.to(selector, {
            opacity: 0,
            x:directionX,
            display: 'none'
        })
    }
}

const showDesc = (selector, directionX, directionY = 0)=>{
    if(stateDesc === 0){
        stateDesc = 1; 
        gsap.set(selector, {
            display: 'initial', 
            opacity: 1,
            x: 0,
            y: 0,
        })

        gsap.from(selector, {
            opacity: 0,
            x: directionX,
            ease: 'Elastic.easeOut',
            duration: 2
        })
    }else{
        stateDesc = 0;
        gsap.set(selector, {
            opacity: 1,
            x: 0,
            y: 0,
        })
        gsap.to(selector, {
            opacity: 0,
            x:directionX,
            display: 'none'
        })
    }
}

export {
    startingAnimations, 
    show,
    setStateMenu,
    showDesc
}