import { memo, ReactNode } from 'react'

import { Portal } from '../Portal'
import { Overlay } from '../Overlay'

import { useTheme } from 'app/providers/ThemeProvider'

import { classNames, Mods } from 'shared/lib/classNames/classNames'

import styles from './Drawer.module.scss'

export interface IDrawerProps {
  className?: string
  children: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

export const Drawer = memo((props: IDrawerProps) => {
  const { className, children, isOpen, onClose } = props
  const { theme } = useTheme()

  const mods: Mods = {
    [styles.opened]: isOpen,
  }

  return (
    <Portal>
      <div className={classNames(styles.drawer, mods, [className, theme, 'app_drawer'])}>
        <Overlay onClick={onClose}>
          <div className={styles.content}>{children}</div>
        </Overlay>
      </div>
    </Portal>
  )
})
