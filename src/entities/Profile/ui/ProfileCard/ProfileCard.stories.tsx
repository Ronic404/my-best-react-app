import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ProfileCard, IProfileCardProps } from './ProfileCard'

import { Country } from '../../../../entities/Country'
import { Currency } from '../../../../entities/Currency'

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator'

import { Theme } from '@/shared/constants/theme'

import avatar from '@/shared/assets/tests/avatar.jpg'

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
  },
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args: IProfileCardProps) => <ProfileCard {...args} />

const primaryArgs = {
  data: {
    username: 'admin',
    age: 33,
    country: Country.Russia,
    lastname: 'Chubukov',
    first: 'Alex',
    currency: Currency.RUB,
    avatar,
  },
}

export const Primary = Template.bind({})
Primary.args = primaryArgs

export const PrimaryRedesigned = Template.bind({})
PrimaryRedesigned.args = primaryArgs
PrimaryRedesigned.decorators = [
  NewDesignDecorator,
  ThemeDecorator(Theme.DARK),
]

export const WithError = Template.bind({})
WithError.args = {
  error: 'true',
}

export const Loading = Template.bind({})
Primary.args = {
  isLoading: true,
}
