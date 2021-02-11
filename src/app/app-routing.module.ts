import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {HomeComponent} from './home/home.component'
import {NotFoundComponent} from './not-found/not-found.component'

const routes: Routes = [
  {
    path: 'passengers',
    loadChildren: () => import('./passenger-dashboard/passenger-dashboard.module').then(m => m.PassengerDashboardModule)
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }