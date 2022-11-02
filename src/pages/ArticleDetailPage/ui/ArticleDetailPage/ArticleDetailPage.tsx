import { FC, memo } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'

import { ArticleDetails } from '../../../../entities/Article'

import styles from './ArticleDetailPage.module.scss'

export interface IArticleDetailPageProps {
  className?: string
}

const ArticleDetailPage: FC<IArticleDetailPageProps> = ({ className }) => {
  const { t } = useTranslation('article')
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return (
      <div className={classNames(styles.___, {}, [className])}>
        {t('articleNotFound')}
      </div>
    )
  }

  return (
    <div className={classNames(styles.___, {}, [className])}>
      <ArticleDetails id={id} />
    </div>
  )
}

export default memo(ArticleDetailPage)
