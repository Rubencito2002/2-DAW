// Preparar un documento HTML con un formulario que solicite una fecha (día, mes y año) y un botón para calcular el día siguiente. Al pulsarlo se debe imprimir en una capa de salida la fecha del día siguiente a la introducida por el usuario. En este ejercicio no está permitido el uso del objeto DATE de javascript.

function calcularDiaSiguiente()
{
    let dia = Number (frmFecha.dia.value);
    let mes = Number (frmFecha.mes.value);
    let anyo = Number (frmFecha.anyo.value);
    let salida = "";

    if (ultimoDiaDelAnyo(dia, mes))
    {
        dia = 1;
        mes = 1;
        anyo++;
    }
    else if (ultimoDiaDelMes(dia, mes, anyo))
    {
        dia = 1;
        mes++;
    }
    else
    {
        dia++;
    }

    salida = String(dia) + "/" + String(mes) + "/" + String(anyo);
    document.getElementById("salida").innerHTML = "<b>" + salida + "</b>";
}

function ultimoDiaDelAnyo(dia, mes)
{
    return dia == 31 && mes == 12;
}

function esBisiesto(anyo)
{
    return (anyo % 4 == 0 && anyo % 100 != 0) || anyo % 400 == 0;
}

function ultimoDiaDelMes(dia, mes, anyo)
{
    switch(mes)
    {
        case 1:
        case 3: 
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
        {
            return dia == 31;
            break;
        }
        case 4:
        case 6:
        case 9:
        case 11:
        {
            return dia == 30;
        }
        case 2:
        {
            if (esBisiesto(anyo))
            {
                return dia == 29;
            }
            else
            {
                return dia == 28;
            }
            break;
        }
        default:
            return false;
    }
}