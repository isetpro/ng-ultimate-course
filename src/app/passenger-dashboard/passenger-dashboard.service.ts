import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {BehaviorSubject, Observable, throwError} from 'rxjs'
import {catchError} from 'rxjs/operators'
import {IPassenger} from './models/passenger.interface'

@Injectable({
  providedIn: 'root'
})
export class PassengerDashboardService {
  private host = 'http://localhost:3000/'

  private readonly _passengers = new BehaviorSubject<IPassenger[]>([])
  readonly passengers$ = this._passengers.asObservable();

  constructor(private http: HttpClient) {
    this.initPassengersFromAPI().subscribe(passengers => this.passengers = passengers)
  }


  // the getter will return the last value emitted in _todos subject
  get passengers(): IPassenger[] {
    return this._passengers.getValue()
  }

  // assigning a value to this.todos will push it onto the observable 
  // and down to all of its subsribers (ex: this.todos = [])
  set passengers(value: IPassenger[]) {
    this._passengers.next(value)
  }

  // addPassenger(title: string) {
  //   // we assaign a new copy of todos by adding a new todo to it 
  //   // with automatically assigned ID ( don't do this at home, use uuid() )
  //   this.passengers = [
  //     ...this.passengers,
  //     {id: this.todos.length + 1, title, isCompleted: false}
  //   ]
  // }

  updatePassenger(passenger: IPassenger) {
    this.updatePassengerFromAPI(passenger).subscribe(passenger => {
      this.passengers = this.passengers.map(p => p.id === passenger.id ? passenger : p)
    })
  }

  removePassenger(id: number) {
    this.removePassengerFromAPI(id).subscribe(() => {
      this.passengers = this.passengers.filter(passenger => passenger.id !== id)
    })
  }

  private initPassengersFromAPI(): Observable<IPassenger[]> {
    return this.http.get<IPassenger[]>(this.host + 'passengers')
      .pipe(
        catchError(this.handleError)
      )
  }

  private updatePassengerFromAPI(passenger: IPassenger): Observable<IPassenger> {
    return this.http
      .put<IPassenger>(this.host + 'passengers' + '/' + passenger.id, passenger)
      .pipe(
        catchError(this.handleError)
      )
  }
  private removePassengerFromAPI(id: number): Observable<IPassenger> {
    return this.http
      .delete<any>(this.host + 'passengers' + '/' + id)
      .pipe(
        catchError(this.handleError)
      )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message)
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`)
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.')
  }
}
