import { memo } from 'react'

import { Icon } from 'shared/ui/Icon'
import { Button } from 'shared/ui/Button'

import { ArticleViewType } from '../../model/types/article'

import { classNames } from 'shared/lib/classNames/classNames'

import ListIcon from 'shared/assets/icons/list-24-24.svg'
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg'

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
    icon: TiledIcon,
  },
  {
    view: 'big',
    icon: ListIcon,
  },
]

export const ArticleViewSelector = memo((props: IArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props

  const onClick = (view: ArticleViewType) => () => {
    onViewClick?.(view)
  }

  return (
    <div className={classNames(styles.articleViewSelector, {}, [className])}>
      {viewTypes.map(viewType => (
        <Button
          theme='clear'
          onClick={onClick(viewType.view)}
          key={viewType.view}
        >
          <Icon
            className={classNames('', { [styles.notSelected]: viewType.view !== view })}
            Svg={viewType.icon}
          />
        </Button>
      ))}
    </div>
  )
})
