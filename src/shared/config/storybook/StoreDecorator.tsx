import { ReactNode } from 'react'
import { Story } from '@storybook/react'

import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { profileReducer } from '../../../entities/Profile'
import { addCommentFormReducer } from 'features/addCommentForm/model/slices/addCommentFormSlice'
import { articleDetailsReducer } from '../../../entities/Article/model/slice/articleDetailsSlice'
import { ArticleDetailsCommentsSliceReducer } from 'pages/ArticleDetailPage/model/slices/ArticleDetailsCommentsSlice'

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsComments: ArticleDetailsCommentsSliceReducer,
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
