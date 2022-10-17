import { memo } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import styles from './Text.module.scss'

export interface ITextProps {
  className?: string
  title?: string
  text?: string
  theme?: 'primary' | 'error'
}

export const Text = memo(({ className, title, text, theme = 'primary' }: ITextProps) => {
  return (
    <div className={classNames(styles.text, { [styles[theme]]: true }, [className])}>
      {title &&
        <p className={styles.title}>{title}</p>
      }
      {text &&
        <p className={styles.text}>{text}</p>
      }
    </div>
  )
})
