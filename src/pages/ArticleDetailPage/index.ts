import { lazy } from 'react'

export default lazy(async () => await import('./ui/ArticleDetailPage/ArticleDetailPage'))

export { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema'
