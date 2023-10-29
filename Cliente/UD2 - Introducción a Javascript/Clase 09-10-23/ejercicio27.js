let mayores = 0, menores = 0;
function contarCalificaciones()
{
    const c1 = Number(frmNotas.calificacion1.value);
    const c2 = Number(frmNotas.calificacion2.value);
    const c3 = Number(frmNotas.calificacion3.value);
    const c4 = Number(frmNotas.calificacion4.value);
    const c5 = Number(frmNotas.calificacion5.value);
    
    procesarNotas(c1);
    procesarNotas(c2);
    procesarNotas(c3);
    procesarNotas(c4);
    procesarNotas(c5);
    document.getElementById("salida").innerHTML = "Mayores de 7 : " + mayores + "<br> Menores de 7: " + menores;
    mayores = 0;
    menores = 0;
}

function procesarNotas(nota)
{
    (nota>=7) ? mayores++ : menores++;
}