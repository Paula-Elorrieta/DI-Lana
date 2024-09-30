import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from "../personajes/personajes.component";
import { Personaje } from '../interfaces/dbz.interface';
import { AgregarComponent } from '../agregar/agregar.component';
// import { ServicioService } from '../servicio.service';


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [FormsModule, CommonModule, PersonajesComponent, AgregarComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  // dbzService: ServicioService=inject(ServicioService);

  // personajes: Personaje[] = [];
  constructor() {
    // this.personajes = this.dbzService.personajes;
  }

  //get personajes() {  
    //return this.dbzService.personajes;
  //}

  nuevo: Personaje = {
    nombre: "",
    poder: 0
  }
  
}
