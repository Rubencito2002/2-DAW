const array1 = [2, -4, 17, 25, 190];
const persona = 
{
    nombre : "Pepe",
    apellidos : "González López",
    edad : 24,
};

console.log("Iteración de array por bucle clásico");
for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
}

console.log("Iteración de array usado for..In");
for (let i in array1) {
    console.log(array1[i]);
}

console.log("Iteración de array usado for..Of");
for (let i of array1) {
    console.log(i);
}

console.log("Iteración de objecto usado for..In");
for (let i in persona) {
    console.log(persona[i]);
}

console.log("Iteración de objecto usado for..Of");
for (let i of persona) {
    console.log(i); // Error, persona no es iterable
}