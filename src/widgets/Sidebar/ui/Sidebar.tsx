import { memo, useMemo, useState } from 'react'

import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher'
import { Button } from 'shared/ui/Button'
import { SidebarItem } from './SidebarItem/SidebarItem'

import { SidebarItemsList } from '../model/items'

import { classNames } from 'shared/lib/classNames/classNames'

import styles from './Sidebar.module.scss'

export interface ISidebarProps {
  className?: string
}

export const Sidebar = memo(({ className }: ISidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const onToggle = (): void => {
    setCollapsed(prev => !prev)
  }

  const itemsList = useMemo(() => SidebarItemsList.map(item => (
    <SidebarItem
      item={item}
      collapsed={collapsed}
      key={item.path}
    />
  )), [collapsed])

  return (
    <div
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

      <div className={styles.items}>
        {itemsList}
      </div>

      <div className={classNames(styles.switchers, {}, [])}>
        <ThemeSwitcher />
        <LangSwitcher className={styles.lang} short={collapsed} />
      </div>
    </div>
  )
})
