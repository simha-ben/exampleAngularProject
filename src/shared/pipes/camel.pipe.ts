import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camel'
})
export class CamelPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return this.toTitleCase(value);
  }
   
toTitleCase(str :string) {
  return str.replace(
      /\w\S*/g,
      function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
  );
}
}
  

