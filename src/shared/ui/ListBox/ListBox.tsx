import { FC, Fragment, ReactNode } from 'react'
import { Listbox as HListBox } from '@headlessui/react'

import { HStack } from '../Stack'
import { Button } from '../Button'

import { classNames } from 'shared/lib/classNames/classNames'
import { DropdownDirection } from 'shared/types/ui'

import styles from './ListBox.module.scss'

interface ListBoxItem {
  value: string
  content: ReactNode
  disabled?: boolean
}

interface ListBoxProps {
  className?: string
  items?: ListBoxItem[]
  label?: string
  value?: string
  defaultValue?: string
  readOnly?: boolean
  direction?: DropdownDirection
  onChange: (value: string) => void
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  'top left': styles.optionsTopLeft,
  'top right': styles.optionsTopRight,
  'bottom left': styles.optionsBottomLeft,
  'bottom right': styles.optionsBottomRight,
}

export const ListBox: FC<ListBoxProps> = (props) => {
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

  const optionsClasses = [mapDirectionClass[direction]]

  return (
    <HStack gap='4'>
      {label &&
        <span>{label + '>'}</span>
      }

      <HListBox
        className={classNames(styles.listBox, {}, [className])}
        as='div'
        value={value}
        disabled={readOnly}
        onChange={onChange}
      >
        <HListBox.Button className={styles.trigger} disabled={readOnly}>
          <Button disabled={readOnly}>{value ?? defaultValue}</Button>
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
                    [styles.active]: active,
                    [styles.disabled]: item.disabled,
                  },
                  [],
                )}>
                  {selected && '!'}&nbsp;
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
