const CarritoCompra = require("../index");

describe('CarritoCompra', () => {
    let carrito;

    beforeEach(() => {
        carrito = new CarritoCompra();
    });

    test('El carrito se inicializa como un array vacío', () => {
        expect(carrito.productos).toEqual([]);
    });

    test('Agregar un producto al carrito', () => {
        const producto = { nombre: 'Camiseta', precio: 20 };
        carrito.agregarProducto(producto);
        expect(carrito.productos).toEqual([producto]);
    });

    test('Calcular el total de la compra', () => {
        const obtenerPrecioProducto = jest.fn()
            .mockReturnValueOnce(20)
            .mockReturnValueOnce(30);

        carrito.agregarProducto({ nombre: 'Camiseta', precio: obtenerPrecioProducto('Camiseta') });
        carrito.agregarProducto({ nombre: 'Pantalón', precio: obtenerPrecioProducto('Pantalón') });

        expect(carrito.calcularTotal()).toBe(50);
        expect(obtenerPrecioProducto).toHaveBeenCalledTimes(2);
        expect(obtenerPrecioProducto).toHaveBeenNthCalledWith(1, 'Camiseta');
        expect(obtenerPrecioProducto).toHaveBeenNthCalledWith(2, 'Pantalón');
    });

    test('Aplicar un descuento al total de la compra', () => {
        const obtenerPrecioProducto = jest.fn()
            .mockReturnValueOnce(20)
            .mockReturnValueOnce(30);

        carrito.agregarProducto({ nombre: 'Camiseta', precio: obtenerPrecioProducto('Camiseta') });
        carrito.agregarProducto({ nombre: 'Pantalón', precio: obtenerPrecioProducto('Pantalón') });

        expect(carrito.aplicarDescuento(10)).toBe(45);
    });
});