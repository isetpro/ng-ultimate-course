import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {IPassenger} from '../../models/passenger.interface'

@Component({
  selector: 'app-passenger-detail',
  templateUrl: 'passenger-detail.component.html',
  styleUrls: ['passenger-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PassengerDetailComponent implements OnInit {
  @Input('detail') passenger?: IPassenger
  @Output() remove: EventEmitter<number> = new EventEmitter()
  @Output() edit: EventEmitter<IPassenger> = new EventEmitter()
  editing = false
  constructor() { }

  ngOnInit(): void {

  }
  onNameChanged(event: Event) {
    if (this.passenger) {
      this.passenger.fullname = (event.target as HTMLInputElement).value
    }
  }
  toggleEdit() {
    if (this.editing && this.passenger !== undefined) {
      this.edit.emit(this.passenger)
    }
    this.editing = !this.editing
  }
  removePassenger(passenger: IPassenger) {
    this.remove.emit(passenger.id)
  }

}
