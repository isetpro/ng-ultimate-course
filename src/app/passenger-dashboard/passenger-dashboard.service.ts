import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {BehaviorSubject, iif, Observable, of, throwError} from 'rxjs'
import {catchError, map, mergeMap, switchMap, tap} from 'rxjs/operators'
import {IPassenger} from './models/passenger.interface'

@Injectable({
  providedIn: 'root'
})
export class PassengerDashboardService {
  private host = 'http://localhost:3000/'

  private readonly _passengers = new BehaviorSubject<IPassenger[]>([])
  readonly passengers$ = this._passengers.asObservable();

  constructor(private http: HttpClient) {
    console.log('service constructor')

    this.initPassengersFromAPI().subscribe(passengers => this.passengers = passengers)
  }


  // the getter will return the last value emitted in _todos subject
  get passengers(): IPassenger[] {
    return this._passengers.getValue()
  }

  getPassenger(id: number) {

    return this.passengers$.pipe(
      mergeMap(passengers =>
        iif(
          () => passengers.length === 0,
          this.initPassengersFromAPI(),
          of(passengers))
      ),
      map(passengers => {
        const passenger = passengers?.find(p => p.id === id)

        if (passenger) {
          return passenger
        } else {
          throw new Error('Passenger has not found')
        }
      }),
      catchError(this.handleError)
    )
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
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    return this.http
      .put<IPassenger>(this.host + 'passengers' + '/' + passenger.id, passenger, {headers})
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
      console.error('An error occurred:', error.error.message)
    } else {
      console.error(
        `Backend returned code ${error}`)
    }
    return throwError(
      'Something bad happened; please try again later.')
  }
}
