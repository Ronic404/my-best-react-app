import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AddCommentFormSchema } from '../types/addCommentForm'

const initialState: AddCommentFormSchema = {
  text: '',
}

export const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(___.pending, (state) => {
  //     })
  //     .addCase(___.fulfilled, (state) => {
  //     })
  //     .addCase(___.rejected, (state) => {
  //     })
  // },
})

export const { actions: addCommentFormActions } = addCommentFormSlice
export const { reducer: addCommentFormReducer } = addCommentFormSlice
