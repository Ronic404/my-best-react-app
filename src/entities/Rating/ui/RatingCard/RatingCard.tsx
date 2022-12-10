import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BrowserView, MobileView } from 'react-device-detect'

import { Text } from '@/shared/ui/Text'
import { Card } from '@/shared/ui/Card'
import { Modal } from '@/shared/ui/Modal'
import { Input } from '@/shared/ui/Input'
import { Drawer } from '@/shared/ui/Drawer'
import { Button } from '@/shared/ui/Button'
import { StarRating } from '@/shared/ui/StarRating'
import { HStack, VStack } from '@/shared/ui/Stack'

import { classNames } from '@/shared/lib/classNames/classNames'

import styles from './RatingCard.module.scss'

export interface IRatingCardProps {
  className?: string
  title?: string
  feedbackTitle?: string
  hasFeedback?: boolean
  onCancel?: (starsCount: number) => void
  onAccept?: (starsCount: number, feedback?: string) => void
}

export const RatingCard = memo((props: IRatingCardProps) => {
  const { className, title, feedbackTitle, hasFeedback, onCancel, onAccept } = props
  const { t } = useTranslation()

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [starsCount, setStarsCount] = useState<number>(0)
  const [feedback, setFeedback] = useState<string>('')

  const onSelectStars = useCallback((selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount)
    if (hasFeedback) {
      setIsModalOpen(true)
    } else {
      onAccept?.(selectedStarsCount)
    }
    setIsModalOpen(true)
  }, [hasFeedback, onAccept])

  const acceptHandler = useCallback(() => {
    setIsModalOpen(false)
    onAccept?.(starsCount, feedback)
  }, [feedback, onAccept, starsCount])

  const cancelHandler = useCallback(() => {
    setIsModalOpen(false)
    onCancel?.(starsCount)
  }, [onCancel, starsCount])

  const modalContent = (
    <>
      <Text title={feedbackTitle} />
      <Input value={feedback} placeholder={t('feedback')} onChange={setFeedback} />
    </>
  )

  return (
    <Card className={classNames(styles.___, {}, [className])}>
      <VStack align='center' gap='8'>
        <Text title={title} />
        <StarRating size={40} onSelect={onSelectStars} />
      </VStack>

      <BrowserView>
        <Modal isOpen={isModalOpen} lazy onClose={cancelHandler}>
          <VStack gap='32' max>
            {modalContent}
            <HStack gap='16' justify='end' max>
              <Button theme='outline_red' onClick={acceptHandler}>
                {t('close')}
              </Button>
              <Button onClick={cancelHandler}>
                {t('send')}
              </Button>
            </HStack>
          </VStack>
        </Modal>
      </BrowserView>

      <MobileView>
        <Drawer isOpen={isModalOpen} lazy onClose={cancelHandler}>
          <VStack gap='32'>
            {modalContent}
            <Button size='l' fullWidth onClick={acceptHandler}>
              {t('send')}
            </Button>
          </VStack>
        </Drawer>
      </MobileView>
    </Card>
  )
})
