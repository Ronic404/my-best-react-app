import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { Text } from '@/shared/ui/deprecated/Text'
import { Button } from '@/shared/ui/deprecated/Button'
import { HStack } from '@/shared/ui/deprecated/Stack'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'

import { getUserAuthData } from '../../../../entities/User'

import { profileActions } from '../../model/slice/profileSlice'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'

export interface IEditableProfileCardHeaderProps {
  className?: string
}

export const EditableProfileCardHeader = memo(({ className }: IEditableProfileCardHeaderProps) => {
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
            <Button
              theme='outline'
              onClick={onEdit}
              data-testid='EditableProfileCardHeader.EditButton'
            >{t('edit')}</Button>
          }
          {!readonly &&
            <HStack gap='8'>
              <Button
                theme='outline_red'
                onClick={onCancelEdit}
                data-testid='EditableProfileCardHeader.CancelButton'
              >{t('cancel')}</Button>
              <Button
                theme='outline'
                onClick={onSave}
                data-testid='EditableProfileCardHeader.SaveButton'
              >{t('save')}</Button>
            </HStack>
          }
        </>
      }
    </HStack>
  )
})
