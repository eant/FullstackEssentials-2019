const http = require("http")
const fs = require("fs")
const path = require("path")

const port = 80

http.createServer(function(request, response){
	let dir = "public/" //<-- Carpeta del proyecto

	//let file = request.url //<-- Archivo solicitado
	/*
		if( request.url == "/" ){
			let file = "index.html"
		} else {
			let file = request.url
		}
	*/
	let file = (request.url == "/") ? "index.html" : request.url //<-- Archivo solicitado
	let ext = String( path.extname(file) ).toLowerCase() //<-- extensiones ".html", ".css", ".js", etc

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

	let contenType = tipos[ext] || "application/octet-stream"

	console.log("Archivo solicitado: " + dir + file)

	fs.readFile(dir + file, function(error, content){ //<-- "Intentar" leer el recurso solicitado

		if( error ){ //<-- Si hay un error...
			response.end("Archivo no encontrado :(")
		} else { //<-- Si lo encontro...
			response.writeHead(200, { "Content-Type" : contenType })
			response.end(content)
		}

	})

}).listen(port)