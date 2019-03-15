const http = require("http")
const fs = require("fs")
const path = require("path")

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

	//let ext = String( path.extname(file) ).toLowerCase()

	let ext = path.extname(file)
	    ext = String(ext)
	    ext = ext.toLowerCase()

	let tipos = {
			".html"	: "text/html",
			".js"	: "text/javascript",
			".css"	: "text/css",
			".txt" 	: "text/plain",
			".json"	: "application/json",
			".png"	: "image/png",
			".jpg"	: "image/jpg",
			".gif"	: "image/gif",
			".ico"	: "image/x-icon",
			".wav"	: "audio/wav",
			".mp4"	: "video/mp4",
			".woff"	: "application/font-woff",
			".ttf"	: "application/font-ttf",
			".eot"	: "application/vnd.ms-fontobject",
			".otf"	: "application/font-otf",
			".svg"	: "application/image/svg+xml"
	}

	let contentType = tipos[ext] || "application/octet-stream"

	console.log("Usted ha pedido el archivo: " + file)
	console.log("La extension del archivo es: " + ext)

	fs.readFile(dir + file, function(error, content){ //<-- "Intentar" leer/cargar el archivo/recurso solicitado

		if( error ){ //<-- Si NO pudo leer el archivo por X razón...
			response.end("ARCHIVO NO ENCONTRADO :(")
		} else { //<-- Si efectivamente pudo leerlo...

			response.writeHead(200, { "Content-Type" : contentType }) //<-- Especificar codigo de respuesta y tipo de contenido...

			response.end(content) //<-- Enviar al cliente/navegador el archivo encontrado

		}

	})

}).listen(80)