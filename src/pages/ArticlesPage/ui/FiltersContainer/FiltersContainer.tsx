import { FC, memo } from 'react'

import { ArticlesFilters } from '@/widgets/ArticlesFilters'

import { useArticleFilters } from '../../lib/hooks/useArticleFilters'

export interface IFiltersContainerProps {
  className?: string
}

const FiltersContainer: FC<IFiltersContainerProps> = ({ className }) => {
  const {
    sort,
    type,
    order,
    search,
    onChangeSort,
    onChangeOrder,
    onChangeSearch,
    onChangeType,
  } = useArticleFilters()

  return (
    <ArticlesFilters
      className={className}
      sort={sort}
      type={type}
      order={order}
      search={search}
      onChangeSort={onChangeSort}
      onChangeOrder={onChangeOrder}
      onChangeSearch={onChangeSearch}
      onChangeType={onChangeType}
    />
  )
}

export default memo(FiltersContainer)
