import { memo, MutableRefObject, ReactNode, useRef } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'

import styles from './Page.module.scss'

export interface IPageProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const Page = memo(({ className, children, onScrollEnd }: IPageProps) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  })

  return (
    <section className={classNames(styles.page, {}, [className])} ref={wrapperRef}>
      {children}
      <div ref={triggerRef} />
    </section>
  )
})
