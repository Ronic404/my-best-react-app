import { memo } from 'react'

import { Icon } from '@/shared/ui/redesigned/Icon'

import { classNames } from '@/shared/lib/classNames/classNames'

import CircleIcon from '@/shared/assets/icons/circle-up.svg'

import styles from './ScrollToTopButton.module.scss'

export interface IScrollToTopButtonProps {
  className?: string
}

export const ScrollToTopButton = memo(({ className }: IScrollToTopButtonProps) => {
  const onClick = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Icon
      className={classNames(styles.___, {}, [className])}
      Svg={CircleIcon}
      width={32}
      height={32}
      clickable
      onClick={onClick}
    />
  )
})
