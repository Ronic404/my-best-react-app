import { memo, ReactNode } from 'react'
import { Popover as HPopover } from '@headlessui/react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { DropdownDirection } from '@/shared/types/ui'
import { mapDirectionClass } from '../../styles/consts'

import styles from './Popover.module.scss'
import popupStyles from '../../styles/popup.module.scss'

export interface IPopoverProps {
  children: ReactNode
  className?: string
  trigger?: ReactNode
  direction?: DropdownDirection
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Popover = memo((props: IPopoverProps) => {
  const { children, className, trigger, direction = 'bottom right' } = props

  const menuClasses = [mapDirectionClass[direction]]

  return (
    <HPopover className={classNames(styles.popover, {}, [className, popupStyles.popup])}>
      <HPopover.Button className={popupStyles.trigger} as='div'>
        {trigger}
      </HPopover.Button>

      <HPopover.Panel className={classNames(styles.panel, {}, menuClasses)}>
        {children}
      </HPopover.Panel>
    </HPopover>
  )
})
