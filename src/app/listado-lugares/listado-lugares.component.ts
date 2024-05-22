import { Component } from '@angular/core';

interface Lugar {
  nombreLugar: string;
  ubicacion: string;
  trabajo: string;
  contactoPersona: string;
  celular: string;
  horas: number;
  observacion: string;
}

@Component({
  selector: 'app-listado-lugares',
  templateUrl: './listado-lugares.component.html',
  styleUrls: ['./listado-lugares.component.css']
})
export class ListadoLugaresComponent {
    lugares: Lugar[] = [];
    nuevoLugar: Lugar = {
    nombreLugar: '',
    ubicacion: '',
    trabajo: '',
    contactoPersona: '',
    celular: '',
    horas: 0,
    observacion: '',
};

indiceEdicion: number | null = null;

  agregarLugar() {
    this.lugares.push({...this.nuevoLugar});
    this.nuevoLugar = {
      nombreLugar: '',
      ubicacion: '',
      trabajo: '',
      contactoPersona: '',
      celular: '',
      horas: 0,
      observacion: '',
    };
  }

  editarLugar(index: number) {
    this.indiceEdicion = index;
  }

  guardarEdicion() {
    if (this.indiceEdicion !== null) {
      this.lugares[this.indiceEdicion] = {...this.lugares[this.indiceEdicion]};
      this.indiceEdicion = null;
    }
  }

  eliminarLugar(index: number) {
    this.lugares.splice(index, 1);
  }
}
