class Cliente {
    // Atributos de Cliente.
    _dniCliente;
    _nombre;
    _apellidos;
    _usuario;

    // Constructor de Cliente.
    constructor(dniCliente, nombre, apellidos, usuario)
    {
        this._dniCliente = dniCliente;
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._usuario = usuario;
    }

    // Getters & Setters de Cliente.
    get dniCliente()
    {
        return this._dniCliente;
    }

    set dniCliente(dniCliente)
    {
        return this._dniCliente = dniCliente;
    }

    get nombre()
    {
        return this._nombre;
    }

    set nombre(nombre)
    {
        return this._nombre = nombre; 
    }

    get apellidos()
    {
        return this._apellidos;
    }

    set apellidos(apellidos)
    {
        return this._apellidos = apellidos;
    }

    get usuario()
    {
        return this._usuario;
    }

    set usuario(usuario)
    {
        return this._usuario = usuario;
    }

    // Metodos Extras de Cliente.
    toHTMLRow() 
    {
        let fila = "<tr>";
        fila += "<td>" + this.dniCliente + "</td>";
        fila += "<td>" + this.nombre + "</td>";
        fila += "<td>" + this.apellidos + "</td>";
        fila += "<td>" + this.usuario + "</td></tr>";
        return fila;
    }
}

class Vehiculo {
    // Atributos de Vehiculo.
    _matricula;
    _marca;
    _modelo;

    // Constructor de Vehiculo.
    constructor(matricula, marca, modelo)
    {
        this._matricula = matricula;
        this._marca = marca;
        this._modelo = modelo;
    }

    // Getters & Setters de Vehiculo.
    get matricula() 
    {
        return this._matricula;
    }

    set matricula(matricula) 
    {
        this._matricula = matricula;
    }
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

    set modelo(modelo) {
        this._modelo = modelo;
    }

    // Metodos Extras de Vehiculo.
    toHTMLRow() 
    {
        let fila = "<tr>";
        fila += "<td>" + this.matricula + "</td>";
        fila += "<td>" + this.marca + "</td>";
        fila += "<td>" + this.modelo + "</td></tr>";
        return fila;
    }
}

class Moto extends Vehiculo{
    // Atributos de Moto.
    _ciclomotor;

    // Constructor de Moto.
    constructor(matricula, marca, modelo, ciclomotor)
    {
        super(matricula, marca, modelo);
        this._ciclomotor = ciclomotor;
    }

    // Getters & Setters de Moto.
    get ciclomotor() 
    {
        return this._ciclomotor;
    }
    set ciclomotor(ciclomotor) 
    {
        this._ciclomotor = ciclomotor;
    }

    // Metodos Extras de Moto.
    toHTMLRow() 
    {
        let fila = super.toHTMLRow();
        fila = fila.slice(0, fila.length - 5);
        fila += "<td>" + (this.ciclomotor ? "SI" : "NO") + "</td></tr>";
        return fila;
    }
}

class Coche extends Vehiculo{
    // Atributos de Coche.
    _combustible;
    _plazas;
    
    // Constructor de Moto.
    constructor(matricula, marca, modelo, combustible, plazas)
    {
        super(matricula, marca, modelo);
        this._combustible = combustible;
        this._plazas = plazas;
    }

    // Getters & Setters de Coche.
    get combustible() 
    {
        return this._combustible;
    }

    set combustible(combustible) 
    {
        this._combustible = combustible;
    }

    get plazas() 
    {
        return this._plazas;
    }

    set plazas(plazas) {
        this._plazas = plazas;
    }

    // Metodos Extras de Moto.
    toHTMLRow() 
    {
        let fila = super.toHTMLRow();
        fila = fila.slice(0, fila.length - 5);
        fila += "<td>" + this.combustible + "</td>";
        fila += "<td>" + this.plazas + "</td></tr>";
        return fila;
    }
}

class Alquiler {
    // Atributos de Alquilar.
    _idAlquilar;
    _fechaInicio;
    _fechaFin;
    _cliente;
    _vehiculo;

    // Constructor de Alquilar.
    constructor(idAlquilar, fechaInicio, fechaFin, cliente, vehiculo)
    {
        this._idAlquilar = idAlquilar;
        this._fechaInicio = fechaInicio;
        this._fechaFin = fechaFin;
        this._cliente = cliente;
        this._vehiculo = [vehiculo];
    }

    // Getters & Setters de Alquilar.
    get idAlquilar() 
    {
        return this._idAlquilar;
    }

    set idAlquilar(idAlquilar) 
    {
        this._idAlquilar = idAlquilar;
    }

    get vehiculo() 
    {
        return this._vehiculo;
    }

    set vehiculo(vehiculo) 
    {
        this._vehiculo = vehiculo;
    }

    get fechaInicio() 
    {
        return this._fechaInicio;
    }

    set fechaInicio(fechaInicio) 
    {
        this._fechaInicio = fechaInicio;
    }

    get fechaFin() 
    {
        return this._fechaFin;
    }
    set fechaFin(fechaFin) 
    {
        this._fechaFin = fechaFin;
    }

    // Metodos Extras de Alquilar.
    toHTMLRow() 
    {
        let fila = "<tr>";
        fila += "<td>" + this.idAlquilar + "</td>";
        fila += "<td>" + this.Cliente + "</td>";
        fila += "<td>" + this.vehiculo + "</td></tr>";
        fila += "<td>" + this.fechaInicio + "</td></tr>";
        fila += "<td>" + this.fechaFin + "</td></tr>";
        return fila;
    }
}

