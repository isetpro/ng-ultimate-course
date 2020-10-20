import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'app-passenger-count',
  templateUrl: './passenger-count.component.html',
  styleUrls: ['./passenger-count.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PassengerCountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
