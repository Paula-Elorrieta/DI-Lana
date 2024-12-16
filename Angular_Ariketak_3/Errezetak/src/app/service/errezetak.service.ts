import { Injectable } from '@angular/core';
import { Errezeta } from '../errezetak/interface/interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ErrezetakService {
  _errezetak: Errezeta[] = [];
  errezetakFiltratuta: Errezeta[] = [];
  httpClient: HttpClient;
  maxid: string = '1';
  Url = 'http://localhost:3000/errezetak';

  get getErrezetakKopia() {
    return [...this._errezetak];
  }

  constructor(httpclient: HttpClient, private snackBar: MatSnackBar) {
    this.httpClient = httpclient;
    this.fetchErrezetak();
  }

  fetchErrezetak(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.httpClient
        .get<Errezeta[]>(environment.baseUrl + '/errezetak')
        .subscribe({
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
          },
        });
    });
  }

  getErrezetakById(id: string) {
    return this._errezetak.find((errezeta) => errezeta.id === id);
  }

  async getErrezetakFiltratuta(hitza: string) {
    if (hitza) {
      if (await this.fetchErrezetak()) {
        this.errezetakFiltratuta = this.getErrezetakKopia;
      }
      return this.errezetakFiltratuta.filter((errezeta) =>
        errezeta.deskribapena.toLowerCase().includes(hitza.toLowerCase())
      );
    }
    return [];
  }

  gehituErrezeta(errezeta: Errezeta) {
    this.httpClient
      .post(environment.baseUrl + '/errezetak', errezeta)
      .subscribe({
        next: (resp) => {
          console.log('Errezeta gehitua:', resp);
        },
        error: (error) => {
          console.error('Error adding errezeta:', error);
        },
        complete: () => {
          this.fetchErrezetak();
        },
      });
  }

  eguneratuErrezeta(errezeta: Errezeta) {
    this.httpClient
      .put(environment.baseUrl + '/errezetak/' + errezeta.id, errezeta)
      .subscribe({
        next: (resp) => {
          console.log('Errezeta eguneratua:', resp);
        },
        error: (error) => {
          console.error('Error updating errezeta:', error);
        },
        complete: () => {
          this.fetchErrezetak();
        },
      });
  }

  errezetaEzabatu(errezeta: Errezeta) {
    this.httpClient
      .delete(environment.baseUrl + '/errezetak/' + errezeta.id)
      .subscribe({
        next: (resp) => {
          console.log('Errezeta ezabatu:', resp);
        },
        error: (error) => {
          console.error('Error deleting errezeta:', error);
        },
        complete: () => {
          this.fetchErrezetak();
        },
      });
  }

  snackBarErakutsi(mezua: string): void {
    this.snackBar.open(mezua, 'Cerrar', { duration: 2500 });
  }

  getId() {
    if (this._errezetak && this._errezetak.length > 0) {
      const maxNumericId =
        Math.max(
          ...this._errezetak.map((errezeta) => Number(errezeta.id) || 0)
        ) + 1;
      this.maxid = maxNumericId.toString();
    } else {
      this.maxid = '1';
    }

    return this.maxid;
  }
}
