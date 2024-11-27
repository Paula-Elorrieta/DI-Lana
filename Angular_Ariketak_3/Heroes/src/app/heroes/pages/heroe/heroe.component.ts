import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
    selector: 'app-heroe',
    standalone: true,
    imports: [MatProgressSpinnerModule],
    templateUrl: './heroe.component.html',
    styleUrl: './heroe.component.css'
})
export class HeroeComponent {

    constructor(private activatedRoute: ActivatedRoute) { }
    ngOnInit(): void {
      console.log(this.activatedRoute.snapshot.params['id']);
    }
  
  }
  
