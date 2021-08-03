const listaClientes = document.getElementById("clientes");
const contenedor = document.getElementById("contenedorInformacion");
const catalogoClientes = JSON.parse(localStorage.getItem("catalogoClientes"));

document.addEventListener("DOMContentLoaded", function () {

    llenarClientes();

});

function llenarClientes(){
    listaClientes.innerHTML="";
    listaClientes.innerHTML=`<option value="" selected="selected"> - selecciona -</option>`;
    catalogoClientes.forEach( (clienteActual, indiceActual) => {
        
        listaClientes.innerHTML+=
        `
        <option value="${indiceActual}">${clienteActual.nombre} ${clienteActual.apellido}</option>
        `;
    });
}

function imprimirOrdenes(){
    contenedor.innerHTML="";
    let txtCliente = listaClientes.options[listaClientes.selectedIndex].text;
    let operacionesSalida = JSON.parse(localStorage.getItem("operacionesSalida"));
    let txt = "";
    if(listaClientes.value==""){
        contenedor.innerHTML=
        `
            <div class="itemInformacion">
                <div class="parteIzquierdaitemInformacion">
                    <div class="titulo">
                        <h2>Seleccione un cliente correctamente</h2>
                    </div>
                </div>
            </div>
        `;
    }
    else{
        operacionesSalida.forEach((ordenActual, indiceActual) => {
            
            let fechaImprimible = new Date(ordenActual.fecha).toLocaleString();
            if(ordenActual.cliente==txtCliente){
                txt+= 
                `
                <div class="itemInformacion">
                    <div class="parteIzquierdaitemInformacion">
                        <div class="titulo">
                            <h2>Número de Orden: ${ordenActual.numeroVenta}</h2>
                        </div>
                        <div class="descripcion">
                            <ul>
                            <li>Estado: ${ordenActual.estado}</li>
                            <li>Cliente: ${ordenActual.cliente}</li>
                            <li>fecha: ${fechaImprimible}</li>
                            </ul>
                        </div>
                    </div>
                    
                `;
                
                if(ordenActual.estado=="Terminado"){
                    txt+=
                    `
                        <div class="parteDerechaitemInformacion">
                            <div>
                                <a class="botonEliminar" href="#" onclick="eliminarOrden(${indiceActual})"><img class="imgEliminar" src="../imagenes/eliminar.png" alt="Eliminar" title="Eliminar"></a>
                            </div>
                        </div>
                    </div>
                    `;
                }
                else{ // estado==EnProceso
                    txt+=
                    `
                        <div class="parteDerechaitemInformacion">
                            <div>
                                <a class="botonModificar" onclick="modificarOrden()"><img class="imgModificar" src="../imagenes/lapiz.png" alt="Modificar" title="Modificar"></a>
                            </div>
                            <div>
                                <a class="botonEliminar" href="#" onclick="eliminarOrden(${indiceActual})"><img class="imgEliminar" src="../imagenes/eliminar.png" alt="Eliminar" title="Eliminar"></a>
                            </div>
                        </div>
                    </div>
                    `;
                }
                contenedor.innerHTML+=txt; 
                txt="";   
            }  
        });
        if(contenedor.innerHTML==""){
            contenedor.innerHTML=
            `
                <div class="itemInformacion">
                    <div class="parteIzquierdaitemInformacion">
                        <div class="titulo">
                            <h2>Este cliente no tiene ordenes asociadas</h2>
                        </div>
                    </div>
                </div>
            `;
        }
    }
}

function eliminarOrden(indiceActual){
    let operacionesSalida = JSON.parse(localStorage.getItem("operacionesSalida"));
    operacionesSalida.splice(indiceActual,1);
    localStorage.setItem("operacionesSalida",JSON.stringify(operacionesSalida));
    imprimirOrdenes();
}

function modificarOrden(){
    localStorage.setItem("redireccionPorModificacionDeOrden",listaClientes.selectedIndex);
    window.location.href = "operacion_salida.html";
}