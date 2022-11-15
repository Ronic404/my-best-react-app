import { FC, memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'

import { AddCommentForm } from 'features/addCommentForm'

import { CommentList } from '../../../../entities/Comments'
import { ArticleDetails, ArticleList } from '../../../../entities/Article'

import { Text } from 'shared/ui/Text'
import { Page } from 'widgets/Page'
import { Button } from 'shared/ui/Button'
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
import { RoutePaths } from 'shared/config/routeConfig/routeConfig'

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
  const navigate = useNavigate()
  const comments = useSelector(getArticleComments.selectAll)
  const recommendations = useSelector(getArticleRecommendations.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
  const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading)

  useInitialEffect(() => {
    dispath(fetchCommentsByArticleId(id))
    dispath(fetchArticleRecommendations())
  })

  const onBackToList = useCallback(() => {
    navigate(RoutePaths.ARTICLES)
  }, [navigate])

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
        <Button theme='outline' onClick={onBackToList}>{t('back')}</Button>
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
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailPage)
