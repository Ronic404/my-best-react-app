import { lazy } from 'react'

export { articlesPageReducer } from './model/slices/articlesPageSlice'

export default lazy(async () => await import('./ui/ArticlesPage/ArticlesPage'))

export type { ArticlePageSchema } from './model/types/articlePageSchema'
