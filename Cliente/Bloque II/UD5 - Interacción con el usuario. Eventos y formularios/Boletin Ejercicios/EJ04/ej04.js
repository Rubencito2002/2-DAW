// Dado el formulario que permite la entrada de una provincia con su código correspondiente, y dos listas múltiples que inicialmente estarán vacías. Una vez pulsado el botón “agregar provincia” deberá introducirse la provincia en la lista múltiple de la izquierda. Los botones con las flechas deberán pasar de izquierda a derecha o viceversa las provincias seleccionadas de una de las listas múltiple de origen a la de destino. Habrá que controlar que si la provincia ya existe en alguna de las dos listas múltiples, no se permitirá que se agregue de nuevo.
function agregarProvincia()
{
    let codigo = document.getElementById('txtCodigo').value.trim();
    let provincia = document.getElementById('txtProvincia').value.trim();
    let lista = document.getElementById('lstProvincias');

    if(!existeProvincia(provincia))
    {
        let opcion = document.createElement('option');
        opcion.value = codigo;
        opcion.text = provincia;
        lista.add(opcion);
    }    
}

function existeProvincia(provincia)
{
    let listaIzquierda = document.getElementById('lstProvincias');
    let listaDerecha = document.getElementById('lstDestino');

    for (let i = 0; i < listaIzquierda.options.length; i++) {
        if (listaIzquierda.options[i].text === provincia) {
            return true;
        }
    }
    
    for (let j = 0; j < listaDerecha.options.length; j++) {
        if (listaDerecha.options[j].text === provincia) {
            return true;
        }
    }
    
    return false;
}

frmEntrada.btnPasarDerecha.addEventListener("click", pasarDerecha);
frmEntrada.btnPasarIzquierda.addEventListener("click", pasarIzquierda);

function pasarIzquierda()
{
    for(let provincia of frmEntrada.lstDestino.options)
    {
        if(provincia.selected)
        {
            frmEntrada.lstProvincias.append(provincia);
        }
    }
}

function pasarDerecha()
{
    for(let provincia of frmEntrada.lstProvincias.options)
    {
        if(provincia.selected)
        {
            frmEntrada.lstDestino.append(provincia);
        }
    }
}