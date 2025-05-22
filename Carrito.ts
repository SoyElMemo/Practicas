import { Producto } from './producto';
class Carrito {
  
  listaProductos: Producto[] = [];

  agregarProducto(producto: Producto) {
    this.listaProductos.push(producto);
  }

  eliminarProducto() {}
  vaciarCarrito() {}
  comprarCarrito() {}
}