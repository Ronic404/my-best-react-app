import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Text } from '@/shared/ui/redesigned/Text'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { Card } from '@/shared/ui/redesigned/Card'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Button } from '@/shared/ui/redesigned/Button'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { AppImage } from '@/shared/ui/redesigned/AppImage'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'

import { ArticleTextBlock } from '../../../model/types/article'

import { IArticleListItemProps } from '../ArticleListItem'

import { classNames } from '@/shared/lib/classNames/classNames'
import { getRouteArticleDetails } from '@/shared/constants/router'

import EyeIcon from '@/shared/assets/icons/eye.svg'

import styles from './ArticleListItemRedesigned.module.scss'

export const ArticleListItemRedesigned = memo((props: IArticleListItemProps) => {
  const { className, article, view, target } = props
  const { t } = useTranslation('article')

  const userInfo = (
    <>
      <Avatar className={styles.avatar} src={article.user.avatar} size={32} />
      <Text text={article.user.username} bold />
    </>
  )

  const views = (
    <HStack gap='8'>
      <Icon Svg={EyeIcon} />
      <Text className={styles.views} text={String(article.views)} />
    </HStack>
  )

  if (view === 'big') {
    const textBlock = article.blocks.find(block => block.type === 'TEXT') as ArticleTextBlock

    return (
      <Card
        className={classNames(styles.articleListItemRedesigned, {}, [className, styles[view]])}
        data-testid='ArticleListItem'
        padding='24'
        max
      >
        <VStack gap='16' max>
          <HStack gap='8' max>
            <Avatar size={32} src={article.user.avatar} />
            <Text text={article.user.username} bold />
            <Text text={article.createdAt} />
          </HStack>

          <Text title={article.title} bold />
          <Text title={article.subtitle} bold size='S' />

          <AppImage
            className={styles.img}
            src={article.img}
            alt={article.title}
            fallback={<Skeleton width='100%' height={250} />}
          />

          {textBlock.paragraphs &&
              <Text className={styles.textBlock} text={textBlock.paragraphs.slice(0, 2).join(' ')} />
          }

          <HStack justify='between' max>
            <AppLink to={getRouteArticleDetails(article.id)} target={target}>
              <Button variant='outline'>{t('next')}</Button>
            </AppLink>
            {views}
          </HStack>
        </VStack>
      </Card>
    )
  }

  return (
    <AppLink
      className={classNames(styles.articleListItem, {}, [className, styles[view]])}
      to={getRouteArticleDetails(article.id)}
      target={target}
      data-testid='ArticleListItem'
    >
      <Card className={styles.card} border='partial' padding='0'>
        <AppImage
          className={styles.img}
          src={article.img}
          alt={article.title}
          fallback={<Skeleton width='100%' height={200} />}
        />
        <VStack className={styles.info} gap='4'>
          <Text className={styles.title} title={article.title} />
          <VStack className={styles.footer} gap='4' max>
            <HStack justify='between' max>
              <Text className={styles.date} text={article.createdAt} />
              {views}
            </HStack>
            <HStack gap='4'>{userInfo}</HStack>
          </VStack>
        </VStack>
      </Card>
    </AppLink>
  )
})
