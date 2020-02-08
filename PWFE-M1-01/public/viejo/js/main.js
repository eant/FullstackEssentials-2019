/*
 - Mini Introduccion a JavaScript:
   Funciones y Eventos
*/
function saludar(){ //<--- Operacion logica
	window.alert("Hola desde JavaScript")
}

document.querySelector("h1").onclick = saludar; //<-- Evento/Comportamiento...