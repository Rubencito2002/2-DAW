let min = 0,seg = 0,dec = 0;
let funcionando = false;
let ejecucionPeriodica;

function playPause() 
{
    if (funcionando) 
    {
        clearInterval(ejecucionPeriodica);
        funcionando = false;
    } 
    else 
    {
        ejecucionPeriodica = setInterval(actualizarCrono, 100);
        funcionando = true;
    }
}

function actualizarCrono() 
{
    if (dec < 9) 
    {
        dec++;
    } 
    else if (dec == 9 && seg < 59) 
    {
        dec = 0;
        seg++;
    } 
    else if (dec == 9 && seg == 59) 
    {
        dec = 0;
        seg = 0;
        min++;
    }
    imprimirCrono();
}

function imprimirCrono() 
{
    let minTxt, segTxt, decTxt;
    if (seg < 10) 
    {
        segTxt = "0" + seg.toString();
    } 
    else 
    {
        segTxt = seg.toString();
    }
    if (min < 10) 
    {
        minTxt = "0" + min.toString();
    } 
    else 
    {
        minTxt = min.toString();
    }
    decTxt = dec.toString();

    document.getElementById("min").innerHTML = minTxt;
    document.getElementById("seg").innerHTML = segTxt;
    document.getElementById("dec").innerHTML = decTxt;
}

function resetearCrono() 
{
    min = 0;
    seg = 0;
    dec = 0;
    imprimirCrono();
}