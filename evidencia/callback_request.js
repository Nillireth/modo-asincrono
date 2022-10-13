const request = require('request')

const url = "http://api.open-notify.org/astros"

const r = request(url, 
    {json:true}, 
    function(err , response , body){
        response.body.people.forEach(function(element){
            console.log(element.name)
            console.log('--------------------------')
        })
    })
