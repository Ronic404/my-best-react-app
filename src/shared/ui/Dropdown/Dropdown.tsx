import { FC, Fragment, ReactElement, ReactNode } from 'react'
import { Menu } from '@headlessui/react'

import { AppLink } from '../AppLink'

import { classNames } from 'shared/lib/classNames/classNames'
import { DropdownDirection } from 'shared/types/ui'

import styles from './Dropdown.module.scss'

export interface DropdownItem {
  disabled?: boolean
  content?: ReactNode
  onClick?: () => void
  href?: string
}

interface DropdownProps {
  className?: string
  items: DropdownItem[]
  trigger?: ReactNode
  direction?: DropdownDirection
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  'top left': styles.optionsTopLeft,
  'top right': styles.optionsTopRight,
  'bottom left': styles.optionsBottomLeft,
  'bottom right': styles.optionsBottomRight,
}

export const Dropdown: FC<DropdownProps> = (props) => {
  const { className, items, trigger, direction = 'bottom right' } = props

  const menuClasses = [mapDirectionClass[direction]]

  return (
    <Menu as='div' className={classNames(styles.dropdown, {}, [className])}>
      <Menu.Button className={styles.btn}>
        {trigger}
      </Menu.Button>

      <Menu.Items className={classNames(styles.menu, {}, menuClasses)}>
        {items.map((item, index) => {
          const content = ({ active }: { active: boolean }): ReactElement => (
            <button
              className={classNames(styles.item, { [styles.active]: active }, [])}
              type='button'
              disabled={item.disabled}
              onClick={item.onClick}
            >{item.content}</button>
          )

          if (item.href) {
            return (
              <Menu.Item as={AppLink} to={item.href} disabled={item.disabled} key={index}>
                {content}
              </Menu.Item>
            )
          }

          return (
            <Menu.Item as={Fragment} disabled={item.disabled} key={index}>
              {content}
            </Menu.Item>
          )
        })}

      </Menu.Items>
    </Menu>
  )
}
