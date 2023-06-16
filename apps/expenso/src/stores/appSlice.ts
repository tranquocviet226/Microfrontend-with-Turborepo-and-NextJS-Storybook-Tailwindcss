// appSlice.ts
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import type { INotifyOptions } from '@/utils/hooks/useNotify'
import { ITheme } from '@/services/models/app/ITheme'
import { modes } from '@/utils/constants'

interface AppState {
  notification: INotifyOptions | null
  language?: string
  mode: string | null
  theme: ITheme | null
}

const initialState: AppState = {
  notification: null,
  mode: modes[0].key,
  theme: null,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    showNotify: (state, action: PayloadAction<INotifyOptions>) => {
      state.notification = action.payload
    },
    hideNotify: (state) => {
      state.notification = null
    },
    switchLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload
    },
    switchMode: (state, action: PayloadAction<string>) => {
      state.mode = action.payload
    },
    switchTheme: (state, action: PayloadAction<ITheme>) => {
      state.theme = action.payload
    },
  },
})

const appReducer = appSlice.reducer
export const {
  showNotify,
  hideNotify,
  switchLanguage,
  switchMode,
  switchTheme,
} = appSlice.actions
export default appReducer
