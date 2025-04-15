function contains(store, product) {
  for (let key in store) {
    const value = store[key];
    if (typeof value === "object") {
      // Si el valor es un objeto, buscamos recursivamente
      if (contains(value, product)) {
        return true;
      }
    } else if (value === product) {
      // Si encontramos el producto, devolvemos true
      return true;
    }
  }
  // Si no se encuentra el producto, devolvemos false
  return false;
}

// Ejemplos de uso
const almacen = {
  estanteria1: {
    cajon1: {
      producto1: "coca-cola",
      producto2: "fanta",
      producto3: "sprite",
    },
  },
  estanteria2: {
    cajon1: "vacio",
    cajon2: {
      producto1: "pantalones",
      producto2: "camiseta", // <- ¡Está aquí!
    },
  },
};

console.log(contains(almacen, "camiseta")); // true

const otroAlmacen = {
  baul: {
    fondo: {
      objeto: "cd-rom",
      "otro-objeto": "disquette",
      "otra-cosa": "mando",
    },
  },
};

console.log(contains(otroAlmacen, "gameboy")); // false
