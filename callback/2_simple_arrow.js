// Dependencia a XMLHttpRequest
const http = require('xmlhttprequest').XMLHttpRequest

const exito = data => {
    const tipos = JSON.parse(data).results
    //Recorrer el arreglo de tipos
    tipos.forEach( function(element) {
        console.log(`tipo: ${element.name}`)
        console.log(`--------------------`)

    });
}

const fallo = status => {
    console.log(status)
}

const url = "https://pokeapi.co/api/v2/type"

//Funcion para conectarnos a una API publica
const get_data = (endpoint, exito , fallo) => {
    //1. Crear el objeto de conexion
    const  h = new http()
    //2. Abrir una conexion a la API
    h.open('GET', endpoint)
    //3. Enviar la rquest definida
    h.send()
    //4. Una vez recibida la response tratar la informacion 
    h.onload = () => {
        if(h.status === 200){
            exito(h.responseText)
        }else{
            fallo(h.status)
        }    
    }
}

    //Invocar
    get_data(url, exito, fallo)
