import { Injectable } from '@angular/core';
import { Autoa } from '../interface/carinterface.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  Honda : Autoa = {
    modeloa: 'Civic',
    prezioa: 25000
  }

  Toyota : Autoa = {
    modeloa: 'Corolla',
    prezioa: 20000
  }

  Nissan : Autoa = {
    modeloa: 'Sentra',
    prezioa: 18000
  }

  private _kotxeak: Autoa[] = [this.Honda, this.Toyota, this.Nissan];

  get kotxeak() {
    return [...this._kotxeak];
  }

  kotxeberriasartu(Autoa: Autoa) {
    this._kotxeak.push(Autoa);
  }


}
