import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
