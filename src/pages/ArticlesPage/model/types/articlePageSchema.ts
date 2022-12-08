import { EntityState } from '@reduxjs/toolkit'

import { SortOrder } from '@/shared/types'
import { Article, ArticleSortField, ArticleType, ArticleViewType } from '@/entities/Article'

export interface ArticlePageSchema extends EntityState<Article> {
  isLoading?: boolean
  error?: string
  // pagination
  page: number
  limit: number
  hasMore: boolean
  // filters
  view: ArticleViewType
  order: SortOrder
  sort: ArticleSortField
  search: string
  type: ArticleType

  _inited: boolean
}
