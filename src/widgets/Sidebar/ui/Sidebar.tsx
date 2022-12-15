import { memo, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'

import { Button } from '@/shared/ui/Button'
import { VStack } from '@/shared/ui/Stack'
import { SidebarItem } from './SidebarItem/SidebarItem'
import { LangSwitcher } from '@/features/LangSwitcher'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'

import { getSidebarItems } from '../model/selectors/getSidebarItems'

import { classNames } from '@/shared/lib/classNames/classNames'

import styles from './Sidebar.module.scss'

export interface ISidebarProps {
  className?: string
}

export const Sidebar = memo(({ className }: ISidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const sidebarItemsList = useSelector(getSidebarItems)

  const onToggle = (): void => {
    setCollapsed(prev => !prev)
  }

  const itemsList = useMemo(() => sidebarItemsList.map(item => (
    <SidebarItem
      item={item}
      collapsed={collapsed}
      key={item.path}
    />
  )), [collapsed, sidebarItemsList])

  return (
    <aside
      className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}
      data-testid='sidebar'
    >
      <Button
        className={styles.collapseBtn}
        data-testid='sidebar-toggle'
        theme='backgroundInverted'
        square
        size='l'
        onClick={onToggle}
      >
        {collapsed ? '>' : '<'}
      </Button>

      <VStack className={styles.items} gap='8' role='navigation'>
        {itemsList}
      </VStack>

      <div className={classNames(styles.switchers, {}, [])}>
        <ThemeSwitcher />
        <LangSwitcher className={styles.lang} short={collapsed} />
      </div>
    </aside>
  )
})
