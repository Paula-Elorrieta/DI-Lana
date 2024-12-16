import { Component, Inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { Errezeta } from '../../interface/interface';

@Component({
  selector: 'app-confirmar-editar',
  standalone: true,
  imports: [MatButton, MatDialogModule],
  templateUrl: './confirmar-editar.component.html',
  styleUrl: './confirmar-editar.component.css',
})
export class ConfirmarEditarComponent {
  constructor(
    private dialogRef: MatDialogRef<ConfirmarEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Errezeta
  ) {}

  eguneratu() {
    this.dialogRef.close(true);
  }
  cerrar() {
    this.dialogRef.close();
  }
}
