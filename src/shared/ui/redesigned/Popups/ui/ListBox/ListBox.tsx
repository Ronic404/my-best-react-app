import { Fragment, ReactNode, useMemo } from 'react'
import { Listbox as HListBox } from '@headlessui/react'

import { HStack } from '../../../../redesigned/Stack'
import { Button } from '../../../Button'

import { classNames } from '@/shared/lib/classNames/classNames'
import { DropdownDirection } from '@/shared/types/ui'
import { mapDirectionClass } from '../../styles/consts'

import styles from './ListBox.module.scss'
import popupStyles from '../../styles/popup.module.scss'

interface ListBoxItem<T extends string> {
  value: T
  content: ReactNode
  disabled?: boolean
}

interface ListBoxProps<T extends string> {
  className?: string
  items?: Array<ListBoxItem<T>>
  label?: string | null
  value?: T
  defaultValue?: string | null
  readOnly?: boolean
  direction?: DropdownDirection
  onChange: (value: T) => void
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function ListBox<T extends string>(props: ListBoxProps<T>) {
  const {
    className,
    items,
    label,
    value,
    defaultValue,
    readOnly,
    direction = 'bottom right',
    onChange,
  } = props

  const optionsClasses = [mapDirectionClass[direction], popupStyles.menu]

  const selectedItem = useMemo(() => {
    return items?.find(item => item.value === value)
  }, [items, value])

  return (
    <HStack gap='4'>
      {label &&
        <span>{label + '>'}</span>
      }

      <HListBox
        className={classNames(styles.listBox, {}, [className, popupStyles.popup])}
        as='div'
        value={value}
        disabled={readOnly}
        onChange={onChange}
      >
        <HListBox.Button className={styles.trigger} as='div'>
          <Button variant='filled' disabled={readOnly}>{selectedItem?.content ?? defaultValue}</Button>
        </HListBox.Button>

        <HListBox.Options className={classNames(styles.options, {}, optionsClasses)}>
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li className={classNames(
                  styles.item,
                  {
                    [popupStyles.active]: active,
                    [popupStyles.disabled]: item.disabled,
                    [popupStyles.selected]: selected,
                  },
                  [],
                )}>
                  {selected}&nbsp;
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  )
}
