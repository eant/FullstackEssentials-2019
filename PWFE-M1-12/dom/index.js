// creamos elemento h1
var titulo = document.createElement("h1");

// setteamos titulo
titulo.innerHTML = "Nuestro Titulo";

// appendeamos elmento titulo.
document.querySelector(".header").appendChild(titulo);

// creamos elemento select
var select = document.createElement("select");

select.className = "dropdown";

// creamos array con nombres
var nombres = ["Israel", "Gustavo", "Rodrigo", "Pablo"];

for (let index = 0; index < nombres.length; index++) {
  var option = document.createElement("option");
  option.value = index;
  option.innerHTML = nombres[index];
  select.appendChild(option);
}

document.querySelector(".footer").appendChild(select);
