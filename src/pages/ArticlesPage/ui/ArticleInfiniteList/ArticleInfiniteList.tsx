import { memo } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { Text } from 'shared/ui/Text'
import { ArticleList } from '../../../../entities/Article'

import { getArticles } from '../../model/slices/articlesPageSlice'
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/articlesPageSelectors'

export interface IArticleInfiniteListProps {
  className?: string
}

export const ArticleInfiniteList = memo(({ className }: IArticleInfiniteListProps) => {
  const { t } = useTranslation('article')

  const articles = useSelector(getArticles.selectAll)
  const view = useSelector(getArticlesPageView)
  const error = useSelector(getArticlesPageError)
  const isLoading = useSelector(getArticlesPageIsLoading)

  if (error) {
    return <Text title={t('loadingError')} />
  }

  return (
    <ArticleList
      className={className}
      view={view}
      isLoading={isLoading}
      articles={articles}
    />
  )
})
