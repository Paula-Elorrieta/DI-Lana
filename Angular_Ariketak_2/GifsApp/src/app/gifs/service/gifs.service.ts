import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { gifsInterface } from '../interface/IGifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor(private httpClien: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.gifs = JSON.parse(localStorage.getItem('gifs')!) || [];
   }

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

    if (!this._historial.includes(busqueda)) {
      // setItem es para que el valor se guarde en el localStorage.
      // LocalStorage es un objeto que se guarda en el navegador 
      // y se puede acceder desde cualquier parte del mismo.

      // JSON.stringify es para que el valor sea convertido a string
      localStorage.setItem('historial', JSON.stringify(this._historial));
      
      this._historial.unshift(busqueda);
    }


    this.httpClien.get("https://api.giphy.com/v1/gifs/search?api_key=dmYmc7hRyrpqgc5UItnw77JSb8Fi2dFf&q="+busqueda+"&limit=20").subscribe
      ((resp : any ) => {
      console.log(resp.data);
        this.gifs = resp.data;
        localStorage.setItem('gifs', JSON.stringify(this.gifs));
    });
  }

  
  


      


  
}
