console.log("creamos una noticia");

const url = "http://localhost:3000/api/v1/noticias";

const data = {
  foo1: "bar1",
  foo2: "bar2",
  foo3: "bar3"
};

const config = {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data),
  mode: "cors",
  cache: "default"
};

fetch(url, config)
  .then(response => response.json())
  .then(json => console.log(json));
