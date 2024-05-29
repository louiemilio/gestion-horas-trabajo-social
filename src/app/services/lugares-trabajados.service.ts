import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { lugaresTrabajadosModel } from '../shared/lugaresTrabajados.models';

@Injectable({
  providedIn: 'root'
})
export class LugaresTrabajadosService {
  BASE_URL = environment.BASE_URL;

  constructor(private http: HttpClient) {}

  obtenerLugares() {
    return this.http.get<lugaresTrabajadosModel[]>(this.BASE_URL + '/listado_lugares');
  }

  obtenerLugar(id: string) {
    return this.http.get<lugaresTrabajadosModel>(`${this.BASE_URL}/listado_lugares/${id}`);
  }

  agregarLugar(lugar: lugaresTrabajadosModel) {
    return this.http.post<string>(`${this.BASE_URL}/listado_lugares/agregar`, lugar);
  }

  actualizarLugar(id: string, lugar: lugaresTrabajadosModel) {
    return this.http.put<string>(`${this.BASE_URL}/listado_lugares/actualizar/${id}`, lugar);
  }

  borrarLugar(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/listado_lugares/borrar/${id}`);
  }
}
