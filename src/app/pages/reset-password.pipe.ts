import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resetPassword'
})
export class ResetPasswordPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
