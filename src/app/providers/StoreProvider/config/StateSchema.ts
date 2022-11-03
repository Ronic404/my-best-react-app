import { AxiosInstance } from 'axios'
import { NavigateOptions, To } from 'react-router-dom'
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'

import { CounterSchema } from '../../../../entities/Counter'
import { UserSchema } from '../../../../entities/User'
import { ProfileSchema } from '../../../../entities/Profile'
import { articleDetailsSchema } from '../../../../entities/Article'
import { LoginSchema } from 'features/AuthByUsername'
import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailPage'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema

  // Асинхронные редюсеры
  loginForm?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: articleDetailsSchema
  articleDetailsComments?: ArticleDetailsCommentsSchema
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

export interface ThunkExtraArg {
  api: AxiosInstance
  navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  state: StateSchema
}
