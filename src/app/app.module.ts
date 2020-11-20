import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { SeriesComponent } from './components/series/series.component';
import {SeriesServices} from "./../app/services/Series.service";
import {routing,appRoutingProvider}from "./services/app.routing";
import { HttpClientModule } from "@angular/common/http";
import { UpdateComponent } from './components/modificar/update.component';
import { MenuComponent } from './components/menu/menu.component';
import { InsertarComponent } from './components/insertar/insertar.component';

@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent,
    UpdateComponent,
    MenuComponent,
    InsertarComponent
  ],
  imports: [
    BrowserModule,
    routing,FormsModule,HttpClientModule
  ],
  providers: [SeriesServices,appRoutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
