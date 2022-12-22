import { StateSchema } from '@/app/providers/StoreProvider'
import { SortOrder } from '@/shared/types/sort'
import { ArticleSortField, ArticleType, ArticleViewType } from '@/entities/Article'

export const getArticlesPageNum = (state: StateSchema): number => state.articlesPage?.page ?? 1
export const getArticlesPageType = (state: StateSchema): ArticleType => state.articlesPage?.type ?? 'ALL'
export const getArticlesPageView = (state: StateSchema): ArticleViewType => state.articlesPage?.view ?? 'small'
export const getArticlesPageSort = (state: StateSchema): ArticleSortField => state.articlesPage?.sort ?? 'created'
export const getArticlesPageLimit = (state: StateSchema): number => state.articlesPage?.limit ?? 9
export const getArticlesPageOrder = (state: StateSchema): SortOrder => state.articlesPage?.order ?? 'asc'
export const getArticlesPageError = (state: StateSchema): string | undefined => state.articlesPage?.error
export const getArticlesPageSearch = (state: StateSchema): string => state.articlesPage?.search ?? ''
export const getArticlesPageInited = (state: StateSchema): boolean => state.articlesPage?._inited ?? false
export const getArticlesPageHasMore = (state: StateSchema): boolean => state.articlesPage?.hasMore ?? false
export const getArticlesPageIsLoading = (state: StateSchema): boolean => state.articlesPage?.isLoading ?? false
