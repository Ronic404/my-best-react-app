import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'

import { classNames } from 'shared/lib/classNames/classNames'

import styles from './AppLink.module.scss'

type AppLinkTheme = 'primary' | 'secondary' | 'red'

export interface IAppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<IAppLinkProps> = ({
  className,
  children,
  to,
  theme = 'primary'
}) => {
  return (
    <Link className={classNames(styles.appLink, {}, [className, styles[theme]])} to={to}>
      {children}
    </Link>
  )
}
