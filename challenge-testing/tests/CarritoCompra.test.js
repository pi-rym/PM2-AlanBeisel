const CarritoCompra = require("../index");


describe('CarritoCompra', () => {
    it('debería tener un constructor', () => {
        const carrito = new CarritoCompra();
        expect(carrito.constructor).toBeDefined();
    });

    it('debería tener un método agregarProducto', () => {
        const carrito = new CarritoCompra();
        expect(carrito.agregarProducto).toBeDefined();
    });

    it('debería tener un método calcularTotal', () => {
        const carrito = new CarritoCompra();
        expect(carrito.calcularTotal).toBeDefined();
    });

    it('debería tener un método aplicarDescuento', () => {
        const carrito = new CarritoCompra();
        expect(carrito.aplicarDescuento).toBeDefined();
    });
});

describe('CarritoCompra', () => {
    let carrito;

    beforeEach(() => {
        carrito = new CarritoCompra();
    });

    test('El carrito se inicializa como un array vacío', () => {
        expect(carrito.productos).toEqual([]);
    });

    test('Agregar un producto', () => {
        const producto = { nombre: 'Camiseta', precio: 20 };
        carrito.agregarProducto(producto);
        expect(carrito.productos).toEqual([producto]);
    });

    test('Calcular el total', () => {
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

    test('Aplicar un descuento', () => {
        const obtenerPrecioProducto = jest.fn()
            .mockReturnValueOnce(20)
            .mockReturnValueOnce(30);

        carrito.agregarProducto({ nombre: 'Camiseta', precio: obtenerPrecioProducto('Camiseta') });
        carrito.agregarProducto({ nombre: 'Pantalón', precio: obtenerPrecioProducto('Pantalón') });

        expect(carrito.aplicarDescuento(10)).toBe(45);
    });
});