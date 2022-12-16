import { ButtonHTMLAttributes, memo } from 'react'

import { classNames, Mods } from '@/shared/lib/classNames/classNames'

import styles from './Button.module.scss'

type ButtonTheme = 'clear' | 'outline' | 'outline_red' | 'background' | 'backgroundInverted' | 'clearInverted'
type ButtonSize = 'm' | 'l' | 'xl'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  /**
   * Тема кнопки. Отвечает за визуал (в рамке, без стилей, противоположный теме приложения цвет и тд)
   */
  theme?: ButtonTheme
  /**
   * Флаг, делающий кнопку квадратной
   */
  square?: boolean
  /**
   * Размер кнопки в соответствии с дизайн системой
   */
  size?: ButtonSize
  /**
   * Флаг, отвечающий за работу кнопки
   */
  disabled?: boolean
  /**
   * Увеличивает кнопку на всю свободную ширину
   */
  fullWidth?: boolean
}

export const Button = memo(({
  className,
  children,
  theme = 'outline',
  square,
  size = 'm',
  disabled,
  fullWidth,
  ...otherProps
}: IButtonProps) => {
  const mods: Mods = {
    [styles.square]: square,
    [styles.disabled]: disabled,
    [styles.fullWidth]: fullWidth,
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
})
