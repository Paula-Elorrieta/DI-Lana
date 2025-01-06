import { Injectable } from '@angular/core';
import { Jatetxea } from '../interfaces/jatetxea';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JatetxeaService {

  _jatetxeak: Jatetxea[] = [];
  httpClient: HttpClient;
  _historiala : String[] = [];
  Url: string = "http://localhost:3000/jatetxeak";

  get jatetxeKopia() {
    return [...this._jatetxeak];
  }

  get historialKopia() {
    return [...this._historiala];
  }

  constructor(httpclient : HttpClient) {
    this.httpClient = httpclient;
  }

  fetchJatetxeak(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.httpClient
        .get<Jatetxea[]>(environment.baseUrl + '/jatetxeak')
        .subscribe({
          next: (resp: Jatetxea[]) => {
            this._jatetxeak = resp;
            console.log('Jatetxeak fetched:', this.jatetxeKopia);
          },
          error: (error) => {
            console.error('Error fetching jatetxeak:', error);
            reject(false);
          },
          complete: () => {
            resolve(true);
          },
        });
    });
  }
  
  // This function adds a new search term to the historial array
  bilaketaGehitu(bilaketa : String) {

    if (this._historiala.length > 10) {
      this._historiala.shift();
    }

    this._historiala.push(bilaketa);
    localStorage.setItem('historiala', JSON.stringify(this._historiala));
  }

  kargatuHistoriala() {
    const historiala = localStorage.getItem('historiala');
    if (historiala) {
      this._historiala = JSON.parse(historiala);
    }
  }

}
