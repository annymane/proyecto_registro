import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from 'src/app/interface/menu';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient) { }

  getMenu(): Observable<Menu[]>{
    return this.http.get<Menu[]>('./assets/data/menu.json');
  }
}
