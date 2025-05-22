class Usuario {
  idUsuario: number;
  nombre: string;
  email: string;
  contrasena: string;
  direccion: string;

  constructor(id: number, nombre: string, email: string, contrasena: string, direccion: string) {
    this.idUsuario = id;
    this.nombre = nombre;
    this.email = email;
    this.contrasena = contrasena;
    this.direccion = direccion;
  }

  registrarUsuario() {}
  registrarDatos() {}
  registrarCorreo() {}
  registrarContrasena() {}
}
