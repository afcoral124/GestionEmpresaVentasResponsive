//Inicializando variables en LocalStorage-------------
if(localStorage.getItem('catalogoCategoriasProductos')===null){
  //creo los arreglos que van a actuar como el "valor" de las parejas clave-valor
  var catalogoClientes = [];
  var catalogoProveedores = [];
  var catalogoCategoriasProductos = [];
  

  //----------------Creando clientes:------------------------------------------
  var cliente1 = {
    nombre:"Popeye",
    apellido:"Perez",
    direccion:"Calle 9 #9-9",
    email:"popeye@gmail.com",
    telefono:"+5799999999"
  };
  var cliente2 = {
    nombre:"Juanito",
    apellido:"Juarez",
    direccion:"Calle 1 #1-1",
    email:"juanito@gmail.com",
    telefono:"+57111111111"
  };
  var cliente3 = {
    nombre:"Roberto",
    apellido:"Rodriguez",
    direccion:"Calle 4 #4-4",
    email:"roberto@gmail.com",
    telefono:"+57444444444"
  };
  //Metiendo los clientes al arreglo vacío que se creó
  catalogoClientes.push(cliente1,cliente2,cliente3);
  //Creando la pareja clave-valor en el localStorage, guardando el arreglo de clientes
  localStorage.setItem('catalogoClientes',JSON.stringify(catalogoClientes));

  //--------------------Creando Proveedores-------------------------------------
  var proveedor1 = {
    nombre:"Fernando",
    apellido:"Fernandez",
    direccion:"Calle 7 #7-7",
    email:"fernando@gmail.com",
    telefono:"+5777777777777"
  };

  var proveedor2 = {
    nombre:"Ernesto",
    apellido:"Hernandez",
    direccion:"Calle 3 #3-3",
    email:"ernesto@gmail.com",
    telefono:"+573333333333"
  };
  //Metiendo los proveedores al arreglo vacío que se creó
  catalogoProveedores.push(proveedor1,proveedor2);
  //Creando la pareja clave-valor en el localStorage, guardando el arreglo de proveedores
  localStorage.setItem('catalogoProveedores',JSON.stringify(catalogoProveedores));

  //----------------creando catalogo de Categorías de Productos-----------------
  //objetos que irán dentro del arreglo principal, tendrán 2 parámetros: el nombre de la categoría y un arreglo interno de productos inicialmente vacío
  var categoria1 = {
    nombreCategoria:"Televisores",
    productos:[]
  };
  var categoria2 = {
    nombreCategoria: "Celulares",
    productos: []
  }
  var categoria3 = {
    nombreCategoria: "Computadores",
    productos:[]
  }
  //insertando los objetos creados al arreglo animes
  catalogoCategoriasProductos.push(categoria1,categoria2,categoria3);
  //Creando los productos que van a ir dentro de los arreglos internos de productos para cada categoria
  //Los Televisores
  var televisores1 = {
    codigo:"0001",
    nombre:"SmartTV Samsung serie 3X",
    categoria:"Televisores",
    ubicacion:"bodega",
    descripcion:"SmarTV de 49 pulgadas con base incluida y control inteligente",
    precioEntradas:1000000,
    precioSalidas:1200000,
    unidades:5,
    presentacion:"Caja",
    cantidadInicialDisponibleInventario:5,
    cantidadMinimaDisponibleInventario:3,
    Imagen:"../imagenes/samsung.png"
  };

  var televisores2 = {
    codigo:"0002",
    nombre:"TV LG Classic",
    categoria:"Televisores",
    ubicacion:"vitrina",
    descripcion:"TV de 32 pulgadas HD",
    precioEntradas:600000,
    precioSalidas:800000,
    unidades:10,
    presentacion:"Caja",
    cantidadInicialDisponibleInventario:5,
    cantidadMinimaDisponibleInventario:3,
    Imagen:"../imagenes/lg.png"
  };

  var televisores3 = {
    codigo:"0003",
    nombre:"smartTV Hyundai 35jl",
    categoria:"Televisores",
    ubicacion:"bodega",
    descripcion:"smartTV 42 pulgadas sonido envolvente",
    precioEntradas:900000,
    precioSalidas:1000000,
    unidades:7,
    presentacion:"Caja",
    cantidadInicialDisponibleInventario:5,
    cantidadMinimaDisponibleInventario:3,
    Imagen:"../imagenes/hyundai.png"
  };
  //--------------

  //Los celulares
  var celulares1 = {
    codigo:"0004",
    nombre:"Xiaomi Redmi note 9",
    categoria:"Celulares",
    ubicacion:"vitrina",
    descripcion:"Xiaomi Redmi note 9 64 gb almacenamiento, 2gb RAM",
    precioEntradas:1000000,
    precioSalidas:1200000,
    unidades:5,
    presentacion:"Caja",
    cantidadInicialDisponibleInventario:5,
    cantidadMinimaDisponibleInventario:3,
    Imagen:"../imagenes/redminote9.png"
  };
  
  var celulares2 = {
    codigo:"0005",
    nombre:"Samsung Galaxy S21",
    categoria:"Celulares",
    ubicacion:"Bodega",
    descripcion:"Una pantalla Dynamic AMOLED de 6,8 pulgadas con resolución WQHD+ y una tasa de refresco máxima de 120 hercios",
    precioEntradas:3000000,
    precioSalidas:3500000,
    unidades:6,
    presentacion:"Caja",
    cantidadInicialDisponibleInventario:5,
    cantidadMinimaDisponibleInventario:3,
    Imagen:"../imagenes/galaxyS21.png"
  };

  var celulares3 = {
    codigo:"0006",
    nombre:"Motorola moto g9",
    categoria:"Celulares",
    ubicacion:"Vitrina",
    descripcion:"Con su sistema Quad Camera con sensor de 64 MP, Almacenamiento interno de 128 GB, Memoria RAM: 4GB",
    precioEntradas:700000,
    precioSalidas:800000,
    unidades:5,
    presentacion:"Caja",
    cantidadInicialDisponibleInventario:5,
    cantidadMinimaDisponibleInventario:3,
    Imagen:"../imagenes/motog9.png"
  };
  //--------------

  //Los Computadores

  var computadores1 = {
    codigo:"0007",
    nombre:"Asus x455L",
    categoria:"Computadores",
    ubicacion:"Bodega",
    descripcion:"(1TB de almacenamiento HDD, 8GB de RAM, Procesador intel core i5 5500 2GHZ, Tarjeta de video NVIDIA Gforce 920m",
    precioEntradas:1500000,
    precioSalidas:1700000,
    unidades:5,
    presentacion:"Caja",
    cantidadInicialDisponibleInventario:5,
    cantidadMinimaDisponibleInventario:3,
    Imagen:"../imagenes/asus.png"
  };

  var computadores2 = {
    codigo:"0008",
    nombre:"Acer TY300",
    categoria:"Computadores",
    ubicacion:"Vitrina",
    descripcion:"250GB de almacenamiento SDD, 12GB de RAM, Procesador AMD5, Raedon graphics",
    precioEntradas:1900000,
    precioSalidas:2100000,
    unidades:7,
    presentacion:"Caja",
    cantidadInicialDisponibleInventario:5,
    cantidadMinimaDisponibleInventario:3,
    Imagen:"../imagenes/acer.png"
  };
  //-------------
  
  //Ahora lo que sigue es introducir estos objetos de productos, dentro de los arreglos internos de cada categoria, pero hay que recordar que cada categoria está almacenado en el arreglo "catalogoCategoriasProductos", lo que se muestra a continuación es una forma de buscar dentro del arreglo "catalogoCategoriasProductos" al objeto que cumpla la condición que se establezca, en este caso se evalua el nombre de la categoria.

  var categoriaEncontrada = catalogoCategoriasProductos.find(element => element.nombreCategoria=="Televisores");
  categoriaEncontrada.productos.push(televisores1,televisores2,televisores3);

  //En este caso que acaba de ocurrir, la variable categoriaEncontrada equivale a catalogoCategoriasProductos[0], y están directamente conectados, es decir, lo que se modifique en la variable categoriaEncontrada, se modificará en catalogoCategoriasProductos[0], por ese motivo, los objetos de producto televisores1, televisores 2 y televisores 3 quedan guardados en catalogoCategoriasProductos[0] que corresponde a Televisores.

  categoriaEncontrada = catalogoCategoriasProductos.find(element => element.nombreCategoria=="Celulares");
  categoriaEncontrada.productos.push(celulares1,celulares2,celulares3);

  categoriaEncontrada = catalogoCategoriasProductos.find(element => element.nombreCategoria=="Computadores");
  categoriaEncontrada.productos.push(computadores1,computadores2);

  localStorage.setItem('catalogoCategoriasProductos',JSON.stringify(catalogoCategoriasProductos));

  //------------------------------------------------------------------------------------------
  //INICIALIZAR AQUÍ LA CLAVE VALOR PARA LAS OPERACIONES DE ENTRADA
  if(localStorage.getItem("operacionesEntrada")==null){
    let operacionesEntrada = [];
    //COMPRA DE TELEVISORES
    let compraFinal1={
      numeroCompra:1,
      proveedor:"Fernando Fernandez",
      productos:[],
      total:16600000,
      fecha:1626359134000
    };
    let compraIndividualTV1 = {
      categoria:"Televisores",
      producto:"SmartTV Samsung serie 3X",
      cantidad:5
    };
    let compraIndividualTV2 = {
      categoria:"Televisores",
      producto:"TV LG Classic",
      cantidad:10
    };
    let compraIndividualTV3 = {
      categoria:"Televisores",
      producto:"smartTV Hyundai 35jl",
      cantidad:7
    };
    compraFinal1.productos.push(compraIndividualTV1,compraIndividualTV2,compraIndividualTV3);
     
    //COMPRA DE CELULARES
    let compraFinal2={
      numeroCompra:2,
      proveedor:"Ernesto Hernandez",
      productos:[],
      total:26500000,
      fecha:1626446786000
    };
    let compraIndividualCel1 = {
      categoria:"Celulares",
      producto:"Xiaomi Redmi note 9",
      cantidad:5
    };
    let compraIndividualCel2 = {
      categoria:"Celulares",
      producto:"Samsung Galaxy S21",
      cantidad:6
    };
    let compraIndividualCel3 = {
      categoria:"Celulares",
      producto:"Motorola moto g9",
      cantidad:5
    };
    compraFinal2.productos.push(compraIndividualCel1,compraIndividualCel2,compraIndividualCel3);

    //COMPRA DE COMPUTADORES
    let compraFinal3={
      numeroCompra:3,
      proveedor:"Ernesto Hernandez",
      productos:[],
      total:20800000,
      fecha:1626535014000
    };
    let compraIndividualPc1 = {
      categoria:"Computadores",
      producto:"Asus x455L",
      cantidad:5
    };
    let compraIndividualPc2 = {
      categoria:"Computadores",
      producto:"Acer TY300",
      cantidad:7
    };
    compraFinal3.productos.push(compraIndividualPc1,compraIndividualPc2);
    
    //METIENDO LAS COMPRAS EN OPERACIONES DE ENTRADA
    operacionesEntrada.push(compraFinal1,compraFinal2,compraFinal3);
    localStorage.setItem("operacionesEntrada", JSON.stringify(operacionesEntrada));
  }

}

