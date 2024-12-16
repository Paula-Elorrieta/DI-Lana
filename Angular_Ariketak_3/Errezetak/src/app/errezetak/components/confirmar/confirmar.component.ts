import { Component, Inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Errezeta } from '../../interface/interface';

@Component({
  selector: 'app-confirmar',
  imports: [MatButton, MatDialogModule],
  standalone: true,
  templateUrl: './confirmar.component.html',
  styleUrl: './confirmar.component.css'
})
export class ConfirmarComponent {
  constructor(private dialogRef: MatDialogRef<ConfirmarComponent>,
	@Inject(MAT_DIALOG_DATA) public data: Errezeta) { }

  borrar() {
	this.dialogRef.close(true);
  }
  cerrar() {
	this.dialogRef.close();
  }

}
