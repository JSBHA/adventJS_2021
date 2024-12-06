const carta = 'bici coche balón _playstation bici coche peluche'

export default function listGifts(letter) {
    let arrGifts = letter.split(' ');
  
    let giftsList = arrGifts
    .map(gift => gift.trim())
    .filter(gift => gift && !gift.startsWith('_'));
  
    let contador = {};
  
    giftsList.forEach(gift => {
      (contador[gift] = (contador[gift] || 0) + 1 )
    });
    
   return contador
  
  }

