let links = document.querySelectorAll("nav a")

console.log(links)

//links.forEach( manipularLink ) //<-- "Hacer esto..."

links.forEach(function(link){ //<-- "Hacer esto..."
	//Aca voy a manipular el link...
	console.log(link)

	link.onclick = function(evento){
		console.log(evento)
		evento.preventDefault() //<-- Frenar el comportamiento predeterminado del link/hipervinculo

		console.log("El culpable de este suceso es:")
		console.log(evento.target) //<-- es "él" elemento a traves del cual se provoca el evento

		let url = evento.target.href

		let rta = confirm(`Esta seguro que desea ir a ${evento.target.innerText}?`)

		if( rta ){
			alert("Bueno... chau")
			console.log("Hay que ir aca: " + url)
			window.location.href = url
		}
	}
})

/*
function manipularLink(link){
	//Aca voy a manipular el link...
	console.log(link)

	link.onclick = validar
}
*/

/*
function validar(evento){
	console.log(evento)
	evento.preventDefault() //<-- Frenar el comportamiento predeterminado del link/hipervinculo

	console.log("El culpable de este suceso es:")
	console.log(evento.target) //<-- es "él" elemento a traves del cual se provoca el evento

	let url = evento.target.href

	let rta = confirm(`Esta seguro que desea ir a ${evento.target.innerText}?`)

	if( rta ){
		alert("Bueno... chau")
		console.log("Hay que ir aca: " + url)
		window.location.href = url
	}
}
*/