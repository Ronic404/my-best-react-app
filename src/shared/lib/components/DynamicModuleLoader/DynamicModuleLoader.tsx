import { FC, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'
import { Reducer } from '@reduxjs/toolkit'

import { ReduxStoreWithManager, StateSchema } from 'app/providers/StoreProvider'

export type ReducersList = {
  [name in keyof StateSchema]?: Reducer
}

export interface IDynamicModuleLoaderProps {
  reducers: ReducersList
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<IDynamicModuleLoaderProps> = ({
  children,
  reducers,
  removeAfterUnmount = true,
}) => {
  const dispatch = useDispatch()
  const store = useStore() as ReduxStoreWithManager

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as keyof StateSchema, reducer)
      dispatch({ type: `@INIT ${name} reducer` })
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as keyof StateSchema)
          dispatch({ type: `@DESTROY ${name} reducer` })
        })
      }
    }
  // eslint-disable-next-line
  }, [])

  return (
    <>
      {children}
    </>
  )
}
