import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../interface';
import { environment } from '../../environments/environment.development';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class HeroesServiceService {
  _heroes : Hero[] = [];
  httpClient : HttpClient;
  Url  = "http://localhost:3000/heroes";
  heroesFiltrados: Hero[] = [];

  constructor(httpclient : HttpClient,  private snackBar: MatSnackBar) {
    this.httpClient = httpclient;
  }

  get getHeroesKopia() {
    return [...this._heroes];
  }

  fetchHeroes() : Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.httpClient.get<Hero[]>(environment.baseUrl + '/heroes').subscribe({
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

  getHeroeById(id: string) {
    return this._heroes.find(heroe => heroe.id === id);
  }

  async getHeroesFiltrados(termino: string) {
    if (termino) {
      if (await this.fetchHeroes()) {
        this.heroesFiltrados = this.getHeroesKopia;
    }
      return this.heroesFiltrados.filter(heroe => heroe.superhero.toLowerCase().includes(termino.toLowerCase()));
    }
    return [];
  }

  gehituHeroe (heroe: Hero) {
    this.httpClient.post(environment.baseUrl + '/heroes', heroe).subscribe({
      next: (resp) => {
        console.log('Heroe gehitua:', resp);
      },
      error: (error) => {
        console.error('Error adding heroe:', error);
      },
      complete: () => {
        this.fetchHeroes();
      }
    });
  }

  actualizarHeroe(heroe: Hero) {
    this.httpClient.put(environment.baseUrl + '/heroes/' + heroe.id, heroe).subscribe({
      next: (resp) => {
        console.log('Heroe actualizado:', resp);
      },
      error: (error) => {
        console.error('Error updating heroe:', error);
      },
      complete: () => {
        this.fetchHeroes();
      }
    });
  }

  borrarHeroe(heroe: Hero) {
    this.httpClient.delete(environment.baseUrl + '/heroes/' + heroe.id).subscribe({
      next: (resp) => {
        console.log('Heroe borrado:', resp);
      },
      error: (error) => {
        console.error('Error deleting heroe:', error);
      },
      complete: () => {
        this.fetchHeroes();
      
      }
    });
  }

  mostrarSnackBar(mensaje: string): void {
    this.snackBar.open(mensaje, 'Cerrar', { duration: 2500 });
  }


}
