const carta = 'bici coche balón _playstation bici coche peluche'

  function listGifts(letter) {
    let arrGifts = letter.split(' '); // se combierte una lista en una arreglo
  
    let giftsList = arrGifts
    .map(gift => gift.trim())
    .filter(gift => gift && !gift.startsWith('_')); // Se eliminan los espacios del arreglo y se eliman las palabras con caracter 
  
    let contador = {};
  
    giftsList.forEach(gift => {
      (contador[gift] = (contador[gift] || 0) + 1 )// Se cuentas la cantidad de regaslos  
    });
    
   return contador
  console.log(contador)

  
  }


  const regalos = listGifts(carta)

  console.log(regalos)