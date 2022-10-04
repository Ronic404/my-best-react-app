import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import { Button } from 'shared/ui/Button'

import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'

export const Counter: FC = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const counterValue = useSelector(getCounterValue)

  const increment = (): void => {
    dispatch(counterActions.increment())
  }

  const decrement = (): void => {
    dispatch(counterActions.decrement())
  }

  return (
    <div>
      <h1 data-testid='value-title'>{counterValue}</h1>
      <Button onClick={increment} data-testid='increment-btn'>{t('increment')}</Button>
      <Button onClick={decrement} data-testid='decrement-btn'>{t('decrement')}</Button>
    </div>
  )
}
