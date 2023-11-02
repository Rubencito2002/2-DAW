//Crear un script que reciba dos fechas y diga cuál es anterior y el tiempo transcurrido entre ellas (en años, meses y días).
function procesarFecha()
{
    const fecha1 = frmFecha.fecha1.value;
    const fecha2 = frmFecha.fecha2.value;
    const res = "";
    if (fecha1 < fecha2) 
    {
        res += "La fecha 1 es anterior a la fecha 2";
    } 
    else if (fecha1 > fecha2) 
    {
        res += "La fecha 2 es anterior a la fecha 1";
    } 
    else 
    {
        res += "Las fechas son iguales";
    }

    const diffTime = Math.abs(fecha2 - fecha1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    const diffMonths = Math.ceil(diffDays / 30);
    const diffYears = Math.ceil(diffMonths / 12);

    //console.log(`Han transcurrido ${diffYears} años, ${diffMonths} meses y ${diffDays} días entre las dos fechas.`);
    res += `Han transcurrido ${diffYears} años, ${diffMonths} meses y ${diffDays} días entre las dos fechas.`;
    document.getElementById("res").innerHTML = res;
}