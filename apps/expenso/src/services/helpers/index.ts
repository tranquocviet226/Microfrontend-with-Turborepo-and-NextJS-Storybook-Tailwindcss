import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'

import type { IApiResponse, IErrorItem } from '../models'

export const isValueInObject = <T extends string>(
  obj: unknown,
  value: T,
): obj is { [K in T]: unknown } => {
  return typeof obj === 'object' && obj != null && value in obj
}

/**
 * Type predicate to narrow an unknown error to `FetchBaseQueryError`
 */
export function isFetchBaseQueryError(
  error: unknown,
): error is FetchBaseQueryError {
  return typeof error === 'object' && error != null && 'status' in error
}

/**
 * Type predicate to narrow an unknown error to an object with a string 'message' property
 */
export function isErrorWithMessage(
  error: unknown,
): error is { error: { data: { message: string } } } {
  return (
    isValueInObject(error, 'error') &&
    isValueInObject(error.error, 'data') &&
    isValueInObject(error.error.data, 'message')
  )
}

export function isResponseError(
  response: unknown,
): response is { error: { message: string } } {
  return (
    typeof response === 'object' &&
    response != null &&
    'error' in response &&
    isValueInObject(response?.error, 'message')
  )
}

export function isApiError(
  obj: unknown | IApiResponse<IErrorItem[]>,
): obj is IApiResponse<IErrorItem[]> {
  if (isValueInObject(obj, 'statusCode')) {
    const { statusCode } = obj
    if (typeof statusCode === 'number')
      return statusCode < 200 || statusCode >= 300
  }
  return false
}

export function isApiResponse(
  obj: unknown | IApiResponse<unknown>,
): obj is IApiResponse<unknown> {
  if (isValueInObject(obj, 'statusCode') && isValueInObject(obj, 'data')) {
    const { statusCode, data } = obj
    if (typeof statusCode === 'number' && data) return true
  }
  return false
}

export function getErrorWithMessage(error: unknown) {
  if (isErrorWithMessage(error))
    return {
      isError: true,
      message: error.error.data.message,
    }
  return { isError: false, message: 'Unknown error' }
}
