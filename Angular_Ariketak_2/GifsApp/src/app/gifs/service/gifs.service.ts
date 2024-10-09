import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];

  get historial() {
    // Los tres puntos son para romper la referencia con el historial original
    return [...this._historial];
  }

  buscarGifs (busqueda : string) {
    this._historial.unshift(busqueda);
    console.log(this._historial);
  }
  
}
