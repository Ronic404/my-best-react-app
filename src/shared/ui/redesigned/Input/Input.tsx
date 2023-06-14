import { ChangeEvent, InputHTMLAttributes, memo, ReactNode, useEffect, useRef, useState } from 'react'

import { Text } from '../../redesigned/Text'
import { HStack } from '../Stack'

import { classNames, Mods } from '@/shared/lib/classNames/classNames'

import styles from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'placeholder' | 'size'>

type InputSize = 's' | 'm' | 'l'

export interface IInputProps extends HTMLInputProps {
  className?: string
  label?: string | null
  placeholder?: string | null
  addonLeft?: ReactNode
  addonRight?: ReactNode
  size?: InputSize
  onChange?: (value: string) => void
}

export const Input = memo((props: IInputProps) => {
  const {
    className,
    value,
    label,
    type = 'text',
    placeholder,
    autoFocus,
    readOnly,
    addonLeft,
    addonRight,
    size = 'm',
    onChange,
    ...otherProps
  } = props

  const [isFocused, setIsfocused] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (autoFocus) {
      setIsfocused(true)
      inputRef.current?.focus()
    }
  }, [autoFocus])

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange?.(event.target.value)
  }

  const onBlur = (): void => {
    setIsfocused(false)
  }

  const onFocus = (): void => {
    setIsfocused(true)
  }

  const mods: Mods = {
    [styles.readonly]: readOnly,
    [styles.focused]: isFocused,
    [styles.withAddonLeft]: Boolean(addonLeft),
    [styles.withAddonRight]: Boolean(addonRight),
  }

  return (
    <HStack gap='8' max>
      {label && <Text text={label} />}

      <div className={classNames(styles.inputWrapper, mods, [className, styles[size]])}>
        <div className={styles.addonLeft}>{addonLeft}</div>

        <input
          ref={inputRef}
          className={styles.input}
          type={type}
          value={value}
          placeholder={placeholder ?? ''}
          readOnly={readOnly}
          onChange={handleChangeInput}
          onBlur={onBlur}
          onFocus={onFocus}
          {...otherProps}
        />

        <div className={styles.addonRight}>{addonRight}</div>
      </div>
    </HStack>
  )
})
