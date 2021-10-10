function eliminar(identificador){
    console.log("ejecutando funcion para eliminar");

    let message = {
        id: +identificador
    };

    console.log(message);

    $.ajax({
        url: "https://gec2a6a8aac81ca-orthesis.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(message),
        statusCode:{
            204:function(){
                alert('Se ha eliminado el mensaje');
            }
        },
    });
}