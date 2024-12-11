import { Pipe, PipeTransform } from '@angular/core';
import { Errezeta } from '../interface/interface';

@Pipe({
  name: 'imagen',
  standalone: true,
  pure: false
})
export class ImagenPipe implements PipeTransform {

  transform(errezeta: Errezeta): string {

    if (!errezeta.id && !errezeta.argazkia) {
      return 'heroes/no-image.png';
    } else if (errezeta.argazkia) {
      return errezeta.argazkia;
    } else {
      return "heroes/" + errezeta.id + '.jpg';
    }
  }

}
