import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Text } from '@/shared/ui/redesigned/Text'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { ArticleList } from '../../../../entities/Article'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'

import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi'

import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'

export interface IArticleRecommendationsListProps {
  className?: string
}

export const ArticleRecommendationsList = memo(({ className }: IArticleRecommendationsListProps) => {
  const { t } = useTranslation('article')
  const { data: articles, isLoading, error } = useArticleRecommendationsList(3)

  if ((isLoading || error) ?? !articles) return null

  return (
    <VStack
      className={classNames('', {}, [className])}
      gap='8'
      data-testid='ArticleRecommendationsList'
    >
      <ToggleFeatures
        feature='isAppRedesigned'
        on={
          <>
            <Text title={t('recommendations')} size='L'/>
            <ArticleList articles={articles} target='_blank' />
          </>
        }
        off={
          <>
            <TextDeprecated title={t('recommendations')} size='L'/>
            <ArticleList articles={articles} target='_blank' />
          </>
        }
      />
    </VStack>
  )
})
