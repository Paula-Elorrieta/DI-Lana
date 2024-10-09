import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {

  // Se mete dentro del constructor el servicio para poder usarlo. Private es para que solo se pueda usar dentro de la clase
  constructor(private gifsService: GifsService) { }
  valor = '';

  buscar() {
    console.log(this.valor);
    this.gifsService.buscarGifs(this.valor);
    this.valor = '';
  }

}
