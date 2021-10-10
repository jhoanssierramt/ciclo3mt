function eliminarct(identificadorct){
    console.log("ejecutando funcion para eliminar");

    let client = {
        id: +identificadorct
    };

    console.log(client);

    $.ajax({
        url: "https://gec2a6a8aac81ca-orthesis.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(client),
        statusCode:{
            204:function(){
                alert('Se ha eliminado el cliente');
            }
        },
    });
}