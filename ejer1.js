const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]
  
  function contarOvejas(ovejas) {
    return ovejas.filter(oveja => oveja.color === 'rojo' && 
      oveja.name.toLowerCase().replace(/\s/g, '').includes('n') &&
      oveja.name.toLowerCase().replace(/\s/g, '').includes('a')
    );
  }
  
  console.log(ovejas)