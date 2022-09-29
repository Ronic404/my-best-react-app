import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher'
import { AppLink } from 'shared/ui/AppLink'
import { Button } from 'shared/ui/Button'

import { classNames } from 'shared/lib/classNames/classNames'
import { RoutePaths } from 'shared/config/routeConfig/routeConfig'

import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'

import styles from './Sidebar.module.scss'

export interface ISidebarProps {
  className?: string
}

export const Sidebar: FC<ISidebarProps> = ({ className }) => {
  const { t } = useTranslation()
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const onToggle = (): void => {
    setCollapsed(prev => !prev)
  }

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
        <AppLink
          className={styles.item}
          to={RoutePaths.MAIN}
          theme='secondary'
        >
          <MainIcon className={styles.icon} />
          <span className={styles.link}>{t('main')}</span>
        </AppLink>
        <AppLink
          className={styles.item}
          to={RoutePaths.ABOUT}
          theme='secondary'
        >
          <AboutIcon className={styles.icon} />
          <span className={styles.link}>{t('about')}</span>
        </AppLink>
      </div>

      <div className={classNames(styles.switchers, {}, [])}>
        <ThemeSwitcher />
        <LangSwitcher className={styles.lang} short={collapsed} />
      </div>
    </div>
  )
}
