import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AvatarDropdownSchema } from '../types/avatarDropdownSchema'

const initialState: AvatarDropdownSchema = {

}

export const avatarDropdownSlice = createSlice({
  name: 'avatarDropdown',
  initialState,
  reducers: {
    template: (state, action: PayloadAction<string>) => {

    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(, (state) => {
  //       state.isLoading = true
  //       state.error = undefined
  //     })
  //     .addCase(, (state) => {
  //       state.isLoading = false
  //     })
  //     .addCase(, (state) => {
  //       state.isLoading = false
  //       state.error = action.payload
  //     })
  // }
})

export const { actions: avatarDropdownActions } = avatarDropdownSlice
export const { reducer: avatarDropdownReducer } = avatarDropdownSlice
