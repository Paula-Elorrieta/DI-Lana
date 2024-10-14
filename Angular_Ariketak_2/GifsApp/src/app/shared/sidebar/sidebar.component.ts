import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GifsService } from '../../gifs/service/gifs.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  // Se hace dentro del constructor para que se ejecute cuando se inicie el componente
  constructor(private gifsService: GifsService) {
  }

  get historial() {
    return this.gifsService.historial;
    console.log(this.gifsService.historial);
  }

  recuperarBusqueda(busquedaLink : string) {
    return this.gifsService.buscarGifs(busquedaLink);
  }



}
