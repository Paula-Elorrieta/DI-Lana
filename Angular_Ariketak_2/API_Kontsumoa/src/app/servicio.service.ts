import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  API_URI : string = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private httpClient: HttpClient) {}
    getZereginak(): Observable<any> {
      return this.httpClient.get(this.API_URI);
    }
}
