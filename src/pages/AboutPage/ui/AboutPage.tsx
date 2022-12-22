import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Page } from '@/widgets/Page'

const AboutPage: FC = () => {
  const { t } = useTranslation('about')

  return (
    <Page data-testid='AboutPage'>
      <h1>{t('about')}</h1>
    </Page>
  )
}

export default AboutPage
