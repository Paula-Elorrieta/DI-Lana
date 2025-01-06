import { Component } from '@angular/core';
import { JatetxeaService } from '../../Service/jatetxea.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historiala',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historiala.component.html',
  styleUrl: './historiala.component.css'
})
export class HistorialaComponent {

  historiala : String[] = [];

  constructor(private jatetxeService : JatetxeaService) {}

  ngOnInit() {
    this.historiala = this.jatetxeService._historiala;
  }

}
