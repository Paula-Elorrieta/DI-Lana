import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { ImagenPipe } from '../../pipes/imagen.pipe';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ErrezetakService } from '../../../service/errezetak.service';
import { Errezeta } from '../../interface/interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
import { ConfirmarAgregarComponent } from '../../components/confirmar-agregar/confirmar-agregar.component';
import { ConfirmarEditarComponent } from '../../components/confirmar-editar/confirmar-editar.component';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    CommonModule,
    ImagenPipe,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule,
  ],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css',
})
export class AgregarComponent {
  constructor(
    private errezetaService: ErrezetakService,
    private ActivatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router
  ) {}

  errezeta: Errezeta = {
    id: undefined,
    deskribapena: '',
    prezioa: '',
    osagaiak: '',
    argazkia: '',
  };

  gordeErrezeta() {
    console.log('Gordetzen');
    if (this.ActivatedRoute.snapshot.params[`id`]) {
      const dialog = this.dialog.open(ConfirmarEditarComponent, {
        width: '250px',
        data: this.errezeta,
      });
      dialog.afterClosed().subscribe((result: any) => {
        console.log(result);
        if (result) {
          this.errezetaService.eguneratuErrezeta(this.errezeta);
          this.errezetaService.snackBarErakutsi('Errezeta eguneratua');
          this.router.navigate(['/errezetak/listado']);
        }
      });
    } else {
      const dialog = this.dialog.open(ConfirmarAgregarComponent, {
        width: '250px',
        data: this.errezeta,
      });
      dialog.afterClosed().subscribe((result: any) => {
        console.log(result);
        if (result) {
          this.errezeta.id = this.getId();
          this.errezetaService.gehituErrezeta(this.errezeta);
          this.errezetaService.snackBarErakutsi('Errezeta gehitua');
          this.router.navigate(['/errezetak/listado']);
        }
      });
    }
  }

  ezabatuErrezeta() {
    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250px',
      data: this.errezeta,
    });
    dialog.afterClosed().subscribe((result: any) => {
      console.log(result);
      if (result) {
        this.errezetaService.errezetaEzabatu(this.errezeta);
        this.errezetaService.snackBarErakutsi('Errezeta ezabatua');
        this.router.navigate(['/errezetak/listado']);
      }
    });
  }

  get getErrezeta() {
    const errezeta = this.errezetaService.getErrezetakById(
      this.ActivatedRoute.snapshot.params[`id`]
    );
    if (errezeta) {
      this.errezeta = errezeta;
    }

    return this.errezeta;
  }

  getId() {
    return this.errezetaService.getId();
  }
}
