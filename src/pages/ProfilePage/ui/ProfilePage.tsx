import { FC } from 'react'
import { useParams } from 'react-router-dom'

import { EditableProfileCard } from '@/features/editableProfileCard'

import { Page } from '@/widgets/Page'
import { VStack } from '@/shared/ui/redesigned/Stack'

import { classNames } from '@/shared/lib/classNames/classNames'

export interface IProfilePageProps {
  className?: string
}

const ProfilePage: FC<IProfilePageProps> = ({ className }) => {
  const { id } = useParams<{ id: string }>()

  return (
    <Page className={classNames('', {}, [className])} data-testid='ProfilePage'>
      <VStack gap='16' max>
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  )
}

export default ProfilePage
