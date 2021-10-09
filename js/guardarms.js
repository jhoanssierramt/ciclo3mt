function guardar(){
    console.log("ejecutando funcion guardar");

    let message = {
        id: +$("#id").val(),
        messagetext: $("#messagetext").val(),
    }; 

    console.log(message);

    $.ajax({
        url: "https://gec2a6a8aac81ca-orthesis.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(message),
        statusCode:{
            201:function(){
                alert('Se ha registrado el mensaje');
            }
        },
    });
}