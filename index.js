// creamos elemento h1
var titulo = document.createElement("h1");

// setteamos titulo
titulo.innerHTML = "Nuestro Titulo";

// appendeamos elmento titulo.
document.querySelector(".header").appendChild(titulo);

// creamos elemento select
var select = document.createElement("select");

// creamos options
var option1 = document.createElement("option");
var option2 = document.createElement("option");

option1.value = 1;
option1.innerHTML = "uno";

option2.value = 2;
option2.innerHTML = "dos";

select.appendChild(option1);
select.appendChild(option2);

document.querySelector(".footer").appendChild(select);
