import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Text } from '@/shared/ui/redesigned/Text'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Button } from '@/shared/ui/redesigned/Button'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'

import { User } from '@/entities/User'

interface IArticleAdditionalInfoProps {
  className?: string
  author: User
  createdAt: string
  views: number
  onEdit: () => void
}

export const ArticleAdditionalInfo = memo((props: IArticleAdditionalInfoProps) => {
  const { className, author, createdAt, views, onEdit } = props
  const { t } = useTranslation('article')

  return (
    <VStack className={className} gap='32'>
      <HStack gap='8'>
        <Avatar src={author.avatar} size={32} />
        <Text text={author.username} bold />
        <Text text={createdAt} />
      </HStack>
      <Button onClick={onEdit}>{t('edit')}</Button>
      <Text text={t('views', { count: views })} />
    </VStack>
  )
})
