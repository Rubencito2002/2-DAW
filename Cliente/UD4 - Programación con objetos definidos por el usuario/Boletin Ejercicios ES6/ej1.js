/* 
Crear una función constructora de objetos Producto. Dichos productos tendrán tres atributos, uno de tipo cadena de caracteres llamado nombre, otro de tipo entero llamado unidades y otro de tipo real llamado precio. Aparte de estos tres atributos también contendría los siguientes métodos:
valorEnStock: que no recibe parámetros y devuelve el importe total de las unidades disponibles, es decir, la multiplicación de las unidades por el precio del producto.
incrementarStock: que recibe un entero como parámetro y aumenta el número de unidades en la cantidad indicada en el parámetro.
disminuirStock: que recibe un entero como parámetro y disminuye el número de unidades en la cantidad indicada en el parámetro.
Todos los métodos consultores (getter) y modificadores (setter) de los tres atributos descritos anteriormente, teniendo en cuenta que si por error se intentara modificar el atributo precio con un valor negativo, este debería guardarse automáticamente como positivo.
*/
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
