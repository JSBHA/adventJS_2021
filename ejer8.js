function maxProfit(prices) {
    let minPrice = Infinity; // Inicializamos el precio mínimo con un valor muy alto.
    let maxProfit = -1;      // Inicializamos la ganancia máxima con -1 (caso cuando no hay ganancia posible).
    
    for (let price of prices) {
      // Si encontramos un precio más bajo, lo actualizamos como el mínimo.
      if (price < minPrice) {
        minPrice = price;
      }
      // Calculamos la ganancia potencial si vendemos a este precio.
      const profit = price - minPrice;
      
      // Si la ganancia es mayor que la máxima actual, la actualizamos.
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
    
    return maxProfit; // Si no se actualizó, se devolverá -1.
  }