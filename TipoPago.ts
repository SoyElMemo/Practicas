class TipoPago {
  numeroTarjeta: string;
  nombreTitular: string;
  codigoVerificacion: string;

  constructor(numero: string, titular: string, codigo: string) {
    this.numeroTarjeta = numero;
    this.nombreTitular = titular;
    this.codigoVerificacion = codigo;
  }

  validarTarjeta() {}
  validarCodigo() {}
}