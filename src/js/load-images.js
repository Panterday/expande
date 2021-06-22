import menu from '../assets/images/icon-menu.svg'
import web from '../assets/images/web.png'
import back from '../assets/images/background-circle.svg'
import store from '../assets/images/tienda_online.jpg'
import RS from '../assets/images/SN.jpg'
import promo from '../assets/images/promo.jpg'
const loadImages = ()=>{

    document.querySelector('#menu-logo').src = menu;

    document.querySelector('#section-1 img').src = web;

    document.querySelector('#section-2 img').src = store;

    document.querySelector('#section-3 img').src = RS;

    document.querySelector('#section-4 img').src =promo;

    /* document.querySelector('#background').src = back; */
    
}

export{
    loadImages
}