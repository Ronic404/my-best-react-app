import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Text } from 'shared/ui/Text'
import { VStack } from 'shared/ui/Stack'
import { CommentCard } from '../CommentCard/CommentCard'

import { Comment } from '../../model/types/comment'

import { classNames } from 'shared/lib/classNames/classNames'

export interface ICommentListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentList = memo(({ className, comments, isLoading }: ICommentListProps) => {
  const { t } = useTranslation()

  if (isLoading) {
    return (
      <VStack className={classNames('', {}, [className])} gap='16' max>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </VStack>
    )
  }

  return (
    <VStack className={classNames('', {}, [className])} gap='16' max>
      {!!comments?.length &&
        comments.map(comment => (
          <CommentCard
            comment={comment}
            isLoading={isLoading}
            key={comment.id}
          />
        ))
      }
      {!comments?.length &&
        <Text text={t('noComments')} />
      }
    </VStack>
  )
})
