import { FC, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'

import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader'
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

import { Currency } from '../../../entities/Currency'
import { Country } from '../../../entities/Country'
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  profileActions,
  ProfileCard,
  profileReducer,
} from '../../../entities/Profile'

export interface IProfilePageProps {
  className?: string
}

const reducers: ReducersList = {
  profile: profileReducer,
}

const ProfilePage: FC<IProfilePageProps> = ({ className }) => {
  const dispatch = useAppDispatch()
  const error = useSelector(getProfileError)
  const formData = useSelector(getProfileForm)
  const readOnly = useSelector(getProfileReadonly)
  const isLoading = useSelector(getProfileIsLoading)

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ first: value ?? '' }))
  }, [dispatch])

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value ?? '' }))
  }, [dispatch])

  const onChangeAge = useCallback((value?: string) => {
    if (value && +value) {
      dispatch(profileActions.updateProfile({ age: Number(value ?? 0) }))
    }
  }, [dispatch])

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value ?? '' }))
  }, [dispatch])

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value ?? '' }))
  }, [dispatch])

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value ?? '' }))
  }, [dispatch])

  const onChangeCurrency = useCallback((value?: Currency) => {
    dispatch(profileActions.updateProfile({ currency: value ?? Currency.RUB }))
  }, [dispatch])

  const onChangeCountry = useCallback((value?: Country) => {
    dispatch(profileActions.updateProfile({ country: value ?? Country.Russia }))
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <ProfilePageHeader />
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          readOnly={readOnly}
          error={error}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
