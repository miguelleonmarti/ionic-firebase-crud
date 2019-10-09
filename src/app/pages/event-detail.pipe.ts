import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eventDetail'
})
export class EventDetailPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
