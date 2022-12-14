import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { HStack } from '@/shared/ui/Stack'
import { Button } from '@/shared/ui/Button'

import { getCanEditArticle } from '../../model/selectors/article'
import { getArticleDetailsData } from '../../../../entities/Article'

import { RoutePaths } from '@/shared/constants/router'
import { classNames } from '@/shared/lib/classNames/classNames'

export interface IArticleDetailsPageHeaderProps {
  className?: string
}

export const ArticleDetailsPageHeader = memo(({ className }: IArticleDetailsPageHeaderProps) => {
  const { t } = useTranslation('article')
  const navigate = useNavigate()

  const article = useSelector(getArticleDetailsData)
  const canEdit = useSelector(getCanEditArticle)

  const onBackToList = useCallback(() => {
    navigate(RoutePaths.ARTICLES)
  }, [navigate])

  const onEditArticle = useCallback(() => {
    if (article?.id) {
      navigate(`${RoutePaths.ARTICLE_DETAILS}${article.id}/edit`)
    }
  }, [article, navigate])

  return (
    <HStack className={classNames('', {}, [className])} justify='between' max>
      <Button theme='outline' onClick={onBackToList}>{t('back')}</Button>
      {canEdit &&
        <Button theme='outline' onClick={onEditArticle}>{t('edit')}</Button>
      }
    </HStack>
  )
})
