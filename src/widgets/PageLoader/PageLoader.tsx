import { FC } from 'react'

import { Loader } from 'shared/ui/Loader'
import { classNames } from 'shared/lib/classNames/classNames'

import styles from './PageLoader.module.scss'

interface IPageLoaderProps {
  className?: string
}

export const PageLoader: FC<IPageLoaderProps> = ({ className }) => {
  return (
    <div className={classNames(styles.pageLoader, {}, [className])}>
      <Loader />
    </div>
  )
}
