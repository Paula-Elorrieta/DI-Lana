import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioaComponent } from "./ariketak/formularioa/formularioa.component";
import { TaulaComponent } from "./ariketak/taula/taula.component";
import { DadoakComponent } from "./ariketak/dadoak/dadoak.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormularioaComponent, TaulaComponent, DadoakComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ariketak';
}
