import { memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { Tabs } from '@/shared/ui/redesigned/Tabs'
import { ToggleFeatures } from '@/shared/lib/features'
import { TabItem, Tabs as TabsDeprecated } from '@/shared/ui/deprecated/Tabs'

import { ArticleType } from '@/entities/Article'
import { classNames } from '@/shared/lib/classNames/classNames'

export interface IArticleTypeTabsProps {
  className?: string
  value: ArticleType
  onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs = memo((props: IArticleTypeTabsProps) => {
  const { className, value, onChangeType } = props
  const { t } = useTranslation('article')

  const typeTabs = useMemo<TabItem[]>(() => [
    { value: 'ALL', content: t('all') },
    { value: 'IT', content: t('it') },
    { value: 'ECONOMICS', content: t('economics') },
    { value: 'SCIENCE', content: t('science') },
  ], [t])

  const onTabClick = useCallback((tab: TabItem) => {
    onChangeType(tab.value as ArticleType)
  }, [onChangeType])

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <Tabs
          className={classNames('', {}, [className])}
          tabs={typeTabs}
          value={value}
          direction='column'
          onTabClick={onTabClick}
        />
      }
      off={
        <TabsDeprecated
          className={classNames('', {}, [className])}
          tabs={typeTabs}
          value={value}
          onTabClick={onTabClick}
        />
      }
    />
  )
})
