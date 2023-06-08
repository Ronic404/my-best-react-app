import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { Skeleton } from '@/shared/ui/deprecated/Skeleton'
import { RatingCard } from '@/entities/Rating'

import { getUserAuthData } from '@/entities/User'
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi'

export interface IArticleRatingProps {
  className?: string
  articleId: string
}

const ArticleRating = memo(({ className, articleId }: IArticleRatingProps) => {
  const { t } = useTranslation('article')
  const userData = useSelector(getUserAuthData)
  const { data, isLoading } = useGetArticleRating({ articleId, userId: userData.id ?? '' })
  const [rateArticleMutation] = useRateArticle()

  const rating = data?.[0]

  const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
    try {
      rateArticleMutation({
        userId: userData.id ?? '',
        articleId,
        rate: starsCount,
        feedback,
      })
    } catch (error) {
      console.log(error)
    }
  }, [articleId, rateArticleMutation, userData.id])

  const onCancel = useCallback((starsCount: number) => {
    handleRateArticle(starsCount)
  }, [handleRateArticle])

  const onAccept = useCallback((starsCount: number, feedback?: string) => {
    handleRateArticle(starsCount, feedback)
  }, [handleRateArticle])

  if (isLoading) {
    return <Skeleton width='100%' height={120} />
  }

  return (
    <RatingCard
      className={className}
      title={t('rateArticle')}
      feedbackTitle={t('reviewArticle')}
      hasFeedback
      rate={rating?.rate}
      onAccept={onAccept}
      onCancel={onCancel}
    />
  )
})

export default ArticleRating
