import { Injectable } from "@angular/core";
import { Observable, observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()

export class PacientesService{
    private Api = "http://localhost:8080/pacientes"

    constructor(public http:HttpClient){}

    public getPaciente():Observable<any>{
        return this.http.get(this.Api);
    }
}