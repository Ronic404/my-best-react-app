import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Text } from 'shared/ui/Text'
import { Input } from 'shared/ui/Input'
import { Avatar } from 'shared/ui/Avatar'
import { Loader } from 'shared/ui/Loader'
import { classNames, Mods } from 'shared/lib/classNames/classNames'

import { Currency, CurrencySelect } from '../../../../entities/Currency'
import { Country, CountrySelect } from '../../../../entities/Country'

import { Profile } from '../../model/types/profile'

import styles from './ProfileCard.module.scss'

export interface IProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  readOnly?: boolean
  error?: string
  onChangeFirstname?: (value?: string) => void
  onChangeLastname?: (value?: string) => void
  onChangeAge?: (value?: string) => void
  onChangeCity?: (value?: string) => void
  onChangeUsername?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeCurrency?: (value?: Currency) => void
  onChangeCountry?: (value?: Country) => void
}

export const ProfileCard: FC<IProfileCardProps> = ({
  className,
  data,
  isLoading,
  readOnly,
  error,
  onChangeFirstname,
  onChangeLastname,
  onChangeAge,
  onChangeCity,
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry,
}) => {
  const { t } = useTranslation('profile')

  if (isLoading) {
    return (
      <div className={classNames(styles.profileCard, { [styles.loading]: true }, [className])}>
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div className={classNames(styles.profileCard, {}, [className, styles.error])}>
        <Text theme='error' title={t('errorLoading')} text={t('update')} align='center' />
      </div>
    )
  }

  const mods: Mods = {
    [styles.editing]: !readOnly,
  }

  return (
    <div className={classNames(styles.profileCard, mods, [className])}>
      <div className={styles.data}>
        {data?.avatar &&
          <div className={styles.avatarWrapper}>
            <Avatar src={data?.avatar} alt="" />
          </div>
        }
        <Input
          className={styles.input}
          value={data?.first}
          placeholder={t('yourName')}
          onChange={onChangeFirstname}
          readOnly={readOnly}
        />
        <Input
          className={styles.input}
          value={data?.lastname}
          placeholder={t('yourLastname')}
          onChange={onChangeLastname}
          readOnly={readOnly}
        />
        <Input
          className={styles.input}
          value={data?.age}
          placeholder={t('yourAge')}
          onChange={onChangeAge}
          readOnly={readOnly}
        />
        <Input
          className={styles.input}
          value={data?.city}
          placeholder={t('yourCity')}
          onChange={onChangeCity}
          readOnly={readOnly}
        />
        <Input
          className={styles.input}
          value={data?.username}
          placeholder={t('yourUsername')}
          onChange={onChangeUsername}
          readOnly={readOnly}
        />
        <Input
          className={styles.input}
          value={data?.avatar}
          placeholder={t('yourAvatar')}
          onChange={onChangeAvatar}
          readOnly={readOnly}
        />
        <CurrencySelect
          className={styles.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readOnly={readOnly}
        />
        <CountrySelect
          className={styles.input}
          value={data?.country}
          onChange={onChangeCountry}
          readOnly={readOnly}
        />
      </div>
    </div>
  )
}
