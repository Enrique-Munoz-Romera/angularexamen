import { Injectable } from "@angular/core"
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { Global } from "./Global";
import { Serie } from "./../models/Serie";

@Injectable()

export class SeriesServices {

    private url : string;

    constructor(private _http:HttpClient){
        this.url=Global.urlSerie;
    }

    getSeries(): Observable<any>{
        var request = "/api/Series";
        return this._http.get(this.url + request);
    }

    insertarSerie(serie: Serie): Observable<any>{
        var request = "/api/Series";
        var json = JSON.stringify(serie);
        var header = new HttpHeaders().set("content-Type","application/json");
        return this._http.post(this.url + request, json ,
            {
                headers:header
            });
    }

    buscarSerie(idSerie:string):Observable<any>{
        var request = "/api/Series/" + idSerie;
        return this._http.get(this.url + request)
    }

    updateSerie(serie:Serie):Observable<any>{
        var request = "/api/Series";
        let json = JSON.stringify(serie);
        let header = new HttpHeaders().set("content-Type","application/json");
        return this._http.put(this.url + request,json,
            {
                headers:header
            });
    }   

    deleteSerie(idSerie:string): Observable<any>{
        var request = "/api/Series/" + idSerie;
        return this._http.delete(this.url + request);

    }

}