import { Component } from '@angular/core';

@Component({
  selector: 'app-dadoak',
  standalone: true,
  imports: [],
  templateUrl: './dadoak.component.html',
  styleUrl: './dadoak.component.css'
})
export class DadoakComponent {

  Dado = {
    valor : Number
  };

  dado1 = {
    valor : 0
  };

  dado2 = {
    valor : 0
  };
  
  dado3 = {
    valor : 0
  };

  jaurti() {
    // +1 para que el valor sea entre 1 y 6, no entre 0 y 5
    this.dado1.valor = Math.floor(Math.random() * 6) + 1;
    this.dado2.valor = Math.floor(Math.random() * 6) + 1;
    this.dado3.valor = Math.floor(Math.random() * 6) + 1;

    if (this.dado1.valor == this.dado2.valor && this.dado1.valor == this.dado3.valor) {
      
    };


  }




}
