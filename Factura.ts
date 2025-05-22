class Factura {
  nombreCliente: string;
  fecha: string;
  cedula: string;
  idFactura: number;

  constructor(nombre: string, fecha: string, cedula: string, id: number) {
    this.nombreCliente = nombre;
    this.fecha = fecha;
    this.cedula = cedula;
    this.idFactura = id;
  }

  guardarFactura() {}
}