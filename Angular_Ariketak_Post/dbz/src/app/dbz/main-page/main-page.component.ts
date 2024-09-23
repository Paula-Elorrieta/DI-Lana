import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from "../personajes/personajes.component";
import { Personaje } from '../interfaces/dbz.interface';
import { AgregarComponent } from "../agregar/agregar.component";


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [FormsModule, CommonModule, PersonajesComponent, AgregarComponent],
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

  personajes: Personaje[] = [this.Krillin, this.Goku, this.Vegetta];

}
