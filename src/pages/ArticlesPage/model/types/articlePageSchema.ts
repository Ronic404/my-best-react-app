import { EntityState } from '@reduxjs/toolkit'

import { Article, ArticleViewType } from 'entities/Article'

export interface ArticlePageSchema extends EntityState<Article> {
  isLoading?: boolean
  error?: string
  view: ArticleViewType
  page: number
  limit?: number
  hasMore: boolean
}
