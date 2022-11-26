import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PacienteComponent } from './paciente/paciente.component';
import { PacientesService } from './paciente/paciente.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PacienteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PacientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
