import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { ListBox } from '@/shared/ui/redesigned/Popups'
import { ToggleFeatures } from '@/shared/lib/features'
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups'

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

  const listBoxProps = {
    className: classNames('', {}, [className]),
    items: options,
    label: t('currency'),
    value,
    defaultValue: t('currency'),
    readOnly,
    direction: 'top right' as const,
    onChange: onChangeHandler,
  }

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <ListBox {...listBoxProps} />
      }
      off={
        <ListBoxDeprecated {...listBoxProps} />
      }
    />
  )
})
