import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custSearchPipe',
  standalone: true
})
export class CustSearchPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
