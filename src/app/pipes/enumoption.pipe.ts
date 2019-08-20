import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumoption'
})
export class EnumoptionPipe implements PipeTransform {
  transform(value: any, object: object): any {
    return object[value];
  }
}
