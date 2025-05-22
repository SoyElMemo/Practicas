class TipoProducto {
  idTipo: number;
  categoria: string;
  impuesto: number;

  constructor(id: number, categoria: string, impuesto: number) {
    this.idTipo = id;
    this.categoria = categoria;
    this.impuesto = impuesto;
  }

  registrarTipoProducto() {}
  distribuirCategoria() {}
  agregarImpuesto() {}
}