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
            '<h3>' + marker.title + '</h3><p>' + marker.description + '</p>'
          )
        )
        .addTo(this.map);
    });
  }
}
