import type { IUser } from './IUser'

export interface IAuthResponse {
  token: string
  expiresIn: number
  user: IUser
}
