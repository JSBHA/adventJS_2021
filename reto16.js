function decodeNumbers(symbols) {
  const symbolMap = {
    ".": 1,
    ",": 5,
    ":": 10,
    ";": 50,
    "!": 100,
  };
  let total = 0;

  for (let i = 0; i < symbols.lenth; i++) {
    const currentValue = symbolMap[symbols[i]];

    // Si no se encuentra el símbolo en el map, devolvemos NaN
    if (currentValue === undefined) return NaN;

    // Si el valor del símbolo actual es mayor que el anterior, resta el valor anterior
    total +=
      currentValue < symbolMap[symbols[i + 1]] ? -currentValue : currentValue;
  }
  return total;
}

console.log(decodeNumbers("...")); // 3
console.log(decodeNumbers(".,")); // 4 (5 - 1)
console.log(decodeNumbers(",.")); // 6 (5 + 1)
console.log(decodeNumbers(",...")); // 8 (5 + 3)
console.log(decodeNumbers(".........!")); // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
console.log(decodeNumbers(".;")); // 49 (50 - 1)
console.log(decodeNumbers("..,")); // 5 (-1 + 1 + 5)
console.log(decodeNumbers("..,!")); // 95 (1 - 1 - 5 + 100)
console.log(decodeNumbers(".;!")); // 49 (-1 -50 + 100)
console.log(decodeNumbers("!!!")); // 300
console.log(decodeNumbers(";!")); // 50
console.log(decodeNumbers(";.W")); // NaN
