import { memo } from 'react'

import { classNames, Mods } from 'shared/lib/classNames/classNames'

import styles from './Text.module.scss'

type TextSize = 'S' | 'M' | 'L'
type HeaderTagType = 'h1' | 'h2' | 'h3'

export interface ITextProps {
  className?: string
  title?: string
  text?: string
  theme?: 'primary' | 'error' | 'inverted'
  align?: 'left' | 'right' | 'center'
  size?: TextSize
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
    theme = 'primary',
    align = 'left',
    size = 'M',
  } = props

  const HeaderTag = mapSizeToHeaderTag[size]

  const mods: Mods = {
    [styles[theme]]: true,
    [styles[align]]: true,
    [styles[size]]: true,
  }

  return (
    <div className={classNames(styles.text, mods, [className])}>
      {title &&
        <HeaderTag className={styles.title}>{title}</HeaderTag>
      }
      {text &&
        <p className={styles.text}>{text}</p>
      }
    </div>
  )
})
