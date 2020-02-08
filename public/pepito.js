var http = require("http")
var fs = require("fs")

var servidor = http.createServer( procesar )

servidor.listen(2000, function(){
	console.log("Estoy escuchando el puerto 2000...")
})

function procesar(request, response){
	//response.write("<p>Hola mundo desde <strong>pepito.js</strong> :D</p>")
	//response.end(`<p>Usted quiere el siguiente recurso: ${request.url.substr(1)}</p>`)

	fs.readFile(request.url.substr(1), function(error, archivo){

		if( error ){
			response.end("Archivo NO encontrando ò_ó")
		} else {
			response.end( archivo )
		}

	})

}