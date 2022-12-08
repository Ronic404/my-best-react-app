import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import { articlesPageActions } from '../../slices/articlesPageSlice'
import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNum,
} from '../../selectors/articlesPageSelectors'

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'acticlesPage/fetchNextArticlesPage',
  async (_, thunkAPI) => {
    const { dispatch, getState } = thunkAPI

    const page = getArticlesPageNum(getState())
    const hasMore = getArticlesPageHasMore(getState())
    const isLoading = getArticlesPageIsLoading(getState())

    if (hasMore && !isLoading) {
      dispatch(articlesPageActions.setPage(page + 1))
      dispatch(fetchArticlesList({}))
    }
  },
)
