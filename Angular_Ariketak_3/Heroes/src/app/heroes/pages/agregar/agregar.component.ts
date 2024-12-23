import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { Hero } from '../../../interface';
import { Publisher } from '../../../interface';
import { ImagenPipe } from '../../pipes/imagen.pipe';
import { HeroesServiceService } from '../../../servicio/heroes-service.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar'; 

@Component({
    selector: 'app-agregar',
    standalone: true,
    imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatIconModule, MatDividerModule, 
              CommonModule, ImagenPipe, FormsModule, MatSnackBarModule],
    templateUrl: './agregar.component.html',
    styleUrl: './agregar.component.css'
})
export class AgregarComponent implements OnInit {
  constructor(private HeroesService: HeroesServiceService, private ActivatedRoute:ActivatedRoute ) { }

  ngOnInit(): void {
    // const Heroe = this.HeroesService.getHeroeById(this.ActivatedRoute.snapshot.params[`id`]);
    // if (Heroe) {
    //   this.heroe = Heroe;
    // }
  }
  
    heroe: Hero = {
      superhero: '',
      publisher: Publisher.DCComics,
      alter_ego: '',
      first_appearance: '',
      characters: '',
      alt_img: ''
    }
    publishers: Publisher[] = Object.values(Publisher);
  
    guardar() {
      console.log('Guardando...');
      if (this.ActivatedRoute.snapshot.params[`id`]) {
        this.HeroesService.actualizarHeroe(this.heroe);
        this.HeroesService.mostrarSnackBar('Registro actualizado');
      } else {
        this.HeroesService.gehituHeroe(this.heroe);
        this.HeroesService.mostrarSnackBar('Registro creado');
      }
      window.location.href = '/heroes/listado';
    }
    borrarHeroe() {
      confirm('¿Estás seguro de que quieres borrar a ' + this.heroe.superhero + '?') ? this.HeroesService.borrarHeroe(this.heroe)  : this.HeroesService.mostrarSnackBar('No se ha borrado el heroe');
      window.location.href = '/heroes/listado';
    }

    getHeroe() {
      const Heroe = this.HeroesService.getHeroeById(this.ActivatedRoute.snapshot.params[`id`]);
      if (Heroe) {
        this.heroe = Heroe;
      }

      return this.heroe;
    }


  }
      


