let nombre = document.querySelector("#Nombre");

// Escuchamos el evento keyup
// nombre.addEventListener("keyup", function(evt) {
//   console.log(evt.target.value);
// });

// definimos handler para select y datepicker
let handler = evt => console.log(evt.target.value);

let frutasSelect = document.querySelector("#Fruta");

// escuchamos evento change del select
frutasSelect.addEventListener("change", handler);

let datepicker = document.querySelector("#Date");

// escuchamos evento change del date picker
datepicker.addEventListener("change", handler);

// Form Selector
let form = document.querySelector("#MyForm");

// escuchamos evento submit del form.
form.addEventListener("submit", evt => {
  // prevenimos accion por default del form.
  evt.preventDefault();
  // tramos los elementos del form.
  let elements = evt.target.elements;

  const data = [];

  // iteramos elementos
  for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    // si el elemento es del tipo submit no guardamos su valor.
    if (element.type !== "submit") {
      data[element.name] = element.value;
    }
  }

  // guardo la data del form en localStorage.
  localStorage["data"] = JSON.stringify(data);

  // logueo el string objeto pasado.
  console.log(JSON.parse(localStorage["data"]));
});

const renderError = (selector, text) => {
  selector.parentNode.querySelector(".error").innerHTML = text;
};

const validators = {
  ["text"]: evt => {
    if (!["nombre", "apellido", "opcionc"].includes(evt.target.value)) {
      renderError(evt.target, "el valor no es correcto");
    } else {
      renderError(evt.target, "");
    }
  }
};

const validator = evt => {
  if (typeof validators[evt.target.type] !== "function") {
    return false;
  }

  validators[evt.target.type](evt);

  return;
};

let formElements = document.forms["MyForm"].elements;

for (let index = 0; index < formElements.length; index++) {
  formElements[index].addEventListener("blur", validator);
}
