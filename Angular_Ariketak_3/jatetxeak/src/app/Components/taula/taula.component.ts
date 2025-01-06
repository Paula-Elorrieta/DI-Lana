import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Jatetxea } from '../../interfaces/jatetxea';
import { CommonModule } from '@angular/common';
import {
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { JatetxeaService } from '../../Service/jatetxea.service';
import { RouterLink, RouterModule } from '@angular/router';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-taula',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
    FormsModule,
    TranslateModule,
  ],
  templateUrl: './taula.component.html',
  styleUrls: ['./taula.component.css'],
})
export class TaulaComponent {
  map!: mapboxgl.Map;
  jatetxeak: Jatetxea[] = []; 
  filteredJatetxeak: Jatetxea[] = []; 
  kopurua: number = 0;
  page: number = 1;
  currentLanguage: string = 'eu';
  latitude: number = 43.3;
  longitude: number = -1.546;
  currentPage: number = 1;
  Math: Math = Math;
  rowsPerPage: number = 15;

  constructor(
    private jatetxeService: JatetxeaService,
    private translateService: TranslateService
  ) {
    this.translateService.setDefaultLang('eu');
    this.translateService.use('eu');
  }

  translatetext(lang: string) {
    this.translateService.use(lang);
  }

  changeLanguage(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.currentLanguage = target.value;
    this.translateService.use(this.currentLanguage);
  }

  async ngOnInit() {
    if (await this.jatetxeService.fetchJatetxeak()) {
      this.jatetxeak = this.jatetxeService.jatetxeKopia;
      this.filteredJatetxeak = [...this.jatetxeak]; 
    }
  }

  get tamaina() {
    return this.filteredJatetxeak.length; 
  }

  get totalItems() {
    return this.filteredJatetxeak.length; 
  }

  nextPage() {
    if (this.currentPage * this.rowsPerPage < this.totalItems) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Reseatzen badagu orriaren zenbakia 1era eta denak erakusten ditugu
  resetPage() {
    this.currentPage = 1;
    this.filtraketaEgin(''); 
  }

  get paginatedJatetxeak(): Jatetxea[] {
    const start = (this.currentPage - 1) * this.rowsPerPage;
    return this.filteredJatetxeak.slice(start, start + this.rowsPerPage); 
  }

  // Filtraketa egin izenen arabera
  filtraketaEgin(udalerria: string) {
    if (!udalerria) {
      this.filteredJatetxeak = [...this.jatetxeak]; 
      this.kopurua = this.filteredJatetxeak.length;
      return;
    }

    this.filteredJatetxeak = this.jatetxeak.filter(
      (jatetxea) => jatetxea?.documentName.toLowerCase().includes(udalerria.toLowerCase())
    );

    // Filtroa aplikazen bada, mapa eguneratu. Bestela, mapa ez da ikusten eta kopurua 0 izango da.
    // Jatetxe ez baditu aurkitzen, mapa ez da ikusten.
    if (this.filteredJatetxeak.length > 0) {
      this.longitude = parseFloat(this.filteredJatetxeak[0].lonwgs84);
      this.latitude = parseFloat(this.filteredJatetxeak[0].latwgs84);

      // Mapa ikusteko filtroa egiten bada, mapa ikusteko
      const mapElement = document.getElementById('mapa');
      if (mapElement) {
        mapElement.style.display = 'block';
      }

      this.map = new mapboxgl.Map({
        accessToken:
        'pk.eyJ1IjoiaXR6aS1hciIsImEiOiJjbTR0cnJvbmgwOG1xMmpyOXphYnk2YXA3In0.nvbObADvRjZvchA9t_gJog',
        container: 'mapa',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: this.zentroaAukeratu(),
        zoom: 10,
      });

      this.filteredJatetxeak.forEach(jatetxea => {
        const lat = parseFloat(jatetxea.latwgs84);
        const lon = parseFloat(jatetxea.lonwgs84);

        if (this.koordenatuenBalidazioa(lat, lon)) {
          const color = this.koloreRandom(); 

          new mapboxgl.Marker({
            color: color,
          })
            .setLngLat([lon, lat])
            .setPopup(
              new mapboxgl.Popup({ offset: 25 }).setHTML(`
                <h3>${jatetxea.documentName}</h3>
                <p>${jatetxea.municipality}</p>
                <p>${jatetxea.documentDescription}</p>
                <p>${jatetxea.phone}</p>
                <p><a href="${jatetxea.web}" target="_blank">${jatetxea.web}</a></p>
              `))
            .addTo(this.map);
        }
      });
    } else {
      const mapElement = document.getElementById('mapa');
      if (mapElement) {
        mapElement.style.display = 'none';
      }
    }

    this.kopurua = this.filteredJatetxeak.length;
  }

  koordenatuenBalidazioa(lat: number, lon: number): boolean {
    return !isNaN(lat) && !isNaN(lon) &&
      lat >= -90 && lat <= 90 &&
      lon >= -180 && lon <= 180;
  }

  // AVG atera zentroa kalkulatzeko
  zentroaAukeratu(): [number, number] {
    let lat = 0;
    let lon = 0;

    this.filteredJatetxeak.forEach(jatetxea => {
      lat += parseFloat(jatetxea.latwgs84);
      lon += parseFloat(jatetxea.lonwgs84);
    });

    this.latitude = lat / this.filteredJatetxeak.length;
    this.longitude = lon / this.filteredJatetxeak.length;

    return [this.longitude, this.latitude];
  }

  koloreRandom(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
