import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { User, UserSchema } from '../types/user'
import { USER_LS_KEY } from '@/shared/constants/localStorage'
import { setFeatureFlags } from '@/shared/lib/features'

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
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LS_KEY)
      if (user) {
        const json = JSON.parse(user) as User
        state.authData = json
        setFeatureFlags(json.features)
      }
      state._inited = true
    },
    logout: (state) => {
      state.authData = undefined
      localStorage.removeItem(USER_LS_KEY)
    },
  },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
