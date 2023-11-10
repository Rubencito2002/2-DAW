// Desarrolle un programa en el que se instancien varios objetos Producto llamando a la función constructora implementada en el ejercicio anterior. Seguidamente modificar el stock de los productos creados, así como su nombre y precio. Implemente un documento web donde se muestre claramente el funcionamiento de todos los métodos disponibles en los objetos Producto creados.

class Producto
{
    // Atributos
    _nombre;
    _unidades;
    _precio;

    // Constructor
    constructor(nombre,unidades,precio) 
    {
        this._nombre = nombre;
        this._unidades = unidades;
        this._precio = precio;    
    }

    // Getters y setters
    get nombre() 
    {
        return this._nombre;
    }
    set nombre(nombre) 
    {
        this._nombre = nombre;
    }

    get unidades() 
    {
        return this._unidades;
    }
    set unidades(unidades) 
    {
        this._unidades = unidades;
    }

    get precio() 
    {
        return this._precio;
    }
    set precio(precio) 
    {
        this._precio = precio;
    }
}

const p1 = new Producto("Leche", 10, 1.5);
console.log(p1);
p1.unidades = 20;
console.log(p1);
p1.nombre = "Leche desnatada";
console.log(p1);
p1.precio = 1.2;
console.log(p1);