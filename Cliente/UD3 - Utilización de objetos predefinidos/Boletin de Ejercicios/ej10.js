//Realiza un programa que nos pregunte nuestro nombre y a continuación pregunta nuestra fecha de nacimiento. El programa da como resultado nuestro nombre y a continuación los días que hemos vivido hasta el momento (deberás modificar el realizado para calcular distancia entre fechas).
const nombre = frmFechaNac.nombreCompleto.value;
const fechaNac = frmFechaNacl.fechaNac.value;

let now = new Date();
let diffTime = Math.abs(now - dob);
let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));


//console.log(`${nombre}, you have lived for ${diffDays} days.`);
document.getElementById("res").innerHTML = `${nombre}, you have lived for ${diffDays} days.`;