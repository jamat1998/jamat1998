import hamburgerMenu from "./menu_hamburguesa.js";
import scrolltop from "./scroll-top.js"
import contactForm from "./contact_form.js";
const d= document;
d.addEventListener("DOMContentLoaded",(e)=>{   
    hamburgerMenu('.panel-btn','.panel','.hamb-menu a')
    scrolltop('.header img','.up-page img','.up-page')
    contactForm();
});
