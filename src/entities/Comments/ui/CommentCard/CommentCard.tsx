import { memo } from 'react'

import { Text } from 'shared/ui/Text'
import { Avatar } from 'shared/ui/Avatar'
import { AppLink } from 'shared/ui/AppLink'
import { Skeleton } from 'shared/ui/Skeleton'

import { Comment } from '../../model/types/comment'

import { RoutePaths } from 'shared/config/routeConfig/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'

import styles from './CommentCard.module.scss'

export interface ICommentCardProps {
  className?: string
  comment?: Comment
  isLoading?: boolean
}

export const CommentCard = memo(({ className, comment, isLoading }: ICommentCardProps) => {
  if (isLoading) {
    return (
      <div className={classNames(styles.commentCard, {}, [className, styles.loading])}>
        <div className={styles.header}>
          <Skeleton width={30} height={30} border='50%' />
          <Skeleton className={styles.username} width={150} height={16} />
        </div>
        <Skeleton className={styles.text} width='100%' height={50} />
      </div>
    )
  }

  if (!comment) {
    return null
  }

  return (
    <div className={classNames(styles.commentCard, {}, [className])}>
      <AppLink className={styles.header} to={`${RoutePaths.PROFILE}${comment.user.id}`}>
        {comment.user.avatar &&
          <Avatar src={comment.user.avatar} size={30} />
        }
        <Text className={styles.username} title={comment.user.username} />
      </AppLink>
      <Text className={styles.text} text={comment.text} />
    </div>
  )
})
