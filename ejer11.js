function shouldBuyFidelity(times) {
  // Si el número de entradas es menor a 1, no tiene sentido aplicar ninguna oferta
  if (times < 1) return false;

  const ticketPrice = 12; // valor entrada
  const voucherPrice = 250; // valor targeta
  const discount = 0.75; // descuento
  const totalWithNormalPrice = ticketPrice * times;

  const totalWithFidelity =
    250 +
    Array(times)
      .fill(0)
      .reduce((result, _value, index) => {
        return result + ticketPrice * Math.pow(discount, index + 1); // Aplica el descuento a cada entrada
      }, 0); // Inicializamos el acumulador en 0

  // Si el total con la tarjeta de fidelidad es más barato que comprar las entradas a precio normal, se recomienda comprar la fidelidad
  return totalWithFidelity < totalWithNormalPrice;
}

console.log(shouldBuyFidelity(1)); // false -> Mejor comprar tickets de un sólo uso
console.log(shouldBuyFidelity(100));
