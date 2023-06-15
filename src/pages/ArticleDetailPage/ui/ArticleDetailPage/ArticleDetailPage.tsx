import { FC, memo } from 'react'
import { useParams } from 'react-router-dom'

import { ArticleRating } from '@/features/articleRating'
import { ArticleDetails } from '@/entities/Article'
import { DetailsContainer } from '../DetailsContainer/DetailsContainer'
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments'
import { AdditionalInfoContainer } from '../AdditionalInfoContainer/AdditionalInfoContainer'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList'

import { Page } from '@/widgets/Page'
import { Card } from '@/shared/ui/deprecated/Card'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { ToggleFeatures } from '@/shared/lib/features'
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader'

import { articleDetailsPageReducer } from '../../model/slices'

import { classNames } from '@/shared/lib/classNames/classNames'

import styles from './ArticleDetailPage.module.scss'
import { useTranslation } from 'react-i18next'

export interface IArticleDetailPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
}

const ArticleDetailPage: FC<IArticleDetailPageProps> = ({ className }) => {
  const { t } = useTranslation('article')
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return null
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <ToggleFeatures
        feature='isAppRedesigned'
        on={
          <StickyContentLayout
            content={
              <Page className={classNames(styles.articleDetailPage, {}, [className])}>
                <VStack gap='16' max>
                  <DetailsContainer />
                  <ArticleRating articleId={id} />
                  <ArticleRecommendationsList />
                  <ArticleDetailsComments id={id} />
                </VStack>
              </Page>
            }
            right={<AdditionalInfoContainer />}
          />
        }
        off={
          <Page className={classNames(styles.articleDetailPage, {}, [className])}>
            <VStack gap='16' max>
              <ArticleDetailsPageHeader />
              <ArticleDetails id={id} />
              <ToggleFeatures
                feature='isArticleRatingEnabled'
                on={<ArticleRating articleId={id} />}
                off={<Card>{t('willSoon')}</Card>}
              />
              <ArticleRecommendationsList />
              <ArticleDetailsComments id={id} />
            </VStack>
          </Page>
        }
      />
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailPage)
