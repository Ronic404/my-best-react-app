import { ComponentStory, ComponentMeta } from '@storybook/react'

import { CurrencySelect, ICurrencySelectProps } from './CurrencySelect'

export default {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
  argTypes: {
  },
} as ComponentMeta<typeof CurrencySelect>

const Template: ComponentStory<typeof CurrencySelect> = (args: ICurrencySelectProps) => <CurrencySelect {...args} />

export const Primary = Template.bind({})
Primary.args = {}
