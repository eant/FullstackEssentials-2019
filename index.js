const http = require("http")
const fs = require("fs")

http.createServer(function(request, response){
	const dir = "public/" //<-- Definir el directorio de los archivos web

	//const url = request.url //<-- Leer la ruta/recurso solicitado en la URL
/*
	if( request.url == "/" ){
		const file = "index.html"
	} else {
		const file = request.url
	}
*/
	//const file = (CONDICION) ? VERDADERO : FALSO //<-- Operador Ternario
	const file = (request.url == "/") ? "index.html" : request.url


	fs.readFile(dir + file, function(error, content){ //<-- "Intentar" leer/cargar el archivo/recurso solicitado

		if( error ){ //<-- Si NO pudo leer el archivo por X razón...
			response.end("ARCHIVO NO ENCONTRADO :(")
		} else { //<-- Si efectivamente pudo leerlo...

			response.writeHead(200, { "Content-Type" : "text/html" }) //<-- Especificar codigo de respuesta y tipo de contenido...

			response.end(content) //<-- Enviar al cliente/navegador el archivo encontrado

		}

	})

}).listen(80)