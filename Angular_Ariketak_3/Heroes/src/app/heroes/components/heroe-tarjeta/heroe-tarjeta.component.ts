import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Hero } from '../../../interface';
import { ImagenPipe } from '../../pipes/imagen.pipe';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, ImagenPipe, RouterLink],
  templateUrl: './heroe-tarjeta.component.html',
  styleUrl: './heroe-tarjeta.component.css'
})
export class HeroeTarjetaComponent {

  @Input() heroe! : Hero;

  constructor() { }

}
