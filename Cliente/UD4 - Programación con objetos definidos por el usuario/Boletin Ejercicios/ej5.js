/*
Desarrolla un programa que permita modelar el funcionamiento del sistema de título de abono del transporte público. Para ello, parta de una clase llamada Bonobus que dispondrá de un método llamado picarViaje, que recibirá como argumento un número entero indicando la línea de autobús, tres enteros para representar el día, mes y año de la fecha actual, y dos enteros para representar la hora y los minutos del momento en el que se pica el billete. Este método devolverá un valor booleano que será verdadero cuando se haya podido picar el viaje y falso cuando el bono ya no sea válido. Hay que implementar dos clases hijas de Bonobus llamadas BonoDiezViajes y BonoTarifaPlana, que representan respectivamente un bono con 10 viajes y un bono válido durante un periodo de tiempo. La clase BonoDiezViajes permitirá realizar 10 viajes, tras los cuales quedará invalidado el bono. Para controlar el número de viajes restantes la clase dispondrá de un atributo privado de tipo entero para el cual se implementará sus métodos consultores y modificadores. De la clase anterior heredará otra llamada BonoDiezViajesConTrasbordo, que permitirá realizar un trasbordo durante la hora posterior a la cancelación del billete siempre que se utilice en otra línea de autobús diferente a aquélla en la que se realizó la cancelación. Esta clase deberá disponer de un atributo de tipo entero para controlar la línea del último autobús en el que se picó el último viaje, tres atributos de tipo entero para controlar la fecha de dicho viaje, y dos de tipo entero para controlar la hora. Todos estos atributos dispondrán de su correspondiente método consultor y modificador. La clase BonoTarifaPlana dispondrá de los atributos necesarios, con sus métodos consultores y modificadores, para representar la fecha en la que caduca la tarjeta. Esta clase implementará el método picarViaje de tal forma que permita realizar viajes mientras que la fecha de validez no sea anterior a la fecha actual. Heredando de la clase anterior, cree las clases necesarias para representar los bonos con validez de un día, tres días, un mes y un año. Estas clases sobrescribirán el método picarViaje de forma tal que se establezca la fecha de caducidad a partir de la primera vez que se cancele un viaje del bono, y se use la implementación de la clase padre para realizar las comprobaciones pertinentes. Desarrolle instanciaciones de todas las clases anteriormente descritas para comprobar que funcionan correctamente. 
*/
class Bonobus
{
    picar1viaje(linea, dia, mes, anno, hora, minutos)
    {
        console.log(`Viaje picado en la línea ${linea} a las ${hora}:${minutos}`);
        return true;
    }
}

class BonoDiezViajes extends Bonobus
{
    // Constructor
    constructor()
    {
        super();
        this.viajesRestantes = 10;
    }

    // Métodos
    getViajesRestantes()
    {
        return this.viajesRestantes;
    }

    setViajesRestantes(viajesRestantes)
    {
        this.viajesRestantes = viajesRestantes;
    }

    picar1viaje(linea, dia, mes, anno, hora, minutos)
    {
        if(this.viajesRestantes > 0)
        {
            this.viajesRestantes--;
            return super.picar1viaje(linea, dia, mes, anno, hora, minutos);
        }
        else
        {
            console.log("Bono Diez Viajes agotado. No se puede picar más.");
            return false;
        }
    }
}

class BonoDiezViajesConTrasbordo extends BonoDiezViajes
{
    // Constructor
    constructor()
    {
        super();
        this.ultimaLinea = 0;
        this.ultimaFecha = { dias: 0, mes: 0, anno: 0};
        this.ultimaHora = 0;
        this.ultimoMinutos = 0;
    }

    // Métodos
    getUltimaLinea()
    {
        return this.ultimaLinea;
    }

    setUltimaLinea(ultimaLinea)
    {
        this.ultimaLinea = ultimaLinea;
    }

    getUltimaFecha()
    {
        return this.ultimaFecha;
    }

    setUltimaFecha(ultimaFecha)
    {
        this.ultimaFecha = ultimaFecha;
    }

    getUltimaHora()
    {
        return this.ultimaHora;
    }

    setUltimaHora(ultimaHora)
    {
        this.ultimaHora = ultimaHora;
    }

    getUltimoMinutos()
    {
        return this.ultimoMinutos;
    }

    setUltimoMinutos(ultimoMinutos)
    {
        this.ultimoMinutos = ultimoMinutos;
    }

    picar1viaje(linea, dia, mes, anno, hora, minutos)
    {
        const horaTrasbordo = this.ultimaHora + 1;
        if(this.viajesRestantes > 0 && this.ultimaLinea !== linea && dia === this.ultimaFecha.dia && mes === this.ultimaFecha.mes && anno === this.ultimaFecha.anno &&
            ((hora === horaTrasbordo && minutos >= this.ultimosMinutos) || hora > horaTrasbordo))
        {
            this.viajesRestantes--;
            return super.picarViaje(linea, dia, mes, anno, hora, minutos);
        }
        else
        {
            console.log("No se puede realizar trasbordo en la misma línea o fuera de la ventana de tiempo.");
            return false;
        }
    }
}

class BonoTarifaPlana extends Bonobus
{
    // Constructor
    constructor(dia, mes, anno)
    {
        super;
        this.fechaCaducidad = { dia: dia, mes: mes, anno: anno };
    }

    // Métodos
    getFechaCaducidad()
    {
        return this.fechaCaducidad;
    }

    setFechaCaducidad(fechaCaducidad)
    {
        this.fechaCaducidad = fechaCaducidad;
    }

    picar1viaje(linea, dia, mes, anno, hora, minutos)
    {
        const fechaActual = {dia, mes, anno};

        if (this.esFechaValida(fechaActual))
            return super.picar1viaje(linea, dia, mes, anno, hora, minutos);
        else
        {
            console.log("Bono Tarifa Plana caducado. No se puede picar más.");
            return false;
        } 
    }

    esFechaValida(esFechaValida)
    {
        return ( fechaActual.anno < this.fechaCaducidad.anno || (fechaActual.anno === this.fechaCaducidad.anno && (fechaActual.mes < this.fechaCaducidad.mes ||
                (fechaActual.mes === this.fechaCaducidad.mes && fechaActual.dia <= this.fechaCaducidad.dia))));
    }
}

// Ejemplo de uso
const bonoDiezViajes = new BonoDiezViajes();
for (let i = 0; i < 12; i++) 
{
    bonoDiezViajes.picarViaje(1, 13, 11, 2023, 8, 30);
}

const bonoConTrasbordo = new BonoDiezViajesConTrasbordo();
bonoConTrasbordo.picarViaje(1, 13, 11, 2023, 8, 30);
bonoConTrasbordo.setUltimaLinea(1);
bonoConTrasbordo.setUltimaFecha({ dia: 13, mes: 11, anno: 2023 });
bonoConTrasbordo.setUltimaHora(8);
bonoConTrasbordo.setUltimosMinutos(30);
bonoConTrasbordo.picarViaje(2, 13, 11, 2023, 9, 0);

const bonoTarifaPlana = new BonoTarifaPlana(15, 11, 2023);
bonoTarifaPlana.picarViaje(1, 13, 11, 2023, 8, 30);
bonoTarifaPlana.picarViaje(2, 14, 11, 2023, 9, 0);
bonoTarifaPlana.setFechaCaducidad({ dia: 16, mes: 11, anno: 2023 });
bonoTarifaPlana.picarViaje(1, 15, 11, 2023, 8, 30);