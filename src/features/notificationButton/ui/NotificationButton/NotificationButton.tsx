import { memo } from 'react'

import { Icon } from 'shared/ui/Icon'
import { Button } from 'shared/ui/Button'
import { Popover } from 'shared/ui/Popups'

import { NotificationList } from '../../../../entities/Notification'

import { classNames } from 'shared/lib/classNames/classNames'

import NotificationIcon from 'shared/assets/icons/notification-20-20.svg'

import styles from './NotificationButton.module.scss'

interface INotificationButtonProps {
  className?: string
}

export const NotificationButton = memo((props: INotificationButtonProps) => {
  const { className } = props

  return (
    <Popover
      className={classNames(styles.NotificationButton, {}, [className])}
      trigger={(
        <Button theme='clear'>
          <Icon Svg={NotificationIcon} inverted />
        </Button>
      )}
      direction='bottom left'
    >
      <NotificationList className={styles.notifications} />
    </Popover>
  )
})
