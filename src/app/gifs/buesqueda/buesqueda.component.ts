import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-buesqueda',
  templateUrl: './buesqueda.component.html',
  styles: [],
})
export class BuesquedaComponent implements OnInit {
  constructor(private gifsService: GifsService) {}

  ngOnInit(): void {}

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;

    if (valor.trim().length === 0) {
      return;
    }
    this.gifsService.buscar(valor);
    this.txtBuscar.nativeElement.value = '';
  }
}
