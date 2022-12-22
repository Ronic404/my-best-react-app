import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/classNames/classNames'

import styles from './NotFoundPage.module.scss'

interface INotFoundPageProps {
  className?: string
}

const NotFoundPage: FC<INotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(styles.page, {}, [className])} data-testid='NotFoundPage'>
      { t('notFoundPage') }
    </div>
  )
}

export default NotFoundPage
