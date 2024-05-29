import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../services/estudiante.service'; 
import { estudianteModel } from '../shared/estudiantes.model'; 



@Component({
  selector: 'app-listado-estudiantes',
  templateUrl: './listado-estudiantes.component.html',
  styleUrls: ['./listado-estudiantes.component.css']
})
export class ListadoEstudiantesComponent implements OnInit {
  estudiantes: estudianteModel[] = [];
  nuevoEstudiante: estudianteModel = new estudianteModel('', '', '', '', '', '', 0, '', 0, '', '');
  indiceEdicion: number | null = null;

  constructor(private estudianteService: EstudianteService) {}

  ngOnInit() {
    this.obtenerEstudiantes();
  }

  obtenerEstudiantes() {
    this.estudianteService.obtenerEstudiantes().subscribe(estudiantes => {
      this.estudiantes = estudiantes;
    });
  }

  agregarEstudiante() {
    this.estudianteService.agregarEstudiante(this.nuevoEstudiante).subscribe(response => {
      this.obtenerEstudiantes();
      this.nuevoEstudiante = new estudianteModel('', '', '', '', '', '', 0, '', 0, '', '');
    });
  }

  editarEstudiante(index: number) {
    this.indiceEdicion = index;
  }

  guardarEdicion() {
    if (this.indiceEdicion !== null) {
      const estudianteEditado = this.estudiantes[this.indiceEdicion];
      this.estudianteService.actualizarEstudiante(estudianteEditado).subscribe(response => {
        this.obtenerEstudiantes();
        this.indiceEdicion = null;
      });
    }
  }

  eliminarEstudiante(index: number) {
    const estudianteId = this.estudiantes[index].id;
    this.estudianteService.borrarEstudiante(estudianteId).subscribe(response => {
      this.obtenerEstudiantes();
    });
  }
}