class Agencia{
    // Atributos de Agencia.
    _cliente;
    _alquilar;
    _vehiculo;

    // Contructor de Agencia.
    constructor()
    {
        this._cliente = [];
        this._alquilar = [];
        this._vehiculo = [];
    }

    // Getters & Setters de Agencia.
    get cliente()
    {
        return this._cliente;
    }

    set cliente(cliente)
    {
        return this._cliente = cliente;
    }

    get alquilar()
    {
        return this._alquilar;
    }

    set alquilar(alquilar)
    {
        return this._alquilar = alquilar;
    }

    get vehiculo()
    {
        return this._vehiculo;
    }

    set vehiculo(vehiculo)
    {
        return this._vehiculo = vehiculo;
    }

    // Metodos Extras de Agencia.
    altaCliente(cliente)
    {
        let encontrado = this._cliente.includes(cliente);
        if(!encontrado)
        {
            this._cliente.push(cliente);
            return true;
        }
        else
        {
            return false;
        }
    }

    altaAlquiler(alquiler)
    {
        let encontrado = this._alquilar.includes(alquiler);
        if(!encontrado)
        {
            this._alquilar.push(alquiler);
            return true;
        }
        else
        {
            return false;
        }
    }

    buscarCliente(dniCliente)
    {
        let clienteEncontrado = this._cliente.find(cliente => cliente.dniCliente === dniCliente);

        if (clienteEncontrado) 
        {
            console.log("Cliente encontrado:", clienteEncontrado);
            return clienteEncontrado;
        } 
        else 
        {
            console.log("Cliente no encontrado");
            return null;
        }
    }

    buscarVehiculo(matricula)
    {
        return this._vehiculo.find(vehiculo => vehiculo.matricula === matricula);
    }

    altaVehiculo(vehiculo)
    {
        let existeMatricula = this.vehiculo.some(v => v.matricula === vehiculo.matricula);
        if(!existeMatricula)
        {
            this._vehiculo.push(vehiculo);
            return true;
        }
        else
        {
            return false;
        }
    }

    bajarAlquiler(idAlquiler)
    {
        let alquilerEncontrado = this._alquilar.find(alquiler => alquiler.idAlquilar === idAlquiler);
        if(alquilerEncontrado)
        {
            let indice = this._alquilar.indexOf(alquilerEncontrado);
            this._alquilar.splice(indice, 1);
            return true;
        }
        else
        {
            return false;
        }
    }

    listadoCliente()
    {
        let salida = "<table border='1'>";
        salida += "<thead><tr><th>DNI</th><th>Nombre</th><th>Apellidos</th><th>Usuario</th></thead><tbody>";
        for(let cliente of this._cliente)
        {
            salida += cliente.toHTMLRow();
        }
        
        salida += "</tbody></table>";
        return salida;
    }

    listadoVehiculo()
    {
        let salida = "<table border='1'>";
        salida += "<thead><tr><th>Matricula</th><th>Marca</th><th>Modelo</th><th>Ciclomotor</th></thead><tbody>";
        for(let vehiculo of this._vehiculo)
        {
            if(vehiculo._ciclomotor)
            {
                salida += vehiculo.toHTMLRow();
            }
        }
        salida += "</tbody></table>";

        let listadoCoche = "<table border='1'>";
        listadoCoche += "<thead><tr><th>Matricula</th><th>Marca</th><th>Modelo</th><th>Combustible</th><th>Plazas</th></thead><tbody>";
        for(let vehiculo of this._vehiculo)
        {
            if(vehiculo._combustible && vehiculo._plazas)
            {
                listadoCoche += vehiculo.toHTMLRow();
            }
        }        
        listadoCoche += "</tbody></table>";
        salida += "<br><br>" + listadoCoche;
        return salida;
    }

    listadoAlquileresFecha(fechaInicio, fechaFin)
    {
        let listado = this._alquilar.filter(alquiler => alquiler.fechaInicio >= fechaInicio && alquiler.fechaFin <= fechaFin);

        let salida = "<table border='1'>";
        salida += "<thead><tr><th>idAlquiler</th><th>idCliente</th><th>Nombre</th><th>Fecha Inicio</thead><th>Fecha Fin</thead><tbody>";
        for(let alquiler of listado)
        {
            salida += alquiler.toHTMLRow();
        }
        salida += "</tbody></table>";
        return salida;
    }

    listadoAlquileresCliente(idCliente)
    {
        //let dniClienteABuscar = 
        let listado = this.filtrarAlquilerPorDNI(idCliente);
        let salida = "<table border='1'>";
        salida += "<thead><tr><th>idAlquiler</th><th>idCliente</th><th>Nombre</th><th>Fecha Inicio</thead><th>Fecha Fin</thead><tbody>";
        for(let alquiler of listado)
        {
            salida += alquiler.toHTMLRow();
        }
        salida += "</tbody></table>";
        return salida;
    }

    filtrarAlquilerPorDNI(id1Cliente)
    {
        return this._alquilar.filter(alquiler => alquiler._cliente._dniCliente === id1Cliente);
    }

    listadoCocheElectrico()
    {
        let listado = this._vehiculo.filter(vehiculo => vehiculo._combustible === "Electrico" || vehiculo._combustible === "Eléctrico");
        let salida = "<table border='1'>";
        salida += "<thead><tr><th>Matricula</th><th>Marca</th><th>Modelo</th><th>Combustible</th><th>Plazas</th></thead><tbody>";
        for(let vehiculo of listado)
        {
            salida += vehiculo.toHTMLRow();
        }
        salida += "</tbody></table>";
        return salida;
    }
}