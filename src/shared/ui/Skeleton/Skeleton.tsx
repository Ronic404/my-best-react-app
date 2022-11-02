import { CSSProperties, memo } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import styles from './Skeleton.module.scss'

export interface ISkeletonProps {
  className?: string
  height?: string | number
  width?: string | number
  border?: string
}

export const Skeleton = memo((props: ISkeletonProps) => {
  const { className, height, width, border } = props

  const inlineStyles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  }

  return (
    <div
      className={classNames(styles.skeleton, {}, [className])}
      style={inlineStyles}
    >

    </div>
  )
})
