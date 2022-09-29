import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { AppLink } from 'shared/ui/AppLink'
import { classNames } from 'shared/lib/classNames/classNames'
import { RoutePaths } from 'shared/config/routeConfig/routeConfig'

import styles from './Navbar.module.scss'

interface INavbarProps {
  className?: string
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={classNames(styles.links)}>
        <AppLink className={classNames(styles.mainLink)} to={RoutePaths.MAIN} theme='secondary'>
          {t('main')}
        </AppLink>
        <AppLink to={RoutePaths.ABOUT} theme='secondary'>
          {t('about')}
        </AppLink>
      </div>
    </div>
  )
}
