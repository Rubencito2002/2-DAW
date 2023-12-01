class Ordenador
{
    // Atributos de Ordenador.
    _marca;
    _modelo;
    _precio;

    // Constructor de Ordenador.
    constructor(marca,modelo,precio)
    {
        this._marca = marca;
        this._modelo = modelo;
        this._precio = precio;
    }

    // Getters & Setters de Ordenador.
    get marca() 
    {
        return this._marca;
    }

    set marca(marca) 
    {
        this._marca = marca;
    }

    get modelo()
    {
        return this._modelo;
    }

    set modelo(modelo)
    {
        this._modelo = modelo;
    }

    get precio()
    {
        return this._precio;
    }

    set precio(precio)
    {
        this._precio = precio;
    }

    // Metodos Extras.
    toHTMLRow()
    {
        let fila = "<tr>";
        fila += "<td>" + this._marca + "</td>";
        fila += "<td>" + this._modelo + "</td>";
        fila += "<td>" + this._precio + "</td></tr>";
        return fila;
    }
}

class Portatil extends Ordenador
{
    // Atributos de Portatil.
    _discoSDD;
    _pulgadas;

    // Constructor de Portatil.
    constructor(discoSDD,pulgadas, marca, modelo, precio)
    {
        super(marca, modelo, precio);
        this._discoSDD = discoSDD;
        this._pulgadas = pulgadas;
    }

    // Getters & Setters de Portatil.
    get discoSDD()
    {
        return this._discoSDD;
    }

    set discoSDD(discoSDD)
    {
        this._discoSDD = discoSDD;
    }

    get pulgadas()
    {
        return this._pulgadas;
    }

    set pulgadas(pulgadas)
    {
        this._pulgadas = pulgadas;
    }

    // Metodos Extras.
    toHTMLRow()
    {
        let fila = super.toHTMLRow();
        fila = fila.slice(0, fila.length - 5);
        fila += "<td>" + this._discoSDD + "</td>";
        fila += "<td>" + this._pulgadas + "</td>";
        return fila;
    }
}

class Sobremesa extends Ordenador
{
    // Atributos de Sobremesa.
    _tarjetaGrafica;

    // Constructor de Sobremesa.
    constructor(tarjetaGrafica, marca, modelo, precio)
    {
        super(marca, modelo, precio);
        this._tarjetaGrafica = tarjetaGrafica;
    }

    // Getters & Setters de Sobremesa.
    get tarjetaGrafica()
    {
        return this._tarjetaGrafica;
    }

    set tarjetaGrafica(tarjetaGrafica)
    {
        this._tarjetaGrafica = tarjetaGrafica;
    }

    // Metodos Extras.
    toHTMLRow()
    {
        let fila = super.toHTMLRow();
        fila = fila.slice(0, fila.length - 5);
        fila += "<td>" + this._tarjetaGrafica + "</td></tr>";
        return fila;
    }
}

class StockOrdenadores
{
    // Atributos de StockOrdenadores.
    _ordenador;
    _stock;

    // Constructor de StockOrdenador.
    constructor(ordenador, stock)
    {
        this._ordenador = ordenador;
        this._stock = stock;
    }

    // Getters & Setters de StockOrdenador.
    get stock()
    {
        return this._stock;
    }

    set stock(stock)
    {
        this._stock = stock;
    }

    // Metodos Extras.
    toHTMLRow()
    {
        let fila = "<tr>";
        fila += this.ordenador.toHTMLRow();
        fila = fila.slice(0, fila.length - 5);
        fila += "<td>" + this._stock + "</td></tr>";
        return fila;
    }
}

class Tienda
{
    // Atributos de Tienda.
    _catalogo;
    _stock;

    // Constructor de Tienda.
    constructor(catalogo, stock)
    {
        this._catalogo = [catalogo];
        this._stock = [stock];
    }

    // Metodos Extras.
    toHTMLRow()
    {
        let fila;
        for(let i = 0; i < this._catalogo.length; i++)
        {
            fila += this.Ordenador.toHTMLRow(this._catalogo[i]);
        }
        fila = fila.slice(0, fila.length - 5);
        for(let i = 0; i < this._stock.length; i++)
        {
            fila += this.StockOrdenadores.toHTMLRow(this._stock[i]);
        }
        fila = fila.slice(0, fila.length - 5);
        fila+= "</tr>"
        return fila;
    }

