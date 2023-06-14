import { memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import styles from './Text.module.scss'

type TextSize = 'S' | 'M' | 'L'
type HeaderTagType = 'h1' | 'h2' | 'h3'

export interface ITextProps {
  className?: string
  title?: string | null
  text?: string | null
  variant?: 'primary' | 'error' | 'accent'
  align?: 'left' | 'right' | 'center'
  size?: TextSize
  bold?: boolean
  'data-testid'?: string
}

const mapSizeToClass: Record<TextSize, string> = {
  S: 's',
  M: 'm',
  L: 'l',
}

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  S: 'h3',
  M: 'h2',
  L: 'h1',
}

export const Text = memo((props: ITextProps) => {
  const {
    className,
    title,
    text,
    variant = 'primary',
    align = 'left',
    size = 'M',
    bold,
    'data-testid': dataTestId = 'Text',
  } = props

  const HeaderTag = mapSizeToHeaderTag[size]
  const sizeClass = mapSizeToClass[size]

  return (
    <div className={classNames(styles.text, { [styles.bold]: bold }, [className, styles[variant], styles[align], sizeClass])}>
      {title &&
        <HeaderTag
          className={styles.title}
          data-testid={`${dataTestId}.Header`}
        >{title}</HeaderTag>
      }
      {text &&
        <p
          className={styles.text}
          data-testid={`${dataTestId}.Paragraph`}
        >{text}</p>
      }
    </div>
  )
})
