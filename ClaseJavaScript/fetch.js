function obtenerUsuarios(){
    var uri = "https://gd257f4deb7943f-w8pshap38hsh0b25.adb.us-chicago-1.oraclecloudapps.com/ords/admin/usuarios/usuarios"

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders
    };

    fetch(uri, requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result.items)
        console.log(result.items[0])
    })
    .catch(error => console.log('error', error));
}

obtenerUsuarios()
console.log("Hola mundo")