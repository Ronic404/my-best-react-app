import { HTMLAttributeAnchorTarget, memo } from 'react'

import { ToggleFeatures } from '@/shared/lib/features'
import { Article, ArticleViewType } from '../../model/types/article'
import { ArticleListItemDeprecated } from './ArticleListItemDeprecated/ArticleListItemDeprecated'
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned/ArticleListItemRedesigned'

export interface IArticleListItemProps {
  className?: string
  article: Article
  view: ArticleViewType
  target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = memo((props: IArticleListItemProps) => {
  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <ArticleListItemRedesigned {...props} />
      }
      off={
        <ArticleListItemDeprecated {...props} />
      }
    />
  )
})
