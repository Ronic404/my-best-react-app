import { memo } from 'react'

import { ArticleCodeBlock } from '../../model/types/article'

import { Code } from 'shared/ui/Code'
import { classNames } from 'shared/lib/classNames/classNames'

import styles from './ArticleCodeBlockComponent.module.scss'

export interface IArticleCodeBlockComponentProps {
  className?: string
  block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo((props: IArticleCodeBlockComponentProps) => {
  const { className, block } = props

  return (
    <div className={classNames(styles.articleCodeBlockComponent, {}, [className])}>
      <Code text={block.code} />
    </div>
  )
})
