const navMenu = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.lista-nav');
    const listaNav = document.querySelector('.lista-na li')

        //Toggle
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-activo');
        //Animacion cruz
        burger.classList.toggle('toggle')
    });
    
};

navMenu();