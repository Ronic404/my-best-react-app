import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Text } from 'shared/ui/Text'
import { CommentCard } from '../CommentCard/CommentCard'

import { Comment } from '../../model/types/comment'

import { classNames } from 'shared/lib/classNames/classNames'

import styles from './CommentList.module.scss'

export interface ICommentListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentList = memo(({ className, comments, isLoading }: ICommentListProps) => {
  const { t } = useTranslation()

  if (isLoading) {
    return (
      <div className={classNames(styles.commentList, {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </div>
    )
  }

  return (
    <div className={classNames(styles.commentList, {}, [className])}>
      {!!comments?.length &&
        comments.map(comment => (
          <CommentCard
            className={styles.comment}
            comment={comment}
            isLoading={isLoading}
            key={comment.id}
          />
        ))
      }
      {!comments?.length &&
        <Text text={t('noComments')} />
      }
    </div>
  )
})
