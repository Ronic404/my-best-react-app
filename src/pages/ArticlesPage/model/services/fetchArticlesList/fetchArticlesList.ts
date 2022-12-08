import { createAsyncThunk } from '@reduxjs/toolkit'

import { Article } from '@/entities/Article'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams'
import {
  getArticlesPageLimit,
  getArticlesPageNum,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
} from '../../selectors/articlesPageSelectors'

interface fetchArticlesListProps {
  replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<Article[], fetchArticlesListProps, ThunkConfig<string>>(
  'acticlesPage/fetchArticlesList',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI

    const page = getArticlesPageNum(getState())
    const sort = getArticlesPageSort(getState())
    const type = getArticlesPageType(getState())
    const order = getArticlesPageOrder(getState())
    const limit = getArticlesPageLimit(getState())
    const search = getArticlesPageSearch(getState())

    try {
      addQueryParams({ sort, order, search, type })

      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
          _sort: sort,
          _order: order,
          q: search,
          type: type === 'ALL' ? undefined : type,
        },
      })

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (error) {
      return rejectWithValue('error')
    }
  },
)
