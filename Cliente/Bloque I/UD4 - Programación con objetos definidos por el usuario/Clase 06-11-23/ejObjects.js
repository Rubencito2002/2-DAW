const persona = {};
console.log("Paso 1: ");
console.log(persona);
persona.nombre = "Pedro";
console.log("Paso 2: ");
console.log(persona);
persona.nombre = "María";
console.log("Paso 3: ");
console.log(persona);
persona.apellido = "García";
console.log("Paso 4: ");
console.log(persona);
persona.imprimeObjeto = imprime;
console.log("Paso 5: ");
console.log(persona);
console.log(persona.imprimeObjeto());

function imprime() {
    return this.nombre + " " + this.apellido;
}
console.log("SALIDA FUERA DEL OBJETO: " + imprime());
console.log(persona.imprime);
console.log(imprime(persona));