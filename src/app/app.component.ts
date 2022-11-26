import { Component, OnInit } from '@angular/core';
import { ExamenesService } from './examen/examen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hospital';
  examenes :any;

  constructor(public examen :ExamenesService){}

  ngOnInit(){
    this.examen.getExamenes().subscribe(
      (r)=> {this.examenes = r ; console.log(r)}
    )
  }
}