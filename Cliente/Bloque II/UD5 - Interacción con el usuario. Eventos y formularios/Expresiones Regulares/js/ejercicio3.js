// a) En la capa de salida se mostrará una lista con los campos vacíos y otra con los campos con errores. En el caso de que todos los campos sean correctos se procesará el formulario.
// b) Todos los inputs deben ser de tipo texto y ninguno de ellos podrá quedarse en blanco.
// c) Tanto la marca como el modelo deben tener una única palabra que comienza por letra mayúscula y la pueden seguir minúsculas o mayúsculas. Habría que tener en cuenta la Ñ y los caracteres tildados.
// d) La fecha de matriculación tendrá el formato AAAA-MM-DD, por ejemplo: 2023-02-06.
// e) La matrícula tendrá tres posibles formatos en función del tipo de matrícula seleccionado:
//     1. Actual: la matrícula estará compuesta por cuatro dígitos seguidos de tres letras mayúsculas. Ejemplo: 1234BCD.
//     2. Antigua: la matrícula tendrá el distintivo provincial que se usaba antes del año 2000. Estará compuesta por uno o dos caracteres en mayúsculas que representan a la provincia, un guion seguido de cuatro dígitos, para terminar con otro guion y una o dos letras mayúsculas. Ejemplo: SE-7182-AJ.
//     3. Histórica: hay vehículos que pueden solicitar este tipo de matrículas si tienen más de 30 años, su modelo ha dejado de fabricarse y está en estado original sin cambios fundamentales. Dicha matrícula empieza por una H, seguido de cuatro dígitos, y tres letras mayúsculas. Ejemplo: H1234BCD.
// f) El color puede ser una cadena de texto de una sola palabra en mayúsculas o minúsculas.
// g) En la capa de salida se mostrará una lista con los campos vacíos y otra con los campos con errores. En el caso de que todos los campos sean correctos se procesará el formulario.
const form = document.forms['formulario'];
const salida = document.getElementById('salida');

form.addEventListener('submit', function () {
    event.preventDefault();
    validarFormulario();
});

function validarFormulario(){
    const camposVacios = [];
    const camposConErrores = [];

    const marca = form.elements["marca"].value.trim();
    const modelo = form.elements["modelo"].value.trim();
    const fechaMatriculacion = form.elements["fechaMatriculacion"].value.trim();
    const tipoMatricula = form.elements["tipoMatricula"].value;
    const matricula = form.elements["matricula"].value.trim();
    const color = form.elements["color"].value.trim();

    if(marca === ''){
        camposVacios.push('Marca');
    }

    if(modelo === ''){
        camposVacios.push('Modelo');
    }

    if(fechaMatriculacion === ''){
        camposVacios.push('Fecha de matriculación');
    }

    if(matricula === ''){
        camposVacios.push('Matricula');
    }

    if(color === ''){
        camposVacios.push('Color');
    }

    const marcaRegex = /^[A-Za-zÁÉÍÓÚÑáéíóúñ]+$/;
    const modeloRegex = /^[A-Za-zÁÉÍÓÚÑáéíóúñ]+$/;
    const fechaMatriculacionRegex = /^\d{4}-\d{2}-\d{2}$/;
    const matriculaActualRegex = /^\d{4}[A-Z]{3}$/;
    const matriculaAntiguaRegex = /^[A-Z]{1,2}-\d{4}-[A-Z]{1,2}$/;
    const matriculaHistoricaRegex = /^H\d{4}[A-Z]{3}$/;
    const colorRegex = /^[A-Za-z]+$/;

    if(!marcaRegex.test(marca)){
        camposConErrores.push('Marca');
    }

    if(!modeloRegex.test(modelo)){
        camposConErrores.push('Modelo');
    }

    if(!fechaMatriculacionRegex.test(fechaMatriculacion)){
        camposConErrores.push('Fecha de matriculación');
    }

    switch(tipoMatricula){
        case 'actual':
            if(!matriculaActualRegex.test(matricula)){
                camposConErrores.push('Matricula');
            }
            break;
        case 'antigua':
            if(!matriculaAntiguaRegex.test(matricula)){
                camposConErrores.push('Matricula');
            }
            break;
        case 'historica':
            if(!matriculaHistoricaRegex.test(matricula)){
                camposConErrores.push('Matricula');
            }
            break;
    }

    if(!colorRegex.test(color)){
        camposConErrores.push('Color');
    }

    mostrarResultados(camposVacios, camposConErrores);
}

function mostrarResultados(camposVacios, camposConErrores){
    if(camposVacios.length > 0 && camposConErrores.length > 0){
        let salidaHTML = "<h4>Resultado de la validación:</h4><ul>";

        if (camposVacios.length > 0) {
            salidaHTML += "<li>Campos vacíos: " + camposVacios.join(", ") + "</li>";
        }

        if (camposConErrores.length > 0) {
            salidaHTML += "<li>Campos con errores: " + camposConErrores.join(", ") + "</li>";
        }

        salidaHTML += "</ul>";
        salida.innerHTML = salidaHTML;
    } else {
        window.location.href = './destino/formularioProcesado.html';
    }
}