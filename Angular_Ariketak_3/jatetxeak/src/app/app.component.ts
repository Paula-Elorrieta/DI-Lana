import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { JatetxeaService } from './Service/jatetxea.service';
import { TaulaComponent } from './Components/taula/taula.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaulaComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jatetxeak';
  constructor(private jatetxeaService: JatetxeaService) {
  }

  ngOnInit() {
    this.jatetxeaService.kargatuHistoriala();
  }

}
