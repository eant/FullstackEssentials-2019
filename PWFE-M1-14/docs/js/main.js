//Ambito: linea de ejecucion principal

//1) Variables sueltas
let titulo = "Comenzó la venta de entradas para el Mundial de Rusia 2018"
let autor = "Laura Smasnatta"
let detalle = "Hoy se abrió la venta al público de tickets, a través del sitio oficial de la FIFA. El proceso se dividirá en dos partes y los espectadores deberán solicitar una tarjeta de hincha 'Fan ID'"
let imagen = "tickets-rusia-mundial.jpg"


//2) Array
let noticia3 = [
	"A 94 años del derechazo que convirtió en leyenda a Luis Ángel Firpo",
	"Diego Di Marco",
	"El 14/9/1923 el boxeador argentino enfrento en Nueva York a Jack Dempsey, uno de los mejores pesos pesados de la historia",
	"firpo.jpg"
]

//3) Object
let noticia4 = {
	titulo : "Buenos Aires 2018 presentó su innovador proyecto de parques y de ceremonia inaugural ante el COI",
	autor : "Melina Morales",
	detalle : "El Comité Organizador de los Juegos de la Juventud presentó su concepto de parques ante la 131a sesión del Comité Olímpico Internacional (COI) que se realizó en Lima. La ceremonia inaugural se realizará al aire libre.",
	imagen : "buenos-aires.jpg"
}

//crearNoticia(titulo, autor, detalle, imagen)
//crearNoticia(noticia3[0], noticia3[1], noticia3[2], noticia3[3])
//crearNoticia(noticia4.titulo, noticia4.autor, noticia4.detalle, noticia4.imagen)


//Ambito: linea de ejecucion funcional
function crearNoticia(t, a, d, i){

	let plantilla = document.querySelector("#ultimas-noticias article").cloneNode(true)

	plantilla.querySelector("h3").innerText = t
	plantilla.querySelector("p > a").innerText = a
	plantilla.querySelector("p:last-child").innerText = d

	plantilla.querySelector("img").src = "img/" + i


	//reemplazar("h3", t)
	//reemplazar("p > a", a)

	document.querySelector("#ultimas-noticias").appendChild( plantilla )

}



