import { Component } from '@angular/core';

interface Oferta {
  nombre: string;
  ubicacion: string;
  nombreEstudiante: string;
  celular: string;
  horasInicial: number;
  horasFinal: number;
  observacion: string;
}

@Component({
  selector: 'app-listado-ofertas',
  templateUrl: './listado-ofertas.component.html',
  styleUrls: ['./listado-ofertas.component.css']
})
export class ListadoOfertasComponent {
    ofertas: Oferta[] = [];
    nuevaOferta: Oferta = {
    nombre: '',
    ubicacion: '',
    nombreEstudiante: '',
    celular: '',
    horasInicial: 0,
    horasFinal: 0,
    observacion: '',
};

indiceEdicion: number | null = null;

  agregarOferta() {
    this.ofertas.push({...this.nuevaOferta});
    this.nuevaOferta = {
      nombre: '',
      ubicacion: '',
      nombreEstudiante: '',
      celular: '',
      horasInicial: 0,
      horasFinal: 0,
      observacion: '',
    };
  }

  editarOferta(index: number) {
    this.indiceEdicion = index;
  }

  guardarEdicion() {
    if (this.indiceEdicion !== null) {
      this.ofertas[this.indiceEdicion] = {...this.ofertas[this.indiceEdicion]};
      this.indiceEdicion = null;
    }
  }

  eliminarOferta(index: number) {
    this.ofertas.splice(index, 1);
  }
}
