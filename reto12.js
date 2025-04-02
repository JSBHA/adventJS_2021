function getMinJump(obstacles) {
  obstacles.sort((a, b) => a - b); // Ordena los obstáculos

  let max = Math.max(...obstacles); // Encuentra el valor máximo entre los obstáculos

  // Verificar si un salto de longitud "jump" es válido
  function avoidWithJump(jump) {
    return !Array.from({ length: Math.floor(max / jump) }).some((_, i) => {
      const pos = i * jump + jump;
      return obstacles.includes(pos); // Verifica si alguna posición cae en un obstáculo
    });
  }

  // Comienza probando con salto 1 y aumenta
  let jump = 1;
  while (true) {
    if (avoidWithJump(jump)) {
      return jump; // Devuelve el primer salto que es válido
    }
    jump++;
  }
}

const obstacles = [5, 3, 6, 7, 9];
console.log(getMinJump(obstacles)); // -> 4

const obstacles2 = [2, 4, 6, 8, 10];
console.log(getMinJump(obstacles2)); // -> 7
