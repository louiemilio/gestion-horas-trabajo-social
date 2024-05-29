export class ofertasModel {
  constructor(
    public id: string,
    public nombre: string,
    public ubicacion: string,
    public nombre_estudiante: string,
    public celular: string,
    public horas_inicial: string,
    public horas_final: string,
    public observaciones: string
  ) {}
}
