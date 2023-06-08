import { memo } from 'react'

import { VStack } from '@/shared/ui/deprecated/Stack'
import { Skeleton } from '@/shared/ui/deprecated/Skeleton'
import { NotificationItem } from '../NotificationItem/NotificationItem'

import { useNotifications } from '../../api/notificationApi'

import { classNames } from '@/shared/lib/classNames/classNames'

import styles from './NotificationList.module.scss'

export interface INotificationListProps {
  className?: string
}

export const NotificationList = memo(({ className }: INotificationListProps) => {
  const { data, isLoading } = useNotifications(null, {
    pollingInterval: 5000,
  })

  if (isLoading) {
    return (
      <VStack className={classNames(styles.notificationList, {}, [className])} gap='16' max>
        <Skeleton width={'100%'} border='8px' height='80px' />
        <Skeleton width={'100%'} border='8px' height='80px' />
        <Skeleton width={'100%'} border='8px' height='80px' />
      </VStack>
    )
  }

  return (
    <VStack className={classNames(styles.notificationList, {}, [className])} gap='16' max>
      {data?.map((item) => (
        <NotificationItem item={item} key={item.id} />
      ))}
    </VStack>
  )
})
