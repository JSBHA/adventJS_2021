function sumPairs(numbers, result) {
  const seen = {}; // Objeto para almacenar los números ya vistos

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const complement = result - num;

    // Si el complemento ya se vio antes, devolvemos el par
    if (seen[complement] !== undefined) {
      return [complement, num];
    }

    // Agregamos el número actual al objeto `seen`
    seen[num] = i; // Guardamos el índice para mayor control (aunque no es necesario en esta implementación)
  }

  return null; // Si no se encuentra ningún par
}

console.log(sumPairs([3, 5, 7, 2], 10)); // [3, 7]
console.log(sumPairs([-3, -2, 7, -5], 10)); // null
console.log(sumPairs([2, 2, 3, 1], 4)); //[2,2]
console.log(sumPairs([6, 7, 1, 2], 8)); //[7, 1]
console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6));
