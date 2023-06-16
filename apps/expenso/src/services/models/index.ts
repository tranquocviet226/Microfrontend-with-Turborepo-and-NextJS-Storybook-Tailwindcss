export interface IApiResponse<T> {
  data: T
  message: string
  status: string
  statusCode: number
  total?: number
}

export interface IErrorItem {
  defaultMessage: string
  id: string
}

export interface IErrorMessage {
  message: string
  status: string | number
  data: unknown
}
