import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from '../personajes/personajes.component';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [PersonajesComponent, CommonModule, FormsModule],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {

  //@Input() personajes: Personaje[] = [];
  dbzService: ServicioService=inject(ServicioService);
  @Input() nuevo: Personaje = {"nombre": "", "poder": 0}; 

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
      
    }

    this.dbzService.agregarNuevoPersonaje(this.nuevo);
    this.nuevo = {"nombre": "", "poder": 0};
  }
}
