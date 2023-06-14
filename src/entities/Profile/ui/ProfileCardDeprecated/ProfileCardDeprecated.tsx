import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Loader } from '@/shared/ui/deprecated/Loader'
import { CountrySelect } from '@/entities/Country'
import { CurrencySelect } from '@/entities/Currency'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input'
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar'

import { IProfileCardProps } from '../ProfileCard/ProfileCard'

import { Mods, classNames } from '@/shared/lib/classNames/classNames'

import styles from './ProfileCardDeprecated.module.scss'

export const ProfileCardDeprecatedError: FC = () => {
  const { t } = useTranslation('profile')

  return (
    <HStack className={classNames(styles.profileCard, {}, [styles.error])} justify='center' max>
      <TextDeprecated theme='error' title={t('errorLoading')} text={t('update')} align='center' />
    </HStack>
  )
}

export const ProfileCardDeprecatedLoader: FC = () => {
  return (
    <HStack className={classNames(styles.profileCard, { [styles.loading]: true })} justify='center' max>
      <Loader />
    </HStack>
  )
}

export const ProfileCardDeprecated: FC<IProfileCardProps> = ({
  className,
  data,
  readOnly,
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

  const mods: Mods = {
    [styles.editing]: !readOnly,
  }

  return (
    <VStack className={classNames(styles.profileCard, mods, [className])} gap='16' max>
      {data?.avatar &&
        <HStack className={styles.avatarWrapper} justify='center' max>
          <AvatarDeprecated src={data?.avatar} alt="" />
        </HStack>
      }
      <InputDeprecated
        className={styles.input}
        value={data?.first}
        placeholder={t('yourName')}
        onChange={onChangeFirstname}
        readOnly={readOnly}
        data-testid='ProfileCard.firstname'
      />
      <InputDeprecated
        className={styles.input}
        value={data?.lastname}
        placeholder={t('yourLastname')}
        onChange={onChangeLastname}
        readOnly={readOnly}
        data-testid='ProfileCard.lastname'
      />
      <InputDeprecated
        className={styles.input}
        value={data?.age}
        placeholder={t('yourAge')}
        onChange={onChangeAge}
        readOnly={readOnly}
      />
      <InputDeprecated
        className={styles.input}
        value={data?.city}
        placeholder={t('yourCity')}
        onChange={onChangeCity}
        readOnly={readOnly}
      />
      <InputDeprecated
        className={styles.input}
        value={data?.username}
        placeholder={t('yourUsername')}
        onChange={onChangeUsername}
        readOnly={readOnly}
      />
      <InputDeprecated
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
