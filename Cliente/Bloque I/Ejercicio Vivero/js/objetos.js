class Arbol 
{
    #codigo;
    #tallaje;
    #especie;
    
    constructor(codigo, tallaje, especie) 
    {
        this.#codigo = codigo;
        this.#tallaje = tallaje;
        this.#especie = especie;
    }

    get codigo() 
    {
        return this.#codigo;
    }

    set codigo(codigo) 
    {
        this.#codigo = codigo;
    }

    get tallaje() 
    {
        return this.#tallaje;
    }

    set tallaje(tallaje) 
    {
        this.#tallaje = tallaje;
    }

    get especie() 
    {
        return this.#especie;
    }

    set especie(especie) 
    {
        this.#especie = especie;
    }

    toHTMLRow() 
    {
        let fila = "<tr>";
        /*fila += "<td>" + this.codigo + "</td>";
        fila += "<td>" + this.tallaje + "</td>";
        fila += "<td>" + this.especie + "</td></tr>";*/
        let atributos = Object.values(this);
        let entradas = Object.entries(this);
        console.log(this);
        console.log(atributos);
        console.log(entradas);
    
        for (let atributo in atributos) 
        {
            console.log(atributo);
            fila += "<td>" + atributo + "</td>";
        }
        return fila + "</tr>";
    }
}

class Perenne extends Arbol 
{
    #frutal;

    constructor(codigo, tallaje, especie, frutal) 
    {
        super(codigo, tallaje, especie);
        this.#frutal = frutal;
    }

    get frutal() 
    {
        return this.#frutal;
    }

    set frutal(frutal)
    {
        this.#frutal = frutal;
    }

    toHTMLRow() {
        let fila = super.toHTMLRow();
        fila = fila.slice(0, fila.length - 5); // Para quitar el </tr>
        fila += "<td>" + (this.frutal ? "SI" : "NO") + "</td></tr>";
        return fila;
    }
}

class Caduco extends Arbol 
{
    #mesFloracion;

    constructor(codigo, tallaje, especie, mesFloracion) 
    {
        super(codigo, tallaje, especie);
        this.#mesFloracion = mesFloracion;
    }

    get mesFloracion() 
    {
        return this.#mesFloracion;
    }

    set mesFloracion(mesFloracion) 
    {
        this.#mesFloracion = mesFloracion;
    }

    toHTMLRow() 
    {
        let fila = super.toHTMLRow();
        fila = fila.slice(0, fila.length - 5); // Para quitar el </tr>
        fila += "<td>" + this.mesFloracion + "</td></tr>";
        return fila;
    }
}

class Vivero 
{
    #arboles;

    constructor() 
    {
        this.#arboles = [];
    }

    get arboles() 
    {
        return this.#arboles;
    }

    set arboles(arboles) 
    {
        this.#arboles = arboles;
    }

    altaArbol(arbol) 
    {
        /*
        let i = 0,
        encontrado = false;
        while (i < this.arboles.length && !encontrado) 
        {
            if (this.arboles[i].codigo == arbol.codigo) 
            {
                encontrado = true;
            } 
            else 
            {
                i++;
            }
        }
        */
    
        let encontrado = this.arboles.filter((elem) => elem.codigo == arbol.codigo).length == 1;
    
        if (!encontrado) 
        {
            this.arboles.push(arbol);
            return true;
        } 
        else 
        {
            return false;
        }
    }

    buscarArbol(codigo) 
    {
        let i = 0,
        encontrado = false;
        while (i < this.arboles.length && !encontrado) 
        {
            if (this.arboles[i].codigo == codigo) 
            {
                encontrado = true;
            } 
            else 
            {
                i++;
            }
        }

        if (encontrado) 
        {
            return i;
        } 
        else 
        {
            return -1;
        }
    }

    tallajeArbol(codigo, tallaje) 
    {
        let mensajeSalida = "";
        let posicion = this.buscarArbol(codigo);

        if (posicion < 0) 
        {
            mensajeSalida += "Árbol no registrado";
        } 
        else if (this.arboles[posicion].tallaje > tallaje) 
        {
            mensajeSalida += "Tallaje inferior al registrado";
        } 
        else 
        {
            this.arboles[posicion].tallaje = tallaje;
            mensajeSalida += "Correcto, tallaje actualizado ";
            mensajeSalida += this.arboles[posicion] instanceof Perenne ? "Perenne" : "Caduco";
        }
        return mensajeSalida;
    }

    listadoPerennes(minAltura) 
    {
        let listadoPerenne = this.arboles.filter((arbol) => arbol instanceof Perenne && arbol.tallaje >= minAltura);
    
        listadoPerenne.sort((a1, a2) => a2.tallaje - a1.tallaje);
    
        let salida = "<table border='1'>";
        salida += "<thead><tr><th>Código</th><th>Tallaje</th><th>Especie</th><th>Frutal</th></thead><tbody>";
        
        for (let arbol of listadoPerenne) 
        {
            salida += arbol.toHTMLRow();
        }
        salida += "</tbody></table>";
        return salida;
    }

    listadoCaducos(mesFloracion) 
    {
        let listadoCaduco = this.arboles.filter((arbol) => arbol instanceof Caduco && arbol.mesFloracion == mesFloracion);
        let salida = "<table border='1'>";
        salida +="<thead><tr><th>Código</th><th>Tallaje</th><th>Especie</th><th>Mes floración</th></thead>";
    
        for (let arbol of listadoCaduco) 
        {
            salida += arbol.toHTMLRow();
        }
        salida += "</tbody></table>";
        return salida;
    }

    totalArbolesVenta() 
    {
        let contador = 0;
        for (let arbol of this.arboles) 
        {
            if (arbol instanceof Caduco && arbol.tallaje > 100) 
            {
                contador++;
            } 
            else if (arbol instanceof Perenne && arbol.frutal && arbol.tallaje > 80) 
            {
                contador++;
            } 
            else if (arbol instanceof Perenne && !arbol.frutal && arbol.tallaje > 120) 
            {
                contador++;
            }
        }
        return contador;
    }

    siguienteCodigoArbol() 
    {
        if (this.arboles.length == 0) 
        {
            return 1;
        } 
        else 
        {
            return this.arboles[this.arboles.length - 1].codigo + 1;
        }
    }
}