import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BrowserView, MobileView } from 'react-device-detect'

import { Card } from '@/shared/ui/redesigned/Card'
import { Text } from '@/shared/ui/redesigned/Text'
import { Input } from '@/shared/ui/redesigned/Input'
import { Modal } from '@/shared/ui/redesigned/Modal'
import { Drawer } from '@/shared/ui/redesigned/Drawer'
import { Button } from '@/shared/ui/redesigned/Button'
import { StarRating } from '@/shared/ui/deprecated/StarRating'
import { ToggleFeatures } from '@/shared/lib/features'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card'
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input'
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button'

export interface IRatingCardProps {
  className?: string
  title?: string | null
  feedbackTitle?: string | null
  hasFeedback?: boolean
  rate?: number
  onCancel?: (starsCount: number) => void
  onAccept?: (starsCount: number, feedback?: string) => void
}

export const RatingCard = memo((props: IRatingCardProps) => {
  const {
    className,
    title,
    feedbackTitle,
    hasFeedback,
    rate = 0,
    onCancel,
    onAccept,
  } = props
  const { t } = useTranslation()

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [starsCount, setStarsCount] = useState<number>(rate)
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
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <>
          <Text title={feedbackTitle} />
          <Input
            value={feedback}
            placeholder={t('feedback')}
            onChange={setFeedback}
            data-testid='RatingCard.Input'
          />
        </>
      }
      off={
        <>
          <TextDeprecated title={feedbackTitle} />
          <InputDeprecated
            value={feedback}
            placeholder={t('feedback')}
            onChange={setFeedback}
            data-testid='RatingCard.Input'
          />
        </>
      }
    />
  )

  const content = (
    <>
      <VStack align='center' gap='8' max>
        <ToggleFeatures
          feature='isAppRedesigned'
          on={
            <>
              <Text title={starsCount ? t('thanksForRating') : title} />
              <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
            </>
          }
          off={
            <>
              <TextDeprecated title={starsCount ? t('thanksForRating') : title} />
              <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
            </>
          }
        />
      </VStack>

      <BrowserView>
        <Modal isOpen={isModalOpen} lazy onClose={cancelHandler}>
          <VStack gap='32' max>
            {modalContent}
            <ToggleFeatures
              feature='isAppRedesigned'
              on={
                <HStack gap='16' justify='end' max>
                  <Button onClick={cancelHandler} data-testid='RatingCard.Close'>
                    {t('close')}
                  </Button>
                  <Button onClick={acceptHandler} data-testid='RatingCard.Send'>
                    {t('send')}
                  </Button>
                </HStack>
              }
              off={
                <HStack gap='16' justify='end' max>
                  <ButtonDeprecated theme='outline_red' onClick={cancelHandler} data-testid='RatingCard.Close'>
                    {t('close')}
                  </ButtonDeprecated>
                  <ButtonDeprecated onClick={acceptHandler} data-testid='RatingCard.Send'>
                    {t('send')}
                  </ButtonDeprecated>
                </HStack>
              }
            />
          </VStack>
        </Modal>
      </BrowserView>

      <MobileView>
        <Drawer isOpen={isModalOpen} lazy onClose={cancelHandler}>
          <VStack gap='32'>
            {modalContent}
            <ToggleFeatures
              feature='isAppRedesigned'
              on={
                <Button size='l' fullWidth onClick={acceptHandler}>
                  {t('send')}
                </Button>
              }
              off={
                <ButtonDeprecated size='l' fullWidth onClick={acceptHandler}>
                  {t('send')}
                </ButtonDeprecated>
              }
            />
          </VStack>
        </Drawer>
      </MobileView>
    </>
  )

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={<Card padding='24' border='partial' max>{content}</Card>}
      off={
        <CardDeprecated className={className} max data-testid='RatingCard'>
          {content}
        </CardDeprecated>
      }
    />
  )
})
