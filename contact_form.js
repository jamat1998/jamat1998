const d=document
export default function contactForm(){
const $form=d.querySelector('.contact-form'),
 $inputs=d.querySelector('.contact-form [required]')

d.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    const $loader = d.querySelector('.contact-form-loader'),
$response = d.querySelector('.contact-form-response');

$loader.classList.remove('none');

fetch('https://formsubmit.co/ajax/mathias.20.1998@gmail.com',{
    method:'POST',
    body:new FormData(e.target)
})
.then(res=>res.ok ? res.json():Promise.reject(res))
.then(json=>{
    console.log(json);
    $loader.classList.add('none');
    $response.classList.remove('none');
    $form.reset()
})
.catch(err=>{
let message = err.statusText || 'Ocurrio un error, reintente nuevamente';
$response.innerHTML = `<p>Error ${err.status}:${message}</p>`;
})
.finally(()=>setTimeout(()=>{
$response.classList.add('none');
},3000));
});
}