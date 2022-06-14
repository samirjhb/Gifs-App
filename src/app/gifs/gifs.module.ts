import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BuesquedaComponent } from './buesqueda/buesqueda.component';
import { ResultadoComponent } from './resultado/resultado.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    BuesquedaComponent,
    ResultadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GifsPageComponent,
  ]
})
export class GifsModule { }
