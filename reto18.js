function fixFiles(files) {
  let counter = {};
  return files.map((file) => {
    counter[file] = (counter[file] ?? -1) + 1; // Inicia en 0 y suma por cada aparición
    return counter[file] > 0 // Si ya apareció antes
      ? `${file}(${counter[file]})` // ...agrega el sufijo con el contador
      : file; // Si es la primera vez, lo deja igual
  });
}

console.log(fixFiles(["photo", "postcard", "photo", "photo", "video"]));
// ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

console.log(fixFiles(["file", "file", "file", "game", "game"]));
// ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

console.log(fixFiles(["file", "file(1)", "icon", "icon(1)", "icon(1)"]));
// ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']
