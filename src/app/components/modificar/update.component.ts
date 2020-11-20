import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { ActivatedRoute,Router,Params } from "@angular/router";
import { Serie } from 'src/app/models/Serie';
import { SeriesServices } from 'src/app/services/Series.service';




@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public serie: Serie;

  @ViewChild("cajanumero") cajanumero:ElementRef;
  @ViewChild("cajanombre") cajanombre:ElementRef;
  @ViewChild("cajaAnyo") cajaAnyo:ElementRef;
  @ViewChild("cajaPunt") cajaPunt:ElementRef;
  @ViewChild("cajaImagen") cajaImagen:ElementRef;

  constructor(private _service:SeriesServices,
    private _activatedRoute:ActivatedRoute,
    private _route:Router) { 
      this.serie = Serie.prototype;
    }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params:Params) => {
      this.buscarSerie(params.idSerie);
    })
  }

  buscarSerie(idSerie){
    this._service.buscarSerie(idSerie).subscribe(response => {
      this.serie = response;
    });
  }

 updateSerie(){
   var num = parseInt(this.cajanumero.nativeElement.value);
   var nom = this.cajanombre.nativeElement.value;
   var anyo = parseInt(this.cajaAnyo.nativeElement.value);
   var punt = parseInt(this.cajaPunt.nativeElement.value);
   var img = this.cajaImagen.nativeElement.value;
   var dept = new Serie(num,nom,img,punt,anyo);
   this._service.updateSerie(dept).subscribe(response => {
     this.serie = response;
   });
   console.log(this.serie);
 }

}

