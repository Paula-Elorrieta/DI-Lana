import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HeroesServiceService } from '../../../servicio/heroes-service.service';
import { Hero } from '../../../interface';
import { CommonModule } from '@angular/common';
import { MatList, MatListModule } from '@angular/material/list';
import { ImagenPipe } from '../../pipes/imagen.pipe';
import { HeroeTarjetaComponent } from '../../components/heroe-tarjeta/heroe-tarjeta.component';

@Component({
    selector: 'app-buscar',
    standalone: true,
    imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, FormsModule, CommonModule, MatListModule, HeroeTarjetaComponent],
    templateUrl: './buscar.component.html',
    styleUrl: './buscar.component.css'
})
export class BuscarComponent {

    termino: string = '';
    heroesFiltrados: Hero[] = [];

    constructor(private heroesService: HeroesServiceService) { }
    
    heroe : Hero | undefined;

    async buscar() {
        this.heroesFiltrados = await this.heroesService.getHeroesFiltrados(this.termino);
    }

    optionSelected(heroe: Hero) {
        this.heroe = heroe;
        this.termino = heroe.superhero;
        console.log(heroe);
    }



}
