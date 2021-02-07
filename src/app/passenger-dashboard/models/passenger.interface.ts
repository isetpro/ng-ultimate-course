export interface IPassenger {
    id: number
    fullname: string
    checkedIn: boolean
    checkInDate?: number
    children?: IChild[]
}

export interface IChild {
    name: string
    age: number
}