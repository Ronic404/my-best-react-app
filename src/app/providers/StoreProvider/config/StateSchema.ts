import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'

import { CounterSchema } from '../../../../entities/Counter'
import { UserSchema } from '../../../../entities/User'
import { ProfileSchema } from '../../../../entities/Profile'
import { LoginSchema } from 'features/AuthByUsername'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema

  // Асинхронные редюсеры
  loginForm?: LoginSchema
  profile?: ProfileSchema
}

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: keyof StateSchema, reducer: Reducer) => void
  remove: (key: keyof StateSchema) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}
