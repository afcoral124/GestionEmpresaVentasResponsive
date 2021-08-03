function registrarNuevoCliente () {

  let nuevoCliente = {
    nombre:"",
    apellido:"",
    direccion:"",
    email:"",
    telefono:""
  }

  nuevoCliente.nombre = document.getElementById('nombre').value;
  nuevoCliente.apellido = document.getElementById('apellido').value;
  nuevoCliente.direccion = document.getElementById('direccion').value;
  nuevoCliente.email = document.getElementById('email').value;
  nuevoCliente.telefono = document.getElementById('telefono').value;

  let catalogoModificar = JSON.parse(localStorage.getItem("catalogoClientes"));
  catalogoModificar.push(nuevoCliente);

  localStorage.setItem("catalogoClientes",JSON.stringify(catalogoModificar));
}
