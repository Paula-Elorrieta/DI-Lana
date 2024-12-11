import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CommonModule } from '@angular/common';
import { MatList, MatListModule } from '@angular/material/list';
import { ImagenPipe } from '../../pipes/imagen.pipe';
import { ErrezetakService } from '../../../service/errezetak.service';
import { Errezeta } from '../../interface/interface';
import { ErrezetaComponent } from '../errezeta/errezeta.component';
import { ErrezetaTarjetaComponent } from '../../component/errezeta-tarjeta/errezeta-tarjeta.component';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, FormsModule, CommonModule, MatListModule, ErrezetaTarjetaComponent],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent {

  hitza: string = '';
  errezetaFiltratuta: Errezeta[] = [];

    constructor(private errezetaService: ErrezetakService) { }
    
    errezeta : Errezeta | undefined;

    async buscar() {
        this.errezetaFiltratuta = await this.errezetaService.getErrezetakFiltratuta(this.hitza);
    }

    optionSelected(errezeta: Errezeta) {
        this.errezeta = errezeta;
        this.hitza = errezeta.deskribapena;
    }

}
