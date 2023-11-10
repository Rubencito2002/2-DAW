class Producto{
    // Atributos
    #nombre;
    #unidades;
    #precio;

    // Constructor
    constructor(nombre,unidades,precio) 
    {
        this.#nombre = nombre;
        this.#unidades = unidades;
        this.precio = precio;    
    }

    // Getters y setters
    get nombre() 
    {
        return this.#nombre;
    }
    set nombre(nombre) 
    {
        this.#nombre = nombre;
    }

    get unidades() 
    {
        return this.#unidades;
    }
    set unidades(unidades) 
    {
        this.#unidades = unidades;
    }

    get precio() 
    {
        return this.#precio;
    }
    set precio(precio) 
    {
        this.#precio = Math.abs(precio);
    }

    valorEnStock() 
    {
        return this.#unidades * this.#precio;
    }

    incrementarStock(entero)
    {
        this.#unidades += entero;
    }

    disminuirStock(entero)
    {
        this.#unidades -= entero;
    }


}

const p1 = new Producto("Leche", 10, 1.5);
console.log(p1);
console.log(p1.valorEnStock());
p1.incrementarStock(5);
console.log(p1);
p1.disminuirStock(2);
console.log(p1);
