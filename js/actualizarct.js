function actualizarct(){
    console.log("ejecutando funcion para actualizar");
    console.debug("actulizando...");
    let client = {
        id: +$("#id").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        age: +$("#age").val()
    };

    console.log(client);

    $.ajax({
        url: "https://gec2a6a8aac81ca-orthesis.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(client),
        statusCode:{
            201:function(){
                alert('Se ha actualizado el cliente');
            }
        },
    });
}