import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { ReportesComponent } from './reportes/reportes.component';
import { UserComponent } from './user/user.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'user', component: UserComponent},
    {path: 'reportes', component: ReportesComponent},
    {path: 'consultas', component: ConsultasComponent},
    {path: 'especialidades', component: EspecialidadesComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
