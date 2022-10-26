import { ComponentStory, ComponentMeta } from '@storybook/react'

import { CountrySelect, ICountrySelectProps } from './CountrySelect'

export default {
  title: 'entities/CountrySelect',
  component: CountrySelect,
  argTypes: {
  },
} as ComponentMeta<typeof CountrySelect>

const Template: ComponentStory<typeof CountrySelect> = (args: ICountrySelectProps) => <CountrySelect {...args} />

export const Primary = Template.bind({})
Primary.args = {}
