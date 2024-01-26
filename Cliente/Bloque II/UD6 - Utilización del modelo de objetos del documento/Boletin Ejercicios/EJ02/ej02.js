const oCapa = document.querySelector("#capa");
recorrerArbol(oCapa);

function recorrerArbol(oNodo) {
    procesarNodo(oNodo);
    for (let i = 0; i < oNodo.children.length; i++) {
        recorrerArbol(oNodo.children[i]);
    }
}

function procesarNodo(oNodo) {
    let oResultado = document.querySelector("#resultado");

    let oNodoTexto = document.createTextNode("-------------------------");
    let oNodoParrafo = document.createElement("P");
    oNodoParrafo.appendChild(oNodoTexto);
    oResultado.appendChild(oNodoParrafo);

    oNodoTexto = document.createTextNode("NodeType = " + oNodo.nodeType);
    oNodoParrafo = document.createElement("P");
    oNodoParrafo.appendChild(oNodoTexto);
    oResultado.appendChild(oNodoParrafo);

    oNodoTexto = document.createTextNode("Nombre de la clase = " + oNodo.constructor.name);
    oNodoParrafo = document.createElement("P");
    oNodoParrafo.appendChild(oNodoTexto);
    oResultado.appendChild(oNodoParrafo);

    oNodoTexto = document.createTextNode("NodeName = " + oNodo.nodeName);
    oNodoParrafo = document.createElement("P");
    oNodoParrafo.appendChild(oNodoTexto);
    oResultado.appendChild(oNodoParrafo);

    oNodoTexto = document.createTextNode("NodeValue = " + oNodo.nodeValue);
    oNodoParrafo = document.createElement("P");
    oNodoParrafo.appendChild(oNodoTexto);
    oResultado.appendChild(oNodoParrafo);

    oNodoTexto = document.createTextNode("innerHTML = " + oNodo.innerHTML);
    oNodoParrafo = document.createElement("P");
    oNodoParrafo.appendChild(oNodoTexto);
    oResultado.appendChild(oNodoParrafo);
}