import { memo, useCallback, useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'

import { Icon } from '@/shared/ui/redesigned/Icon'
import { Drawer } from '@/shared/ui/deprecated/Drawer'
import { Popover } from '@/shared/ui/redesigned/Popups'
import { ToggleFeatures } from '@/shared/lib/features'
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon'
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button'
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups'

import { NotificationList } from '../../../../entities/Notification'

import { classNames } from '@/shared/lib/classNames/classNames'

import NotificationIcon from '@/shared/assets/icons/notification.svg'
import NotificationIconDeprecated from '@/shared/assets/icons/notification-20-20.svg'

import styles from './NotificationButton.module.scss'

interface INotificationButtonProps {
  className?: string
}

export const NotificationButton = memo((props: INotificationButtonProps) => {
  const { className } = props
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true)
  }, [])

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false)
  }, [])

  const trigger = (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <Icon Svg={NotificationIcon} clickable onClick={onOpenDrawer} />
      }
      off={
        <ButtonDeprecated theme='clear' onClick={onOpenDrawer}>
          <IconDeprecated Svg={NotificationIconDeprecated} inverted />
        </ButtonDeprecated>
      }
    />
  )

  return (
    <div>
      <BrowserView>
        <ToggleFeatures
          feature='isAppRedesigned'
          on={
            <Popover
              className={classNames(styles.NotificationButton, {}, [className])}
              trigger={trigger}
              direction='bottom left'
            >
              <NotificationList className={styles.notifications} />
            </Popover>
          }
          off={
            <PopoverDeprecated
              className={classNames(styles.NotificationButton, {}, [className])}
              trigger={trigger}
              direction='bottom left'
            >
              <NotificationList className={styles.notifications} />
            </PopoverDeprecated>
          }
        />
      </BrowserView>

      <MobileView>
        {trigger}
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationList />
        </Drawer>
      </MobileView>
    </div>
  )
})
