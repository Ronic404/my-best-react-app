import { ReactNode } from 'react'
import { Story } from '@storybook/react'

import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider'

import { loginReducer } from '@/features/AuthByUsername'
import { profileReducer } from '@/features/editableProfileCard'
import { articlesPageReducer } from '@/pages/ArticlesPage'
import { addCommentFormReducer } from '@/features/addCommentForm'
import { articleDetailsReducer } from '../../../entities/Article'
import { articleDetailsPageReducer } from '@/pages/ArticleDetailPage'

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
