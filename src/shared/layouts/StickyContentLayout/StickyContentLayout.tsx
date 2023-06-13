import { ReactElement, memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import styles from './StickyContentLayout.module.scss'

export interface IStickyContentLayoutProps {
  className?: string
  left?: ReactElement
  content: ReactElement
  right?: ReactElement
}

export const StickyContentLayout = memo((props: IStickyContentLayoutProps) => {
  const { className, left, content, right } = props

  return (
    <div className={classNames(styles.stickyContentLayout, {}, [className])}>
      {right && <div className={styles.left}>{left}</div>}
      <div className={styles.content}>{content}</div>
      {left && <div className={styles.right}>{right}</div>}
    </div>
  )
})
