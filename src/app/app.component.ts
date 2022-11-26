import { Component, OnInit } from '@angular/core';
import { PacientesService } from './paciente/paciente.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PagHospital';
  pacientes :any;

  constructor(public paciente :PacientesService){}

  ngOnInit(){
    this.paciente.getPaciente().subscribe(
      (r)=> {this.pacientes = r ; console.log(r)}
    )
  }
}
