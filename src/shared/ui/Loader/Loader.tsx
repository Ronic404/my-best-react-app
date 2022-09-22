import { FC } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import styles from './Loader.module.scss'

interface ILoaderProps {
  className?: string
}

export const Loader: FC<ILoaderProps> = ({ className }) => {
  return (
    <div className={classNames(styles['lds-ellipsis'], {}, [className])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
