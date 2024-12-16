import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LagunakService {
  constructor(private http: HttpClient) { }


  private apiUrl = 'http://localhost:3000/lagunak';


	getItems(): Observable<any[]> {
    	return this.http.get<any[]>(this.apiUrl);
	}


	addItem(item: any): Observable<any> {
    	return this.http.post<any>(this.apiUrl, item);
	}


	updateItem(item:any): Observable<any> {
    	return this.http.put<any>(`${this.apiUrl}/${item.id}`, item);
	}


	deleteItem(id: number): Observable<any> {
    	return this.http.delete<any>(`${this.apiUrl}/${id}`);
	}
}
