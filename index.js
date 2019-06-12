const http = require("http");
const fs = require("fs");

http.createServer((request, response) => {
		
		let dir = "public/";

		let file = (request.url == "/") ? "index.html" : request.url;
			file = (file.match(/[^.]+(\.[^?#]+)?/) || [])[0];
		
		let ext = file.substring( file.lastIndexOf(".") ).toLowerCase();

		let types = {
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
		};

		let contentType = types[ext] || "application/octet-stream";

		fs.readFile( dir + file, (error, content) => {
			
			if ( error ) {
				response.writeHead(404, { "Content-Type" : "text/plain" } );
				response.end("ARCHIVO NO ENCONTRADO");
			} else {
				response.writeHead(200, { "Content-Type" : contentType } );
				response.end(content);
			}

		});

}).listen(80);