//---------------------------------------------------------------------------------
//BOTONES PARA IMPRIMIR EN PANTALLA LA INFORMACIÓN
//Boton de Clientes
var botonClientes = document.getElementById('botonClientes');
botonClientes.addEventListener("click",imprimirClientes);

function imprimirClientes(){
  //arreglo de clientes
  var catalogoClientes= JSON.parse(localStorage.getItem('catalogoClientes'));
  document.getElementById('contenedorInformacion').innerHTML=" ";

  catalogoClientes.forEach( (clienteActual,indiceActual) => {

    document.getElementById('contenedorInformacion').innerHTML+=
    `
    <div class="itemInformacion">
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
    `;

  });

  document.getElementById('botonClientes').classList.add("itemSeleccionado");
  document.getElementById('botonProveedores').classList.remove("itemSeleccionado");
  document.getElementById('botonCategoriasDeProductos').classList.remove("itemSeleccionado");

}

//Boton de Proveedores
var botonProveedores = document.getElementById('botonProveedores');
botonProveedores.addEventListener("click",imprimirProveedores);

function imprimirProveedores(){
  var catalogoProveedores= JSON.parse(localStorage.getItem('catalogoProveedores'));
  document.getElementById('contenedorInformacion').innerHTML=" ";

  catalogoProveedores.forEach( (proveedorActual,indiceActual) => {
    document.getElementById('contenedorInformacion').innerHTML+=
    `
    <div class="itemInformacion">
            <div class="titulo">
              <h2>${proveedorActual.nombre} ${proveedorActual.apellido}</h2>
            </div>
            <div class="descripcion">
              <ul>
                <li>Dirección: ${proveedorActual.direccion}</li>
                <li>Email: ${proveedorActual.email}</li>
                <li>Telefono: ${proveedorActual.telefono}</li>
              </ul>
              </div>
      </div>
    `;

  });

  document.getElementById('botonClientes').classList.remove("itemSeleccionado");
  document.getElementById('botonProveedores').classList.add("itemSeleccionado");
  document.getElementById('botonCategoriasDeProductos').classList.remove("itemSeleccionado");

}

