import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'like',
    pure: false
})
export class Like implements PipeTransform {
    transform(like: string): String[] {

      let likes = [];
      Number(like).toString(2).split('').forEach( (l, i) => l == '1' ? likes.push(['Sudents', 'Location', 'Campus', 'Atmosphere', 'Dorm Rooms' , 'Sports'][i]) : null);

      return likes.length == 0 ? ['None'] : likes;

    }
}
