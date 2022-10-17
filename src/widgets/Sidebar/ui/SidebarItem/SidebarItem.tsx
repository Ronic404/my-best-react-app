import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { AppLink } from 'shared/ui/AppLink'
import { classNames } from 'shared/lib/classNames/classNames'

import { SidebarItemType } from 'widgets/Sidebar/model/items'

import styles from './SidebarItem.module.scss'

export interface ISidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: ISidebarItemProps) => {
  const { t } = useTranslation()

  return (
    <AppLink
      className={classNames(styles.item, { [styles.collapsed]: collapsed })}
      to={item.path}
      theme='secondary'
    >
      <item.icon className={styles.icon} />
      <span className={styles.link}>{t(item.text)}</span>
    </AppLink>
  )
})
