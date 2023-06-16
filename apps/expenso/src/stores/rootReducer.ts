// store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit'

import authReducer from '@/features/authentication/authSlice'
import { api } from '@/services/api/api'

import counterReducer from '../features/counter/counterSlice'
import appReducer from './appSlice'

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  app: appReducer,
  counter: counterReducer,
  auth: authReducer,
  // Add more reducers from other features here
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
