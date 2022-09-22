import { FC } from 'react'

import { AppLink } from 'shared/ui/AppLink'
import { classNames } from 'shared/lib/classNames/classNames'
import { RoutePaths } from 'shared/config/routeConfig/routeConfig'

import styles from './Navbar.module.scss'

interface INavbarProps {
  className?: string
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={classNames(styles.links)}>
        <AppLink className={classNames(styles.mainLink)} to={RoutePaths.MAIN} theme='secondary'>
          Главная
        </AppLink>
        <AppLink to={RoutePaths.ABOUT} theme='secondary'>
          О сайте
        </AppLink>
      </div>
    </div>
  )
}
