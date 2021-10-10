function actualizar(){
    console.log("ejecutando funcion para actualizar");
    console.debug("otro mensaje");
    let message = {
        id: +$("#id").val(),
        messagetext: $("#messagetext").val(),

    };

    console.log(message);

    $.ajax({
        url: "https://gec2a6a8aac81ca-orthesis.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(message),
        statusCode:{
            201:function(){
                alert('Se ha actualizado el mensaje');
            }
        },
    });
}