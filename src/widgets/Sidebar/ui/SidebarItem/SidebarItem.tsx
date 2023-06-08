import { memo } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { AppLink } from '@/shared/ui/deprecated/AppLink'
import { classNames } from '@/shared/lib/classNames/classNames'

import { getUserAuthData } from '../../../../entities/User'
import { SidebarItemType } from '../../model/types/sidebar'

import styles from './SidebarItem.module.scss'

export interface ISidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: ISidebarItemProps) => {
  const { t } = useTranslation()
  const isAuth = useSelector(getUserAuthData)

  if (item.authOnly && !isAuth) {
    return null
  }

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
