import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Page } from '@/widgets/Page'
// import { Counter } from '@/entities/Counter'

const MainPage: FC = () => {
  const { t } = useTranslation()

  return (
    <Page data-testid='MainPage'>
      {/* <Counter /> */}
      {t('main')}
    </Page>
  )
}

export default MainPage
