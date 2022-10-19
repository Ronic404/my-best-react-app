import { FC } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { Text } from 'shared/ui/Text'
import { Input } from 'shared/ui/Input'
import { Button } from 'shared/ui/Button'
import { classNames } from 'shared/lib/classNames/classNames'

import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'

import styles from './ProfileCard.module.scss'

export interface IProfileCardProps {
  className?: string
}

export const ProfileCard: FC<IProfileCardProps> = ({ className }) => {
  const { t } = useTranslation('profile')
  const data = useSelector(getProfileData)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)

  return (
    <div className={classNames(styles.profileCard, {}, [className])}>
      <div className={styles.header}>
        <Text title={t('profile')} />
        <Button className={styles.editBtn} theme='outline'>
          {t('edit')}
        </Button>
      </div>
      <div className={styles.data}>
        <Input
          className={styles.input}
          value={data?.first}
          placeholder={t('yourName')}
        />
        <Input
          className={styles.input}
          value={data?.lastname}
          placeholder={t('yourLastname')}
        />
      </div>
    </div>
  )
}
