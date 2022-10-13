const axios = require('axios')

const url = "https://rickandmortyapi.com/api/character"

//Configuración de request 
let config = {
    url : url,
    method: 'get'
}

//Realizar la operación async
axios(config)
    .then (response => response.data.results)
    .then(data => {
            data.forEach(function(tipo){
                console.log(`Nombre: ${tipo.name}`)
                console.log(`///////////////////////////`)
                })
            })
            .catch((error) => {
                console.log(Error(`Error : $error`))
            })
    
    