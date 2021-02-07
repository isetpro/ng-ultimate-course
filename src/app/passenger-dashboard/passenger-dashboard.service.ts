import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {IPassenger} from './models/passenger.interface'

@Injectable({
  providedIn: 'root'
})
export class PassengerDashboardService {
  private host = 'http://localhost:3000/'
  constructor(private http: HttpClient) { }

  getPassengers(): Observable<any> {
    return this.http.get(this.host + 'passengers')
  }
}
