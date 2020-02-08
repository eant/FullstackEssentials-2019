const noticias = require("./noticias.json");

console.log("typeof: ", typeof noticias, "isArray: ", Array.isArray(noticias));

const resTitles = noticias.map(el => el.title);

const resFilterById = noticias.filter(el => el.id == 1);

console.log({ resTitles, resFilterById });
