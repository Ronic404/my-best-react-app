import { ChangeEvent, memo, useMemo } from 'react'

import { classNames, Mods } from 'shared/lib/classNames/classNames'

import styles from './Select.module.scss'

export interface SelectOption {
  value: string
  content: string
}

export interface ISelectProps {
  className?: string
  label?: string
  options?: SelectOption[]
  value?: string
  readOnly?: boolean
  onChange?: (value: string) => void
}

export const Select = memo((props: ISelectProps) => {
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
    onChange?.(event.target.value)
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
})
