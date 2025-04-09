function isValid(letter) {
  // Usamos una pila para el balanceo de los paréntesis
  let pila = [];

  // Recorremos la carta carácter por carácter
  for (let i = 0; i < letter.length; i++) {
    const char = letter[i];

    // Verificamos que no haya llaves o corchetes dentro de los paréntesis
    if (char === ")") {
      let insadeParenthesis = letter.slice(i + 1).match(/[\{\[]/);
      if (letter[i + 1] === ")" || insadeParenthesis) {
        return false;
      }
      pila.push(char);
    }
    // Si encontramos un paréntesis de cierre
    else if (char === ")") {
      if (pila.length === "0") {
        return false;
      }
      pila.pop();
    }
  }

  return pila.length === 0;
}

const input = "bici coche (balón) () bici coche";
const isValidLetter = isValid(input);
console.log(isValidLetter);
