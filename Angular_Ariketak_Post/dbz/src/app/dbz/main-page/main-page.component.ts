import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface Personaje {
  nombre: string;
  poder: number;
}


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  Goku: Personaje = {
    nombre: 'Goku',
    poder: 10000
  }

  Krillin: Personaje = {
    nombre: 'Krillin',
    poder: 5000
  }

  Vegetta: Personaje = {
    nombre: 'Vegetta',
    poder: 8000
  }

  nuevo: Personaje = {
    nombre: "",
    poder: 0
  }

  personajes: Personaje[] = [this.Krillin, this.Goku, this.Vegetta];

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    
    console.log(this.nuevo);
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: "",
      poder: 0
    }
 }
}
