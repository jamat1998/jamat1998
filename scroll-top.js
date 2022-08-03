export default function scrolltop(logo,up,img){
    const d=document;
    const w=window;
    d.addEventListener("click",(e) => {
        if(e.target.matches(logo) || e.target.matches(up)){
            w.scrollTo ({
                behavior:"smooth",
                top:0
            }) 
        }
    });
       d.addEventListener("scroll",(e)=>{
           if(w.pageYOffset > 700){
        d.querySelector(img).classList.remove("hidden")
          }else
          d.querySelector(img).classList.add("hidden")
});
}