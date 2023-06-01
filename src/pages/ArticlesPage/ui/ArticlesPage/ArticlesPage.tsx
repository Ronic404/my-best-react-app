import { FC, memo, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Page } from '@/widgets/Page'

import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters'
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList'

import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { useArticleItemById } from '../../model/selectors/articlesPageSelectors'
import { articlesPageReducer } from '../../model/slices/articlesPageSlice'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'

import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader'

import styles from './ArticlesPage.module.scss'

export interface IArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
}

const ArticlesPage: FC<IArticlesPageProps> = ({ className }) => {
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()
  const articleItem = useArticleItemById('2')

  console.log(articleItem)

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams))
  })

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage())
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        className={classNames(styles.articlesPage, {}, [className])}
        onScrollEnd={onLoadNextPart}
        data-testid='ArticlesPage'
      >
        <ArticlesPageFilters />
        <ArticleInfiniteList className={styles.list} />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
