import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Card } from '@/shared/ui/redesigned/Card'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { Input } from '@/shared/ui/redesigned/Input'
import { VStack } from '@/shared/ui/redesigned/Stack'

import { ArticleTypeTabs } from '@/features/ArticleTypeTabs'
import { ArticleSortSelector } from '@/features/ArticleSortSelector'
import { ArticleSortField, ArticleType } from '@/entities/Article'

import { SortOrder } from '@/shared/types/sort'

import { classNames } from '@/shared/lib/classNames/classNames'

import styles from './ArticlesFilters.module.scss'

import SearchIcon from '@/shared/assets/icons/search.svg'

interface IArticlesFiltersProps {
  className?: string
  sort: ArticleSortField
  order: SortOrder
  type: ArticleType
  search: string
  onChangeSearch: (value: string) => void
  onChangeOrder: (newOrder: SortOrder) => void
  onChangeSort: (newOrder: ArticleSortField) => void
  onChangeType: (newOrder: ArticleType) => void
}

export const ArticlesFilters = memo((props: IArticlesFiltersProps) => {
  const { className, sort, order, type, search, onChangeSearch, onChangeOrder, onChangeSort, onChangeType } = props
  const { t } = useTranslation('article')

  return (
    <Card className={classNames(styles.articlesFilters, {}, [className])} padding='24'>
      <VStack gap='32'>
        <Input
          value={search}
          placeholder={t('search')}
          addonLeft={<Icon Svg={SearchIcon} />}
          onChange={onChangeSearch}
        />

        <ArticleTypeTabs
          className={styles.tabs}
          value={type}
          onChangeType={onChangeType}
        />

        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
      </VStack>
    </Card>
  )
})
