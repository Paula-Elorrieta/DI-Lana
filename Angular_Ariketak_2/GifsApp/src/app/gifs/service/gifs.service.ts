import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { gifsInterface } from '../interface/IGifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor(private httpClien: HttpClient) { }

  private _historial: string[] = [];
  //gifs : any[] = [];
  gifs : gifsInterface[] = [];

  get historial() {
    // Los tres puntos son para romper la referencia con el historial original
    return [...this._historial];
  }


  buscarGifs (busqueda : string) {
    // Si el array ya tiene 10 elementos se elimina el último
    if (this._historial.length >= 10) {
      this._historial.pop();
    }

    this._historial.unshift(busqueda);
    console.log(this._historial);


    this.httpClien.get("https://api.giphy.com/v1/gifs/search?api_key=nuy8WMynQh8AQFNtZ0ZA74upxyjFeGD1&q="+busqueda+"&limit=20").subscribe
      ((resp : any ) => {
      console.log(resp.data);
        this.gifs = resp.data;
    });
  }

  
  


      


  
}
