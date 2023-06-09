import { memo, Suspense, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { Text } from '@/shared/ui/deprecated/Text'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Loader } from '@/shared/ui/deprecated/Loader'
import { CommentList } from '../../../../entities/Comments'
import { AddCommentForm } from '@/features/addCommentForm'

import { getArticleComments } from '../../model/slices/ArticleDetailsCommentsSlice'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'

import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'

export interface IArticleDetailsCommentsProps {
  className?: string
  id?: string
}

export const ArticleDetailsComments = memo(({ className, id }: IArticleDetailsCommentsProps) => {
  const { t } = useTranslation('article')
  const dispath = useAppDispatch()
  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)

  useInitialEffect(() => {
    dispath(fetchCommentsByArticleId(id))
  })

  const onSendComment = useCallback((text: string) => {
    dispath(addCommentForArticle(text))
  }, [dispath])

  return (
    <VStack className={classNames('', {}, [className])} gap='16' max>
      <Text
        title={t('comments')}
        size='L'
      />

      <Suspense fallback={<Loader />}>
        <AddCommentForm onSendComment={onSendComment} />
      </Suspense>

      <CommentList
        comments={comments}
        isLoading={commentsIsLoading}
      />
    </VStack>
  )
})
