import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../../interface'; 

@Pipe({
  name: 'imagen',
  standalone: true
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Hero): string {

    if (!heroe.id && !heroe.alt_img) {
      return 'no-image.png';
    } else if (heroe.alt_img) {
      return heroe.alt_img;
    } else {
      return "heroes/" + heroe.id + '.jpg';
    }
  }

}
