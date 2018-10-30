import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-count',
  templateUrl: 'passanger-count.component.html'
})
export class PassengerCountComponent {
  @Input()
  items: Passenger[];

  constructor() {}

  checkedInCount(): Number {
    if (!this.items) {
      return;
    }

    return this.items.filter((p: Passenger) => {
      return p.checkedIn;
    }).length;
  }
}
