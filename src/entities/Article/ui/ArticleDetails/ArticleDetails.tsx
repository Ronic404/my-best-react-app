/* eslint-disable indent */
import { memo, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'

import { Icon } from '@/shared/ui/deprecated/Icon'
import { Text } from '@/shared/ui/deprecated/Text'
import { Avatar } from '@/shared/ui/deprecated/Avatar'
import { Skeleton } from '@/shared/ui/deprecated/Skeleton'
import { HStack, VStack } from '@/shared/ui/deprecated/Stack'

import { classNames } from '@/shared/lib/classNames/classNames'
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader'
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'

import { ArticleBlock } from '../../model/types/article'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { fetchArticleById } from '../..//model/services/fetchArticleById/fetchArticleById'
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from '../../model/selectors/articleDetails'

import EyeIcon from '@/shared/assets/icons/eye-20-20.svg'
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg'

import styles from './ArticleDetails.module.scss'

export interface IArticleDetailsProps {
  className?: string
  id?: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
}

export const ArticleDetails = memo(({ className, id }: IArticleDetailsProps) => {
  const { t } = useTranslation('article')
  const dispatch = useAppDispatch()

  const isLoading = useSelector(getArticleDetailsIsLoading)
  const article = useSelector(getArticleDetailsData)
  const error = useSelector(getArticleDetailsError)

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id))
    }
  }, [dispatch, id])

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case 'CODE':
        return <ArticleCodeBlockComponent className={styles.block} block={block} key={block.id} />
      case 'IMAGE':
        return <ArticleImageBlockComponent className={styles.block} block={block} key={block.id} />
      case 'TEXT':
        return <ArticleTextBlockComponent className={styles.block} block={block} key={block.id} />
      default:
        return null
    }
  }, [])

  let content

  if (isLoading) {
    content = (
      <>
        <Skeleton className={styles.avatar} width={200} height={200} border="50%" />
        <Skeleton className={styles.title} width={300} height={32} />
        <Skeleton className={styles.skeleton} width={600} height={24} />
        <Skeleton className={styles.skeleton} width="100%" height={200} />
        <Skeleton className={styles.skeleton} width="100%" height={200} />
      </>
    )
  } else if (error) {
    content = (
      <Text title={t('loadingError')} align='center' />
    )
  } else {
    content = (
      <>
        <HStack className={styles.avatarWrapper} justify='center' max>
          <Avatar className={styles.avatar} size={200} src={article?.img} />
        </HStack>
        <VStack gap='4' max data-testid='ArticleDetails.Info'>
          <Text
            className={styles.title}
            title={article?.title}
            text={article?.subtitle}
            size='L'
          />
          <HStack className={styles.articleInfo} gap='8'>
            <Icon className={styles.icon} Svg={EyeIcon} />
            <Text text={String(article?.views)} />
          </HStack>
          <HStack className={styles.articleInfo} gap='8'>
            <Icon className={styles.icon} Svg={CalendarIcon} />
            <Text text={article?.createdAt} />
          </HStack>
        </VStack>
        {article?.blocks.map(renderBlock)}
      </>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <VStack className={classNames(styles.articleDetails, {}, [className])} gap='16' max>
        {content}
      </VStack>
    </DynamicModuleLoader>
  )
})
