import { HTMLAttributeAnchorTarget, memo } from 'react'
import { LinkProps, NavLink } from 'react-router-dom'

import { classNames } from '@/shared/lib/classNames/classNames'

import styles from './AppLink.module.scss'

type AppLinkVariant = 'primary' | 'red'

export interface IAppLinkProps extends LinkProps {
  className?: string
  variant?: AppLinkVariant
  target?: HTMLAttributeAnchorTarget
  activeClassName?: string
}

export const AppLink = memo(({
  className,
  children,
  to,
  variant = 'primary',
  target,
  activeClassName = '',
  ...otherProps
}: IAppLinkProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        classNames(styles.appLink, { [activeClassName]: isActive }, [className, styles[variant]])
      }
      to={to}
      target={target}
      end
      { ...otherProps }
    >
      {children}
    </NavLink>
  )
})
