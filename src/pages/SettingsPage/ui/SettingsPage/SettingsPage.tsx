import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Text } from '@/shared/ui/redesigned/Text'
import { VStack } from '@/shared/ui/redesigned/Stack'

import { Page } from '@/widgets/Page'
import { UiDesignSwitcher } from '@/features/uiDesignSwitcher'

interface ISettingsPageProps {
  className?: string
}

const SettingsPage = memo((props: ISettingsPageProps) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <Page>
      <VStack gap='16'>
        <Text title={t('settings')} />
        <UiDesignSwitcher />
      </VStack>
    </Page>
  )
})

export default SettingsPage
