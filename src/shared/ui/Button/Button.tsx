import { ButtonHTMLAttributes, FC } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import styles from './Button.module.scss'

type ButtonTheme = 'clear' | 'outline' | 'background' | 'backgroundInverted' | 'clearInverted'
type ButtonSize = 'm' | 'l' | 'xl'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
  disabled?: boolean
}

export const Button: FC<IButtonProps> = ({
  className,
  children,
  theme,
  square,
  size = 'm',
  disabled,
  ...otherProps
}) => {
  const mods: Record<string, boolean> = {
    [styles.square]: square,
    [styles.disabled]: disabled
  }

  return (
    <button
      className={classNames(styles.button, mods, [className, styles[theme], styles[size]])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  )
}
