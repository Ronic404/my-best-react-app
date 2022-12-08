import { memo, ReactNode, useCallback } from 'react'

import { Card } from '../Card'

import { classNames } from '@/shared/lib/classNames/classNames'

import styles from './Tabs.module.scss'

export interface TabItem {
  value: string
  content: ReactNode
}

export interface ITabsProps {
  className?: string
  tabs: TabItem[]
  value: string
  onTabClick: (tab: TabItem) => void
}

export const Tabs = memo((props: ITabsProps) => {
  const { className, tabs, value, onTabClick } = props

  const clickHandle = useCallback((tab: TabItem) => {
    return () => {
      onTabClick(tab)
    }
  }, [onTabClick])

  return (
    <div className={classNames(styles.tabs, {}, [className])}>
      {tabs.map(tab => (
        <Card
          className={styles.tab}
          theme={tab.value === value ? 'normal' : 'outlined'}
          onClick={clickHandle(tab)}
          key={tab.value}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  )
})
