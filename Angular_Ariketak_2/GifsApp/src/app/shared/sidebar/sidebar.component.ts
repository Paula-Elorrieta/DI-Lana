import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GifsService } from '../../gifs/service/gifs.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  providers: [GifsService],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  // Se hace dentro del constructor para que se ejecute cuando se inicie el componente
  constructor(private gifsService: GifsService) {
  }

  get historial() {
    return this.gifsService._historial;
    console.log(this.gifsService._historial);
  }



}
