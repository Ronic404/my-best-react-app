import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Text } from 'shared/ui/Text'
import { VStack } from 'shared/ui/Stack'
import { ArticleList } from '../../../../entities/Article'

import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi'

import { classNames } from 'shared/lib/classNames/classNames'

export interface IArticleRecommendationsListProps {
  className?: string
}

export const ArticleRecommendationsList = memo(({ className }: IArticleRecommendationsListProps) => {
  const { t } = useTranslation('article')
  const { data: articles, isLoading, error } = useArticleRecommendationsList(3)

  if ((isLoading || error) ?? !articles) return null

  return (
    <VStack className={classNames('', {}, [className])} gap='8'>
      <Text
        title={t('recommendations')}
        size='L'
      />
      <ArticleList
        articles={articles}
        target='_blank'
        virtualized={false}
      />
    </VStack>
  )
})
