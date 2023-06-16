// authSlice.ts
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { authApi } from '@/services/api/auth'
import type { IAuthResponse } from '@/services/models/authentication/IAuthResponse'
import type { IUser } from '@/services/models/authentication/IUser'

interface AuthState {
  token: string | null
  user: IUser | null
}

export const FETCH_USER_REQUEST = 'user/fetchUserRequest'

const initialState: AuthState = {
  token: null,
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<IAuthResponse>) {
      state.token = action.payload.token
      state.user = action.payload.user
    },
    logout(state) {
      state.token = null
      state.user = null
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, action) => {
        state.token = action.payload.token
        state.user = action.payload.user
      },
    )
  },
})

const authReducer = authSlice.reducer
export const { setAuth, logout } = authSlice.actions
export default authReducer
