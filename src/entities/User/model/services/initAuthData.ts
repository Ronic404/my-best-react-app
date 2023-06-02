import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider'
import { USER_LS_KEY } from '@/shared/constants/localStorage'
import { User } from '../types/user'
import { getUserDataByIdQuery } from '../../api/userApi'

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
      return response
    } catch (error) {
      console.log(error)
      return rejectWithValue('')
    }
  },
)
