//13. Se ingresan tres notas de un alumno, si el promedio es mayor o igual a 4 mostrar un mensaje 'apto', sino 'suspenso'.

let nota1 = prompt('Introduce una nota:');
let nota2 = prompt('Introduce una nota:');
let nota3 = prompt('Introduce una nota:');


let promedio = parseInt(nota1+nota2+nota3)/3;

/*if(promedio >= 4)
    alert("Apto");
else
    alert("Suspenso");
*/

alert(promedio >= 4 ? 'Apto' : 'Suspenso');