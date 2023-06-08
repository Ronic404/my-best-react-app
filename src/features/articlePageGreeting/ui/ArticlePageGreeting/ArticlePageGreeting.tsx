import { memo, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { isMobile } from 'react-device-detect'

import { Text } from '@/shared/ui/deprecated/Text'
import { Modal } from '@/shared/ui/deprecated/Modal'

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { saveJsonSettings, useJsonSettings } from '@/entities/User'
import { Drawer } from '@/shared/ui/deprecated/Drawer'

export const ArticlePageGreeting = memo(() => {
  const { t } = useTranslation('article')
  const dispatch = useAppDispatch()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { isArticlePageWasOpened } = useJsonSettings()

  useEffect(() => {
    if (!isArticlePageWasOpened) {
      setIsOpen(true)
      dispatch(saveJsonSettings({ isArticlePageWasOpened: true }))
    }
  }, [dispatch, isArticlePageWasOpened])

  const text = <Text title={t('welcome')} text={t('browseTopics')} />

  if (isMobile) {
    return (
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} lazy>
        {text}
      </Drawer>
    )
  }

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} lazy>
      {text}
    </Modal>
  )
})
