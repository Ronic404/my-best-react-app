import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Text } from 'shared/ui/Text'
import { Input } from 'shared/ui/Input'
import { Avatar } from 'shared/ui/Avatar'
import { Loader } from 'shared/ui/Loader'
import { HStack, VStack } from 'shared/ui/Stack'

import { Country, CountrySelect } from '../../../../entities/Country'
import { Currency, CurrencySelect } from '../../../../entities/Currency'

import { Profile } from '../../model/types/profile'
import { classNames, Mods } from 'shared/lib/classNames/classNames'

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
      <HStack className={classNames(styles.profileCard, { [styles.loading]: true }, [className])} justify='center' max>
        <Loader />
      </HStack>
    )
  }

  if (error) {
    return (
      <HStack className={classNames(styles.profileCard, {}, [className, styles.error])} justify='center' max>
        <Text theme='error' title={t('errorLoading')} text={t('update')} align='center' />
      </HStack>
    )
  }

  const mods: Mods = {
    [styles.editing]: !readOnly,
  }

  return (
    <VStack className={classNames(styles.profileCard, mods, [className])} gap='16' max>
      {data?.avatar &&
          <HStack className={styles.avatarWrapper} justify='center' max>
            <Avatar src={data?.avatar} alt="" />
          </HStack>
      }
      <Input
        className={styles.input}
        value={data?.first}
        placeholder={t('yourName')}
        onChange={onChangeFirstname}
        readOnly={readOnly}
        data-testid='ProfileCard.firstname'
      />
      <Input
        className={styles.input}
        value={data?.lastname}
        placeholder={t('yourLastname')}
        onChange={onChangeLastname}
        readOnly={readOnly}
        data-testid='ProfileCard.lastname'
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
    </VStack>
  )
}
