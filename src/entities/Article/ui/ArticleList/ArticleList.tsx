import { HTMLAttributeAnchorTarget, memo, ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { List, ListRowProps, WindowScroller } from 'react-virtualized'

import { Text } from 'shared/ui/Text'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import { Article, ArticleViewType } from '../../model/types/article'

import { PAGE_ID } from 'widgets/Page/Page'

import { classNames } from 'shared/lib/classNames/classNames'

import styles from './ArticleList.module.scss'

export interface IArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleViewType
  target?: HTMLAttributeAnchorTarget
  virtualized?: boolean
}

const getSkeletons = (view: ArticleViewType): ReactNode => {
  return new Array(view === 'small' ? 9 : 3)
    .fill(0)
    .map((_, index) => (
      <ArticleListItemSkeleton className={styles.card} view={view} key={index} />
    ))
}

export const ArticleList = memo((props: IArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = 'small',
    target,
    virtualized = true,
  } = props
  const { t } = useTranslation('article')

  const isBig = view === 'big'
  const itemsPerPow = isBig ? 1 : 3
  const rowCount = Math.ceil(articles.length / itemsPerPow)

  const rowRender = ({ index, key, style }: ListRowProps): ReactNode => {
    const items = []
    const fromIndex = index * itemsPerPow
    const toIndex = Math.min(fromIndex + itemsPerPow, articles.length)

    for (let i = fromIndex; i < toIndex; i++) {
      items.push(
        <ArticleListItem
          className={styles.card}
          article={articles[i]}
          view={view}
          target={target}
          key={articles[i].id}
        />,
      )
    }

    return (
      <div className={styles.row} style={style} key={key}>
        {items}
      </div>
    )
  }

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(styles.articleList, {}, [className, styles[view]])}>
        <Text title={t('notFound')} size='L' />
      </div>
    )
  }

  return (
    // @ts-expect-error
    <WindowScroller scrollElement={document.getElementById(PAGE_ID) as Element}>
      {({ height, width, registerChild, onChildScroll, isScrolling, scrollTop }) => (
        <div
          className={classNames(styles.articleList, {}, [className, styles[view]])}
          // @ts-expect-error
          ref={registerChild}
        >
          {virtualized &&
            // @ts-expect-error
            <List
              height={height ?? 700}
              rowCount={rowCount}
              rowHeight={isBig ? 700 : 330}
              rowRenderer={rowRender}
              width={width ? width - 80 : 700}
              autoHeight
              onScroll={onChildScroll}
              isScrolling={isScrolling}
              scrollTop={scrollTop}
            />
          }

          {!virtualized &&
            articles.map((item) => (
              <ArticleListItem
                className={styles.card}
                article={item}
                view={view}
                target={target}
                key={item.id}
              />
            ))
          }

          {isLoading &&
            getSkeletons(view)
          }
        </div>
      )}
    </WindowScroller>
  )
})
