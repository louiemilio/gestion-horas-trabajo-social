import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ofertasModel } from '../shared/ofertas.model';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {
  BASE_URL = environment.BASE_URL;
  constructor(private http: HttpClient) {}

  obtenerOfertas() {
    return this.http.get<ofertasModel[]>(`${this.BASE_URL}/ofertas_laborales`);
  }

  obtenerOferta(id: string) {
    return this.http.get<ofertasModel[]>(`${this.BASE_URL}/ofertas_laborales/${id}`);
  }

  agregarOferta(oferta: ofertasModel) {
    return this.http.post<string>(`${this.BASE_URL}/ofertas_laborales/agregar`, oferta);
  }

  actualizarOferta(oferta: ofertasModel) {
    return this.http.put<string>(`${this.BASE_URL}/ofertas_laborales/actualizar/${oferta.id}`, oferta);
  }

  borrarOferta(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/ofertas_laborales/borrar/${id}`);
  }
}