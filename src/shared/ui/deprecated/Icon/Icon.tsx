import React, { memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import styles from './Icon.module.scss'

export interface IIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string
  Svg: React.FC<React.SVGProps<SVGSVGElement>>
  inverted?: boolean
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Icon = memo(({ className, Svg, inverted, ...otherProps }: IIconProps) => {
  return (
    <Svg
      className={classNames(styles.icon, { [styles.inverted]: inverted }, [className])}
      {...otherProps}
    />
  )
})
