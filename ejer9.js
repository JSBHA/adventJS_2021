function groupBy(collection, it) {
  return collection.reduce((result, item) => {
    // Si el iterador es una función
    const key = typeof it === "function" ? it(item) : item[it];

    // Si no existe la clave en el objeto, la creamos
    if (!result[key]) {
      result[key] = [];
    }
    // Añadimos el item a la clave correspondiente
    result[key].push(item);

    return result;
  }, {});
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
console.log(groupBy(["one", "two", "three"], "length"));
console.log(groupBy([{ age: 23 }, { age: 24 }], "age"));
