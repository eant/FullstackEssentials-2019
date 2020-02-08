function saludar(){
	alert("Hola desde JavaScript!")
}
function cambiarLogo(){
	//1) Manipulacion de Contenido
	logo.innerHTML = "Noticias <strong>eXtremas</strong>"

	//2) Manipulacion de Estructura
	logo.style.color = "#F00"
	logo.title = "Todas la noticias sin vertigo"

	logo.classList.add("text-uppercase")
}

function crearNoticia(titulo, autor, bajada, imagen){
	let plantilla = `<article class="row noticia">
                        <div class="col-12 col-lg-4 noticia-img">
                          <img src="${imagen}" class="img-fluid">
                        </div>

                        <div class="col-12 col-lg-8 noticia-txt">
                          <h3>${titulo}</h3>
                          <p>por ${autor}</p>
                          <p>${bajada}</p>
                        </div>
                       </article>`

      let ficha = document.createElement("div")
          ficha.classList.add("col-12", "col-md-6", "col-lg-12")
          ficha.innerHTML = plantilla

      document.querySelector("#ultimas-noticias").appendChild( ficha )
}

/* Manipulacion de un documento HTML */
let logo = document.querySelector(".navbar-brand")

//3) Manipulacion de Comportamiento
logo.onclick = cambiarLogo