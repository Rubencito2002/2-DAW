function ignorarNumeros(event) {
    const expresionRegular = /\d/;
    if (expresionRegular.test(event.key)) {
        console.log(event.key);
        event.preventDefault();
    }

/*switch (event.key) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
        console.log("Ignorado: " + event.key);
        event.preventDefault();
    }*/
}

formulario.txtEntrada.addEventListener("keypress", ignorarNumeros);