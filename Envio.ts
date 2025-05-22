class Envio {
  idEnvio: number;
  numeroEnvio: string;
  direccion: string;
  pais: string;

  constructor(id: number, numero: string, direccion: string, pais: string) {
    this.idEnvio = id;
    this.numeroEnvio = numero;
    this.direccion = direccion;
    this.pais = pais;
  }

  agregarNumero() {}
  agregarDireccion() {}
  validarDireccion() {}
}