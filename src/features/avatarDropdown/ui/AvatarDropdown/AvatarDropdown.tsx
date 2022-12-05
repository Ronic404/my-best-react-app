/* eslint-disable @typescript-eslint/indent */
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import { Avatar } from 'shared/ui/Avatar'
import { Dropdown } from 'shared/ui/Popups'

import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '../../../../entities/User'

import { classNames } from 'shared/lib/classNames/classNames'

import { RoutePaths } from 'shared/config/routeConfig/routeConfig'

import styles from './AvatarDropdown.module.scss'

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

  return (
    <Dropdown
      className={classNames(styles.AvatarDropdown, {}, [className])}
      items={[
        ...(isAdminPanelAvailable
          ? [{
            content: t('admin'),
            href: RoutePaths.ADMIN_PANEL,
          }]
          : []
        ),
        {
          content: t('profile'),
          href: RoutePaths.PROFILE + authData.id,
        },
        {
          content: t('logOut'),
          onClick: onLogout,
        },
      ]}
      direction='bottom left'
      trigger={<Avatar size={30} src={authData.avatar} />}
    />
  )
})
