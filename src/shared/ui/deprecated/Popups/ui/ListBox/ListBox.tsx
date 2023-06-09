import { FC, Fragment, ReactNode } from 'react'
import { Listbox as HListBox } from '@headlessui/react'

import { HStack } from '../../../../redesigned/Stack'
import { Button } from '../../../Button'

import { classNames } from '@/shared/lib/classNames/classNames'
import { DropdownDirection } from '@/shared/types/ui'
import { mapDirectionClass } from '../../styles/consts'

import styles from './ListBox.module.scss'
import popupStyles from '../../styles/popup.module.scss'

interface ListBoxItem {
  value: string
  content: ReactNode
  disabled?: boolean
}

interface ListBoxProps {
  className?: string
  items?: ListBoxItem[]
  label?: string | null
  value?: string
  defaultValue?: string | null
  readOnly?: boolean
  direction?: DropdownDirection
  onChange: (value: string) => void
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
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
        className={classNames(styles.listBox, {}, [className, popupStyles.popup])}
        as='div'
        value={value}
        disabled={readOnly}
        onChange={onChange}
      >
        <HListBox.Button className={styles.trigger} as='div'>
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
                    [popupStyles.active]: active,
                    [popupStyles.disabled]: item.disabled,
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
