// services/api.ts
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { RootState } from '@/stores/rootReducer'

import {
  isApiError,
  isApiResponse,
  isFetchBaseQueryError,
  isValueInObject,
} from '../helpers'

// Define a service using a base URL and expected endpoints
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://stghrms.paxanimi.ai/api/',
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const { token } = (getState() as RootState).auth
    if (token) {
      headers.set('authentication', `Bearer ${token}`)
    }
    return headers
  },
})

const customBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions)
  const { data, error } = result

  // handle api response error
  if (isApiError(data)) {
    const { statusCode, data: errorData } = data
    if (error?.status === 401 || statusCode === 401) {
      // handle un authentication
    }
    const errMsg = errorData.length ? errorData[0]?.defaultMessage : ''
    if (errMsg) {
      const parseResult: { error: FetchBaseQueryError } = {
        error: {
          status: 500,
          data: { message: errMsg },
        },
      }

      return parseResult
    }
  }

  // handle HTTP error
  if (isFetchBaseQueryError(error)) {
    const errObj = 'error' in error ? error.error : error.data
    const errMsg =
      isValueInObject(errObj, 'message') && typeof errObj.message === 'string'
        ? errObj.message
        : JSON.stringify(errObj)
    return { error: { status: 500, data: { message: errMsg } } }
  }

  if (isApiResponse(data)) {
    const { statusCode, data: responseData } = data
    if (statusCode >= 200 && statusCode < 300) return { data: responseData }
  }

  return result
}

export const api = createApi({
  /**
   * `reducerPath` is optional and will not be required by most users.
   * This is useful if you have multiple API definitions,
   * e.g. where each has a different domain, with no interaction between endpoints.
   * Otherwise, a single API definition should be used in order to support tag invalidation,
   * among other features
   */
  reducerPath: 'splitApi',
  /**
   * A bare bones base query would just be `baseQuery: fetchBaseQuery({ baseUrl: '/' })`
   */
  baseQuery: customBaseQuery,
  /**
   * Tag types must be defined in the original API definition
   * for any tags that would be provided by injected endpoints
   */
  tagTypes: ['Auth'],
  /**
   * This api has endpoints injected in adjacent files,
   * which is why no endpoints are shown below.
   * If you want all endpoints defined in the same file, they could be included here instead
   */
  endpoints: () => ({}),
})
