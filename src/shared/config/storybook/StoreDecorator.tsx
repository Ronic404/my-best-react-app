import { ReactNode } from 'react'
import { Story } from '@storybook/react'

import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider'

import { loginReducer } from '@/features/AuthByUsername/testing'
import { profileReducer } from '@/features/editableProfileCard/testing'
import { articlesPageReducer } from '@/pages/ArticlesPage/testing'
import { addCommentFormReducer } from '@/features/addCommentForm/testing'
import { articleDetailsReducer } from '../../../entities/Article/testing'
import { articleDetailsPageReducer } from '@/pages/ArticleDetailPage/testing'

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articlesPage: articlesPageReducer,
  articleDetailsPage: articleDetailsPageReducer,
}

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList,
) => (StoryComponent: Story): ReactNode => {
  return (
    <StoreProvider
      initialState={state}
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
      <StoryComponent />
    </StoreProvider>
  )
}
