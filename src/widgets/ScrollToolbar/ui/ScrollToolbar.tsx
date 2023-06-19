import { memo } from 'react'

import { VStack } from '@/shared/ui/redesigned/Stack'
import { ScrollToTopButton } from '@/features/scrollToTopButton'

import { classNames } from '@/shared/lib/classNames/classNames'

import styles from './ScrollToolbar.module.scss'

export interface IScrollToolbarProps {
  className?: string
}

export const ScrollToolbar = memo(({ className }: IScrollToolbarProps) => {
  return (
    <VStack
      className={classNames(styles.scrollToolbar, {}, [className])}
      justify='center'
      align='center'
      max
    >
      <ScrollToTopButton />
    </VStack>
  )
})
