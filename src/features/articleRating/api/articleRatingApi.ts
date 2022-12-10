import { Rating } from '@/entities/Rating'
import { rtkApi } from '@/shared/api/rtkApi'

interface IGetArticleRatingArgs {
  userId: string
  articleId: string
}

interface IRateArticleArgs {
  userId: string
  articleId: string
  rate: number
  feedback?: string
}

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<Rating[], IGetArticleRatingArgs>({
      query: ({ articleId, userId }) => ({
        url: '/article-ratings',
        params: {
          userId,
          articleId,
        },
      }),
    }),
    rateArticle: build.mutation<void, IRateArticleArgs>({
      query: (args) => ({
        url: '/article-ratings',
        method: 'POST',
        body: args,
      }),
    }),
  }),
})

export const useGetArticleRating = articleRatingApi.useGetArticleRatingQuery
export const useRateArticle = articleRatingApi.useRateArticleMutation
