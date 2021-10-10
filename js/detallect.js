$(document).ready(function () {
    console.log("document ready!");
    let searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('id')){
        let id = searchParams.get('id');
        consultarByIdCliente(id);
    }
});

function consultarByIdCliente(id){
    $.ajax({
        url: "https://gec2a6a8aac81ca-orthesis.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client/"+id,
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            console.log(respuesta.items);
            if (respuesta.items.length==1){
                llenarDatosCliente(respuesta.items[0]);
            }else{
                $("#boton").hide();
                alert('No se encuentra el cliente con el id '+id);
            }
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function llenarDatosCliente(item){
    $("#id").val(item.id);
    $("#name").val(item.name);
    $("#email").val(item.email);
    $("#age").val(item.age);
}