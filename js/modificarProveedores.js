document.addEventListener('DOMContentLoaded', function () {

    imprimirDatosAModificarEnCajones();

});

function imprimirDatosAModificarEnCajones() {
    var indiceParaModificar = localStorage.getItem('indiceParaModificar');
    var catalogoProveedores= JSON.parse(localStorage.getItem('catalogoProveedores'));
    document.getElementById('nombre').value = catalogoProveedores[indiceParaModificar].nombre;
    document.getElementById('apellido').value = catalogoProveedores[indiceParaModificar].apellido;
    document.getElementById('direccion').value = catalogoProveedores[indiceParaModificar].direccion;
    document.getElementById('email').value = catalogoProveedores[indiceParaModificar].email;
    document.getElementById('telefono').value = catalogoProveedores[indiceParaModificar].telefono;
  }

let botonGuardar = document.getElementById("botonGuardar");
botonGuardar.addEventListener("click",actualizarDatos);

function actualizarDatos(){
    var indiceParaModificar = localStorage.getItem('indiceParaModificar');
    var catalogoProveedores= JSON.parse(localStorage.getItem('catalogoProveedores'));

    catalogoProveedores[indiceParaModificar].nombre = document.getElementById('nombre').value;
    catalogoProveedores[indiceParaModificar].apellido = document.getElementById('apellido').value;
    catalogoProveedores[indiceParaModificar].direccion = document.getElementById('direccion').value;
    catalogoProveedores[indiceParaModificar].email = document.getElementById('email').value;
    catalogoProveedores[indiceParaModificar].telefono = document.getElementById('telefono').value;

    localStorage.setItem("catalogoProveedores",JSON.stringify(catalogoProveedores));
}
