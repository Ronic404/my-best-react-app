import { StateSchema } from 'app/providers/StoreProvider'
import { ArticleViewType } from 'entities/Article'

export const getArticlesPageNum = (state: StateSchema): number => state.articlesPage?.page ?? 1
export const getArticlesPageView = (state: StateSchema): ArticleViewType => state.articlesPage?.view ?? 'small'
export const getArticlesPageError = (state: StateSchema): string | undefined => state.articlesPage?.error
export const getArticlesPageLimit = (state: StateSchema): number => state.articlesPage?.limit ?? 9
export const getArticlesPageInited = (state: StateSchema): boolean => state.articlesPage?._inited ?? false
export const getArticlesPageHasMore = (state: StateSchema): boolean => state.articlesPage?.hasMore ?? false
export const getArticlesPageIsLoading = (state: StateSchema): boolean => state.articlesPage?.isLoading ?? false
