let links = document.querySelectorAll("nav a")

console.log(links)

links.forEach( manipularLink )

function manipularLink(link){
	//Aca voy a manipular el link...
	console.log(link)

	link.onclick = validar
}

function validar(evento){
	console.log(evento)
	evento.preventDefault() //<-- Frenar el comportamiento predeterminado del link/hipervinculo

	let rta = confirm("Esta seguro que desea salir de la pagina?")

	if( rta ){
		alert("Bueno... chau")
	}

}