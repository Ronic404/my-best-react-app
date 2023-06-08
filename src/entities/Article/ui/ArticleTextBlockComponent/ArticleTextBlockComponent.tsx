import { memo } from 'react'

import { ArticleTextBlock } from '../..//model/types/article'

import { Text } from '@/shared/ui/deprecated/Text'
import { classNames } from '@/shared/lib/classNames/classNames'

import styles from './ArticleTextBlockComponent.module.scss'

export interface IArticleTextBlockComponentProps {
  className?: string
  block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo((props: IArticleTextBlockComponentProps) => {
  const { className, block } = props

  return (
    <div className={classNames(styles.articleTextBlockComponent, {}, [className])}>
      {block.title &&
        <Text className={styles.title} title={block.title} />
      }
      {block.paragraphs.map(paragraph => (
        <Text className={styles.paragraph} key={paragraph} text={paragraph} />
      ))}
    </div>
  )
})
