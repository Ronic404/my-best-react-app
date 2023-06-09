import React, { memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import styles from './Icon.module.scss'

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>

export interface IIconBaseProps extends SvgProps {
  className?: string
  Svg: React.FC<React.SVGProps<SVGSVGElement>>
}

export interface IIconNoClickableProps extends IIconBaseProps {
  clickable?: false
}

export interface IIconClickableProps extends IIconBaseProps {
  clickable?: true
  onClick: () => void
}

type IconProps = IIconNoClickableProps | IIconClickableProps

export const Icon = memo((props: IconProps) => {
  const { className, Svg, width = 32, height = 32, clickable, ...otherProps } = props

  const icon = (
    <Svg
      className={classNames(styles.icon, {}, [className])}
      width={width}
      height={height}
      {...otherProps}
      onClick={undefined}
    />
  )

  if (clickable) {
    return (
      <button style={{ width, height }} className={styles.button} type='button' onClick={props.onClick}>
        {icon}
      </button>
    )
  }

  return icon
})
