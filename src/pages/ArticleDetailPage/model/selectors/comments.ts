import { StateSchema } from 'app/providers/StoreProvider'

export const getArticleCommentsError = (state: StateSchema): string | undefined => state.articleDetailsComments?.error
export const getArticleCommentsIsLoading = (state: StateSchema): boolean | undefined => state.articleDetailsComments?.isLoading
