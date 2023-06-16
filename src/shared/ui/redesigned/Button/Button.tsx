import { ButtonHTMLAttributes, memo, ReactNode } from 'react'

import { classNames, Mods } from '@/shared/lib/classNames/classNames'

import styles from './Button.module.scss'

type ButtonVariant = 'clear' | 'outline' | 'filled'
type ButtonColor = 'normal' | 'success' | 'error'
type ButtonSize = 'm' | 'l' | 'xl'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  /**
   * Тема кнопки. Отвечает за визуал (в рамке, без стилей, противоположный теме приложения цвет и тд)
   */
  variant?: ButtonVariant
  /**
   * Цвет кнопки
   */
  color?: ButtonColor
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
  /**
   * Добавляет иконку слева
   */
  addonLeft?: ReactNode
  /**
   * Добавляет иконку справа
   */
  addonRight?: ReactNode
}

export const Button = memo(({
  className,
  children,
  variant = 'outline',
  color = 'normal',
  square,
  size = 'm',
  disabled,
  fullWidth,
  addonLeft,
  addonRight,
  ...otherProps
}: IButtonProps) => {
  const mods: Mods = {
    [styles.square]: square,
    [styles.disabled]: disabled,
    [styles.fullWidth]: fullWidth,
    [styles.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
  }

  return (
    <button
      className={classNames(styles.button, mods, [className, styles[variant], styles[color], styles[size]])}
      disabled={disabled}
      {...otherProps}
    >
      <div className={styles.addonLeft}>{addonLeft}</div>
      {children}
      <div className={styles.addonRight}>{addonRight}</div>
    </button>
  )
})
