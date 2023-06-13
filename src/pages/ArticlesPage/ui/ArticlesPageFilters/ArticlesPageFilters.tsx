import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Card } from '@/shared/ui/deprecated/Card'
import { Input } from '@/shared/ui/deprecated/Input'
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs'
import { ArticleSortSelector } from '@/features/ArticleSortSelector'
import { ArticleViewSelector } from '@/features/ArticleViewSelector'

import { classNames } from '@/shared/lib/classNames/classNames'
import { useArticleFilters } from '../../lib/hooks/useArticleFilters'

import styles from './ArticlesPageFilters.module.scss'

export interface IArticlesPageFiltersProps {
  className?: string
}

export const ArticlesPageFilters = memo(({ className }: IArticlesPageFiltersProps) => {
  const { t } = useTranslation('article')

  const {
    view,
    sort,
    type,
    order,
    search,
    onChangeView,
    onChangeSort,
    onChangeOrder,
    onChangeSearch,
    onChangeType,
  } = useArticleFilters()

  return (
    <div className={classNames(styles.articlesPageFilters, {}, [className])}>
      <div className={styles.sortWrapper}>
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </div>
      <Card className={styles.search}>
        <Input value={search} placeholder={t('search')} onChange={onChangeSearch} />
      </Card>
      <ArticleTypeTabs
        className={styles.tabs}
        value={type}
        onChangeType={onChangeType}
      />
    </div>
  )
})
