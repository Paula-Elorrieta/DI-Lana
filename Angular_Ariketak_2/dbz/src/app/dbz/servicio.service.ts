import { Injectable } from '@angular/core';
import { Personaje } from './interfaces/dbz.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor() { console.log('Servicio inicializado'); }

  Goku: Personaje = {
    nombre: 'Goku',
    poder: 10000
  }

  Krillin: Personaje = {
    nombre: 'Krillin',
    poder: 5000
  }

  Vegetta: Personaje = {
    nombre: 'Vegetta',
    poder: 8000
  }

  private _personajes: Personaje[] = [this.Krillin, this.Goku, this.Vegetta];

  get personajes() {
    return [...this._personajes];
  }

  agregarNuevoPersonaje(personaje: Personaje) {
    this._personajes.push(personaje);
  }

}
