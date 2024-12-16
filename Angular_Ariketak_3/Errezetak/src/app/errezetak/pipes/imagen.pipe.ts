import { Pipe, PipeTransform } from '@angular/core';
import { Errezeta } from '../interface/interface';

@Pipe({
  name: 'imagen',
  standalone: true,
  pure: false
})
export class ImagenPipe implements PipeTransform {

  transform(errezeta: Errezeta): string {

    if (errezeta.argazkia) {
      return errezeta.argazkia;
    } else {
      return "errezetak/no-image.png";
    }
  }

}
