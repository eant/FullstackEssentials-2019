var links = document.querySelectorAll("nav > a")

console.log(links)

links.forEach(function(link){ // ← Funcion Anónima
  console.log("El argumento 'link' contiene:")
  console.log(link)

  link.onclick = function(evento){ // ← Hacer esto...
    evento.preventDefault()
    console.log(evento)

    var rta = confirm("Esta seguro que desea abandonar la pagina?")



  }

})

/* ↓ Funcion Nominada
function clickEvent(link){
  console.log("En el argumento 'link' hay:")
  console.log(link)
}
function validarLink(){
  ñklcsvhñcgvsfdhoghoñgfdshofdesgo;
}
*/
