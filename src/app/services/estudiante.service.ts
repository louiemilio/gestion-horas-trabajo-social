import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { estudianteModel } from '../shared/estudiantes.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EstudianteService {
  BASE_URL = environment.BASE_URL;

  constructor(private http: HttpClient) {}

  obtenerEstudiantes() {
    return this.http.get<estudianteModel[]>(`${this.BASE_URL}/listado_estudiantes`);
  }

  obtenerEstudiante(id: string) {
    return this.http.get<estudianteModel>(`${this.BASE_URL}/listado_estudiantes/${id}`);
  }

  agregarEstudiante(estudiante: estudianteModel) {
    return this.http.post<string>(`${this.BASE_URL}/listado_estudiantes/agregar`, estudiante);
  }

  actualizarEstudiante(estudiante: estudianteModel) {
    return this.http.put<string>(`${this.BASE_URL}/listado_estudiantes/actualizar/${estudiante.id}`, estudiante);
  }

  borrarEstudiante(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/listado_estudiantes/borrar/${id}`);
  }
}
