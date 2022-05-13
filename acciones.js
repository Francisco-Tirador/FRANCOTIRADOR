const menu=document.querySelector(".menu_amburguer")
const menu_active=document.querySelector("#menu")

menu.addEventListener('click',toggleMenu)

function toggleMenu(){
menu_active.classList.toggle("menu_active")

}


// function togllem(){
// const menu= document.getElementById(menu)
// menu.classList.toggle("menu_oculto")

// }