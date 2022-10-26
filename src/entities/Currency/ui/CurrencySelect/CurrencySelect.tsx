import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { Select } from 'shared/ui/Select'
import { classNames } from 'shared/lib/classNames/classNames'

import { Currency } from '../../model/types/currency'

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
    <Select
      className={classNames('', {}, [className])}
      label={t('currency')}
      options={options}
      value={value}
      readOnly={readOnly}
      onChange={onChangeHandler}
    />
  )
})
