import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { Text } from 'shared/ui/Text'
import { Icon } from 'shared/ui/Icon'
import { Card } from 'shared/ui/Card'
import { Avatar } from 'shared/ui/Avatar'
import { Button } from 'shared/ui/Button'

import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { Article, ArticleTextBlock, ArticleViewType } from '../../model/types/article'

import { classNames } from 'shared/lib/classNames/classNames'
import { RoutePaths } from 'shared/config/routeConfig/routeConfig'

import EyeIcon from 'shared/assets/icons/eye-20-20.svg'

import styles from './ArticleListItem.module.scss'

export interface IArticleListItemProps {
  className?: string
  article: Article
  view: ArticleViewType
}

export const ArticleListItem = memo((props: IArticleListItemProps) => {
  const { className, article, view } = props
  const { t } = useTranslation('article')
  const navigate = useNavigate()

  const onOpenArticle = useCallback(() => {
    navigate(RoutePaths.ARTICLE_DETAILS + article.id)
  }, [article.id, navigate])

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
      <div className={classNames(styles.articleListItem, {}, [className, styles[view]])}>
        <Card className={styles.card}>
          <div className={styles.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text className={styles.username} text={article.user.username} />
            <Text className={styles.date} text={article.createdAt} />
          </div>
          <Text className={styles.title} title={article.title} />
          {types}
          <img className={styles.img} src={article.img} alt={article.title} />
          {textBlock &&
            <ArticleTextBlockComponent className={styles.textBlock} block={textBlock} />
          }
          <div className={styles.footer}>
            <Button theme='outline' onClick={onOpenArticle}>{t('next')}</Button>
            {views}
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className={classNames(styles.articleListItem, {}, [className, styles[view]])}>
      <Card className={styles.card} onClick={onOpenArticle}>
        <div className={styles.imageWrapper}>
          <img className={styles.img} src={article.img} alt={article.title} />
          <Text className={styles.date} text={article.createdAt} />
        </div>
        <div className={styles.infoWrapper}>
          {types}
          {views}
        </div>
        <Text className={styles.title} text={article.title} />
      </Card>
    </div>
  )
})
