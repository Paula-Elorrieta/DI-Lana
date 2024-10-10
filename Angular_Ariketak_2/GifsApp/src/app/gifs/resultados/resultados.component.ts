import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-resultados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resultados.component.html',
  styleUrl: './resultados.component.css'
})
export class ResultadosComponent {

  constructor(private gifsService : GifsService ) {}

  get gifs() {
    return this.gifsService.gifs;
  }


}
