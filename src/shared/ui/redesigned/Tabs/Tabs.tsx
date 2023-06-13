import { memo, ReactNode, useCallback } from 'react'

import { Card } from '../Card'
import { Flex, FlexDirection } from '../Stack/Flex'

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
  direction?: FlexDirection
  onTabClick: (tab: TabItem) => void
}

export const Tabs = memo((props: ITabsProps) => {
  const { className, tabs, value, direction = 'row', onTabClick } = props

  const clickHandle = useCallback((tab: TabItem) => {
    return () => {
      onTabClick(tab)
    }
  }, [onTabClick])

  return (
    <Flex
      className={classNames(styles.tabs, {}, [className])}
      direction={direction}
      gap='8'
      align='start'
    >
      {tabs.map(tab => {
        const isSelected = tab.value === value

        return (
          <Card
            className={classNames(styles.tab, { [styles.selected]: isSelected }, [])}
            variant={isSelected ? 'light' : 'normal'}
            border='round'
            onClick={clickHandle(tab)}
            key={tab.value}
          >
            {tab.content}
          </Card>
        )
      },
      )}
    </Flex>
  )
})
