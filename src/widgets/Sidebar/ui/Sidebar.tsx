import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher'
import { classNames } from 'shared/lib/classNames/classNames'

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
      <button data-testid='sidebar-toggle' onClick={onToggle}>{t('toggle')}</button>
      <div className={classNames(styles.switchers, {}, [])}>
        <ThemeSwitcher />
        <LangSwitcher className={styles.lang} />
      </div>
   </div>
  )
}
