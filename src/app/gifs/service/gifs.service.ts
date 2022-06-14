import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _historial: string[] = [];
  private apiKey: string = '0wCzvHHxWBp9dIEpFO5f0rgIvZ9RdnS5';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';

  public resultado: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    if (localStorage.getItem('historial')) {
      this._historial = JSON.parse(localStorage.getItem('historial')!);
    }
    if (localStorage.getItem('resultado')) {
      this.resultado = JSON.parse(localStorage.getItem('resultado')!);
    }
  }

  buscar(query: string = '') {
    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);

    console.log(params.toString());

    this.http
      .get<SearchGifsResponse>(`${this.servicioUrl}/search?`, { params })
      .subscribe((resp) => {
        this.resultado = resp.data;
        localStorage.setItem('resultado', JSON.stringify(this.resultado));
      });
  }
}
