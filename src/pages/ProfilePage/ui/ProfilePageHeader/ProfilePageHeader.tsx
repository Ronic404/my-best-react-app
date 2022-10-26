import { FC, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { Text } from 'shared/ui/Text'
import { Button } from 'shared/ui/Button'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

import { getProfileReadonly, profileActions, updateProfileData } from '../../../../entities/Profile'

import styles from './ProfilePageHeader.module.scss'

export interface IProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader: FC<IProfilePageHeaderProps> = ({ className }) => {
  const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()
  const readonly = useSelector(getProfileReadonly)

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
    <div className={classNames(styles.profilePageHeader, {}, [className])}>
      <Text title={t('profile')} />
      {readonly &&
        <Button className={styles.editBtn} theme='outline' onClick={onEdit}>
          {t('edit')}
        </Button>
      }
      {!readonly &&
        <>
          <Button className={styles.editBtn} theme='outline_red' onClick={onCancelEdit}>
            {t('cancel')}
          </Button>
          <Button className={styles.saveBtn} theme='outline' onClick={onSave}>
            {t('save')}
          </Button>
        </>
      }
    </div>
  )
}
