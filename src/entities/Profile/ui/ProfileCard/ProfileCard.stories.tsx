import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ProfileCard, IProfileCardProps } from './ProfileCard'

import { Country } from '../../../../entities/Country'
import { Currency } from '../../../../entities/Currency'

import avatar from '@/shared/assets/tests/avatar.jpg'

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
  },
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args: IProfileCardProps) => <ProfileCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
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

export const WithError = Template.bind({})
WithError.args = {
  error: 'true',
}

export const Loading = Template.bind({})
Primary.args = {
  isLoading: true,
}
