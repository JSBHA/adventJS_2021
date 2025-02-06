function getCoins(change) {
  const coins = [1, 2, 5, 10, 20, 50];
  // El array que almacenará cuántas monedas de cada tipo se usan
  const result = [0, 0, 0, 0, 0, 0];

  // Iteramos de la moneda más grande a la más pequeña
  for (let i = coins.length - 1; i >= 0; i--) {
    // Si el valor restante es mayor o igual a la moneda actual
    if (change >= coins[i]) {
      // Calculamos cuántas monedas de ese tipo podemos usar
      result[i] = Math.floor(change / coins[i]);
      // Restamos el valor de las monedas usadas del valor restante de 'change'
      change -= result[i] * coins[i];
    }
  }
  return result;
}

console.log(getCoins(51));
console.log(getCoins(3));
console.log(getCoins(5));
console.log(getCoins(16));
console.log(getCoins(100));
