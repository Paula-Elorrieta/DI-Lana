import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Persona } from './interface/formularioa.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formularioa',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formularioa.component.html',
  styleUrl: './formularioa.component.css'
})
export class FormularioaComponent {

  persona: Persona = {
    nombre: '',
    apellido: ''
  };

}
