import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {IBaggage} from '../../models/baggage.interface'
import {IPassenger} from '../../models/passenger.interface'

@Component({
  selector: 'app-passenger-form',
  templateUrl: 'passenger-form.component.html',
  styleUrls: ['passenger-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PassengerFormComponent implements OnInit {

  @Input() passenger?: IPassenger
  @Output() updatePassenger: EventEmitter<IPassenger> = new EventEmitter()
  baggage: IBaggage[] = [
    {
      key: 'none',
      value: 'No baggage'
    },
    {
      key: 'hand-only',
      value: 'Hand baggage'
    },
    {
      key: 'hold-only',
      value: 'Hold baggage'
    },
    {
      key: 'hand-hold',
      value: 'Hand and hold baggage'
    },

  ]

  // get diagnostic() {return JSON.stringify(this.model)}

  constructor() { }


  ngOnInit(): void {
  }

  onSubmit(passenger: IPassenger, isValid: boolean | null) {
    if (isValid) {
      this.updatePassenger.emit(passenger)
    }
  }

  toggleCheckIn(checkedIn: boolean) {
    if (this.passenger) {
      this.passenger.checkInDate = checkedIn ? Date.now() : undefined
    }
  }
}
