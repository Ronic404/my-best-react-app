import { AxiosInstance } from 'axios'
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'

import { UserSchema } from '../../../../entities/User'
import { CounterSchema } from '../../../../entities/Counter'
import { articleDetailsSchema } from '../../../../entities/Article'

import { UISchema } from '@/features/UI'
import { LoginSchema } from '@/features/AuthByUsername'
import { ProfileSchema } from '@/features/editableProfileCard'
import { AddCommentFormSchema } from '@/features/addCommentForm'

import { ArticlePageSchema } from '@/pages/ArticlesPage'
import { ArticleDetailsPageSchema } from '@/pages/ArticleDetailPage'

import { rtkApi } from '@/shared/api/rtkApi'

export type MountedReducers = OptionalRecord<keyof StateSchema, boolean>

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  ui: UISchema
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
  // Асинхронные редюсеры
  loginForm?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: articleDetailsSchema
  addCommentForm?: AddCommentFormSchema
  articlesPage?: ArticlePageSchema
  articleDetailsPage?: ArticleDetailsPageSchema
}

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  getMountedReducers: () => MountedReducers
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: keyof StateSchema, reducer: Reducer) => void
  remove: (key: keyof StateSchema) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  state: StateSchema
}
