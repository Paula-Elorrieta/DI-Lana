import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatProgressSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { HeroesServiceService } from '../../../servicio/heroes-service.service';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ImagenPipe } from '../../pipes/imagen.pipe';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-heroe',
    standalone: true,
    imports: [MatProgressSpinner, CommonModule, MatCardModule, MatListModule, ImagenPipe, MatButton, RouterLink],
    templateUrl: './heroe.component.html',
    styleUrl: './heroe.component.css'
})
export class HeroeComponent {

  id: string = ''

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesServiceService,  private router: Router) { }
  ngOnInit(): void {
	  this.id = this.activatedRoute.snapshot.params['id'];
  }

  get heroe() {
	return this.heroesService.getHeroeById(this.id);
  }

  // regresar() {
  //   this.router.navigate(['/heroes/listado']);
  // }  


  
  }
  
