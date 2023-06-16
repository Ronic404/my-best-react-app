import { memo } from 'react'

import { Card } from '@/shared/ui/redesigned/Card'
import { Text } from '@/shared/ui/redesigned/Text'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar'
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink'
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton'

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
  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  })

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
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <Card padding='24' border='round' max>
          <VStack
            className={classNames(styles.commentCardRedesigned, {}, [className])}
            gap='8'
            max
            data-testid='CommentCard.Content'
          >
            <AppLink to={getRouteProfile(comment.user.id)}>
              <HStack gap='8'>
                {comment.user.avatar &&
                  <Avatar src={comment.user.avatar} size={30} />
                }
                <Text text={comment.user.username} bold />
              </HStack>
            </AppLink>
            <Text text={comment.text} />
          </VStack>
        </Card>
      }
      off={
        <VStack
          className={classNames(styles.commentCard, {}, [className])}
          gap='8'
          max
          data-testid='CommentCard.Content'
        >
          <AppLinkDeprecated className={styles.header} to={getRouteProfile(comment.user.id)}>
            {comment.user.avatar &&
              <AvatarDeprecated src={comment.user.avatar} size={30} />
            }
            <TextDeprecated className={styles.username} title={comment.user.username} />
          </AppLinkDeprecated>
          <TextDeprecated className={styles.text} text={comment.text} />
        </VStack>
      }
    />
  )
})