    altaCatalogo(ordenador)
    {
        let encontrado = this._catalogo.filter((elem) => elem.marca == ordenador.marca && elem.modelo == ordenador.modelo).length == 1;
        if(encontrado)
        {
            this._catalogo.push(ordenador);
            return true;
        }
        else
        {
            return false;
        }
    }

    altaStock(stock)
    {
        let encontrado = this._catalogo.filter((elem) => elem.marca == stock.marca && elem.modelo == stock.modelo).length == 1;
        if(encontrado)
        {
            this._stock.push(stock);
            return true;
        }
        else
        {
            return false;
        }
    }

    buscarOrdenador(marca, modelo)
    {
        return this._catalogo.find(ordenador => ordenador.marca === marca && ordenador.modelo === modelo);
    }

    salidaStock(marca, modelo, unidades)
    {
        let oOrdenador = this.buscarOrdenador(marca, modelo);
        let encontrado = this.buscarStock(oOrdenador);

        if(encontrado)
        {
            let oStockActualizado = new StockOrdenadores(oOrdenador, unidades);
            this._stock.push(oStockActualizado);
            return true;
        }
        else
        {
            return false;
        }
    }

    buscarStock(oOrdenador)
    {
        return this.ordenador.filter(ordenador2 => ordenador2.ordenador === oOrdenador);
    }

    listadoCatalogo()
    {
        let salida = "<table border='1'>";
        salida += "<thead><tr><th>Tipo</th><th>Marca</th><th>Modelo</th><th>Precio</th><th>Pulgadas</th><th>Disco SDD</th><th>Tarjeta Gráfica</th></tr></thead><tbody>";
        for(let catalogo of this._catalogo)
        {
            salida += catalogo.toHTMLRow();
        }
        salida += "</tbody></table>";
        return salida;
    }

    listadoStock()
    {   
        let salida = "<h2>Listado Stock Portátiles</h2>";
        salida += "<table border='1'>";
        salida += "<thead><tr><th>Marca</th><th>Modelo</th><th>Precio</th><th>Pulgadas</th><th>Disco SDD</th><th>Stock</th><th>Valor</th></tr></thead><tbody>";
        for(let portatil of this._catalogo)
        {
            salida += portatil.toHTMLRow();
        }
        salida += "</tbody></table>";
        salida += "<h2>Listado Stock Sobremesa</h2>";
        let salidaSobremesa = "<table border='1'>";
        salidaSobremesa += "<thead><tr><th>Marca</th><th>Modelo</th><th>Precio</th><th>Tarjeta Grafica</th><th>Stock</th><th>Valor</th></tr></thead><tbody>";
        for(let sobremesa of this._catalogo)
        {
            salidaSobremesa += sobremesa.toHTMLRow();
        }
        salidaSobremesa += "</tbody></table>";
        salida += salidaSobremesa;
        return salida;
    }

    importeTotalStock()
    {
        let stockPortátiles = this.numPortatilesStock();
        let stockSobremesa = this.numSobremesaStock();
        let importeTotal = this.importeTotalStock();
        let salida = "<h1>Totales</h1>";

        salida += `<p>Total stock portátiles: </p> ${stockPortátiles}`;
        salida += `<p>Total stock sobremesa: </p> ${stockSobremesa}`;
        salida += `<p>Importe total stock: </p> ${importeTotal}`;
        return salida;
    }

    numPortatilesStock()
    {
        let total;

        for(let portatil of this._stock)
        {
            if(portatil instanceof Portatil)
            {
                total += portatil.stock;
            }
        }
        return total;
    }

    numSobremesaStock()
    {
        let total;

        for(let sobremesa of this._stock)
        {
            if(sobremesa instanceof Sobremesa)
            {
                total += sobremesa.stock;
            }
        }
        return total;
    }

    importeTotalStock()
    {
        let total;

        for(let stock of this._catalogo)
        {
            total += stock.precio * stock.stock;
        }

        return total;
    }
}