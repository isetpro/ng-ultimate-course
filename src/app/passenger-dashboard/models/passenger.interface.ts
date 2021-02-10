import {IBaggage} from './baggage.interface'

export interface IPassenger {
    id: number
    fullname: string
    checkedIn: boolean
    checkInDate?: number
    baggage: string
}
