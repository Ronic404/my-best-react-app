import { FC, memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { AddCommentForm } from 'features/addCommentForm'

import { CommentList } from '../../../../entities/Comments'
import { ArticleDetails } from '../../../../entities/Article'

import { Text } from 'shared/ui/Text'
import { Button } from 'shared/ui/Button'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader'

import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { fetchCommentsByArticleId } from '../..//model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { ArticleDetailsCommentsSliceReducer, getArticleComments } from '../../model/slices/ArticleDetailsCommentsSlice'

import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { RoutePaths } from 'shared/config/routeConfig/routeConfig'

import styles from './ArticleDetailPage.module.scss'

export interface IArticleDetailPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsComments: ArticleDetailsCommentsSliceReducer,
}

const ArticleDetailPage: FC<IArticleDetailPageProps> = ({ className }) => {
  const dispath = useAppDispatch()
  const { t } = useTranslation('article')
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)

  useInitialEffect(() => {
    dispath(fetchCommentsByArticleId(id))
  })

  const onBackToList = useCallback(() => {
    navigate(RoutePaths.ARTICLES)
  }, [navigate])

  const onSendComment = useCallback((text: string) => {
    dispath(addCommentForArticle(text))
  }, [dispath])

  if (!id) {
    return (
      <div className={classNames(styles.articleDetailPage, {}, [className])}>
        {t('articleNotFound')}
      </div>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(styles.articleDetailPage, {}, [className])}>
        <Button theme='outline' onClick={onBackToList}>{t('back')}</Button>
        <ArticleDetails id={id} />
        <Text className={styles.commentTitle} title={t('comments')} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList comments={comments} isLoading={commentsIsLoading} />
      </div>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailPage)
