import { Injectable } from '@angular/core';
import { Errezeta } from '../errezetak/interface/interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ErrezetakService {
  _errezetak : Errezeta[] = [];
  errezetakFiltratuta: Errezeta[] = [];
  httpClient : HttpClient;
  Url  = "http://localhost:3000/errezetak";

  get getErrezetakKopia() {
    return [...this._errezetak];
  }

  constructor(httpclient : HttpClient,  private snackBar: MatSnackBar) {
    this.httpClient = httpclient;
  }

  fetchErrezetak() : Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.httpClient.get<Errezeta[]>(environment.baseUrl + '/errezetak').subscribe({
        next: (resp: Errezeta[]) => {
          this._errezetak = resp;
          console.log('Errezetak fetched:', this.getErrezetakKopia);
        },
        error: (error) => {
          console.error('Error fetching errezetak:', error);
          reject(false);
        },
        complete: () => {
          resolve(true);
        }
      });
    });
  }

  getErrezetakById(id: string) {
    return this._errezetak.find(errezeta => errezeta.id === id);
  }

  async getErrezetakFiltratuta(hitza: string) {
    if (hitza) {
      if (await this.fetchErrezetak()) {
        this.errezetakFiltratuta = this.getErrezetakKopia;
    }
      return this.errezetakFiltratuta.filter(errezeta => errezeta.deskribapena.toLowerCase().includes(hitza.toLowerCase()));
    }
    return [];
  }

  

}
