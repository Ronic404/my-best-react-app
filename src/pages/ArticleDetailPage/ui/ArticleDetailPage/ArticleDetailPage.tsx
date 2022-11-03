import { FC, memo } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { CommentList } from '../../../../entities/Comments'
import { ArticleDetails } from '../../../../entities/Article'

import { Text } from 'shared/ui/Text'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader'

import { fetchCommentsByArticleId } from '../..//model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { ArticleDetailsCommentsSliceReducer, getArticleComments } from '../../model/slices/ArticleDetailsCommentsSlice'

import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'

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
  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)

  useInitialEffect(() => {
    dispath(fetchCommentsByArticleId(id))
  })

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
        <ArticleDetails id={id} />
        <Text className={styles.commentTitle} title={t('comments')} />
        <CommentList comments={comments} isLoading={commentsIsLoading} />
      </div>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailPage)
