// Clase Producto.
class Producto {
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
    constructor() {
        this.productos = [];
    }

    añadirProducto(idProducto, nombreProducto, precioUnidad, idCategoria) {
        const producto = new Producto(idProducto, nombreProducto, precioUnidad, idCategoria);
        this.productos.push(producto);
    }
}

// Clase LineaPedido.
class LineaPedido{
    _unidades;
    _idProducto;

    constructor(unidades, idProducto){
        this.unidades = unidades;
        this.idProducto = idProducto;
    }
    
    get unidades() {
        return this.unidades;
    }

    set unidades(unidades) {
        this._unidades = unidades;
    }
    
    get idProducto() {
        return this._idProducto;
    }

    set idProducto(idProducto) {
        this._idProducto = idProducto;
    }
}

// Clase Cliente.
class Cliente {
    _nombre;
    _cuentaAbierta;
    _tienePedido;

    constructor(nombre) {
        this.nombre = nombre;
        this.cuentaAbierta = false;
        this.lineaPedido = [];
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

    agregarLineaPedido(lineaPedido){
        this.lineaPedido.push(lineaPedido);
    }

    incrementarUnidades(idProducto){
        const lineaPedido = this.lineaPedido.find((linea) => linea.idProducto === idProducto);
        if(lineaPedido){
            lineaPedido.unidades += 1;
        }

        this.actualizarTotalYPanel();
    }

    disminuirUnidades(idProducto){
        const lineaPedido = this.lineaPedido.find((linea) => linea.idProducto === idProducto);
        if(lineaPedido){
            if(lineaPedido.unidades > 1){
                lineaPedido.unidades -= 1;
            } else{
                const confirmacion = confirm('Seguro que quieres eliminar la ultima unidad?');
                if(confirmacion){
                    this.eliminarLineaPedido(idProducto);
                }
            }
        }
        this.actualizarTotalYPanel();
    }

    eliminarLineaPedido(idProducto){
        this.lineaPedido = this.lineaPedido.find((linea) => linea.idProducto === idProducto);
        this.actualizarTotalYPanel();
    }

    actualizarTotalYPanel(){
        const totalPedido = this.calcularTotalPedido();
        const totalElement = document.getElementById('totalPedido');
        if(totalElement){
            totalElement.textContent = `Total: $${totalPedido.toFixed(2)}`;
        }
        actualizarPanelCliente();
    }

    calcularTotalPedido(){
        return this.lineaPedido.reduce((total, linea) => total + linea.unidades * linea.precioUnidad, 0);
    }
}

// Clase Gestor.
class Gestor {
    _comercialActual;
    _clienteActual;

    constructor() {
        this.categorias = categorias;
        this.comerciales = comerciales;
        this.clientes = [[]];
        this.comercialActual = 0;
        this.clienteActual = 0;
        this.pedidos = [[[]]];

        // Inicializar clientes con instancias de Cliente
        this.clientes[0] = clientes[0].map(nombre => new Cliente(nombre));
    }

    get comercialActual() {
        return this._comercialActual;
    }

    set comercialActual(comercialActual) {
        this._comercialActual = comercialActual;
    }

    get clienteActual() {
        return this._clienteActual;
    }

    set clienteActual(clienteActual) {
        this._clienteActual = clienteActual;
    }
}