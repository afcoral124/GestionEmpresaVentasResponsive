function registrarNuevoProveedor () {

  let nuevoProveedor = {
    nombre:"",
    apellido:"",
    direccion:"",
    email:"",
    telefono:""
  }

  nuevoProveedor.nombre = document.getElementById('nombre').value;
  nuevoProveedor.apellido = document.getElementById('apellido').value;
  nuevoProveedor.direccion = document.getElementById('direccion').value;
  nuevoProveedor.email = document.getElementById('email').value;
  nuevoProveedor.telefono = document.getElementById('telefono').value;

  let catalogoModificar = JSON.parse(localStorage.getItem("catalogoProveedores"));
  catalogoModificar.push(nuevoProveedor);

  localStorage.setItem("catalogoProveedores",JSON.stringify(catalogoModificar));
}
