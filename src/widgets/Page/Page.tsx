import { memo, MutableRefObject, ReactNode, UIEvent, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { StateSchema } from 'app/providers/StoreProvider'
import { getUIScrollByPath, uiActions } from 'features/UI'

import { classNames } from 'shared/lib/classNames/classNames'
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'

import styles from './Page.module.scss'

export interface IPageProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const Page = memo(({ className, children, onScrollEnd }: IPageProps) => {
  const location = useLocation()
  const dispatch = useAppDispatch()
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
  const scrollPosition = useSelector((state: StateSchema) => getUIScrollByPath(state, location.pathname))

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  })

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition
  })

  const onScroll = useThrottle((e: UIEvent<HTMLElement>): void => {
    dispatch(uiActions.setScrollPosition({
      path: location.pathname,
      position: e.currentTarget.scrollTop,
    }))
  }, 500)

  return (
    <section
      className={classNames(styles.page, {}, [className])}
      ref={wrapperRef}
      onScroll={onScroll}
    >
      {children}
      {onScrollEnd &&
        <div className={styles.trigger} ref={triggerRef} />
      }
    </section>
  )
})
