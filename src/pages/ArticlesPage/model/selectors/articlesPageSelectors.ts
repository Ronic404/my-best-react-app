import { StateSchema } from 'app/providers/StoreProvider'
import { ArticleViewType } from 'entities/Article'

export const getArticlesPageView = (state: StateSchema): ArticleViewType => state.articlesPage?.view ?? 'small'
export const getArticlesPageError = (state: StateSchema): string | undefined => state.articlesPage?.error
export const getArticlesPageIsLoading = (state: StateSchema): boolean => state.articlesPage?.isLoading ?? false
