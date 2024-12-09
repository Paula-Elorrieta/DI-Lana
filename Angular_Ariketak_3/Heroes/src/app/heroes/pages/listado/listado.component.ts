import { Component, OnInit } from '@angular/core';
import { HeroesServiceService } from '../../../servicio/heroes-service.service';
import { Hero } from '../../../interface';
import { CommonModule } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { HeroeTarjetaComponent } from '../../components/heroe-tarjeta/heroe-tarjeta.component';


@Component({
    selector: 'app-listado',
    standalone: true,
    imports: [CommonModule, MatDivider, HeroeTarjetaComponent],
    templateUrl: './listado.component.html',
    styleUrl: './listado.component.css'
})
export class ListadoComponent implements OnInit{

    heroes : Hero[] = [];

    constructor(private heroesService : HeroesServiceService) {}

    // Async es una palabra clave que se utiliza para definir una función asíncrona en JavaScript.
    // Es una función que devuelve una promesa, que puede ser resuelta o rechazada.
    // El await es una palabra clave que se puede usar para esperar a que se resuelva una promesa.
    async ngOnInit() {
        if (await this.heroesService.fetchHeroes()) {
            this.heroes = this.heroesService.getHeroesKopia;
        }
    }

}
