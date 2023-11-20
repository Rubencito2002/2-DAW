class Persona {
    // Atributos
    #nombre;
    #apellidos;
    #edad;
    // Constructor
    constructor(nombre, apellidos, edad) 
    {
        this.#nombre = nombre;
        this.#apellidos = apellidos;
        this.#edad = edad;
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
    
    get apellidos() 
    {
        return this.#apellidos;
    }
    set apellidos(apellidos) 
    {
        this.#apellidos = apellidos;
    }
    
    get edad() 
    {
        return this.#edad;
    }
    set edad(edad) 
    {
        this.#edad = edad;
    }
}

const p1 = new Persona("Pedro", "Suárez López", 45);
console.log(p1);
p1.apellidos = "Rodríguez García";
console.log(p1);
//console.log(p1.#apellidos);