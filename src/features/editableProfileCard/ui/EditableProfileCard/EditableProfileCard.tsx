import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { Text } from 'shared/ui/Text'
import { VStack } from 'shared/ui/Stack'

import { Country } from '../../../../entities/Country'
import { Currency } from '../../../../entities/Currency'
import { ProfileCard } from '../../../../entities/Profile'
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader'

import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { ValidateProfileError } from '../../model/types/editableProfileCardSchema'
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors'
import { profileActions, profileReducer } from '../../model/slice/profileSlice'

import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader'

export interface IEditableProfileCardProps {
  className?: string
  id?: string
}

const reducers: ReducersList = {
  profile: profileReducer,
}

export const EditableProfileCard = memo(({ className, id }: IEditableProfileCardProps) => {
  const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()

  const error = useSelector(getProfileError)
  const formData = useSelector(getProfileForm)
  const readOnly = useSelector(getProfileReadonly)
  const isLoading = useSelector(getProfileIsLoading)
  const validateErrors = useSelector(getProfileValidateErrors)

  const validateErrorTranslates = {
    [ValidateProfileError.INCORRECT_USER_DATA]: t('errorUserData'),
    [ValidateProfileError.INCORRECT_AGE]: t('errorAge'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('errorCountry'),
    [ValidateProfileError.NO_DATA]: t('errorNoData'),
    [ValidateProfileError.SERVER_ERROR]: t('errorServer'),
  }

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id))
    }
  })

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
    if (!value) {
      dispatch(profileActions.updateProfile({ age: 0 }))
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
    <DynamicModuleLoader reducers={reducers}>
      <VStack className={classNames('', {}, [className])} gap='8' max>
        <EditableProfileCardHeader />

        {!!validateErrors.length && validateErrors.map(error => (
          <Text
            theme='error'
            text={validateErrorTranslates[error]}
            key={error}
            data-testid='EditableProfileCard.Error'
          />
        ))}

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
      </VStack>
    </DynamicModuleLoader>
  )
})
