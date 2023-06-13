import { memo, MutableRefObject, ReactNode, UIEvent, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { StateSchema } from '@/app/providers/StoreProvider'
import { getUIScrollByPath, uiActions } from '@/features/UI'

import { ITestProps } from '@/shared/types/tests'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle'
import { toggleFeatures } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'

import styles from './Page.module.scss'

export interface IPageProps extends ITestProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const PAGE_ID = 'PAGE_ID'

export const Page = memo((props: IPageProps) => {
  const { className, children, onScrollEnd } = props
  const location = useLocation()
  const dispatch = useAppDispatch()
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
  const scrollPosition = useSelector((state: StateSchema) => getUIScrollByPath(state, location.pathname))

  useInfiniteScroll({
    triggerRef,
    wrapperRef: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => undefined,
      off: () => wrapperRef,
    }),
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
    <main
      className={classNames(
        toggleFeatures({
          name: 'isAppRedesigned',
          on: () => styles.pageRedesigned,
          off: () => styles.page,
        }),
        {},
        [className],
      )}
      ref={wrapperRef}
      onScroll={onScroll}
      id={PAGE_ID}
      data-testid={props['data-testid'] ?? 'Page'}
    >
      {children}
      {onScrollEnd &&
        <div className={styles.trigger} ref={triggerRef} />
      }
    </main>
  )
})
