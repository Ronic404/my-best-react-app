import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from '@/shared/ui/deprecated/Button'

import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { useCounterActions } from '../model/slice/counterSlice'

export const Counter: FC = () => {
  const { t } = useTranslation()

  const counterValue = useCounterValue()
  const { add, decrement, increment } = useCounterActions()

  const handleInc = (): void => {
    increment()
  }

  const handleDec = (): void => {
    decrement()
  }

  const handleAddFive = (): void => {
    add(5)
  }

  return (
    <div>
      <h1 data-testid='value-title'>{counterValue}</h1>
      <Button onClick={handleAddFive} data-testid='increment-5-btn'>+5</Button>
      <Button onClick={handleInc} data-testid='increment-btn'>{t('increment')}</Button>
      <Button onClick={handleDec} data-testid='decrement-btn'>{t('decrement')}</Button>
    </div>
  )
}
