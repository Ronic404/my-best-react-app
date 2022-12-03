import { lazy } from 'react'

export default lazy(async () => await import('./ui/ArticlesPage/ArticlesPage'))

export type { ArticlePageSchema } from './model/types/articlePageSchema'
