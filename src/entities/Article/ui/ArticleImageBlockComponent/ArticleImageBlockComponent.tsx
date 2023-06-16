import { memo } from 'react'

import { Text } from '@/shared/ui/redesigned/Text'
import { ToggleFeatures } from '@/shared/lib/features'
import { ArticleImageBlock } from '../../model/types/article'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'

import { classNames } from '@/shared/lib/classNames/classNames'

import styles from './ArticleImageBlockComponent.module.scss'

export interface IArticleImageBlockComponentProps {
  className?: string
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo((props: IArticleImageBlockComponentProps) => {
  const { className, block } = props

  return (
    <div className={classNames(styles.___, {}, [className])}>
      <img className={styles.img} src={block.src} alt={block.title} />
      {block.title &&
        <ToggleFeatures
          feature='isAppRedesigned'
          on={<Text text={block.title} align='center' />}
          off={<TextDeprecated text={block.title} align='center' />}
        />
      }
    </div>
  )
})
