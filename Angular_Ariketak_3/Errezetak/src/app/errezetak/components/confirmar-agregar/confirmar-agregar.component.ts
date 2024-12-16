import { Component, Inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { Errezeta } from '../../interface/interface';

@Component({
  selector: 'app-confirmar-agregar',
  standalone: true,
  imports: [MatButton, MatDialogModule],
  templateUrl: './confirmar-agregar.component.html',
  styleUrl: './confirmar-agregar.component.css',
})
export class ConfirmarAgregarComponent {
  constructor(
    private dialogRef: MatDialogRef<ConfirmarAgregarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Errezeta
  ) {}

  agregar() {
    this.dialogRef.close(true);
  }
  cerrar() {
    this.dialogRef.close();
  }
}
