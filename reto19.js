function learn(time, courses) {
  let bestPair = null; // Aquí guardamos la mejor pareja de índices encontrada
  let maxTimeUsed = 0; // Guardamos el tiempo máximo usado hasta el momento

  // Recorremos todos los cursos
  for (let i = 0; i < courses.length; i++) {
    // Recorremos los cursos restantes para combinarlos con el curso en la posición i
    for (let j = i + 1; j < courses.length; j++) {
      const totalTime = courses[i] + courses[j]; // Sumamos el tiempo de los dos cursos

      // Si la suma está dentro del tiempo disponible y es mayor que cualquier suma anterior
      if (totalTime <= time && totalTime > maxTimeUsed) {
        maxTimeUsed = totalTime; // Actualizamos el máximo tiempo usado
        bestPair = [i, j]; // Guardamos los índices de la mejor pareja
      }
    }
  }

  return bestPair; // Devolvemos la mejor pareja encontrada o null si no hay ninguna
}

console.log(learn(10, [2, 3, 8, 1, 4]));
console.log(learn(15, [2, 10, 4, 1]));
console.log(learn(25, [10, 15, 20, 5]));
console.log((8, [8, 2, 1]));
console.log(learn(8, [8, 2, 1, 4, 3]));
console.log(learn(4, [10, 14, 20]));
console.log(learn(5, [5, 5, 5]));
