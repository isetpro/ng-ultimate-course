import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {PassengerDashboardComponent} from './containers/passenger-dashboard/passenger-dashboard.component'

const routes: Routes = [
    {
        path: '',
        component: PassengerDashboardComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PassengerDashboardRoutingModule { }