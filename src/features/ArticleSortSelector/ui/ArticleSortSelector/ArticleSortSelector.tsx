import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { Select, SelectOption } from '@/shared/ui/deprecated/Select'

import { SortOrder } from '@/shared/types/sort'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ArticleSortField } from '@/entities/Article'

import styles from './ArticleSortSelector.module.scss'

export interface IArticleSortSelectorProps {
  className?: string
  sort: ArticleSortField
  order: SortOrder
  onChangeOrder: (newOrder: SortOrder) => void
  onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector = memo((props: IArticleSortSelectorProps) => {
  const { className, sort, order, onChangeOrder, onChangeSort } = props
  const { t } = useTranslation('article')

  const orderOptions = useMemo<Array<SelectOption<SortOrder>>>(() => [
    { value: 'asc', content: t('asc') },
    { value: 'desc', content: t('desc') },
  ], [t])

  const sortFieldOptions = useMemo<Array<SelectOption<ArticleSortField>>>(() => [
    { value: 'created', content: t('byCreated') },
    { value: 'title', content: t('byTitle') },
    { value: 'views', content: t('byViews') },
  ], [t])

  return (
    <div className={classNames(styles.articleSortSelector, {}, [className])}>
      <Select
        label={t('sortBy')}
        options={sortFieldOptions}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        className={styles.order}
        label={t('by')}
        options={orderOptions}
        value={order}
        onChange={onChangeOrder}
      />
    </div>
  )
})
