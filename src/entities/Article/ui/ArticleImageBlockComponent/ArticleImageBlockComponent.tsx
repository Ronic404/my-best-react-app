import { memo } from 'react'

import { Text } from '@/shared/ui/Text'
import { ArticleImageBlock } from '../../model/types/article'
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
        <Text text={block.title} align='center' />
      }
    </div>
  )
})
