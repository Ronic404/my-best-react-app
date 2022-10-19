import { FC, useEffect } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader'
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

import { fetchProfileData, ProfileCard, profileReducer } from '../../../entities/Profile'

export interface IProfilePageProps {
  className?: string
}

const reducers: ReducersList = {
  profile: profileReducer,
}

const ProfilePage: FC<IProfilePageProps> = ({ className }) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
