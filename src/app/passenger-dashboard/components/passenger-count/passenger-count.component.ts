import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core'
import {Observable, of} from 'rxjs'
import {count, filter, map, mergeAll, reduce, take, tap, toArray} from 'rxjs/operators'
import {IPassenger} from '../../models/passenger.interface'

@Component({
  selector: 'app-passenger-count',
  template: `
    <div >
      Checked-In passengers: 
      {{(checkedInPassengersNumber$ | async)?.length}}/{{(items$ |async)?.length}}
    </div>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class PassengerCountComponent implements OnInit {
  @Input() items$: Observable<IPassenger[]> = of([])
  checkedInPassengersNumber$: Observable<IPassenger[]> = of([])
  constructor() { }

  ngOnInit(): void {
    this.checkedInPassengersNumber$ = this.items$.pipe(
      map(passengers => passengers.filter(passenger => passenger.checkedIn)),
    )
  }


}
