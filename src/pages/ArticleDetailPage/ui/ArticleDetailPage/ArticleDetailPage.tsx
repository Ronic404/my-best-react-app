import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'

import styles from './ArticleDetailPage.module.scss'

export interface IArticleDetailPageProps {
  className?: string
}

const ArticleDetailPage: FC<IArticleDetailPageProps> = ({ className }) => {
  const { t } = useTranslation('article')

  return (
    <div className={classNames(styles.___, {}, [className])}>
      Article details page
    </div>
  )
}

export default memo(ArticleDetailPage)
