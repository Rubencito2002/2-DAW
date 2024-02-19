// Opcion 1:
// const captchatTex = document.getElementById("captcha");
// const codeElement = document.getElementById("code");

// captchatTex.addEventListener("mouseover", function () {
//     let randomNumber = Math.floor(1000 + Math.random() * 9000);

//     codeElement.textContent = randomNumber;
//     codeElement.style.visibility = "visible";
// });

// captchatTex.addEventListener("mouseout", function () {
//     codeElement.style.visibility = "hidden";
// });

// document.forms["formulario"].addEventListener("submit", function (event) {
//     let inputUser = document.getElementById("verify").value;
//     let lastCode = codeElement.textContent;

//     if (inputUser !== lastCode)
//     {
//         alert("Error: El código captcha introducido no coincide.");
//         event.preventDefault();
//     }
// });

document.getElementById("captcha").addEventListener("mouseover", muestraCaptcha);
document.getElementById("captcha").addEventListener("mouseout", ocultaCaptcha);
formulario.addEventListener("submit", validarFormulario);

function muestraCaptcha() {
    const number = random(1000, 9999);
    const code = document.getElementById("code");
    const nodoCaptchaNuevo = document.createTextNode(number);
    code.style.visibility = "visible";
    code.replaceChild(nodoCaptchaNuevo, code.childNodes[0]); //Es childNodes[0] porque sustituimos el nodo hoja (texto)
}

function ocultaCaptcha() {
    document.getElementById("code").style.visibility = "hidden";
}

function validarFormulario(event) {
    const captchaUsuario = document.getElementById("verify").value;
    const captchaCorrecto = document.getElementById("code").textContent;
    const aciertoCaptcha = captchaCorrecto === captchaUsuario;
    if (!aciertoCaptcha) {
        alert("Captcha Incorrecto");
        event.preventDefault();
    }
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}