// Solicitar a través de un formulario dos horas de un día, el sistema deberá mostrar en una capa de salida del documento si la primera hora es anterior o posterior a la segunda, además del tiempo transcurrido entre ambas en formato de hh:mm. Ejemplo: el usuario introduce en la primera hora 18:40 y en la segunda 22:25 de la siguiente forma, h1=18 m1=40 h2=22 m2=25. La salida del sistema será “H1 es anterior a H2. Han pasado 3 horas y 45 minutos”. Si necesitara truncar un número puede usar la función Math.floor(num).
function diferenciaHoras()
{
    const h1 = Number (frmHoras.h1.value);
    const m1 = Number (frmHoras.m1.value);
    const h2 = Number (frmHoras.h2.value);
    const m2 = Number (frmHoras.m2.value);

    let totalDiferencia = h1 * 60 + m1 - (h2 * 60 + m2);
    let salida = "";
    let difMin, difHor;

    if(totalDiferencia < 0)
    {
        salida = "H1 es anterior a H2. La diferencia de tiempo es ";
        totalDiferencia = totalDiferencia -1;
    }
    else if (totalDiferencia > 0)
    {
        salida = "H1 es posterior a H2. La diferencia de tiempo es ";
        totalDiferencia = totalDiferencia -1;
    }

    if (totalDiferencia == 0)
    {
        salida = "Son la misma hora";
    }
    else
    {
        difHor = Math.floor(totalDiferencia / 60);
        difMin = totalDiferencia % 60;
        salida += String(difHor) + " horas y " + String(difMin) + " minutos";
    }
    document.getElementById("salida").innerHTML = salida;
}