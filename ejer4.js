function createXmasTree(height) {

    let tree = [];

    for (let i = 1; i <= height; i++){
        let leftSpace = '_'.repeat(height - i);
        let asteriscos = '*'.repeat(2 * i - 1);
        let filaTree = `${leftSpace}${asteriscos}${leftSpace}`;

        tree.push(filaTree)

    }

    
    let trunk = '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1)
    tree.push(trunk);
    tree.push(trunk);
  
    return tree.join('\n');

  }
  console.log(createXmasTree(5));