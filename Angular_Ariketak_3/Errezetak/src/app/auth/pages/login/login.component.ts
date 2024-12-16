import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  imports: [MatGridListModule, MatButtonModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authService: AuthService) { }
  login() {
	this.authService.login();
  }
}
