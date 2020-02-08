var links = document.querySelectorAll("nav > a")

console.log(links)

links.forEach(function(link){ // ← Funcion Anónima
  console.log("El argumento 'link' contiene:")
  console.log(link)

  link.onclick = function(evento){ // ← Hacer esto...
    evento.preventDefault() // ← detener el comportamineto predeterminado
    
    var rta = confirm("Esta seguro que desea abandonar la pagina?")

    if( rta ){
      //Ir a la pagina correspondiente
      console.log("Ahora deberia ir a:")
      console.log(evento.target.href)

      window.location.href = evento.target.href // ← Ir a donde iría el elemento clickeado...


    } else {
      alert("gracias por quedarse!")
    }



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
