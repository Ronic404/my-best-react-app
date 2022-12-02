import { memo } from 'react'

import { classNames, Mods } from 'shared/lib/classNames/classNames'

import styles from './Text.module.scss'

type TextSize = 'S' | 'M' | 'L'
type HeaderTagType = 'h1' | 'h2' | 'h3'

export interface ITextProps {
  className?: string
  title?: string | null
  text?: string | null
  theme?: 'primary' | 'error' | 'inverted'
  align?: 'left' | 'right' | 'center'
  size?: TextSize
  'data-testid'?: string
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
    'data-testid': dataTestId = 'Text',
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
