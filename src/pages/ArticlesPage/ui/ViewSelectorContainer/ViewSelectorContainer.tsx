import { FC, memo } from 'react'

import { useArticleFilters } from '../../lib/hooks/useArticleFilters'
import { ArticleViewSelector } from '@/features/ArticleViewSelector'

export interface IViewSelectorContainerProps {
  className?: string
}

const ViewSelectorContainer: FC<IViewSelectorContainerProps> = ({ className }) => {
  const { view, onChangeView } = useArticleFilters()

  return (
    <ArticleViewSelector className={className} view={view} onViewClick={onChangeView} />
  )
}

export default memo(ViewSelectorContainer)
