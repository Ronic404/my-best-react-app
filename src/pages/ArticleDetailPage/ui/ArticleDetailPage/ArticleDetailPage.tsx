import { FC, memo, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { AddCommentForm } from 'features/addCommentForm'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'

import { CommentList } from '../../../../entities/Comments'
import { ArticleDetails, ArticleList } from '../../../../entities/Article'

import { Page } from 'widgets/Page'
import { Text } from 'shared/ui/Text'
import { VStack } from 'shared/ui/Stack'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader'

import { getArticleComments } from '../../model/slices/ArticleDetailsCommentsSlice'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { fetchCommentsByArticleId } from '../..//model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { articleDetailsPageReducer } from '../../model/slices'
import { getArticleRecommendations } from '../../model/slices/ArticleDetailsPageRecommendadionsSlice'
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations'

import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'

import styles from './ArticleDetailPage.module.scss'

export interface IArticleDetailPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
}

const ArticleDetailPage: FC<IArticleDetailPageProps> = ({ className }) => {
  const dispath = useAppDispatch()
  const { t } = useTranslation('article')
  const { id } = useParams<{ id: string }>()

  const comments = useSelector(getArticleComments.selectAll)
  const recommendations = useSelector(getArticleRecommendations.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
  const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading)

  useInitialEffect(() => {
    dispath(fetchCommentsByArticleId(id))
    dispath(fetchArticleRecommendations())
  })

  const onSendComment = useCallback((text: string) => {
    dispath(addCommentForArticle(text))
  }, [dispath])

  if (!id) {
    return (
      <Page className={classNames(styles.articleDetailPage, {}, [className])}>
        {t('articleNotFound')}
      </Page>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(styles.articleDetailPage, {}, [className])}>
        <VStack gap='16' max>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <Text
            className={styles.recommendationTitle}
            title={t('recommendations')}
            size='L'
          />
          <ArticleList
            className={styles.recommendations}
            articles={recommendations}
            isLoading={recommendationsIsLoading}
            target='_blank'
          />
          <Text
            className={styles.commentTitle}
            title={t('comments')}
            size='L'
          />
          <AddCommentForm onSendComment={onSendComment} />
          <CommentList
            comments={comments}
            isLoading={commentsIsLoading}
          />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailPage)
