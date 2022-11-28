import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Page } from 'widgets/Page'

const MainPage: FC = () => {
  const { t } = useTranslation()

  return (
    <Page>
      {t('main')}
    </Page>
  )
}

export default MainPage
