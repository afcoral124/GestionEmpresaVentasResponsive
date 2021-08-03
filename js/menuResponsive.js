document.addEventListener('DOMContentLoaded', function () {
//Código para el botón responsivo de los botones de navegación para movil
const menu = document.querySelector("#boton-menu");
menu.addEventListener("click", responsive);

function responsive() {
  let x = document.querySelector(".nav-movil");
  if (x.className.indexOf("mostrar-menu") == -1) {
    x.className += " mostrar-menu";
  } else {
    x.className = x.className.replace(" mostrar-menu", "");
  }
}

let usuarios = JSON.parse(localStorage.getItem("usuarios"));
let usuarioEncontrado = usuarios.find(element => element.logueado==1);
if (usuarioEncontrado.rol == "operario") {
  bloqueadas=document.querySelectorAll(".rol");
  bloqueadas.forEach((item, i) => {
    item.classList.add("d-none");
  });
  if (document.getElementById("botonAbastecer")) {
    // Deshabilitar boton de abastecer al ser operario
    document.getElementById('botonAbastecer').disabled=true;
  }
  
}
//----------------------------------------------------
});
