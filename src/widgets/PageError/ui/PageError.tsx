import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Button } from '@/shared/ui/Button'

import styles from './PageError.module.scss'

interface IPageErrorProps {
  className?: string
}

export const PageError: FC<IPageErrorProps> = ({ className }) => {
  const { t } = useTranslation()

  const reloadPage = (): void => {
    location.reload()
  }

  return (
    <div className={classNames(styles.pageError, {}, [className])}>
      <p>{t('wentWrong')}</p>
      <Button onClick={reloadPage}>
        {t('refreshPage')}
      </Button>
    </div>
  )
}
