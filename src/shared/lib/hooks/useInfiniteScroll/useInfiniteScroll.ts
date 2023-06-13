import { MutableRefObject, useEffect } from 'react'

interface UseInfiniteScrollOptions {
  callback?: () => void
  triggerRef: MutableRefObject<HTMLElement>
  wrapperRef?: MutableRefObject<HTMLElement>
}

export function useInfiniteScroll(props: UseInfiniteScrollOptions): void {
  const { callback, triggerRef, wrapperRef } = props

  useEffect(() => {
    let observer: IntersectionObserver
    const wrapperElement = wrapperRef?.current ?? null
    const triggerElement = triggerRef.current

    if (callback) {
      const options = {
        root: wrapperElement,
        rootMargin: '0px',
        threshold: 1.0,
      }

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback()
        }
      }, options)

      observer.observe(triggerElement)
    }

    return () => {
      if (observer && triggerElement) {
        observer.unobserve(triggerElement)
      }
    }
  }, [callback, triggerRef, wrapperRef])
}
