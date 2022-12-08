import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Page } from '@/widgets/Page'

import { classNames } from '@/shared/lib/classNames/classNames'

export interface IForbiddenPageProps {
  className?: string
}

const ForbiddenPage = memo(({ className }: IForbiddenPageProps) => {
  const { t } = useTranslation()

  return (
    <Page className={classNames('', {}, [className])}>
      {t('forbidden')}
    </Page>
  )
})

export default ForbiddenPage
