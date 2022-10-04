import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { BugButton } from 'app/providers/ErrorBoundary'
import { Counter } from '../../../entities/Counter'

const MainPage: FC = () => {
  const { t } = useTranslation()

  return (
    <div>
      <BugButton />
      <br />
      {t('main')}
      <Counter />
    </div>
  )
}

export default MainPage
