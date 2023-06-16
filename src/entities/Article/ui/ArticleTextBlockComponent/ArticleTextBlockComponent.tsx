import { memo } from 'react'

import { Text } from '@/shared/ui/redesigned/Text'
import { ToggleFeatures } from '@/shared/lib/features'
import { ArticleTextBlock } from '../../model/types/article'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'

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
        <ToggleFeatures
          feature='isAppRedesigned'
          on={<Text className={styles.title} title={block.title} />}
          off={<TextDeprecated className={styles.title} title={block.title} />}
        />
      }
      {block.paragraphs.map(paragraph => (
        <ToggleFeatures
          feature='isAppRedesigned'
          on={<Text className={styles.paragraph} key={paragraph} text={paragraph} />}
          off={<TextDeprecated className={styles.paragraph} key={paragraph} text={paragraph} />}
          key={paragraph}
        />
      ))}
    </div>
  )
})
