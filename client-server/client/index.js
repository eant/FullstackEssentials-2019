const url = "http://localhost:3000/api/v1/noticias";

fetch(url)
  .then(response => response.json())
  .then(json => {
    console.log(json);
    if (json.success) {
      renderNoticias(json.noticias);
    }
  });

function renderNoticias(json) {
  console.log(json);
  json.map(noticia => crearNoticia(noticia));
}

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
  tpl.querySelector(".titulo").innerHTML = noticia.title;
  // inyectamos el descripcion en el html del elemento descripcion.
  tpl.querySelector(".descripcion").innerHTML = noticia.description;

  /**
   * Para agregar la imagen, deberiamos agregar una url de una imagen
   * en nuestro json de imagenes. (linea 10)
   * Luego deberiamos asignar ese valor a propiedad `src`
   * del elemento `img` de nuestro template.
   *
   */

  // Seleccionamos el elemento que contenga las noticias.
  var noticiasContenedor = document.querySelector(".noticias");
  // appendeamos nuesta noticia.
  noticiasContenedor.appendChild(tpl);
}
