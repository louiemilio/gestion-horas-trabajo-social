import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../services/ofertas.service';
import { ofertasModel } from '../shared/ofertas.model';

@Component({
  selector: 'app-listado-ofertas',
  templateUrl: './listado-ofertas.component.html',
  styleUrls: ['./listado-ofertas.component.css']
})
export class ListadoOfertasComponent implements OnInit {
  ofertas: ofertasModel[] = [];
  nuevaOferta: ofertasModel = new ofertasModel('', '', '', '', '', 0, 0, '');
  indiceEdicion: number | null = null;

  constructor(private ofertasService: OfertasService) {}

  ngOnInit() {
    this.obtenerOfertas();
  }

  obtenerOfertas() {
    this.ofertasService.obtenerOfertas().subscribe({
      next: (ofertas) => {
        this.ofertas = ofertas;
      },
      error: (error) => {
        console.error('Error al obtener las ofertas:', error);
      }
    });
  }

  agregarOferta() {
    this.ofertasService.agregarOferta(this.nuevaOferta).subscribe({
      next: () => {
        this.obtenerOfertas();
        this.nuevaOferta = new ofertasModel('', '', '', '', '', 0, 0, '');
      },
      error: (error) => {
        console.error('Error al agregar la oferta:', error);
      }
    });
  }

  editarOferta(index: number) {
    this.indiceEdicion = index;
  }

  guardarEdicion() {
    if (this.indiceEdicion !== null) {
      const ofertaActualizada = this.ofertas[this.indiceEdicion];
      this.ofertasService.actualizarOferta(ofertaActualizada).subscribe({
        next: () => {
          this.indiceEdicion = null;
          this.obtenerOfertas();
        },
        error: (error) => {
          console.error('Error al actualizar la oferta:', error);
        }
      });
    }
  }

  eliminarOferta(index: number) {
    const ofertaId = this.ofertas[index].id;
    this.ofertasService.borrarOferta(ofertaId).subscribe({
      next: () => {
        this.obtenerOfertas();
      },
      error: (error) => {
        console.error('Error al eliminar la oferta:', error);
      }
    });
  }
}
