import { ReactNode } from 'react'
import { Story } from '@storybook/react'

import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'

import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { profileReducer } from '../../../entities/Profile'
import { articlesPageReducer } from 'pages/ArticlesPage/model/slices/articlesPageSlice'
import { addCommentFormReducer } from 'features/addCommentForm/model/slices/addCommentFormSlice'
import { articleDetailsReducer } from '../../../entities/Article/model/slice/articleDetailsSlice'
import { articleDetailsPageReducer } from 'pages/ArticleDetailPage/model/slices'

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
