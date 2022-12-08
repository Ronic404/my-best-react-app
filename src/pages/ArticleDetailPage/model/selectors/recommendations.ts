import { StateSchema } from '@/app/providers/StoreProvider'

export const getArticleRecommendationsError = (state: StateSchema): string | undefined => state.articleDetailsPage?.recommendations.error
export const getArticleRecommendationsIsLoading = (state: StateSchema): boolean | undefined => state.articleDetailsPage?.recommendations.isLoading
