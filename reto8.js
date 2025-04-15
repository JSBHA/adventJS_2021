function maxProfit(prices) {
  let minPrice = Infinity; // El precio mínimo encontrado hasta el momento
  let maxProfit = -1; // La ganancia máxima global que hemos encontrado

  // Recorremos el array de precios una sola vez
  for (let i = 0; i < prices.length; i++) {
    // Si encontramos un precio más bajo, lo guardamos
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      // Calculamos la ganancia actual si vendemos en el precio actual
      const profit = prices[i] - minPrice;
      // Si la ganancia es mayor que la ganancia máxima conocida, la actualizamos
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  // Si no se encontró ningún beneficio, devolvemos -1
  return maxProfit === 0 ? -1 : maxProfit;
}
console.log(maxProfit([39, 18, 29, 25, 34, 32, 5]));

const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
const pricesEth = [10, 20, 30, 40, 50, 60, 70];
const pricesDoge = [18, 15, 12, 11, 9, 7];
