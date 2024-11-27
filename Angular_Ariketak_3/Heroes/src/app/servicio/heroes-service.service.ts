import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesServiceService {

  constructor(httpclient : HttpClient) {
    this.httpClient = httpclient;
  }

  _heroes : Hero[] = [];
  httpClient : HttpClient;

  getHeroes(): Hero[] {
    return [...this._heroes];
  }

  fetchHeroes() {

  }



}
