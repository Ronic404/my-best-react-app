/* eslint-disable indent */
import { ReactNode } from 'react'

import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'

import { ArticleBlock } from '../../model/types/article'

import styles from './ArticleDetails.module.scss'

export const renderArticleBlock = (block: ArticleBlock): ReactNode => {
  switch (block.type) {
    case 'CODE':
      return <ArticleCodeBlockComponent className={styles.block} block={block} key={block.id} />
    case 'IMAGE':
      return <ArticleImageBlockComponent className={styles.block} block={block} key={block.id} />
    case 'TEXT':
      return <ArticleTextBlockComponent className={styles.block} block={block} key={block.id} />
    default:
      return null
  }
}
