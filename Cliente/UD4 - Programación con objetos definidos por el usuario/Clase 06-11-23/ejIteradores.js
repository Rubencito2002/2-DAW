const array1 = [2, -4, 17, 25, 190];
const persona = {
    nombre: "Pepe",
    apellidos: "González López",
    edad: 24,
};
const p1 = {
    nombre: "Pepe",
    apellidos: "González López",
    edad: 24,
};
const p2 = {
    nombre: "Marta",
    apellidos: "Núñez González",
    edad: 27,
};
const p3 = {
    nombre: "Rocío",
    apellidos: "Mesa López",
    edad: 32,
};

const tablaPersonas = [p1,p2,p3,{nombre: "Juan",apellidos: "Rodríguez Martínez",edad: 45,dni: "12345678K",},];
p3.dni = "98765432Q";

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
    console.log(i); // No se puede iterar un objeto con for..Of.
}

console.log("Iteración de array de objetos usado for..In");
for (let i in tablaPersonas) {
    for (let j in tablaPersonas[i]) {
        console.log(tablaPersonas[i][j]);
    }
}

console.log("Iteración de array de objetos for..In y for..Of");
for (let persona of tablaPersonas) {
    for (let i in persona) {
        console.log(persona[i]);
    }
}

console.log("Iteración de array de índices de objetos for..In y for..Of");
for (let persona of tablaPersonas) {
    for (let i in persona) {
        console.log(i);
    }
}