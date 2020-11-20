import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeriesComponent }from "./../../app/components/series/series.component";
import { UpdateComponent } from "./../../app/components/modificar/update.component"



const appRoutes: Routes = [
   {path:"",component:SeriesComponent},
   {path:"update/:idSerie",component:UpdateComponent}
];
export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);