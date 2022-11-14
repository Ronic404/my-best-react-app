import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from 'app/providers/StoreProvider'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import { articlesPageActions } from '../../slices/articlesPageSlice'
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors'

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'acticlesPage/initArticlesPage',
  async (_, thunkAPI) => {
    const { dispatch, getState } = thunkAPI
    const inited = getArticlesPageInited(getState())

    if (!inited) {
      dispatch(articlesPageActions.initState())
      dispatch(fetchArticlesList({
        page: 1,
      }))
    }
  },
)
