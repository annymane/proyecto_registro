import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interface/menu';
import { ApiService } from 'src/app/Server/api.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  menu : Menu[] = [];

  constructor( private _apiService : ApiService) { }

  ngOnInit(): void {
    this.cargarMenu();
  }

  cargarMenu(){
    this._apiService.getMenu().subscribe( data => {
      this.menu = data;
    })
  }

}
