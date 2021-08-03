document.addEventListener("DOMContentLoaded", function () {

  imprimirCategorias();

});

function imprimirCategorias () {
  let catalogoCategoriasProductos = JSON.parse(localStorage.getItem("catalogoCategoriasProductos"));
  document.getElementById('contenedorInformacion').innerHTML=" ";

    catalogoCategoriasProductos.forEach( (categoriaActual, indiceCategoriaActual) => {
      let txt = "";
      for (let x in categoriaActual.productos) {
        txt += `
                <div class="itemInformacion producto">
                      <div class="parteIzquierdaitemInformacion">
                        <div class="tituloProducto">
                          <h2> ${categoriaActual.productos[x].nombre}</h2>
                        </div>
                        <div class="descripcionProducto">
                          <ul>
                            <li>Ubicacion: ${categoriaActual.productos[x].ubicacion}</li>
                            <li>Precio: ${categoriaActual.productos[x].precioSalidas}</li>
                            <li>Unidades: ${categoriaActual.productos[x].unidades}</li>
                          </ul>
                        </div>
                      </div>
                      <div class="parteDerechaitemInformacion">
                        <div>
                            <a class="botonModProducto" onclick="abrirPopupModificarProducto(${indiceCategoriaActual},${x})"><img class="imgModificar" src="../imagenes/lapiz.png" alt="Modificar" title="Modificar"></a>
                        </div>
                        <div>
                        <a class="botonElimiProducto" onclick="eliminarProducto(${indiceCategoriaActual},${x})"><img class="imgEliminar" src="../imagenes/eliminar.png" alt="Eliminar" title="Eliminar"></a>
                        </div>
                      </div>
                </div>
                `;
      }
    document.getElementById('contenedorInformacion').innerHTML+=
    `
    <div class="itemInformacion categoria">
          <div class="parteIzquierdaitemInformacion">
            <div class="titulo">
              <h2 class="titulocategoria">${categoriaActual.nombreCategoria}</h2>
            </div>
          </div>

          <div class="parteDerechaitemInformacion">

            <div>
              <a class="botonModificar"  onclick="abrirPopupModificarCategoria(${indiceCategoriaActual})"><img class="imgModificar" src="../imagenes/lapiz.png" alt="Modificar Categoría" title="Modificar Categoría"></a>
            </div>
            <div>
              <a class="botonEliminar"  onclick="eliminarCategoria(${indiceCategoriaActual})"><img class="imgEliminar" src="../imagenes/eliminar.png" alt="Eliminar Categoría" title="Eliminar Categoría"></a>
            </div>
          </div>
          <div class="productos">
          ${txt}
          </div>
          <div class="contenedor-boton-agregar">
              <a class="botonAgregar" onclick="abrirPopupAgregarProducto(${indiceCategoriaActual})"><i class="fa fa-plus"></i></a>
          </div>
    </div>
    `;
  });
}


const overlayModificarCategoria = document.getElementById("overlay-mod-categoria");
const popupModificarCategoria = document.getElementById("popup-mod-categoria");
const overlayModificarProducto = document.getElementById("overlay-mod-productos");
const popupModificarProducto = document.getElementById("popup-mod-productos");


function abrirPopupModificarCategoria(indiceCategoriaActual) {
  overlayModificarCategoria.classList.add("active");
  popupModificarCategoria.classList.add("active");
  var catalogoCategoriasProductos = JSON.parse(localStorage.getItem("catalogoCategoriasProductos"));
  document.getElementById("nombreCategoriaMod").value = catalogoCategoriasProductos[indiceCategoriaActual].nombreCategoria;
  localStorage.setItem("indiceParaModificar",indiceCategoriaActual);
  document.getElementById("btn-submit-mod-categoria").value="Modificar Categoría";
}

function abrirPopupAgregarCategoria() {
  overlayModificarCategoria.classList.add("active");
  popupModificarCategoria.classList.add("active");
  document.getElementById("nombreCategoriaMod").value="";
  document.getElementById("btn-submit-mod-categoria").value="Agregar Categoría";
}

function cerrarPopup(){
  overlayModificarCategoria.classList.remove("active");
  popupModificarCategoria.classList.remove("active");
}



