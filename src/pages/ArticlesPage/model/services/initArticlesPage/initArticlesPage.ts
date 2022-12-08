import { createAsyncThunk } from '@reduxjs/toolkit'

import { SortOrder } from '@/shared/types'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import { articlesPageActions } from '../../slices/articlesPageSlice'
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors'
import { ArticleSortField, ArticleType } from '@/entities/Article'

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'acticlesPage/initArticlesPage',
  async (searchParams, thunkAPI) => {
    const { dispatch, getState } = thunkAPI
    const inited = getArticlesPageInited(getState())

    if (!inited) {
      const typeFromUrl = searchParams.get('type') as ArticleType
      const sortFromUrl = searchParams.get('sort') as ArticleSortField
      const orderFromUrl = searchParams.get('order') as SortOrder
      const searchFromUrl = searchParams.get('search')

      if (typeFromUrl) {
        dispatch(articlesPageActions.setType(typeFromUrl))
      }

      if (sortFromUrl) {
        dispatch(articlesPageActions.setSort(sortFromUrl))
      }

      if (orderFromUrl) {
        dispatch(articlesPageActions.setOrder(orderFromUrl))
      }

      if (searchFromUrl) {
        dispatch(articlesPageActions.setSearch(searchFromUrl))
      }

      dispatch(articlesPageActions.initState())
      dispatch(fetchArticlesList({}))
    }
  },
)
