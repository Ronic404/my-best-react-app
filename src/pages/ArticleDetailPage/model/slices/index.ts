import { combineReducers } from '@reduxjs/toolkit'

import { ArticleDetailsPageSchema } from '../types'
import { ArticleDetailsCommentsSliceReducer } from './ArticleDetailsCommentsSlice'
import { ArticleDetailsPageRecommendadionsReducer } from './ArticleDetailsPageRecommendadionsSlice'

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  comments: ArticleDetailsCommentsSliceReducer,
  recommendations: ArticleDetailsPageRecommendadionsReducer,
})
