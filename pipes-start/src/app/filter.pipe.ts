import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, propertyName: string): unknown {
    if (value.length === 0 || filterString === "") {
      return value;
    }

    const returnArray = [];
    for (const item of value) {
      if (item[propertyName] === filterString) {
        returnArray.push(item);
      }
    }
    return returnArray;
  }
}
