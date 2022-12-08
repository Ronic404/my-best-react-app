import { memo, ReactNode, useCallback, useEffect } from 'react'

import { Portal } from '../Portal'
import { Overlay } from '../Overlay'

import { useTheme } from '@/app/providers/ThemeProvider'

import { classNames } from '@/shared/lib/classNames/classNames'
import { useAnimationLibs } from '@/shared/lib/components/AnimationProvider'

import styles from './Drawer.module.scss'

const height = window.innerHeight - 100

export interface IDrawerProps {
  className?: string
  children: ReactNode
  isOpen?: boolean
  lazy?: boolean
  onClose?: () => void
}

export const DrawerContent = memo((props: IDrawerProps) => {
  const { className, children, isOpen, onClose } = props
  const { theme } = useTheme()
  const { Gesture, Spring } = useAnimationLibs()
  const [{ y }, api] = Spring.useSpring(() => ({ y: height }))

  const openDrawer = useCallback(() => {
    api.start({ y: 0, immediate: false })
  }, [api])

  useEffect(() => {
    if (isOpen) {
      openDrawer()
    }
  }, [isOpen, openDrawer])

  const close = (velocity = 0): void => {
    api.start({
      y: height,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
      onResolve: onClose,
    })
  }

  const bind = Gesture.useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      movement: [, my],
      cancel,
    }) => {
      if (my < -70) cancel()

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close()
        } else {
          openDrawer()
        }
      } else {
        api.start({ y: my, immediate: true })
      }
    },
    {
      from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true,
    },
  )

  const display = y.to((py) => py < height ? 'block' : 'none')

  if (!isOpen) {
    return null
  }

  return (
    <Portal>
      <div className={classNames(styles.drawer, {}, [className, theme, 'app_drawer'])}>
        <Overlay onClick={close} />
        <Spring.a.div
          className={styles.sheet}
          style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
          {...bind()}
        >{children}</Spring.a.div>
      </div>
    </Portal>
  )
})

export const Drawer = memo((props: IDrawerProps) => {
  const { isLoaded } = useAnimationLibs()

  if (!isLoaded) {
    return null
  }

  return <DrawerContent {...props} />
})
