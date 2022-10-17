import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'

import { StateSchema } from './StateSchema'
import { createReducerManager } from './reducerManager'

import { counterReducer } from '../../../../entities/Counter'
import { userReducer } from '../../../../entities/User'

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
): ReturnType<typeof configureStore> {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  }

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  })

  // @ts-expect-error
  store.reducerManager = reducerManager

  return store
}
