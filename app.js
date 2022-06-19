






let menu = document.querySelector('.menu');
let navigation = document.querySelector('.navigation');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    navigation.classList.toggle('active');
});


let links = document.querySelectorAll('.nav-link');
links.forEach(el=> {
   el.addEventListener('click', () => {
    menu.classList.remove('active');
    navigation.classList.remove('active');
   });
});



let darkMode = document.querySelector('.darkMode');

document.querySelector('.darkMode span i').innerHTML = '<i class="fa-solid fa-sun"></i>';


darkMode.addEventListener('click', () => {
    darkMode.classList.toggle('active');
    document.querySelector('body').classList.toggle('active');
    if (!darkMode.classList.contains('active')) {
        document.querySelector('.darkMode span i').innerHTML = '<i class="fa-solid fa-sun"></i>';
    }else{
        document.querySelector('.darkMode span i').innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});

let nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    nav.classList.toggle('active', window.scrollY > 400);
});
