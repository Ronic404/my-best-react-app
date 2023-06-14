import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Card } from '@/shared/ui/redesigned/Card'
import { Text } from '@/shared/ui/redesigned/Text'
import { Input } from '@/shared/ui/redesigned/Input'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { CountrySelect } from '../../../../entities/Country'
import { CurrencySelect } from '../../../../entities/Currency'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { IProfileCardProps } from '../ProfileCard/ProfileCard'

export const ProfileCardRedesignedError: FC = () => {
  const { t } = useTranslation('profile')

  return (
    <HStack justify='center' max>
      <Text variant='error' title={t('errorLoading')} text={t('update')} align='center' />
    </HStack>
  )
}

export const ProfileCardRedesignedSkeleton: FC = () => {
  return (
    <Card padding='24' max>
      <VStack gap='32'>
        <HStack justify='center' max>
          <Skeleton width={128} height={128} border='100%' />
        </HStack>

        <HStack gap='32' max>
          <VStack gap='16' max>
            <Skeleton width='100%' height={38} />
            <Skeleton width='100%' height={38} />
            <Skeleton width='100%' height={38} />
            <Skeleton width='100%' height={38} />
          </VStack>

          <VStack gap='16' max>
            <Skeleton width='100%' height={38} />
            <Skeleton width='100%' height={38} />
            <Skeleton width='100%' height={38} />
            <Skeleton width='100%' height={38} />
          </VStack>
        </HStack>
      </VStack>
    </Card>
  )
}

export const ProfileCardRedesigned: FC<IProfileCardProps> = ({
  className,
  data,
  readOnly,
  onChangeFirstname,
  onChangeLastname,
  onChangeAge,
  onChangeCity,
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry,
}) => {
  const { t } = useTranslation('profile')

  return (
    <Card
      className={className}
      padding='24'
      max
    >
      <VStack gap='32'>
        {data?.avatar &&
          <HStack justify='center' max>
            <Avatar src={data?.avatar} alt="" size={128} />
          </HStack>
        }
        <HStack gap='24' max>
          <VStack gap='16' max>
            <Input
              value={data?.first}
              label={t('yourName')}
              onChange={onChangeFirstname}
              readOnly={readOnly}
              data-testid='ProfileCard.firstname'
            />
            <Input
              value={data?.lastname}
              label={t('yourLastname')}
              onChange={onChangeLastname}
              readOnly={readOnly}
              data-testid='ProfileCard.lastname'
            />
            <Input
              value={data?.age}
              label={t('yourAge')}
              onChange={onChangeAge}
              readOnly={readOnly}
            />
            <Input
              value={data?.city}
              label={t('yourCity')}
              onChange={onChangeCity}
              readOnly={readOnly}
            />
          </VStack>

          <VStack gap='16' max>
            <Input
              value={data?.username}
              label={t('yourUsername')}
              onChange={onChangeUsername}
              readOnly={readOnly}
            />
            <Input
              value={data?.avatar}
              label={t('yourAvatar')}
              onChange={onChangeAvatar}
              readOnly={readOnly}
            />
            <CurrencySelect
              value={data?.currency}
              onChange={onChangeCurrency}
              readOnly={readOnly}
            />
            <CountrySelect
              value={data?.country}
              onChange={onChangeCountry}
              readOnly={readOnly}
            />
          </VStack>
        </HStack>
      </VStack>
    </Card>
  )
}
