// Clase Producto.
class Producto {
    _idProducto;
    _nombreProducto;
    _precioUnidad;
    _idCategoria;

    constructor(idProducto, nombreProducto, precioUnidad, idCategoria) {
        this._idProducto = idProducto;
        this._nombreProducto = nombreProducto;
        this._precioUnidad = precioUnidad;
        this._idCategoria = idCategoria;
    }

    get idProducto() {
        return this._idProducto;
    }

    set idProducto(idProducto) {
        this._idProducto = idProducto;
    }

    get nombreProducto() {
        return this._nombreProducto;
    }

    set nombreProducto(nombreProducto) {
        this._nombreProducto = nombreProducto;
    }

    get precioUnidad() {
        return this._precioUnidad;
    }

    set precioUnidad(precioUnidad) {
        this._precioUnidad = precioUnidad;
    }

    get idCategoria() {
        return this._idCategoria;
    }

    set idCategoria(idCategoria) {
        this._idCategoria = idCategoria;
    }
}

// Clase Catalogo.
class Catalogo {
    _productos;

    constructor() {
        this._productos = [];
    }

    añadirProducto(idProducto, nombreProducto, precioUnidad, idCategoria) {
        const producto = new Producto(idProducto, nombreProducto, precioUnidad, idCategoria);
        this._productos.push(producto);
    }

    get productos(){
        return this._productos;
    }

    set productos(producto){
        this._productos = producto;
    }
}

// Clase LineaPedido.
class LineaPedido{
    _unidades;
    _idProducto;

    constructor(unidades, idProducto) {
        this._unidades=unidades;
        this._idProducto=idProducto;
    }

    get idProducto() {
        return this._idProducto;
    }
    set idProducto(value) {
        this._idProducto = value;
    }

    get unidades() {
        return this._unidades;
    }
    set unidades(value) {
        this._unidades = value;
    }
}

// Clase Cliente.
class Cliente {
    _nombre;
    _cuentaAbierta;

    constructor(nombre) {
        this.nombre = nombre;
        this.cuentaAbierta = false;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(value) {
        this._nombre = value;
    }

    get cuentaAbierta() {
        return this._cuentaAbierta;
    }

    set cuentaAbierta(cuentaAbierta) {
        this._cuentaAbierta = cuentaAbierta;
    }
}

// Clase Gestor.
class Gestor {
    _categorias;
    _comerciales;
    _clientes;
    _comercialActual;
    _clienteActual;
    _pedidos;

    constructor(comerciales, clientes, categorias) {
        this._categorias=categorias;
        this._comerciales=comerciales;
        this._clientes=[]; //[][]
        this._comercialActual=0;
        this._clienteActual=0;
        this._pedidos = []; //[][][] gestor.pedidos[i].push[]
        this._comerciales=comerciales;

        for (let i = 0; i < clientes.length; i++) {
            this._clientes.push([]);
            for (let j = 0; j < clientes[i].length; j++) {
                this._clientes[i][j] = new Cliente(clientes[i][j]);
            }
        }

        for (let i = 0; i < clientes.length; i++) {
            this._pedidos.push([]);
            for (let j = 0; j < clientes[i].length; j++) {
                this._pedidos[i].push([]);
            }
        }
    }

    get categorias() {
        return this._categorias;
    }

    set categorias(value) {
        this._categorias = value;
    }

    get comerciales() {
        return this._comerciales;
    }

    set comerciales(value) {
        this._comerciales = value;
    }

    get clientes() {
        return this._clientes;
    }

    set clientes(value) {
        this._clientes = value;
    }

    get comercialActual() {
        return this._comercialActual;
    }

    set comercialActual(value) {
        this._comercialActual = value;
    }

    get clienteActual() {
        return this._clienteActual;
    }

    set clienteActual(value) {
        this._clienteActual = value;
    }

    get pedidos() {
        return this._pedidos;
    }

    set pedidos(value) {
        this._pedidos = value;
    }
}