import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "reverse",
})
export class ReversePipe implements PipeTransform {
  transform(value: any): unknown {
    if (value && typeof value === "string") {
      var valueArray = value.split("");
      return valueArray.reverse().join("");
    }
    return value;
  }
}
