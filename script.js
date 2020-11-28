const navbar = document.querySelector('header');
console.log(navbar);
console.dir(navbar);

window.addEventListener('scroll',()=>{
    if(scrollY>0){
        navbar.classList.add('scroll');
    }else{
        navbar.classList.remove('scroll');
    }
})