import { BugButton } from 'app/providers/ErrorBoundary'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

const MainPage: FC = () => {
  const { t } = useTranslation()

  return (
    <div>
      <BugButton />
      {t('main')}
    </div>
  )
}

export default MainPage
