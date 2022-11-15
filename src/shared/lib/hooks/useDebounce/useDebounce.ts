import { MutableRefObject, useCallback, useRef } from 'react'

export function useDebounce(callback: (...args: any[]) => void, delay: number): () => void {
  const timer = useRef(null) as MutableRefObject<any>

  return useCallback((...args: any[]) => {
    if (timer.current) {
      clearTimeout(timer.current)
    }

    timer.current = setTimeout(() => {
      // eslint-disable-next-line n/no-callback-literal
      callback(...args)
    }, delay)
  }, [callback, delay])
}
