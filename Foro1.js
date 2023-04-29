const Num = [1, 2, 5, 77, 89, 4, 33];

Num.sort((a, b) => b - a);

const masGra = Num[0];
const masPeq = Num[Num.length - 1];

console.log("Arreglo ordenado de mayor a menor:", Num);
console.log("El Número más grande:", masGra);
console.log("EL Número más chico:", masPeq);
