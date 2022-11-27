import { FC, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { Text } from 'shared/ui/Text'
import { Button } from 'shared/ui/Button'
import { HStack } from 'shared/ui/Stack/HStack'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

import { getUserAuthData } from '../../../../entities/User'
import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from '../../../../entities/Profile'

export interface IProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader: FC<IProfilePageHeaderProps> = ({ className }) => {
  const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()

  const readonly = useSelector(getProfileReadonly)
  const authData = useSelector(getUserAuthData)
  const profileData = useSelector(getProfileData)

  const canEdit = authData?.id === profileData?.id

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  return (
    <HStack className={classNames('', {}, [className])} justify='between' max>
      <Text title={t('profile')} />
      {canEdit &&
        <>
          {readonly &&
            <Button theme='outline' onClick={onEdit}>{t('edit')}</Button>
          }
          {!readonly &&
            <HStack gap='8'>
              <Button theme='outline_red' onClick={onCancelEdit}>{t('cancel')}</Button>
              <Button theme='outline' onClick={onSave}>{t('save')}</Button>
            </HStack>
          }
        </>
      }
    </HStack>
  )
}
