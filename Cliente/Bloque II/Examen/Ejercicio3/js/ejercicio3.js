// a) En la capa de salida se mostrará una lista con los campos vacíos y otra con los campos
// con errores. En el caso de que todos los campos sean correctos se procesará el
// formulario.
// b) Todos los inputs deben ser de tipo texto y ninguno de ellos podrá quedarse en blanco.
// c) El precio tendrá un formato de un número con parte entera y dos dígitos de parte
// decimal con el símbolo del euro al final. La separación de la parte entera y la decimal
// puede hacerse con un punto o una coma. Ejemplos válidos: 3,25€, 2541.56€.
// d) La hora tendrá el formato HH:MM, se especificará en el rango de 24 horas, es decir,
// serán válidas las siguientes horas: 09:48, 18:35, 23:59, 00:00. A continuación se
// especifican ejemplos de horas que no se considerarán válidas: 18:62, 25:31, 9:15.
// e) La fecha de matriculación tendrá el formato DD/MM/AAAA, por ejemplo: 12/02/2024.
// No habrá que controlar que la fecha sea correcta, solo que tenga ese formato.
// f) La dirección IP tendrá un valor correcto dentro del protocolo IPv4. A continuación se
// especifican ejemplos de direcciones válidas: 192.168.1.1, 255.255.255.255, 0.0.0.0,
// 243.178.65.4. Serían ejemplo de direcciones inválidas: 257.67.45.2, 1324.45.23.2,
// 192.168.1.256
// g) El color debe ser especificado en código hexadecimal. Empezará por un carácter
// almohadilla seguido de tres pares de dígitos hexadecimales, cada uno de los pares
// indicará el nivel de color rojo, verde y azul respectivamente. Ejemplos de colores
// válidos: #38AE0F, #23b7f9, #000000, #ffFFff. A continuación, algunos ejemplos de
// colores inválidos: 376545, #g6780h, #00A0567
// h) En la capa de salida se mostrará una lista con los campos vacíos y otra con los campos
// con errores. En el caso de que todos los campos sean correctos se procesará el
// formulario.

const form = document.forms['formulario'];
const salida = document.getElementById('salida');

form.addEventListener('submit', function () {
    event.preventDefault();
    validarFormulario();
});

function validarFormulario(){
    const camposVacios = [];
    const camposConErrores = [];

    const precio = form.elements['precio'].value.trim();
    const hora = form.elements['hora'].value.trim();
    const fecha = form.elements['fecha'].value.trim();
    const direccionIp = form.elements['direccionIP'].value.trim() 
    const color = form.elements['color'].value.trim();

    if(precio === ''){
        camposVacios.push('Precio');
    } 
    if(hora === ''){
        camposVacios.push('Hora');
    }
    if(fecha === ''){
        camposVacios.push('Fecha');
    }
    if(direccionIp === ''){
        camposVacios.push('Direccion Ip');
    }
    if(color === ''){
        camposVacios.push('Color');
    }

    const precioRegex =  /^\d+(\.\d{1,2})?€$/ // /^\d{2},\d{2}$/; // Este lo tenia bien pero lo he mejorado para que este perfecto.
    const horaRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/; // /^\d{2}:\d{2}$/; //Esto es lo que yo tenia mal.
    const fechaRegex = /^\d{2}\/\d{2}\/\d{4}$/ // /^\d{2}-\d{2}-\d{4}$/; // Este tambien lo tenia bien.
    const direccionIpRegex = /^(\d{1,3}\.){3}\d{1,3}$/ // /^\d{3}.\d{3}.\d{3}.\d{3}/; // Este tambien lo tenia mal.
    const colorRegex = /^#[0-9A-Fa-f]{6}$/; // /^[A-Za-z]\d+$/; // Este tambien lo tenia mal.

    if(!precioRegex.test(precio)){
        camposConErrores.push('Precio');
    }

    if(!horaRegex.test(hora)){
        camposConErrores.push('Hora');
    }

    if(!fechaRegex.test(fecha)){
        camposConErrores.push('Fecha');
    }

    if(!direccionIpRegex.test(direccionIp)){
        camposConErrores.push('Direccion Ip');
    }

    if(!colorRegex.test(color)){
        camposConErrores.push('Color')
    }

    mostrarResultados(camposVacios, camposConErrores);
}

function mostrarResultados(camposVacios, camposConErrores){
    if(camposVacios.length > 0 && camposConErrores.length > 0){
        let salidaHTML = '<h4>Resultado de la validación:</h4><ul>';
        salidaHTML += '<li>Campos vacíos: ' + camposVacios.join(', ') + '</li>';
        salidaHTML += '<li>Campos con errores: ' + camposConErrores.join(', ') + '</li>';
    } else {
        window.location.href = './destino/formularioProcesado.html';
    }
}