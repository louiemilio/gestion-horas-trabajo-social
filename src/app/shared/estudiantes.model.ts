export class estudianteModel {
  constructor(
    public id: string,
    public nombre_completo: string,
    public correo: string,
    public telefono: string,
    public lugar_residencia: string,
    public carrera: string,
    public ano_estudio: number,
    public grupo_estudiante: string,
    public horas_trabajadas: number,
    public empresa: string,
    public observacion: string,
    public acciones: string
  ) {}
}
