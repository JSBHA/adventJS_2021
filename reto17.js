function countPackages(carriers, carrierID) {
  // Buscar el carrier específico y sus subcarriers
  let carrier = carriers.find(([name]) => name === carrierID);
  
  if (!carrier) return 0; // Si no se encuentra el carrier, devolvemos 0
  
  let [, packages, subCarrier] = carrier;
  let totalPackages =
    packages +
    subCarrier.reduce((sum, subCarrierID) => {
      return sum + countPackages(carriers, subCarrierID);
    }, 0);
  return totalPackages;
}
const carriers = [
  ["dapelu", 5, ["midu", "jelowing"]],
  ["midu", 2, []],
  ["jelowing", 2, []],
];

console.log(countPackages(carriers, "dapelu")); // 9
// 5 de dapelu, 2 de midu y 2 de jelowing = 9

const carriers2 = [
  ["lolivier", 8, ["camila", "jesuspoleo"]],
  ["camila", 5, ["sergiomartinez", "conchaasensio"]],
  ["jesuspoleo", 4, []],
  ["sergiomartinez", 4, []],
  ["conchaasensio", 3, ["facundocapua", "faviola"]],
  ["facundocapua", 2, []],
  ["faviola", 1, []],
];

console.log(countPackages(carriers2, "camila")); // 15
// 5 de camila, 4 de sergiomartinez, 3 de conchaasensio, 2 de facundocapua y 1 de faviola = 15
