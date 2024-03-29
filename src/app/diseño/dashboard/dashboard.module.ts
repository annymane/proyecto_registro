import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ThemeComponent } from './theme/theme.component';
import { UserComponent } from './user/user.component';
import { ReportesComponent } from './reportes/reportes.component';
import {DashboardComponent} from './dashboard.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { ConsultasComponent } from './consultas/consultas.component'



@NgModule({
  declarations: [
    HomeComponent,
    ThemeComponent,
    UserComponent,
    ReportesComponent,
    DashboardComponent,
    EspecialidadesComponent,
    ConsultasComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
