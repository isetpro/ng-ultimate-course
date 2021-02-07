import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core'
import {Observable, of} from 'rxjs'
import {filter, map, mergeAll, take, toArray} from 'rxjs/operators'
import {IPassenger} from '../../models/passenger.interface'

@Component({
  selector: 'app-passenger-count',
  template: `
    <div >
      Total passengers: {{(checkedInPassengersNumber$ | async)}}/{{(items$ |async)?.length}}
    </div>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class PassengerCountComponent implements OnInit {
  @Input() items$: Observable<IPassenger[]> = of([])
  checkedInPassengersNumber$: Observable<number> = of(0)
  constructor() { }

  ngOnInit(): void {
    this.checkedInPassengersNumber$ = this.items$.pipe(
      take(1),
      mergeAll(),
      filter(passenger => passenger.checkedIn),
      toArray(),
      map(v => v.length)
    )
  }


}
