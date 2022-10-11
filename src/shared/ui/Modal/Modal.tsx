import { FC, MouseEvent, ReactNode, useCallback, useEffect, useRef, useState } from 'react'

import { Portal } from 'shared/ui/Portal'
import { classNames } from 'shared/lib/classNames/classNames'

import styles from './Modal.module.scss'

export interface IModalProps {
  className?: string
  children: ReactNode
  isOpen: boolean
  lazy?: boolean
  onClose: () => void
}

const ANIMATION_DELAY = 300

export const Modal: FC<IModalProps> = ({ className, children, isOpen, lazy, onClose }) => {
  const [isClosing, setIsClosing] = useState<boolean>(false)
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing,
  }

  const closeModal = useCallback((): void => {
    setIsClosing(true)
    timerRef.current = setTimeout(() => {
      onClose()
      setIsClosing(false)
    }, ANIMATION_DELAY)
  }, [onClose])

  const handleKeydownEscape = useCallback((event: { key: string }): void => {
    if (event.key === 'Escape') {
      closeModal()
    }
  }, [closeModal])

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeydownEscape)
    }
    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', handleKeydownEscape)
    }
  }, [isOpen, handleKeydownEscape])

  const handleClickContent = (event: MouseEvent<HTMLDivElement>): void => {
    event.stopPropagation()
  }

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal>
      <div className={classNames(styles.modal, mods, [className])}>
        <div className={classNames(styles.overlay)} onClick={closeModal}>
          <div className={classNames(styles.content)} onClick={handleClickContent}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
