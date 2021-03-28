import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {

  transform(value: string): unknown {
    return value.split(' ').join('-').split(/[&1]/).join('m').split(/"/).join('-')
  }

}
