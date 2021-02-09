import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {PassengerDashboardRoutingModule} from './passenger-dashboard-routing.module'
import {PassengerDashboardComponent} from './containers/passenger-dashboard/passenger-dashboard.component'

import {PassengerDetailComponent} from './components/passenger-detail/passenger-detail.component'
import {PassengerCountComponent} from './components/passenger-count/passenger-count.component'
import {PassengerViewerComponent} from './containers/passenger-viewer/passenger-viewer.component'
import {BackButtonDirective} from './directives/back-button.directive'
import {PassengerFormComponent} from './components/passenger-form/passenger-form.component'
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerDetailComponent,
    PassengerCountComponent,
    PassengerViewerComponent,
    BackButtonDirective,
    PassengerFormComponent
  ],
  imports: [
    CommonModule,
    PassengerDashboardRoutingModule,
    FormsModule
  ]
})
export class PassengerDashboardModule { }
