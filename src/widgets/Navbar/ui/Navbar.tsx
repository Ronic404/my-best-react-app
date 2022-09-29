import { FC } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import styles from './Navbar.module.scss'

interface INavbarProps {
  className?: string
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={classNames(styles.links)}>
      </div>
    </div>
  )
}
