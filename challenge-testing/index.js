



class CarritoCompra {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    calcularTotal() {
        let total = 0;
        this.productos.forEach(producto => {
            total += producto.precio;
        });
        return total;
    }

    aplicarDescuento(porcentaje) {
        const total = this.calcularTotal();
        const descuento = total * (porcentaje / 100);
        return total - descuento;
    }
}


module.exports = CarritoCompra;