function eliminarCategoria(indiceCategoriaActual){
  var catalogoCategoriasProductos = JSON.parse(localStorage.getItem("catalogoCategoriasProductos"));
  catalogoCategoriasProductos.splice(indiceCategoriaActual,1);
  localStorage.setItem("catalogoCategoriasProductos", JSON.stringify(catalogoCategoriasProductos));
  imprimirCategorias();
}

function verificarAccion(){
  if(document.getElementById("btn-submit-mod-categoria").value=="Modificar Categoría"){
    return modificarCategoria();
  }
  if(document.getElementById("btn-submit-mod-categoria").value=="Agregar Categoría"){
    return agregarCategoria();
  }
}


function agregarCategoria(){
  var catalogoCategoriasProductos = JSON.parse(localStorage.getItem("catalogoCategoriasProductos"));
  var categoriaNueva = {
    nombreCategoria:"",
    productos:[]
  }

  if(document.getElementById("nombreCategoriaMod").value==""){
    return false;
  }
  categoriaNueva.nombreCategoria = document.getElementById("nombreCategoriaMod").value;
  catalogoCategoriasProductos.push(categoriaNueva);
  localStorage.setItem("catalogoCategoriasProductos",JSON.stringify(catalogoCategoriasProductos));
  return true;
}

function modificarCategoria(){
  var catalogoCategoriasProductos = JSON.parse(localStorage.getItem("catalogoCategoriasProductos"));
  var indiceParaModificar = localStorage.getItem("indiceParaModificar");

  if(document.getElementById("nombreCategoriaMod").value==""){
    return false;
  }

  catalogoCategoriasProductos[indiceParaModificar].nombreCategoria = document.getElementById("nombreCategoriaMod").value;
  localStorage.setItem("catalogoCategoriasProductos", JSON.stringify(catalogoCategoriasProductos));

  return true;
}



//-----------------------------------Funciones---popupProductos------------------------------------------------------



function abrirPopupModificarProducto(indiceCategoriaActual, indiceProductoActual) {
  overlayModificarProducto.classList.add("active");
  popupModificarProducto.classList.add("active");
  var catalogoCategoriasProductos = JSON.parse(localStorage.getItem("catalogoCategoriasProductos"));
  document.getElementById("codigo").value = catalogoCategoriasProductos[indiceCategoriaActual].productos[indiceProductoActual].codigo;
  document.getElementById("nombre").value = catalogoCategoriasProductos[indiceCategoriaActual].productos[indiceProductoActual].nombre;
  document.getElementById("categoria").value = catalogoCategoriasProductos[indiceCategoriaActual].productos[indiceProductoActual].categoria;
  document.getElementById("ubicacion").value = catalogoCategoriasProductos[indiceCategoriaActual].productos[indiceProductoActual].ubicacion;
  document.getElementById("descripcion").value = catalogoCategoriasProductos[indiceCategoriaActual].productos[indiceProductoActual].descripcion;
  document.getElementById("precioEntradas").value = catalogoCategoriasProductos[indiceCategoriaActual].productos[indiceProductoActual].precioEntradas;
  document.getElementById("precioSalidas").value = catalogoCategoriasProductos[indiceCategoriaActual].productos[indiceProductoActual].precioSalidas;
  document.getElementById("unidades").value = catalogoCategoriasProductos[indiceCategoriaActual].productos[indiceProductoActual].unidades;
  document.getElementById("presentacion").value = catalogoCategoriasProductos[indiceCategoriaActual].productos[indiceProductoActual].presentacion;
  document.getElementById("cantidadInicialDisponibleInventario").value = catalogoCategoriasProductos[indiceCategoriaActual].productos[indiceProductoActual].cantidadInicialDisponibleInventario;
  document.getElementById("cantidadMinimaDisponibleInventario").value = catalogoCategoriasProductos[indiceCategoriaActual].productos[indiceProductoActual].cantidadMinimaDisponibleInventario;
  document.getElementById("imagen").value =  catalogoCategoriasProductos[indiceCategoriaActual].productos[indiceProductoActual].Imagen;
  let indices = [indiceCategoriaActual, indiceProductoActual];
  localStorage.setItem("indiceParaModificarProductos",indices);
  let imgProducto = catalogoCategoriasProductos[indiceCategoriaActual].productos[indiceProductoActual].Imagen;
  document.getElementById("imgProducto").src=imgProducto;
  document.getElementById("btn-submit-mod-producto").value="Modificar Producto";

}

