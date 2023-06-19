import { memo } from 'react'

import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card'
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton'

import { ArticleViewType } from '../../model/types/article'

import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features'

import styles from './ArticleListItem.module.scss'

export interface IArticleListItemSkeletonProps {
  className?: string
  view: ArticleViewType
}

export const ArticleListItemSkeleton = memo((props: IArticleListItemSkeletonProps) => {
  const { className, view } = props

  const mainClass = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => styles.articleListItemRedesigned,
    off: () => styles.articleListItem,
  })

  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  })

  if (view === 'big') {
    const cardContent = (
      <>
        <div className={styles.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton className={styles.username} width={150} height={16} />
          <Skeleton className={styles.date} width={150} height={16} />
        </div>
        <Skeleton width={250} height={24} className={styles.title} />
        <Skeleton height={200} className={styles.img} />
        <div className={styles.footer}>
          <Skeleton height={36} width={200} />
        </div>
      </>
    )
    return (
      <div className={classNames(mainClass, {}, [className, styles[view]])}>
        <ToggleFeatures
          feature="isAppRedesigned"
          on={
            <CardRedesigned className={styles.card} border="round">
              {cardContent}
            </CardRedesigned>
          }
          off={
            <CardDeprecated className={styles.card}>
              {cardContent}
            </CardDeprecated>
          }
        />
      </div>
    )
  }

  const cardContent = (
    <>
      <ToggleFeatures
        feature='isAppRedesigned'
        on={
          <Skeleton className={styles.img} width='100%' height={150} border='32px' />
        }
        off={
          <div className={styles.imageWrapper}>
            <Skeleton className={styles.img} width={200} height={200} />
          </div>
        }
      />
      <div className={styles.infoWrapper}>
        <Skeleton width={130} height={16} />
      </div>
      <Skeleton className={styles.title} width={150} height={16} />
    </>
  )

  return (
    <div className={classNames(mainClass, {}, [className, styles[view]])}>
      <ToggleFeatures
        feature='isAppRedesigned'
        on={
          <CardRedesigned className={styles.card} border="round">
            {cardContent}
          </CardRedesigned>
        }
        off={
          <CardDeprecated className={styles.card}>
            {cardContent}
          </CardDeprecated>
        }
      />
    </div>
  )
})
