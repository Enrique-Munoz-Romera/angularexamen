import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Router } from "@angular/router";
import { SeriesServices } from 'src/app/services/Series.service';
import { Serie } from 'src/app/models/Serie';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css']
})
export class InsertarComponent implements OnInit {
  public serie: Serie;

  @ViewChild("cajanumero") cajanumero:ElementRef;
  @ViewChild("cajanombre") cajanombre:ElementRef;
  @ViewChild("cajaAnyo") cajaAnyo:ElementRef;
  @ViewChild("cajaPunt") cajaPunt:ElementRef;
  @ViewChild("cajaImagen") cajaImagen:ElementRef;

   constructor(private _service:SeriesServices,
    
    private _route:Router) { 
      this.serie = Serie.prototype;
      this.cajanumero = ElementRef.prototype,
    this.cajanombre = ElementRef.prototype,
    this.cajaAnyo = ElementRef.prototype
    }

  ngOnInit(): void {
  }

}
