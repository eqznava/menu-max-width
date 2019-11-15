const boton = document.getElementById("btn");
boton.addEventListener('click', presionado);

const menu = document.querySelector('.Header_menu');

function presionado (){
  if (menu.classList.contains('is-active')) {
    menu.classList.remove('is-active')
  } else {
    menu.classList.add('is-active')
  }
}
