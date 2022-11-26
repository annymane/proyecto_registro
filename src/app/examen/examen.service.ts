import { Injectable } from "@angular/core";
import { Observable, observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()

export class ExamenesService{
    private Api = "http://localhost:8080/examenes"

    constructor(public http:HttpClient){}

    public getExamenes():Observable<any>{
        return this.http.get(this.Api);
    }
}