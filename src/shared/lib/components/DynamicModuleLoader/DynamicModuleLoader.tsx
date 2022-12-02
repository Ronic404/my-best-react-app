import { FC, ReactNode, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'
import { Reducer } from '@reduxjs/toolkit'

import { ReduxStoreWithManager, StateSchema } from 'app/providers/StoreProvider'

export type ReducersList = {
  [name in keyof StateSchema]?: Reducer<NonNullable<StateSchema[name]>>
}

export interface IDynamicModuleLoaderProps {
  children: ReactNode
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
    const mounterReducers = store.reducerManager.getMountedReducers()

    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mounterReducers[name as keyof StateSchema]

      if (!mounted) {
        store.reducerManager.add(name as keyof StateSchema, reducer)
        dispatch({ type: `@INIT ${name} reducer` })
      }
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
