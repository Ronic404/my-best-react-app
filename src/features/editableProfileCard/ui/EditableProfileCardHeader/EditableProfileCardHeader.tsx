import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { Card } from '@/shared/ui/redesigned/Card'
import { Text } from '@/shared/ui/redesigned/Text'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { Button } from '@/shared/ui/redesigned/Button'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button'

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
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <Card border='partial' padding='24' max>
          <HStack className={classNames('', {}, [className])} justify='between' max>
            <Text title={t('profile')} />
            {canEdit &&
              <>
                {readonly &&
                  <Button
                    onClick={onEdit}
                    data-testid='EditableProfileCardHeader.EditButton'
                  >{t('edit')}</Button>
                }
                {!readonly &&
                  <HStack gap='8'>
                    <Button
                      onClick={onCancelEdit}
                      color='error'
                      data-testid='EditableProfileCardHeader.CancelButton'
                    >{t('cancel')}</Button>
                    <Button
                      onClick={onSave}
                      color='success'
                      data-testid='EditableProfileCardHeader.SaveButton'
                    >{t('save')}</Button>
                  </HStack>
                }
              </>
            }
          </HStack>
        </Card>
      }
      off={
        <HStack className={classNames('', {}, [className])} justify='between' max>
          <TextDeprecated title={t('profile')} />
          {canEdit &&
            <>
              {readonly &&
                <ButtonDeprecated
                  theme='outline'
                  onClick={onEdit}
                  data-testid='EditableProfileCardHeader.EditButton'
                >{t('edit')}</ButtonDeprecated>
              }
              {!readonly &&
                <HStack gap='8'>
                  <ButtonDeprecated
                    theme='outline_red'
                    onClick={onCancelEdit}
                    data-testid='EditableProfileCardHeader.CancelButton'
                  >{t('cancel')}</ButtonDeprecated>
                  <ButtonDeprecated
                    theme='outline'
                    onClick={onSave}
                    data-testid='EditableProfileCardHeader.SaveButton'
                  >{t('save')}</ButtonDeprecated>
                </HStack>
              }
            </>
          }
        </HStack>
      }
    />
  )
})
