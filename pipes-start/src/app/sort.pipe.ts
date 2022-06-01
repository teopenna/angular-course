import { Pipe, PipeTransform } from "@angular/core";
import { resourceUsage } from "process";

@Pipe({
  name: "sort",
})
export class SortPipe implements PipeTransform {
  transform(value: any, propertyName: string): unknown {
    const objectComparison = (itemA: any, itemB: any) => {
      if (itemA[propertyName] < itemB[propertyName]) {
        return -1;
      }

      if (itemA[propertyName] > itemB[propertyName]) {
        return 1;
      }

      return 0;
    };

    if (value.length > 0) {
      return value.sort(objectComparison);
    }
    return value;
  }
}
