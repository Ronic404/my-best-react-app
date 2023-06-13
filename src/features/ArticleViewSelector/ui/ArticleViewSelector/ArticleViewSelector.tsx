import { memo } from 'react'

import { Card } from '@/shared/ui/redesigned/Card'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon'
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button'
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features'

import { classNames } from '@/shared/lib/classNames/classNames'
import { ArticleViewType } from '@/entities/Article'

import ListIcon from '@/shared/assets/icons/burger.svg'
import TiledIcon from '@/shared/assets/icons/tile.svg'
import ListIconDeprecated from '@/shared/assets/icons/list-24-24.svg'
import TiledIconDeprecated from '@/shared/assets/icons/tiled-24-24.svg'

import styles from './ArticleViewSelector.module.scss'

export interface IArticleViewSelectorProps {
  className?: string
  view: ArticleViewType
  onViewClick?: (view: ArticleViewType) => void
}

interface IViewTypes {
  view: ArticleViewType
  icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}

const viewTypes: IViewTypes[] = [
  {
    view: 'small',
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => TiledIcon,
      off: () => TiledIconDeprecated,
    }),
  },
  {
    view: 'big',
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => ListIcon,
      off: () => ListIconDeprecated,
    }),
  },
]

export const ArticleViewSelector = memo((props: IArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props

  const onClick = (view: ArticleViewType) => () => {
    onViewClick?.(view)
  }

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <Card className={classNames(styles.articleViewSelectorRedesigned, {}, [className])} border='round'>
          <HStack gap='8'>
            {viewTypes.map(viewType => (
              <Icon
                className={classNames('', { [styles.notSelected]: viewType.view !== view })}
                Svg={viewType.icon}
                clickable
                onClick={onClick(viewType.view)}
                key={viewType.view}
              />
            ))}
          </HStack>
        </Card>
      }
      off={
        <div className={classNames(styles.articleViewSelector, {}, [className])}>
          {viewTypes.map(viewType => (
            <ButtonDeprecated
              theme='clear'
              onClick={onClick(viewType.view)}
              key={viewType.view}
            >
              <IconDeprecated
                className={classNames('', { [styles.notSelected]: viewType.view !== view })}
                Svg={viewType.icon}
                width={24}
                height={24}
              />
            </ButtonDeprecated>
          ))}
        </div>
      }
    />

  )
})