function abrirPopupAgregarProducto(indiceCategoriaActual) {
  overlayModificarProducto.classList.add("active");
  popupModificarProducto.classList.add("active");
  let catalogoCategoriasProductos = JSON.parse(localStorage.getItem("catalogoCategoriasProductos"));
  document.getElementById("codigo").value ="";
  document.getElementById("nombre").value ="";
  document.getElementById("categoria").value = catalogoCategoriasProductos[indiceCategoriaActual].nombreCategoria;
  document.getElementById("ubicacion").value ="";
  document.getElementById("descripcion").value ="";
  document.getElementById("precioEntradas").value ="";
  document.getElementById("precioSalidas").value ="";
  document.getElementById("unidades").value ="";
  document.getElementById("presentacion").value ="";
  document.getElementById("cantidadInicialDisponibleInventario").value ="";
  document.getElementById("cantidadMinimaDisponibleInventario").value ="";
  document.getElementById("imagen").value ="";
  document.getElementById("btn-submit-mod-producto").value="Agregar Producto";
  localStorage.setItem("indiceParaModificar", indiceCategoriaActual);
}

function cerrarPopupProducto(){
  overlayModificarProducto.classList.remove("active");
  popupModificarProducto.classList.remove("active");
  
}

function eliminarProducto(indiceCategoriaActual, indiceProductoActual){
  var catalogoCategoriasProductos = JSON.parse(localStorage.getItem("catalogoCategoriasProductos"));
  catalogoCategoriasProductos[indiceCategoriaActual].productos.splice(indiceProductoActual,1);
  localStorage.setItem("catalogoCategoriasProductos", JSON.stringify(catalogoCategoriasProductos));
  imprimirCategorias();
}

function verificarAccionProducto(){
  if(document.getElementById("btn-submit-mod-producto").value=="Modificar Producto"){
    return modificarProducto();
  }
  else{
    return agregarProducto();
  }
}

function agregarImagen(){
  let selector = document.getElementById("selectorImagen").files; // selecciona la lista de objetos del input
  document.getElementById("imagen").value="../imagenes/"+selector[0].name;
  document.getElementById("imgProducto").src="../imagenes/"+selector[0].name;
  
}

function agregarProducto(){
  var catalogoCategoriasProductos = JSON.parse(localStorage.getItem("catalogoCategoriasProductos"));
  var productoNuevo = {
    codigo:"",
    nombre:"",
    categoria:"",
    ubicacion:"",
    descripcion:"",
    precioEntradas:0,
    precioSalidas:0,
    unidades:0,
    presentacion:"",
    cantidadInicialDisponibleInventario:0,
    cantidadMinimaDisponibleInventario:0,
    Imagen:""
  };


  if((document.getElementById("presentacion").value=="")||(document.getElementById("codigo").value=="")||(document.getElementById("nombre").value=="")||(document.getElementById("categoria").value=="")||(document.getElementById("ubicacion").value=="")||(document.getElementById("descripcion").value=="")||(document.getElementById("precioEntradas").value=="")||(document.getElementById("precioSalidas").value=="")||(document.getElementById("unidades").value=="")||(document.getElementById("cantidadInicialDisponibleInventario").value=="")||(document.getElementById("cantidadMinimaDisponibleInventario").value=="")||(document.getElementById("imagen").value=="")){
    return false;
  }

  productoNuevo.codigo =document.getElementById("codigo").value;
  productoNuevo.nombre =document.getElementById("nombre").value;
  productoNuevo.categoria =document.getElementById("categoria").value;
  productoNuevo.ubicacion =document.getElementById("ubicacion").value;
  productoNuevo.descripcion =document.getElementById("descripcion").value;
  productoNuevo.precioEntradas =parseInt(document.getElementById("precioEntradas").value,10);
  productoNuevo.precioSalidas =parseInt(document.getElementById("precioSalidas").value,10);
  productoNuevo.unidades =parseInt(document.getElementById("unidades").value,10);
  productoNuevo.presentacion =document.getElementById("presentacion").value;
  productoNuevo.cantidadInicialDisponibleInventario =parseInt(document.getElementById("cantidadInicialDisponibleInventario").value,10);
  productoNuevo.cantidadMinimaDisponibleInventario =parseInt(document.getElementById("cantidadMinimaDisponibleInventario").value,10);
  productoNuevo.Imagen = document.getElementById("imagen").value;



  let indiceCategoriaActual = localStorage.getItem("indiceParaModificar");
  catalogoCategoriasProductos[indiceCategoriaActual].productos.push(productoNuevo);
  localStorage.setItem("catalogoCategoriasProductos",JSON.stringify(catalogoCategoriasProductos));
  return true;
}

