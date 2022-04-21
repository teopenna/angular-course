import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CounterService {
  activeToInactiveCounter: number = 0;
  inactiveToActiveCounter: number = 0;

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log('Active to inactive counter: ', this.activeToInactiveCounter);
  }

  incrementInactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log('Inactive to active counter: ', this.inactiveToActiveCounter);
  }
}