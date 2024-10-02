import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductosService } from './API/productos.service';
import { CovidComponent } from "./API/covid/covid.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CovidComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  articulos: any;
  constructor (private productService: ProductosService) {}

  ngOnInit() : void {

    this.getProducts();

    // this.http.get("http://scratchya.com.ar/vue/datos.php").subscribe (
    //   resultado => {
    //     this.articulos = resultado
    //   }
    // )
  }

  // subscribe es un metodo que se ejecuta cuando el observable se completa, el observable es el resultado de la peticion http. 
  // Subscribe recibe un objeto con dos funciones, next y error. Next se ejecuta cuando la peticion es exitosa y error cuando hay un error en la peticion.

  getProducts () {
    this.productService.getProducts().subscribe ({
      next : (result) => {
        this.articulos = result;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
