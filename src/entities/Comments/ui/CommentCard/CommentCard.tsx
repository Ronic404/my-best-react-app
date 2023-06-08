import { memo } from 'react'

import { Text } from '@/shared/ui/deprecated/Text'
import { VStack } from '@/shared/ui/deprecated/Stack'
import { Avatar } from '@/shared/ui/deprecated/Avatar'
import { AppLink } from '@/shared/ui/deprecated/AppLink'
import { Skeleton } from '@/shared/ui/deprecated/Skeleton'

import { Comment } from '../../model/types/comment'

import { classNames } from '@/shared/lib/classNames/classNames'
import { getRouteProfile } from '@/shared/constants/router'

import styles from './CommentCard.module.scss'

export interface ICommentCardProps {
  className?: string
  comment?: Comment
  isLoading?: boolean
}

export const CommentCard = memo(({ className, comment, isLoading }: ICommentCardProps) => {
  if (isLoading) {
    return (
      <VStack
        className={classNames(styles.commentCard, {}, [className, styles.loading])}
        gap='8'
        max
        data-testid='CommentCard.Loading'
      >
        <div className={styles.header}>
          <Skeleton width={30} height={30} border='50%' />
          <Skeleton className={styles.username} width={150} height={16} />
        </div>
        <Skeleton className={styles.text} width='100%' height={50} />
      </VStack>
    )
  }

  if (!comment) {
    return null
  }

  return (
    <VStack
      className={classNames(styles.commentCard, {}, [className])}
      gap='8'
      max
      data-testid='CommentCard.Content'
    >
      <AppLink className={styles.header} to={getRouteProfile(comment.user.id)}>
        {comment.user.avatar &&
          <Avatar src={comment.user.avatar} size={30} />
        }
        <Text className={styles.username} title={comment.user.username} />
      </AppLink>
      <Text className={styles.text} text={comment.text} />
    </VStack>
  )
})
