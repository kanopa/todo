import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], title: string): any {
    return title
            ? items.filter(item => item.title.indexOf(title) !== -1)
            : items;
  }

}
