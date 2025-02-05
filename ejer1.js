function contarOvejas(ovejas) {
  return ovejas.filter(
    (oveja) =>
      oveja.color === "rojo" && // Se filtran las ovejas por color
      oveja.name.toLowerCase().replace(/\s/g, "").includes("n") && // Se combirte las letras mayusculas a miniculas se elimina los espacios y se busca un caracter en expecifico para filtrar
      oveja.name.toLowerCase().replace(/\s/g, "").includes("a")
  );
}
console.log(ovejas);
const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" },
];
