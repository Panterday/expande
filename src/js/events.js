import gsap from 'gsap'
import { show, showDesc } from './animations'

const displayMenu = ()=>{
    document.querySelector('#menu-logo').addEventListener('click', ()=>{
        /* console.log(document.querySelector('#my-menu').classList.toggle('show-hide')) */
        show('.greeting nav', '-300');  
    })

    let hrefs = document.querySelectorAll('#list a'); 

    hrefs.forEach(a => {
        a.addEventListener('click', ()=>{
            /* console.log(document.querySelector('#my-menu').classList.toggle('show-hide')) */
            show('.greeting nav', '-300');  
        })
    })

    const sect1 = document.querySelector('#section-1 .description button'); 

    sect1.addEventListener('click', ()=>{
        console.log(sect1.style.display)
        let state;
        if (sect1.style.opacity == 1){
            state = 0
        }else{
            state = 1
        }
        console.log(state)
        showDesc('#desc1', '300')
    })

    document.querySelector('#section-2 .description button').addEventListener('click', ()=>{
        showDesc('#desc2', '300')
    })

    document.querySelector('#section-3 .description button').addEventListener('click', ()=>{
        showDesc('#desc3', '300')
    })

    document.querySelector('#section-4 .description button').addEventListener('click', ()=>{
        showDesc('#desc4', '300')
    })
}

export{
    displayMenu
}