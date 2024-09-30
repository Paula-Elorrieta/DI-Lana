import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { GehituComponent } from './dbzcar/gehitu/gehitu.component';
import { BistaratuComponent } from './dbzcar/bistaratu/bistaratu.component';
import { ServiceService } from './dbzcar/service.service';
import { Autoa } from './interface/carinterface.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, GehituComponent, BistaratuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dbzcar';

  autoBerria : Autoa = {
    modeloa: '',
    prezioa: 0
  }


}
