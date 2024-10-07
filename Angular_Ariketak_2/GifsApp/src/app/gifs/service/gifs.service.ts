import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  historial: string[] = [];

    // La barra baja es para indicar que es privado
  get _historial() {
    // Los tres puntos son para romper la referencia con el historial original
    return [...this.historial];
  }

  buscarGifs (busqueda : string) {
    this.historial.unshift(busqueda);
    console.log(this.historial);
  }
  
}
