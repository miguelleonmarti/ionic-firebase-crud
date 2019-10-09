import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eventList'
})
export class EventListPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
