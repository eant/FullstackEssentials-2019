const url = "/api/v1/noticias";

fetch(url)
  .then(response => response.json())
  .then(json => console.log(json));
