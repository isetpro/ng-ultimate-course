import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PassengerDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
