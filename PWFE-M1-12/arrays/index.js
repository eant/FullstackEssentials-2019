// ex 4
// Generar un arreglo con numero aleatorios no repetidos entre sí.

function contiene(collection, value) {
  for (let j = 0; j < arrNum.length; j++) {
    if (arrNum[j] === rand) {
      return true;
    }
  }
  return false;
}

var arrNum = [];

for (let i = 0; i < 5; i++) {
  var rand = Math.floor(Math.random() * 10);
  if (!contiene(arrNum, rand)) {
    arrNum.push(rand);
  }
}

console.log(arrNum);
