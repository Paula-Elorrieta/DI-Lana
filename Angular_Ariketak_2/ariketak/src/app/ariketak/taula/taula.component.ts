import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Artikulua } from './interface/artikulua.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-taula',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './taula.component.html',
  styleUrl: './taula.component.css'
})
export class TaulaComponent {

  artikulo: Artikulua = {
    kodea: 0,
    deskribapena: '',
    prezioa: 0
  };

  artikulo1: Artikulua = {
    kodea: 1,
    deskribapena: 'artikulo1',
    prezioa: 10
  };

  artikulo2: Artikulua = {
    kodea: 2,
    deskribapena: 'artikulo2',
    prezioa: 20
  };

  artikulo3: Artikulua = {
    kodea: 3,
    deskribapena: 'artikulo3',
    prezioa: 30
  };

  artikulos: Artikulua[] = [this.artikulo1, this.artikulo2, this.artikulo3];

  gehitu() {
    for (let i = 0; i < this.artikulos.length; i++) {
      if (this.artikulos[i].kodea == this.artikulo.kodea) {
        alert('Artikulu hori jada existitzen da');
        this.artikulo = { kodea: 0, deskribapena: '', prezioa: 0 };
        return
      } else if (this.artikulo.kodea == 0) {
        alert('Ez da kodea zehaztu');
        return
      } else if (this.artikulo.deskribapena == '') {
        alert('Ez da deskribapena zehaztu');
        return
      } else if (this.artikulo.prezioa <= 0) {
        alert('Ez da prezioa zehaztu');
        return
      } else {
        this.artikulos.push(this.artikulo);
        this.artikulo = { kodea: 0, deskribapena: '', prezioa: 0 };
      }
    }
  }

  aldatu() {  
    for (let i = 0; i < this.artikulos.length; i++) {

      if (this.artikulos[i].kodea != this.artikulo.kodea) {
        alert('Ezin duzu kodea aldatu');
        return
      } else {
        if (this.artikulo.deskribapena == '') {
          this.artikulo.kodea = this.artikulos[i].kodea;
          alert('Ez da deskribapena zehaztu');
          return  
        } else if (this.artikulo.prezioa <= 0) {
          alert('Ez da prezioa zehaztu');
          return
        } else if (this.artikulo.kodea = 0) {
          alert('Ez duzu aukeratu');
          return
        } else {
          this.artikulos[i].deskribapena = this.artikulo.deskribapena
          this.artikulos[i].prezioa = this.artikulo.prezioa
          this.artikulo = { kodea: 0, deskribapena: '', prezioa: 0 };
          return
        }
      }
    }
  }

  ezabatu(kodea: number) {
    for (let i = 0; i < this.artikulos.length; i++) {
      if (this.artikulos[i].kodea == kodea) {
        this.artikulos.splice(i, 1)
        return
      }
    }

  }

  aukeratu(artikulo: Artikulua) {
    this.artikulo.deskribapena = artikulo.deskribapena;
    this.artikulo.kodea = artikulo.kodea;
    this.artikulo.prezioa = artikulo.prezioa;
  }

}
