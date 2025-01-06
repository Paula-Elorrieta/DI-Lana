import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import mapboxgl from 'mapbox-gl';
import { JatetxeaService } from '../../Service/jatetxea.service';
import { Jatetxea } from '../../interfaces/jatetxea';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
})
export class MapaComponent implements OnInit {
  mapa!: mapboxgl.Map;
  jatetxeak: Jatetxea[] = [];
  latAukeratuta: number | null = null;
  lonAukeratuta: number | null = null;

  constructor(
    private jatetxeService: JatetxeaService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    if (await this.jatetxeService.fetchJatetxeak()) {
      this.jatetxeak = this.jatetxeService.jatetxeKopia;
    }

    // Egiaztatu parametroak eta maparen konfigurazioa
    this.route.params.subscribe((params) => {
      this.latAukeratuta = parseFloat(params['lat']);
      this.lonAukeratuta = parseFloat(params['lon']);

      this.mapa = new mapboxgl.Map({
        accessToken:
          'pk.eyJ1IjoiaXR6aS1hciIsImEiOiJjbTR0cnJvbmgwOG1xMmpyOXphYnk2YXA3In0.nvbObADvRjZvchA9t_gJog',
        container: 'mapa',
        style: 'mapbox://styles/mapbox/streets-v11',
        center:
          this.latAukeratuta && this.lonAukeratuta
            ? [this.lonAukeratuta, this.latAukeratuta]
            : [-2.149, 43.236], // Ez badago bata aukeratuta, Donostia erakutsi
        zoom: 11,
      });

      // Jatetxe bat aukeratuta badago, marcador bat gehitu, bestela guztiak erakutsi
      if (this.latAukeratuta && this.lonAukeratuta) {
        const jatetxea = this.jatetxeak.find(
          (j) =>
            parseFloat(j.latwgs84) === this.latAukeratuta &&
            parseFloat(j.lonwgs84) === this.lonAukeratuta
        );
        if (jatetxea) {
          this.addMarker(jatetxea);
        }
      } else {
        this.jatetxeak.forEach((jatetxea) => {
          const lat = parseFloat(jatetxea.latwgs84);
          const lon = parseFloat(jatetxea.lonwgs84);

          if (this.koordenatuenBalidazioa(lat, lon)) {
            this.addMarker(jatetxea);
          }
        });
      }
    });
  }

  koordenatuenBalidazioa(lat: number, lon: number): boolean {
    return (
      !isNaN(lat) &&
      !isNaN(lon) &&
      lat >= -90 &&
      lat <= 90 &&
      lon >= -180 &&
      lon <= 180
    );
  }

  // Markadore bat gehitu
  addMarker(jatetxea: Jatetxea): void {
    const lat = parseFloat(jatetxea.latwgs84);
    const lon = parseFloat(jatetxea.lonwgs84);

    const color = this.koloreRandom();

    new mapboxgl.Marker({ color: color })
      .setLngLat([lon, lat])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML(`
          <h3>${jatetxea.documentName}</h3>
          <p>${jatetxea.municipality}</p>
          <p>${jatetxea.documentDescription}</p>
          <p>${jatetxea.phone}</p>
          <p><a href="${jatetxea.web}" target="_blank">${jatetxea.web}</a></p>
        `)
      )
      .addTo(this.mapa);
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
