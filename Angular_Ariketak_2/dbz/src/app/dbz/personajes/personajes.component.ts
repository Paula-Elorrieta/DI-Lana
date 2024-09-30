import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { ServicioService } from '../servicio.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent {
  dbzService: ServicioService=inject (ServicioService);

  //@Input() personajes: Personaje[] = [];

  get personajes() {
    return this.dbzService.personajes;
  }

}
