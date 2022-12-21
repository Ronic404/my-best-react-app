import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators, createSlice, CreateSliceOptions, SliceCaseReducers } from '@reduxjs/toolkit'

export function buildSlice<
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends string = string,
>(options: CreateSliceOptions<State, CaseReducers, Name>): any {
  const slice = createSlice(options)

  const useActions = (): typeof slice.actions => {
    const dispatch = useDispatch()

    // @ts-expect-error
    return useMemo(() => bindActionCreators(slice.actions, dispatch), [dispatch])
  }

  return { ...slice, useActions }
}
