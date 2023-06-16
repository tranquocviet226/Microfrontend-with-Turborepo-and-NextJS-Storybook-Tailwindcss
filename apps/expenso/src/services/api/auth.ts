import type { IAuthResponse } from '../models/authentication/IAuthResponse'
import type { ILoginRequest } from '../models/authentication/ILoginRequest'
import type { IUser } from '../models/authentication/IUser'
import { api } from './api'

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCurrentUser: build.query<IUser, void>({
      query: () => ({
        url: 'usermap/get-current-user',
        method: 'POST',
      }),
      providesTags: ['Auth'],
    }),
    login: build.mutation<IAuthResponse, ILoginRequest>({
      query: (credentials) => ({
        url: 'sign-in-tenant',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
})

export const { useGetCurrentUserQuery, useLoginMutation } = authApi
