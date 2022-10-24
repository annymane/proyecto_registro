import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interface/usuario';


const list_usuarios: Usuario[] = [
  {id: '000118389', name: 'William', lastname:'García', usuario: 'william_ga96', nit: '56093491'},
];

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'lastname', 'usuario', 'nit', 'opciones'];
  dataSource = list_usuarios;
  constructor() { }

  ngOnInit(): void {
  }

}
