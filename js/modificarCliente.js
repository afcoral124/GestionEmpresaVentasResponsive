document.addEventListener('DOMContentLoaded', function () {

    imprimirDatosAModificarEnCajones();

});

function imprimirDatosAModificarEnCajones() {
    var indiceParaModificar = localStorage.getItem('indiceParaModificar');
    var catalogoClientes= JSON.parse(localStorage.getItem('catalogoClientes'));
    document.getElementById('nombre').value = catalogoClientes[indiceParaModificar].nombre;
    document.getElementById('apellido').value = catalogoClientes[indiceParaModificar].apellido;
    document.getElementById('direccion').value = catalogoClientes[indiceParaModificar].direccion;
    document.getElementById('email').value = catalogoClientes[indiceParaModificar].email;
    document.getElementById('telefono').value = catalogoClientes[indiceParaModificar].telefono;
  }

let botonGuardar = document.getElementById("botonGuardar");
botonGuardar.addEventListener("click",actualizarDatos);

function actualizarDatos(){
    var indiceParaModificar = localStorage.getItem('indiceParaModificar');
    var catalogoClientes= JSON.parse(localStorage.getItem('catalogoClientes'));

    catalogoClientes[indiceParaModificar].nombre = document.getElementById('nombre').value;
    catalogoClientes[indiceParaModificar].apellido = document.getElementById('apellido').value;
    catalogoClientes[indiceParaModificar].direccion = document.getElementById('direccion').value;
    catalogoClientes[indiceParaModificar].email = document.getElementById('email').value;
    catalogoClientes[indiceParaModificar].telefono = document.getElementById('telefono').value;

    localStorage.setItem("catalogoClientes",JSON.stringify(catalogoClientes));
}
