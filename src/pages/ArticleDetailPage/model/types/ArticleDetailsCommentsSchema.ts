import { EntityState } from '@reduxjs/toolkit'

import { Comment } from '@/entities/Comments'

export interface ArticleDetailsCommentsSchema extends EntityState<Comment> {
  isLoading?: boolean
  error?: string
}
