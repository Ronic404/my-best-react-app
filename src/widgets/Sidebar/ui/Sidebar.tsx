import { memo, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'

import { Button } from '@/shared/ui/Button'
import { VStack } from '@/shared/ui/Stack'
import { AppLogo } from '@/shared/ui/AppLogo'
import { SidebarItem } from './SidebarItem/SidebarItem'
import { LangSwitcher } from '@/features/LangSwitcher'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { ToggleFeatures } from '@/shared/lib/features'

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
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <aside
          className={classNames(styles.sidebarRedesigned, { [styles.collapsed]: collapsed }, [className])}
          data-testid='sidebar'
        >
          <AppLogo className={styles.appLogo} />
        </aside>
      }
      off={
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
      }
    />
  )
})
