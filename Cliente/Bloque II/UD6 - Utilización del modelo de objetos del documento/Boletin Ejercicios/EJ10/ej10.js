document.getElementById("boton").onclick = insertarTarea;

function insertarTarea() {
    const tarea = document.getElementsByName("tarea")[0].value;
    const prioridad = document.getElementsByName("prioridad")[0].value;
    const tbody = document.getElementById("tbody");
    let imp, tr, td, boton;
    switch (prioridad) {
        case "Muy alta":
        imp = 1;
        break;
        case "Alta":
        imp = 2;
        break;
        case "Media":
        imp = 3;
        break;
        case "Baja":
        imp = 4;
        break;
        case "Muy baja":
        imp = 5;
        break;
    }
    // Creo fila
    tr = document.createElement("tr");
    tr.classList.add("imp" + imp);
    // Creo primera columna
    td = document.createElement("td");
    tr.appendChild(td);
    // Creo segunda columna
    td = document.createElement("td");
    td.textContent = tarea;
    tr.appendChild(td);
    // Creo tercera columna
    td = document.createElement("td");
    td.textContent = prioridad;
    tr.appendChild(td);
    // Creo cuarta columna
    td = document.createElement("td");
    boton = document.createElement("button");
    td.appendChild(boton);
    boton.classList.add("fa");
    boton.classList.add("fa-trash");
    boton.onclick = function () {
        eliminaFila(this);
    };
    tr.appendChild(td);
    //Inserto la fila en el sitio correcto en la tabla
    insertarOrdenado(tbody, tr, imp);
    renumerarTabla();
}

function eliminaFila(boton) {
    boton.parentNode.parentNode.remove();
    renumerarTabla();
}

function renumerarTabla() {
    const filas = document.getElementById("tbody").children;
    for (let i = 0; i < filas.length; i++) {
        let str = i + 1 + ".";
        filas[i].firstChild.textContent = str;
    }
}

function insertarOrdenado(tbody, tr, imp) {
    const clase = "imp" + imp;
    const filas = tbody.children;
    if (filas == 0) {
        tbody.appendChild(tr);
    } else {
        let i = 0;
        // Las clases se representan por ejemplo como "imp3"
        while (i < filas.length && filas[i].className <= clase) {
        i++;
        }
        if (i == filas.length) {
        tbody.appendChild(tr);
        } else {
        tbody.insertBefore(tr, filas[i]);
        }
    }
}