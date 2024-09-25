import { Component, inject } from '@angular/core';
import { ServiceService } from '../service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Autoa } from '../../interface/carinterface.interface';

@Component({
  selector: 'app-bistaratu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bistaratu.component.html',
  styleUrl: './bistaratu.component.css'
})
export class BistaratuComponent {

  dbzcarService: ServiceService = inject(ServiceService);

  get autoak() {
    return this.dbzcarService.kotxeak;
  }

}
