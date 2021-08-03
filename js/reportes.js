const fechaInicial = document.getElementById("fechaInicial");
const fechaFinal = document.getElementById("fechaFinal");
let contenedor1 = document.getElementById("contenedorInformacion1");
let contenedor2 = document.getElementById("contenedorInformacion2");
let contenedor3 = document.getElementById("contenedorInformacion3");
let contenedor4 = document.getElementById("contenedorInformacion4");
let listaReportes = document.getElementById("reporte");

document.addEventListener("DOMContentLoaded", function () {

    
  
  });

  function buscarPorFechas(){
      let fechaInicialEscogida = Date.parse(fechaInicial.value);
      let fechaFinalEscogida = Date.parse(fechaFinal.value);
      let operacionesSalida = JSON.parse(localStorage.getItem("operacionesSalida"));
      let operacionesEntrada = JSON.parse(localStorage.getItem("operacionesEntrada"));
      let catalogoCategoriasProductos = JSON.parse(localStorage.getItem("catalogoCategoriasProductos"));
      let reporteEscogido = listaReportes.value;
      
      switch (reporteEscogido) {
        case "1": //--------------------------------------------reporte de inventario----------------------------
          let productosEntrada = [];
          let productosSalida = [];
          let productoAuxiliar = {
            nombre:"",
            cantidad:"",
            fecha:""
          };
          //Operaciones de Entrada
          operacionesEntrada.forEach((operacionEntradaActual, indiceOperacionActual) => {
            if(fechaInicialEscogida <= operacionEntradaActual.fecha && operacionEntradaActual.fecha <= fechaFinalEscogida) {
              operacionEntradaActual.productos.forEach((productoActual, indiceProductoActual) => {
                productoAuxiliar = {
                  nombre:"",
                  cantidad:"",
                  fecha:""
                };
                productoAuxiliar.nombre = productoActual.producto;
                productoAuxiliar.cantidad = productoActual.cantidad;
                productoAuxiliar.fecha = operacionEntradaActual.fecha;
                productosEntrada.push(productoAuxiliar);
              });   
            }
          });  
          imprimirOperacionesEntrada(productosEntrada);

          //Operaciones de Salida           
          operacionesSalida.forEach((operacionSalidaActual, indiceActual) => {
            if(fechaInicialEscogida <= operacionSalidaActual.fecha && operacionSalidaActual.fecha <= fechaFinalEscogida) {
              if(operacionSalidaActual.estado=="Terminado"){
                operacionSalidaActual.productos.forEach((productoActual, indiceProductoActual) => {
                  productoAuxiliar = {
                    nombre:"",
                    cantidad:"",
                    fecha:""
                  };
                  productoAuxiliar.nombre = productoActual.producto;
                  productoAuxiliar.cantidad = productoActual.cantidad;
                  productoAuxiliar.fecha = operacionSalidaActual.fecha;
                  productosSalida.push(productoAuxiliar);
                }); 
              }
            }           
          });
          imprimirOperacionesSalida(productosSalida);
          break; //----------------------------------------------------------------------------------------------
      

        case "2": //reporte ventas y compras totales
        let arregloComprasVentas = [];
        let objetoAuxiliar = {
          producto:"",
          cantidadEntrada:0,
          precioEntrada:0,
          subtotalEntrada:0,
          cantidadSalida:0,
          precioSalida:0,
          subtotalSalida:0
        };
          //Accedemos a las categorias
          catalogoCategoriasProductos.forEach(categoriaActual => {
            //Recorremos cada producto
            categoriaActual.productos.forEach(productoActual => {
              //Recorremos cada operacion de entrada
              let objetoAuxiliar = {
                producto:"",
                cantidadEntrada:0,
                precioEntrada:0,
                subtotalEntrada:0,
                cantidadSalida:0,
                precioSalida:0,
                subtotalSalida:0
              };
              objetoAuxiliar.producto = productoActual.nombre;
              objetoAuxiliar.precioEntrada = productoActual.precioEntradas;
              objetoAuxiliar.precioSalida = productoActual.precioSalidas;
              arregloComprasVentas.push(objetoAuxiliar);           
            });
          });
          //El arreglo de la tabla fué creado, ya toca llenarlo:
          

          arregloComprasVentas.forEach( productoArreglo => {
            
            //Obtener las cantidades de entrada
            operacionesEntrada.forEach(compraActual => {
              if(fechaInicialEscogida <= compraActual.fecha && compraActual.fecha <= fechaFinalEscogida) {
                compraActual.productos.forEach(productoActual => {
                  if(productoActual.producto == productoArreglo.producto){
                    productoArreglo.cantidadEntrada += productoActual.cantidad;
                  }
                });
              }
            });
            // obtener las cantidades de salida
            operacionesSalida.forEach(ventaActual => {
              if(fechaInicialEscogida <= ventaActual.fecha && ventaActual.fecha <= fechaFinalEscogida) {
                if(ventaActual.estado=="Terminado"){
                  ventaActual.productos.forEach(productoActual => {
                    if (productoActual.producto == productoArreglo.producto ) {
                          productoArreglo.cantidadSalida+=productoActual.cantidad;          
                    }
                  });
                }return;
              }
            });
            
            //Multiplicar las cantidades que entraron y salieron, por los respectivos precios de entrada y salida, para generar los subtotales
            productoArreglo.subtotalEntrada = productoArreglo.cantidadEntrada * productoArreglo.precioEntrada;
            productoArreglo.subtotalSalida = productoArreglo.cantidadSalida * productoArreglo.precioSalida;
          });
          imprimirComprasVentas(arregloComprasVentas);
          break;

        case "3": //reporte de ordenes
          let arregloOrdenes = [];
          //se evalua cada elemeto del arreglo
          operacionesSalida.forEach((operacionSalidaActual, indiceActual) => {
            //condicion de rango de las fechas escogidas
            if(fechaInicialEscogida <= operacionSalidaActual.fecha && operacionSalidaActual.fecha <= fechaFinalEscogida) {
              //si esta dentro de las fechas, se agrega en el arreglo de interés
              arregloOrdenes.push(operacionSalidaActual);
            }
          });
          imprimirOrdenes(arregloOrdenes);
          break;
        

        default : //cuando no se ha escogido ninguno de los 3 reportes
          imprimirError();
          
      }
  }
  
  function active(contenedor) {
    switch (contenedor) {
      case "1":
        contenedor1.classList.add("active");
        contenedor2.classList.add("active");
        contenedor3.classList.remove("active");
        contenedor4.classList.remove("active");
        break;

      case "2":
        contenedor1.classList.remove("active");
        contenedor2.classList.remove("active");
        contenedor3.classList.add("active");
        contenedor4.classList.remove("active");
        break;

      case "3":
        contenedor1.classList.remove("active");
        contenedor2.classList.remove("active");
        contenedor3.classList.remove("active");
        contenedor4.classList.add("active");
        break;
    
      default:
        
    }

    
  }

 
  function imprimirError(){
    contenedor1.classList.add("active");
    contenedor2.classList.remove("active");
    contenedor3.classList.remove("active");
    contenedor4.classList.remove("active");

    contenedor1.innerHTML="";
      contenedor1.innerHTML=
      `
      <h2 class="tituloContenedorInformacion">No ha seleccionado un tipo de reporte</h2>
      `;

  }

  function imprimirOperacionesEntrada (productosEntrada){
    active("1");
    if(productosEntrada.length==0){
      contenedor1.innerHTML="";
      contenedor1.innerHTML=
      `
      <h2 class="tituloContenedorInformacion">Operaciones de Entrada</h2>
      <div class="itemInformacion">
        <div class="parteIzquierdaitemInformacion">
          <div class="titulo">
            <h2>No hubo Operaciones de Entrada en el rango de fechas seleccionado </h2>
          </div>
        </div>
      </div>  
      `;
    }
    else{
      contenedor1.innerHTML="";
      contenedor1.innerHTML=`<h2 class="tituloContenedorInformacion">Operaciones de Entrada</h2>`; 
      productosEntrada.forEach((productoActual, indiceActual) => {
        let n = new Date(productoActual.fecha).toLocaleString();
        contenedor1.innerHTML+=
        `
        <div class="itemInformacion">

              <div class="parteIzquierdaitemInformacion">
                <div class="titulo">
                  <h2>${productoActual.nombre} </h2>
                </div>
                <div class="descripcion">
                  <ul>
                    <li>Cantidad: ${productoActual.cantidad}</li>
                    <li>Fecha: ${n}</li>
                  </ul>
                </div>
              </div>

        </div>
        `;
      });
    }
  }
  function imprimirOperacionesSalida (productosSalida){
    if(productosSalida.length==0){
      contenedor2.innerHTML="";
      contenedor2.innerHTML=
      `
      <h2 class="tituloContenedorInformacion">Operaciones de Salida</h2>
      <div class="itemInformacion">
        <div class="parteIzquierdaitemInformacion">
          <div class="titulo">
            <h2>No hubo Operaciones de Salida en el rango de fechas seleccionado </h2>
          </div>
        </div>
      </div>
      `; 
    }
    else{
      contenedor2.innerHTML="";
      contenedor2.innerHTML=`<h2 class="tituloContenedorInformacion">Operaciones de Salida</h2>`; 
      productosSalida.forEach((productoActual, indiceActual) => {
        let n = new Date(productoActual.fecha).toLocaleString();
        contenedor2.innerHTML+=
        `
        <div class="itemInformacion">

              <div class="parteIzquierdaitemInformacion">
                <div class="titulo">
                  <h2>${productoActual.nombre} </h2>
                </div>
                <div class="descripcion">
                  <ul>
                    <li>Cantidad: ${productoActual.cantidad}</li>
                    <li>Fecha: ${n}</li>
                  </ul>
                </div>
              </div>

        </div>
        `;
      });
    }
  }

  function imprimirComprasVentas (totalCompraVenta) {
    active("2");
    let txt="";
    let totalCompras=0;
    let totalVentas=0;
    totalCompraVenta.forEach(actual => {
      txt+=
      `
      <tr>
        <td>${actual.producto}</td> 
        <td>${actual.cantidadEntrada}</td>
        <td>${actual.subtotalEntrada}</td>
        <td>${actual.cantidadSalida}</td>
        <td>${actual.subtotalSalida}</td>
      </tr>
      `;
      totalCompras+=actual.subtotalEntrada;
      totalVentas+=actual.subtotalSalida;
    });

    contenedor3.innerHTML="";
    contenedor3.innerHTML=
    `
    <div class="tabla1" id="tabla1">
              
      <table summary="Reporte: Compras y Ventas Totales">
        <caption>Reporte: Compras y Ventas Totales</caption>
        <tr>
          <th scope="col">Producto</th>
          <th scope="col">Cantidad Entrada</th>
          <th scope="col">Subtotal Entrada</th>
          <th scope="col">Cantidad Salida</th>
          <th scope="col">Subtotal Salida</th> 
        </tr>
        ${txt}
        <tr>
          <td>TOTALES:</td>
          <td colspan="2">${totalCompras}</td>
          <td colspan="2">${totalVentas}</td>
        </tr>
      </table>
    </div> 
    `;
    
  }

  function imprimirOrdenes (ordenes) {
    active("3");
    if(ordenes.length==0){
      contenedor4.innerHTML="";
      contenedor4.innerHTML=
      `
      <h2 class="tituloContenedorInformacion">Ordenes</h2>
      <div class="itemInformacion">
        <div class="parteIzquierdaitemInformacion">
          <div class="titulo">
            <h2>No hubo Ordenes de Trabajo en el rango de fechas seleccionado</h2>
          </div>
        </div>
      </div>
      `;
    }
    else{
      contenedor4.innerHTML="";
      contenedor4.innerHTML=`<h2 class="tituloContenedorInformacion">Ordenes</h2>`;
      ordenes.forEach((ordenActual, indiceActual) => {
        let n = new Date(ordenActual.fecha).toLocaleString();
        contenedor4.innerHTML+=
        `
            <div class="itemInformacion">
              <div class="parteIzquierdaitemInformacion">
                <div class="titulo">
                  <h2>Orden: ${ordenActual.numeroVenta}</h2>
                </div>
                <div class="descripcion">
                  <h3>Estado: ${ordenActual.estado}</h3>
                  <h3>Cliente: ${ordenActual.cliente}</h3>
                  <h3>fecha: ${n}</h3>
                </div>
              </div>
            </div>
        `;
      }); 
    }
  }

  