import { Component } from '@angular/core';
import { ErrezetakService } from '../../../service/errezetak.service';
import { Errezeta } from '../../interface/interface';
import { MatDivider } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { ErrezetaTarjetaComponent } from '../../component/errezeta-tarjeta/errezeta-tarjeta.component';


@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule, MatDivider, ErrezetaTarjetaComponent],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

  errezetak : Errezeta[] = [];

  constructor(private errezetakService : ErrezetakService ) { }

  async ngOnInit() {
    if (await this.errezetakService.fetchErrezetak()) {
        this.errezetak = this.errezetakService.getErrezetakKopia;
    }
  }

}
