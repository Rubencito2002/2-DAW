const nombre = frmFechaNac.nombreCompleto.value;
const fechaNac = frmFechaNacl.fechaNac.value;

let now = new Date();
let diffTime = Math.abs(now - dob);
let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));


//console.log(`${nombre}, you have lived for ${diffDays} days.`);
document.getElementById("res").innerHTML = `${nombre}, you have lived for ${diffDays} days.`;