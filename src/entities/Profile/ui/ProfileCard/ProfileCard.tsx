import { FC } from 'react'

import { ToggleFeatures } from '@/shared/lib/features'

import { ProfileCardDeprecated, ProfileCardDeprecatedError, ProfileCardDeprecatedLoader } from '../ProfileCardDeprecated/ProfileCardDeprecated'
import { ProfileCardRedesigned, ProfileCardRedesignedError, ProfileCardRedesignedSkeleton } from '../ProfileCardRedesigned/ProfileCardRedesigned'

import { Profile } from '../../model/types/profile'
import { Country } from '../../../../entities/Country'
import { Currency } from '../../../../entities/Currency'

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

export const ProfileCard: FC<IProfileCardProps> = (props) => {
  const { isLoading, error } = props

  if (isLoading) {
    return (
      <ToggleFeatures
        feature='isAppRedesigned'
        on={<ProfileCardRedesignedSkeleton />}
        off={<ProfileCardDeprecatedLoader />}
      />
    )
  }

  if (error) {
    return (
      <ToggleFeatures
        feature='isAppRedesigned'
        on={<ProfileCardRedesignedError />}
        off={<ProfileCardDeprecatedError />}
      />
    )
  }

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <ProfileCardRedesigned {...props} />
      }
      off={
        <ProfileCardDeprecated {...props} />
      }
    />
  )
}
