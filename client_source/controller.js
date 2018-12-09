//========//
//Datos de prueba usados para probar la interfaz mientras no haya
//conexión con el servidor

platos=["PIZZA","HAMBURGUER","HOTDOG","COKE","BEER"];

o = new Orden(1);
o.agregarPlato("PIZZA");
o.agregarPlato("PIZZA");

o2 = new Orden(8);
o2.agregarPlato("BEER");


//========//

//la orden actualmente seleccionada
ordenActual = undefined;

//número de mesa de la orden actualente seleccionada
idOrdenActual=-1;

//ordenes actualmente disponibles
ordenesDisponibles = {};


/**
 * Actualiza el conjunto de ordenes disponibles mostradas, consultando las mismas
 * en el servidor. La actualización se realiza de manera asíncrona con AJAX.
 * 
 */
actualizarOrdenesDisponibles = function () {
    //datos de prueba
    ordenesDisponibles = {1:o, 8:o2};
    
    //actualizar presentación
    
};


/**
 * Agrega un nuevo plato a la orden actual, la actualiza en el servidor, y 
 * recalcula el precio.
 * Se debe tener en cuenta que el precio NO se podrá calcular hasta que
 * se haya hecho la actualización (para esto use 'promesas' encadenadas.
 * es dado por el servidor).
 * @param {type} p
 * @returns {undefined}
 */
agregarPlatoOrdenActual = function (p) {
    try{

        ordenActual.agregarPlato(p);        

        //actualizar cantidades

        $(".dord").remove();

        Object.keys(ordenActual.orderAmountsMap).forEach(function (key, index) {
            $("#tablaplatos").append('<tr class="dord"><td>' + key + '</td><td>' + ordenActual.orderAmountsMap[key] + '</td></tr> ');
        });


    }
    catch (err) {
        alert("Error:"+err);
    }   

    

};

/**
 * Cambia la orden actualmente seleccionada
 * @param {type} id
 * @returns {undefined}
 */
cambiarOrdenActual = function (id) {
    idOrdenActual=id;
    ordenActual = ordenesDisponibles[id];

    //actualizar la presentación

};

/**
 * Actualiza el listado de los platos disponibles
 * @returns {undefined}
 */
actualizarPlatosDisponibles = function () {
    
    for (i = 0; i < platos.length; i++) {
        //agregar cada uno de los platos a la seccion del DOM correspondiente.
    }
    
    //definir los elementos de la lista como 'draggables'    
};

/**
 * Operaciones que se realizarán automáticamente una vez el DOM haya sido
 * cargado por completo.
 * 
 */
$(document).ready(
        function () {
            
            actualizarPlatosDisponibles();            
            
            $("#contenido").droppable({
                drop: function (event, ui) {                     
                    agregarPlatoOrdenActual(ui.draggable.attr("id"));
                     //alert(JSON.stringify(platos[ui.draggable.attr("id")]));
                }
            });
            
        }
);

