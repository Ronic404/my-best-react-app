import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { EditableProfileCard } from 'features/editableProfileCard'

import { Page } from 'widgets/Page'
import { Text } from 'shared/ui/Text'
import { VStack } from 'shared/ui/Stack/VStack'

import { classNames } from 'shared/lib/classNames/classNames'

export interface IProfilePageProps {
  className?: string
}

const ProfilePage: FC<IProfilePageProps> = ({ className }) => {
  const { t } = useTranslation('profile')
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return <Text text={t('errorProfile')} />
  }

  return (
    <Page className={classNames('', {}, [className])}>
      <VStack gap='16' max>
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  )
}

export default ProfilePage
