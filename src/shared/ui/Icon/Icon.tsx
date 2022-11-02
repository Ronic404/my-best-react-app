import React, { memo } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import styles from './Icon.module.scss'

export interface IIconProps {
  className?: string
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const Icon = memo(({ className, Svg }: IIconProps) => {
  return (
    <Svg className={classNames(styles.icon, {}, [className])} />
  )
})
