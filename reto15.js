function checkSledJump(heights) {
  let i = 0;

  while (i < heights.length - 1 && heights[i] < heights[i + 1]) {
    i++;
  } // Subida estricta

  if (i === 0 || i === heights.length - 1) {
    return false;
  } // Si no hubo subida o estamos al final (punto más alto no alcanzado)

  while (i < heights.length - 1 && heights[i] > heights[i + 1]) {
    i++;
  } // Bajada estricta

  // Si hemos recorrido todo el array correctamente, es un salto válido
  return i === heights.length - 1;
}

console.log(checkSledJump([1, 2, 3, 2, 1])); // true: sube y baja de forma estricta
console.log(checkSledJump([0, 1, 0])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 1, 0])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 3, 2, 1])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 1000, 1])); // -> true: sube y baja de forma estricta

console.log(checkSledJump([2, 4, 4, 6, 2])); // false: no sube de forma estricta
console.log(checkSledJump([1, 2, 3])); // false: sólo sube
console.log(checkSledJump([1, 2, 3, 2, 1, 2, 3]));
