import { lazy } from 'react'

export default lazy(async () => await import('./ui/ArticlesPage/ArticlesPage'))

export { ArticlePageSchema } from './model/types/articlePageSchema'
