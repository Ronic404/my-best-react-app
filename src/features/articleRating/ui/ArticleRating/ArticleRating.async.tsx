import { FC, lazy, Suspense } from 'react'

import { Skeleton } from '@/shared/ui/deprecated/Skeleton'
import { IArticleRatingProps } from './ArticleRating'

const ArticleRatingLazy = lazy(async () => await import('./ArticleRating'))

export const ArticleRating: FC<IArticleRatingProps> = (props) => {
  return (
    <Suspense fallback={<Skeleton width='100%' height={140} />}>
      <ArticleRatingLazy {...props} />
    </Suspense>
  )
}
