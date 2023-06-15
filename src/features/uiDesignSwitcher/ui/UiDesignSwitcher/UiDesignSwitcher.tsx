import { memo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { Text } from '@/shared/ui/redesigned/Text'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { ListBox } from '@/shared/ui/redesigned/Popups'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getUserAuthData } from '@/entities/User'
import { getFeatureFlag, updateFeatureFlag } from '@/shared/lib/features'

interface IUiDesignSwitcherProps {
  className?: string
}

export const UiDesignSwitcher = memo(({ className }: IUiDesignSwitcherProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const isAppRedesigned = getFeatureFlag('isAppRedesigned')
  const authData = useSelector(getUserAuthData)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const items = [
    {
      content: t('new'),
      value: 'new',
    },
    {
      content: t('old'),
      value: 'old',
    },
  ]

  const onChange = async (value: string): Promise<void> => {
    if (authData) {
      setIsLoading(true)
      await dispatch(updateFeatureFlag({
        userId: authData.id,
        newFeatures: {
          isAppRedesigned: value === 'new',
        },
      })).unwrap()
      setIsLoading(false)
    }
  }

  return (
    <HStack>
      <Text text={t('interface')} />
      {isLoading && <Skeleton width={100} height={40} />}
      {!isLoading &&
        <ListBox
          className={className}
          value={isAppRedesigned ? 'new' : 'old'}
          items={items}
          onChange={onChange}
        />
      }
    </HStack>
  )
})
