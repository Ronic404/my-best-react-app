import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { USER_LS_KEY } from '@/shared/constants/localStorage'
import { setFeatureFlags } from '@/shared/lib/features'

import { JsonSettings } from '../types/jsonSettings'
import { initAuthData } from '../services/initAuthData'
import { User, UserSchema } from '../types/user'
import { saveJsonSettings } from '../services/saveJsonSettings'

const initialState: UserSchema = {
  _inited: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload
      setFeatureFlags(action.payload.features)
      localStorage.setItem(USER_LS_KEY, action.payload.id)
    },
    logout: (state) => {
      state.authData = undefined
      localStorage.removeItem(USER_LS_KEY)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveJsonSettings.fulfilled, (state, action: PayloadAction<JsonSettings>) => {
        if (state.authData) {
          state.authData.jsonSettings = action.payload
        }
      })
    builder
      .addCase(initAuthData.fulfilled, (state, { payload }: PayloadAction<User>) => {
        state.authData = payload
        setFeatureFlags(payload.features)
        state._inited = true
      })
    builder
      .addCase(initAuthData.rejected, (state) => {
        state._inited = true
      })
  },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
