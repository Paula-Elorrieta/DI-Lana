import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormsModule } from '@angular/forms';
import { Autoa } from '../../interface/carinterface.interface';

@Component({
  selector: 'app-gehitu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gehitu.component.html',
  styleUrl: './gehitu.component.css'
})
export class GehituComponent {

  dbzcarService: ServiceService=inject(ServiceService);
  @Input() autoBerria : Autoa = {
    modeloa: '',
    prezioa: 0
  }

  gehitu() {
    if (this.autoBerria.modeloa.trim().length < 0 && this.autoBerria.prezioa < 0) {
      return;
    }

    this.dbzcarService.kotxeberriasartu(this.autoBerria);
    this.autoBerria = {"modeloa": "", "prezioa": 0};

  }

}
