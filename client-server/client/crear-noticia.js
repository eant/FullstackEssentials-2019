console.log("creamos una noticia");

const form = document.forms["notiForm"];

form.addEventListener("submit", evt => {
  evt.preventDefault();
  const elements = evt.target.elements;
  const data = [];

  for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    if (element.type !== "submit") {
      data.push({ [element.name]: element.value });
    }
  }

  notiFetch(data);
});

const notiFetch = data => {
  const url = "http://localhost:3000/api/v1/noticias";

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
};
