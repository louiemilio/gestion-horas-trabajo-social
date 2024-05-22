import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListadoEstudiantesComponent } from './listado-estudiantes/listado-estudiantes.component';
import { ListadoLugaresComponent } from './listado-lugares/listado-lugares.component';
import { ListadoOfertasComponent } from './listado-ofertas/listado-ofertas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoEstudiantesComponent,
    ListadoLugaresComponent,
    ListadoOfertasComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
