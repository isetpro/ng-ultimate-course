import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { IPassenger } from '../models/passenger.interface'

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PassengerDashboardComponent implements OnInit {

  constructor() { }

  passengers: IPassenger[] = []

  ngOnInit(): void {
  }

}
