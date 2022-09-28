import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import { Button, IButtonProps } from './Button'

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Normal'
} as IButtonProps

export const Clear = Template.bind({})
Clear.args = {
  children: 'Clear',
  theme: 'clear'
} as IButtonProps

export const Outline = Template.bind({})
Outline.args = {
  children: 'Outline',
  theme: 'outline'
} as IButtonProps

export const OutlineDark = Template.bind({})
OutlineDark.args = {
  children: 'OutlineDark',
  theme: 'outline'
} as IButtonProps
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
