import { memo, ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import { Article, ArticleViewType } from '../../model/types/article'

import { classNames } from 'shared/lib/classNames/classNames'

import styles from './ArticleList.module.scss'

export interface IArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleViewType
}

const getSkeletons = (view: ArticleViewType): ReactNode => {
  return new Array(view === 'small' ? 9 : 3)
    .fill(0)
    .map((_, index) => (
      <ArticleListItemSkeleton className={styles.card} view={view} key={index} />
    ))
}

export const ArticleList = memo((props: IArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = 'small',
  } = props
  const { t } = useTranslation()

  const renderArticle = (article: Article): ReactNode => {
    return (
      <ArticleListItem
        className={styles.card}
        article={article}
        view={view}
        key={article.id}
      />
    )
  }

  return (
    <div className={classNames(styles.articleList, {}, [className, styles[view]])}>
      {articles.length > 0 &&
        articles.map(renderArticle)
      }
      {isLoading &&
        getSkeletons(view)
      }
    </div>
  )
})
