import { Pipe, PipeTransform } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Pipe({
  name: 'lastCharUperCase'
})
export class LastCharUperCasePipe implements PipeTransform {

  constructor(private uperCase: UpperCasePipe) {}
  transform(value: string): any {
    return value.replace(/.$/, this.uperCase.transform(value.substr(value.length - 1)));
  }
}
