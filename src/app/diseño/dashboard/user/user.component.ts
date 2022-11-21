import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interface/usuario';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  list_usuarios: Usuario[] = [
    {id: '000118389', name: 'Manuel', lastname:'Torres', usuario: 'manu_to08', nit: '56093491'},
  ];

  displayedColumns: string[] = ['id', 'name', 'lastname', 'usuario', 'nit', 'opciones'];
  dataSource = new MatTableDataSource(this.list_usuarios);
  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
