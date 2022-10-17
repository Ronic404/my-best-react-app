import { FC, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'
import { Reducer } from '@reduxjs/toolkit'

import { ReduxStoreWithManager, StateSchema } from 'app/providers/StoreProvider'

export type ReducersList = {
  [name in keyof StateSchema]?: Reducer
}

type ReducersListEntry = [keyof StateSchema, Reducer]

export interface IDynamicModuleLoaderProps {
  reducers: ReducersList
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<IDynamicModuleLoaderProps> = ({
  children,
  reducers,
  removeAfterUnmount = false,
}) => {
  const dispatch = useDispatch()
  const store = useStore() as ReduxStoreWithManager

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
      store.reducerManager.add(name, reducer)
      dispatch({ type: `@INIT ${name} reducer` })
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]: ReducersListEntry) => {
          store.reducerManager.remove(name)
          dispatch({ type: `@DESTROY ${name} reducer` })
        })
      }
    }
  }, [])

  return (
    <>
      {children}
    </>
  )
}
