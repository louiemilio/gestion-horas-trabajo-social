import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListadoEstudiantesComponent } from './listado-estudiantes/listado-estudiantes.component';
import { ListadoLugaresComponent } from './listado-lugares/listado-lugares.component';
import { ListadoOfertasComponent } from './listado-ofertas/listado-ofertas.component';
import { EstudianteService } from './services/estudiante.service';
import { LugaresTrabajadosService } from './services/lugares-trabajados.service';
import { OfertasService } from './services/ofertas.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    ListadoEstudiantesComponent,
    ListadoLugaresComponent,
    ListadoOfertasComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, BrowserAnimationsModule],
  providers: [EstudianteService, LugaresTrabajadosService, OfertasService],
  bootstrap: [AppComponent],
})
export class AppModule {}
