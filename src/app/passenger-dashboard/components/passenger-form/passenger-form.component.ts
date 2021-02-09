import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import {IPassenger} from '../../models/passenger.interface'

@Component({
  selector: 'app-passenger-form',
  templateUrl: 'passenger-form.component.html',
  styleUrls: ['passenger-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PassengerFormComponent implements OnInit {

  @Input() passenger?: IPassenger

  constructor() { }

  ngOnInit(): void {
  }

}
