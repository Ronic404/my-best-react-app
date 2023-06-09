import { memo } from 'react'

import { Card } from '@/shared/ui/redesigned/Card'
import { Text } from '@/shared/ui/redesigned/Text'
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'

import { Notification } from '../../model/types/notification'
import { ToggleFeatures } from '@/shared/lib/features'

import { classNames } from '@/shared/lib/classNames/classNames'

import styles from './NotificationItem.module.scss'

export interface INotificationItemProps {
  className?: string
  item: Notification
}

export const NotificationItem = memo(({ className, item }: INotificationItemProps) => {
  const content = (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <Card className={classNames(styles.notificationItem, {}, [className])}>
          <Text title={item.title} text={item.description} />
        </Card>
      }
      off={
        <CardDeprecated
          className={classNames(styles.notificationItem, {}, [className])}
          theme='outlined'
        >
          <TextDeprecated title={item.title} text={item.description} />
        </CardDeprecated>
      }
    />
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
