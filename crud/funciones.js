function Mensaje(t){
    switch (t) {
        case 1: //
            $(".mensaje-alerta").append(
                "<div class='alert alert-success' role='alert'>Se agrego con exito la vaca</div>"
            );
            break;
        case 2: //
            $(".mensaje-alerta").append(
                "<div class='alert alert-danger' role='alert'>Se elimino la vaca</div>"
            );
            break;
        default:

    }
}
function AgregarEstudiante () {
    // Seleccionamos los datos de los inputs de formulario
    var datos_cliente = JSON.stringify({
        Nombre : $("#nombre").val(),
        Correo : $("#correo").val(),
        Peso : $("#peso").val(),
        Fecha_nacimiento : $("#fecha_nacimiento").val(),
    });

    dbEstudiantes.push(datos_cliente); // Guardar datos en el array definido globalmente
    localStorage.setItem("dbEstudiantes", JSON.stringify(dbEstudiantes));
    ListarEstudiantes();
    return Mensaje(1);
}
function ListarEstudiantes (){
    $("#dbEstudiantes-list").html(
            "<thead>" +
                "<tr>" +
                    "<th> ID </th>" +

                    "<th> Nombre </th>" +
                    "<th> Correo </th>" +
                    "<th> Peso </th>" +
                    "<th> fecha_nacimiento </th>" +
                    "<th> </th>" +
                    "<th>  </th>" +
                "</tr>" +
            "</thead>" +
            "<tbody>" +
            "</tbody>"
    );

    for (var i in dbEstudiantes) {
        var d = JSON.parse(dbEstudiantes[i]);
        $("#dbEstudiantes-list").append(
                        "<tr>" +
                            "<td>" + i + "</td>" +
                            "<td>" + d.Nombre + "</td>" +
                            "<td>" + d.Correo + "</td>" +
                            "<td>" + d.Peso + "</td>" +
                            "<td>" + d.Fecha_nacimiento + "</td>" +
                            "<td> <a id='"+ i +"' class='btnEditar' href='#'> <span class='glyphicon glyphicon-pencil'> </span>  </a> </td>" +
                            "<td> <a id='" + i + "' class='btnEliminar' href='#'> <span class='glyphicon glyphicon-trash'> </span> </a> </td>" +
                        "</tr>"
                        );
    }

}

function contarEstudiantes(){
    var estudiantes = dbEstudiantes;
    nEstudiantes = estudiantes.length;

    $("#numeroEstudiantes").append(
        "<a>Tienes actualmente" + "<br>" + "<span class='badge'>" + nEstudiantes + "</span></a> Estudiantes"
    );
    return nEstudiantes;
}

function Eliminar(e){
    dbEstudiantes.splice(e, 1); // Args (posición en el array, numero de items a eliminar)
    localStorage.setItem("dbEstudiantes", JSON.stringify(dbEstudiantes));
    return Mensaje(2);
}

function Editar() {
    dbEstudiantes[indice_selecionado] = JSON.stringify({
        Nombre : $("#nombre").val(),
        Correo : $("#correo").val(),
        Peso : $("#peso").val(),
        Fecha_nacimiento : $("#fecha_nacimiento").val(),
    });
    localStorage.setItem("dbEstudiantes", JSON.stringify(dbEstudiantes));
    operacion = "A"; //Regresamos la valor original
    return true;

}



//INICIO DEL CODIGO
var dbEstudiantes = localStorage.getItem("dbEstudiantes"); //Obtener datos de localStorage
var operacion = "A"; //"A"=agregar; "E"=editar
dbEstudiantes = JSON.parse(dbEstudiantes); // Covertir a Json
if (dbEstudiantes === null) // Si no existe, creamos un array vacio.
    dbEstudiantes = [];

//IMPRIMIR LISTADO
if (dbEstudiantes.length !== 0) {
    ListarEstudiantes();
} else {
    $("#dbEstudiantes-list").append("<h2> No tienes Estudiantes </h2>");
}


$(".btnEliminar").bind("click", function(){
    alert("¿ Me quieres eliminar ?");
    indice_selecionado = $(this).attr("id"); // "this" contiene el elemento clikeado en el contexto actual
    console.log(indice_selecionado);
    console.log(this);
    Eliminar(indice_selecionado); // Eliminamos el elemento llamando la funcion de eliminar
    ListarEstudiantes();
});

$(".btnEditar").bind("click", function() {
    alert("¿ Me quieres editar ?");
    // Cambiamos el modo
    $(".modo").html("<span class='glyphicon glyphicon-pencil'> </span> Modo edición");
    operacion = "E";
    indice_selecionado = $(this).attr("id");
    console.log(indice_selecionado);
    console.log(this);
    // Llemanos el formulario con los datos actuales de la vaca a editar
    var vacaItem = JSON.parse(dbEstudiantes[indice_selecionado]);
    $("#nombre").val(vacaItem.Nombre);
    $("#correo").val(vacaItem.Correo);
    $("#peso").val(vacaItem.Peso);
    $("#fecha_nacimiento").val(vacaItem.Fecha_nacimiento);
    $("#nombre").focus();
});


contarEstudiantes();
// Esperar el evento de envio del formulario !!
$("#estudiantes-form").bind("submit", function() {
    debugger;
    if (operacion == "A")
        return AgregarEstudiante();
    else {
        return Editar();
    }
});
