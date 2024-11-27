import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesServiceService {
  _heroes : Hero[] = [];
  httpClient : HttpClient;
  Url  = "http://localhost:3000/heroes";

  constructor(httpclient : HttpClient) {
    this.httpClient = httpclient;
  }

  get getHeroesKopia() {
    return [...this._heroes];
  }

  fetchHeroes() : Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.httpClient.get<Hero[]>(this.Url).subscribe({
        next: (resp: Hero[]) => {
          this._heroes = resp;
          console.log('Superheroes fetched:', this.getHeroesKopia);
        },
        error: (error) => {
          console.error('Error fetching superheroes:', error);
          reject(false);
        },
        complete: () => {
          resolve(true);
        }
      });
    });
  }



}
