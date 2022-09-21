import { FC, useState } from 'react'

import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { classNames } from 'shared/lib/classNames/classNames'

import styles from './Sidebar.module.scss'

interface ISidebarProps {
  className?: string
}

export const Sidebar: FC<ISidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div className={classNames(styles.sidebar, {[styles.collapsed]: collapsed}, [className])}>
      <button onClick={onToggle}>toggle</button>
      <div className={classNames(styles.switchers, {}, [])}>
        <ThemeSwitcher />
      </div>
   </div>
  )
}
