import { FC } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import styles from './Loader.module.scss'

interface ILoaderProps {
  className?: string
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
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
