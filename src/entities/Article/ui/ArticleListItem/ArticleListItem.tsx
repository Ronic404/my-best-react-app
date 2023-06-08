import { HTMLAttributeAnchorTarget, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Text } from '@/shared/ui/deprecated/Text'
import { Icon } from '@/shared/ui/deprecated/Icon'
import { Card } from '@/shared/ui/deprecated/Card'
import { Avatar } from '@/shared/ui/deprecated/Avatar'
import { Button } from '@/shared/ui/deprecated/Button'
import { AppLink } from '@/shared/ui/deprecated/AppLink'
import { AppImage } from '@/shared/ui/deprecated/AppImage'
import { Skeleton } from '@/shared/ui/deprecated/Skeleton'

import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { Article, ArticleTextBlock, ArticleViewType } from '../../model/types/article'

import { classNames } from '@/shared/lib/classNames/classNames'
import { getRouteArticleDetails } from '@/shared/constants/router'

import EyeIcon from '@/shared/assets/icons/eye-20-20.svg'

import styles from './ArticleListItem.module.scss'

export interface IArticleListItemProps {
  className?: string
  article: Article
  view: ArticleViewType
  target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = memo((props: IArticleListItemProps) => {
  const { className, article, view, target } = props
  const { t } = useTranslation('article')

  const types = <Text className={styles.types} text={article.type.join(', ')} />
  const views = (
    <>
      <Text className={styles.views} text={String(article.views)} />
      <Icon Svg={EyeIcon} />
    </>
  )

  if (view === 'big') {
    const textBlock = article.blocks.find(block => block.type === 'TEXT') as ArticleTextBlock

    return (
      <div
        className={classNames(styles.articleListItem, {}, [className, styles[view]])}
        data-testid='ArticleListItem'
      >
        <Card className={styles.card}>
          <div className={styles.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text className={styles.username} text={article.user.username} />
            <Text className={styles.date} text={article.createdAt} />
          </div>
          <Text className={styles.title} title={article.title} />
          {types}
          <AppImage
            className={styles.img}
            src={article.img}
            alt={article.title}
            fallback={<Skeleton width='100%' height={250} />}
          />
          {textBlock &&
            <ArticleTextBlockComponent className={styles.textBlock} block={textBlock} />
          }
          <div className={styles.footer}>
            <AppLink to={getRouteArticleDetails(article.id)} target={target}>
              <Button theme='outline'>{t('next')}</Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    )
  }

  return (
    <AppLink
      className={classNames(styles.articleListItem, {}, [className, styles[view]])}
      to={getRouteArticleDetails(article.id)}
      target={target}
      data-testid='ArticleListItem'
    >
      <Card className={styles.card}>
        <div className={styles.imageWrapper}>
          <AppImage
            className={styles.img}
            src={article.img}
            alt={article.title}
            fallback={<Skeleton width={200} height={200} />}
          />
          <Text className={styles.date} text={article.createdAt} />
        </div>
        <div className={styles.infoWrapper}>
          {types}
          {views}
        </div>
        <Text className={styles.title} text={article.title} />
      </Card>
    </AppLink>
  )
})
