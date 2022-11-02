import { StateSchema } from 'app/providers/StoreProvider'
import { Article } from '../types/article'

export const getArticleDetailsData = (state: StateSchema): Article | undefined => state?.articleDetails?.data
export const getArticleDetailsIsLoading = (state: StateSchema): boolean | undefined => state?.articleDetails?.isLoading ?? false
export const getArticleDetailsError = (state: StateSchema): string | undefined => state?.articleDetails?.error
