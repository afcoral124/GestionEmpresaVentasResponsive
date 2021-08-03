document.addEventListener('DOMContentLoaded', function () {

    imprimirClientes();

});


function imprimirClientes(){
    //arreglo de clientes
    var catalogoClientes= JSON.parse(localStorage.getItem('catalogoClientes'));
    document.getElementById('contenedorInformacion').innerHTML=" ";

    catalogoClientes.forEach( (clienteActual, indiceActual) => {
      document.getElementById('contenedorInformacion').innerHTML+=
      `
      <div class="itemInformacion">
            <div class="parteIzquierdaitemInformacion">
              <div class="titulo">
                <h2>${clienteActual.nombre} ${clienteActual.apellido}</h2>
              </div>
              <div class="descripcion">
                <ul>
                  <li>Direccion: ${clienteActual.direccion}</li>
                  <li>Email: ${clienteActual.email}</li>
                  <li>Telefono: ${clienteActual.telefono}</li>
                </ul>
              </div>
            </div>

            <div class="parteDerechaitemInformacion">
              <div>
                  <a class="botonModificar" onclick="abrirPopupModificarCliente(${indiceActual})"><img class="imgModificar" src="../imagenes/lapiz.png" alt="Modificar" title="Modificar"></a>
              </div>
              <div>
              <a class="botonEliminar" href="#" onclick="eliminarCliente(${indiceActual})"><img class="imgEliminar" src="../imagenes/eliminar.png" alt="Eliminar" title="Eliminar"></a>
              </div>
            </div>
      </div>
      `;

    });
  }

  function eliminarCliente(indiceActual){
    var catalogoClientes= JSON.parse(localStorage.getItem('catalogoClientes'));
    catalogoClientes.splice(indiceActual,1);
    localStorage.setItem("catalogoClientes",JSON.stringify(catalogoClientes));
    imprimirClientes();
  }

  function abrirPopupModificarCliente(indiceActual) {
    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("popup");
    
    overlay.classList.add("active");
    popup.classList.add("active");

    localStorage.setItem("indiceParaModificar", indiceActual);
    var catalogoClientes = JSON.parse(localStorage.getItem("catalogoClientes"));
    document.getElementById("nombre").value = catalogoClientes[indiceActual].nombre;
    document.getElementById("apellido").value = catalogoClientes[indiceActual].apellido;
    document.getElementById("direccion").value = catalogoClientes[indiceActual].direccion;
    document.getElementById("email").value = catalogoClientes[indiceActual].email;
    document.getElementById("telefono").value = catalogoClientes[indiceActual].telefono;

    document.getElementById("btn-submit").value = "Modificar Cliente";
  }

  function abrirPopupAgregarCliente() {
    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("popup");
    document.getElementById("btn-submit").value = "Agregar Cliente";
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
    if(document.getElementById("btn-submit").value=="Agregar Cliente"){
      return agregarCliente();
      
    }
    else{
      return modificarCliente();
    }
  }


  function modificarCliente(){
    var indiceParaModificar = localStorage.getItem("indiceParaModificar");
    var catalogoClientes = JSON.parse(localStorage.getItem("catalogoClientes"));

    //Si los campos estan vacíos:
    if((document.getElementById("nombre").value=="")||(document.getElementById("apellido").value=="")||(document.getElementById("direccion").value=="")||(document.getElementById("email").value=="")||(document.getElementById("telefono").value=="")){
      return false;
    }

    catalogoClientes[indiceParaModificar].nombre = document.getElementById("nombre").value;
    catalogoClientes[indiceParaModificar].apellido = document.getElementById("apellido").value;
    catalogoClientes[indiceParaModificar].direccion = document.getElementById("direccion").value;
    catalogoClientes[indiceParaModificar].email = document.getElementById("email").value;
    catalogoClientes[indiceParaModificar].telefono = document.getElementById("telefono").value;

    localStorage.setItem("catalogoClientes", JSON.stringify(catalogoClientes));
    return true;
  }

  function agregarCliente(){
    var catalogoClientes = JSON.parse(localStorage.getItem("catalogoClientes"));
    var clienteNuevo = {
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

    clienteNuevo.nombre = document.getElementById("nombre").value;
    clienteNuevo.apellido = document.getElementById("apellido").value;
    clienteNuevo.direccion = document.getElementById("direccion").value;
    clienteNuevo.email = document.getElementById("email").value;
    clienteNuevo.telefono = document.getElementById("telefono").value;
    catalogoClientes.push(clienteNuevo);
    localStorage.setItem("catalogoClientes", JSON.stringify(catalogoClientes));
    return true;
  }