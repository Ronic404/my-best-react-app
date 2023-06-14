import { memo } from 'react'

import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card'
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton'

import { ArticleViewType } from '../../model/types/article'

import { classNames } from '@/shared/lib/classNames/classNames'
import { toggleFeatures } from '@/shared/lib/features'

import styles from './ArticleListItem.module.scss'

export interface IArticleListItemSkeletonProps {
  className?: string
  view: ArticleViewType
}

export const ArticleListItemSkeleton = memo((props: IArticleListItemSkeletonProps) => {
  const { className, view } = props

  const Card = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => CardRedesigned,
    off: () => CardDeprecated,
  })

  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  })

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
