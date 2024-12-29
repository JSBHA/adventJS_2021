function createXmasTree(height) {

    let tree = []; // Se crea un arreglo vacio 

        // Crear las filas del árbol
       for (let i = 1; i <= height; i++){
        let leftSpace = '_'.repeat(height - i); // Disminuye los espacios con cada iteracion 
        let asteriscos = '*'.repeat(2 * i - 1); // Aumenta los asteriscos con cada iteracion 
        let filaTree = `${leftSpace}${asteriscos}${leftSpace}`; // Se concatena los string 

        tree.push(filaTree) // Añadir la fila al array

    }

    
    let trunk = '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1)  // Tronco con los espacios adecuados
    tree.push(trunk); // se agrega 2 veces para que el tronco tenga 2 pisos 
    tree.push(trunk);
  
    return tree.join('\n');

  }
  console.log(createXmasTree(5));