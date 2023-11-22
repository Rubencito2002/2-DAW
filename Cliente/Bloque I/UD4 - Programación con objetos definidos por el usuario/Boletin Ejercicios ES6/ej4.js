/*
Implemente una clase Figura que represente de forma genérica a cualquier figura geométrica, debe tener un atributo color con sus correspondientes consultores y modificadores. Tendrá un constructor que recibirá el color como único parámetro e inicializará el atributo del mismo nombre. Además tendrá un método llamado imprimir que devolvería una cadena como esta si el atributo color fuera “rojo”: “Soy una figura de color rojo”. Crear una clase Rectangulo que herede de Figura. Los objetos de esta nueva clase tendrán los atributos base y altura, con sus modificadores y consultores. El método constructor recibe los parámetros de color, base y altura. De Figura también hereda la clase Circulo, que tendrá el atributo radio y sus métodos consultores y modificadores correspondientes. Ambas clases hijas tendrán un método calcularArea, que devolverá el área de la figura representada. Las dos redefinirán el método imprimir de manera que exprese qué figura es, cuál es su área y su color, por ejemplo: “Soy un rectángulo rojo de 20 cm2”. Instanciar varios objetos Figura, Circulo y Rectangulo y comprobar si tienen un funcionamiento correcto.
*/
class Figura
{
    // Atributos
    #color;

    // Constructor
    constructor(color)
    {
        this.#color = color;
    }

    // Getters y Setters
    get color()
    {
        return this.#color;
    }

    set color(color)
    {
        this.#color = color;
    }

    // Métodos
    imrpimir()
    {
        return 'Soy una figura de color ' + this.#color;
    }
}

class Rectangulo extends Figura
{
    // Atributos
    #base;
    #altura;

    // Constructor
    constructor(color, base, altura)
    {
        super(color);
        this.#base = base;
        this.#altura = altura;
    }

    // Getters y Setters
    get base()
    {
        return this.#base;
    }

    set base(base)
    {
        this.#base = base;
    }

    get altura()
    {
        return this.#altura;
    }

    set altura(altura)
    {
        this.#altura = altura;
    }

    // Métodos
    calcularArea()
    {
        return this.#base * this.#altura;
    }

    imrpimir()
    {
        return 'Soy un rectángulo de color ' + this.color + ' y mi área es ' + this.calcularArea();
    }
}

class Circulo extends Figura
{
    // Atributos
    #radio;

    // Constructor
    constructor(color, radio)
    {
        super(color);
        this.#radio = radio;
    }

    // Getters y Setters
    get radio()
    {
        return this.#radio;
    }

    set radio(radio)
    {
        this.#radio = radio;
    }

    // Métodos
    calcularArea()
    {
        return Math.round(Math.PI * Math.pow(this.#radio, 2));
    }

    imrpimir()
    {
        return 'Soy un círculo de color ' + this.color + ' y mi área es ' + this.calcularArea();
    }
}

const figura1 = new Figura("rojo");
console.log(figura1);
console.log(figura1.imrpimir());
const rect1 = new Rectangulo("amarillo",2, 3);
console.log(rect1);
console.log(rect1.calcularArea());
console.log(rect1.imrpimir());
const circ1 = new Circulo("verde", 5);
console.log(circ1);
console.log(circ1.calcularArea());
console.log(circ1.imrpimir());