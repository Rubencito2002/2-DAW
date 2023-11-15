// Figura
function Figura(color)
{
    this.color = color;
}

Figura.prototype.getColor = function()
{
    return this.color;
}

Figura.prototype.setColor = function(color)
{
    this.color = color;
}

Figura.prototype.imprimir = function()
{
    return 'Soy una figura de color ' + this.color;
}

// Rectangulo
function Rectangulo(color, base, altura)
{
    Figura.call(this, color);
    this.base = base;
    this.altura = altura;
}

Rectangulo.prototype = Object.create(Figura.prototype);
Rectangulo.prototype.constructor = Rectangulo;

Rectangulo.prototype.calcularArea = function()
{
    return 0.5 * this.base * this.altura;
}

// Prueba
let r = new Rectangulo('rojo', 7, 2);

console.log(r.imprimir() + ' de area ' + r.calcularArea());