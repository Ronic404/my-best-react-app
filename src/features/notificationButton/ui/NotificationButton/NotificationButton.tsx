import { memo, useCallback, useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'

import { Icon } from 'shared/ui/Icon'
import { Button } from 'shared/ui/Button'
import { Drawer } from 'shared/ui/Drawer'
import { Popover } from 'shared/ui/Popups'

import { NotificationList } from '../../../../entities/Notification'

import { classNames } from 'shared/lib/classNames/classNames'
import { AnimationProvider } from 'shared/lib/components/AnimationProvider'

import NotificationIcon from 'shared/assets/icons/notification-20-20.svg'

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
    <Button theme='clear' onClick={onOpenDrawer}>
      <Icon Svg={NotificationIcon} inverted />
    </Button>
  )

  return (
    <div>
      <BrowserView>
        <Popover
          className={classNames(styles.NotificationButton, {}, [className])}
          trigger={trigger}
          direction='bottom left'
        >
          <NotificationList className={styles.notifications} />
        </Popover>
      </BrowserView>

      <MobileView>
        {trigger}
        <AnimationProvider>
          <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
            <NotificationList />
          </Drawer>
        </AnimationProvider>
      </MobileView>
    </div>
  )
})
