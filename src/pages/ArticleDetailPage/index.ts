import { lazy } from 'react'

export default lazy(async () => await import('./ui/ArticleDetailPage/ArticleDetailPage'))

export { ArticleDetailsPageSchema } from 'pages/ArticleDetailPage/model/types'
export { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema'
export { ArticleDetailsRecommendationsSchema } from './model/types/ArticleDetailsRecommendationsSchema'
