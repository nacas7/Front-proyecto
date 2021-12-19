import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: string): any {

    const resultCity = [];
    for (const city of value) {
      if (city.ubication.indexOf(arg) > -1) {
        resultCity.push(city)
      }
    }
    return resultCity;
  }

}
