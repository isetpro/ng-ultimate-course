import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {PassengerDashboardComponent} from './containers/passenger-dashboard/passenger-dashboard.component'
import {PassengerViewerComponent} from './containers/passenger-viewer/passenger-viewer.component'

const routes: Routes = [
    {
        path: '',
        component: PassengerDashboardComponent
    },
    {
        path: 'passenger/:id',
        component: PassengerViewerComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PassengerDashboardRoutingModule { }