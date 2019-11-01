// ejemplo de funcion
var miFuncion = function(elemento) {
  console.log(elemento);
};

// Arrow Function (funcion tipo flecha)
[("a", "b", "b")].map(el => console.log(el));

// array de objetos noticias.
var noticias = [
  {
    titulo: "mi titulo",
    descripcion: "mi descripcion1",
    imagen: "http://miimagen.jpg"
  },
  {
    titulo: "mi titulo1",
    descripcion: "mi descripcion2",
    imagen: "http://miimagen.jpg"
  },
  {
    titulo: "mi titulo2",
    descripcion: "mi descripcion3",
    imagen: "http://miimagen.jpg"
  }
];

// itero mi array de noticias
noticias.map(function(element) {
  crearNoticia(element);
});

/**
function crearNoticia(noticia) {
 * Esta funcion crea un elemento en el DOM del tipo div el cual contiene una noticia.
 * @param { Object } noticia
 * @returns { DOMElement }
 */
function crearNoticia(noticia) {
  // creamos elemento del tipo div.
  var tpl = document.createElement("div");
  // inyectamos el html de nuestro template.
  tpl.innerHTML = document.querySelector("#noticiaTpl").innerHTML;

  // inyectamos el titulo en el html del elemento titulo.
  tpl.querySelector(".titulo").innerHTML = noticia.titulo;
  // inyectamos el descripcion en el html del elemento descripcion.
  tpl.querySelector(".descripcion").innerHTML = noticia.descripcion;

  // Seleccionamos el elemento que contenga las noticias.
  var noticiasContenedor = document.querySelector(".noticias");
  // appendeamos nuesta noticia.
  noticiasContenedor.appendChild(tpl);
}
