import { FC, memo, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Page } from '@/widgets/Page'
import FiltersContainer from '../FiltersContainer/FiltersContainer'
import ViewSelectorContainer from '../ViewSelectorContainer/ViewSelectorContainer'
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout'

import { ToggleFeatures } from '@/shared/lib/features'
import { ArticlePageGreeting } from '@/features/articlePageGreeting'
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters'
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList'

import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
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

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams))
  })

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage())
  }, [dispatch])

  const content = <ToggleFeatures
    feature='isAppRedesigned'
    on={
      <StickyContentLayout content={
        <Page
          className={classNames(styles.articlesPageRedesigned, {}, [className])}
          onScrollEnd={onLoadNextPart}
          data-testid='ArticlesPage'
        >
          <ArticleInfiniteList className={styles.list} />
          <ArticlePageGreeting />
        </Page>
      }
      left={<ViewSelectorContainer />}
      right={<FiltersContainer />}
      />
    }
    off={
      <Page
        className={classNames(styles.articlesPage, {}, [className])}
        onScrollEnd={onLoadNextPart}
        data-testid='ArticlesPage'
      >
        <ArticlesPageFilters />
        <ArticleInfiniteList className={styles.list} />
        <ArticlePageGreeting />
      </Page>
    }
  />

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      {content}
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
