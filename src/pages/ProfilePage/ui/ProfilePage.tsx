import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader'
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

import { profileReducer } from '../../../entities/Profile'

export interface IProfilePageProps {
  className?: string
}

const reducers: ReducersList = {
  profile: profileReducer,
}

const ProfilePage: FC<IProfilePageProps> = ({ className }) => {
  const { t } = useTranslation()

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        {t('profile')}
      </div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
