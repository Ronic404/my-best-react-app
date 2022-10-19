import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import styles from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>

export interface IInputProps extends HTMLInputProps {
  className?: string
  onChange?: (value: string) => void
}

export const Input = memo((props: IInputProps) => {
  const {
    className,
    value,
    type = 'text',
    placeholder,
    autoFocus,
    onChange,
    ...otherProps
  } = props

  const [isFocused, setIsfocused] = useState<boolean>(false)
  const [caretPosition, setCaretPosition] = useState<number>(0)
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (autoFocus) {
      setIsfocused(true)
      inputRef.current?.focus()
    }
  }, [autoFocus])

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value
    onChange?.(value)
    setCaretPosition(value.length)
  }

  const onBlur = (): void => {
    setIsfocused(false)
  }

  const onFocus = (): void => {
    setIsfocused(true)
  }

  const onSelect = (event: any): void => {
    setCaretPosition(event.target.selectionStart || 0)
  }

  return (
    <div className={classNames(styles.inputWrapper, {}, [className])}>
      {placeholder &&
        <div className={styles.placeholder}>
          {`${placeholder}>`}
        </div>
      }
      <div className={styles.caretWrapper}>
        <input
          ref={inputRef}
          className={styles.input}
          type={type}
          value={value}
          onChange={handleChangeInput}
          onBlur={onBlur}
          onFocus={onFocus}
          onSelect={onSelect}
          {...otherProps}
        />
        {isFocused &&
          <span
            className={styles.caret}
            style={{ left: `${caretPosition * 8.3}px` }}
          />
        }
      </div>
    </div>
  )
})
