import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
interface Estudiante {
  nombreCompleto: string;
  cedula: string;
  correo: string;
  celular: string;
  lugarResidencia: string;
  carrera: string;
  anoEstudio: number;
  grupoActual: string;
  horas: number;
  empresa: string;
  observacion: string;
}

@Component({
  selector: 'app-listado-estudiantes',
  templateUrl: './listado-estudiantes.component.html',
  styleUrls: ['./listado-estudiantes.component.css']
})
export class ListadoEstudiantesComponent {
  estudiantes: Estudiante[] = [];
  nuevoEstudiante: Estudiante = {
    nombreCompleto: '',
    cedula: '',
    correo: '',
    celular: '',
    lugarResidencia: '',
    carrera: '',
    anoEstudio: 0,
    grupoActual: '',
    horas: 0,
    empresa: '',
    observacion: ''
};
  indiceEdicion: number | null = null;

  agregarEstudiante() {
    this.estudiantes.push({...this.nuevoEstudiante});
    this.nuevoEstudiante = {
      nombreCompleto: '',
      cedula: '',
      correo: '',
      celular: '',
      lugarResidencia: '',
      carrera: '',
      anoEstudio: 0,
      grupoActual: '',
      horas: 0,
      empresa: '',
      observacion: ''
    };
  }

  editarEstudiante(index: number) {
    this.indiceEdicion = index;
  }

  guardarEdicion() {
    if (this.indiceEdicion !== null) {
      this.estudiantes[this.indiceEdicion] = {...this.estudiantes[this.indiceEdicion]};
      this.indiceEdicion = null;
    }
  }

  eliminarEstudiante(index: number) {
    this.estudiantes.splice(index, 1);
  }
}