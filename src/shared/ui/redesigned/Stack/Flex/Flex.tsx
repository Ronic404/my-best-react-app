import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react'

import { classNames, Mods } from '@/shared/lib/classNames/classNames'

import styles from './Flex.module.scss'

export type FlexJustify = 'start' | 'center' | 'end' | 'between'
export type FlexAlign = 'start' | 'center' | 'end'
export type FlexDirection = 'row' | 'column'
export type FlexWrap = 'nowrap' | 'wrap'
export type FlexGap = '4' | '8' | '16' | '24' | '32'

const justifyClasses: Record<FlexJustify, string> = {
  start: styles.justifyStart,
  center: styles.justifyCenter,
  end: styles.justifyEnd,
  between: styles.justifyBetween,
}

const alignClasses: Record<FlexAlign, string> = {
  start: styles.alignStart,
  center: styles.alignCenter,
  end: styles.alignEnd,
}

const directionClasses: Record<FlexDirection, string> = {
  row: styles.directionRow,
  column: styles.directionColumn,
}

const gapClasses: Record<FlexGap, string> = {
  4: styles.gap4,
  8: styles.gap8,
  16: styles.gap16,
  24: styles.gap24,
  32: styles.gap32,
}

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export interface IFlexProps extends DivProps {
  className?: string
  children: ReactNode
  justify?: FlexJustify
  align?: FlexAlign
  direction: FlexDirection
  wrap?: FlexWrap
  gap?: FlexGap
  max?: boolean
}

export const Flex: FC<IFlexProps> = (props) => {
  const {
    className,
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    wrap = 'nowrap',
    gap,
    max,
    ...otherProps
  } = props

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    styles[wrap],
    gap && gapClasses[gap],
  ]

  const mods: Mods = {
    [styles.max]: max,
  }

  return (
    <div className={classNames(styles.flex, mods, classes)} { ...otherProps }>
      {children}
    </div>
  )
}
