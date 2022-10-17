import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesoComponent } from './diseño/acceso/acceso.component';
import {EditarComponent} from './diseño/editar/editar.component';
import { NuevoComponent} from './diseño/nuevo/nuevo.component';
import {TableroComponent} from './diseño/tablero/tablero.component';

const routes: Routes = [
  { path: '', redirectTo: 'acceso', pathMatch: 'full' },
  { path: 'acceso', component: AccesoComponent },

  { path: 'editar', component: EditarComponent },
  { path: 'nuevo', component: NuevoComponent },
  { path: 'tablero', component: TableroComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AccesoComponent, EditarComponent, NuevoComponent, TableroComponent]
