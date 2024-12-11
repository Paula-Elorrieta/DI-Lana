import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { Errezeta } from '../../interface/interface';
import { ImagenPipe } from '../../pipes/imagen.pipe';

@Component({
  selector: 'app-errezeta-tarjeta',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, ImagenPipe, RouterLink],
  templateUrl: './errezeta-tarjeta.component.html',
  styleUrl: './errezeta-tarjeta.component.css'
})
export class ErrezetaTarjetaComponent {

  @Input() errezeta! : Errezeta;

}
