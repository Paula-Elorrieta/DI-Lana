import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  API_URL: string = "http://scratchya.com.ar/vue/datos.php";
  constructor(private httpClient: HttpClient) {}
  getProducts(): Observable<any> {
    return this.httpClient.get(this.API_URL);
  }
}
