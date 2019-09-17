var http = require("http")
var fs = require("fs")

http.createServer( procesar ).listen(80)


function procesar(peticion, respuesta){
	respuesta.writeHead(200, { "Content-Type" : "text/html" })

	fs.readFile(peticion.url.substr(1), function(error, archivo){

		if(error){
			respuesta.end("Archivo no encontrado :(")
		} else {
			respuesta.end( archivo )
		}

	})
	
}