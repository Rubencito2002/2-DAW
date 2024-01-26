document.getElementById('principal').addEventListener('click', diagonalPrincipal);
document.getElementById('secundaria').addEventListener('click', diagonalSecundaria);
document.getElementById('resetear').addEventListener('click', resetearEstilo);

function diagonalPrincipal()
{
    const tabla = document.getElementsByTagName("tabla")[0];
    resetearEstilo();
    for(let i = 0; i < tabla.rows.length; i++)
    {
        tabla.rows[i].cells[i].style.backgroundColor = "blue";
    }
}

function diagonalSecundaria()
{
    const tabla = document.getElementsByTagName("tabla")[0];
    resetearEstilo();
    for(let i = 0; i < tabla.rows.length; i++)
    {
        tabla.rows[i].cells[tabla.rows.length - i - 1].style.backgroundColor = "red";
    }
}

function resetearEstilo()
{
    const tabla = document.body.children[1];

    for(let fila of tabla.rows)
        for(let celda of fila.cells)
            celda.style.backgroundColor = "";
        
}