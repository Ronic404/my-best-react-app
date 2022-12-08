import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { ListBox } from '@/shared/ui/Popups/ui/ListBox'

import { Currency } from '../../model/types/currency'

import { classNames } from '@/shared/lib/classNames/classNames'

export interface ICurrencySelectProps {
  className?: string
  value?: Currency
  readOnly?: boolean
  onChange?: (value: Currency) => void
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.EUR, content: Currency.EUR },
]

export const CurrencySelect = memo((props: ICurrencySelectProps) => {
  const { t } = useTranslation('profile')

  const { className, value, readOnly, onChange } = props

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency)
  }, [onChange])

  return (
    <ListBox
      className={classNames('', {}, [className])}
      items={options}
      label={t('currency')}
      value={value}
      defaultValue={t('currency')}
      readOnly={readOnly}
      direction='top right'
      onChange={onChangeHandler}
    />
  )
})
