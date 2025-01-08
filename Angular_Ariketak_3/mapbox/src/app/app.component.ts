import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'mapbox';

  map!: mapboxgl.Map;
  imgBase64 =
    'data:image/jpeg;base64,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';

  markers = [
    {
      id: 1,
      lat: 40.7128,
      lng: -74.003,
      title: 'New York',
      description: 'New York City',
    },
    {
      id: 2,
      lat: 34.0522,
      lng: -118.2437,
      title: 'Los Angeles',
      description: 'Los Angeles',
    },
    {
      id: 3,
      lat: 39.9523,
      lng: -75.1637,
      title: 'Philadelphia',
      description: 'Philadelphia',
    },
    {
      id: 4,
      lat: 37.7689,
      lng: -122.4469,
      title: 'San Francisco',
      description: 'San Francisco',
    },
    {
      id: 5,
      lat: 41.8781,
      lng: -87.6298,
      title: 'Chicago',
      description: 'Chicago',
    },
    {
      id: 6,
      lat: 35.6895,
      lng: 139.6917,
      title: 'Tokyo',
      description: 'Tokyo',
    },
    {
      id: 7,
      lat: 51.5074,
      lng: -0.1278,
      title: 'London',
      description: 'London',
    },
    {
      id: 8,
      lat: 48.8566,
      lng: 2.3522,
      title: this.imgBase64,
    },
  ];

  ngOnInit() {
    this.map = new mapboxgl.Map({
      container: 'mapa',
      accessToken:
        'pk.eyJ1IjoiaXR6aS1hciIsImEiOiJjbTR0cnJvbmgwOG1xMmpyOXphYnk2YXA3In0.nvbObADvRjZvchA9t_gJog',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-95.7129, 37.0902],
      zoom: 4,
    });
    this.addMarker();
  }

  addMarker() {
    this.markers.forEach((marker) => {
      const micolor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      new mapboxgl.Marker({ color: micolor })
        .setLngLat([marker.lng, marker.lat])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            '<h3>' + marker.title + '</h3><p>' + marker.description + '</p> <br/> <img src="' + this.imgBase64 + '" alt="Imagen" width="100" height="100">'
          )
        )
        .addTo(this.map);
    });
  }

  
}
