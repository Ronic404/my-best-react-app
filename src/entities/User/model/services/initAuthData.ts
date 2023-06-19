import { createAsyncThunk } from '@reduxjs/toolkit'

import { User } from '../types/user'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { getUserDataByIdQuery } from '../../api/userApi'
import { LS_LAST_DESIGN_KEY, USER_LS_KEY } from '@/shared/constants/localStorage'

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
  'user/initAuthData',
  async (newJsonSettings, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI
    const userId = localStorage.getItem(USER_LS_KEY)

    if (!userId) {
      return rejectWithValue('')
    }

    try {
      const response = await dispatch(getUserDataByIdQuery(userId)).unwrap()

      localStorage.setItem(LS_LAST_DESIGN_KEY, response.features?.isAppRedesigned ? 'new' : 'old')

      return response
    } catch (error) {
      console.log(error)
      return rejectWithValue('')
    }
  },
)
