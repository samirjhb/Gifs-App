import { Component, OnInit } from '@angular/core';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styles: [
  ]
})
export class ResultadoComponent implements OnInit {
  get resultados(){
    return this.gifsSrevice.resultado;
  }

  constructor(private gifsSrevice:GifsService ) { }

  ngOnInit(): void {
  }

}
