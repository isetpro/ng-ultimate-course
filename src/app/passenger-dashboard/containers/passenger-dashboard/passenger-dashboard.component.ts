import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core'
import {Observable, Subscription, of} from 'rxjs'
import {IPassenger} from '../../models/passenger.interface'
import {PassengerDashboardService} from '../../passenger-dashboard.service'

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: 'passenger-dashboard.component.html',
  styleUrls: ['passenger-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class PassengerDashboardComponent implements OnInit {

  passengers: Observable<IPassenger[]> = of([])
  constructor(private passengerService: PassengerDashboardService) { }

  ngOnInit(): void {
    this.passengers = this.passengerService.getPassengers()
  }

  handleRemove(id: number) {
    console.log(id)

  }
  handleEdit(passenger: IPassenger) {
    console.log(passenger)
  }

}
