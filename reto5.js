function daysToXmas(date) {
  // Crear una fecha de referencia, el 25 de diciembre de 2021
  const christmas = new Date("dec 25, 2021");

  // Obtener solo la fecha (sin hora) de la fecha pasada y de la de referencia
  christmas.setHours(0, 0, 0, 0);
  const currentDate = new Date(date);
  currentDate.setHours(0, 0, 0, 0);

  // Calcular la diferencia en milisegundos
  const diffTime = christmas - currentDate;

  // Convertir la diferencia de milisegundos a días
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}

const date1 = new Date("Dec 1, 2021");
const date2 = new Date("Dec 24, 2021 00:00:01");
const date3 = new Date("Dec 24, 2021 23:59:59");
const date4 = new Date("December 20, 2021 03:24:00");

console.log(daysToXmas(date3));
