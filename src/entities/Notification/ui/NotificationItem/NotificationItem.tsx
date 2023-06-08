import { memo } from 'react'

import { Card } from '@/shared/ui/deprecated/Card'
import { Text } from '@/shared/ui/deprecated/Text'

import { Notification } from '../../model/types/notification'

import { classNames } from '@/shared/lib/classNames/classNames'

import styles from './NotificationItem.module.scss'

export interface INotificationItemProps {
  className?: string
  item: Notification
}

export const NotificationItem = memo(({ className, item }: INotificationItemProps) => {
  const content = (
    <Card
      className={classNames(styles.notificationItem, {}, [className])}
      theme='outlined'
    >
      <Text title={item.title} text={item.description} />
    </Card>
  )

  if (item.href) {
    return (
      <a
        className={styles.link}
        href={item.href}
        target='_blank'
        rel="noreferrer"
      >{content}</a>
    )
  }

  return content
})
