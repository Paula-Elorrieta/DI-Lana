import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { AuthService } from '../../../auth/service/auth.service';
import { ErrezetakService } from '../../../service/errezetak.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule, RouterOutlet, MatListModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router, private authService: AuthService, private errezetakService: ErrezetakService) {}

  logout() {
    this.router.navigate(['./auth']);
  }

  get auth () {
    return this.authService.auth;
  }

  get kopurua() {
    return this.errezetakService.getErrezetakKopia.length;
  }
  

}
