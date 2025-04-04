function wrapGifts(gifts) {
  if (gifts.length === 0) return []; //Si el arreglo esta vacio retorna []

  // Se repite los asteriscos por la longitud del regalo y sumamos 2(*)
  let wrapped = "*".repeat(gifts[0].length + 2);
  let newGifts = []; //Arreglo donde van los regalos ya en vueltos
  newGifts.push(wrapped); // Añadir parte superior del regalo

  // Envolver cada regalo con asteriscos
  for (let i = 0; i < gifts.length; i++) {
    newGifts.push("*" + gifts[i] + "*");
  }
  newGifts.push(wrapped); //Añadir parte inferior del regalo 
  return newGifts;
}

console.log(wrapGifts(["📷", "⚽️"]));
console.log(wrapGifts(["🏈🎸", "🎮🧸"]));
console.log(wrapGifts(["📷"]));
