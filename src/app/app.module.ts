import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './diseño/shared/shared/shared.module';


//import { EncabezadoComponent } from './base/encabezado/encabezado.component';
//import { PiepagComponent } from './base/piepag/piepag.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    //EncabezadoComponent,
    //PiepagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
