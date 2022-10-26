import { memo } from 'react'

import { classNames, Mods } from 'shared/lib/classNames/classNames'

import styles from './Text.module.scss'

export interface ITextProps {
  className?: string
  title?: string
  text?: string
  theme?: 'primary' | 'error'
  align?: 'left' | 'right' | 'center'
}

export const Text = memo((props: ITextProps) => {
  const { className, title, text, theme = 'primary', align = 'left' } = props

  const mods: Mods = {
    [styles[theme]]: true,
    [styles[align]]: true,
  }

  return (
    <div className={classNames(styles.text, mods, [className])}>
      {title &&
        <p className={styles.title}>{title}</p>
      }
      {text &&
        <p className={styles.text}>{text}</p>
      }
    </div>
  )
})
