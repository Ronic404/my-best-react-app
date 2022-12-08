import React, { memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import styles from './Icon.module.scss'

export interface IIconProps {
  className?: string
  Svg: React.FC<React.SVGProps<SVGSVGElement>>
  inverted?: boolean
}

export const Icon = memo(({ className, Svg, inverted }: IIconProps) => {
  return (
    <Svg className={classNames(styles.icon, { [styles.inverted]: inverted }, [className])} />
  )
})
