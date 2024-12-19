import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ImagenPipe } from '../../pipes/imagen.pipe';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { MatListModule } from '@angular/material/list';
import { Errezeta } from '../../interface/interface';
import { CommonModule } from '@angular/common';
import { ErrezetakService } from '../../../service/errezetak.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-errezeta',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, ImagenPipe, RouterLink, MatListModule, MatProgressSpinnerModule, CommonModule],
  templateUrl: './errezeta.component.html',
  styleUrl: './errezeta.component.css'
})
export class ErrezetaComponent {

  id: string = ''

  constructor(private activatedRoute: ActivatedRoute, private errezetaService: ErrezetakService,  private router: Router, private snackBar: MatSnackBar) { }
  ngOnInit(): void {
	  this.id = this.activatedRoute.snapshot.params['id'];

    this.snackBar.open("Errezeta aukeratua", "Itxi", {
      duration: 2000,
    });
  }

  get errezeta() {
	  return this.errezetaService.getErrezetakById(this.id);
  }

}
