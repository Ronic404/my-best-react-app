/* eslint-disable @typescript-eslint/indent */
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Dropdown } from '@/shared/ui/redesigned/Popups'
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar'
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups'

import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '../../../../entities/User'

import { classNames } from '@/shared/lib/classNames/classNames'
import { getRouteAdminPanel, getRouteProfile, getRouteSettings } from '@/shared/constants/router'

import styles from './AvatarDropdown.module.scss'
import { ToggleFeatures } from '@/shared/lib/features'

interface IAvatarDropdownProps {
  className?: string
}

export const AvatarDropdown = memo((props: IAvatarDropdownProps) => {
  const { className } = props
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const authData = useSelector(getUserAuthData)

  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)
  const isAdminPanelAvailable = isAdmin || isManager

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (!authData) {
    return null
  }

  const items = [
    ...(isAdminPanelAvailable
      ? [{
        content: t('admin'),
        href: getRouteAdminPanel(),
      }]
      : []
    ),
    {
      content: t('settings'),
      href: getRouteSettings(),
    },
    {
      content: t('profile'),
      href: getRouteProfile(authData.id),
    },
    {
      content: t('logOut'),
      onClick: onLogout,
    },
  ]

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <Dropdown
          className={classNames(styles.AvatarDropdown, {}, [className])}
          items={items}
          direction='bottom left'
          trigger={<Avatar src={authData.avatar} size={40} />}
        />
      }
      off={
        <DropdownDeprecated
          className={classNames(styles.AvatarDropdown, {}, [className])}
          items={items}
          direction='bottom left'
          trigger={<AvatarDeprecated src={authData.avatar} size={30} fallbackInverted />}
        />
      }
    />
  )
})
