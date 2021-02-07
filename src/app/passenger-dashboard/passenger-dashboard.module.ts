import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {PassengerDashboardRoutingModule} from './passenger-dashboard-routing.module'
import {PassengerDashboardComponent} from './containers/passenger-dashboard/passenger-dashboard.component'

import {PassengerDetailComponent} from './components/passenger-detail/passenger-detail.component'
import {PassengerCountComponent} from './components/passenger-count/passenger-count.component'



@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerDetailComponent,
    PassengerCountComponent
  ],
  imports: [
    CommonModule,
    PassengerDashboardRoutingModule
  ]
})
export class PassengerDashboardModule { }
