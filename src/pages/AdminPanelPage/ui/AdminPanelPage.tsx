import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Page } from '@/widgets/Page'

import { classNames } from '@/shared/lib/classNames/classNames'

export interface IAdminPanelPageProps {
  className?: string
}

const AdminPanelPage = memo(({ className }: IAdminPanelPageProps) => {
  const { t } = useTranslation()

  return (
    <Page className={classNames('', {}, [className])}>
      {t('adminPanel')}
    </Page>
  )
})

export default AdminPanelPage
