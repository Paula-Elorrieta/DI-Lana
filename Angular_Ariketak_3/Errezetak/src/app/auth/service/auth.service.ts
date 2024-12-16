import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Auth } from '../interface/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _auth: Auth | undefined;

  constructor(private http: HttpClient, private router: Router) {}
  login() {
    this.http
      .get<Auth>(environment.baseUrl + '/erabiltzaileak/1')
      .subscribe((auth) => {
        this._auth = auth;
        console.log(this.auth);
        localStorage.setItem('auth', JSON.stringify(this.auth));
        this.router.navigate(['/errezetak']);
      });
  }

  get auth(): Auth {
    return { ...this._auth! };
  }

  verificaAutenticacion() {
    if (this._auth) {
      return true;
    } else {
      this._auth = JSON.parse(localStorage.getItem('auth')!);
      if (this._auth) {
        return true;
      }
      return false;
    }
  }

  logout() {
    this._auth = undefined;
    localStorage.removeItem('auth');
    this.router.navigate(['./auth']);
  }
}
