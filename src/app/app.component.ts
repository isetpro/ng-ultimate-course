import {ChangeDetectionStrategy, Component} from '@angular/core'

interface INav {
  link: string,
  name: string,
  exact: boolean
}
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'ng-ultimate-course';

  nav: INav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true
    },
    {
      link: '/passengers',
      name: 'Dashboard',
      exact: false
    },
    {
      link: '/oops',
      name: '404',
      exact: false
    },
  ]
}
