const axios = require('axios')

const url = "https://data.police.uk/api/forces"

//Configuración de request 
let config = {
    url : url,
    method: 'get'
}


const f = async () => { 
    try{ 
        let response = await axios(config)
        const tipos = response.data
        tipos.forEach((element) => {
            console.log(element.name)
            console.log('///////////////////')
        })
    } catch (error) {
        console.log(Error(error))
    }   
}

f()




f()
