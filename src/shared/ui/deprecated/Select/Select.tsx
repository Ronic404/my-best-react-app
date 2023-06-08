import { ChangeEvent, ReactElement, useMemo } from 'react'

import { classNames, Mods } from '@/shared/lib/classNames/classNames'

import styles from './Select.module.scss'

export interface SelectOption<T extends string> {
  value: T
  content: string
}

export interface ISelectProps<T extends string> {
  className?: string
  label?: string | null
  options?: Array<SelectOption<T>>
  value?: T
  readOnly?: boolean
  onChange?: (value: T) => void
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Select = <T extends string>(props: ISelectProps<T>): ReactElement => {
  const { className, label, options, value, readOnly, onChange } = props

  const mods: Mods = {}

  const optionsList = useMemo(() => {
    return options?.map(el => (
      <option className={styles.option} value={el.value} key={el.value}>
        {el.content}
      </option>
    ))
  }, [options])

  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>): void => {
    onChange?.(event.target.value as T)
  }

  return (
    <div className={classNames(styles.wrapper, mods, [className])}>
      {label &&
        <span className={styles.label}>
          {label + '>'}
        </span>
      }
      <select
        className={styles.select}
        value={value}
        disabled={readOnly}
        onChange={onChangeHandler}
      >
        {optionsList}
      </select>
    </div>
  )
}
