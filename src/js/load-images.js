import menu from '../assets/images/icon-menu.svg'
import web from '../assets/images/web.png'
import back from '../assets/images/background-circle.svg'
const loadImages = ()=>{

    document.querySelector('#menu-logo').src = menu;

    document.querySelector('#section-1 img').src = web;

    document.querySelector('#section-2 img').src = web;

    document.querySelector('#section-3 img').src = web;

    document.querySelector('#section-4 img').src = web;

    document.querySelector('#background').src = back;
    
}

export{
    loadImages
}