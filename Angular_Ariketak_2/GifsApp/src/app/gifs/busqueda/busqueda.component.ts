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

    // Si el valor es vacío no se hace nada
    if (this.valor.trim().length == 0) {
      return alert('No se puede buscar un valor vacío');
    }

    // El valor que se guarda tiene que ser en minusculas y sin espacios
    this.valor = this.valor.toLowerCase();
    if (this.valor.trim().length > 0) {
      // En el replace /\s/g es una expresión regular que busca todos los espacios en blanco y los reemplaza por nada
      this.valor = this.valor.replace(/\s/g, '');
    }

    // No puede haber valores repetidos
    if (this.gifsService.historial.includes(this.valor)) {
      return alert('No puedes hacer búsquedas repetidas');
    }

    this.gifsService.buscarGifs(this.valor);
    this.valor = '';
  }

}
