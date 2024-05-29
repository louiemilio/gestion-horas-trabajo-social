import { Component, OnInit } from '@angular/core';
import { LugaresTrabajadosService } from '../services/lugares-trabajados.service';
import { lugaresTrabajadosModel } from '../shared/lugaresTrabajados.models';

@Component({
  selector: 'app-listado-lugares',
  templateUrl: './listado-lugares.component.html',
  styleUrls: ['./listado-lugares.component.css']
})
export class ListadoLugaresComponent implements OnInit {
  lugares: lugaresTrabajadosModel[] = [];
  nuevoLugar: lugaresTrabajadosModel = new lugaresTrabajadosModel('', '', '', '', '', 0);
  indiceEdicion: number | null = null;

  constructor(private lugaresService: LugaresTrabajadosService) {}

  ngOnInit() {
    this.obtenerLugares();
  }

  obtenerLugares() {
    this.lugaresService.obtenerLugares().subscribe({
      next: (lugares) => {
        this.lugares = lugares;
      },
      error: (error) => {
        console.error('Error al obtener los lugares:', error);
      }
    });
  }

  agregarLugar() {
    this.lugaresService.agregarLugar(this.nuevoLugar).subscribe({
      next: () => {
        this.obtenerLugares(); // Refresca la lista después de agregar un lugar
        this.nuevoLugar = new lugaresTrabajadosModel('', '', '', '', '', 0);
      },
      error: (error) => {
        console.error('Error al agregar el lugar:', error);
      }
    });
  }

  editarLugar(index: number) {
    this.indiceEdicion = index;
  }

  guardarEdicion() {
    if (this.indiceEdicion !== null) {
      const lugarActualizado = this.lugares[this.indiceEdicion];
      this.lugaresService.actualizarLugar(lugarActualizado.id, lugarActualizado).subscribe({
        next: () => {
          this.indiceEdicion = null;
          this.obtenerLugares();
        },
        error: (error) => {
          console.error('Error al actualizar el lugar:', error);
        }
      });
    }
  }

  eliminarLugar(index: number) {
    const lugarId = this.lugares[index].id;
    this.lugaresService.borrarLugar(lugarId).subscribe({
      next: () => {
        this.obtenerLugares();
      },
      error: (error) => {
        console.error('Error al eliminar el lugar:', error);
      }
    });
  }
}
