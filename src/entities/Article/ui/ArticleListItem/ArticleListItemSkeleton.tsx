import { memo } from 'react'

import { Card } from 'shared/ui/Card'
import { Skeleton } from 'shared/ui/Skeleton'

import { ArticleViewType } from '../../model/types/article'

import { classNames } from 'shared/lib/classNames/classNames'

import styles from './ArticleListItem.module.scss'

export interface IArticleListItemSkeletonProps {
  className?: string
  view: ArticleViewType
}

export const ArticleListItemSkeleton = memo((props: IArticleListItemSkeletonProps) => {
  const { className, view } = props

  if (view === 'big') {
    return (
      <div className={classNames(styles.articleListItem, {}, [className, styles[view]])}>
        <Card className={styles.card}>
          <div className={styles.header}>
            <Skeleton width={30} height={30} border='50%' />
            <Skeleton className={styles.username} width={150} height={16} />
            <Skeleton className={styles.date} width={150} height={16} />
          </div>
          <Skeleton className={styles.title} width={250} height={24} />
          <Skeleton className={styles.img} height={200} />
          <div className={styles.footer}>
            <Skeleton width={200} height={36} />
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className={classNames(styles.articleListItem, {}, [className, styles[view]])}>
      <Card className={styles.card}>
        <div className={styles.imageWrapper}>
          <Skeleton className={styles.img} width={200} height={200} />
        </div>
        <div className={styles.infoWrapper}>
          <Skeleton width={130} height={16} />
        </div>
        <Skeleton className={styles.title} width={150} height={16} />
      </Card>
    </div>
  )
})
