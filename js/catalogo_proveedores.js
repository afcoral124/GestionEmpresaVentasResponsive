document.addEventListener('DOMContentLoaded', function () {

    imprimirProveedores();

});


function imprimirProveedores(){
    //arreglo de proveedores
    var catalogoProveedores= JSON.parse(localStorage.getItem('catalogoProveedores'));
    document.getElementById('contenedorInformacion').innerHTML=" ";

    catalogoProveedores.forEach( (proveedorActual, indiceActual) => {
      document.getElementById('contenedorInformacion').innerHTML+=
      `
      <div class="itemInformacion">
            <div class="parteIzquierdaitemInformacion">
              <div class="titulo">
                <h2>${proveedorActual.nombre} ${proveedorActual.apellido}</h2>
              </div>
              <div class="descripcion">
                <ul>
                  <li>Direccion: ${proveedorActual.direccion}</li>
                  <li>Email: ${proveedorActual.email}</li>
                  <li>Telefono: ${proveedorActual.telefono}</li>
                </ul>
              </div>
            </div>

            <div class="parteDerechaitemInformacion">
              <div>
                  <a class="botonModificar" onclick="abrirPopupModificarProveedor(${indiceActual})"><img class="imgModificar" src="../imagenes/lapiz.png" alt="Modificar" title="Modificar"></a>
              </div>
              <div>
              <a class="botonEliminar" href="#" onclick="eliminarProveedor(${indiceActual})"><img class="imgEliminar" src="../imagenes/eliminar.png" alt="Eliminar" title="Eliminar"></a>
              </div>
            </div>
      </div>
      `;

    });
  }

  function eliminarProveedor(indiceActual){
    var catalogoProveedores= JSON.parse(localStorage.getItem('catalogoProveedores'));
    catalogoProveedores.splice(indiceActual,1);
    localStorage.setItem("catalogoProveedores",JSON.stringify(catalogoProveedores));
    imprimirProveedores();
  }

  function abrirPopupModificarProveedor(indiceActual) {
    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("popup");
    
    overlay.classList.add("active");
    popup.classList.add("active");

    localStorage.setItem("indiceParaModificar", indiceActual);
    var catalogoProveedores = JSON.parse(localStorage.getItem("catalogoProveedores"));
    document.getElementById("nombre").value = catalogoProveedores[indiceActual].nombre;
    document.getElementById("apellido").value = catalogoProveedores[indiceActual].apellido;
    document.getElementById("direccion").value = catalogoProveedores[indiceActual].direccion;
    document.getElementById("email").value = catalogoProveedores[indiceActual].email;
    document.getElementById("telefono").value = catalogoProveedores[indiceActual].telefono;

    document.getElementById("btn-submit").value = "Modificar Proveedor";
  }

  function abrirPopupAgregarProveedor() {
    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("popup");
    document.getElementById("btn-submit").value = "Agregar Proveedor";
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefono").value = "";
    overlay.classList.add("active");
    popup.classList.add("active");

  }

  function cerrarPopup(){
    overlay.classList.remove("active");
    popup.classList.remove("active");
  }


  function verificarAccion(){
    if(document.getElementById("btn-submit").value=="Agregar Proveedor"){
      return agregarProveedor();
      
    }
    else{
      return modificarProveedor();
    }
  }


  function modificarProveedor(){
    var indiceParaModificar = localStorage.getItem("indiceParaModificar");
    var catalogoProveedores = JSON.parse(localStorage.getItem("catalogoProveedores"));

    //Si los campos estan vacíos:
    if((document.getElementById("nombre").value=="")||(document.getElementById("apellido").value=="")||(document.getElementById("direccion").value=="")||(document.getElementById("email").value=="")||(document.getElementById("telefono").value=="")){
      return false;
    }

    catalogoProveedores[indiceParaModificar].nombre = document.getElementById("nombre").value;
    catalogoProveedores[indiceParaModificar].apellido = document.getElementById("apellido").value;
    catalogoProveedores[indiceParaModificar].direccion = document.getElementById("direccion").value;
    catalogoProveedores[indiceParaModificar].email = document.getElementById("email").value;
    catalogoProveedores[indiceParaModificar].telefono = document.getElementById("telefono").value;

    localStorage.setItem("catalogoProveedores", JSON.stringify(catalogoProveedores));
    return true;
  }

  function agregarProveedor(){
    var catalogoProveedores = JSON.parse(localStorage.getItem("catalogoProveedores"));
    var proveedorNuevo = {
      nombre:"",
      apellido:"",
      direccion:"",
      email:"",
      telefono:""
    }

    //Si los campos estan vacíos:
    if((document.getElementById("nombre").value=="")||(document.getElementById("apellido").value=="")||(document.getElementById("direccion").value=="")||(document.getElementById("email").value=="")||(document.getElementById("telefono").value=="")){
      return false;
    }

    proveedorNuevo.nombre = document.getElementById("nombre").value;
    proveedorNuevo.apellido = document.getElementById("apellido").value;
    proveedorNuevo.direccion = document.getElementById("direccion").value;
    proveedorNuevo.email = document.getElementById("email").value;
    proveedorNuevo.telefono = document.getElementById("telefono").value;
    catalogoProveedores.push(proveedorNuevo);
    localStorage.setItem("catalogoProveedores", JSON.stringify(catalogoProveedores));
    return true;
  }