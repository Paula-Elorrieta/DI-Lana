import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuicType } from './interface/quictype.interface';
import { HttpClient } from '@angular/common/http';
import { ServicioService } from './servicio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  zereginak : QuicType[] = [];
  constructor(private servicio : ServicioService) { }

  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados() {
    this.servicio.getZereginak().subscribe(
      (result) => {
        this.zereginak = result;
      },
      (err) => {
        console.log(err)
      }
    )};
}
