import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { ArticleList } from '../../../../entities/Article'

import { classNames } from 'shared/lib/classNames/classNames'

import styles from './ArticlesPage.module.scss'

export interface IArticlesPageProps {
  className?: string
}

const ArticlesPage: FC<IArticlesPageProps> = ({ className }) => {
  const { t } = useTranslation('articles')

  return (
    <div className={classNames(styles.articlesPage, {}, [className])}>
      <ArticleList
        view='big'
        isLoading
        articles={[]}
      />
    </div>
  )
}

export default memo(ArticlesPage)
