import { memo } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { Icon } from '@/shared/ui/redesigned/Icon'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { ToggleFeatures } from '@/shared/lib/features'
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink'

import { getUserAuthData } from '../../../../entities/User'
import { SidebarItemType } from '../../model/types/sidebar'

import { classNames } from '@/shared/lib/classNames/classNames'

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
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <AppLink
          className={classNames(styles.itemRedesigned, { [styles.collapsedRedesigned]: collapsed })}
          to={item.path}
          activeClassName={styles.active}
        >
          <Icon Svg={item.Icon} />
          <span className={styles.link}>{t(item.text)}</span>
        </AppLink>
      }
      off={
        <AppLinkDeprecated
          className={classNames(styles.item, { [styles.collapsed]: collapsed })}
          to={item.path}
          theme='secondary'
        >
          <item.Icon className={styles.icon} />
          <span className={styles.link}>{t(item.text)}</span>
        </AppLinkDeprecated>
      }
    />
  )
})
