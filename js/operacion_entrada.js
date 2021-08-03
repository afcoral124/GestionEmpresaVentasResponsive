let catalogoCategoriasProductos = JSON.parse(localStorage.getItem("catalogoCategoriasProductos"));
let catalogoProveedores = JSON.parse(localStorage.getItem("catalogoProveedores"));
let listaCategorias = document.getElementById("categorias");
let listaProductos = document.getElementById("productos");
let listaProveedores = document.getElementById("proveedores");
let cajaCantidad = document.getElementById("cantidad");
let arregloCompra = [];
let total = 0;



document.addEventListener("DOMContentLoaded", function () {
    llenarCategorias();
    let categoriaEscogida = listaCategorias.value;
    if(categoriaEscogida==""){
        listaProductos.disabled = true;
    }
    else{
        listaProductos.disabled = false;
    }

    llenarProveedores();
});

function llenarCategorias() {
    listaCategorias.innerHTML="";
    listaCategorias.innerHTML=`<option value="" selected="selected"> - selecciona -</option>`;
    catalogoCategoriasProductos.forEach( (categoriaActual, indiceActual) => {
        listaCategorias.innerHTML+=
        `
        <option value="${indiceActual}">${categoriaActual.nombreCategoria}</option>
        `;
    });
}


function llenarProductos(){
    let categoriaEscogida = listaCategorias.value;
    console.log(categoriaEscogida);

    if(categoriaEscogida==""){
        listaProductos.disabled = true;
        listaProductos.innerHTML="";
        listaProductos.innerHTML=`<option value="" selected="selected"> - selecciona -</option>`;
    }
    else{
        listaProductos.disabled = false;
        listaProductos.innerHTML="";
        listaProductos.innerHTML=`<option value="" selected="selected"> - selecciona -</option>`;
        catalogoCategoriasProductos[categoriaEscogida].productos.forEach((productoActual, indiceActual) => {
            listaProductos.innerHTML+=`<option value="${indiceActual}">${productoActual.nombre}</option>`;
        });
    }
}

function llenarProveedores(){
    listaProveedores.innerHTML="";
    listaProveedores.innerHTML=`<option value="" selected="selected"> - selecciona -</option>`;
    catalogoProveedores.forEach( (proveedorActual, indiceActual) => {
        listaProveedores.innerHTML+=
        `
        <option value="${indiceActual}">${proveedorActual.nombre} ${proveedorActual.apellido}</option>
        `;
    });
}

function validarProducto(){
  if (listaCategorias.value==""||listaProductos.value==""||cajaCantidad.value<=0) {
    document.getElementById("alertaProducto").classList.add("active");
  }
  else {
    document.getElementById("alertaProducto").classList.remove("active");
    agregarProductoALaCompra();
  }
}

function quitarAlerta() {

  document.getElementById("alertaProducto").classList.remove("active");
}

function agregarProductoALaCompra() {
    let categoriaEscogida = document.getElementById("categorias");
    let txtCategoria = categoriaEscogida.options[categoriaEscogida.selectedIndex].text;
    let productoEscogido = document.getElementById("productos");
    let txtProducto = productoEscogido.options[productoEscogido.selectedIndex].text;
    let cantidad = parseInt(document.getElementById("cantidad").value,10);

    let compraIndividual = {
        categoria:txtCategoria,
        producto:txtProducto,
        cantidad:cantidad
    };

    arregloCompra.push(compraIndividual);
    categoriaEscogida.value="";
    llenarProductos();
    cajaCantidad.value=0;
    imprimirProductosCompra();

}


function imprimirProductosCompra() {
  let catalogoCategoriasProductos = JSON.parse(localStorage.getItem("catalogoCategoriasProductos"));
  let txt = "";
    document.getElementById("contenedorListaCompras").innerHTML="";
    total=0;
    arregloCompra.forEach((compraIndividualActual, indiceActual) => {
      let categoriaEncontrada = catalogoCategoriasProductos.find(element => element.nombreCategoria==compraIndividualActual.categoria);
      let productoEncontrado = categoriaEncontrada.productos.find(element => element.nombre==compraIndividualActual.producto);
      let precioIndividual = productoEncontrado.precioEntradas;
      let precioTotal = precioIndividual*compraIndividualActual.cantidad;
      total+= precioTotal;
        txt+=
        `
        <tr>
          <td>${compraIndividualActual.producto}</td>
          <td>${compraIndividualActual.cantidad}</td>
          <td>${precioTotal}</td>
          <td class="transparente"><input type="button" class="botonEliminar" name="eliminar" value="x" onclick = "eliminarProducto(${indiceActual})"></td>
        </tr>
        `;
    });
    document.getElementById("contenedorListaCompras").innerHTML="";
    let tablaCompleta =
     `
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
        ${txt}
        <tr>
          <td colspan="2">TOTAL:</td>
          <td>${total}</td>
        </tr>
        </tbody>
      </table>
      `;
    document.getElementById("contenedorListaCompras").innerHTML= tablaCompleta;
}

function eliminarProducto (indice){
  arregloCompra.splice(indice,1);
  imprimirProductosCompra();
}

function validarProveedor(){
  if (listaProveedores.value=="") {
    document.getElementById("alertaProveedor").classList.add("active");
  }
  else {
    document.getElementById("alertaProveedor").classList.remove("active");
    operacionEntrada();
  }
}

function quitarAlertaProveedor(){
  document.getElementById("alertaProveedor").classList.remove("active");
}

function operacionEntrada(){
  let d = new Date();
  let n = d.valueOf();
  //let n = Date.parse(d);
  //let n = d.toLocaleString();
  let compraFinal = {
    numeroCompra:0,
    proveedor:"",
    productos:[],
    total:0,
    fecha:""
  };

  let proveedorEscogido = document.getElementById("proveedores");
  let txtProveedor = proveedorEscogido.options[proveedorEscogido.selectedIndex].text;
  compraFinal.proveedor = txtProveedor;
  compraFinal.productos = arregloCompra;
  compraFinal.total = total;
  compraFinal.fecha = n;

  if (localStorage.getItem("operacionesEntrada")==null) {
    let arregloVacio = [];
    localStorage.setItem("operacionesEntrada", JSON.stringify(arregloVacio));
    compraFinal.numeroCompra = 1;
  }
  else {
    let numeroDeOpercaion = JSON.parse(localStorage.getItem("operacionesEntrada"));
    compraFinal.numeroCompra = numeroDeOpercaion.length+1;
  }

  let operacionesEntrada = JSON.parse(localStorage.getItem("operacionesEntrada"));
  operacionesEntrada.push(compraFinal);
  localStorage.setItem("operacionesEntrada", JSON.stringify(operacionesEntrada));

  let catalogoCategoriasProductos = JSON.parse(localStorage.getItem("catalogoCategoriasProductos"));
  arregloCompra.forEach((compraIndividualActual, indiceActual) => {
    let categoriaEncontrada = catalogoCategoriasProductos.find(element => element.nombreCategoria==compraIndividualActual.categoria);
    let productoEncontrado = categoriaEncontrada.productos.find(element => element.nombre==compraIndividualActual.producto);
    productoEncontrado.unidades+= compraIndividualActual.cantidad;
  });
  localStorage.setItem("catalogoCategoriasProductos", JSON.stringify(catalogoCategoriasProductos)); 
  window.location.href = "home.html";
}
