import { lazy } from 'react'

export default lazy(async () => await import('./ui/ArticleDetailPage/ArticleDetailPage'))

export { articleDetailsPageReducer } from './model/slices'

export type { ArticleDetailsPageSchema } from './model/types'
export type { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema'
export type { ArticleDetailsRecommendationsSchema } from './model/types/ArticleDetailsRecommendationsSchema'
