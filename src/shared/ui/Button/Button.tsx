import { ButtonHTMLAttributes, FC } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import styles from './Button.module.scss'

type ButtonTheme = 'clear' | 'outline' | 'background' | 'backgroundInverted'
type ButtonSize = 'm' | 'l' | 'xl'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
}

export const Button: FC<IButtonProps> = ({
  className,
  children,
  theme,
  square,
  size = 'm',
  ...otherProps
}) => {
  const mods: Record<string, boolean> = {
    [styles.square]: square,
  }

  return (
    <button
      className={classNames(styles.button, mods, [className, styles[theme], styles[size]])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