function modificarProducto(){
  let catalogoCategoriasProductos = JSON.parse(localStorage.getItem("catalogoCategoriasProductos"));
  let indiceParaModificar = localStorage.getItem("indiceParaModificarProductos");
  let indiceParaModificarCategoria = indiceParaModificar[0];
  let indiceParaModificarProductos = indiceParaModificar[2];

  if((document.getElementById("codigo").value=="")||(document.getElementById("nombre").value=="")||(document.getElementById("categoria").value=="")||(document.getElementById("ubicacion").value=="")||(document.getElementById("descripcion").value=="")||(document.getElementById("precioEntradas").value=="")||(document.getElementById("precioSalidas").value=="")||(document.getElementById("unidades").value=="")||(document.getElementById("cantidadInicialDisponibleInventario").value=="")||(document.getElementById("cantidadMinimaDisponibleInventario").value=="")||(document.getElementById("imagen").value=="")){
    return false;
  }

  catalogoCategoriasProductos[indiceParaModificarCategoria].productos[indiceParaModificarProductos].codigo = document.getElementById("codigo").value;
  catalogoCategoriasProductos[indiceParaModificarCategoria].productos[indiceParaModificarProductos].nombre = document.getElementById("nombre").value;
  catalogoCategoriasProductos[indiceParaModificarCategoria].productos[indiceParaModificarProductos].categoria = document.getElementById("categoria").value;
  catalogoCategoriasProductos[indiceParaModificarCategoria].productos[indiceParaModificarProductos].ubicacion = document.getElementById("ubicacion").value;
  catalogoCategoriasProductos[indiceParaModificarCategoria].productos[indiceParaModificarProductos].descripcion = document.getElementById("descripcion").value;
  catalogoCategoriasProductos[indiceParaModificarCategoria].productos[indiceParaModificarProductos].precioEntradas = parseInt(document.getElementById("precioEntradas").value, 10);
  catalogoCategoriasProductos[indiceParaModificarCategoria].productos[indiceParaModificarProductos].precioSalidas = parseInt(document.getElementById("precioSalidas").value,10);
  catalogoCategoriasProductos[indiceParaModificarCategoria].productos[indiceParaModificarProductos].unidades = parseInt(document.getElementById("unidades").value,10);
  catalogoCategoriasProductos[indiceParaModificarCategoria].productos[indiceParaModificarProductos].presentacion = document.getElementById("presentacion").value;
  catalogoCategoriasProductos[indiceParaModificarCategoria].productos[indiceParaModificarProductos].cantidadInicialDisponibleInventario = parseInt(document.getElementById("cantidadInicialDisponibleInventario").value,10);
  catalogoCategoriasProductos[indiceParaModificarCategoria].productos[indiceParaModificarProductos].cantidadMinimaDisponibleInventario = parseInt(document.getElementById("cantidadMinimaDisponibleInventario").value,10);
  catalogoCategoriasProductos[indiceParaModificarCategoria].productos[indiceParaModificarProductos].Imagen =document.getElementById("imagen").value;
  localStorage.setItem("catalogoCategoriasProductos", JSON.stringify(catalogoCategoriasProductos));

  return true;
}
