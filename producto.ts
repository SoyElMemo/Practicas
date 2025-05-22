export class Producto {
  idProducto: number;
  nombreProducto: string;
  precio: number;
  stock: number;
  fecha: string;

  constructor(id: number, nombre: string, precio: number, stock: number, fecha: string) {
    this.idProducto = id;
    this.nombreProducto = nombre;
    this.precio = precio;
    this.stock = stock;
    this.fecha = fecha;
  }

  detalleProducto() {}
  cantidadDisponible() {}
  valorProducto() {}
}