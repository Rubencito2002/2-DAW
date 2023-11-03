//Crear un script que reciba dos fechas y diga cuál es anterior y el tiempo transcurrido entre ellas (en años, meses y días).
function procesarFechas()
{
    const fecha1 = Date.parse (frmFecha.fecha1.value);
    const fecha2 = Date.parse (frmFecha.fecha2.value);
    let salida = "";
    let dias, mes, anios, difDias;
    if (fecha1 < fecha2) 
    {
        salida = "La fecha 1 es anterior a la fecha 2. La diferencia es de ";
        difDias = (fecha2.valueOf() - fecha1.valueOf()) / (1000 * 60 * 60 * 24);
    } 
    else if (fecha1 > fecha2) 
    {
        salida = "La fecha 2 es anterior a la fecha 1. La diferencia es de ";
        difDias = (fecha1.valueOf() - fecha2.valueOf()) / (1000 * 60 * 60 * 24);
    }

    if (difDias == 0)
    {
        salida = "Fecha 1 y Fecha 2 son iguales";
    }
    else
    {
        anios = Math.floor(difDias / 365);
        mes = Math.floor((difDias - anios * 365) / 30.417);
        dias = Math.floor(difDias - anios * 365) % 30.417;
        salida += anios + " años, " + mes + " meses y " + dias + " días.";
    }

    document.getElementById("res").innerHTML = salida;
}