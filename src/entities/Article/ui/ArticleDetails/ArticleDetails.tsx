import { FC, memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { Icon } from '@/shared/ui/deprecated/Icon'
import { Text } from '@/shared/ui/redesigned/Text'
import { Avatar } from '@/shared/ui/deprecated/Avatar'
import { AppImage } from '@/shared/ui/redesigned/AppImage'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton'

import { renderArticleBlock } from './renderBlock'

import { classNames } from '@/shared/lib/classNames/classNames'
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader'

import { fetchArticleById } from '../..//model/services/fetchArticleById/fetchArticleById'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
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

const Deprecated: FC = () => {
  const article = useSelector(getArticleDetailsData)

  return (
    <>
      <HStack className={styles.avatarWrapper} justify='center' max>
        <Avatar className={styles.avatar} size={200} src={article?.img} />
      </HStack>
      <VStack gap='4' max data-testid='ArticleDetails.Info'>
        <TextDeprecated
          className={styles.title}
          title={article?.title}
          text={article?.subtitle}
          size='L'
        />
        <HStack className={styles.articleInfo} gap='8'>
          <Icon className={styles.icon} Svg={EyeIcon} />
          <TextDeprecated text={String(article?.views)} />
        </HStack>
        <HStack className={styles.articleInfo} gap='8'>
          <Icon className={styles.icon} Svg={CalendarIcon} />
          <TextDeprecated text={article?.createdAt} />
        </HStack>
      </VStack>
      {article?.blocks.map(renderArticleBlock)}
    </>
  )
}

const Redesigned: FC = () => {
  const article = useSelector(getArticleDetailsData)

  return (
    <>
      <Text title={article?.title} size='L' bold />
      <Text title={article?.subtitle} />
      <AppImage
        className={styles.img}
        src={article?.img}
        fallback={<SkeletonRedesigned width='100%' height={420} border='16px' />}
      />
      {article?.blocks.map(renderArticleBlock)}
    </>
  )
}

export const ArticleDetailsSkeleton: FC = () => {
  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  })

  return (
    <VStack gap='16' max>
      <Skeleton className={styles.avatar} width={200} height={200} border="50%" />
      <Skeleton className={styles.title} width={300} height={32} />
      <Skeleton className={styles.skeleton} width={600} height={24} />
      <Skeleton className={styles.skeleton} width="100%" height={200} />
      <Skeleton className={styles.skeleton} width="100%" height={200} />
    </VStack>
  )
}

export const ArticleDetails = memo(({ className, id }: IArticleDetailsProps) => {
  const { t } = useTranslation('article')
  const dispatch = useAppDispatch()

  const error = useSelector(getArticleDetailsError)
  const isLoading = useSelector(getArticleDetailsIsLoading)

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id))
    }
  }, [dispatch, id])

  let content

  if (isLoading) {
    content = <ArticleDetailsSkeleton />
  } else if (error) {
    content = <TextDeprecated title={t('loadingError')} align='center' />
  } else {
    content = (
      <ToggleFeatures
        feature='isAppRedesigned'
        on={<Redesigned />}
        off={<Deprecated />}
      />
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