//Boton de Categorías de productos
let botonCategoriasProductos = document.getElementById('botonCategoriasDeProductos');
botonCategoriasProductos.addEventListener("click", imprimirCategoriasProductos);

function imprimirCategoriasProductos(){
  var catalogoCategoriasProductos= JSON.parse(localStorage.getItem('catalogoCategoriasProductos'));
  document.getElementById('contenedorInformacion').innerHTML=" ";

  catalogoCategoriasProductos.forEach( (categoriaActual,indiceActual) => {
    let txt = "";
    for (let x in categoriaActual.productos) {
      txt += categoriaActual.productos[x].nombre + ", cantidad: "+categoriaActual.productos[x].unidades + "<br>";
    }

    document.getElementById('contenedorInformacion').innerHTML+=
    `
    <div class="itemInformacion">
            <div class="titulo">
              <h2>${categoriaActual.nombreCategoria}</h2>
            </div>
            <div class="descripcion">
                ${txt}
              </div>
      </div>
    `;

  });
  document.getElementById('botonClientes').classList.remove("itemSeleccionado");
  document.getElementById('botonProveedores').classList.remove("itemSeleccionado");
  document.getElementById('botonCategoriasDeProductos').classList.add("itemSeleccionado");
}

document.addEventListener('DOMContentLoaded', function () {
  imprimirCategoriasProductos();
  verificarAbastecimiento();
});

function verificarAbastecimiento(){
  //arreglo de categorías
  let catalogoCategoriasProductos = JSON.parse(localStorage.getItem('catalogoCategoriasProductos'));
  let productosEscasos= [];
  let txt="";
  catalogoCategoriasProductos.forEach((categoriaActual, indiceActual) => {
    for (const x in categoriaActual.productos) {
      //Si unidades <= cantidad minima
      if (categoriaActual.productos[x].unidades<=categoriaActual.productos[x].cantidadMinimaDisponibleInventario) {

         txt+="<tr>"+"<td>"+categoriaActual.productos[x].nombre+"</td>"+"<td>"+categoriaActual.productos[x].unidades+"</td>"+"<td>"+categoriaActual.productos[x].cantidadMinimaDisponibleInventario+"</td>"+"</tr>";

      }
    }
  });
  if(txt==""){
    txt=`<tr><td colspan="3">No hay productos escasos.</td></tr>`;
  }
  document.getElementById('tabla1').innerHTML=" ";
  document.getElementById('tabla1').innerHTML=
  `<table>
       <tr>
         <th scope="col">Productos</th>
         <th scope="col">Cantidad</th>
         <th scope="col">Umbral Minimo</th>
       </tr>
       ${txt}
     </table>
 `;


}
