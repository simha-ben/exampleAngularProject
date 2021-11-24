import {Injectable, Pipe, PipeTransform } from '@angular/core';
import { book } from 'src/program/models/Book';




@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  // @Injectable()
  // export class AttributeFilterPipe implements PipeTransform {
    transform(array: book[], filterFrom: any[]): any {
      return array.filter(item => item.name.indexOf(filterFrom[0].value) !== -1);
    }
  }
  

