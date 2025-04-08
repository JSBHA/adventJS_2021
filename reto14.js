function missingReindeer(ids) {
  let num = ids.length + 1; // Calculamos la logitud que debe de tener (con el faltante)
  let sumNum = (num * (num - 1)) / 2; // Suma de 0 a n-1
  let sumIds = ids.reduce((acc, id) => acc + id, 0); // Suma los ids arreglo actual 

  return sumNum - sumIds // La diferencia es el id faltante
}

console.log(missingReindeer([0, 2, 3])); // -> 1
console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0])); // -> 4
console.log(missingReindeer([0, 1])); // -> 2 (¡es el último el que falta!)
console.log(missingReindeer([3, 0, 1])); // -> 2
console.log(missingReindeer([0])); // -> 1
