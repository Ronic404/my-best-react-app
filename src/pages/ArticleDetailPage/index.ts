import { lazy } from 'react'

export default lazy(async () => await import('./ui/ArticleDetailPage/ArticleDetailPage'))

export type { ArticleDetailsPageSchema } from 'pages/ArticleDetailPage/model/types'
export type { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema'
export type { ArticleDetailsRecommendationsSchema } from './model/types/ArticleDetailsRecommendationsSchema'
