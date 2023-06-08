import { memo, useState } from 'react'

import { Icon } from '../Icon'

import { classNames } from '@/shared/lib/classNames/classNames'

import StarIcon from '@/shared/assets/icons/star.svg'

import styles from './StarRating.module.scss'

const stars = [1, 2, 3, 4, 5]

export interface IStarRatingProps {
  className?: string
  size?: number
  selectedStars?: number
  onSelect?: (starsCount: number) => void
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const StarRating = memo((props: IStarRatingProps) => {
  const {
    className,
    size = 30,
    selectedStars = 0,
    onSelect,
  } = props

  const [isSelected, setIsSelected] = useState<boolean>(Boolean(selectedStars))
  const [currentStarsCount, setCurrentStarsCount] = useState<number>(selectedStars)

  const onHover = (starsCount: number): void => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount)
    }
  }

  const onLeave = (): void => {
    if (!isSelected) {
      setCurrentStarsCount(0)
    }
  }

  const onClick = (starsCount: number): void => {
    if (!isSelected) {
      onSelect?.(starsCount)
      setCurrentStarsCount(starsCount)
      setIsSelected(true)
    }
  }

  return (
    <div className={classNames(styles.___, {}, [className])}>
      {stars.map(starNumber => (
        <Icon
          className={classNames(
            styles.starIcon,
            { [styles.selected]: isSelected },
            [currentStarsCount >= starNumber ? styles.hovered : styles.normal],
          )}
          Svg={StarIcon}
          width={size}
          height={size}
          onClick={() => onClick(starNumber)}
          onMouseEnter={() => onHover(starNumber)}
          onMouseLeave={onLeave}
          key={starNumber}
          data-testid={`StarRating.${starNumber}`}
          data-selected={currentStarsCount >= starNumber}
        />
      ))}
    </div>
  )
})
