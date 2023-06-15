import { HTMLAttributeAnchorTarget, memo, ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

import { Text } from '@/shared/ui/deprecated/Text'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { ToggleFeatures } from '@/shared/lib/features'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import { Article, ArticleViewType } from '../../model/types/article'

import { classNames } from '@/shared/lib/classNames/classNames'

import styles from './ArticleList.module.scss'

export interface IArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleViewType
  target?: HTMLAttributeAnchorTarget
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
    target,
  } = props
  const { t } = useTranslation('article')

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(styles.articleList, {}, [className, styles[view]])}>
        <Text title={t('notFound')} size='L' />
      </div>
    )
  }

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <HStack
          className={styles.articleListRedesigned}
          data-testid='ArticleList'
          gap='16'
          wrap='wrap'
        >
          {articles.map((item) => (
            <ArticleListItem
              className={styles.card}
              article={item}
              view={view}
              target={target}
              key={item.id}
            />
          ))}

          {isLoading &&
            getSkeletons(view)
          }
        </HStack>
      }
      off={
        <div
          className={classNames(styles.articleList, {}, [className, styles[view]])}
          data-testid='ArticleList'
        >
          {articles.map((item) => (
            <ArticleListItem
              className={styles.card}
              article={item}
              view={view}
              target={target}
              key={item.id}
            />
          ))}

          {isLoading &&
            getSkeletons(view)
          }
        </div>
      }
    />
  )
})
