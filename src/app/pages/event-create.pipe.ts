import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eventCreate'
})
export class EventCreatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
