export class lugaresTrabajadosModel {
  constructor(
    public id: string,
    public nombre_lugar: string,
    public ubicacion: string,
    public trabajo: string,
    public contacto: string,
    public horas_trabajadas: number,
  ) {}
}
