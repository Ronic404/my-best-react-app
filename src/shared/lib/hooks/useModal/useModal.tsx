import { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react'

interface IUseModalReturn {
  isClosing: boolean
  isMounted: boolean
  close: () => void
}

interface IUseModalProps {
  isOpen?: boolean
  animationDelay: number
  onClose?: () => void
}

/**
 * Переиспользуемый хук для модальных компонентов (drawer/modal)
 * @param isOpen
 * @param animationDelay
 * @param onClose
 * @returns
 */

export function useModal(props: IUseModalProps): IUseModalReturn {
  const { isOpen, animationDelay, onClose } = props
  const [isClosing, setIsClosing] = useState<boolean>(false)
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>

  const close = useCallback((): void => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, animationDelay)
    }
  }, [animationDelay, onClose])

  const handleKeydownEscape = useCallback((event: { key: string }): void => {
    if (event.key === 'Escape') {
      close()
    }
  }, [close])

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

  return {
    isClosing,
    isMounted,
    close,
  }
}
