"use strict";

formulario.btnGuardar.addEventListener("click", guardar);
formulario.btnRecuperar.addEventListener("click", recuperar);
formulario.btnEliminar.addEventListener("click", eliminar);

function guardar() {
    setCookie(formulario.txtClave.value, formulario.txtValor.value, 30);
    // Reseteamos el formulario
    formulario.reset();
}

function recuperar() {
    const valor = formulario.txtClave.value == "" ? "No existe la Cookie" : formulario.txtClave.value;
    alert(getCookie(valor));
    // Reseteamos el formulario
    formulario.reset();
}

function eliminar() {
    deleteCookie(formulario.txtClave.value);
    // Reseteamos el formulario
    formulario.reset();
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;samesite=strict";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

function deleteCookie(cname) {
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;samesite=strict";
}