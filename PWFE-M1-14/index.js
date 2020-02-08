const express = require("express")

const servidor = express()

const puerto = 80

//servidor.get( ACA VOY A CONFIGURAR QUE RESPONDER ANTE UNA PETICION GET )
//servidor.get("RUTA", accion)
servidor.get("/", function(request, response){

	response.send("<h1>Hola desde <u>Express</u>!</h1>")

})



servidor.listen( puerto )