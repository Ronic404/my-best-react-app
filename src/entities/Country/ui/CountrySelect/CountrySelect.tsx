import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { ListBox } from 'shared/ui/Popups/ui/ListBox'

import { Country } from '../../model/types/country'

import { classNames } from 'shared/lib/classNames/classNames'

export interface ICountrySelectProps {
  className?: string
  value?: Country
  readOnly?: boolean
  onChange?: (value: Country) => void
}

const options = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Ukraine, content: Country.Ukraine },
  { value: Country.Kazahstan, content: Country.Kazahstan },
]

export const CountrySelect = memo((props: ICountrySelectProps) => {
  const { t } = useTranslation('profile')

  const { className, value, readOnly, onChange } = props

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country)
  }, [onChange])

  return (
    <ListBox
      className={classNames('', {}, [className])}
      items={options}
      label={t('country')}
      value={value}
      defaultValue={t('country')}
      readOnly={readOnly}
      direction='top right'
      onChange={onChangeHandler}
    />
  )
})
