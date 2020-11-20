import { Component, OnInit } from '@angular/core';

import { ActivatedRoute,Params } from "@angular/router";
import { SeriesServices } from "./../../services/Series.service";

import{ Serie } from "./../../models/Serie";

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  public series:Array<Serie>

  constructor(private _service:SeriesServices,
    private _activatedRoute:ActivatedRoute) { 
      this.series = [];
    }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params: Params) => {
      if(params.idSerie != null){
        //debemos eliminar
        this.eliminarSerie(params.idSerie);
      }else{
        this.cargarSerie();
      }
    });
  }

  cargarSerie(){
    this._service.getSeries().subscribe(response => {
      this.series = response;
      console.log(this.series);
    },error =>{
      console.log(error);
    });
   
  }
  
  eliminarSerie(id){
    this._service.deleteSerie(id).subscribe(response => {
          this.cargarSerie();
    });
  }


}
