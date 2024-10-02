import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-covid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './covid.component.html',
  styleUrl: './covid.component.css'
})
export class CovidComponent {
  contagiados: any;
  constructor(private http: HttpClient) { }

  ngOnInit() : void {
    this.http.get("https://api.covidtracking.com/v1/us/daily.json").subscribe (
      resultado => {
        this.contagiados = resultado
      }
    )
  }
}
