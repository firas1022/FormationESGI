import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, debut: number, end: number): string {
    return value.slice(debut, end) + ' ...';
  }
}
