import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { HStack } from '@/shared/ui/Stack'
import { Button } from '@/shared/ui/Button'

import { getCanEditArticle } from '../../model/selectors/article'
import { getArticleDetailsData } from '../../../../entities/Article'

import { classNames } from '@/shared/lib/classNames/classNames'
import { getRouteArticleEdit, getRouteArticles } from '@/shared/constants/router'

export interface IArticleDetailsPageHeaderProps {
  className?: string
}

export const ArticleDetailsPageHeader = memo(({ className }: IArticleDetailsPageHeaderProps) => {
  const { t } = useTranslation('article')
  const navigate = useNavigate()

  const article = useSelector(getArticleDetailsData)
  const canEdit = useSelector(getCanEditArticle)

  const onBackToList = useCallback(() => {
    navigate(getRouteArticles())
  }, [navigate])

  const onEditArticle = useCallback(() => {
    if (article) {
      navigate(getRouteArticleEdit(article.id))
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
