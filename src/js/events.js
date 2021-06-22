import gsap from 'gsap'
import { show } from './animations'

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

    document.querySelector('.description button').addEventListener('click', ()=>{
        
    })
}

export{
    displayMenu
}