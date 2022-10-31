import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'

import styles from './ArticlesPage.module.scss'

export interface IArticlesPageProps {
  className?: string
}

const ArticlesPage: FC<IArticlesPageProps> = ({ className }) => {
  const { t } = useTranslation('articles')

  return (
    <div className={classNames(styles.___, {}, [className])}>
      Article page
    </div>
  )
}

export default memo(ArticlesPage)
