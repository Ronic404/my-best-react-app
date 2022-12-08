import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Page } from '@/widgets/Page'

import { classNames } from '@/shared/lib/classNames/classNames'

import styles from './ArticleEditPage.module.scss'

export interface IArticleEditPageProps {
  className?: string
}

const ArticleEditPage = memo(({ className }: IArticleEditPageProps) => {
  const { t } = useTranslation('article')
  const { id } = useParams<{ id: string }>()

  const isEdit = Boolean(id)

  return (
    <Page className={classNames(styles.___, {}, [className])}>
      {isEdit && id
        ? `${t('editArticleWithId')} ${id}`
        : t('createArticle')
      }
    </Page>
  )
})

export default ArticleEditPage
