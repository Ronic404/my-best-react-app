import { HTMLAttributeAnchorTarget, memo } from 'react'
import { Link, LinkProps } from 'react-router-dom'

import { classNames } from '@/shared/lib/classNames/classNames'

import styles from './AppLink.module.scss'

type AppLinkTheme = 'primary' | 'secondary' | 'red'

export interface IAppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
  target?: HTMLAttributeAnchorTarget
}

export const AppLink = memo(({
  className,
  children,
  to,
  theme = 'primary',
  target,
  ...otherProps
}: IAppLinkProps) => {
  return (
    <Link
      className={classNames(styles.appLink, {}, [className, styles[theme]])}
      to={to}
      target={target}
      { ...otherProps }
    >
      {children}
    </Link>
  )
})
